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
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  const map1_ctc = ctc8;
  
  const map2_ctc = ctc8;
  
  const map3_ctc = ctc8;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async (_v4051 ) => {
          const v4051 = stdlib.protect(ctc0, _v4051, null);
        
        const v4052 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc0, v4051, ctc6), null);
        const v4053 = {
          None: 0,
          Some: 1
          }[v4052[0]];
        const v4054 = stdlib.eq(v4053, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4054;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async () => {
        
        
        return v4066;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async (_v4055 ) => {
          const v4055 = stdlib.protect(ctc0, _v4055, null);
        
        const v4056 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc0, v4055, ctc6), null);
        const v4057 = {
          None: 0,
          Some: 1
          }[v4056[0]];
        const v4058 = stdlib.eq(v4057, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4058;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_rewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async (_v4048 ) => {
          const v4048 = stdlib.protect(ctc0, _v4048, null);
        
        const v4049 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v4048, ctc2), null);
        const v4050 = stdlib.fromSome(v4049, stdlib.checkedBigNumberify('./index.rsh:65:49:decimal', stdlib.UInt_max, '0'));
        
        return v4050;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async () => {
        
        
        return v4091;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async () => {
        
        
        return v4090;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async () => {
        
        
        return v4092;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = svs;
      return (await ((async () => {
        
        
        return v4093;}))(...args));
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
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc3
          },
        rewards: {
          decode: Info_rewards,
          dom: [ctc0],
          rng: ctc2
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc9,
    Admin_deposit0_98: ctc10,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc9,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc10,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4159 = ctc.selfAddress();
  const v4161 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:34:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_addAdmin0_98" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v4164 = stdlib.addressEq(v4159, v4042);
  const v4165 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v4159, ctc0), null);
  const v4166 = {
    None: 0,
    Some: 1
    }[v4165[0]];
  const v4167 = stdlib.eq(v4166, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4168 = v4164 ? true : v4167;
  stdlib.assert(v4168, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:34:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_addAdmin0_98" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v4175 = ['Admin_addAdmin0_98', v4161];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4175],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:167:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc4, v4309, ctc0), null);
          ;
          const v4384 = v4313[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, ctc4, v4384, ctc0, null);
          const v4393 = null;
          const v4394 = await txn1.getOutput('Admin_addAdmin', 'v4393', ctc0, v4393);
          
          const v4407 = {
            bal: v4087,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v4093
            };
          const v10486 = v4066;
          const v10487 = v4407.keepGoing;
          if (v10487) {
            const v10488 = v4407.bal;
            const v10490 = v4407.percent;
            const v10491 = v4407.total_amount_claimed;
            const v10492 = v4407.total_rewards_allcoated;
            const v10493 = v4407.total_users_claim;
            const v10494 = v4407.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v10499 = stdlib.sub(v4066, v4066);
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
              tok: undefined /* Nothing */
              });
            const v10500 = (stdlib.le(await ctc.getBalance(), v10499) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10499));
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
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
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      undefined /* setApiDetails */;
      const v4319 = stdlib.addressEq(v4309, v4042);
      const v4320 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v4309, ctc0), null);
      const v4321 = {
        None: 0,
        Some: 1
        }[v4320[0]];
      const v4322 = stdlib.eq(v4321, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4323 = v4319 ? true : v4322;
      stdlib.assert(v4323, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:34:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v4384 = v4313[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, ctc4, v4384, ctc0, null);
      const v4393 = null;
      const v4394 = await txn1.getOutput('Admin_addAdmin', 'v4393', ctc0, v4393);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v4313, v4394), {
          at: './index.rsh:161:11:application',
          fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:11:function exp)', 'at ./index.rsh:170:14:application call to "ret" (defined at: ./index.rsh:168:15:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v4407 = {
        bal: v4087,
        keepGoing: v4088,
        percent: v4089,
        total_amount_claimed: v4090,
        total_rewards_allcoated: v4091,
        total_users_claim: v4092,
        usersNo: v4093
        };
      const v10486 = v4066;
      const v10487 = v4407.keepGoing;
      if (v10487) {
        const v10488 = v4407.bal;
        const v10490 = v4407.percent;
        const v10491 = v4407.total_amount_claimed;
        const v10492 = v4407.total_rewards_allcoated;
        const v10493 = v4407.total_users_claim;
        const v10494 = v4407.usersNo;
        return;
        }
      else {
        const v10499 = stdlib.sub(v4066, v4066);
        ;
        const v10500 = (stdlib.le(await ctc.getBalance(), v10499) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10499));
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc9,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc9,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4095 = ctc.selfAddress();
  const v4097 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:98:32:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_deposit0_98" (defined at: ./index.rsh:98:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v4098 = v4097[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4100 = stdlib.addressEq(v4095, v4042);
  const v4101 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v4095, ctc0), null);
  const v4102 = {
    None: 0,
    Some: 1
    }[v4101[0]];
  const v4103 = stdlib.eq(v4102, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4104 = v4100 ? true : v4103;
  stdlib.assert(v4104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:99:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:98:32:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_deposit0_98" (defined at: ./index.rsh:98:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v4111 = ['Admin_deposit0_98', v4097];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4111],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v4098, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v4757 = v4744[stdlib.checkedBigNumberify('./index.rsh:98:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc4, v4309, ctc0), null);
          const v4813 = stdlib.add(v4066, v4757);
          sim_r.txns.push({
            amt: v4757,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4849 = null;
          const v4850 = await txn1.getOutput('Admin_deposit', 'v4849', ctc0, v4849);
          
          const v4863 = stdlib.safeAdd(v4087, v4757);
          const v4864 = {
            bal: v4863,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v4093
            };
          const v10707 = v4813;
          const v10708 = v4864.keepGoing;
          if (v10708) {
            const v10709 = v4864.bal;
            const v10711 = v4864.percent;
            const v10712 = v4864.total_amount_claimed;
            const v10713 = v4864.total_rewards_allcoated;
            const v10714 = v4864.total_users_claim;
            const v10715 = v4864.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v10720 = stdlib.sub(v4813, v4813);
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
              tok: undefined /* Nothing */
              });
            const v10721 = (stdlib.le(await ctc.getBalance(), v10720) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10720));
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
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
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      undefined /* setApiDetails */;
      const v4757 = v4744[stdlib.checkedBigNumberify('./index.rsh:98:10:spread', stdlib.UInt_max, '0')];
      const v4758 = stdlib.addressEq(v4309, v4042);
      const v4759 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v4309, ctc0), null);
      const v4760 = {
        None: 0,
        Some: 1
        }[v4759[0]];
      const v4761 = stdlib.eq(v4760, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4762 = v4758 ? true : v4761;
      stdlib.assert(v4762, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:99:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:98:32:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v4813 = stdlib.add(v4066, v4757);
      ;
      const v4849 = null;
      const v4850 = await txn1.getOutput('Admin_deposit', 'v4849', ctc0, v4849);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v4744, v4850), {
          at: './index.rsh:98:11:application',
          fs: ['at ./index.rsh:98:11:application call to [unknown function] (defined at: ./index.rsh:98:11:function exp)', 'at ./index.rsh:103:14:application call to "ret" (defined at: ./index.rsh:102:15:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v4863 = stdlib.safeAdd(v4087, v4757);
      const v4864 = {
        bal: v4863,
        keepGoing: v4088,
        percent: v4089,
        total_amount_claimed: v4090,
        total_rewards_allcoated: v4091,
        total_users_claim: v4092,
        usersNo: v4093
        };
      const v10707 = v4813;
      const v10708 = v4864.keepGoing;
      if (v10708) {
        const v10709 = v4864.bal;
        const v10711 = v4864.percent;
        const v10712 = v4864.total_amount_claimed;
        const v10713 = v4864.total_rewards_allcoated;
        const v10714 = v4864.total_users_claim;
        const v10715 = v4864.usersNo;
        return;
        }
      else {
        const v10720 = stdlib.sub(v4813, v4813);
        ;
        const v10721 = (stdlib.le(await ctc.getBalance(), v10720) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10720));
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc9,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc9,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4134 = ctc.selfAddress();
  const v4136 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_editUserReward0_98" (defined at: ./index.rsh:149:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v4138 = v4136[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4141 = stdlib.addressEq(v4134, v4042);
  const v4142 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v4134, ctc0), null);
  const v4143 = {
    None: 0,
    Some: 1
    }[v4142[0]];
  const v4144 = stdlib.eq(v4143, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4145 = v4141 ? true : v4144;
  stdlib.assert(v4145, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_editUserReward0_98" (defined at: ./index.rsh:149:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v4148 = stdlib.le(v4138, v4066);
  stdlib.assert(v4148, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_editUserReward0_98" (defined at: ./index.rsh:149:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v4157 = ['Admin_editUserReward0_98', v4136];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4157],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:153:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v5197 = v5175[stdlib.checkedBigNumberify('./index.rsh:149:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc4, v4309, ctc0), null);
          ;
          const v5298 = v5175[stdlib.checkedBigNumberify('./index.rsh:149:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc4, v5298, ctc1, v5197);
          const v5311 = null;
          const v5312 = await txn1.getOutput('Admin_editUserReward', 'v5311', ctc0, v5311);
          
          const v5326 = {
            bal: v4087,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v4093
            };
          const v10928 = v4066;
          const v10929 = v5326.keepGoing;
          if (v10929) {
            const v10930 = v5326.bal;
            const v10932 = v5326.percent;
            const v10933 = v5326.total_amount_claimed;
            const v10934 = v5326.total_rewards_allcoated;
            const v10935 = v5326.total_users_claim;
            const v10936 = v5326.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v10941 = stdlib.sub(v4066, v4066);
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
              tok: undefined /* Nothing */
              });
            const v10942 = (stdlib.le(await ctc.getBalance(), v10941) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10941));
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
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
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      undefined /* setApiDetails */;
      const v5197 = v5175[stdlib.checkedBigNumberify('./index.rsh:149:10:spread', stdlib.UInt_max, '1')];
      const v5198 = stdlib.addressEq(v4309, v4042);
      const v5199 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v4309, ctc0), null);
      const v5200 = {
        None: 0,
        Some: 1
        }[v5199[0]];
      const v5201 = stdlib.eq(v5200, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5202 = v5198 ? true : v5201;
      stdlib.assert(v5202, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v5205 = stdlib.le(v5197, v4066);
      stdlib.assert(v5205, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      const v5298 = v5175[stdlib.checkedBigNumberify('./index.rsh:149:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc4, v5298, ctc1, v5197);
      const v5311 = null;
      const v5312 = await txn1.getOutput('Admin_editUserReward', 'v5311', ctc0, v5311);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v5175, v5312), {
          at: './index.rsh:149:11:application',
          fs: ['at ./index.rsh:149:11:application call to [unknown function] (defined at: ./index.rsh:149:11:function exp)', 'at ./index.rsh:156:14:application call to "ret" (defined at: ./index.rsh:154:15:function exp)', 'at ./index.rsh:154:15:application call to [unknown function] (defined at: ./index.rsh:154:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v5326 = {
        bal: v4087,
        keepGoing: v4088,
        percent: v4089,
        total_amount_claimed: v4090,
        total_rewards_allcoated: v4091,
        total_users_claim: v4092,
        usersNo: v4093
        };
      const v10928 = v4066;
      const v10929 = v5326.keepGoing;
      if (v10929) {
        const v10930 = v5326.bal;
        const v10932 = v5326.percent;
        const v10933 = v5326.total_amount_claimed;
        const v10934 = v5326.total_rewards_allcoated;
        const v10935 = v5326.total_users_claim;
        const v10936 = v5326.usersNo;
        return;
        }
      else {
        const v10941 = stdlib.sub(v4066, v4066);
        ;
        const v10942 = (stdlib.le(await ctc.getBalance(), v10941) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10941));
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc12,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc12,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4235 = ctc.selfAddress();
  const v4237 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:277:44:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_endContractAndTransfer0_98" (defined at: ./index.rsh:277:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v4238 = stdlib.addressEq(v4042, v4235);
  stdlib.assert(v4238, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:277:44:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_endContractAndTransfer0_98" (defined at: ./index.rsh:277:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v4243 = ['Admin_endContractAndTransfer0_98', v4237];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4243],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:280:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v5762 = null;
          const v5763 = await txn1.getOutput('Admin_endContractAndTransfer', 'v5762', ctc0, v5762);
          
          const v5775 = {
            bal: v4087,
            keepGoing: false,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v4093
            };
          const v11149 = v4066;
          const v11150 = v5775.keepGoing;
          if (v11150) {
            const v11151 = v5775.bal;
            const v11153 = v5775.percent;
            const v11154 = v5775.total_amount_claimed;
            const v11155 = v5775.total_rewards_allcoated;
            const v11156 = v5775.total_users_claim;
            const v11157 = v5775.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11162 = stdlib.sub(v4066, v4066);
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
              tok: undefined /* Nothing */
              });
            const v11163 = (stdlib.le(await ctc.getBalance(), v11162) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11162));
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
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
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      undefined /* setApiDetails */;
      const v5639 = stdlib.addressEq(v4042, v4309);
      stdlib.assert(v5639, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:277:44:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v5762 = null;
      const v5763 = await txn1.getOutput('Admin_endContractAndTransfer', 'v5762', ctc0, v5762);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v5606, v5763), {
          at: './index.rsh:277:11:application',
          fs: ['at ./index.rsh:277:11:application call to [unknown function] (defined at: ./index.rsh:277:11:function exp)', 'at ./index.rsh:282:14:application call to "ret" (defined at: ./index.rsh:281:15:function exp)', 'at ./index.rsh:281:15:application call to [unknown function] (defined at: ./index.rsh:281:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v5775 = {
        bal: v4087,
        keepGoing: false,
        percent: v4089,
        total_amount_claimed: v4090,
        total_rewards_allcoated: v4091,
        total_users_claim: v4092,
        usersNo: v4093
        };
      const v11149 = v4066;
      const v11150 = v5775.keepGoing;
      if (v11150) {
        const v11151 = v5775.bal;
        const v11153 = v5775.percent;
        const v11154 = v5775.total_amount_claimed;
        const v11155 = v5775.total_rewards_allcoated;
        const v11156 = v5775.total_users_claim;
        const v11157 = v5775.usersNo;
        return;
        }
      else {
        const v11162 = stdlib.sub(v4066, v4066);
        ;
        const v11163 = (stdlib.le(await ctc.getBalance(), v11162) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11162));
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc9,
    Admin_deposit0_98: ctc10,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc9,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc10,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4177 = ctc.selfAddress();
  const v4179 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:175:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_revokeAdmin0_98" (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v4182 = stdlib.addressEq(v4177, v4042);
  stdlib.assert(v4182, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:175:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_revokeAdmin0_98" (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v4189 = ['Admin_revokeAdmin0_98', v4179];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4189],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:178:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v6209 = v6037[stdlib.checkedBigNumberify('./index.rsh:175:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, ctc4, v6209, ctc0, undefined /* Nothing */);
          const v6214 = null;
          const v6215 = await txn1.getOutput('Admin_revokeAdmin', 'v6214', ctc0, v6214);
          
          const v6228 = {
            bal: v4087,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v4093
            };
          const v11370 = v4066;
          const v11371 = v6228.keepGoing;
          if (v11371) {
            const v11372 = v6228.bal;
            const v11374 = v6228.percent;
            const v11375 = v6228.total_amount_claimed;
            const v11376 = v6228.total_rewards_allcoated;
            const v11377 = v6228.total_users_claim;
            const v11378 = v6228.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11383 = stdlib.sub(v4066, v4066);
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
              tok: undefined /* Nothing */
              });
            const v11384 = (stdlib.le(await ctc.getBalance(), v11383) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11383));
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
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
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      undefined /* setApiDetails */;
      const v6074 = stdlib.addressEq(v4309, v4042);
      stdlib.assert(v6074, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:175:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v6209 = v6037[stdlib.checkedBigNumberify('./index.rsh:175:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, ctc4, v6209, ctc0, undefined /* Nothing */);
      const v6214 = null;
      const v6215 = await txn1.getOutput('Admin_revokeAdmin', 'v6214', ctc0, v6214);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v6037, v6215), {
          at: './index.rsh:175:11:application',
          fs: ['at ./index.rsh:175:11:application call to [unknown function] (defined at: ./index.rsh:175:11:function exp)', 'at ./index.rsh:181:14:application call to "ret" (defined at: ./index.rsh:179:15:function exp)', 'at ./index.rsh:179:15:application call to [unknown function] (defined at: ./index.rsh:179:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v6228 = {
        bal: v4087,
        keepGoing: v4088,
        percent: v4089,
        total_amount_claimed: v4090,
        total_rewards_allcoated: v4091,
        total_users_claim: v4092,
        usersNo: v4093
        };
      const v11370 = v4066;
      const v11371 = v6228.keepGoing;
      if (v11371) {
        const v11372 = v6228.bal;
        const v11374 = v6228.percent;
        const v11375 = v6228.total_amount_claimed;
        const v11376 = v6228.total_rewards_allcoated;
        const v11377 = v6228.total_users_claim;
        const v11378 = v6228.usersNo;
        return;
        }
      else {
        const v11383 = stdlib.sub(v4066, v4066);
        ;
        const v11384 = (stdlib.le(await ctc.getBalance(), v11383) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11383));
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc9,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc9,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4115 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:111:40:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_setReward0_98" (defined at: ./index.rsh:111:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v4116 = v4115[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4117 = v4115[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4120 = stdlib.gt(v4117, v4087);
  const v4121 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc4, v4116, ctc0), null);
  const v4122 = {
    None: 0,
    Some: 1
    }[v4121[0]];
  const v4123 = stdlib.eq(v4122, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4123, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:40:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp)', 'at ./index.rsh:71:37:application call to "runAdmin_setReward0_98" (defined at: ./index.rsh:111:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v4132 = ['Admin_setReward0_98', v4115];
  
  const v4288 = v4120 ? v4117 : stdlib.checkedBigNumberify('./index.rsh:116:30:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4132],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v4288, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v6508 = v6468[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '0')];
          const v6509 = v6468[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '1')];
          const v6510 = stdlib.gt(v6509, v4087);
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc4, v6508, ctc0), null);
          const v6515 = v6510 ? v6509 : stdlib.checkedBigNumberify('./index.rsh:116:30:decimal', stdlib.UInt_max, '0');
          const v6537 = stdlib.add(v4066, v6515);
          sim_r.txns.push({
            amt: v6515,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6671 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v6508, ctc1), null);
          const v6672 = stdlib.fromSome(v6671, stdlib.checkedBigNumberify('./index.rsh:118:60:decimal', stdlib.UInt_max, '0'));
          const v6676 = stdlib.safeAdd(v6672, v6509);
          await stdlib.simMapSet(sim_r, 0, ctc4, v6508, ctc1, v6676);
          const v6677 = true;
          const v6678 = await txn1.getOutput('Admin_setReward', 'v6677', ctc6, v6677);
          
          let v6692;
          if (v6510) {
            const v6693 = stdlib.safeAdd(v4087, v6509);
            v6692 = v6693;
            }
          else {
            v6692 = v4087;
            }
          const v6694 = {
            bal: v6692,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v4093
            };
          const v11591 = v6537;
          const v11592 = v6694.keepGoing;
          if (v11592) {
            const v11593 = v6694.bal;
            const v11595 = v6694.percent;
            const v11596 = v6694.total_amount_claimed;
            const v11597 = v6694.total_rewards_allcoated;
            const v11598 = v6694.total_users_claim;
            const v11599 = v6694.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v11604 = stdlib.sub(v6537, v6537);
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
              tok: undefined /* Nothing */
              });
            const v11605 = (stdlib.le(await ctc.getBalance(), v11604) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11604));
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
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
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      undefined /* setApiDetails */;
      const v6508 = v6468[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '0')];
      const v6509 = v6468[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '1')];
      const v6510 = stdlib.gt(v6509, v4087);
      const v6511 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc4, v6508, ctc0), null);
      const v6512 = {
        None: 0,
        Some: 1
        }[v6511[0]];
      const v6513 = stdlib.eq(v6512, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6513, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:114:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:40:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v6515 = v6510 ? v6509 : stdlib.checkedBigNumberify('./index.rsh:116:30:decimal', stdlib.UInt_max, '0');
      const v6537 = stdlib.add(v4066, v6515);
      ;
      const v6671 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v6508, ctc1), null);
      const v6672 = stdlib.fromSome(v6671, stdlib.checkedBigNumberify('./index.rsh:118:60:decimal', stdlib.UInt_max, '0'));
      const v6676 = stdlib.safeAdd(v6672, v6509);
      await stdlib.mapSet(map0, ctc4, v6508, ctc1, v6676);
      const v6677 = true;
      const v6678 = await txn1.getOutput('Admin_setReward', 'v6677', ctc6, v6677);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v6468, v6678), {
          at: './index.rsh:111:11:application',
          fs: ['at ./index.rsh:111:11:application call to [unknown function] (defined at: ./index.rsh:111:11:function exp)', 'at ./index.rsh:121:16:application call to "ret" (defined at: ./index.rsh:117:15:function exp)', 'at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      let v6692;
      if (v6510) {
        const v6693 = stdlib.safeAdd(v4087, v6509);
        v6692 = v6693;
        }
      else {
        v6692 = v4087;
        }
      const v6694 = {
        bal: v6692,
        keepGoing: v4088,
        percent: v4089,
        total_amount_claimed: v4090,
        total_rewards_allcoated: v4091,
        total_users_claim: v4092,
        usersNo: v4093
        };
      const v11591 = v6537;
      const v11592 = v6694.keepGoing;
      if (v11592) {
        const v11593 = v6694.bal;
        const v11595 = v6694.percent;
        const v11596 = v6694.total_amount_claimed;
        const v11597 = v6694.total_rewards_allcoated;
        const v11598 = v6694.total_users_claim;
        const v11599 = v6694.usersNo;
        return;
        }
      else {
        const v11604 = stdlib.sub(v6537, v6537);
        ;
        const v11605 = (stdlib.le(await ctc.getBalance(), v11604) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11604));
        ;
        return;
        }
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc6,
    Admin_deposit0_98: ctc7,
    Admin_editUserReward0_98: ctc8,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc6,
    Admin_setReward0_98: ctc8,
    User_claim0_98: ctc7,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  
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
  
  
  const v4039 = stdlib.protect(ctc4, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v4039],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4043], secs: v4045, time: v4044, didSend: v27, from: v4042 } = txn1;
      
      ;
      const v4046 = await ctc.getContractInfo();
      
      const v4059 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v4060 = {
        i: v4059,
        sign: true
        };
      const v4061 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v4060,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4062 = v4061;
      const v4063 = v4044;
      const v4066 = stdlib.checkedBigNumberify('./index.rsh:50:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v4079 = v4062.keepGoing;
        
        return v4079;})()) {
        const v4087 = v4062.bal;
        const v4088 = v4062.keepGoing;
        const v4089 = v4062.percent;
        const v4090 = v4062.total_amount_claimed;
        const v4091 = v4062.total_rewards_allcoated;
        const v4092 = v4062.total_users_claim;
        const v4093 = v4062.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v8204 = stdlib.sub(v4066, v4066);
        sim_r.txns.push({
          kind: 'from',
          to: v4042,
          tok: undefined /* Nothing */
          });
        const v8206 = (stdlib.le(await ctc.getBalance(), v8204) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8204));
        sim_r.txns.push({
          kind: 'from',
          to: v4042,
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
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v4043], secs: v4045, time: v4044, didSend: v27, from: v4042 } = txn1;
  ;
  const v4046 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v4046), {
    at: './index.rsh:57:27:application',
    fs: ['at ./index.rsh:57:27:application call to [unknown function] (defined at: ./index.rsh:57:27:function exp)', 'at ./index.rsh:57:27:application call to "liftedInteract" (defined at: ./index.rsh:57:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v4059 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v4060 = {
    i: v4059,
    sign: true
    };
  const v4061 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v4060,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v4062 = v4061;
  let v4063 = v4044;
  let v4066 = stdlib.checkedBigNumberify('./index.rsh:50:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v4079 = v4062.keepGoing;
    
    return v4079;})()) {
    const v4087 = v4062.bal;
    const v4088 = v4062.keepGoing;
    const v4089 = v4062.percent;
    const v4090 = v4062.total_amount_claimed;
    const v4091 = v4062.total_rewards_allcoated;
    const v4092 = v4062.total_users_claim;
    const v4093 = v4062.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn3;
    switch (v4310[0]) {
      case 'Admin_addAdmin0_98': {
        const v4313 = v4310[1];
        undefined /* setApiDetails */;
        const v4319 = stdlib.addressEq(v4309, v4042);
        const v4320 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc5, v4309, ctc0), null);
        const v4321 = {
          None: 0,
          Some: 1
          }[v4320[0]];
        const v4322 = stdlib.eq(v4321, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4323 = v4319 ? true : v4322;
        stdlib.assert(v4323, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:34:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v4384 = v4313[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, ctc5, v4384, ctc0, null);
        const v4393 = null;
        await txn3.getOutput('Admin_addAdmin', 'v4393', ctc0, v4393);
        const v4407 = {
          bal: v4087,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v4093
          };
        const cv4062 = v4407;
        const cv4063 = v4311;
        const cv4066 = v4066;
        
        v4062 = cv4062;
        v4063 = cv4063;
        v4066 = cv4066;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_98': {
        const v4744 = v4310[1];
        undefined /* setApiDetails */;
        const v4757 = v4744[stdlib.checkedBigNumberify('./index.rsh:98:10:spread', stdlib.UInt_max, '0')];
        const v4758 = stdlib.addressEq(v4309, v4042);
        const v4759 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc5, v4309, ctc0), null);
        const v4760 = {
          None: 0,
          Some: 1
          }[v4759[0]];
        const v4761 = stdlib.eq(v4760, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4762 = v4758 ? true : v4761;
        stdlib.assert(v4762, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:99:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:98:32:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v4813 = stdlib.add(v4066, v4757);
        ;
        const v4849 = null;
        await txn3.getOutput('Admin_deposit', 'v4849', ctc0, v4849);
        const v4863 = stdlib.safeAdd(v4087, v4757);
        const v4864 = {
          bal: v4863,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v4093
          };
        const cv4062 = v4864;
        const cv4063 = v4311;
        const cv4066 = v4813;
        
        v4062 = cv4062;
        v4063 = cv4063;
        v4066 = cv4066;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_98': {
        const v5175 = v4310[1];
        undefined /* setApiDetails */;
        const v5197 = v5175[stdlib.checkedBigNumberify('./index.rsh:149:10:spread', stdlib.UInt_max, '1')];
        const v5198 = stdlib.addressEq(v4309, v4042);
        const v5199 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc5, v4309, ctc0), null);
        const v5200 = {
          None: 0,
          Some: 1
          }[v5199[0]];
        const v5201 = stdlib.eq(v5200, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5202 = v5198 ? true : v5201;
        stdlib.assert(v5202, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v5205 = stdlib.le(v5197, v4066);
        stdlib.assert(v5205, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        const v5298 = v5175[stdlib.checkedBigNumberify('./index.rsh:149:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc5, v5298, ctc1, v5197);
        const v5311 = null;
        await txn3.getOutput('Admin_editUserReward', 'v5311', ctc0, v5311);
        const v5326 = {
          bal: v4087,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v4093
          };
        const cv4062 = v5326;
        const cv4063 = v4311;
        const cv4066 = v4066;
        
        v4062 = cv4062;
        v4063 = cv4063;
        v4066 = cv4066;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_98': {
        const v5606 = v4310[1];
        undefined /* setApiDetails */;
        const v5639 = stdlib.addressEq(v4042, v4309);
        stdlib.assert(v5639, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:277:44:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        const v5762 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v5762', ctc0, v5762);
        const v5775 = {
          bal: v4087,
          keepGoing: false,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v4093
          };
        const cv4062 = v5775;
        const cv4063 = v4311;
        const cv4066 = v4066;
        
        v4062 = cv4062;
        v4063 = cv4063;
        v4066 = cv4066;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_98': {
        const v6037 = v4310[1];
        undefined /* setApiDetails */;
        const v6074 = stdlib.addressEq(v4309, v4042);
        stdlib.assert(v6074, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:175:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v6209 = v6037[stdlib.checkedBigNumberify('./index.rsh:175:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, ctc5, v6209, ctc0, undefined /* Nothing */);
        const v6214 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v6214', ctc0, v6214);
        const v6228 = {
          bal: v4087,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v4093
          };
        const cv4062 = v6228;
        const cv4063 = v4311;
        const cv4066 = v4066;
        
        v4062 = cv4062;
        v4063 = cv4063;
        v4066 = cv4066;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_98': {
        const v6468 = v4310[1];
        undefined /* setApiDetails */;
        const v6508 = v6468[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '0')];
        const v6509 = v6468[stdlib.checkedBigNumberify('./index.rsh:111:10:spread', stdlib.UInt_max, '1')];
        const v6510 = stdlib.gt(v6509, v4087);
        const v6511 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc5, v6508, ctc0), null);
        const v6512 = {
          None: 0,
          Some: 1
          }[v6511[0]];
        const v6513 = stdlib.eq(v6512, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6513, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:114:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:40:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v6515 = v6510 ? v6509 : stdlib.checkedBigNumberify('./index.rsh:116:30:decimal', stdlib.UInt_max, '0');
        const v6537 = stdlib.add(v4066, v6515);
        ;
        const v6671 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v6508, ctc1), null);
        const v6672 = stdlib.fromSome(v6671, stdlib.checkedBigNumberify('./index.rsh:118:60:decimal', stdlib.UInt_max, '0'));
        const v6676 = stdlib.safeAdd(v6672, v6509);
        await stdlib.mapSet(map0, ctc5, v6508, ctc1, v6676);
        const v6677 = true;
        await txn3.getOutput('Admin_setReward', 'v6677', ctc11, v6677);
        let v6692;
        if (v6510) {
          const v6693 = stdlib.safeAdd(v4087, v6509);
          v6692 = v6693;
          }
        else {
          v6692 = v4087;
          }
        const v6694 = {
          bal: v6692,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v4093
          };
        const cv4062 = v6694;
        const cv4063 = v4311;
        const cv4066 = v6537;
        
        v4062 = cv4062;
        v4063 = cv4063;
        v4066 = cv4066;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_98': {
        const v6899 = v4310[1];
        undefined /* setApiDetails */;
        const v6948 = v6899[stdlib.checkedBigNumberify('./index.rsh:234:10:spread', stdlib.UInt_max, '0')];
        const v6949 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v4309, ctc1), null);
        const v6950 = stdlib.fromSome(v6949, stdlib.checkedBigNumberify('./index.rsh:235:56:decimal', stdlib.UInt_max, '0'));
        const v6952 = stdlib.le(v6948, v4066);
        stdlib.assert(v6952, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v6954 = stdlib.ge(v6950, v6948);
        stdlib.assert(v6954, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        const v7180 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc5, v4309, ctc0), null);
        const v7181 = {
          None: 0,
          Some: 1
          }[v7180[0]];
        const v7182 = stdlib.eq(v7181, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v7183 = true;
        await txn3.getOutput('User_claim', 'v7183', ctc11, v7183);
        const v7190 = {
          addr: v4309,
          amount: v6948,
          projectName: v4043
          };
        null;
        if (v7182) {
          const v7215 = stdlib.sub(v4066, v6948);
          ;
          await stdlib.mapSet(map0, ctc5, v4309, ctc1, undefined /* Nothing */);
          const v7225 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:256:56:decimal', stdlib.UInt_max, '1'));
          const v7226 = stdlib.safeSub(v4087, v6948);
          const v7227 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:258:52:decimal', stdlib.UInt_max, '1'));
          const v7228 = stdlib.safeAdd(v4090, v6948);
          const v7229 = {
            bal: v7226,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v7228,
            total_rewards_allcoated: v4091,
            total_users_claim: v7227,
            usersNo: v7225
            };
          const cv4062 = v7229;
          const cv4063 = v4311;
          const cv4066 = v7215;
          
          v4062 = cv4062;
          v4063 = cv4063;
          v4066 = cv4066;
          
          txn2 = txn3;
          continue;}
        else {
          await stdlib.mapSet(map2, ctc5, v4309, ctc0, null);
          const v7196 = stdlib.sub(v4066, v6948);
          ;
          await stdlib.mapSet(map0, ctc5, v4309, ctc1, undefined /* Nothing */);
          const v7207 = stdlib.safeSub(v4087, v6948);
          const v7208 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:258:52:decimal', stdlib.UInt_max, '1'));
          const v7209 = stdlib.safeAdd(v4090, v6948);
          const v7210 = {
            bal: v7207,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v7209,
            total_rewards_allcoated: v4091,
            total_users_claim: v7208,
            usersNo: v4093
            };
          const cv4062 = v7210;
          const cv4063 = v4311;
          const cv4066 = v7196;
          
          v4062 = cv4062;
          v4063 = cv4063;
          v4066 = cv4066;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'User_claimAll0_98': {
        const v7330 = v4310[1];
        undefined /* setApiDetails */;
        const v7388 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v4309, ctc1), null);
        const v7389 = stdlib.fromSome(v7388, stdlib.checkedBigNumberify('./index.rsh:187:56:decimal', stdlib.UInt_max, '0'));
        const v7391 = {
          None: 0,
          Some: 1
          }[v7388[0]];
        const v7392 = stdlib.eq(v7391, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v7392, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Cannot claim because you have not earned reward',
          who: 'Deployer'
          });
        const v7395 = stdlib.le(v7389, v4066);
        stdlib.assert(v7395, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
          msg: 'Cannot claim more than the balance in the contract',
          who: 'Deployer'
          });
        ;
        const v7673 = stdlib.gt(v4066, v7389);
        const v7674 = v7673 ? v7389 : v4066;
        const v7676 = stdlib.ge(v7389, v4066);
        if (v7676) {
          null;
          const v7677 = false;
          await txn3.getOutput('User_claimAll', 'v7677', ctc11, v7677);
          const v7690 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:204:57:decimal', stdlib.UInt_max, '1'));
          const v7691 = {
            bal: v4087,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v7690
            };
          const cv4062 = v7691;
          const cv4063 = v4311;
          const cv4066 = v4066;
          
          v4062 = cv4062;
          v4063 = cv4063;
          v4066 = cv4066;
          
          txn2 = txn3;
          continue;}
        else {
          const v7693 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc5, v4309, ctc0), null);
          const v7694 = {
            None: 0,
            Some: 1
            }[v7693[0]];
          const v7695 = stdlib.eq(v7694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v7695) {
            const v7722 = true;
            await txn3.getOutput('User_claimAll', 'v7722', ctc11, v7722);
            const v7731 = stdlib.sub(v4066, v7674);
            ;
            await stdlib.mapSet(map0, ctc5, v4309, ctc1, undefined /* Nothing */);
            const v7739 = stdlib.safeSub(v4087, v7674);
            const v7740 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:227:54:decimal', stdlib.UInt_max, '1'));
            const v7741 = stdlib.safeAdd(v4090, v7674);
            const v7742 = {
              bal: v7739,
              keepGoing: v4088,
              percent: v4089,
              total_amount_claimed: v7741,
              total_rewards_allcoated: v4091,
              total_users_claim: v7740,
              usersNo: v4093
              };
            const cv4062 = v7742;
            const cv4063 = v4311;
            const cv4066 = v7731;
            
            v4062 = cv4062;
            v4063 = cv4063;
            v4066 = cv4066;
            
            txn2 = txn3;
            continue;}
          else {
            const v7697 = true;
            await txn3.getOutput('User_claimAll', 'v7697', ctc11, v7697);
            const v7703 = {
              addr: v4309,
              amount: v7674,
              projectName: v4043
              };
            null;
            await stdlib.mapSet(map2, ctc5, v4309, ctc0, null);
            const v7708 = stdlib.sub(v4066, v7674);
            ;
            await stdlib.mapSet(map0, ctc5, v4309, ctc1, undefined /* Nothing */);
            const v7716 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:215:34:decimal', stdlib.UInt_max, '1'));
            const v7717 = stdlib.safeSub(v4087, v7674);
            const v7718 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:217:54:decimal', stdlib.UInt_max, '1'));
            const v7719 = stdlib.safeAdd(v4090, v7674);
            const v7720 = {
              bal: v7717,
              keepGoing: v4088,
              percent: v4089,
              total_amount_claimed: v7719,
              total_rewards_allcoated: v4091,
              total_users_claim: v7718,
              usersNo: v7716
              };
            const cv4062 = v7720;
            const cv4063 = v4311;
            const cv4066 = v7708;
            
            v4062 = cv4062;
            v4063 = cv4063;
            v4066 = cv4066;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_98': {
        const v7761 = v4310[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map3, ctc5, v4309, ctc0, null);
        const v8177 = null;
        await txn3.getOutput('User_optin', 'v8177', ctc0, v8177);
        const v8190 = {
          bal: v4087,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v4093
          };
        const cv4062 = v8190;
        const cv4063 = v4311;
        const cv4066 = v4066;
        
        v4062 = cv4062;
        v4063 = cv4063;
        v4066 = cv4066;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v8204 = stdlib.sub(v4066, v4066);
  ;
  const v8206 = (stdlib.le(await ctc.getBalance(), v8204) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8204));
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc9,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc9,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4208 = ctc.selfAddress();
  const v4210 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to "runUser_claim0_98" (defined at: ./index.rsh:234:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v4211 = v4210[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4213 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v4208, ctc1), null);
  const v4214 = stdlib.fromSome(v4213, stdlib.checkedBigNumberify('./index.rsh:235:56:decimal', stdlib.UInt_max, '0'));
  const v4216 = stdlib.le(v4211, v4066);
  stdlib.assert(v4216, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to "runUser_claim0_98" (defined at: ./index.rsh:234:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v4218 = stdlib.ge(v4214, v4211);
  stdlib.assert(v4218, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to "runUser_claim0_98" (defined at: ./index.rsh:234:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v4225 = ['User_claim0_98', v4210];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4225],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:239:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v6948 = v6899[stdlib.checkedBigNumberify('./index.rsh:234:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v4309, ctc1), null);
          ;
          const v7180 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc4, v4309, ctc0), null);
          const v7181 = {
            None: 0,
            Some: 1
            }[v7180[0]];
          const v7182 = stdlib.eq(v7181, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v7183 = true;
          const v7184 = await txn1.getOutput('User_claim', 'v7183', ctc6, v7183);
          
          const v7190 = {
            addr: v4309,
            amount: v6948,
            projectName: v4043
            };
          null;
          if (v7182) {
            const v7215 = stdlib.sub(v4066, v6948);
            sim_r.txns.push({
              kind: 'from',
              to: v4309,
              tok: undefined /* Nothing */
              });
            await stdlib.simMapSet(sim_r, 0, ctc4, v4309, ctc1, undefined /* Nothing */);
            const v7225 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:256:56:decimal', stdlib.UInt_max, '1'));
            const v7226 = stdlib.safeSub(v4087, v6948);
            const v7227 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:258:52:decimal', stdlib.UInt_max, '1'));
            const v7228 = stdlib.safeAdd(v4090, v6948);
            const v7229 = {
              bal: v7226,
              keepGoing: v4088,
              percent: v4089,
              total_amount_claimed: v7228,
              total_rewards_allcoated: v4091,
              total_users_claim: v7227,
              usersNo: v7225
              };
            const v11812 = v7215;
            const v11813 = v7229.keepGoing;
            if (v11813) {
              const v11814 = v7229.bal;
              const v11816 = v7229.percent;
              const v11817 = v7229.total_amount_claimed;
              const v11818 = v7229.total_rewards_allcoated;
              const v11819 = v7229.total_users_claim;
              const v11820 = v7229.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v11825 = stdlib.sub(v7215, v7215);
              sim_r.txns.push({
                kind: 'from',
                to: v4042,
                tok: undefined /* Nothing */
                });
              const v11826 = (stdlib.le(await ctc.getBalance(), v11825) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11825));
              sim_r.txns.push({
                kind: 'from',
                to: v4042,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 2, ctc4, v4309, ctc0, null);
            const v7196 = stdlib.sub(v4066, v6948);
            sim_r.txns.push({
              kind: 'from',
              to: v4309,
              tok: undefined /* Nothing */
              });
            await stdlib.simMapSet(sim_r, 0, ctc4, v4309, ctc1, undefined /* Nothing */);
            const v7207 = stdlib.safeSub(v4087, v6948);
            const v7208 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:258:52:decimal', stdlib.UInt_max, '1'));
            const v7209 = stdlib.safeAdd(v4090, v6948);
            const v7210 = {
              bal: v7207,
              keepGoing: v4088,
              percent: v4089,
              total_amount_claimed: v7209,
              total_rewards_allcoated: v4091,
              total_users_claim: v7208,
              usersNo: v4093
              };
            const v11829 = v7196;
            const v11830 = v7210.keepGoing;
            if (v11830) {
              const v11831 = v7210.bal;
              const v11833 = v7210.percent;
              const v11834 = v7210.total_amount_claimed;
              const v11835 = v7210.total_rewards_allcoated;
              const v11836 = v7210.total_users_claim;
              const v11837 = v7210.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v11842 = stdlib.sub(v7196, v7196);
              sim_r.txns.push({
                kind: 'from',
                to: v4042,
                tok: undefined /* Nothing */
                });
              const v11843 = (stdlib.le(await ctc.getBalance(), v11842) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11842));
              sim_r.txns.push({
                kind: 'from',
                to: v4042,
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
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      undefined /* setApiDetails */;
      const v6948 = v6899[stdlib.checkedBigNumberify('./index.rsh:234:10:spread', stdlib.UInt_max, '0')];
      const v6949 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v4309, ctc1), null);
      const v6950 = stdlib.fromSome(v6949, stdlib.checkedBigNumberify('./index.rsh:235:56:decimal', stdlib.UInt_max, '0'));
      const v6952 = stdlib.le(v6948, v4066);
      stdlib.assert(v6952, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v6954 = stdlib.ge(v6950, v6948);
      stdlib.assert(v6954, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      const v7180 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc4, v4309, ctc0), null);
      const v7181 = {
        None: 0,
        Some: 1
        }[v7180[0]];
      const v7182 = stdlib.eq(v7181, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v7183 = true;
      const v7184 = await txn1.getOutput('User_claim', 'v7183', ctc6, v7183);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v6899, v7184), {
          at: './index.rsh:234:11:application',
          fs: ['at ./index.rsh:234:11:application call to [unknown function] (defined at: ./index.rsh:234:11:function exp)', 'at ./index.rsh:244:14:application call to "ret" (defined at: ./index.rsh:240:15:function exp)', 'at ./index.rsh:240:15:application call to [unknown function] (defined at: ./index.rsh:240:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v7190 = {
        addr: v4309,
        amount: v6948,
        projectName: v4043
        };
      null;
      if (v7182) {
        const v7215 = stdlib.sub(v4066, v6948);
        ;
        await stdlib.mapSet(map0, ctc4, v4309, ctc1, undefined /* Nothing */);
        const v7225 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:256:56:decimal', stdlib.UInt_max, '1'));
        const v7226 = stdlib.safeSub(v4087, v6948);
        const v7227 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:258:52:decimal', stdlib.UInt_max, '1'));
        const v7228 = stdlib.safeAdd(v4090, v6948);
        const v7229 = {
          bal: v7226,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v7228,
          total_rewards_allcoated: v4091,
          total_users_claim: v7227,
          usersNo: v7225
          };
        const v11812 = v7215;
        const v11813 = v7229.keepGoing;
        if (v11813) {
          const v11814 = v7229.bal;
          const v11816 = v7229.percent;
          const v11817 = v7229.total_amount_claimed;
          const v11818 = v7229.total_rewards_allcoated;
          const v11819 = v7229.total_users_claim;
          const v11820 = v7229.usersNo;
          return;
          }
        else {
          const v11825 = stdlib.sub(v7215, v7215);
          ;
          const v11826 = (stdlib.le(await ctc.getBalance(), v11825) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11825));
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map2, ctc4, v4309, ctc0, null);
        const v7196 = stdlib.sub(v4066, v6948);
        ;
        await stdlib.mapSet(map0, ctc4, v4309, ctc1, undefined /* Nothing */);
        const v7207 = stdlib.safeSub(v4087, v6948);
        const v7208 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:258:52:decimal', stdlib.UInt_max, '1'));
        const v7209 = stdlib.safeAdd(v4090, v6948);
        const v7210 = {
          bal: v7207,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v7209,
          total_rewards_allcoated: v4091,
          total_users_claim: v7208,
          usersNo: v4093
          };
        const v11829 = v7196;
        const v11830 = v7210.keepGoing;
        if (v11830) {
          const v11831 = v7210.bal;
          const v11833 = v7210.percent;
          const v11834 = v7210.total_amount_claimed;
          const v11835 = v7210.total_rewards_allcoated;
          const v11836 = v7210.total_users_claim;
          const v11837 = v7210.usersNo;
          return;
          }
        else {
          const v11842 = stdlib.sub(v7196, v7196);
          ;
          const v11843 = (stdlib.le(await ctc.getBalance(), v11842) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v11842));
          ;
          return;
          }}
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc12,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc12,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4191 = ctc.selfAddress();
  const v4193 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to "runUser_claimAll0_98" (defined at: ./index.rsh:186:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'User_claimAll'
    });
  const v4194 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v4191, ctc1), null);
  const v4195 = stdlib.fromSome(v4194, stdlib.checkedBigNumberify('./index.rsh:187:56:decimal', stdlib.UInt_max, '0'));
  const v4197 = {
    None: 0,
    Some: 1
    }[v4194[0]];
  const v4198 = stdlib.eq(v4197, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4198, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to "runUser_claimAll0_98" (defined at: ./index.rsh:186:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Cannot claim because you have not earned reward',
    who: 'User_claimAll'
    });
  const v4201 = stdlib.le(v4195, v4066);
  stdlib.assert(v4201, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to "runUser_claimAll0_98" (defined at: ./index.rsh:186:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'Cannot claim more than the balance in the contract',
    who: 'User_claimAll'
    });
  const v4206 = ['User_claimAll0_98', v4193];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4206],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:198:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimAll"
            });
          const v7388 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v4309, ctc1), null);
          const v7389 = stdlib.fromSome(v7388, stdlib.checkedBigNumberify('./index.rsh:187:56:decimal', stdlib.UInt_max, '0'));
          ;
          const v7673 = stdlib.gt(v4066, v7389);
          const v7674 = v7673 ? v7389 : v4066;
          const v7676 = stdlib.ge(v7389, v4066);
          if (v7676) {
            null;
            const v7677 = false;
            const v7678 = await txn1.getOutput('User_claimAll', 'v7677', ctc6, v7677);
            
            const v7690 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:204:57:decimal', stdlib.UInt_max, '1'));
            const v7691 = {
              bal: v4087,
              keepGoing: v4088,
              percent: v4089,
              total_amount_claimed: v4090,
              total_rewards_allcoated: v4091,
              total_users_claim: v4092,
              usersNo: v7690
              };
            const v12050 = v4066;
            const v12051 = v7691.keepGoing;
            if (v12051) {
              const v12052 = v7691.bal;
              const v12054 = v7691.percent;
              const v12055 = v7691.total_amount_claimed;
              const v12056 = v7691.total_rewards_allcoated;
              const v12057 = v7691.total_users_claim;
              const v12058 = v7691.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v12063 = stdlib.sub(v4066, v4066);
              sim_r.txns.push({
                kind: 'from',
                to: v4042,
                tok: undefined /* Nothing */
                });
              const v12064 = (stdlib.le(await ctc.getBalance(), v12063) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12063));
              sim_r.txns.push({
                kind: 'from',
                to: v4042,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v7693 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc4, v4309, ctc0), null);
            const v7694 = {
              None: 0,
              Some: 1
              }[v7693[0]];
            const v7695 = stdlib.eq(v7694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            if (v7695) {
              const v7722 = true;
              const v7723 = await txn1.getOutput('User_claimAll', 'v7722', ctc6, v7722);
              
              const v7731 = stdlib.sub(v4066, v7674);
              sim_r.txns.push({
                kind: 'from',
                to: v4309,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, ctc4, v4309, ctc1, undefined /* Nothing */);
              const v7739 = stdlib.safeSub(v4087, v7674);
              const v7740 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:227:54:decimal', stdlib.UInt_max, '1'));
              const v7741 = stdlib.safeAdd(v4090, v7674);
              const v7742 = {
                bal: v7739,
                keepGoing: v4088,
                percent: v4089,
                total_amount_claimed: v7741,
                total_rewards_allcoated: v4091,
                total_users_claim: v7740,
                usersNo: v4093
                };
              const v12067 = v7731;
              const v12068 = v7742.keepGoing;
              if (v12068) {
                const v12069 = v7742.bal;
                const v12071 = v7742.percent;
                const v12072 = v7742.total_amount_claimed;
                const v12073 = v7742.total_rewards_allcoated;
                const v12074 = v7742.total_users_claim;
                const v12075 = v7742.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12080 = stdlib.sub(v7731, v7731);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4042,
                  tok: undefined /* Nothing */
                  });
                const v12081 = (stdlib.le(await ctc.getBalance(), v12080) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12080));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4042,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v7697 = true;
              const v7698 = await txn1.getOutput('User_claimAll', 'v7697', ctc6, v7697);
              
              const v7703 = {
                addr: v4309,
                amount: v7674,
                projectName: v4043
                };
              null;
              await stdlib.simMapSet(sim_r, 2, ctc4, v4309, ctc0, null);
              const v7708 = stdlib.sub(v4066, v7674);
              sim_r.txns.push({
                kind: 'from',
                to: v4309,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, ctc4, v4309, ctc1, undefined /* Nothing */);
              const v7716 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:215:34:decimal', stdlib.UInt_max, '1'));
              const v7717 = stdlib.safeSub(v4087, v7674);
              const v7718 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:217:54:decimal', stdlib.UInt_max, '1'));
              const v7719 = stdlib.safeAdd(v4090, v7674);
              const v7720 = {
                bal: v7717,
                keepGoing: v4088,
                percent: v4089,
                total_amount_claimed: v7719,
                total_rewards_allcoated: v4091,
                total_users_claim: v7718,
                usersNo: v7716
                };
              const v12084 = v7708;
              const v12085 = v7720.keepGoing;
              if (v12085) {
                const v12086 = v7720.bal;
                const v12088 = v7720.percent;
                const v12089 = v7720.total_amount_claimed;
                const v12090 = v7720.total_rewards_allcoated;
                const v12091 = v7720.total_users_claim;
                const v12092 = v7720.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v12097 = stdlib.sub(v7708, v7708);
                sim_r.txns.push({
                  kind: 'from',
                  to: v4042,
                  tok: undefined /* Nothing */
                  });
                const v12098 = (stdlib.le(await ctc.getBalance(), v12097) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12097));
                sim_r.txns.push({
                  kind: 'from',
                  to: v4042,
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
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      undefined /* setApiDetails */;
      const v7388 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v4309, ctc1), null);
      const v7389 = stdlib.fromSome(v7388, stdlib.checkedBigNumberify('./index.rsh:187:56:decimal', stdlib.UInt_max, '0'));
      const v7391 = {
        None: 0,
        Some: 1
        }[v7388[0]];
      const v7392 = stdlib.eq(v7391, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7392, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Cannot claim because you have not earned reward',
        who: 'User_claimAll'
        });
      const v7395 = stdlib.le(v7389, v4066);
      stdlib.assert(v7395, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
        msg: 'Cannot claim more than the balance in the contract',
        who: 'User_claimAll'
        });
      ;
      const v7673 = stdlib.gt(v4066, v7389);
      const v7674 = v7673 ? v7389 : v4066;
      const v7676 = stdlib.ge(v7389, v4066);
      if (v7676) {
        null;
        const v7677 = false;
        const v7678 = await txn1.getOutput('User_claimAll', 'v7677', ctc6, v7677);
        if (v3458) {
          stdlib.protect(ctc0, await interact.out(v7330, v7678), {
            at: './index.rsh:186:11:application',
            fs: ['at ./index.rsh:186:11:application call to [unknown function] (defined at: ./index.rsh:186:11:function exp)', 'at ./index.rsh:203:16:application call to "ret" (defined at: ./index.rsh:199:15:function exp)', 'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)'],
            msg: 'out',
            who: 'User_claimAll'
            });
          }
        else {
          }
        
        const v7690 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:204:57:decimal', stdlib.UInt_max, '1'));
        const v7691 = {
          bal: v4087,
          keepGoing: v4088,
          percent: v4089,
          total_amount_claimed: v4090,
          total_rewards_allcoated: v4091,
          total_users_claim: v4092,
          usersNo: v7690
          };
        const v12050 = v4066;
        const v12051 = v7691.keepGoing;
        if (v12051) {
          const v12052 = v7691.bal;
          const v12054 = v7691.percent;
          const v12055 = v7691.total_amount_claimed;
          const v12056 = v7691.total_rewards_allcoated;
          const v12057 = v7691.total_users_claim;
          const v12058 = v7691.usersNo;
          return;
          }
        else {
          const v12063 = stdlib.sub(v4066, v4066);
          ;
          const v12064 = (stdlib.le(await ctc.getBalance(), v12063) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12063));
          ;
          return;
          }}
      else {
        const v7693 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc4, v4309, ctc0), null);
        const v7694 = {
          None: 0,
          Some: 1
          }[v7693[0]];
        const v7695 = stdlib.eq(v7694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v7695) {
          const v7722 = true;
          const v7723 = await txn1.getOutput('User_claimAll', 'v7722', ctc6, v7722);
          if (v3458) {
            stdlib.protect(ctc0, await interact.out(v7330, v7723), {
              at: './index.rsh:186:11:application',
              fs: ['at ./index.rsh:186:11:application call to [unknown function] (defined at: ./index.rsh:186:11:function exp)', 'at ./index.rsh:221:16:application call to "ret" (defined at: ./index.rsh:199:15:function exp)', 'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v7731 = stdlib.sub(v4066, v7674);
          ;
          await stdlib.mapSet(map0, ctc4, v4309, ctc1, undefined /* Nothing */);
          const v7739 = stdlib.safeSub(v4087, v7674);
          const v7740 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:227:54:decimal', stdlib.UInt_max, '1'));
          const v7741 = stdlib.safeAdd(v4090, v7674);
          const v7742 = {
            bal: v7739,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v7741,
            total_rewards_allcoated: v4091,
            total_users_claim: v7740,
            usersNo: v4093
            };
          const v12067 = v7731;
          const v12068 = v7742.keepGoing;
          if (v12068) {
            const v12069 = v7742.bal;
            const v12071 = v7742.percent;
            const v12072 = v7742.total_amount_claimed;
            const v12073 = v7742.total_rewards_allcoated;
            const v12074 = v7742.total_users_claim;
            const v12075 = v7742.usersNo;
            return;
            }
          else {
            const v12080 = stdlib.sub(v7731, v7731);
            ;
            const v12081 = (stdlib.le(await ctc.getBalance(), v12080) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12080));
            ;
            return;
            }}
        else {
          const v7697 = true;
          const v7698 = await txn1.getOutput('User_claimAll', 'v7697', ctc6, v7697);
          if (v3458) {
            stdlib.protect(ctc0, await interact.out(v7330, v7698), {
              at: './index.rsh:186:11:application',
              fs: ['at ./index.rsh:186:11:application call to [unknown function] (defined at: ./index.rsh:186:11:function exp)', 'at ./index.rsh:206:16:application call to "ret" (defined at: ./index.rsh:199:15:function exp)', 'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v7703 = {
            addr: v4309,
            amount: v7674,
            projectName: v4043
            };
          null;
          await stdlib.mapSet(map2, ctc4, v4309, ctc0, null);
          const v7708 = stdlib.sub(v4066, v7674);
          ;
          await stdlib.mapSet(map0, ctc4, v4309, ctc1, undefined /* Nothing */);
          const v7716 = stdlib.safeAdd(v4093, stdlib.checkedBigNumberify('./index.rsh:215:34:decimal', stdlib.UInt_max, '1'));
          const v7717 = stdlib.safeSub(v4087, v7674);
          const v7718 = stdlib.safeAdd(v4092, stdlib.checkedBigNumberify('./index.rsh:217:54:decimal', stdlib.UInt_max, '1'));
          const v7719 = stdlib.safeAdd(v4090, v7674);
          const v7720 = {
            bal: v7717,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v7719,
            total_rewards_allcoated: v4091,
            total_users_claim: v7718,
            usersNo: v7716
            };
          const v12084 = v7708;
          const v12085 = v7720.keepGoing;
          if (v12085) {
            const v12086 = v7720.bal;
            const v12088 = v7720.percent;
            const v12089 = v7720.total_amount_claimed;
            const v12090 = v7720.total_rewards_allcoated;
            const v12091 = v7720.total_users_claim;
            const v12092 = v7720.usersNo;
            return;
            }
          else {
            const v12097 = stdlib.sub(v7708, v7708);
            ;
            const v12098 = (stdlib.le(await ctc.getBalance(), v12097) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12097));
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc12,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc12,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9
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
  
  
  const [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]);
  const v4229 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:267:26:application call to [unknown function] (defined at: ./index.rsh:267:26:function exp)', 'at ./index.rsh:71:37:application call to "runUser_optin0_98" (defined at: ./index.rsh:267:10:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v4233 = ['User_optin0_98', v4229];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4042, v4043, v4066, v4087, v4088, v4089, v4090, v4091, v4092, v4093, v4233],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:269:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
      
      switch (v4310[0]) {
        case 'Admin_addAdmin0_98': {
          const v4313 = v4310[1];
          
          break;
          }
        case 'Admin_deposit0_98': {
          const v4744 = v4310[1];
          
          break;
          }
        case 'Admin_editUserReward0_98': {
          const v5175 = v4310[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_98': {
          const v5606 = v4310[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_98': {
          const v6037 = v4310[1];
          
          break;
          }
        case 'Admin_setReward0_98': {
          const v6468 = v4310[1];
          
          break;
          }
        case 'User_claim0_98': {
          const v6899 = v4310[1];
          
          break;
          }
        case 'User_claimAll0_98': {
          const v7330 = v4310[1];
          
          break;
          }
        case 'User_optin0_98': {
          const v7761 = v4310[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 3, ctc4, v4309, ctc0, null);
          const v8177 = null;
          const v8178 = await txn1.getOutput('User_optin', 'v8177', ctc0, v8177);
          
          const v8190 = {
            bal: v4087,
            keepGoing: v4088,
            percent: v4089,
            total_amount_claimed: v4090,
            total_rewards_allcoated: v4091,
            total_users_claim: v4092,
            usersNo: v4093
            };
          const v12305 = v4066;
          const v12306 = v8190.keepGoing;
          if (v12306) {
            const v12307 = v8190.bal;
            const v12309 = v8190.percent;
            const v12310 = v8190.total_amount_claimed;
            const v12311 = v8190.total_rewards_allcoated;
            const v12312 = v8190.total_users_claim;
            const v12313 = v8190.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v12318 = stdlib.sub(v4066, v4066);
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
              tok: undefined /* Nothing */
              });
            const v12319 = (stdlib.le(await ctc.getBalance(), v12318) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12318));
            sim_r.txns.push({
              kind: 'from',
              to: v4042,
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
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4310], secs: v4312, time: v4311, didSend: v3458, from: v4309 } = txn1;
  switch (v4310[0]) {
    case 'Admin_addAdmin0_98': {
      const v4313 = v4310[1];
      return;
      break;
      }
    case 'Admin_deposit0_98': {
      const v4744 = v4310[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_98': {
      const v5175 = v4310[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_98': {
      const v5606 = v4310[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_98': {
      const v6037 = v4310[1];
      return;
      break;
      }
    case 'Admin_setReward0_98': {
      const v6468 = v4310[1];
      return;
      break;
      }
    case 'User_claim0_98': {
      const v6899 = v4310[1];
      return;
      break;
      }
    case 'User_claimAll0_98': {
      const v7330 = v4310[1];
      return;
      break;
      }
    case 'User_optin0_98': {
      const v7761 = v4310[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map3, ctc4, v4309, ctc0, null);
      const v8177 = null;
      const v8178 = await txn1.getOutput('User_optin', 'v8177', ctc0, v8177);
      if (v3458) {
        stdlib.protect(ctc0, await interact.out(v7761, v8178), {
          at: './index.rsh:267:11:application',
          fs: ['at ./index.rsh:267:11:application call to [unknown function] (defined at: ./index.rsh:267:11:function exp)', 'at ./index.rsh:272:14:application call to "ret" (defined at: ./index.rsh:270:15:function exp)', 'at ./index.rsh:270:15:application call to [unknown function] (defined at: ./index.rsh:270:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v8190 = {
        bal: v4087,
        keepGoing: v4088,
        percent: v4089,
        total_amount_claimed: v4090,
        total_rewards_allcoated: v4091,
        total_users_claim: v4092,
        usersNo: v4093
        };
      const v12305 = v4066;
      const v12306 = v8190.keepGoing;
      if (v12306) {
        const v12307 = v8190.bal;
        const v12309 = v8190.percent;
        const v12310 = v8190.total_amount_claimed;
        const v12311 = v8190.total_rewards_allcoated;
        const v12312 = v8190.total_users_claim;
        const v12313 = v8190.usersNo;
        return;
        }
      else {
        const v12318 = stdlib.sub(v4066, v4066);
        ;
        const v12319 = (stdlib.le(await ctc.getBalance(), v12318) ? stdlib.checkedBigNumberify('./index.rsh:290:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v12318));
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
    impure: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64)byte`, `User_claim(uint64)byte`, `User_claimAll()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[40])))void`],
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `User_claim(uint64)byte`, `User_claimAll()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[40])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAHAAEIA9STAdR6ICYGAAEAAQEBAgEDBJvIVFAxGEEHtihkSSJbNQEkWzUCKWQqZFCCEwQCX3THBBNuVzsEGoMdBQQihEwmBCgTBPIEKTen9gQpi1oQBD75YpoEQmgn1QRIJPkCBG7kdhQEeErZNwR6/shtBIbN6T8Ek8uVjQTsln4qBPMneAQE+XMOCwT6rsiwNhoAjhMAVQEyAVYA8QG3AgcBdwEiBv0BhwCGAacBlwHvANQHDwC+AGsAAQA2GgE1CySvKTQLUCSvUFA1CyU0ARJEiAj7NAsiWzUMNAtXCCk1DYAEUkFnhzQMFlA0DVCwNAyICV40DSJVjQkIjAiPCJIInAboBusG9Qb4BvtC/6s2GgEXNQskryo0CxZQMgNQUDULQv+nNhoBNhoCFzULNQwkrys0DDQLFlBQUDULQv+MgDEAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/1Q2GgE1CySvgAEENAtQJK9QUDULQv8+NhoBNhoCFzULNQwkr4ABBTQMNAsWUFBQNQtC/yE2GgE1CzQBJRJEiAgXKCgqNAtQiAgDIlUjEhZRBwg1BDEZIhJEgAQVH3x1NARQsCNDNAElEkSIB+s0FRY1BEL/3zYaATULNAElEkSIB9YoKCcENAtQiAfBIlUjEhZRBwg1BEL/uzYaATULNAElEkSIB7Ikrygkryk0C1CIB5uIB/01BEL/mjQBJRJEiAeWNBAWNQRC/4o0ASUSRIgHhjQRFjUEQv96NAElEkSIB3Y0DxY1BEL/ajQBJRJEiAdmNA4WNQRC/1qAMQAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+IzYaARc1CySvgAEGNAsWUDIDUFA1C0L+C4AxAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv3TMQA0GRIoKCoxAFCIBr0iVSMSEUQhBSo0DVcBIFAoiAb2KDULgAgAAAAAAAARKTQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRc0F1cIARdBBfY0FyJbNRQ0F1cIARc1EzQXVwkRNRI0F4EaWzURNBeBIls1EDQXgSpbNQ80F4EyWzUONBk0GFA0FRZQNBQWUDQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQJTIGNQI1ASlLAVcAf2cqTFd/AWcoNAEWNAIWUGcxGSISRIgGhDQDQP39Qv3wNA0jWzULMQA0GRIoKCoxAFCIBdAiVSMSEUQ0C4gGMyg1DIAIAAAAAAAAEvE0DFCwNAw1BDQUNAsIFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY0FTQLCDUVNRY1F0L/DjQLIQZbNQwxADQZEigoKjEAUIgFayJVIxIRRDQMNBUORCEEKTQLVwAgUDQMFogFnCg1C4AIAAAAAAAAFL80C1CwNAs1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQv6jNBkxABJEKDULgAgAAAAAAAAWgjQLULA0CzUENBQWKVA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQv5nMQA0GRJEIQUqNA1XASBQiAUhKDULgAgAAAAAAAAYRjQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/ho0C1cAIDUNNAshBltJNQw0FA01GigoJwQ0DVCIBG4iVSMSRCI0DDQaTUk1C4gEyyEEKTQNUCSvKCSvKTQNUIgES4gErRc0DAgWiASMIzUNgAgAAAAAAAAaFTQNFlEHCFCwNA0WUQcINQQ0GkECZDQUNAwINQ00DRY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNBU0Cwg1FTUWNRdC/Xg0DSNbSTULNBUORCSvKCSvKTEAUIgD04gENRc0Cw9EIzUMgAgAAAAAAAAcDzQMFlEHCFCwNAwWUQcINQQxADQLFlA0GFA1DCcFNAxQsCgoKzEAUIgDlCJVIxJBAdo0CzEAiAPOIQQpMQBQiAPXNBQ0CwkWNBMWUQcIUDQSUDQRNAsIFlA0EBZQNA8jCBZQNA4jCBZQMgY0FTQLCTUVNRY1F0L81CgkrykxAFCIAzw1DCSvNAyIA5gXNQs0DCJVIxJENAs0FQ5ENBU0CzQVNAsNTTUMNAs0FQ9BAauABP/eeSg0CxZQsCI1C4AIAAAAAAAAHf00CxZRBwhQsDQLFlEHCDUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOIwgWUDIGNRY1F0L8TSEFJwQxAFAoiAMAKDULgAgAAAAAAAAf8TQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/AcxADUZNAsiWzUMNAtXCB41GIAE0SoGjTQMFlA0GFCwNAyIAuOAOgAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAGQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyBiI1FTUWNRdC+5uIApSBoI0GiAKnNhoBNQtC/4KIAoI2GgE1C0L4+CIxNBJEJTE1EkQiMTYSRCIxNxJEiAJjgYABryIiQvvCQvz0NA1XASg1C0L9N0L91kL+d0L++zQUNQ1C/ZwhBSsxAFAoiAH1NAsxAIgB6iEEKTEAUIgB8zQUNAsJFjQTFlEHCFA0ElA0ETQLCBZQNBAWUDQPIwgWUDQOFlAyBjQVNAsJNRU1FjUXQvryKCgrMQBQiAFbIlUjEkEAYiM1C4AIAAAAAAAAHio0CxZRBwhQsDQLFlEHCDUENAwxAIgBeCEEKTEAUIgBgTQUNAwJFjQTFlEHCFA0ElA0ETQMCBZQNBAWUDQPIwgWUDQOFlAyBjQVNAwJNRU1FjUXQvqAIzULgAgAAAAAAAAeETQLFlEHCFCwNAsWUQcINQQxADQMFlA0GFA1CycFNAtQsCEFKzEAUCiIAQY0DDEAiAD7IQQpMQBQiAEENBQ0DAkWNBMWUQcIUDQSUDQRNAwIFlA0EBZQNA8jCBZQNA4jCBZQMgY0FTQMCTUVNRY1F0L6ATQVNBmIALQyCmAyCngJNBVJCQlJNQs0GYgAoDEZgQUSRIgA5zIKYDIKeAlJNQYyCogAiEL6UUhMv0iJIrIBI7IQsgeyCLOJQvleQvpCNA1XASg1C0L6nEL7BEiJTAlJNQYyCYgAVYkJSUH/7kk1BogAb4m+SRZRBwhFBE1QiUlXACA1GUlXIB41GEmBPls1FUmBRls1FElXTgEXNRNJV08RNRJJgWBbNRFJgWhbNRBJgXBbNQ+BeFs1DomxQv98TEm9QP9xSwOIAE1C/2m8Ik4CTTQHCDUHiUlXAQBMIlVNiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIkjNQOJSSISTDQCEhFEiTQGNAdKD0H/SEL/UDQGCDUGiQ==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `476`,
    1001: `476`,
    1002: `477`,
    1003: `477`,
    1004: `478`,
    1005: `478`,
    1006: `479`,
    1007: `481`,
    1008: `482`,
    1009: `483`,
    101: `21`,
    1010: `484`,
    1011: `484`,
    1012: `485`,
    1013: `486`,
    1014: `486`,
    1015: `486`,
    1016: `487`,
    1017: `488`,
    1018: `489`,
    1019: `490`,
    102: `21`,
    1020: `491`,
    1021: `492`,
    1022: `499`,
    1023: `499`,
    1024: `500`,
    1025: `500`,
    1026: `500`,
    1027: `503`,
    1028: `504`,
    1029: `504`,
    103: `21`,
    1030: `505`,
    1031: `505`,
    1032: `505`,
    1033: `505`,
    1034: `505`,
    1035: `505`,
    1036: `505`,
    1037: `505`,
    1038: `505`,
    1039: `505`,
    104: `21`,
    1040: `506`,
    1041: `506`,
    1042: `507`,
    1043: `508`,
    1044: `509`,
    1045: `509`,
    1046: `510`,
    1047: `510`,
    1048: `511`,
    1049: `511`,
    105: `21`,
    1050: `512`,
    1051: `512`,
    1052: `513`,
    1053: `514`,
    1054: `515`,
    1055: `515`,
    1056: `516`,
    1057: `517`,
    1058: `517`,
    1059: `517`,
    106: `21`,
    1060: `518`,
    1061: `519`,
    1062: `519`,
    1063: `520`,
    1064: `521`,
    1065: `521`,
    1066: `522`,
    1067: `523`,
    1068: `524`,
    1069: `524`,
    107: `21`,
    1070: `525`,
    1071: `526`,
    1072: `527`,
    1073: `527`,
    1074: `528`,
    1075: `529`,
    1076: `530`,
    1077: `530`,
    1078: `531`,
    1079: `532`,
    108: `21`,
    1080: `533`,
    1081: `533`,
    1082: `534`,
    1083: `534`,
    1084: `535`,
    1085: `535`,
    1086: `536`,
    1087: `537`,
    1088: `537`,
    1089: `538`,
    109: `21`,
    1090: `538`,
    1091: `539`,
    1092: `539`,
    1093: `540`,
    1094: `540`,
    1095: `540`,
    1096: `542`,
    1097: `542`,
    1098: `543`,
    1099: `543`,
    11: `2`,
    110: `21`,
    1100: `544`,
    1101: `545`,
    1102: `545`,
    1103: `546`,
    1104: `546`,
    1105: `547`,
    1106: `547`,
    1107: `548`,
    1108: `550`,
    1109: `551`,
    111: `21`,
    1110: `552`,
    1111: `553`,
    1112: `553`,
    1113: `554`,
    1114: `555`,
    1115: `555`,
    1116: `555`,
    1117: `556`,
    1118: `557`,
    1119: `558`,
    112: `21`,
    1120: `559`,
    1121: `560`,
    1122: `561`,
    1123: `568`,
    1124: `568`,
    1125: `569`,
    1126: `569`,
    1127: `570`,
    1128: `571`,
    1129: `579`,
    113: `21`,
    1130: `579`,
    1131: `580`,
    1132: `581`,
    1133: `581`,
    1134: `582`,
    1135: `582`,
    1136: `582`,
    1137: `583`,
    1138: `584`,
    1139: `584`,
    114: `21`,
    1140: `585`,
    1141: `586`,
    1142: `586`,
    1143: `586`,
    1144: `587`,
    1145: `588`,
    1146: `588`,
    1147: `589`,
    1148: `589`,
    1149: `589`,
    115: `21`,
    1150: `589`,
    1151: `589`,
    1152: `589`,
    1153: `589`,
    1154: `589`,
    1155: `589`,
    1156: `589`,
    1157: `590`,
    1158: `590`,
    1159: `591`,
    116: `21`,
    1160: `592`,
    1161: `593`,
    1162: `593`,
    1163: `594`,
    1164: `594`,
    1165: `595`,
    1166: `595`,
    1167: `596`,
    1168: `597`,
    1169: `597`,
    117: `21`,
    1170: `598`,
    1171: `599`,
    1172: `599`,
    1173: `599`,
    1174: `600`,
    1175: `601`,
    1176: `601`,
    1177: `602`,
    1178: `603`,
    1179: `603`,
    118: `21`,
    1180: `604`,
    1181: `605`,
    1182: `606`,
    1183: `606`,
    1184: `607`,
    1185: `608`,
    1186: `609`,
    1187: `609`,
    1188: `610`,
    1189: `611`,
    119: `21`,
    1190: `612`,
    1191: `612`,
    1192: `613`,
    1193: `614`,
    1194: `615`,
    1195: `615`,
    1196: `616`,
    1197: `616`,
    1198: `617`,
    1199: `617`,
    12: `2`,
    120: `21`,
    1200: `618`,
    1201: `618`,
    1202: `618`,
    1203: `620`,
    1204: `620`,
    1205: `621`,
    1206: `621`,
    1207: `622`,
    1208: `623`,
    1209: `630`,
    121: `21`,
    1210: `631`,
    1211: `631`,
    1212: `632`,
    1213: `632`,
    1214: `632`,
    1215: `632`,
    1216: `632`,
    1217: `632`,
    1218: `632`,
    1219: `632`,
    122: `21`,
    1220: `632`,
    1221: `632`,
    1222: `633`,
    1223: `633`,
    1224: `634`,
    1225: `635`,
    1226: `636`,
    1227: `636`,
    1228: `637`,
    1229: `637`,
    123: `21`,
    1230: `638`,
    1231: `638`,
    1232: `639`,
    1233: `640`,
    1234: `641`,
    1235: `642`,
    1236: `642`,
    1237: `643`,
    1238: `644`,
    1239: `644`,
    124: `21`,
    1240: `645`,
    1241: `646`,
    1242: `647`,
    1243: `647`,
    1244: `648`,
    1245: `649`,
    1246: `650`,
    1247: `650`,
    1248: `651`,
    1249: `652`,
    125: `21`,
    1250: `653`,
    1251: `653`,
    1252: `654`,
    1253: `655`,
    1254: `656`,
    1255: `656`,
    1256: `657`,
    1257: `657`,
    1258: `658`,
    1259: `658`,
    126: `21`,
    1260: `659`,
    1261: `659`,
    1262: `659`,
    1263: `661`,
    1264: `661`,
    1265: `662`,
    1266: `662`,
    1267: `663`,
    1268: `664`,
    1269: `672`,
    127: `21`,
    1270: `672`,
    1271: `673`,
    1272: `674`,
    1273: `674`,
    1274: `675`,
    1275: `675`,
    1276: `675`,
    1277: `676`,
    1278: `677`,
    1279: `677`,
    128: `21`,
    1280: `677`,
    1281: `678`,
    1282: `679`,
    1283: `679`,
    1284: `680`,
    1285: `680`,
    1286: `680`,
    1287: `680`,
    1288: `680`,
    1289: `680`,
    129: `21`,
    1290: `680`,
    1291: `680`,
    1292: `680`,
    1293: `680`,
    1294: `681`,
    1295: `681`,
    1296: `682`,
    1297: `683`,
    1298: `684`,
    1299: `684`,
    13: `2`,
    130: `21`,
    1300: `685`,
    1301: `685`,
    1302: `686`,
    1303: `686`,
    1304: `687`,
    1305: `688`,
    1306: `688`,
    1307: `689`,
    1308: `690`,
    1309: `690`,
    131: `21`,
    1310: `690`,
    1311: `691`,
    1312: `692`,
    1313: `692`,
    1314: `693`,
    1315: `694`,
    1316: `694`,
    1317: `695`,
    1318: `696`,
    1319: `697`,
    132: `21`,
    1320: `697`,
    1321: `698`,
    1322: `699`,
    1323: `700`,
    1324: `700`,
    1325: `701`,
    1326: `702`,
    1327: `703`,
    1328: `703`,
    1329: `704`,
    133: `21`,
    1330: `705`,
    1331: `706`,
    1332: `706`,
    1333: `707`,
    1334: `707`,
    1335: `708`,
    1336: `708`,
    1337: `709`,
    1338: `709`,
    1339: `709`,
    134: `21`,
    1340: `711`,
    1341: `711`,
    1342: `712`,
    1343: `712`,
    1344: `712`,
    1345: `713`,
    1346: `713`,
    1347: `714`,
    1348: `714`,
    1349: `715`,
    135: `21`,
    1350: `715`,
    1351: `716`,
    1352: `717`,
    1353: `718`,
    1354: `718`,
    1355: `719`,
    1356: `719`,
    1357: `720`,
    1358: `721`,
    1359: `721`,
    136: `21`,
    1360: `723`,
    1361: `724`,
    1362: `725`,
    1363: `725`,
    1364: `726`,
    1365: `726`,
    1366: `727`,
    1367: `728`,
    1368: `728`,
    1369: `728`,
    137: `21`,
    1370: `729`,
    1371: `730`,
    1372: `731`,
    1373: `732`,
    1374: `733`,
    1375: `740`,
    1376: `741`,
    1377: `741`,
    1378: `742`,
    1379: `742`,
    138: `21`,
    1380: `743`,
    1381: `744`,
    1382: `745`,
    1383: `745`,
    1384: `746`,
    1385: `746`,
    1386: `746`,
    1387: `750`,
    1388: `750`,
    1389: `751`,
    139: `21`,
    1390: `752`,
    1391: `752`,
    1392: `753`,
    1393: `754`,
    1394: `755`,
    1395: `756`,
    1396: `757`,
    1397: `758`,
    1398: `759`,
    1399: `760`,
    14: `2`,
    140: `21`,
    1400: `760`,
    1401: `761`,
    1402: `762`,
    1403: `762`,
    1404: `762`,
    1405: `763`,
    1406: `763`,
    1407: `763`,
    1408: `764`,
    1409: `765`,
    141: `21`,
    1410: `765`,
    1411: `766`,
    1412: `767`,
    1413: `768`,
    1414: `768`,
    1415: `768`,
    1416: `769`,
    1417: `770`,
    1418: `770`,
    1419: `771`,
    142: `21`,
    1420: `771`,
    1421: `771`,
    1422: `771`,
    1423: `771`,
    1424: `771`,
    1425: `771`,
    1426: `771`,
    1427: `771`,
    1428: `771`,
    1429: `772`,
    143: `21`,
    1430: `772`,
    1431: `773`,
    1432: `774`,
    1433: `774`,
    1434: `774`,
    1435: `775`,
    1436: `776`,
    1437: `777`,
    1438: `777`,
    1439: `778`,
    144: `21`,
    1440: `779`,
    1441: `779`,
    1442: `779`,
    1443: `780`,
    1444: `780`,
    1445: `781`,
    1446: `781`,
    1447: `782`,
    1448: `782`,
    1449: `782`,
    145: `21`,
    1450: `783`,
    1451: `783`,
    1452: `784`,
    1453: `784`,
    1454: `785`,
    1455: `786`,
    1456: `786`,
    1457: `788`,
    1458: `788`,
    1459: `789`,
    146: `21`,
    1460: `790`,
    1461: `790`,
    1462: `791`,
    1463: `792`,
    1464: `792`,
    1465: `792`,
    1466: `793`,
    1467: `794`,
    1468: `794`,
    1469: `795`,
    147: `22`,
    1470: `796`,
    1471: `796`,
    1472: `797`,
    1473: `798`,
    1474: `799`,
    1475: `799`,
    1476: `800`,
    1477: `801`,
    1478: `802`,
    1479: `802`,
    148: `22`,
    1480: `803`,
    1481: `804`,
    1482: `805`,
    1483: `805`,
    1484: `806`,
    1485: `807`,
    1486: `808`,
    1487: `808`,
    1488: `809`,
    1489: `809`,
    149: `22`,
    1490: `810`,
    1491: `810`,
    1492: `811`,
    1493: `812`,
    1494: `812`,
    1495: `813`,
    1496: `813`,
    1497: `814`,
    1498: `814`,
    1499: `815`,
    15: `2`,
    150: `23`,
    1500: `815`,
    1501: `815`,
    1502: `817`,
    1503: `817`,
    1504: `818`,
    1505: `819`,
    1506: `820`,
    1507: `821`,
    1508: `821`,
    1509: `822`,
    151: `23`,
    1510: `822`,
    1511: `823`,
    1512: `824`,
    1513: `831`,
    1514: `832`,
    1515: `834`,
    1516: `835`,
    1517: `836`,
    1518: `837`,
    1519: `838`,
    152: `23`,
    1520: `838`,
    1521: `839`,
    1522: `840`,
    1523: `840`,
    1524: `840`,
    1525: `841`,
    1526: `841`,
    1527: `841`,
    1528: `842`,
    1529: `843`,
    153: `23`,
    1530: `843`,
    1531: `844`,
    1532: `845`,
    1533: `852`,
    1534: `853`,
    1535: `853`,
    1536: `854`,
    1537: `854`,
    1538: `854`,
    1539: `854`,
    154: `23`,
    1540: `854`,
    1541: `854`,
    1542: `854`,
    1543: `854`,
    1544: `854`,
    1545: `854`,
    1546: `855`,
    1547: `855`,
    1548: `856`,
    1549: `857`,
    155: `23`,
    1550: `857`,
    1551: `857`,
    1552: `858`,
    1553: `859`,
    1554: `860`,
    1555: `860`,
    1556: `861`,
    1557: `862`,
    1558: `862`,
    1559: `862`,
    156: `23`,
    1560: `863`,
    1561: `863`,
    1562: `864`,
    1563: `864`,
    1564: `865`,
    1565: `865`,
    1566: `866`,
    1567: `867`,
    1568: `868`,
    1569: `868`,
    157: `23`,
    1570: `869`,
    1571: `870`,
    1572: `870`,
    1573: `871`,
    1574: `871`,
    1575: `872`,
    1576: `872`,
    1577: `873`,
    1578: `874`,
    1579: `877`,
    158: `23`,
    1580: `878`,
    1581: `879`,
    1582: `880`,
    1583: `880`,
    1584: `881`,
    1585: `882`,
    1586: `882`,
    1587: `882`,
    1588: `883`,
    1589: `884`,
    159: `23`,
    1590: `885`,
    1591: `886`,
    1592: `887`,
    1593: `887`,
    1594: `887`,
    1595: `888`,
    1596: `888`,
    1597: `889`,
    1598: `889`,
    1599: `890`,
    16: `2`,
    160: `23`,
    1600: `890`,
    1601: `890`,
    1602: `891`,
    1603: `891`,
    1604: `892`,
    1605: `893`,
    1606: `893`,
    1607: `894`,
    1608: `895`,
    1609: `895`,
    161: `23`,
    1610: `895`,
    1611: `896`,
    1612: `896`,
    1613: `897`,
    1614: `897`,
    1615: `898`,
    1616: `899`,
    1617: `900`,
    1618: `900`,
    1619: `901`,
    162: `23`,
    1620: `902`,
    1621: `902`,
    1622: `902`,
    1623: `903`,
    1624: `904`,
    1625: `904`,
    1626: `905`,
    1627: `906`,
    1628: `906`,
    1629: `907`,
    163: `23`,
    1630: `907`,
    1631: `908`,
    1632: `909`,
    1633: `910`,
    1634: `911`,
    1635: `911`,
    1636: `912`,
    1637: `913`,
    1638: `914`,
    1639: `914`,
    164: `23`,
    1640: `915`,
    1641: `916`,
    1642: `917`,
    1643: `918`,
    1644: `919`,
    1645: `919`,
    1646: `920`,
    1647: `921`,
    1648: `922`,
    1649: `923`,
    165: `23`,
    1650: `924`,
    1651: `924`,
    1652: `925`,
    1653: `925`,
    1654: `926`,
    1655: `926`,
    1656: `927`,
    1657: `928`,
    1658: `928`,
    1659: `929`,
    166: `23`,
    1660: `929`,
    1661: `930`,
    1662: `930`,
    1663: `931`,
    1664: `931`,
    1665: `931`,
    1666: `934`,
    1667: `935`,
    1668: `936`,
    1669: `937`,
    167: `23`,
    1670: `938`,
    1671: `938`,
    1672: `939`,
    1673: `940`,
    1674: `940`,
    1675: `940`,
    1676: `941`,
    1677: `941`,
    1678: `942`,
    1679: `943`,
    168: `23`,
    1680: `944`,
    1681: `944`,
    1682: `945`,
    1683: `945`,
    1684: `945`,
    1685: `946`,
    1686: `947`,
    1687: `947`,
    1688: `948`,
    1689: `948`,
    169: `23`,
    1690: `949`,
    1691: `950`,
    1692: `951`,
    1693: `952`,
    1694: `953`,
    1695: `960`,
    1696: `960`,
    1697: `961`,
    1698: `961`,
    1699: `962`,
    17: `2`,
    170: `23`,
    1700: `963`,
    1701: `970`,
    1702: `970`,
    1703: `971`,
    1704: `971`,
    1705: `972`,
    1706: `972`,
    1707: `973`,
    1708: `973`,
    1709: `974`,
    171: `23`,
    1710: `975`,
    1711: `976`,
    1712: `976`,
    1713: `977`,
    1714: `977`,
    1715: `978`,
    1716: `978`,
    1717: `979`,
    1718: `980`,
    1719: `980`,
    172: `23`,
    1720: `980`,
    1721: `981`,
    1722: `981`,
    1723: `981`,
    1724: `981`,
    1725: `981`,
    1726: `981`,
    1727: `982`,
    1728: `982`,
    1729: `983`,
    173: `23`,
    1730: `984`,
    1731: `985`,
    1732: `987`,
    1733: `988`,
    1734: `988`,
    1735: `989`,
    1736: `989`,
    1737: `989`,
    1738: `989`,
    1739: `989`,
    174: `23`,
    1740: `989`,
    1741: `989`,
    1742: `989`,
    1743: `989`,
    1744: `989`,
    1745: `990`,
    1746: `990`,
    1747: `991`,
    1748: `992`,
    1749: `992`,
    175: `23`,
    1750: `992`,
    1751: `993`,
    1752: `994`,
    1753: `995`,
    1754: `995`,
    1755: `996`,
    1756: `997`,
    1757: `997`,
    1758: `997`,
    1759: `998`,
    176: `23`,
    1760: `998`,
    1761: `999`,
    1762: `999`,
    1763: `1000`,
    1764: `1001`,
    1765: `1001`,
    1766: `1002`,
    1767: `1003`,
    1768: `1003`,
    1769: `1003`,
    177: `23`,
    1770: `1004`,
    1771: `1005`,
    1772: `1005`,
    1773: `1006`,
    1774: `1007`,
    1775: `1007`,
    1776: `1008`,
    1777: `1009`,
    1778: `1010`,
    1779: `1010`,
    178: `23`,
    1780: `1011`,
    1781: `1012`,
    1782: `1013`,
    1783: `1013`,
    1784: `1014`,
    1785: `1015`,
    1786: `1016`,
    1787: `1016`,
    1788: `1017`,
    1789: `1018`,
    179: `23`,
    1790: `1019`,
    1791: `1020`,
    1792: `1021`,
    1793: `1021`,
    1794: `1022`,
    1795: `1022`,
    1796: `1023`,
    1797: `1023`,
    1798: `1024`,
    1799: `1024`,
    18: `2`,
    180: `23`,
    1800: `1024`,
    1801: `1027`,
    1802: `1027`,
    1803: `1028`,
    1804: `1028`,
    1805: `1029`,
    1806: `1029`,
    1807: `1030`,
    1808: `1031`,
    1809: `1032`,
    181: `23`,
    1810: `1032`,
    1811: `1032`,
    1812: `1033`,
    1813: `1034`,
    1814: `1034`,
    1815: `1035`,
    1816: `1035`,
    1817: `1035`,
    1818: `1035`,
    1819: `1035`,
    182: `23`,
    1820: `1035`,
    1821: `1035`,
    1822: `1035`,
    1823: `1035`,
    1824: `1035`,
    1825: `1036`,
    1826: `1036`,
    1827: `1037`,
    1828: `1038`,
    1829: `1039`,
    183: `23`,
    1830: `1039`,
    1831: `1040`,
    1832: `1040`,
    1833: `1041`,
    1834: `1041`,
    1835: `1042`,
    1836: `1043`,
    1837: `1043`,
    1838: `1044`,
    1839: `1045`,
    184: `23`,
    1840: `1045`,
    1841: `1045`,
    1842: `1046`,
    1843: `1047`,
    1844: `1047`,
    1845: `1048`,
    1846: `1049`,
    1847: `1049`,
    1848: `1050`,
    1849: `1051`,
    185: `23`,
    1850: `1052`,
    1851: `1052`,
    1852: `1053`,
    1853: `1054`,
    1854: `1055`,
    1855: `1055`,
    1856: `1056`,
    1857: `1057`,
    1858: `1058`,
    1859: `1058`,
    186: `23`,
    1860: `1059`,
    1861: `1060`,
    1862: `1061`,
    1863: `1061`,
    1864: `1062`,
    1865: `1062`,
    1866: `1063`,
    1867: `1063`,
    1868: `1064`,
    1869: `1064`,
    187: `23`,
    1870: `1064`,
    1871: `1066`,
    1872: `1066`,
    1873: `1067`,
    1874: `1067`,
    1875: `1068`,
    1876: `1068`,
    1877: `1069`,
    1878: `1070`,
    1879: `1071`,
    188: `23`,
    1880: `1071`,
    1881: `1072`,
    1882: `1072`,
    1883: `1073`,
    1884: `1073`,
    1885: `1073`,
    1886: `1074`,
    1887: `1074`,
    1888: `1075`,
    1889: `1075`,
    189: `23`,
    1890: `1075`,
    1891: `1075`,
    1892: `1075`,
    1893: `1075`,
    1894: `1076`,
    1895: `1076`,
    1896: `1077`,
    1897: `1078`,
    1898: `1079`,
    1899: `1079`,
    19: `2`,
    190: `25`,
    1900: `1080`,
    1901: `1081`,
    1902: `1083`,
    1903: `1083`,
    1904: `1084`,
    1905: `1084`,
    1906: `1084`,
    1907: `1085`,
    1908: `1085`,
    1909: `1085`,
    191: `27`,
    1910: `1085`,
    1911: `1085`,
    1912: `1085`,
    1913: `1085`,
    1914: `1085`,
    1915: `1085`,
    1916: `1085`,
    1917: `1085`,
    1918: `1085`,
    1919: `1085`,
    192: `27`,
    1920: `1085`,
    1921: `1085`,
    1922: `1085`,
    1923: `1085`,
    1924: `1085`,
    1925: `1085`,
    1926: `1085`,
    1927: `1085`,
    1928: `1085`,
    1929: `1085`,
    193: `27`,
    1930: `1085`,
    1931: `1085`,
    1932: `1085`,
    1933: `1085`,
    1934: `1085`,
    1935: `1085`,
    1936: `1085`,
    1937: `1085`,
    1938: `1085`,
    1939: `1085`,
    194: `28`,
    1940: `1085`,
    1941: `1085`,
    1942: `1085`,
    1943: `1085`,
    1944: `1085`,
    1945: `1085`,
    1946: `1085`,
    1947: `1085`,
    1948: `1085`,
    1949: `1085`,
    195: `28`,
    1950: `1085`,
    1951: `1085`,
    1952: `1085`,
    1953: `1085`,
    1954: `1085`,
    1955: `1085`,
    1956: `1085`,
    1957: `1085`,
    1958: `1085`,
    1959: `1085`,
    196: `30`,
    1960: `1085`,
    1961: `1085`,
    1962: `1085`,
    1963: `1085`,
    1964: `1085`,
    1965: `1085`,
    1966: `1085`,
    1967: `1086`,
    1968: `1086`,
    1969: `1087`,
    197: `31`,
    1970: `1088`,
    1971: `1088`,
    1972: `1089`,
    1973: `1089`,
    1974: `1090`,
    1975: `1090`,
    1976: `1091`,
    1977: `1091`,
    1978: `1091`,
    1979: `1093`,
    198: `32`,
    1980: `1093`,
    1981: `1093`,
    1982: `1094`,
    1983: `1094`,
    1984: `1094`,
    1985: `1094`,
    1986: `1095`,
    1987: `1095`,
    1988: `1095`,
    1989: `1096`,
    199: `33`,
    1990: `1096`,
    1991: `1096`,
    1992: `1097`,
    1993: `1097`,
    1994: `1098`,
    1995: `1098`,
    1996: `1098`,
    1997: `1100`,
    1998: `1100`,
    1999: `1100`,
    2: `2`,
    20: `2`,
    200: `33`,
    2000: `1101`,
    2001: `1101`,
    2002: `1101`,
    2003: `1102`,
    2004: `1102`,
    2005: `1103`,
    2006: `1103`,
    2007: `1103`,
    2008: `1105`,
    2009: `1106`,
    201: `34`,
    2010: `1106`,
    2011: `1107`,
    2012: `1108`,
    2013: `1109`,
    2014: `1110`,
    2015: `1110`,
    2016: `1111`,
    2017: `1112`,
    2018: `1113`,
    2019: `1114`,
    202: `35`,
    2020: `1114`,
    2021: `1115`,
    2022: `1116`,
    2023: `1117`,
    2024: `1118`,
    2025: `1118`,
    2026: `1119`,
    2027: `1120`,
    2028: `1121`,
    2029: `1121`,
    203: `36`,
    2030: `1121`,
    2031: `1122`,
    2032: `1122`,
    2033: `1122`,
    2034: `1123`,
    2035: `1124`,
    2036: `1125`,
    2037: `1126`,
    2038: `1126`,
    2039: `1126`,
    204: `37`,
    2040: `1128`,
    2041: `1128`,
    2042: `1128`,
    2043: `1130`,
    2044: `1130`,
    2045: `1131`,
    2046: `1131`,
    2047: `1131`,
    2048: `1132`,
    2049: `1132`,
    205: `38`,
    2050: `1133`,
    2051: `1133`,
    2052: `1133`,
    2053: `1135`,
    2054: `1135`,
    2055: `1135`,
    2056: `1137`,
    2057: `1137`,
    2058: `1137`,
    2059: `1139`,
    206: `39`,
    2060: `1139`,
    2061: `1139`,
    2062: `1141`,
    2063: `1141`,
    2064: `1142`,
    2065: `1142`,
    2066: `1143`,
    2067: `1143`,
    2068: `1143`,
    2069: `1145`,
    207: `39`,
    2070: `1145`,
    2071: `1146`,
    2072: `1147`,
    2073: `1147`,
    2074: `1148`,
    2075: `1149`,
    2076: `1150`,
    2077: `1150`,
    2078: `1150`,
    2079: `1151`,
    208: `41`,
    2080: `1151`,
    2081: `1152`,
    2082: `1152`,
    2083: `1153`,
    2084: `1153`,
    2085: `1153`,
    2086: `1154`,
    2087: `1154`,
    2088: `1155`,
    2089: `1156`,
    209: `42`,
    2090: `1156`,
    2091: `1157`,
    2092: `1158`,
    2093: `1158`,
    2094: `1158`,
    2095: `1159`,
    2096: `1159`,
    2097: `1160`,
    2098: `1160`,
    2099: `1161`,
    21: `2`,
    210: `42`,
    2100: `1162`,
    2101: `1163`,
    2102: `1163`,
    2103: `1164`,
    2104: `1165`,
    2105: `1165`,
    2106: `1165`,
    2107: `1166`,
    2108: `1167`,
    2109: `1167`,
    211: `43`,
    2110: `1168`,
    2111: `1169`,
    2112: `1169`,
    2113: `1170`,
    2114: `1170`,
    2115: `1171`,
    2116: `1172`,
    2117: `1173`,
    2118: `1174`,
    2119: `1174`,
    212: `44`,
    2120: `1175`,
    2121: `1176`,
    2122: `1177`,
    2123: `1177`,
    2124: `1178`,
    2125: `1179`,
    2126: `1180`,
    2127: `1181`,
    2128: `1182`,
    2129: `1182`,
    213: `45`,
    2130: `1183`,
    2131: `1184`,
    2132: `1185`,
    2133: `1185`,
    2134: `1186`,
    2135: `1186`,
    2136: `1187`,
    2137: `1187`,
    2138: `1188`,
    2139: `1189`,
    214: `45`,
    2140: `1189`,
    2141: `1190`,
    2142: `1190`,
    2143: `1191`,
    2144: `1191`,
    2145: `1192`,
    2146: `1192`,
    2147: `1192`,
    2148: `1195`,
    2149: `1196`,
    215: `45`,
    2150: `1197`,
    2151: `1198`,
    2152: `1198`,
    2153: `1199`,
    2154: `1200`,
    2155: `1200`,
    2156: `1200`,
    2157: `1201`,
    2158: `1202`,
    2159: `1203`,
    216: `46`,
    2160: `1204`,
    2161: `1205`,
    2162: `1205`,
    2163: `1205`,
    2164: `1206`,
    2165: `1207`,
    2166: `1207`,
    2167: `1208`,
    2168: `1208`,
    2169: `1208`,
    217: `46`,
    2170: `1208`,
    2171: `1208`,
    2172: `1208`,
    2173: `1208`,
    2174: `1208`,
    2175: `1208`,
    2176: `1208`,
    2177: `1209`,
    2178: `1209`,
    2179: `1210`,
    218: `47`,
    2180: `1211`,
    2181: `1211`,
    2182: `1211`,
    2183: `1212`,
    2184: `1213`,
    2185: `1214`,
    2186: `1214`,
    2187: `1215`,
    2188: `1216`,
    2189: `1216`,
    219: `48`,
    2190: `1216`,
    2191: `1217`,
    2192: `1217`,
    2193: `1218`,
    2194: `1218`,
    2195: `1219`,
    2196: `1219`,
    2197: `1220`,
    2198: `1220`,
    2199: `1220`,
    22: `2`,
    220: `49`,
    2200: `1221`,
    2201: `1221`,
    2202: `1222`,
    2203: `1223`,
    2204: `1223`,
    2205: `1224`,
    2206: `1225`,
    2207: `1225`,
    2208: `1225`,
    2209: `1226`,
    221: `49`,
    2210: `1226`,
    2211: `1227`,
    2212: `1227`,
    2213: `1228`,
    2214: `1229`,
    2215: `1230`,
    2216: `1230`,
    2217: `1231`,
    2218: `1232`,
    2219: `1232`,
    222: `50`,
    2220: `1232`,
    2221: `1233`,
    2222: `1234`,
    2223: `1234`,
    2224: `1235`,
    2225: `1236`,
    2226: `1236`,
    2227: `1237`,
    2228: `1237`,
    2229: `1238`,
    223: `50`,
    2230: `1239`,
    2231: `1240`,
    2232: `1241`,
    2233: `1241`,
    2234: `1242`,
    2235: `1243`,
    2236: `1244`,
    2237: `1244`,
    2238: `1245`,
    2239: `1246`,
    224: `51`,
    2240: `1247`,
    2241: `1248`,
    2242: `1249`,
    2243: `1249`,
    2244: `1250`,
    2245: `1251`,
    2246: `1252`,
    2247: `1252`,
    2248: `1253`,
    2249: `1253`,
    225: `51`,
    2250: `1254`,
    2251: `1254`,
    2252: `1255`,
    2253: `1256`,
    2254: `1256`,
    2255: `1257`,
    2256: `1257`,
    2257: `1258`,
    2258: `1258`,
    2259: `1259`,
    226: `51`,
    2260: `1259`,
    2261: `1259`,
    2262: `1261`,
    2263: `1262`,
    2264: `1262`,
    2265: `1263`,
    2266: `1263`,
    2267: `1263`,
    2268: `1263`,
    2269: `1263`,
    227: `52`,
    2270: `1263`,
    2271: `1263`,
    2272: `1263`,
    2273: `1263`,
    2274: `1263`,
    2275: `1264`,
    2276: `1264`,
    2277: `1265`,
    2278: `1266`,
    2279: `1266`,
    228: `52`,
    2280: `1266`,
    2281: `1267`,
    2282: `1268`,
    2283: `1269`,
    2284: `1269`,
    2285: `1270`,
    2286: `1271`,
    2287: `1271`,
    2288: `1271`,
    2289: `1272`,
    229: `53`,
    2290: `1272`,
    2291: `1273`,
    2292: `1273`,
    2293: `1274`,
    2294: `1274`,
    2295: `1275`,
    2296: `1276`,
    2297: `1277`,
    2298: `1277`,
    2299: `1278`,
    23: `2`,
    230: `53`,
    2300: `1279`,
    2301: `1279`,
    2302: `1280`,
    2303: `1280`,
    2304: `1281`,
    2305: `1281`,
    2306: `1282`,
    2307: `1283`,
    2308: `1285`,
    2309: `1285`,
    231: `53`,
    2310: `1286`,
    2311: `1287`,
    2312: `1287`,
    2313: `1288`,
    2314: `1289`,
    2315: `1290`,
    2316: `1290`,
    2317: `1290`,
    2318: `1291`,
    2319: `1291`,
    232: `53`,
    2320: `1292`,
    2321: `1292`,
    2322: `1293`,
    2323: `1293`,
    2324: `1293`,
    2325: `1294`,
    2326: `1294`,
    2327: `1295`,
    2328: `1296`,
    2329: `1296`,
    233: `53`,
    2330: `1297`,
    2331: `1298`,
    2332: `1298`,
    2333: `1298`,
    2334: `1299`,
    2335: `1299`,
    2336: `1300`,
    2337: `1300`,
    2338: `1301`,
    2339: `1302`,
    234: `53`,
    2340: `1303`,
    2341: `1303`,
    2342: `1304`,
    2343: `1305`,
    2344: `1305`,
    2345: `1305`,
    2346: `1306`,
    2347: `1307`,
    2348: `1307`,
    2349: `1308`,
    235: `54`,
    2350: `1309`,
    2351: `1309`,
    2352: `1310`,
    2353: `1310`,
    2354: `1311`,
    2355: `1312`,
    2356: `1313`,
    2357: `1314`,
    2358: `1314`,
    2359: `1315`,
    236: `54`,
    2360: `1316`,
    2361: `1317`,
    2362: `1317`,
    2363: `1318`,
    2364: `1319`,
    2365: `1320`,
    2366: `1321`,
    2367: `1322`,
    2368: `1322`,
    2369: `1323`,
    237: `55`,
    2370: `1324`,
    2371: `1325`,
    2372: `1326`,
    2373: `1327`,
    2374: `1327`,
    2375: `1328`,
    2376: `1328`,
    2377: `1329`,
    2378: `1329`,
    2379: `1330`,
    238: `56`,
    2380: `1331`,
    2381: `1331`,
    2382: `1332`,
    2383: `1332`,
    2384: `1333`,
    2385: `1333`,
    2386: `1334`,
    2387: `1334`,
    2388: `1334`,
    2389: `1336`,
    239: `57`,
    2390: `1336`,
    2391: `1338`,
    2392: `1338`,
    2393: `1339`,
    2394: `1339`,
    2395: `1339`,
    2396: `1340`,
    2397: `1340`,
    2398: `1341`,
    2399: `1342`,
    24: `2`,
    240: `57`,
    2400: `1342`,
    2401: `1343`,
    2402: `1344`,
    2403: `1345`,
    2404: `1345`,
    2405: `1346`,
    2406: `1347`,
    2407: `1348`,
    2408: `1350`,
    2409: `1351`,
    241: `58`,
    2410: `1351`,
    2411: `1352`,
    2412: `1352`,
    2413: `1353`,
    2414: `1353`,
    2415: `1353`,
    2416: `1355`,
    2417: `1355`,
    2418: `1356`,
    2419: `1356`,
    242: `59`,
    2420: `1357`,
    2421: `1358`,
    2422: `1360`,
    2423: `1360`,
    2424: `1360`,
    2425: `1362`,
    2426: `1362`,
    2427: `1363`,
    2428: `1364`,
    2429: `1364`,
    243: `61`,
    2430: `1365`,
    2431: `1366`,
    2432: `1368`,
    2433: `1369`,
    2434: `1369`,
    2435: `1370`,
    2436: `1370`,
    2437: `1371`,
    2438: `1371`,
    2439: `1371`,
    244: `61`,
    2440: `1372`,
    2441: `1372`,
    2442: `1372`,
    2443: `1374`,
    2444: `1375`,
    2445: `1376`,
    2446: `1377`,
    2447: `1378`,
    2448: `1380`,
    2449: `1381`,
    245: `62`,
    2450: `1381`,
    2451: `1382`,
    2452: `1383`,
    2453: `1383`,
    2454: `1384`,
    2455: `1384`,
    2456: `1385`,
    2457: `1385`,
    2458: `1386`,
    2459: `1387`,
    246: `62`,
    2460: `1389`,
    2461: `1389`,
    2462: `1389`,
    2463: `1391`,
    2464: `1391`,
    2465: `1391`,
    2466: `1393`,
    2467: `1393`,
    2468: `1394`,
    2469: `1394`,
    247: `62`,
    2470: `1394`,
    2471: `1395`,
    2472: `1395`,
    2473: `1396`,
    2474: `1396`,
    2475: `1396`,
    2476: `1398`,
    2477: `1398`,
    2478: `1398`,
    2479: `1400`,
    248: `63`,
    2480: `1401`,
    2481: `1403`,
    2482: `1404`,
    2483: `1405`,
    2484: `1406`,
    2485: `1406`,
    2486: `1407`,
    2487: `1407`,
    2488: `1408`,
    2489: `1408`,
    249: `63`,
    2490: `1408`,
    2491: `1409`,
    2492: `1411`,
    2493: `1412`,
    2494: `1413`,
    2495: `1413`,
    2496: `1413`,
    2497: `1414`,
    2498: `1415`,
    2499: `1415`,
    25: `2`,
    250: `64`,
    2500: `1416`,
    2501: `1416`,
    2502: `1416`,
    2503: `1417`,
    2504: `1419`,
    2505: `1420`,
    2506: `1421`,
    2507: `1422`,
    2508: `1422`,
    2509: `1422`,
    251: `65`,
    2510: `1423`,
    2511: `1423`,
    2512: `1424`,
    2513: `1425`,
    2514: `1426`,
    2515: `1428`,
    2516: `1429`,
    2517: `1429`,
    2518: `1429`,
    2519: `1430`,
    252: `66`,
    2520: `1430`,
    2521: `1431`,
    2522: `1432`,
    2523: `1432`,
    2524: `1432`,
    2525: `1433`,
    2526: `1433`,
    2527: `1434`,
    2528: `1435`,
    2529: `1435`,
    253: `66`,
    2530: `1436`,
    2531: `1437`,
    2532: `1437`,
    2533: `1438`,
    2534: `1439`,
    2535: `1439`,
    2536: `1440`,
    2537: `1441`,
    2538: `1441`,
    2539: `1442`,
    254: `66`,
    2540: `1443`,
    2541: `1443`,
    2542: `1443`,
    2543: `1444`,
    2544: `1445`,
    2545: `1445`,
    2546: `1446`,
    2547: `1447`,
    2548: `1447`,
    2549: `1447`,
    255: `66`,
    2550: `1448`,
    2551: `1448`,
    2552: `1449`,
    2553: `1450`,
    2554: `1450`,
    2555: `1451`,
    2556: `1452`,
    2557: `1452`,
    2558: `1453`,
    2559: `1454`,
    256: `66`,
    2560: `1454`,
    2561: `1455`,
    2562: `1456`,
    2563: `1456`,
    2564: `1457`,
    2565: `1458`,
    2566: `1458`,
    2567: `1459`,
    2568: `1460`,
    2569: `1460`,
    257: `66`,
    2570: `1461`,
    2571: `1461`,
    2572: `1462`,
    2573: `1463`,
    2574: `1463`,
    2575: `1464`,
    2576: `1466`,
    2577: `1467`,
    2578: `1467`,
    2579: `1467`,
    258: `66`,
    2580: `1469`,
    2581: `1470`,
    2582: `1471`,
    2583: `1472`,
    2584: `1472`,
    2585: `1472`,
    2586: `1473`,
    2587: `1473`,
    2588: `1474`,
    2589: `1474`,
    259: `66`,
    2590: `1474`,
    2591: `1475`,
    2592: `1475`,
    2593: `1475`,
    2594: `1477`,
    2595: `1478`,
    2596: `1479`,
    2597: `1479`,
    2598: `1480`,
    2599: `1482`,
    26: `2`,
    260: `66`,
    2600: `1482`,
    2601: `1483`,
    2602: `1484`,
    2603: `1484`,
    2604: `1485`,
    2605: `1487`,
    2606: `1488`,
    2607: `1488`,
    2608: `1488`,
    2609: `1489`,
    261: `66`,
    2610: `1490`,
    2611: `1491`,
    2612: `1492`,
    2613: `1493`,
    2614: `1496`,
    2615: `1496`,
    2616: `1497`,
    2617: `1497`,
    2618: `1498`,
    2619: `1499`,
    262: `66`,
    2620: `1500`,
    2621: `1501`,
    2622: `1501`,
    2623: `1502`,
    2624: `1503`,
    2625: `1503`,
    2626: `1504`,
    2627: `1504`,
    2628: `1505`,
    2629: `1505`,
    263: `66`,
    2630: `1506`,
    2631: `1507`,
    2632: `1508`,
    2633: `1508`,
    2634: `1509`,
    2635: `1510`,
    2636: `1511`,
    2637: `1512`,
    2638: `1512`,
    2639: `1513`,
    264: `66`,
    2640: `1514`,
    2641: `1515`,
    2642: `1517`,
    2643: `1518`,
    2644: `1518`,
    2645: `1519`,
    2646: `1521`,
    2647: `1522`,
    2648: `1523`,
    2649: `1524`,
    265: `66`,
    2650: `1525`,
    2651: `1525`,
    2652: `1526`,
    2653: `1527`,
    2654: `1528`,
    2655: `1529`,
    2656: `1531`,
    2657: `1531`,
    2658: `1532`,
    2659: `1532`,
    266: `66`,
    2660: `1533`,
    2661: `1534`,
    2662: `1535`,
    2663: `1535`,
    2664: `1535`,
    2665: `1536`,
    2666: `1536`,
    2667: `1536`,
    2668: `1538`,
    2669: `1538`,
    267: `66`,
    2670: `1539`,
    2671: `1540`,
    2672: `1540`,
    2673: `1541`,
    268: `66`,
    269: `66`,
    27: `2`,
    270: `66`,
    271: `66`,
    272: `67`,
    273: `67`,
    274: `67`,
    275: `69`,
    276: `69`,
    277: `69`,
    278: `70`,
    279: `71`,
    28: `2`,
    280: `71`,
    281: `73`,
    282: `74`,
    283: `75`,
    284: `76`,
    285: `76`,
    286: `77`,
    287: `78`,
    288: `79`,
    289: `79`,
    29: `4`,
    290: `80`,
    291: `81`,
    292: `82`,
    293: `82`,
    294: `83`,
    295: `83`,
    296: `83`,
    297: `85`,
    298: `85`,
    299: `85`,
    3: `2`,
    30: `4`,
    300: `86`,
    301: `86`,
    302: `86`,
    303: `87`,
    304: `88`,
    305: `88`,
    306: `89`,
    307: `89`,
    308: `91`,
    309: `92`,
    31: `5`,
    310: `93`,
    311: `94`,
    312: `94`,
    313: `95`,
    314: `95`,
    315: `96`,
    316: `97`,
    317: `98`,
    318: `99`,
    319: `100`,
    32: `5`,
    320: `100`,
    321: `101`,
    322: `101`,
    323: `101`,
    324: `104`,
    325: `104`,
    326: `104`,
    327: `104`,
    328: `104`,
    329: `104`,
    33: `5`,
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
    34: `6`,
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
    35: `7`,
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
    36: `8`,
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
    37: `9`,
    370: `104`,
    371: `104`,
    372: `104`,
    373: `104`,
    374: `104`,
    375: `105`,
    376: `105`,
    377: `106`,
    378: `106`,
    379: `106`,
    38: `10`,
    380: `108`,
    381: `108`,
    382: `108`,
    383: `109`,
    384: `109`,
    385: `111`,
    386: `112`,
    387: `113`,
    388: `113`,
    389: `113`,
    39: `11`,
    390: `114`,
    391: `114`,
    392: `115`,
    393: `116`,
    394: `117`,
    395: `118`,
    396: `119`,
    397: `120`,
    398: `120`,
    399: `121`,
    4: `2`,
    40: `11`,
    400: `121`,
    401: `121`,
    402: `123`,
    403: `123`,
    404: `123`,
    405: `124`,
    406: `124`,
    407: `124`,
    408: `125`,
    409: `126`,
    41: `12`,
    410: `126`,
    411: `127`,
    412: `127`,
    413: `129`,
    414: `130`,
    415: `131`,
    416: `131`,
    417: `131`,
    418: `132`,
    419: `132`,
    42: `13`,
    420: `133`,
    421: `133`,
    422: `134`,
    423: `135`,
    424: `136`,
    425: `137`,
    426: `138`,
    427: `138`,
    428: `139`,
    429: `139`,
    43: `14`,
    430: `139`,
    431: `141`,
    432: `141`,
    433: `141`,
    434: `142`,
    435: `142`,
    436: `144`,
    437: `144`,
    438: `145`,
    439: `146`,
    44: `14`,
    440: `147`,
    441: `150`,
    442: `150`,
    443: `150`,
    444: `152`,
    445: `153`,
    446: `154`,
    447: `155`,
    448: `155`,
    449: `156`,
    45: `15`,
    450: `157`,
    451: `157`,
    452: `157`,
    453: `158`,
    454: `159`,
    455: `160`,
    456: `161`,
    457: `162`,
    458: `163`,
    459: `163`,
    46: `16`,
    460: `163`,
    461: `164`,
    462: `164`,
    463: `166`,
    464: `166`,
    465: `167`,
    466: `168`,
    467: `169`,
    468: `172`,
    469: `172`,
    47: `17`,
    470: `172`,
    471: `172`,
    472: `172`,
    473: `172`,
    474: `173`,
    475: `173`,
    476: `174`,
    477: `175`,
    478: `177`,
    479: `178`,
    48: `18`,
    480: `181`,
    481: `181`,
    482: `182`,
    483: `183`,
    484: `184`,
    485: `187`,
    486: `187`,
    487: `187`,
    488: `188`,
    489: `188`,
    49: `19`,
    490: `189`,
    491: `190`,
    492: `190`,
    493: `191`,
    494: `191`,
    495: `191`,
    496: `193`,
    497: `193`,
    498: `193`,
    499: `194`,
    5: `2`,
    50: `21`,
    500: `194`,
    501: `196`,
    502: `196`,
    503: `197`,
    504: `198`,
    505: `199`,
    506: `202`,
    507: `202`,
    508: `202`,
    509: `204`,
    51: `21`,
    510: `205`,
    511: `206`,
    512: `206`,
    513: `207`,
    514: `207`,
    515: `208`,
    516: `209`,
    517: `209`,
    518: `209`,
    519: `210`,
    52: `21`,
    520: `211`,
    521: `212`,
    522: `213`,
    523: `214`,
    524: `215`,
    525: `215`,
    526: `215`,
    527: `216`,
    528: `216`,
    529: `217`,
    53: `21`,
    530: `217`,
    531: `217`,
    532: `219`,
    533: `219`,
    534: `219`,
    535: `220`,
    536: `220`,
    537: `222`,
    538: `222`,
    539: `223`,
    54: `21`,
    540: `224`,
    541: `225`,
    542: `228`,
    543: `228`,
    544: `228`,
    545: `229`,
    546: `230`,
    547: `232`,
    548: `233`,
    549: `234`,
    55: `21`,
    550: `235`,
    551: `236`,
    552: `236`,
    553: `237`,
    554: `238`,
    555: `238`,
    556: `238`,
    557: `239`,
    558: `239`,
    559: `239`,
    56: `21`,
    560: `240`,
    561: `240`,
    562: `241`,
    563: `241`,
    564: `241`,
    565: `244`,
    566: `244`,
    567: `245`,
    568: `246`,
    569: `247`,
    57: `21`,
    570: `250`,
    571: `250`,
    572: `250`,
    573: `251`,
    574: `251`,
    575: `252`,
    576: `253`,
    577: `253`,
    578: `254`,
    579: `254`,
    58: `21`,
    580: `254`,
    581: `257`,
    582: `257`,
    583: `258`,
    584: `259`,
    585: `260`,
    586: `263`,
    587: `263`,
    588: `263`,
    589: `264`,
    59: `21`,
    590: `264`,
    591: `265`,
    592: `266`,
    593: `266`,
    594: `267`,
    595: `267`,
    596: `267`,
    597: `270`,
    598: `270`,
    599: `271`,
    6: `2`,
    60: `21`,
    600: `272`,
    601: `273`,
    602: `276`,
    603: `276`,
    604: `276`,
    605: `277`,
    606: `277`,
    607: `278`,
    608: `279`,
    609: `279`,
    61: `21`,
    610: `280`,
    611: `280`,
    612: `280`,
    613: `283`,
    614: `283`,
    615: `284`,
    616: `285`,
    617: `286`,
    618: `289`,
    619: `289`,
    62: `21`,
    620: `289`,
    621: `290`,
    622: `290`,
    623: `291`,
    624: `292`,
    625: `292`,
    626: `293`,
    627: `293`,
    628: `293`,
    629: `296`,
    63: `21`,
    630: `296`,
    631: `296`,
    632: `296`,
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
    680: `297`,
    681: `297`,
    682: `298`,
    683: `298`,
    684: `298`,
    685: `300`,
    686: `300`,
    687: `300`,
    688: `301`,
    689: `302`,
    69: `21`,
    690: `302`,
    691: `304`,
    692: `305`,
    693: `306`,
    694: `306`,
    695: `306`,
    696: `307`,
    697: `307`,
    698: `308`,
    699: `309`,
    7: `2`,
    70: `21`,
    700: `310`,
    701: `310`,
    702: `311`,
    703: `312`,
    704: `313`,
    705: `313`,
    706: `314`,
    707: `314`,
    708: `314`,
    709: `317`,
    71: `21`,
    710: `317`,
    711: `317`,
    712: `317`,
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
    760: `318`,
    761: `318`,
    762: `319`,
    763: `319`,
    764: `319`,
    765: `321`,
    766: `321`,
    767: `322`,
    768: `322`,
    769: `323`,
    77: `21`,
    770: `325`,
    771: `326`,
    772: `327`,
    773: `328`,
    774: `328`,
    775: `329`,
    776: `330`,
    777: `330`,
    778: `330`,
    779: `331`,
    78: `21`,
    780: `332`,
    781: `333`,
    782: `334`,
    783: `335`,
    784: `336`,
    785: `344`,
    786: `344`,
    787: `345`,
    788: `346`,
    789: `346`,
    79: `21`,
    790: `347`,
    791: `347`,
    792: `347`,
    793: `348`,
    794: `349`,
    795: `350`,
    796: `350`,
    797: `350`,
    798: `351`,
    799: `352`,
    8: `2`,
    80: `21`,
    800: `352`,
    801: `353`,
    802: `353`,
    803: `353`,
    804: `353`,
    805: `353`,
    806: `353`,
    807: `353`,
    808: `353`,
    809: `353`,
    81: `21`,
    810: `353`,
    811: `354`,
    812: `354`,
    813: `355`,
    814: `356`,
    815: `357`,
    816: `357`,
    817: `358`,
    818: `358`,
    819: `359`,
    82: `21`,
    820: `359`,
    821: `360`,
    822: `361`,
    823: `361`,
    824: `362`,
    825: `363`,
    826: `363`,
    827: `363`,
    828: `364`,
    829: `365`,
    83: `21`,
    830: `365`,
    831: `366`,
    832: `367`,
    833: `367`,
    834: `368`,
    835: `369`,
    836: `370`,
    837: `370`,
    838: `371`,
    839: `372`,
    84: `21`,
    840: `373`,
    841: `373`,
    842: `374`,
    843: `375`,
    844: `376`,
    845: `376`,
    846: `377`,
    847: `378`,
    848: `379`,
    849: `379`,
    85: `21`,
    850: `380`,
    851: `380`,
    852: `381`,
    853: `381`,
    854: `383`,
    855: `383`,
    856: `384`,
    857: `384`,
    858: `384`,
    859: `385`,
    86: `21`,
    860: `386`,
    861: `386`,
    862: `386`,
    863: `387`,
    864: `387`,
    865: `388`,
    866: `389`,
    867: `390`,
    868: `390`,
    869: `391`,
    87: `21`,
    870: `391`,
    871: `392`,
    872: `392`,
    873: `392`,
    874: `393`,
    875: `394`,
    876: `394`,
    877: `395`,
    878: `395`,
    879: `396`,
    88: `21`,
    880: `396`,
    881: `396`,
    882: `397`,
    883: `397`,
    884: `398`,
    885: `398`,
    886: `399`,
    887: `399`,
    888: `400`,
    889: `401`,
    89: `21`,
    890: `401`,
    891: `402`,
    892: `402`,
    893: `403`,
    894: `403`,
    895: `404`,
    896: `405`,
    897: `405`,
    898: `406`,
    899: `406`,
    9: `2`,
    90: `21`,
    900: `407`,
    901: `407`,
    902: `408`,
    903: `409`,
    904: `409`,
    905: `410`,
    906: `410`,
    907: `411`,
    908: `411`,
    909: `412`,
    91: `21`,
    910: `413`,
    911: `413`,
    912: `415`,
    913: `415`,
    914: `416`,
    915: `416`,
    916: `417`,
    917: `418`,
    918: `418`,
    919: `419`,
    92: `21`,
    920: `420`,
    921: `421`,
    922: `421`,
    923: `422`,
    924: `423`,
    925: `424`,
    926: `424`,
    927: `425`,
    928: `426`,
    929: `426`,
    93: `21`,
    930: `426`,
    931: `427`,
    932: `428`,
    933: `428`,
    934: `429`,
    935: `430`,
    936: `430`,
    937: `431`,
    938: `432`,
    939: `433`,
    94: `21`,
    940: `433`,
    941: `434`,
    942: `435`,
    943: `436`,
    944: `436`,
    945: `437`,
    946: `438`,
    947: `439`,
    948: `439`,
    949: `440`,
    95: `21`,
    950: `441`,
    951: `442`,
    952: `443`,
    953: `443`,
    954: `445`,
    955: `445`,
    956: `446`,
    957: `446`,
    958: `447`,
    959: `448`,
    96: `21`,
    960: `448`,
    961: `449`,
    962: `449`,
    963: `449`,
    964: `450`,
    965: `451`,
    966: `452`,
    967: `453`,
    968: `453`,
    969: `453`,
    97: `21`,
    970: `454`,
    971: `455`,
    972: `456`,
    973: `456`,
    974: `457`,
    975: `458`,
    976: `458`,
    977: `459`,
    978: `460`,
    979: `461`,
    98: `21`,
    980: `462`,
    981: `462`,
    982: `463`,
    983: `464`,
    984: `465`,
    985: `467`,
    986: `467`,
    987: `467`,
    988: `469`,
    989: `469`,
    99: `21`,
    990: `470`,
    991: `470`,
    992: `470`,
    993: `471`,
    994: `471`,
    995: `471`,
    996: `473`,
    997: `473`,
    998: `474`,
    999: `475`
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T11","name":"v12396","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_addAdmin0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Admin_deposit0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_editUserReward0_98","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_98","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_revokeAdmin0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_setReward0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_User_claim0_98","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_98","type":"bool"},{"internalType":"bool","name":"_User_optin0_98","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4393","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4849","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5311","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5762","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6214","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6677","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7183","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7677","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7697","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7722","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8177","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"insufficient","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v12347","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12353","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12360","type":"address"},{"internalType":"uint256","name":"v12361","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12371","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12378","type":"address"},{"internalType":"uint256","name":"v12379","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12323","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12329","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12333","type":"address"}],"name":"Info_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12385","type":"uint256"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claimAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_addAdmin0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Admin_deposit0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_editUserReward0_98","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_98","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_revokeAdmin0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_setReward0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_User_claim0_98","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_98","type":"bool"},{"internalType":"bool","name":"_User_optin0_98","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v12399","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200529038819003918201601f19168301916001600160401b038311848410176200059a57808492604094855283398101031262000705576020604051916200004c836200070a565b80518352015161ffff198116810362000705576020820152600080554360035560405161024081016001600160401b038111828210176200059a57600091610220916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015201526040519081606081011060018060401b036060840111176200059a576060820160405262000130606083016200070a565b60006060830152600060808301526060820182526200014e62000726565b60208301526200015d62000756565b604083015260ff60045416620006ec577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a180518015908115620006df575b5015620006c65734620006ad5760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152604051918260a081011060018060401b0360a0850111176200059a5760409060a08401825260008452600060208501526200026c62000756565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b036020830111176200059a576020818101604090815260008352830151015115620005b057506040516001600160401b036101408201908111908211176200059a5780610140610120920160405260008152600060208201526000604082015260006060820152600060808201526200032362000726565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c08101518284015260e0810151610140840152610100810151610160840152015161018082015261018081526101a0810181811060018060401b038211176200059a5760405280516001600160401b0381116200059a576200048a600254620007a8565b601f81116200054c575b50602091601f8211600114620004e257918192600092620004d6575b50508160011b916000199060031b1c1916176002555b604051614a719081620007ff8239f35b015190503880620004b0565b601f19821692600260005260206000209160005b858110620005335750836001951062000519575b505050811b01600255620004c6565b015160001960f88460031b161c191690553880806200050a565b91926020600181928685015181550194019201620004f6565b6002600052620005889060008051602062005270833981519152601f840160051c810191602085106200058f575b601f0160051c0190620007e5565b3862000494565b90915081906200057a565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620006a3575bf1156200068d576000809392819392829347809352511682821562000699575bf1156200068d576000805560006001556200060c600254620007a8565b806200061a575b50620004c6565b601f811160011462000634575060006002555b3862000613565b60026000526200067c90601f0160051c60008051602062005270833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620007e5565b60006020812081600255556200062d565b6040513d6000823e3d90fd5b506108fc620005ef565b506108fc620005cf565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b90506001541438620001ba565b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200059a57604052565b6040519062000735826200070a565b600060208360405162000748816200070a565b838152838382015281520152565b6040519060e082016001600160401b038111838210176200059a576040528160c06000918281528260208201526200078d62000726565b60408201528260608201528260808201528260a08201520152565b90600182811c92168015620007da575b6020831014620007c457565b634e487b7160e01b600052602260045260246000fd5b91607f1691620007b8565b818110620007f1575050565b60008155600101620007e556fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610ac75780630bda465714610a235780631e93b0f114610a0457806336e56ea5146109a35780633702d0ce146109675780634ab9f8b314610911578063523df4f6146108ae57806355c42a951461086e578063672422c71461082057806374623535146107e457806374f16ec91461076e5780637a2b54dc1461072b5780637f0595e2146106c457806383230757146106a5578063883513de1461065957806392cf8bd51461060c578063a579242414610577578063a5928cf514610534578063a8d65f20146104be578063ab53f2c614610452578063c568a57c146102a8578063c5d86f6f1461025a578063cd6637a81461020d578063e0590c9a146101a85763f33c0dce1461013c5750610010565b346101a457816003193601126101a4576003610156610edb565b92540361018d5760206101a08484610100610180610172610c71565b8680825183010191016110e9565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b5080fd5b5082906020366003190112610209576020926101fe6101e0926101c9610edb565b9283916101d4611016565b90358151528781019060068251525160e0825101526101f1611045565b9182525187820152611269565b015115159051908152f35b8280fd5b50346101a457816003193601126101a4576003610228610edb565b925403610243576020610180848460c0610180610172610c71565b602490600c84519163100960cb60e01b8352820152fd5b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a192610290610d1c565b50610dbe565b905191829182610b48565b0390f35b80fd5b50916101a03660031901126101a4576102bf610edb565b8151936102cb85610baf565b358452610180366023190112610209578151936102e785610be0565b60243560098110156104465785526020948560431936011261044657835161030e81610c17565b6001600160a01b0390604435828116810361044e578152878301528660631936011261044257845161033f81610c17565b6064358152858301528460831936011261044257845161035e81610baf565b608435828116810361044e57815260a43588820152606083015260c435801515810361044a5760808301528660e31936011261044257845161039f81610c17565b60e435828116810361044e57815260a08301528461010319360112610442578451906103ca82610baf565b61010435908116810361044a578152610124358782015260c082015285610143193601126104465783516103fd81610c17565b61014435815260e082015261016435801515810361044257610100820152610184358015158103610442576101208201528582015261043c9190611269565b51908152f35b8580fd5b8480fd5b8680fd5b8780fd5b8284346101a457816003193601126101a457815461046e610c71565b91805193849283526020828185015284518093850152815b8381106104a757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610486565b8284806003193601126101a45760c06020926101fe6104db610b0d565b6104e3610edb565b9283918651906104f282610baf565b6001600160a01b039081168252602435828a01908152906105116149d3565b9251168251525188825101528781019060058251525186825101526101f1611045565b8284816003193601126101a4576102006020926101fe610552610edb565b809261055c611045565b878101906007825152511515610100825101526101f1611045565b50346101a45760203660031901126101a457610591610b0d565b90600361059c610edb565b9354036105f5576020610120858560016105d6876105c96105bb610c71565b8880825183010191016110e9565b50828060a01b0316610e8a565b516105e081610b28565b6105e981610b28565b14928391015251908152f35b602490600985519163100960cb60e01b8352820152fd5b50346101a457816003193601126101a4576003610627610edb565b925403610642576020610160848460e0610180610172610c71565b602490600b84519163100960cb60e01b8352820152fd5b50346101a457816003193601126101a4576003610674610edb565b92540361068e576020610100848481610180610172610c71565b602490600884519163100960cb60e01b8352820152fd5b8284346101a457816003193601126101a4576020906001549051908152f35b50346101a45760203660031901126101a4576106de610b0d565b9060036106e9610edb565b93540361071457602060e0858560016105d6876107076105bb610c71565b50828060a01b0316610dbe565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101a4576102206020926101fe610749610edb565b8092610753611045565b878101906008825152511515610120825101526101f1611045565b8284806003193601126101a45760606020926101fe61078b610b0d565b610793610edb565b9283918651906107a282610baf565b6001600160a01b039081168252602435828a01908152906107c16149d3565b9251168251525188825101528781019060028251525186825101526101f1611045565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a19261081a610d1c565b50610e39565b50346101a457816003193601126101a457600361083b610edb565b9254036108575760206101c08484610120610180610172610c71565b602490600e84519163100960cb60e01b8352820152fd5b8284816003193601126101a45760806020926101fe61088b610edb565b8092610895611045565b87810190600382515251151586825101526101f1611045565b60208484366003190183136102a55782906101fe6108ca610b0d565b6108d2610edb565b9283916108dd611016565b80516001600160a01b03909216909152858101805183905290518151870152610904611045565b9182525185820152611269565b50829060203660031901126102095760a0906101fe602094610931610b0d565b9061093a610edb565b938492610945611016565b908151906001808a1b03169052888101918251525186825101526101f1611045565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a19261099d610d1c565b50610e8a565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506109de6060926109d8610d1c565b50610d3b565b908080519280516109ee81610b28565b8452602081015115156020850152015190820152f35b8284346101a457816003193601126101a4576020906003549051908152f35b5090346102a55760203660031901126102a557610a3e610b0d565b610a46610edb565b926003835403610ab05760206101408686818787610a656105bb610c71565b506001600160a01b0316906001610a7b83610d3b565b51610a8581610b28565b610a8e81610b28565b03610aa5575061018090610d3b565b015251908152f35b915050928391610a9d565b602490600a86519163100960cb60e01b8352820152fd5b5082906020366003190112610209576020926101fe8392610ae6610edb565b928391610af1611016565b90358151528781019060018251525186825101526101f1611045565b600435906001600160a01b0382168203610b2357565b600080fd5b60021115610b3257565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610b5e81610b28565b845260208101511515602085015201511515910152565b90600182811c92168015610ba5575b6020831014610b8f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b84565b604081019081106001600160401b03821117610bca57604052565b634e487b7160e01b600052604160045260246000fd5b61014081019081106001600160401b03821117610bca57604052565b606081019081106001600160401b03821117610bca57604052565b602081019081106001600160401b03821117610bca57604052565b6101a081019081106001600160401b03821117610bca57604052565b601f909101601f19168101906001600160401b03821190821017610bca57604052565b6040519060008260025491610c8583610b75565b808352600193808516908115610cfb5750600114610cad575b50610cab92500383610c4e565b565b60026000908152600080516020614a0583398151915294602093509091905b818310610ce3575050610cab935082010138610c9e565b85548884018501529485019487945091830191610ccc565b9050610cab94506020925060ff191682840152151560051b82010138610c9e565b60405190610d2982610bfc565b60006040838281528260208201520152565b90610d44610d1c565b9160018060a01b03166000908082526005602052600160ff604084205416610d6b81610b28565b03610db35760409293508152600560205220600160405191610d8c83610bfc565b60ff8154818116610d9c81610b28565b855260081c16151560208401520154604082015290565b508083526020830152565b90610dc7610d1c565b9160018060a01b03166000908082526006602052600160ff604084205416610dee81610b28565b03610db3576040929350815260066020522060ff60405191610e0f83610bfc565b54818116610e1c81610b28565b8352818160081c161515602084015260101c161515604082015290565b90610e42610d1c565b9160018060a01b03166000908082526007602052600160ff604084205416610e6981610b28565b03610db3576040929350815260076020522060ff60405191610e0f83610bfc565b90610e93610d1c565b9160018060a01b03166000908082526008602052600160ff604084205416610eba81610b28565b03610db3576040929350815260086020522060ff60405191610e0f83610bfc565b6040519061024082016001600160401b03811183821017610bca57604052816102206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201520152565b604090815191610f7f83610be0565b610120836000928382528051610f9481610c17565b84815260208301528051610fa781610c17565b848152818301528051610fb981610baf565b84815284602082015260608301528360808301528051610fd881610c17565b84815260a08301528051610feb81610baf565b84815284602082015260c08301525161100381610c17565b83815260e0820152826101008201520152565b6040519061102382610baf565b8160405161103081610c17565b6000815281526020611040610f70565b910152565b6040519061105282610baf565b81600081526020611040610f70565b6040519061106e82610baf565b600060208360405161107f81610baf565b838152838382015281520152565b6040519060e082016001600160401b03811183821017610bca576040528160c06000918281528260208201526110c1611061565b60408201528260608201528260808201528260a08201520152565b51908115158203610b2357565b809103906101808212610b2357604080519261110484610be0565b82516001600160a01b0381168103610b23578452602083015161ffff1981168103610b2357602085015281830151828501526060830151606085015261114c608084016110dc565b6080850152609f19019060608212610b23578080519261116b84610baf565b12610b23575161117a81610baf565b60a0830151815260c08301516020820152815261119960e083016110dc565b602082015260a0830152610160610100918281015160c0850152610120928382015160e08601526101408201519085015201519082015290565b80516001600160a01b03168252602090810151910152565b516009811015610b325790565b6040519060a082016001600160401b03811183821017610bca57604052600060808382815282602082015261122b61108d565b60408201528260608201520152565b81516001600160a01b031681526020808301519082015260409182015161ffff19169181019190915260600190565b60405192919061034084016001600160401b03811185821017610bca578060405261129381610c17565b6000815284526112a161108d565b60208501526040516112b281610c17565b6000815260408501526112c361108d565b60608501526040516112d481610baf565b600081526000602082015260808501526112ec61108d565b60a08501526112f961108d565b60c085015260405161130a81610c17565b6000815260e085015261131b61108d565b61010085015260405161132d81610baf565b600081526000602082015261012085015260006101408501526000610160850152600061018085015261135e61108d565b6101a085015260405161137081610c17565b600081526101c0850152611382610d1c565b6101e085015261139061108d565b61020085015261139e61108d565b6102208501526113ac610d1c565b610240850152600061026085015260006102808501526113ca61108d565b6102a08501526113d8610d1c565b6102c08501526113e661108d565b6102e08501526113f461108d565b61030085015261140261108d565b61032085015260036000540361495757604051600060025461142381610b75565b808452906001811690811561493357506001146148e6575b509061144c8161145b930382610c4e565b602080825183010191016110e9565b9060ff600454166148cd576040513381528151602082015260208201518051916009831015610b32576101206101c0927fb212047171f573087bd7daffa4c27e0281c01018b089f7487c3ab5d443db17d294604084015260018060a01b0360208201515116606084015260408101515160808401526114e2606082015160a08501906111d3565b6080810151151560e084015260a0810151516001600160a01b031661010084015260c081015161151590838501906111d3565b60e0810151516101608401526101008101511515610180840152015115156101a0820152a1805180159081156148c1575b50156148a85761155960208201516111eb565b6009811015610b3257611a5b57602090810151015184528051336001600160a01b0390911603611a375760015b15611a1e5734611a05576000602060409360018060a01b0387515116835260068252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557f0a8f6db41d97e91fe7939cd1ae2abc5523506970fd499416e1488c097156301d828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c06020860151015260206116656111f8565b82516001600160a01b031681528183015161ffff191682820152940151828501524360608501520151608083015260405161169f81610c17565b600081526040830151602001511561192d57506101206040516116c181610be0565b60008152600060208201526000604082015260006060820152600060808201526116e9611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261182182610c32565b81516001600160401b038111610bca5761183c600254610b75565b601f81116118e5575b50602092601f82116001146118825792819293600092611877575b50508160011b916000199060031b1c191617600255565b015190503880611860565b601f19821693600260005260206000209160005b8681106118cd57508360019596106118b4575b505050811b01600255565b015160001960f88460031b161c191690553880806118a9565b91926020600181928685015181550194019201611896565b600260005261191d90600080516020614a05833981519152601f840160051c81019160208510611923575b601f0160051c01906149bc565b38611845565b9091508190611910565b9091600080808060018060a01b038551166080860151908282156119fc575bf1156119e7574791829052516000918291829182916001600160a01b03168282156119f3575bf1156119e75760008055600060015561198c600254610b75565b806119945750565b601f81116001146119a757506000600255565b60026000526119da90601f0160051c600080516020614a0583398151915201600080516020614a258339815191526149bc565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611972565b506108fc61194c565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b6001611a4233610dbe565b51611a4c81610b28565b611a5581610b28565b14611586565b611a6c6020829694939601516111eb565b6009811015610b3257600103611e545760200151604090810151908301528351336001600160a01b0390911603611e305760015b15611e17576040820151513403611dfe5760406000917f21d6105a825c799afde95418087ec0fca5040334a4c6b498b95182e85cb5045560208351858152a10152611af560608401516040830151519061499b565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a06060830151015261012083015160c060608301510152604080611b5d6111f8565b85516001600160a01b0316815260208087015161ffff19169082015260608481015183830152439082015294015191015151016080830152604051611ba181610c17565b600081526040830151602001511561192d5750610120604051611bc381610be0565b6000815260006020820152600060408201526000606082015260006080820152611beb611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611d2382610c32565b81516001600160401b038111610bca57611d3e600254610b75565b601f8111611dc1575b50602092601f8211600114611d7857928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611da957508360019596106118b457505050811b01600255565b91926020600181928685015181550194019201611d8c565b6002600052611df890600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38611d47565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6001611e3b33610dbe565b51611e4581610b28565b611e4e81610b28565b14611aa0565b611e656020829693949601516111eb565b6009811015610b325760020361229957602001516060015160808501528051336001600160a01b03909116036122755760015b1561225c57602060808501510151604082015110612243573461222a576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557f3cc8e2db9c58361e631989b30b7e314d13c74bd0464130ed2130cbb48c2d705660208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015260a0611f936111f8565b94600180831b03835116865261ffff19602084015116602087015201518285015243606085015201516080830152604051611fcd81610c17565b600081526040830151602001511561192d5750610120604051611fef81610be0565b6000815260006020820152600060408201526000606082015260006080820152612017611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261214f82610c32565b81516001600160401b038111610bca5761216a600254610b75565b601f81116121ed575b50602092601f82116001146121a457928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106121d557508360019596106118b457505050811b01600255565b919260206001819286850151815501940192016121b8565b600260005261222490600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38612173565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b600161228033610dbe565b5161228a81610b28565b61229381610b28565b14611e98565b6122a660208201516111eb565b6009811015610b325760030361263257508051336001600160a01b0390911603612619573461260057600060806040937f4c77fa9627a67945712a21abb8647949b5403f1ea38a085a791ff5ec0897d74460208651858152a10152606081015160c0850151526000602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015260c06123676111f8565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516123a381610c17565b600081526040830151602001511561192d57506101206040516123c581610be0565b60008152600060208201526000604082015260006060820152600060808201526123ed611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261252582610c32565b81516001600160401b038111610bca57612540600254610b75565b601f81116125c3575b50602092601f821160011461257a57928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106125ab57508360019596106118b457505050811b01600255565b9192602060018192868501518155019401920161258e565b60026000526125fa90600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38612549565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b61263f60208201516111eb565b6009811015610b32576004036129fc576020015160a0015160e085015280516001600160a01b031633036129e357346129ca57600060a0604093600180831b0360e088015151168352600660205282858120557f5d1424ee16f6e502d2362583bfdb98ba1d45bc7d4a1d9a1cb45bcb631a270f0960208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c061010086015101526101006127316111f8565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161276d81610c17565b600081526040830151602001511561192d575061012060405161278f81610be0565b60008152600060208201526000604082015260006060820152600060808201526127b7611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526128ef82610c32565b81516001600160401b038111610bca5761290a600254610b75565b601f811161298d575b50602092601f821160011461294457928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061297557508360019596106118b457505050811b01600255565b91926020600181928685015181550194019201612958565b60026000526129c490600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38612913565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b612a0d6020829694939601516111eb565b6009811015610b3257600503612ef75760209081015160c0015161012084018190529081015160608601511061014084015251600190612a55906001600160a01b0316610e8a565b51612a5f81610b28565b612a6881610b28565b03612ede5761014082015115612ed757602061012083015101515b806101608401523403612ebe5760c0600191828060a01b036101208501515116600052600560205260406000208360ff1982541617905582612ad1818060a01b036101208701515116610d3b565b51612adb81610b28565b612ae481610b28565b03612eb457612b176040612b04858060a01b036101208801515116610d3b565b01515b602061012087015101519061499b565b838060a01b036101208601515116600052600560205283604060002001557fcdd8be6d98d25b2f8edc770175ab2ed21f0f95e3d609a354ea20f08e26a5a9bc6020604051858152a1015261014081015115612ea457612b846060840151602061012084015101519061499b565b6101808201525b6101808101516101a0820151526080830151151560206101a0830151015260a083015160406101a0830151015260c083015160606101a0830151015260e083015160806101a0830151015261010083015160a06101a0830151015261012083015160c06101a083015101526101606040612c036111f8565b85516001600160a01b0316815260208087015161ffff1916908201526101a084015182820152436060820152940151910151016080830152604051612c4781610c17565b600081526040830151602001511561192d5750610120604051612c6981610be0565b6000815260006020820152600060408201526000606082015260006080820152612c91611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612dc982610c32565b81516001600160401b038111610bca57612de4600254610b75565b601f8111612e67575b50602092601f8211600114612e1e57928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612e4f57508360019596106118b457505050811b01600255565b91926020600181928685015181550194019201612e32565b6002600052612e9e90600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38612ded565b6060830151610180820152612b8b565b612b176000612b07565b60405163100960cb60e01b815260216004820152602490fd5b6000612a83565b60405163100960cb60e01b815260206004820152602490fd5b612f0460208201516111eb565b6009811015610b325760060361378957602060e09101510151806101c084015251604085015110613770576001612f3a33610d3b565b51612f4481610b28565b612f4d81610b28565b03613769576040612f5d33610d3b565b01515b6101c083015151116137505734613739576101e06001917f0233241e26537435d5a4efb7d605ec7de6cfa800288392970453f8fb2f4a95216020604051858152a10152336101e0820151526101c08101515160206101e0830151015261ffff1960208401511660406101e08301510152600080516020614a45833981519152612ff46101e08301516040519182918261123a565b0390a1600161300233610e39565b5161300c81610b28565b61301581610b28565b0361339f5760008080806101c085015151818115613396575b3390f1156119e7573360005260056020526000600160408220828155015561306160608401516101c083015151906149af565b61022082015152608083015115156020610220830151015260a08301516040610220830151015261309d60c08401516101c0830151519061499b565b6060610220830151015260e0830151608061022083015101526130c4610100840151614970565b60a061022083015101526130dc610120840151614970565b60c061022083015101526101c060406130f36111f8565b85516001600160a01b0316815260208087015161ffff19169082015261022084015182820152436060820152940151910151519003608083015260405161313981610c17565b600081526040830151602001511561192d575061012060405161315b81610be0565b6000815260006020820152600060408201526000606082015260006080820152613183611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526132bb82610c32565b81516001600160401b038111610bca576132d6600254610b75565b601f8111613359575b50602092601f821160011461331057928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061334157508360019596106118b457505050811b01600255565b91926020600181928685015181550194019201613324565b600260005261339090600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b386132df565b506108fc61302e565b336000908152600760205260408120805462ff00ff191660011790556101c082015151819081908190818115613730575b3390f1156119e7573360005260056020526000600160408220828155015561340360608401516101c083015151906149af565b61020082015152608083015115156020610200830151015260a08301516040610200830151015261343f60c08401516101c0830151519061499b565b6060610200830151015260e083015160806102008301510152613466610100840151614970565b60a0610200830151015261012083015160c061020083015101526101c0604061348d6111f8565b85516001600160a01b0316815260208087015161ffff1916908201526102008401518282015243606082015294015191015151900360808301526040516134d381610c17565b600081526040830151602001511561192d57506101206040516134f581610be0565b600081526000602082015260006040820152600060608201526000608082015261351d611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261365582610c32565b81516001600160401b038111610bca57613670600254610b75565b601f81116136f3575b50602092601f82116001146136aa57928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106136db57508360019596106118b457505050811b01600255565b919260206001819286850151815501940192016136be565b600260005261372a90600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38613679565b506108fc6133d0565b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b6000612f60565b60405163100960cb60e01b815260226004820152602490fd5b61379a6020829693949601516111eb565b6009811015610b32576007036143ff57509060016137b733610d3b565b80610240870152516137c881610b28565b6137d181610b28565b036143f857604061024085015101515b6102608501526001610240850151516137f981610b28565b61380281610b28565b036143df576102608401516040830151106143c657346143ad57604082015161026085015190818111156143a85750805b610280860152604083015111613bbb579060006102006040937f98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e9835160206102608901518751908152a17fe515559653f1ca090c4f06cecb3b6866c189786737448be1c8de7ffb1ea880e560208651858152a1015260608101516102a0850151526080810151151560206102a0860151015260a0810151826102a0860151015260c081015160606102a0860151015260e081015160806102a0860151015261010081015160a06102a0860151015261390d610120820151614970565b60c06102a086015101526102a06139226111f8565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161395e81610c17565b600081526040830151602001511561192d575061012060405161398081610be0565b60008152600060208201526000604082015260006060820152600060808201526139a8611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613ae082610c32565b81516001600160401b038111610bca57613afb600254610b75565b601f8111613b7e575b50602092601f8211600114613b3557928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613b6657508360019596106118b457505050811b01600255565b91926020600181928685015181550194019201613b49565b6002600052613bb590600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38613b04565b61020060019182613bce96949633610e39565b51613bd881610b28565b613be181610b28565b03613f8b577f5f6910e1ea432684c49f46187d6f27c2adcfa58b19a9f42ac3afbae79b2802406020604051858152a101526000808080610280850151818115613f82575b3390f1156119e75733600052600560205260006001604082208281550155613c576060840151610280830151906149af565b61030082015152608083015115156020610300830151015260a083015160406103008301510152613c9260c08401516102808301519061499b565b6060610300830151015260e083015160806103008301510152613cb9610100840151614970565b60a0610300830151015261012083015160c061030083015101526102806040613ce06111f8565b85516001600160a01b0316815260208087015161ffff1916908201526103008401518282015243606082015294015191015190036080830152604051613d2581610c17565b600081526040830151602001511561192d5750610120604051613d4781610be0565b6000815260006020820152600060408201526000606082015260006080820152613d6f611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613ea782610c32565b81516001600160401b038111610bca57613ec2600254610b75565b601f8111613f45575b50602092601f8211600114613efc57928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613f2d57508360019596106118b457505050811b01600255565b91926020600181928685015181550194019201613f10565b6002600052613f7c90600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b38613ecb565b506108fc613c25565b7f1ec841fc6dd7fec71e2b474915401e16ab04011b8fd2edbbbc52b4a91153bf886020604051858152a10152336102c08201515261028081015160206102c0830151015261ffff1960208401511660406102c08301510152600080516020614a458339815191526140076102c08301516040519182918261123a565b0390a1336000908152600760205260408120805462ff00ff1916600117905561028082015181908190819081811561439f575b3390f1156119e7573360005260056020526000600160408220828155015561406c6060840151610280830151906149af565b6102e0820151526080830151151560206102e0830151015260a083015160406102e083015101526140a760c08401516102808301519061499b565b60606102e0830151015260e083015160806102e083015101526140ce610100840151614970565b60a06102e083015101526140e6610120840151614970565b60c06102e0830151015261028060406140fd6111f8565b85516001600160a01b0316815260208087015161ffff1916908201526102e0840151828201524360608201529401519101519003608083015260405161414281610c17565b600081526040830151602001511561192d575061012060405161416481610be0565b600081526000602082015260006040820152600060608201526000608082015261418c611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526142c482610c32565b81516001600160401b038111610bca576142df600254610b75565b601f8111614362575b50602092601f821160011461431957928192936000926118775750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061434a57508360019596106118b457505050811b01600255565b9192602060018192868501518155019401920161432d565b600260005261439990600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b386142e8565b506108fc61403a565b613833565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b60006137e1565b602061440c9101516111eb565b6009811015610b3257600814614423575b50509050565b3461488f57336000908152600860209081526040808320805462ff00ff19166001179055805183815290946102209290917f10cf184518def1c4344b5a799744ff178b48cafb4e200709f465572b8797e2659190a10152606081015161032085015152608081015115156020610320860151015260a081015182610320860151015260c08101516060610320860151015260e08101516080610320860151015261010081015160a0610320860151015261012081015160c061032086015101526103206144ee6111f8565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161452a81610c17565b60008152604083015160200151156147b7575061012060405161454c81610be0565b6000815260006020820152600060408201526000606082015260006080820152614574611061565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526146ac82610c32565b81516001600160401b038111610bca576146c7600254610b75565b601f811161477a575b50602092601f82116001146147145792819293600092614709575b50508160011b916000199060031b1c1916176002555b80388061441d565b0151905038806146eb565b601f19821693600260005260206000209160005b8681106147625750836001959610614749575b505050811b01600255614701565b015160001960f88460031b161c1916905538808061473b565b91926020600181928685015181550194019201614728565b60026000526147b190600080516020614a05833981519152601f840160051c8101916020851061192357601f0160051c01906149bc565b386146d0565b9091600080808060018060a01b03855116608086015190828215614886575bf1156119e7574791829052516000918291829182916001600160a01b031682821561487d575bf1156119e757600080556000600155614816600254610b75565b80614822575b50614701565b601f811160011461483a575060006002555b3861481c565b600260005261486d90601f0160051c600080516020614a0583398151915201600080516020614a258339815191526149bc565b6000602081208160025555614834565b506108fc6147fc565b506108fc6147d6565b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b90506001541438611546565b60405163100960cb60e01b815260136004820152602490fd5b60026000908152600080516020614a05833981519152939250905b8082106149195750909150810160200161144c61143b565b919260018160209254838588010152019101909291614901565b60ff191660208086019190915291151560051b8401909101915061144c905061143b565b60405163100960cb60e01b815260126004820152602490fd5b906001820191828111614985578210610b2357565b634e487b7160e01b600052601160045260246000fd5b9190820191828111614985578210610b2357565b9081039081116149855790565b8181106149c7575050565b600081556001016149bc565b604051906149e082610baf565b816040516149ed81610baf565b600081526000602082015281526020611040610f7056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23a164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 21136,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:291:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:71:37:after expr stmt semicolon',
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
