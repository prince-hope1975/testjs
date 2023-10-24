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
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async (_v4380 ) => {
          const v4380 = stdlib.protect(ctc0, _v4380, null);
        
        const v4381 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v4380, ctc6), null);
        const v4382 = {
          None: 0,
          Some: 1
          }[v4381[0]];
        const v4383 = stdlib.eq(v4382, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4383;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async () => {
        
        
        return v4330;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async (_v4396, _v4397 ) => {
          const v4396 = stdlib.protect(ctc0, _v4396, null);
          const v4397 = stdlib.protect(ctc7, _v4397, null);
        
        const v4398 = [v4396, v4397];
        const v4399 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v4398, ctc9), null);
        const v4400 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4401 = stdlib.fromSome(v4399, v4400);
        const v4402 = v4401.claimed;
        
        return v4402;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async (_v4384 ) => {
          const v4384 = stdlib.protect(ctc0, _v4384, null);
        
        const v4385 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v4384, ctc6), null);
        const v4386 = {
          None: 0,
          Some: 1
          }[v4385[0]];
        const v4387 = stdlib.eq(v4386, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4387;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async () => {
        
        
        return v4374;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async () => {
        
        
        return v4373;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async () => {
        
        
        return v4375;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalCurrentAllocatoinToAllUsers = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async () => {
        
        
        return v4371;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalFundsDeposited = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async () => {
        
        
        return v4372;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async () => {
        
        
        return v4376;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async (_v4377 ) => {
          const v4377 = stdlib.protect(ctc0, _v4377, null);
        
        const v4378 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v4377, ctc2), null);
        const v4379 = stdlib.fromSome(v4378, stdlib.checkedBigNumberify('./index_v2.rsh:113:58:decimal', stdlib.UInt_max, '0'));
        
        return v4379;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = svs;
      return (await ((async (_v4389, _v4390 ) => {
          const v4389 = stdlib.protect(ctc0, _v4389, null);
          const v4390 = stdlib.protect(ctc7, _v4390, null);
        
        const v4391 = [v4389, v4390];
        const v4392 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v4391, ctc9), null);
        const v4393 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4394 = stdlib.fromSome(v4392, v4393);
        const v4395 = v4394.rewards;
        
        return v4395;}))(...args));
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
        totalCurrentAllocatoinToAllUsers: {
          decode: Info_totalCurrentAllocatoinToAllUsers,
          dom: [],
          rng: ctc2
          },
        totalFundsDeposited: {
          decode: Info_totalFundsDeposited,
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
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]
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
    Admin_addAdmin0_235: ctc11,
    Admin_deposit0_235: ctc12,
    Admin_editUserReward0_235: ctc13,
    Admin_endContractAndTransfer0_235: ctc14,
    Admin_revokeAdmin0_235: ctc11,
    Admin_setReward0_235: ctc16,
    User_claim0_235: ctc17,
    User_optin0_235: ctc14
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4482 = ctc.selfAddress();
  const v4484 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:208:34:application call to [unknown function] (defined at: ./index_v2.rsh:208:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_addAdmin0_235" (defined at: ./index_v2.rsh:208:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v4487 = stdlib.addressEq(v4482, v4317);
  const v4488 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4482, ctc0), null);
  const v4489 = {
    None: 0,
    Some: 1
    }[v4488[0]];
  const v4490 = stdlib.eq(v4489, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4491 = v4487 ? true : v4490;
  stdlib.assert(v4491, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:209:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:208:34:application call to [unknown function] (defined at: ./index_v2.rsh:208:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_addAdmin0_235" (defined at: ./index_v2.rsh:208:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v4498 = ['Admin_addAdmin0_235', v4484];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4498],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:214:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v4626, ctc0), null);
          ;
          const v4706 = v4630[stdlib.checkedBigNumberify('./index_v2.rsh:208:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v4706, ctc0, null);
          const v4715 = null;
          const v4716 = await txn1.getOutput('Admin_addAdmin', 'v4715', ctc0, v4715);
          
          const v4731 = {
            bal: v4368,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v4371,
            totalFundsDeposited: v4372,
            total_amount_claimed: v4373,
            total_rewards_allcoated: v4374,
            total_users_claim: v4375,
            usersNo: v4376
            };
          const v11404 = v4330;
          const v11405 = v4731.keepGoing;
          if (v11405) {
            const v11406 = v4731.bal;
            const v11408 = v4731.percent;
            const v11409 = v4731.totalCurrentAllocatoinToAllUsers;
            const v11410 = v4731.totalFundsDeposited;
            const v11411 = v4731.total_amount_claimed;
            const v11412 = v4731.total_rewards_allcoated;
            const v11413 = v4731.total_users_claim;
            const v11414 = v4731.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11421 = stdlib.sub(v4330, v4330);
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
              tok: undefined /* Nothing */
              });
            const v11422 = (stdlib.le(await ctc.getBalance(), v11421) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11421));
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
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
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      undefined /* setApiDetails */;
      const v4636 = stdlib.addressEq(v4626, v4317);
      const v4637 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4626, ctc0), null);
      const v4638 = {
        None: 0,
        Some: 1
        }[v4637[0]];
      const v4639 = stdlib.eq(v4638, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4640 = v4636 ? true : v4639;
      stdlib.assert(v4640, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:209:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:208:34:application call to [unknown function] (defined at: ./index_v2.rsh:208:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:208:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v4706 = v4630[stdlib.checkedBigNumberify('./index_v2.rsh:208:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v4706, ctc0, null);
      const v4715 = null;
      const v4716 = await txn1.getOutput('Admin_addAdmin', 'v4715', ctc0, v4715);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v4630, v4716), {
          at: './index_v2.rsh:208:11:application',
          fs: ['at ./index_v2.rsh:208:11:application call to [unknown function] (defined at: ./index_v2.rsh:208:11:function exp)', 'at ./index_v2.rsh:217:14:application call to "ret" (defined at: ./index_v2.rsh:215:15:function exp)', 'at ./index_v2.rsh:215:15:application call to [unknown function] (defined at: ./index_v2.rsh:215:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v4731 = {
        bal: v4368,
        keepGoing: v4369,
        percent: v4370,
        totalCurrentAllocatoinToAllUsers: v4371,
        totalFundsDeposited: v4372,
        total_amount_claimed: v4373,
        total_rewards_allcoated: v4374,
        total_users_claim: v4375,
        usersNo: v4376
        };
      const v11404 = v4330;
      const v11405 = v4731.keepGoing;
      if (v11405) {
        const v11406 = v4731.bal;
        const v11408 = v4731.percent;
        const v11409 = v4731.totalCurrentAllocatoinToAllUsers;
        const v11410 = v4731.totalFundsDeposited;
        const v11411 = v4731.total_amount_claimed;
        const v11412 = v4731.total_rewards_allcoated;
        const v11413 = v4731.total_users_claim;
        const v11414 = v4731.usersNo;
        return;
        }
      else {
        const v11421 = stdlib.sub(v4330, v4330);
        ;
        const v11422 = (stdlib.le(await ctc.getBalance(), v11421) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11421));
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
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
    Admin_addAdmin0_235: ctc12,
    Admin_deposit0_235: ctc11,
    Admin_editUserReward0_235: ctc13,
    Admin_endContractAndTransfer0_235: ctc14,
    Admin_revokeAdmin0_235: ctc12,
    Admin_setReward0_235: ctc16,
    User_claim0_235: ctc17,
    User_optin0_235: ctc14
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4403 = ctc.selfAddress();
  const v4405 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_deposit0_235" (defined at: ./index_v2.rsh:139:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v4406 = v4405[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4408 = stdlib.addressEq(v4403, v4317);
  const v4409 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4403, ctc0), null);
  const v4410 = {
    None: 0,
    Some: 1
    }[v4409[0]];
  const v4411 = stdlib.eq(v4410, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4412 = v4408 ? true : v4411;
  stdlib.assert(v4412, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_deposit0_235" (defined at: ./index_v2.rsh:139:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v4419 = ['Admin_deposit0_235', v4405];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4419],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v4406, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v5065 = v5052[stdlib.checkedBigNumberify('./index_v2.rsh:139:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v4626, ctc0), null);
          const v5126 = stdlib.add(v4330, v5065);
          sim_r.txns.push({
            amt: v5065,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5164 = null;
          const v5165 = await txn1.getOutput('Admin_deposit', 'v5164', ctc0, v5164);
          
          const v5180 = stdlib.safeAdd(v4368, v5065);
          const v5181 = stdlib.safeAdd(v4372, v5065);
          const v5182 = {
            bal: v5180,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v4371,
            totalFundsDeposited: v5181,
            total_amount_claimed: v4373,
            total_rewards_allcoated: v4374,
            total_users_claim: v4375,
            usersNo: v4376
            };
          const v11656 = v5126;
          const v11657 = v5182.keepGoing;
          if (v11657) {
            const v11658 = v5182.bal;
            const v11660 = v5182.percent;
            const v11661 = v5182.totalCurrentAllocatoinToAllUsers;
            const v11662 = v5182.totalFundsDeposited;
            const v11663 = v5182.total_amount_claimed;
            const v11664 = v5182.total_rewards_allcoated;
            const v11665 = v5182.total_users_claim;
            const v11666 = v5182.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11673 = stdlib.sub(v5126, v5126);
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
              tok: undefined /* Nothing */
              });
            const v11674 = (stdlib.le(await ctc.getBalance(), v11673) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11673));
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
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
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      undefined /* setApiDetails */;
      const v5065 = v5052[stdlib.checkedBigNumberify('./index_v2.rsh:139:10:spread', stdlib.UInt_max, '0')];
      const v5066 = stdlib.addressEq(v4626, v4317);
      const v5067 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4626, ctc0), null);
      const v5068 = {
        None: 0,
        Some: 1
        }[v5067[0]];
      const v5069 = stdlib.eq(v5068, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5070 = v5066 ? true : v5069;
      stdlib.assert(v5070, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v5126 = stdlib.add(v4330, v5065);
      ;
      const v5164 = null;
      const v5165 = await txn1.getOutput('Admin_deposit', 'v5164', ctc0, v5164);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v5052, v5165), {
          at: './index_v2.rsh:139:11:application',
          fs: ['at ./index_v2.rsh:139:11:application call to [unknown function] (defined at: ./index_v2.rsh:139:11:function exp)', 'at ./index_v2.rsh:144:14:application call to "ret" (defined at: ./index_v2.rsh:143:15:function exp)', 'at ./index_v2.rsh:143:15:application call to [unknown function] (defined at: ./index_v2.rsh:143:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v5180 = stdlib.safeAdd(v4368, v5065);
      const v5181 = stdlib.safeAdd(v4372, v5065);
      const v5182 = {
        bal: v5180,
        keepGoing: v4369,
        percent: v4370,
        totalCurrentAllocatoinToAllUsers: v4371,
        totalFundsDeposited: v5181,
        total_amount_claimed: v4373,
        total_rewards_allcoated: v4374,
        total_users_claim: v4375,
        usersNo: v4376
        };
      const v11656 = v5126;
      const v11657 = v5182.keepGoing;
      if (v11657) {
        const v11658 = v5182.bal;
        const v11660 = v5182.percent;
        const v11661 = v5182.totalCurrentAllocatoinToAllUsers;
        const v11662 = v5182.totalFundsDeposited;
        const v11663 = v5182.total_amount_claimed;
        const v11664 = v5182.total_rewards_allcoated;
        const v11665 = v5182.total_users_claim;
        const v11666 = v5182.usersNo;
        return;
        }
      else {
        const v11673 = stdlib.sub(v5126, v5126);
        ;
        const v11674 = (stdlib.le(await ctc.getBalance(), v11673) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11673));
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
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
    Admin_addAdmin0_235: ctc12,
    Admin_deposit0_235: ctc13,
    Admin_editUserReward0_235: ctc11,
    Admin_endContractAndTransfer0_235: ctc14,
    Admin_revokeAdmin0_235: ctc12,
    Admin_setReward0_235: ctc16,
    User_claim0_235: ctc17,
    User_optin0_235: ctc14
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4457 = ctc.selfAddress();
  const v4459 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:196:45:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_editUserReward0_235" (defined at: ./index_v2.rsh:196:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v4461 = v4459[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4464 = stdlib.addressEq(v4457, v4317);
  const v4465 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4457, ctc0), null);
  const v4466 = {
    None: 0,
    Some: 1
    }[v4465[0]];
  const v4467 = stdlib.eq(v4466, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4468 = v4464 ? true : v4467;
  stdlib.assert(v4468, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:196:45:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_editUserReward0_235" (defined at: ./index_v2.rsh:196:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v4471 = stdlib.le(v4461, v4330);
  stdlib.assert(v4471, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:196:45:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_editUserReward0_235" (defined at: ./index_v2.rsh:196:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v4480 = ['Admin_editUserReward0_235', v4459];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4480],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:200:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v5496 = v5474[stdlib.checkedBigNumberify('./index_v2.rsh:196:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v4626, ctc0), null);
          ;
          const v5607 = v5474[stdlib.checkedBigNumberify('./index_v2.rsh:196:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v5607, ctc1, v5496);
          const v5620 = null;
          const v5621 = await txn1.getOutput('Admin_editUserReward', 'v5620', ctc0, v5620);
          
          const v5637 = {
            bal: v4368,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v4371,
            totalFundsDeposited: v4372,
            total_amount_claimed: v4373,
            total_rewards_allcoated: v4374,
            total_users_claim: v4375,
            usersNo: v4376
            };
          const v11908 = v4330;
          const v11909 = v5637.keepGoing;
          if (v11909) {
            const v11910 = v5637.bal;
            const v11912 = v5637.percent;
            const v11913 = v5637.totalCurrentAllocatoinToAllUsers;
            const v11914 = v5637.totalFundsDeposited;
            const v11915 = v5637.total_amount_claimed;
            const v11916 = v5637.total_rewards_allcoated;
            const v11917 = v5637.total_users_claim;
            const v11918 = v5637.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11925 = stdlib.sub(v4330, v4330);
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
              tok: undefined /* Nothing */
              });
            const v11926 = (stdlib.le(await ctc.getBalance(), v11925) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11925));
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
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
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      undefined /* setApiDetails */;
      const v5496 = v5474[stdlib.checkedBigNumberify('./index_v2.rsh:196:10:spread', stdlib.UInt_max, '1')];
      const v5497 = stdlib.addressEq(v4626, v4317);
      const v5498 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4626, ctc0), null);
      const v5499 = {
        None: 0,
        Some: 1
        }[v5498[0]];
      const v5500 = stdlib.eq(v5499, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5501 = v5497 ? true : v5500;
      stdlib.assert(v5501, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:196:45:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v5504 = stdlib.le(v5496, v4330);
      stdlib.assert(v5504, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:196:45:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      const v5607 = v5474[stdlib.checkedBigNumberify('./index_v2.rsh:196:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v5607, ctc1, v5496);
      const v5620 = null;
      const v5621 = await txn1.getOutput('Admin_editUserReward', 'v5620', ctc0, v5620);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v5474, v5621), {
          at: './index_v2.rsh:196:11:application',
          fs: ['at ./index_v2.rsh:196:11:application call to [unknown function] (defined at: ./index_v2.rsh:196:11:function exp)', 'at ./index_v2.rsh:203:14:application call to "ret" (defined at: ./index_v2.rsh:201:15:function exp)', 'at ./index_v2.rsh:201:15:application call to [unknown function] (defined at: ./index_v2.rsh:201:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v5637 = {
        bal: v4368,
        keepGoing: v4369,
        percent: v4370,
        totalCurrentAllocatoinToAllUsers: v4371,
        totalFundsDeposited: v4372,
        total_amount_claimed: v4373,
        total_rewards_allcoated: v4374,
        total_users_claim: v4375,
        usersNo: v4376
        };
      const v11908 = v4330;
      const v11909 = v5637.keepGoing;
      if (v11909) {
        const v11910 = v5637.bal;
        const v11912 = v5637.percent;
        const v11913 = v5637.totalCurrentAllocatoinToAllUsers;
        const v11914 = v5637.totalFundsDeposited;
        const v11915 = v5637.total_amount_claimed;
        const v11916 = v5637.total_rewards_allcoated;
        const v11917 = v5637.total_users_claim;
        const v11918 = v5637.usersNo;
        return;
        }
      else {
        const v11925 = stdlib.sub(v4330, v4330);
        ;
        const v11926 = (stdlib.le(await ctc.getBalance(), v11925) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11925));
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
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
    Admin_addAdmin0_235: ctc12,
    Admin_deposit0_235: ctc13,
    Admin_editUserReward0_235: ctc14,
    Admin_endContractAndTransfer0_235: ctc11,
    Admin_revokeAdmin0_235: ctc12,
    Admin_setReward0_235: ctc16,
    User_claim0_235: ctc17,
    User_optin0_235: ctc11
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4545 = ctc.selfAddress();
  const v4547 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:339:44:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_endContractAndTransfer0_235" (defined at: ./index_v2.rsh:339:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v4548 = stdlib.addressEq(v4317, v4545);
  stdlib.assert(v4548, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:340:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:339:44:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_endContractAndTransfer0_235" (defined at: ./index_v2.rsh:339:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v4550 = stdlib.eq(v4371, stdlib.checkedBigNumberify('./index_v2.rsh:342:45:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4550, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:341:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:339:44:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_endContractAndTransfer0_235" (defined at: ./index_v2.rsh:339:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Users have unclaimed funds, thus you cannot end contract',
    who: 'Admin_endContractAndTransfer'
    });
  const v4555 = ['Admin_endContractAndTransfer0_235', v4547];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4555],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:347:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v6066 = null;
          const v6067 = await txn1.getOutput('Admin_endContractAndTransfer', 'v6066', ctc0, v6066);
          
          const v6081 = {
            bal: v4368,
            keepGoing: false,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v4371,
            totalFundsDeposited: v4372,
            total_amount_claimed: v4373,
            total_rewards_allcoated: v4374,
            total_users_claim: v4375,
            usersNo: v4376
            };
          const v12160 = v4330;
          const v12161 = v6081.keepGoing;
          if (v12161) {
            const v12162 = v6081.bal;
            const v12164 = v6081.percent;
            const v12165 = v6081.totalCurrentAllocatoinToAllUsers;
            const v12166 = v6081.totalFundsDeposited;
            const v12167 = v6081.total_amount_claimed;
            const v12168 = v6081.total_rewards_allcoated;
            const v12169 = v6081.total_users_claim;
            const v12170 = v6081.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v12177 = stdlib.sub(v4330, v4330);
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
              tok: undefined /* Nothing */
              });
            const v12178 = (stdlib.le(await ctc.getBalance(), v12177) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12177));
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
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
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      undefined /* setApiDetails */;
      const v5929 = stdlib.addressEq(v4317, v4626);
      stdlib.assert(v5929, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:340:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:339:44:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      const v5931 = stdlib.eq(v4371, stdlib.checkedBigNumberify('./index_v2.rsh:342:45:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5931, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:341:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:339:44:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Users have unclaimed funds, thus you cannot end contract',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v6066 = null;
      const v6067 = await txn1.getOutput('Admin_endContractAndTransfer', 'v6066', ctc0, v6066);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v5896, v6067), {
          at: './index_v2.rsh:339:11:application',
          fs: ['at ./index_v2.rsh:339:11:application call to [unknown function] (defined at: ./index_v2.rsh:339:11:function exp)', 'at ./index_v2.rsh:349:14:application call to "ret" (defined at: ./index_v2.rsh:348:15:function exp)', 'at ./index_v2.rsh:348:15:application call to [unknown function] (defined at: ./index_v2.rsh:348:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v6081 = {
        bal: v4368,
        keepGoing: false,
        percent: v4370,
        totalCurrentAllocatoinToAllUsers: v4371,
        totalFundsDeposited: v4372,
        total_amount_claimed: v4373,
        total_rewards_allcoated: v4374,
        total_users_claim: v4375,
        usersNo: v4376
        };
      const v12160 = v4330;
      const v12161 = v6081.keepGoing;
      if (v12161) {
        const v12162 = v6081.bal;
        const v12164 = v6081.percent;
        const v12165 = v6081.totalCurrentAllocatoinToAllUsers;
        const v12166 = v6081.totalFundsDeposited;
        const v12167 = v6081.total_amount_claimed;
        const v12168 = v6081.total_rewards_allcoated;
        const v12169 = v6081.total_users_claim;
        const v12170 = v6081.usersNo;
        return;
        }
      else {
        const v12177 = stdlib.sub(v4330, v4330);
        ;
        const v12178 = (stdlib.le(await ctc.getBalance(), v12177) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12177));
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
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
    Admin_addAdmin0_235: ctc11,
    Admin_deposit0_235: ctc12,
    Admin_editUserReward0_235: ctc13,
    Admin_endContractAndTransfer0_235: ctc14,
    Admin_revokeAdmin0_235: ctc11,
    Admin_setReward0_235: ctc16,
    User_claim0_235: ctc17,
    User_optin0_235: ctc14
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4500 = ctc.selfAddress();
  const v4502 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:222:37:application call to [unknown function] (defined at: ./index_v2.rsh:222:37:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_revokeAdmin0_235" (defined at: ./index_v2.rsh:222:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v4505 = stdlib.addressEq(v4500, v4317);
  stdlib.assert(v4505, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:222:37:application call to [unknown function] (defined at: ./index_v2.rsh:222:37:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_revokeAdmin0_235" (defined at: ./index_v2.rsh:222:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v4512 = ['Admin_revokeAdmin0_235', v4502];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4512],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:225:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v6506 = v6318[stdlib.checkedBigNumberify('./index_v2.rsh:222:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v6506, ctc0, undefined /* Nothing */);
          const v6511 = null;
          const v6512 = await txn1.getOutput('Admin_revokeAdmin', 'v6511', ctc0, v6511);
          
          const v6527 = {
            bal: v4368,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v4371,
            totalFundsDeposited: v4372,
            total_amount_claimed: v4373,
            total_rewards_allcoated: v4374,
            total_users_claim: v4375,
            usersNo: v4376
            };
          const v12412 = v4330;
          const v12413 = v6527.keepGoing;
          if (v12413) {
            const v12414 = v6527.bal;
            const v12416 = v6527.percent;
            const v12417 = v6527.totalCurrentAllocatoinToAllUsers;
            const v12418 = v6527.totalFundsDeposited;
            const v12419 = v6527.total_amount_claimed;
            const v12420 = v6527.total_rewards_allcoated;
            const v12421 = v6527.total_users_claim;
            const v12422 = v6527.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v12429 = stdlib.sub(v4330, v4330);
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
              tok: undefined /* Nothing */
              });
            const v12430 = (stdlib.le(await ctc.getBalance(), v12429) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12429));
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
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
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      undefined /* setApiDetails */;
      const v6357 = stdlib.addressEq(v4626, v4317);
      stdlib.assert(v6357, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:222:37:application call to [unknown function] (defined at: ./index_v2.rsh:222:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:222:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v6506 = v6318[stdlib.checkedBigNumberify('./index_v2.rsh:222:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v6506, ctc0, undefined /* Nothing */);
      const v6511 = null;
      const v6512 = await txn1.getOutput('Admin_revokeAdmin', 'v6511', ctc0, v6511);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v6318, v6512), {
          at: './index_v2.rsh:222:11:application',
          fs: ['at ./index_v2.rsh:222:11:application call to [unknown function] (defined at: ./index_v2.rsh:222:11:function exp)', 'at ./index_v2.rsh:228:14:application call to "ret" (defined at: ./index_v2.rsh:226:15:function exp)', 'at ./index_v2.rsh:226:15:application call to [unknown function] (defined at: ./index_v2.rsh:226:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v6527 = {
        bal: v4368,
        keepGoing: v4369,
        percent: v4370,
        totalCurrentAllocatoinToAllUsers: v4371,
        totalFundsDeposited: v4372,
        total_amount_claimed: v4373,
        total_rewards_allcoated: v4374,
        total_users_claim: v4375,
        usersNo: v4376
        };
      const v12412 = v4330;
      const v12413 = v6527.keepGoing;
      if (v12413) {
        const v12414 = v6527.bal;
        const v12416 = v6527.percent;
        const v12417 = v6527.totalCurrentAllocatoinToAllUsers;
        const v12418 = v6527.totalFundsDeposited;
        const v12419 = v6527.total_amount_claimed;
        const v12420 = v6527.total_rewards_allcoated;
        const v12421 = v6527.total_users_claim;
        const v12422 = v6527.usersNo;
        return;
        }
      else {
        const v12429 = stdlib.sub(v4330, v4330);
        ;
        const v12430 = (stdlib.le(await ctc.getBalance(), v12429) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12429));
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
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
    Admin_addAdmin0_235: ctc13,
    Admin_deposit0_235: ctc14,
    Admin_editUserReward0_235: ctc15,
    Admin_endContractAndTransfer0_235: ctc16,
    Admin_revokeAdmin0_235: ctc13,
    Admin_setReward0_235: ctc12,
    User_claim0_235: ctc17,
    User_optin0_235: ctc16
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4423 = stdlib.protect(ctc12, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v4424 = v4423[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4426 = v4423[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v4431 = stdlib.ge(v4426, v4330);
  const v4433 = stdlib.safeSub(v4330, v4426);
  const v4434 = stdlib.ge(v4433, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4434, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot have an amout that would result to a negative balance',
    who: 'Admin_setReward'
    });
  const v4436 = v4431 ? false : true;
  stdlib.assert(v4436, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Balance has to be greater than Amt',
    who: 'Admin_setReward'
    });
  const v4439 = stdlib.safeAdd(v4371, v4426);
  const v4440 = stdlib.ge(v4330, v4439);
  stdlib.assert(v4440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Balance has to be greater than total allocation ',
    who: 'Admin_setReward'
    });
  const v4442 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v4424, ctc0), null);
  const v4443 = {
    None: 0,
    Some: 1
    }[v4442[0]];
  const v4444 = stdlib.eq(v4443, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4444, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v4455 = ['Admin_setReward0_235', v4423];
  
  const v4614 = v4431 ? v4426 : stdlib.checkedBigNumberify('./index_v2.rsh:167:30:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4455],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v4614, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v6782 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '0')];
          const v6784 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '2')];
          const v6786 = stdlib.ge(v6784, v4330);
          const v6794 = stdlib.safeAdd(v4371, v6784);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v6782, ctc0), null);
          const v6801 = v6786 ? v6784 : stdlib.checkedBigNumberify('./index_v2.rsh:167:30:decimal', stdlib.UInt_max, '0');
          const v6814 = stdlib.add(v4330, v6801);
          sim_r.txns.push({
            amt: v6801,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6953 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '1')];
          const v6956 = stdlib.ge(v6784, v6814);
          const v6978 = [v6782, v6953];
          const v6979 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v6978, ctc3), null);
          const v6980 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6981 = stdlib.fromSome(v6979, v6980);
          const v6983 = v6981.claimed;
          const v6984 = v6981.rewards;
          const v6986 = stdlib.safeAdd(v6984, v6784);
          const v6987 = {
            claimed: v6983,
            rewards: v6986
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v6978, ctc3, v6987);
          const v6988 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v6782, ctc1), null);
          const v6989 = stdlib.fromSome(v6988, stdlib.checkedBigNumberify('./index_v2.rsh:181:60:decimal', stdlib.UInt_max, '0'));
          const v6990 = stdlib.safeAdd(v6989, v6784);
          await stdlib.simMapSet(sim_r, 0, ctc6, v6782, ctc1, v6990);
          const v6991 = true;
          const v6992 = await txn1.getOutput('Admin_setReward', 'v6991', ctc8, v6991);
          
          let v7010;
          if (v6956) {
            const v7011 = stdlib.safeAdd(v4368, v6784);
            v7010 = v7011;
            }
          else {
            v7010 = v4368;
            }
          const v7012 = {
            bal: v7010,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v6794,
            totalFundsDeposited: v4372,
            total_amount_claimed: v4373,
            total_rewards_allcoated: v4374,
            total_users_claim: v4375,
            usersNo: v4376
            };
          const v12664 = v6814;
          const v12665 = v7012.keepGoing;
          if (v12665) {
            const v12666 = v7012.bal;
            const v12668 = v7012.percent;
            const v12669 = v7012.totalCurrentAllocatoinToAllUsers;
            const v12670 = v7012.totalFundsDeposited;
            const v12671 = v7012.total_amount_claimed;
            const v12672 = v7012.total_rewards_allcoated;
            const v12673 = v7012.total_users_claim;
            const v12674 = v7012.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v12681 = stdlib.sub(v6814, v6814);
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
              tok: undefined /* Nothing */
              });
            const v12682 = (stdlib.le(await ctc.getBalance(), v12681) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12681));
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
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
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      undefined /* setApiDetails */;
      const v6782 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '0')];
      const v6784 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '2')];
      const v6786 = stdlib.ge(v6784, v4330);
      const v6788 = stdlib.safeSub(v4330, v6784);
      const v6789 = stdlib.ge(v6788, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6789, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      const v6791 = v6786 ? false : true;
      stdlib.assert(v6791, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v6794 = stdlib.safeAdd(v4371, v6784);
      const v6795 = stdlib.ge(v4330, v6794);
      stdlib.assert(v6795, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v6797 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v6782, ctc0), null);
      const v6798 = {
        None: 0,
        Some: 1
        }[v6797[0]];
      const v6799 = stdlib.eq(v6798, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6799, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v6801 = v6786 ? v6784 : stdlib.checkedBigNumberify('./index_v2.rsh:167:30:decimal', stdlib.UInt_max, '0');
      const v6814 = stdlib.add(v4330, v6801);
      ;
      const v6953 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '1')];
      const v6956 = stdlib.ge(v6784, v6814);
      const v6958 = stdlib.safeSub(v6814, v6784);
      const v6959 = stdlib.ge(v6958, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6959, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      const v6961 = v6956 ? false : true;
      stdlib.assert(v6961, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v6965 = stdlib.ge(v6814, v6794);
      stdlib.assert(v6965, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v6976 = stdlib.ge(v6958, v4371);
      stdlib.assert(v6976, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v6978 = [v6782, v6953];
      const v6979 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v6978, ctc3), null);
      const v6980 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6981 = stdlib.fromSome(v6979, v6980);
      const v6983 = v6981.claimed;
      const v6984 = v6981.rewards;
      const v6986 = stdlib.safeAdd(v6984, v6784);
      const v6987 = {
        claimed: v6983,
        rewards: v6986
        };
      await stdlib.mapSet(map1, ctc19, v6978, ctc3, v6987);
      const v6988 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v6782, ctc1), null);
      const v6989 = stdlib.fromSome(v6988, stdlib.checkedBigNumberify('./index_v2.rsh:181:60:decimal', stdlib.UInt_max, '0'));
      const v6990 = stdlib.safeAdd(v6989, v6784);
      await stdlib.mapSet(map0, ctc6, v6782, ctc1, v6990);
      const v6991 = true;
      const v6992 = await txn1.getOutput('Admin_setReward', 'v6991', ctc8, v6991);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v6740, v6992), {
          at: './index_v2.rsh:153:11:application',
          fs: ['at ./index_v2.rsh:153:11:application call to [unknown function] (defined at: ./index_v2.rsh:153:11:function exp)', 'at ./index_v2.rsh:183:14:application call to "ret" (defined at: ./index_v2.rsh:168:15:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      let v7010;
      if (v6956) {
        const v7011 = stdlib.safeAdd(v4368, v6784);
        v7010 = v7011;
        }
      else {
        v7010 = v4368;
        }
      const v7012 = {
        bal: v7010,
        keepGoing: v4369,
        percent: v4370,
        totalCurrentAllocatoinToAllUsers: v6794,
        totalFundsDeposited: v4372,
        total_amount_claimed: v4373,
        total_rewards_allcoated: v4374,
        total_users_claim: v4375,
        usersNo: v4376
        };
      const v12664 = v6814;
      const v12665 = v7012.keepGoing;
      if (v12665) {
        const v12666 = v7012.bal;
        const v12668 = v7012.percent;
        const v12669 = v7012.totalCurrentAllocatoinToAllUsers;
        const v12670 = v7012.totalFundsDeposited;
        const v12671 = v7012.total_amount_claimed;
        const v12672 = v7012.total_rewards_allcoated;
        const v12673 = v7012.total_users_claim;
        const v12674 = v7012.usersNo;
        return;
        }
      else {
        const v12681 = stdlib.sub(v6814, v6814);
        ;
        const v12682 = (stdlib.le(await ctc.getBalance(), v12681) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12681));
        ;
        return;
        }
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
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
    Admin_addAdmin0_235: ctc8,
    Admin_deposit0_235: ctc9,
    Admin_editUserReward0_235: ctc10,
    Admin_endContractAndTransfer0_235: ctc11,
    Admin_revokeAdmin0_235: ctc8,
    Admin_setReward0_235: ctc13,
    User_claim0_235: ctc14,
    User_optin0_235: ctc11
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
  
  
  const v4314 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v4314],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index_v2.rsh:63:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:63:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4318], secs: v4320, time: v4319, didSend: v27, from: v4317 } = txn1;
      
      ;
      const v4321 = await ctc.getContractInfo();
      
      const v4323 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v4324 = {
        i: v4323,
        sign: true
        };
      const v4325 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v4324,
        totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4326 = v4325;
      const v4327 = v4319;
      const v4330 = stdlib.checkedBigNumberify('./index_v2.rsh:58:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v4358 = v4326.keepGoing;
        
        return v4358;})()) {
        const v4368 = v4326.bal;
        const v4369 = v4326.keepGoing;
        const v4370 = v4326.percent;
        const v4371 = v4326.totalCurrentAllocatoinToAllUsers;
        const v4372 = v4326.totalFundsDeposited;
        const v4373 = v4326.total_amount_claimed;
        const v4374 = v4326.total_rewards_allcoated;
        const v4375 = v4326.total_users_claim;
        const v4376 = v4326.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v8045 = stdlib.sub(v4330, v4330);
        sim_r.txns.push({
          kind: 'from',
          to: v4317,
          tok: undefined /* Nothing */
          });
        const v8047 = (stdlib.le(await ctc.getBalance(), v8045) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8045));
        sim_r.txns.push({
          kind: 'from',
          to: v4317,
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
  const {data: [v4318], secs: v4320, time: v4319, didSend: v27, from: v4317 } = txn1;
  ;
  const v4321 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v4321), {
    at: './index_v2.rsh:65:27:application',
    fs: ['at ./index_v2.rsh:65:27:application call to [unknown function] (defined at: ./index_v2.rsh:65:27:function exp)', 'at ./index_v2.rsh:65:27:application call to "liftedInteract" (defined at: ./index_v2.rsh:65:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v4323 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v4324 = {
    i: v4323,
    sign: true
    };
  const v4325 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v4324,
    totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v4326 = v4325;
  let v4327 = v4319;
  let v4330 = stdlib.checkedBigNumberify('./index_v2.rsh:58:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v4358 = v4326.keepGoing;
    
    return v4358;})()) {
    const v4368 = v4326.bal;
    const v4369 = v4326.keepGoing;
    const v4370 = v4326.percent;
    const v4371 = v4326.totalCurrentAllocatoinToAllUsers;
    const v4372 = v4326.totalFundsDeposited;
    const v4373 = v4326.total_amount_claimed;
    const v4374 = v4326.total_rewards_allcoated;
    const v4375 = v4326.total_users_claim;
    const v4376 = v4326.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn3;
    switch (v4627[0]) {
      case 'Admin_addAdmin0_235': {
        const v4630 = v4627[1];
        undefined /* setApiDetails */;
        const v4636 = stdlib.addressEq(v4626, v4317);
        const v4637 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v4626, ctc0), null);
        const v4638 = {
          None: 0,
          Some: 1
          }[v4637[0]];
        const v4639 = stdlib.eq(v4638, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4640 = v4636 ? true : v4639;
        stdlib.assert(v4640, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:209:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:208:34:application call to [unknown function] (defined at: ./index_v2.rsh:208:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:208:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v4706 = v4630[stdlib.checkedBigNumberify('./index_v2.rsh:208:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v4706, ctc0, null);
        const v4715 = null;
        await txn3.getOutput('Admin_addAdmin', 'v4715', ctc0, v4715);
        const v4731 = {
          bal: v4368,
          keepGoing: v4369,
          percent: v4370,
          totalCurrentAllocatoinToAllUsers: v4371,
          totalFundsDeposited: v4372,
          total_amount_claimed: v4373,
          total_rewards_allcoated: v4374,
          total_users_claim: v4375,
          usersNo: v4376
          };
        const cv4326 = v4731;
        const cv4327 = v4628;
        const cv4330 = v4330;
        
        v4326 = cv4326;
        v4327 = cv4327;
        v4330 = cv4330;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_235': {
        const v5052 = v4627[1];
        undefined /* setApiDetails */;
        const v5065 = v5052[stdlib.checkedBigNumberify('./index_v2.rsh:139:10:spread', stdlib.UInt_max, '0')];
        const v5066 = stdlib.addressEq(v4626, v4317);
        const v5067 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v4626, ctc0), null);
        const v5068 = {
          None: 0,
          Some: 1
          }[v5067[0]];
        const v5069 = stdlib.eq(v5068, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5070 = v5066 ? true : v5069;
        stdlib.assert(v5070, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v5126 = stdlib.add(v4330, v5065);
        ;
        const v5164 = null;
        await txn3.getOutput('Admin_deposit', 'v5164', ctc0, v5164);
        const v5180 = stdlib.safeAdd(v4368, v5065);
        const v5181 = stdlib.safeAdd(v4372, v5065);
        const v5182 = {
          bal: v5180,
          keepGoing: v4369,
          percent: v4370,
          totalCurrentAllocatoinToAllUsers: v4371,
          totalFundsDeposited: v5181,
          total_amount_claimed: v4373,
          total_rewards_allcoated: v4374,
          total_users_claim: v4375,
          usersNo: v4376
          };
        const cv4326 = v5182;
        const cv4327 = v4628;
        const cv4330 = v5126;
        
        v4326 = cv4326;
        v4327 = cv4327;
        v4330 = cv4330;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_235': {
        const v5474 = v4627[1];
        undefined /* setApiDetails */;
        const v5496 = v5474[stdlib.checkedBigNumberify('./index_v2.rsh:196:10:spread', stdlib.UInt_max, '1')];
        const v5497 = stdlib.addressEq(v4626, v4317);
        const v5498 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v4626, ctc0), null);
        const v5499 = {
          None: 0,
          Some: 1
          }[v5498[0]];
        const v5500 = stdlib.eq(v5499, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5501 = v5497 ? true : v5500;
        stdlib.assert(v5501, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:196:45:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v5504 = stdlib.le(v5496, v4330);
        stdlib.assert(v5504, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:196:45:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:196:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        const v5607 = v5474[stdlib.checkedBigNumberify('./index_v2.rsh:196:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc7, v5607, ctc1, v5496);
        const v5620 = null;
        await txn3.getOutput('Admin_editUserReward', 'v5620', ctc0, v5620);
        const v5637 = {
          bal: v4368,
          keepGoing: v4369,
          percent: v4370,
          totalCurrentAllocatoinToAllUsers: v4371,
          totalFundsDeposited: v4372,
          total_amount_claimed: v4373,
          total_rewards_allcoated: v4374,
          total_users_claim: v4375,
          usersNo: v4376
          };
        const cv4326 = v5637;
        const cv4327 = v4628;
        const cv4330 = v4330;
        
        v4326 = cv4326;
        v4327 = cv4327;
        v4330 = cv4330;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_235': {
        const v5896 = v4627[1];
        undefined /* setApiDetails */;
        const v5929 = stdlib.addressEq(v4317, v4626);
        stdlib.assert(v5929, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:340:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:339:44:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        const v5931 = stdlib.eq(v4371, stdlib.checkedBigNumberify('./index_v2.rsh:342:45:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5931, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:341:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:339:44:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:339:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Users have unclaimed funds, thus you cannot end contract',
          who: 'Deployer'
          });
        ;
        const v6066 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v6066', ctc0, v6066);
        const v6081 = {
          bal: v4368,
          keepGoing: false,
          percent: v4370,
          totalCurrentAllocatoinToAllUsers: v4371,
          totalFundsDeposited: v4372,
          total_amount_claimed: v4373,
          total_rewards_allcoated: v4374,
          total_users_claim: v4375,
          usersNo: v4376
          };
        const cv4326 = v6081;
        const cv4327 = v4628;
        const cv4330 = v4330;
        
        v4326 = cv4326;
        v4327 = cv4327;
        v4330 = cv4330;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_235': {
        const v6318 = v4627[1];
        undefined /* setApiDetails */;
        const v6357 = stdlib.addressEq(v4626, v4317);
        stdlib.assert(v6357, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:222:37:application call to [unknown function] (defined at: ./index_v2.rsh:222:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:222:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v6506 = v6318[stdlib.checkedBigNumberify('./index_v2.rsh:222:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v6506, ctc0, undefined /* Nothing */);
        const v6511 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v6511', ctc0, v6511);
        const v6527 = {
          bal: v4368,
          keepGoing: v4369,
          percent: v4370,
          totalCurrentAllocatoinToAllUsers: v4371,
          totalFundsDeposited: v4372,
          total_amount_claimed: v4373,
          total_rewards_allcoated: v4374,
          total_users_claim: v4375,
          usersNo: v4376
          };
        const cv4326 = v6527;
        const cv4327 = v4628;
        const cv4330 = v4330;
        
        v4326 = cv4326;
        v4327 = cv4327;
        v4330 = cv4330;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_235': {
        const v6740 = v4627[1];
        undefined /* setApiDetails */;
        const v6782 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '0')];
        const v6784 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '2')];
        const v6786 = stdlib.ge(v6784, v4330);
        const v6788 = stdlib.safeSub(v4330, v6784);
        const v6789 = stdlib.ge(v6788, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v6789, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        const v6791 = v6786 ? false : true;
        stdlib.assert(v6791, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v6794 = stdlib.safeAdd(v4371, v6784);
        const v6795 = stdlib.ge(v4330, v6794);
        stdlib.assert(v6795, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v6797 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v6782, ctc0), null);
        const v6798 = {
          None: 0,
          Some: 1
          }[v6797[0]];
        const v6799 = stdlib.eq(v6798, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6799, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v6801 = v6786 ? v6784 : stdlib.checkedBigNumberify('./index_v2.rsh:167:30:decimal', stdlib.UInt_max, '0');
        const v6814 = stdlib.add(v4330, v6801);
        ;
        const v6953 = v6740[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '1')];
        const v6956 = stdlib.ge(v6784, v6814);
        const v6958 = stdlib.safeSub(v6814, v6784);
        const v6959 = stdlib.ge(v6958, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v6959, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        const v6961 = v6956 ? false : true;
        stdlib.assert(v6961, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v6965 = stdlib.ge(v6814, v6794);
        stdlib.assert(v6965, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v6976 = stdlib.ge(v6958, v4371);
        stdlib.assert(v6976, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v6978 = [v6782, v6953];
        const v6979 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6978, ctc3), null);
        const v6980 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6981 = stdlib.fromSome(v6979, v6980);
        const v6983 = v6981.claimed;
        const v6984 = v6981.rewards;
        const v6986 = stdlib.safeAdd(v6984, v6784);
        const v6987 = {
          claimed: v6983,
          rewards: v6986
          };
        await stdlib.mapSet(map1, ctc16, v6978, ctc3, v6987);
        const v6988 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6782, ctc1), null);
        const v6989 = stdlib.fromSome(v6988, stdlib.checkedBigNumberify('./index_v2.rsh:181:60:decimal', stdlib.UInt_max, '0'));
        const v6990 = stdlib.safeAdd(v6989, v6784);
        await stdlib.mapSet(map0, ctc7, v6782, ctc1, v6990);
        const v6991 = true;
        await txn3.getOutput('Admin_setReward', 'v6991', ctc17, v6991);
        let v7010;
        if (v6956) {
          const v7011 = stdlib.safeAdd(v4368, v6784);
          v7010 = v7011;
          }
        else {
          v7010 = v4368;
          }
        const v7012 = {
          bal: v7010,
          keepGoing: v4369,
          percent: v4370,
          totalCurrentAllocatoinToAllUsers: v6794,
          totalFundsDeposited: v4372,
          total_amount_claimed: v4373,
          total_rewards_allcoated: v4374,
          total_users_claim: v4375,
          usersNo: v4376
          };
        const cv4326 = v7012;
        const cv4327 = v4628;
        const cv4330 = v6814;
        
        v4326 = cv4326;
        v4327 = cv4327;
        v4330 = cv4330;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_235': {
        const v7162 = v4627[1];
        undefined /* setApiDetails */;
        const v7225 = v7162[stdlib.checkedBigNumberify('./index_v2.rsh:281:10:spread', stdlib.UInt_max, '0')];
        const v7227 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4626, ctc1), null);
        const v7228 = stdlib.fromSome(v7227, stdlib.checkedBigNumberify('./index_v2.rsh:282:56:decimal', stdlib.UInt_max, '0'));
        const v7230 = stdlib.le(v7225, v4330);
        stdlib.assert(v7230, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:283:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:281:34:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v7232 = stdlib.ge(v7228, v7225);
        stdlib.assert(v7232, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:281:34:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        const v7438 = v7162[stdlib.checkedBigNumberify('./index_v2.rsh:281:10:spread', stdlib.UInt_max, '1')];
        const v7451 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v4626, ctc0), null);
        const v7452 = {
          None: 0,
          Some: 1
          }[v7451[0]];
        const v7453 = stdlib.eq(v7452, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v7454 = [v4626, v7438];
        const v7455 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v7454, ctc3), null);
        const v7456 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v7457 = stdlib.fromSome(v7455, v7456);
        const v7459 = v7457.claimed;
        const v7460 = v7457.rewards;
        const v7462 = stdlib.safeAdd(v7459, v7225);
        const v7464 = stdlib.safeSub(v7460, v7225);
        const v7465 = {
          claimed: v7462,
          rewards: v7464
          };
        await stdlib.mapSet(map1, ctc16, v7454, ctc3, v7465);
        const v7466 = true;
        await txn3.getOutput('User_claim', 'v7466', ctc17, v7466);
        const v7474 = {
          addr: v4626,
          amount: v7225,
          projectName: v4318
          };
        null;
        if (v7453) {
          const v7524 = stdlib.sub(v4330, v7225);
          ;
          const v7527 = stdlib.eq(v7228, stdlib.checkedBigNumberify('./index_v2.rsh:310:23:decimal', stdlib.UInt_max, '0'));
          if (v7527) {
            await stdlib.mapSet(map0, ctc7, v4626, ctc1, undefined /* Nothing */);
            const v7539 = stdlib.safeAdd(v4376, stdlib.checkedBigNumberify('./index_v2.rsh:317:56:decimal', stdlib.UInt_max, '1'));
            const v7540 = stdlib.safeSub(v4368, v7225);
            const v7541 = stdlib.safeSub(v4371, v7225);
            const v7542 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
            const v7543 = stdlib.safeAdd(v4373, v7225);
            const v7544 = {
              bal: v7540,
              keepGoing: v4369,
              percent: v4370,
              totalCurrentAllocatoinToAllUsers: v7541,
              totalFundsDeposited: v4372,
              total_amount_claimed: v7543,
              total_rewards_allcoated: v4374,
              total_users_claim: v7542,
              usersNo: v7539
              };
            const cv4326 = v7544;
            const cv4327 = v4628;
            const cv4330 = v7524;
            
            v4326 = cv4326;
            v4327 = cv4327;
            v4330 = cv4330;
            
            txn2 = txn3;
            continue;}
          else {
            const v7546 = stdlib.safeSub(v7228, v7225);
            await stdlib.mapSet(map0, ctc7, v4626, ctc1, v7546);
            const v7558 = stdlib.safeAdd(v4376, stdlib.checkedBigNumberify('./index_v2.rsh:317:56:decimal', stdlib.UInt_max, '1'));
            const v7559 = stdlib.safeSub(v4368, v7225);
            const v7560 = stdlib.safeSub(v4371, v7225);
            const v7561 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
            const v7562 = stdlib.safeAdd(v4373, v7225);
            const v7563 = {
              bal: v7559,
              keepGoing: v4369,
              percent: v4370,
              totalCurrentAllocatoinToAllUsers: v7560,
              totalFundsDeposited: v4372,
              total_amount_claimed: v7562,
              total_rewards_allcoated: v4374,
              total_users_claim: v7561,
              usersNo: v7558
              };
            const cv4326 = v7563;
            const cv4327 = v4628;
            const cv4330 = v7524;
            
            v4326 = cv4326;
            v4327 = cv4327;
            v4330 = cv4330;
            
            txn2 = txn3;
            continue;}}
        else {
          await stdlib.mapSet(map3, ctc7, v4626, ctc0, null);
          const v7480 = stdlib.sub(v4330, v7225);
          ;
          const v7483 = stdlib.eq(v7228, stdlib.checkedBigNumberify('./index_v2.rsh:310:23:decimal', stdlib.UInt_max, '0'));
          if (v7483) {
            await stdlib.mapSet(map0, ctc7, v4626, ctc1, undefined /* Nothing */);
            const v7496 = stdlib.safeSub(v4368, v7225);
            const v7497 = stdlib.safeSub(v4371, v7225);
            const v7498 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
            const v7499 = stdlib.safeAdd(v4373, v7225);
            const v7500 = {
              bal: v7496,
              keepGoing: v4369,
              percent: v4370,
              totalCurrentAllocatoinToAllUsers: v7497,
              totalFundsDeposited: v4372,
              total_amount_claimed: v7499,
              total_rewards_allcoated: v4374,
              total_users_claim: v7498,
              usersNo: v4376
              };
            const cv4326 = v7500;
            const cv4327 = v4628;
            const cv4330 = v7480;
            
            v4326 = cv4326;
            v4327 = cv4327;
            v4330 = cv4330;
            
            txn2 = txn3;
            continue;}
          else {
            const v7502 = stdlib.safeSub(v7228, v7225);
            await stdlib.mapSet(map0, ctc7, v4626, ctc1, v7502);
            const v7515 = stdlib.safeSub(v4368, v7225);
            const v7516 = stdlib.safeSub(v4371, v7225);
            const v7517 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
            const v7518 = stdlib.safeAdd(v4373, v7225);
            const v7519 = {
              bal: v7515,
              keepGoing: v4369,
              percent: v4370,
              totalCurrentAllocatoinToAllUsers: v7516,
              totalFundsDeposited: v4372,
              total_amount_claimed: v7518,
              total_rewards_allcoated: v4374,
              total_users_claim: v7517,
              usersNo: v4376
              };
            const cv4326 = v7519;
            const cv4327 = v4628;
            const cv4330 = v7480;
            
            v4326 = cv4326;
            v4327 = cv4327;
            v4330 = cv4330;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_235': {
        const v7584 = v4627[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map4, ctc7, v4626, ctc0, null);
        const v7989 = null;
        await txn3.getOutput('User_optin', 'v7989', ctc0, v7989);
        const v8004 = {
          bal: v4368,
          keepGoing: v4369,
          percent: v4370,
          totalCurrentAllocatoinToAllUsers: v4371,
          totalFundsDeposited: v4372,
          total_amount_claimed: v4373,
          total_rewards_allcoated: v4374,
          total_users_claim: v4375,
          usersNo: v4376
          };
        const cv4326 = v8004;
        const cv4327 = v4628;
        const cv4330 = v4330;
        
        v4326 = cv4326;
        v4327 = cv4327;
        v4330 = cv4330;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v8045 = stdlib.sub(v4330, v4330);
  ;
  const v8047 = (stdlib.le(await ctc.getBalance(), v8045) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8045));
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
    Admin_addAdmin0_235: ctc13,
    Admin_deposit0_235: ctc14,
    Admin_editUserReward0_235: ctc15,
    Admin_endContractAndTransfer0_235: ctc16,
    Admin_revokeAdmin0_235: ctc13,
    Admin_setReward0_235: ctc17,
    User_claim0_235: ctc12,
    User_optin0_235: ctc16
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4514 = ctc.selfAddress();
  const v4516 = stdlib.protect(ctc12, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:281:34:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_claim0_235" (defined at: ./index_v2.rsh:281:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v4517 = v4516[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4521 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4514, ctc1), null);
  const v4522 = stdlib.fromSome(v4521, stdlib.checkedBigNumberify('./index_v2.rsh:282:56:decimal', stdlib.UInt_max, '0'));
  const v4524 = stdlib.le(v4517, v4330);
  stdlib.assert(v4524, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:283:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:281:34:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_claim0_235" (defined at: ./index_v2.rsh:281:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v4526 = stdlib.ge(v4522, v4517);
  stdlib.assert(v4526, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:281:34:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_claim0_235" (defined at: ./index_v2.rsh:281:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v4535 = ['User_claim0_235', v4516];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4535],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:286:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v7225 = v7162[stdlib.checkedBigNumberify('./index_v2.rsh:281:10:spread', stdlib.UInt_max, '0')];
          const v7227 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v4626, ctc1), null);
          const v7228 = stdlib.fromSome(v7227, stdlib.checkedBigNumberify('./index_v2.rsh:282:56:decimal', stdlib.UInt_max, '0'));
          ;
          const v7438 = v7162[stdlib.checkedBigNumberify('./index_v2.rsh:281:10:spread', stdlib.UInt_max, '1')];
          const v7451 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v4626, ctc0), null);
          const v7452 = {
            None: 0,
            Some: 1
            }[v7451[0]];
          const v7453 = stdlib.eq(v7452, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v7454 = [v4626, v7438];
          const v7455 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v7454, ctc3), null);
          const v7456 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v7457 = stdlib.fromSome(v7455, v7456);
          const v7459 = v7457.claimed;
          const v7460 = v7457.rewards;
          const v7462 = stdlib.safeAdd(v7459, v7225);
          const v7464 = stdlib.safeSub(v7460, v7225);
          const v7465 = {
            claimed: v7462,
            rewards: v7464
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v7454, ctc3, v7465);
          const v7466 = true;
          const v7467 = await txn1.getOutput('User_claim', 'v7466', ctc8, v7466);
          
          const v7474 = {
            addr: v4626,
            amount: v7225,
            projectName: v4318
            };
          null;
          if (v7453) {
            const v7524 = stdlib.sub(v4330, v7225);
            sim_r.txns.push({
              kind: 'from',
              to: v4626,
              tok: undefined /* Nothing */
              });
            const v7527 = stdlib.eq(v7228, stdlib.checkedBigNumberify('./index_v2.rsh:310:23:decimal', stdlib.UInt_max, '0'));
            if (v7527) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v4626, ctc1, undefined /* Nothing */);
              const v7539 = stdlib.safeAdd(v4376, stdlib.checkedBigNumberify('./index_v2.rsh:317:56:decimal', stdlib.UInt_max, '1'));
              const v7540 = stdlib.safeSub(v4368, v7225);
              const v7541 = stdlib.safeSub(v4371, v7225);
              const v7542 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
              const v7543 = stdlib.safeAdd(v4373, v7225);
              const v7544 = {
                bal: v7540,
                keepGoing: v4369,
                percent: v4370,
                totalCurrentAllocatoinToAllUsers: v7541,
                totalFundsDeposited: v4372,
                total_amount_claimed: v7543,
                total_rewards_allcoated: v4374,
                total_users_claim: v7542,
                usersNo: v7539
                };
              const v12916 = v7524;
              const v12917 = v7544.keepGoing;
              if (v12917) {
                const v12918 = v7544.bal;
                const v12920 = v7544.percent;
                const v12921 = v7544.totalCurrentAllocatoinToAllUsers;
                const v12922 = v7544.totalFundsDeposited;
                const v12923 = v7544.total_amount_claimed;
                const v12924 = v7544.total_rewards_allcoated;
                const v12925 = v7544.total_users_claim;
                const v12926 = v7544.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12933 = stdlib.sub(v7524, v7524);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                const v12934 = (stdlib.le(await ctc.getBalance(), v12933) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12933));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v7546 = stdlib.safeSub(v7228, v7225);
              await stdlib.simMapSet(sim_r, 0, ctc6, v4626, ctc1, v7546);
              const v7558 = stdlib.safeAdd(v4376, stdlib.checkedBigNumberify('./index_v2.rsh:317:56:decimal', stdlib.UInt_max, '1'));
              const v7559 = stdlib.safeSub(v4368, v7225);
              const v7560 = stdlib.safeSub(v4371, v7225);
              const v7561 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
              const v7562 = stdlib.safeAdd(v4373, v7225);
              const v7563 = {
                bal: v7559,
                keepGoing: v4369,
                percent: v4370,
                totalCurrentAllocatoinToAllUsers: v7560,
                totalFundsDeposited: v4372,
                total_amount_claimed: v7562,
                total_rewards_allcoated: v4374,
                total_users_claim: v7561,
                usersNo: v7558
                };
              const v12937 = v7524;
              const v12938 = v7563.keepGoing;
              if (v12938) {
                const v12939 = v7563.bal;
                const v12941 = v7563.percent;
                const v12942 = v7563.totalCurrentAllocatoinToAllUsers;
                const v12943 = v7563.totalFundsDeposited;
                const v12944 = v7563.total_amount_claimed;
                const v12945 = v7563.total_rewards_allcoated;
                const v12946 = v7563.total_users_claim;
                const v12947 = v7563.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12954 = stdlib.sub(v7524, v7524);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                const v12955 = (stdlib.le(await ctc.getBalance(), v12954) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12954));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v4626, ctc0, null);
            const v7480 = stdlib.sub(v4330, v7225);
            sim_r.txns.push({
              kind: 'from',
              to: v4626,
              tok: undefined /* Nothing */
              });
            const v7483 = stdlib.eq(v7228, stdlib.checkedBigNumberify('./index_v2.rsh:310:23:decimal', stdlib.UInt_max, '0'));
            if (v7483) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v4626, ctc1, undefined /* Nothing */);
              const v7496 = stdlib.safeSub(v4368, v7225);
              const v7497 = stdlib.safeSub(v4371, v7225);
              const v7498 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
              const v7499 = stdlib.safeAdd(v4373, v7225);
              const v7500 = {
                bal: v7496,
                keepGoing: v4369,
                percent: v4370,
                totalCurrentAllocatoinToAllUsers: v7497,
                totalFundsDeposited: v4372,
                total_amount_claimed: v7499,
                total_rewards_allcoated: v4374,
                total_users_claim: v7498,
                usersNo: v4376
                };
              const v12958 = v7480;
              const v12959 = v7500.keepGoing;
              if (v12959) {
                const v12960 = v7500.bal;
                const v12962 = v7500.percent;
                const v12963 = v7500.totalCurrentAllocatoinToAllUsers;
                const v12964 = v7500.totalFundsDeposited;
                const v12965 = v7500.total_amount_claimed;
                const v12966 = v7500.total_rewards_allcoated;
                const v12967 = v7500.total_users_claim;
                const v12968 = v7500.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12975 = stdlib.sub(v7480, v7480);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                const v12976 = (stdlib.le(await ctc.getBalance(), v12975) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12975));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v7502 = stdlib.safeSub(v7228, v7225);
              await stdlib.simMapSet(sim_r, 0, ctc6, v4626, ctc1, v7502);
              const v7515 = stdlib.safeSub(v4368, v7225);
              const v7516 = stdlib.safeSub(v4371, v7225);
              const v7517 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
              const v7518 = stdlib.safeAdd(v4373, v7225);
              const v7519 = {
                bal: v7515,
                keepGoing: v4369,
                percent: v4370,
                totalCurrentAllocatoinToAllUsers: v7516,
                totalFundsDeposited: v4372,
                total_amount_claimed: v7518,
                total_rewards_allcoated: v4374,
                total_users_claim: v7517,
                usersNo: v4376
                };
              const v12979 = v7480;
              const v12980 = v7519.keepGoing;
              if (v12980) {
                const v12981 = v7519.bal;
                const v12983 = v7519.percent;
                const v12984 = v7519.totalCurrentAllocatoinToAllUsers;
                const v12985 = v7519.totalFundsDeposited;
                const v12986 = v7519.total_amount_claimed;
                const v12987 = v7519.total_rewards_allcoated;
                const v12988 = v7519.total_users_claim;
                const v12989 = v7519.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12996 = stdlib.sub(v7480, v7480);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                const v12997 = (stdlib.le(await ctc.getBalance(), v12996) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12996));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4317,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      undefined /* setApiDetails */;
      const v7225 = v7162[stdlib.checkedBigNumberify('./index_v2.rsh:281:10:spread', stdlib.UInt_max, '0')];
      const v7227 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4626, ctc1), null);
      const v7228 = stdlib.fromSome(v7227, stdlib.checkedBigNumberify('./index_v2.rsh:282:56:decimal', stdlib.UInt_max, '0'));
      const v7230 = stdlib.le(v7225, v4330);
      stdlib.assert(v7230, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:283:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:281:34:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v7232 = stdlib.ge(v7228, v7225);
      stdlib.assert(v7232, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:281:34:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:281:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      const v7438 = v7162[stdlib.checkedBigNumberify('./index_v2.rsh:281:10:spread', stdlib.UInt_max, '1')];
      const v7451 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v4626, ctc0), null);
      const v7452 = {
        None: 0,
        Some: 1
        }[v7451[0]];
      const v7453 = stdlib.eq(v7452, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v7454 = [v4626, v7438];
      const v7455 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v7454, ctc3), null);
      const v7456 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v7457 = stdlib.fromSome(v7455, v7456);
      const v7459 = v7457.claimed;
      const v7460 = v7457.rewards;
      const v7462 = stdlib.safeAdd(v7459, v7225);
      const v7464 = stdlib.safeSub(v7460, v7225);
      const v7465 = {
        claimed: v7462,
        rewards: v7464
        };
      await stdlib.mapSet(map1, ctc19, v7454, ctc3, v7465);
      const v7466 = true;
      const v7467 = await txn1.getOutput('User_claim', 'v7466', ctc8, v7466);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v7162, v7467), {
          at: './index_v2.rsh:281:11:application',
          fs: ['at ./index_v2.rsh:281:11:application call to [unknown function] (defined at: ./index_v2.rsh:281:11:function exp)', 'at ./index_v2.rsh:300:14:application call to "ret" (defined at: ./index_v2.rsh:287:15:function exp)', 'at ./index_v2.rsh:287:15:application call to [unknown function] (defined at: ./index_v2.rsh:287:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v7474 = {
        addr: v4626,
        amount: v7225,
        projectName: v4318
        };
      null;
      if (v7453) {
        const v7524 = stdlib.sub(v4330, v7225);
        ;
        const v7527 = stdlib.eq(v7228, stdlib.checkedBigNumberify('./index_v2.rsh:310:23:decimal', stdlib.UInt_max, '0'));
        if (v7527) {
          await stdlib.mapSet(map0, ctc6, v4626, ctc1, undefined /* Nothing */);
          const v7539 = stdlib.safeAdd(v4376, stdlib.checkedBigNumberify('./index_v2.rsh:317:56:decimal', stdlib.UInt_max, '1'));
          const v7540 = stdlib.safeSub(v4368, v7225);
          const v7541 = stdlib.safeSub(v4371, v7225);
          const v7542 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
          const v7543 = stdlib.safeAdd(v4373, v7225);
          const v7544 = {
            bal: v7540,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v7541,
            totalFundsDeposited: v4372,
            total_amount_claimed: v7543,
            total_rewards_allcoated: v4374,
            total_users_claim: v7542,
            usersNo: v7539
            };
          const v12916 = v7524;
          const v12917 = v7544.keepGoing;
          if (v12917) {
            const v12918 = v7544.bal;
            const v12920 = v7544.percent;
            const v12921 = v7544.totalCurrentAllocatoinToAllUsers;
            const v12922 = v7544.totalFundsDeposited;
            const v12923 = v7544.total_amount_claimed;
            const v12924 = v7544.total_rewards_allcoated;
            const v12925 = v7544.total_users_claim;
            const v12926 = v7544.usersNo;
            return;
            }
          else {
            const v12933 = stdlib.sub(v7524, v7524);
            ;
            const v12934 = (stdlib.le(await ctc.getBalance(), v12933) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12933));
            ;
            return;
            }}
        else {
          const v7546 = stdlib.safeSub(v7228, v7225);
          await stdlib.mapSet(map0, ctc6, v4626, ctc1, v7546);
          const v7558 = stdlib.safeAdd(v4376, stdlib.checkedBigNumberify('./index_v2.rsh:317:56:decimal', stdlib.UInt_max, '1'));
          const v7559 = stdlib.safeSub(v4368, v7225);
          const v7560 = stdlib.safeSub(v4371, v7225);
          const v7561 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
          const v7562 = stdlib.safeAdd(v4373, v7225);
          const v7563 = {
            bal: v7559,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v7560,
            totalFundsDeposited: v4372,
            total_amount_claimed: v7562,
            total_rewards_allcoated: v4374,
            total_users_claim: v7561,
            usersNo: v7558
            };
          const v12937 = v7524;
          const v12938 = v7563.keepGoing;
          if (v12938) {
            const v12939 = v7563.bal;
            const v12941 = v7563.percent;
            const v12942 = v7563.totalCurrentAllocatoinToAllUsers;
            const v12943 = v7563.totalFundsDeposited;
            const v12944 = v7563.total_amount_claimed;
            const v12945 = v7563.total_rewards_allcoated;
            const v12946 = v7563.total_users_claim;
            const v12947 = v7563.usersNo;
            return;
            }
          else {
            const v12954 = stdlib.sub(v7524, v7524);
            ;
            const v12955 = (stdlib.le(await ctc.getBalance(), v12954) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12954));
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map3, ctc6, v4626, ctc0, null);
        const v7480 = stdlib.sub(v4330, v7225);
        ;
        const v7483 = stdlib.eq(v7228, stdlib.checkedBigNumberify('./index_v2.rsh:310:23:decimal', stdlib.UInt_max, '0'));
        if (v7483) {
          await stdlib.mapSet(map0, ctc6, v4626, ctc1, undefined /* Nothing */);
          const v7496 = stdlib.safeSub(v4368, v7225);
          const v7497 = stdlib.safeSub(v4371, v7225);
          const v7498 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
          const v7499 = stdlib.safeAdd(v4373, v7225);
          const v7500 = {
            bal: v7496,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v7497,
            totalFundsDeposited: v4372,
            total_amount_claimed: v7499,
            total_rewards_allcoated: v4374,
            total_users_claim: v7498,
            usersNo: v4376
            };
          const v12958 = v7480;
          const v12959 = v7500.keepGoing;
          if (v12959) {
            const v12960 = v7500.bal;
            const v12962 = v7500.percent;
            const v12963 = v7500.totalCurrentAllocatoinToAllUsers;
            const v12964 = v7500.totalFundsDeposited;
            const v12965 = v7500.total_amount_claimed;
            const v12966 = v7500.total_rewards_allcoated;
            const v12967 = v7500.total_users_claim;
            const v12968 = v7500.usersNo;
            return;
            }
          else {
            const v12975 = stdlib.sub(v7480, v7480);
            ;
            const v12976 = (stdlib.le(await ctc.getBalance(), v12975) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12975));
            ;
            return;
            }}
        else {
          const v7502 = stdlib.safeSub(v7228, v7225);
          await stdlib.mapSet(map0, ctc6, v4626, ctc1, v7502);
          const v7515 = stdlib.safeSub(v4368, v7225);
          const v7516 = stdlib.safeSub(v4371, v7225);
          const v7517 = stdlib.safeAdd(v4375, stdlib.checkedBigNumberify('./index_v2.rsh:320:52:decimal', stdlib.UInt_max, '1'));
          const v7518 = stdlib.safeAdd(v4373, v7225);
          const v7519 = {
            bal: v7515,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v7516,
            totalFundsDeposited: v4372,
            total_amount_claimed: v7518,
            total_rewards_allcoated: v4374,
            total_users_claim: v7517,
            usersNo: v4376
            };
          const v12979 = v7480;
          const v12980 = v7519.keepGoing;
          if (v12980) {
            const v12981 = v7519.bal;
            const v12983 = v7519.percent;
            const v12984 = v7519.totalCurrentAllocatoinToAllUsers;
            const v12985 = v7519.totalFundsDeposited;
            const v12986 = v7519.total_amount_claimed;
            const v12987 = v7519.total_rewards_allcoated;
            const v12988 = v7519.total_users_claim;
            const v12989 = v7519.usersNo;
            return;
            }
          else {
            const v12996 = stdlib.sub(v7480, v7480);
            ;
            const v12997 = (stdlib.le(await ctc.getBalance(), v12996) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12996));
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
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
    Admin_addAdmin0_235: ctc12,
    Admin_deposit0_235: ctc13,
    Admin_editUserReward0_235: ctc14,
    Admin_endContractAndTransfer0_235: ctc11,
    Admin_revokeAdmin0_235: ctc12,
    Admin_setReward0_235: ctc16,
    User_claim0_235: ctc17,
    User_optin0_235: ctc11
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
  
  
  const [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4539 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:329:26:application call to [unknown function] (defined at: ./index_v2.rsh:329:26:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_optin0_235" (defined at: ./index_v2.rsh:329:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v4543 = ['User_optin0_235', v4539];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4317, v4318, v4330, v4368, v4369, v4370, v4371, v4372, v4373, v4374, v4375, v4376, v4543],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:331:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
      
      switch (v4627[0]) {
        case 'Admin_addAdmin0_235': {
          const v4630 = v4627[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5052 = v4627[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5474 = v4627[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5896 = v4627[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6318 = v4627[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6740 = v4627[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7162 = v4627[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7584 = v4627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v4626, ctc0, null);
          const v7989 = null;
          const v7990 = await txn1.getOutput('User_optin', 'v7989', ctc0, v7989);
          
          const v8004 = {
            bal: v4368,
            keepGoing: v4369,
            percent: v4370,
            totalCurrentAllocatoinToAllUsers: v4371,
            totalFundsDeposited: v4372,
            total_amount_claimed: v4373,
            total_rewards_allcoated: v4374,
            total_users_claim: v4375,
            usersNo: v4376
            };
          const v13231 = v4330;
          const v13232 = v8004.keepGoing;
          if (v13232) {
            const v13233 = v8004.bal;
            const v13235 = v8004.percent;
            const v13236 = v8004.totalCurrentAllocatoinToAllUsers;
            const v13237 = v8004.totalFundsDeposited;
            const v13238 = v8004.total_amount_claimed;
            const v13239 = v8004.total_rewards_allcoated;
            const v13240 = v8004.total_users_claim;
            const v13241 = v8004.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v13248 = stdlib.sub(v4330, v4330);
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
              tok: undefined /* Nothing */
              });
            const v13249 = (stdlib.le(await ctc.getBalance(), v13248) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v13248));
            sim_r.txns.push({
              kind: 'from',
              to: v4317,
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
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4627], secs: v4629, time: v4628, didSend: v3718, from: v4626 } = txn1;
  switch (v4627[0]) {
    case 'Admin_addAdmin0_235': {
      const v4630 = v4627[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5052 = v4627[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5474 = v4627[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5896 = v4627[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6318 = v4627[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6740 = v4627[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7162 = v4627[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7584 = v4627[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map4, ctc6, v4626, ctc0, null);
      const v7989 = null;
      const v7990 = await txn1.getOutput('User_optin', 'v7989', ctc0, v7989);
      if (v3718) {
        stdlib.protect(ctc0, await interact.out(v7584, v7990), {
          at: './index_v2.rsh:329:11:application',
          fs: ['at ./index_v2.rsh:329:11:application call to [unknown function] (defined at: ./index_v2.rsh:329:11:function exp)', 'at ./index_v2.rsh:334:14:application call to "ret" (defined at: ./index_v2.rsh:332:15:function exp)', 'at ./index_v2.rsh:332:15:application call to [unknown function] (defined at: ./index_v2.rsh:332:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v8004 = {
        bal: v4368,
        keepGoing: v4369,
        percent: v4370,
        totalCurrentAllocatoinToAllUsers: v4371,
        totalFundsDeposited: v4372,
        total_amount_claimed: v4373,
        total_rewards_allcoated: v4374,
        total_users_claim: v4375,
        usersNo: v4376
        };
      const v13231 = v4330;
      const v13232 = v8004.keepGoing;
      if (v13232) {
        const v13233 = v8004.bal;
        const v13235 = v8004.percent;
        const v13236 = v8004.totalCurrentAllocatoinToAllUsers;
        const v13237 = v8004.totalFundsDeposited;
        const v13238 = v8004.total_amount_claimed;
        const v13239 = v8004.total_rewards_allcoated;
        const v13240 = v8004.total_users_claim;
        const v13241 = v8004.usersNo;
        return;
        }
      else {
        const v13248 = stdlib.sub(v4330, v4330);
        ;
        const v13249 = (stdlib.le(await ctc.getBalance(), v13248) ? stdlib.checkedBigNumberify('./index_v2.rsh:357:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v13248));
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
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalCurrentAllocatoinToAllUsers()uint64`, `Info_totalFundsDeposited()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalCurrentAllocatoinToAllUsers()uint64`, `Info_totalFundsDeposited()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[48])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEIAxDUkwHUeijUxQEmBgABAAEBAQIBBAEDMRhBCOIoZEkiWzUBJFs1AilkKmRQghYEAl90xwQNs4a8BBNuVzsEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEJoJ9UESCT5AgRu5HYUBHhK2TcEev7IbQSKzWcIBLv1zY4Ex8Kc1QTeVwRkBO1G26YE8yd4BAT5b2zgBPlzDgsE+q7IsDYaAI4WAFQCTAF3AQYCbgGbAhwBNwgUAasAiQHrAbsBywHbAUcIJgDfAMkB+wBrAAEANhoBNQskryk0C1AhBK9QUDULJTQBEkSICdM0CyJbNQw0C1cIMTUNgARVC2WDNAwWUDQNULA0DIgKRDQNIlWNCAlmCWkJbAl2CAAIAwgNCBdC/6w2GgEXNQskryo0CxZQIQevUFA1C0L/qDYaATYaAhc1CzUMJK8rNAw0CxZQUCSvUFA1C0L/ioA5AAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/0o2GgE1CySvJwQ0C1AhBK9QUDULQv80NhoBNhoCFzYaAxc1CzUMNQ0kr4ABBTQNNAwWUDQLFlBQUDULQv8NNhoBNQs0ASUSRIgI2ygoKzQLUIgIxyJVIxIWUQcINQQxGSISRIAEFR98dTQEULAjQzQBJRJEiAivNBcWNQRC/982GgE2GgIXNQs1DDQBJRJEiAiUIQSvKCEEryo0DDQLFlBQiAh3iAjYVwAINQRC/682GgE1CzQBJRJEiAhqKCgnBDQLUIgIVSJVIxIWUQcINQRC/4s0ASUSRIgISzQQFjUEQv97NAElEkSICDs0ERY1BEL/azQBJRJEiAgrNA8WNQRC/1s0ASUSRIgIGzQTFjUEQv9LNAElEkSICAs0EhY1BEL/OzQBJRJEiAf7NA4WNQRC/ys2GgE1CzQBJRJEiAfmJK8oJK8pNAtQiAfPiAgwNQRC/wo2GgE2GgIXNQs1DDQBJRJEiAe/IQSvKCEEryo0DDQLFlBQiAeiiAgDVwgINQRC/to2GgEXNhoCFzULNQwkr4ABBjQMFjQLFlBQMgNQUDULQv2lgDkAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L9ZTEANBsSKCgrMQBQiAcnIlUjEhFEIQYrNA1XASBQKIgHaig1C4AIAAAAAAAAEms0C1CwNAs1BDQWFjQVFlEHCFA0FFA0ExZQNBIWUDQRFlA0EBZQNA8WUDQOFlAyBjUYNRk0GVcIARdBBlg0GSJbNRY0GVcIARc1FTQZVwkRNRQ0GYEaWzUTNBmBIls1EjQZgSpbNRE0GYEyWzUQNBmBOls1DzQZgUJbNQ40GzQaUDQXFlA0FhZQNBUWUQcIUDQUUDQTFlA0EhZQNBEWUDQQFlA0DxZQNA4WUCUyBjUCNQEpSwFXAH9nKkxXfxFnKDQBFjQCFlBnMRkiEkSIBt40A0D9hUL9eDQNI1s1CzEANBsSKCgrMQBQiAYcIlUjEhFENAuIBo0oNQyACAAAAAAAABQsNAxQsDQMNQQ0FjQLCBY0FRZRBwhQNBRQNBMWUDQSNAsIFlA0ERZQNBAWUDQPFlA0DhZQMgY0FzQLCDUXNRg1GUL+7TQLgSBbNQwxADQbEigoKzEAUIgFrCJVIxIRRDQMNBcORCEFKTQLVwAgUDQMFogF5yg1C4AIAAAAAAAAFfQ0C1CwNAs1BDQWFjQVFlEHCFA0FFA0ExZQNBIWUDQRFlA0EBZQNA8WUDQOFlAyBjUYNRlC/no0GzEAEkQ0EyISRCg1C4AIAAAAAAAAF7I0C1CwNAs1BDQWFilQNBRQNBMWUDQSFlA0ERZQNBAWUDQPFlA0DhZQMgY1GDUZQv4xMQA0GxJEIQYrNA1XASBQiAVkKDULgAgAAAAAAAAZbzQLULA0CzUENBYWNBUWUQcIUDQUUDQTFlA0EhZQNBEWUDQQFlA0DxZQNA4WUDIGNRg1GUL93DQLVwAgNR80CyEHW0k1HjQXDzUNNBc0HgkiD0Q0DRRENBM0Hgg1HTQXNB0PRCgoJwQ0H1CIBHkiVSMSRCI0HjQNTTUMNBc0DAg1HDQMiATcNB40HA81DTQcNB4JSTUMIg9ENA0URDQcNB0PRDQMNBMPRDQfNAtXIAhQNQwhBK8oIQSvKjQMUIgEJogEhzULIQgqNAxQNAtXAAg0CyRbNB4IFlCIBGAhBSk0H1Akrygkryk0H1CIA/iIBFkXNB4IFogEQyM1C4AIAAAAAAAAG080CxZRBwhQsDQLFlEHCDUENA1BAlM0FjQeCDULNAsWNBUWUQcIUDQUUDQdFlA0EhZQNBEWUDQQFlA0DxZQNA4WUDIGNBw1FzUYNRlC/L40CyJbNRwkrygkrykxAFCIA4CIA+EXNQ00HDQXDkQ0DTQcD0QxADQLVwgIUDUMIQSvKCEEryo0DFCIA1aIA7c1CyEIKjQMUDQLIls0HAgWNAskWzQcCRZQiAONIzULgAgAAAAAAAAdKjQLFlEHCFCwNAsWUQcINQQxADQcFlA0GlA1C4AEm8hUUDQLULAoKCcFMQBQiAL7IlUjEkEBgzQXNBwJNQs0HDEAiANTNA1AAdQhBSkxAFCIA0k0FjQcCRY0FRZRBwhQNBRQNBM0HAkWUDQSFlA0ETQcCBZQNBAWUDQPIwgWUDQOIwgWUDIGNAs1FzUYNRlC+8UhBicEMQBQKIgC5Cg1C4AIAAAAAAAAHzU0C1CwNAs1BDQWFjQVFlEHCFA0FFA0ExZQNBIWUDQRFlA0EBZQNA8WUDQOFlAyBjUYNRlC+3cxADUbNAsiWzUMNAtXCB41GoAE0SoGjTQMFlA0GlCwNAyIAsOASgAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAGQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgYiNRc1GDUZQvr7iAJkgaCNBogCdzYaATULQv9yiAJSNhoBNQtC9+IiMTQSRCUxNRJEIjE2EkQiMTcSRIgCM4GQAa8iIkL7OEL8ijQNVwEwNQtC/NU0DVcBEDULQv3pQv7fNBY1C0L9rSEGJwUxAFAoiAG8NBc0HAk1CzQcMQCIAcU0DUAAlCEFKTEAUIgBuzQWNBwJFjQVFlEHCFA0FFA0EzQcCRZQNBIWUDQRNBwIFlA0EBZQNA8jCBZQNA4WUDIGNAs1FzUYNRlC+jkhBSkxAFA0DTQcCRaIAVQ0FjQcCRY0FRZRBwhQNBRQNBM0HAkWUDQSFlA0ETQcCBZQNBAWUDQPIwgWUDQOIwgWUDIGNAs1FzUYNRlC+eshBSkxAFA0DTQcCRaIAQY0FjQcCRY0FRZRBwhQNBRQNBM0HAkWUDQSFlA0ETQcCBZQNBAWUDQPIwgWUDQOFlAyBjQLNRc1GDUZQvmfNBc0G4gA2TIKYDIKeAk0F0kJCUk1CzQbiADFMRmBBRJEiAD1MgpgMgp4CUk1BjIKiACtQvoFSEy/SIkisgEjshCyB7IIs4lC+PRC+fY0DVcBKDULQvpbQvrLSIlMCUk1BjIJiAB6iQlJQf/uSTUGiAB9ib5JFlEHCEUETVCJSVcAIDUbSVcgHjUaSYE+WzUXSYFGWzUWSVdOARc1FUlXTxE1FEmBYFs1E0mBaFs1EkmBcFs1EUmBeFs1EEmBgAFbNQ+BiAFbNQ6JTEm9QP9nSwOIAFFC/19JVwEATCJVTYmxQv9XvCJOAk00Bwg1B4kxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/zpC/0I0Bgg1Bok=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `490`,
    1001: `491`,
    1002: `491`,
    1003: `491`,
    1004: `492`,
    1005: `492`,
    1006: `493`,
    1007: `494`,
    1008: `495`,
    1009: `495`,
    101: `21`,
    1010: `496`,
    1011: `496`,
    1012: `497`,
    1013: `497`,
    1014: `497`,
    1015: `498`,
    1016: `499`,
    1017: `499`,
    1018: `500`,
    1019: `500`,
    102: `21`,
    1020: `501`,
    1021: `501`,
    1022: `501`,
    1023: `502`,
    1024: `502`,
    1025: `503`,
    1026: `503`,
    1027: `504`,
    1028: `504`,
    1029: `505`,
    103: `21`,
    1030: `506`,
    1031: `506`,
    1032: `507`,
    1033: `507`,
    1034: `508`,
    1035: `508`,
    1036: `509`,
    1037: `510`,
    1038: `510`,
    1039: `511`,
    104: `21`,
    1040: `511`,
    1041: `512`,
    1042: `512`,
    1043: `513`,
    1044: `514`,
    1045: `514`,
    1046: `515`,
    1047: `515`,
    1048: `516`,
    1049: `516`,
    105: `21`,
    1050: `517`,
    1051: `518`,
    1052: `518`,
    1053: `519`,
    1054: `519`,
    1055: `520`,
    1056: `520`,
    1057: `521`,
    1058: `522`,
    1059: `522`,
    106: `21`,
    1060: `523`,
    1061: `523`,
    1062: `524`,
    1063: `524`,
    1064: `525`,
    1065: `526`,
    1066: `526`,
    1067: `528`,
    1068: `528`,
    1069: `529`,
    107: `21`,
    1070: `529`,
    1071: `530`,
    1072: `531`,
    1073: `531`,
    1074: `532`,
    1075: `533`,
    1076: `534`,
    1077: `534`,
    1078: `535`,
    1079: `536`,
    108: `21`,
    1080: `537`,
    1081: `537`,
    1082: `538`,
    1083: `539`,
    1084: `539`,
    1085: `539`,
    1086: `540`,
    1087: `541`,
    1088: `541`,
    1089: `542`,
    109: `21`,
    1090: `543`,
    1091: `543`,
    1092: `544`,
    1093: `545`,
    1094: `546`,
    1095: `546`,
    1096: `547`,
    1097: `548`,
    1098: `549`,
    1099: `549`,
    11: `2`,
    110: `21`,
    1100: `550`,
    1101: `551`,
    1102: `552`,
    1103: `552`,
    1104: `553`,
    1105: `554`,
    1106: `555`,
    1107: `555`,
    1108: `556`,
    1109: `557`,
    111: `21`,
    1110: `558`,
    1111: `558`,
    1112: `559`,
    1113: `560`,
    1114: `561`,
    1115: `562`,
    1116: `562`,
    1117: `564`,
    1118: `564`,
    1119: `565`,
    112: `21`,
    1120: `565`,
    1121: `566`,
    1122: `567`,
    1123: `567`,
    1124: `568`,
    1125: `568`,
    1126: `568`,
    1127: `569`,
    1128: `570`,
    1129: `571`,
    113: `21`,
    1130: `572`,
    1131: `572`,
    1132: `572`,
    1133: `573`,
    1134: `574`,
    1135: `575`,
    1136: `575`,
    1137: `576`,
    1138: `577`,
    1139: `577`,
    114: `21`,
    1140: `578`,
    1141: `579`,
    1142: `580`,
    1143: `581`,
    1144: `581`,
    1145: `582`,
    1146: `583`,
    1147: `584`,
    1148: `586`,
    1149: `586`,
    115: `21`,
    1150: `586`,
    1151: `588`,
    1152: `588`,
    1153: `589`,
    1154: `589`,
    1155: `589`,
    1156: `590`,
    1157: `590`,
    1158: `590`,
    1159: `592`,
    116: `21`,
    1160: `592`,
    1161: `593`,
    1162: `594`,
    1163: `595`,
    1164: `595`,
    1165: `596`,
    1166: `596`,
    1167: `597`,
    1168: `597`,
    1169: `598`,
    117: `21`,
    1170: `600`,
    1171: `601`,
    1172: `602`,
    1173: `603`,
    1174: `603`,
    1175: `604`,
    1176: `605`,
    1177: `605`,
    1178: `605`,
    1179: `606`,
    118: `21`,
    1180: `607`,
    1181: `608`,
    1182: `609`,
    1183: `610`,
    1184: `611`,
    1185: `618`,
    1186: `618`,
    1187: `619`,
    1188: `619`,
    1189: `619`,
    119: `21`,
    1190: `622`,
    1191: `623`,
    1192: `623`,
    1193: `624`,
    1194: `624`,
    1195: `624`,
    1196: `624`,
    1197: `624`,
    1198: `624`,
    1199: `624`,
    12: `2`,
    120: `21`,
    1200: `624`,
    1201: `624`,
    1202: `624`,
    1203: `625`,
    1204: `625`,
    1205: `626`,
    1206: `627`,
    1207: `628`,
    1208: `628`,
    1209: `629`,
    121: `21`,
    1210: `629`,
    1211: `630`,
    1212: `630`,
    1213: `631`,
    1214: `631`,
    1215: `632`,
    1216: `633`,
    1217: `634`,
    1218: `634`,
    1219: `635`,
    122: `21`,
    1220: `636`,
    1221: `636`,
    1222: `636`,
    1223: `637`,
    1224: `638`,
    1225: `638`,
    1226: `639`,
    1227: `640`,
    1228: `640`,
    1229: `641`,
    123: `21`,
    1230: `642`,
    1231: `643`,
    1232: `643`,
    1233: `644`,
    1234: `644`,
    1235: `645`,
    1236: `646`,
    1237: `647`,
    1238: `648`,
    1239: `648`,
    124: `21`,
    1240: `649`,
    1241: `650`,
    1242: `651`,
    1243: `651`,
    1244: `652`,
    1245: `653`,
    1246: `654`,
    1247: `654`,
    1248: `655`,
    1249: `656`,
    125: `21`,
    1250: `657`,
    1251: `657`,
    1252: `658`,
    1253: `659`,
    1254: `660`,
    1255: `660`,
    1256: `661`,
    1257: `661`,
    1258: `662`,
    1259: `662`,
    126: `21`,
    1260: `663`,
    1261: `664`,
    1262: `664`,
    1263: `665`,
    1264: `665`,
    1265: `666`,
    1266: `666`,
    1267: `667`,
    1268: `667`,
    1269: `667`,
    127: `21`,
    1270: `669`,
    1271: `669`,
    1272: `670`,
    1273: `670`,
    1274: `671`,
    1275: `672`,
    1276: `672`,
    1277: `673`,
    1278: `673`,
    1279: `674`,
    128: `21`,
    1280: `674`,
    1281: `675`,
    1282: `677`,
    1283: `678`,
    1284: `679`,
    1285: `680`,
    1286: `680`,
    1287: `681`,
    1288: `682`,
    1289: `682`,
    129: `21`,
    1290: `682`,
    1291: `683`,
    1292: `684`,
    1293: `685`,
    1294: `686`,
    1295: `687`,
    1296: `688`,
    1297: `695`,
    1298: `695`,
    1299: `696`,
    13: `2`,
    130: `21`,
    1300: `696`,
    1301: `697`,
    1302: `698`,
    1303: `706`,
    1304: `706`,
    1305: `707`,
    1306: `708`,
    1307: `708`,
    1308: `709`,
    1309: `709`,
    131: `21`,
    1310: `709`,
    1311: `710`,
    1312: `711`,
    1313: `711`,
    1314: `712`,
    1315: `713`,
    1316: `713`,
    1317: `713`,
    1318: `714`,
    1319: `715`,
    132: `21`,
    1320: `715`,
    1321: `716`,
    1322: `716`,
    1323: `716`,
    1324: `716`,
    1325: `716`,
    1326: `716`,
    1327: `716`,
    1328: `716`,
    1329: `716`,
    133: `21`,
    1330: `716`,
    1331: `717`,
    1332: `717`,
    1333: `718`,
    1334: `719`,
    1335: `720`,
    1336: `720`,
    1337: `721`,
    1338: `721`,
    1339: `722`,
    134: `21`,
    1340: `722`,
    1341: `723`,
    1342: `724`,
    1343: `724`,
    1344: `725`,
    1345: `726`,
    1346: `726`,
    1347: `726`,
    1348: `727`,
    1349: `728`,
    135: `21`,
    1350: `728`,
    1351: `729`,
    1352: `730`,
    1353: `730`,
    1354: `731`,
    1355: `732`,
    1356: `733`,
    1357: `733`,
    1358: `734`,
    1359: `735`,
    136: `21`,
    1360: `736`,
    1361: `736`,
    1362: `737`,
    1363: `738`,
    1364: `739`,
    1365: `739`,
    1366: `740`,
    1367: `741`,
    1368: `742`,
    1369: `742`,
    137: `21`,
    1370: `743`,
    1371: `744`,
    1372: `745`,
    1373: `745`,
    1374: `746`,
    1375: `747`,
    1376: `748`,
    1377: `748`,
    1378: `749`,
    1379: `749`,
    138: `21`,
    1380: `750`,
    1381: `750`,
    1382: `751`,
    1383: `751`,
    1384: `751`,
    1385: `753`,
    1386: `753`,
    1387: `754`,
    1388: `754`,
    1389: `755`,
    139: `21`,
    1390: `756`,
    1391: `763`,
    1392: `763`,
    1393: `764`,
    1394: `765`,
    1395: `766`,
    1396: `773`,
    1397: `774`,
    1398: `774`,
    1399: `775`,
    14: `2`,
    140: `21`,
    1400: `775`,
    1401: `775`,
    1402: `775`,
    1403: `775`,
    1404: `775`,
    1405: `775`,
    1406: `775`,
    1407: `775`,
    1408: `775`,
    1409: `776`,
    141: `21`,
    1410: `776`,
    1411: `777`,
    1412: `778`,
    1413: `779`,
    1414: `779`,
    1415: `780`,
    1416: `780`,
    1417: `781`,
    1418: `781`,
    1419: `782`,
    142: `21`,
    1420: `783`,
    1421: `784`,
    1422: `785`,
    1423: `785`,
    1424: `786`,
    1425: `787`,
    1426: `787`,
    1427: `788`,
    1428: `789`,
    1429: `790`,
    143: `21`,
    1430: `790`,
    1431: `791`,
    1432: `792`,
    1433: `793`,
    1434: `793`,
    1435: `794`,
    1436: `795`,
    1437: `796`,
    1438: `796`,
    1439: `797`,
    144: `21`,
    1440: `798`,
    1441: `799`,
    1442: `799`,
    1443: `800`,
    1444: `801`,
    1445: `802`,
    1446: `802`,
    1447: `803`,
    1448: `804`,
    1449: `805`,
    145: `21`,
    1450: `805`,
    1451: `806`,
    1452: `806`,
    1453: `807`,
    1454: `807`,
    1455: `808`,
    1456: `808`,
    1457: `808`,
    1458: `810`,
    1459: `810`,
    146: `21`,
    1460: `811`,
    1461: `811`,
    1462: `812`,
    1463: `813`,
    1464: `821`,
    1465: `821`,
    1466: `822`,
    1467: `823`,
    1468: `823`,
    1469: `824`,
    147: `21`,
    1470: `824`,
    1471: `824`,
    1472: `825`,
    1473: `826`,
    1474: `826`,
    1475: `826`,
    1476: `827`,
    1477: `828`,
    1478: `828`,
    1479: `829`,
    148: `21`,
    1480: `829`,
    1481: `829`,
    1482: `829`,
    1483: `829`,
    1484: `829`,
    1485: `829`,
    1486: `829`,
    1487: `829`,
    1488: `829`,
    1489: `830`,
    149: `21`,
    1490: `830`,
    1491: `831`,
    1492: `832`,
    1493: `833`,
    1494: `833`,
    1495: `834`,
    1496: `834`,
    1497: `835`,
    1498: `835`,
    1499: `836`,
    15: `2`,
    150: `21`,
    1500: `837`,
    1501: `837`,
    1502: `838`,
    1503: `839`,
    1504: `839`,
    1505: `839`,
    1506: `840`,
    1507: `841`,
    1508: `841`,
    1509: `842`,
    151: `21`,
    1510: `843`,
    1511: `843`,
    1512: `844`,
    1513: `845`,
    1514: `846`,
    1515: `846`,
    1516: `847`,
    1517: `848`,
    1518: `849`,
    1519: `849`,
    152: `21`,
    1520: `850`,
    1521: `851`,
    1522: `852`,
    1523: `852`,
    1524: `853`,
    1525: `854`,
    1526: `855`,
    1527: `855`,
    1528: `856`,
    1529: `857`,
    153: `21`,
    1530: `858`,
    1531: `858`,
    1532: `859`,
    1533: `860`,
    1534: `861`,
    1535: `861`,
    1536: `862`,
    1537: `862`,
    1538: `863`,
    1539: `863`,
    154: `21`,
    1540: `864`,
    1541: `864`,
    1542: `864`,
    1543: `866`,
    1544: `866`,
    1545: `867`,
    1546: `867`,
    1547: `867`,
    1548: `868`,
    1549: `868`,
    155: `21`,
    1550: `869`,
    1551: `869`,
    1552: `870`,
    1553: `870`,
    1554: `871`,
    1555: `872`,
    1556: `873`,
    1557: `873`,
    1558: `874`,
    1559: `874`,
    156: `21`,
    1560: `875`,
    1561: `876`,
    1562: `876`,
    1563: `877`,
    1564: `877`,
    1565: `878`,
    1566: `878`,
    1567: `879`,
    1568: `880`,
    1569: `881`,
    157: `21`,
    1570: `882`,
    1571: `889`,
    1572: `889`,
    1573: `890`,
    1574: `891`,
    1575: `898`,
    1576: `898`,
    1577: `899`,
    1578: `899`,
    1579: `900`,
    158: `21`,
    1580: `901`,
    1581: `901`,
    1582: `902`,
    1583: `902`,
    1584: `903`,
    1585: `903`,
    1586: `904`,
    1587: `905`,
    1588: `913`,
    1589: `914`,
    159: `21`,
    1590: `915`,
    1591: `915`,
    1592: `916`,
    1593: `916`,
    1594: `917`,
    1595: `918`,
    1596: `918`,
    1597: `918`,
    1598: `919`,
    1599: `920`,
    16: `2`,
    160: `21`,
    1600: `921`,
    1601: `922`,
    1602: `923`,
    1603: `930`,
    1604: `931`,
    1605: `931`,
    1606: `932`,
    1607: `932`,
    1608: `933`,
    1609: `934`,
    161: `21`,
    1610: `934`,
    1611: `935`,
    1612: `935`,
    1613: `936`,
    1614: `936`,
    1615: `937`,
    1616: `938`,
    1617: `938`,
    1618: `939`,
    1619: `939`,
    162: `21`,
    1620: `940`,
    1621: `940`,
    1622: `940`,
    1623: `943`,
    1624: `943`,
    1625: `944`,
    1626: `944`,
    1627: `945`,
    1628: `946`,
    1629: `946`,
    163: `22`,
    1630: `947`,
    1631: `947`,
    1632: `948`,
    1633: `948`,
    1634: `949`,
    1635: `950`,
    1636: `951`,
    1637: `951`,
    1638: `952`,
    1639: `953`,
    164: `22`,
    1640: `954`,
    1641: `959`,
    1642: `959`,
    1643: `960`,
    1644: `961`,
    1645: `966`,
    1646: `966`,
    1647: `967`,
    1648: `967`,
    1649: `968`,
    165: `22`,
    1650: `969`,
    1651: `974`,
    1652: `974`,
    1653: `975`,
    1654: `975`,
    1655: `976`,
    1656: `977`,
    1657: `982`,
    1658: `982`,
    1659: `983`,
    166: `23`,
    1660: `983`,
    1661: `984`,
    1662: `984`,
    1663: `984`,
    1664: `985`,
    1665: `986`,
    1666: `986`,
    1667: `987`,
    1668: `987`,
    1669: `988`,
    167: `23`,
    1670: `990`,
    1671: `991`,
    1672: `991`,
    1673: `992`,
    1674: `993`,
    1675: `994`,
    1676: `994`,
    1677: `995`,
    1678: `996`,
    1679: `996`,
    168: `23`,
    1680: `996`,
    1681: `997`,
    1682: `997`,
    1683: `997`,
    1684: `998`,
    1685: `998`,
    1686: `999`,
    1687: `999`,
    1688: `1000`,
    1689: `1001`,
    169: `23`,
    1690: `1001`,
    1691: `1002`,
    1692: `1003`,
    1693: `1003`,
    1694: `1004`,
    1695: `1004`,
    1696: `1004`,
    1697: `1005`,
    1698: `1005`,
    1699: `1006`,
    17: `2`,
    170: `23`,
    1700: `1007`,
    1701: `1008`,
    1702: `1008`,
    1703: `1009`,
    1704: `1010`,
    1705: `1011`,
    1706: `1012`,
    1707: `1012`,
    1708: `1012`,
    1709: `1014`,
    171: `23`,
    1710: `1014`,
    1711: `1015`,
    1712: `1016`,
    1713: `1016`,
    1714: `1017`,
    1715: `1018`,
    1716: `1019`,
    1717: `1020`,
    1718: `1021`,
    1719: `1022`,
    172: `23`,
    1720: `1023`,
    1721: `1024`,
    1722: `1024`,
    1723: `1025`,
    1724: `1026`,
    1725: `1026`,
    1726: `1026`,
    1727: `1027`,
    1728: `1027`,
    1729: `1027`,
    173: `23`,
    1730: `1028`,
    1731: `1029`,
    1732: `1029`,
    1733: `1030`,
    1734: `1031`,
    1735: `1032`,
    1736: `1032`,
    1737: `1032`,
    1738: `1033`,
    1739: `1034`,
    174: `23`,
    1740: `1034`,
    1741: `1035`,
    1742: `1035`,
    1743: `1035`,
    1744: `1035`,
    1745: `1035`,
    1746: `1035`,
    1747: `1035`,
    1748: `1035`,
    1749: `1035`,
    175: `23`,
    1750: `1035`,
    1751: `1036`,
    1752: `1036`,
    1753: `1037`,
    1754: `1038`,
    1755: `1038`,
    1756: `1038`,
    1757: `1039`,
    1758: `1040`,
    1759: `1041`,
    176: `23`,
    1760: `1041`,
    1761: `1042`,
    1762: `1043`,
    1763: `1043`,
    1764: `1043`,
    1765: `1044`,
    1766: `1044`,
    1767: `1045`,
    1768: `1045`,
    1769: `1046`,
    177: `23`,
    1770: `1046`,
    1771: `1046`,
    1772: `1047`,
    1773: `1047`,
    1774: `1048`,
    1775: `1048`,
    1776: `1049`,
    1777: `1050`,
    1778: `1050`,
    1779: `1052`,
    178: `23`,
    1780: `1052`,
    1781: `1053`,
    1782: `1054`,
    1783: `1054`,
    1784: `1055`,
    1785: `1056`,
    1786: `1056`,
    1787: `1056`,
    1788: `1057`,
    1789: `1058`,
    179: `23`,
    1790: `1058`,
    1791: `1059`,
    1792: `1060`,
    1793: `1060`,
    1794: `1061`,
    1795: `1062`,
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
    1804: `1069`,
    1805: `1069`,
    1806: `1070`,
    1807: `1071`,
    1808: `1072`,
    1809: `1072`,
    181: `23`,
    1810: `1073`,
    1811: `1074`,
    1812: `1075`,
    1813: `1075`,
    1814: `1076`,
    1815: `1077`,
    1816: `1078`,
    1817: `1078`,
    1818: `1079`,
    1819: `1079`,
    182: `23`,
    1820: `1080`,
    1821: `1080`,
    1822: `1081`,
    1823: `1081`,
    1824: `1082`,
    1825: `1082`,
    1826: `1083`,
    1827: `1083`,
    1828: `1083`,
    1829: `1085`,
    183: `23`,
    1830: `1085`,
    1831: `1086`,
    1832: `1087`,
    1833: `1088`,
    1834: `1088`,
    1835: `1089`,
    1836: `1090`,
    1837: `1092`,
    1838: `1093`,
    1839: `1094`,
    184: `23`,
    1840: `1095`,
    1841: `1096`,
    1842: `1096`,
    1843: `1097`,
    1844: `1098`,
    1845: `1098`,
    1846: `1098`,
    1847: `1099`,
    1848: `1099`,
    1849: `1099`,
    185: `23`,
    1850: `1100`,
    1851: `1101`,
    1852: `1101`,
    1853: `1102`,
    1854: `1102`,
    1855: `1103`,
    1856: `1103`,
    1857: `1104`,
    1858: `1105`,
    1859: `1112`,
    186: `23`,
    1860: `1112`,
    1861: `1113`,
    1862: `1113`,
    1863: `1114`,
    1864: `1115`,
    1865: `1122`,
    1866: `1122`,
    1867: `1123`,
    1868: `1123`,
    1869: `1124`,
    187: `23`,
    1870: `1124`,
    1871: `1124`,
    1872: `1125`,
    1873: `1126`,
    1874: `1126`,
    1875: `1127`,
    1876: `1127`,
    1877: `1128`,
    1878: `1130`,
    1879: `1131`,
    188: `23`,
    1880: `1131`,
    1881: `1132`,
    1882: `1133`,
    1883: `1134`,
    1884: `1134`,
    1885: `1135`,
    1886: `1136`,
    1887: `1136`,
    1888: `1136`,
    1889: `1137`,
    189: `23`,
    1890: `1137`,
    1891: `1137`,
    1892: `1138`,
    1893: `1138`,
    1894: `1139`,
    1895: `1139`,
    1896: `1140`,
    1897: `1141`,
    1898: `1141`,
    1899: `1142`,
    19: `2`,
    190: `23`,
    1900: `1143`,
    1901: `1143`,
    1902: `1144`,
    1903: `1145`,
    1904: `1146`,
    1905: `1146`,
    1906: `1147`,
    1907: `1148`,
    1908: `1149`,
    1909: `1149`,
    191: `23`,
    1910: `1150`,
    1911: `1151`,
    1912: `1152`,
    1913: `1152`,
    1914: `1153`,
    1915: `1154`,
    1916: `1155`,
    1917: `1156`,
    1918: `1156`,
    1919: `1156`,
    192: `23`,
    1920: `1157`,
    1921: `1158`,
    1922: `1158`,
    1923: `1159`,
    1924: `1159`,
    1925: `1159`,
    1926: `1159`,
    1927: `1159`,
    1928: `1159`,
    1929: `1159`,
    193: `23`,
    1930: `1159`,
    1931: `1159`,
    1932: `1159`,
    1933: `1160`,
    1934: `1160`,
    1935: `1161`,
    1936: `1162`,
    1937: `1162`,
    1938: `1162`,
    1939: `1163`,
    194: `23`,
    1940: `1164`,
    1941: `1165`,
    1942: `1165`,
    1943: `1166`,
    1944: `1167`,
    1945: `1167`,
    1946: `1167`,
    1947: `1168`,
    1948: `1168`,
    1949: `1169`,
    195: `23`,
    1950: `1169`,
    1951: `1170`,
    1952: `1170`,
    1953: `1171`,
    1954: `1172`,
    1955: `1173`,
    1956: `1173`,
    1957: `1174`,
    1958: `1175`,
    1959: `1175`,
    196: `23`,
    1960: `1176`,
    1961: `1176`,
    1962: `1176`,
    1963: `1176`,
    1964: `1176`,
    1965: `1176`,
    1966: `1177`,
    1967: `1177`,
    1968: `1178`,
    1969: `1179`,
    197: `23`,
    1970: `1182`,
    1971: `1183`,
    1972: `1184`,
    1973: `1184`,
    1974: `1185`,
    1975: `1185`,
    1976: `1186`,
    1977: `1187`,
    1978: `1187`,
    1979: `1187`,
    198: `23`,
    1980: `1188`,
    1981: `1189`,
    1982: `1190`,
    1983: `1191`,
    1984: `1192`,
    1985: `1192`,
    1986: `1192`,
    1987: `1193`,
    1988: `1193`,
    1989: `1194`,
    199: `23`,
    1990: `1194`,
    1991: `1195`,
    1992: `1196`,
    1993: `1196`,
    1994: `1197`,
    1995: `1197`,
    1996: `1198`,
    1997: `1198`,
    1998: `1199`,
    1999: `1199`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1199`,
    2001: `1200`,
    2002: `1200`,
    2003: `1201`,
    2004: `1201`,
    2005: `1201`,
    2006: `1202`,
    2007: `1202`,
    2008: `1203`,
    2009: `1204`,
    201: `23`,
    2010: `1204`,
    2011: `1205`,
    2012: `1206`,
    2013: `1206`,
    2014: `1206`,
    2015: `1207`,
    2016: `1207`,
    2017: `1208`,
    2018: `1208`,
    2019: `1209`,
    202: `23`,
    2020: `1210`,
    2021: `1211`,
    2022: `1211`,
    2023: `1212`,
    2024: `1213`,
    2025: `1213`,
    2026: `1213`,
    2027: `1214`,
    2028: `1215`,
    2029: `1215`,
    203: `23`,
    2030: `1216`,
    2031: `1217`,
    2032: `1217`,
    2033: `1218`,
    2034: `1218`,
    2035: `1219`,
    2036: `1220`,
    2037: `1221`,
    2038: `1222`,
    2039: `1222`,
    204: `23`,
    2040: `1223`,
    2041: `1224`,
    2042: `1225`,
    2043: `1225`,
    2044: `1226`,
    2045: `1226`,
    2046: `1227`,
    2047: `1228`,
    2048: `1229`,
    2049: `1230`,
    205: `23`,
    2050: `1230`,
    2051: `1231`,
    2052: `1232`,
    2053: `1233`,
    2054: `1233`,
    2055: `1234`,
    2056: `1235`,
    2057: `1236`,
    2058: `1237`,
    2059: `1238`,
    206: `23`,
    2060: `1238`,
    2061: `1239`,
    2062: `1240`,
    2063: `1241`,
    2064: `1242`,
    2065: `1243`,
    2066: `1243`,
    2067: `1244`,
    2068: `1244`,
    2069: `1245`,
    207: `23`,
    2070: `1245`,
    2071: `1246`,
    2072: `1246`,
    2073: `1247`,
    2074: `1247`,
    2075: `1248`,
    2076: `1248`,
    2077: `1248`,
    2078: `1251`,
    2079: `1251`,
    208: `23`,
    2080: `1252`,
    2081: `1252`,
    2082: `1253`,
    2083: `1253`,
    2084: `1254`,
    2085: `1255`,
    2086: `1256`,
    2087: `1256`,
    2088: `1256`,
    2089: `1257`,
    209: `23`,
    2090: `1258`,
    2091: `1258`,
    2092: `1259`,
    2093: `1259`,
    2094: `1259`,
    2095: `1259`,
    2096: `1259`,
    2097: `1259`,
    2098: `1259`,
    2099: `1259`,
    21: `2`,
    210: `23`,
    2100: `1259`,
    2101: `1259`,
    2102: `1260`,
    2103: `1260`,
    2104: `1261`,
    2105: `1262`,
    2106: `1263`,
    2107: `1263`,
    2108: `1264`,
    2109: `1264`,
    211: `23`,
    2110: `1265`,
    2111: `1265`,
    2112: `1266`,
    2113: `1267`,
    2114: `1267`,
    2115: `1268`,
    2116: `1269`,
    2117: `1269`,
    2118: `1269`,
    2119: `1270`,
    212: `25`,
    2120: `1271`,
    2121: `1271`,
    2122: `1272`,
    2123: `1273`,
    2124: `1273`,
    2125: `1274`,
    2126: `1275`,
    2127: `1276`,
    2128: `1276`,
    2129: `1277`,
    213: `27`,
    2130: `1278`,
    2131: `1279`,
    2132: `1279`,
    2133: `1280`,
    2134: `1281`,
    2135: `1282`,
    2136: `1282`,
    2137: `1283`,
    2138: `1284`,
    2139: `1285`,
    214: `27`,
    2140: `1285`,
    2141: `1286`,
    2142: `1287`,
    2143: `1288`,
    2144: `1288`,
    2145: `1289`,
    2146: `1290`,
    2147: `1291`,
    2148: `1291`,
    2149: `1292`,
    215: `27`,
    2150: `1292`,
    2151: `1293`,
    2152: `1293`,
    2153: `1294`,
    2154: `1294`,
    2155: `1294`,
    2156: `1296`,
    2157: `1296`,
    2158: `1297`,
    2159: `1297`,
    216: `28`,
    2160: `1298`,
    2161: `1298`,
    2162: `1299`,
    2163: `1300`,
    2164: `1301`,
    2165: `1301`,
    2166: `1302`,
    2167: `1302`,
    2168: `1303`,
    2169: `1303`,
    217: `28`,
    2170: `1303`,
    2171: `1304`,
    2172: `1304`,
    2173: `1305`,
    2174: `1305`,
    2175: `1305`,
    2176: `1305`,
    2177: `1305`,
    2178: `1305`,
    2179: `1306`,
    218: `30`,
    2180: `1306`,
    2181: `1307`,
    2182: `1308`,
    2183: `1309`,
    2184: `1309`,
    2185: `1310`,
    2186: `1311`,
    2187: `1313`,
    2188: `1313`,
    2189: `1314`,
    219: `31`,
    2190: `1314`,
    2191: `1314`,
    2192: `1315`,
    2193: `1315`,
    2194: `1315`,
    2195: `1315`,
    2196: `1315`,
    2197: `1315`,
    2198: `1315`,
    2199: `1315`,
    22: `2`,
    220: `32`,
    2200: `1315`,
    2201: `1315`,
    2202: `1315`,
    2203: `1315`,
    2204: `1315`,
    2205: `1315`,
    2206: `1315`,
    2207: `1315`,
    2208: `1315`,
    2209: `1315`,
    221: `33`,
    2210: `1315`,
    2211: `1315`,
    2212: `1315`,
    2213: `1315`,
    2214: `1315`,
    2215: `1315`,
    2216: `1315`,
    2217: `1315`,
    2218: `1315`,
    2219: `1315`,
    222: `33`,
    2220: `1315`,
    2221: `1315`,
    2222: `1315`,
    2223: `1315`,
    2224: `1315`,
    2225: `1315`,
    2226: `1315`,
    2227: `1315`,
    2228: `1315`,
    2229: `1315`,
    223: `34`,
    2230: `1315`,
    2231: `1315`,
    2232: `1315`,
    2233: `1315`,
    2234: `1315`,
    2235: `1315`,
    2236: `1315`,
    2237: `1315`,
    2238: `1315`,
    2239: `1315`,
    224: `35`,
    2240: `1315`,
    2241: `1315`,
    2242: `1315`,
    2243: `1315`,
    2244: `1315`,
    2245: `1315`,
    2246: `1315`,
    2247: `1315`,
    2248: `1315`,
    2249: `1315`,
    225: `35`,
    2250: `1315`,
    2251: `1315`,
    2252: `1315`,
    2253: `1315`,
    2254: `1315`,
    2255: `1315`,
    2256: `1315`,
    2257: `1315`,
    2258: `1315`,
    2259: `1315`,
    226: `36`,
    2260: `1315`,
    2261: `1315`,
    2262: `1315`,
    2263: `1315`,
    2264: `1315`,
    2265: `1315`,
    2266: `1315`,
    2267: `1315`,
    2268: `1316`,
    2269: `1316`,
    227: `37`,
    2270: `1317`,
    2271: `1318`,
    2272: `1318`,
    2273: `1319`,
    2274: `1319`,
    2275: `1320`,
    2276: `1320`,
    2277: `1321`,
    2278: `1321`,
    2279: `1321`,
    228: `38`,
    2280: `1323`,
    2281: `1323`,
    2282: `1323`,
    2283: `1324`,
    2284: `1324`,
    2285: `1324`,
    2286: `1324`,
    2287: `1325`,
    2288: `1325`,
    2289: `1325`,
    229: `39`,
    2290: `1326`,
    2291: `1326`,
    2292: `1326`,
    2293: `1327`,
    2294: `1327`,
    2295: `1328`,
    2296: `1328`,
    2297: `1328`,
    2298: `1330`,
    2299: `1330`,
    23: `2`,
    230: `39`,
    2300: `1330`,
    2301: `1331`,
    2302: `1331`,
    2303: `1331`,
    2304: `1332`,
    2305: `1332`,
    2306: `1333`,
    2307: `1333`,
    2308: `1333`,
    2309: `1335`,
    231: `41`,
    2310: `1336`,
    2311: `1336`,
    2312: `1337`,
    2313: `1338`,
    2314: `1339`,
    2315: `1340`,
    2316: `1340`,
    2317: `1341`,
    2318: `1342`,
    2319: `1343`,
    232: `42`,
    2320: `1344`,
    2321: `1344`,
    2322: `1345`,
    2323: `1346`,
    2324: `1347`,
    2325: `1348`,
    2326: `1348`,
    2327: `1349`,
    2328: `1350`,
    2329: `1351`,
    233: `42`,
    2330: `1351`,
    2331: `1351`,
    2332: `1352`,
    2333: `1352`,
    2334: `1352`,
    2335: `1353`,
    2336: `1354`,
    2337: `1355`,
    2338: `1356`,
    2339: `1356`,
    234: `43`,
    2340: `1356`,
    2341: `1358`,
    2342: `1358`,
    2343: `1358`,
    2344: `1360`,
    2345: `1360`,
    2346: `1361`,
    2347: `1361`,
    2348: `1361`,
    2349: `1362`,
    235: `44`,
    2350: `1362`,
    2351: `1363`,
    2352: `1363`,
    2353: `1363`,
    2354: `1365`,
    2355: `1365`,
    2356: `1366`,
    2357: `1366`,
    2358: `1366`,
    2359: `1367`,
    236: `45`,
    2360: `1367`,
    2361: `1368`,
    2362: `1368`,
    2363: `1368`,
    2364: `1370`,
    2365: `1370`,
    2366: `1370`,
    2367: `1372`,
    2368: `1372`,
    2369: `1373`,
    237: `45`,
    2370: `1373`,
    2371: `1374`,
    2372: `1374`,
    2373: `1374`,
    2374: `1376`,
    2375: `1376`,
    2376: `1377`,
    2377: `1377`,
    2378: `1378`,
    2379: `1378`,
    238: `45`,
    2380: `1379`,
    2381: `1380`,
    2382: `1381`,
    2383: `1381`,
    2384: `1381`,
    2385: `1382`,
    2386: `1382`,
    2387: `1383`,
    2388: `1383`,
    2389: `1384`,
    239: `46`,
    2390: `1385`,
    2391: `1385`,
    2392: `1386`,
    2393: `1386`,
    2394: `1387`,
    2395: `1387`,
    2396: `1388`,
    2397: `1388`,
    2398: `1388`,
    2399: `1389`,
    24: `2`,
    240: `46`,
    2400: `1389`,
    2401: `1390`,
    2402: `1390`,
    2403: `1390`,
    2404: `1391`,
    2405: `1391`,
    2406: `1392`,
    2407: `1393`,
    2408: `1393`,
    2409: `1394`,
    241: `47`,
    2410: `1395`,
    2411: `1395`,
    2412: `1395`,
    2413: `1396`,
    2414: `1396`,
    2415: `1397`,
    2416: `1397`,
    2417: `1398`,
    2418: `1399`,
    2419: `1400`,
    242: `48`,
    2420: `1400`,
    2421: `1401`,
    2422: `1402`,
    2423: `1402`,
    2424: `1402`,
    2425: `1403`,
    2426: `1404`,
    2427: `1404`,
    2428: `1405`,
    2429: `1406`,
    243: `49`,
    2430: `1406`,
    2431: `1407`,
    2432: `1407`,
    2433: `1408`,
    2434: `1409`,
    2435: `1410`,
    2436: `1411`,
    2437: `1411`,
    2438: `1412`,
    2439: `1413`,
    244: `49`,
    2440: `1414`,
    2441: `1414`,
    2442: `1415`,
    2443: `1415`,
    2444: `1416`,
    2445: `1417`,
    2446: `1418`,
    2447: `1419`,
    2448: `1419`,
    2449: `1420`,
    245: `50`,
    2450: `1421`,
    2451: `1422`,
    2452: `1422`,
    2453: `1423`,
    2454: `1424`,
    2455: `1425`,
    2456: `1426`,
    2457: `1427`,
    2458: `1427`,
    2459: `1428`,
    246: `50`,
    2460: `1429`,
    2461: `1430`,
    2462: `1430`,
    2463: `1431`,
    2464: `1431`,
    2465: `1432`,
    2466: `1432`,
    2467: `1433`,
    2468: `1433`,
    2469: `1434`,
    247: `51`,
    2470: `1434`,
    2471: `1435`,
    2472: `1435`,
    2473: `1435`,
    2474: `1437`,
    2475: `1437`,
    2476: `1438`,
    2477: `1439`,
    2478: `1439`,
    2479: `1440`,
    248: `51`,
    2480: `1441`,
    2481: `1441`,
    2482: `1442`,
    2483: `1442`,
    2484: `1443`,
    2485: `1444`,
    2486: `1445`,
    2487: `1445`,
    2488: `1445`,
    2489: `1446`,
    249: `51`,
    2490: `1446`,
    2491: `1447`,
    2492: `1447`,
    2493: `1448`,
    2494: `1449`,
    2495: `1450`,
    2496: `1450`,
    2497: `1451`,
    2498: `1452`,
    2499: `1452`,
    25: `2`,
    250: `52`,
    2500: `1452`,
    2501: `1453`,
    2502: `1454`,
    2503: `1454`,
    2504: `1455`,
    2505: `1456`,
    2506: `1456`,
    2507: `1457`,
    2508: `1457`,
    2509: `1458`,
    251: `52`,
    2510: `1459`,
    2511: `1460`,
    2512: `1461`,
    2513: `1461`,
    2514: `1462`,
    2515: `1463`,
    2516: `1464`,
    2517: `1464`,
    2518: `1465`,
    2519: `1465`,
    252: `53`,
    2520: `1466`,
    2521: `1467`,
    2522: `1468`,
    2523: `1469`,
    2524: `1469`,
    2525: `1470`,
    2526: `1471`,
    2527: `1472`,
    2528: `1472`,
    2529: `1473`,
    253: `53`,
    2530: `1474`,
    2531: `1475`,
    2532: `1476`,
    2533: `1477`,
    2534: `1477`,
    2535: `1478`,
    2536: `1479`,
    2537: `1480`,
    2538: `1481`,
    2539: `1482`,
    254: `53`,
    2540: `1482`,
    2541: `1483`,
    2542: `1483`,
    2543: `1484`,
    2544: `1484`,
    2545: `1485`,
    2546: `1485`,
    2547: `1486`,
    2548: `1486`,
    2549: `1487`,
    255: `53`,
    2550: `1487`,
    2551: `1487`,
    2552: `1489`,
    2553: `1489`,
    2554: `1490`,
    2555: `1491`,
    2556: `1491`,
    2557: `1492`,
    2558: `1493`,
    2559: `1493`,
    256: `53`,
    2560: `1494`,
    2561: `1494`,
    2562: `1495`,
    2563: `1496`,
    2564: `1497`,
    2565: `1497`,
    2566: `1497`,
    2567: `1498`,
    2568: `1498`,
    2569: `1499`,
    257: `53`,
    2570: `1499`,
    2571: `1500`,
    2572: `1501`,
    2573: `1502`,
    2574: `1502`,
    2575: `1503`,
    2576: `1504`,
    2577: `1504`,
    2578: `1504`,
    2579: `1505`,
    258: `54`,
    2580: `1506`,
    2581: `1506`,
    2582: `1507`,
    2583: `1508`,
    2584: `1508`,
    2585: `1509`,
    2586: `1509`,
    2587: `1510`,
    2588: `1511`,
    2589: `1512`,
    259: `54`,
    2590: `1513`,
    2591: `1513`,
    2592: `1514`,
    2593: `1515`,
    2594: `1516`,
    2595: `1516`,
    2596: `1517`,
    2597: `1517`,
    2598: `1518`,
    2599: `1519`,
    26: `2`,
    260: `55`,
    2600: `1520`,
    2601: `1521`,
    2602: `1521`,
    2603: `1522`,
    2604: `1523`,
    2605: `1524`,
    2606: `1524`,
    2607: `1525`,
    2608: `1526`,
    2609: `1527`,
    261: `56`,
    2610: `1528`,
    2611: `1529`,
    2612: `1529`,
    2613: `1530`,
    2614: `1531`,
    2615: `1532`,
    2616: `1532`,
    2617: `1533`,
    2618: `1533`,
    2619: `1534`,
    262: `57`,
    2620: `1534`,
    2621: `1535`,
    2622: `1535`,
    2623: `1536`,
    2624: `1536`,
    2625: `1537`,
    2626: `1537`,
    2627: `1537`,
    2628: `1539`,
    2629: `1539`,
    263: `57`,
    2630: `1541`,
    2631: `1541`,
    2632: `1542`,
    2633: `1542`,
    2634: `1542`,
    2635: `1543`,
    2636: `1543`,
    2637: `1544`,
    2638: `1545`,
    2639: `1545`,
    264: `58`,
    2640: `1546`,
    2641: `1547`,
    2642: `1548`,
    2643: `1548`,
    2644: `1549`,
    2645: `1550`,
    2646: `1551`,
    2647: `1553`,
    2648: `1554`,
    2649: `1554`,
    265: `59`,
    2650: `1555`,
    2651: `1555`,
    2652: `1556`,
    2653: `1556`,
    2654: `1556`,
    2655: `1558`,
    2656: `1558`,
    2657: `1559`,
    2658: `1559`,
    2659: `1560`,
    266: `61`,
    2660: `1561`,
    2661: `1563`,
    2662: `1563`,
    2663: `1563`,
    2664: `1565`,
    2665: `1565`,
    2666: `1566`,
    2667: `1567`,
    2668: `1567`,
    2669: `1568`,
    267: `61`,
    2670: `1569`,
    2671: `1571`,
    2672: `1572`,
    2673: `1572`,
    2674: `1573`,
    2675: `1573`,
    2676: `1574`,
    2677: `1574`,
    2678: `1574`,
    2679: `1575`,
    268: `62`,
    2680: `1575`,
    2681: `1575`,
    2682: `1577`,
    2683: `1578`,
    2684: `1579`,
    2685: `1580`,
    2686: `1581`,
    2687: `1583`,
    2688: `1584`,
    2689: `1584`,
    269: `62`,
    2690: `1585`,
    2691: `1586`,
    2692: `1586`,
    2693: `1587`,
    2694: `1587`,
    2695: `1588`,
    2696: `1588`,
    2697: `1589`,
    2698: `1590`,
    2699: `1592`,
    27: `2`,
    270: `62`,
    2700: `1592`,
    2701: `1592`,
    2702: `1594`,
    2703: `1594`,
    2704: `1594`,
    2705: `1596`,
    2706: `1596`,
    2707: `1597`,
    2708: `1597`,
    2709: `1597`,
    271: `63`,
    2710: `1598`,
    2711: `1598`,
    2712: `1599`,
    2713: `1599`,
    2714: `1599`,
    2715: `1601`,
    2716: `1601`,
    2717: `1601`,
    2718: `1603`,
    2719: `1604`,
    272: `63`,
    2720: `1606`,
    2721: `1607`,
    2722: `1608`,
    2723: `1609`,
    2724: `1609`,
    2725: `1610`,
    2726: `1610`,
    2727: `1611`,
    2728: `1611`,
    2729: `1611`,
    273: `64`,
    2730: `1612`,
    2731: `1614`,
    2732: `1615`,
    2733: `1616`,
    2734: `1616`,
    2735: `1616`,
    2736: `1617`,
    2737: `1618`,
    2738: `1618`,
    2739: `1619`,
    274: `65`,
    2740: `1619`,
    2741: `1619`,
    2742: `1620`,
    2743: `1622`,
    2744: `1623`,
    2745: `1624`,
    2746: `1625`,
    2747: `1625`,
    2748: `1625`,
    2749: `1626`,
    275: `66`,
    2750: `1626`,
    2751: `1627`,
    2752: `1628`,
    2753: `1629`,
    2754: `1631`,
    2755: `1632`,
    2756: `1632`,
    2757: `1632`,
    2758: `1633`,
    2759: `1633`,
    276: `66`,
    2760: `1634`,
    2761: `1635`,
    2762: `1635`,
    2763: `1635`,
    2764: `1636`,
    2765: `1636`,
    2766: `1637`,
    2767: `1638`,
    2768: `1638`,
    2769: `1639`,
    277: `66`,
    2770: `1640`,
    2771: `1640`,
    2772: `1641`,
    2773: `1642`,
    2774: `1642`,
    2775: `1643`,
    2776: `1644`,
    2777: `1644`,
    2778: `1645`,
    2779: `1646`,
    278: `66`,
    2780: `1646`,
    2781: `1646`,
    2782: `1647`,
    2783: `1648`,
    2784: `1648`,
    2785: `1649`,
    2786: `1650`,
    2787: `1650`,
    2788: `1650`,
    2789: `1651`,
    279: `66`,
    2790: `1651`,
    2791: `1652`,
    2792: `1653`,
    2793: `1653`,
    2794: `1654`,
    2795: `1655`,
    2796: `1655`,
    2797: `1656`,
    2798: `1657`,
    2799: `1657`,
    28: `2`,
    280: `66`,
    2800: `1658`,
    2801: `1659`,
    2802: `1659`,
    2803: `1660`,
    2804: `1661`,
    2805: `1661`,
    2806: `1662`,
    2807: `1663`,
    2808: `1663`,
    2809: `1664`,
    281: `66`,
    2810: `1665`,
    2811: `1665`,
    2812: `1666`,
    2813: `1667`,
    2814: `1667`,
    2815: `1668`,
    2816: `1669`,
    2817: `1669`,
    2818: `1669`,
    2819: `1670`,
    282: `66`,
    2820: `1671`,
    2821: `1671`,
    2822: `1672`,
    2823: `1672`,
    2824: `1672`,
    2825: `1673`,
    2826: `1674`,
    2827: `1674`,
    2828: `1675`,
    2829: `1677`,
    283: `66`,
    2830: `1678`,
    2831: `1679`,
    2832: `1680`,
    2833: `1680`,
    2834: `1680`,
    2835: `1681`,
    2836: `1681`,
    2837: `1682`,
    2838: `1682`,
    2839: `1682`,
    284: `66`,
    2840: `1683`,
    2841: `1683`,
    2842: `1683`,
    2843: `1685`,
    2844: `1686`,
    2845: `1686`,
    2846: `1686`,
    2847: `1687`,
    2848: `1688`,
    2849: `1689`,
    285: `66`,
    2850: `1690`,
    2851: `1691`,
    2852: `1693`,
    2853: `1694`,
    2854: `1694`,
    2855: `1694`,
    2856: `1696`,
    2857: `1697`,
    2858: `1698`,
    2859: `1698`,
    286: `66`,
    2860: `1699`,
    2861: `1701`,
    2862: `1701`,
    2863: `1702`,
    2864: `1703`,
    2865: `1703`,
    2866: `1704`,
    2867: `1707`,
    2868: `1707`,
    2869: `1708`,
    287: `66`,
    2870: `1708`,
    2871: `1709`,
    2872: `1710`,
    2873: `1711`,
    2874: `1712`,
    2875: `1712`,
    2876: `1713`,
    2877: `1714`,
    2878: `1714`,
    2879: `1715`,
    288: `66`,
    2880: `1715`,
    2881: `1716`,
    2882: `1716`,
    2883: `1717`,
    2884: `1718`,
    2885: `1719`,
    2886: `1719`,
    2887: `1720`,
    2888: `1721`,
    2889: `1722`,
    289: `66`,
    2890: `1723`,
    2891: `1723`,
    2892: `1724`,
    2893: `1725`,
    2894: `1726`,
    2895: `1728`,
    2896: `1729`,
    2897: `1729`,
    2898: `1730`,
    2899: `1732`,
    29: `2`,
    290: `66`,
    2900: `1733`,
    2901: `1734`,
    2902: `1735`,
    2903: `1736`,
    2904: `1736`,
    2905: `1737`,
    2906: `1738`,
    2907: `1739`,
    2908: `1740`,
    2909: `1742`,
    291: `66`,
    2910: `1742`,
    2911: `1743`,
    2912: `1743`,
    2913: `1744`,
    2914: `1745`,
    2915: `1746`,
    2916: `1746`,
    2917: `1746`,
    2918: `1747`,
    2919: `1747`,
    292: `66`,
    2920: `1747`,
    2921: `1749`,
    2922: `1749`,
    2923: `1750`,
    2924: `1751`,
    2925: `1751`,
    2926: `1752`,
    293: `67`,
    294: `67`,
    295: `67`,
    296: `69`,
    297: `69`,
    298: `69`,
    299: `70`,
    3: `2`,
    30: `4`,
    300: `71`,
    301: `71`,
    302: `73`,
    303: `74`,
    304: `75`,
    305: `76`,
    306: `76`,
    307: `77`,
    308: `78`,
    309: `79`,
    31: `4`,
    310: `79`,
    311: `80`,
    312: `81`,
    313: `82`,
    314: `83`,
    315: `83`,
    316: `84`,
    317: `84`,
    318: `84`,
    319: `86`,
    32: `5`,
    320: `86`,
    321: `86`,
    322: `87`,
    323: `87`,
    324: `87`,
    325: `88`,
    326: `89`,
    327: `89`,
    328: `90`,
    329: `90`,
    33: `5`,
    330: `92`,
    331: `93`,
    332: `94`,
    333: `95`,
    334: `95`,
    335: `96`,
    336: `96`,
    337: `97`,
    338: `98`,
    339: `99`,
    34: `5`,
    340: `100`,
    341: `101`,
    342: `102`,
    343: `103`,
    344: `104`,
    345: `104`,
    346: `105`,
    347: `105`,
    348: `105`,
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
    394: `108`,
    395: `108`,
    396: `108`,
    397: `108`,
    398: `108`,
    399: `108`,
    4: `2`,
    40: `11`,
    400: `108`,
    401: `108`,
    402: `108`,
    403: `108`,
    404: `108`,
    405: `108`,
    406: `108`,
    407: `108`,
    408: `109`,
    409: `109`,
    41: `11`,
    410: `110`,
    411: `110`,
    412: `110`,
    413: `112`,
    414: `112`,
    415: `112`,
    416: `113`,
    417: `113`,
    418: `115`,
    419: `116`,
    42: `12`,
    420: `117`,
    421: `117`,
    422: `118`,
    423: `118`,
    424: `119`,
    425: `120`,
    426: `120`,
    427: `121`,
    428: `122`,
    429: `123`,
    43: `13`,
    430: `124`,
    431: `124`,
    432: `125`,
    433: `125`,
    434: `125`,
    435: `127`,
    436: `127`,
    437: `127`,
    438: `128`,
    439: `128`,
    44: `14`,
    440: `128`,
    441: `129`,
    442: `130`,
    443: `130`,
    444: `130`,
    445: `131`,
    446: `132`,
    447: `132`,
    448: `133`,
    449: `133`,
    45: `14`,
    450: `134`,
    451: `134`,
    452: `136`,
    453: `137`,
    454: `138`,
    455: `138`,
    456: `138`,
    457: `139`,
    458: `139`,
    459: `140`,
    46: `15`,
    460: `140`,
    461: `141`,
    462: `142`,
    463: `143`,
    464: `143`,
    465: `144`,
    466: `145`,
    467: `146`,
    468: `147`,
    469: `148`,
    47: `16`,
    470: `148`,
    471: `149`,
    472: `149`,
    473: `149`,
    474: `151`,
    475: `151`,
    476: `151`,
    477: `152`,
    478: `152`,
    479: `154`,
    48: `17`,
    480: `154`,
    481: `155`,
    482: `156`,
    483: `157`,
    484: `160`,
    485: `160`,
    486: `160`,
    487: `162`,
    488: `163`,
    489: `164`,
    49: `18`,
    490: `165`,
    491: `165`,
    492: `166`,
    493: `167`,
    494: `167`,
    495: `167`,
    496: `168`,
    497: `169`,
    498: `170`,
    499: `171`,
    5: `2`,
    50: `19`,
    500: `172`,
    501: `173`,
    502: `173`,
    503: `173`,
    504: `174`,
    505: `174`,
    506: `176`,
    507: `176`,
    508: `177`,
    509: `178`,
    51: `21`,
    510: `179`,
    511: `182`,
    512: `182`,
    513: `182`,
    514: `182`,
    515: `182`,
    516: `182`,
    517: `183`,
    518: `183`,
    519: `184`,
    52: `21`,
    520: `185`,
    521: `187`,
    522: `188`,
    523: `191`,
    524: `191`,
    525: `192`,
    526: `193`,
    527: `194`,
    528: `197`,
    529: `197`,
    53: `21`,
    530: `197`,
    531: `198`,
    532: `198`,
    533: `199`,
    534: `200`,
    535: `200`,
    536: `201`,
    537: `201`,
    538: `201`,
    539: `203`,
    54: `21`,
    540: `203`,
    541: `203`,
    542: `204`,
    543: `204`,
    544: `204`,
    545: `205`,
    546: `206`,
    547: `206`,
    548: `207`,
    549: `207`,
    55: `21`,
    550: `209`,
    551: `209`,
    552: `210`,
    553: `211`,
    554: `212`,
    555: `215`,
    556: `215`,
    557: `215`,
    558: `216`,
    559: `216`,
    56: `21`,
    560: `217`,
    561: `219`,
    562: `220`,
    563: `220`,
    564: `221`,
    565: `222`,
    566: `223`,
    567: `223`,
    568: `224`,
    569: `224`,
    57: `21`,
    570: `225`,
    571: `226`,
    572: `227`,
    573: `228`,
    574: `228`,
    575: `228`,
    576: `229`,
    577: `229`,
    578: `229`,
    579: `230`,
    58: `21`,
    580: `230`,
    581: `230`,
    582: `231`,
    583: `231`,
    584: `232`,
    585: `232`,
    586: `232`,
    587: `234`,
    588: `234`,
    589: `234`,
    59: `21`,
    590: `235`,
    591: `235`,
    592: `237`,
    593: `237`,
    594: `238`,
    595: `239`,
    596: `240`,
    597: `243`,
    598: `243`,
    599: `243`,
    6: `2`,
    60: `21`,
    600: `245`,
    601: `246`,
    602: `247`,
    603: `247`,
    604: `248`,
    605: `248`,
    606: `249`,
    607: `250`,
    608: `250`,
    609: `250`,
    61: `21`,
    610: `251`,
    611: `252`,
    612: `253`,
    613: `254`,
    614: `255`,
    615: `256`,
    616: `256`,
    617: `256`,
    618: `257`,
    619: `257`,
    62: `21`,
    620: `258`,
    621: `258`,
    622: `258`,
    623: `261`,
    624: `261`,
    625: `262`,
    626: `263`,
    627: `264`,
    628: `267`,
    629: `267`,
    63: `21`,
    630: `267`,
    631: `268`,
    632: `268`,
    633: `269`,
    634: `270`,
    635: `270`,
    636: `271`,
    637: `271`,
    638: `271`,
    639: `274`,
    64: `21`,
    640: `274`,
    641: `275`,
    642: `276`,
    643: `277`,
    644: `280`,
    645: `280`,
    646: `280`,
    647: `281`,
    648: `281`,
    649: `282`,
    65: `21`,
    650: `283`,
    651: `283`,
    652: `284`,
    653: `284`,
    654: `284`,
    655: `287`,
    656: `287`,
    657: `288`,
    658: `289`,
    659: `290`,
    66: `21`,
    660: `293`,
    661: `293`,
    662: `293`,
    663: `294`,
    664: `294`,
    665: `295`,
    666: `296`,
    667: `296`,
    668: `297`,
    669: `297`,
    67: `21`,
    670: `297`,
    671: `300`,
    672: `300`,
    673: `301`,
    674: `302`,
    675: `303`,
    676: `306`,
    677: `306`,
    678: `306`,
    679: `307`,
    68: `21`,
    680: `307`,
    681: `308`,
    682: `309`,
    683: `309`,
    684: `310`,
    685: `310`,
    686: `310`,
    687: `313`,
    688: `313`,
    689: `314`,
    69: `21`,
    690: `315`,
    691: `316`,
    692: `319`,
    693: `319`,
    694: `319`,
    695: `320`,
    696: `320`,
    697: `321`,
    698: `322`,
    699: `322`,
    7: `2`,
    70: `21`,
    700: `323`,
    701: `323`,
    702: `323`,
    703: `326`,
    704: `326`,
    705: `327`,
    706: `328`,
    707: `329`,
    708: `332`,
    709: `332`,
    71: `21`,
    710: `332`,
    711: `333`,
    712: `333`,
    713: `334`,
    714: `335`,
    715: `335`,
    716: `336`,
    717: `336`,
    718: `336`,
    719: `338`,
    72: `21`,
    720: `338`,
    721: `338`,
    722: `339`,
    723: `339`,
    724: `341`,
    725: `341`,
    726: `342`,
    727: `343`,
    728: `344`,
    729: `347`,
    73: `21`,
    730: `347`,
    731: `347`,
    732: `348`,
    733: `349`,
    734: `351`,
    735: `352`,
    736: `353`,
    737: `354`,
    738: `355`,
    739: `355`,
    74: `21`,
    740: `356`,
    741: `357`,
    742: `357`,
    743: `357`,
    744: `358`,
    745: `358`,
    746: `358`,
    747: `359`,
    748: `359`,
    749: `360`,
    75: `21`,
    750: `360`,
    751: `360`,
    752: `362`,
    753: `362`,
    754: `362`,
    755: `363`,
    756: `363`,
    757: `363`,
    758: `364`,
    759: `365`,
    76: `21`,
    760: `365`,
    761: `366`,
    762: `366`,
    763: `368`,
    764: `368`,
    765: `369`,
    766: `370`,
    767: `371`,
    768: `374`,
    769: `374`,
    77: `21`,
    770: `374`,
    771: `375`,
    772: `375`,
    773: `376`,
    774: `378`,
    775: `379`,
    776: `379`,
    777: `380`,
    778: `381`,
    779: `382`,
    78: `21`,
    780: `382`,
    781: `383`,
    782: `383`,
    783: `384`,
    784: `385`,
    785: `386`,
    786: `387`,
    787: `387`,
    788: `387`,
    789: `388`,
    79: `21`,
    790: `388`,
    791: `388`,
    792: `389`,
    793: `389`,
    794: `389`,
    795: `390`,
    796: `390`,
    797: `391`,
    798: `391`,
    799: `391`,
    8: `2`,
    80: `21`,
    800: `393`,
    801: `393`,
    802: `393`,
    803: `394`,
    804: `395`,
    805: `395`,
    806: `395`,
    807: `396`,
    808: `397`,
    809: `397`,
    81: `21`,
    810: `398`,
    811: `398`,
    812: `400`,
    813: `401`,
    814: `402`,
    815: `402`,
    816: `402`,
    817: `403`,
    818: `403`,
    819: `404`,
    82: `21`,
    820: `405`,
    821: `405`,
    822: `406`,
    823: `407`,
    824: `408`,
    825: `409`,
    826: `409`,
    827: `410`,
    828: `411`,
    829: `412`,
    83: `21`,
    830: `412`,
    831: `413`,
    832: `413`,
    833: `413`,
    834: `416`,
    835: `416`,
    836: `416`,
    837: `416`,
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
    893: `417`,
    894: `417`,
    895: `418`,
    896: `418`,
    897: `418`,
    898: `420`,
    899: `420`,
    9: `2`,
    90: `21`,
    900: `421`,
    901: `421`,
    902: `422`,
    903: `424`,
    904: `425`,
    905: `426`,
    906: `427`,
    907: `427`,
    908: `428`,
    909: `429`,
    91: `21`,
    910: `429`,
    911: `429`,
    912: `430`,
    913: `431`,
    914: `432`,
    915: `433`,
    916: `434`,
    917: `435`,
    918: `443`,
    919: `443`,
    92: `21`,
    920: `444`,
    921: `445`,
    922: `445`,
    923: `446`,
    924: `446`,
    925: `446`,
    926: `447`,
    927: `448`,
    928: `449`,
    929: `449`,
    93: `21`,
    930: `449`,
    931: `450`,
    932: `451`,
    933: `451`,
    934: `452`,
    935: `452`,
    936: `452`,
    937: `452`,
    938: `452`,
    939: `452`,
    94: `21`,
    940: `452`,
    941: `452`,
    942: `452`,
    943: `452`,
    944: `453`,
    945: `453`,
    946: `454`,
    947: `455`,
    948: `456`,
    949: `456`,
    95: `21`,
    950: `457`,
    951: `457`,
    952: `458`,
    953: `458`,
    954: `459`,
    955: `460`,
    956: `460`,
    957: `461`,
    958: `462`,
    959: `462`,
    96: `21`,
    960: `462`,
    961: `463`,
    962: `464`,
    963: `464`,
    964: `465`,
    965: `466`,
    966: `466`,
    967: `467`,
    968: `468`,
    969: `469`,
    97: `21`,
    970: `469`,
    971: `470`,
    972: `471`,
    973: `472`,
    974: `472`,
    975: `473`,
    976: `474`,
    977: `475`,
    978: `475`,
    979: `476`,
    98: `21`,
    980: `477`,
    981: `478`,
    982: `478`,
    983: `479`,
    984: `480`,
    985: `481`,
    986: `481`,
    987: `482`,
    988: `483`,
    989: `484`,
    99: `21`,
    990: `484`,
    991: `485`,
    992: `485`,
    993: `486`,
    994: `486`,
    995: `488`,
    996: `488`,
    997: `489`,
    998: `489`,
    999: `489`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T16","name":"v13342","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_235","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_235","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_235","type":"tuple"},{"internalType":"bool","name":"_User_optin0_235","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4715","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5164","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5620","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6066","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6511","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6991","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7466","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7989","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v13293","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v13299","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13306","type":"address"},{"internalType":"uint256","name":"v13307","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13317","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13325","type":"address"},{"internalType":"address payable","name":"v13326","type":"address"},{"internalType":"uint256","name":"v13327","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13253","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13260","type":"address"},{"internalType":"address payable","name":"v13261","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13265","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalCurrentAllocatoinToAllUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalFundsDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13281","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13286","type":"address"},{"internalType":"address payable","name":"v13287","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v13334","type":"uint256"},{"internalType":"address payable","name":"v13335","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_235","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_235","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_235","type":"tuple"},{"internalType":"bool","name":"_User_optin0_235","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v13345","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62005d2438819003918201601f19168301916001600160401b038311848410176200060a57808492604094855283398101031262000775576020604051916200004c836200077a565b80518352015161ffff19811681036200077557602082015260008055436003556040516102a081016001600160401b038111828210176200060a57600091610280916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015201526040519081606081011060018060401b036060840111176200060a576060820160405262000145606083016200077a565b60006060830152600060808301526060820182526200016362000796565b602083015262000172620007c6565b604083015260ff600454166200075c577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a1805180159081156200074f575b50156200073657346200071d5760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152600060e060408401510152600061010060408401510152604051918260a081011060018060401b0360a0850111176200060a5760409060a084018252600084526000602085015262000298620007c6565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b036020830111176200060a5760208181016040908152600083528301510151156200062057506040516001600160401b036101808201908111908211176200060a5780610180610160920160405260008152600060208201526000604082015260006060820152600060808201526200034f62000796565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c081015161012084015260e0810151610140840152610100810151828401526101208101516101808401526101408101516101a084015201516101c08201526101c081526101e0810181811060018060401b038211176200060a5760405280516001600160401b0381116200060a57620004fa60025462000826565b601f8111620005bc575b50602091601f8211600114620005525791819260009262000546575b50508160011b916000199060031b1c1916176002555b60405161548790816200087d8239f35b01519050388062000520565b601f19821692600260005260206000209160005b858110620005a35750836001951062000589575b505050811b0160025562000536565b015160001960f88460031b161c191690553880806200057a565b9192602060018192868501518155019401920162000566565b6002600052620005f89060008051602062005d04833981519152601f840160051c81019160208510620005ff575b601f0160051c019062000863565b3862000504565b9091508190620005ea565b634e487b7160e01b600052604160045260246000fd5b60018060a01b0360008080808487511660808801519082821562000713575bf115620006fd576000809392819392829347809352511682821562000709575bf115620006fd576000805560006001556200067c60025462000826565b806200068a575b5062000536565b601f8111600114620006a4575060006002555b3862000683565b6002600052620006ec90601f0160051c60008051602062005d04833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000863565b60006020812081600255556200069d565b6040513d6000823e3d90fd5b506108fc6200065f565b506108fc6200063f565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b90506001541438620001cf565b60405163100960cb60e01b815260136004820152602490fd5b600080fd5b604081019081106001600160401b038211176200060a57604052565b60405190620007a5826200077a565b6000602083604051620007b8816200077a565b838152838382015281520152565b6040519061012082016001600160401b038111838210176200060a5760405281610100600091828152826020820152620007ff62000796565b60408201528260608201528260808201528260a08201528260c08201528260e08201520152565b90600182811c9216801562000858575b60208310146200084257565b634e487b7160e01b600052602260045260246000fd5b91607f169162000836565b8181106200086f575050565b600081556001016200086356fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610eed5780631548a30d14610dcc5780631e93b0f114610dad57806336e56ea514610d4c5780633702d0ce14610d105780634ab9f8b314610cba578063523df4f614610c57578063544774a914610bfd57806355c42a9514610bbd578063582523cd14610b16578063672422c714610ac85780637462353514610a8c57806374ecfa44146108a957806374f16ec9146108155780637a2b54dc146107d25780637f0595e21461076b578063832307571461074c578063883513de1461070057806392cf8bd5146106b2578063a57924241461062b578063a855bc1014610577578063aa735d7f1461052a578063ab53f2c6146104be578063b87939c71461040c578063bf7df9c3146103ba578063cd6637a81461036c578063df1a0c751461031f578063f1b1259d146101d45763f33c0dce146101685750610010565b346101d057816003193601126101d057600361018261143d565b9254036101b95760206101a084846101406101ac61019e6110e5565b868082518301019101611650565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b5080fd5b5091346101d057806003193601126101d0576101ee610f4f565b916101f7610f6a565b9061020061143d565b9183519461020d86611007565b6001600160a01b03908116865290811660208681019182529561022e6153f6565b976003855403610308575092828692889994610240999661025e6102506110e5565b898082518301019101611650565b50511685515251168484510152838301928184515281858551015260018151926102ae855194856102928a820192836117ae565b03956102a6601f19978881018352826110c2565b519020611268565b51906102b982610f80565b6102c282610f80565b50036102ff576102f092935051906102a6845191826102e488820195866117ae565b039081018352826110c2565b01510151928391015251908152f35b505050516101ac565b602490601288519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d057600361033a61143d565b9254036103555760206101e0848460e06101ac61019e6110e5565b602490600f84519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d057600361038761143d565b9254036103a357602061018084846101006101ac61019e6110e5565b602490600c84519163100960cb60e01b8352820152fd5b508290346104085760203660031901126104085735916001600160a01b038316830361040557506103f6610401926103f0611190565b506113ec565b905191829182610fa0565b0390f35b80fd5b8280fd5b50903461040557602036600319011261040557610427610f4f565b61042f61143d565b9260038354036104a7576020610220868681878761045c61044e6110e5565b888082518301019101611650565b506001600160a01b0316906001610472836111af565b5161047c81610f80565b61048581610f80565b0361049c57506101ac906111af565b015251908152f35b915050928391610494565b602490601186519163100960cb60e01b8352820152fd5b8284346101d057816003193601126101d05781546104da6110e5565b91805193849283526020828185015284518093850152815b83811061051357505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104f2565b50346101d057816003193601126101d057600361054561143d565b9254036105605760206101c0848460c06101ac61019e6110e5565b602490600e84519163100960cb60e01b8352820152fd5b509190816003193601126104055761026090610620610594610f6a565b9461059d61143d565b9283918651906105ac82611007565b3581526001600160a01b0397881660208281019182528851909990916105d183611007565b89516105dc81611007565b858152858c82015283528a8301936105f26114e7565b8552518351525116898251015260068251525160e0825101526106136115af565b91825251878201526117d1565b015115159051908152f35b50346101d05760203660031901126101d057610645610f4f565b90600361065061143d565b93540361069b5760206101408585600161067c8761066f61044e6110e5565b50828060a01b03166113ec565b5161068681610f80565b61068f81610f80565b14928391015251908152f35b602490600a85519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d05760036106cd61143d565b9254036106e957602061016084846101206101ac61019e6110e5565b602490600b84519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d057600361071b61143d565b9254036107355760206101008484816101ac61019e6110e5565b602490600884519163100960cb60e01b8352820152fd5b8284346101d057816003193601126101d0576020906001549051908152f35b50346101d05760203660031901126101d057610785610f4f565b90600361079061143d565b9354036107bb57602060e08585600161067c876107ae61044e6110e5565b50828060a01b0316611320565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101d0576102806020926106206107f061143d565b80926107fa6115af565b878101906007825152511515610100825101526106136115af565b8284806003193601126101d057606061082c610f4f565b9261062061083861143d565b8092855161084581611007565b60209788820160018060a01b038092168352602435815288519161086883611007565b895161087381611007565b858152858c82015283528a8301936108896114e7565b8552511682515251898251015260028251525186825101526106136115af565b50916101c03660031901126101d0576108c061143d565b81516108cb81611007565b843581526101a0366023190112610a88578251946101208601906001600160401b03821187831017610a75575083526024356008811015610a7157855260209485604319360112610a7157835161092181611038565b6001600160a01b03906044358281168103610a6d5781528783015286606319360112610a6557845161095281611038565b60643581528583015284608319360112610a6557845161097181611007565b6084358281168103610a6d57815260a43588820152606083015260c4358015158103610a695760808301528660e319360112610a655784516109b281611038565b60e4358281168103610a6d57815260a0830152606036610103190112610a655784516109dd81611053565b610104358281168103610a6d578152610124358281168103610a6d5788820152610144358682015260c08301528461016319360112610a6557845190610a2282611007565b610164358252610184359081168103610a69578782015260e08201526101a4358015158103610a655761010082015285820152610a5f91906117d1565b51908152f35b8580fd5b8680fd5b8780fd5b8480fd5b634e487b7160e01b865260419052602485fd5b8380fd5b508290346104085760203660031901126104085735916001600160a01b038316830361040557506103f661040192610ac2611190565b50611320565b50346101d057816003193601126101d0576003610ae361143d565b925403610aff57602061020084846101606101ac61019e6110e5565b602490601084519163100960cb60e01b8352820152fd5b828460603660031901126101d05760c0602092610620610b34610f4f565b91610b3d610f6a565b90610b4661143d565b938492610b51611190565b6001600160a01b039283168152908216898201908152604435898301908152895192939091610b7f84611007565b610b87611190565b8452818c850195610b966114e7565b8752511684515251168a8351015251888251015260058251525186825101526106136115af565b8284816003193601126101d0576080602092610620610bda61143d565b8092610be46115af565b87810190600382515251151586825101526106136115af565b5091903461040557602036600319011261040557506020610c29608093610c22611232565b5035611268565b91808051938051610c3981610f80565b85528381015115158486015201519081519084015201516060820152f35b6020848436600319018313610405578290610620610c73610f4f565b610c7b61143d565b928391610c86611580565b80516001600160a01b03909216909152858101805183905290518151870152610cad6115af565b91825251858201526117d1565b50829060203660031901126104085760a090610620602094610cda610f4f565b90610ce361143d565b938492610cee611580565b908151906001808a1b03169052888101918251525186825101526106136115af565b508290346104085760203660031901126104085735916001600160a01b038316830361040557506103f661040192610d46611190565b5061139b565b508290346104085760203660031901126104085735916001600160a01b03831683036104055750610d87606092610d81611190565b506111af565b90808051928051610d9781610f80565b8452602081015115156020850152015190820152f35b8284346101d057816003193601126101d0576020906003549051908152f35b508234610408578060031936011261040857610de6610f4f565b91610def610f6a565b90610df861143d565b91835194610e0586611007565b6001600160a01b039081168652908116602086810191825295610e266153f6565b936003895403610ed6575091610120969791818794610e54610e466110e5565b8c8082518301019101611650565b5051168551525116878451015286830192818451528188855101526001815192610e88855194856102928d820192836117ae565b5190610e9382610f80565b610e9c82610f80565b5003610ecd57610ebe92935051906102a6845191826102e48b820195866117ae565b01515b51928391015251908152f35b50505051610ec1565b602490600988519163100960cb60e01b8352820152fd5b5082906020366003190112610408576020926106208392610f0c61143d565b9283918551610f1a81611007565b8651610f2581611038565b838152815288810191610f366114e7565b83523581515260018251525186825101526106136115af565b600435906001600160a01b0382168203610f6557565b600080fd5b602435906001600160a01b0382168203610f6557565b60021115610f8a57565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610fb681610f80565b845260208101511515602085015201511515910152565b90600182811c92168015610ffd575b6020831014610fe757565b634e487b7160e01b600052602260045260246000fd5b91607f1691610fdc565b604081019081106001600160401b0382111761102257604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761102257604052565b606081019081106001600160401b0382111761102257604052565b61012081019081106001600160401b0382111761102257604052565b61018081019081106001600160401b0382111761102257604052565b6101e081019081106001600160401b0382111761102257604052565b601f909101601f19168101906001600160401b0382119082101761102257604052565b60405190600082600254916110f983610fcd565b80835260019380851690811561116f5750600114611121575b5061111f925003836110c2565b565b6002600090815260008051602061543b83398151915294602093509091905b81831061115757505061111f935082010138611112565b85548884018501529485019487945091830191611140565b905061111f94506020925060ff191682840152151560051b82010138611112565b6040519061119d82611053565b60006040838281528260208201520152565b906111b8611190565b9160018060a01b03166000908082526005602052600160ff6040842054166111df81610f80565b03611227576040929350815260056020522060016040519161120083611053565b60ff815481811661121081610f80565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061123f82611053565b816000815260006020820152604080519161125983611007565b60008352600060208401520152565b611270611232565b906000908082526006602052604092600160ff858520541661129181610f80565b03611311575081526006602052818120918051926112ae84611053565b60ff81548181166112be81610f80565b865260081c1615156020850152815192838301906001600160401b038211858310176112fd575082526001810154835260020154602083015282015290565b634e487b7160e01b81526041600452602490fd5b80949350829150526020830152565b90611329611190565b9160018060a01b03166000908082526007602052600160ff60408420541661135081610f80565b03611227576040929350815260076020522060ff6040519161137183611053565b5481811661137e81610f80565b8352818160081c161515602084015260101c161515604082015290565b906113a4611190565b9160018060a01b03166000908082526008602052600160ff6040842054166113cb81610f80565b03611227576040929350815260086020522060ff6040519161137183611053565b906113f5611190565b9160018060a01b03166000908082526009602052600160ff60408420541661141c81610f80565b03611227576040929350815260096020522060ff6040519161137183611053565b604051906102a082016001600160401b0381118382101761102257604052816102806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201528261022082015282610240820152826102608201520152565b6040908151916114f68361106e565b61010083600092838252805161150b81611038565b8481526020830152805161151e81611038565b84815281830152805161153081611007565b8481528460208201526060830152836080830152805161154f81611038565b84815260a083015261155f611190565b60c08301525161156e81611007565b83815283602082015260e08201520152565b6040519061158d82611007565b8160405161159a81611038565b60008152815260206115aa6114e7565b910152565b604051906115bc82611007565b816000815260206115aa6114e7565b604051906115d882611007565b60006020836040516115e981611007565b838152838382015281520152565b604051906116048261106e565b8161010060009182815282602082015261161c6115cb565b60408201528260608201528260808201528260a08201528260c08201528260e08201520152565b51908115158203610f6557565b8091036101c08112610f65576040805192610180928385016001600160401b0381118682101761102257835281516001600160a01b0381168103610f65578552602082015161ffff1981168103610f655760208601528282015183860152606082015160608601526116c460808301611643565b6080860152609f190160608112610f6557828051916116e283611007565b12610f65576101a092516116f581611007565b60a0830151815260c08301516020820152815261171460e08301611643565b602082015260a08501526101008082015160c0860152610120938483015160e08701526101409182840151908701526101609485840151908701528201519085015201519082015290565b516008811015610f8a5790565b6040519060a082016001600160401b0381118382101761102257604052600060808382815282602082015261179f6115f7565b60408201528260608201520152565b81516001600160a01b039081168252602092830151169181019190915260400190565b60405192919061048084016001600160401b0381118582101761102257806040526117fb81611038565b6000815284526118096115f7565b602085015260405161181a81611038565b60008152604085015261182b6115f7565b606085015260405161183c81611007565b600081526000602082015260808501526118546115f7565b60a08501526118616115f7565b60c085015260405161187281611038565b6000815260e08501526118836115f7565b610100850152611891611190565b61012085015260006101408501526000610160850152600061018085015260006101a085015260006101c085015260006101e08501526040516118d381611007565b60008152600060208201526102008501526040516118f081611007565b600081526000602082015261022085015260405161190d81611007565b600081526000602082015261024085015260405161192a81611007565b6000815260006020820152610260850152600061028085015261194b6115f7565b6102a085015260405161195d81611007565b60008152600060208201526102c085015260006102e085015260405161198281611007565b600081526000602082015261030085015260405161199f81611007565b60008152600060208201526103208501526040516119bc81611007565b60008152600060208201526103408501526040516119d981611007565b60008152600060208201526103608501526119f2611190565b61038085015260006103a0850152611a086115f7565b6103c0850152611a166115f7565b6103e08501526000610400850152611a2c6115f7565b610420850152611a3a6115f7565b610440850152611a486115f7565b61046085015260036000540361537a576040516000600254611a6981610fcd565b80845290600181169081156153565750600114615309575b5090611a9281611aa19303826110c2565b60208082518301019101611650565b9060ff600454166152f0576040513381528151602082015260208201518051916008831015610f8a576101006101e0927f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac294604084015260018060a01b0360208201515116606084015260408101515160808401526020606082015160018060a01b0381511660a0860152015160c08401526080810151151560e084015260018060a01b0360a0820151511682840152604060c082015160018060a01b0381511661012086015260018060a01b03602082015116610140860152015161016084015260e08101518051610180850152602060018060a01b03910151166101a0840152015115156101c0820152a1805180159081156152e4575b50156152cb57611bcd602082015161175f565b6008811015610f8a5761213257602090810151015184528051336001600160a01b039091160361210e5760015b156120f557346120dc576000602060409360018060a01b0387515116835260078252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557f4604bf3f7e8d52c93e308d5cd8930db97e710bc9416988fd705e35f7184b3c73828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c06020860151015261014081015160e060208601510152610160810151610100602086015101526020611cf861176c565b82516001600160a01b031681528183015161ffff1916828201529401518285015243606085015201516080830152604051611d3281611038565b60008152604083015160200151156120045750610160604051611d548161108a565b6000815260006020820152600060408201526000606082015260006080820152611d7c6115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252611ef8826110a6565b81516001600160401b03811161102257611f13600254610fcd565b601f8111611fbc575b50602092601f8211600114611f595792819293600092611f4e575b50508160011b916000199060031b1c191617600255565b015190503880611f37565b601f19821693600260005260206000209160005b868110611fa45750836001959610611f8b575b505050811b01600255565b015160001960f88460031b161c19169055388080611f80565b91926020600181928685015181550194019201611f6d565b6002600052611ff49060008051602061543b833981519152601f840160051c81019160208510611ffa575b601f0160051c01906153df565b38611f1c565b9091508190611fe7565b9091600080808060018060a01b038551166080860151908282156120d3575bf1156120be574791829052516000918291829182916001600160a01b03168282156120ca575bf1156120be57600080556000600155612063600254610fcd565b8061206b5750565b601f811160011461207e57506000600255565b60026000526120b190601f0160051c60008051602061543b8339815191520160008051602061545b8339815191526153df565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc612049565b506108fc612023565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b600161211933611320565b5161212381610f80565b61212c81610f80565b14611bfa565b61214360208296949396015161175f565b6008811015610f8a576001036125935760200151604090810151908301528351336001600160a01b039091160361256f5760015b1561255657604082015151340361253d5760406000917fa80f7aa17fc9a6993cea740e44c9b904649ea4d9ca84258cd7e6e6738a54b98260208351858152a101526121cc6060840151604083015151906153be565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015261221160e0840151604083015151906153be565b6060820180516080019190915261010084810151825160a00152610120850151825160c00152610140850151825160e001526101608501519151015260408061225861176c565b85516001600160a01b0316815260208087015161ffff1916908201526060848101518383015243908201529401519101515101608083015260405161229c81611038565b600081526040830151602001511561200457506101606040516122be8161108a565b60008152600060208201526000604082015260006060820152600060808201526122e66115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252612462826110a6565b81516001600160401b0381116110225761247d600254610fcd565b601f8111612500575b50602092601f82116001146124b75792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106124e85750836001959610611f8b57505050811b01600255565b919260206001819286850151815501940192016124cb565b60026000526125379060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b38612486565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b600161257a33611320565b5161258481610f80565b61258d81610f80565b14612177565b6125a460208296939496015161175f565b6008811015610f8a57600203612a3b57602001516060015160808501528051336001600160a01b0390911603612a175760015b156129fe576020608085015101516040820151106129e557346129cc576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557f034449907972aba82b39da9a18f1ef50a86e2e12d3ff5011dc966c9a59fda8df60208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015261014081015160e060a0860151015261016081015161010060a0860151015260a06126f161176c565b94600180831b03835116865261ffff1960208401511660208701520151828501524360608501520151608083015260405161272b81611038565b6000815260408301516020015115612004575061016060405161274d8161108a565b60008152600060208201526000604082015260006060820152600060808201526127756115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c082526128f1826110a6565b81516001600160401b0381116110225761290c600254610fcd565b601f811161298f575b50602092601f82116001146129465792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106129775750836001959610611f8b57505050811b01600255565b9192602060018192868501518155019401920161295a565b60026000526129c69060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b38612915565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b6001612a2233611320565b51612a2c81610f80565b612a3581610f80565b146125d7565b612a48602082015161175f565b6008811015610f8a57600303612e5957508051336001600160a01b0390911603612e405760c0810151612e275734612e0e57600060806040937fe6d15623fd306f1906699e2b7c52b7ee03fa953a2d2cb89a3248521f49e6a30a60208651858152a10152606081015160c0850151526000602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015261014081015160e060c0860151015261016081015161010060c0860151015260c0612b3161176c565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612b6d81611038565b60008152604083015160200151156120045750610160604051612b8f8161108a565b6000815260006020820152600060408201526000606082015260006080820152612bb76115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252612d33826110a6565b81516001600160401b03811161102257612d4e600254610fcd565b601f8111612dd1575b50602092601f8211600114612d885792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612db95750836001959610611f8b57505050811b01600255565b91926020600181928685015181550194019201612d9c565b6002600052612e089060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b38612d57565b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b612e66602082015161175f565b6008811015610f8a57600403613284576020015160a0015160e085015280516001600160a01b0316330361326b573461325457600060a0604093600180831b0360e088015151168352600760205282858120557f2fdbc15d61b305df2cf5d313e440b56b8fed5063f01cf4d97ed8ec0b942cee7960208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c0610100860151015261014081015160e06101008601510152610160810151610100808601510152610100612f7761176c565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612fb381611038565b60008152604083015160200151156120045750610160604051612fd58161108a565b6000815260006020820152600060408201526000606082015260006080820152612ffd6115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252613179826110a6565b81516001600160401b03811161102257613194600254610fcd565b601f8111613217575b50602092601f82116001146131ce5792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106131ff5750836001959610611f8b57505050811b01600255565b919260206001819286850151815501940192016131e2565b600260005261324e9060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b3861319d565b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b613294602082969396015161175f565b6008811015610f8a57600503613a9557604060c060206132d69301510151806101208501520180516040870151111561014084015260408601519051906153d2565b5061014081015115613a8e5760005b15613a755761330260c085015160406101208401510151906153be565b80610160830152604085015110613a5c576101208101515160019061332f906001600160a01b03166113ec565b5161333981610f80565b61334281610f80565b03613a435761014081015115613a3c57604061012082015101515b80610180830152806040860151016101a08301523403613a235761339d6040610120830151018051906101a0840151809210156101c085015251906153d2565b6101e08201526101c081015115613a1c5760005b15613a03576101a0810151610160820151116139ea576101e081015160c0850151116139d157600160c06101a093828060a01b03610120850151511661020085015152828060a01b036020610120860151015116602061020086015101526000610220850151526000602061022086015101528261345d613443613451610200880151604051928391602083016117ae565b03601f1981018352826110c2565b60208151910120611268565b5161346781610f80565b61347081610f80565b036139c657604061349461020086015182516102a6816134436020820194856117ae565b01515b61024085018181529051610260860151525160200151610120850151604001516134c0916153be565b602061026086015101526102008401516040516134e5816134436020820194856117ae565b5190206000526006602052604060002060ff19908482825416179055610260850151610200860151604051613522816134436020820194856117ae565b5190206000526006602052600260206040600020928051888501550151910155838060a01b0361012086015151166000526005602052836040600020918254161790558261357c818060a01b0361012087015151166111af565b5161358681610f80565b61358f81610f80565b036139bc576135c260406135af858060a01b0361012088015151166111af565b01515b60406101208701510151906153be565b838060a01b036101208601515116600052600560205283604060002001557fdcaa07b9de66315245be65b8f1acb45f8e10ea6f7834c621a1f15f391400571f6020604051858152a101526101c0810151156139ac5761362f606085015160406101208401510151906153be565b6102808201525b6102808101516102a0820151526080840151151560206102a0830151015260a084015160406102a0830151015261016081015160606102a0830151015260e084015160806102a0830151015261010084015160a06102a0830151015261012084015160c06102a0830151015261014084015160e06102a083015101526101608401516101006102a083015101526136cb61176c565b9360018060a01b038151168552602061ffff199101511660208501526102a081015160408501524360608501520151608083015260405161370b81611038565b6000815260408301516020015115612004575061016060405161372d8161108a565b60008152600060208201526000604082015260006060820152600060808201526137556115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c082526138d1826110a6565b81516001600160401b038111611022576138ec600254610fcd565b601f811161396f575b50602092601f82116001146139265792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106139575750836001959610611f8b57505050811b01600255565b9192602060018192868501518155019401920161393a565b60026000526139a69060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b386138f5565b6060840151610280820152613636565b6135c260006135b2565b610220840151613497565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b60405163100960cb60e01b8152602b6004820152602490fd5b60016133b1565b60405163100960cb60e01b815260296004820152602490fd5b600061335d565b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b60016132e5565b613aa5602082949394015161175f565b6008811015610f8a57600603614db9576020015160e001516102c08301526001613ace336111af565b51613ad881610f80565b613ae181610f80565b03614db2576040613af1336111af565b01515b6102e08301526102c082015151604085015110614d99576102e08201516102c08301515111614d805734614d67576102606001913361030085015152828060a01b0360206102c08601510151166020610300860151015260006103208501515260006020610320860151015282613b7f613443613451610300880151604051928391602083016117ae565b51613b8981610f80565b613b9281610f80565b03614d5957613bd16040613bb961030087015182516102a6816134436020820194856117ae565b01515b80610340870152516102c086015151906153be565b61036085015152613bf2602061034086015101516102c086015151906153d2565b60206103608601510152610300840151604051613c17816134436020820194856117ae565b519020600052600660205260406000208360ff19825416179055610360840151610300850151604051613c52816134436020820194856117ae565b51902060005260066020526002602060406000209280518785015501519101557f6d7f9102ed7c4c10ff9dda41553a391213458b1b68abc7edc8539e96478147a56020604051858152a1015233610380820151526102c0810151516020610380830151015261ffff19602084015116604061038083015101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2360606103808301516040519060018060a01b03815116825260208101516020830152604061ffff19910151166040820152a16001613d293361139b565b51613d3381610f80565b613d3c81610f80565b0361454757600080808060408701516102c086015190815190036104008701525181811561453e575b3390f1156120be57806102e0610400920151156000146141495733600052600560205260006001604082208281550155613daa60608501516102c083015151906153d2565b61042082015152608084015115156020610420830151015260a084015160406104208301510152613de660c08501516102c083015151906153d2565b6060610420830151015260e084015160806104208301510152613e156101008501516102c083015151906153be565b60a0610420830151015261012084015160c06104208301510152613e3d610140850151615393565b60e06104208301510152613e55610160850151615393565b6101006104208301510152613e6861176c565b9360018060a01b038151168552602061ffff19910151166020850152610420810151604085015243606085015201516080830152604051613ea881611038565b60008152604083015160200151156120045750610160604051613eca8161108a565b6000815260006020820152600060408201526000606082015260006080820152613ef26115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c0825261406e826110a6565b81516001600160401b03811161102257614089600254610fcd565b601f811161410c575b50602092601f82116001146140c35792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106140f45750836001959610611f8b57505050811b01600255565b919260206001819286850151815501940192016140d7565b60026000526141439060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b38614092565b3360005260056020526040600020600160ff198254161790556141786102e08201516102c083015151906153d2565b33600052600560205260016040600020015561419f60608501516102c083015151906153d2565b61044082015152608084015115156020610440830151015260a0840151604061044083015101526141db60c08501516102c083015151906153d2565b6060610440830151015260e08401516080610440830151015261420a6101008501516102c083015151906153be565b60a0610440830151015261012084015160c06104408301510152614232610140850151615393565b60e0610440830151015261424a610160850151615393565b610100610440830151015261425d61176c565b9360018060a01b038151168552602061ffff1991015116602085015261044081015160408501524360608501520151608083015260405161429d81611038565b600081526040830151602001511561200457506101606040516142bf8161108a565b60008152600060208201526000604082015260006060820152600060808201526142e76115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252614463826110a6565b81516001600160401b0381116110225761447e600254610fcd565b601f8111614501575b50602092601f82116001146144b85792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106144e95750836001959610611f8b57505050811b01600255565b919260206001819286850151815501940192016144cc565b60026000526145389060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b38614487565b506108fc613d65565b33600090815260086020526040808220805462ff00ff191660011790558401516102c083015180519091036103a084015251819081908190818115614d50575b3390f1156120be57806102e06103a09201511560001461496357336000526005602052600060016040822082815501556145cc60608501516102c083015151906153d2565b6103c0820151526080840151151560206103c0830151015260a084015160406103c0830151015261460860c08501516102c083015151906153d2565b60606103c0830151015260e084015160806103c083015101526146376101008501516102c083015151906153be565b60a06103c0830151015261012084015160c06103c0830151015261465f610140850151615393565b60e06103c083015101526101608401516101006103c0830151015261468261176c565b9360018060a01b038151168552602061ffff199101511660208501526103c08101516040850152436060850152015160808301526040516146c281611038565b600081526040830151602001511561200457506101606040516146e48161108a565b600081526000602082015260006040820152600060608201526000608082015261470c6115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252614888826110a6565b81516001600160401b038111611022576148a3600254610fcd565b601f8111614926575b50602092601f82116001146148dd5792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061490e5750836001959610611f8b57505050811b01600255565b919260206001819286850151815501940192016148f1565b600260005261495d9060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b386148ac565b3360005260056020526040600020600160ff198254161790556149926102e08201516102c083015151906153d2565b3360005260056020526001604060002001556149b960608501516102c083015151906153d2565b6103e0820151526080840151151560206103e0830151015260a084015160406103e083015101526149f560c08501516102c083015151906153d2565b60606103e0830151015260e084015160806103e08301510152614a246101008501516102c083015151906153be565b60a06103e0830151015261012084015160c06103e08301510152614a4c610140850151615393565b60e06103e083015101526101608401516101006103e08301510152614a6f61176c565b9360018060a01b038151168552602061ffff199101511660208501526103e0810151604085015243606085015201516080830152604051614aaf81611038565b60008152604083015160200151156120045750610160604051614ad18161108a565b6000815260006020820152600060408201526000606082015260006080820152614af96115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252614c75826110a6565b81516001600160401b03811161102257614c90600254610fcd565b601f8111614d13575b50602092601f8211600114614cca5792819293600092611f4e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614cfb5750836001959610611f8b57505050811b01600255565b91926020600181928685015181550194019201614cde565b6002600052614d4a9060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b38614c99565b506108fc614587565b613bd1610320850151613bbc565b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b6000613af4565b6020614dca9195929395015161175f565b6008811015610f8a57600714614de1575b50509050565b346152b257336000908152600960209081526040808320805462ff00ff19166001179055805183815290946102809290917fdc4856db8f4d38b077d1e18a41fcd8fe492a9aa4ab3abc5d8e55b7b85e84c2819190a10152606081015161046085015152608081015115156020610460860151015260a081015182610460860151015260c08101516060610460860151015260e08101516080610460860151015261010081015160a0610460860151015261012081015160c0610460860151015261014081015160e061046086015101526101608101516101006104608601510152610460614ecd61176c565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051614f0981611038565b60008152604083015160200151156151da5750610160604051614f2b8161108a565b6000815260006020820152600060408201526000606082015260006080820152614f536115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c082526150cf826110a6565b81516001600160401b038111611022576150ea600254610fcd565b601f811161519d575b50602092601f8211600114615137579281929360009261512c575b50508160011b916000199060031b1c1916176002555b803880614ddb565b01519050388061510e565b601f19821693600260005260206000209160005b868110615185575083600195961061516c575b505050811b01600255615124565b015160001960f88460031b161c1916905538808061515e565b9192602060018192868501518155019401920161514b565b60026000526151d49060008051602061543b833981519152601f840160051c81019160208510611ffa57601f0160051c01906153df565b386150f3565b9091600080808060018060a01b038551166080860151908282156152a9575bf1156120be574791829052516000918291829182916001600160a01b03168282156152a0575bf1156120be57600080556000600155615239600254610fcd565b80615245575b50615124565b601f811160011461525d575060006002555b3861523f565b600260005261529090601f0160051c60008051602061543b8339815191520160008051602061545b8339815191526153df565b6000602081208160025555615257565b506108fc61521f565b506108fc6151f9565b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b90506001541438611bba565b60405163100960cb60e01b815260176004820152602490fd5b6002600090815260008051602061543b833981519152939250905b80821061533c57509091508101602001611a92611a81565b919260018160209254838588010152019101909291615324565b60ff191660208086019190915291151560051b84019091019150611a929050611a81565b60405163100960cb60e01b815260166004820152602490fd5b9060018201918281116153a8578210610f6557565b634e487b7160e01b600052601160045260246000fd5b91908201918281116153a8578210610f6557565b9081039081116153a85790565b8181106153ea575050565b600081556001016153df565b6040519061540382611007565b8160405161541081611007565b6000815260006020820152815260206040519161542c83611007565b60008352600082840152015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acfa164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 23844,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index_v2.rsh:358:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index_v2.rsh:83:37:after expr stmt semicolon',
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
