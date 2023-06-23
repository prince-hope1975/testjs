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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    i: ctc2,
    scale: ctc2
    });
  const ctc5 = stdlib.T_Object({
    i: ctc4,
    sign: ctc3
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Object({
    claimed: ctc2,
    rewards: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Data({
    None: ctc6,
    Some: ctc9
    });
  const ctc12 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc11;
  
  const map2_ctc = ctc12;
  
  const map3_ctc = ctc12;
  
  const map4_ctc = ctc12;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async (_v3400 ) => {
          const v3400 = stdlib.protect(ctc0, _v3400, null);
        
        const v3401 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v3400, ctc6), null);
        const v3402 = {
          None: 0,
          Some: 1
          }[v3401[0]];
        const v3403 = stdlib.eq(v3402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3403;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async () => {
        
        
        return v3369;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async (_v3416, _v3417 ) => {
          const v3416 = stdlib.protect(ctc0, _v3416, null);
          const v3417 = stdlib.protect(ctc7, _v3417, null);
        
        const v3418 = [v3416, v3417];
        const v3419 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v3418, ctc9), null);
        const v3420 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3421 = stdlib.fromSome(v3419, v3420);
        const v3422 = v3421.claimed;
        
        return v3422;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async (_v3404 ) => {
          const v3404 = stdlib.protect(ctc0, _v3404, null);
        
        const v3405 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v3404, ctc6), null);
        const v3406 = {
          None: 0,
          Some: 1
          }[v3405[0]];
        const v3407 = stdlib.eq(v3406, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3407;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async () => {
        
        
        return v3394;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async () => {
        
        
        return v3393;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async () => {
        
        
        return v3395;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async () => {
        
        
        return v3396;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async (_v3397 ) => {
          const v3397 = stdlib.protect(ctc0, _v3397, null);
        
        const v3398 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3397, ctc2), null);
        const v3399 = stdlib.fromSome(v3398, stdlib.checkedBigNumberify('./index.rsh:101:60:decimal', stdlib.UInt_max, '0'));
        
        return v3399;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = svs;
      return (await ((async (_v3409, _v3410 ) => {
          const v3409 = stdlib.protect(ctc0, _v3409, null);
          const v3410 = stdlib.protect(ctc7, _v3410, null);
        
        const v3411 = [v3409, v3410];
        const v3412 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v3411, ctc9), null);
        const v3413 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3414 = stdlib.fromSome(v3412, v3413);
        const v3415 = v3414.rewards;
        
        return v3415;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        Admins: {
          decode: Info_Admins,
          dom: [ctc0],
          rng: ctc3
          },
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc2
          },
        claimed: {
          decode: Info_claimed,
          dom: [ctc0, ctc7],
          rng: ctc2
          },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc3
          },
        totalAllocatedFunds: {
          decode: Info_totalAllocatedFunds,
          dom: [],
          rng: ctc2
          },
        totalAmountClaimed: {
          decode: Info_totalAmountClaimed,
          dom: [],
          rng: ctc2
          },
        totalClaimed: {
          decode: Info_totalClaimed,
          dom: [],
          rng: ctc2
          },
        totalOptedIn: {
          decode: Info_totalOptedIn,
          dom: [],
          rng: ctc2
          },
        totalRewards: {
          decode: Info_totalRewards,
          dom: [ctc0],
          rng: ctc2
          },
        userReward: {
          decode: Info_userReward,
          dom: [ctc0, ctc7],
          rng: ctc2
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc5, ctc2, ctc2, ctc2, ctc2]
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc11,
    Admin_deposit0_181: ctc12,
    Admin_editUserReward0_181: ctc13,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc11,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3491 = ctc.selfAddress();
  const v3493 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:197:34:application call to [unknown function] (defined at: ./index.rsh:197:34:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_addAdmin0_181" (defined at: ./index.rsh:197:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v3496 = stdlib.addressEq(v3491, v3356);
  const v3497 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3491, ctc0), null);
  const v3498 = {
    None: 0,
    Some: 1
    }[v3497[0]];
  const v3499 = stdlib.eq(v3498, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3500 = v3496 ? true : v3499;
  stdlib.assert(v3500, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:34:application call to [unknown function] (defined at: ./index.rsh:197:34:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_addAdmin0_181" (defined at: ./index.rsh:197:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v3507 = ['Admin_addAdmin0_181', v3493];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3507],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:203:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3620, ctc0), null);
          ;
          const v3687 = v3624[stdlib.checkedBigNumberify('./index.rsh:197:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v3687, ctc0, null);
          const v3696 = null;
          const v3697 = await txn1.getOutput('Admin_addAdmin', 'v3696', ctc0, v3696);
          
          const v3710 = {
            bal: v3390,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v3393,
            total_rewards_allcoated: v3394,
            total_users_claim: v3395,
            usersNo: v3396
            };
          const v8428 = v3369;
          const v8429 = v3710.keepGoing;
          if (v8429) {
            const v8430 = v3710.bal;
            const v8432 = v3710.percent;
            const v8433 = v3710.total_amount_claimed;
            const v8434 = v3710.total_rewards_allcoated;
            const v8435 = v3710.total_users_claim;
            const v8436 = v3710.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8441 = stdlib.sub(v3369, v3369);
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            const v8442 = (stdlib.le(await ctc.getBalance(), v8441) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8441));
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      undefined /* setApiDetails */;
      const v3630 = stdlib.addressEq(v3620, v3356);
      const v3631 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3620, ctc0), null);
      const v3632 = {
        None: 0,
        Some: 1
        }[v3631[0]];
      const v3633 = stdlib.eq(v3632, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3634 = v3630 ? true : v3633;
      stdlib.assert(v3634, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:34:application call to [unknown function] (defined at: ./index.rsh:197:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:197:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v3687 = v3624[stdlib.checkedBigNumberify('./index.rsh:197:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v3687, ctc0, null);
      const v3696 = null;
      const v3697 = await txn1.getOutput('Admin_addAdmin', 'v3696', ctc0, v3696);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v3624, v3697), {
          at: './index.rsh:197:11:application',
          fs: ['at ./index.rsh:197:11:application call to [unknown function] (defined at: ./index.rsh:197:11:function exp)', 'at ./index.rsh:206:14:application call to "ret" (defined at: ./index.rsh:204:15:function exp)', 'at ./index.rsh:204:15:application call to [unknown function] (defined at: ./index.rsh:204:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v3710 = {
        bal: v3390,
        keepGoing: v3391,
        percent: v3392,
        total_amount_claimed: v3393,
        total_rewards_allcoated: v3394,
        total_users_claim: v3395,
        usersNo: v3396
        };
      const v8428 = v3369;
      const v8429 = v3710.keepGoing;
      if (v8429) {
        const v8430 = v3710.bal;
        const v8432 = v3710.percent;
        const v8433 = v3710.total_amount_claimed;
        const v8434 = v3710.total_rewards_allcoated;
        const v8435 = v3710.total_users_claim;
        const v8436 = v3710.usersNo;
        return;
        }
      else {
        const v8441 = stdlib.sub(v3369, v3369);
        ;
        const v8442 = (stdlib.le(await ctc.getBalance(), v8441) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8441));
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc11,
    Admin_editUserReward0_181: ctc13,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3423 = ctc.selfAddress();
  const v3425 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:125:32:application call to [unknown function] (defined at: ./index.rsh:125:32:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_deposit0_181" (defined at: ./index.rsh:125:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v3426 = v3425[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3428 = stdlib.addressEq(v3423, v3356);
  const v3429 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3423, ctc0), null);
  const v3430 = {
    None: 0,
    Some: 1
    }[v3429[0]];
  const v3431 = stdlib.eq(v3430, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3432 = v3428 ? true : v3431;
  stdlib.assert(v3432, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:125:32:application call to [unknown function] (defined at: ./index.rsh:125:32:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_deposit0_181" (defined at: ./index.rsh:125:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v3439 = ['Admin_deposit0_181', v3425];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3439],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3426, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v4008 = v3995[stdlib.checkedBigNumberify('./index.rsh:125:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3620, ctc0), null);
          const v4056 = stdlib.add(v3369, v4008);
          sim_r.txns.push({
            amt: v4008,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4092 = null;
          const v4093 = await txn1.getOutput('Admin_deposit', 'v4092', ctc0, v4092);
          
          const v4106 = stdlib.safeAdd(v3390, v4008);
          const v4107 = {
            bal: v4106,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v3393,
            total_rewards_allcoated: v3394,
            total_users_claim: v3395,
            usersNo: v3396
            };
          const v8598 = v4056;
          const v8599 = v4107.keepGoing;
          if (v8599) {
            const v8600 = v4107.bal;
            const v8602 = v4107.percent;
            const v8603 = v4107.total_amount_claimed;
            const v8604 = v4107.total_rewards_allcoated;
            const v8605 = v4107.total_users_claim;
            const v8606 = v4107.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8611 = stdlib.sub(v4056, v4056);
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            const v8612 = (stdlib.le(await ctc.getBalance(), v8611) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8611));
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      undefined /* setApiDetails */;
      const v4008 = v3995[stdlib.checkedBigNumberify('./index.rsh:125:10:spread', stdlib.UInt_max, '0')];
      const v4009 = stdlib.addressEq(v3620, v3356);
      const v4010 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3620, ctc0), null);
      const v4011 = {
        None: 0,
        Some: 1
        }[v4010[0]];
      const v4012 = stdlib.eq(v4011, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4013 = v4009 ? true : v4012;
      stdlib.assert(v4013, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:125:32:application call to [unknown function] (defined at: ./index.rsh:125:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:125:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v4056 = stdlib.add(v3369, v4008);
      ;
      const v4092 = null;
      const v4093 = await txn1.getOutput('Admin_deposit', 'v4092', ctc0, v4092);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v3995, v4093), {
          at: './index.rsh:125:11:application',
          fs: ['at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:11:function exp)', 'at ./index.rsh:130:14:application call to "ret" (defined at: ./index.rsh:129:15:function exp)', 'at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v4106 = stdlib.safeAdd(v3390, v4008);
      const v4107 = {
        bal: v4106,
        keepGoing: v3391,
        percent: v3392,
        total_amount_claimed: v3393,
        total_rewards_allcoated: v3394,
        total_users_claim: v3395,
        usersNo: v3396
        };
      const v8598 = v4056;
      const v8599 = v4107.keepGoing;
      if (v8599) {
        const v8600 = v4107.bal;
        const v8602 = v4107.percent;
        const v8603 = v4107.total_amount_claimed;
        const v8604 = v4107.total_rewards_allcoated;
        const v8605 = v4107.total_users_claim;
        const v8606 = v4107.usersNo;
        return;
        }
      else {
        const v8611 = stdlib.sub(v4056, v4056);
        ;
        const v8612 = (stdlib.le(await ctc.getBalance(), v8611) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8611));
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc13,
    Admin_editUserReward0_181: ctc11,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3466 = ctc.selfAddress();
  const v3468 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:185:45:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_editUserReward0_181" (defined at: ./index.rsh:185:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v3470 = v3468[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3473 = stdlib.addressEq(v3466, v3356);
  const v3474 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3466, ctc0), null);
  const v3475 = {
    None: 0,
    Some: 1
    }[v3474[0]];
  const v3476 = stdlib.eq(v3475, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3477 = v3473 ? true : v3476;
  stdlib.assert(v3477, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:185:45:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_editUserReward0_181" (defined at: ./index.rsh:185:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v3480 = stdlib.le(v3470, v3369);
  stdlib.assert(v3480, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:185:45:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_editUserReward0_181" (defined at: ./index.rsh:185:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v3489 = ['Admin_editUserReward0_181', v3468];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3489],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:189:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v4388 = v4366[stdlib.checkedBigNumberify('./index.rsh:185:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3620, ctc0), null);
          ;
          const v4481 = v4366[stdlib.checkedBigNumberify('./index.rsh:185:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v4481, ctc1, v4388);
          const v4494 = null;
          const v4495 = await txn1.getOutput('Admin_editUserReward', 'v4494', ctc0, v4494);
          
          const v4509 = {
            bal: v3390,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v3393,
            total_rewards_allcoated: v3394,
            total_users_claim: v3395,
            usersNo: v3396
            };
          const v8768 = v3369;
          const v8769 = v4509.keepGoing;
          if (v8769) {
            const v8770 = v4509.bal;
            const v8772 = v4509.percent;
            const v8773 = v4509.total_amount_claimed;
            const v8774 = v4509.total_rewards_allcoated;
            const v8775 = v4509.total_users_claim;
            const v8776 = v4509.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8781 = stdlib.sub(v3369, v3369);
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            const v8782 = (stdlib.le(await ctc.getBalance(), v8781) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8781));
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      undefined /* setApiDetails */;
      const v4388 = v4366[stdlib.checkedBigNumberify('./index.rsh:185:10:spread', stdlib.UInt_max, '1')];
      const v4389 = stdlib.addressEq(v3620, v3356);
      const v4390 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3620, ctc0), null);
      const v4391 = {
        None: 0,
        Some: 1
        }[v4390[0]];
      const v4392 = stdlib.eq(v4391, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4393 = v4389 ? true : v4392;
      stdlib.assert(v4393, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:185:45:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v4396 = stdlib.le(v4388, v3369);
      stdlib.assert(v4396, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:185:45:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      const v4481 = v4366[stdlib.checkedBigNumberify('./index.rsh:185:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v4481, ctc1, v4388);
      const v4494 = null;
      const v4495 = await txn1.getOutput('Admin_editUserReward', 'v4494', ctc0, v4494);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v4366, v4495), {
          at: './index.rsh:185:11:application',
          fs: ['at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:11:function exp)', 'at ./index.rsh:192:14:application call to "ret" (defined at: ./index.rsh:190:15:function exp)', 'at ./index.rsh:190:15:application call to [unknown function] (defined at: ./index.rsh:190:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v4509 = {
        bal: v3390,
        keepGoing: v3391,
        percent: v3392,
        total_amount_claimed: v3393,
        total_rewards_allcoated: v3394,
        total_users_claim: v3395,
        usersNo: v3396
        };
      const v8768 = v3369;
      const v8769 = v4509.keepGoing;
      if (v8769) {
        const v8770 = v4509.bal;
        const v8772 = v4509.percent;
        const v8773 = v4509.total_amount_claimed;
        const v8774 = v4509.total_rewards_allcoated;
        const v8775 = v4509.total_users_claim;
        const v8776 = v4509.usersNo;
        return;
        }
      else {
        const v8781 = stdlib.sub(v3369, v3369);
        ;
        const v8782 = (stdlib.le(await ctc.getBalance(), v8781) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8781));
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc13,
    Admin_editUserReward0_181: ctc14,
    Admin_endContractAndTransfer0_181: ctc11,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc11
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3554 = ctc.selfAddress();
  const v3556 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:322:44:application call to [unknown function] (defined at: ./index.rsh:322:44:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_endContractAndTransfer0_181" (defined at: ./index.rsh:322:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v3557 = stdlib.addressEq(v3356, v3554);
  stdlib.assert(v3557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:323:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:322:44:application call to [unknown function] (defined at: ./index.rsh:322:44:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_endContractAndTransfer0_181" (defined at: ./index.rsh:322:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v3562 = ['Admin_endContractAndTransfer0_181', v3556];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3562],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:325:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v4885 = null;
          const v4886 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4885', ctc0, v4885);
          
          const v4898 = {
            bal: v3390,
            keepGoing: false,
            percent: v3392,
            total_amount_claimed: v3393,
            total_rewards_allcoated: v3394,
            total_users_claim: v3395,
            usersNo: v3396
            };
          const v8938 = v3369;
          const v8939 = v4898.keepGoing;
          if (v8939) {
            const v8940 = v4898.bal;
            const v8942 = v4898.percent;
            const v8943 = v4898.total_amount_claimed;
            const v8944 = v4898.total_rewards_allcoated;
            const v8945 = v4898.total_users_claim;
            const v8946 = v4898.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8951 = stdlib.sub(v3369, v3369);
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            const v8952 = (stdlib.le(await ctc.getBalance(), v8951) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8951));
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      undefined /* setApiDetails */;
      const v4770 = stdlib.addressEq(v3356, v3620);
      stdlib.assert(v4770, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:323:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:322:44:application call to [unknown function] (defined at: ./index.rsh:322:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:322:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v4885 = null;
      const v4886 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4885', ctc0, v4885);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v4737, v4886), {
          at: './index.rsh:322:11:application',
          fs: ['at ./index.rsh:322:11:application call to [unknown function] (defined at: ./index.rsh:322:11:function exp)', 'at ./index.rsh:327:14:application call to "ret" (defined at: ./index.rsh:326:15:function exp)', 'at ./index.rsh:326:15:application call to [unknown function] (defined at: ./index.rsh:326:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v4898 = {
        bal: v3390,
        keepGoing: false,
        percent: v3392,
        total_amount_claimed: v3393,
        total_rewards_allcoated: v3394,
        total_users_claim: v3395,
        usersNo: v3396
        };
      const v8938 = v3369;
      const v8939 = v4898.keepGoing;
      if (v8939) {
        const v8940 = v4898.bal;
        const v8942 = v4898.percent;
        const v8943 = v4898.total_amount_claimed;
        const v8944 = v4898.total_rewards_allcoated;
        const v8945 = v4898.total_users_claim;
        const v8946 = v4898.usersNo;
        return;
        }
      else {
        const v8951 = stdlib.sub(v3369, v3369);
        ;
        const v8952 = (stdlib.le(await ctc.getBalance(), v8951) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8951));
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc11,
    Admin_deposit0_181: ctc12,
    Admin_editUserReward0_181: ctc13,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc11,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3509 = ctc.selfAddress();
  const v3511 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:211:37:application call to [unknown function] (defined at: ./index.rsh:211:37:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_revokeAdmin0_181" (defined at: ./index.rsh:211:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v3514 = stdlib.addressEq(v3509, v3356);
  stdlib.assert(v3514, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:37:application call to [unknown function] (defined at: ./index.rsh:211:37:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_revokeAdmin0_181" (defined at: ./index.rsh:211:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v3521 = ['Admin_revokeAdmin0_181', v3511];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3521],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:214:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v5272 = v5108[stdlib.checkedBigNumberify('./index.rsh:211:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v5272, ctc0, undefined /* Nothing */);
          const v5277 = null;
          const v5278 = await txn1.getOutput('Admin_revokeAdmin', 'v5277', ctc0, v5277);
          
          const v5291 = {
            bal: v3390,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v3393,
            total_rewards_allcoated: v3394,
            total_users_claim: v3395,
            usersNo: v3396
            };
          const v9108 = v3369;
          const v9109 = v5291.keepGoing;
          if (v9109) {
            const v9110 = v5291.bal;
            const v9112 = v5291.percent;
            const v9113 = v5291.total_amount_claimed;
            const v9114 = v5291.total_rewards_allcoated;
            const v9115 = v5291.total_users_claim;
            const v9116 = v5291.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9121 = stdlib.sub(v3369, v3369);
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            const v9122 = (stdlib.le(await ctc.getBalance(), v9121) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9121));
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      undefined /* setApiDetails */;
      const v5145 = stdlib.addressEq(v3620, v3356);
      stdlib.assert(v5145, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:37:application call to [unknown function] (defined at: ./index.rsh:211:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:211:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v5272 = v5108[stdlib.checkedBigNumberify('./index.rsh:211:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v5272, ctc0, undefined /* Nothing */);
      const v5277 = null;
      const v5278 = await txn1.getOutput('Admin_revokeAdmin', 'v5277', ctc0, v5277);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v5108, v5278), {
          at: './index.rsh:211:11:application',
          fs: ['at ./index.rsh:211:11:application call to [unknown function] (defined at: ./index.rsh:211:11:function exp)', 'at ./index.rsh:217:14:application call to "ret" (defined at: ./index.rsh:215:15:function exp)', 'at ./index.rsh:215:15:application call to [unknown function] (defined at: ./index.rsh:215:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5291 = {
        bal: v3390,
        keepGoing: v3391,
        percent: v3392,
        total_amount_claimed: v3393,
        total_rewards_allcoated: v3394,
        total_users_claim: v3395,
        usersNo: v3396
        };
      const v9108 = v3369;
      const v9109 = v5291.keepGoing;
      if (v9109) {
        const v9110 = v5291.bal;
        const v9112 = v5291.percent;
        const v9113 = v5291.total_amount_claimed;
        const v9114 = v5291.total_rewards_allcoated;
        const v9115 = v5291.total_users_claim;
        const v9116 = v5291.usersNo;
        return;
        }
      else {
        const v9121 = stdlib.sub(v3369, v3369);
        ;
        const v9122 = (stdlib.le(await ctc.getBalance(), v9121) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9121));
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Tuple([ctc6, ctc11, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc13,
    Admin_deposit0_181: ctc14,
    Admin_editUserReward0_181: ctc15,
    Admin_endContractAndTransfer0_181: ctc16,
    Admin_revokeAdmin0_181: ctc13,
    Admin_setReward0_181: ctc12,
    User_claim0_181: ctc17,
    User_optin0_181: ctc16
    });
  const ctc19 = stdlib.T_Tuple([ctc6, ctc11]);
  
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3443 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:138:45:application call to [unknown function] (defined at: ./index.rsh:138:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_setReward0_181" (defined at: ./index.rsh:138:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v3444 = v3443[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3446 = v3443[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3450 = stdlib.gt(v3446, v3390);
  const v3451 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v3444, ctc0), null);
  const v3452 = {
    None: 0,
    Some: 1
    }[v3451[0]];
  const v3453 = stdlib.eq(v3452, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3453, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:138:45:application call to [unknown function] (defined at: ./index.rsh:138:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_setReward0_181" (defined at: ./index.rsh:138:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v3464 = ['Admin_setReward0_181', v3443];
  
  const v3608 = v3450 ? v3446 : stdlib.checkedBigNumberify('./index.rsh:144:30:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3464],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3608, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v5519 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '0')];
          const v5521 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '2')];
          const v5522 = stdlib.gt(v5521, v3390);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v5519, ctc0), null);
          const v5527 = v5522 ? v5521 : stdlib.checkedBigNumberify('./index.rsh:144:30:decimal', stdlib.UInt_max, '0');
          const v5540 = stdlib.add(v3369, v5527);
          sim_r.txns.push({
            amt: v5527,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5666 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '1')];
          const v5676 = [v5519, v5666];
          const v5677 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v5676, ctc3), null);
          const v5678 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5679 = stdlib.fromSome(v5677, v5678);
          const v5681 = v5679.claimed;
          const v5682 = v5679.rewards;
          const v5684 = stdlib.safeAdd(v5682, v5521);
          const v5685 = {
            claimed: v5681,
            rewards: v5684
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v5676, ctc3, v5685);
          const v5686 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5519, ctc1), null);
          const v5687 = stdlib.fromSome(v5686, stdlib.checkedBigNumberify('./index.rsh:154:60:decimal', stdlib.UInt_max, '0'));
          const v5691 = stdlib.safeAdd(v5687, v5521);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5519, ctc1, v5691);
          const v5692 = true;
          const v5693 = await txn1.getOutput('Admin_setReward', 'v5692', ctc8, v5692);
          
          let v5708;
          if (v5522) {
            const v5709 = stdlib.safeAdd(v3390, v5521);
            v5708 = v5709;
            }
          else {
            v5708 = v3390;
            }
          const v5710 = {
            bal: v5708,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v3393,
            total_rewards_allcoated: v3394,
            total_users_claim: v3395,
            usersNo: v3396
            };
          const v9278 = v5540;
          const v9279 = v5710.keepGoing;
          if (v9279) {
            const v9280 = v5710.bal;
            const v9282 = v5710.percent;
            const v9283 = v5710.total_amount_claimed;
            const v9284 = v5710.total_rewards_allcoated;
            const v9285 = v5710.total_users_claim;
            const v9286 = v5710.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9291 = stdlib.sub(v5540, v5540);
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            const v9292 = (stdlib.le(await ctc.getBalance(), v9291) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9291));
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      undefined /* setApiDetails */;
      const v5519 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '0')];
      const v5521 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '2')];
      const v5522 = stdlib.gt(v5521, v3390);
      const v5523 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v5519, ctc0), null);
      const v5524 = {
        None: 0,
        Some: 1
        }[v5523[0]];
      const v5525 = stdlib.eq(v5524, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5525, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:138:45:application call to [unknown function] (defined at: ./index.rsh:138:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:138:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v5527 = v5522 ? v5521 : stdlib.checkedBigNumberify('./index.rsh:144:30:decimal', stdlib.UInt_max, '0');
      const v5540 = stdlib.add(v3369, v5527);
      ;
      const v5666 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '1')];
      const v5676 = [v5519, v5666];
      const v5677 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v5676, ctc3), null);
      const v5678 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5679 = stdlib.fromSome(v5677, v5678);
      const v5681 = v5679.claimed;
      const v5682 = v5679.rewards;
      const v5684 = stdlib.safeAdd(v5682, v5521);
      const v5685 = {
        claimed: v5681,
        rewards: v5684
        };
      await stdlib.mapSet(map1, ctc19, v5676, ctc3, v5685);
      const v5686 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5519, ctc1), null);
      const v5687 = stdlib.fromSome(v5686, stdlib.checkedBigNumberify('./index.rsh:154:60:decimal', stdlib.UInt_max, '0'));
      const v5691 = stdlib.safeAdd(v5687, v5521);
      await stdlib.mapSet(map0, ctc6, v5519, ctc1, v5691);
      const v5692 = true;
      const v5693 = await txn1.getOutput('Admin_setReward', 'v5692', ctc8, v5692);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v5479, v5693), {
          at: './index.rsh:138:11:application',
          fs: ['at ./index.rsh:138:11:application call to [unknown function] (defined at: ./index.rsh:138:11:function exp)', 'at ./index.rsh:157:16:application call to "ret" (defined at: ./index.rsh:145:15:function exp)', 'at ./index.rsh:145:15:application call to [unknown function] (defined at: ./index.rsh:145:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      let v5708;
      if (v5522) {
        const v5709 = stdlib.safeAdd(v3390, v5521);
        v5708 = v5709;
        }
      else {
        v5708 = v3390;
        }
      const v5710 = {
        bal: v5708,
        keepGoing: v3391,
        percent: v3392,
        total_amount_claimed: v3393,
        total_rewards_allcoated: v3394,
        total_users_claim: v3395,
        usersNo: v3396
        };
      const v9278 = v5540;
      const v9279 = v5710.keepGoing;
      if (v9279) {
        const v9280 = v5710.bal;
        const v9282 = v5710.percent;
        const v9283 = v5710.total_amount_claimed;
        const v9284 = v5710.total_rewards_allcoated;
        const v9285 = v5710.total_users_claim;
        const v9286 = v5710.usersNo;
        return;
        }
      else {
        const v9291 = stdlib.sub(v5540, v5540);
        ;
        const v9292 = (stdlib.le(await ctc.getBalance(), v9291) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9291));
        ;
        return;
        }
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
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
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Tuple([ctc7, ctc12, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc12]);
  const ctc15 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc8,
    Admin_deposit0_181: ctc9,
    Admin_editUserReward0_181: ctc10,
    Admin_endContractAndTransfer0_181: ctc11,
    Admin_revokeAdmin0_181: ctc8,
    Admin_setReward0_181: ctc13,
    User_claim0_181: ctc14,
    User_optin0_181: ctc11
    });
  const ctc16 = stdlib.T_Tuple([ctc7, ctc12]);
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
  
  
  const v3353 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v3353],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3357], secs: v3359, time: v3358, didSend: v27, from: v3356 } = txn1;
      
      ;
      const v3360 = await ctc.getContractInfo();
      
      const v3362 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v3363 = {
        i: v3362,
        sign: true
        };
      const v3364 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v3363,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3365 = v3364;
      const v3366 = v3358;
      const v3369 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v3382 = v3365.keepGoing;
        
        return v3382;})()) {
        const v3390 = v3365.bal;
        const v3391 = v3365.keepGoing;
        const v3392 = v3365.percent;
        const v3393 = v3365.total_amount_claimed;
        const v3394 = v3365.total_rewards_allcoated;
        const v3395 = v3365.total_users_claim;
        const v3396 = v3365.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v6629 = stdlib.sub(v3369, v3369);
        sim_r.txns.push({
          kind: 'from',
          to: v3356,
          tok: undefined /* Nothing */
          });
        const v6631 = (stdlib.le(await ctc.getBalance(), v6629) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6629));
        sim_r.txns.push({
          kind: 'from',
          to: v3356,
          tok: undefined /* Nothing */
          });
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
    tys: [ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v3357], secs: v3359, time: v3358, didSend: v27, from: v3356 } = txn1;
  ;
  const v3360 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v3360), {
    at: './index.rsh:61:27:application',
    fs: ['at ./index.rsh:61:27:application call to [unknown function] (defined at: ./index.rsh:61:27:function exp)', 'at ./index.rsh:61:27:application call to "liftedInteract" (defined at: ./index.rsh:61:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v3362 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v3363 = {
    i: v3362,
    sign: true
    };
  const v3364 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v3363,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3365 = v3364;
  let v3366 = v3358;
  let v3369 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v3382 = v3365.keepGoing;
    
    return v3382;})()) {
    const v3390 = v3365.bal;
    const v3391 = v3365.keepGoing;
    const v3392 = v3365.percent;
    const v3393 = v3365.total_amount_claimed;
    const v3394 = v3365.total_rewards_allcoated;
    const v3395 = v3365.total_users_claim;
    const v3396 = v3365.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn3;
    switch (v3621[0]) {
      case 'Admin_addAdmin0_181': {
        const v3624 = v3621[1];
        undefined /* setApiDetails */;
        const v3630 = stdlib.addressEq(v3620, v3356);
        const v3631 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3620, ctc0), null);
        const v3632 = {
          None: 0,
          Some: 1
          }[v3631[0]];
        const v3633 = stdlib.eq(v3632, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3634 = v3630 ? true : v3633;
        stdlib.assert(v3634, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:34:application call to [unknown function] (defined at: ./index.rsh:197:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:197:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v3687 = v3624[stdlib.checkedBigNumberify('./index.rsh:197:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v3687, ctc0, null);
        const v3696 = null;
        await txn3.getOutput('Admin_addAdmin', 'v3696', ctc0, v3696);
        const v3710 = {
          bal: v3390,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v3393,
          total_rewards_allcoated: v3394,
          total_users_claim: v3395,
          usersNo: v3396
          };
        const cv3365 = v3710;
        const cv3366 = v3622;
        const cv3369 = v3369;
        
        v3365 = cv3365;
        v3366 = cv3366;
        v3369 = cv3369;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_181': {
        const v3995 = v3621[1];
        undefined /* setApiDetails */;
        const v4008 = v3995[stdlib.checkedBigNumberify('./index.rsh:125:10:spread', stdlib.UInt_max, '0')];
        const v4009 = stdlib.addressEq(v3620, v3356);
        const v4010 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3620, ctc0), null);
        const v4011 = {
          None: 0,
          Some: 1
          }[v4010[0]];
        const v4012 = stdlib.eq(v4011, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4013 = v4009 ? true : v4012;
        stdlib.assert(v4013, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:125:32:application call to [unknown function] (defined at: ./index.rsh:125:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:125:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v4056 = stdlib.add(v3369, v4008);
        ;
        const v4092 = null;
        await txn3.getOutput('Admin_deposit', 'v4092', ctc0, v4092);
        const v4106 = stdlib.safeAdd(v3390, v4008);
        const v4107 = {
          bal: v4106,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v3393,
          total_rewards_allcoated: v3394,
          total_users_claim: v3395,
          usersNo: v3396
          };
        const cv3365 = v4107;
        const cv3366 = v3622;
        const cv3369 = v4056;
        
        v3365 = cv3365;
        v3366 = cv3366;
        v3369 = cv3369;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_181': {
        const v4366 = v3621[1];
        undefined /* setApiDetails */;
        const v4388 = v4366[stdlib.checkedBigNumberify('./index.rsh:185:10:spread', stdlib.UInt_max, '1')];
        const v4389 = stdlib.addressEq(v3620, v3356);
        const v4390 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3620, ctc0), null);
        const v4391 = {
          None: 0,
          Some: 1
          }[v4390[0]];
        const v4392 = stdlib.eq(v4391, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4393 = v4389 ? true : v4392;
        stdlib.assert(v4393, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:185:45:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v4396 = stdlib.le(v4388, v3369);
        stdlib.assert(v4396, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:185:45:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:185:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        const v4481 = v4366[stdlib.checkedBigNumberify('./index.rsh:185:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc7, v4481, ctc1, v4388);
        const v4494 = null;
        await txn3.getOutput('Admin_editUserReward', 'v4494', ctc0, v4494);
        const v4509 = {
          bal: v3390,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v3393,
          total_rewards_allcoated: v3394,
          total_users_claim: v3395,
          usersNo: v3396
          };
        const cv3365 = v4509;
        const cv3366 = v3622;
        const cv3369 = v3369;
        
        v3365 = cv3365;
        v3366 = cv3366;
        v3369 = cv3369;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_181': {
        const v4737 = v3621[1];
        undefined /* setApiDetails */;
        const v4770 = stdlib.addressEq(v3356, v3620);
        stdlib.assert(v4770, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:323:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:322:44:application call to [unknown function] (defined at: ./index.rsh:322:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:322:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        const v4885 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v4885', ctc0, v4885);
        const v4898 = {
          bal: v3390,
          keepGoing: false,
          percent: v3392,
          total_amount_claimed: v3393,
          total_rewards_allcoated: v3394,
          total_users_claim: v3395,
          usersNo: v3396
          };
        const cv3365 = v4898;
        const cv3366 = v3622;
        const cv3369 = v3369;
        
        v3365 = cv3365;
        v3366 = cv3366;
        v3369 = cv3369;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_181': {
        const v5108 = v3621[1];
        undefined /* setApiDetails */;
        const v5145 = stdlib.addressEq(v3620, v3356);
        stdlib.assert(v5145, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:37:application call to [unknown function] (defined at: ./index.rsh:211:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:211:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v5272 = v5108[stdlib.checkedBigNumberify('./index.rsh:211:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v5272, ctc0, undefined /* Nothing */);
        const v5277 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v5277', ctc0, v5277);
        const v5291 = {
          bal: v3390,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v3393,
          total_rewards_allcoated: v3394,
          total_users_claim: v3395,
          usersNo: v3396
          };
        const cv3365 = v5291;
        const cv3366 = v3622;
        const cv3369 = v3369;
        
        v3365 = cv3365;
        v3366 = cv3366;
        v3369 = cv3369;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_181': {
        const v5479 = v3621[1];
        undefined /* setApiDetails */;
        const v5519 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '0')];
        const v5521 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '2')];
        const v5522 = stdlib.gt(v5521, v3390);
        const v5523 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v5519, ctc0), null);
        const v5524 = {
          None: 0,
          Some: 1
          }[v5523[0]];
        const v5525 = stdlib.eq(v5524, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5525, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:138:45:application call to [unknown function] (defined at: ./index.rsh:138:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:138:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v5527 = v5522 ? v5521 : stdlib.checkedBigNumberify('./index.rsh:144:30:decimal', stdlib.UInt_max, '0');
        const v5540 = stdlib.add(v3369, v5527);
        ;
        const v5666 = v5479[stdlib.checkedBigNumberify('./index.rsh:138:10:spread', stdlib.UInt_max, '1')];
        const v5676 = [v5519, v5666];
        const v5677 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5676, ctc3), null);
        const v5678 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5679 = stdlib.fromSome(v5677, v5678);
        const v5681 = v5679.claimed;
        const v5682 = v5679.rewards;
        const v5684 = stdlib.safeAdd(v5682, v5521);
        const v5685 = {
          claimed: v5681,
          rewards: v5684
          };
        await stdlib.mapSet(map1, ctc16, v5676, ctc3, v5685);
        const v5686 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5519, ctc1), null);
        const v5687 = stdlib.fromSome(v5686, stdlib.checkedBigNumberify('./index.rsh:154:60:decimal', stdlib.UInt_max, '0'));
        const v5691 = stdlib.safeAdd(v5687, v5521);
        await stdlib.mapSet(map0, ctc7, v5519, ctc1, v5691);
        const v5692 = true;
        await txn3.getOutput('Admin_setReward', 'v5692', ctc17, v5692);
        let v5708;
        if (v5522) {
          const v5709 = stdlib.safeAdd(v3390, v5521);
          v5708 = v5709;
          }
        else {
          v5708 = v3390;
          }
        const v5710 = {
          bal: v5708,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v3393,
          total_rewards_allcoated: v3394,
          total_users_claim: v3395,
          usersNo: v3396
          };
        const cv3365 = v5710;
        const cv3366 = v3622;
        const cv3369 = v5540;
        
        v3365 = cv3365;
        v3366 = cv3366;
        v3369 = cv3369;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_181': {
        const v5850 = v3621[1];
        undefined /* setApiDetails */;
        const v5900 = v5850[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '0')];
        const v5902 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3620, ctc1), null);
        const v5903 = stdlib.fromSome(v5902, stdlib.checkedBigNumberify('./index.rsh:271:56:decimal', stdlib.UInt_max, '0'));
        const v5905 = stdlib.le(v5900, v3369);
        stdlib.assert(v5905, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:34:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5907 = stdlib.ge(v5903, v5900);
        stdlib.assert(v5907, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:34:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        const v6127 = v5850[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '1')];
        const v6140 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v3620, ctc0), null);
        const v6141 = {
          None: 0,
          Some: 1
          }[v6140[0]];
        const v6142 = stdlib.eq(v6141, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6143 = [v3620, v6127];
        const v6144 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6143, ctc3), null);
        const v6145 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6146 = stdlib.fromSome(v6144, v6145);
        const v6148 = v6146.claimed;
        const v6149 = v6146.rewards;
        const v6151 = stdlib.safeAdd(v6148, v5900);
        const v6153 = stdlib.safeSub(v6149, v5900);
        const v6154 = {
          claimed: v6151,
          rewards: v6153
          };
        await stdlib.mapSet(map1, ctc16, v6143, ctc3, v6154);
        const v6155 = true;
        await txn3.getOutput('User_claim', 'v6155', ctc17, v6155);
        const v6163 = {
          addr: v3620,
          amount: v5900,
          projectName: v3357
          };
        null;
        if (v6142) {
          const v6188 = stdlib.sub(v3369, v5900);
          ;
          await stdlib.mapSet(map0, ctc7, v3620, ctc1, undefined /* Nothing */);
          const v6198 = stdlib.safeAdd(v3396, stdlib.checkedBigNumberify('./index.rsh:301:56:decimal', stdlib.UInt_max, '1'));
          const v6199 = stdlib.safeSub(v3390, v5900);
          const v6200 = stdlib.safeAdd(v3395, stdlib.checkedBigNumberify('./index.rsh:303:52:decimal', stdlib.UInt_max, '1'));
          const v6201 = stdlib.safeAdd(v3393, v5900);
          const v6202 = {
            bal: v6199,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v6201,
            total_rewards_allcoated: v3394,
            total_users_claim: v6200,
            usersNo: v6198
            };
          const cv3365 = v6202;
          const cv3366 = v3622;
          const cv3369 = v6188;
          
          v3365 = cv3365;
          v3366 = cv3366;
          v3369 = cv3369;
          
          txn2 = txn3;
          continue;}
        else {
          await stdlib.mapSet(map3, ctc7, v3620, ctc0, null);
          const v6169 = stdlib.sub(v3369, v5900);
          ;
          await stdlib.mapSet(map0, ctc7, v3620, ctc1, undefined /* Nothing */);
          const v6180 = stdlib.safeSub(v3390, v5900);
          const v6181 = stdlib.safeAdd(v3395, stdlib.checkedBigNumberify('./index.rsh:303:52:decimal', stdlib.UInt_max, '1'));
          const v6182 = stdlib.safeAdd(v3393, v5900);
          const v6183 = {
            bal: v6180,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v6182,
            total_rewards_allcoated: v3394,
            total_users_claim: v6181,
            usersNo: v3396
            };
          const cv3365 = v6183;
          const cv3366 = v3622;
          const cv3369 = v6169;
          
          v3365 = cv3365;
          v3366 = cv3366;
          v3369 = cv3369;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'User_optin0_181': {
        const v6221 = v3621[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map4, ctc7, v3620, ctc0, null);
        const v6577 = null;
        await txn3.getOutput('User_optin', 'v6577', ctc0, v6577);
        const v6590 = {
          bal: v3390,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v3393,
          total_rewards_allcoated: v3394,
          total_users_claim: v3395,
          usersNo: v3396
          };
        const cv3365 = v6590;
        const cv3366 = v3622;
        const cv3369 = v3369;
        
        v3365 = cv3365;
        v3366 = cv3366;
        v3369 = cv3369;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v6629 = stdlib.sub(v3369, v3369);
  ;
  const v6631 = (stdlib.le(await ctc.getBalance(), v6629) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6629));
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc11, ctc1]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc13,
    Admin_deposit0_181: ctc14,
    Admin_editUserReward0_181: ctc15,
    Admin_endContractAndTransfer0_181: ctc16,
    Admin_revokeAdmin0_181: ctc13,
    Admin_setReward0_181: ctc17,
    User_claim0_181: ctc12,
    User_optin0_181: ctc16
    });
  const ctc19 = stdlib.T_Tuple([ctc6, ctc11]);
  
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3523 = ctc.selfAddress();
  const v3525 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:270:34:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to "runUser_claim0_181" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v3526 = v3525[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3530 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3523, ctc1), null);
  const v3531 = stdlib.fromSome(v3530, stdlib.checkedBigNumberify('./index.rsh:271:56:decimal', stdlib.UInt_max, '0'));
  const v3533 = stdlib.le(v3526, v3369);
  stdlib.assert(v3533, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:34:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to "runUser_claim0_181" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v3535 = stdlib.ge(v3531, v3526);
  stdlib.assert(v3535, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:34:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to "runUser_claim0_181" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v3544 = ['User_claim0_181', v3525];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3544],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:275:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5900 = v5850[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3620, ctc1), null);
          ;
          const v6127 = v5850[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '1')];
          const v6140 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v3620, ctc0), null);
          const v6141 = {
            None: 0,
            Some: 1
            }[v6140[0]];
          const v6142 = stdlib.eq(v6141, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v6143 = [v3620, v6127];
          const v6144 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v6143, ctc3), null);
          const v6145 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6146 = stdlib.fromSome(v6144, v6145);
          const v6148 = v6146.claimed;
          const v6149 = v6146.rewards;
          const v6151 = stdlib.safeAdd(v6148, v5900);
          const v6153 = stdlib.safeSub(v6149, v5900);
          const v6154 = {
            claimed: v6151,
            rewards: v6153
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v6143, ctc3, v6154);
          const v6155 = true;
          const v6156 = await txn1.getOutput('User_claim', 'v6155', ctc8, v6155);
          
          const v6163 = {
            addr: v3620,
            amount: v5900,
            projectName: v3357
            };
          null;
          if (v6142) {
            const v6188 = stdlib.sub(v3369, v5900);
            sim_r.txns.push({
              kind: 'from',
              to: v3620,
              tok: undefined /* Nothing */
              });
            await stdlib.simMapSet(sim_r, 0, ctc6, v3620, ctc1, undefined /* Nothing */);
            const v6198 = stdlib.safeAdd(v3396, stdlib.checkedBigNumberify('./index.rsh:301:56:decimal', stdlib.UInt_max, '1'));
            const v6199 = stdlib.safeSub(v3390, v5900);
            const v6200 = stdlib.safeAdd(v3395, stdlib.checkedBigNumberify('./index.rsh:303:52:decimal', stdlib.UInt_max, '1'));
            const v6201 = stdlib.safeAdd(v3393, v5900);
            const v6202 = {
              bal: v6199,
              keepGoing: v3391,
              percent: v3392,
              total_amount_claimed: v6201,
              total_rewards_allcoated: v3394,
              total_users_claim: v6200,
              usersNo: v6198
              };
            const v9448 = v6188;
            const v9449 = v6202.keepGoing;
            if (v9449) {
              const v9450 = v6202.bal;
              const v9452 = v6202.percent;
              const v9453 = v6202.total_amount_claimed;
              const v9454 = v6202.total_rewards_allcoated;
              const v9455 = v6202.total_users_claim;
              const v9456 = v6202.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v9461 = stdlib.sub(v6188, v6188);
              sim_r.txns.push({
                kind: 'from',
                to: v3356,
                tok: undefined /* Nothing */
                });
              const v9462 = (stdlib.le(await ctc.getBalance(), v9461) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9461));
              sim_r.txns.push({
                kind: 'from',
                to: v3356,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v3620, ctc0, null);
            const v6169 = stdlib.sub(v3369, v5900);
            sim_r.txns.push({
              kind: 'from',
              to: v3620,
              tok: undefined /* Nothing */
              });
            await stdlib.simMapSet(sim_r, 0, ctc6, v3620, ctc1, undefined /* Nothing */);
            const v6180 = stdlib.safeSub(v3390, v5900);
            const v6181 = stdlib.safeAdd(v3395, stdlib.checkedBigNumberify('./index.rsh:303:52:decimal', stdlib.UInt_max, '1'));
            const v6182 = stdlib.safeAdd(v3393, v5900);
            const v6183 = {
              bal: v6180,
              keepGoing: v3391,
              percent: v3392,
              total_amount_claimed: v6182,
              total_rewards_allcoated: v3394,
              total_users_claim: v6181,
              usersNo: v3396
              };
            const v9465 = v6169;
            const v9466 = v6183.keepGoing;
            if (v9466) {
              const v9467 = v6183.bal;
              const v9469 = v6183.percent;
              const v9470 = v6183.total_amount_claimed;
              const v9471 = v6183.total_rewards_allcoated;
              const v9472 = v6183.total_users_claim;
              const v9473 = v6183.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v9478 = stdlib.sub(v6169, v6169);
              sim_r.txns.push({
                kind: 'from',
                to: v3356,
                tok: undefined /* Nothing */
                });
              const v9479 = (stdlib.le(await ctc.getBalance(), v9478) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9478));
              sim_r.txns.push({
                kind: 'from',
                to: v3356,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      undefined /* setApiDetails */;
      const v5900 = v5850[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '0')];
      const v5902 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3620, ctc1), null);
      const v5903 = stdlib.fromSome(v5902, stdlib.checkedBigNumberify('./index.rsh:271:56:decimal', stdlib.UInt_max, '0'));
      const v5905 = stdlib.le(v5900, v3369);
      stdlib.assert(v5905, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:34:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5907 = stdlib.ge(v5903, v5900);
      stdlib.assert(v5907, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:34:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:270:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      const v6127 = v5850[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '1')];
      const v6140 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v3620, ctc0), null);
      const v6141 = {
        None: 0,
        Some: 1
        }[v6140[0]];
      const v6142 = stdlib.eq(v6141, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6143 = [v3620, v6127];
      const v6144 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v6143, ctc3), null);
      const v6145 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6146 = stdlib.fromSome(v6144, v6145);
      const v6148 = v6146.claimed;
      const v6149 = v6146.rewards;
      const v6151 = stdlib.safeAdd(v6148, v5900);
      const v6153 = stdlib.safeSub(v6149, v5900);
      const v6154 = {
        claimed: v6151,
        rewards: v6153
        };
      await stdlib.mapSet(map1, ctc19, v6143, ctc3, v6154);
      const v6155 = true;
      const v6156 = await txn1.getOutput('User_claim', 'v6155', ctc8, v6155);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v5850, v6156), {
          at: './index.rsh:270:11:application',
          fs: ['at ./index.rsh:270:11:application call to [unknown function] (defined at: ./index.rsh:270:11:function exp)', 'at ./index.rsh:289:14:application call to "ret" (defined at: ./index.rsh:276:15:function exp)', 'at ./index.rsh:276:15:application call to [unknown function] (defined at: ./index.rsh:276:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v6163 = {
        addr: v3620,
        amount: v5900,
        projectName: v3357
        };
      null;
      if (v6142) {
        const v6188 = stdlib.sub(v3369, v5900);
        ;
        await stdlib.mapSet(map0, ctc6, v3620, ctc1, undefined /* Nothing */);
        const v6198 = stdlib.safeAdd(v3396, stdlib.checkedBigNumberify('./index.rsh:301:56:decimal', stdlib.UInt_max, '1'));
        const v6199 = stdlib.safeSub(v3390, v5900);
        const v6200 = stdlib.safeAdd(v3395, stdlib.checkedBigNumberify('./index.rsh:303:52:decimal', stdlib.UInt_max, '1'));
        const v6201 = stdlib.safeAdd(v3393, v5900);
        const v6202 = {
          bal: v6199,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v6201,
          total_rewards_allcoated: v3394,
          total_users_claim: v6200,
          usersNo: v6198
          };
        const v9448 = v6188;
        const v9449 = v6202.keepGoing;
        if (v9449) {
          const v9450 = v6202.bal;
          const v9452 = v6202.percent;
          const v9453 = v6202.total_amount_claimed;
          const v9454 = v6202.total_rewards_allcoated;
          const v9455 = v6202.total_users_claim;
          const v9456 = v6202.usersNo;
          return;
          }
        else {
          const v9461 = stdlib.sub(v6188, v6188);
          ;
          const v9462 = (stdlib.le(await ctc.getBalance(), v9461) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9461));
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map3, ctc6, v3620, ctc0, null);
        const v6169 = stdlib.sub(v3369, v5900);
        ;
        await stdlib.mapSet(map0, ctc6, v3620, ctc1, undefined /* Nothing */);
        const v6180 = stdlib.safeSub(v3390, v5900);
        const v6181 = stdlib.safeAdd(v3395, stdlib.checkedBigNumberify('./index.rsh:303:52:decimal', stdlib.UInt_max, '1'));
        const v6182 = stdlib.safeAdd(v3393, v5900);
        const v6183 = {
          bal: v6180,
          keepGoing: v3391,
          percent: v3392,
          total_amount_claimed: v6182,
          total_rewards_allcoated: v3394,
          total_users_claim: v6181,
          usersNo: v3396
          };
        const v9465 = v6169;
        const v9466 = v6183.keepGoing;
        if (v9466) {
          const v9467 = v6183.bal;
          const v9469 = v6183.percent;
          const v9470 = v6183.total_amount_claimed;
          const v9471 = v6183.total_rewards_allcoated;
          const v9472 = v6183.total_users_claim;
          const v9473 = v6183.usersNo;
          return;
          }
        else {
          const v9478 = stdlib.sub(v6169, v6169);
          ;
          const v9479 = (stdlib.le(await ctc.getBalance(), v9478) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9478));
          ;
          return;
          }}
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc13,
    Admin_editUserReward0_181: ctc14,
    Admin_endContractAndTransfer0_181: ctc11,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc11
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
  
  
  const [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3548 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:312:26:application call to [unknown function] (defined at: ./index.rsh:312:26:function exp)', 'at ./index.rsh:80:37:application call to "runUser_optin0_181" (defined at: ./index.rsh:312:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v3552 = ['User_optin0_181', v3548];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3356, v3357, v3369, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3552],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:314:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
      
      switch (v3621[0]) {
        case 'Admin_addAdmin0_181': {
          const v3624 = v3621[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v3995 = v3621[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4366 = v3621[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4737 = v3621[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5108 = v3621[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5479 = v3621[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v5850 = v3621[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6221 = v3621[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v3620, ctc0, null);
          const v6577 = null;
          const v6578 = await txn1.getOutput('User_optin', 'v6577', ctc0, v6577);
          
          const v6590 = {
            bal: v3390,
            keepGoing: v3391,
            percent: v3392,
            total_amount_claimed: v3393,
            total_rewards_allcoated: v3394,
            total_users_claim: v3395,
            usersNo: v3396
            };
          const v9635 = v3369;
          const v9636 = v6590.keepGoing;
          if (v9636) {
            const v9637 = v6590.bal;
            const v9639 = v6590.percent;
            const v9640 = v6590.total_amount_claimed;
            const v9641 = v6590.total_rewards_allcoated;
            const v9642 = v6590.total_users_claim;
            const v9643 = v6590.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9648 = stdlib.sub(v3369, v3369);
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
            const v9649 = (stdlib.le(await ctc.getBalance(), v9648) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9648));
            sim_r.txns.push({
              kind: 'from',
              to: v3356,
              tok: undefined /* Nothing */
              });
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
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3621], secs: v3623, time: v3622, didSend: v2824, from: v3620 } = txn1;
  switch (v3621[0]) {
    case 'Admin_addAdmin0_181': {
      const v3624 = v3621[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v3995 = v3621[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4366 = v3621[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4737 = v3621[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5108 = v3621[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5479 = v3621[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v5850 = v3621[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6221 = v3621[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map4, ctc6, v3620, ctc0, null);
      const v6577 = null;
      const v6578 = await txn1.getOutput('User_optin', 'v6577', ctc0, v6577);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v6221, v6578), {
          at: './index.rsh:312:11:application',
          fs: ['at ./index.rsh:312:11:application call to [unknown function] (defined at: ./index.rsh:312:11:function exp)', 'at ./index.rsh:317:14:application call to "ret" (defined at: ./index.rsh:315:15:function exp)', 'at ./index.rsh:315:15:application call to [unknown function] (defined at: ./index.rsh:315:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6590 = {
        bal: v3390,
        keepGoing: v3391,
        percent: v3392,
        total_amount_claimed: v3393,
        total_rewards_allcoated: v3394,
        total_users_claim: v3395,
        usersNo: v3396
        };
      const v9635 = v3369;
      const v9636 = v6590.keepGoing;
      if (v9636) {
        const v9637 = v6590.bal;
        const v9639 = v6590.percent;
        const v9640 = v6590.total_amount_claimed;
        const v9641 = v6590.total_rewards_allcoated;
        const v9642 = v6590.total_users_claim;
        const v9643 = v6590.usersNo;
        return;
        }
      else {
        const v9648 = stdlib.sub(v3369, v3369);
        ;
        const v9649 = (stdlib.le(await ctc.getBalance(), v9648) ? stdlib.checkedBigNumberify('./index.rsh:335:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9648));
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
    impure: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[48])))void`],
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[48])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEIAxDUetSTASjUxQEmBgABAAEBAQIBBAEDMRhBB/UoZEkiWzUBJFs1AilkKmRQghQEAl90xwQNs4a8BBNuVzsEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEJoJ9UESCT5AgRu5HYUBHhK2TcEev7IbQTHwpzVBN5XBGQE7UbbpgTzJ3gEBPlvbOAE+XMOCwT6rsiwNhoAjhQAVAIsAXcBBgJOAZsB/AE3BzUBqwCJAcsBuwFHB0cA3wDJAdsAawABADYaATULJK8pNAtQIQSvUFA1CyU0ARJEiAhGNAsiWzUMNAtXCDE1DYAEVQtlgzQMFlA0DVCwNAyICKk0DSJVjQgH2QfcB98H6QchByQHLgc4Qv+sNhoBFzULJK8qNAsWUCEHr1BQNQtC/6g2GgE2GgIXNQs1DCSvKzQMNAsWUFAkr1BQNQtC/4qAOQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9KNhoBNQskrycENAtQIQSvUFA1C0L/NDYaATYaAhc2GgMXNQs1DDUNJK+AAQU0DTQMFlA0CxZQUFA1C0L/DTYaATULNAElEkSIB04oKCs0C1CIBzoiVSMSFlEHCDUEMRkiEkSABBUffHU0BFCwI0M0ASUSRIgHIjQVFjUEQv/fNhoBNhoCFzULNQw0ASUSRIgHByEEryghBK8qNAw0CxZQUIgG6ogHL1cACDUEQv+vNhoBNQs0ASUSRIgG3SgoJwQ0C1CIBsgiVSMSFlEHCDUEQv+LNAElEkSIBr40EBY1BEL/ezQBJRJEiAauNBEWNQRC/2s0ASUSRIgGnjQPFjUEQv9bNAElEkSIBo40DhY1BEL/SzYaATULNAElEkSIBnkkrygkryk0C1CIBmKIBqc1BEL/KjYaATYaAhc1CzUMNAElEkSIBlIhBK8oIQSvKjQMNAsWUFCIBjWIBnpXCAg1BEL++jYaARc2GgIXNQs1DCSvgAEGNAwWNAsWUFAyA1BQNQtC/cWAOQAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv2FMQA0GRIoKCsxAFCIBboiVSMSEUQhBSs0DVcBIFAoiAX4KDULgAgAAAAAAAAOcDQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRc0F1cIARdBBPM0FyJbNRQ0F1cIARc1EzQXVwkRNRI0F4EaWzURNBeBIls1EDQXgSpbNQ80F4EyWzUONBk0GFA0FRZQNBQWUDQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQJTIGNQI1ASlLAVcAf2cqTFd/AWcoNAEWNAIWUGcxGSISRIgFgTQDQP3DQv22NA0jWzULMQA0GRIoKCsxAFCIBM0iVSMSEUQ0C4gFMCg1DIAIAAAAAAAAD/w0DFCwNAw1BDQUNAsIFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY0FTQLCDUVNRY1F0L/DjQLgSBbNQwxADQZEigoKzEAUIgEaCJVIxIRRDQMNBUORCEGKTQLVwAgUDQMFogEnig1C4AIAAAAAAAAEY40C1CwNAs1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQv6jNBkxABJEKDULgAgAAAAAAAATFTQLULA0CzUENBQWKVA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQv5nMQA0GRJEIQUrNA1XASBQiAQnKDULgAgAAAAAAAAUnTQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/ho0C1cAIDUcNAshB1tJNRs0FA01GigoJwQ0HFCIA2siVSMSRCI0GzQaTUk1DYgDyDQcNAtXIAhQNQwhBK8oIQSvKjQMUIgDQogDhzULIQgqNAxQNAtXAAg0CyRbNBsIFlCIA3chBik0HFAkrygkryk0HFCIAxSIA1kXNBsIFogDWiM1C4AIAAAAAAAAFjw0CxZRBwhQsDQLFlEHCDUENBpBAh00FDQbCDULNAsWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjQVNA0INRU1FjUXQv1ENAsiW0k1DTQVDkQkrygkrykxAFCIApyIAuEXNA0PRDEANAtXCAhQNQwhBK8oIQSvKjQMUIgCfIgCwTULIQgqNAxQNAsiWzQNCBY0CyRbNA0JFlCIAq4jNQuACAAAAAAAABgLNAsWUQcIULA0CxZRBwg1BDEANA0WUDQYUDULgASbyFRQNAtQsCgoJwUxAFCIAiEiVSMSQQFXNA0xAIgCciEGKTEAUIgCbTQUNA0JFjQTFlEHCFA0ElA0ETQNCBZQNBAWUDQPIwgWUDQOIwgWUDIGNBU0DQk1FTUWNRdC/GQhBScEMQBQKIgCGSg1C4AIAAAAAAAAGbE0C1CwNAs1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQvweMQA1GTQLIls1DDQLVwgeNRiABNEqBo00DBZQNBhQsDQMiAH3gDoAAAAAAAAAAAEAAAAAAAAABQAAAAAAAABkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgYiNRU1FjUXQvuyiAGogaCNBogBuzYaATULQv+CiAGWNhoBNQtC+MEiMTQSRCUxNRJEIjE2EkQiMTcSRIgBd4GAAa8iIkL72UL9CzQNVwEwNQtC/U40DVcBEDULQv4aQv73NBQ1C0L94yEFJwUxAFAoiAEJNA0xAIgBECEGKTEAUIgBCzQUNA0JFjQTFlEHCFA0ElA0ETQNCBZQNBAWUDQPIwgWUDQOFlAyBjQVNA0JNRU1FjUXQvsENBU0GYgAyzIKYDIKeAk0FUkJCUk1CzQZiAC3MRmBBRJEiADnMgpgMgp4CUk1BjIKiACfQvtUSEy/SIkisgEjshCyB7IIs4lC+mFC+0U0DVcBKDULQvufQvwHSIlMCUk1BjIJiABsiQlJQf/uSTUGiABvib5JFlEHCEUETVCJSVcAIDUZSVcgHjUYSYE+WzUVSYFGWzUUSVdOARc1E0lXTxE1EkmBYFs1EUmBaFs1EEmBcFs1D4F4WzUOiUlXAQBMIlVNiUxJvUD/bEsDiABIQv9ksUL/ZbwiTgJNNAcINQeJMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiSM1A4lJIhJMNAISEUSJNAY0B0oPQf9IQv9QNAYINQaJ`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `488`,
    1001: `489`,
    1002: `489`,
    1003: `490`,
    1004: `491`,
    1005: `491`,
    1006: `492`,
    1007: `493`,
    1008: `494`,
    1009: `494`,
    101: `21`,
    1010: `495`,
    1011: `496`,
    1012: `497`,
    1013: `497`,
    1014: `498`,
    1015: `499`,
    1016: `499`,
    1017: `499`,
    1018: `500`,
    1019: `501`,
    102: `21`,
    1020: `501`,
    1021: `502`,
    1022: `503`,
    1023: `503`,
    1024: `504`,
    1025: `505`,
    1026: `506`,
    1027: `506`,
    1028: `507`,
    1029: `508`,
    103: `21`,
    1030: `509`,
    1031: `509`,
    1032: `510`,
    1033: `511`,
    1034: `512`,
    1035: `512`,
    1036: `513`,
    1037: `514`,
    1038: `515`,
    1039: `516`,
    104: `21`,
    1040: `516`,
    1041: `518`,
    1042: `518`,
    1043: `519`,
    1044: `519`,
    1045: `520`,
    1046: `521`,
    1047: `521`,
    1048: `522`,
    1049: `522`,
    105: `21`,
    1050: `522`,
    1051: `523`,
    1052: `524`,
    1053: `525`,
    1054: `526`,
    1055: `526`,
    1056: `526`,
    1057: `527`,
    1058: `528`,
    1059: `529`,
    106: `21`,
    1060: `529`,
    1061: `530`,
    1062: `531`,
    1063: `531`,
    1064: `532`,
    1065: `533`,
    1066: `534`,
    1067: `535`,
    1068: `535`,
    1069: `536`,
    107: `21`,
    1070: `537`,
    1071: `538`,
    1072: `540`,
    1073: `540`,
    1074: `540`,
    1075: `542`,
    1076: `542`,
    1077: `543`,
    1078: `543`,
    1079: `543`,
    108: `21`,
    1080: `544`,
    1081: `544`,
    1082: `544`,
    1083: `546`,
    1084: `546`,
    1085: `547`,
    1086: `548`,
    1087: `549`,
    1088: `549`,
    1089: `550`,
    109: `21`,
    1090: `550`,
    1091: `551`,
    1092: `551`,
    1093: `552`,
    1094: `554`,
    1095: `555`,
    1096: `556`,
    1097: `557`,
    1098: `557`,
    1099: `558`,
    11: `2`,
    110: `21`,
    1100: `559`,
    1101: `559`,
    1102: `559`,
    1103: `560`,
    1104: `561`,
    1105: `562`,
    1106: `563`,
    1107: `564`,
    1108: `565`,
    1109: `572`,
    111: `21`,
    1110: `572`,
    1111: `573`,
    1112: `573`,
    1113: `573`,
    1114: `576`,
    1115: `577`,
    1116: `577`,
    1117: `578`,
    1118: `578`,
    1119: `578`,
    112: `21`,
    1120: `578`,
    1121: `578`,
    1122: `578`,
    1123: `578`,
    1124: `578`,
    1125: `578`,
    1126: `578`,
    1127: `579`,
    1128: `579`,
    1129: `580`,
    113: `21`,
    1130: `581`,
    1131: `582`,
    1132: `582`,
    1133: `583`,
    1134: `583`,
    1135: `584`,
    1136: `584`,
    1137: `585`,
    1138: `585`,
    1139: `586`,
    114: `21`,
    1140: `587`,
    1141: `588`,
    1142: `588`,
    1143: `589`,
    1144: `590`,
    1145: `590`,
    1146: `590`,
    1147: `591`,
    1148: `592`,
    1149: `592`,
    115: `21`,
    1150: `593`,
    1151: `594`,
    1152: `594`,
    1153: `595`,
    1154: `596`,
    1155: `597`,
    1156: `597`,
    1157: `598`,
    1158: `599`,
    1159: `600`,
    116: `21`,
    1160: `600`,
    1161: `601`,
    1162: `602`,
    1163: `603`,
    1164: `603`,
    1165: `604`,
    1166: `605`,
    1167: `606`,
    1168: `606`,
    1169: `607`,
    117: `21`,
    1170: `607`,
    1171: `608`,
    1172: `608`,
    1173: `609`,
    1174: `610`,
    1175: `610`,
    1176: `611`,
    1177: `611`,
    1178: `612`,
    1179: `612`,
    118: `21`,
    1180: `613`,
    1181: `613`,
    1182: `613`,
    1183: `615`,
    1184: `615`,
    1185: `616`,
    1186: `616`,
    1187: `617`,
    1188: `618`,
    1189: `618`,
    119: `21`,
    1190: `619`,
    1191: `619`,
    1192: `620`,
    1193: `620`,
    1194: `621`,
    1195: `623`,
    1196: `624`,
    1197: `625`,
    1198: `626`,
    1199: `626`,
    12: `2`,
    120: `21`,
    1200: `627`,
    1201: `628`,
    1202: `628`,
    1203: `628`,
    1204: `629`,
    1205: `630`,
    1206: `631`,
    1207: `632`,
    1208: `633`,
    1209: `634`,
    121: `21`,
    1210: `641`,
    1211: `641`,
    1212: `642`,
    1213: `642`,
    1214: `643`,
    1215: `644`,
    1216: `652`,
    1217: `652`,
    1218: `653`,
    1219: `654`,
    122: `21`,
    1220: `654`,
    1221: `655`,
    1222: `655`,
    1223: `655`,
    1224: `656`,
    1225: `657`,
    1226: `657`,
    1227: `658`,
    1228: `659`,
    1229: `659`,
    123: `21`,
    1230: `659`,
    1231: `660`,
    1232: `661`,
    1233: `661`,
    1234: `662`,
    1235: `662`,
    1236: `662`,
    1237: `662`,
    1238: `662`,
    1239: `662`,
    124: `21`,
    1240: `662`,
    1241: `662`,
    1242: `662`,
    1243: `662`,
    1244: `663`,
    1245: `663`,
    1246: `664`,
    1247: `665`,
    1248: `666`,
    1249: `666`,
    125: `21`,
    1250: `667`,
    1251: `667`,
    1252: `668`,
    1253: `668`,
    1254: `669`,
    1255: `670`,
    1256: `670`,
    1257: `671`,
    1258: `672`,
    1259: `672`,
    126: `21`,
    1260: `672`,
    1261: `673`,
    1262: `674`,
    1263: `674`,
    1264: `675`,
    1265: `676`,
    1266: `676`,
    1267: `677`,
    1268: `678`,
    1269: `679`,
    127: `21`,
    1270: `679`,
    1271: `680`,
    1272: `681`,
    1273: `682`,
    1274: `682`,
    1275: `683`,
    1276: `684`,
    1277: `685`,
    1278: `685`,
    1279: `686`,
    128: `21`,
    1280: `687`,
    1281: `688`,
    1282: `688`,
    1283: `689`,
    1284: `689`,
    1285: `690`,
    1286: `690`,
    1287: `691`,
    1288: `691`,
    1289: `691`,
    129: `21`,
    1290: `693`,
    1291: `693`,
    1292: `694`,
    1293: `694`,
    1294: `695`,
    1295: `696`,
    1296: `703`,
    1297: `704`,
    1298: `704`,
    1299: `705`,
    13: `2`,
    130: `21`,
    1300: `705`,
    1301: `705`,
    1302: `705`,
    1303: `705`,
    1304: `705`,
    1305: `705`,
    1306: `705`,
    1307: `705`,
    1308: `705`,
    1309: `706`,
    131: `21`,
    1310: `706`,
    1311: `707`,
    1312: `708`,
    1313: `709`,
    1314: `709`,
    1315: `710`,
    1316: `710`,
    1317: `711`,
    1318: `711`,
    1319: `712`,
    132: `21`,
    1320: `713`,
    1321: `714`,
    1322: `715`,
    1323: `715`,
    1324: `716`,
    1325: `717`,
    1326: `717`,
    1327: `718`,
    1328: `719`,
    1329: `720`,
    133: `21`,
    1330: `720`,
    1331: `721`,
    1332: `722`,
    1333: `723`,
    1334: `723`,
    1335: `724`,
    1336: `725`,
    1337: `726`,
    1338: `726`,
    1339: `727`,
    134: `21`,
    1340: `728`,
    1341: `729`,
    1342: `729`,
    1343: `730`,
    1344: `730`,
    1345: `731`,
    1346: `731`,
    1347: `732`,
    1348: `732`,
    1349: `732`,
    135: `21`,
    1350: `734`,
    1351: `734`,
    1352: `735`,
    1353: `735`,
    1354: `736`,
    1355: `737`,
    1356: `745`,
    1357: `745`,
    1358: `746`,
    1359: `747`,
    136: `21`,
    1360: `747`,
    1361: `748`,
    1362: `748`,
    1363: `748`,
    1364: `749`,
    1365: `750`,
    1366: `750`,
    1367: `750`,
    1368: `751`,
    1369: `752`,
    137: `21`,
    1370: `752`,
    1371: `753`,
    1372: `753`,
    1373: `753`,
    1374: `753`,
    1375: `753`,
    1376: `753`,
    1377: `753`,
    1378: `753`,
    1379: `753`,
    138: `21`,
    1380: `753`,
    1381: `754`,
    1382: `754`,
    1383: `755`,
    1384: `756`,
    1385: `757`,
    1386: `757`,
    1387: `758`,
    1388: `758`,
    1389: `759`,
    139: `21`,
    1390: `759`,
    1391: `760`,
    1392: `761`,
    1393: `761`,
    1394: `762`,
    1395: `763`,
    1396: `763`,
    1397: `763`,
    1398: `764`,
    1399: `765`,
    14: `2`,
    140: `21`,
    1400: `765`,
    1401: `766`,
    1402: `767`,
    1403: `767`,
    1404: `768`,
    1405: `769`,
    1406: `770`,
    1407: `770`,
    1408: `771`,
    1409: `772`,
    141: `21`,
    1410: `773`,
    1411: `773`,
    1412: `774`,
    1413: `775`,
    1414: `776`,
    1415: `776`,
    1416: `777`,
    1417: `778`,
    1418: `779`,
    1419: `779`,
    142: `21`,
    1420: `780`,
    1421: `780`,
    1422: `781`,
    1423: `781`,
    1424: `782`,
    1425: `782`,
    1426: `782`,
    1427: `784`,
    1428: `784`,
    1429: `785`,
    143: `21`,
    1430: `785`,
    1431: `785`,
    1432: `786`,
    1433: `786`,
    1434: `787`,
    1435: `787`,
    1436: `788`,
    1437: `788`,
    1438: `789`,
    1439: `790`,
    144: `21`,
    1440: `791`,
    1441: `791`,
    1442: `792`,
    1443: `792`,
    1444: `793`,
    1445: `794`,
    1446: `794`,
    1447: `796`,
    1448: `797`,
    1449: `798`,
    145: `21`,
    1450: `798`,
    1451: `799`,
    1452: `799`,
    1453: `800`,
    1454: `801`,
    1455: `801`,
    1456: `801`,
    1457: `802`,
    1458: `803`,
    1459: `804`,
    146: `21`,
    1460: `805`,
    1461: `806`,
    1462: `813`,
    1463: `814`,
    1464: `814`,
    1465: `815`,
    1466: `815`,
    1467: `816`,
    1468: `817`,
    1469: `818`,
    147: `21`,
    1470: `818`,
    1471: `819`,
    1472: `819`,
    1473: `819`,
    1474: `822`,
    1475: `822`,
    1476: `823`,
    1477: `823`,
    1478: `824`,
    1479: `824`,
    148: `21`,
    1480: `824`,
    1481: `825`,
    1482: `826`,
    1483: `826`,
    1484: `827`,
    1485: `827`,
    1486: `828`,
    1487: `830`,
    1488: `831`,
    1489: `831`,
    149: `21`,
    1490: `832`,
    1491: `833`,
    1492: `834`,
    1493: `834`,
    1494: `835`,
    1495: `836`,
    1496: `836`,
    1497: `836`,
    1498: `837`,
    1499: `837`,
    15: `2`,
    150: `21`,
    1500: `837`,
    1501: `838`,
    1502: `838`,
    1503: `839`,
    1504: `839`,
    1505: `840`,
    1506: `841`,
    1507: `841`,
    1508: `842`,
    1509: `843`,
    151: `21`,
    1510: `843`,
    1511: `844`,
    1512: `844`,
    1513: `844`,
    1514: `845`,
    1515: `845`,
    1516: `846`,
    1517: `847`,
    1518: `848`,
    1519: `848`,
    152: `21`,
    1520: `849`,
    1521: `850`,
    1522: `851`,
    1523: `852`,
    1524: `852`,
    1525: `852`,
    1526: `854`,
    1527: `854`,
    1528: `855`,
    1529: `856`,
    153: `22`,
    1530: `856`,
    1531: `857`,
    1532: `858`,
    1533: `859`,
    1534: `860`,
    1535: `861`,
    1536: `862`,
    1537: `863`,
    1538: `864`,
    1539: `864`,
    154: `22`,
    1540: `865`,
    1541: `866`,
    1542: `866`,
    1543: `866`,
    1544: `867`,
    1545: `867`,
    1546: `867`,
    1547: `868`,
    1548: `869`,
    1549: `869`,
    155: `22`,
    1550: `870`,
    1551: `871`,
    1552: `872`,
    1553: `872`,
    1554: `872`,
    1555: `873`,
    1556: `874`,
    1557: `874`,
    1558: `875`,
    1559: `875`,
    156: `23`,
    1560: `875`,
    1561: `875`,
    1562: `875`,
    1563: `875`,
    1564: `875`,
    1565: `875`,
    1566: `875`,
    1567: `875`,
    1568: `876`,
    1569: `876`,
    157: `23`,
    1570: `877`,
    1571: `878`,
    1572: `878`,
    1573: `878`,
    1574: `879`,
    1575: `880`,
    1576: `881`,
    1577: `881`,
    1578: `882`,
    1579: `883`,
    158: `23`,
    1580: `883`,
    1581: `883`,
    1582: `884`,
    1583: `884`,
    1584: `885`,
    1585: `885`,
    1586: `886`,
    1587: `886`,
    1588: `886`,
    1589: `887`,
    159: `23`,
    1590: `887`,
    1591: `888`,
    1592: `888`,
    1593: `889`,
    1594: `890`,
    1595: `890`,
    1596: `892`,
    1597: `892`,
    1598: `893`,
    1599: `894`,
    16: `2`,
    160: `23`,
    1600: `894`,
    1601: `895`,
    1602: `896`,
    1603: `896`,
    1604: `896`,
    1605: `897`,
    1606: `898`,
    1607: `898`,
    1608: `899`,
    1609: `900`,
    161: `23`,
    1610: `900`,
    1611: `901`,
    1612: `902`,
    1613: `903`,
    1614: `903`,
    1615: `904`,
    1616: `905`,
    1617: `906`,
    1618: `906`,
    1619: `907`,
    162: `23`,
    1620: `908`,
    1621: `909`,
    1622: `909`,
    1623: `910`,
    1624: `911`,
    1625: `912`,
    1626: `912`,
    1627: `913`,
    1628: `913`,
    1629: `914`,
    163: `23`,
    1630: `914`,
    1631: `915`,
    1632: `916`,
    1633: `916`,
    1634: `917`,
    1635: `917`,
    1636: `918`,
    1637: `918`,
    1638: `919`,
    1639: `919`,
    164: `23`,
    1640: `919`,
    1641: `921`,
    1642: `921`,
    1643: `922`,
    1644: `923`,
    1645: `924`,
    1646: `925`,
    1647: `925`,
    1648: `926`,
    1649: `926`,
    165: `23`,
    1650: `927`,
    1651: `928`,
    1652: `935`,
    1653: `936`,
    1654: `938`,
    1655: `939`,
    1656: `940`,
    1657: `941`,
    1658: `942`,
    1659: `942`,
    166: `23`,
    1660: `943`,
    1661: `944`,
    1662: `944`,
    1663: `944`,
    1664: `945`,
    1665: `945`,
    1666: `945`,
    1667: `946`,
    1668: `947`,
    1669: `947`,
    167: `23`,
    1670: `948`,
    1671: `949`,
    1672: `956`,
    1673: `956`,
    1674: `957`,
    1675: `957`,
    1676: `958`,
    1677: `958`,
    1678: `958`,
    1679: `959`,
    168: `23`,
    1680: `960`,
    1681: `960`,
    1682: `961`,
    1683: `961`,
    1684: `962`,
    1685: `964`,
    1686: `965`,
    1687: `965`,
    1688: `966`,
    1689: `967`,
    169: `23`,
    1690: `968`,
    1691: `968`,
    1692: `969`,
    1693: `970`,
    1694: `970`,
    1695: `970`,
    1696: `971`,
    1697: `971`,
    1698: `971`,
    1699: `972`,
    17: `2`,
    170: `23`,
    1700: `972`,
    1701: `973`,
    1702: `973`,
    1703: `974`,
    1704: `975`,
    1705: `975`,
    1706: `976`,
    1707: `977`,
    1708: `977`,
    1709: `978`,
    171: `23`,
    1710: `979`,
    1711: `980`,
    1712: `980`,
    1713: `981`,
    1714: `982`,
    1715: `983`,
    1716: `983`,
    1717: `984`,
    1718: `985`,
    1719: `986`,
    172: `23`,
    1720: `986`,
    1721: `987`,
    1722: `988`,
    1723: `989`,
    1724: `990`,
    1725: `990`,
    1726: `990`,
    1727: `991`,
    1728: `992`,
    1729: `992`,
    173: `23`,
    1730: `993`,
    1731: `993`,
    1732: `993`,
    1733: `993`,
    1734: `993`,
    1735: `993`,
    1736: `993`,
    1737: `993`,
    1738: `993`,
    1739: `993`,
    174: `23`,
    1740: `994`,
    1741: `994`,
    1742: `995`,
    1743: `996`,
    1744: `996`,
    1745: `996`,
    1746: `997`,
    1747: `998`,
    1748: `999`,
    1749: `999`,
    175: `23`,
    1750: `1000`,
    1751: `1001`,
    1752: `1001`,
    1753: `1001`,
    1754: `1002`,
    1755: `1002`,
    1756: `1003`,
    1757: `1003`,
    1758: `1004`,
    1759: `1004`,
    176: `23`,
    1760: `1005`,
    1761: `1006`,
    1762: `1007`,
    1763: `1007`,
    1764: `1008`,
    1765: `1009`,
    1766: `1009`,
    1767: `1010`,
    1768: `1010`,
    1769: `1010`,
    177: `23`,
    1770: `1010`,
    1771: `1010`,
    1772: `1010`,
    1773: `1011`,
    1774: `1011`,
    1775: `1012`,
    1776: `1013`,
    1777: `1016`,
    1778: `1017`,
    1779: `1018`,
    178: `23`,
    1780: `1018`,
    1781: `1019`,
    1782: `1019`,
    1783: `1020`,
    1784: `1021`,
    1785: `1021`,
    1786: `1021`,
    1787: `1022`,
    1788: `1023`,
    1789: `1024`,
    179: `23`,
    1790: `1025`,
    1791: `1026`,
    1792: `1026`,
    1793: `1026`,
    1794: `1027`,
    1795: `1027`,
    1796: `1028`,
    1797: `1028`,
    1798: `1029`,
    1799: `1029`,
    18: `2`,
    180: `23`,
    1800: `1029`,
    1801: `1030`,
    1802: `1030`,
    1803: `1031`,
    1804: `1032`,
    1805: `1032`,
    1806: `1033`,
    1807: `1034`,
    1808: `1034`,
    1809: `1034`,
    181: `23`,
    1810: `1035`,
    1811: `1035`,
    1812: `1036`,
    1813: `1036`,
    1814: `1037`,
    1815: `1038`,
    1816: `1039`,
    1817: `1039`,
    1818: `1040`,
    1819: `1041`,
    182: `23`,
    1820: `1041`,
    1821: `1041`,
    1822: `1042`,
    1823: `1043`,
    1824: `1043`,
    1825: `1044`,
    1826: `1045`,
    1827: `1045`,
    1828: `1046`,
    1829: `1046`,
    183: `23`,
    1830: `1047`,
    1831: `1048`,
    1832: `1049`,
    1833: `1050`,
    1834: `1050`,
    1835: `1051`,
    1836: `1052`,
    1837: `1053`,
    1838: `1053`,
    1839: `1054`,
    184: `23`,
    1840: `1055`,
    1841: `1056`,
    1842: `1057`,
    1843: `1058`,
    1844: `1058`,
    1845: `1059`,
    1846: `1060`,
    1847: `1061`,
    1848: `1062`,
    1849: `1063`,
    185: `23`,
    1850: `1063`,
    1851: `1064`,
    1852: `1064`,
    1853: `1065`,
    1854: `1065`,
    1855: `1066`,
    1856: `1067`,
    1857: `1067`,
    1858: `1068`,
    1859: `1068`,
    186: `23`,
    1860: `1069`,
    1861: `1069`,
    1862: `1070`,
    1863: `1070`,
    1864: `1070`,
    1865: `1073`,
    1866: `1073`,
    1867: `1074`,
    1868: `1074`,
    1869: `1075`,
    187: `23`,
    1870: `1075`,
    1871: `1076`,
    1872: `1077`,
    1873: `1078`,
    1874: `1078`,
    1875: `1078`,
    1876: `1079`,
    1877: `1080`,
    1878: `1080`,
    1879: `1081`,
    188: `23`,
    1880: `1081`,
    1881: `1081`,
    1882: `1081`,
    1883: `1081`,
    1884: `1081`,
    1885: `1081`,
    1886: `1081`,
    1887: `1081`,
    1888: `1081`,
    1889: `1082`,
    189: `23`,
    1890: `1082`,
    1891: `1083`,
    1892: `1084`,
    1893: `1085`,
    1894: `1085`,
    1895: `1086`,
    1896: `1086`,
    1897: `1087`,
    1898: `1087`,
    1899: `1088`,
    19: `2`,
    190: `23`,
    1900: `1089`,
    1901: `1089`,
    1902: `1090`,
    1903: `1091`,
    1904: `1091`,
    1905: `1091`,
    1906: `1092`,
    1907: `1093`,
    1908: `1093`,
    1909: `1094`,
    191: `23`,
    1910: `1095`,
    1911: `1095`,
    1912: `1096`,
    1913: `1097`,
    1914: `1098`,
    1915: `1098`,
    1916: `1099`,
    1917: `1100`,
    1918: `1101`,
    1919: `1101`,
    192: `23`,
    1920: `1102`,
    1921: `1103`,
    1922: `1104`,
    1923: `1104`,
    1924: `1105`,
    1925: `1106`,
    1926: `1107`,
    1927: `1107`,
    1928: `1108`,
    1929: `1108`,
    193: `23`,
    1930: `1109`,
    1931: `1109`,
    1932: `1110`,
    1933: `1110`,
    1934: `1110`,
    1935: `1112`,
    1936: `1112`,
    1937: `1113`,
    1938: `1113`,
    1939: `1114`,
    194: `23`,
    1940: `1114`,
    1941: `1115`,
    1942: `1116`,
    1943: `1117`,
    1944: `1117`,
    1945: `1118`,
    1946: `1118`,
    1947: `1119`,
    1948: `1119`,
    1949: `1119`,
    195: `23`,
    1950: `1120`,
    1951: `1120`,
    1952: `1121`,
    1953: `1121`,
    1954: `1121`,
    1955: `1121`,
    1956: `1121`,
    1957: `1121`,
    1958: `1122`,
    1959: `1122`,
    196: `23`,
    1960: `1123`,
    1961: `1124`,
    1962: `1125`,
    1963: `1125`,
    1964: `1126`,
    1965: `1127`,
    1966: `1129`,
    1967: `1129`,
    1968: `1130`,
    1969: `1130`,
    197: `23`,
    1970: `1130`,
    1971: `1131`,
    1972: `1131`,
    1973: `1131`,
    1974: `1131`,
    1975: `1131`,
    1976: `1131`,
    1977: `1131`,
    1978: `1131`,
    1979: `1131`,
    198: `25`,
    1980: `1131`,
    1981: `1131`,
    1982: `1131`,
    1983: `1131`,
    1984: `1131`,
    1985: `1131`,
    1986: `1131`,
    1987: `1131`,
    1988: `1131`,
    1989: `1131`,
    199: `27`,
    1990: `1131`,
    1991: `1131`,
    1992: `1131`,
    1993: `1131`,
    1994: `1131`,
    1995: `1131`,
    1996: `1131`,
    1997: `1131`,
    1998: `1131`,
    1999: `1131`,
    2: `2`,
    20: `2`,
    200: `27`,
    2000: `1131`,
    2001: `1131`,
    2002: `1131`,
    2003: `1131`,
    2004: `1131`,
    2005: `1131`,
    2006: `1131`,
    2007: `1131`,
    2008: `1131`,
    2009: `1131`,
    201: `27`,
    2010: `1131`,
    2011: `1131`,
    2012: `1131`,
    2013: `1131`,
    2014: `1131`,
    2015: `1131`,
    2016: `1131`,
    2017: `1131`,
    2018: `1131`,
    2019: `1131`,
    202: `28`,
    2020: `1131`,
    2021: `1131`,
    2022: `1131`,
    2023: `1131`,
    2024: `1131`,
    2025: `1131`,
    2026: `1131`,
    2027: `1131`,
    2028: `1131`,
    2029: `1131`,
    203: `28`,
    2030: `1131`,
    2031: `1132`,
    2032: `1132`,
    2033: `1133`,
    2034: `1134`,
    2035: `1134`,
    2036: `1135`,
    2037: `1135`,
    2038: `1136`,
    2039: `1136`,
    204: `30`,
    2040: `1137`,
    2041: `1137`,
    2042: `1137`,
    2043: `1139`,
    2044: `1139`,
    2045: `1139`,
    2046: `1140`,
    2047: `1140`,
    2048: `1140`,
    2049: `1140`,
    205: `31`,
    2050: `1141`,
    2051: `1141`,
    2052: `1141`,
    2053: `1142`,
    2054: `1142`,
    2055: `1142`,
    2056: `1143`,
    2057: `1143`,
    2058: `1144`,
    2059: `1144`,
    206: `32`,
    2060: `1144`,
    2061: `1146`,
    2062: `1146`,
    2063: `1146`,
    2064: `1147`,
    2065: `1147`,
    2066: `1147`,
    2067: `1148`,
    2068: `1148`,
    2069: `1149`,
    207: `33`,
    2070: `1149`,
    2071: `1149`,
    2072: `1151`,
    2073: `1152`,
    2074: `1152`,
    2075: `1153`,
    2076: `1154`,
    2077: `1155`,
    2078: `1156`,
    2079: `1156`,
    208: `33`,
    2080: `1157`,
    2081: `1158`,
    2082: `1159`,
    2083: `1160`,
    2084: `1160`,
    2085: `1161`,
    2086: `1162`,
    2087: `1163`,
    2088: `1164`,
    2089: `1164`,
    209: `34`,
    2090: `1165`,
    2091: `1166`,
    2092: `1167`,
    2093: `1167`,
    2094: `1167`,
    2095: `1168`,
    2096: `1168`,
    2097: `1168`,
    2098: `1169`,
    2099: `1170`,
    21: `2`,
    210: `35`,
    2100: `1171`,
    2101: `1172`,
    2102: `1172`,
    2103: `1172`,
    2104: `1174`,
    2105: `1174`,
    2106: `1174`,
    2107: `1176`,
    2108: `1176`,
    2109: `1177`,
    211: `35`,
    2110: `1177`,
    2111: `1177`,
    2112: `1178`,
    2113: `1178`,
    2114: `1179`,
    2115: `1179`,
    2116: `1179`,
    2117: `1181`,
    2118: `1181`,
    2119: `1182`,
    212: `36`,
    2120: `1182`,
    2121: `1182`,
    2122: `1183`,
    2123: `1183`,
    2124: `1184`,
    2125: `1184`,
    2126: `1184`,
    2127: `1186`,
    2128: `1186`,
    2129: `1186`,
    213: `37`,
    2130: `1188`,
    2131: `1188`,
    2132: `1189`,
    2133: `1189`,
    2134: `1190`,
    2135: `1190`,
    2136: `1190`,
    2137: `1192`,
    2138: `1192`,
    2139: `1193`,
    214: `38`,
    2140: `1193`,
    2141: `1194`,
    2142: `1194`,
    2143: `1195`,
    2144: `1196`,
    2145: `1197`,
    2146: `1197`,
    2147: `1197`,
    2148: `1198`,
    2149: `1198`,
    215: `39`,
    2150: `1199`,
    2151: `1199`,
    2152: `1200`,
    2153: `1200`,
    2154: `1200`,
    2155: `1201`,
    2156: `1201`,
    2157: `1202`,
    2158: `1203`,
    2159: `1203`,
    216: `39`,
    2160: `1204`,
    2161: `1205`,
    2162: `1205`,
    2163: `1205`,
    2164: `1206`,
    2165: `1206`,
    2166: `1207`,
    2167: `1207`,
    2168: `1208`,
    2169: `1209`,
    217: `41`,
    2170: `1210`,
    2171: `1210`,
    2172: `1211`,
    2173: `1212`,
    2174: `1212`,
    2175: `1212`,
    2176: `1213`,
    2177: `1214`,
    2178: `1214`,
    2179: `1215`,
    218: `42`,
    2180: `1216`,
    2181: `1216`,
    2182: `1217`,
    2183: `1217`,
    2184: `1218`,
    2185: `1219`,
    2186: `1220`,
    2187: `1221`,
    2188: `1221`,
    2189: `1222`,
    219: `42`,
    2190: `1223`,
    2191: `1224`,
    2192: `1224`,
    2193: `1225`,
    2194: `1226`,
    2195: `1227`,
    2196: `1228`,
    2197: `1229`,
    2198: `1229`,
    2199: `1230`,
    22: `2`,
    220: `43`,
    2200: `1231`,
    2201: `1232`,
    2202: `1232`,
    2203: `1233`,
    2204: `1233`,
    2205: `1234`,
    2206: `1234`,
    2207: `1235`,
    2208: `1236`,
    2209: `1236`,
    221: `44`,
    2210: `1237`,
    2211: `1237`,
    2212: `1238`,
    2213: `1238`,
    2214: `1239`,
    2215: `1239`,
    2216: `1239`,
    2217: `1241`,
    2218: `1241`,
    2219: `1243`,
    222: `45`,
    2220: `1243`,
    2221: `1244`,
    2222: `1244`,
    2223: `1244`,
    2224: `1245`,
    2225: `1245`,
    2226: `1246`,
    2227: `1247`,
    2228: `1247`,
    2229: `1248`,
    223: `45`,
    2230: `1249`,
    2231: `1250`,
    2232: `1250`,
    2233: `1251`,
    2234: `1252`,
    2235: `1253`,
    2236: `1255`,
    2237: `1256`,
    2238: `1256`,
    2239: `1257`,
    224: `45`,
    2240: `1257`,
    2241: `1258`,
    2242: `1258`,
    2243: `1258`,
    2244: `1260`,
    2245: `1260`,
    2246: `1261`,
    2247: `1261`,
    2248: `1262`,
    2249: `1263`,
    225: `46`,
    2250: `1265`,
    2251: `1265`,
    2252: `1265`,
    2253: `1267`,
    2254: `1267`,
    2255: `1268`,
    2256: `1269`,
    2257: `1269`,
    2258: `1270`,
    2259: `1271`,
    226: `46`,
    2260: `1273`,
    2261: `1274`,
    2262: `1274`,
    2263: `1275`,
    2264: `1275`,
    2265: `1276`,
    2266: `1276`,
    2267: `1276`,
    2268: `1277`,
    2269: `1277`,
    227: `47`,
    2270: `1277`,
    2271: `1279`,
    2272: `1280`,
    2273: `1281`,
    2274: `1282`,
    2275: `1283`,
    2276: `1285`,
    2277: `1286`,
    2278: `1286`,
    2279: `1287`,
    228: `48`,
    2280: `1288`,
    2281: `1288`,
    2282: `1289`,
    2283: `1289`,
    2284: `1290`,
    2285: `1290`,
    2286: `1291`,
    2287: `1292`,
    2288: `1294`,
    2289: `1294`,
    229: `49`,
    2290: `1294`,
    2291: `1296`,
    2292: `1296`,
    2293: `1296`,
    2294: `1298`,
    2295: `1298`,
    2296: `1299`,
    2297: `1299`,
    2298: `1299`,
    2299: `1300`,
    23: `2`,
    230: `49`,
    2300: `1300`,
    2301: `1301`,
    2302: `1301`,
    2303: `1301`,
    2304: `1303`,
    2305: `1303`,
    2306: `1303`,
    2307: `1305`,
    2308: `1306`,
    2309: `1308`,
    231: `50`,
    2310: `1309`,
    2311: `1310`,
    2312: `1311`,
    2313: `1311`,
    2314: `1312`,
    2315: `1312`,
    2316: `1313`,
    2317: `1313`,
    2318: `1313`,
    2319: `1314`,
    232: `50`,
    2320: `1316`,
    2321: `1317`,
    2322: `1318`,
    2323: `1318`,
    2324: `1318`,
    2325: `1319`,
    2326: `1320`,
    2327: `1320`,
    2328: `1321`,
    2329: `1321`,
    233: `51`,
    2330: `1321`,
    2331: `1322`,
    2332: `1324`,
    2333: `1325`,
    2334: `1326`,
    2335: `1327`,
    2336: `1327`,
    2337: `1327`,
    2338: `1328`,
    2339: `1328`,
    234: `51`,
    2340: `1329`,
    2341: `1330`,
    2342: `1331`,
    2343: `1333`,
    2344: `1334`,
    2345: `1334`,
    2346: `1334`,
    2347: `1335`,
    2348: `1335`,
    2349: `1336`,
    235: `51`,
    2350: `1337`,
    2351: `1337`,
    2352: `1337`,
    2353: `1338`,
    2354: `1338`,
    2355: `1339`,
    2356: `1340`,
    2357: `1340`,
    2358: `1341`,
    2359: `1342`,
    236: `52`,
    2360: `1342`,
    2361: `1343`,
    2362: `1344`,
    2363: `1344`,
    2364: `1345`,
    2365: `1346`,
    2366: `1346`,
    2367: `1347`,
    2368: `1348`,
    2369: `1348`,
    237: `52`,
    2370: `1348`,
    2371: `1349`,
    2372: `1350`,
    2373: `1350`,
    2374: `1351`,
    2375: `1352`,
    2376: `1352`,
    2377: `1352`,
    2378: `1353`,
    2379: `1353`,
    238: `53`,
    2380: `1354`,
    2381: `1355`,
    2382: `1355`,
    2383: `1356`,
    2384: `1357`,
    2385: `1357`,
    2386: `1358`,
    2387: `1359`,
    2388: `1359`,
    2389: `1360`,
    239: `53`,
    2390: `1361`,
    2391: `1361`,
    2392: `1362`,
    2393: `1363`,
    2394: `1363`,
    2395: `1364`,
    2396: `1365`,
    2397: `1365`,
    2398: `1366`,
    2399: `1366`,
    24: `2`,
    240: `53`,
    2400: `1367`,
    2401: `1368`,
    2402: `1368`,
    2403: `1369`,
    2404: `1371`,
    2405: `1372`,
    2406: `1372`,
    2407: `1372`,
    2408: `1373`,
    2409: `1374`,
    241: `53`,
    2410: `1375`,
    2411: `1376`,
    2412: `1377`,
    2413: `1379`,
    2414: `1380`,
    2415: `1381`,
    2416: `1382`,
    2417: `1382`,
    2418: `1382`,
    2419: `1383`,
    242: `53`,
    2420: `1383`,
    2421: `1384`,
    2422: `1384`,
    2423: `1384`,
    2424: `1385`,
    2425: `1385`,
    2426: `1385`,
    2427: `1387`,
    2428: `1388`,
    2429: `1388`,
    243: `53`,
    2430: `1388`,
    2431: `1390`,
    2432: `1391`,
    2433: `1392`,
    2434: `1392`,
    2435: `1393`,
    2436: `1395`,
    2437: `1395`,
    2438: `1396`,
    2439: `1397`,
    244: `54`,
    2440: `1397`,
    2441: `1398`,
    2442: `1401`,
    2443: `1401`,
    2444: `1402`,
    2445: `1402`,
    2446: `1403`,
    2447: `1404`,
    2448: `1405`,
    2449: `1406`,
    245: `54`,
    2450: `1406`,
    2451: `1407`,
    2452: `1408`,
    2453: `1408`,
    2454: `1409`,
    2455: `1409`,
    2456: `1410`,
    2457: `1410`,
    2458: `1411`,
    2459: `1412`,
    246: `55`,
    2460: `1413`,
    2461: `1413`,
    2462: `1414`,
    2463: `1415`,
    2464: `1416`,
    2465: `1417`,
    2466: `1417`,
    2467: `1418`,
    2468: `1419`,
    2469: `1420`,
    247: `56`,
    2470: `1422`,
    2471: `1423`,
    2472: `1423`,
    2473: `1424`,
    2474: `1426`,
    2475: `1427`,
    2476: `1428`,
    2477: `1429`,
    2478: `1430`,
    2479: `1430`,
    248: `57`,
    2480: `1431`,
    2481: `1432`,
    2482: `1433`,
    2483: `1434`,
    2484: `1436`,
    2485: `1436`,
    2486: `1437`,
    2487: `1437`,
    2488: `1438`,
    2489: `1439`,
    249: `57`,
    2490: `1440`,
    2491: `1440`,
    2492: `1440`,
    2493: `1441`,
    2494: `1441`,
    2495: `1441`,
    2496: `1443`,
    2497: `1443`,
    2498: `1444`,
    2499: `1445`,
    25: `2`,
    250: `58`,
    2500: `1445`,
    2501: `1446`,
    251: `59`,
    252: `61`,
    253: `61`,
    254: `62`,
    255: `62`,
    256: `62`,
    257: `63`,
    258: `63`,
    259: `64`,
    26: `2`,
    260: `65`,
    261: `66`,
    262: `66`,
    263: `66`,
    264: `66`,
    265: `66`,
    266: `66`,
    267: `66`,
    268: `66`,
    269: `66`,
    27: `2`,
    270: `66`,
    271: `66`,
    272: `66`,
    273: `66`,
    274: `66`,
    275: `66`,
    276: `66`,
    277: `66`,
    278: `66`,
    279: `67`,
    28: `2`,
    280: `67`,
    281: `67`,
    282: `69`,
    283: `69`,
    284: `69`,
    285: `70`,
    286: `71`,
    287: `71`,
    288: `73`,
    289: `74`,
    29: `2`,
    290: `75`,
    291: `76`,
    292: `76`,
    293: `77`,
    294: `78`,
    295: `79`,
    296: `79`,
    297: `80`,
    298: `81`,
    299: `82`,
    3: `2`,
    30: `4`,
    300: `83`,
    301: `83`,
    302: `84`,
    303: `84`,
    304: `84`,
    305: `86`,
    306: `86`,
    307: `86`,
    308: `87`,
    309: `87`,
    31: `4`,
    310: `87`,
    311: `88`,
    312: `89`,
    313: `89`,
    314: `90`,
    315: `90`,
    316: `92`,
    317: `93`,
    318: `94`,
    319: `95`,
    32: `5`,
    320: `95`,
    321: `96`,
    322: `96`,
    323: `97`,
    324: `98`,
    325: `99`,
    326: `100`,
    327: `101`,
    328: `102`,
    329: `103`,
    33: `5`,
    330: `104`,
    331: `104`,
    332: `105`,
    333: `105`,
    334: `105`,
    335: `108`,
    336: `108`,
    337: `108`,
    338: `108`,
    339: `108`,
    34: `5`,
    340: `108`,
    341: `108`,
    342: `108`,
    343: `108`,
    344: `108`,
    345: `108`,
    346: `108`,
    347: `108`,
    348: `108`,
    349: `108`,
    35: `6`,
    350: `108`,
    351: `108`,
    352: `108`,
    353: `108`,
    354: `108`,
    355: `108`,
    356: `108`,
    357: `108`,
    358: `108`,
    359: `108`,
    36: `7`,
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
    37: `8`,
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
    38: `9`,
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
    39: `10`,
    390: `108`,
    391: `108`,
    392: `108`,
    393: `108`,
    394: `109`,
    395: `109`,
    396: `110`,
    397: `110`,
    398: `110`,
    399: `112`,
    4: `2`,
    40: `11`,
    400: `112`,
    401: `112`,
    402: `113`,
    403: `113`,
    404: `115`,
    405: `116`,
    406: `117`,
    407: `117`,
    408: `118`,
    409: `118`,
    41: `11`,
    410: `119`,
    411: `120`,
    412: `120`,
    413: `121`,
    414: `122`,
    415: `123`,
    416: `124`,
    417: `124`,
    418: `125`,
    419: `125`,
    42: `12`,
    420: `125`,
    421: `127`,
    422: `127`,
    423: `127`,
    424: `128`,
    425: `128`,
    426: `128`,
    427: `129`,
    428: `130`,
    429: `130`,
    43: `13`,
    430: `130`,
    431: `131`,
    432: `132`,
    433: `132`,
    434: `133`,
    435: `133`,
    436: `134`,
    437: `134`,
    438: `136`,
    439: `137`,
    44: `14`,
    440: `138`,
    441: `138`,
    442: `138`,
    443: `139`,
    444: `139`,
    445: `140`,
    446: `140`,
    447: `141`,
    448: `142`,
    449: `143`,
    45: `14`,
    450: `143`,
    451: `144`,
    452: `145`,
    453: `146`,
    454: `147`,
    455: `148`,
    456: `148`,
    457: `149`,
    458: `149`,
    459: `149`,
    46: `15`,
    460: `151`,
    461: `151`,
    462: `151`,
    463: `152`,
    464: `152`,
    465: `154`,
    466: `154`,
    467: `155`,
    468: `156`,
    469: `157`,
    47: `16`,
    470: `160`,
    471: `160`,
    472: `160`,
    473: `162`,
    474: `163`,
    475: `164`,
    476: `165`,
    477: `165`,
    478: `166`,
    479: `167`,
    48: `17`,
    480: `167`,
    481: `167`,
    482: `168`,
    483: `169`,
    484: `170`,
    485: `171`,
    486: `172`,
    487: `173`,
    488: `173`,
    489: `173`,
    49: `18`,
    490: `174`,
    491: `174`,
    492: `176`,
    493: `176`,
    494: `177`,
    495: `178`,
    496: `179`,
    497: `182`,
    498: `182`,
    499: `182`,
    5: `2`,
    50: `19`,
    500: `182`,
    501: `182`,
    502: `182`,
    503: `183`,
    504: `183`,
    505: `184`,
    506: `185`,
    507: `187`,
    508: `188`,
    509: `191`,
    51: `21`,
    510: `191`,
    511: `192`,
    512: `193`,
    513: `194`,
    514: `197`,
    515: `197`,
    516: `197`,
    517: `198`,
    518: `198`,
    519: `199`,
    52: `21`,
    520: `200`,
    521: `200`,
    522: `201`,
    523: `201`,
    524: `201`,
    525: `203`,
    526: `203`,
    527: `203`,
    528: `204`,
    529: `204`,
    53: `21`,
    530: `204`,
    531: `205`,
    532: `206`,
    533: `206`,
    534: `207`,
    535: `207`,
    536: `209`,
    537: `209`,
    538: `210`,
    539: `211`,
    54: `21`,
    540: `212`,
    541: `215`,
    542: `215`,
    543: `215`,
    544: `216`,
    545: `216`,
    546: `217`,
    547: `219`,
    548: `220`,
    549: `220`,
    55: `21`,
    550: `221`,
    551: `222`,
    552: `223`,
    553: `223`,
    554: `224`,
    555: `224`,
    556: `225`,
    557: `226`,
    558: `227`,
    559: `228`,
    56: `21`,
    560: `228`,
    561: `228`,
    562: `229`,
    563: `229`,
    564: `229`,
    565: `230`,
    566: `230`,
    567: `230`,
    568: `231`,
    569: `231`,
    57: `21`,
    570: `232`,
    571: `232`,
    572: `232`,
    573: `234`,
    574: `234`,
    575: `234`,
    576: `235`,
    577: `235`,
    578: `237`,
    579: `237`,
    58: `21`,
    580: `238`,
    581: `239`,
    582: `240`,
    583: `243`,
    584: `243`,
    585: `243`,
    586: `245`,
    587: `246`,
    588: `247`,
    589: `247`,
    59: `21`,
    590: `248`,
    591: `248`,
    592: `249`,
    593: `250`,
    594: `250`,
    595: `250`,
    596: `251`,
    597: `252`,
    598: `253`,
    599: `254`,
    6: `2`,
    60: `21`,
    600: `255`,
    601: `256`,
    602: `256`,
    603: `256`,
    604: `257`,
    605: `257`,
    606: `258`,
    607: `258`,
    608: `258`,
    609: `261`,
    61: `21`,
    610: `261`,
    611: `262`,
    612: `263`,
    613: `264`,
    614: `267`,
    615: `267`,
    616: `267`,
    617: `268`,
    618: `268`,
    619: `269`,
    62: `21`,
    620: `270`,
    621: `270`,
    622: `271`,
    623: `271`,
    624: `271`,
    625: `274`,
    626: `274`,
    627: `275`,
    628: `276`,
    629: `277`,
    63: `21`,
    630: `280`,
    631: `280`,
    632: `280`,
    633: `281`,
    634: `281`,
    635: `282`,
    636: `283`,
    637: `283`,
    638: `284`,
    639: `284`,
    64: `21`,
    640: `284`,
    641: `287`,
    642: `287`,
    643: `288`,
    644: `289`,
    645: `290`,
    646: `293`,
    647: `293`,
    648: `293`,
    649: `294`,
    65: `21`,
    650: `294`,
    651: `295`,
    652: `296`,
    653: `296`,
    654: `297`,
    655: `297`,
    656: `297`,
    657: `300`,
    658: `300`,
    659: `301`,
    66: `21`,
    660: `302`,
    661: `303`,
    662: `306`,
    663: `306`,
    664: `306`,
    665: `307`,
    666: `307`,
    667: `308`,
    668: `309`,
    669: `309`,
    67: `21`,
    670: `310`,
    671: `310`,
    672: `310`,
    673: `312`,
    674: `312`,
    675: `312`,
    676: `313`,
    677: `313`,
    678: `315`,
    679: `315`,
    68: `21`,
    680: `316`,
    681: `317`,
    682: `318`,
    683: `321`,
    684: `321`,
    685: `321`,
    686: `322`,
    687: `323`,
    688: `325`,
    689: `326`,
    69: `21`,
    690: `327`,
    691: `328`,
    692: `329`,
    693: `329`,
    694: `330`,
    695: `331`,
    696: `331`,
    697: `331`,
    698: `332`,
    699: `332`,
    7: `2`,
    70: `21`,
    700: `332`,
    701: `333`,
    702: `333`,
    703: `334`,
    704: `334`,
    705: `334`,
    706: `336`,
    707: `336`,
    708: `336`,
    709: `337`,
    71: `21`,
    710: `337`,
    711: `337`,
    712: `338`,
    713: `339`,
    714: `339`,
    715: `340`,
    716: `340`,
    717: `342`,
    718: `342`,
    719: `343`,
    72: `21`,
    720: `344`,
    721: `345`,
    722: `348`,
    723: `348`,
    724: `348`,
    725: `349`,
    726: `349`,
    727: `350`,
    728: `352`,
    729: `353`,
    73: `21`,
    730: `353`,
    731: `354`,
    732: `355`,
    733: `356`,
    734: `356`,
    735: `357`,
    736: `357`,
    737: `358`,
    738: `359`,
    739: `360`,
    74: `21`,
    740: `361`,
    741: `361`,
    742: `361`,
    743: `362`,
    744: `362`,
    745: `362`,
    746: `363`,
    747: `363`,
    748: `363`,
    749: `364`,
    75: `21`,
    750: `364`,
    751: `365`,
    752: `365`,
    753: `365`,
    754: `367`,
    755: `367`,
    756: `367`,
    757: `368`,
    758: `369`,
    759: `369`,
    76: `21`,
    760: `369`,
    761: `370`,
    762: `371`,
    763: `371`,
    764: `372`,
    765: `372`,
    766: `374`,
    767: `375`,
    768: `376`,
    769: `376`,
    77: `21`,
    770: `376`,
    771: `377`,
    772: `377`,
    773: `378`,
    774: `379`,
    775: `379`,
    776: `380`,
    777: `381`,
    778: `382`,
    779: `383`,
    78: `21`,
    780: `383`,
    781: `384`,
    782: `385`,
    783: `386`,
    784: `386`,
    785: `387`,
    786: `387`,
    787: `387`,
    788: `390`,
    789: `390`,
    79: `21`,
    790: `390`,
    791: `390`,
    792: `390`,
    793: `390`,
    794: `390`,
    795: `390`,
    796: `390`,
    797: `390`,
    798: `390`,
    799: `390`,
    8: `2`,
    80: `21`,
    800: `390`,
    801: `390`,
    802: `390`,
    803: `390`,
    804: `390`,
    805: `390`,
    806: `390`,
    807: `390`,
    808: `390`,
    809: `390`,
    81: `21`,
    810: `390`,
    811: `390`,
    812: `390`,
    813: `390`,
    814: `390`,
    815: `390`,
    816: `390`,
    817: `390`,
    818: `390`,
    819: `390`,
    82: `21`,
    820: `390`,
    821: `390`,
    822: `390`,
    823: `390`,
    824: `390`,
    825: `390`,
    826: `390`,
    827: `390`,
    828: `390`,
    829: `390`,
    83: `21`,
    830: `390`,
    831: `390`,
    832: `390`,
    833: `390`,
    834: `390`,
    835: `390`,
    836: `390`,
    837: `390`,
    838: `390`,
    839: `390`,
    84: `21`,
    840: `390`,
    841: `390`,
    842: `390`,
    843: `390`,
    844: `390`,
    845: `390`,
    846: `390`,
    847: `391`,
    848: `391`,
    849: `392`,
    85: `21`,
    850: `392`,
    851: `392`,
    852: `394`,
    853: `394`,
    854: `395`,
    855: `395`,
    856: `396`,
    857: `398`,
    858: `399`,
    859: `400`,
    86: `21`,
    860: `401`,
    861: `401`,
    862: `402`,
    863: `403`,
    864: `403`,
    865: `403`,
    866: `404`,
    867: `405`,
    868: `406`,
    869: `407`,
    87: `21`,
    870: `408`,
    871: `409`,
    872: `417`,
    873: `417`,
    874: `418`,
    875: `419`,
    876: `419`,
    877: `420`,
    878: `420`,
    879: `420`,
    88: `21`,
    880: `421`,
    881: `422`,
    882: `423`,
    883: `423`,
    884: `423`,
    885: `424`,
    886: `425`,
    887: `425`,
    888: `426`,
    889: `426`,
    89: `21`,
    890: `426`,
    891: `426`,
    892: `426`,
    893: `426`,
    894: `426`,
    895: `426`,
    896: `426`,
    897: `426`,
    898: `427`,
    899: `427`,
    9: `2`,
    90: `21`,
    900: `428`,
    901: `429`,
    902: `430`,
    903: `430`,
    904: `431`,
    905: `431`,
    906: `432`,
    907: `432`,
    908: `433`,
    909: `434`,
    91: `21`,
    910: `434`,
    911: `435`,
    912: `436`,
    913: `436`,
    914: `436`,
    915: `437`,
    916: `438`,
    917: `438`,
    918: `439`,
    919: `440`,
    92: `21`,
    920: `440`,
    921: `441`,
    922: `442`,
    923: `443`,
    924: `443`,
    925: `444`,
    926: `445`,
    927: `446`,
    928: `446`,
    929: `447`,
    93: `21`,
    930: `448`,
    931: `449`,
    932: `449`,
    933: `450`,
    934: `451`,
    935: `452`,
    936: `452`,
    937: `453`,
    938: `453`,
    939: `454`,
    94: `21`,
    940: `454`,
    941: `456`,
    942: `456`,
    943: `457`,
    944: `457`,
    945: `457`,
    946: `458`,
    947: `459`,
    948: `459`,
    949: `459`,
    95: `21`,
    950: `460`,
    951: `460`,
    952: `461`,
    953: `462`,
    954: `463`,
    955: `463`,
    956: `464`,
    957: `464`,
    958: `465`,
    959: `465`,
    96: `21`,
    960: `465`,
    961: `466`,
    962: `467`,
    963: `467`,
    964: `468`,
    965: `468`,
    966: `469`,
    967: `469`,
    968: `469`,
    969: `470`,
    97: `21`,
    970: `470`,
    971: `471`,
    972: `471`,
    973: `472`,
    974: `472`,
    975: `473`,
    976: `474`,
    977: `474`,
    978: `475`,
    979: `475`,
    98: `21`,
    980: `476`,
    981: `476`,
    982: `477`,
    983: `478`,
    984: `478`,
    985: `479`,
    986: `479`,
    987: `480`,
    988: `480`,
    989: `481`,
    99: `21`,
    990: `482`,
    991: `482`,
    992: `483`,
    993: `483`,
    994: `484`,
    995: `484`,
    996: `485`,
    997: `486`,
    998: `486`,
    999: `488`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T16","name":"v9738","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_181","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_181","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_181","type":"tuple"},{"internalType":"bool","name":"_User_optin0_181","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3696","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4092","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4494","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4885","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5277","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5692","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6155","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6577","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v9689","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9695","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9702","type":"address"},{"internalType":"uint256","name":"v9703","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9713","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9721","type":"address"},{"internalType":"address payable","name":"v9722","type":"address"},{"internalType":"uint256","name":"v9723","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9653","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9660","type":"address"},{"internalType":"address payable","name":"v9661","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9665","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9677","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9682","type":"address"},{"internalType":"address payable","name":"v9683","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9730","type":"uint256"},{"internalType":"address payable","name":"v9731","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_181","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_181","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_181","type":"tuple"},{"internalType":"bool","name":"_User_optin0_181","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v9741","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62004e4538819003918201601f19168301916001600160401b03831184841017620005a15780849260409485528339810103126200070c576020604051916200004c8362000711565b80518352015161ffff19811681036200070c576020820152600080554360035560405161026081016001600160401b03811182821017620005a157600091610240916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201528261022082015201526040519081606081011060018060401b03606084011117620005a15760608201604052620001376060830162000711565b6000606083015260006080830152606082018252620001556200072d565b6020830152620001646200075d565b604083015260ff60045416620006f3577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a180518015908115620006e6575b5015620006cd5734620006b45760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152604051918260a081011060018060401b0360a085011117620005a15760409060a0840182526000845260006020850152620002736200075d565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b03602083011117620005a1576020818101604090815260008352830151015115620005b757506040516001600160401b03610140820190811190821117620005a15780610140610120920160405260008152600060208201526000604082015260006060820152600060808201526200032a6200072d565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c08101518284015260e0810151610140840152610100810151610160840152015161018082015261018081526101a0810181811060018060401b03821117620005a15760405280516001600160401b038111620005a15762000491600254620007af565b601f811162000553575b50602091601f8211600114620004e957918192600092620004dd575b50508160011b916000199060031b1c1916176002555b60405161461f9081620008068239f35b015190503880620004b7565b601f19821692600260005260206000209160005b8581106200053a5750836001951062000520575b505050811b01600255620004cd565b015160001960f88460031b161c1916905538808062000511565b91926020600181928685015181550194019201620004fd565b60026000526200058f9060008051602062004e25833981519152601f840160051c8101916020851062000596575b601f0160051c0190620007ec565b386200049b565b909150819062000581565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620006aa575bf115620006945760008093928193928293478093525116828215620006a0575bf115620006945760008055600060015562000613600254620007af565b8062000621575b50620004cd565b601f81116001146200063b575060006002555b386200061a565b60026000526200068390601f0160051c60008051602062004e25833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620007ec565b600060208120816002555562000634565b6040513d6000823e3d90fd5b506108fc620005f6565b506108fc620005d6565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b90506001541438620001c1565b60405163100960cb60e01b815260116004820152602490fd5b600080fd5b604081019081106001600160401b03821117620005a157604052565b604051906200073c8262000711565b60006020836040516200074f8162000711565b838152838382015281520152565b6040519060e082016001600160401b03811183821017620005a1576040528160c0600091828152826020820152620007946200072d565b60408201528260608201528260808201528260a08201520152565b90600182811c92168015620007e1575b6020831014620007cb57565b634e487b7160e01b600052602260045260246000fd5b91607f1691620007bf565b818110620007f8575050565b60008155600101620007ec56fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610e3b5780631548a30d14610d1a5780631e93b0f114610cfb57806336e56ea514610c9a5780633702d0ce14610c5e5780634ab9f8b314610c08578063523df4f614610ba5578063544774a914610b4b57806355c42a9514610b0b578063582523cd14610a64578063672422c714610a1657806374623535146109da57806374ecfa44146107f757806374f16ec9146107635780637a2b54dc146107205780637f0595e2146106b9578063832307571461069a578063883513de1461064e57806392cf8bd514610601578063a57924241461057a578063a855bc10146104c6578063ab53f2c61461045a578063b87939c7146103a8578063bf7df9c314610356578063cd6637a814610309578063f1b1259d146101be5763f33c0dce146101525750610010565b346101ba57816003193601126101ba57600361016c61136f565b9254036101a35760206101a08484610100610196610188611017565b868082518301019101611587565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b5080fd5b5091346101ba57806003193601126101ba576101d8610e9d565b916101e1610eb8565b906101ea61136f565b918351946101f786610f55565b6001600160a01b03908116865290811660208681019182529561021861458e565b9760038554036102f2575092828692889994610200999661024861023a611017565b898082518301019101611587565b50511685515251168484510152838301928184515281858551015260018151926102988551948561027c8a820192836116cd565b0395610290601f1997888101835282610ff4565b51902061119a565b51906102a382610ece565b6102ac82610ece565b50036102e9576102da9293505190610290845191826102ce88820195866116cd565b03908101835282610ff4565b01510151928391015251908152f35b50505051610196565b602490601088519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba57600361032461136f565b92540361033f576020610180848460c0610196610188611017565b602490600c84519163100960cb60e01b8352820152fd5b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a1575061039261039d9261038c6110c2565b5061131e565b905191829182610eee565b0390f35b80fd5b8280fd5b5090346103a15760203660031901126103a1576103c3610e9d565b6103cb61136f565b9260038354036104435760206101e086868187876103f86103ea611017565b888082518301019101611587565b506001600160a01b031690600161040e836110e1565b5161041881610ece565b61042181610ece565b036104385750610196906110e1565b015251908152f35b915050928391610430565b602490600f86519163100960cb60e01b8352820152fd5b8284346101ba57816003193601126101ba578154610476611017565b91805193849283526020828185015284518093850152815b8381106104af57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161048e565b509190816003193601126103a1576102209061056f6104e3610eb8565b946104ec61136f565b9283918651906104fb82610f55565b3581526001600160a01b03978816602082810191825288519099909161052083610f55565b895161052b81610f55565b858152858c82015283528a83019361054161140b565b8552518351525116898251015260068251525160e0825101526105626114e3565b91825251878201526116f0565b015115159051908152f35b50346101ba5760203660031901126101ba57610594610e9d565b90600361059f61136f565b9354036105ea576020610140858560016105cb876105be6103ea611017565b50828060a01b031661131e565b516105d581610ece565b6105de81610ece565b14928391015251908152f35b602490600a85519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba57600361061c61136f565b925403610637576020610160848460e0610196610188611017565b602490600b84519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba57600361066961136f565b925403610683576020610100848481610196610188611017565b602490600884519163100960cb60e01b8352820152fd5b8284346101ba57816003193601126101ba576020906001549051908152f35b50346101ba5760203660031901126101ba576106d3610e9d565b9060036106de61136f565b93540361070957602060e0858560016105cb876106fc6103ea611017565b50828060a01b0316611252565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101ba5761024060209261056f61073e61136f565b80926107486114e3565b878101906007825152511515610100825101526105626114e3565b8284806003193601126101ba57606061077a610e9d565b9261056f61078661136f565b8092855161079381610f55565b60209788820160018060a01b03809216835260243581528851916107b683610f55565b89516107c181610f55565b858152858c82015283528a8301936107d761140b565b8552511682515251898251015260028251525186825101526105626114e3565b50916101c03660031901126101ba5761080e61136f565b815161081981610f55565b843581526101a03660231901126109d6578251946101208601906001600160401b038211878310176109c35750835260243560088110156109bf578552602094856043193601126109bf57835161086f81610f86565b6001600160a01b039060443582811681036109bb57815287830152866063193601126109b35784516108a081610f86565b606435815285830152846083193601126109b35784516108bf81610f55565b60843582811681036109bb57815260a43588820152606083015260c43580151581036109b75760808301528660e3193601126109b357845161090081610f86565b60e43582811681036109bb57815260a08301526060366101031901126109b357845161092b81610fa1565b6101043582811681036109bb5781526101243582811681036109bb5788820152610144358682015260c083015284610163193601126109b35784519061097082610f55565b6101643582526101843590811681036109b7578782015260e08201526101a43580151581036109b357610100820152858201526109ad91906116f0565b51908152f35b8580fd5b8680fd5b8780fd5b8480fd5b634e487b7160e01b865260419052602485fd5b8380fd5b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a1575061039261039d92610a106110c2565b50611252565b50346101ba57816003193601126101ba576003610a3161136f565b925403610a4d5760206101c08484610120610196610188611017565b602490600e84519163100960cb60e01b8352820152fd5b828460603660031901126101ba5760c060209261056f610a82610e9d565b91610a8b610eb8565b90610a9461136f565b938492610a9f6110c2565b6001600160a01b039283168152908216898201908152604435898301908152895192939091610acd84610f55565b610ad56110c2565b8452818c850195610ae461140b565b8752511684515251168a8351015251888251015260058251525186825101526105626114e3565b8284816003193601126101ba57608060209261056f610b2861136f565b8092610b326114e3565b87810190600382515251151586825101526105626114e3565b509190346103a15760203660031901126103a157506020610b77608093610b70611164565b503561119a565b91808051938051610b8781610ece565b85528381015115158486015201519081519084015201516060820152f35b60208484366003190183136103a157829061056f610bc1610e9d565b610bc961136f565b928391610bd46114b4565b80516001600160a01b03909216909152858101805183905290518151870152610bfb6114e3565b91825251858201526116f0565b50829060203660031901126103a45760a09061056f602094610c28610e9d565b90610c3161136f565b938492610c3c6114b4565b908151906001808a1b03169052888101918251525186825101526105626114e3565b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a1575061039261039d92610c946110c2565b506112cd565b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a15750610cd5606092610ccf6110c2565b506110e1565b90808051928051610ce581610ece565b8452602081015115156020850152015190820152f35b8284346101ba57816003193601126101ba576020906003549051908152f35b5082346103a457806003193601126103a457610d34610e9d565b91610d3d610eb8565b90610d4661136f565b91835194610d5386610f55565b6001600160a01b039081168652908116602086810191825295610d7461458e565b936003895403610e24575091610120969791818794610da2610d94611017565b8c8082518301019101611587565b5051168551525116878451015286830192818451528188855101526001815192610dd68551948561027c8d820192836116cd565b5190610de182610ece565b610dea82610ece565b5003610e1b57610e0c9293505190610290845191826102ce8b820195866116cd565b01515b51928391015251908152f35b50505051610e0f565b602490600988519163100960cb60e01b8352820152fd5b50829060203660031901126103a45760209261056f8392610e5a61136f565b9283918551610e6881610f55565b8651610e7381610f86565b838152815288810191610e8461140b565b83523581515260018251525186825101526105626114e3565b600435906001600160a01b0382168203610eb357565b600080fd5b602435906001600160a01b0382168203610eb357565b60021115610ed857565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610f0481610ece565b845260208101511515602085015201511515910152565b90600182811c92168015610f4b575b6020831014610f3557565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f2a565b604081019081106001600160401b03821117610f7057604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117610f7057604052565b606081019081106001600160401b03821117610f7057604052565b61014081019081106001600160401b03821117610f7057604052565b6101a081019081106001600160401b03821117610f7057604052565b601f909101601f19168101906001600160401b03821190821017610f7057604052565b604051906000826002549161102b83610f1b565b8083526001938085169081156110a15750600114611053575b5061105192500383610ff4565b565b600260009081526000805160206145d383398151915294602093509091905b818310611089575050611051935082010138611044565b85548884018501529485019487945091830191611072565b905061105194506020925060ff191682840152151560051b82010138611044565b604051906110cf82610fa1565b60006040838281528260208201520152565b906110ea6110c2565b9160018060a01b03166000908082526005602052600160ff60408420541661111181610ece565b03611159576040929350815260056020522060016040519161113283610fa1565b60ff815481811661114281610ece565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061117182610fa1565b816000815260006020820152604080519161118b83610f55565b60008352600060208401520152565b6111a2611164565b906000908082526006602052604092600160ff85852054166111c381610ece565b03611243575081526006602052818120918051926111e084610fa1565b60ff81548181166111f081610ece565b865260081c1615156020850152815192838301906001600160401b0382118583101761122f575082526001810154835260020154602083015282015290565b634e487b7160e01b81526041600452602490fd5b80949350829150526020830152565b9061125b6110c2565b9160018060a01b03166000908082526007602052600160ff60408420541661128281610ece565b03611159576040929350815260076020522060ff604051916112a383610fa1565b548181166112b081610ece565b8352818160081c161515602084015260101c161515604082015290565b906112d66110c2565b9160018060a01b03166000908082526008602052600160ff6040842054166112fd81610ece565b03611159576040929350815260086020522060ff604051916112a383610fa1565b906113276110c2565b9160018060a01b03166000908082526009602052600160ff60408420541661134e81610ece565b03611159576040929350815260096020522060ff604051916112a383610fa1565b6040519061026082016001600160401b03811183821017610f7057604052816102406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e082015282610200820152826102208201520152565b60408051919061012083016001600160401b03811184821017610f7057815261010083600092838252805161143f81610f86565b8481526020830152805161145281610f86565b84815281830152805161146481610f55565b8481528460208201526060830152836080830152805161148381610f86565b84815260a08301526114936110c2565b60c0830152516114a281610f55565b83815283602082015260e08201520152565b604051906114c182610f55565b816040516114ce81610f86565b60008152815260206114de61140b565b910152565b604051906114f082610f55565b816000815260206114de61140b565b6040519061150c82610f55565b600060208360405161151d81610f55565b838152838382015281520152565b6040519060e082016001600160401b03811183821017610f70576040528160c060009182815282602082015261155f6114ff565b60408201528260608201528260808201528260a08201520152565b51908115158203610eb357565b8091036101808112610eb3576040805192610140928385016001600160401b03811186821017610f7057835281516001600160a01b0381168103610eb3578552602082015161ffff1981168103610eb35760208601528282015183860152606082015160608601526115fb6080830161157a565b6080860152609f190160608112610eb3578280519161161983610f55565b12610eb357610160925161162c81610f55565b60a0830151815260c08301516020820152815261164b60e0830161157a565b602082015260a08501526101008082015160c0860152610120938483015160e08701528201519085015201519082015290565b516008811015610ed85790565b6040519060a082016001600160401b03811183821017610f705760405260006080838281528260208201526116be61152b565b60408201528260608201520152565b81516001600160a01b039081168252602092830151169181019190915260400190565b60405192919061036084016001600160401b03811185821017610f70578060405261171a81610f86565b60008152845261172861152b565b602085015260405161173981610f86565b60008152604085015261174a61152b565b606085015260405161175b81610f55565b6000815260006020820152608085015261177361152b565b60a085015261178061152b565b60c085015260405161179181610f86565b6000815260e08501526117a261152b565b6101008501526117b06110c2565b610120850152600061014085015260006101608501526040516117d281610f55565b60008152600060208201526101808501526040516117ef81610f55565b60008152600060208201526101a085015260405161180c81610f55565b60008152600060208201526101c085015260405161182981610f55565b60008152600060208201526101e0850152600061020085015261184a61152b565b61022085015260405161185c81610f55565b600081526000602082015261024085015260405161187981610f55565b600081526000602082015261026085015260405161189681610f55565b60008152600060208201526102808501526040516118b381610f55565b60008152600060208201526102a08501526040516118d081610f55565b60008152600060208201526102c08501526118e96110c2565b6102e08501526118f761152b565b61030085015261190561152b565b61032085015261191361152b565b61034085015260036000540361451257604051600060025461193481610f1b565b80845290600181169081156144ee57506001146144a1575b509061195d8161196c930382610ff4565b60208082518301019101611587565b9060ff60045416614488576040513381528151602082015260208201518051916008831015610ed8576101006101e0927f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac294604084015260018060a01b0360208201515116606084015260408101515160808401526020606082015160018060a01b0381511660a0860152015160c08401526080810151151560e084015260018060a01b0360a0820151511682840152604060c082015160018060a01b0381511661012086015260018060a01b03602082015116610140860152015161016084015260e08101518051610180850152602060018060a01b03910151166101a0840152015115156101c0820152a18051801590811561447c575b501561446357611a98602082015161167e565b6008811015610ed857611f9a57602090810151015184528051336001600160a01b0390911603611f765760015b15611f5d5734611f44576000602060409360018060a01b0387515116835260078252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557f05cde6562b8f8bf6e21e906cb9555ac8fb545e0ac0a619bbd77b869170c9ed4f828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c0602086015101526020611ba461168b565b82516001600160a01b031681528183015161ffff1916828201529401518285015243606085015201516080830152604051611bde81610f86565b6000815260408301516020015115611e6c5750610120604051611c0081610fbc565b6000815260006020820152600060408201526000606082015260006080820152611c286114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611d6082610fd8565b81516001600160401b038111610f7057611d7b600254610f1b565b601f8111611e24575b50602092601f8211600114611dc15792819293600092611db6575b50508160011b916000199060031b1c191617600255565b015190503880611d9f565b601f19821693600260005260206000209160005b868110611e0c5750836001959610611df3575b505050811b01600255565b015160001960f88460031b161c19169055388080611de8565b91926020600181928685015181550194019201611dd5565b6002600052611e5c906000805160206145d3833981519152601f840160051c81019160208510611e62575b601f0160051c0190614577565b38611d84565b9091508190611e4f565b9091600080808060018060a01b03855116608086015190828215611f3b575bf115611f26574791829052516000918291829182916001600160a01b0316828215611f32575bf115611f2657600080556000600155611ecb600254610f1b565b80611ed35750565b601f8111600114611ee657506000600255565b6002600052611f1990601f0160051c6000805160206145d3833981519152016000805160206145f3833981519152614577565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611eb1565b506108fc611e8b565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6001611f8133611252565b51611f8b81610ece565b611f9481610ece565b14611ac5565b611fab60208296949396015161167e565b6008811015610ed8576001036123935760200151604090810151908301528351336001600160a01b039091160361236f5760015b1561235657604082015151340361233d5760406000917fb923d83358c5858cf4f8d07a021dd003821836ac37f5dde47811df1b355c5b4160208351858152a10152612034606084015160408301515190614556565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a06060830151015261012083015160c06060830151015260408061209c61168b565b85516001600160a01b0316815260208087015161ffff191690820152606084810151838301524390820152940151910151510160808301526040516120e081610f86565b6000815260408301516020015115611e6c575061012060405161210281610fbc565b600081526000602082015260006040820152600060608201526000608082015261212a6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261226282610fd8565b81516001600160401b038111610f705761227d600254610f1b565b601f8111612300575b50602092601f82116001146122b75792819293600092611db65750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106122e85750836001959610611df357505050811b01600255565b919260206001819286850151815501940192016122cb565b6002600052612337906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b38612286565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b600161237a33611252565b5161238481610ece565b61238d81610ece565b14611fdf565b6123a460208296939496015161167e565b6008811015610ed8576002036127d857602001516060015160808501528051336001600160a01b03909116036127b45760015b1561279b576020608085015101516040820151106127825734612769576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557fc841553f4db44acfe456c6b4724fc10d5525f9c3f60915b115b9b5c4b08c960260208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015260a06124d261168b565b94600180831b03835116865261ffff1960208401511660208701520151828501524360608501520151608083015260405161250c81610f86565b6000815260408301516020015115611e6c575061012060405161252e81610fbc565b60008152600060208201526000604082015260006060820152600060808201526125566114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261268e82610fd8565b81516001600160401b038111610f70576126a9600254610f1b565b601f811161272c575b50602092601f82116001146126e35792819293600092611db65750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106127145750836001959610611df357505050811b01600255565b919260206001819286850151815501940192016126f7565b6002600052612763906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b386126b2565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60016127bf33611252565b516127c981610ece565b6127d281610ece565b146123d7565b6127e5602082015161167e565b6008811015610ed857600303612b7157508051336001600160a01b0390911603612b585734612b3f57600060806040937fabb3f9b6114df766fb32745d999317fe30cfdd5ccbe46d5938d0fad9503af6ac60208651858152a10152606081015160c0850151526000602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015260c06128a661168b565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516128e281610f86565b6000815260408301516020015115611e6c575061012060405161290481610fbc565b600081526000602082015260006040820152600060608201526000608082015261292c6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612a6482610fd8565b81516001600160401b038111610f7057612a7f600254610f1b565b601f8111612b02575b50602092601f8211600114612ab95792819293600092611db65750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612aea5750836001959610611df357505050811b01600255565b91926020600181928685015181550194019201612acd565b6002600052612b39906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b38612a88565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b612b7e602082015161167e565b6008811015610ed857600403612f3b576020015160a0015160e085015280516001600160a01b03163303612f225734612f0957600060a0604093600180831b0360e088015151168352600760205282858120557fc2684ce6d671a6c82a6dfd2a57398f2c7140776dd2ffd7cd1a6431d21d06250860208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c06101008601510152610100612c7061168b565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612cac81610f86565b6000815260408301516020015115611e6c5750610120604051612cce81610fbc565b6000815260006020820152600060408201526000606082015260006080820152612cf66114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612e2e82610fd8565b81516001600160401b038111610f7057612e49600254610f1b565b601f8111612ecc575b50602092601f8211600114612e835792819293600092611db65750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612eb45750836001959610611df357505050811b01600255565b91926020600181928685015181550194019201612e97565b6002600052612f03906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b38612e52565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b612f4c60208296949396015161167e565b6008811015610ed8576005036135a1576020015160c001516101208301819052604081015160608601511061014084015251600190612f93906001600160a01b031661131e565b51612f9d81610ece565b612fa681610ece565b03613588576101408201511561358157604061012083015101515b8061016084015234036135685760c0600191828060a01b03610120850151511661018085015152828060a01b0360206101208601510151166020610180860151015260006101a085015152600060206101a0860151015282613051613037613045610180880151604051928391602083016116cd565b03601f198101835282610ff4565b6020815191012061119a565b5161305b81610ece565b61306481610ece565b0361355d5760406130886101808601518251610290816130376020820194856116cd565b01515b6101c0850181815290516101e0860151525160200151610120850151604001516130b491614556565b60206101e086015101526101808401516040516130d9816130376020820194856116cd565b5190206000526006602052604060002060ff199084828254161790556101e0850151610180860151604051613116816130376020820194856116cd565b5190206000526006602052600260206040600020928051888501550151910155838060a01b03610120860151511660005260056020528360406000209182541617905582613170818060a01b0361012087015151166110e1565b5161317a81610ece565b61318381610ece565b03613553576131b660406131a3858060a01b0361012088015151166110e1565b01515b6040610120870151015190614556565b838060a01b036101208601515116600052600560205283604060002001557f5283e738018d3419cba868c650b582702e3414b0e1313981cd17dc5ffcb8fe8c6020604051858152a10152610140810151156135435761322360608401516040610120840151015190614556565b6102008201525b61020081015161022082015152608083015115156020610220830151015260a08301516040610220830151015260c08301516060610220830151015260e08301516080610220830151015261010083015160a0610220830151015261012083015160c0610220830151015261016060406132a261168b565b85516001600160a01b0316815260208087015161ffff191690820152610220840151828201524360608201529401519101510160808301526040516132e681610f86565b6000815260408301516020015115611e6c575061012060405161330881610fbc565b60008152600060208201526000604082015260006060820152600060808201526133306114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261346882610fd8565b81516001600160401b038111610f7057613483600254610f1b565b601f8111613506575b50602092601f82116001146134bd5792819293600092611db65750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106134ee5750836001959610611df357505050811b01600255565b919260206001819286850151815501940192016134d1565b600260005261353d906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b3861348c565b606083015161020082015261322a565b6131b660006131a6565b6101a084015161308b565b60405163100960cb60e01b815260236004820152602490fd5b6000612fc1565b60405163100960cb60e01b815260226004820152602490fd5b6135ae602082015161167e565b6008811015610ed857600603613fb757602060e091015101518061024084015251604085015110613fa05760016135e4336110e1565b516135ee81610ece565b6135f781610ece565b03613f99576040613607336110e1565b01515b6102408301515111613f805734613f67576102206001913361026085015152828060a01b0360206102408601510151166020610260860151015260006102808501515260006020610280860151015282613678613037613045610260880151604051928391602083016116cd565b5161368281610ece565b61368b81610ece565b03613f59576136ca60406136b26102608701518251610290816130376020820194856116cd565b01515b806102a0870152516102408601515190614556565b6102c0850151526136eb60206102a08601510151610240860151519061456a565b60206102c08601510152610260840151604051613710816130376020820194856116cd565b519020600052600660205260406000208360ff198254161790556102c084015161026085015160405161374b816130376020820194856116cd565b51902060005260066020526002602060406000209280518785015501519101557f3e888d31bd87675f799af09c81608009b81d35a10b224406b8fe19269d4574516020604051858152a10152336102e0820151526102408101515160206102e0830151015261ffff1960208401511660406102e083015101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2360606102e08301516040519060018060a01b03815116825260208101516020830152604061ffff19910151166040820152a16001613822336112cd565b5161382c81610ece565b61383581610ece565b03613bbf57600080808061024085015151818115613bb6575b3390f115611f2657336000526005602052600060016040822082815501556138816060840151610240830151519061456a565b61032082015152608083015115156020610320830151015260a0830151604061032083015101526138bd60c08401516102408301515190614556565b6060610320830151015260e0830151608061032083015101526138e461010084015161452b565b60a061032083015101526138fc61012084015161452b565b60c06103208301510152610240604061391361168b565b85516001600160a01b0316815260208087015161ffff19169082015261032084015182820152436060820152940151910151519003608083015260405161395981610f86565b6000815260408301516020015115611e6c575061012060405161397b81610fbc565b60008152600060208201526000604082015260006060820152600060808201526139a36114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613adb82610fd8565b81516001600160401b038111610f7057613af6600254610f1b565b601f8111613b79575b50602092601f8211600114613b305792819293600092611db65750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613b615750836001959610611df357505050811b01600255565b91926020600181928685015181550194019201613b44565b6002600052613bb0906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b38613aff565b506108fc61384e565b336000908152600860205260408120805462ff00ff1916600117905561024082015151819081908190818115613f50575b3390f115611f265733600052600560205260006001604082208281550155613c236060840151610240830151519061456a565b61030082015152608083015115156020610300830151015260a083015160406103008301510152613c5f60c08401516102408301515190614556565b6060610300830151015260e083015160806103008301510152613c8661010084015161452b565b60a0610300830151015261012083015160c061030083015101526102406040613cad61168b565b85516001600160a01b0316815260208087015161ffff191690820152610300840151828201524360608201529401519101515190036080830152604051613cf381610f86565b6000815260408301516020015115611e6c5750610120604051613d1581610fbc565b6000815260006020820152600060408201526000606082015260006080820152613d3d6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613e7582610fd8565b81516001600160401b038111610f7057613e90600254610f1b565b601f8111613f13575b50602092601f8211600114613eca5792819293600092611db65750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613efb5750836001959610611df357505050811b01600255565b91926020600181928685015181550194019201613ede565b6002600052613f4a906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b38613e99565b506108fc613bf0565b6136ca6102808501516136b5565b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b600061360a565b602460405163100960cb60e01b8152816004820152fd5b6020613fc89195929395015161167e565b6008811015610ed857600714613fdf575b50509050565b3461444a57336000908152600960209081526040808320805462ff00ff19166001179055805183815290946102409290917e6a424049d3e4aba5a55fc1be525c242d24bdcf769b0f5759c159936d212f309190a10152606081015161034085015152608081015115156020610340860151015260a081015182610340860151015260c08101516060610340860151015260e08101516080610340860151015261010081015160a0610340860151015261012081015160c061034086015101526103406140a961168b565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516140e581610f86565b6000815260408301516020015115614372575061012060405161410781610fbc565b600081526000602082015260006040820152600060608201526000608082015261412f6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261426782610fd8565b81516001600160401b038111610f7057614282600254610f1b565b601f8111614335575b50602092601f82116001146142cf57928192936000926142c4575b50508160011b916000199060031b1c1916176002555b803880613fd9565b0151905038806142a6565b601f19821693600260005260206000209160005b86811061431d5750836001959610614304575b505050811b016002556142bc565b015160001960f88460031b161c191690553880806142f6565b919260206001819286850151815501940192016142e3565b600260005261436c906000805160206145d3833981519152601f840160051c81019160208510611e6257601f0160051c0190614577565b3861428b565b9091600080808060018060a01b03855116608086015190828215614441575bf115611f26574791829052516000918291829182916001600160a01b0316828215614438575bf115611f26576000805560006001556143d1600254610f1b565b806143dd575b506142bc565b601f81116001146143f5575060006002555b386143d7565b600260005261442890601f0160051c6000805160206145d3833981519152016000805160206145f3833981519152614577565b60006020812081600255556143ef565b506108fc6143b7565b506108fc614391565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541438611a85565b60405163100960cb60e01b815260156004820152602490fd5b600260009081526000805160206145d3833981519152939250905b8082106144d45750909150810160200161195d61194c565b9192600181602092548385880101520191019092916144bc565b60ff191660208086019190915291151560051b8401909101915061195d905061194c565b60405163100960cb60e01b815260146004820152602490fd5b906001820191828111614540578210610eb357565b634e487b7160e01b600052601160045260246000fd5b9190820191828111614540578210610eb357565b9081039081116145405790565b818110614582575050565b60008155600101614577565b6040519061459b82610f55565b816040516145a881610f55565b600081526000602082015281526020604051916145c483610f55565b60008352600082840152015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acfa164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 20037,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:336:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:80:37:after expr stmt semicolon',
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
