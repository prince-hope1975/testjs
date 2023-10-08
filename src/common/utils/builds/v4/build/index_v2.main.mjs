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
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async (_v4353 ) => {
          const v4353 = stdlib.protect(ctc0, _v4353, null);
        
        const v4354 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v4353, ctc6), null);
        const v4355 = {
          None: 0,
          Some: 1
          }[v4354[0]];
        const v4356 = stdlib.eq(v4355, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4356;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async () => {
        
        
        return v4303;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async (_v4369, _v4370 ) => {
          const v4369 = stdlib.protect(ctc0, _v4369, null);
          const v4370 = stdlib.protect(ctc7, _v4370, null);
        
        const v4371 = [v4369, v4370];
        const v4372 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v4371, ctc9), null);
        const v4373 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4374 = stdlib.fromSome(v4372, v4373);
        const v4375 = v4374.claimed;
        
        return v4375;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async (_v4357 ) => {
          const v4357 = stdlib.protect(ctc0, _v4357, null);
        
        const v4358 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v4357, ctc6), null);
        const v4359 = {
          None: 0,
          Some: 1
          }[v4358[0]];
        const v4360 = stdlib.eq(v4359, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4360;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async () => {
        
        
        return v4347;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatoinToAllUsers = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async () => {
        
        
        return v4344;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async () => {
        
        
        return v4346;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async () => {
        
        
        return v4348;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalFundsDeposited = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async () => {
        
        
        return v4345;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async () => {
        
        
        return v4349;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async (_v4350 ) => {
          const v4350 = stdlib.protect(ctc0, _v4350, null);
        
        const v4351 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v4350, ctc2), null);
        const v4352 = stdlib.fromSome(v4351, stdlib.checkedBigNumberify('./index_v2.rsh:113:58:decimal', stdlib.UInt_max, '0'));
        
        return v4352;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = svs;
      return (await ((async (_v4362, _v4363 ) => {
          const v4362 = stdlib.protect(ctc0, _v4362, null);
          const v4363 = stdlib.protect(ctc7, _v4363, null);
        
        const v4364 = [v4362, v4363];
        const v4365 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v4364, ctc9), null);
        const v4366 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4367 = stdlib.fromSome(v4365, v4366);
        const v4368 = v4367.rewards;
        
        return v4368;}))(...args));
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
        totalAllocatoinToAllUsers: {
          decode: Info_totalAllocatoinToAllUsers,
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4454 = ctc.selfAddress();
  const v4456 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:207:34:application call to [unknown function] (defined at: ./index_v2.rsh:207:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_addAdmin0_235" (defined at: ./index_v2.rsh:207:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v4459 = stdlib.addressEq(v4454, v4290);
  const v4460 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4454, ctc0), null);
  const v4461 = {
    None: 0,
    Some: 1
    }[v4460[0]];
  const v4462 = stdlib.eq(v4461, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4463 = v4459 ? true : v4462;
  stdlib.assert(v4463, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:207:34:application call to [unknown function] (defined at: ./index_v2.rsh:207:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_addAdmin0_235" (defined at: ./index_v2.rsh:207:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v4470 = ['Admin_addAdmin0_235', v4456];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4470],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:213:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v4597, ctc0), null);
          ;
          const v4676 = v4601[stdlib.checkedBigNumberify('./index_v2.rsh:207:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v4676, ctc0, null);
          const v4685 = null;
          const v4686 = await txn1.getOutput('Admin_addAdmin', 'v4685', ctc0, v4685);
          
          const v4701 = {
            bal: v4341,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v4344,
            totalFundsDeposited: v4345,
            total_amount_claimed: v4346,
            total_rewards_allcoated: v4347,
            total_users_claim: v4348,
            usersNo: v4349
            };
          const v11351 = v4303;
          const v11352 = v4701.keepGoing;
          if (v11352) {
            const v11353 = v4701.bal;
            const v11355 = v4701.percent;
            const v11356 = v4701.totalAllocatoinToAllUsers;
            const v11357 = v4701.totalFundsDeposited;
            const v11358 = v4701.total_amount_claimed;
            const v11359 = v4701.total_rewards_allcoated;
            const v11360 = v4701.total_users_claim;
            const v11361 = v4701.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11368 = stdlib.sub(v4303, v4303);
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
              tok: undefined /* Nothing */
              });
            const v11369 = (stdlib.le(await ctc.getBalance(), v11368) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11368));
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
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
          const v5020 = v4598[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5439 = v4598[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5858 = v4598[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6277 = v4598[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6696 = v4598[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7115 = v4598[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7534 = v4598[1];
          
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      undefined /* setApiDetails */;
      const v4607 = stdlib.addressEq(v4597, v4290);
      const v4608 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4597, ctc0), null);
      const v4609 = {
        None: 0,
        Some: 1
        }[v4608[0]];
      const v4610 = stdlib.eq(v4609, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4611 = v4607 ? true : v4610;
      stdlib.assert(v4611, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:207:34:application call to [unknown function] (defined at: ./index_v2.rsh:207:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:207:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v4676 = v4601[stdlib.checkedBigNumberify('./index_v2.rsh:207:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v4676, ctc0, null);
      const v4685 = null;
      const v4686 = await txn1.getOutput('Admin_addAdmin', 'v4685', ctc0, v4685);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v4601, v4686), {
          at: './index_v2.rsh:207:11:application',
          fs: ['at ./index_v2.rsh:207:11:application call to [unknown function] (defined at: ./index_v2.rsh:207:11:function exp)', 'at ./index_v2.rsh:216:14:application call to "ret" (defined at: ./index_v2.rsh:214:15:function exp)', 'at ./index_v2.rsh:214:15:application call to [unknown function] (defined at: ./index_v2.rsh:214:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v4701 = {
        bal: v4341,
        keepGoing: v4342,
        percent: v4343,
        totalAllocatoinToAllUsers: v4344,
        totalFundsDeposited: v4345,
        total_amount_claimed: v4346,
        total_rewards_allcoated: v4347,
        total_users_claim: v4348,
        usersNo: v4349
        };
      const v11351 = v4303;
      const v11352 = v4701.keepGoing;
      if (v11352) {
        const v11353 = v4701.bal;
        const v11355 = v4701.percent;
        const v11356 = v4701.totalAllocatoinToAllUsers;
        const v11357 = v4701.totalFundsDeposited;
        const v11358 = v4701.total_amount_claimed;
        const v11359 = v4701.total_rewards_allcoated;
        const v11360 = v4701.total_users_claim;
        const v11361 = v4701.usersNo;
        return;
        }
      else {
        const v11368 = stdlib.sub(v4303, v4303);
        ;
        const v11369 = (stdlib.le(await ctc.getBalance(), v11368) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11368));
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4376 = ctc.selfAddress();
  const v4378 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_deposit0_235" (defined at: ./index_v2.rsh:139:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v4379 = v4378[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4381 = stdlib.addressEq(v4376, v4290);
  const v4382 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4376, ctc0), null);
  const v4383 = {
    None: 0,
    Some: 1
    }[v4382[0]];
  const v4384 = stdlib.eq(v4383, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4385 = v4381 ? true : v4384;
  stdlib.assert(v4385, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_deposit0_235" (defined at: ./index_v2.rsh:139:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v4392 = ['Admin_deposit0_235', v4378];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4392],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v4379, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5020 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v5033 = v5020[stdlib.checkedBigNumberify('./index_v2.rsh:139:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v4597, ctc0), null);
          const v5093 = stdlib.add(v4303, v5033);
          sim_r.txns.push({
            amt: v5033,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5131 = null;
          const v5132 = await txn1.getOutput('Admin_deposit', 'v5131', ctc0, v5131);
          
          const v5147 = stdlib.safeAdd(v4341, v5033);
          const v5148 = stdlib.safeAdd(v4345, v5033);
          const v5149 = {
            bal: v5147,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v4344,
            totalFundsDeposited: v5148,
            total_amount_claimed: v4346,
            total_rewards_allcoated: v4347,
            total_users_claim: v4348,
            usersNo: v4349
            };
          const v11603 = v5093;
          const v11604 = v5149.keepGoing;
          if (v11604) {
            const v11605 = v5149.bal;
            const v11607 = v5149.percent;
            const v11608 = v5149.totalAllocatoinToAllUsers;
            const v11609 = v5149.totalFundsDeposited;
            const v11610 = v5149.total_amount_claimed;
            const v11611 = v5149.total_rewards_allcoated;
            const v11612 = v5149.total_users_claim;
            const v11613 = v5149.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11620 = stdlib.sub(v5093, v5093);
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
              tok: undefined /* Nothing */
              });
            const v11621 = (stdlib.le(await ctc.getBalance(), v11620) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11620));
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
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
          const v5439 = v4598[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5858 = v4598[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6277 = v4598[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6696 = v4598[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7115 = v4598[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7534 = v4598[1];
          
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      undefined /* setApiDetails */;
      const v5033 = v5020[stdlib.checkedBigNumberify('./index_v2.rsh:139:10:spread', stdlib.UInt_max, '0')];
      const v5034 = stdlib.addressEq(v4597, v4290);
      const v5035 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4597, ctc0), null);
      const v5036 = {
        None: 0,
        Some: 1
        }[v5035[0]];
      const v5037 = stdlib.eq(v5036, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5038 = v5034 ? true : v5037;
      stdlib.assert(v5038, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v5093 = stdlib.add(v4303, v5033);
      ;
      const v5131 = null;
      const v5132 = await txn1.getOutput('Admin_deposit', 'v5131', ctc0, v5131);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v5020, v5132), {
          at: './index_v2.rsh:139:11:application',
          fs: ['at ./index_v2.rsh:139:11:application call to [unknown function] (defined at: ./index_v2.rsh:139:11:function exp)', 'at ./index_v2.rsh:144:14:application call to "ret" (defined at: ./index_v2.rsh:143:15:function exp)', 'at ./index_v2.rsh:143:15:application call to [unknown function] (defined at: ./index_v2.rsh:143:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v5147 = stdlib.safeAdd(v4341, v5033);
      const v5148 = stdlib.safeAdd(v4345, v5033);
      const v5149 = {
        bal: v5147,
        keepGoing: v4342,
        percent: v4343,
        totalAllocatoinToAllUsers: v4344,
        totalFundsDeposited: v5148,
        total_amount_claimed: v4346,
        total_rewards_allcoated: v4347,
        total_users_claim: v4348,
        usersNo: v4349
        };
      const v11603 = v5093;
      const v11604 = v5149.keepGoing;
      if (v11604) {
        const v11605 = v5149.bal;
        const v11607 = v5149.percent;
        const v11608 = v5149.totalAllocatoinToAllUsers;
        const v11609 = v5149.totalFundsDeposited;
        const v11610 = v5149.total_amount_claimed;
        const v11611 = v5149.total_rewards_allcoated;
        const v11612 = v5149.total_users_claim;
        const v11613 = v5149.usersNo;
        return;
        }
      else {
        const v11620 = stdlib.sub(v5093, v5093);
        ;
        const v11621 = (stdlib.le(await ctc.getBalance(), v11620) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11620));
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4429 = ctc.selfAddress();
  const v4431 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:195:45:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_editUserReward0_235" (defined at: ./index_v2.rsh:195:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v4433 = v4431[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4436 = stdlib.addressEq(v4429, v4290);
  const v4437 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4429, ctc0), null);
  const v4438 = {
    None: 0,
    Some: 1
    }[v4437[0]];
  const v4439 = stdlib.eq(v4438, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4440 = v4436 ? true : v4439;
  stdlib.assert(v4440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:195:45:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_editUserReward0_235" (defined at: ./index_v2.rsh:195:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v4443 = stdlib.le(v4433, v4303);
  stdlib.assert(v4443, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:195:45:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_editUserReward0_235" (defined at: ./index_v2.rsh:195:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v4452 = ['Admin_editUserReward0_235', v4431];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4452],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:199:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5020 = v4598[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5439 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v5461 = v5439[stdlib.checkedBigNumberify('./index_v2.rsh:195:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v4597, ctc0), null);
          ;
          const v5571 = v5439[stdlib.checkedBigNumberify('./index_v2.rsh:195:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v5571, ctc1, v5461);
          const v5584 = null;
          const v5585 = await txn1.getOutput('Admin_editUserReward', 'v5584', ctc0, v5584);
          
          const v5601 = {
            bal: v4341,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v4344,
            totalFundsDeposited: v4345,
            total_amount_claimed: v4346,
            total_rewards_allcoated: v4347,
            total_users_claim: v4348,
            usersNo: v4349
            };
          const v11855 = v4303;
          const v11856 = v5601.keepGoing;
          if (v11856) {
            const v11857 = v5601.bal;
            const v11859 = v5601.percent;
            const v11860 = v5601.totalAllocatoinToAllUsers;
            const v11861 = v5601.totalFundsDeposited;
            const v11862 = v5601.total_amount_claimed;
            const v11863 = v5601.total_rewards_allcoated;
            const v11864 = v5601.total_users_claim;
            const v11865 = v5601.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11872 = stdlib.sub(v4303, v4303);
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
              tok: undefined /* Nothing */
              });
            const v11873 = (stdlib.le(await ctc.getBalance(), v11872) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11872));
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
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
          const v5858 = v4598[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6277 = v4598[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6696 = v4598[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7115 = v4598[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7534 = v4598[1];
          
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      undefined /* setApiDetails */;
      const v5461 = v5439[stdlib.checkedBigNumberify('./index_v2.rsh:195:10:spread', stdlib.UInt_max, '1')];
      const v5462 = stdlib.addressEq(v4597, v4290);
      const v5463 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v4597, ctc0), null);
      const v5464 = {
        None: 0,
        Some: 1
        }[v5463[0]];
      const v5465 = stdlib.eq(v5464, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5466 = v5462 ? true : v5465;
      stdlib.assert(v5466, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:195:45:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v5469 = stdlib.le(v5461, v4303);
      stdlib.assert(v5469, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:195:45:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      const v5571 = v5439[stdlib.checkedBigNumberify('./index_v2.rsh:195:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v5571, ctc1, v5461);
      const v5584 = null;
      const v5585 = await txn1.getOutput('Admin_editUserReward', 'v5584', ctc0, v5584);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v5439, v5585), {
          at: './index_v2.rsh:195:11:application',
          fs: ['at ./index_v2.rsh:195:11:application call to [unknown function] (defined at: ./index_v2.rsh:195:11:function exp)', 'at ./index_v2.rsh:202:14:application call to "ret" (defined at: ./index_v2.rsh:200:15:function exp)', 'at ./index_v2.rsh:200:15:application call to [unknown function] (defined at: ./index_v2.rsh:200:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v5601 = {
        bal: v4341,
        keepGoing: v4342,
        percent: v4343,
        totalAllocatoinToAllUsers: v4344,
        totalFundsDeposited: v4345,
        total_amount_claimed: v4346,
        total_rewards_allcoated: v4347,
        total_users_claim: v4348,
        usersNo: v4349
        };
      const v11855 = v4303;
      const v11856 = v5601.keepGoing;
      if (v11856) {
        const v11857 = v5601.bal;
        const v11859 = v5601.percent;
        const v11860 = v5601.totalAllocatoinToAllUsers;
        const v11861 = v5601.totalFundsDeposited;
        const v11862 = v5601.total_amount_claimed;
        const v11863 = v5601.total_rewards_allcoated;
        const v11864 = v5601.total_users_claim;
        const v11865 = v5601.usersNo;
        return;
        }
      else {
        const v11872 = stdlib.sub(v4303, v4303);
        ;
        const v11873 = (stdlib.le(await ctc.getBalance(), v11872) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11872));
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4517 = ctc.selfAddress();
  const v4519 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:338:44:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_endContractAndTransfer0_235" (defined at: ./index_v2.rsh:338:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v4520 = stdlib.addressEq(v4290, v4517);
  stdlib.assert(v4520, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:339:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:338:44:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_endContractAndTransfer0_235" (defined at: ./index_v2.rsh:338:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v4522 = stdlib.eq(v4344, stdlib.checkedBigNumberify('./index_v2.rsh:341:38:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4522, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:340:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:338:44:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_endContractAndTransfer0_235" (defined at: ./index_v2.rsh:338:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Users have unclaimed funds, thus you cannot end contract',
    who: 'Admin_endContractAndTransfer'
    });
  const v4527 = ['Admin_endContractAndTransfer0_235', v4519];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4527],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:345:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5020 = v4598[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5439 = v4598[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5858 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v6027 = null;
          const v6028 = await txn1.getOutput('Admin_endContractAndTransfer', 'v6027', ctc0, v6027);
          
          const v6042 = {
            bal: v4341,
            keepGoing: false,
            percent: v4343,
            totalAllocatoinToAllUsers: v4344,
            totalFundsDeposited: v4345,
            total_amount_claimed: v4346,
            total_rewards_allcoated: v4347,
            total_users_claim: v4348,
            usersNo: v4349
            };
          const v12107 = v4303;
          const v12108 = v6042.keepGoing;
          if (v12108) {
            const v12109 = v6042.bal;
            const v12111 = v6042.percent;
            const v12112 = v6042.totalAllocatoinToAllUsers;
            const v12113 = v6042.totalFundsDeposited;
            const v12114 = v6042.total_amount_claimed;
            const v12115 = v6042.total_rewards_allcoated;
            const v12116 = v6042.total_users_claim;
            const v12117 = v6042.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v12124 = stdlib.sub(v4303, v4303);
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
              tok: undefined /* Nothing */
              });
            const v12125 = (stdlib.le(await ctc.getBalance(), v12124) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12124));
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
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
          const v6277 = v4598[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6696 = v4598[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7115 = v4598[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7534 = v4598[1];
          
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      undefined /* setApiDetails */;
      const v5891 = stdlib.addressEq(v4290, v4597);
      stdlib.assert(v5891, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:339:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:338:44:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      const v5893 = stdlib.eq(v4344, stdlib.checkedBigNumberify('./index_v2.rsh:341:38:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5893, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:340:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:338:44:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Users have unclaimed funds, thus you cannot end contract',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v6027 = null;
      const v6028 = await txn1.getOutput('Admin_endContractAndTransfer', 'v6027', ctc0, v6027);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v5858, v6028), {
          at: './index_v2.rsh:338:11:application',
          fs: ['at ./index_v2.rsh:338:11:application call to [unknown function] (defined at: ./index_v2.rsh:338:11:function exp)', 'at ./index_v2.rsh:347:14:application call to "ret" (defined at: ./index_v2.rsh:346:15:function exp)', 'at ./index_v2.rsh:346:15:application call to [unknown function] (defined at: ./index_v2.rsh:346:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v6042 = {
        bal: v4341,
        keepGoing: false,
        percent: v4343,
        totalAllocatoinToAllUsers: v4344,
        totalFundsDeposited: v4345,
        total_amount_claimed: v4346,
        total_rewards_allcoated: v4347,
        total_users_claim: v4348,
        usersNo: v4349
        };
      const v12107 = v4303;
      const v12108 = v6042.keepGoing;
      if (v12108) {
        const v12109 = v6042.bal;
        const v12111 = v6042.percent;
        const v12112 = v6042.totalAllocatoinToAllUsers;
        const v12113 = v6042.totalFundsDeposited;
        const v12114 = v6042.total_amount_claimed;
        const v12115 = v6042.total_rewards_allcoated;
        const v12116 = v6042.total_users_claim;
        const v12117 = v6042.usersNo;
        return;
        }
      else {
        const v12124 = stdlib.sub(v4303, v4303);
        ;
        const v12125 = (stdlib.le(await ctc.getBalance(), v12124) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12124));
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4472 = ctc.selfAddress();
  const v4474 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:221:37:application call to [unknown function] (defined at: ./index_v2.rsh:221:37:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_revokeAdmin0_235" (defined at: ./index_v2.rsh:221:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v4477 = stdlib.addressEq(v4472, v4290);
  stdlib.assert(v4477, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:221:37:application call to [unknown function] (defined at: ./index_v2.rsh:221:37:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_revokeAdmin0_235" (defined at: ./index_v2.rsh:221:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v4484 = ['Admin_revokeAdmin0_235', v4474];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4484],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:224:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5020 = v4598[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5439 = v4598[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5858 = v4598[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6277 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v6464 = v6277[stdlib.checkedBigNumberify('./index_v2.rsh:221:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v6464, ctc0, undefined /* Nothing */);
          const v6469 = null;
          const v6470 = await txn1.getOutput('Admin_revokeAdmin', 'v6469', ctc0, v6469);
          
          const v6485 = {
            bal: v4341,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v4344,
            totalFundsDeposited: v4345,
            total_amount_claimed: v4346,
            total_rewards_allcoated: v4347,
            total_users_claim: v4348,
            usersNo: v4349
            };
          const v12359 = v4303;
          const v12360 = v6485.keepGoing;
          if (v12360) {
            const v12361 = v6485.bal;
            const v12363 = v6485.percent;
            const v12364 = v6485.totalAllocatoinToAllUsers;
            const v12365 = v6485.totalFundsDeposited;
            const v12366 = v6485.total_amount_claimed;
            const v12367 = v6485.total_rewards_allcoated;
            const v12368 = v6485.total_users_claim;
            const v12369 = v6485.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v12376 = stdlib.sub(v4303, v4303);
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
              tok: undefined /* Nothing */
              });
            const v12377 = (stdlib.le(await ctc.getBalance(), v12376) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12376));
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
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
          const v6696 = v4598[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7115 = v4598[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7534 = v4598[1];
          
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      undefined /* setApiDetails */;
      const v6316 = stdlib.addressEq(v4597, v4290);
      stdlib.assert(v6316, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:221:37:application call to [unknown function] (defined at: ./index_v2.rsh:221:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:221:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v6464 = v6277[stdlib.checkedBigNumberify('./index_v2.rsh:221:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v6464, ctc0, undefined /* Nothing */);
      const v6469 = null;
      const v6470 = await txn1.getOutput('Admin_revokeAdmin', 'v6469', ctc0, v6469);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v6277, v6470), {
          at: './index_v2.rsh:221:11:application',
          fs: ['at ./index_v2.rsh:221:11:application call to [unknown function] (defined at: ./index_v2.rsh:221:11:function exp)', 'at ./index_v2.rsh:227:14:application call to "ret" (defined at: ./index_v2.rsh:225:15:function exp)', 'at ./index_v2.rsh:225:15:application call to [unknown function] (defined at: ./index_v2.rsh:225:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v6485 = {
        bal: v4341,
        keepGoing: v4342,
        percent: v4343,
        totalAllocatoinToAllUsers: v4344,
        totalFundsDeposited: v4345,
        total_amount_claimed: v4346,
        total_rewards_allcoated: v4347,
        total_users_claim: v4348,
        usersNo: v4349
        };
      const v12359 = v4303;
      const v12360 = v6485.keepGoing;
      if (v12360) {
        const v12361 = v6485.bal;
        const v12363 = v6485.percent;
        const v12364 = v6485.totalAllocatoinToAllUsers;
        const v12365 = v6485.totalFundsDeposited;
        const v12366 = v6485.total_amount_claimed;
        const v12367 = v6485.total_rewards_allcoated;
        const v12368 = v6485.total_users_claim;
        const v12369 = v6485.usersNo;
        return;
        }
      else {
        const v12376 = stdlib.sub(v4303, v4303);
        ;
        const v12377 = (stdlib.le(await ctc.getBalance(), v12376) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12376));
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4396 = stdlib.protect(ctc12, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v4397 = v4396[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4399 = v4396[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v4404 = stdlib.gt(v4399, v4303);
  const v4406 = stdlib.safeSub(v4303, v4399);
  const v4407 = stdlib.ge(v4406, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4407, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot have an amout that would result to a negative balance',
    who: 'Admin_setReward'
    });
  stdlib.assert(v4404, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Balance has to be greater than Amt',
    who: 'Admin_setReward'
    });
  const v4411 = stdlib.safeAdd(v4344, v4399);
  const v4412 = stdlib.ge(v4303, v4411);
  stdlib.assert(v4412, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Balance has to be greater than total allocation ',
    who: 'Admin_setReward'
    });
  const v4414 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v4397, ctc0), null);
  const v4415 = {
    None: 0,
    Some: 1
    }[v4414[0]];
  const v4416 = stdlib.eq(v4415, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4416, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to "runAdmin_setReward0_235" (defined at: ./index_v2.rsh:153:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v4427 = ['Admin_setReward0_235', v4396];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4427],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v4399, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5020 = v4598[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5439 = v4598[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5858 = v4598[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6277 = v4598[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6696 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v6738 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '0')];
          const v6740 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '2')];
          const v6749 = stdlib.safeAdd(v4344, v6740);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v6738, ctc0), null);
          const v6769 = stdlib.add(v4303, v6740);
          sim_r.txns.push({
            amt: v6740,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6908 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '1')];
          const v6932 = [v6738, v6908];
          const v6933 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v6932, ctc3), null);
          const v6934 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6935 = stdlib.fromSome(v6933, v6934);
          const v6937 = v6935.claimed;
          const v6938 = v6935.rewards;
          const v6940 = stdlib.safeAdd(v6938, v6740);
          const v6941 = {
            claimed: v6937,
            rewards: v6940
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v6932, ctc3, v6941);
          const v6942 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v6738, ctc1), null);
          const v6943 = stdlib.fromSome(v6942, stdlib.checkedBigNumberify('./index_v2.rsh:181:60:decimal', stdlib.UInt_max, '0'));
          const v6944 = stdlib.safeAdd(v6943, v6740);
          await stdlib.simMapSet(sim_r, 0, ctc6, v6738, ctc1, v6944);
          const v6945 = true;
          const v6946 = await txn1.getOutput('Admin_setReward', 'v6945', ctc8, v6945);
          
          const v6964 = stdlib.safeAdd(v4341, v6740);
          const v6965 = {
            bal: v6964,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v6749,
            totalFundsDeposited: v4345,
            total_amount_claimed: v4346,
            total_rewards_allcoated: v4347,
            total_users_claim: v4348,
            usersNo: v4349
            };
          const v12611 = v6769;
          const v12612 = v6965.keepGoing;
          if (v12612) {
            const v12613 = v6965.bal;
            const v12615 = v6965.percent;
            const v12616 = v6965.totalAllocatoinToAllUsers;
            const v12617 = v6965.totalFundsDeposited;
            const v12618 = v6965.total_amount_claimed;
            const v12619 = v6965.total_rewards_allcoated;
            const v12620 = v6965.total_users_claim;
            const v12621 = v6965.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v12628 = stdlib.sub(v6769, v6769);
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
              tok: undefined /* Nothing */
              });
            const v12629 = (stdlib.le(await ctc.getBalance(), v12628) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12628));
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
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
          const v7115 = v4598[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7534 = v4598[1];
          
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      undefined /* setApiDetails */;
      const v6738 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '0')];
      const v6740 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '2')];
      const v6742 = stdlib.gt(v6740, v4303);
      const v6744 = stdlib.safeSub(v4303, v6740);
      const v6745 = stdlib.ge(v6744, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6745, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      stdlib.assert(v6742, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v6749 = stdlib.safeAdd(v4344, v6740);
      const v6750 = stdlib.ge(v4303, v6749);
      stdlib.assert(v6750, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v6752 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v6738, ctc0), null);
      const v6753 = {
        None: 0,
        Some: 1
        }[v6752[0]];
      const v6754 = stdlib.eq(v6753, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6754, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v6769 = stdlib.add(v4303, v6740);
      ;
      const v6908 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '1')];
      const v6911 = stdlib.gt(v6740, v6769);
      const v6913 = stdlib.safeSub(v6769, v6740);
      const v6914 = stdlib.ge(v6913, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6914, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      stdlib.assert(v6911, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v6919 = stdlib.ge(v6769, v6749);
      stdlib.assert(v6919, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v6930 = stdlib.ge(v6913, v4344);
      stdlib.assert(v6930, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v6932 = [v6738, v6908];
      const v6933 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v6932, ctc3), null);
      const v6934 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6935 = stdlib.fromSome(v6933, v6934);
      const v6937 = v6935.claimed;
      const v6938 = v6935.rewards;
      const v6940 = stdlib.safeAdd(v6938, v6740);
      const v6941 = {
        claimed: v6937,
        rewards: v6940
        };
      await stdlib.mapSet(map1, ctc19, v6932, ctc3, v6941);
      const v6942 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v6738, ctc1), null);
      const v6943 = stdlib.fromSome(v6942, stdlib.checkedBigNumberify('./index_v2.rsh:181:60:decimal', stdlib.UInt_max, '0'));
      const v6944 = stdlib.safeAdd(v6943, v6740);
      await stdlib.mapSet(map0, ctc6, v6738, ctc1, v6944);
      const v6945 = true;
      const v6946 = await txn1.getOutput('Admin_setReward', 'v6945', ctc8, v6945);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v6696, v6946), {
          at: './index_v2.rsh:153:11:application',
          fs: ['at ./index_v2.rsh:153:11:application call to [unknown function] (defined at: ./index_v2.rsh:153:11:function exp)', 'at ./index_v2.rsh:183:14:application call to "ret" (defined at: ./index_v2.rsh:168:15:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      const v6964 = stdlib.safeAdd(v4341, v6740);
      const v6965 = {
        bal: v6964,
        keepGoing: v4342,
        percent: v4343,
        totalAllocatoinToAllUsers: v6749,
        totalFundsDeposited: v4345,
        total_amount_claimed: v4346,
        total_rewards_allcoated: v4347,
        total_users_claim: v4348,
        usersNo: v4349
        };
      const v12611 = v6769;
      const v12612 = v6965.keepGoing;
      if (v12612) {
        const v12613 = v6965.bal;
        const v12615 = v6965.percent;
        const v12616 = v6965.totalAllocatoinToAllUsers;
        const v12617 = v6965.totalFundsDeposited;
        const v12618 = v6965.total_amount_claimed;
        const v12619 = v6965.total_rewards_allcoated;
        const v12620 = v6965.total_users_claim;
        const v12621 = v6965.usersNo;
        return;
        }
      else {
        const v12628 = stdlib.sub(v6769, v6769);
        ;
        const v12629 = (stdlib.le(await ctc.getBalance(), v12628) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12628));
        ;
        return;
        }
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
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
  
  
  const v4287 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v4287],
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
      
      const {data: [v4291], secs: v4293, time: v4292, didSend: v27, from: v4290 } = txn1;
      
      ;
      const v4294 = await ctc.getContractInfo();
      
      const v4296 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v4297 = {
        i: v4296,
        sign: true
        };
      const v4298 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v4297,
        totalAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4299 = v4298;
      const v4300 = v4292;
      const v4303 = stdlib.checkedBigNumberify('./index_v2.rsh:58:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v4331 = v4299.keepGoing;
        
        return v4331;})()) {
        const v4341 = v4299.bal;
        const v4342 = v4299.keepGoing;
        const v4343 = v4299.percent;
        const v4344 = v4299.totalAllocatoinToAllUsers;
        const v4345 = v4299.totalFundsDeposited;
        const v4346 = v4299.total_amount_claimed;
        const v4347 = v4299.total_rewards_allcoated;
        const v4348 = v4299.total_users_claim;
        const v4349 = v4299.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v7992 = stdlib.sub(v4303, v4303);
        sim_r.txns.push({
          kind: 'from',
          to: v4290,
          tok: undefined /* Nothing */
          });
        const v7994 = (stdlib.le(await ctc.getBalance(), v7992) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v7992));
        sim_r.txns.push({
          kind: 'from',
          to: v4290,
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
  const {data: [v4291], secs: v4293, time: v4292, didSend: v27, from: v4290 } = txn1;
  ;
  const v4294 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v4294), {
    at: './index_v2.rsh:65:27:application',
    fs: ['at ./index_v2.rsh:65:27:application call to [unknown function] (defined at: ./index_v2.rsh:65:27:function exp)', 'at ./index_v2.rsh:65:27:application call to "liftedInteract" (defined at: ./index_v2.rsh:65:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v4296 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v4297 = {
    i: v4296,
    sign: true
    };
  const v4298 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v4297,
    totalAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v4299 = v4298;
  let v4300 = v4292;
  let v4303 = stdlib.checkedBigNumberify('./index_v2.rsh:58:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v4331 = v4299.keepGoing;
    
    return v4331;})()) {
    const v4341 = v4299.bal;
    const v4342 = v4299.keepGoing;
    const v4343 = v4299.percent;
    const v4344 = v4299.totalAllocatoinToAllUsers;
    const v4345 = v4299.totalFundsDeposited;
    const v4346 = v4299.total_amount_claimed;
    const v4347 = v4299.total_rewards_allcoated;
    const v4348 = v4299.total_users_claim;
    const v4349 = v4299.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn3;
    switch (v4598[0]) {
      case 'Admin_addAdmin0_235': {
        const v4601 = v4598[1];
        undefined /* setApiDetails */;
        const v4607 = stdlib.addressEq(v4597, v4290);
        const v4608 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v4597, ctc0), null);
        const v4609 = {
          None: 0,
          Some: 1
          }[v4608[0]];
        const v4610 = stdlib.eq(v4609, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4611 = v4607 ? true : v4610;
        stdlib.assert(v4611, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:207:34:application call to [unknown function] (defined at: ./index_v2.rsh:207:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:207:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v4676 = v4601[stdlib.checkedBigNumberify('./index_v2.rsh:207:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v4676, ctc0, null);
        const v4685 = null;
        await txn3.getOutput('Admin_addAdmin', 'v4685', ctc0, v4685);
        const v4701 = {
          bal: v4341,
          keepGoing: v4342,
          percent: v4343,
          totalAllocatoinToAllUsers: v4344,
          totalFundsDeposited: v4345,
          total_amount_claimed: v4346,
          total_rewards_allcoated: v4347,
          total_users_claim: v4348,
          usersNo: v4349
          };
        const cv4299 = v4701;
        const cv4300 = v4599;
        const cv4303 = v4303;
        
        v4299 = cv4299;
        v4300 = cv4300;
        v4303 = cv4303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_235': {
        const v5020 = v4598[1];
        undefined /* setApiDetails */;
        const v5033 = v5020[stdlib.checkedBigNumberify('./index_v2.rsh:139:10:spread', stdlib.UInt_max, '0')];
        const v5034 = stdlib.addressEq(v4597, v4290);
        const v5035 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v4597, ctc0), null);
        const v5036 = {
          None: 0,
          Some: 1
          }[v5035[0]];
        const v5037 = stdlib.eq(v5036, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5038 = v5034 ? true : v5037;
        stdlib.assert(v5038, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:139:32:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:139:32:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v5093 = stdlib.add(v4303, v5033);
        ;
        const v5131 = null;
        await txn3.getOutput('Admin_deposit', 'v5131', ctc0, v5131);
        const v5147 = stdlib.safeAdd(v4341, v5033);
        const v5148 = stdlib.safeAdd(v4345, v5033);
        const v5149 = {
          bal: v5147,
          keepGoing: v4342,
          percent: v4343,
          totalAllocatoinToAllUsers: v4344,
          totalFundsDeposited: v5148,
          total_amount_claimed: v4346,
          total_rewards_allcoated: v4347,
          total_users_claim: v4348,
          usersNo: v4349
          };
        const cv4299 = v5149;
        const cv4300 = v4599;
        const cv4303 = v5093;
        
        v4299 = cv4299;
        v4300 = cv4300;
        v4303 = cv4303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_235': {
        const v5439 = v4598[1];
        undefined /* setApiDetails */;
        const v5461 = v5439[stdlib.checkedBigNumberify('./index_v2.rsh:195:10:spread', stdlib.UInt_max, '1')];
        const v5462 = stdlib.addressEq(v4597, v4290);
        const v5463 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v4597, ctc0), null);
        const v5464 = {
          None: 0,
          Some: 1
          }[v5463[0]];
        const v5465 = stdlib.eq(v5464, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5466 = v5462 ? true : v5465;
        stdlib.assert(v5466, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:195:45:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v5469 = stdlib.le(v5461, v4303);
        stdlib.assert(v5469, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:195:45:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:195:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        const v5571 = v5439[stdlib.checkedBigNumberify('./index_v2.rsh:195:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc7, v5571, ctc1, v5461);
        const v5584 = null;
        await txn3.getOutput('Admin_editUserReward', 'v5584', ctc0, v5584);
        const v5601 = {
          bal: v4341,
          keepGoing: v4342,
          percent: v4343,
          totalAllocatoinToAllUsers: v4344,
          totalFundsDeposited: v4345,
          total_amount_claimed: v4346,
          total_rewards_allcoated: v4347,
          total_users_claim: v4348,
          usersNo: v4349
          };
        const cv4299 = v5601;
        const cv4300 = v4599;
        const cv4303 = v4303;
        
        v4299 = cv4299;
        v4300 = cv4300;
        v4303 = cv4303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_235': {
        const v5858 = v4598[1];
        undefined /* setApiDetails */;
        const v5891 = stdlib.addressEq(v4290, v4597);
        stdlib.assert(v5891, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:339:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:338:44:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        const v5893 = stdlib.eq(v4344, stdlib.checkedBigNumberify('./index_v2.rsh:341:38:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5893, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:340:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:338:44:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:338:44:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Users have unclaimed funds, thus you cannot end contract',
          who: 'Deployer'
          });
        ;
        const v6027 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v6027', ctc0, v6027);
        const v6042 = {
          bal: v4341,
          keepGoing: false,
          percent: v4343,
          totalAllocatoinToAllUsers: v4344,
          totalFundsDeposited: v4345,
          total_amount_claimed: v4346,
          total_rewards_allcoated: v4347,
          total_users_claim: v4348,
          usersNo: v4349
          };
        const cv4299 = v6042;
        const cv4300 = v4599;
        const cv4303 = v4303;
        
        v4299 = cv4299;
        v4300 = cv4300;
        v4303 = cv4303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_235': {
        const v6277 = v4598[1];
        undefined /* setApiDetails */;
        const v6316 = stdlib.addressEq(v4597, v4290);
        stdlib.assert(v6316, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:221:37:application call to [unknown function] (defined at: ./index_v2.rsh:221:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:221:37:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v6464 = v6277[stdlib.checkedBigNumberify('./index_v2.rsh:221:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v6464, ctc0, undefined /* Nothing */);
        const v6469 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v6469', ctc0, v6469);
        const v6485 = {
          bal: v4341,
          keepGoing: v4342,
          percent: v4343,
          totalAllocatoinToAllUsers: v4344,
          totalFundsDeposited: v4345,
          total_amount_claimed: v4346,
          total_rewards_allcoated: v4347,
          total_users_claim: v4348,
          usersNo: v4349
          };
        const cv4299 = v6485;
        const cv4300 = v4599;
        const cv4303 = v4303;
        
        v4299 = cv4299;
        v4300 = cv4300;
        v4303 = cv4303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_235': {
        const v6696 = v4598[1];
        undefined /* setApiDetails */;
        const v6738 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '0')];
        const v6740 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '2')];
        const v6742 = stdlib.gt(v6740, v4303);
        const v6744 = stdlib.safeSub(v4303, v6740);
        const v6745 = stdlib.ge(v6744, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v6745, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        stdlib.assert(v6742, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v6749 = stdlib.safeAdd(v4344, v6740);
        const v6750 = stdlib.ge(v4303, v6749);
        stdlib.assert(v6750, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v6752 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v6738, ctc0), null);
        const v6753 = {
          None: 0,
          Some: 1
          }[v6752[0]];
        const v6754 = stdlib.eq(v6753, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6754, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:153:45:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:153:45:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v6769 = stdlib.add(v4303, v6740);
        ;
        const v6908 = v6696[stdlib.checkedBigNumberify('./index_v2.rsh:153:10:spread', stdlib.UInt_max, '1')];
        const v6911 = stdlib.gt(v6740, v6769);
        const v6913 = stdlib.safeSub(v6769, v6740);
        const v6914 = stdlib.ge(v6913, stdlib.checkedBigNumberify('./index_v2.rsh:156:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v6914, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        stdlib.assert(v6911, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v6919 = stdlib.ge(v6769, v6749);
        stdlib.assert(v6919, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v6930 = stdlib.ge(v6913, v4344);
        stdlib.assert(v6930, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:168:15:application call to [unknown function] (defined at: ./index_v2.rsh:168:15:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v6932 = [v6738, v6908];
        const v6933 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6932, ctc3), null);
        const v6934 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6935 = stdlib.fromSome(v6933, v6934);
        const v6937 = v6935.claimed;
        const v6938 = v6935.rewards;
        const v6940 = stdlib.safeAdd(v6938, v6740);
        const v6941 = {
          claimed: v6937,
          rewards: v6940
          };
        await stdlib.mapSet(map1, ctc16, v6932, ctc3, v6941);
        const v6942 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6738, ctc1), null);
        const v6943 = stdlib.fromSome(v6942, stdlib.checkedBigNumberify('./index_v2.rsh:181:60:decimal', stdlib.UInt_max, '0'));
        const v6944 = stdlib.safeAdd(v6943, v6740);
        await stdlib.mapSet(map0, ctc7, v6738, ctc1, v6944);
        const v6945 = true;
        await txn3.getOutput('Admin_setReward', 'v6945', ctc17, v6945);
        const v6964 = stdlib.safeAdd(v4341, v6740);
        const v6965 = {
          bal: v6964,
          keepGoing: v4342,
          percent: v4343,
          totalAllocatoinToAllUsers: v6749,
          totalFundsDeposited: v4345,
          total_amount_claimed: v4346,
          total_rewards_allcoated: v4347,
          total_users_claim: v4348,
          usersNo: v4349
          };
        const cv4299 = v6965;
        const cv4300 = v4599;
        const cv4303 = v6769;
        
        v4299 = cv4299;
        v4300 = cv4300;
        v4303 = cv4303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_235': {
        const v7115 = v4598[1];
        undefined /* setApiDetails */;
        const v7177 = v7115[stdlib.checkedBigNumberify('./index_v2.rsh:280:10:spread', stdlib.UInt_max, '0')];
        const v7179 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4597, ctc1), null);
        const v7180 = stdlib.fromSome(v7179, stdlib.checkedBigNumberify('./index_v2.rsh:281:56:decimal', stdlib.UInt_max, '0'));
        const v7182 = stdlib.le(v7177, v4303);
        stdlib.assert(v7182, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:280:34:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v7184 = stdlib.ge(v7180, v7177);
        stdlib.assert(v7184, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index_v2.rsh:283:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:280:34:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        const v7388 = v7115[stdlib.checkedBigNumberify('./index_v2.rsh:280:10:spread', stdlib.UInt_max, '1')];
        const v7401 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v4597, ctc0), null);
        const v7402 = {
          None: 0,
          Some: 1
          }[v7401[0]];
        const v7403 = stdlib.eq(v7402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v7404 = [v4597, v7388];
        const v7405 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v7404, ctc3), null);
        const v7406 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v7407 = stdlib.fromSome(v7405, v7406);
        const v7409 = v7407.claimed;
        const v7410 = v7407.rewards;
        const v7412 = stdlib.safeAdd(v7409, v7177);
        const v7414 = stdlib.safeSub(v7410, v7177);
        const v7415 = {
          claimed: v7412,
          rewards: v7414
          };
        await stdlib.mapSet(map1, ctc16, v7404, ctc3, v7415);
        const v7416 = true;
        await txn3.getOutput('User_claim', 'v7416', ctc17, v7416);
        const v7424 = {
          addr: v4597,
          amount: v7177,
          projectName: v4291
          };
        null;
        if (v7403) {
          const v7474 = stdlib.sub(v4303, v7177);
          ;
          const v7477 = stdlib.eq(v7180, stdlib.checkedBigNumberify('./index_v2.rsh:309:23:decimal', stdlib.UInt_max, '0'));
          if (v7477) {
            await stdlib.mapSet(map0, ctc7, v4597, ctc1, undefined /* Nothing */);
            const v7489 = stdlib.safeAdd(v4349, stdlib.checkedBigNumberify('./index_v2.rsh:316:56:decimal', stdlib.UInt_max, '1'));
            const v7490 = stdlib.safeSub(v4341, v7177);
            const v7491 = stdlib.safeSub(v4344, v7177);
            const v7492 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
            const v7493 = stdlib.safeAdd(v4346, v7177);
            const v7494 = {
              bal: v7490,
              keepGoing: v4342,
              percent: v4343,
              totalAllocatoinToAllUsers: v7491,
              totalFundsDeposited: v4345,
              total_amount_claimed: v7493,
              total_rewards_allcoated: v4347,
              total_users_claim: v7492,
              usersNo: v7489
              };
            const cv4299 = v7494;
            const cv4300 = v4599;
            const cv4303 = v7474;
            
            v4299 = cv4299;
            v4300 = cv4300;
            v4303 = cv4303;
            
            txn2 = txn3;
            continue;}
          else {
            const v7496 = stdlib.safeSub(v7180, v7177);
            await stdlib.mapSet(map0, ctc7, v4597, ctc1, v7496);
            const v7508 = stdlib.safeAdd(v4349, stdlib.checkedBigNumberify('./index_v2.rsh:316:56:decimal', stdlib.UInt_max, '1'));
            const v7509 = stdlib.safeSub(v4341, v7177);
            const v7510 = stdlib.safeSub(v4344, v7177);
            const v7511 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
            const v7512 = stdlib.safeAdd(v4346, v7177);
            const v7513 = {
              bal: v7509,
              keepGoing: v4342,
              percent: v4343,
              totalAllocatoinToAllUsers: v7510,
              totalFundsDeposited: v4345,
              total_amount_claimed: v7512,
              total_rewards_allcoated: v4347,
              total_users_claim: v7511,
              usersNo: v7508
              };
            const cv4299 = v7513;
            const cv4300 = v4599;
            const cv4303 = v7474;
            
            v4299 = cv4299;
            v4300 = cv4300;
            v4303 = cv4303;
            
            txn2 = txn3;
            continue;}}
        else {
          await stdlib.mapSet(map3, ctc7, v4597, ctc0, null);
          const v7430 = stdlib.sub(v4303, v7177);
          ;
          const v7433 = stdlib.eq(v7180, stdlib.checkedBigNumberify('./index_v2.rsh:309:23:decimal', stdlib.UInt_max, '0'));
          if (v7433) {
            await stdlib.mapSet(map0, ctc7, v4597, ctc1, undefined /* Nothing */);
            const v7446 = stdlib.safeSub(v4341, v7177);
            const v7447 = stdlib.safeSub(v4344, v7177);
            const v7448 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
            const v7449 = stdlib.safeAdd(v4346, v7177);
            const v7450 = {
              bal: v7446,
              keepGoing: v4342,
              percent: v4343,
              totalAllocatoinToAllUsers: v7447,
              totalFundsDeposited: v4345,
              total_amount_claimed: v7449,
              total_rewards_allcoated: v4347,
              total_users_claim: v7448,
              usersNo: v4349
              };
            const cv4299 = v7450;
            const cv4300 = v4599;
            const cv4303 = v7430;
            
            v4299 = cv4299;
            v4300 = cv4300;
            v4303 = cv4303;
            
            txn2 = txn3;
            continue;}
          else {
            const v7452 = stdlib.safeSub(v7180, v7177);
            await stdlib.mapSet(map0, ctc7, v4597, ctc1, v7452);
            const v7465 = stdlib.safeSub(v4341, v7177);
            const v7466 = stdlib.safeSub(v4344, v7177);
            const v7467 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
            const v7468 = stdlib.safeAdd(v4346, v7177);
            const v7469 = {
              bal: v7465,
              keepGoing: v4342,
              percent: v4343,
              totalAllocatoinToAllUsers: v7466,
              totalFundsDeposited: v4345,
              total_amount_claimed: v7468,
              total_rewards_allcoated: v4347,
              total_users_claim: v7467,
              usersNo: v4349
              };
            const cv4299 = v7469;
            const cv4300 = v4599;
            const cv4303 = v7430;
            
            v4299 = cv4299;
            v4300 = cv4300;
            v4303 = cv4303;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_235': {
        const v7534 = v4598[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map4, ctc7, v4597, ctc0, null);
        const v7936 = null;
        await txn3.getOutput('User_optin', 'v7936', ctc0, v7936);
        const v7951 = {
          bal: v4341,
          keepGoing: v4342,
          percent: v4343,
          totalAllocatoinToAllUsers: v4344,
          totalFundsDeposited: v4345,
          total_amount_claimed: v4346,
          total_rewards_allcoated: v4347,
          total_users_claim: v4348,
          usersNo: v4349
          };
        const cv4299 = v7951;
        const cv4300 = v4599;
        const cv4303 = v4303;
        
        v4299 = cv4299;
        v4300 = cv4300;
        v4303 = cv4303;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v7992 = stdlib.sub(v4303, v4303);
  ;
  const v7994 = (stdlib.le(await ctc.getBalance(), v7992) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v7992));
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4486 = ctc.selfAddress();
  const v4488 = stdlib.protect(ctc12, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:280:34:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_claim0_235" (defined at: ./index_v2.rsh:280:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v4489 = v4488[stdlib.checkedBigNumberify('./index_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4493 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4486, ctc1), null);
  const v4494 = stdlib.fromSome(v4493, stdlib.checkedBigNumberify('./index_v2.rsh:281:56:decimal', stdlib.UInt_max, '0'));
  const v4496 = stdlib.le(v4489, v4303);
  stdlib.assert(v4496, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:280:34:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_claim0_235" (defined at: ./index_v2.rsh:280:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v4498 = stdlib.ge(v4494, v4489);
  stdlib.assert(v4498, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index_v2.rsh:283:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:280:34:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_claim0_235" (defined at: ./index_v2.rsh:280:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v4507 = ['User_claim0_235', v4488];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4507],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:285:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5020 = v4598[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5439 = v4598[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5858 = v4598[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6277 = v4598[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6696 = v4598[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7115 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v7177 = v7115[stdlib.checkedBigNumberify('./index_v2.rsh:280:10:spread', stdlib.UInt_max, '0')];
          const v7179 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v4597, ctc1), null);
          const v7180 = stdlib.fromSome(v7179, stdlib.checkedBigNumberify('./index_v2.rsh:281:56:decimal', stdlib.UInt_max, '0'));
          ;
          const v7388 = v7115[stdlib.checkedBigNumberify('./index_v2.rsh:280:10:spread', stdlib.UInt_max, '1')];
          const v7401 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v4597, ctc0), null);
          const v7402 = {
            None: 0,
            Some: 1
            }[v7401[0]];
          const v7403 = stdlib.eq(v7402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v7404 = [v4597, v7388];
          const v7405 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v7404, ctc3), null);
          const v7406 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v7407 = stdlib.fromSome(v7405, v7406);
          const v7409 = v7407.claimed;
          const v7410 = v7407.rewards;
          const v7412 = stdlib.safeAdd(v7409, v7177);
          const v7414 = stdlib.safeSub(v7410, v7177);
          const v7415 = {
            claimed: v7412,
            rewards: v7414
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v7404, ctc3, v7415);
          const v7416 = true;
          const v7417 = await txn1.getOutput('User_claim', 'v7416', ctc8, v7416);
          
          const v7424 = {
            addr: v4597,
            amount: v7177,
            projectName: v4291
            };
          null;
          if (v7403) {
            const v7474 = stdlib.sub(v4303, v7177);
            sim_r.txns.push({
              kind: 'from',
              to: v4597,
              tok: undefined /* Nothing */
              });
            const v7477 = stdlib.eq(v7180, stdlib.checkedBigNumberify('./index_v2.rsh:309:23:decimal', stdlib.UInt_max, '0'));
            if (v7477) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v4597, ctc1, undefined /* Nothing */);
              const v7489 = stdlib.safeAdd(v4349, stdlib.checkedBigNumberify('./index_v2.rsh:316:56:decimal', stdlib.UInt_max, '1'));
              const v7490 = stdlib.safeSub(v4341, v7177);
              const v7491 = stdlib.safeSub(v4344, v7177);
              const v7492 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
              const v7493 = stdlib.safeAdd(v4346, v7177);
              const v7494 = {
                bal: v7490,
                keepGoing: v4342,
                percent: v4343,
                totalAllocatoinToAllUsers: v7491,
                totalFundsDeposited: v4345,
                total_amount_claimed: v7493,
                total_rewards_allcoated: v4347,
                total_users_claim: v7492,
                usersNo: v7489
                };
              const v12863 = v7474;
              const v12864 = v7494.keepGoing;
              if (v12864) {
                const v12865 = v7494.bal;
                const v12867 = v7494.percent;
                const v12868 = v7494.totalAllocatoinToAllUsers;
                const v12869 = v7494.totalFundsDeposited;
                const v12870 = v7494.total_amount_claimed;
                const v12871 = v7494.total_rewards_allcoated;
                const v12872 = v7494.total_users_claim;
                const v12873 = v7494.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12880 = stdlib.sub(v7474, v7474);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
                  tok: undefined /* Nothing */
                  });
                const v12881 = (stdlib.le(await ctc.getBalance(), v12880) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12880));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v7496 = stdlib.safeSub(v7180, v7177);
              await stdlib.simMapSet(sim_r, 0, ctc6, v4597, ctc1, v7496);
              const v7508 = stdlib.safeAdd(v4349, stdlib.checkedBigNumberify('./index_v2.rsh:316:56:decimal', stdlib.UInt_max, '1'));
              const v7509 = stdlib.safeSub(v4341, v7177);
              const v7510 = stdlib.safeSub(v4344, v7177);
              const v7511 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
              const v7512 = stdlib.safeAdd(v4346, v7177);
              const v7513 = {
                bal: v7509,
                keepGoing: v4342,
                percent: v4343,
                totalAllocatoinToAllUsers: v7510,
                totalFundsDeposited: v4345,
                total_amount_claimed: v7512,
                total_rewards_allcoated: v4347,
                total_users_claim: v7511,
                usersNo: v7508
                };
              const v12884 = v7474;
              const v12885 = v7513.keepGoing;
              if (v12885) {
                const v12886 = v7513.bal;
                const v12888 = v7513.percent;
                const v12889 = v7513.totalAllocatoinToAllUsers;
                const v12890 = v7513.totalFundsDeposited;
                const v12891 = v7513.total_amount_claimed;
                const v12892 = v7513.total_rewards_allcoated;
                const v12893 = v7513.total_users_claim;
                const v12894 = v7513.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12901 = stdlib.sub(v7474, v7474);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
                  tok: undefined /* Nothing */
                  });
                const v12902 = (stdlib.le(await ctc.getBalance(), v12901) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12901));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v4597, ctc0, null);
            const v7430 = stdlib.sub(v4303, v7177);
            sim_r.txns.push({
              kind: 'from',
              to: v4597,
              tok: undefined /* Nothing */
              });
            const v7433 = stdlib.eq(v7180, stdlib.checkedBigNumberify('./index_v2.rsh:309:23:decimal', stdlib.UInt_max, '0'));
            if (v7433) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v4597, ctc1, undefined /* Nothing */);
              const v7446 = stdlib.safeSub(v4341, v7177);
              const v7447 = stdlib.safeSub(v4344, v7177);
              const v7448 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
              const v7449 = stdlib.safeAdd(v4346, v7177);
              const v7450 = {
                bal: v7446,
                keepGoing: v4342,
                percent: v4343,
                totalAllocatoinToAllUsers: v7447,
                totalFundsDeposited: v4345,
                total_amount_claimed: v7449,
                total_rewards_allcoated: v4347,
                total_users_claim: v7448,
                usersNo: v4349
                };
              const v12905 = v7430;
              const v12906 = v7450.keepGoing;
              if (v12906) {
                const v12907 = v7450.bal;
                const v12909 = v7450.percent;
                const v12910 = v7450.totalAllocatoinToAllUsers;
                const v12911 = v7450.totalFundsDeposited;
                const v12912 = v7450.total_amount_claimed;
                const v12913 = v7450.total_rewards_allcoated;
                const v12914 = v7450.total_users_claim;
                const v12915 = v7450.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12922 = stdlib.sub(v7430, v7430);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
                  tok: undefined /* Nothing */
                  });
                const v12923 = (stdlib.le(await ctc.getBalance(), v12922) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12922));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v7452 = stdlib.safeSub(v7180, v7177);
              await stdlib.simMapSet(sim_r, 0, ctc6, v4597, ctc1, v7452);
              const v7465 = stdlib.safeSub(v4341, v7177);
              const v7466 = stdlib.safeSub(v4344, v7177);
              const v7467 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
              const v7468 = stdlib.safeAdd(v4346, v7177);
              const v7469 = {
                bal: v7465,
                keepGoing: v4342,
                percent: v4343,
                totalAllocatoinToAllUsers: v7466,
                totalFundsDeposited: v4345,
                total_amount_claimed: v7468,
                total_rewards_allcoated: v4347,
                total_users_claim: v7467,
                usersNo: v4349
                };
              const v12926 = v7430;
              const v12927 = v7469.keepGoing;
              if (v12927) {
                const v12928 = v7469.bal;
                const v12930 = v7469.percent;
                const v12931 = v7469.totalAllocatoinToAllUsers;
                const v12932 = v7469.totalFundsDeposited;
                const v12933 = v7469.total_amount_claimed;
                const v12934 = v7469.total_rewards_allcoated;
                const v12935 = v7469.total_users_claim;
                const v12936 = v7469.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12943 = stdlib.sub(v7430, v7430);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
                  tok: undefined /* Nothing */
                  });
                const v12944 = (stdlib.le(await ctc.getBalance(), v12943) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12943));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4290,
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
          const v7534 = v4598[1];
          
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      undefined /* setApiDetails */;
      const v7177 = v7115[stdlib.checkedBigNumberify('./index_v2.rsh:280:10:spread', stdlib.UInt_max, '0')];
      const v7179 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4597, ctc1), null);
      const v7180 = stdlib.fromSome(v7179, stdlib.checkedBigNumberify('./index_v2.rsh:281:56:decimal', stdlib.UInt_max, '0'));
      const v7182 = stdlib.le(v7177, v4303);
      stdlib.assert(v7182, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:280:34:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v7184 = stdlib.ge(v7180, v7177);
      stdlib.assert(v7184, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index_v2.rsh:283:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index_v2.rsh:280:34:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:280:34:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      const v7388 = v7115[stdlib.checkedBigNumberify('./index_v2.rsh:280:10:spread', stdlib.UInt_max, '1')];
      const v7401 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v4597, ctc0), null);
      const v7402 = {
        None: 0,
        Some: 1
        }[v7401[0]];
      const v7403 = stdlib.eq(v7402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v7404 = [v4597, v7388];
      const v7405 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v7404, ctc3), null);
      const v7406 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v7407 = stdlib.fromSome(v7405, v7406);
      const v7409 = v7407.claimed;
      const v7410 = v7407.rewards;
      const v7412 = stdlib.safeAdd(v7409, v7177);
      const v7414 = stdlib.safeSub(v7410, v7177);
      const v7415 = {
        claimed: v7412,
        rewards: v7414
        };
      await stdlib.mapSet(map1, ctc19, v7404, ctc3, v7415);
      const v7416 = true;
      const v7417 = await txn1.getOutput('User_claim', 'v7416', ctc8, v7416);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v7115, v7417), {
          at: './index_v2.rsh:280:11:application',
          fs: ['at ./index_v2.rsh:280:11:application call to [unknown function] (defined at: ./index_v2.rsh:280:11:function exp)', 'at ./index_v2.rsh:299:14:application call to "ret" (defined at: ./index_v2.rsh:286:15:function exp)', 'at ./index_v2.rsh:286:15:application call to [unknown function] (defined at: ./index_v2.rsh:286:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v7424 = {
        addr: v4597,
        amount: v7177,
        projectName: v4291
        };
      null;
      if (v7403) {
        const v7474 = stdlib.sub(v4303, v7177);
        ;
        const v7477 = stdlib.eq(v7180, stdlib.checkedBigNumberify('./index_v2.rsh:309:23:decimal', stdlib.UInt_max, '0'));
        if (v7477) {
          await stdlib.mapSet(map0, ctc6, v4597, ctc1, undefined /* Nothing */);
          const v7489 = stdlib.safeAdd(v4349, stdlib.checkedBigNumberify('./index_v2.rsh:316:56:decimal', stdlib.UInt_max, '1'));
          const v7490 = stdlib.safeSub(v4341, v7177);
          const v7491 = stdlib.safeSub(v4344, v7177);
          const v7492 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
          const v7493 = stdlib.safeAdd(v4346, v7177);
          const v7494 = {
            bal: v7490,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v7491,
            totalFundsDeposited: v4345,
            total_amount_claimed: v7493,
            total_rewards_allcoated: v4347,
            total_users_claim: v7492,
            usersNo: v7489
            };
          const v12863 = v7474;
          const v12864 = v7494.keepGoing;
          if (v12864) {
            const v12865 = v7494.bal;
            const v12867 = v7494.percent;
            const v12868 = v7494.totalAllocatoinToAllUsers;
            const v12869 = v7494.totalFundsDeposited;
            const v12870 = v7494.total_amount_claimed;
            const v12871 = v7494.total_rewards_allcoated;
            const v12872 = v7494.total_users_claim;
            const v12873 = v7494.usersNo;
            return;
            }
          else {
            const v12880 = stdlib.sub(v7474, v7474);
            ;
            const v12881 = (stdlib.le(await ctc.getBalance(), v12880) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12880));
            ;
            return;
            }}
        else {
          const v7496 = stdlib.safeSub(v7180, v7177);
          await stdlib.mapSet(map0, ctc6, v4597, ctc1, v7496);
          const v7508 = stdlib.safeAdd(v4349, stdlib.checkedBigNumberify('./index_v2.rsh:316:56:decimal', stdlib.UInt_max, '1'));
          const v7509 = stdlib.safeSub(v4341, v7177);
          const v7510 = stdlib.safeSub(v4344, v7177);
          const v7511 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
          const v7512 = stdlib.safeAdd(v4346, v7177);
          const v7513 = {
            bal: v7509,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v7510,
            totalFundsDeposited: v4345,
            total_amount_claimed: v7512,
            total_rewards_allcoated: v4347,
            total_users_claim: v7511,
            usersNo: v7508
            };
          const v12884 = v7474;
          const v12885 = v7513.keepGoing;
          if (v12885) {
            const v12886 = v7513.bal;
            const v12888 = v7513.percent;
            const v12889 = v7513.totalAllocatoinToAllUsers;
            const v12890 = v7513.totalFundsDeposited;
            const v12891 = v7513.total_amount_claimed;
            const v12892 = v7513.total_rewards_allcoated;
            const v12893 = v7513.total_users_claim;
            const v12894 = v7513.usersNo;
            return;
            }
          else {
            const v12901 = stdlib.sub(v7474, v7474);
            ;
            const v12902 = (stdlib.le(await ctc.getBalance(), v12901) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12901));
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map3, ctc6, v4597, ctc0, null);
        const v7430 = stdlib.sub(v4303, v7177);
        ;
        const v7433 = stdlib.eq(v7180, stdlib.checkedBigNumberify('./index_v2.rsh:309:23:decimal', stdlib.UInt_max, '0'));
        if (v7433) {
          await stdlib.mapSet(map0, ctc6, v4597, ctc1, undefined /* Nothing */);
          const v7446 = stdlib.safeSub(v4341, v7177);
          const v7447 = stdlib.safeSub(v4344, v7177);
          const v7448 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
          const v7449 = stdlib.safeAdd(v4346, v7177);
          const v7450 = {
            bal: v7446,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v7447,
            totalFundsDeposited: v4345,
            total_amount_claimed: v7449,
            total_rewards_allcoated: v4347,
            total_users_claim: v7448,
            usersNo: v4349
            };
          const v12905 = v7430;
          const v12906 = v7450.keepGoing;
          if (v12906) {
            const v12907 = v7450.bal;
            const v12909 = v7450.percent;
            const v12910 = v7450.totalAllocatoinToAllUsers;
            const v12911 = v7450.totalFundsDeposited;
            const v12912 = v7450.total_amount_claimed;
            const v12913 = v7450.total_rewards_allcoated;
            const v12914 = v7450.total_users_claim;
            const v12915 = v7450.usersNo;
            return;
            }
          else {
            const v12922 = stdlib.sub(v7430, v7430);
            ;
            const v12923 = (stdlib.le(await ctc.getBalance(), v12922) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12922));
            ;
            return;
            }}
        else {
          const v7452 = stdlib.safeSub(v7180, v7177);
          await stdlib.mapSet(map0, ctc6, v4597, ctc1, v7452);
          const v7465 = stdlib.safeSub(v4341, v7177);
          const v7466 = stdlib.safeSub(v4344, v7177);
          const v7467 = stdlib.safeAdd(v4348, stdlib.checkedBigNumberify('./index_v2.rsh:319:52:decimal', stdlib.UInt_max, '1'));
          const v7468 = stdlib.safeAdd(v4346, v7177);
          const v7469 = {
            bal: v7465,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v7466,
            totalFundsDeposited: v4345,
            total_amount_claimed: v7468,
            total_rewards_allcoated: v4347,
            total_users_claim: v7467,
            usersNo: v4349
            };
          const v12926 = v7430;
          const v12927 = v7469.keepGoing;
          if (v12927) {
            const v12928 = v7469.bal;
            const v12930 = v7469.percent;
            const v12931 = v7469.totalAllocatoinToAllUsers;
            const v12932 = v7469.totalFundsDeposited;
            const v12933 = v7469.total_amount_claimed;
            const v12934 = v7469.total_rewards_allcoated;
            const v12935 = v7469.total_users_claim;
            const v12936 = v7469.usersNo;
            return;
            }
          else {
            const v12943 = stdlib.sub(v7430, v7430);
            ;
            const v12944 = (stdlib.le(await ctc.getBalance(), v12943) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12943));
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
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
  
  
  const [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v4511 = stdlib.protect(ctc11, await interact.in(), {
    at: './index_v2.rsh:1:23:application',
    fs: ['at ./index_v2.rsh:328:26:application call to [unknown function] (defined at: ./index_v2.rsh:328:26:function exp)', 'at ./index_v2.rsh:83:37:application call to "runUser_optin0_235" (defined at: ./index_v2.rsh:328:10:function exp)', 'at ./index_v2.rsh:83:37:application call to [unknown function] (defined at: ./index_v2.rsh:83:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v4515 = ['User_optin0_235', v4511];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4290, v4291, v4303, v4341, v4342, v4343, v4344, v4345, v4346, v4347, v4348, v4349, v4515],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index_v2.rsh:330:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
      
      switch (v4598[0]) {
        case 'Admin_addAdmin0_235': {
          const v4601 = v4598[1];
          
          break;
          }
        case 'Admin_deposit0_235': {
          const v5020 = v4598[1];
          
          break;
          }
        case 'Admin_editUserReward0_235': {
          const v5439 = v4598[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_235': {
          const v5858 = v4598[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_235': {
          const v6277 = v4598[1];
          
          break;
          }
        case 'Admin_setReward0_235': {
          const v6696 = v4598[1];
          
          break;
          }
        case 'User_claim0_235': {
          const v7115 = v4598[1];
          
          break;
          }
        case 'User_optin0_235': {
          const v7534 = v4598[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v4597, ctc0, null);
          const v7936 = null;
          const v7937 = await txn1.getOutput('User_optin', 'v7936', ctc0, v7936);
          
          const v7951 = {
            bal: v4341,
            keepGoing: v4342,
            percent: v4343,
            totalAllocatoinToAllUsers: v4344,
            totalFundsDeposited: v4345,
            total_amount_claimed: v4346,
            total_rewards_allcoated: v4347,
            total_users_claim: v4348,
            usersNo: v4349
            };
          const v13178 = v4303;
          const v13179 = v7951.keepGoing;
          if (v13179) {
            const v13180 = v7951.bal;
            const v13182 = v7951.percent;
            const v13183 = v7951.totalAllocatoinToAllUsers;
            const v13184 = v7951.totalFundsDeposited;
            const v13185 = v7951.total_amount_claimed;
            const v13186 = v7951.total_rewards_allcoated;
            const v13187 = v7951.total_users_claim;
            const v13188 = v7951.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v13195 = stdlib.sub(v4303, v4303);
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
              tok: undefined /* Nothing */
              });
            const v13196 = (stdlib.le(await ctc.getBalance(), v13195) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v13195));
            sim_r.txns.push({
              kind: 'from',
              to: v4290,
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
  const {data: [v4598], secs: v4600, time: v4599, didSend: v3694, from: v4597 } = txn1;
  switch (v4598[0]) {
    case 'Admin_addAdmin0_235': {
      const v4601 = v4598[1];
      return;
      break;
      }
    case 'Admin_deposit0_235': {
      const v5020 = v4598[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_235': {
      const v5439 = v4598[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_235': {
      const v5858 = v4598[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_235': {
      const v6277 = v4598[1];
      return;
      break;
      }
    case 'Admin_setReward0_235': {
      const v6696 = v4598[1];
      return;
      break;
      }
    case 'User_claim0_235': {
      const v7115 = v4598[1];
      return;
      break;
      }
    case 'User_optin0_235': {
      const v7534 = v4598[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map4, ctc6, v4597, ctc0, null);
      const v7936 = null;
      const v7937 = await txn1.getOutput('User_optin', 'v7936', ctc0, v7936);
      if (v3694) {
        stdlib.protect(ctc0, await interact.out(v7534, v7937), {
          at: './index_v2.rsh:328:11:application',
          fs: ['at ./index_v2.rsh:328:11:application call to [unknown function] (defined at: ./index_v2.rsh:328:11:function exp)', 'at ./index_v2.rsh:333:14:application call to "ret" (defined at: ./index_v2.rsh:331:15:function exp)', 'at ./index_v2.rsh:331:15:application call to [unknown function] (defined at: ./index_v2.rsh:331:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v7951 = {
        bal: v4341,
        keepGoing: v4342,
        percent: v4343,
        totalAllocatoinToAllUsers: v4344,
        totalFundsDeposited: v4345,
        total_amount_claimed: v4346,
        total_rewards_allcoated: v4347,
        total_users_claim: v4348,
        usersNo: v4349
        };
      const v13178 = v4303;
      const v13179 = v7951.keepGoing;
      if (v13179) {
        const v13180 = v7951.bal;
        const v13182 = v7951.percent;
        const v13183 = v7951.totalAllocatoinToAllUsers;
        const v13184 = v7951.totalFundsDeposited;
        const v13185 = v7951.total_amount_claimed;
        const v13186 = v7951.total_rewards_allcoated;
        const v13187 = v7951.total_users_claim;
        const v13188 = v7951.usersNo;
        return;
        }
      else {
        const v13195 = stdlib.sub(v4303, v4303);
        ;
        const v13196 = (stdlib.le(await ctc.getBalance(), v13195) ? stdlib.checkedBigNumberify('./index_v2.rsh:355:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v13195));
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
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAllocatoinToAllUsers()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalFundsDeposited()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAllocatoinToAllUsers()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalFundsDeposited()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[48])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEIAxDUkwHUeijUxQEmBgABAAEBAQIBBAEDMRhBCMgoZEkiWzUBJFs1AilkKmRQghYEAl90xwQNs4a8BBNuVzsEFviURQQihEwmBCk3p/YEKYtaEAQzGhs+BD75YpoEQmgn1QRIJPkCBG7kdhQEeErZNwR6/shtBLv1zY4Ex8Kc1QTeVwRkBO1G26YE8yd4BAT5b2zgBPlzDgsE+q7IsDYaAI4WAFQCTAF3AasBBgJuAZsCHAE3B/oBuwCJAesBywHbAUcIDADfAMkB+wBrAAEANhoBNQskryk0C1AhBK9QUDULJTQBEkSICbI0CyJbNQw0C1cIMTUNgARVC2WDNAwWUDQNULA0DIgKIzQNIlWNCAlFCUgJSwlVB+YH6QfzB/1C/6w2GgEXNQskryo0CxZQIQevUFA1C0L/qDYaATYaAhc1CzUMJK8rNAw0CxZQUCSvUFA1C0L/ioA5AAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/0o2GgE1CySvJwQ0C1AhBK9QUDULQv80NhoBNhoCFzYaAxc1CzUMNQ0kr4ABBTQNNAwWUDQLFlBQUDULQv8NNhoBNQs0ASUSRIgIuigoKzQLUIgIpiJVIxIWUQcINQQxGSISRIAEFR98dTQEULAjQzQBJRJEiAiONBcWNQRC/982GgE2GgIXNQs1DDQBJRJEiAhzIQSvKCEEryo0DDQLFlBQiAhWiAi3VwAINQRC/682GgE1CzQBJRJEiAhJKCgnBDQLUIgINCJVIxIWUQcINQRC/4s0ASUSRIgIKjQQFjUEQv97NAElEkSICBo0ExY1BEL/azQBJRJEiAgKNBEWNQRC/1s0ASUSRIgH+jQPFjUEQv9LNAElEkSIB+o0EhY1BEL/OzQBJRJEiAfaNA4WNQRC/ys2GgE1CzQBJRJEiAfFJK8oJK8pNAtQiAeuiAgPNQRC/wo2GgE2GgIXNQs1DDQBJRJEiAeeIQSvKCEEryo0DDQLFlBQiAeBiAfiVwgINQRC/to2GgEXNhoCFzULNQwkr4ABBjQMFjQLFlBQMgNQUDULQv2lgDkAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L9ZTEANBsSKCgrMQBQiAcGIlUjEhFEIQYrNA1XASBQKIgHSSg1C4AIAAAAAAAAEk00C1CwNAs1BDQWFjQVFlEHCFA0FFA0ExZQNBIWUDQRFlA0EBZQNA8WUDQOFlAyBjUYNRk0GVcIARdBBjc0GSJbNRY0GVcIARc1FTQZVwkRNRQ0GYEaWzUTNBmBIls1EjQZgSpbNRE0GYEyWzUQNBmBOls1DzQZgUJbNQ40GzQaUDQXFlA0FhZQNBUWUQcIUDQUUDQTFlA0EhZQNBEWUDQQFlA0DxZQNA4WUCUyBjUCNQEpSwFXAH9nKkxXfxFnKDQBFjQCFlBnMRkiEkSIBr00A0D9hUL9eDQNI1s1CzEANBsSKCgrMQBQiAX7IlUjEhFENAuIBmwoNQyACAAAAAAAABQLNAxQsDQMNQQ0FjQLCBY0FRZRBwhQNBRQNBMWUDQSNAsIFlA0ERZQNBAWUDQPFlA0DhZQMgY0FzQLCDUXNRg1GUL+7TQLgSBbNQwxADQbEigoKzEAUIgFiyJVIxIRRDQMNBcORCEFKTQLVwAgUDQMFogFxig1C4AIAAAAAAAAFdA0C1CwNAs1BDQWFjQVFlEHCFA0FFA0ExZQNBIWUDQRFlA0EBZQNA8WUDQOFlAyBjUYNRlC/no0GzEAEkQ0EyISRCg1C4AIAAAAAAAAF4s0C1CwNAs1BDQWFilQNBRQNBMWUDQSFlA0ERZQNBAWUDQPFlA0DhZQMgY1GDUZQv4xMQA0GxJEIQYrNA1XASBQiAVDKDULgAgAAAAAAAAZRTQLULA0CzUENBYWNBUWUQcIUDQUUDQTFlA0EhZQNBEWUDQQFlA0DxZQNA4WUDIGNRg1GUL93DQLVwAgNR40CyEHWzUdNBc0HQkiD0Q0HTQXDUQ0EzQdCDUcNBc0HA9EKCgnBDQeUIgEXCJVIxJENBc0HQg1DTQdiATHNA00HQlJNQwiD0Q0HTQNDUQ0DTQcD0Q0DDQTD0Q0HjQLVyAIUDUMIQSvKCEEryo0DFCIBBaIBHc1CyEIKjQMUDQLVwAINAskWzQdCBZQiARQIQUpNB5QJK8oJK8pNB5QiAPoiARJFzQdCBaIBDMjNQuACAAAAAAAABshNAsWUQcIULA0CxZRBwg1BDQWNB0IFjQVFlEHCFA0FFA0HBZQNBIWUDQRFlA0EBZQNA8WUDQOFlAyBjQNNRc1GDUZQvzYNAsiWzUcJK8oJK8pMQBQiAN5iAPaFzUNNBw0Fw5ENA00HA9EMQA0C1cICFA1DCEEryghBK8qNAxQiANPiAOwNQshCCo0DFA0CyJbNBwIFjQLJFs0HAkWUIgDhiM1C4AIAAAAAAAAHPg0CxZRBwhQsDQLFlEHCDUEMQA0HBZQNBpQNQuABJvIVFA0C1CwKCgnBTEAUIgC9CJVIxJBAXw0FzQcCTULNBwxAIgDTDQNQAHNIQUpMQBQiANCNBY0HAkWNBUWUQcIUDQUUDQTNBwJFlA0EhZQNBE0HAgWUDQQFlA0DyMIFlA0DiMIFlAyBjQLNRc1GDUZQvvfIQYnBDEAUCiIAt0oNQuACAAAAAAAAB8ANAtQsDQLNQQ0FhY0FRZRBwhQNBRQNBMWUDQSFlA0ERZQNBAWUDQPFlA0DhZQMgY1GDUZQvuRMQA1GzQLIls1DDQLVwgeNRqABNEqBo00DBZQNBpQsDQMiAK8gEoAAAAAAAAAAAEAAAAAAAAABQAAAAAAAABkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIGIjUXNRg1GUL7FYgCXYGgjQaIAnA2GgE1C0L/cogCSzYaATULQvf8IjE0EkQlMTUSRCIxNhJEIjE3EkSIAiyBkAGvIiJC+1JC/KQ0DVcBMDULQvzvNA1XARA1C0L96UL+3yEGJwUxAFAoiAG8NBc0HAk1CzQcMQCIAcU0DUAAlCEFKTEAUIgBuzQWNBwJFjQVFlEHCFA0FFA0EzQcCRZQNBIWUDQRNBwIFlA0EBZQNA8jCBZQNA4WUDIGNAs1FzUYNRlC+lohBSkxAFA0DTQcCRaIAVQ0FjQcCRY0FRZRBwhQNBRQNBM0HAkWUDQSFlA0ETQcCBZQNBAWUDQPIwgWUDQOIwgWUDIGNAs1FzUYNRlC+gwhBSkxAFA0DTQcCRaIAQY0FjQcCRY0FRZRBwhQNBRQNBM0HAkWUDQSFlA0ETQcCBZQNBAWUDQPIwgWUDQOFlAyBjQLNRc1GDUZQvnANBc0G4gA2TIKYDIKeAk0F0kJCUk1CzQbiADFMRmBBRJEiAD1MgpgMgp4CUk1BjIKiACtQvomSEy/SIkisgEjshCyB7IIs4lC+RVC+hc0DVcBKDULQvp8QvrsSIlMCUk1BjIJiAB6iQlJQf/uSTUGiAB9ib5JFlEHCEUETVCJSVcAIDUbSVcgHjUaSYE+WzUXSYFGWzUWSVdOARc1FUlXTxE1FEmBYFs1E0mBaFs1EkmBcFs1EUmBeFs1EEmBgAFbNQ+BiAFbNQ6JTEm9QP9nSwOIAFFC/19JVwEATCJVTYmxQv9XvCJOAk00Bwg1B4kxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/zpC/0I0Bgg1Bok=`,
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
    1556: `872`,
    1557: `873`,
    1558: `873`,
    1559: `874`,
    156: `21`,
    1560: `874`,
    1561: `875`,
    1562: `876`,
    1563: `877`,
    1564: `878`,
    1565: `885`,
    1566: `885`,
    1567: `886`,
    1568: `886`,
    1569: `887`,
    157: `21`,
    1570: `888`,
    1571: `895`,
    1572: `895`,
    1573: `896`,
    1574: `896`,
    1575: `897`,
    1576: `898`,
    1577: `898`,
    1578: `899`,
    1579: `899`,
    158: `21`,
    1580: `900`,
    1581: `900`,
    1582: `901`,
    1583: `902`,
    1584: `910`,
    1585: `911`,
    1586: `912`,
    1587: `912`,
    1588: `913`,
    1589: `913`,
    159: `21`,
    1590: `914`,
    1591: `915`,
    1592: `915`,
    1593: `915`,
    1594: `916`,
    1595: `917`,
    1596: `918`,
    1597: `919`,
    1598: `920`,
    1599: `927`,
    16: `2`,
    160: `21`,
    1600: `927`,
    1601: `928`,
    1602: `928`,
    1603: `929`,
    1604: `930`,
    1605: `930`,
    1606: `931`,
    1607: `931`,
    1608: `932`,
    1609: `932`,
    161: `21`,
    1610: `932`,
    1611: `935`,
    1612: `935`,
    1613: `936`,
    1614: `936`,
    1615: `937`,
    1616: `938`,
    1617: `939`,
    1618: `939`,
    1619: `940`,
    162: `21`,
    1620: `941`,
    1621: `942`,
    1622: `947`,
    1623: `947`,
    1624: `948`,
    1625: `948`,
    1626: `949`,
    1627: `950`,
    1628: `955`,
    1629: `955`,
    163: `22`,
    1630: `956`,
    1631: `956`,
    1632: `957`,
    1633: `958`,
    1634: `963`,
    1635: `963`,
    1636: `964`,
    1637: `964`,
    1638: `965`,
    1639: `966`,
    164: `22`,
    1640: `971`,
    1641: `971`,
    1642: `972`,
    1643: `972`,
    1644: `973`,
    1645: `973`,
    1646: `973`,
    1647: `974`,
    1648: `975`,
    1649: `975`,
    165: `22`,
    1650: `976`,
    1651: `976`,
    1652: `977`,
    1653: `979`,
    1654: `980`,
    1655: `980`,
    1656: `981`,
    1657: `982`,
    1658: `983`,
    1659: `983`,
    166: `23`,
    1660: `984`,
    1661: `985`,
    1662: `985`,
    1663: `985`,
    1664: `986`,
    1665: `986`,
    1666: `986`,
    1667: `987`,
    1668: `987`,
    1669: `988`,
    167: `23`,
    1670: `988`,
    1671: `989`,
    1672: `990`,
    1673: `990`,
    1674: `991`,
    1675: `992`,
    1676: `992`,
    1677: `993`,
    1678: `993`,
    1679: `993`,
    168: `23`,
    1680: `994`,
    1681: `994`,
    1682: `995`,
    1683: `996`,
    1684: `997`,
    1685: `997`,
    1686: `998`,
    1687: `999`,
    1688: `1000`,
    1689: `1001`,
    169: `23`,
    1690: `1001`,
    1691: `1001`,
    1692: `1003`,
    1693: `1003`,
    1694: `1004`,
    1695: `1005`,
    1696: `1005`,
    1697: `1006`,
    1698: `1007`,
    1699: `1008`,
    17: `2`,
    170: `23`,
    1700: `1009`,
    1701: `1010`,
    1702: `1011`,
    1703: `1012`,
    1704: `1013`,
    1705: `1013`,
    1706: `1014`,
    1707: `1015`,
    1708: `1015`,
    1709: `1015`,
    171: `23`,
    1710: `1016`,
    1711: `1016`,
    1712: `1016`,
    1713: `1017`,
    1714: `1018`,
    1715: `1018`,
    1716: `1019`,
    1717: `1020`,
    1718: `1021`,
    1719: `1021`,
    172: `23`,
    1720: `1021`,
    1721: `1022`,
    1722: `1023`,
    1723: `1023`,
    1724: `1024`,
    1725: `1024`,
    1726: `1024`,
    1727: `1024`,
    1728: `1024`,
    1729: `1024`,
    173: `23`,
    1730: `1024`,
    1731: `1024`,
    1732: `1024`,
    1733: `1024`,
    1734: `1025`,
    1735: `1025`,
    1736: `1026`,
    1737: `1027`,
    1738: `1027`,
    1739: `1027`,
    174: `23`,
    1740: `1028`,
    1741: `1029`,
    1742: `1030`,
    1743: `1030`,
    1744: `1031`,
    1745: `1032`,
    1746: `1032`,
    1747: `1032`,
    1748: `1033`,
    1749: `1033`,
    175: `23`,
    1750: `1034`,
    1751: `1034`,
    1752: `1035`,
    1753: `1035`,
    1754: `1036`,
    1755: `1037`,
    1756: `1038`,
    1757: `1038`,
    1758: `1039`,
    1759: `1040`,
    176: `23`,
    1760: `1040`,
    1761: `1040`,
    1762: `1041`,
    1763: `1042`,
    1764: `1042`,
    1765: `1043`,
    1766: `1044`,
    1767: `1044`,
    1768: `1045`,
    1769: `1046`,
    177: `23`,
    1770: `1047`,
    1771: `1047`,
    1772: `1048`,
    1773: `1049`,
    1774: `1050`,
    1775: `1050`,
    1776: `1051`,
    1777: `1052`,
    1778: `1053`,
    1779: `1053`,
    178: `23`,
    1780: `1054`,
    1781: `1055`,
    1782: `1056`,
    1783: `1056`,
    1784: `1057`,
    1785: `1058`,
    1786: `1059`,
    1787: `1059`,
    1788: `1060`,
    1789: `1061`,
    179: `23`,
    1790: `1062`,
    1791: `1062`,
    1792: `1063`,
    1793: `1063`,
    1794: `1064`,
    1795: `1064`,
    1796: `1065`,
    1797: `1065`,
    1798: `1066`,
    1799: `1066`,
    18: `2`,
    180: `23`,
    1800: `1067`,
    1801: `1067`,
    1802: `1067`,
    1803: `1069`,
    1804: `1069`,
    1805: `1070`,
    1806: `1071`,
    1807: `1072`,
    1808: `1072`,
    1809: `1073`,
    181: `23`,
    1810: `1074`,
    1811: `1076`,
    1812: `1077`,
    1813: `1078`,
    1814: `1079`,
    1815: `1080`,
    1816: `1080`,
    1817: `1081`,
    1818: `1082`,
    1819: `1082`,
    182: `23`,
    1820: `1082`,
    1821: `1083`,
    1822: `1083`,
    1823: `1083`,
    1824: `1084`,
    1825: `1085`,
    1826: `1085`,
    1827: `1086`,
    1828: `1086`,
    1829: `1087`,
    183: `23`,
    1830: `1087`,
    1831: `1088`,
    1832: `1089`,
    1833: `1096`,
    1834: `1096`,
    1835: `1097`,
    1836: `1097`,
    1837: `1098`,
    1838: `1099`,
    1839: `1106`,
    184: `23`,
    1840: `1106`,
    1841: `1107`,
    1842: `1107`,
    1843: `1108`,
    1844: `1108`,
    1845: `1108`,
    1846: `1109`,
    1847: `1110`,
    1848: `1110`,
    1849: `1111`,
    185: `23`,
    1850: `1111`,
    1851: `1112`,
    1852: `1114`,
    1853: `1115`,
    1854: `1115`,
    1855: `1116`,
    1856: `1117`,
    1857: `1118`,
    1858: `1118`,
    1859: `1119`,
    186: `23`,
    1860: `1120`,
    1861: `1120`,
    1862: `1120`,
    1863: `1121`,
    1864: `1121`,
    1865: `1121`,
    1866: `1122`,
    1867: `1122`,
    1868: `1123`,
    1869: `1123`,
    187: `23`,
    1870: `1124`,
    1871: `1125`,
    1872: `1125`,
    1873: `1126`,
    1874: `1127`,
    1875: `1127`,
    1876: `1128`,
    1877: `1129`,
    1878: `1130`,
    1879: `1130`,
    188: `23`,
    1880: `1131`,
    1881: `1132`,
    1882: `1133`,
    1883: `1133`,
    1884: `1134`,
    1885: `1135`,
    1886: `1136`,
    1887: `1136`,
    1888: `1137`,
    1889: `1138`,
    189: `23`,
    1890: `1139`,
    1891: `1140`,
    1892: `1140`,
    1893: `1140`,
    1894: `1141`,
    1895: `1142`,
    1896: `1142`,
    1897: `1143`,
    1898: `1143`,
    1899: `1143`,
    19: `2`,
    190: `23`,
    1900: `1143`,
    1901: `1143`,
    1902: `1143`,
    1903: `1143`,
    1904: `1143`,
    1905: `1143`,
    1906: `1143`,
    1907: `1144`,
    1908: `1144`,
    1909: `1145`,
    191: `23`,
    1910: `1146`,
    1911: `1146`,
    1912: `1146`,
    1913: `1147`,
    1914: `1148`,
    1915: `1149`,
    1916: `1149`,
    1917: `1150`,
    1918: `1151`,
    1919: `1151`,
    192: `23`,
    1920: `1151`,
    1921: `1152`,
    1922: `1152`,
    1923: `1153`,
    1924: `1153`,
    1925: `1154`,
    1926: `1154`,
    1927: `1155`,
    1928: `1156`,
    1929: `1157`,
    193: `23`,
    1930: `1157`,
    1931: `1158`,
    1932: `1159`,
    1933: `1159`,
    1934: `1160`,
    1935: `1160`,
    1936: `1160`,
    1937: `1160`,
    1938: `1160`,
    1939: `1160`,
    194: `23`,
    1940: `1161`,
    1941: `1161`,
    1942: `1162`,
    1943: `1163`,
    1944: `1166`,
    1945: `1167`,
    1946: `1168`,
    1947: `1168`,
    1948: `1169`,
    1949: `1169`,
    195: `23`,
    1950: `1170`,
    1951: `1171`,
    1952: `1171`,
    1953: `1171`,
    1954: `1172`,
    1955: `1173`,
    1956: `1174`,
    1957: `1175`,
    1958: `1176`,
    1959: `1176`,
    196: `23`,
    1960: `1176`,
    1961: `1177`,
    1962: `1177`,
    1963: `1178`,
    1964: `1178`,
    1965: `1179`,
    1966: `1180`,
    1967: `1180`,
    1968: `1181`,
    1969: `1181`,
    197: `23`,
    1970: `1182`,
    1971: `1182`,
    1972: `1183`,
    1973: `1183`,
    1974: `1183`,
    1975: `1184`,
    1976: `1184`,
    1977: `1185`,
    1978: `1185`,
    1979: `1185`,
    198: `23`,
    1980: `1186`,
    1981: `1186`,
    1982: `1187`,
    1983: `1188`,
    1984: `1188`,
    1985: `1189`,
    1986: `1190`,
    1987: `1190`,
    1988: `1190`,
    1989: `1191`,
    199: `23`,
    1990: `1191`,
    1991: `1192`,
    1992: `1192`,
    1993: `1193`,
    1994: `1194`,
    1995: `1195`,
    1996: `1195`,
    1997: `1196`,
    1998: `1197`,
    1999: `1197`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1197`,
    2001: `1198`,
    2002: `1199`,
    2003: `1199`,
    2004: `1200`,
    2005: `1201`,
    2006: `1201`,
    2007: `1202`,
    2008: `1202`,
    2009: `1203`,
    201: `23`,
    2010: `1204`,
    2011: `1205`,
    2012: `1206`,
    2013: `1206`,
    2014: `1207`,
    2015: `1208`,
    2016: `1209`,
    2017: `1209`,
    2018: `1210`,
    2019: `1210`,
    202: `23`,
    2020: `1211`,
    2021: `1212`,
    2022: `1213`,
    2023: `1214`,
    2024: `1214`,
    2025: `1215`,
    2026: `1216`,
    2027: `1217`,
    2028: `1217`,
    2029: `1218`,
    203: `23`,
    2030: `1219`,
    2031: `1220`,
    2032: `1221`,
    2033: `1222`,
    2034: `1222`,
    2035: `1223`,
    2036: `1224`,
    2037: `1225`,
    2038: `1226`,
    2039: `1227`,
    204: `23`,
    2040: `1227`,
    2041: `1228`,
    2042: `1228`,
    2043: `1229`,
    2044: `1229`,
    2045: `1230`,
    2046: `1230`,
    2047: `1231`,
    2048: `1231`,
    2049: `1232`,
    205: `23`,
    2050: `1232`,
    2051: `1232`,
    2052: `1235`,
    2053: `1235`,
    2054: `1236`,
    2055: `1236`,
    2056: `1237`,
    2057: `1237`,
    2058: `1238`,
    2059: `1239`,
    206: `23`,
    2060: `1240`,
    2061: `1240`,
    2062: `1240`,
    2063: `1241`,
    2064: `1242`,
    2065: `1242`,
    2066: `1243`,
    2067: `1243`,
    2068: `1243`,
    2069: `1243`,
    207: `23`,
    2070: `1243`,
    2071: `1243`,
    2072: `1243`,
    2073: `1243`,
    2074: `1243`,
    2075: `1243`,
    2076: `1244`,
    2077: `1244`,
    2078: `1245`,
    2079: `1246`,
    208: `23`,
    2080: `1247`,
    2081: `1247`,
    2082: `1248`,
    2083: `1248`,
    2084: `1249`,
    2085: `1249`,
    2086: `1250`,
    2087: `1251`,
    2088: `1251`,
    2089: `1252`,
    209: `23`,
    2090: `1253`,
    2091: `1253`,
    2092: `1253`,
    2093: `1254`,
    2094: `1255`,
    2095: `1255`,
    2096: `1256`,
    2097: `1257`,
    2098: `1257`,
    2099: `1258`,
    21: `2`,
    210: `23`,
    2100: `1259`,
    2101: `1260`,
    2102: `1260`,
    2103: `1261`,
    2104: `1262`,
    2105: `1263`,
    2106: `1263`,
    2107: `1264`,
    2108: `1265`,
    2109: `1266`,
    211: `23`,
    2110: `1266`,
    2111: `1267`,
    2112: `1268`,
    2113: `1269`,
    2114: `1269`,
    2115: `1270`,
    2116: `1271`,
    2117: `1272`,
    2118: `1272`,
    2119: `1273`,
    212: `25`,
    2120: `1274`,
    2121: `1275`,
    2122: `1275`,
    2123: `1276`,
    2124: `1276`,
    2125: `1277`,
    2126: `1277`,
    2127: `1278`,
    2128: `1278`,
    2129: `1278`,
    213: `27`,
    2130: `1280`,
    2131: `1280`,
    2132: `1281`,
    2133: `1281`,
    2134: `1282`,
    2135: `1282`,
    2136: `1283`,
    2137: `1284`,
    2138: `1285`,
    2139: `1285`,
    214: `27`,
    2140: `1286`,
    2141: `1286`,
    2142: `1287`,
    2143: `1287`,
    2144: `1287`,
    2145: `1288`,
    2146: `1288`,
    2147: `1289`,
    2148: `1289`,
    2149: `1289`,
    215: `27`,
    2150: `1289`,
    2151: `1289`,
    2152: `1289`,
    2153: `1290`,
    2154: `1290`,
    2155: `1291`,
    2156: `1292`,
    2157: `1293`,
    2158: `1293`,
    2159: `1294`,
    216: `28`,
    2160: `1295`,
    2161: `1297`,
    2162: `1297`,
    2163: `1298`,
    2164: `1298`,
    2165: `1298`,
    2166: `1299`,
    2167: `1299`,
    2168: `1299`,
    2169: `1299`,
    217: `28`,
    2170: `1299`,
    2171: `1299`,
    2172: `1299`,
    2173: `1299`,
    2174: `1299`,
    2175: `1299`,
    2176: `1299`,
    2177: `1299`,
    2178: `1299`,
    2179: `1299`,
    218: `30`,
    2180: `1299`,
    2181: `1299`,
    2182: `1299`,
    2183: `1299`,
    2184: `1299`,
    2185: `1299`,
    2186: `1299`,
    2187: `1299`,
    2188: `1299`,
    2189: `1299`,
    219: `31`,
    2190: `1299`,
    2191: `1299`,
    2192: `1299`,
    2193: `1299`,
    2194: `1299`,
    2195: `1299`,
    2196: `1299`,
    2197: `1299`,
    2198: `1299`,
    2199: `1299`,
    22: `2`,
    220: `32`,
    2200: `1299`,
    2201: `1299`,
    2202: `1299`,
    2203: `1299`,
    2204: `1299`,
    2205: `1299`,
    2206: `1299`,
    2207: `1299`,
    2208: `1299`,
    2209: `1299`,
    221: `33`,
    2210: `1299`,
    2211: `1299`,
    2212: `1299`,
    2213: `1299`,
    2214: `1299`,
    2215: `1299`,
    2216: `1299`,
    2217: `1299`,
    2218: `1299`,
    2219: `1299`,
    222: `33`,
    2220: `1299`,
    2221: `1299`,
    2222: `1299`,
    2223: `1299`,
    2224: `1299`,
    2225: `1299`,
    2226: `1299`,
    2227: `1299`,
    2228: `1299`,
    2229: `1299`,
    223: `34`,
    2230: `1299`,
    2231: `1299`,
    2232: `1299`,
    2233: `1299`,
    2234: `1299`,
    2235: `1299`,
    2236: `1299`,
    2237: `1299`,
    2238: `1299`,
    2239: `1299`,
    224: `35`,
    2240: `1299`,
    2241: `1299`,
    2242: `1300`,
    2243: `1300`,
    2244: `1301`,
    2245: `1302`,
    2246: `1302`,
    2247: `1303`,
    2248: `1303`,
    2249: `1304`,
    225: `35`,
    2250: `1304`,
    2251: `1305`,
    2252: `1305`,
    2253: `1305`,
    2254: `1307`,
    2255: `1307`,
    2256: `1307`,
    2257: `1308`,
    2258: `1308`,
    2259: `1308`,
    226: `36`,
    2260: `1308`,
    2261: `1309`,
    2262: `1309`,
    2263: `1309`,
    2264: `1310`,
    2265: `1310`,
    2266: `1310`,
    2267: `1311`,
    2268: `1311`,
    2269: `1312`,
    227: `37`,
    2270: `1312`,
    2271: `1312`,
    2272: `1314`,
    2273: `1314`,
    2274: `1314`,
    2275: `1315`,
    2276: `1315`,
    2277: `1315`,
    2278: `1316`,
    2279: `1316`,
    228: `38`,
    2280: `1317`,
    2281: `1317`,
    2282: `1317`,
    2283: `1319`,
    2284: `1320`,
    2285: `1320`,
    2286: `1321`,
    2287: `1322`,
    2288: `1323`,
    2289: `1324`,
    229: `39`,
    2290: `1324`,
    2291: `1325`,
    2292: `1326`,
    2293: `1327`,
    2294: `1328`,
    2295: `1328`,
    2296: `1329`,
    2297: `1330`,
    2298: `1331`,
    2299: `1332`,
    23: `2`,
    230: `39`,
    2300: `1332`,
    2301: `1333`,
    2302: `1334`,
    2303: `1335`,
    2304: `1335`,
    2305: `1335`,
    2306: `1336`,
    2307: `1336`,
    2308: `1336`,
    2309: `1337`,
    231: `41`,
    2310: `1338`,
    2311: `1339`,
    2312: `1340`,
    2313: `1340`,
    2314: `1340`,
    2315: `1342`,
    2316: `1342`,
    2317: `1342`,
    2318: `1344`,
    2319: `1344`,
    232: `42`,
    2320: `1345`,
    2321: `1345`,
    2322: `1345`,
    2323: `1346`,
    2324: `1346`,
    2325: `1347`,
    2326: `1347`,
    2327: `1347`,
    2328: `1349`,
    2329: `1349`,
    233: `42`,
    2330: `1350`,
    2331: `1350`,
    2332: `1350`,
    2333: `1351`,
    2334: `1351`,
    2335: `1352`,
    2336: `1352`,
    2337: `1352`,
    2338: `1354`,
    2339: `1354`,
    234: `43`,
    2340: `1354`,
    2341: `1356`,
    2342: `1356`,
    2343: `1357`,
    2344: `1357`,
    2345: `1358`,
    2346: `1358`,
    2347: `1359`,
    2348: `1360`,
    2349: `1361`,
    235: `44`,
    2350: `1361`,
    2351: `1361`,
    2352: `1362`,
    2353: `1362`,
    2354: `1363`,
    2355: `1363`,
    2356: `1364`,
    2357: `1365`,
    2358: `1365`,
    2359: `1366`,
    236: `45`,
    2360: `1366`,
    2361: `1367`,
    2362: `1367`,
    2363: `1368`,
    2364: `1368`,
    2365: `1368`,
    2366: `1369`,
    2367: `1369`,
    2368: `1370`,
    2369: `1370`,
    237: `45`,
    2370: `1370`,
    2371: `1371`,
    2372: `1371`,
    2373: `1372`,
    2374: `1373`,
    2375: `1373`,
    2376: `1374`,
    2377: `1375`,
    2378: `1375`,
    2379: `1375`,
    238: `45`,
    2380: `1376`,
    2381: `1376`,
    2382: `1377`,
    2383: `1377`,
    2384: `1378`,
    2385: `1379`,
    2386: `1380`,
    2387: `1380`,
    2388: `1381`,
    2389: `1382`,
    239: `46`,
    2390: `1382`,
    2391: `1382`,
    2392: `1383`,
    2393: `1384`,
    2394: `1384`,
    2395: `1385`,
    2396: `1386`,
    2397: `1386`,
    2398: `1387`,
    2399: `1387`,
    24: `2`,
    240: `46`,
    2400: `1388`,
    2401: `1389`,
    2402: `1390`,
    2403: `1391`,
    2404: `1391`,
    2405: `1392`,
    2406: `1393`,
    2407: `1394`,
    2408: `1394`,
    2409: `1395`,
    241: `47`,
    2410: `1395`,
    2411: `1396`,
    2412: `1397`,
    2413: `1398`,
    2414: `1399`,
    2415: `1399`,
    2416: `1400`,
    2417: `1401`,
    2418: `1402`,
    2419: `1402`,
    242: `48`,
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
    243: `49`,
    2430: `1411`,
    2431: `1411`,
    2432: `1412`,
    2433: `1412`,
    2434: `1413`,
    2435: `1413`,
    2436: `1414`,
    2437: `1414`,
    2438: `1415`,
    2439: `1415`,
    244: `49`,
    2440: `1415`,
    2441: `1417`,
    2442: `1417`,
    2443: `1418`,
    2444: `1419`,
    2445: `1419`,
    2446: `1420`,
    2447: `1421`,
    2448: `1421`,
    2449: `1422`,
    245: `50`,
    2450: `1422`,
    2451: `1423`,
    2452: `1424`,
    2453: `1425`,
    2454: `1425`,
    2455: `1425`,
    2456: `1426`,
    2457: `1426`,
    2458: `1427`,
    2459: `1427`,
    246: `50`,
    2460: `1428`,
    2461: `1429`,
    2462: `1430`,
    2463: `1430`,
    2464: `1431`,
    2465: `1432`,
    2466: `1432`,
    2467: `1432`,
    2468: `1433`,
    2469: `1434`,
    247: `51`,
    2470: `1434`,
    2471: `1435`,
    2472: `1436`,
    2473: `1436`,
    2474: `1437`,
    2475: `1437`,
    2476: `1438`,
    2477: `1439`,
    2478: `1440`,
    2479: `1441`,
    248: `51`,
    2480: `1441`,
    2481: `1442`,
    2482: `1443`,
    2483: `1444`,
    2484: `1444`,
    2485: `1445`,
    2486: `1445`,
    2487: `1446`,
    2488: `1447`,
    2489: `1448`,
    249: `51`,
    2490: `1449`,
    2491: `1449`,
    2492: `1450`,
    2493: `1451`,
    2494: `1452`,
    2495: `1452`,
    2496: `1453`,
    2497: `1454`,
    2498: `1455`,
    2499: `1456`,
    25: `2`,
    250: `52`,
    2500: `1457`,
    2501: `1457`,
    2502: `1458`,
    2503: `1459`,
    2504: `1460`,
    2505: `1461`,
    2506: `1462`,
    2507: `1462`,
    2508: `1463`,
    2509: `1463`,
    251: `52`,
    2510: `1464`,
    2511: `1464`,
    2512: `1465`,
    2513: `1465`,
    2514: `1466`,
    2515: `1466`,
    2516: `1467`,
    2517: `1467`,
    2518: `1467`,
    2519: `1469`,
    252: `53`,
    2520: `1469`,
    2521: `1470`,
    2522: `1471`,
    2523: `1471`,
    2524: `1472`,
    2525: `1473`,
    2526: `1473`,
    2527: `1474`,
    2528: `1474`,
    2529: `1475`,
    253: `53`,
    2530: `1476`,
    2531: `1477`,
    2532: `1477`,
    2533: `1477`,
    2534: `1478`,
    2535: `1478`,
    2536: `1479`,
    2537: `1479`,
    2538: `1480`,
    2539: `1481`,
    254: `53`,
    2540: `1482`,
    2541: `1482`,
    2542: `1483`,
    2543: `1484`,
    2544: `1484`,
    2545: `1484`,
    2546: `1485`,
    2547: `1486`,
    2548: `1486`,
    2549: `1487`,
    255: `53`,
    2550: `1488`,
    2551: `1488`,
    2552: `1489`,
    2553: `1489`,
    2554: `1490`,
    2555: `1491`,
    2556: `1492`,
    2557: `1493`,
    2558: `1493`,
    2559: `1494`,
    256: `53`,
    2560: `1495`,
    2561: `1496`,
    2562: `1496`,
    2563: `1497`,
    2564: `1497`,
    2565: `1498`,
    2566: `1499`,
    2567: `1500`,
    2568: `1501`,
    2569: `1501`,
    257: `53`,
    2570: `1502`,
    2571: `1503`,
    2572: `1504`,
    2573: `1504`,
    2574: `1505`,
    2575: `1506`,
    2576: `1507`,
    2577: `1508`,
    2578: `1509`,
    2579: `1509`,
    258: `54`,
    2580: `1510`,
    2581: `1511`,
    2582: `1512`,
    2583: `1512`,
    2584: `1513`,
    2585: `1513`,
    2586: `1514`,
    2587: `1514`,
    2588: `1515`,
    2589: `1515`,
    259: `54`,
    2590: `1516`,
    2591: `1516`,
    2592: `1517`,
    2593: `1517`,
    2594: `1517`,
    2595: `1519`,
    2596: `1519`,
    2597: `1521`,
    2598: `1521`,
    2599: `1522`,
    26: `2`,
    260: `55`,
    2600: `1522`,
    2601: `1522`,
    2602: `1523`,
    2603: `1523`,
    2604: `1524`,
    2605: `1525`,
    2606: `1525`,
    2607: `1526`,
    2608: `1527`,
    2609: `1528`,
    261: `56`,
    2610: `1528`,
    2611: `1529`,
    2612: `1530`,
    2613: `1531`,
    2614: `1533`,
    2615: `1534`,
    2616: `1534`,
    2617: `1535`,
    2618: `1535`,
    2619: `1536`,
    262: `57`,
    2620: `1536`,
    2621: `1536`,
    2622: `1538`,
    2623: `1538`,
    2624: `1539`,
    2625: `1539`,
    2626: `1540`,
    2627: `1541`,
    2628: `1543`,
    2629: `1543`,
    263: `57`,
    2630: `1543`,
    2631: `1545`,
    2632: `1545`,
    2633: `1546`,
    2634: `1547`,
    2635: `1547`,
    2636: `1548`,
    2637: `1549`,
    2638: `1551`,
    2639: `1552`,
    264: `58`,
    2640: `1552`,
    2641: `1553`,
    2642: `1553`,
    2643: `1554`,
    2644: `1554`,
    2645: `1554`,
    2646: `1555`,
    2647: `1555`,
    2648: `1555`,
    2649: `1557`,
    265: `59`,
    2650: `1558`,
    2651: `1559`,
    2652: `1560`,
    2653: `1561`,
    2654: `1563`,
    2655: `1564`,
    2656: `1564`,
    2657: `1565`,
    2658: `1566`,
    2659: `1566`,
    266: `61`,
    2660: `1567`,
    2661: `1567`,
    2662: `1568`,
    2663: `1568`,
    2664: `1569`,
    2665: `1570`,
    2666: `1572`,
    2667: `1572`,
    2668: `1572`,
    2669: `1574`,
    267: `61`,
    2670: `1574`,
    2671: `1574`,
    2672: `1576`,
    2673: `1576`,
    2674: `1577`,
    2675: `1577`,
    2676: `1577`,
    2677: `1578`,
    2678: `1578`,
    2679: `1579`,
    268: `62`,
    2680: `1579`,
    2681: `1579`,
    2682: `1581`,
    2683: `1581`,
    2684: `1581`,
    2685: `1583`,
    2686: `1584`,
    2687: `1586`,
    2688: `1587`,
    2689: `1588`,
    269: `62`,
    2690: `1589`,
    2691: `1589`,
    2692: `1590`,
    2693: `1590`,
    2694: `1591`,
    2695: `1591`,
    2696: `1591`,
    2697: `1592`,
    2698: `1594`,
    2699: `1595`,
    27: `2`,
    270: `62`,
    2700: `1596`,
    2701: `1596`,
    2702: `1596`,
    2703: `1597`,
    2704: `1598`,
    2705: `1598`,
    2706: `1599`,
    2707: `1599`,
    2708: `1599`,
    2709: `1600`,
    271: `63`,
    2710: `1602`,
    2711: `1603`,
    2712: `1604`,
    2713: `1605`,
    2714: `1605`,
    2715: `1605`,
    2716: `1606`,
    2717: `1606`,
    2718: `1607`,
    2719: `1608`,
    272: `63`,
    2720: `1609`,
    2721: `1611`,
    2722: `1612`,
    2723: `1612`,
    2724: `1612`,
    2725: `1613`,
    2726: `1613`,
    2727: `1614`,
    2728: `1615`,
    2729: `1615`,
    273: `64`,
    2730: `1615`,
    2731: `1616`,
    2732: `1616`,
    2733: `1617`,
    2734: `1618`,
    2735: `1618`,
    2736: `1619`,
    2737: `1620`,
    2738: `1620`,
    2739: `1621`,
    274: `65`,
    2740: `1622`,
    2741: `1622`,
    2742: `1623`,
    2743: `1624`,
    2744: `1624`,
    2745: `1625`,
    2746: `1626`,
    2747: `1626`,
    2748: `1626`,
    2749: `1627`,
    275: `66`,
    2750: `1628`,
    2751: `1628`,
    2752: `1629`,
    2753: `1630`,
    2754: `1630`,
    2755: `1630`,
    2756: `1631`,
    2757: `1631`,
    2758: `1632`,
    2759: `1633`,
    276: `66`,
    2760: `1633`,
    2761: `1634`,
    2762: `1635`,
    2763: `1635`,
    2764: `1636`,
    2765: `1637`,
    2766: `1637`,
    2767: `1638`,
    2768: `1639`,
    2769: `1639`,
    277: `66`,
    2770: `1640`,
    2771: `1641`,
    2772: `1641`,
    2773: `1642`,
    2774: `1643`,
    2775: `1643`,
    2776: `1644`,
    2777: `1645`,
    2778: `1645`,
    2779: `1646`,
    278: `66`,
    2780: `1647`,
    2781: `1647`,
    2782: `1648`,
    2783: `1649`,
    2784: `1649`,
    2785: `1649`,
    2786: `1650`,
    2787: `1651`,
    2788: `1651`,
    2789: `1652`,
    279: `66`,
    2790: `1652`,
    2791: `1652`,
    2792: `1653`,
    2793: `1654`,
    2794: `1654`,
    2795: `1655`,
    2796: `1657`,
    2797: `1658`,
    2798: `1659`,
    2799: `1660`,
    28: `2`,
    280: `66`,
    2800: `1660`,
    2801: `1660`,
    2802: `1661`,
    2803: `1661`,
    2804: `1662`,
    2805: `1662`,
    2806: `1662`,
    2807: `1663`,
    2808: `1663`,
    2809: `1663`,
    281: `66`,
    2810: `1665`,
    2811: `1666`,
    2812: `1666`,
    2813: `1666`,
    2814: `1667`,
    2815: `1668`,
    2816: `1669`,
    2817: `1670`,
    2818: `1671`,
    2819: `1673`,
    282: `66`,
    2820: `1674`,
    2821: `1674`,
    2822: `1674`,
    2823: `1676`,
    2824: `1677`,
    2825: `1678`,
    2826: `1678`,
    2827: `1679`,
    2828: `1681`,
    2829: `1681`,
    283: `66`,
    2830: `1682`,
    2831: `1683`,
    2832: `1683`,
    2833: `1684`,
    2834: `1687`,
    2835: `1687`,
    2836: `1688`,
    2837: `1688`,
    2838: `1689`,
    2839: `1690`,
    284: `66`,
    2840: `1691`,
    2841: `1692`,
    2842: `1692`,
    2843: `1693`,
    2844: `1694`,
    2845: `1694`,
    2846: `1695`,
    2847: `1695`,
    2848: `1696`,
    2849: `1696`,
    285: `66`,
    2850: `1697`,
    2851: `1698`,
    2852: `1699`,
    2853: `1699`,
    2854: `1700`,
    2855: `1701`,
    2856: `1702`,
    2857: `1703`,
    2858: `1703`,
    2859: `1704`,
    286: `66`,
    2860: `1705`,
    2861: `1706`,
    2862: `1708`,
    2863: `1709`,
    2864: `1709`,
    2865: `1710`,
    2866: `1712`,
    2867: `1713`,
    2868: `1714`,
    2869: `1715`,
    287: `66`,
    2870: `1716`,
    2871: `1716`,
    2872: `1717`,
    2873: `1718`,
    2874: `1719`,
    2875: `1720`,
    2876: `1722`,
    2877: `1722`,
    2878: `1723`,
    2879: `1723`,
    288: `66`,
    2880: `1724`,
    2881: `1725`,
    2882: `1726`,
    2883: `1726`,
    2884: `1726`,
    2885: `1727`,
    2886: `1727`,
    2887: `1727`,
    2888: `1729`,
    2889: `1729`,
    289: `66`,
    2890: `1730`,
    2891: `1731`,
    2892: `1731`,
    2893: `1732`,
    29: `2`,
    290: `66`,
    291: `66`,
    292: `66`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T16","name":"v13289","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_235","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_235","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_235","type":"tuple"},{"internalType":"bool","name":"_User_optin0_235","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4685","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5131","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5584","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6027","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6469","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6945","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7416","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7936","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v13240","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v13246","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13253","type":"address"},{"internalType":"uint256","name":"v13254","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13264","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13272","type":"address"},{"internalType":"address payable","name":"v13273","type":"address"},{"internalType":"uint256","name":"v13274","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13200","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13207","type":"address"},{"internalType":"address payable","name":"v13208","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13212","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatoinToAllUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalFundsDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13228","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v13233","type":"address"},{"internalType":"address payable","name":"v13234","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v13281","type":"uint256"},{"internalType":"address payable","name":"v13282","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_235","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_235","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_235","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_235","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_235","type":"tuple"},{"internalType":"bool","name":"_User_optin0_235","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v13292","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62005bfc38819003918201601f19168301916001600160401b038311848410176200060a57808492604094855283398101031262000775576020604051916200004c836200077a565b80518352015161ffff19811681036200077557602082015260008055436003556040516102a081016001600160401b038111828210176200060a57600091610280916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015201526040519081606081011060018060401b036060840111176200060a576060820160405262000145606083016200077a565b60006060830152600060808301526060820182526200016362000796565b602083015262000172620007c6565b604083015260ff600454166200075c577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a1805180159081156200074f575b50156200073657346200071d5760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152600060e060408401510152600061010060408401510152604051918260a081011060018060401b0360a0850111176200060a5760409060a084018252600084526000602085015262000298620007c6565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b036020830111176200060a5760208181016040908152600083528301510151156200062057506040516001600160401b036101808201908111908211176200060a5780610180610160920160405260008152600060208201526000604082015260006060820152600060808201526200034f62000796565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c081015161012084015260e0810151610140840152610100810151828401526101208101516101808401526101408101516101a084015201516101c08201526101c081526101e0810181811060018060401b038211176200060a5760405280516001600160401b0381116200060a57620004fa60025462000826565b601f8111620005bc575b50602091601f8211600114620005525791819260009262000546575b50508160011b916000199060031b1c1916176002555b60405161535f90816200087d8239f35b01519050388062000520565b601f19821692600260005260206000209160005b858110620005a35750836001951062000589575b505050811b0160025562000536565b015160001960f88460031b161c191690553880806200057a565b9192602060018192868501518155019401920162000566565b6002600052620005f89060008051602062005bdc833981519152601f840160051c81019160208510620005ff575b601f0160051c019062000863565b3862000504565b9091508190620005ea565b634e487b7160e01b600052604160045260246000fd5b60018060a01b0360008080808487511660808801519082821562000713575bf115620006fd576000809392819392829347809352511682821562000709575bf115620006fd576000805560006001556200067c60025462000826565b806200068a575b5062000536565b601f8111600114620006a4575060006002555b3862000683565b6002600052620006ec90601f0160051c60008051602062005bdc833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000863565b60006020812081600255556200069d565b6040513d6000823e3d90fd5b506108fc6200065f565b506108fc6200063f565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b90506001541438620001cf565b60405163100960cb60e01b815260136004820152602490fd5b600080fd5b604081019081106001600160401b038211176200060a57604052565b60405190620007a5826200077a565b6000602083604051620007b8816200077a565b838152838382015281520152565b6040519061012082016001600160401b038111838210176200060a5760405281610100600091828152826020820152620007ff62000796565b60408201528260608201528260808201528260a08201528260c08201528260e08201520152565b90600182811c9216801562000858575b60208310146200084257565b634e487b7160e01b600052602260045260246000fd5b91607f169162000836565b8181106200086f575050565b600081556001016200086356fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610eed5780631548a30d14610dcc5780631e93b0f114610dad5780632860516214610d6057806336e56ea514610cff5780633702d0ce14610cc35780634ab9f8b314610c6d578063523df4f614610c0a578063544774a914610bb057806355c42a9514610b70578063582523cd14610ac9578063672422c714610a7b5780637462353514610a3f57806374ecfa441461085c57806374f16ec9146107c85780637a2b54dc146107855780637f0595e21461071e57806383230757146106ff578063883513de146106b357806392cf8bd514610665578063a5792424146105de578063a855bc101461052a578063ab53f2c6146104be578063b87939c71461040c578063bf7df9c3146103ba578063cd6637a81461036c578063df1a0c751461031f578063f1b1259d146101d45763f33c0dce146101685750610010565b346101d057816003193601126101d057600361018261143d565b9254036101b95760206101c084846101406101ac61019e6110e5565b868082518301019101611650565b0151928391015251908152f35b602490600e84519163100960cb60e01b8352820152fd5b5080fd5b5091346101d057806003193601126101d0576101ee610f4f565b916101f7610f6a565b9061020061143d565b9183519461020d86611007565b6001600160a01b03908116865290811660208681019182529561022e6152ce565b976003855403610308575092828692889994610240999661025e6102506110e5565b898082518301019101611650565b50511685515251168484510152838301928184515281858551015260018151926102ae855194856102928a820192836117ae565b03956102a6601f19978881018352826110c2565b519020611268565b51906102b982610f80565b6102c282610f80565b50036102ff576102f092935051906102a6845191826102e488820195866117ae565b039081018352826110c2565b01510151928391015251908152f35b505050516101ac565b602490601288519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d057600361033a61143d565b9254036103555760206101e0848460e06101ac61019e6110e5565b602490600f84519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d057600361038761143d565b9254036103a35760206101a084846101006101ac61019e6110e5565b602490600d84519163100960cb60e01b8352820152fd5b508290346104085760203660031901126104085735916001600160a01b038316830361040557506103f6610401926103f0611190565b506113ec565b905191829182610fa0565b0390f35b80fd5b8280fd5b50903461040557602036600319011261040557610427610f4f565b61042f61143d565b9260038354036104a7576020610220868681878761045c61044e6110e5565b888082518301019101611650565b506001600160a01b0316906001610472836111af565b5161047c81610f80565b61048581610f80565b0361049c57506101ac906111af565b015251908152f35b915050928391610494565b602490601186519163100960cb60e01b8352820152fd5b8284346101d057816003193601126101d05781546104da6110e5565b91805193849283526020828185015284518093850152815b83811061051357505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104f2565b5091908160031936011261040557610260906105d3610547610f6a565b9461055061143d565b92839186519061055f82611007565b3581526001600160a01b03978816602082810191825288519099909161058483611007565b895161058f81611007565b858152858c82015283528a8301936105a56114e7565b8552518351525116898251015260068251525160e0825101526105c66115af565b91825251878201526117d1565b015115159051908152f35b50346101d05760203660031901126101d0576105f8610f4f565b90600361060361143d565b93540361064e5760206101408585600161062f8761062261044e6110e5565b50828060a01b03166113ec565b5161063981610f80565b61064281610f80565b14928391015251908152f35b602490600a85519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d057600361068061143d565b92540361069c57602061016084846101206101ac61019e6110e5565b602490600b84519163100960cb60e01b8352820152fd5b50346101d057816003193601126101d05760036106ce61143d565b9254036106e85760206101008484816101ac61019e6110e5565b602490600884519163100960cb60e01b8352820152fd5b8284346101d057816003193601126101d0576020906001549051908152f35b50346101d05760203660031901126101d057610738610f4f565b90600361074361143d565b93540361076e57602060e08585600161062f8761076161044e6110e5565b50828060a01b0316611320565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101d0576102806020926105d36107a361143d565b80926107ad6115af565b878101906007825152511515610100825101526105c66115af565b8284806003193601126101d05760606107df610f4f565b926105d36107eb61143d565b809285516107f881611007565b60209788820160018060a01b038092168352602435815288519161081b83611007565b895161082681611007565b858152858c82015283528a83019361083c6114e7565b8552511682515251898251015260028251525186825101526105c66115af565b50916101c03660031901126101d05761087361143d565b815161087e81611007565b843581526101a0366023190112610a3b578251946101208601906001600160401b03821187831017610a28575083526024356008811015610a2457855260209485604319360112610a245783516108d481611038565b6001600160a01b03906044358281168103610a205781528783015286606319360112610a1857845161090581611038565b60643581528583015284608319360112610a1857845161092481611007565b6084358281168103610a2057815260a43588820152606083015260c4358015158103610a1c5760808301528660e319360112610a1857845161096581611038565b60e4358281168103610a2057815260a0830152606036610103190112610a1857845161099081611053565b610104358281168103610a20578152610124358281168103610a205788820152610144358682015260c08301528461016319360112610a18578451906109d582611007565b610164358252610184359081168103610a1c578782015260e08201526101a4358015158103610a185761010082015285820152610a1291906117d1565b51908152f35b8580fd5b8680fd5b8780fd5b8480fd5b634e487b7160e01b865260419052602485fd5b8380fd5b508290346104085760203660031901126104085735916001600160a01b038316830361040557506103f661040192610a75611190565b50611320565b50346101d057816003193601126101d0576003610a9661143d565b925403610ab257602061020084846101606101ac61019e6110e5565b602490601084519163100960cb60e01b8352820152fd5b828460603660031901126101d05760c06020926105d3610ae7610f4f565b91610af0610f6a565b90610af961143d565b938492610b04611190565b6001600160a01b039283168152908216898201908152604435898301908152895192939091610b3284611007565b610b3a611190565b8452818c850195610b496114e7565b8752511684515251168a8351015251888251015260058251525186825101526105c66115af565b8284816003193601126101d05760806020926105d3610b8d61143d565b8092610b976115af565b87810190600382515251151586825101526105c66115af565b5091903461040557602036600319011261040557506020610bdc608093610bd5611232565b5035611268565b91808051938051610bec81610f80565b85528381015115158486015201519081519084015201516060820152f35b60208484366003190183136104055782906105d3610c26610f4f565b610c2e61143d565b928391610c39611580565b80516001600160a01b03909216909152858101805183905290518151870152610c606115af565b91825251858201526117d1565b50829060203660031901126104085760a0906105d3602094610c8d610f4f565b90610c9661143d565b938492610ca1611580565b908151906001808a1b03169052888101918251525186825101526105c66115af565b508290346104085760203660031901126104085735916001600160a01b038316830361040557506103f661040192610cf9611190565b5061139b565b508290346104085760203660031901126104085735916001600160a01b03831683036104055750610d3a606092610d34611190565b506111af565b90808051928051610d4a81610f80565b8452602081015115156020850152015190820152f35b50346101d057816003193601126101d0576003610d7b61143d565b925403610d96576020610180848460c06101ac61019e6110e5565b602490600c84519163100960cb60e01b8352820152fd5b8284346101d057816003193601126101d0576020906003549051908152f35b508234610408578060031936011261040857610de6610f4f565b91610def610f6a565b90610df861143d565b91835194610e0586611007565b6001600160a01b039081168652908116602086810191825295610e266152ce565b936003895403610ed6575091610120969791818794610e54610e466110e5565b8c8082518301019101611650565b5051168551525116878451015286830192818451528188855101526001815192610e88855194856102928d820192836117ae565b5190610e9382610f80565b610e9c82610f80565b5003610ecd57610ebe92935051906102a6845191826102e48b820195866117ae565b01515b51928391015251908152f35b50505051610ec1565b602490600988519163100960cb60e01b8352820152fd5b5082906020366003190112610408576020926105d38392610f0c61143d565b9283918551610f1a81611007565b8651610f2581611038565b838152815288810191610f366114e7565b83523581515260018251525186825101526105c66115af565b600435906001600160a01b0382168203610f6557565b600080fd5b602435906001600160a01b0382168203610f6557565b60021115610f8a57565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610fb681610f80565b845260208101511515602085015201511515910152565b90600182811c92168015610ffd575b6020831014610fe757565b634e487b7160e01b600052602260045260246000fd5b91607f1691610fdc565b604081019081106001600160401b0382111761102257604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761102257604052565b606081019081106001600160401b0382111761102257604052565b61012081019081106001600160401b0382111761102257604052565b61018081019081106001600160401b0382111761102257604052565b6101e081019081106001600160401b0382111761102257604052565b601f909101601f19168101906001600160401b0382119082101761102257604052565b60405190600082600254916110f983610fcd565b80835260019380851690811561116f5750600114611121575b5061111f925003836110c2565b565b6002600090815260008051602061531383398151915294602093509091905b81831061115757505061111f935082010138611112565b85548884018501529485019487945091830191611140565b905061111f94506020925060ff191682840152151560051b82010138611112565b6040519061119d82611053565b60006040838281528260208201520152565b906111b8611190565b9160018060a01b03166000908082526005602052600160ff6040842054166111df81610f80565b03611227576040929350815260056020522060016040519161120083611053565b60ff815481811661121081610f80565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061123f82611053565b816000815260006020820152604080519161125983611007565b60008352600060208401520152565b611270611232565b906000908082526006602052604092600160ff858520541661129181610f80565b03611311575081526006602052818120918051926112ae84611053565b60ff81548181166112be81610f80565b865260081c1615156020850152815192838301906001600160401b038211858310176112fd575082526001810154835260020154602083015282015290565b634e487b7160e01b81526041600452602490fd5b80949350829150526020830152565b90611329611190565b9160018060a01b03166000908082526007602052600160ff60408420541661135081610f80565b03611227576040929350815260076020522060ff6040519161137183611053565b5481811661137e81610f80565b8352818160081c161515602084015260101c161515604082015290565b906113a4611190565b9160018060a01b03166000908082526008602052600160ff6040842054166113cb81610f80565b03611227576040929350815260086020522060ff6040519161137183611053565b906113f5611190565b9160018060a01b03166000908082526009602052600160ff60408420541661141c81610f80565b03611227576040929350815260096020522060ff6040519161137183611053565b604051906102a082016001600160401b0381118382101761102257604052816102806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201528261022082015282610240820152826102608201520152565b6040908151916114f68361106e565b61010083600092838252805161150b81611038565b8481526020830152805161151e81611038565b84815281830152805161153081611007565b8481528460208201526060830152836080830152805161154f81611038565b84815260a083015261155f611190565b60c08301525161156e81611007565b83815283602082015260e08201520152565b6040519061158d82611007565b8160405161159a81611038565b60008152815260206115aa6114e7565b910152565b604051906115bc82611007565b816000815260206115aa6114e7565b604051906115d882611007565b60006020836040516115e981611007565b838152838382015281520152565b604051906116048261106e565b8161010060009182815282602082015261161c6115cb565b60408201528260608201528260808201528260a08201528260c08201528260e08201520152565b51908115158203610f6557565b8091036101c08112610f65576040805192610180928385016001600160401b0381118682101761102257835281516001600160a01b0381168103610f65578552602082015161ffff1981168103610f655760208601528282015183860152606082015160608601526116c460808301611643565b6080860152609f190160608112610f6557828051916116e283611007565b12610f65576101a092516116f581611007565b60a0830151815260c08301516020820152815261171460e08301611643565b602082015260a08501526101008082015160c0860152610120938483015160e08701526101409182840151908701526101609485840151908701528201519085015201519082015290565b516008811015610f8a5790565b6040519060a082016001600160401b0381118382101761102257604052600060808382815282602082015261179f6115f7565b60408201528260608201520152565b81516001600160a01b039081168252602092830151169181019190915260400190565b60405192919061040084016001600160401b0381118582101761102257806040526117fb81611038565b6000815284526118096115f7565b602085015260405161181a81611038565b60008152604085015261182b6115f7565b606085015260405161183c81611007565b600081526000602082015260808501526118546115f7565b60a08501526118616115f7565b60c085015260405161187281611038565b6000815260e08501526118836115f7565b610100850152611891611190565b6101208501526000610140850152600061016085015260006101808501526040516118bb81611007565b60008152600060208201526101a08501526040516118d881611007565b60008152600060208201526101c08501526040516118f581611007565b60008152600060208201526101e085015260405161191281611007565b600081526000602082015261020085015261192b6115f7565b61022085015260405161193d81611007565b6000815260006020820152610240850152600061026085015260405161196281611007565b600081526000602082015261028085015260405161197f81611007565b60008152600060208201526102a085015260405161199c81611007565b60008152600060208201526102c08501526040516119b981611007565b60008152600060208201526102e08501526119d2611190565b61030085015260006103208501526119e86115f7565b6103408501526119f66115f7565b6103608501526000610380850152611a0c6115f7565b6103a0850152611a1a6115f7565b6103c0850152611a286115f7565b6103e085015260036000540361525257611a52611a436110e5565b60208082518301019101611650565b9060ff60045416615239576040513381528151602082015260208201518051916008831015610f8a576101006101e0927f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac294604084015260018060a01b0360208201515116606084015260408101515160808401526020606082015160018060a01b0381511660a0860152015160c08401526080810151151560e084015260018060a01b0360a0820151511682840152604060c082015160018060a01b0381511661012086015260018060a01b03602082015116610140860152015161016084015260e08101518051610180850152602060018060a01b03910151166101a0840152015115156101c0820152a18051801590811561522d575b501561521457611b7e602082015161175f565b6008811015610f8a576120e357602090810151015184528051336001600160a01b03909116036120bf5760015b156120a6573461208d576000602060409360018060a01b0387515116835260078252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557f78b360fb9aba52a2c51956053c7f071c6dbdc2972f82ad96034a85b94e62cabf828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c06020860151015261014081015160e060208601510152610160810151610100602086015101526020611ca961176c565b82516001600160a01b031681528183015161ffff1916828201529401518285015243606085015201516080830152604051611ce381611038565b6000815260408301516020015115611fb55750610160604051611d058161108a565b6000815260006020820152600060408201526000606082015260006080820152611d2d6115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252611ea9826110a6565b81516001600160401b03811161102257611ec4600254610fcd565b601f8111611f6d575b50602092601f8211600114611f0a5792819293600092611eff575b50508160011b916000199060031b1c191617600255565b015190503880611ee8565b601f19821693600260005260206000209160005b868110611f555750836001959610611f3c575b505050811b01600255565b015160001960f88460031b161c19169055388080611f31565b91926020600181928685015181550194019201611f1e565b6002600052611fa590600080516020615313833981519152601f840160051c81019160208510611fab575b601f0160051c01906152b7565b38611ecd565b9091508190611f98565b9091600080808060018060a01b03855116608086015190828215612084575bf11561206f574791829052516000918291829182916001600160a01b031682821561207b575bf11561206f57600080556000600155612014600254610fcd565b8061201c5750565b601f811160011461202f57506000600255565b600260005261206290601f0160051c600080516020615313833981519152016000805160206153338339815191526152b7565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611ffa565b506108fc611fd4565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60016120ca33611320565b516120d481610f80565b6120dd81610f80565b14611bab565b6120f460208296949396015161175f565b6008811015610f8a576001036125445760200151604090810151908301528351336001600160a01b03909116036125205760015b156125075760408201515134036124ee5760406000917fea6d8e86a4d28884b3b4f41d2b38e02205da1b208d4dd5113141da28eb25502060208351858152a1015261217d606084015160408301515190615296565b6060820151526080830151151560206060830151015260a083015160406060830151015260c083015160608083015101526121c260e084015160408301515190615296565b6060820180516080019190915261010084810151825160a00152610120850151825160c00152610140850151825160e001526101608501519151015260408061220961176c565b85516001600160a01b0316815260208087015161ffff1916908201526060848101518383015243908201529401519101515101608083015260405161224d81611038565b6000815260408301516020015115611fb5575061016060405161226f8161108a565b60008152600060208201526000604082015260006060820152600060808201526122976115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252612413826110a6565b81516001600160401b0381116110225761242e600254610fcd565b601f81116124b1575b50602092601f82116001146124685792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106124995750836001959610611f3c57505050811b01600255565b9192602060018192868501518155019401920161247c565b60026000526124e890600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b38612437565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b600161252b33611320565b5161253581610f80565b61253e81610f80565b14612128565b61255560208296939496015161175f565b6008811015610f8a576002036129ec57602001516060015160808501528051336001600160a01b03909116036129c85760015b156129af57602060808501510151604082015110612996573461297d576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557fd910b0c6d2e2464628951742a231cf50df5a9a1368e7343d122fa250c34ef5fa60208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015261014081015160e060a0860151015261016081015161010060a0860151015260a06126a261176c565b94600180831b03835116865261ffff196020840151166020870152015182850152436060850152015160808301526040516126dc81611038565b6000815260408301516020015115611fb557506101606040516126fe8161108a565b60008152600060208201526000604082015260006060820152600060808201526127266115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c082526128a2826110a6565b81516001600160401b038111611022576128bd600254610fcd565b601f8111612940575b50602092601f82116001146128f75792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106129285750836001959610611f3c57505050811b01600255565b9192602060018192868501518155019401920161290b565b600260005261297790600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b386128c6565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60016129d333611320565b516129dd81610f80565b6129e681610f80565b14612588565b6129f9602082015161175f565b6008811015610f8a57600303612e0a57508051336001600160a01b0390911603612df15760c0810151612dd85734612dbf57600060806040937f7654274b6fe31ee2371e7593cedbb0b6661996d8968718f58f416b608fae7f3e60208651858152a10152606081015160c0850151526000602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015261014081015160e060c0860151015261016081015161010060c0860151015260c0612ae261176c565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612b1e81611038565b6000815260408301516020015115611fb55750610160604051612b408161108a565b6000815260006020820152600060408201526000606082015260006080820152612b686115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252612ce4826110a6565b81516001600160401b03811161102257612cff600254610fcd565b601f8111612d82575b50602092601f8211600114612d395792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612d6a5750836001959610611f3c57505050811b01600255565b91926020600181928685015181550194019201612d4d565b6002600052612db990600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b38612d08565b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b612e17602082015161175f565b6008811015610f8a57600403613235576020015160a0015160e085015280516001600160a01b0316330361321c573461320557600060a0604093600180831b0360e088015151168352600760205282858120557f7fff8c7ffeeb0e00a33c4f9286ceb020ba59ee5fecbae8dd5c10fd1ccd39a28660208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c0610100860151015261014081015160e06101008601510152610160810151610100808601510152610100612f2861176c565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612f6481611038565b6000815260408301516020015115611fb55750610160604051612f868161108a565b6000815260006020820152600060408201526000606082015260006080820152612fae6115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c0825261312a826110a6565b81516001600160401b03811161102257613145600254610fcd565b601f81116131c8575b50602092601f821160011461317f5792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106131b05750836001959610611f3c57505050811b01600255565b91926020600181928685015181550194019201613193565b60026000526131ff90600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b3861314e565b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b613245602082969396015161175f565b6008811015610f8a576005036139de5760c06020613277920151015180610120840152604080870151910151906152aa565b5060406101208201510151604085015110156139c5576132a560c08501516040610120840151015190615296565b806101408301526040850151106139ac57610120810151516001906132d2906001600160a01b03166113ec565b516132dc81610f80565b6132e581610f80565b036139935760408401516040610120830151019081510161016083015251340361397a5761332261016082015160406101208401510151906152aa565b61018082015260406101208201510151610160820151101561396157610160810151610140820151116139485761018081015160c08501511161392f57600160c061016093828060a01b0361012085015151166101a085015152828060a01b03602061012086015101511660206101a0860151015260006101c085015152600060206101c08601510152826133e56133cb6133d96101a0880151604051928391602083016117ae565b03601f1981018352826110c2565b60208151910120611268565b516133ef81610f80565b6133f881610f80565b0361392457604061341c6101a086015182516102a6816133cb6020820194856117ae565b01515b6101e0850181815290516102008601515251602001516101208501516040015161344891615296565b602061020086015101526101a084015160405161346d816133cb6020820194856117ae565b5190206000526006602052604060002060ff199084828254161790556102008501516101a08601516040516134aa816133cb6020820194856117ae565b5190206000526006602052600260206040600020928051888501550151910155838060a01b03610120860151511660005260056020528360406000209182541617905582613504818060a01b0361012087015151166111af565b5161350e81610f80565b61351781610f80565b0361391a5761354a6040613537858060a01b0361012088015151166111af565b01515b6040610120870151015190615296565b838060a01b036101208601515116600052600560205283604060002001557f806e678a160610fda014b0778d57a1db5f80c2f537b717a5e9687af3ba7e2a906020604051858152a101526135ac60608501516040610120840151015190615296565b61022082015152608084015115156020610220830151015260a0840151604061022083015101526101408101516060610220830151015260e08401516080610220830151015261010084015160a0610220830151015261012084015160c0610220830151015261014084015160e0610220830151015281840151610100610220830151015261363961176c565b9360018060a01b038151168552602061ffff1991015116602085015261022081015160408501524360608501520151608083015260405161367981611038565b6000815260408301516020015115611fb5575061016060405161369b8161108a565b60008152600060208201526000604082015260006060820152600060808201526136c36115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c0825261383f826110a6565b81516001600160401b0381116110225761385a600254610fcd565b601f81116138dd575b50602092601f82116001146138945792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106138c55750836001959610611f3c57505050811b01600255565b919260206001819286850151815501940192016138a8565b600260005261391490600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b38613863565b61354a600061353a565b6101c084015161341f565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b60405163100960cb60e01b8152602b6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b6139ee602082949394015161175f565b6008811015610f8a57600603614d02576020015160e001516102408301526001613a17336111af565b51613a2181610f80565b613a2a81610f80565b03614cfb576040613a3a336111af565b01515b61026083015261024082015151604085015110614ce2576102608201516102408301515111614cc95734614cb0576102606001913361028085015152828060a01b0360206102408601510151166020610280860151015260006102a085015152600060206102a0860151015282613ac86133cb6133d9610280880151604051928391602083016117ae565b51613ad281610f80565b613adb81610f80565b03614ca257613b1a6040613b0261028087015182516102a6816133cb6020820194856117ae565b01515b806102c0870152516102408601515190615296565b6102e085015152613b3b60206102c0860151015161024086015151906152aa565b60206102e08601510152610280840151604051613b60816133cb6020820194856117ae565b519020600052600660205260406000208360ff198254161790556102e0840151610280850151604051613b9b816133cb6020820194856117ae565b51902060005260066020526002602060406000209280518785015501519101557f6ed0b300e7321a1da4941c5e2be3d11158388e24991fd736ca8675a2e003e21b6020604051858152a101523361030082015152610240810151516020610300830151015261ffff19602084015116604061030083015101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2360606103008301516040519060018060a01b03815116825260208101516020830152604061ffff19910151166040820152a16001613c723361139b565b51613c7c81610f80565b613c8581610f80565b036144905760008080806040870151610240860151908151900361038087015251818115614487575b3390f11561206f5780610260610380920151156000146140925733600052600560205260006001604082208281550155613cf3606085015161024083015151906152aa565b6103a0820151526080840151151560206103a0830151015260a084015160406103a08301510152613d2f60c085015161024083015151906152aa565b60606103a0830151015260e084015160806103a08301510152613d5e6101008501516102408301515190615296565b60a06103a0830151015261012084015160c06103a08301510152613d8661014085015161526b565b60e06103a08301510152613d9e61016085015161526b565b6101006103a08301510152613db161176c565b9360018060a01b038151168552602061ffff199101511660208501526103a0810151604085015243606085015201516080830152604051613df181611038565b6000815260408301516020015115611fb55750610160604051613e138161108a565b6000815260006020820152600060408201526000606082015260006080820152613e3b6115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252613fb7826110a6565b81516001600160401b03811161102257613fd2600254610fcd565b601f8111614055575b50602092601f821160011461400c5792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061403d5750836001959610611f3c57505050811b01600255565b91926020600181928685015181550194019201614020565b600260005261408c90600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b38613fdb565b3360005260056020526040600020600160ff198254161790556140c161026082015161024083015151906152aa565b3360005260056020526001604060002001556140e8606085015161024083015151906152aa565b6103c0820151526080840151151560206103c0830151015260a084015160406103c0830151015261412460c085015161024083015151906152aa565b60606103c0830151015260e084015160806103c083015101526141536101008501516102408301515190615296565b60a06103c0830151015261012084015160c06103c0830151015261417b61014085015161526b565b60e06103c0830151015261419361016085015161526b565b6101006103c083015101526141a661176c565b9360018060a01b038151168552602061ffff199101511660208501526103c08101516040850152436060850152015160808301526040516141e681611038565b6000815260408301516020015115611fb557506101606040516142088161108a565b60008152600060208201526000604082015260006060820152600060808201526142306115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c082526143ac826110a6565b81516001600160401b038111611022576143c7600254610fcd565b601f811161444a575b50602092601f82116001146144015792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106144325750836001959610611f3c57505050811b01600255565b91926020600181928685015181550194019201614415565b600260005261448190600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b386143d0565b506108fc613cae565b33600090815260086020526040808220805462ff00ff19166001179055840151610240830151805190910361032084015251819081908190818115614c99575b3390f11561206f5780610260610320920151156000146148ac5733600052600560205260006001604082208281550155614515606085015161024083015151906152aa565b61034082015152608084015115156020610340830151015260a08401516040610340830151015261455160c085015161024083015151906152aa565b6060610340830151015260e0840151608061034083015101526145806101008501516102408301515190615296565b60a0610340830151015261012084015160c061034083015101526145a861014085015161526b565b60e0610340830151015261016084015161010061034083015101526145cb61176c565b9360018060a01b038151168552602061ffff1991015116602085015261034081015160408501524360608501520151608083015260405161460b81611038565b6000815260408301516020015115611fb5575061016060405161462d8161108a565b60008152600060208201526000604082015260006060820152600060808201526146556115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c082526147d1826110a6565b81516001600160401b038111611022576147ec600254610fcd565b601f811161486f575b50602092601f82116001146148265792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106148575750836001959610611f3c57505050811b01600255565b9192602060018192868501518155019401920161483a565b60026000526148a690600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b386147f5565b3360005260056020526040600020600160ff198254161790556148db61026082015161024083015151906152aa565b336000526005602052600160406000200155614902606085015161024083015151906152aa565b61036082015152608084015115156020610360830151015260a08401516040610360830151015261493e60c085015161024083015151906152aa565b6060610360830151015260e08401516080610360830151015261496d6101008501516102408301515190615296565b60a0610360830151015261012084015160c0610360830151015261499561014085015161526b565b60e0610360830151015261016084015161010061036083015101526149b861176c565b9360018060a01b038151168552602061ffff199101511660208501526103608101516040850152436060850152015160808301526040516149f881611038565b6000815260408301516020015115611fb55750610160604051614a1a8161108a565b6000815260006020820152600060408201526000606082015260006080820152614a426115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252614bbe826110a6565b81516001600160401b03811161102257614bd9600254610fcd565b601f8111614c5c575b50602092601f8211600114614c135792819293600092611eff5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614c445750836001959610611f3c57505050811b01600255565b91926020600181928685015181550194019201614c27565b6002600052614c9390600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b38614be2565b506108fc6144d0565b613b1a6102a0850151613b05565b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b6000613a3d565b6020614d139195929395015161175f565b6008811015610f8a57600714614d2a575b50509050565b346151fb57336000908152600960209081526040808320805462ff00ff19166001179055805183815290946102809290917f92598ae828dbfc770554a77310cbf7c60d2b136ff1ded8d645b038ee9c03e21d9190a1015260608101516103e0850151526080810151151560206103e0860151015260a0810151826103e0860151015260c081015160606103e0860151015260e081015160806103e0860151015261010081015160a06103e0860151015261012081015160c06103e0860151015261014081015160e06103e086015101526101608101516101006103e086015101526103e0614e1661176c565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051614e5281611038565b60008152604083015160200151156151235750610160604051614e748161108a565b6000815260006020820152600060408201526000606082015260006080820152614e9c6115cb565b60a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152600082820152610100604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015160c0850152608082820151015160e085015260a08282015101518385015260c082820151015161012085015260e0828201510151610140850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c081015161012085015260e0810151610140850152610100810151828501526101208101516101808501526101408101516101a085015201516101c08301526101c08252615018826110a6565b81516001600160401b03811161102257615033600254610fcd565b601f81116150e6575b50602092601f82116001146150805792819293600092615075575b50508160011b916000199060031b1c1916176002555b803880614d24565b015190503880615057565b601f19821693600260005260206000209160005b8681106150ce57508360019596106150b5575b505050811b0160025561506d565b015160001960f88460031b161c191690553880806150a7565b91926020600181928685015181550194019201615094565b600260005261511d90600080516020615313833981519152601f840160051c81019160208510611fab57601f0160051c01906152b7565b3861503c565b9091600080808060018060a01b038551166080860151908282156151f2575bf11561206f574791829052516000918291829182916001600160a01b03168282156151e9575bf11561206f57600080556000600155615182600254610fcd565b8061518e575b5061506d565b601f81116001146151a6575060006002555b38615188565b60026000526151d990601f0160051c600080516020615313833981519152016000805160206153338339815191526152b7565b60006020812081600255556151a0565b506108fc615168565b506108fc615142565b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b90506001541438611b6b565b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b906001820191828111615280578210610f6557565b634e487b7160e01b600052601160045260246000fd5b9190820191828111615280578210610f6557565b9081039081116152805790565b8181106152c2575050565b600081556001016152b7565b604051906152db82611007565b816040516152e881611007565b6000815260006020820152815260206040519161530483611007565b60008352600082840152015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acfa164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 23548,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index_v2.rsh:356:11:after expr stmt semicolon',
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
