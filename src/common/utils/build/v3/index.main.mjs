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
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Object({
    claimed: ctc2,
    rewards: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc6,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc10;
  
  const map2_ctc = ctc11;
  
  const map3_ctc = ctc11;
  
  const map4_ctc = ctc11;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async (_v3334 ) => {
          const v3334 = stdlib.protect(ctc0, _v3334, null);
        
        const v3335 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v3334, ctc6), null);
        const v3336 = {
          None: 0,
          Some: 1
          }[v3335[0]];
        const v3337 = stdlib.eq(v3336, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3337;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async () => {
        
        
        return v3303;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async (_v3338 ) => {
          const v3338 = stdlib.protect(ctc0, _v3338, null);
        
        const v3339 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v3338, ctc6), null);
        const v3340 = {
          None: 0,
          Some: 1
          }[v3339[0]];
        const v3341 = stdlib.eq(v3340, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3341;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async () => {
        
        
        return v3328;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async () => {
        
        
        return v3327;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async () => {
        
        
        return v3329;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async () => {
        
        
        return v3330;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      return (await ((async (_v3331 ) => {
          const v3331 = stdlib.protect(ctc0, _v3331, null);
        
        const v3332 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3331, ctc2), null);
        const v3333 = stdlib.fromSome(v3332, stdlib.checkedBigNumberify('./index.rsh:101:60:decimal', stdlib.UInt_max, '0'));
        
        return v3333;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = svs;
      stdlib.assert(false, 'illegal view')
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
    Admin_addAdmin0_133: ctc11,
    Admin_deposit0_133: ctc12,
    Admin_editUserReward0_133: ctc13,
    Admin_endContractAndTransfer0_133: ctc14,
    Admin_revokeAdmin0_133: ctc11,
    Admin_setReward0_133: ctc16,
    User_claim0_133: ctc17,
    User_optin0_133: ctc14
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3411 = ctc.selfAddress();
  const v3413 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:183:34:application call to [unknown function] (defined at: ./index.rsh:183:34:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_addAdmin0_133" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v3416 = stdlib.addressEq(v3411, v3290);
  const v3417 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3411, ctc0), null);
  const v3418 = {
    None: 0,
    Some: 1
    }[v3417[0]];
  const v3419 = stdlib.eq(v3418, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3420 = v3416 ? true : v3419;
  stdlib.assert(v3420, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:34:application call to [unknown function] (defined at: ./index.rsh:183:34:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_addAdmin0_133" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v3427 = ['Admin_addAdmin0_133', v3413];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3427],
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
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3540, ctc0), null);
          ;
          const v3607 = v3544[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v3607, ctc0, null);
          const v3616 = null;
          const v3617 = await txn1.getOutput('Admin_addAdmin', 'v3616', ctc0, v3616);
          
          const v3630 = {
            bal: v3324,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v3327,
            total_rewards_allcoated: v3328,
            total_users_claim: v3329,
            usersNo: v3330
            };
          const v8246 = v3303;
          const v8247 = v3630.keepGoing;
          if (v8247) {
            const v8248 = v3630.bal;
            const v8250 = v3630.percent;
            const v8251 = v3630.total_amount_claimed;
            const v8252 = v3630.total_rewards_allcoated;
            const v8253 = v3630.total_users_claim;
            const v8254 = v3630.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8259 = stdlib.sub(v3303, v3303);
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
              tok: undefined /* Nothing */
              });
            const v8260 = (stdlib.le(await ctc.getBalance(), v8259) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8259));
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
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
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          
          break;
          }
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          
          break;
          }
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          
          break;
          }
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          
          break;
          }
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      undefined /* setApiDetails */;
      const v3550 = stdlib.addressEq(v3540, v3290);
      const v3551 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3540, ctc0), null);
      const v3552 = {
        None: 0,
        Some: 1
        }[v3551[0]];
      const v3553 = stdlib.eq(v3552, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3554 = v3550 ? true : v3553;
      stdlib.assert(v3554, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:34:application call to [unknown function] (defined at: ./index.rsh:183:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:183:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v3607 = v3544[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v3607, ctc0, null);
      const v3616 = null;
      const v3617 = await txn1.getOutput('Admin_addAdmin', 'v3616', ctc0, v3616);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v3544, v3617), {
          at: './index.rsh:183:11:application',
          fs: ['at ./index.rsh:183:11:application call to [unknown function] (defined at: ./index.rsh:183:11:function exp)', 'at ./index.rsh:192:14:application call to "ret" (defined at: ./index.rsh:190:15:function exp)', 'at ./index.rsh:190:15:application call to [unknown function] (defined at: ./index.rsh:190:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v3630 = {
        bal: v3324,
        keepGoing: v3325,
        percent: v3326,
        total_amount_claimed: v3327,
        total_rewards_allcoated: v3328,
        total_users_claim: v3329,
        usersNo: v3330
        };
      const v8246 = v3303;
      const v8247 = v3630.keepGoing;
      if (v8247) {
        const v8248 = v3630.bal;
        const v8250 = v3630.percent;
        const v8251 = v3630.total_amount_claimed;
        const v8252 = v3630.total_rewards_allcoated;
        const v8253 = v3630.total_users_claim;
        const v8254 = v3630.usersNo;
        return;
        }
      else {
        const v8259 = stdlib.sub(v3303, v3303);
        ;
        const v8260 = (stdlib.le(await ctc.getBalance(), v8259) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8259));
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      return;
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      return;
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      return;
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
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
    Admin_addAdmin0_133: ctc12,
    Admin_deposit0_133: ctc11,
    Admin_editUserReward0_133: ctc13,
    Admin_endContractAndTransfer0_133: ctc14,
    Admin_revokeAdmin0_133: ctc12,
    Admin_setReward0_133: ctc16,
    User_claim0_133: ctc17,
    User_optin0_133: ctc14
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3343 = ctc.selfAddress();
  const v3345 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:111:32:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_deposit0_133" (defined at: ./index.rsh:111:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v3346 = v3345[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3348 = stdlib.addressEq(v3343, v3290);
  const v3349 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3343, ctc0), null);
  const v3350 = {
    None: 0,
    Some: 1
    }[v3349[0]];
  const v3351 = stdlib.eq(v3350, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3352 = v3348 ? true : v3351;
  stdlib.assert(v3352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:32:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_deposit0_133" (defined at: ./index.rsh:111:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v3359 = ['Admin_deposit0_133', v3345];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3359],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3346, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          
          break;
          }
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v3926 = v3913[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3540, ctc0), null);
          const v3974 = stdlib.add(v3303, v3926);
          sim_r.txns.push({
            amt: v3926,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4010 = null;
          const v4011 = await txn1.getOutput('Admin_deposit', 'v4010', ctc0, v4010);
          
          const v4024 = stdlib.safeAdd(v3324, v3926);
          const v4025 = {
            bal: v4024,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v3327,
            total_rewards_allcoated: v3328,
            total_users_claim: v3329,
            usersNo: v3330
            };
          const v8416 = v3974;
          const v8417 = v4025.keepGoing;
          if (v8417) {
            const v8418 = v4025.bal;
            const v8420 = v4025.percent;
            const v8421 = v4025.total_amount_claimed;
            const v8422 = v4025.total_rewards_allcoated;
            const v8423 = v4025.total_users_claim;
            const v8424 = v4025.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8429 = stdlib.sub(v3974, v3974);
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
              tok: undefined /* Nothing */
              });
            const v8430 = (stdlib.le(await ctc.getBalance(), v8429) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8429));
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
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
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          
          break;
          }
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          
          break;
          }
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          
          break;
          }
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      return;
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      undefined /* setApiDetails */;
      const v3926 = v3913[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '0')];
      const v3927 = stdlib.addressEq(v3540, v3290);
      const v3928 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3540, ctc0), null);
      const v3929 = {
        None: 0,
        Some: 1
        }[v3928[0]];
      const v3930 = stdlib.eq(v3929, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3931 = v3927 ? true : v3930;
      stdlib.assert(v3931, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:32:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v3974 = stdlib.add(v3303, v3926);
      ;
      const v4010 = null;
      const v4011 = await txn1.getOutput('Admin_deposit', 'v4010', ctc0, v4010);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v3913, v4011), {
          at: './index.rsh:111:11:application',
          fs: ['at ./index.rsh:111:11:application call to [unknown function] (defined at: ./index.rsh:111:11:function exp)', 'at ./index.rsh:116:14:application call to "ret" (defined at: ./index.rsh:115:15:function exp)', 'at ./index.rsh:115:15:application call to [unknown function] (defined at: ./index.rsh:115:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v4024 = stdlib.safeAdd(v3324, v3926);
      const v4025 = {
        bal: v4024,
        keepGoing: v3325,
        percent: v3326,
        total_amount_claimed: v3327,
        total_rewards_allcoated: v3328,
        total_users_claim: v3329,
        usersNo: v3330
        };
      const v8416 = v3974;
      const v8417 = v4025.keepGoing;
      if (v8417) {
        const v8418 = v4025.bal;
        const v8420 = v4025.percent;
        const v8421 = v4025.total_amount_claimed;
        const v8422 = v4025.total_rewards_allcoated;
        const v8423 = v4025.total_users_claim;
        const v8424 = v4025.usersNo;
        return;
        }
      else {
        const v8429 = stdlib.sub(v3974, v3974);
        ;
        const v8430 = (stdlib.le(await ctc.getBalance(), v8429) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8429));
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      return;
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      return;
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      return;
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
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
    Admin_addAdmin0_133: ctc12,
    Admin_deposit0_133: ctc13,
    Admin_editUserReward0_133: ctc11,
    Admin_endContractAndTransfer0_133: ctc14,
    Admin_revokeAdmin0_133: ctc12,
    Admin_setReward0_133: ctc16,
    User_claim0_133: ctc17,
    User_optin0_133: ctc14
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3386 = ctc.selfAddress();
  const v3388 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:171:45:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_editUserReward0_133" (defined at: ./index.rsh:171:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v3390 = v3388[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3393 = stdlib.addressEq(v3386, v3290);
  const v3394 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3386, ctc0), null);
  const v3395 = {
    None: 0,
    Some: 1
    }[v3394[0]];
  const v3396 = stdlib.eq(v3395, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3397 = v3393 ? true : v3396;
  stdlib.assert(v3397, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:45:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_editUserReward0_133" (defined at: ./index.rsh:171:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v3400 = stdlib.le(v3390, v3303);
  stdlib.assert(v3400, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:45:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_editUserReward0_133" (defined at: ./index.rsh:171:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v3409 = ['Admin_editUserReward0_133', v3388];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3409],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:175:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          
          break;
          }
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          
          break;
          }
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v4304 = v4282[stdlib.checkedBigNumberify('./index.rsh:171:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3540, ctc0), null);
          ;
          const v4397 = v4282[stdlib.checkedBigNumberify('./index.rsh:171:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v4397, ctc1, v4304);
          const v4410 = null;
          const v4411 = await txn1.getOutput('Admin_editUserReward', 'v4410', ctc0, v4410);
          
          const v4425 = {
            bal: v3324,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v3327,
            total_rewards_allcoated: v3328,
            total_users_claim: v3329,
            usersNo: v3330
            };
          const v8586 = v3303;
          const v8587 = v4425.keepGoing;
          if (v8587) {
            const v8588 = v4425.bal;
            const v8590 = v4425.percent;
            const v8591 = v4425.total_amount_claimed;
            const v8592 = v4425.total_rewards_allcoated;
            const v8593 = v4425.total_users_claim;
            const v8594 = v4425.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8599 = stdlib.sub(v3303, v3303);
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
              tok: undefined /* Nothing */
              });
            const v8600 = (stdlib.le(await ctc.getBalance(), v8599) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8599));
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
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
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          
          break;
          }
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          
          break;
          }
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          
          break;
          }
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      return;
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      undefined /* setApiDetails */;
      const v4304 = v4282[stdlib.checkedBigNumberify('./index.rsh:171:10:spread', stdlib.UInt_max, '1')];
      const v4305 = stdlib.addressEq(v3540, v3290);
      const v4306 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3540, ctc0), null);
      const v4307 = {
        None: 0,
        Some: 1
        }[v4306[0]];
      const v4308 = stdlib.eq(v4307, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4309 = v4305 ? true : v4308;
      stdlib.assert(v4309, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:45:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v4312 = stdlib.le(v4304, v3303);
      stdlib.assert(v4312, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:45:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      const v4397 = v4282[stdlib.checkedBigNumberify('./index.rsh:171:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v4397, ctc1, v4304);
      const v4410 = null;
      const v4411 = await txn1.getOutput('Admin_editUserReward', 'v4410', ctc0, v4410);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v4282, v4411), {
          at: './index.rsh:171:11:application',
          fs: ['at ./index.rsh:171:11:application call to [unknown function] (defined at: ./index.rsh:171:11:function exp)', 'at ./index.rsh:178:14:application call to "ret" (defined at: ./index.rsh:176:15:function exp)', 'at ./index.rsh:176:15:application call to [unknown function] (defined at: ./index.rsh:176:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v4425 = {
        bal: v3324,
        keepGoing: v3325,
        percent: v3326,
        total_amount_claimed: v3327,
        total_rewards_allcoated: v3328,
        total_users_claim: v3329,
        usersNo: v3330
        };
      const v8586 = v3303;
      const v8587 = v4425.keepGoing;
      if (v8587) {
        const v8588 = v4425.bal;
        const v8590 = v4425.percent;
        const v8591 = v4425.total_amount_claimed;
        const v8592 = v4425.total_rewards_allcoated;
        const v8593 = v4425.total_users_claim;
        const v8594 = v4425.usersNo;
        return;
        }
      else {
        const v8599 = stdlib.sub(v3303, v3303);
        ;
        const v8600 = (stdlib.le(await ctc.getBalance(), v8599) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8599));
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      return;
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      return;
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      return;
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
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
    Admin_addAdmin0_133: ctc12,
    Admin_deposit0_133: ctc13,
    Admin_editUserReward0_133: ctc14,
    Admin_endContractAndTransfer0_133: ctc11,
    Admin_revokeAdmin0_133: ctc12,
    Admin_setReward0_133: ctc16,
    User_claim0_133: ctc17,
    User_optin0_133: ctc11
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3474 = ctc.selfAddress();
  const v3476 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:307:44:application call to [unknown function] (defined at: ./index.rsh:307:44:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_endContractAndTransfer0_133" (defined at: ./index.rsh:307:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v3477 = stdlib.addressEq(v3290, v3474);
  stdlib.assert(v3477, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:307:44:application call to [unknown function] (defined at: ./index.rsh:307:44:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_endContractAndTransfer0_133" (defined at: ./index.rsh:307:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v3482 = ['Admin_endContractAndTransfer0_133', v3476];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3482],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:310:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          
          break;
          }
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          
          break;
          }
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v4799 = null;
          const v4800 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4799', ctc0, v4799);
          
          const v4812 = {
            bal: v3324,
            keepGoing: false,
            percent: v3326,
            total_amount_claimed: v3327,
            total_rewards_allcoated: v3328,
            total_users_claim: v3329,
            usersNo: v3330
            };
          const v8756 = v3303;
          const v8757 = v4812.keepGoing;
          if (v8757) {
            const v8758 = v4812.bal;
            const v8760 = v4812.percent;
            const v8761 = v4812.total_amount_claimed;
            const v8762 = v4812.total_rewards_allcoated;
            const v8763 = v4812.total_users_claim;
            const v8764 = v4812.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8769 = stdlib.sub(v3303, v3303);
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
              tok: undefined /* Nothing */
              });
            const v8770 = (stdlib.le(await ctc.getBalance(), v8769) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8769));
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
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
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          
          break;
          }
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          
          break;
          }
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          
          break;
          }
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      return;
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      undefined /* setApiDetails */;
      const v4684 = stdlib.addressEq(v3290, v3540);
      stdlib.assert(v4684, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:307:44:application call to [unknown function] (defined at: ./index.rsh:307:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:307:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v4799 = null;
      const v4800 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4799', ctc0, v4799);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v4651, v4800), {
          at: './index.rsh:307:11:application',
          fs: ['at ./index.rsh:307:11:application call to [unknown function] (defined at: ./index.rsh:307:11:function exp)', 'at ./index.rsh:312:14:application call to "ret" (defined at: ./index.rsh:311:15:function exp)', 'at ./index.rsh:311:15:application call to [unknown function] (defined at: ./index.rsh:311:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v4812 = {
        bal: v3324,
        keepGoing: false,
        percent: v3326,
        total_amount_claimed: v3327,
        total_rewards_allcoated: v3328,
        total_users_claim: v3329,
        usersNo: v3330
        };
      const v8756 = v3303;
      const v8757 = v4812.keepGoing;
      if (v8757) {
        const v8758 = v4812.bal;
        const v8760 = v4812.percent;
        const v8761 = v4812.total_amount_claimed;
        const v8762 = v4812.total_rewards_allcoated;
        const v8763 = v4812.total_users_claim;
        const v8764 = v4812.usersNo;
        return;
        }
      else {
        const v8769 = stdlib.sub(v3303, v3303);
        ;
        const v8770 = (stdlib.le(await ctc.getBalance(), v8769) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8769));
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      return;
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      return;
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      return;
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
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
    Admin_addAdmin0_133: ctc11,
    Admin_deposit0_133: ctc12,
    Admin_editUserReward0_133: ctc13,
    Admin_endContractAndTransfer0_133: ctc14,
    Admin_revokeAdmin0_133: ctc11,
    Admin_setReward0_133: ctc16,
    User_claim0_133: ctc17,
    User_optin0_133: ctc14
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3429 = ctc.selfAddress();
  const v3431 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:197:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_revokeAdmin0_133" (defined at: ./index.rsh:197:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v3434 = stdlib.addressEq(v3429, v3290);
  stdlib.assert(v3434, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_revokeAdmin0_133" (defined at: ./index.rsh:197:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v3441 = ['Admin_revokeAdmin0_133', v3431];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3441],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:200:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          
          break;
          }
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          
          break;
          }
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v5184 = v5020[stdlib.checkedBigNumberify('./index.rsh:197:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v5184, ctc0, undefined /* Nothing */);
          const v5189 = null;
          const v5190 = await txn1.getOutput('Admin_revokeAdmin', 'v5189', ctc0, v5189);
          
          const v5203 = {
            bal: v3324,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v3327,
            total_rewards_allcoated: v3328,
            total_users_claim: v3329,
            usersNo: v3330
            };
          const v8926 = v3303;
          const v8927 = v5203.keepGoing;
          if (v8927) {
            const v8928 = v5203.bal;
            const v8930 = v5203.percent;
            const v8931 = v5203.total_amount_claimed;
            const v8932 = v5203.total_rewards_allcoated;
            const v8933 = v5203.total_users_claim;
            const v8934 = v5203.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8939 = stdlib.sub(v3303, v3303);
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
              tok: undefined /* Nothing */
              });
            const v8940 = (stdlib.le(await ctc.getBalance(), v8939) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8939));
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
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
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          
          break;
          }
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          
          break;
          }
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      return;
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      undefined /* setApiDetails */;
      const v5057 = stdlib.addressEq(v3540, v3290);
      stdlib.assert(v5057, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v5184 = v5020[stdlib.checkedBigNumberify('./index.rsh:197:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v5184, ctc0, undefined /* Nothing */);
      const v5189 = null;
      const v5190 = await txn1.getOutput('Admin_revokeAdmin', 'v5189', ctc0, v5189);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v5020, v5190), {
          at: './index.rsh:197:11:application',
          fs: ['at ./index.rsh:197:11:application call to [unknown function] (defined at: ./index.rsh:197:11:function exp)', 'at ./index.rsh:203:14:application call to "ret" (defined at: ./index.rsh:201:15:function exp)', 'at ./index.rsh:201:15:application call to [unknown function] (defined at: ./index.rsh:201:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5203 = {
        bal: v3324,
        keepGoing: v3325,
        percent: v3326,
        total_amount_claimed: v3327,
        total_rewards_allcoated: v3328,
        total_users_claim: v3329,
        usersNo: v3330
        };
      const v8926 = v3303;
      const v8927 = v5203.keepGoing;
      if (v8927) {
        const v8928 = v5203.bal;
        const v8930 = v5203.percent;
        const v8931 = v5203.total_amount_claimed;
        const v8932 = v5203.total_rewards_allcoated;
        const v8933 = v5203.total_users_claim;
        const v8934 = v5203.usersNo;
        return;
        }
      else {
        const v8939 = stdlib.sub(v3303, v3303);
        ;
        const v8940 = (stdlib.le(await ctc.getBalance(), v8939) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8939));
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      return;
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      return;
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
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
    Admin_addAdmin0_133: ctc13,
    Admin_deposit0_133: ctc14,
    Admin_editUserReward0_133: ctc15,
    Admin_endContractAndTransfer0_133: ctc16,
    Admin_revokeAdmin0_133: ctc13,
    Admin_setReward0_133: ctc12,
    User_claim0_133: ctc17,
    User_optin0_133: ctc16
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3363 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:124:45:application call to [unknown function] (defined at: ./index.rsh:124:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_setReward0_133" (defined at: ./index.rsh:124:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v3364 = v3363[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3366 = v3363[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3370 = stdlib.gt(v3366, v3324);
  const v3371 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v3364, ctc0), null);
  const v3372 = {
    None: 0,
    Some: 1
    }[v3371[0]];
  const v3373 = stdlib.eq(v3372, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3373, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:45:application call to [unknown function] (defined at: ./index.rsh:124:45:function exp)', 'at ./index.rsh:80:37:application call to "runAdmin_setReward0_133" (defined at: ./index.rsh:124:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v3384 = ['Admin_setReward0_133', v3363];
  
  const v3528 = v3370 ? v3366 : stdlib.checkedBigNumberify('./index.rsh:130:30:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3384],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3528, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          
          break;
          }
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          
          break;
          }
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          
          break;
          }
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v5429 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '0')];
          const v5431 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '2')];
          const v5432 = stdlib.gt(v5431, v3324);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v5429, ctc0), null);
          const v5437 = v5432 ? v5431 : stdlib.checkedBigNumberify('./index.rsh:130:30:decimal', stdlib.UInt_max, '0');
          const v5450 = stdlib.add(v3303, v5437);
          sim_r.txns.push({
            amt: v5437,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5576 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '1')];
          const v5586 = [v5429, v5576];
          const v5587 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v5586, ctc3), null);
          const v5588 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5589 = stdlib.fromSome(v5587, v5588);
          const v5591 = v5589.claimed;
          const v5592 = v5589.rewards;
          const v5594 = stdlib.safeAdd(v5592, v5431);
          const v5595 = {
            claimed: v5591,
            rewards: v5594
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v5586, ctc3, v5595);
          const v5596 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5429, ctc1), null);
          const v5597 = stdlib.fromSome(v5596, stdlib.checkedBigNumberify('./index.rsh:140:60:decimal', stdlib.UInt_max, '0'));
          const v5601 = stdlib.safeAdd(v5597, v5431);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5429, ctc1, v5601);
          const v5602 = true;
          const v5603 = await txn1.getOutput('Admin_setReward', 'v5602', ctc8, v5602);
          
          let v5618;
          if (v5432) {
            const v5619 = stdlib.safeAdd(v3324, v5431);
            v5618 = v5619;
            }
          else {
            v5618 = v3324;
            }
          const v5620 = {
            bal: v5618,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v3327,
            total_rewards_allcoated: v3328,
            total_users_claim: v3329,
            usersNo: v3330
            };
          const v9096 = v5450;
          const v9097 = v5620.keepGoing;
          if (v9097) {
            const v9098 = v5620.bal;
            const v9100 = v5620.percent;
            const v9101 = v5620.total_amount_claimed;
            const v9102 = v5620.total_rewards_allcoated;
            const v9103 = v5620.total_users_claim;
            const v9104 = v5620.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9109 = stdlib.sub(v5450, v5450);
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
              tok: undefined /* Nothing */
              });
            const v9110 = (stdlib.le(await ctc.getBalance(), v9109) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9109));
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
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
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          
          break;
          }
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      return;
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      return;
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      undefined /* setApiDetails */;
      const v5429 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '0')];
      const v5431 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '2')];
      const v5432 = stdlib.gt(v5431, v3324);
      const v5433 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v5429, ctc0), null);
      const v5434 = {
        None: 0,
        Some: 1
        }[v5433[0]];
      const v5435 = stdlib.eq(v5434, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5435, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:45:application call to [unknown function] (defined at: ./index.rsh:124:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:124:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v5437 = v5432 ? v5431 : stdlib.checkedBigNumberify('./index.rsh:130:30:decimal', stdlib.UInt_max, '0');
      const v5450 = stdlib.add(v3303, v5437);
      ;
      const v5576 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '1')];
      const v5586 = [v5429, v5576];
      const v5587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v5586, ctc3), null);
      const v5588 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5589 = stdlib.fromSome(v5587, v5588);
      const v5591 = v5589.claimed;
      const v5592 = v5589.rewards;
      const v5594 = stdlib.safeAdd(v5592, v5431);
      const v5595 = {
        claimed: v5591,
        rewards: v5594
        };
      await stdlib.mapSet(map1, ctc19, v5586, ctc3, v5595);
      const v5596 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5429, ctc1), null);
      const v5597 = stdlib.fromSome(v5596, stdlib.checkedBigNumberify('./index.rsh:140:60:decimal', stdlib.UInt_max, '0'));
      const v5601 = stdlib.safeAdd(v5597, v5431);
      await stdlib.mapSet(map0, ctc6, v5429, ctc1, v5601);
      const v5602 = true;
      const v5603 = await txn1.getOutput('Admin_setReward', 'v5602', ctc8, v5602);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v5389, v5603), {
          at: './index.rsh:124:11:application',
          fs: ['at ./index.rsh:124:11:application call to [unknown function] (defined at: ./index.rsh:124:11:function exp)', 'at ./index.rsh:143:16:application call to "ret" (defined at: ./index.rsh:131:15:function exp)', 'at ./index.rsh:131:15:application call to [unknown function] (defined at: ./index.rsh:131:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      let v5618;
      if (v5432) {
        const v5619 = stdlib.safeAdd(v3324, v5431);
        v5618 = v5619;
        }
      else {
        v5618 = v3324;
        }
      const v5620 = {
        bal: v5618,
        keepGoing: v3325,
        percent: v3326,
        total_amount_claimed: v3327,
        total_rewards_allcoated: v3328,
        total_users_claim: v3329,
        usersNo: v3330
        };
      const v9096 = v5450;
      const v9097 = v5620.keepGoing;
      if (v9097) {
        const v9098 = v5620.bal;
        const v9100 = v5620.percent;
        const v9101 = v5620.total_amount_claimed;
        const v9102 = v5620.total_rewards_allcoated;
        const v9103 = v5620.total_users_claim;
        const v9104 = v5620.usersNo;
        return;
        }
      else {
        const v9109 = stdlib.sub(v5450, v5450);
        ;
        const v9110 = (stdlib.le(await ctc.getBalance(), v9109) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9109));
        ;
        return;
        }
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      return;
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
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
    Admin_addAdmin0_133: ctc8,
    Admin_deposit0_133: ctc9,
    Admin_editUserReward0_133: ctc10,
    Admin_endContractAndTransfer0_133: ctc11,
    Admin_revokeAdmin0_133: ctc8,
    Admin_setReward0_133: ctc13,
    User_claim0_133: ctc14,
    User_optin0_133: ctc11
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
  
  
  const v3287 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v3287],
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
      
      const {data: [v3291], secs: v3293, time: v3292, didSend: v27, from: v3290 } = txn1;
      
      ;
      const v3294 = await ctc.getContractInfo();
      
      const v3296 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v3297 = {
        i: v3296,
        sign: true
        };
      const v3298 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v3297,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3299 = v3298;
      const v3300 = v3292;
      const v3303 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v3316 = v3299.keepGoing;
        
        return v3316;})()) {
        const v3324 = v3299.bal;
        const v3325 = v3299.keepGoing;
        const v3326 = v3299.percent;
        const v3327 = v3299.total_amount_claimed;
        const v3328 = v3299.total_rewards_allcoated;
        const v3329 = v3299.total_users_claim;
        const v3330 = v3299.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v6519 = stdlib.sub(v3303, v3303);
        sim_r.txns.push({
          kind: 'from',
          to: v3290,
          tok: undefined /* Nothing */
          });
        const v6521 = (stdlib.le(await ctc.getBalance(), v6519) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6519));
        sim_r.txns.push({
          kind: 'from',
          to: v3290,
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
  const {data: [v3291], secs: v3293, time: v3292, didSend: v27, from: v3290 } = txn1;
  ;
  const v3294 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v3294), {
    at: './index.rsh:61:27:application',
    fs: ['at ./index.rsh:61:27:application call to [unknown function] (defined at: ./index.rsh:61:27:function exp)', 'at ./index.rsh:61:27:application call to "liftedInteract" (defined at: ./index.rsh:61:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v3296 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v3297 = {
    i: v3296,
    sign: true
    };
  const v3298 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v3297,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3299 = v3298;
  let v3300 = v3292;
  let v3303 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v3316 = v3299.keepGoing;
    
    return v3316;})()) {
    const v3324 = v3299.bal;
    const v3325 = v3299.keepGoing;
    const v3326 = v3299.percent;
    const v3327 = v3299.total_amount_claimed;
    const v3328 = v3299.total_rewards_allcoated;
    const v3329 = v3299.total_users_claim;
    const v3330 = v3299.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn3;
    switch (v3541[0]) {
      case 'Admin_addAdmin0_133': {
        const v3544 = v3541[1];
        undefined /* setApiDetails */;
        const v3550 = stdlib.addressEq(v3540, v3290);
        const v3551 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3540, ctc0), null);
        const v3552 = {
          None: 0,
          Some: 1
          }[v3551[0]];
        const v3553 = stdlib.eq(v3552, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3554 = v3550 ? true : v3553;
        stdlib.assert(v3554, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:34:application call to [unknown function] (defined at: ./index.rsh:183:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:183:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v3607 = v3544[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v3607, ctc0, null);
        const v3616 = null;
        await txn3.getOutput('Admin_addAdmin', 'v3616', ctc0, v3616);
        const v3630 = {
          bal: v3324,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v3327,
          total_rewards_allcoated: v3328,
          total_users_claim: v3329,
          usersNo: v3330
          };
        const cv3299 = v3630;
        const cv3300 = v3542;
        const cv3303 = v3303;
        
        v3299 = cv3299;
        v3300 = cv3300;
        v3303 = cv3303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_133': {
        const v3913 = v3541[1];
        undefined /* setApiDetails */;
        const v3926 = v3913[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '0')];
        const v3927 = stdlib.addressEq(v3540, v3290);
        const v3928 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3540, ctc0), null);
        const v3929 = {
          None: 0,
          Some: 1
          }[v3928[0]];
        const v3930 = stdlib.eq(v3929, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3931 = v3927 ? true : v3930;
        stdlib.assert(v3931, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:32:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v3974 = stdlib.add(v3303, v3926);
        ;
        const v4010 = null;
        await txn3.getOutput('Admin_deposit', 'v4010', ctc0, v4010);
        const v4024 = stdlib.safeAdd(v3324, v3926);
        const v4025 = {
          bal: v4024,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v3327,
          total_rewards_allcoated: v3328,
          total_users_claim: v3329,
          usersNo: v3330
          };
        const cv3299 = v4025;
        const cv3300 = v3542;
        const cv3303 = v3974;
        
        v3299 = cv3299;
        v3300 = cv3300;
        v3303 = cv3303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_133': {
        const v4282 = v3541[1];
        undefined /* setApiDetails */;
        const v4304 = v4282[stdlib.checkedBigNumberify('./index.rsh:171:10:spread', stdlib.UInt_max, '1')];
        const v4305 = stdlib.addressEq(v3540, v3290);
        const v4306 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3540, ctc0), null);
        const v4307 = {
          None: 0,
          Some: 1
          }[v4306[0]];
        const v4308 = stdlib.eq(v4307, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4309 = v4305 ? true : v4308;
        stdlib.assert(v4309, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:45:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v4312 = stdlib.le(v4304, v3303);
        stdlib.assert(v4312, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:45:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:171:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        const v4397 = v4282[stdlib.checkedBigNumberify('./index.rsh:171:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc7, v4397, ctc1, v4304);
        const v4410 = null;
        await txn3.getOutput('Admin_editUserReward', 'v4410', ctc0, v4410);
        const v4425 = {
          bal: v3324,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v3327,
          total_rewards_allcoated: v3328,
          total_users_claim: v3329,
          usersNo: v3330
          };
        const cv3299 = v4425;
        const cv3300 = v3542;
        const cv3303 = v3303;
        
        v3299 = cv3299;
        v3300 = cv3300;
        v3303 = cv3303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_133': {
        const v4651 = v3541[1];
        undefined /* setApiDetails */;
        const v4684 = stdlib.addressEq(v3290, v3540);
        stdlib.assert(v4684, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:307:44:application call to [unknown function] (defined at: ./index.rsh:307:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:307:44:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        const v4799 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v4799', ctc0, v4799);
        const v4812 = {
          bal: v3324,
          keepGoing: false,
          percent: v3326,
          total_amount_claimed: v3327,
          total_rewards_allcoated: v3328,
          total_users_claim: v3329,
          usersNo: v3330
          };
        const cv3299 = v4812;
        const cv3300 = v3542;
        const cv3303 = v3303;
        
        v3299 = cv3299;
        v3300 = cv3300;
        v3303 = cv3303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_133': {
        const v5020 = v3541[1];
        undefined /* setApiDetails */;
        const v5057 = stdlib.addressEq(v3540, v3290);
        stdlib.assert(v5057, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v5184 = v5020[stdlib.checkedBigNumberify('./index.rsh:197:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v5184, ctc0, undefined /* Nothing */);
        const v5189 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v5189', ctc0, v5189);
        const v5203 = {
          bal: v3324,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v3327,
          total_rewards_allcoated: v3328,
          total_users_claim: v3329,
          usersNo: v3330
          };
        const cv3299 = v5203;
        const cv3300 = v3542;
        const cv3303 = v3303;
        
        v3299 = cv3299;
        v3300 = cv3300;
        v3303 = cv3303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_133': {
        const v5389 = v3541[1];
        undefined /* setApiDetails */;
        const v5429 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '0')];
        const v5431 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '2')];
        const v5432 = stdlib.gt(v5431, v3324);
        const v5433 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v5429, ctc0), null);
        const v5434 = {
          None: 0,
          Some: 1
          }[v5433[0]];
        const v5435 = stdlib.eq(v5434, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5435, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:45:application call to [unknown function] (defined at: ./index.rsh:124:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:124:45:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v5437 = v5432 ? v5431 : stdlib.checkedBigNumberify('./index.rsh:130:30:decimal', stdlib.UInt_max, '0');
        const v5450 = stdlib.add(v3303, v5437);
        ;
        const v5576 = v5389[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '1')];
        const v5586 = [v5429, v5576];
        const v5587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5586, ctc3), null);
        const v5588 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5589 = stdlib.fromSome(v5587, v5588);
        const v5591 = v5589.claimed;
        const v5592 = v5589.rewards;
        const v5594 = stdlib.safeAdd(v5592, v5431);
        const v5595 = {
          claimed: v5591,
          rewards: v5594
          };
        await stdlib.mapSet(map1, ctc16, v5586, ctc3, v5595);
        const v5596 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5429, ctc1), null);
        const v5597 = stdlib.fromSome(v5596, stdlib.checkedBigNumberify('./index.rsh:140:60:decimal', stdlib.UInt_max, '0'));
        const v5601 = stdlib.safeAdd(v5597, v5431);
        await stdlib.mapSet(map0, ctc7, v5429, ctc1, v5601);
        const v5602 = true;
        await txn3.getOutput('Admin_setReward', 'v5602', ctc17, v5602);
        let v5618;
        if (v5432) {
          const v5619 = stdlib.safeAdd(v3324, v5431);
          v5618 = v5619;
          }
        else {
          v5618 = v3324;
          }
        const v5620 = {
          bal: v5618,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v3327,
          total_rewards_allcoated: v3328,
          total_users_claim: v3329,
          usersNo: v3330
          };
        const cv3299 = v5620;
        const cv3300 = v3542;
        const cv3303 = v5450;
        
        v3299 = cv3299;
        v3300 = cv3300;
        v3303 = cv3303;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_133': {
        const v5758 = v3541[1];
        undefined /* setApiDetails */;
        const v5808 = v5758[stdlib.checkedBigNumberify('./index.rsh:256:10:spread', stdlib.UInt_max, '0')];
        const v5810 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3540, ctc1), null);
        const v5811 = stdlib.fromSome(v5810, stdlib.checkedBigNumberify('./index.rsh:257:56:decimal', stdlib.UInt_max, '0'));
        const v5813 = stdlib.le(v5808, v3303);
        stdlib.assert(v5813, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:34:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5815 = stdlib.ge(v5811, v5808);
        stdlib.assert(v5815, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:34:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        const v6035 = v5758[stdlib.checkedBigNumberify('./index.rsh:256:10:spread', stdlib.UInt_max, '1')];
        const v6048 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v3540, ctc0), null);
        const v6049 = {
          None: 0,
          Some: 1
          }[v6048[0]];
        const v6050 = stdlib.eq(v6049, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6051 = [v3540, v6035];
        const v6052 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6051, ctc3), null);
        const v6053 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6054 = stdlib.fromSome(v6052, v6053);
        const v6056 = v6054.claimed;
        const v6057 = v6054.rewards;
        const v6059 = stdlib.safeAdd(v6056, v5808);
        const v6060 = {
          claimed: v6059,
          rewards: v6057
          };
        await stdlib.mapSet(map1, ctc16, v6051, ctc3, v6060);
        const v6061 = true;
        await txn3.getOutput('User_claim', 'v6061', ctc17, v6061);
        const v6069 = {
          addr: v3540,
          amount: v5808,
          projectName: v3291
          };
        null;
        if (v6050) {
          const v6094 = stdlib.sub(v3303, v5808);
          ;
          await stdlib.mapSet(map0, ctc7, v3540, ctc1, undefined /* Nothing */);
          const v6104 = stdlib.safeAdd(v3330, stdlib.checkedBigNumberify('./index.rsh:286:56:decimal', stdlib.UInt_max, '1'));
          const v6105 = stdlib.safeSub(v3324, v5808);
          const v6106 = stdlib.safeAdd(v3329, stdlib.checkedBigNumberify('./index.rsh:288:52:decimal', stdlib.UInt_max, '1'));
          const v6107 = stdlib.safeAdd(v3327, v5808);
          const v6108 = {
            bal: v6105,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v6107,
            total_rewards_allcoated: v3328,
            total_users_claim: v6106,
            usersNo: v6104
            };
          const cv3299 = v6108;
          const cv3300 = v3542;
          const cv3303 = v6094;
          
          v3299 = cv3299;
          v3300 = cv3300;
          v3303 = cv3303;
          
          txn2 = txn3;
          continue;}
        else {
          await stdlib.mapSet(map3, ctc7, v3540, ctc0, null);
          const v6075 = stdlib.sub(v3303, v5808);
          ;
          await stdlib.mapSet(map0, ctc7, v3540, ctc1, undefined /* Nothing */);
          const v6086 = stdlib.safeSub(v3324, v5808);
          const v6087 = stdlib.safeAdd(v3329, stdlib.checkedBigNumberify('./index.rsh:288:52:decimal', stdlib.UInt_max, '1'));
          const v6088 = stdlib.safeAdd(v3327, v5808);
          const v6089 = {
            bal: v6086,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v6088,
            total_rewards_allcoated: v3328,
            total_users_claim: v6087,
            usersNo: v3330
            };
          const cv3299 = v6089;
          const cv3300 = v3542;
          const cv3303 = v6075;
          
          v3299 = cv3299;
          v3300 = cv3300;
          v3303 = cv3303;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'User_optin0_133': {
        const v6127 = v3541[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map4, ctc7, v3540, ctc0, null);
        const v6481 = null;
        await txn3.getOutput('User_optin', 'v6481', ctc0, v6481);
        const v6494 = {
          bal: v3324,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v3327,
          total_rewards_allcoated: v3328,
          total_users_claim: v3329,
          usersNo: v3330
          };
        const cv3299 = v6494;
        const cv3300 = v3542;
        const cv3303 = v3303;
        
        v3299 = cv3299;
        v3300 = cv3300;
        v3303 = cv3303;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v6519 = stdlib.sub(v3303, v3303);
  ;
  const v6521 = (stdlib.le(await ctc.getBalance(), v6519) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6519));
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
    Admin_addAdmin0_133: ctc13,
    Admin_deposit0_133: ctc14,
    Admin_editUserReward0_133: ctc15,
    Admin_endContractAndTransfer0_133: ctc16,
    Admin_revokeAdmin0_133: ctc13,
    Admin_setReward0_133: ctc17,
    User_claim0_133: ctc12,
    User_optin0_133: ctc16
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3443 = ctc.selfAddress();
  const v3445 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:256:34:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to "runUser_claim0_133" (defined at: ./index.rsh:256:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v3446 = v3445[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3450 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3443, ctc1), null);
  const v3451 = stdlib.fromSome(v3450, stdlib.checkedBigNumberify('./index.rsh:257:56:decimal', stdlib.UInt_max, '0'));
  const v3453 = stdlib.le(v3446, v3303);
  stdlib.assert(v3453, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:34:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to "runUser_claim0_133" (defined at: ./index.rsh:256:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v3455 = stdlib.ge(v3451, v3446);
  stdlib.assert(v3455, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:34:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to "runUser_claim0_133" (defined at: ./index.rsh:256:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v3464 = ['User_claim0_133', v3445];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3464],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:261:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          
          break;
          }
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          
          break;
          }
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          
          break;
          }
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          
          break;
          }
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5808 = v5758[stdlib.checkedBigNumberify('./index.rsh:256:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3540, ctc1), null);
          ;
          const v6035 = v5758[stdlib.checkedBigNumberify('./index.rsh:256:10:spread', stdlib.UInt_max, '1')];
          const v6048 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v3540, ctc0), null);
          const v6049 = {
            None: 0,
            Some: 1
            }[v6048[0]];
          const v6050 = stdlib.eq(v6049, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v6051 = [v3540, v6035];
          const v6052 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v6051, ctc3), null);
          const v6053 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6054 = stdlib.fromSome(v6052, v6053);
          const v6056 = v6054.claimed;
          const v6057 = v6054.rewards;
          const v6059 = stdlib.safeAdd(v6056, v5808);
          const v6060 = {
            claimed: v6059,
            rewards: v6057
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v6051, ctc3, v6060);
          const v6061 = true;
          const v6062 = await txn1.getOutput('User_claim', 'v6061', ctc8, v6061);
          
          const v6069 = {
            addr: v3540,
            amount: v5808,
            projectName: v3291
            };
          null;
          if (v6050) {
            const v6094 = stdlib.sub(v3303, v5808);
            sim_r.txns.push({
              kind: 'from',
              to: v3540,
              tok: undefined /* Nothing */
              });
            await stdlib.simMapSet(sim_r, 0, ctc6, v3540, ctc1, undefined /* Nothing */);
            const v6104 = stdlib.safeAdd(v3330, stdlib.checkedBigNumberify('./index.rsh:286:56:decimal', stdlib.UInt_max, '1'));
            const v6105 = stdlib.safeSub(v3324, v5808);
            const v6106 = stdlib.safeAdd(v3329, stdlib.checkedBigNumberify('./index.rsh:288:52:decimal', stdlib.UInt_max, '1'));
            const v6107 = stdlib.safeAdd(v3327, v5808);
            const v6108 = {
              bal: v6105,
              keepGoing: v3325,
              percent: v3326,
              total_amount_claimed: v6107,
              total_rewards_allcoated: v3328,
              total_users_claim: v6106,
              usersNo: v6104
              };
            const v9266 = v6094;
            const v9267 = v6108.keepGoing;
            if (v9267) {
              const v9268 = v6108.bal;
              const v9270 = v6108.percent;
              const v9271 = v6108.total_amount_claimed;
              const v9272 = v6108.total_rewards_allcoated;
              const v9273 = v6108.total_users_claim;
              const v9274 = v6108.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v9279 = stdlib.sub(v6094, v6094);
              sim_r.txns.push({
                kind: 'from',
                to: v3290,
                tok: undefined /* Nothing */
                });
              const v9280 = (stdlib.le(await ctc.getBalance(), v9279) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9279));
              sim_r.txns.push({
                kind: 'from',
                to: v3290,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v3540, ctc0, null);
            const v6075 = stdlib.sub(v3303, v5808);
            sim_r.txns.push({
              kind: 'from',
              to: v3540,
              tok: undefined /* Nothing */
              });
            await stdlib.simMapSet(sim_r, 0, ctc6, v3540, ctc1, undefined /* Nothing */);
            const v6086 = stdlib.safeSub(v3324, v5808);
            const v6087 = stdlib.safeAdd(v3329, stdlib.checkedBigNumberify('./index.rsh:288:52:decimal', stdlib.UInt_max, '1'));
            const v6088 = stdlib.safeAdd(v3327, v5808);
            const v6089 = {
              bal: v6086,
              keepGoing: v3325,
              percent: v3326,
              total_amount_claimed: v6088,
              total_rewards_allcoated: v3328,
              total_users_claim: v6087,
              usersNo: v3330
              };
            const v9283 = v6075;
            const v9284 = v6089.keepGoing;
            if (v9284) {
              const v9285 = v6089.bal;
              const v9287 = v6089.percent;
              const v9288 = v6089.total_amount_claimed;
              const v9289 = v6089.total_rewards_allcoated;
              const v9290 = v6089.total_users_claim;
              const v9291 = v6089.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v9296 = stdlib.sub(v6075, v6075);
              sim_r.txns.push({
                kind: 'from',
                to: v3290,
                tok: undefined /* Nothing */
                });
              const v9297 = (stdlib.le(await ctc.getBalance(), v9296) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9296));
              sim_r.txns.push({
                kind: 'from',
                to: v3290,
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
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      return;
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      return;
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      return;
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      undefined /* setApiDetails */;
      const v5808 = v5758[stdlib.checkedBigNumberify('./index.rsh:256:10:spread', stdlib.UInt_max, '0')];
      const v5810 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3540, ctc1), null);
      const v5811 = stdlib.fromSome(v5810, stdlib.checkedBigNumberify('./index.rsh:257:56:decimal', stdlib.UInt_max, '0'));
      const v5813 = stdlib.le(v5808, v3303);
      stdlib.assert(v5813, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:34:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5815 = stdlib.ge(v5811, v5808);
      stdlib.assert(v5815, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:34:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:256:34:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      const v6035 = v5758[stdlib.checkedBigNumberify('./index.rsh:256:10:spread', stdlib.UInt_max, '1')];
      const v6048 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v3540, ctc0), null);
      const v6049 = {
        None: 0,
        Some: 1
        }[v6048[0]];
      const v6050 = stdlib.eq(v6049, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6051 = [v3540, v6035];
      const v6052 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v6051, ctc3), null);
      const v6053 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6054 = stdlib.fromSome(v6052, v6053);
      const v6056 = v6054.claimed;
      const v6057 = v6054.rewards;
      const v6059 = stdlib.safeAdd(v6056, v5808);
      const v6060 = {
        claimed: v6059,
        rewards: v6057
        };
      await stdlib.mapSet(map1, ctc19, v6051, ctc3, v6060);
      const v6061 = true;
      const v6062 = await txn1.getOutput('User_claim', 'v6061', ctc8, v6061);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v5758, v6062), {
          at: './index.rsh:256:11:application',
          fs: ['at ./index.rsh:256:11:application call to [unknown function] (defined at: ./index.rsh:256:11:function exp)', 'at ./index.rsh:274:14:application call to "ret" (defined at: ./index.rsh:262:15:function exp)', 'at ./index.rsh:262:15:application call to [unknown function] (defined at: ./index.rsh:262:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v6069 = {
        addr: v3540,
        amount: v5808,
        projectName: v3291
        };
      null;
      if (v6050) {
        const v6094 = stdlib.sub(v3303, v5808);
        ;
        await stdlib.mapSet(map0, ctc6, v3540, ctc1, undefined /* Nothing */);
        const v6104 = stdlib.safeAdd(v3330, stdlib.checkedBigNumberify('./index.rsh:286:56:decimal', stdlib.UInt_max, '1'));
        const v6105 = stdlib.safeSub(v3324, v5808);
        const v6106 = stdlib.safeAdd(v3329, stdlib.checkedBigNumberify('./index.rsh:288:52:decimal', stdlib.UInt_max, '1'));
        const v6107 = stdlib.safeAdd(v3327, v5808);
        const v6108 = {
          bal: v6105,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v6107,
          total_rewards_allcoated: v3328,
          total_users_claim: v6106,
          usersNo: v6104
          };
        const v9266 = v6094;
        const v9267 = v6108.keepGoing;
        if (v9267) {
          const v9268 = v6108.bal;
          const v9270 = v6108.percent;
          const v9271 = v6108.total_amount_claimed;
          const v9272 = v6108.total_rewards_allcoated;
          const v9273 = v6108.total_users_claim;
          const v9274 = v6108.usersNo;
          return;
          }
        else {
          const v9279 = stdlib.sub(v6094, v6094);
          ;
          const v9280 = (stdlib.le(await ctc.getBalance(), v9279) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9279));
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map3, ctc6, v3540, ctc0, null);
        const v6075 = stdlib.sub(v3303, v5808);
        ;
        await stdlib.mapSet(map0, ctc6, v3540, ctc1, undefined /* Nothing */);
        const v6086 = stdlib.safeSub(v3324, v5808);
        const v6087 = stdlib.safeAdd(v3329, stdlib.checkedBigNumberify('./index.rsh:288:52:decimal', stdlib.UInt_max, '1'));
        const v6088 = stdlib.safeAdd(v3327, v5808);
        const v6089 = {
          bal: v6086,
          keepGoing: v3325,
          percent: v3326,
          total_amount_claimed: v6088,
          total_rewards_allcoated: v3328,
          total_users_claim: v6087,
          usersNo: v3330
          };
        const v9283 = v6075;
        const v9284 = v6089.keepGoing;
        if (v9284) {
          const v9285 = v6089.bal;
          const v9287 = v6089.percent;
          const v9288 = v6089.total_amount_claimed;
          const v9289 = v6089.total_rewards_allcoated;
          const v9290 = v6089.total_users_claim;
          const v9291 = v6089.usersNo;
          return;
          }
        else {
          const v9296 = stdlib.sub(v6075, v6075);
          ;
          const v9297 = (stdlib.le(await ctc.getBalance(), v9296) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9296));
          ;
          return;
          }}
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
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
    Admin_addAdmin0_133: ctc12,
    Admin_deposit0_133: ctc13,
    Admin_editUserReward0_133: ctc14,
    Admin_endContractAndTransfer0_133: ctc11,
    Admin_revokeAdmin0_133: ctc12,
    Admin_setReward0_133: ctc16,
    User_claim0_133: ctc17,
    User_optin0_133: ctc11
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
  
  
  const [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3468 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:297:26:application call to [unknown function] (defined at: ./index.rsh:297:26:function exp)', 'at ./index.rsh:80:37:application call to "runUser_optin0_133" (defined at: ./index.rsh:297:10:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v3472 = ['User_optin0_133', v3468];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3290, v3291, v3303, v3324, v3325, v3326, v3327, v3328, v3329, v3330, v3472],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:299:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
      
      switch (v3541[0]) {
        case 'Admin_addAdmin0_133': {
          const v3544 = v3541[1];
          
          break;
          }
        case 'Admin_deposit0_133': {
          const v3913 = v3541[1];
          
          break;
          }
        case 'Admin_editUserReward0_133': {
          const v4282 = v3541[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_133': {
          const v4651 = v3541[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_133': {
          const v5020 = v3541[1];
          
          break;
          }
        case 'Admin_setReward0_133': {
          const v5389 = v3541[1];
          
          break;
          }
        case 'User_claim0_133': {
          const v5758 = v3541[1];
          
          break;
          }
        case 'User_optin0_133': {
          const v6127 = v3541[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v3540, ctc0, null);
          const v6481 = null;
          const v6482 = await txn1.getOutput('User_optin', 'v6481', ctc0, v6481);
          
          const v6494 = {
            bal: v3324,
            keepGoing: v3325,
            percent: v3326,
            total_amount_claimed: v3327,
            total_rewards_allcoated: v3328,
            total_users_claim: v3329,
            usersNo: v3330
            };
          const v9453 = v3303;
          const v9454 = v6494.keepGoing;
          if (v9454) {
            const v9455 = v6494.bal;
            const v9457 = v6494.percent;
            const v9458 = v6494.total_amount_claimed;
            const v9459 = v6494.total_rewards_allcoated;
            const v9460 = v6494.total_users_claim;
            const v9461 = v6494.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9466 = stdlib.sub(v3303, v3303);
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
              tok: undefined /* Nothing */
              });
            const v9467 = (stdlib.le(await ctc.getBalance(), v9466) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9466));
            sim_r.txns.push({
              kind: 'from',
              to: v3290,
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
  const {data: [v3541], secs: v3543, time: v3542, didSend: v2776, from: v3540 } = txn1;
  switch (v3541[0]) {
    case 'Admin_addAdmin0_133': {
      const v3544 = v3541[1];
      return;
      break;
      }
    case 'Admin_deposit0_133': {
      const v3913 = v3541[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_133': {
      const v4282 = v3541[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_133': {
      const v4651 = v3541[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_133': {
      const v5020 = v3541[1];
      return;
      break;
      }
    case 'Admin_setReward0_133': {
      const v5389 = v3541[1];
      return;
      break;
      }
    case 'User_claim0_133': {
      const v5758 = v3541[1];
      return;
      break;
      }
    case 'User_optin0_133': {
      const v6127 = v3541[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map4, ctc6, v3540, ctc0, null);
      const v6481 = null;
      const v6482 = await txn1.getOutput('User_optin', 'v6481', ctc0, v6481);
      if (v2776) {
        stdlib.protect(ctc0, await interact.out(v6127, v6482), {
          at: './index.rsh:297:11:application',
          fs: ['at ./index.rsh:297:11:application call to [unknown function] (defined at: ./index.rsh:297:11:function exp)', 'at ./index.rsh:302:14:application call to "ret" (defined at: ./index.rsh:300:15:function exp)', 'at ./index.rsh:300:15:application call to [unknown function] (defined at: ./index.rsh:300:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6494 = {
        bal: v3324,
        keepGoing: v3325,
        percent: v3326,
        total_amount_claimed: v3327,
        total_rewards_allcoated: v3328,
        total_users_claim: v3329,
        usersNo: v3330
        };
      const v9453 = v3303;
      const v9454 = v6494.keepGoing;
      if (v9454) {
        const v9455 = v6494.bal;
        const v9457 = v6494.percent;
        const v9458 = v6494.total_amount_claimed;
        const v9459 = v6494.total_rewards_allcoated;
        const v9460 = v6494.total_users_claim;
        const v9461 = v6494.usersNo;
        return;
        }
      else {
        const v9466 = stdlib.sub(v3303, v3303);
        ;
        const v9467 = (stdlib.le(await ctc.getBalance(), v9466) ? stdlib.checkedBigNumberify('./index.rsh:320:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9466));
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
  appApproval: `CCAJAAEIAxDUetSTASjUxQEmBgABAAEBAQIBBAEDMRhBB7IoZEkiWzUBJFs1AilkKmRQghQEAl90xwQNs4a8BBNuVzsEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEJoJ9UESCT5AgRu5HYUBHhK2TcEev7IbQTHwpzVBN5XBGQE7UbbpgTzJ3gEBPlvbOAE+XMOCwT6rsiwNhoAjhQAVAHsAVcBBgIOAXsB3AE3BvIBiwCJAasBmwFHBwQA3wDJAbsAawABADYaATULJK8pNAtQIQSvUFA1CyU0ARJEiAgDNAsiWzUMNAtXCDE1DYAEVQtlgzQMFlA0DVCwNAyICGY0DSJVjQgHlgeZB5wHpgbeBuEG6wb1Qv+sNhoBFzULJK8qNAsWUCEHr1BQNQtC/6g2GgE2GgIXNQs1DCSvKzQMNAsWUFAkr1BQNQtC/4qAOQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9KNhoBNQskrycENAtQIQSvUFA1C0L/NDYaATYaAhc2GgMXNQs1DDUNJK+AAQU0DTQMFlA0CxZQUFA1C0L/DTYaATULNAElEkSIBwsoKCs0C1CIBvciVSMSFlEHCDUEMRkiEkSABBUffHU0BFCwI0M0ASUSRIgG3zQVFjUEQv/fNhoBNhoCFzULNQwiREL/zzYaATULNAElEkSIBrooKCcENAtQiAalIlUjEhZRBwg1BEL/qzQBJRJEiAabNBAWNQRC/5s0ASUSRIgGizQRFjUEQv+LNAElEkSIBns0DxY1BEL/ezQBJRJEiAZrNA4WNQRC/2s2GgE1CzQBJRJEiAZWJK8oJK8pNAtQiAY/iAaWNQRC/0o2GgE2GgIXNQs1DCJEQv86NhoBFzYaAhc1CzUMJK+AAQY0DBY0CxZQUDIDUFA1C0L+BYA5AAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/cUxADQZEigoKzEAUIgFtyJVIxIRRCEFKzQNVwEgUCiIBewoNQuACAAAAAAAAA4gNAtQsDQLNQQ0FBY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNRY1FzQXVwgBF0EE8DQXIls1FDQXVwgBFzUTNBdXCRE1EjQXgRpbNRE0F4EiWzUQNBeBKls1DzQXgTJbNQ40GTQYUDQVFlA0FBZQNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAlMgY1AjUBKUsBVwB/ZypMV38BZyg0ARY0AhZQZzEZIhJEiAV+NANA/gNC/fY0DSNbNQsxADQZEigoKzEAUIgEyiJVIxIRRDQLiAUtKDUMgAgAAAAAAAAPqjQMULA0DDUENBQ0CwgWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjQVNAsINRU1FjUXQv8ONAuBIFs1DDEANBkSKCgrMQBQiARlIlUjEhFENAw0FQ5EIQYpNAtXACBQNAwWiASSKDULgAgAAAAAAAAROjQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/qM0GTEAEkQoNQuACAAAAAAAABK/NAtQsDQLNQQ0FBYpUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/mcxADQZEkQhBSs0DVcBIFCIBCQoNQuACAAAAAAAABRFNAtQsDQLNQQ0FBY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNRY1F0L+GjQLVwAgNRw0CyEHW0k1GzQUDTUaKCgnBDQcUIgDaCJVIxJEIjQbNBpNSTUNiAPFNBw0C1cgCFA1DCEEryghBK8qNAxQiAM/iAOWNQshCCo0DFA0C1cACDQLJFs0GwgWUIgDayEGKTQcUCSvKCSvKTQcUIgDEYgDaBc0GwgWiANOIzULgAgAAAAAAAAV4jQLFlEHCFCwNAsWUQcINQQ0GkECGjQUNBsINQs0CxY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNBU0DQg1FTUWNRdC/UQ0CyJbSTUNNBUORCSvKCSvKTEAUIgCmYgC8Bc0DQ9EMQA0C1cICFA1DCEEryghBK8qNAxQiAJ5iALQNQshCCo0DFA0CyJbNA0IFjQLVwgIUIgCpSM1C4AIAAAAAAAAF600CxZRBwhQsDQLFlEHCDUEMQA0DRZQNBhQNQuABJvIVFA0C1CwKCgnBTEAUIgCISJVIxJBAVc0DTEAiAJpIQYpMQBQiAJtNBQ0DQkWNBMWUQcIUDQSUDQRNA0IFlA0EBZQNA8jCBZQNA4jCBZQMgY0FTQNCTUVNRY1F0L8ZyEFJwQxAFAoiAIQKDULgAgAAAAAAAAZUTQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/CExADUZNAsiWzUMNAtXCB41GIAE0SoGjTQMFlA0GFCwNAyIAfeAOgAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAGQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyBiI1FTUWNRdC+7WIAaiBoI0GiAG7NhoBNQtC/4KIAZY2GgE1C0L5BCIxNBJEJTE1EkQiMTYSRCIxNxJEiAF3gYABryIiQvvcQv0ONA1XATA1C0L9UTQNVwEQNQtC/h1C/vc0FDULQv3mIQUnBTEAUCiIAQA0DTEAiAEHIQYpMQBQiAELNBQ0DQkWNBMWUQcIUDQSUDQRNA0IFlA0EBZQNA8jCBZQNA4WUDIGNBU0DQk1FTUWNRdC+wc0FTQZiADCMgpgMgp4CTQVSQkJSTULNBmIAK4xGYEFEkSIAOcyCmAyCngJSTUGMgqIAJZC+1dITL9IiSKyASOyELIHsgiziUL6ZEL7SDQNVwEoNQtC+6JC/ApIiUwJSTUGMgmIAGOJCUlB/+5JNQaIAG+JvkkWUQcIRQRNUIlJVwAgNRlJVyAeNRhJgT5bNRVJgUZbNRRJV04BFzUTSVdPETUSSYFgWzURSYFoWzUQSYFwWzUPgXhbNQ6JTEm9QP91SwOIAFFC/22xQv9uSVcBAEwiVU2JvCJOAk00Bwg1B4kxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/0hC/1A0Bgg1Bok=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `494`,
    1001: `495`,
    1002: `496`,
    1003: `497`,
    1004: `497`,
    1005: `498`,
    1006: `499`,
    1007: `500`,
    1008: `502`,
    1009: `502`,
    101: `21`,
    1010: `502`,
    1011: `504`,
    1012: `504`,
    1013: `505`,
    1014: `505`,
    1015: `505`,
    1016: `506`,
    1017: `506`,
    1018: `506`,
    1019: `508`,
    102: `21`,
    1020: `508`,
    1021: `509`,
    1022: `510`,
    1023: `511`,
    1024: `511`,
    1025: `512`,
    1026: `512`,
    1027: `513`,
    1028: `513`,
    1029: `514`,
    103: `21`,
    1030: `516`,
    1031: `517`,
    1032: `518`,
    1033: `519`,
    1034: `519`,
    1035: `520`,
    1036: `521`,
    1037: `521`,
    1038: `521`,
    1039: `522`,
    104: `21`,
    1040: `523`,
    1041: `524`,
    1042: `525`,
    1043: `526`,
    1044: `527`,
    1045: `534`,
    1046: `534`,
    1047: `535`,
    1048: `535`,
    1049: `535`,
    105: `21`,
    1050: `538`,
    1051: `539`,
    1052: `539`,
    1053: `540`,
    1054: `540`,
    1055: `540`,
    1056: `540`,
    1057: `540`,
    1058: `540`,
    1059: `540`,
    106: `21`,
    1060: `540`,
    1061: `540`,
    1062: `540`,
    1063: `541`,
    1064: `541`,
    1065: `542`,
    1066: `543`,
    1067: `544`,
    1068: `544`,
    1069: `545`,
    107: `21`,
    1070: `545`,
    1071: `546`,
    1072: `546`,
    1073: `547`,
    1074: `547`,
    1075: `548`,
    1076: `549`,
    1077: `550`,
    1078: `550`,
    1079: `551`,
    108: `21`,
    1080: `552`,
    1081: `552`,
    1082: `552`,
    1083: `553`,
    1084: `554`,
    1085: `554`,
    1086: `555`,
    1087: `556`,
    1088: `556`,
    1089: `557`,
    109: `21`,
    1090: `558`,
    1091: `559`,
    1092: `559`,
    1093: `560`,
    1094: `561`,
    1095: `562`,
    1096: `562`,
    1097: `563`,
    1098: `564`,
    1099: `565`,
    11: `2`,
    110: `21`,
    1100: `565`,
    1101: `566`,
    1102: `567`,
    1103: `568`,
    1104: `568`,
    1105: `569`,
    1106: `569`,
    1107: `570`,
    1108: `570`,
    1109: `571`,
    111: `21`,
    1110: `572`,
    1111: `572`,
    1112: `573`,
    1113: `573`,
    1114: `574`,
    1115: `574`,
    1116: `575`,
    1117: `575`,
    1118: `575`,
    1119: `577`,
    112: `21`,
    1120: `577`,
    1121: `578`,
    1122: `578`,
    1123: `579`,
    1124: `580`,
    1125: `580`,
    1126: `581`,
    1127: `581`,
    1128: `582`,
    1129: `582`,
    113: `21`,
    1130: `583`,
    1131: `585`,
    1132: `586`,
    1133: `587`,
    1134: `588`,
    1135: `588`,
    1136: `589`,
    1137: `590`,
    1138: `590`,
    1139: `590`,
    114: `21`,
    1140: `591`,
    1141: `592`,
    1142: `593`,
    1143: `594`,
    1144: `595`,
    1145: `596`,
    1146: `603`,
    1147: `603`,
    1148: `604`,
    1149: `604`,
    115: `21`,
    1150: `605`,
    1151: `606`,
    1152: `614`,
    1153: `614`,
    1154: `615`,
    1155: `616`,
    1156: `616`,
    1157: `617`,
    1158: `617`,
    1159: `617`,
    116: `21`,
    1160: `618`,
    1161: `619`,
    1162: `619`,
    1163: `620`,
    1164: `621`,
    1165: `621`,
    1166: `621`,
    1167: `622`,
    1168: `623`,
    1169: `623`,
    117: `21`,
    1170: `624`,
    1171: `624`,
    1172: `624`,
    1173: `624`,
    1174: `624`,
    1175: `624`,
    1176: `624`,
    1177: `624`,
    1178: `624`,
    1179: `624`,
    118: `21`,
    1180: `625`,
    1181: `625`,
    1182: `626`,
    1183: `627`,
    1184: `628`,
    1185: `628`,
    1186: `629`,
    1187: `629`,
    1188: `630`,
    1189: `630`,
    119: `21`,
    1190: `631`,
    1191: `632`,
    1192: `632`,
    1193: `633`,
    1194: `634`,
    1195: `634`,
    1196: `634`,
    1197: `635`,
    1198: `636`,
    1199: `636`,
    12: `2`,
    120: `21`,
    1200: `637`,
    1201: `638`,
    1202: `638`,
    1203: `639`,
    1204: `640`,
    1205: `641`,
    1206: `641`,
    1207: `642`,
    1208: `643`,
    1209: `644`,
    121: `21`,
    1210: `644`,
    1211: `645`,
    1212: `646`,
    1213: `647`,
    1214: `647`,
    1215: `648`,
    1216: `649`,
    1217: `650`,
    1218: `650`,
    1219: `651`,
    122: `21`,
    1220: `651`,
    1221: `652`,
    1222: `652`,
    1223: `653`,
    1224: `653`,
    1225: `653`,
    1226: `655`,
    1227: `655`,
    1228: `656`,
    1229: `656`,
    123: `21`,
    1230: `657`,
    1231: `658`,
    1232: `665`,
    1233: `666`,
    1234: `666`,
    1235: `667`,
    1236: `667`,
    1237: `667`,
    1238: `667`,
    1239: `667`,
    124: `21`,
    1240: `667`,
    1241: `667`,
    1242: `667`,
    1243: `667`,
    1244: `667`,
    1245: `668`,
    1246: `668`,
    1247: `669`,
    1248: `670`,
    1249: `671`,
    125: `21`,
    1250: `671`,
    1251: `672`,
    1252: `672`,
    1253: `673`,
    1254: `673`,
    1255: `674`,
    1256: `675`,
    1257: `676`,
    1258: `677`,
    1259: `677`,
    126: `21`,
    1260: `678`,
    1261: `679`,
    1262: `679`,
    1263: `680`,
    1264: `681`,
    1265: `682`,
    1266: `682`,
    1267: `683`,
    1268: `684`,
    1269: `685`,
    127: `21`,
    1270: `685`,
    1271: `686`,
    1272: `687`,
    1273: `688`,
    1274: `688`,
    1275: `689`,
    1276: `690`,
    1277: `691`,
    1278: `691`,
    1279: `692`,
    128: `21`,
    1280: `692`,
    1281: `693`,
    1282: `693`,
    1283: `694`,
    1284: `694`,
    1285: `694`,
    1286: `696`,
    1287: `696`,
    1288: `697`,
    1289: `697`,
    129: `21`,
    1290: `698`,
    1291: `699`,
    1292: `707`,
    1293: `707`,
    1294: `708`,
    1295: `709`,
    1296: `709`,
    1297: `710`,
    1298: `710`,
    1299: `710`,
    13: `2`,
    130: `21`,
    1300: `711`,
    1301: `712`,
    1302: `712`,
    1303: `712`,
    1304: `713`,
    1305: `714`,
    1306: `714`,
    1307: `715`,
    1308: `715`,
    1309: `715`,
    131: `21`,
    1310: `715`,
    1311: `715`,
    1312: `715`,
    1313: `715`,
    1314: `715`,
    1315: `715`,
    1316: `715`,
    1317: `716`,
    1318: `716`,
    1319: `717`,
    132: `21`,
    1320: `718`,
    1321: `719`,
    1322: `719`,
    1323: `720`,
    1324: `720`,
    1325: `721`,
    1326: `721`,
    1327: `722`,
    1328: `723`,
    1329: `723`,
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
    1340: `730`,
    1341: `731`,
    1342: `732`,
    1343: `732`,
    1344: `733`,
    1345: `734`,
    1346: `735`,
    1347: `735`,
    1348: `736`,
    1349: `737`,
    135: `21`,
    1350: `738`,
    1351: `738`,
    1352: `739`,
    1353: `740`,
    1354: `741`,
    1355: `741`,
    1356: `742`,
    1357: `742`,
    1358: `743`,
    1359: `743`,
    136: `21`,
    1360: `744`,
    1361: `744`,
    1362: `744`,
    1363: `746`,
    1364: `746`,
    1365: `747`,
    1366: `747`,
    1367: `747`,
    1368: `748`,
    1369: `748`,
    137: `21`,
    1370: `749`,
    1371: `749`,
    1372: `750`,
    1373: `750`,
    1374: `751`,
    1375: `752`,
    1376: `753`,
    1377: `753`,
    1378: `754`,
    1379: `754`,
    138: `21`,
    1380: `755`,
    1381: `756`,
    1382: `756`,
    1383: `758`,
    1384: `759`,
    1385: `760`,
    1386: `760`,
    1387: `761`,
    1388: `761`,
    1389: `762`,
    139: `21`,
    1390: `763`,
    1391: `763`,
    1392: `763`,
    1393: `764`,
    1394: `765`,
    1395: `766`,
    1396: `767`,
    1397: `768`,
    1398: `775`,
    1399: `776`,
    14: `2`,
    140: `21`,
    1400: `776`,
    1401: `777`,
    1402: `777`,
    1403: `778`,
    1404: `779`,
    1405: `780`,
    1406: `780`,
    1407: `781`,
    1408: `781`,
    1409: `781`,
    141: `21`,
    1410: `784`,
    1411: `784`,
    1412: `785`,
    1413: `785`,
    1414: `786`,
    1415: `786`,
    1416: `786`,
    1417: `787`,
    1418: `788`,
    1419: `788`,
    142: `21`,
    1420: `789`,
    1421: `789`,
    1422: `790`,
    1423: `792`,
    1424: `793`,
    1425: `793`,
    1426: `794`,
    1427: `795`,
    1428: `796`,
    1429: `796`,
    143: `21`,
    1430: `797`,
    1431: `798`,
    1432: `798`,
    1433: `798`,
    1434: `799`,
    1435: `799`,
    1436: `799`,
    1437: `800`,
    1438: `800`,
    1439: `801`,
    144: `21`,
    1440: `801`,
    1441: `802`,
    1442: `803`,
    1443: `803`,
    1444: `804`,
    1445: `805`,
    1446: `805`,
    1447: `806`,
    1448: `806`,
    1449: `806`,
    145: `21`,
    1450: `807`,
    1451: `807`,
    1452: `808`,
    1453: `809`,
    1454: `810`,
    1455: `810`,
    1456: `811`,
    1457: `812`,
    1458: `813`,
    1459: `814`,
    146: `21`,
    1460: `814`,
    1461: `814`,
    1462: `816`,
    1463: `816`,
    1464: `817`,
    1465: `818`,
    1466: `818`,
    1467: `819`,
    1468: `820`,
    1469: `821`,
    147: `21`,
    1470: `822`,
    1471: `823`,
    1472: `824`,
    1473: `825`,
    1474: `826`,
    1475: `826`,
    1476: `827`,
    1477: `828`,
    1478: `828`,
    1479: `828`,
    148: `21`,
    1480: `829`,
    1481: `829`,
    1482: `829`,
    1483: `830`,
    1484: `831`,
    1485: `831`,
    1486: `832`,
    1487: `833`,
    1488: `834`,
    1489: `834`,
    149: `21`,
    1490: `834`,
    1491: `835`,
    1492: `836`,
    1493: `836`,
    1494: `837`,
    1495: `837`,
    1496: `837`,
    1497: `837`,
    1498: `837`,
    1499: `837`,
    15: `2`,
    150: `21`,
    1500: `837`,
    1501: `837`,
    1502: `837`,
    1503: `837`,
    1504: `838`,
    1505: `838`,
    1506: `839`,
    1507: `840`,
    1508: `840`,
    1509: `840`,
    151: `21`,
    1510: `841`,
    1511: `842`,
    1512: `843`,
    1513: `843`,
    1514: `844`,
    1515: `845`,
    1516: `845`,
    1517: `845`,
    1518: `846`,
    1519: `846`,
    152: `21`,
    1520: `847`,
    1521: `847`,
    1522: `848`,
    1523: `848`,
    1524: `848`,
    1525: `849`,
    1526: `849`,
    1527: `850`,
    1528: `850`,
    1529: `851`,
    153: `22`,
    1530: `852`,
    1531: `852`,
    1532: `854`,
    1533: `854`,
    1534: `855`,
    1535: `856`,
    1536: `856`,
    1537: `857`,
    1538: `858`,
    1539: `858`,
    154: `22`,
    1540: `858`,
    1541: `859`,
    1542: `860`,
    1543: `860`,
    1544: `861`,
    1545: `862`,
    1546: `862`,
    1547: `863`,
    1548: `864`,
    1549: `865`,
    155: `22`,
    1550: `865`,
    1551: `866`,
    1552: `867`,
    1553: `868`,
    1554: `868`,
    1555: `869`,
    1556: `870`,
    1557: `871`,
    1558: `871`,
    1559: `872`,
    156: `23`,
    1560: `873`,
    1561: `874`,
    1562: `874`,
    1563: `875`,
    1564: `875`,
    1565: `876`,
    1566: `876`,
    1567: `877`,
    1568: `878`,
    1569: `878`,
    157: `23`,
    1570: `879`,
    1571: `879`,
    1572: `880`,
    1573: `880`,
    1574: `881`,
    1575: `881`,
    1576: `881`,
    1577: `883`,
    1578: `883`,
    1579: `884`,
    158: `23`,
    1580: `885`,
    1581: `886`,
    1582: `887`,
    1583: `887`,
    1584: `888`,
    1585: `888`,
    1586: `889`,
    1587: `890`,
    1588: `897`,
    1589: `898`,
    159: `23`,
    1590: `900`,
    1591: `901`,
    1592: `902`,
    1593: `903`,
    1594: `904`,
    1595: `904`,
    1596: `905`,
    1597: `906`,
    1598: `906`,
    1599: `906`,
    16: `2`,
    160: `23`,
    1600: `907`,
    1601: `907`,
    1602: `907`,
    1603: `908`,
    1604: `909`,
    1605: `909`,
    1606: `910`,
    1607: `911`,
    1608: `918`,
    1609: `918`,
    161: `23`,
    1610: `919`,
    1611: `919`,
    1612: `920`,
    1613: `920`,
    1614: `920`,
    1615: `921`,
    1616: `922`,
    1617: `922`,
    1618: `923`,
    1619: `923`,
    162: `23`,
    1620: `924`,
    1621: `926`,
    1622: `927`,
    1623: `927`,
    1624: `928`,
    1625: `929`,
    1626: `930`,
    1627: `930`,
    1628: `931`,
    1629: `932`,
    163: `23`,
    1630: `932`,
    1631: `932`,
    1632: `933`,
    1633: `933`,
    1634: `933`,
    1635: `934`,
    1636: `934`,
    1637: `935`,
    1638: `935`,
    1639: `936`,
    164: `23`,
    1640: `937`,
    1641: `937`,
    1642: `938`,
    1643: `939`,
    1644: `939`,
    1645: `940`,
    1646: `941`,
    1647: `942`,
    1648: `942`,
    1649: `943`,
    165: `23`,
    1650: `944`,
    1651: `945`,
    1652: `945`,
    1653: `946`,
    1654: `946`,
    1655: `946`,
    1656: `947`,
    1657: `948`,
    1658: `948`,
    1659: `948`,
    166: `23`,
    1660: `949`,
    1661: `950`,
    1662: `950`,
    1663: `951`,
    1664: `951`,
    1665: `951`,
    1666: `951`,
    1667: `951`,
    1668: `951`,
    1669: `951`,
    167: `23`,
    1670: `951`,
    1671: `951`,
    1672: `951`,
    1673: `952`,
    1674: `952`,
    1675: `953`,
    1676: `954`,
    1677: `954`,
    1678: `954`,
    1679: `955`,
    168: `23`,
    1680: `956`,
    1681: `957`,
    1682: `957`,
    1683: `958`,
    1684: `959`,
    1685: `959`,
    1686: `959`,
    1687: `960`,
    1688: `960`,
    1689: `961`,
    169: `23`,
    1690: `961`,
    1691: `962`,
    1692: `962`,
    1693: `963`,
    1694: `964`,
    1695: `965`,
    1696: `965`,
    1697: `966`,
    1698: `967`,
    1699: `967`,
    17: `2`,
    170: `23`,
    1700: `968`,
    1701: `968`,
    1702: `968`,
    1703: `968`,
    1704: `968`,
    1705: `968`,
    1706: `969`,
    1707: `969`,
    1708: `970`,
    1709: `971`,
    171: `23`,
    1710: `974`,
    1711: `975`,
    1712: `976`,
    1713: `976`,
    1714: `977`,
    1715: `977`,
    1716: `978`,
    1717: `979`,
    1718: `979`,
    1719: `979`,
    172: `23`,
    1720: `980`,
    1721: `981`,
    1722: `982`,
    1723: `983`,
    1724: `984`,
    1725: `984`,
    1726: `984`,
    1727: `985`,
    1728: `985`,
    1729: `986`,
    173: `23`,
    1730: `986`,
    1731: `987`,
    1732: `987`,
    1733: `987`,
    1734: `988`,
    1735: `988`,
    1736: `989`,
    1737: `990`,
    1738: `990`,
    1739: `991`,
    174: `23`,
    1740: `992`,
    1741: `992`,
    1742: `992`,
    1743: `993`,
    1744: `993`,
    1745: `994`,
    1746: `994`,
    1747: `995`,
    1748: `996`,
    1749: `997`,
    175: `23`,
    1750: `997`,
    1751: `998`,
    1752: `999`,
    1753: `999`,
    1754: `999`,
    1755: `1000`,
    1756: `1001`,
    1757: `1001`,
    1758: `1002`,
    1759: `1003`,
    176: `23`,
    1760: `1003`,
    1761: `1004`,
    1762: `1004`,
    1763: `1005`,
    1764: `1006`,
    1765: `1007`,
    1766: `1008`,
    1767: `1008`,
    1768: `1009`,
    1769: `1010`,
    177: `23`,
    1770: `1011`,
    1771: `1011`,
    1772: `1012`,
    1773: `1013`,
    1774: `1014`,
    1775: `1015`,
    1776: `1016`,
    1777: `1016`,
    1778: `1017`,
    1779: `1018`,
    178: `23`,
    1780: `1019`,
    1781: `1020`,
    1782: `1021`,
    1783: `1021`,
    1784: `1022`,
    1785: `1022`,
    1786: `1023`,
    1787: `1023`,
    1788: `1024`,
    1789: `1025`,
    179: `23`,
    1790: `1025`,
    1791: `1026`,
    1792: `1026`,
    1793: `1027`,
    1794: `1027`,
    1795: `1028`,
    1796: `1028`,
    1797: `1028`,
    1798: `1031`,
    1799: `1031`,
    18: `2`,
    180: `23`,
    1800: `1032`,
    1801: `1032`,
    1802: `1033`,
    1803: `1033`,
    1804: `1034`,
    1805: `1035`,
    1806: `1036`,
    1807: `1036`,
    1808: `1036`,
    1809: `1037`,
    181: `23`,
    1810: `1038`,
    1811: `1038`,
    1812: `1039`,
    1813: `1039`,
    1814: `1039`,
    1815: `1039`,
    1816: `1039`,
    1817: `1039`,
    1818: `1039`,
    1819: `1039`,
    182: `23`,
    1820: `1039`,
    1821: `1039`,
    1822: `1040`,
    1823: `1040`,
    1824: `1041`,
    1825: `1042`,
    1826: `1043`,
    1827: `1043`,
    1828: `1044`,
    1829: `1044`,
    183: `23`,
    1830: `1045`,
    1831: `1045`,
    1832: `1046`,
    1833: `1047`,
    1834: `1047`,
    1835: `1048`,
    1836: `1049`,
    1837: `1049`,
    1838: `1049`,
    1839: `1050`,
    184: `23`,
    1840: `1051`,
    1841: `1051`,
    1842: `1052`,
    1843: `1053`,
    1844: `1053`,
    1845: `1054`,
    1846: `1055`,
    1847: `1056`,
    1848: `1056`,
    1849: `1057`,
    185: `23`,
    1850: `1058`,
    1851: `1059`,
    1852: `1059`,
    1853: `1060`,
    1854: `1061`,
    1855: `1062`,
    1856: `1062`,
    1857: `1063`,
    1858: `1064`,
    1859: `1065`,
    186: `23`,
    1860: `1065`,
    1861: `1066`,
    1862: `1066`,
    1863: `1067`,
    1864: `1067`,
    1865: `1068`,
    1866: `1068`,
    1867: `1068`,
    1868: `1070`,
    1869: `1070`,
    187: `23`,
    1870: `1071`,
    1871: `1071`,
    1872: `1072`,
    1873: `1072`,
    1874: `1073`,
    1875: `1074`,
    1876: `1075`,
    1877: `1075`,
    1878: `1076`,
    1879: `1076`,
    188: `23`,
    1880: `1077`,
    1881: `1077`,
    1882: `1077`,
    1883: `1078`,
    1884: `1078`,
    1885: `1079`,
    1886: `1079`,
    1887: `1079`,
    1888: `1079`,
    1889: `1079`,
    189: `23`,
    1890: `1079`,
    1891: `1080`,
    1892: `1080`,
    1893: `1081`,
    1894: `1082`,
    1895: `1083`,
    1896: `1083`,
    1897: `1084`,
    1898: `1085`,
    1899: `1087`,
    19: `2`,
    190: `23`,
    1900: `1087`,
    1901: `1088`,
    1902: `1088`,
    1903: `1088`,
    1904: `1089`,
    1905: `1089`,
    1906: `1089`,
    1907: `1089`,
    1908: `1089`,
    1909: `1089`,
    191: `23`,
    1910: `1089`,
    1911: `1089`,
    1912: `1089`,
    1913: `1089`,
    1914: `1089`,
    1915: `1089`,
    1916: `1089`,
    1917: `1089`,
    1918: `1089`,
    1919: `1089`,
    192: `23`,
    1920: `1089`,
    1921: `1089`,
    1922: `1089`,
    1923: `1089`,
    1924: `1089`,
    1925: `1089`,
    1926: `1089`,
    1927: `1089`,
    1928: `1089`,
    1929: `1089`,
    193: `23`,
    1930: `1089`,
    1931: `1089`,
    1932: `1089`,
    1933: `1089`,
    1934: `1089`,
    1935: `1089`,
    1936: `1089`,
    1937: `1089`,
    1938: `1089`,
    1939: `1089`,
    194: `23`,
    1940: `1089`,
    1941: `1089`,
    1942: `1089`,
    1943: `1089`,
    1944: `1089`,
    1945: `1089`,
    1946: `1089`,
    1947: `1089`,
    1948: `1089`,
    1949: `1089`,
    195: `23`,
    1950: `1089`,
    1951: `1089`,
    1952: `1089`,
    1953: `1089`,
    1954: `1089`,
    1955: `1089`,
    1956: `1089`,
    1957: `1089`,
    1958: `1089`,
    1959: `1089`,
    196: `23`,
    1960: `1089`,
    1961: `1089`,
    1962: `1089`,
    1963: `1089`,
    1964: `1090`,
    1965: `1090`,
    1966: `1091`,
    1967: `1092`,
    1968: `1092`,
    1969: `1093`,
    197: `23`,
    1970: `1093`,
    1971: `1094`,
    1972: `1094`,
    1973: `1095`,
    1974: `1095`,
    1975: `1095`,
    1976: `1097`,
    1977: `1097`,
    1978: `1097`,
    1979: `1098`,
    198: `25`,
    1980: `1098`,
    1981: `1098`,
    1982: `1098`,
    1983: `1099`,
    1984: `1099`,
    1985: `1099`,
    1986: `1100`,
    1987: `1100`,
    1988: `1100`,
    1989: `1101`,
    199: `27`,
    1990: `1101`,
    1991: `1102`,
    1992: `1102`,
    1993: `1102`,
    1994: `1104`,
    1995: `1104`,
    1996: `1104`,
    1997: `1105`,
    1998: `1105`,
    1999: `1105`,
    2: `2`,
    20: `2`,
    200: `27`,
    2000: `1106`,
    2001: `1106`,
    2002: `1107`,
    2003: `1107`,
    2004: `1107`,
    2005: `1109`,
    2006: `1110`,
    2007: `1110`,
    2008: `1111`,
    2009: `1112`,
    201: `27`,
    2010: `1113`,
    2011: `1114`,
    2012: `1114`,
    2013: `1115`,
    2014: `1116`,
    2015: `1117`,
    2016: `1118`,
    2017: `1118`,
    2018: `1119`,
    2019: `1120`,
    202: `28`,
    2020: `1121`,
    2021: `1122`,
    2022: `1122`,
    2023: `1123`,
    2024: `1124`,
    2025: `1125`,
    2026: `1125`,
    2027: `1125`,
    2028: `1126`,
    2029: `1126`,
    203: `28`,
    2030: `1126`,
    2031: `1127`,
    2032: `1128`,
    2033: `1129`,
    2034: `1130`,
    2035: `1130`,
    2036: `1130`,
    2037: `1132`,
    2038: `1132`,
    2039: `1132`,
    204: `30`,
    2040: `1134`,
    2041: `1134`,
    2042: `1135`,
    2043: `1135`,
    2044: `1135`,
    2045: `1136`,
    2046: `1136`,
    2047: `1137`,
    2048: `1137`,
    2049: `1137`,
    205: `31`,
    2050: `1139`,
    2051: `1139`,
    2052: `1140`,
    2053: `1140`,
    2054: `1140`,
    2055: `1141`,
    2056: `1141`,
    2057: `1142`,
    2058: `1142`,
    2059: `1142`,
    206: `32`,
    2060: `1144`,
    2061: `1144`,
    2062: `1144`,
    2063: `1146`,
    2064: `1146`,
    2065: `1147`,
    2066: `1147`,
    2067: `1148`,
    2068: `1148`,
    2069: `1148`,
    207: `33`,
    2070: `1150`,
    2071: `1150`,
    2072: `1151`,
    2073: `1151`,
    2074: `1152`,
    2075: `1152`,
    2076: `1153`,
    2077: `1154`,
    2078: `1155`,
    2079: `1155`,
    208: `33`,
    2080: `1155`,
    2081: `1156`,
    2082: `1156`,
    2083: `1157`,
    2084: `1157`,
    2085: `1158`,
    2086: `1158`,
    2087: `1158`,
    2088: `1159`,
    2089: `1159`,
    209: `34`,
    2090: `1160`,
    2091: `1161`,
    2092: `1161`,
    2093: `1162`,
    2094: `1163`,
    2095: `1163`,
    2096: `1163`,
    2097: `1164`,
    2098: `1164`,
    2099: `1165`,
    21: `2`,
    210: `35`,
    2100: `1165`,
    2101: `1166`,
    2102: `1167`,
    2103: `1168`,
    2104: `1168`,
    2105: `1169`,
    2106: `1170`,
    2107: `1170`,
    2108: `1170`,
    2109: `1171`,
    211: `35`,
    2110: `1172`,
    2111: `1172`,
    2112: `1173`,
    2113: `1174`,
    2114: `1174`,
    2115: `1175`,
    2116: `1175`,
    2117: `1176`,
    2118: `1177`,
    2119: `1178`,
    212: `36`,
    2120: `1179`,
    2121: `1179`,
    2122: `1180`,
    2123: `1181`,
    2124: `1182`,
    2125: `1182`,
    2126: `1183`,
    2127: `1184`,
    2128: `1185`,
    2129: `1186`,
    213: `37`,
    2130: `1187`,
    2131: `1187`,
    2132: `1188`,
    2133: `1189`,
    2134: `1190`,
    2135: `1190`,
    2136: `1191`,
    2137: `1191`,
    2138: `1192`,
    2139: `1192`,
    214: `38`,
    2140: `1193`,
    2141: `1194`,
    2142: `1194`,
    2143: `1195`,
    2144: `1195`,
    2145: `1196`,
    2146: `1196`,
    2147: `1197`,
    2148: `1197`,
    2149: `1197`,
    215: `39`,
    2150: `1199`,
    2151: `1199`,
    2152: `1201`,
    2153: `1201`,
    2154: `1202`,
    2155: `1202`,
    2156: `1202`,
    2157: `1203`,
    2158: `1203`,
    2159: `1204`,
    216: `39`,
    2160: `1205`,
    2161: `1205`,
    2162: `1206`,
    2163: `1207`,
    2164: `1208`,
    2165: `1208`,
    2166: `1209`,
    2167: `1210`,
    2168: `1211`,
    2169: `1213`,
    217: `41`,
    2170: `1214`,
    2171: `1214`,
    2172: `1215`,
    2173: `1215`,
    2174: `1216`,
    2175: `1216`,
    2176: `1216`,
    2177: `1218`,
    2178: `1218`,
    2179: `1219`,
    218: `42`,
    2180: `1219`,
    2181: `1220`,
    2182: `1221`,
    2183: `1223`,
    2184: `1223`,
    2185: `1223`,
    2186: `1225`,
    2187: `1225`,
    2188: `1226`,
    2189: `1227`,
    219: `42`,
    2190: `1227`,
    2191: `1228`,
    2192: `1229`,
    2193: `1231`,
    2194: `1232`,
    2195: `1232`,
    2196: `1233`,
    2197: `1233`,
    2198: `1234`,
    2199: `1234`,
    22: `2`,
    220: `43`,
    2200: `1234`,
    2201: `1235`,
    2202: `1235`,
    2203: `1235`,
    2204: `1237`,
    2205: `1238`,
    2206: `1239`,
    2207: `1240`,
    2208: `1241`,
    2209: `1243`,
    221: `44`,
    2210: `1244`,
    2211: `1244`,
    2212: `1245`,
    2213: `1246`,
    2214: `1246`,
    2215: `1247`,
    2216: `1247`,
    2217: `1248`,
    2218: `1248`,
    2219: `1249`,
    222: `45`,
    2220: `1250`,
    2221: `1252`,
    2222: `1252`,
    2223: `1252`,
    2224: `1254`,
    2225: `1254`,
    2226: `1254`,
    2227: `1256`,
    2228: `1256`,
    2229: `1257`,
    223: `45`,
    2230: `1257`,
    2231: `1257`,
    2232: `1258`,
    2233: `1258`,
    2234: `1259`,
    2235: `1259`,
    2236: `1259`,
    2237: `1261`,
    2238: `1261`,
    2239: `1261`,
    224: `45`,
    2240: `1263`,
    2241: `1264`,
    2242: `1266`,
    2243: `1267`,
    2244: `1268`,
    2245: `1269`,
    2246: `1269`,
    2247: `1270`,
    2248: `1270`,
    2249: `1271`,
    225: `46`,
    2250: `1271`,
    2251: `1271`,
    2252: `1272`,
    2253: `1274`,
    2254: `1275`,
    2255: `1276`,
    2256: `1276`,
    2257: `1276`,
    2258: `1277`,
    2259: `1278`,
    226: `46`,
    2260: `1278`,
    2261: `1279`,
    2262: `1279`,
    2263: `1279`,
    2264: `1280`,
    2265: `1282`,
    2266: `1283`,
    2267: `1284`,
    2268: `1285`,
    2269: `1285`,
    227: `47`,
    2270: `1285`,
    2271: `1286`,
    2272: `1286`,
    2273: `1287`,
    2274: `1288`,
    2275: `1289`,
    2276: `1291`,
    2277: `1292`,
    2278: `1292`,
    2279: `1292`,
    228: `48`,
    2280: `1293`,
    2281: `1293`,
    2282: `1294`,
    2283: `1295`,
    2284: `1295`,
    2285: `1295`,
    2286: `1296`,
    2287: `1296`,
    2288: `1297`,
    2289: `1298`,
    229: `49`,
    2290: `1298`,
    2291: `1299`,
    2292: `1300`,
    2293: `1300`,
    2294: `1301`,
    2295: `1302`,
    2296: `1302`,
    2297: `1303`,
    2298: `1304`,
    2299: `1304`,
    23: `2`,
    230: `49`,
    2300: `1305`,
    2301: `1306`,
    2302: `1306`,
    2303: `1306`,
    2304: `1307`,
    2305: `1308`,
    2306: `1308`,
    2307: `1309`,
    2308: `1310`,
    2309: `1310`,
    231: `50`,
    2310: `1310`,
    2311: `1311`,
    2312: `1311`,
    2313: `1312`,
    2314: `1313`,
    2315: `1313`,
    2316: `1314`,
    2317: `1315`,
    2318: `1315`,
    2319: `1316`,
    232: `50`,
    2320: `1317`,
    2321: `1317`,
    2322: `1318`,
    2323: `1319`,
    2324: `1319`,
    2325: `1320`,
    2326: `1321`,
    2327: `1321`,
    2328: `1322`,
    2329: `1323`,
    233: `51`,
    2330: `1323`,
    2331: `1324`,
    2332: `1324`,
    2333: `1325`,
    2334: `1326`,
    2335: `1326`,
    2336: `1327`,
    2337: `1329`,
    2338: `1330`,
    2339: `1331`,
    234: `51`,
    2340: `1332`,
    2341: `1332`,
    2342: `1332`,
    2343: `1333`,
    2344: `1333`,
    2345: `1334`,
    2346: `1334`,
    2347: `1334`,
    2348: `1335`,
    2349: `1335`,
    235: `51`,
    2350: `1335`,
    2351: `1337`,
    2352: `1338`,
    2353: `1338`,
    2354: `1338`,
    2355: `1340`,
    2356: `1341`,
    2357: `1341`,
    2358: `1341`,
    2359: `1342`,
    236: `52`,
    2360: `1343`,
    2361: `1344`,
    2362: `1345`,
    2363: `1346`,
    2364: `1348`,
    2365: `1349`,
    2366: `1350`,
    2367: `1350`,
    2368: `1351`,
    2369: `1353`,
    237: `52`,
    2370: `1353`,
    2371: `1354`,
    2372: `1355`,
    2373: `1355`,
    2374: `1356`,
    2375: `1359`,
    2376: `1359`,
    2377: `1360`,
    2378: `1360`,
    2379: `1361`,
    238: `53`,
    2380: `1362`,
    2381: `1363`,
    2382: `1364`,
    2383: `1364`,
    2384: `1365`,
    2385: `1366`,
    2386: `1366`,
    2387: `1367`,
    2388: `1367`,
    2389: `1368`,
    239: `53`,
    2390: `1368`,
    2391: `1369`,
    2392: `1370`,
    2393: `1371`,
    2394: `1371`,
    2395: `1372`,
    2396: `1373`,
    2397: `1374`,
    2398: `1375`,
    2399: `1375`,
    24: `2`,
    240: `53`,
    2400: `1376`,
    2401: `1377`,
    2402: `1378`,
    2403: `1380`,
    2404: `1381`,
    2405: `1381`,
    2406: `1382`,
    2407: `1384`,
    2408: `1385`,
    2409: `1386`,
    241: `53`,
    2410: `1387`,
    2411: `1388`,
    2412: `1388`,
    2413: `1389`,
    2414: `1390`,
    2415: `1391`,
    2416: `1392`,
    2417: `1394`,
    2418: `1394`,
    2419: `1395`,
    242: `53`,
    2420: `1395`,
    2421: `1396`,
    2422: `1397`,
    2423: `1398`,
    2424: `1398`,
    2425: `1398`,
    2426: `1399`,
    2427: `1399`,
    2428: `1399`,
    2429: `1401`,
    243: `53`,
    2430: `1401`,
    2431: `1402`,
    2432: `1403`,
    2433: `1403`,
    2434: `1404`,
    244: `54`,
    245: `54`,
    246: `55`,
    247: `56`,
    248: `57`,
    249: `57`,
    25: `2`,
    250: `58`,
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
    537: `210`,
    538: `213`,
    539: `213`,
    54: `21`,
    540: `213`,
    541: `215`,
    542: `215`,
    543: `215`,
    544: `216`,
    545: `216`,
    546: `218`,
    547: `218`,
    548: `219`,
    549: `220`,
    55: `21`,
    550: `221`,
    551: `224`,
    552: `224`,
    553: `224`,
    554: `226`,
    555: `227`,
    556: `228`,
    557: `228`,
    558: `229`,
    559: `229`,
    56: `21`,
    560: `230`,
    561: `231`,
    562: `231`,
    563: `231`,
    564: `232`,
    565: `233`,
    566: `234`,
    567: `235`,
    568: `236`,
    569: `237`,
    57: `21`,
    570: `237`,
    571: `237`,
    572: `238`,
    573: `238`,
    574: `239`,
    575: `239`,
    576: `239`,
    577: `242`,
    578: `242`,
    579: `243`,
    58: `21`,
    580: `244`,
    581: `245`,
    582: `248`,
    583: `248`,
    584: `248`,
    585: `249`,
    586: `249`,
    587: `250`,
    588: `251`,
    589: `251`,
    59: `21`,
    590: `252`,
    591: `252`,
    592: `252`,
    593: `255`,
    594: `255`,
    595: `256`,
    596: `257`,
    597: `258`,
    598: `261`,
    599: `261`,
    6: `2`,
    60: `21`,
    600: `261`,
    601: `262`,
    602: `262`,
    603: `263`,
    604: `264`,
    605: `264`,
    606: `265`,
    607: `265`,
    608: `265`,
    609: `268`,
    61: `21`,
    610: `268`,
    611: `269`,
    612: `270`,
    613: `271`,
    614: `274`,
    615: `274`,
    616: `274`,
    617: `275`,
    618: `275`,
    619: `276`,
    62: `21`,
    620: `277`,
    621: `277`,
    622: `278`,
    623: `278`,
    624: `278`,
    625: `281`,
    626: `281`,
    627: `282`,
    628: `283`,
    629: `284`,
    63: `21`,
    630: `287`,
    631: `287`,
    632: `287`,
    633: `288`,
    634: `288`,
    635: `289`,
    636: `290`,
    637: `290`,
    638: `291`,
    639: `291`,
    64: `21`,
    640: `291`,
    641: `293`,
    642: `293`,
    643: `293`,
    644: `294`,
    645: `294`,
    646: `296`,
    647: `296`,
    648: `297`,
    649: `298`,
    65: `21`,
    650: `299`,
    651: `302`,
    652: `302`,
    653: `302`,
    654: `303`,
    655: `304`,
    656: `306`,
    657: `307`,
    658: `308`,
    659: `309`,
    66: `21`,
    660: `310`,
    661: `310`,
    662: `311`,
    663: `312`,
    664: `312`,
    665: `312`,
    666: `313`,
    667: `313`,
    668: `313`,
    669: `314`,
    67: `21`,
    670: `314`,
    671: `315`,
    672: `315`,
    673: `315`,
    674: `317`,
    675: `317`,
    676: `317`,
    677: `318`,
    678: `318`,
    679: `318`,
    68: `21`,
    680: `319`,
    681: `320`,
    682: `320`,
    683: `321`,
    684: `321`,
    685: `323`,
    686: `324`,
    687: `327`,
    688: `327`,
    689: `327`,
    69: `21`,
    690: `329`,
    691: `329`,
    692: `329`,
    693: `330`,
    694: `331`,
    695: `331`,
    696: `331`,
    697: `332`,
    698: `333`,
    699: `333`,
    7: `2`,
    70: `21`,
    700: `334`,
    701: `334`,
    702: `336`,
    703: `337`,
    704: `338`,
    705: `338`,
    706: `338`,
    707: `339`,
    708: `339`,
    709: `340`,
    71: `21`,
    710: `341`,
    711: `341`,
    712: `342`,
    713: `343`,
    714: `344`,
    715: `345`,
    716: `345`,
    717: `346`,
    718: `347`,
    719: `348`,
    72: `21`,
    720: `348`,
    721: `349`,
    722: `349`,
    723: `349`,
    724: `352`,
    725: `352`,
    726: `352`,
    727: `352`,
    728: `352`,
    729: `352`,
    73: `21`,
    730: `352`,
    731: `352`,
    732: `352`,
    733: `352`,
    734: `352`,
    735: `352`,
    736: `352`,
    737: `352`,
    738: `352`,
    739: `352`,
    74: `21`,
    740: `352`,
    741: `352`,
    742: `352`,
    743: `352`,
    744: `352`,
    745: `352`,
    746: `352`,
    747: `352`,
    748: `352`,
    749: `352`,
    75: `21`,
    750: `352`,
    751: `352`,
    752: `352`,
    753: `352`,
    754: `352`,
    755: `352`,
    756: `352`,
    757: `352`,
    758: `352`,
    759: `352`,
    76: `21`,
    760: `352`,
    761: `352`,
    762: `352`,
    763: `352`,
    764: `352`,
    765: `352`,
    766: `352`,
    767: `352`,
    768: `352`,
    769: `352`,
    77: `21`,
    770: `352`,
    771: `352`,
    772: `352`,
    773: `352`,
    774: `352`,
    775: `352`,
    776: `352`,
    777: `352`,
    778: `352`,
    779: `352`,
    78: `21`,
    780: `352`,
    781: `352`,
    782: `352`,
    783: `353`,
    784: `353`,
    785: `354`,
    786: `354`,
    787: `354`,
    788: `356`,
    789: `356`,
    79: `21`,
    790: `357`,
    791: `357`,
    792: `358`,
    793: `360`,
    794: `361`,
    795: `362`,
    796: `363`,
    797: `363`,
    798: `364`,
    799: `365`,
    8: `2`,
    80: `21`,
    800: `365`,
    801: `365`,
    802: `366`,
    803: `367`,
    804: `368`,
    805: `369`,
    806: `370`,
    807: `371`,
    808: `379`,
    809: `379`,
    81: `21`,
    810: `380`,
    811: `381`,
    812: `381`,
    813: `382`,
    814: `382`,
    815: `382`,
    816: `383`,
    817: `384`,
    818: `385`,
    819: `385`,
    82: `21`,
    820: `385`,
    821: `386`,
    822: `387`,
    823: `387`,
    824: `388`,
    825: `388`,
    826: `388`,
    827: `388`,
    828: `388`,
    829: `388`,
    83: `21`,
    830: `388`,
    831: `388`,
    832: `388`,
    833: `388`,
    834: `389`,
    835: `389`,
    836: `390`,
    837: `391`,
    838: `392`,
    839: `392`,
    84: `21`,
    840: `393`,
    841: `393`,
    842: `394`,
    843: `394`,
    844: `395`,
    845: `396`,
    846: `396`,
    847: `397`,
    848: `398`,
    849: `398`,
    85: `21`,
    850: `398`,
    851: `399`,
    852: `400`,
    853: `400`,
    854: `401`,
    855: `402`,
    856: `402`,
    857: `403`,
    858: `404`,
    859: `405`,
    86: `21`,
    860: `405`,
    861: `406`,
    862: `407`,
    863: `408`,
    864: `408`,
    865: `409`,
    866: `410`,
    867: `411`,
    868: `411`,
    869: `412`,
    87: `21`,
    870: `413`,
    871: `414`,
    872: `414`,
    873: `415`,
    874: `415`,
    875: `416`,
    876: `416`,
    877: `418`,
    878: `418`,
    879: `419`,
    88: `21`,
    880: `419`,
    881: `419`,
    882: `420`,
    883: `421`,
    884: `421`,
    885: `421`,
    886: `422`,
    887: `422`,
    888: `423`,
    889: `424`,
    89: `21`,
    890: `425`,
    891: `425`,
    892: `426`,
    893: `426`,
    894: `427`,
    895: `427`,
    896: `427`,
    897: `428`,
    898: `429`,
    899: `429`,
    9: `2`,
    90: `21`,
    900: `430`,
    901: `430`,
    902: `431`,
    903: `431`,
    904: `431`,
    905: `432`,
    906: `432`,
    907: `433`,
    908: `433`,
    909: `434`,
    91: `21`,
    910: `434`,
    911: `435`,
    912: `436`,
    913: `436`,
    914: `437`,
    915: `437`,
    916: `438`,
    917: `438`,
    918: `439`,
    919: `440`,
    92: `21`,
    920: `440`,
    921: `441`,
    922: `441`,
    923: `442`,
    924: `442`,
    925: `443`,
    926: `444`,
    927: `444`,
    928: `445`,
    929: `445`,
    93: `21`,
    930: `446`,
    931: `446`,
    932: `447`,
    933: `448`,
    934: `448`,
    935: `450`,
    936: `450`,
    937: `451`,
    938: `451`,
    939: `452`,
    94: `21`,
    940: `453`,
    941: `453`,
    942: `454`,
    943: `455`,
    944: `456`,
    945: `456`,
    946: `457`,
    947: `458`,
    948: `459`,
    949: `459`,
    95: `21`,
    950: `460`,
    951: `461`,
    952: `461`,
    953: `461`,
    954: `462`,
    955: `463`,
    956: `463`,
    957: `464`,
    958: `465`,
    959: `465`,
    96: `21`,
    960: `466`,
    961: `467`,
    962: `468`,
    963: `468`,
    964: `469`,
    965: `470`,
    966: `471`,
    967: `471`,
    968: `472`,
    969: `473`,
    97: `21`,
    970: `474`,
    971: `474`,
    972: `475`,
    973: `476`,
    974: `477`,
    975: `478`,
    976: `478`,
    977: `480`,
    978: `480`,
    979: `481`,
    98: `21`,
    980: `481`,
    981: `482`,
    982: `483`,
    983: `483`,
    984: `484`,
    985: `484`,
    986: `484`,
    987: `485`,
    988: `486`,
    989: `487`,
    99: `21`,
    990: `488`,
    991: `488`,
    992: `488`,
    993: `489`,
    994: `490`,
    995: `491`,
    996: `491`,
    997: `492`,
    998: `493`,
    999: `493`
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T16","name":"v9554","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_133","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_133","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_133","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_133","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_133","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_133","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_133","type":"tuple"},{"internalType":"bool","name":"_User_optin0_133","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3616","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4010","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4410","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4799","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5189","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5602","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6061","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6481","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v9505","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9511","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9518","type":"address"},{"internalType":"uint256","name":"v9519","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9529","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9537","type":"address"},{"internalType":"address payable","name":"v9538","type":"address"},{"internalType":"uint256","name":"v9539","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9471","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9477","type":"address"},{"internalType":"address payable","name":"v9478","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9482","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9494","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9498","type":"address"},{"internalType":"address payable","name":"v9499","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9546","type":"uint256"},{"internalType":"address payable","name":"v9547","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_133","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_133","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_133","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_133","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_133","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_133","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_133","type":"tuple"},{"internalType":"bool","name":"_User_optin0_133","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v9557","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62004c1038819003918201601f19168301916001600160401b03831184841017620005a15780849260409485528339810103126200070c576020604051916200004c8362000711565b80518352015161ffff19811681036200070c576020820152600080554360035560405161026081016001600160401b03811182821017620005a157600091610240916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201528261022082015201526040519081606081011060018060401b03606084011117620005a15760608201604052620001376060830162000711565b6000606083015260006080830152606082018252620001556200072d565b6020830152620001646200075d565b604083015260ff60045416620006f3577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a180518015908115620006e6575b5015620006cd5734620006b45760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152604051918260a081011060018060401b0360a085011117620005a15760409060a0840182526000845260006020850152620002736200075d565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b03602083011117620005a1576020818101604090815260008352830151015115620005b757506040516001600160401b03610140820190811190821117620005a15780610140610120920160405260008152600060208201526000604082015260006060820152600060808201526200032a6200072d565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c08101518284015260e0810151610140840152610100810151610160840152015161018082015261018081526101a0810181811060018060401b03821117620005a15760405280516001600160401b038111620005a15762000491600254620007af565b601f811162000553575b50602091601f8211600114620004e957918192600092620004dd575b50508160011b916000199060031b1c1916176002555b6040516143ea9081620008068239f35b015190503880620004b7565b601f19821692600260005260206000209160005b8581106200053a5750836001951062000520575b505050811b01600255620004cd565b015160001960f88460031b161c1916905538808062000511565b91926020600181928685015181550194019201620004fd565b60026000526200058f9060008051602062004bf0833981519152601f840160051c8101916020851062000596575b601f0160051c0190620007ec565b386200049b565b909150819062000581565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620006aa575bf115620006945760008093928193928293478093525116828215620006a0575bf115620006945760008055600060015562000613600254620007af565b8062000621575b50620004cd565b601f81116001146200063b575060006002555b386200061a565b60026000526200068390601f0160051c60008051602062004bf0833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620007ec565b600060208120816002555562000634565b6040513d6000823e3d90fd5b506108fc620005f6565b506108fc620005d6565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b90506001541438620001c1565b60405163100960cb60e01b815260116004820152602490fd5b600080fd5b604081019081106001600160401b03821117620005a157604052565b604051906200073c8262000711565b60006020836040516200074f8162000711565b838152838382015281520152565b6040519060e082016001600160401b03811183821017620005a1576040528160c0600091828152826020820152620007946200072d565b60408201528260608201528260808201528260a08201520152565b90600182811c92168015620007e1575b6020831014620007cb57565b634e487b7160e01b600052602260045260246000fd5b91607f1691620007bf565b818110620007f8575050565b60008155600101620007ec56fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610c515780631548a30d14610c315780631e93b0f114610c1257806336e56ea514610bb15780633702d0ce14610b755780634ab9f8b314610b1f578063523df4f614610abc578063544774a914610a6257806355c42a9514610a22578063582523cd1461097b578063672422c71461092d57806374623535146108f157806374ecfa441461070e57806374f16ec91461067a5780637a2b54dc146106375780637f0595e2146105d057806383230757146105b1578063883513de1461056557806392cf8bd514610518578063a579242414610491578063a855bc10146103dd578063ab53f2c614610371578063b87939c7146102bf578063bf7df9c314610270578063cd6637a814610223578063f1b1259d146101be5763f33c0dce146101525750610010565b346101ba57816003193601126101ba57600361016c611185565b9254036101a35760206101a08484610100610196610188610e2d565b86808251830101910161139d565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b5080fd5b5090346102205782600319360112610220575060106024926101de610cb3565b60206101e8610cce565b916101f1611185565b508351926101fe84610d6b565b6001600160a01b039182168452169101525163100960cb60e01b815291820152fd5b80fd5b50346101ba57816003193601126101ba57600361023e611185565b925403610259576020610180848460c0610196610188610e2d565b602490600c84519163100960cb60e01b8352820152fd5b508290346102bb5760203660031901126102bb5735916001600160a01b038316830361022057506102ac6102b7926102a6610ed8565b50611134565b905191829182610d04565b0390f35b8280fd5b509034610220576020366003190112610220576102da610cb3565b6102e2611185565b92600383540361035a5760206101e0868681878761030f610301610e2d565b88808251830101910161139d565b506001600160a01b031690600161032583610ef7565b5161032f81610ce4565b61033881610ce4565b0361034f575061019690610ef7565b015251908152f35b915050928391610347565b602490600f86519163100960cb60e01b8352820152fd5b8284346101ba57816003193601126101ba57815461038d610e2d565b91805193849283526020828185015284518093850152815b8381106103c657505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016103a5565b5091908160031936011261022057610220906104866103fa610cce565b94610403611185565b92839186519061041282610d6b565b3581526001600160a01b03978816602082810191825288519099909161043783610d6b565b895161044281610d6b565b858152858c82015283528a830193610458611221565b8552518351525116898251015260068251525160e0825101526104796112f9565b9182525187820152611506565b015115159051908152f35b50346101ba5760203660031901126101ba576104ab610cb3565b9060036104b6611185565b935403610501576020610140858560016104e2876104d5610301610e2d565b50828060a01b0316611134565b516104ec81610ce4565b6104f581610ce4565b14928391015251908152f35b602490600a85519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba576003610533611185565b92540361054e576020610160848460e0610196610188610e2d565b602490600b84519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba576003610580611185565b92540361059a576020610100848481610196610188610e2d565b602490600884519163100960cb60e01b8352820152fd5b8284346101ba57816003193601126101ba576020906001549051908152f35b50346101ba5760203660031901126101ba576105ea610cb3565b9060036105f5611185565b93540361062057602060e0858560016104e287610613610301610e2d565b50828060a01b0316611068565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101ba57610240602092610486610655611185565b809261065f6112f9565b878101906007825152511515610100825101526104796112f9565b8284806003193601126101ba576060610691610cb3565b9261048661069d611185565b809285516106aa81610d6b565b60209788820160018060a01b03809216835260243581528851916106cd83610d6b565b89516106d881610d6b565b858152858c82015283528a8301936106ee611221565b8552511682515251898251015260028251525186825101526104796112f9565b50916101c03660031901126101ba57610725611185565b815161073081610d6b565b843581526101a03660231901126108ed578251946101208601906001600160401b038211878310176108da5750835260243560088110156108d6578552602094856043193601126108d657835161078681610d9c565b6001600160a01b039060443582811681036108d257815287830152866063193601126108ca5784516107b781610d9c565b606435815285830152846083193601126108ca5784516107d681610d6b565b60843582811681036108d257815260a43588820152606083015260c43580151581036108ce5760808301528660e3193601126108ca57845161081781610d9c565b60e43582811681036108d257815260a08301526060366101031901126108ca57845161084281610db7565b6101043582811681036108d25781526101243582811681036108d25788820152610144358682015260c083015284610163193601126108ca5784519061088782610d6b565b6101643582526101843590811681036108ce578782015260e08201526101a43580151581036108ca57610100820152858201526108c49190611506565b51908152f35b8580fd5b8680fd5b8780fd5b8480fd5b634e487b7160e01b865260419052602485fd5b8380fd5b508290346102bb5760203660031901126102bb5735916001600160a01b038316830361022057506102ac6102b792610927610ed8565b50611068565b50346101ba57816003193601126101ba576003610948611185565b9254036109645760206101c08484610120610196610188610e2d565b602490600e84519163100960cb60e01b8352820152fd5b828460603660031901126101ba5760c0602092610486610999610cb3565b916109a2610cce565b906109ab611185565b9384926109b6610ed8565b6001600160a01b0392831681529082168982019081526044358983019081528951929390916109e484610d6b565b6109ec610ed8565b8452818c8501956109fb611221565b8752511684515251168a8351015251888251015260058251525186825101526104796112f9565b8284816003193601126101ba576080602092610486610a3f611185565b8092610a496112f9565b87810190600382515251151586825101526104796112f9565b5091903461022057602036600319011261022057506020610a8e608093610a87610f7a565b5035610fb0565b91808051938051610a9e81610ce4565b85528381015115158486015201519081519084015201516060820152f35b6020848436600319018313610220578290610486610ad8610cb3565b610ae0611185565b928391610aeb6112ca565b80516001600160a01b03909216909152858101805183905290518151870152610b126112f9565b9182525185820152611506565b50829060203660031901126102bb5760a090610486602094610b3f610cb3565b90610b48611185565b938492610b536112ca565b908151906001808a1b03169052888101918251525186825101526104796112f9565b508290346102bb5760203660031901126102bb5735916001600160a01b038316830361022057506102ac6102b792610bab610ed8565b506110e3565b508290346102bb5760203660031901126102bb5735916001600160a01b03831683036102205750610bec606092610be6610ed8565b50610ef7565b90808051928051610bfc81610ce4565b8452602081015115156020850152015190820152f35b8284346101ba57816003193601126101ba576020906003549051908152f35b5090346102205782600319360112610220575060096024926101de610cb3565b50829060203660031901126102bb576020926104868392610c70611185565b9283918551610c7e81610d6b565b8651610c8981610d9c565b838152815288810191610c9a611221565b83523581515260018251525186825101526104796112f9565b600435906001600160a01b0382168203610cc957565b600080fd5b602435906001600160a01b0382168203610cc957565b60021115610cee57565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610d1a81610ce4565b845260208101511515602085015201511515910152565b90600182811c92168015610d61575b6020831014610d4b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d40565b604081019081106001600160401b03821117610d8657604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117610d8657604052565b606081019081106001600160401b03821117610d8657604052565b61014081019081106001600160401b03821117610d8657604052565b6101a081019081106001600160401b03821117610d8657604052565b601f909101601f19168101906001600160401b03821190821017610d8657604052565b6040519060008260025491610e4183610d31565b808352600193808516908115610eb75750600114610e69575b50610e6792500383610e0a565b565b6002600090815260008051602061439e83398151915294602093509091905b818310610e9f575050610e67935082010138610e5a565b85548884018501529485019487945091830191610e88565b9050610e6794506020925060ff191682840152151560051b82010138610e5a565b60405190610ee582610db7565b60006040838281528260208201520152565b90610f00610ed8565b9160018060a01b03166000908082526005602052600160ff604084205416610f2781610ce4565b03610f6f5760409293508152600560205220600160405191610f4883610db7565b60ff8154818116610f5881610ce4565b855260081c16151560208401520154604082015290565b508083526020830152565b60405190610f8782610db7565b8160008152600060208201526040805191610fa183610d6b565b60008352600060208401520152565b610fb8610f7a565b906000908082526006602052604092600160ff8585205416610fd981610ce4565b0361105957508152600660205281812091805192610ff684610db7565b60ff815481811661100681610ce4565b865260081c1615156020850152815192838301906001600160401b03821185831017611045575082526001810154835260020154602083015282015290565b634e487b7160e01b81526041600452602490fd5b80949350829150526020830152565b90611071610ed8565b9160018060a01b03166000908082526007602052600160ff60408420541661109881610ce4565b03610f6f576040929350815260076020522060ff604051916110b983610db7565b548181166110c681610ce4565b8352818160081c161515602084015260101c161515604082015290565b906110ec610ed8565b9160018060a01b03166000908082526008602052600160ff60408420541661111381610ce4565b03610f6f576040929350815260086020522060ff604051916110b983610db7565b9061113d610ed8565b9160018060a01b03166000908082526009602052600160ff60408420541661116481610ce4565b03610f6f576040929350815260096020522060ff604051916110b983610db7565b6040519061026082016001600160401b03811183821017610d8657604052816102406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e082015282610200820152826102208201520152565b60408051919061012083016001600160401b03811184821017610d8657815261010083600092838252805161125581610d9c565b8481526020830152805161126881610d9c565b84815281830152805161127a81610d6b565b8481528460208201526060830152836080830152805161129981610d9c565b84815260a08301526112a9610ed8565b60c0830152516112b881610d6b565b83815283602082015260e08201520152565b604051906112d782610d6b565b816040516112e481610d9c565b60008152815260206112f4611221565b910152565b6040519061130682610d6b565b816000815260206112f4611221565b6040519061132282610d6b565b600060208360405161133381610d6b565b838152838382015281520152565b6040519060e082016001600160401b03811183821017610d86576040528160c0600091828152826020820152611375611315565b60408201528260608201528260808201528260a08201520152565b51908115158203610cc957565b8091036101808112610cc9576040805192610140928385016001600160401b03811186821017610d8657835281516001600160a01b0381168103610cc9578552602082015161ffff1981168103610cc957602086015282820151838601526060820151606086015261141160808301611390565b6080860152609f190160608112610cc9578280519161142f83610d6b565b12610cc957610160925161144281610d6b565b60a0830151815260c08301516020820152815261146160e08301611390565b602082015260a08501526101008082015160c0860152610120938483015160e08701528201519085015201519082015290565b516008811015610cee5790565b6040519060a082016001600160401b03811183821017610d865760405260006080838281528260208201526114d4611341565b60408201528260608201520152565b81516001600160a01b039081168252602092830151169181019190915260400190565b60405192919061036084016001600160401b03811185821017610d86578060405261153081610d9c565b60008152845261153e611341565b602085015260405161154f81610d9c565b600081526040850152611560611341565b606085015260405161157181610d6b565b60008152600060208201526080850152611589611341565b60a0850152611596611341565b60c08501526040516115a781610d9c565b6000815260e08501526115b8611341565b6101008501526115c6610ed8565b610120850152600061014085015260006101608501526040516115e881610d6b565b600081526000602082015261018085015260405161160581610d6b565b60008152600060208201526101a085015260405161162281610d6b565b60008152600060208201526101c085015260405161163f81610d6b565b60008152600060208201526101e08501526000610200850152611660611341565b61022085015260405161167281610d6b565b600081526000602082015261024085015260405161168f81610d6b565b60008152600060208201526102608501526040516116ac81610d6b565b60008152600060208201526102808501526040516116c981610d6b565b60008152600060208201526102a08501526040516116e681610d6b565b60008152600060208201526102c08501526116ff610ed8565b6102e085015261170d611341565b61030085015261171b611341565b610320850152611729611341565b61034085015260036000540361432157604051600060025461174a81610d31565b80845290600181169081156142fd57506001146142b0575b509061177381611782930382610e0a565b6020808251830101910161139d565b9060ff60045416614297576040513381528151602082015260208201518051916008831015610cee576101006101e0927f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac294604084015260018060a01b0360208201515116606084015260408101515160808401526020606082015160018060a01b0381511660a0860152015160c08401526080810151151560e084015260018060a01b0360a0820151511682840152604060c082015160018060a01b0381511661012086015260018060a01b03602082015116610140860152015161016084015260e08101518051610180850152602060018060a01b03910151166101a0840152015115156101c0820152a18051801590811561428b575b5015614272576118ae6020820151611494565b6008811015610cee57611db057602090810151015184528051336001600160a01b0390911603611d8c5760015b15611d735734611d5a576000602060409360018060a01b0387515116835260078252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557f300cb1debe8cfa2c5d3ec4951dc86d7b1f352ebf9a9a0d40fb22e540e3dc4df7828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c06020860151015260206119ba6114a1565b82516001600160a01b031681528183015161ffff19168282015294015182850152436060850152015160808301526040516119f481610d9c565b6000815260408301516020015115611c825750610120604051611a1681610dd2565b6000815260006020820152600060408201526000606082015260006080820152611a3e611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611b7682610dee565b81516001600160401b038111610d8657611b91600254610d31565b601f8111611c3a575b50602092601f8211600114611bd75792819293600092611bcc575b50508160011b916000199060031b1c191617600255565b015190503880611bb5565b601f19821693600260005260206000209160005b868110611c225750836001959610611c09575b505050811b01600255565b015160001960f88460031b161c19169055388080611bfe565b91926020600181928685015181550194019201611beb565b6002600052611c729060008051602061439e833981519152601f840160051c81019160208510611c78575b601f0160051c0190614386565b38611b9a565b9091508190611c65565b9091600080808060018060a01b03855116608086015190828215611d51575bf115611d3c574791829052516000918291829182916001600160a01b0316828215611d48575bf115611d3c57600080556000600155611ce1600254610d31565b80611ce95750565b601f8111600114611cfc57506000600255565b6002600052611d2f90601f0160051c60008051602061439e833981519152016000805160206143be833981519152614386565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611cc7565b506108fc611ca1565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6001611d9733611068565b51611da181610ce4565b611daa81610ce4565b146118db565b611dc1602082969493960151611494565b6008811015610cee576001036121a95760200151604090810151908301528351336001600160a01b03909116036121855760015b1561216c5760408201515134036121535760406000917fda718b97eca6c56f812a6b50010d25e57841de8d3a8098e55a75f230b5d4bced60208351858152a10152611e4a606084015160408301515190614365565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a06060830151015261012083015160c060608301510152604080611eb26114a1565b85516001600160a01b0316815260208087015161ffff19169082015260608481015183830152439082015294015191015151016080830152604051611ef681610d9c565b6000815260408301516020015115611c825750610120604051611f1881610dd2565b6000815260006020820152600060408201526000606082015260006080820152611f40611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261207882610dee565b81516001600160401b038111610d8657612093600254610d31565b601f8111612116575b50602092601f82116001146120cd5792819293600092611bcc5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106120fe5750836001959610611c0957505050811b01600255565b919260206001819286850151815501940192016120e1565b600260005261214d9060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b3861209c565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b600161219033611068565b5161219a81610ce4565b6121a381610ce4565b14611df5565b6121ba602082969394960151611494565b6008811015610cee576002036125ee57602001516060015160808501528051336001600160a01b03909116036125ca5760015b156125b157602060808501510151604082015110612598573461257f576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557f017bc80e6bcbfa43f05d30232cf43ff4119961efeecf5bb8695344a09f08e6cb60208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015260a06122e86114a1565b94600180831b03835116865261ffff1960208401511660208701520151828501524360608501520151608083015260405161232281610d9c565b6000815260408301516020015115611c82575061012060405161234481610dd2565b600081526000602082015260006040820152600060608201526000608082015261236c611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526124a482610dee565b81516001600160401b038111610d86576124bf600254610d31565b601f8111612542575b50602092601f82116001146124f95792819293600092611bcc5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061252a5750836001959610611c0957505050811b01600255565b9192602060018192868501518155019401920161250d565b60026000526125799060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b386124c8565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60016125d533611068565b516125df81610ce4565b6125e881610ce4565b146121ed565b6125fb6020820151611494565b6008811015610cee5760030361298757508051336001600160a01b039091160361296e573461295557600060806040937f12f0b41f1feea45f8362c75c6a94c3bf5250475acfdd617580ce94ca4743c05860208651858152a10152606081015160c0850151526000602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015260c06126bc6114a1565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516126f881610d9c565b6000815260408301516020015115611c82575061012060405161271a81610dd2565b6000815260006020820152600060408201526000606082015260006080820152612742611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261287a82610dee565b81516001600160401b038111610d8657612895600254610d31565b601f8111612918575b50602092601f82116001146128cf5792819293600092611bcc5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106129005750836001959610611c0957505050811b01600255565b919260206001819286850151815501940192016128e3565b600260005261294f9060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b3861289e565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b6129946020820151611494565b6008811015610cee57600403612d51576020015160a0015160e085015280516001600160a01b03163303612d385734612d1f57600060a0604093600180831b0360e088015151168352600760205282858120557fac0b01ea63f138400cfbdb73437178caeffea87e76ca07df3c05dba96b322bc260208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c06101008601510152610100612a866114a1565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612ac281610d9c565b6000815260408301516020015115611c825750610120604051612ae481610dd2565b6000815260006020820152600060408201526000606082015260006080820152612b0c611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612c4482610dee565b81516001600160401b038111610d8657612c5f600254610d31565b601f8111612ce2575b50602092601f8211600114612c995792819293600092611bcc5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612cca5750836001959610611c0957505050811b01600255565b91926020600181928685015181550194019201612cad565b6002600052612d199060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b38612c68565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b612d62602082969493960151611494565b6008811015610cee576005036133bf576020015160c001516101208301819052604081015160608601511061014084015251600190612da9906001600160a01b0316611134565b51612db381610ce4565b612dbc81610ce4565b036133a6576101408201511561339f57604061012083015101515b8061016084015234036133865760c0600191828060a01b03610120850151511661018085015152828060a01b0360206101208601510151166020610180860151015260006101a085015152600060206101a0860151015282612e67612e4d612e5b610180880151604051928391602083016114e3565b03601f198101835282610e0a565b60208151910120610fb0565b51612e7181610ce4565b612e7a81610ce4565b0361337b576040612ea66101808601518251612e9e81612e4d6020820194856114e3565b519020610fb0565b01515b6101c0850181815290516101e086015152516020015161012085015160400151612ed291614365565b60206101e08601510152610180840151604051612ef781612e4d6020820194856114e3565b5190206000526006602052604060002060ff199084828254161790556101e0850151610180860151604051612f3481612e4d6020820194856114e3565b5190206000526006602052600260206040600020928051888501550151910155838060a01b03610120860151511660005260056020528360406000209182541617905582612f8e818060a01b036101208701515116610ef7565b51612f9881610ce4565b612fa181610ce4565b0361337157612fd46040612fc1858060a01b036101208801515116610ef7565b01515b6040610120870151015190614365565b838060a01b036101208601515116600052600560205283604060002001557f7b19429407adb8ae1c0111058820390f804a71e9f65319d5eb570f4fce8f86636020604051858152a10152610140810151156133615761304160608401516040610120840151015190614365565b6102008201525b61020081015161022082015152608083015115156020610220830151015260a08301516040610220830151015260c08301516060610220830151015260e08301516080610220830151015261010083015160a0610220830151015261012083015160c0610220830151015261016060406130c06114a1565b85516001600160a01b0316815260208087015161ffff1916908201526102208401518282015243606082015294015191015101608083015260405161310481610d9c565b6000815260408301516020015115611c82575061012060405161312681610dd2565b600081526000602082015260006040820152600060608201526000608082015261314e611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261328682610dee565b81516001600160401b038111610d86576132a1600254610d31565b601f8111613324575b50602092601f82116001146132db5792819293600092611bcc5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061330c5750836001959610611c0957505050811b01600255565b919260206001819286850151815501940192016132ef565b600260005261335b9060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b386132aa565b6060830151610200820152613048565b612fd46000612fc4565b6101a0840151612ea9565b60405163100960cb60e01b815260236004820152602490fd5b6000612dd7565b60405163100960cb60e01b815260226004820152602490fd5b6133cc6020820151611494565b6008811015610cee57600603613dc557602060e091015101518061024084015251604085015110613dae57600161340233610ef7565b5161340c81610ce4565b61341581610ce4565b03613da757604061342533610ef7565b01515b6102408301515111613d8e5734613d75576102206001913361026085015152828060a01b0360206102408601510151166020610260860151015260006102808501515260006020610280860151015282613496612e4d612e5b610260880151604051928391602083016114e3565b516134a081610ce4565b6134a981610ce4565b03613d67576134e860406134d06102608701518251612e9e81612e4d6020820194856114e3565b01515b806102a0870152516102408601515190614365565b6102c08501515260206102a0850151015160206102c0860151015261026084015160405161351e81612e4d6020820194856114e3565b519020600052600660205260406000208360ff198254161790556102c084015161026085015160405161355981612e4d6020820194856114e3565b51902060005260066020526002602060406000209280518785015501519101557fab55d6227d2f55eccea95300ae60a06b40c723e67ee75688659cf5b48dfb86416020604051858152a10152336102e0820151526102408101515160206102e0830151015261ffff1960208401511660406102e083015101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2360606102e08301516040519060018060a01b03815116825260208101516020830152604061ffff19910151166040820152a16001613630336110e3565b5161363a81610ce4565b61364381610ce4565b036139cd576000808080610240850151518181156139c4575b3390f115611d3c573360005260056020526000600160408220828155015561368f60608401516102408301515190614379565b61032082015152608083015115156020610320830151015260a0830151604061032083015101526136cb60c08401516102408301515190614365565b6060610320830151015260e0830151608061032083015101526136f261010084015161433a565b60a0610320830151015261370a61012084015161433a565b60c0610320830151015261024060406137216114a1565b85516001600160a01b0316815260208087015161ffff19169082015261032084015182820152436060820152940151910151519003608083015260405161376781610d9c565b6000815260408301516020015115611c82575061012060405161378981610dd2565b60008152600060208201526000604082015260006060820152600060808201526137b1611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526138e982610dee565b81516001600160401b038111610d8657613904600254610d31565b601f8111613987575b50602092601f821160011461393e5792819293600092611bcc5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061396f5750836001959610611c0957505050811b01600255565b91926020600181928685015181550194019201613952565b60026000526139be9060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b3861390d565b506108fc61365c565b336000908152600860205260408120805462ff00ff1916600117905561024082015151819081908190818115613d5e575b3390f115611d3c5733600052600560205260006001604082208281550155613a3160608401516102408301515190614379565b61030082015152608083015115156020610300830151015260a083015160406103008301510152613a6d60c08401516102408301515190614365565b6060610300830151015260e083015160806103008301510152613a9461010084015161433a565b60a0610300830151015261012083015160c061030083015101526102406040613abb6114a1565b85516001600160a01b0316815260208087015161ffff191690820152610300840151828201524360608201529401519101515190036080830152604051613b0181610d9c565b6000815260408301516020015115611c825750610120604051613b2381610dd2565b6000815260006020820152600060408201526000606082015260006080820152613b4b611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613c8382610dee565b81516001600160401b038111610d8657613c9e600254610d31565b601f8111613d21575b50602092601f8211600114613cd85792819293600092611bcc5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613d095750836001959610611c0957505050811b01600255565b91926020600181928685015181550194019201613cec565b6002600052613d589060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b38613ca7565b506108fc6139fe565b6134e86102808501516134d3565b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b6000613428565b602460405163100960cb60e01b8152816004820152fd5b6020613dd691959293950151611494565b6008811015610cee57600714613ded575b50509050565b3461425957336000908152600960209081526040808320805462ff00ff19166001179055805183815290946102409290917f39b8540ca58ebfce6ab56804b51bbcf2e877c5672617a812dc67f194dc8e9b319190a10152606081015161034085015152608081015115156020610340860151015260a081015182610340860151015260c08101516060610340860151015260e08101516080610340860151015261010081015160a0610340860151015261012081015160c06103408601510152610340613eb86114a1565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051613ef481610d9c565b60008152604083015160200151156141815750610120604051613f1681610dd2565b6000815260006020820152600060408201526000606082015260006080820152613f3e611315565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261407682610dee565b81516001600160401b038111610d8657614091600254610d31565b601f8111614144575b50602092601f82116001146140de57928192936000926140d3575b50508160011b916000199060031b1c1916176002555b803880613de7565b0151905038806140b5565b601f19821693600260005260206000209160005b86811061412c5750836001959610614113575b505050811b016002556140cb565b015160001960f88460031b161c19169055388080614105565b919260206001819286850151815501940192016140f2565b600260005261417b9060008051602061439e833981519152601f840160051c81019160208510611c7857601f0160051c0190614386565b3861409a565b9091600080808060018060a01b03855116608086015190828215614250575bf115611d3c574791829052516000918291829182916001600160a01b0316828215614247575bf115611d3c576000805560006001556141e0600254610d31565b806141ec575b506140cb565b601f8111600114614204575060006002555b386141e6565b600260005261423790601f0160051c60008051602061439e833981519152016000805160206143be833981519152614386565b60006020812081600255556141fe565b506108fc6141c6565b506108fc6141a0565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b9050600154143861189b565b60405163100960cb60e01b815260156004820152602490fd5b6002600090815260008051602061439e833981519152939250905b8082106142e357509091508101602001611773611762565b9192600181602092548385880101520191019092916142cb565b60ff191660208086019190915291151560051b840190910191506117739050611762565b60405163100960cb60e01b815260146004820152602490fd5b90600182019182811161434f578210610cc957565b634e487b7160e01b600052601160045260246000fd5b919082019182811161434f578210610cc957565b90810390811161434f5790565b818110614391575050565b6000815560010161438656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acfa164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 19472,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:321:11:after expr stmt semicolon',
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
