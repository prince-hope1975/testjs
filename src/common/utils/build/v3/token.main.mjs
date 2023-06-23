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
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async (_v2054 ) => {
          const v2054 = stdlib.protect(ctc0, _v2054, null);
        
        const v2055 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v2054, ctc10), null);
        const v2056 = {
          None: 0,
          Some: 1
          }[v2055[0]];
        const v2057 = stdlib.eq(v2056, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2057;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async () => {
        
        
        return v2082;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async (_v2069, _v2070 ) => {
          const v2069 = stdlib.protect(ctc0, _v2069, null);
          const v2070 = stdlib.protect(ctc2, _v2070, null);
        
        const v2071 = [v2069, v2070];
        const v2072 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2071, ctc12), null);
        const v2073 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2074 = stdlib.fromSome(v2072, v2073);
        const v2075 = v2074.claimed;
        
        return v2075;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async (_v2058 ) => {
          const v2058 = stdlib.protect(ctc0, _v2058, null);
        
        const v2059 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v2058, ctc10), null);
        const v2060 = {
          None: 0,
          Some: 1
          }[v2059[0]];
        const v2061 = stdlib.eq(v2060, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2061;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async () => {
        
        
        return v2080;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async () => {
        
        
        return v2077;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async () => {
        
        
        return v2076;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async () => {
        
        
        return v2078;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async (_v2051 ) => {
          const v2051 = stdlib.protect(ctc0, _v2051, null);
        
        const v2052 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2051, ctc3), null);
        const v2053 = stdlib.fromSome(v2052, stdlib.checkedBigNumberify('./token.rsh:94:58:decimal', stdlib.UInt_max, '0'));
        
        return v2053;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = svs;
      return (await ((async (_v2062, _v2063 ) => {
          const v2062 = stdlib.protect(ctc0, _v2062, null);
          const v2063 = stdlib.protect(ctc2, _v2063, null);
        
        const v2064 = [v2062, v2063];
        const v2065 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2064, ctc12), null);
        const v2066 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2067 = stdlib.fromSome(v2065, v2066);
        const v2068 = v2067.rewards;
        
        return v2068;}))(...args));
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
    Admin_addAdmin0_177: ctc15,
    Admin_deposit0_177: ctc16,
    Admin_editUserReward0_177: ctc17,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc15,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2152 = ctc.selfAddress();
  const v2154 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_addAdmin0_177" (defined at: ./token.rsh:193:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v2157 = stdlib.addressEq(v2152, v2013);
  const v2158 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2152, ctc0), null);
  const v2159 = {
    None: 0,
    Some: 1
    }[v2158[0]];
  const v2160 = stdlib.eq(v2159, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2161 = v2157 ? true : v2160;
  stdlib.assert(v2161, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_addAdmin0_177" (defined at: ./token.rsh:193:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v2168 = ['Admin_addAdmin0_177', v2154];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2168],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:199:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:199:14:decimal', stdlib.UInt_max, '0'), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2356, ctc0), null);
          ;
          ;
          const v2486 = v2360[stdlib.checkedBigNumberify('./token.rsh:193:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v2486, ctc0, null);
          const v2495 = null;
          const v2496 = await txn1.getOutput('Admin_addAdmin', 'v2495', ctc0, v2495);
          
          const v2503 = v2027.keepGoing;
          const v2504 = v2027.percent;
          const v2509 = {
            bal: v2079,
            keepGoing: v2503,
            percent: v2504,
            total_amount_claimed: v2077,
            total_rewards_allcoated: v2080,
            total_users_claim: v2076,
            usersNo: v2078
            };
          const v8064 = v2509;
          const v8066 = v2030;
          const v8067 = v2031;
          const v8068 = v2509.keepGoing;
          if (v8068) {
            const v8069 = v2509.total_users_claim;
            const v8070 = v2509.total_amount_claimed;
            const v8071 = v2509.usersNo;
            const v8072 = v2509.bal;
            const v8073 = v2509.total_rewards_allcoated;
            const v8074 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8075 = v8074[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8080 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8081 = v8080[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: v2015
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2015
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      undefined /* setApiDetails */;
      const v2366 = stdlib.addressEq(v2356, v2013);
      const v2367 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2356, ctc0), null);
      const v2368 = {
        None: 0,
        Some: 1
        }[v2367[0]];
      const v2369 = stdlib.eq(v2368, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2370 = v2366 ? true : v2369;
      stdlib.assert(v2370, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      ;
      const v2486 = v2360[stdlib.checkedBigNumberify('./token.rsh:193:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v2486, ctc0, null);
      const v2495 = null;
      const v2496 = await txn1.getOutput('Admin_addAdmin', 'v2495', ctc0, v2495);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v2360, v2496), {
          at: './token.rsh:193:11:application',
          fs: ['at ./token.rsh:193:11:application call to [unknown function] (defined at: ./token.rsh:193:11:function exp)', 'at ./token.rsh:202:14:application call to "ret" (defined at: ./token.rsh:200:15:function exp)', 'at ./token.rsh:200:15:application call to [unknown function] (defined at: ./token.rsh:200:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v2503 = v2027.keepGoing;
      const v2504 = v2027.percent;
      const v2509 = {
        bal: v2079,
        keepGoing: v2503,
        percent: v2504,
        total_amount_claimed: v2077,
        total_rewards_allcoated: v2080,
        total_users_claim: v2076,
        usersNo: v2078
        };
      const v8064 = v2509;
      const v8066 = v2030;
      const v8067 = v2031;
      const v8068 = v2509.keepGoing;
      if (v8068) {
        const v8069 = v2509.total_users_claim;
        const v8070 = v2509.total_amount_claimed;
        const v8071 = v2509.usersNo;
        const v8072 = v2509.bal;
        const v8073 = v2509.total_rewards_allcoated;
        const v8074 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8075 = v8074[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8080 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8081 = v8080[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
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
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc15,
    Admin_editUserReward0_177: ctc17,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2083 = ctc.selfAddress();
  const v2085 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_deposit0_177" (defined at: ./token.rsh:121:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v2086 = v2085[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2088 = stdlib.addressEq(v2083, v2013);
  const v2089 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2083, ctc0), null);
  const v2090 = {
    None: 0,
    Some: 1
    }[v2089[0]];
  const v2091 = stdlib.eq(v2090, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2092 = v2088 ? true : v2091;
  stdlib.assert(v2092, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_deposit0_177" (defined at: ./token.rsh:121:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v2099 = ['Admin_deposit0_177', v2085];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2099],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:124:10:decimal', stdlib.UInt_max, '0'), [[v2086, v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v2826 = v2807[stdlib.checkedBigNumberify('./token.rsh:121:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2356, ctc0), null);
          ;
          const v2928 = stdlib.add(v2082, v2826);
          const v2930 = stdlib.Array_set(v2081, '0', v2928);
          const v2931 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v2930);
          sim_r.txns.push({
            amt: v2826,
            kind: 'to',
            tok: v2015
            });
          const v2967 = null;
          const v2968 = await txn1.getOutput('Admin_deposit', 'v2967', ctc0, v2967);
          
          const v2975 = v2027.keepGoing;
          const v2976 = v2027.percent;
          const v2981 = stdlib.safeAdd(v2079, v2826);
          const v2982 = {
            bal: v2981,
            keepGoing: v2975,
            percent: v2976,
            total_amount_claimed: v2077,
            total_rewards_allcoated: v2080,
            total_users_claim: v2076,
            usersNo: v2078
            };
          const v8244 = v2982;
          const v8246 = v2931;
          const v8247 = v2031;
          const v8248 = v2982.keepGoing;
          if (v8248) {
            const v8249 = v2982.total_users_claim;
            const v8250 = v2982.total_amount_claimed;
            const v8251 = v2982.usersNo;
            const v8252 = v2982.bal;
            const v8253 = v2982.total_rewards_allcoated;
            const v8254 = v2931[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8255 = v8254[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8260 = v2931[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8261 = v8260[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: v2015
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2015
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      undefined /* setApiDetails */;
      const v2826 = v2807[stdlib.checkedBigNumberify('./token.rsh:121:10:spread', stdlib.UInt_max, '0')];
      const v2827 = stdlib.addressEq(v2356, v2013);
      const v2828 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2356, ctc0), null);
      const v2829 = {
        None: 0,
        Some: 1
        }[v2828[0]];
      const v2830 = stdlib.eq(v2829, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2831 = v2827 ? true : v2830;
      stdlib.assert(v2831, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      ;
      const v2928 = stdlib.add(v2082, v2826);
      const v2930 = stdlib.Array_set(v2081, '0', v2928);
      const v2931 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v2930);
      ;
      const v2967 = null;
      const v2968 = await txn1.getOutput('Admin_deposit', 'v2967', ctc0, v2967);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v2807, v2968), {
          at: './token.rsh:121:11:application',
          fs: ['at ./token.rsh:121:11:application call to [unknown function] (defined at: ./token.rsh:121:11:function exp)', 'at ./token.rsh:126:14:application call to "ret" (defined at: ./token.rsh:125:15:function exp)', 'at ./token.rsh:125:15:application call to [unknown function] (defined at: ./token.rsh:125:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v2975 = v2027.keepGoing;
      const v2976 = v2027.percent;
      const v2981 = stdlib.safeAdd(v2079, v2826);
      const v2982 = {
        bal: v2981,
        keepGoing: v2975,
        percent: v2976,
        total_amount_claimed: v2077,
        total_rewards_allcoated: v2080,
        total_users_claim: v2076,
        usersNo: v2078
        };
      const v8244 = v2982;
      const v8246 = v2931;
      const v8247 = v2031;
      const v8248 = v2982.keepGoing;
      if (v8248) {
        const v8249 = v2982.total_users_claim;
        const v8250 = v2982.total_amount_claimed;
        const v8251 = v2982.usersNo;
        const v8252 = v2982.bal;
        const v8253 = v2982.total_rewards_allcoated;
        const v8254 = v2931[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8255 = v8254[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8260 = v2931[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8261 = v8260[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
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
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc15,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2126 = ctc.selfAddress();
  const v2128 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_editUserReward0_177" (defined at: ./token.rsh:180:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v2130 = v2128[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2133 = stdlib.addressEq(v2126, v2013);
  const v2134 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2126, ctc0), null);
  const v2135 = {
    None: 0,
    Some: 1
    }[v2134[0]];
  const v2136 = stdlib.eq(v2135, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2137 = v2133 ? true : v2136;
  stdlib.assert(v2137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:181:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_editUserReward0_177" (defined at: ./token.rsh:180:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v2141 = stdlib.le(v2130, v2082);
  stdlib.assert(v2141, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_editUserReward0_177" (defined at: ./token.rsh:180:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v2150 = ['Admin_editUserReward0_177', v2128];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2150],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:185:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:185:14:decimal', stdlib.UInt_max, '0'), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v3288 = v3254[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2356, ctc0), null);
          ;
          ;
          const v3432 = v3254[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v3432, ctc1, v3288);
          const v3446 = null;
          const v3447 = await txn1.getOutput('Admin_editUserReward', 'v3446', ctc0, v3446);
          
          const v3455 = v2027.keepGoing;
          const v3456 = v2027.percent;
          const v3461 = {
            bal: v2079,
            keepGoing: v3455,
            percent: v3456,
            total_amount_claimed: v2077,
            total_rewards_allcoated: v2080,
            total_users_claim: v2076,
            usersNo: v2078
            };
          const v8424 = v3461;
          const v8426 = v2030;
          const v8427 = v2031;
          const v8428 = v3461.keepGoing;
          if (v8428) {
            const v8429 = v3461.total_users_claim;
            const v8430 = v3461.total_amount_claimed;
            const v8431 = v3461.usersNo;
            const v8432 = v3461.bal;
            const v8433 = v3461.total_rewards_allcoated;
            const v8434 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8435 = v8434[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8440 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8441 = v8440[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: v2015
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2015
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      undefined /* setApiDetails */;
      const v3288 = v3254[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '1')];
      const v3289 = stdlib.addressEq(v2356, v2013);
      const v3290 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2356, ctc0), null);
      const v3291 = {
        None: 0,
        Some: 1
        }[v3290[0]];
      const v3292 = stdlib.eq(v3291, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3293 = v3289 ? true : v3292;
      stdlib.assert(v3293, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:181:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v3297 = stdlib.le(v3288, v2082);
      stdlib.assert(v3297, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      ;
      const v3432 = v3254[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v3432, ctc1, v3288);
      const v3446 = null;
      const v3447 = await txn1.getOutput('Admin_editUserReward', 'v3446', ctc0, v3446);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v3254, v3447), {
          at: './token.rsh:180:11:application',
          fs: ['at ./token.rsh:180:11:application call to [unknown function] (defined at: ./token.rsh:180:11:function exp)', 'at ./token.rsh:188:14:application call to "ret" (defined at: ./token.rsh:186:15:function exp)', 'at ./token.rsh:186:15:application call to [unknown function] (defined at: ./token.rsh:186:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v3455 = v2027.keepGoing;
      const v3456 = v2027.percent;
      const v3461 = {
        bal: v2079,
        keepGoing: v3455,
        percent: v3456,
        total_amount_claimed: v2077,
        total_rewards_allcoated: v2080,
        total_users_claim: v2076,
        usersNo: v2078
        };
      const v8424 = v3461;
      const v8426 = v2030;
      const v8427 = v2031;
      const v8428 = v3461.keepGoing;
      if (v8428) {
        const v8429 = v3461.total_users_claim;
        const v8430 = v3461.total_amount_claimed;
        const v8431 = v3461.usersNo;
        const v8432 = v3461.bal;
        const v8433 = v3461.total_rewards_allcoated;
        const v8434 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8435 = v8434[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8440 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8441 = v8440[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
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
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc15,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc15
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2216 = ctc.selfAddress();
  const v2218 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:318:44:application call to [unknown function] (defined at: ./token.rsh:318:44:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_endContractAndTransfer0_177" (defined at: ./token.rsh:318:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v2219 = stdlib.addressEq(v2013, v2216);
  stdlib.assert(v2219, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:319:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:318:44:application call to [unknown function] (defined at: ./token.rsh:318:44:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_endContractAndTransfer0_177" (defined at: ./token.rsh:318:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v2224 = ['Admin_endContractAndTransfer0_177', v2218];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2224],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:321:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:321:14:decimal', stdlib.UInt_max, '0'), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          ;
          const v3913 = null;
          const v3914 = await txn1.getOutput('Admin_endContractAndTransfer', 'v3913', ctc0, v3913);
          
          const v3921 = v2027.percent;
          const v3926 = {
            bal: v2079,
            keepGoing: false,
            percent: v3921,
            total_amount_claimed: v2077,
            total_rewards_allcoated: v2080,
            total_users_claim: v2076,
            usersNo: v2078
            };
          const v8604 = v3926;
          const v8606 = v2030;
          const v8607 = v2031;
          const v8608 = v3926.keepGoing;
          if (v8608) {
            const v8609 = v3926.total_users_claim;
            const v8610 = v3926.total_amount_claimed;
            const v8611 = v3926.usersNo;
            const v8612 = v3926.bal;
            const v8613 = v3926.total_rewards_allcoated;
            const v8614 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8615 = v8614[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8620 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8621 = v8620[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: v2015
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2015
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      undefined /* setApiDetails */;
      const v3753 = stdlib.addressEq(v2013, v2356);
      stdlib.assert(v3753, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:319:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:318:44:application call to [unknown function] (defined at: ./token.rsh:318:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:318:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      ;
      const v3913 = null;
      const v3914 = await txn1.getOutput('Admin_endContractAndTransfer', 'v3913', ctc0, v3913);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v3701, v3914), {
          at: './token.rsh:318:11:application',
          fs: ['at ./token.rsh:318:11:application call to [unknown function] (defined at: ./token.rsh:318:11:function exp)', 'at ./token.rsh:323:14:application call to "ret" (defined at: ./token.rsh:322:15:function exp)', 'at ./token.rsh:322:15:application call to [unknown function] (defined at: ./token.rsh:322:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v3921 = v2027.percent;
      const v3926 = {
        bal: v2079,
        keepGoing: false,
        percent: v3921,
        total_amount_claimed: v2077,
        total_rewards_allcoated: v2080,
        total_users_claim: v2076,
        usersNo: v2078
        };
      const v8604 = v3926;
      const v8606 = v2030;
      const v8607 = v2031;
      const v8608 = v3926.keepGoing;
      if (v8608) {
        const v8609 = v3926.total_users_claim;
        const v8610 = v3926.total_amount_claimed;
        const v8611 = v3926.usersNo;
        const v8612 = v3926.bal;
        const v8613 = v3926.total_rewards_allcoated;
        const v8614 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8615 = v8614[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8620 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8621 = v8620[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
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
    Admin_addAdmin0_177: ctc15,
    Admin_deposit0_177: ctc16,
    Admin_editUserReward0_177: ctc17,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc15,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2170 = ctc.selfAddress();
  const v2172 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_revokeAdmin0_177" (defined at: ./token.rsh:207:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v2175 = stdlib.addressEq(v2170, v2013);
  stdlib.assert(v2175, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_revokeAdmin0_177" (defined at: ./token.rsh:207:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v2182 = ['Admin_revokeAdmin0_177', v2172];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2182],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:210:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:210:14:decimal', stdlib.UInt_max, '0'), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          ;
          const v4376 = v4148[stdlib.checkedBigNumberify('./token.rsh:207:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v4376, ctc0, undefined /* Nothing */);
          const v4381 = null;
          const v4382 = await txn1.getOutput('Admin_revokeAdmin', 'v4381', ctc0, v4381);
          
          const v4389 = v2027.keepGoing;
          const v4390 = v2027.percent;
          const v4395 = {
            bal: v2079,
            keepGoing: v4389,
            percent: v4390,
            total_amount_claimed: v2077,
            total_rewards_allcoated: v2080,
            total_users_claim: v2076,
            usersNo: v2078
            };
          const v8784 = v4395;
          const v8786 = v2030;
          const v8787 = v2031;
          const v8788 = v4395.keepGoing;
          if (v8788) {
            const v8789 = v4395.total_users_claim;
            const v8790 = v4395.total_amount_claimed;
            const v8791 = v4395.usersNo;
            const v8792 = v4395.bal;
            const v8793 = v4395.total_rewards_allcoated;
            const v8794 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8795 = v8794[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8800 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8801 = v8800[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: v2015
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2015
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      undefined /* setApiDetails */;
      const v4210 = stdlib.addressEq(v2356, v2013);
      stdlib.assert(v4210, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      ;
      const v4376 = v4148[stdlib.checkedBigNumberify('./token.rsh:207:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v4376, ctc0, undefined /* Nothing */);
      const v4381 = null;
      const v4382 = await txn1.getOutput('Admin_revokeAdmin', 'v4381', ctc0, v4381);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v4148, v4382), {
          at: './token.rsh:207:11:application',
          fs: ['at ./token.rsh:207:11:application call to [unknown function] (defined at: ./token.rsh:207:11:function exp)', 'at ./token.rsh:213:14:application call to "ret" (defined at: ./token.rsh:211:15:function exp)', 'at ./token.rsh:211:15:application call to [unknown function] (defined at: ./token.rsh:211:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v4389 = v2027.keepGoing;
      const v4390 = v2027.percent;
      const v4395 = {
        bal: v2079,
        keepGoing: v4389,
        percent: v4390,
        total_amount_claimed: v2077,
        total_rewards_allcoated: v2080,
        total_users_claim: v2076,
        usersNo: v2078
        };
      const v8784 = v4395;
      const v8786 = v2030;
      const v8787 = v2031;
      const v8788 = v4395.keepGoing;
      if (v8788) {
        const v8789 = v4395.total_users_claim;
        const v8790 = v4395.total_amount_claimed;
        const v8791 = v4395.usersNo;
        const v8792 = v4395.bal;
        const v8793 = v4395.total_rewards_allcoated;
        const v8794 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8795 = v8794[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8800 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8801 = v8800[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
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
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc19,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc15,
    User_claim0_177: ctc20,
    User_optin0_177: ctc19
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2103 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_setReward0_177" (defined at: ./token.rsh:134:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v2104 = v2103[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2106 = v2103[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2110 = stdlib.gt(v2106, v2079);
  const v2111 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v2104, ctc0), null);
  const v2112 = {
    None: 0,
    Some: 1
    }[v2111[0]];
  const v2113 = stdlib.eq(v2112, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2113, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_setReward0_177" (defined at: ./token.rsh:134:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v2124 = ['Admin_setReward0_177', v2103];
  
  const v2316 = v2110 ? v2106 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2124],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:139:10:decimal', stdlib.UInt_max, '0'), [[v2316, v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v4666 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '0')];
          const v4668 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '2')];
          const v4669 = stdlib.gt(v4668, v2079);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v4666, ctc0), null);
          const v4674 = v4669 ? v4668 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
          ;
          const v4716 = stdlib.add(v2082, v4674);
          const v4718 = stdlib.Array_set(v2081, '0', v4716);
          const v4719 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v4718);
          sim_r.txns.push({
            amt: v4674,
            kind: 'to',
            tok: v2015
            });
          const v4846 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '1')];
          const v4856 = [v4666, v4846];
          const v4857 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v4856, ctc3), null);
          const v4858 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v4859 = stdlib.fromSome(v4857, v4858);
          const v4861 = v4859.claimed;
          const v4862 = v4859.rewards;
          const v4864 = stdlib.safeAdd(v4862, v4668);
          const v4865 = {
            claimed: v4861,
            rewards: v4864
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v4856, ctc3, v4865);
          const v4866 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v4666, ctc1), null);
          const v4867 = stdlib.fromSome(v4866, stdlib.checkedBigNumberify('./token.rsh:149:60:decimal', stdlib.UInt_max, '0'));
          const v4871 = stdlib.safeAdd(v4867, v4668);
          await stdlib.simMapSet(sim_r, 0, ctc6, v4666, ctc1, v4871);
          const v4872 = true;
          const v4873 = await txn1.getOutput('Admin_setReward', 'v4872', ctc9, v4872);
          
          const v4882 = v2027.keepGoing;
          const v4883 = v2027.percent;
          let v4888;
          if (v4669) {
            const v4889 = stdlib.safeAdd(v2079, v4668);
            v4888 = v4889;
            }
          else {
            v4888 = v2079;
            }
          const v4890 = {
            bal: v4888,
            keepGoing: v4882,
            percent: v4883,
            total_amount_claimed: v2077,
            total_rewards_allcoated: v2080,
            total_users_claim: v2076,
            usersNo: v2078
            };
          const v8964 = v4890;
          const v8966 = v4719;
          const v8967 = v2031;
          const v8968 = v4890.keepGoing;
          if (v8968) {
            const v8969 = v4890.total_users_claim;
            const v8970 = v4890.total_amount_claimed;
            const v8971 = v4890.usersNo;
            const v8972 = v4890.bal;
            const v8973 = v4890.total_rewards_allcoated;
            const v8974 = v4719[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8975 = v8974[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8980 = v4719[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8981 = v8980[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: v2015
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2015
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      undefined /* setApiDetails */;
      const v4666 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '0')];
      const v4668 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '2')];
      const v4669 = stdlib.gt(v4668, v2079);
      const v4670 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v4666, ctc0), null);
      const v4671 = {
        None: 0,
        Some: 1
        }[v4670[0]];
      const v4672 = stdlib.eq(v4671, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4672, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v4674 = v4669 ? v4668 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
      ;
      const v4716 = stdlib.add(v2082, v4674);
      const v4718 = stdlib.Array_set(v2081, '0', v4716);
      const v4719 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v4718);
      ;
      const v4846 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '1')];
      const v4856 = [v4666, v4846];
      const v4857 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v4856, ctc3), null);
      const v4858 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4859 = stdlib.fromSome(v4857, v4858);
      const v4861 = v4859.claimed;
      const v4862 = v4859.rewards;
      const v4864 = stdlib.safeAdd(v4862, v4668);
      const v4865 = {
        claimed: v4861,
        rewards: v4864
        };
      await stdlib.mapSet(map1, ctc22, v4856, ctc3, v4865);
      const v4866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4666, ctc1), null);
      const v4867 = stdlib.fromSome(v4866, stdlib.checkedBigNumberify('./token.rsh:149:60:decimal', stdlib.UInt_max, '0'));
      const v4871 = stdlib.safeAdd(v4867, v4668);
      await stdlib.mapSet(map0, ctc6, v4666, ctc1, v4871);
      const v4872 = true;
      const v4873 = await txn1.getOutput('Admin_setReward', 'v4872', ctc9, v4872);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v4595, v4873), {
          at: './token.rsh:134:11:application',
          fs: ['at ./token.rsh:134:11:application call to [unknown function] (defined at: ./token.rsh:134:11:function exp)', 'at ./token.rsh:152:16:application call to "ret" (defined at: ./token.rsh:140:15:function exp)', 'at ./token.rsh:140:15:application call to [unknown function] (defined at: ./token.rsh:140:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      const v4882 = v2027.keepGoing;
      const v4883 = v2027.percent;
      let v4888;
      if (v4669) {
        const v4889 = stdlib.safeAdd(v2079, v4668);
        v4888 = v4889;
        }
      else {
        v4888 = v2079;
        }
      const v4890 = {
        bal: v4888,
        keepGoing: v4882,
        percent: v4883,
        total_amount_claimed: v2077,
        total_rewards_allcoated: v2080,
        total_users_claim: v2076,
        usersNo: v2078
        };
      const v8964 = v4890;
      const v8966 = v4719;
      const v8967 = v2031;
      const v8968 = v4890.keepGoing;
      if (v8968) {
        const v8969 = v4890.total_users_claim;
        const v8970 = v4890.total_amount_claimed;
        const v8971 = v4890.usersNo;
        const v8972 = v4890.bal;
        const v8973 = v4890.total_rewards_allcoated;
        const v8974 = v4719[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8975 = v8974[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8980 = v4719[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8981 = v8980[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
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
    Admin_addAdmin0_177: ctc9,
    Admin_deposit0_177: ctc10,
    Admin_editUserReward0_177: ctc11,
    Admin_endContractAndTransfer0_177: ctc12,
    Admin_revokeAdmin0_177: ctc9,
    Admin_setReward0_177: ctc13,
    User_claim0_177: ctc14,
    User_optin0_177: ctc12
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
  
  
  const v2004 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2005 = [v2004];
  const v2009 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2010 = stdlib.protect(ctc7, interact.tok, 'for Deployer\'s interact field tok');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2009, v2010],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc7],
    pay: [stdlib.checkedBigNumberify('./token.rsh:61:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2014, v2015], secs: v2017, time: v2016, didSend: v29, from: v2013 } = txn1;
      
      const v2018 = v2005[stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0')];
      const v2019 = stdlib.Array_set(v2018, '0', stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'));
      const v2020 = stdlib.Array_set(v2005, stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'), v2019);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2015
        });
      ;
      const v2022 = await ctc.getContractInfo();
      
      const v2024 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v2025 = {
        i: v2024,
        sign: true
        };
      const v2026 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v2025,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2027 = v2026;
      const v2028 = v2016;
      const v2030 = v2020;
      const v2031 = stdlib.checkedBigNumberify('./token.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v2050 = v2027.keepGoing;
        
        return v2050;})()) {
        const v2076 = v2027.total_users_claim;
        const v2077 = v2027.total_amount_claimed;
        const v2078 = v2027.usersNo;
        const v2079 = v2027.bal;
        const v2080 = v2027.total_rewards_allcoated;
        const v2081 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v2082 = v2081[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v5966 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v5967 = v5966[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2013,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2013,
          tok: v2015
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2015
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
  const {data: [v2014, v2015], secs: v2017, time: v2016, didSend: v29, from: v2013 } = txn1;
  const v2018 = v2005[stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0')];
  const v2019 = stdlib.Array_set(v2018, '0', stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'));
  const v2020 = stdlib.Array_set(v2005, stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'), v2019);
  ;
  ;
  const v2022 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2022), {
    at: './token.rsh:63:27:application',
    fs: ['at ./token.rsh:63:27:application call to [unknown function] (defined at: ./token.rsh:63:27:function exp)', 'at ./token.rsh:63:27:application call to "liftedInteract" (defined at: ./token.rsh:63:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2024 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v2025 = {
    i: v2024,
    sign: true
    };
  const v2026 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v2025,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2027 = v2026;
  let v2028 = v2016;
  let v2030 = v2020;
  let v2031 = stdlib.checkedBigNumberify('./token.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v2050 = v2027.keepGoing;
    
    return v2050;})()) {
    const v2076 = v2027.total_users_claim;
    const v2077 = v2027.total_amount_claimed;
    const v2078 = v2027.usersNo;
    const v2079 = v2027.bal;
    const v2080 = v2027.total_rewards_allcoated;
    const v2081 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
    const v2082 = v2081[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn3;
    switch (v2357[0]) {
      case 'Admin_addAdmin0_177': {
        const v2360 = v2357[1];
        undefined /* setApiDetails */;
        const v2366 = stdlib.addressEq(v2356, v2013);
        const v2367 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2356, ctc0), null);
        const v2368 = {
          None: 0,
          Some: 1
          }[v2367[0]];
        const v2369 = stdlib.eq(v2368, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2370 = v2366 ? true : v2369;
        stdlib.assert(v2370, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        ;
        const v2486 = v2360[stdlib.checkedBigNumberify('./token.rsh:193:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v2486, ctc0, null);
        const v2495 = null;
        await txn3.getOutput('Admin_addAdmin', 'v2495', ctc0, v2495);
        const v2503 = v2027.keepGoing;
        const v2504 = v2027.percent;
        const v2509 = {
          bal: v2079,
          keepGoing: v2503,
          percent: v2504,
          total_amount_claimed: v2077,
          total_rewards_allcoated: v2080,
          total_users_claim: v2076,
          usersNo: v2078
          };
        const cv2027 = v2509;
        const cv2028 = v2358;
        const cv2030 = v2030;
        const cv2031 = v2031;
        
        v2027 = cv2027;
        v2028 = cv2028;
        v2030 = cv2030;
        v2031 = cv2031;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_177': {
        const v2807 = v2357[1];
        undefined /* setApiDetails */;
        const v2826 = v2807[stdlib.checkedBigNumberify('./token.rsh:121:10:spread', stdlib.UInt_max, '0')];
        const v2827 = stdlib.addressEq(v2356, v2013);
        const v2828 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2356, ctc0), null);
        const v2829 = {
          None: 0,
          Some: 1
          }[v2828[0]];
        const v2830 = stdlib.eq(v2829, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2831 = v2827 ? true : v2830;
        stdlib.assert(v2831, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        ;
        const v2928 = stdlib.add(v2082, v2826);
        const v2930 = stdlib.Array_set(v2081, '0', v2928);
        const v2931 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v2930);
        ;
        const v2967 = null;
        await txn3.getOutput('Admin_deposit', 'v2967', ctc0, v2967);
        const v2975 = v2027.keepGoing;
        const v2976 = v2027.percent;
        const v2981 = stdlib.safeAdd(v2079, v2826);
        const v2982 = {
          bal: v2981,
          keepGoing: v2975,
          percent: v2976,
          total_amount_claimed: v2077,
          total_rewards_allcoated: v2080,
          total_users_claim: v2076,
          usersNo: v2078
          };
        const cv2027 = v2982;
        const cv2028 = v2358;
        const cv2030 = v2931;
        const cv2031 = v2031;
        
        v2027 = cv2027;
        v2028 = cv2028;
        v2030 = cv2030;
        v2031 = cv2031;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_177': {
        const v3254 = v2357[1];
        undefined /* setApiDetails */;
        const v3288 = v3254[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '1')];
        const v3289 = stdlib.addressEq(v2356, v2013);
        const v3290 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2356, ctc0), null);
        const v3291 = {
          None: 0,
          Some: 1
          }[v3290[0]];
        const v3292 = stdlib.eq(v3291, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3293 = v3289 ? true : v3292;
        stdlib.assert(v3293, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:181:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v3297 = stdlib.le(v3288, v2082);
        stdlib.assert(v3297, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        ;
        const v3432 = v3254[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc8, v3432, ctc1, v3288);
        const v3446 = null;
        await txn3.getOutput('Admin_editUserReward', 'v3446', ctc0, v3446);
        const v3455 = v2027.keepGoing;
        const v3456 = v2027.percent;
        const v3461 = {
          bal: v2079,
          keepGoing: v3455,
          percent: v3456,
          total_amount_claimed: v2077,
          total_rewards_allcoated: v2080,
          total_users_claim: v2076,
          usersNo: v2078
          };
        const cv2027 = v3461;
        const cv2028 = v2358;
        const cv2030 = v2030;
        const cv2031 = v2031;
        
        v2027 = cv2027;
        v2028 = cv2028;
        v2030 = cv2030;
        v2031 = cv2031;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_177': {
        const v3701 = v2357[1];
        undefined /* setApiDetails */;
        const v3753 = stdlib.addressEq(v2013, v2356);
        stdlib.assert(v3753, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:319:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:318:44:application call to [unknown function] (defined at: ./token.rsh:318:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:318:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        ;
        const v3913 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v3913', ctc0, v3913);
        const v3921 = v2027.percent;
        const v3926 = {
          bal: v2079,
          keepGoing: false,
          percent: v3921,
          total_amount_claimed: v2077,
          total_rewards_allcoated: v2080,
          total_users_claim: v2076,
          usersNo: v2078
          };
        const cv2027 = v3926;
        const cv2028 = v2358;
        const cv2030 = v2030;
        const cv2031 = v2031;
        
        v2027 = cv2027;
        v2028 = cv2028;
        v2030 = cv2030;
        v2031 = cv2031;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_177': {
        const v4148 = v2357[1];
        undefined /* setApiDetails */;
        const v4210 = stdlib.addressEq(v2356, v2013);
        stdlib.assert(v4210, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        ;
        const v4376 = v4148[stdlib.checkedBigNumberify('./token.rsh:207:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v4376, ctc0, undefined /* Nothing */);
        const v4381 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v4381', ctc0, v4381);
        const v4389 = v2027.keepGoing;
        const v4390 = v2027.percent;
        const v4395 = {
          bal: v2079,
          keepGoing: v4389,
          percent: v4390,
          total_amount_claimed: v2077,
          total_rewards_allcoated: v2080,
          total_users_claim: v2076,
          usersNo: v2078
          };
        const cv2027 = v4395;
        const cv2028 = v2358;
        const cv2030 = v2030;
        const cv2031 = v2031;
        
        v2027 = cv2027;
        v2028 = cv2028;
        v2030 = cv2030;
        v2031 = cv2031;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_177': {
        const v4595 = v2357[1];
        undefined /* setApiDetails */;
        const v4666 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '0')];
        const v4668 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '2')];
        const v4669 = stdlib.gt(v4668, v2079);
        const v4670 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc8, v4666, ctc0), null);
        const v4671 = {
          None: 0,
          Some: 1
          }[v4670[0]];
        const v4672 = stdlib.eq(v4671, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v4674 = v4669 ? v4668 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
        ;
        const v4716 = stdlib.add(v2082, v4674);
        const v4718 = stdlib.Array_set(v2081, '0', v4716);
        const v4719 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v4718);
        ;
        const v4846 = v4595[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '1')];
        const v4856 = [v4666, v4846];
        const v4857 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v4856, ctc3), null);
        const v4858 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4859 = stdlib.fromSome(v4857, v4858);
        const v4861 = v4859.claimed;
        const v4862 = v4859.rewards;
        const v4864 = stdlib.safeAdd(v4862, v4668);
        const v4865 = {
          claimed: v4861,
          rewards: v4864
          };
        await stdlib.mapSet(map1, ctc16, v4856, ctc3, v4865);
        const v4866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4666, ctc1), null);
        const v4867 = stdlib.fromSome(v4866, stdlib.checkedBigNumberify('./token.rsh:149:60:decimal', stdlib.UInt_max, '0'));
        const v4871 = stdlib.safeAdd(v4867, v4668);
        await stdlib.mapSet(map0, ctc8, v4666, ctc1, v4871);
        const v4872 = true;
        await txn3.getOutput('Admin_setReward', 'v4872', ctc17, v4872);
        const v4882 = v2027.keepGoing;
        const v4883 = v2027.percent;
        let v4888;
        if (v4669) {
          const v4889 = stdlib.safeAdd(v2079, v4668);
          v4888 = v4889;
          }
        else {
          v4888 = v2079;
          }
        const v4890 = {
          bal: v4888,
          keepGoing: v4882,
          percent: v4883,
          total_amount_claimed: v2077,
          total_rewards_allcoated: v2080,
          total_users_claim: v2076,
          usersNo: v2078
          };
        const cv2027 = v4890;
        const cv2028 = v2358;
        const cv2030 = v4719;
        const cv2031 = v2031;
        
        v2027 = cv2027;
        v2028 = cv2028;
        v2030 = cv2030;
        v2031 = cv2031;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_177': {
        const v5042 = v2357[1];
        undefined /* setApiDetails */;
        const v5129 = v5042[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '0')];
        const v5131 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2356, ctc1), null);
        const v5132 = stdlib.fromSome(v5131, stdlib.checkedBigNumberify('./token.rsh:267:56:decimal', stdlib.UInt_max, '0'));
        const v5135 = stdlib.le(v5129, v2082);
        stdlib.assert(v5135, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5137 = stdlib.ge(v5132, v5129);
        stdlib.assert(v5137, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        ;
        const v5383 = v5042[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '1')];
        const v5398 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v2356, ctc0), null);
        const v5399 = {
          None: 0,
          Some: 1
          }[v5398[0]];
        const v5400 = stdlib.eq(v5399, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5401 = [v2356, v5383];
        const v5402 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5401, ctc3), null);
        const v5403 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5404 = stdlib.fromSome(v5402, v5403);
        const v5406 = v5404.claimed;
        const v5407 = v5404.rewards;
        const v5409 = stdlib.safeAdd(v5406, v5129);
        const v5411 = stdlib.safeSub(v5407, v5129);
        const v5412 = {
          claimed: v5409,
          rewards: v5411
          };
        await stdlib.mapSet(map1, ctc16, v5401, ctc3, v5412);
        const v5413 = true;
        await txn3.getOutput('User_claim', 'v5413', ctc17, v5413);
        const v5421 = {
          addr: v2356,
          amount: v5129,
          projectName: v2014
          };
        null;
        if (v5400) {
          const v5453 = stdlib.sub(v2082, v5129);
          const v5455 = stdlib.Array_set(v2081, '0', v5453);
          const v5456 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5455);
          ;
          await stdlib.mapSet(map0, ctc8, v2356, ctc1, undefined /* Nothing */);
          const v5458 = v2027.keepGoing;
          const v5459 = v2027.percent;
          const v5466 = stdlib.safeAdd(v2078, stdlib.checkedBigNumberify('./token.rsh:297:56:decimal', stdlib.UInt_max, '1'));
          const v5467 = stdlib.safeSub(v2079, v5129);
          const v5468 = stdlib.safeAdd(v2076, stdlib.checkedBigNumberify('./token.rsh:299:52:decimal', stdlib.UInt_max, '1'));
          const v5469 = stdlib.safeAdd(v2077, v5129);
          const v5470 = {
            bal: v5467,
            keepGoing: v5458,
            percent: v5459,
            total_amount_claimed: v5469,
            total_rewards_allcoated: v2080,
            total_users_claim: v5468,
            usersNo: v5466
            };
          const cv2027 = v5470;
          const cv2028 = v2358;
          const cv2030 = v5456;
          const cv2031 = v2031;
          
          v2027 = cv2027;
          v2028 = cv2028;
          v2030 = cv2030;
          v2031 = cv2031;
          
          txn2 = txn3;
          continue;}
        else {
          await stdlib.mapSet(map3, ctc8, v2356, ctc0, null);
          const v5429 = stdlib.sub(v2082, v5129);
          const v5431 = stdlib.Array_set(v2081, '0', v5429);
          const v5432 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5431);
          ;
          await stdlib.mapSet(map0, ctc8, v2356, ctc1, undefined /* Nothing */);
          const v5434 = v2027.keepGoing;
          const v5435 = v2027.percent;
          const v5443 = stdlib.safeSub(v2079, v5129);
          const v5444 = stdlib.safeAdd(v2076, stdlib.checkedBigNumberify('./token.rsh:299:52:decimal', stdlib.UInt_max, '1'));
          const v5445 = stdlib.safeAdd(v2077, v5129);
          const v5446 = {
            bal: v5443,
            keepGoing: v5434,
            percent: v5435,
            total_amount_claimed: v5445,
            total_rewards_allcoated: v2080,
            total_users_claim: v5444,
            usersNo: v2078
            };
          const cv2027 = v5446;
          const cv2028 = v2358;
          const cv2030 = v5432;
          const cv2031 = v2031;
          
          v2027 = cv2027;
          v2028 = cv2028;
          v2030 = cv2030;
          v2031 = cv2031;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'User_optin0_177': {
        const v5489 = v2357[1];
        undefined /* setApiDetails */;
        ;
        ;
        await stdlib.mapSet(map4, ctc8, v2356, ctc0, null);
        const v5921 = null;
        await txn3.getOutput('User_optin', 'v5921', ctc0, v5921);
        const v5928 = v2027.keepGoing;
        const v5929 = v2027.percent;
        const v5934 = {
          bal: v2079,
          keepGoing: v5928,
          percent: v5929,
          total_amount_claimed: v2077,
          total_rewards_allcoated: v2080,
          total_users_claim: v2076,
          usersNo: v2078
          };
        const cv2027 = v5934;
        const cv2028 = v2358;
        const cv2030 = v2030;
        const cv2031 = v2031;
        
        v2027 = cv2027;
        v2028 = cv2028;
        v2030 = cv2030;
        v2031 = cv2031;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v5966 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
  const v5967 = v5966[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
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
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc19,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc20,
    User_claim0_177: ctc15,
    User_optin0_177: ctc19
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2184 = ctc.selfAddress();
  const v2186 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to "runUser_claim0_177" (defined at: ./token.rsh:266:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2187 = v2186[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2191 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2184, ctc1), null);
  const v2192 = stdlib.fromSome(v2191, stdlib.checkedBigNumberify('./token.rsh:267:56:decimal', stdlib.UInt_max, '0'));
  const v2195 = stdlib.le(v2187, v2082);
  stdlib.assert(v2195, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to "runUser_claim0_177" (defined at: ./token.rsh:266:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v2197 = stdlib.ge(v2192, v2187);
  stdlib.assert(v2197, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to "runUser_claim0_177" (defined at: ./token.rsh:266:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v2206 = ['User_claim0_177', v2186];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2206],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:271:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:271:14:decimal', stdlib.UInt_max, '0'), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5129 = v5042[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2356, ctc1), null);
          ;
          ;
          const v5383 = v5042[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '1')];
          const v5398 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v2356, ctc0), null);
          const v5399 = {
            None: 0,
            Some: 1
            }[v5398[0]];
          const v5400 = stdlib.eq(v5399, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v5401 = [v2356, v5383];
          const v5402 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v5401, ctc3), null);
          const v5403 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5404 = stdlib.fromSome(v5402, v5403);
          const v5406 = v5404.claimed;
          const v5407 = v5404.rewards;
          const v5409 = stdlib.safeAdd(v5406, v5129);
          const v5411 = stdlib.safeSub(v5407, v5129);
          const v5412 = {
            claimed: v5409,
            rewards: v5411
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v5401, ctc3, v5412);
          const v5413 = true;
          const v5414 = await txn1.getOutput('User_claim', 'v5413', ctc9, v5413);
          
          const v5421 = {
            addr: v2356,
            amount: v5129,
            projectName: v2014
            };
          null;
          if (v5400) {
            const v5453 = stdlib.sub(v2082, v5129);
            const v5455 = stdlib.Array_set(v2081, '0', v5453);
            const v5456 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5455);
            sim_r.txns.push({
              kind: 'from',
              to: v2356,
              tok: v2015
              });
            await stdlib.simMapSet(sim_r, 0, ctc6, v2356, ctc1, undefined /* Nothing */);
            const v5458 = v2027.keepGoing;
            const v5459 = v2027.percent;
            const v5466 = stdlib.safeAdd(v2078, stdlib.checkedBigNumberify('./token.rsh:297:56:decimal', stdlib.UInt_max, '1'));
            const v5467 = stdlib.safeSub(v2079, v5129);
            const v5468 = stdlib.safeAdd(v2076, stdlib.checkedBigNumberify('./token.rsh:299:52:decimal', stdlib.UInt_max, '1'));
            const v5469 = stdlib.safeAdd(v2077, v5129);
            const v5470 = {
              bal: v5467,
              keepGoing: v5458,
              percent: v5459,
              total_amount_claimed: v5469,
              total_rewards_allcoated: v2080,
              total_users_claim: v5468,
              usersNo: v5466
              };
            const v9144 = v5470;
            const v9146 = v5456;
            const v9147 = v2031;
            const v9148 = v5470.keepGoing;
            if (v9148) {
              const v9149 = v5470.total_users_claim;
              const v9150 = v5470.total_amount_claimed;
              const v9151 = v5470.usersNo;
              const v9152 = v5470.bal;
              const v9153 = v5470.total_rewards_allcoated;
              const v9154 = v5456[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              const v9155 = v9154[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v9160 = v5456[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              const v9161 = v9160[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2013,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v2013,
                tok: v2015
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2015
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v2356, ctc0, null);
            const v5429 = stdlib.sub(v2082, v5129);
            const v5431 = stdlib.Array_set(v2081, '0', v5429);
            const v5432 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5431);
            sim_r.txns.push({
              kind: 'from',
              to: v2356,
              tok: v2015
              });
            await stdlib.simMapSet(sim_r, 0, ctc6, v2356, ctc1, undefined /* Nothing */);
            const v5434 = v2027.keepGoing;
            const v5435 = v2027.percent;
            const v5443 = stdlib.safeSub(v2079, v5129);
            const v5444 = stdlib.safeAdd(v2076, stdlib.checkedBigNumberify('./token.rsh:299:52:decimal', stdlib.UInt_max, '1'));
            const v5445 = stdlib.safeAdd(v2077, v5129);
            const v5446 = {
              bal: v5443,
              keepGoing: v5434,
              percent: v5435,
              total_amount_claimed: v5445,
              total_rewards_allcoated: v2080,
              total_users_claim: v5444,
              usersNo: v2078
              };
            const v9162 = v5446;
            const v9164 = v5432;
            const v9165 = v2031;
            const v9166 = v5446.keepGoing;
            if (v9166) {
              const v9167 = v5446.total_users_claim;
              const v9168 = v5446.total_amount_claimed;
              const v9169 = v5446.usersNo;
              const v9170 = v5446.bal;
              const v9171 = v5446.total_rewards_allcoated;
              const v9172 = v5432[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              const v9173 = v9172[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v9178 = v5432[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              const v9179 = v9178[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2013,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v2013,
                tok: v2015
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2015
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      undefined /* setApiDetails */;
      const v5129 = v5042[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '0')];
      const v5131 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2356, ctc1), null);
      const v5132 = stdlib.fromSome(v5131, stdlib.checkedBigNumberify('./token.rsh:267:56:decimal', stdlib.UInt_max, '0'));
      const v5135 = stdlib.le(v5129, v2082);
      stdlib.assert(v5135, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5137 = stdlib.ge(v5132, v5129);
      stdlib.assert(v5137, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      ;
      const v5383 = v5042[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '1')];
      const v5398 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v2356, ctc0), null);
      const v5399 = {
        None: 0,
        Some: 1
        }[v5398[0]];
      const v5400 = stdlib.eq(v5399, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5401 = [v2356, v5383];
      const v5402 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v5401, ctc3), null);
      const v5403 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5404 = stdlib.fromSome(v5402, v5403);
      const v5406 = v5404.claimed;
      const v5407 = v5404.rewards;
      const v5409 = stdlib.safeAdd(v5406, v5129);
      const v5411 = stdlib.safeSub(v5407, v5129);
      const v5412 = {
        claimed: v5409,
        rewards: v5411
        };
      await stdlib.mapSet(map1, ctc22, v5401, ctc3, v5412);
      const v5413 = true;
      const v5414 = await txn1.getOutput('User_claim', 'v5413', ctc9, v5413);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v5042, v5414), {
          at: './token.rsh:266:11:application',
          fs: ['at ./token.rsh:266:11:application call to [unknown function] (defined at: ./token.rsh:266:11:function exp)', 'at ./token.rsh:285:14:application call to "ret" (defined at: ./token.rsh:272:15:function exp)', 'at ./token.rsh:272:15:application call to [unknown function] (defined at: ./token.rsh:272:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v5421 = {
        addr: v2356,
        amount: v5129,
        projectName: v2014
        };
      null;
      if (v5400) {
        const v5453 = stdlib.sub(v2082, v5129);
        const v5455 = stdlib.Array_set(v2081, '0', v5453);
        const v5456 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5455);
        ;
        await stdlib.mapSet(map0, ctc6, v2356, ctc1, undefined /* Nothing */);
        const v5458 = v2027.keepGoing;
        const v5459 = v2027.percent;
        const v5466 = stdlib.safeAdd(v2078, stdlib.checkedBigNumberify('./token.rsh:297:56:decimal', stdlib.UInt_max, '1'));
        const v5467 = stdlib.safeSub(v2079, v5129);
        const v5468 = stdlib.safeAdd(v2076, stdlib.checkedBigNumberify('./token.rsh:299:52:decimal', stdlib.UInt_max, '1'));
        const v5469 = stdlib.safeAdd(v2077, v5129);
        const v5470 = {
          bal: v5467,
          keepGoing: v5458,
          percent: v5459,
          total_amount_claimed: v5469,
          total_rewards_allcoated: v2080,
          total_users_claim: v5468,
          usersNo: v5466
          };
        const v9144 = v5470;
        const v9146 = v5456;
        const v9147 = v2031;
        const v9148 = v5470.keepGoing;
        if (v9148) {
          const v9149 = v5470.total_users_claim;
          const v9150 = v5470.total_amount_claimed;
          const v9151 = v5470.usersNo;
          const v9152 = v5470.bal;
          const v9153 = v5470.total_rewards_allcoated;
          const v9154 = v5456[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          const v9155 = v9154[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v9160 = v5456[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          const v9161 = v9160[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map3, ctc6, v2356, ctc0, null);
        const v5429 = stdlib.sub(v2082, v5129);
        const v5431 = stdlib.Array_set(v2081, '0', v5429);
        const v5432 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5431);
        ;
        await stdlib.mapSet(map0, ctc6, v2356, ctc1, undefined /* Nothing */);
        const v5434 = v2027.keepGoing;
        const v5435 = v2027.percent;
        const v5443 = stdlib.safeSub(v2079, v5129);
        const v5444 = stdlib.safeAdd(v2076, stdlib.checkedBigNumberify('./token.rsh:299:52:decimal', stdlib.UInt_max, '1'));
        const v5445 = stdlib.safeAdd(v2077, v5129);
        const v5446 = {
          bal: v5443,
          keepGoing: v5434,
          percent: v5435,
          total_amount_claimed: v5445,
          total_rewards_allcoated: v2080,
          total_users_claim: v5444,
          usersNo: v2078
          };
        const v9162 = v5446;
        const v9164 = v5432;
        const v9165 = v2031;
        const v9166 = v5446.keepGoing;
        if (v9166) {
          const v9167 = v5446.total_users_claim;
          const v9168 = v5446.total_amount_claimed;
          const v9169 = v5446.usersNo;
          const v9170 = v5446.bal;
          const v9171 = v5446.total_rewards_allcoated;
          const v9172 = v5432[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          const v9173 = v9172[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v9178 = v5432[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          const v9179 = v9178[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
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
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc15,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc15
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
  
  
  const [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2210 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:308:26:application call to [unknown function] (defined at: ./token.rsh:308:26:function exp)', 'at ./token.rsh:81:37:application call to "runUser_optin0_177" (defined at: ./token.rsh:308:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2214 = ['User_optin0_177', v2210];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014, v2015, v2027, v2030, v2031, v2076, v2077, v2078, v2079, v2080, v2081, v2082, v2214],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:310:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:310:14:decimal', stdlib.UInt_max, '0'), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
      
      switch (v2357[0]) {
        case 'Admin_addAdmin0_177': {
          const v2360 = v2357[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2807 = v2357[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3254 = v2357[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3701 = v2357[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4148 = v2357[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4595 = v2357[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5042 = v2357[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5489 = v2357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v2356, ctc0, null);
          const v5921 = null;
          const v5922 = await txn1.getOutput('User_optin', 'v5921', ctc0, v5921);
          
          const v5928 = v2027.keepGoing;
          const v5929 = v2027.percent;
          const v5934 = {
            bal: v2079,
            keepGoing: v5928,
            percent: v5929,
            total_amount_claimed: v2077,
            total_rewards_allcoated: v2080,
            total_users_claim: v2076,
            usersNo: v2078
            };
          const v9342 = v5934;
          const v9344 = v2030;
          const v9345 = v2031;
          const v9346 = v5934.keepGoing;
          if (v9346) {
            const v9347 = v5934.total_users_claim;
            const v9348 = v5934.total_amount_claimed;
            const v9349 = v5934.usersNo;
            const v9350 = v5934.bal;
            const v9351 = v5934.total_rewards_allcoated;
            const v9352 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9353 = v9352[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v9358 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9359 = v9358[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2013,
              tok: v2015
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2015
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
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2357], secs: v2359, time: v2358, didSend: v1310, from: v2356 } = txn1;
  switch (v2357[0]) {
    case 'Admin_addAdmin0_177': {
      const v2360 = v2357[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2807 = v2357[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3254 = v2357[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3701 = v2357[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4148 = v2357[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4595 = v2357[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5042 = v2357[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5489 = v2357[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map4, ctc6, v2356, ctc0, null);
      const v5921 = null;
      const v5922 = await txn1.getOutput('User_optin', 'v5921', ctc0, v5921);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v5489, v5922), {
          at: './token.rsh:308:11:application',
          fs: ['at ./token.rsh:308:11:application call to [unknown function] (defined at: ./token.rsh:308:11:function exp)', 'at ./token.rsh:313:14:application call to "ret" (defined at: ./token.rsh:311:15:function exp)', 'at ./token.rsh:311:15:application call to [unknown function] (defined at: ./token.rsh:311:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v5928 = v2027.keepGoing;
      const v5929 = v2027.percent;
      const v5934 = {
        bal: v2079,
        keepGoing: v5928,
        percent: v5929,
        total_amount_claimed: v2077,
        total_rewards_allcoated: v2080,
        total_users_claim: v2076,
        usersNo: v2078
        };
      const v9342 = v5934;
      const v9344 = v2030;
      const v9345 = v2031;
      const v9346 = v5934.keepGoing;
      if (v9346) {
        const v9347 = v5934.total_users_claim;
        const v9348 = v5934.total_amount_claimed;
        const v9349 = v5934.usersNo;
        const v9350 = v5934.bal;
        const v9351 = v5934.total_rewards_allcoated;
        const v9352 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9353 = v9352[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v9358 = v2030[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9359 = v9358[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
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
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64))void`, `_reachp_2((uint64,(byte,byte[48])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAEIAxDUetSTASjUxQGgjQYEJgYAAQABAQECAQQBAzEYQQhUKGRJIls1ASRbNQIpZCpkUIIUBAJfdMcEDbOGvAQTblc7BBp3QuUEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEgk+QIEbuR2FAR4Stk3BHr+yG0Ex8Kc1QTeVwRkBO1G26YE8yd4BAT5b2zgBPlzDgsE+q7IsDYaAI4UAFQCLAF3B5YBBgJOAZsB/AE3AasAiQHLAbsBRwemAN8AyQHbAGsAAQA2GgE1CySvKTQLUCEEr1BQNQslNAESRIgI3TQLIls1DDQLVwgxNQ2ABFULZYM0DBZQNA1QsDQMiAlGNA0iVY0ICFsIXghhB4AHgweGB5AHmkL/rDYaARc1CySvKjQLFlAhB69QUDULQv+oNhoBNhoCFzULNQwkrys0DDQLFlBQJK9QUDULQv+KgDkAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/SjYaATULJK8nBDQLUCEEr1BQNQtC/zQ2GgE2GgIXNhoDFzULNQw1DSSvgAEFNA00DBZQNAsWUFBQNQtC/w02GgE1CzQBJRJEiAflKCgrNAtQiAfRIlUjEhZRBwg1BDEZIhJEgAQVH3x1NARQsCNDNAElEkSIB7k0DhY1BEL/3zYaATYaAhc1CzUMNAElEkSIB54hBK8oIQSvKjQMNAsWUFCIB4GIB95XAAg1BEL/rzYaATULNAElEkSIB3QoKCcENAtQiAdfIlUjEhZRBwg1BEL/izQBJRJEiAdVNBAWNQRC/3s0ASUSRIgHRTQTFjUEQv9rNAElEkSIBzU0FBY1BEL/WzQBJRJEiAclNBIWNQRC/0s2GgE1CzQBJRJEiAcQJK8oJK8pNAtQiAb5iAdWNQRC/yo2GgE2GgIXNQs1DDQBJRJEiAbpIQSvKCEEryo0DDQLFlBQiAbMiAcpVwgINQRC/vo2GgEXNhoCFzULNQwkr4ABBjQMFjQLFlBQMgNQUDULQv3FgDkAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L9hTEANBsSKCgrMQBQiAZRIlUjEhFEIQUrNA1XASBQKIgGpyg1C4AIAAAAAAAACb80C1CwNAs1BDQRFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjUXNRg0GFcIARdBBWA0GIEqWzUUNBiBGls1EzQYgTJbNRI0GCJbNRE0GIEiWzUQNBZXABFJNQ8iWzUONBs0GlA0GRZQNBhQNBZQNBUWUDQUFlA0ExZQNBIWUDQRFlA0EBZQNA9QNA4WUCUyBjUCNQEpSwFXAH9nKkxXf1tnKDQBFjQCFlBnMRkiEkSIBhg0A0D9vUL9sDQNI1s1CzEANBsSKCgrMQBQiAVeIlUjEhFENAs0GYgF+yg1DIAIAAAAAAAAC5c0DFCwNAw1BDQRNAsIFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjQWNA80DjQLCBZcAFwANRY1FzUYQv79NAuBIFs1DDEANBsSKCgrMQBQiATsIlUjEhFENAw0Dg5EIQYpNAtXACBQNAwWiAU6KDULgAgAAAAAAAANdjQLULA0CzUENBEWNBhXCAFQNBhXCRFQNBMWUDQQFlA0FBZQNBIWUDIGNRc1GEL+kDQbMQASRCg1C4AIAAAAAAAAD0k0C1CwNAs1BDQRFilQNBhXCRFQNBMWUDQQFlA0FBZQNBIWUDIGNRc1GEL+UTEANBsSRCEFKzQNVwEgUIgEyCg1C4AIAAAAAAAAER00C1CwNAs1BDQRFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjUXNRhC/gI0C1cAIDUeNAshB1tJNR00EQ01HCgoJwQ0HlCIA+giVSMSRCI0HTQcTUk1DTQZiAR/NB40C1cgCFA1DCEEryghBK8qNAxQiAO9iAQaNQshCCo0DFA0C1cACDQLJFs0HQgWUIgECiEGKTQeUCSvKCSvKTQeUIgDj4gD7Bc0HQgWiAPtIzULgAgAAAAAAAATCDQLFlEHCFCwNAsWUQcINQQ0HEECYzQRNB0INQs0CxY0GFcIAVA0GFcJEVA0ExZQNBAWUDQUFlA0EhZQMgY0FjQPNA40DQgWXABcADUWNRc1GEL9HzQLIltJNQ00Dg5EJK8oJK8pMQBQiAMMiANpFzQND0QxADQLVwgIUDUMIQSvKCEEryo0DFCIAuyIA0k1CyEIKjQMUDQLIls0DQgWNAskWzQNCRZQiAM2IzULgAgAAAAAAAAVJTQLFlEHCFCwNAsWUQcINQQxADQNFlA0GlA1C4AEm8hUUDQLULAoKCcFMQBQiAKRIlUjEkEBkjQNNBkxAIgC+CEGKTEAUIgC/TQRNA0JFjQYVwgBUDQYVwkRUDQTNA0IFlA0EBZQNBQjCBZQNBIjCBZQMgY0FjQPNA40DQkWXABcADUWNRc1GEL8MiEFJwQxAFAoiAKUKDULgAgAAAAAAAAXITQLULA0CzUENBEWNBhXCAFQNBhXCRFQNBMWUDQQFlA0FBZQNBIWUDIGNRc1GEL76jEANRs0CyJbNQw0C1cIHjUaNAuBJls1GYAEKEvH8DQMFlA0GlA0GRZQsDQMiAJTgRGvNQshCYgCNCI0GTIKiAIkgDoAAAAAAAAAAAEAAAAAAAAABQAAAAAAAABkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgY0C0lXABEkr1wAXAAiNRU1FjUXNRhC+1OIAeQhCYgBzjYaATULQv9ZiAHUNhoBNQtC+GIiMTQSRCUxNRJEIjE2EkQiMTcSRIgBtYHaAa8iIkL7gEL8hUL8wTQNVwEwNQtC/QY0DVcBEDULQv3fQv7JNBE1C0L9nSEFJwUxAFAoiAFWNA00GTEAiAFbIQYpMQBQiAFgNBE0DQkWNBhXCAFQNBhXCRFQNBM0DQgWUDQQFlA0FCMIFlA0EhZQMgY0FjQPNA40DQkWXABcADUWNRc1GEL6lzQVNBuIAQ80FlcAESJbNBk0G4gA/SI0GTIKMgmIAUkxGYEFEkSIAREyCmAyCngJSTUGMgqIAN9C+udITL9IiSKyASOyELIHsgiziSKyASEKshCyFLIRshKziUL530L6yTQNVwEoNQtC+zBIiUwJSTUGMgmIAKCJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJvkkWUQcIRQRNUIlJVwAgNRtJVyAeNRpJgT5bNRlJV0Y6NRhJV4ARNRZJgZEBWzUVSYGZAVs1FEmBoQFbNRNJgakBWzUSSYGxAVs1EUmBuQFbNRBJV8ERNQ+B0gFbNQ6JSVcBAEwiVU2JTEm9QP8wSwOIAAtC/yixQv81sUL/JTQGCDUGibwiTgJNNAcINQeJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/ypC/zIxFjQAIwhJNQAJRwM4FDIKEkQ4ECEKEkQ4EU8CEkQ4EhJEibGyFUL+3Q==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `487`,
    1001: `487`,
    1002: `489`,
    1003: `489`,
    1004: `490`,
    1005: `490`,
    1006: `491`,
    1007: `492`,
    1008: `492`,
    1009: `493`,
    101: `21`,
    1010: `494`,
    1011: `495`,
    1012: `495`,
    1013: `496`,
    1014: `497`,
    1015: `497`,
    1016: `498`,
    1017: `499`,
    1018: `499`,
    1019: `500`,
    102: `21`,
    1020: `501`,
    1021: `502`,
    1022: `502`,
    1023: `503`,
    1024: `504`,
    1025: `505`,
    1026: `505`,
    1027: `506`,
    1028: `507`,
    1029: `508`,
    103: `21`,
    1030: `508`,
    1031: `509`,
    1032: `510`,
    1033: `511`,
    1034: `511`,
    1035: `512`,
    1036: `513`,
    1037: `514`,
    1038: `514`,
    1039: `515`,
    104: `21`,
    1040: `516`,
    1041: `517`,
    1042: `517`,
    1043: `518`,
    1044: `519`,
    1045: `519`,
    1046: `520`,
    1047: `521`,
    1048: `522`,
    1049: `523`,
    105: `21`,
    1050: `523`,
    1051: `525`,
    1052: `525`,
    1053: `526`,
    1054: `526`,
    1055: `527`,
    1056: `528`,
    1057: `528`,
    1058: `529`,
    1059: `529`,
    106: `21`,
    1060: `529`,
    1061: `530`,
    1062: `531`,
    1063: `532`,
    1064: `533`,
    1065: `533`,
    1066: `533`,
    1067: `534`,
    1068: `535`,
    1069: `536`,
    107: `21`,
    1070: `536`,
    1071: `537`,
    1072: `538`,
    1073: `538`,
    1074: `539`,
    1075: `540`,
    1076: `541`,
    1077: `542`,
    1078: `542`,
    1079: `543`,
    108: `21`,
    1080: `544`,
    1081: `545`,
    1082: `547`,
    1083: `547`,
    1084: `547`,
    1085: `549`,
    1086: `549`,
    1087: `550`,
    1088: `550`,
    1089: `550`,
    109: `21`,
    1090: `551`,
    1091: `551`,
    1092: `551`,
    1093: `553`,
    1094: `553`,
    1095: `554`,
    1096: `555`,
    1097: `556`,
    1098: `556`,
    1099: `557`,
    11: `2`,
    110: `21`,
    1100: `557`,
    1101: `558`,
    1102: `558`,
    1103: `559`,
    1104: `561`,
    1105: `562`,
    1106: `563`,
    1107: `564`,
    1108: `564`,
    1109: `565`,
    111: `21`,
    1110: `566`,
    1111: `566`,
    1112: `566`,
    1113: `567`,
    1114: `568`,
    1115: `569`,
    1116: `570`,
    1117: `571`,
    1118: `572`,
    1119: `580`,
    112: `21`,
    1120: `580`,
    1121: `581`,
    1122: `581`,
    1123: `582`,
    1124: `582`,
    1125: `582`,
    1126: `585`,
    1127: `586`,
    1128: `586`,
    1129: `587`,
    113: `21`,
    1130: `587`,
    1131: `587`,
    1132: `587`,
    1133: `587`,
    1134: `587`,
    1135: `587`,
    1136: `587`,
    1137: `587`,
    1138: `587`,
    1139: `588`,
    114: `21`,
    1140: `588`,
    1141: `589`,
    1142: `590`,
    1143: `591`,
    1144: `591`,
    1145: `592`,
    1146: `592`,
    1147: `593`,
    1148: `593`,
    1149: `594`,
    115: `21`,
    1150: `594`,
    1151: `595`,
    1152: `596`,
    1153: `597`,
    1154: `597`,
    1155: `598`,
    1156: `598`,
    1157: `598`,
    1158: `599`,
    1159: `600`,
    116: `21`,
    1160: `600`,
    1161: `601`,
    1162: `601`,
    1163: `601`,
    1164: `602`,
    1165: `603`,
    1166: `603`,
    1167: `604`,
    1168: `605`,
    1169: `606`,
    117: `21`,
    1170: `606`,
    1171: `607`,
    1172: `608`,
    1173: `609`,
    1174: `609`,
    1175: `610`,
    1176: `611`,
    1177: `612`,
    1178: `612`,
    1179: `613`,
    118: `21`,
    1180: `614`,
    1181: `615`,
    1182: `615`,
    1183: `616`,
    1184: `616`,
    1185: `617`,
    1186: `617`,
    1187: `618`,
    1188: `618`,
    1189: `619`,
    119: `21`,
    1190: `619`,
    1191: `620`,
    1192: `621`,
    1193: `622`,
    1194: `622`,
    1195: `623`,
    1196: `623`,
    1197: `624`,
    1198: `624`,
    1199: `625`,
    12: `2`,
    120: `21`,
    1200: `625`,
    1201: `626`,
    1202: `626`,
    1203: `627`,
    1204: `627`,
    1205: `627`,
    1206: `629`,
    1207: `629`,
    1208: `630`,
    1209: `630`,
    121: `21`,
    1210: `631`,
    1211: `632`,
    1212: `632`,
    1213: `633`,
    1214: `633`,
    1215: `634`,
    1216: `634`,
    1217: `635`,
    1218: `637`,
    1219: `638`,
    122: `21`,
    1220: `639`,
    1221: `640`,
    1222: `640`,
    1223: `641`,
    1224: `642`,
    1225: `642`,
    1226: `642`,
    1227: `643`,
    1228: `644`,
    1229: `645`,
    123: `21`,
    1230: `646`,
    1231: `647`,
    1232: `648`,
    1233: `656`,
    1234: `656`,
    1235: `657`,
    1236: `657`,
    1237: `658`,
    1238: `659`,
    1239: `668`,
    124: `21`,
    1240: `668`,
    1241: `669`,
    1242: `670`,
    1243: `670`,
    1244: `671`,
    1245: `671`,
    1246: `671`,
    1247: `672`,
    1248: `673`,
    1249: `673`,
    125: `21`,
    1250: `674`,
    1251: `675`,
    1252: `675`,
    1253: `675`,
    1254: `676`,
    1255: `677`,
    1256: `677`,
    1257: `678`,
    1258: `678`,
    1259: `678`,
    126: `21`,
    1260: `678`,
    1261: `678`,
    1262: `678`,
    1263: `678`,
    1264: `678`,
    1265: `678`,
    1266: `678`,
    1267: `679`,
    1268: `679`,
    1269: `680`,
    127: `21`,
    1270: `681`,
    1271: `682`,
    1272: `682`,
    1273: `683`,
    1274: `683`,
    1275: `684`,
    1276: `684`,
    1277: `685`,
    1278: `686`,
    1279: `686`,
    128: `21`,
    1280: `687`,
    1281: `687`,
    1282: `687`,
    1283: `688`,
    1284: `689`,
    1285: `689`,
    1286: `690`,
    1287: `690`,
    1288: `690`,
    1289: `691`,
    129: `21`,
    1290: `692`,
    1291: `692`,
    1292: `693`,
    1293: `694`,
    1294: `695`,
    1295: `695`,
    1296: `696`,
    1297: `697`,
    1298: `698`,
    1299: `698`,
    13: `2`,
    130: `21`,
    1300: `699`,
    1301: `700`,
    1302: `701`,
    1303: `701`,
    1304: `702`,
    1305: `703`,
    1306: `704`,
    1307: `704`,
    1308: `705`,
    1309: `705`,
    131: `21`,
    1310: `706`,
    1311: `706`,
    1312: `707`,
    1313: `707`,
    1314: `707`,
    1315: `709`,
    1316: `709`,
    1317: `710`,
    1318: `710`,
    1319: `711`,
    132: `21`,
    1320: `712`,
    1321: `720`,
    1322: `721`,
    1323: `721`,
    1324: `722`,
    1325: `722`,
    1326: `722`,
    1327: `722`,
    1328: `722`,
    1329: `722`,
    133: `21`,
    1330: `722`,
    1331: `722`,
    1332: `722`,
    1333: `722`,
    1334: `723`,
    1335: `723`,
    1336: `724`,
    1337: `725`,
    1338: `726`,
    1339: `726`,
    134: `21`,
    1340: `727`,
    1341: `727`,
    1342: `728`,
    1343: `728`,
    1344: `729`,
    1345: `730`,
    1346: `731`,
    1347: `732`,
    1348: `732`,
    1349: `733`,
    135: `21`,
    1350: `733`,
    1351: `733`,
    1352: `734`,
    1353: `735`,
    1354: `735`,
    1355: `736`,
    1356: `737`,
    1357: `738`,
    1358: `738`,
    1359: `739`,
    136: `21`,
    1360: `740`,
    1361: `741`,
    1362: `741`,
    1363: `742`,
    1364: `743`,
    1365: `744`,
    1366: `744`,
    1367: `745`,
    1368: `746`,
    1369: `747`,
    137: `21`,
    1370: `747`,
    1371: `748`,
    1372: `748`,
    1373: `749`,
    1374: `749`,
    1375: `750`,
    1376: `750`,
    1377: `750`,
    1378: `752`,
    1379: `752`,
    138: `21`,
    1380: `753`,
    1381: `753`,
    1382: `754`,
    1383: `755`,
    1384: `764`,
    1385: `764`,
    1386: `765`,
    1387: `766`,
    1388: `766`,
    1389: `767`,
    139: `21`,
    1390: `767`,
    1391: `767`,
    1392: `768`,
    1393: `769`,
    1394: `769`,
    1395: `769`,
    1396: `770`,
    1397: `771`,
    1398: `771`,
    1399: `772`,
    14: `2`,
    140: `21`,
    1400: `772`,
    1401: `772`,
    1402: `772`,
    1403: `772`,
    1404: `772`,
    1405: `772`,
    1406: `772`,
    1407: `772`,
    1408: `772`,
    1409: `773`,
    141: `21`,
    1410: `773`,
    1411: `774`,
    1412: `775`,
    1413: `776`,
    1414: `776`,
    1415: `777`,
    1416: `777`,
    1417: `778`,
    1418: `778`,
    1419: `779`,
    142: `21`,
    1420: `780`,
    1421: `780`,
    1422: `781`,
    1423: `781`,
    1424: `781`,
    1425: `782`,
    1426: `783`,
    1427: `783`,
    1428: `784`,
    1429: `784`,
    143: `21`,
    1430: `784`,
    1431: `785`,
    1432: `786`,
    1433: `786`,
    1434: `787`,
    1435: `788`,
    1436: `789`,
    1437: `789`,
    1438: `790`,
    1439: `791`,
    144: `21`,
    1440: `792`,
    1441: `792`,
    1442: `793`,
    1443: `794`,
    1444: `795`,
    1445: `795`,
    1446: `796`,
    1447: `797`,
    1448: `798`,
    1449: `798`,
    145: `21`,
    1450: `799`,
    1451: `799`,
    1452: `800`,
    1453: `800`,
    1454: `801`,
    1455: `801`,
    1456: `801`,
    1457: `803`,
    1458: `803`,
    1459: `804`,
    146: `21`,
    1460: `804`,
    1461: `804`,
    1462: `805`,
    1463: `805`,
    1464: `806`,
    1465: `806`,
    1466: `807`,
    1467: `807`,
    1468: `808`,
    1469: `809`,
    147: `21`,
    1470: `810`,
    1471: `810`,
    1472: `811`,
    1473: `811`,
    1474: `812`,
    1475: `813`,
    1476: `813`,
    1477: `815`,
    1478: `816`,
    1479: `817`,
    148: `21`,
    1480: `817`,
    1481: `818`,
    1482: `818`,
    1483: `819`,
    1484: `820`,
    1485: `820`,
    1486: `820`,
    1487: `821`,
    1488: `822`,
    1489: `823`,
    149: `21`,
    1490: `824`,
    1491: `825`,
    1492: `833`,
    1493: `834`,
    1494: `834`,
    1495: `835`,
    1496: `835`,
    1497: `836`,
    1498: `837`,
    1499: `838`,
    15: `2`,
    150: `21`,
    1500: `838`,
    1501: `839`,
    1502: `839`,
    1503: `840`,
    1504: `840`,
    1505: `840`,
    1506: `843`,
    1507: `843`,
    1508: `844`,
    1509: `844`,
    151: `21`,
    1510: `845`,
    1511: `845`,
    1512: `845`,
    1513: `846`,
    1514: `847`,
    1515: `847`,
    1516: `848`,
    1517: `848`,
    1518: `849`,
    1519: `851`,
    152: `21`,
    1520: `852`,
    1521: `852`,
    1522: `853`,
    1523: `854`,
    1524: `855`,
    1525: `855`,
    1526: `856`,
    1527: `857`,
    1528: `857`,
    1529: `857`,
    153: `21`,
    1530: `858`,
    1531: `858`,
    1532: `858`,
    1533: `859`,
    1534: `859`,
    1535: `860`,
    1536: `860`,
    1537: `861`,
    1538: `862`,
    1539: `862`,
    154: `21`,
    1540: `863`,
    1541: `864`,
    1542: `864`,
    1543: `865`,
    1544: `865`,
    1545: `865`,
    1546: `866`,
    1547: `866`,
    1548: `867`,
    1549: `868`,
    155: `21`,
    1550: `869`,
    1551: `869`,
    1552: `870`,
    1553: `871`,
    1554: `872`,
    1555: `873`,
    1556: `873`,
    1557: `873`,
    1558: `875`,
    1559: `875`,
    156: `21`,
    1560: `876`,
    1561: `877`,
    1562: `877`,
    1563: `878`,
    1564: `879`,
    1565: `880`,
    1566: `881`,
    1567: `882`,
    1568: `883`,
    1569: `884`,
    157: `22`,
    1570: `885`,
    1571: `885`,
    1572: `886`,
    1573: `887`,
    1574: `887`,
    1575: `887`,
    1576: `888`,
    1577: `888`,
    1578: `888`,
    1579: `889`,
    158: `22`,
    1580: `890`,
    1581: `890`,
    1582: `891`,
    1583: `892`,
    1584: `893`,
    1585: `893`,
    1586: `893`,
    1587: `894`,
    1588: `895`,
    1589: `895`,
    159: `22`,
    1590: `896`,
    1591: `896`,
    1592: `896`,
    1593: `896`,
    1594: `896`,
    1595: `896`,
    1596: `896`,
    1597: `896`,
    1598: `896`,
    1599: `896`,
    16: `2`,
    160: `23`,
    1600: `897`,
    1601: `897`,
    1602: `898`,
    1603: `899`,
    1604: `899`,
    1605: `899`,
    1606: `900`,
    1607: `901`,
    1608: `902`,
    1609: `902`,
    161: `23`,
    1610: `903`,
    1611: `904`,
    1612: `904`,
    1613: `904`,
    1614: `905`,
    1615: `905`,
    1616: `906`,
    1617: `906`,
    1618: `907`,
    1619: `907`,
    162: `23`,
    1620: `907`,
    1621: `908`,
    1622: `908`,
    1623: `909`,
    1624: `909`,
    1625: `910`,
    1626: `911`,
    1627: `911`,
    1628: `913`,
    1629: `913`,
    163: `23`,
    1630: `914`,
    1631: `915`,
    1632: `915`,
    1633: `916`,
    1634: `916`,
    1635: `916`,
    1636: `917`,
    1637: `918`,
    1638: `918`,
    1639: `919`,
    164: `23`,
    1640: `919`,
    1641: `919`,
    1642: `920`,
    1643: `921`,
    1644: `921`,
    1645: `922`,
    1646: `923`,
    1647: `924`,
    1648: `924`,
    1649: `925`,
    165: `23`,
    1650: `926`,
    1651: `927`,
    1652: `927`,
    1653: `928`,
    1654: `929`,
    1655: `930`,
    1656: `930`,
    1657: `931`,
    1658: `932`,
    1659: `933`,
    166: `23`,
    1660: `933`,
    1661: `934`,
    1662: `934`,
    1663: `935`,
    1664: `935`,
    1665: `936`,
    1666: `936`,
    1667: `937`,
    1668: `937`,
    1669: `938`,
    167: `23`,
    1670: `939`,
    1671: `940`,
    1672: `940`,
    1673: `941`,
    1674: `941`,
    1675: `942`,
    1676: `942`,
    1677: `943`,
    1678: `943`,
    1679: `944`,
    168: `23`,
    1680: `944`,
    1681: `945`,
    1682: `945`,
    1683: `945`,
    1684: `947`,
    1685: `947`,
    1686: `948`,
    1687: `949`,
    1688: `950`,
    1689: `951`,
    169: `23`,
    1690: `951`,
    1691: `952`,
    1692: `952`,
    1693: `953`,
    1694: `954`,
    1695: `962`,
    1696: `963`,
    1697: `965`,
    1698: `966`,
    1699: `967`,
    17: `2`,
    170: `23`,
    1700: `968`,
    1701: `969`,
    1702: `969`,
    1703: `970`,
    1704: `971`,
    1705: `971`,
    1706: `971`,
    1707: `972`,
    1708: `972`,
    1709: `972`,
    171: `23`,
    1710: `973`,
    1711: `974`,
    1712: `974`,
    1713: `975`,
    1714: `976`,
    1715: `984`,
    1716: `984`,
    1717: `985`,
    1718: `985`,
    1719: `986`,
    172: `23`,
    1720: `986`,
    1721: `986`,
    1722: `987`,
    1723: `988`,
    1724: `988`,
    1725: `989`,
    1726: `989`,
    1727: `990`,
    1728: `992`,
    1729: `993`,
    173: `23`,
    1730: `993`,
    1731: `994`,
    1732: `995`,
    1733: `996`,
    1734: `996`,
    1735: `997`,
    1736: `998`,
    1737: `998`,
    1738: `998`,
    1739: `999`,
    174: `23`,
    1740: `999`,
    1741: `999`,
    1742: `1000`,
    1743: `1000`,
    1744: `1001`,
    1745: `1001`,
    1746: `1002`,
    1747: `1003`,
    1748: `1003`,
    1749: `1004`,
    175: `23`,
    1750: `1005`,
    1751: `1005`,
    1752: `1006`,
    1753: `1007`,
    1754: `1008`,
    1755: `1008`,
    1756: `1009`,
    1757: `1010`,
    1758: `1011`,
    1759: `1011`,
    176: `23`,
    1760: `1012`,
    1761: `1013`,
    1762: `1014`,
    1763: `1014`,
    1764: `1015`,
    1765: `1016`,
    1766: `1017`,
    1767: `1018`,
    1768: `1018`,
    1769: `1018`,
    177: `23`,
    1770: `1019`,
    1771: `1020`,
    1772: `1020`,
    1773: `1021`,
    1774: `1021`,
    1775: `1021`,
    1776: `1021`,
    1777: `1021`,
    1778: `1021`,
    1779: `1021`,
    178: `23`,
    1780: `1021`,
    1781: `1021`,
    1782: `1021`,
    1783: `1022`,
    1784: `1022`,
    1785: `1023`,
    1786: `1024`,
    1787: `1024`,
    1788: `1024`,
    1789: `1025`,
    179: `23`,
    1790: `1026`,
    1791: `1027`,
    1792: `1027`,
    1793: `1028`,
    1794: `1029`,
    1795: `1029`,
    1796: `1029`,
    1797: `1030`,
    1798: `1030`,
    1799: `1031`,
    18: `2`,
    180: `23`,
    1800: `1031`,
    1801: `1032`,
    1802: `1032`,
    1803: `1033`,
    1804: `1034`,
    1805: `1035`,
    1806: `1035`,
    1807: `1036`,
    1808: `1037`,
    1809: `1037`,
    181: `23`,
    1810: `1038`,
    1811: `1038`,
    1812: `1038`,
    1813: `1038`,
    1814: `1038`,
    1815: `1038`,
    1816: `1039`,
    1817: `1039`,
    1818: `1040`,
    1819: `1041`,
    182: `23`,
    1820: `1044`,
    1821: `1045`,
    1822: `1046`,
    1823: `1046`,
    1824: `1047`,
    1825: `1047`,
    1826: `1048`,
    1827: `1049`,
    1828: `1049`,
    1829: `1049`,
    183: `23`,
    1830: `1050`,
    1831: `1051`,
    1832: `1052`,
    1833: `1053`,
    1834: `1054`,
    1835: `1054`,
    1836: `1054`,
    1837: `1055`,
    1838: `1055`,
    1839: `1057`,
    184: `23`,
    1840: `1057`,
    1841: `1058`,
    1842: `1058`,
    1843: `1059`,
    1844: `1059`,
    1845: `1059`,
    1846: `1060`,
    1847: `1060`,
    1848: `1061`,
    1849: `1062`,
    185: `23`,
    1850: `1062`,
    1851: `1063`,
    1852: `1064`,
    1853: `1064`,
    1854: `1064`,
    1855: `1065`,
    1856: `1065`,
    1857: `1066`,
    1858: `1066`,
    1859: `1067`,
    186: `23`,
    1860: `1068`,
    1861: `1069`,
    1862: `1069`,
    1863: `1070`,
    1864: `1070`,
    1865: `1070`,
    1866: `1071`,
    1867: `1072`,
    1868: `1072`,
    1869: `1073`,
    187: `23`,
    1870: `1073`,
    1871: `1073`,
    1872: `1074`,
    1873: `1075`,
    1874: `1075`,
    1875: `1076`,
    1876: `1076`,
    1877: `1077`,
    1878: `1078`,
    1879: `1079`,
    188: `23`,
    1880: `1080`,
    1881: `1080`,
    1882: `1081`,
    1883: `1082`,
    1884: `1083`,
    1885: `1083`,
    1886: `1084`,
    1887: `1085`,
    1888: `1086`,
    1889: `1087`,
    189: `23`,
    1890: `1088`,
    1891: `1088`,
    1892: `1089`,
    1893: `1090`,
    1894: `1091`,
    1895: `1092`,
    1896: `1093`,
    1897: `1093`,
    1898: `1094`,
    1899: `1094`,
    19: `2`,
    190: `23`,
    1900: `1095`,
    1901: `1095`,
    1902: `1096`,
    1903: `1096`,
    1904: `1097`,
    1905: `1097`,
    1906: `1098`,
    1907: `1099`,
    1908: `1100`,
    1909: `1100`,
    191: `23`,
    1910: `1101`,
    1911: `1101`,
    1912: `1102`,
    1913: `1102`,
    1914: `1103`,
    1915: `1103`,
    1916: `1104`,
    1917: `1104`,
    1918: `1105`,
    1919: `1105`,
    192: `23`,
    1920: `1105`,
    1921: `1108`,
    1922: `1108`,
    1923: `1109`,
    1924: `1109`,
    1925: `1110`,
    1926: `1110`,
    1927: `1111`,
    1928: `1112`,
    1929: `1113`,
    193: `23`,
    1930: `1113`,
    1931: `1113`,
    1932: `1114`,
    1933: `1115`,
    1934: `1115`,
    1935: `1116`,
    1936: `1116`,
    1937: `1116`,
    1938: `1116`,
    1939: `1116`,
    194: `23`,
    1940: `1116`,
    1941: `1116`,
    1942: `1116`,
    1943: `1116`,
    1944: `1116`,
    1945: `1117`,
    1946: `1117`,
    1947: `1118`,
    1948: `1119`,
    1949: `1120`,
    195: `23`,
    1950: `1120`,
    1951: `1121`,
    1952: `1121`,
    1953: `1122`,
    1954: `1122`,
    1955: `1123`,
    1956: `1124`,
    1957: `1124`,
    1958: `1125`,
    1959: `1125`,
    196: `23`,
    1960: `1125`,
    1961: `1126`,
    1962: `1127`,
    1963: `1127`,
    1964: `1128`,
    1965: `1128`,
    1966: `1128`,
    1967: `1129`,
    1968: `1130`,
    1969: `1130`,
    197: `23`,
    1970: `1131`,
    1971: `1132`,
    1972: `1133`,
    1973: `1133`,
    1974: `1134`,
    1975: `1135`,
    1976: `1136`,
    1977: `1136`,
    1978: `1137`,
    1979: `1138`,
    198: `23`,
    1980: `1139`,
    1981: `1139`,
    1982: `1140`,
    1983: `1141`,
    1984: `1142`,
    1985: `1142`,
    1986: `1143`,
    1987: `1143`,
    1988: `1144`,
    1989: `1144`,
    199: `23`,
    1990: `1145`,
    1991: `1145`,
    1992: `1145`,
    1993: `1147`,
    1994: `1147`,
    1995: `1148`,
    1996: `1148`,
    1997: `1149`,
    1998: `1149`,
    1999: `1150`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1151`,
    2001: `1152`,
    2002: `1152`,
    2003: `1153`,
    2004: `1153`,
    2005: `1154`,
    2006: `1154`,
    2007: `1154`,
    2008: `1155`,
    2009: `1155`,
    201: `23`,
    2010: `1156`,
    2011: `1156`,
    2012: `1157`,
    2013: `1157`,
    2014: `1158`,
    2015: `1159`,
    2016: `1159`,
    2017: `1160`,
    2018: `1160`,
    2019: `1160`,
    202: `25`,
    2020: `1160`,
    2021: `1160`,
    2022: `1160`,
    2023: `1161`,
    2024: `1161`,
    2025: `1162`,
    2026: `1163`,
    2027: `1164`,
    2028: `1164`,
    2029: `1165`,
    203: `27`,
    2030: `1166`,
    2031: `1166`,
    2032: `1167`,
    2033: `1168`,
    2034: `1169`,
    2035: `1171`,
    2036: `1171`,
    2037: `1172`,
    2038: `1172`,
    2039: `1172`,
    204: `27`,
    2040: `1173`,
    2041: `1173`,
    2042: `1174`,
    2043: `1175`,
    2044: `1175`,
    2045: `1176`,
    2046: `1176`,
    2047: `1177`,
    2048: `1177`,
    2049: `1177`,
    205: `27`,
    2050: `1178`,
    2051: `1180`,
    2052: `1180`,
    2053: `1181`,
    2054: `1181`,
    2055: `1182`,
    2056: `1182`,
    2057: `1182`,
    2058: `1183`,
    2059: `1183`,
    206: `28`,
    2060: `1183`,
    2061: `1183`,
    2062: `1183`,
    2063: `1183`,
    2064: `1183`,
    2065: `1183`,
    2066: `1183`,
    2067: `1183`,
    2068: `1183`,
    2069: `1183`,
    207: `28`,
    2070: `1183`,
    2071: `1183`,
    2072: `1183`,
    2073: `1183`,
    2074: `1183`,
    2075: `1183`,
    2076: `1183`,
    2077: `1183`,
    2078: `1183`,
    2079: `1183`,
    208: `30`,
    2080: `1183`,
    2081: `1183`,
    2082: `1183`,
    2083: `1183`,
    2084: `1183`,
    2085: `1183`,
    2086: `1183`,
    2087: `1183`,
    2088: `1183`,
    2089: `1183`,
    209: `31`,
    2090: `1183`,
    2091: `1183`,
    2092: `1183`,
    2093: `1183`,
    2094: `1183`,
    2095: `1183`,
    2096: `1183`,
    2097: `1183`,
    2098: `1183`,
    2099: `1183`,
    21: `2`,
    210: `32`,
    2100: `1183`,
    2101: `1183`,
    2102: `1183`,
    2103: `1183`,
    2104: `1183`,
    2105: `1183`,
    2106: `1183`,
    2107: `1183`,
    2108: `1183`,
    2109: `1183`,
    211: `33`,
    2110: `1183`,
    2111: `1183`,
    2112: `1183`,
    2113: `1183`,
    2114: `1183`,
    2115: `1183`,
    2116: `1183`,
    2117: `1183`,
    2118: `1184`,
    2119: `1184`,
    212: `33`,
    2120: `1185`,
    2121: `1185`,
    2122: `1186`,
    2123: `1187`,
    2124: `1187`,
    2125: `1187`,
    2126: `1188`,
    2127: `1189`,
    2128: `1190`,
    2129: `1190`,
    213: `34`,
    2130: `1191`,
    2131: `1191`,
    2132: `1192`,
    2133: `1193`,
    2134: `1193`,
    2135: `1194`,
    2136: `1194`,
    2137: `1195`,
    2138: `1195`,
    2139: `1196`,
    214: `35`,
    2140: `1196`,
    2141: `1197`,
    2142: `1197`,
    2143: `1197`,
    2144: `1199`,
    2145: `1199`,
    2146: `1199`,
    2147: `1200`,
    2148: `1200`,
    2149: `1201`,
    215: `35`,
    2150: `1201`,
    2151: `1201`,
    2152: `1202`,
    2153: `1202`,
    2154: `1202`,
    2155: `1203`,
    2156: `1203`,
    2157: `1204`,
    2158: `1204`,
    2159: `1204`,
    216: `36`,
    2160: `1206`,
    2161: `1206`,
    2162: `1206`,
    2163: `1207`,
    2164: `1207`,
    2165: `1207`,
    2166: `1208`,
    2167: `1208`,
    2168: `1209`,
    2169: `1209`,
    217: `37`,
    2170: `1209`,
    2171: `1211`,
    2172: `1212`,
    2173: `1212`,
    2174: `1213`,
    2175: `1214`,
    2176: `1215`,
    2177: `1216`,
    2178: `1216`,
    2179: `1217`,
    218: `38`,
    2180: `1218`,
    2181: `1219`,
    2182: `1220`,
    2183: `1220`,
    2184: `1221`,
    2185: `1222`,
    2186: `1223`,
    2187: `1224`,
    2188: `1224`,
    2189: `1225`,
    219: `39`,
    2190: `1226`,
    2191: `1227`,
    2192: `1227`,
    2193: `1227`,
    2194: `1228`,
    2195: `1228`,
    2196: `1228`,
    2197: `1229`,
    2198: `1230`,
    2199: `1231`,
    22: `2`,
    220: `39`,
    2200: `1232`,
    2201: `1232`,
    2202: `1232`,
    2203: `1234`,
    2204: `1234`,
    2205: `1234`,
    2206: `1236`,
    2207: `1236`,
    2208: `1236`,
    2209: `1238`,
    221: `41`,
    2210: `1238`,
    2211: `1239`,
    2212: `1239`,
    2213: `1239`,
    2214: `1240`,
    2215: `1240`,
    2216: `1241`,
    2217: `1241`,
    2218: `1241`,
    2219: `1243`,
    222: `42`,
    2220: `1243`,
    2221: `1244`,
    2222: `1244`,
    2223: `1244`,
    2224: `1245`,
    2225: `1245`,
    2226: `1246`,
    2227: `1246`,
    2228: `1246`,
    2229: `1248`,
    223: `42`,
    2230: `1248`,
    2231: `1248`,
    2232: `1250`,
    2233: `1250`,
    2234: `1251`,
    2235: `1251`,
    2236: `1252`,
    2237: `1252`,
    2238: `1252`,
    2239: `1254`,
    224: `43`,
    2240: `1254`,
    2241: `1255`,
    2242: `1255`,
    2243: `1256`,
    2244: `1256`,
    2245: `1257`,
    2246: `1258`,
    2247: `1259`,
    2248: `1259`,
    2249: `1259`,
    225: `44`,
    2250: `1260`,
    2251: `1260`,
    2252: `1262`,
    2253: `1262`,
    2254: `1263`,
    2255: `1263`,
    2256: `1264`,
    2257: `1264`,
    2258: `1264`,
    2259: `1265`,
    226: `45`,
    2260: `1265`,
    2261: `1266`,
    2262: `1267`,
    2263: `1267`,
    2264: `1268`,
    2265: `1269`,
    2266: `1269`,
    2267: `1269`,
    2268: `1270`,
    2269: `1270`,
    227: `45`,
    2270: `1271`,
    2271: `1271`,
    2272: `1272`,
    2273: `1273`,
    2274: `1274`,
    2275: `1274`,
    2276: `1275`,
    2277: `1275`,
    2278: `1275`,
    2279: `1276`,
    228: `45`,
    2280: `1277`,
    2281: `1277`,
    2282: `1278`,
    2283: `1278`,
    2284: `1278`,
    2285: `1279`,
    2286: `1280`,
    2287: `1280`,
    2288: `1281`,
    2289: `1281`,
    229: `46`,
    2290: `1282`,
    2291: `1283`,
    2292: `1284`,
    2293: `1285`,
    2294: `1285`,
    2295: `1286`,
    2296: `1287`,
    2297: `1288`,
    2298: `1288`,
    2299: `1289`,
    23: `2`,
    230: `46`,
    2300: `1290`,
    2301: `1291`,
    2302: `1292`,
    2303: `1293`,
    2304: `1293`,
    2305: `1294`,
    2306: `1295`,
    2307: `1296`,
    2308: `1296`,
    2309: `1297`,
    231: `47`,
    2310: `1297`,
    2311: `1298`,
    2312: `1298`,
    2313: `1299`,
    2314: `1299`,
    2315: `1300`,
    2316: `1300`,
    2317: `1301`,
    2318: `1302`,
    2319: `1303`,
    232: `48`,
    2320: `1303`,
    2321: `1304`,
    2322: `1304`,
    2323: `1305`,
    2324: `1305`,
    2325: `1306`,
    2326: `1306`,
    2327: `1307`,
    2328: `1307`,
    2329: `1308`,
    233: `49`,
    2330: `1308`,
    2331: `1308`,
    2332: `1310`,
    2333: `1310`,
    2334: `1312`,
    2335: `1312`,
    2336: `1313`,
    2337: `1313`,
    2338: `1313`,
    2339: `1314`,
    234: `49`,
    2340: `1314`,
    2341: `1315`,
    2342: `1315`,
    2343: `1315`,
    2344: `1316`,
    2345: `1317`,
    2346: `1319`,
    2347: `1319`,
    2348: `1320`,
    2349: `1320`,
    235: `50`,
    2350: `1321`,
    2351: `1321`,
    2352: `1321`,
    2353: `1323`,
    2354: `1324`,
    2355: `1324`,
    2356: `1325`,
    2357: `1325`,
    2358: `1326`,
    2359: `1326`,
    236: `50`,
    2360: `1327`,
    2361: `1327`,
    2362: `1327`,
    2363: `1329`,
    2364: `1329`,
    2365: `1330`,
    2366: `1330`,
    2367: `1331`,
    2368: `1332`,
    2369: `1334`,
    237: `51`,
    2370: `1334`,
    2371: `1334`,
    2372: `1336`,
    2373: `1336`,
    2374: `1337`,
    2375: `1338`,
    2376: `1338`,
    2377: `1339`,
    2378: `1340`,
    2379: `1342`,
    238: `51`,
    2380: `1343`,
    2381: `1343`,
    2382: `1344`,
    2383: `1344`,
    2384: `1345`,
    2385: `1345`,
    2386: `1345`,
    2387: `1346`,
    2388: `1346`,
    2389: `1346`,
    239: `51`,
    2390: `1348`,
    2391: `1349`,
    2392: `1350`,
    2393: `1351`,
    2394: `1352`,
    2395: `1354`,
    2396: `1355`,
    2397: `1355`,
    2398: `1356`,
    2399: `1357`,
    24: `2`,
    240: `52`,
    2400: `1357`,
    2401: `1358`,
    2402: `1358`,
    2403: `1359`,
    2404: `1359`,
    2405: `1360`,
    2406: `1361`,
    2407: `1363`,
    2408: `1364`,
    2409: `1364`,
    241: `52`,
    2410: `1365`,
    2411: `1365`,
    2412: `1366`,
    2413: `1366`,
    2414: `1367`,
    2415: `1367`,
    2416: `1368`,
    2417: `1368`,
    2418: `1369`,
    2419: `1369`,
    242: `53`,
    2420: `1370`,
    2421: `1371`,
    2422: `1373`,
    2423: `1373`,
    2424: `1373`,
    2425: `1375`,
    2426: `1375`,
    2427: `1375`,
    2428: `1377`,
    2429: `1377`,
    243: `53`,
    2430: `1378`,
    2431: `1378`,
    2432: `1378`,
    2433: `1379`,
    2434: `1379`,
    2435: `1380`,
    2436: `1380`,
    2437: `1380`,
    2438: `1382`,
    2439: `1383`,
    244: `53`,
    2440: `1385`,
    2441: `1386`,
    2442: `1387`,
    2443: `1388`,
    2444: `1388`,
    2445: `1389`,
    2446: `1389`,
    2447: `1390`,
    2448: `1390`,
    2449: `1390`,
    245: `53`,
    2450: `1391`,
    2451: `1393`,
    2452: `1394`,
    2453: `1395`,
    2454: `1395`,
    2455: `1395`,
    2456: `1396`,
    2457: `1397`,
    2458: `1397`,
    2459: `1400`,
    246: `53`,
    2460: `1400`,
    2461: `1401`,
    2462: `1401`,
    2463: `1402`,
    2464: `1403`,
    2465: `1404`,
    2466: `1405`,
    2467: `1405`,
    2468: `1406`,
    2469: `1407`,
    247: `53`,
    2470: `1407`,
    2471: `1408`,
    2472: `1408`,
    2473: `1409`,
    2474: `1409`,
    2475: `1410`,
    2476: `1411`,
    2477: `1412`,
    2478: `1412`,
    2479: `1413`,
    248: `54`,
    2480: `1414`,
    2481: `1415`,
    2482: `1416`,
    2483: `1416`,
    2484: `1417`,
    2485: `1418`,
    2486: `1419`,
    2487: `1421`,
    2488: `1422`,
    2489: `1423`,
    249: `54`,
    2490: `1424`,
    2491: `1424`,
    2492: `1424`,
    2493: `1425`,
    2494: `1425`,
    2495: `1426`,
    2496: `1427`,
    2497: `1428`,
    2498: `1430`,
    2499: `1431`,
    25: `2`,
    250: `55`,
    2500: `1431`,
    2501: `1431`,
    2502: `1432`,
    2503: `1432`,
    2504: `1433`,
    2505: `1434`,
    2506: `1434`,
    2507: `1434`,
    2508: `1435`,
    2509: `1435`,
    251: `56`,
    2510: `1436`,
    2511: `1437`,
    2512: `1437`,
    2513: `1438`,
    2514: `1439`,
    2515: `1439`,
    2516: `1440`,
    2517: `1441`,
    2518: `1441`,
    2519: `1441`,
    252: `57`,
    2520: `1442`,
    2521: `1442`,
    2522: `1443`,
    2523: `1444`,
    2524: `1444`,
    2525: `1444`,
    2526: `1445`,
    2527: `1445`,
    2528: `1446`,
    2529: `1447`,
    253: `57`,
    2530: `1447`,
    2531: `1447`,
    2532: `1448`,
    2533: `1449`,
    2534: `1449`,
    2535: `1450`,
    2536: `1451`,
    2537: `1451`,
    2538: `1451`,
    2539: `1452`,
    254: `58`,
    2540: `1453`,
    2541: `1453`,
    2542: `1454`,
    2543: `1455`,
    2544: `1455`,
    2545: `1455`,
    2546: `1456`,
    2547: `1457`,
    2548: `1457`,
    2549: `1458`,
    255: `59`,
    2550: `1459`,
    2551: `1459`,
    2552: `1459`,
    2553: `1460`,
    2554: `1461`,
    2555: `1461`,
    2556: `1462`,
    2557: `1463`,
    2558: `1463`,
    2559: `1463`,
    256: `61`,
    2560: `1464`,
    2561: `1465`,
    2562: `1465`,
    2563: `1466`,
    2564: `1467`,
    2565: `1467`,
    2566: `1467`,
    2567: `1468`,
    2568: `1469`,
    2569: `1469`,
    257: `61`,
    2570: `1470`,
    2571: `1471`,
    2572: `1471`,
    2573: `1471`,
    2574: `1472`,
    2575: `1472`,
    2576: `1473`,
    2577: `1473`,
    2578: `1473`,
    2579: `1474`,
    258: `62`,
    2580: `1475`,
    2581: `1475`,
    2582: `1476`,
    2583: `1478`,
    2584: `1479`,
    2585: `1479`,
    2586: `1479`,
    2587: `1480`,
    2588: `1481`,
    2589: `1482`,
    259: `62`,
    2590: `1483`,
    2591: `1484`,
    2592: `1486`,
    2593: `1487`,
    2594: `1488`,
    2595: `1489`,
    2596: `1489`,
    2597: `1489`,
    2598: `1490`,
    2599: `1490`,
    26: `2`,
    260: `62`,
    2600: `1491`,
    2601: `1491`,
    2602: `1491`,
    2603: `1492`,
    2604: `1492`,
    2605: `1492`,
    2606: `1494`,
    2607: `1495`,
    2608: `1495`,
    2609: `1495`,
    261: `63`,
    2610: `1497`,
    2611: `1498`,
    2612: `1498`,
    2613: `1498`,
    2614: `1500`,
    2615: `1500`,
    2616: `1501`,
    2617: `1502`,
    2618: `1502`,
    2619: `1503`,
    262: `63`,
    2620: `1505`,
    2621: `1506`,
    2622: `1507`,
    2623: `1507`,
    2624: `1508`,
    2625: `1510`,
    2626: `1510`,
    2627: `1511`,
    2628: `1512`,
    2629: `1512`,
    263: `64`,
    2630: `1513`,
    2631: `1515`,
    2632: `1516`,
    2633: `1516`,
    2634: `1517`,
    2635: `1519`,
    2636: `1520`,
    2637: `1521`,
    2638: `1522`,
    2639: `1523`,
    264: `65`,
    2640: `1523`,
    2641: `1524`,
    2642: `1525`,
    2643: `1526`,
    2644: `1527`,
    2645: `1529`,
    2646: `1529`,
    2647: `1530`,
    2648: `1530`,
    2649: `1531`,
    265: `66`,
    2650: `1532`,
    2651: `1533`,
    2652: `1533`,
    2653: `1533`,
    2654: `1534`,
    2655: `1534`,
    2656: `1534`,
    2657: `1537`,
    2658: `1537`,
    2659: `1538`,
    266: `66`,
    2660: `1538`,
    2661: `1539`,
    2662: `1540`,
    2663: `1541`,
    2664: `1542`,
    2665: `1542`,
    2666: `1543`,
    2667: `1544`,
    2668: `1544`,
    2669: `1545`,
    267: `66`,
    2670: `1545`,
    2671: `1546`,
    2672: `1546`,
    2673: `1547`,
    2674: `1548`,
    2675: `1549`,
    2676: `1549`,
    2677: `1550`,
    2678: `1550`,
    2679: `1551`,
    268: `66`,
    2680: `1552`,
    2681: `1553`,
    2682: `1553`,
    2683: `1554`,
    2684: `1554`,
    2685: `1555`,
    2686: `1556`,
    2687: `1557`,
    2688: `1557`,
    2689: `1558`,
    269: `66`,
    2690: `1559`,
    2691: `1560`,
    2692: `1562`,
    2693: `1563`,
    2694: `1563`,
    2695: `1564`,
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
    279: `66`,
    28: `2`,
    280: `66`,
    281: `66`,
    282: `66`,
    283: `67`,
    284: `67`,
    285: `67`,
    286: `69`,
    287: `69`,
    288: `69`,
    289: `70`,
    29: `2`,
    290: `71`,
    291: `71`,
    292: `73`,
    293: `74`,
    294: `75`,
    295: `76`,
    296: `76`,
    297: `77`,
    298: `78`,
    299: `79`,
    3: `2`,
    30: `2`,
    300: `79`,
    301: `80`,
    302: `81`,
    303: `82`,
    304: `83`,
    305: `83`,
    306: `84`,
    307: `84`,
    308: `84`,
    309: `86`,
    31: `2`,
    310: `86`,
    311: `86`,
    312: `87`,
    313: `87`,
    314: `87`,
    315: `88`,
    316: `89`,
    317: `89`,
    318: `90`,
    319: `90`,
    32: `2`,
    320: `92`,
    321: `93`,
    322: `94`,
    323: `95`,
    324: `95`,
    325: `96`,
    326: `96`,
    327: `97`,
    328: `98`,
    329: `99`,
    33: `2`,
    330: `100`,
    331: `101`,
    332: `102`,
    333: `103`,
    334: `104`,
    335: `104`,
    336: `105`,
    337: `105`,
    338: `105`,
    339: `108`,
    34: `4`,
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
    35: `4`,
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
    398: `109`,
    399: `109`,
    4: `2`,
    40: `7`,
    400: `110`,
    401: `110`,
    402: `110`,
    403: `112`,
    404: `112`,
    405: `112`,
    406: `113`,
    407: `113`,
    408: `115`,
    409: `116`,
    41: `8`,
    410: `117`,
    411: `117`,
    412: `118`,
    413: `118`,
    414: `119`,
    415: `120`,
    416: `120`,
    417: `121`,
    418: `122`,
    419: `123`,
    42: `9`,
    420: `124`,
    421: `124`,
    422: `125`,
    423: `125`,
    424: `125`,
    425: `127`,
    426: `127`,
    427: `127`,
    428: `128`,
    429: `128`,
    43: `10`,
    430: `128`,
    431: `129`,
    432: `130`,
    433: `130`,
    434: `130`,
    435: `131`,
    436: `132`,
    437: `132`,
    438: `133`,
    439: `133`,
    44: `11`,
    440: `134`,
    441: `134`,
    442: `136`,
    443: `137`,
    444: `138`,
    445: `138`,
    446: `138`,
    447: `139`,
    448: `139`,
    449: `140`,
    45: `11`,
    450: `140`,
    451: `141`,
    452: `142`,
    453: `143`,
    454: `143`,
    455: `144`,
    456: `145`,
    457: `146`,
    458: `147`,
    459: `148`,
    46: `12`,
    460: `148`,
    461: `149`,
    462: `149`,
    463: `149`,
    464: `151`,
    465: `151`,
    466: `151`,
    467: `152`,
    468: `152`,
    469: `154`,
    47: `13`,
    470: `154`,
    471: `155`,
    472: `156`,
    473: `157`,
    474: `160`,
    475: `160`,
    476: `160`,
    477: `162`,
    478: `163`,
    479: `164`,
    48: `14`,
    480: `165`,
    481: `165`,
    482: `166`,
    483: `167`,
    484: `167`,
    485: `167`,
    486: `168`,
    487: `169`,
    488: `170`,
    489: `171`,
    49: `14`,
    490: `172`,
    491: `173`,
    492: `173`,
    493: `173`,
    494: `174`,
    495: `174`,
    496: `176`,
    497: `176`,
    498: `177`,
    499: `178`,
    5: `2`,
    50: `15`,
    500: `179`,
    501: `182`,
    502: `182`,
    503: `182`,
    504: `182`,
    505: `182`,
    506: `182`,
    507: `183`,
    508: `183`,
    509: `184`,
    51: `16`,
    510: `185`,
    511: `187`,
    512: `188`,
    513: `191`,
    514: `191`,
    515: `192`,
    516: `193`,
    517: `194`,
    518: `197`,
    519: `197`,
    52: `17`,
    520: `197`,
    521: `198`,
    522: `198`,
    523: `199`,
    524: `200`,
    525: `200`,
    526: `201`,
    527: `201`,
    528: `201`,
    529: `203`,
    53: `18`,
    530: `203`,
    531: `203`,
    532: `204`,
    533: `204`,
    534: `204`,
    535: `205`,
    536: `206`,
    537: `206`,
    538: `207`,
    539: `207`,
    54: `19`,
    540: `209`,
    541: `209`,
    542: `210`,
    543: `211`,
    544: `212`,
    545: `215`,
    546: `215`,
    547: `215`,
    548: `216`,
    549: `216`,
    55: `21`,
    550: `217`,
    551: `219`,
    552: `220`,
    553: `220`,
    554: `221`,
    555: `222`,
    556: `223`,
    557: `223`,
    558: `224`,
    559: `224`,
    56: `21`,
    560: `225`,
    561: `226`,
    562: `227`,
    563: `228`,
    564: `228`,
    565: `228`,
    566: `229`,
    567: `229`,
    568: `229`,
    569: `230`,
    57: `21`,
    570: `230`,
    571: `230`,
    572: `231`,
    573: `231`,
    574: `232`,
    575: `232`,
    576: `232`,
    577: `234`,
    578: `234`,
    579: `234`,
    58: `21`,
    580: `235`,
    581: `235`,
    582: `237`,
    583: `237`,
    584: `238`,
    585: `239`,
    586: `240`,
    587: `243`,
    588: `243`,
    589: `243`,
    59: `21`,
    590: `245`,
    591: `246`,
    592: `247`,
    593: `247`,
    594: `248`,
    595: `248`,
    596: `249`,
    597: `250`,
    598: `250`,
    599: `250`,
    6: `2`,
    60: `21`,
    600: `251`,
    601: `252`,
    602: `253`,
    603: `254`,
    604: `255`,
    605: `256`,
    606: `256`,
    607: `256`,
    608: `257`,
    609: `257`,
    61: `21`,
    610: `258`,
    611: `258`,
    612: `258`,
    613: `261`,
    614: `261`,
    615: `262`,
    616: `263`,
    617: `264`,
    618: `267`,
    619: `267`,
    62: `21`,
    620: `267`,
    621: `268`,
    622: `268`,
    623: `269`,
    624: `270`,
    625: `270`,
    626: `271`,
    627: `271`,
    628: `271`,
    629: `274`,
    63: `21`,
    630: `274`,
    631: `275`,
    632: `276`,
    633: `277`,
    634: `280`,
    635: `280`,
    636: `280`,
    637: `281`,
    638: `281`,
    639: `282`,
    64: `21`,
    640: `283`,
    641: `283`,
    642: `284`,
    643: `284`,
    644: `284`,
    645: `287`,
    646: `287`,
    647: `288`,
    648: `289`,
    649: `290`,
    65: `21`,
    650: `293`,
    651: `293`,
    652: `293`,
    653: `294`,
    654: `294`,
    655: `295`,
    656: `296`,
    657: `296`,
    658: `297`,
    659: `297`,
    66: `21`,
    660: `297`,
    661: `300`,
    662: `300`,
    663: `301`,
    664: `302`,
    665: `303`,
    666: `306`,
    667: `306`,
    668: `306`,
    669: `307`,
    67: `21`,
    670: `307`,
    671: `308`,
    672: `309`,
    673: `309`,
    674: `310`,
    675: `310`,
    676: `310`,
    677: `312`,
    678: `312`,
    679: `312`,
    68: `21`,
    680: `313`,
    681: `313`,
    682: `315`,
    683: `315`,
    684: `316`,
    685: `317`,
    686: `318`,
    687: `321`,
    688: `321`,
    689: `321`,
    69: `21`,
    690: `322`,
    691: `323`,
    692: `325`,
    693: `326`,
    694: `327`,
    695: `328`,
    696: `329`,
    697: `329`,
    698: `330`,
    699: `331`,
    7: `2`,
    70: `21`,
    700: `331`,
    701: `331`,
    702: `332`,
    703: `332`,
    704: `332`,
    705: `333`,
    706: `333`,
    707: `334`,
    708: `334`,
    709: `334`,
    71: `21`,
    710: `336`,
    711: `336`,
    712: `336`,
    713: `337`,
    714: `337`,
    715: `337`,
    716: `338`,
    717: `339`,
    718: `339`,
    719: `340`,
    72: `21`,
    720: `340`,
    721: `342`,
    722: `342`,
    723: `343`,
    724: `344`,
    725: `345`,
    726: `348`,
    727: `348`,
    728: `348`,
    729: `349`,
    73: `21`,
    730: `349`,
    731: `350`,
    732: `352`,
    733: `353`,
    734: `353`,
    735: `354`,
    736: `355`,
    737: `356`,
    738: `356`,
    739: `357`,
    74: `21`,
    740: `357`,
    741: `358`,
    742: `359`,
    743: `360`,
    744: `361`,
    745: `361`,
    746: `361`,
    747: `362`,
    748: `362`,
    749: `362`,
    75: `21`,
    750: `363`,
    751: `363`,
    752: `363`,
    753: `364`,
    754: `364`,
    755: `365`,
    756: `365`,
    757: `365`,
    758: `367`,
    759: `367`,
    76: `21`,
    760: `367`,
    761: `368`,
    762: `369`,
    763: `369`,
    764: `369`,
    765: `370`,
    766: `371`,
    767: `371`,
    768: `372`,
    769: `372`,
    77: `21`,
    770: `374`,
    771: `375`,
    772: `376`,
    773: `376`,
    774: `376`,
    775: `377`,
    776: `377`,
    777: `378`,
    778: `379`,
    779: `379`,
    78: `21`,
    780: `380`,
    781: `381`,
    782: `382`,
    783: `383`,
    784: `383`,
    785: `384`,
    786: `385`,
    787: `386`,
    788: `386`,
    789: `387`,
    79: `21`,
    790: `387`,
    791: `387`,
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
    847: `390`,
    848: `390`,
    849: `390`,
    85: `21`,
    850: `390`,
    851: `391`,
    852: `391`,
    853: `392`,
    854: `392`,
    855: `392`,
    856: `394`,
    857: `394`,
    858: `395`,
    859: `395`,
    86: `21`,
    860: `396`,
    861: `398`,
    862: `399`,
    863: `400`,
    864: `401`,
    865: `401`,
    866: `402`,
    867: `403`,
    868: `403`,
    869: `403`,
    87: `21`,
    870: `404`,
    871: `405`,
    872: `406`,
    873: `407`,
    874: `408`,
    875: `409`,
    876: `418`,
    877: `418`,
    878: `419`,
    879: `420`,
    88: `21`,
    880: `420`,
    881: `421`,
    882: `421`,
    883: `421`,
    884: `422`,
    885: `423`,
    886: `424`,
    887: `424`,
    888: `424`,
    889: `425`,
    89: `21`,
    890: `426`,
    891: `426`,
    892: `427`,
    893: `427`,
    894: `427`,
    895: `427`,
    896: `427`,
    897: `427`,
    898: `427`,
    899: `427`,
    9: `2`,
    90: `21`,
    900: `427`,
    901: `427`,
    902: `428`,
    903: `428`,
    904: `429`,
    905: `430`,
    906: `431`,
    907: `431`,
    908: `432`,
    909: `432`,
    91: `21`,
    910: `433`,
    911: `433`,
    912: `434`,
    913: `435`,
    914: `435`,
    915: `436`,
    916: `436`,
    917: `436`,
    918: `437`,
    919: `438`,
    92: `21`,
    920: `438`,
    921: `439`,
    922: `439`,
    923: `439`,
    924: `440`,
    925: `441`,
    926: `441`,
    927: `442`,
    928: `443`,
    929: `444`,
    93: `21`,
    930: `444`,
    931: `445`,
    932: `446`,
    933: `447`,
    934: `447`,
    935: `448`,
    936: `449`,
    937: `450`,
    938: `450`,
    939: `451`,
    94: `21`,
    940: `452`,
    941: `453`,
    942: `453`,
    943: `454`,
    944: `454`,
    945: `455`,
    946: `455`,
    947: `457`,
    948: `457`,
    949: `458`,
    95: `21`,
    950: `458`,
    951: `458`,
    952: `459`,
    953: `460`,
    954: `460`,
    955: `460`,
    956: `461`,
    957: `461`,
    958: `462`,
    959: `462`,
    96: `21`,
    960: `463`,
    961: `464`,
    962: `464`,
    963: `465`,
    964: `465`,
    965: `466`,
    966: `466`,
    967: `467`,
    968: `468`,
    969: `468`,
    97: `21`,
    970: `469`,
    971: `469`,
    972: `470`,
    973: `470`,
    974: `471`,
    975: `472`,
    976: `472`,
    977: `473`,
    978: `473`,
    979: `474`,
    98: `21`,
    980: `475`,
    981: `476`,
    982: `476`,
    983: `477`,
    984: `477`,
    985: `478`,
    986: `478`,
    987: `479`,
    988: `480`,
    989: `480`,
    99: `21`,
    990: `481`,
    991: `481`,
    992: `482`,
    993: `482`,
    994: `482`,
    995: `483`,
    996: `484`,
    997: `484`,
    998: `485`,
    999: `486`
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T19","name":"v9448","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_177","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_177","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_177","type":"tuple"},{"internalType":"bool","name":"_User_optin0_177","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2495","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2967","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3446","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3913","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4381","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4872","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5413","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5921","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T21","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v9399","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9405","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9412","type":"address"},{"internalType":"uint256","name":"v9413","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9423","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9431","type":"address"},{"internalType":"address payable","name":"v9432","type":"address"},{"internalType":"uint256","name":"v9433","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9363","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9370","type":"address"},{"internalType":"address payable","name":"v9371","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9375","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9387","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9392","type":"address"},{"internalType":"address payable","name":"v9393","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9440","type":"uint256"},{"internalType":"address payable","name":"v9441","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_177","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_177","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_177","type":"tuple"},{"internalType":"bool","name":"_User_optin0_177","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v9451","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806040526060620047b980380380916200001a826200009c565b6080391262000080576040516200003181620000d2565b608051815260a05161ffff19811681036200008057602082015260c051906001600160a01b038216820362000080576200007091604082015262000198565b6040516139f4908162000da58239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000c357604052565b620000cd62000085565b604052565b606081019081106001600160401b03821117620000c357604052565b604081019081106001600160401b03821117620000c357604052565b60e081019081106001600160401b03821117620000c357604052565b608081019081106001600160401b03821117620000c357604052565b601f909101601f19168101906001600160401b03821190821017620000c357604052565b6040519061026082016001600160401b03811183821017620000c357604052565b604051906200019682620000d2565b565b6200019690600080805543600355610240620001b362000166565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152015262000416565b604051906200023d82620000d2565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000297575b6040528260005b8281106200028057505050565b82906200028c6200022e565b818401520162000273565b620002a162000085565b6200026c565b60405190620002b682620000ee565b60006020838281520152565b60405190620002d182620000ee565b6000602083620002e0620002a7565b81520152565b60405190620002f5826200010a565b8160c06000918281528260208201526200030e620002c2565b60408201528260608201528260808201528260a08201520152565b6040519060a082016001600160401b0381118382101762000393575b60405281620003536200022e565b81526200035f6200024f565b60208201526200036e620002a7565b60408201526200037d620002c2565b606082015260806200038e620002e6565b910152565b6200039d62000085565b62000345565b906001811015620003b55760051b0190565b634e487b7160e01b600052603260045260246000fd5b60405190620003da826200010a565b600060c083828152826020820152826040820152620003f8620002e6565b60608201528260808201526200040d6200024f565b60a08201520152565b62000196906200042562000329565b620004446200043e6200043a60045460ff1690565b1590565b620005f5565b60408051338152835160208083019190915284015161ffff191681830152838201516001600160a01b031660608201529091620005d8917f19beb4b4ae800ef164657ae1c238d1e90f50effd8bb91dc7502d5d13755b59e090608090a1620004b984518015908115620005e8575b5062000616565b60009283825152620005d260209285848251015285838251015280519084810191825152620004e9341562000637565b608084820160058151526064878251015251916060810192835152620005128784510160019052565b019087825152620005268683510160019052565b51848251015286606082510152866080825101528660a0825101528660c0825101526200059c6200058d856200055b620003cb565b3381529a6200057f8c8a620005758185015161ffff191690565b61ffff1916910152565b01516001600160a01b031690565b6001600160a01b031689860152565b51606088015243608088015251918251908085830151920151151591620005c262000187565b9588875286015284019015159052565b62000658565b60a083015260c082015262000af1565b90506001541438620004b2565b15620005fd57565b60405163100960cb60e01b815260116004820152602490fd5b156200061e57565b60405163100960cb60e01b815260126004820152602490fd5b156200063f57565b60405163100960cb60e01b815260136004820152602490fd5b9190620006646200024f565b926000805b6001811062000679575050508252565b620006858184620003a3565b51620006928288620003a3565b526200069f8187620003a3565b506000198114620006b35760010162000669565b634e487b7160e01b82526011600452602482fd5b506040513d6000823e3d90fd5b90600182811c9216801562000706575b6020831014620006f057565b634e487b7160e01b600052602260045260246000fd5b91607f1691620006e4565b8181106200071d575050565b6000815560010162000711565b62000737600254620006d4565b80620007405750565b601f81116001146200075457506000600255565b60026000526200079c90601f0160051c60008051602062004799833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000711565b6000602081208160025555565b604051906101a082016001600160401b0381118382101762000838575b60405281610180600091828152826020820152826040820152620007e9620002e6565b6060820152620007f86200024f565b60808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201526200082e6200022e565b6101608201520152565b6200084262000085565b620007c6565b60408091805184526020810151602085015201511515910152565b906000905b600182106200087657505050565b60206060826200088a600194875162000848565b0193019101909162000868565b81516001600160a01b03168152610320810192916103009060208181015161ffff1916908401526040818101516001600160a01b0316908401526200093a6060820151606085019060c06101009180518452602081015115156020850152602060408201518181518051604089015201516060870152015115156080850152606081015160a085015260808101518285015260a081015160e08501520151910152565b60808101519062000952610180928386019062000863565b60a08101516101e085015260c081015161020085015260e0810151610220850152610100810151610240850152610120810151610260850152610140810151610280850152620009ad6101608201516102a086019062000848565b0151910152565b90601f8211620009c2575050565b620001969160026000526020600020906020601f840160051c83019310620009f3575b601f0160051c019062000711565b9091508190620009e5565b80519091906001600160401b03811162000ae1575b62000a2b8162000a25600254620006d4565b620009b4565b602080601f831160011462000a6a575081929360009262000a5e575b50508160011b916000199060031b1c191617600255565b01519050388062000a47565b6002600052601f1983169490919060008051602062004799833981519152926000905b87821062000ac857505083600195961062000aae575b505050811b01600255565b015160001960f88460031b161c1916905538808062000aa3565b8060018596829496860151815501950193019062000a8d565b62000aeb62000085565b62000a13565b606081019062000b05602083510151151590565b1562000bf05762000bea620001969262000bdb92608062000b25620007a9565b82516001600160a01b031681529260208381015161ffff1916908501526040838101516001600160a01b0316908501528051606085015260c060a0840193845184870152015160a085015260a08151015160c085015260608151015160e085015260c08151015161010085015280515161012085015251015161014083015280515161016083015251515161018082015262000bc16003600055565b62000bcb43600155565b6040519283916020830162000897565b03601f19810183528262000142565b620009fe565b62000c569150600080808062000c1c62000c10865160018060a01b031690565b6001600160a01b031690565b60c08601519082821562000c7f575bf11562000c6f575b6040810151815160a0909201515151916001600160a01b03908116911662000c91565b6000805562000c656000600155565b620001966200072a565b62000c79620006c7565b62000c33565b506108fc62000c2b565b156200008057565b6000809162000196948262000d3495604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815262000cd58162000126565b5193165af13d1562000d4a5762000d233d6001600160401b03811162000d3a575b6040519062000d10601f8201601f19166020018362000142565b81529182903d6000602084013e62000d72565b506020808251830101910162000d58565b62000c89565b62000d4462000085565b62000cf6565b62000d236060809262000d72565b908160209103126200008057518015158103620000805790565b1562000d7b5790565b80511562000d8b57805190602001fd5b60405163100960cb60e01b815260026004820152602490fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630a84e99f146102345780631548a30d1461022b5780631e93b0f11461022257806336e56ea5146102195780633702d0ce146102105780634ab9f8b314610207578063523df4f6146101fe578063544774a9146101f557806355c42a95146101ec578063582523cd146101e3578063672422c7146101da57806374623535146101d157806374ecfa44146101c857806374f16ec9146101bf5780637a2b54dc146101b65780637f0595e2146101ad57806383230757146101a4578063883513de1461019b57806392cf8bd514610192578063a579242414610189578063a855bc1014610180578063ab53f2c614610177578063b87939c71461016e578063bf7df9c314610165578063cd6637a81461015c578063f1b1259d146101535763f33c0dce0361000e5761014e610eb9565b61000e565b5061014e610ddd565b5061014e610d8d565b5061014e610d5b565b5061014e610cb7565b5061014e610c42565b5061014e610bac565b5061014e610b3d565b5061014e610aec565b5061014e610a9b565b5061014e610a7c565b5061014e6109d6565b5061014e610995565b5061014e610902565b5061014e610832565b5061014e610800565b5061014e610792565b5061014e6106a4565b5061014e610666565b5061014e610608565b5061014e6105a1565b5061014e61054b565b5061014e61050d565b5061014e610488565b5061014e61043e565b5061014e6102f9565b5060203660031901126102af576020604061024d61141e565b6102a381835161025c81610f5a565b845161026781610f82565b600081528152858101906102796114b7565b82526004358151526001825152518582510152610294611595565b90600082525186820152611b87565b01511515604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b038116036102af57565b60409060031901126102af576004356102e9816102c0565b906024356102f6816102c0565b90565b50346102af5761043061012061030e366102d1565b9061031761141e565b91610390610387610326611237565b9260018060a01b0380951684526020948585019116815261038161037a61034b613863565b9561035a600360005414612ccd565b610373610365611011565b8980825183010191016118f9565b50516102b4565b855161157c565b516102b4565b8383510161157c565b8181019060008251526000838351015280519160016103de6103d960405195866103bd8982019283611b64565b03966103d1601f1998898101835282610fee565b519020611278565b611b5a565b6103e781610474565b0361043457509161040b6103d1610417936040955193865193849182019586611b64565b03908101835282610fee565b01515b5191018190526040519081529081906020820190565b0390f35b925050505161041a565b50346102af5760003660031901126102af576020600354604051908152f35b50634e487b7160e01b600052602160045260246000fd5b6002111561047e57565b61048661045d565b565b50346102af5760203660031901126102af5760606104b96004356104ab816102c0565b6104b3611147565b506111b4565b604080519180516104c981610474565b835260208101511515602084015201516040820152f35b919091604080606083019480516104f681610474565b845260208101511515602085015201511515910152565b50346102af5760203660031901126102af5761043061053f600435610531816102c0565b610539611147565b5061137c565b604051918291826104e0565b5060203660031901126102af57602060a0600435610568816102c0565b6102a361057361141e565b809261057d611552565b90815190600180881b03169052858101906004825152518582510152610294611595565b506020806003193601126102af57806004356105bc816102c0565b6102a36105c761141e565b80926105d1611552565b80516001600160a01b03909216909152848101805160009052905181518601526105f9611595565b90600082525185820152611b87565b50346102af5760203660031901126102af57610622611250565b506080610630600435611278565b6106646040805192805161064381610474565b84526020818101511515818601529101518051604085015201516060830152565bf35b5060003660031901126102af576020608061067f61141e565b6102a38161068b611595565b8581019060038251525115158582510152610294611595565b5060603660031901126102af5761043061078060c06004356106c5816102c0565b610779602435916106d5836102c0565b6106dd61141e565b9283916106e8611147565b9160018060a01b03809216835281602084019116815261074961073f604085019260443584526040519461071b86610f5a565b610723611147565b865260208601966107326114b7565b88525116855152516102b4565b602084510161157c565b5160408251015261075b825160059052565b518582510152610769611595565b9060008252516020820152611b87565b0151151590565b60405191829182901515815260200190565b50346102af5760003660031901126102af576107ac61141e565b6003600054036107e7576101c06020916101006107d86107ca611011565b8580825183010191016118f9565b01519182910152604051908152f35b60405163100960cb60e01b8152600e6004820152602490fd5b50346102af5760203660031901126102af5761043061053f600435610824816102c0565b61082c611147565b50611301565b506101c03660031901126102af5761084861141e565b6040519061085582610f5a565b60043582526101a03660231901126102af576108f6916108736110ba565b61087b613885565b815261088636613894565b6020820152610894366138e3565b60408201526108a236613903565b60608201526108af613935565b60808201526108bd366138bd565b60a08201526108cb36613950565b60c08201526108d936613997565b60e08201526108e6613942565b6101008201526020820152611b87565b60405160008152602090f35b5060403660031901126102af576104306107806060600435610923816102c0565b61077961092e61141e565b8092610938611237565b6001600160a01b03918216815260243560208201908152604051919261095d83610f5a565b610965611237565b835260208301936109746114b7565b85525116825152516020825101526002825152518582510152610769611595565b5060003660031901126102af5760206102406109af61141e565b6102a3816109bb611595565b85810190600782515251151561010082510152610294611595565b50346102af5760203660031901126102af576004356109f4816102c0565b6109fc61141e565b90600360005403610a6357610430916001610a3a60e093610a2d610a1e611011565b602080825183010191016118f9565b50828060a01b0316611301565b51610a4481610474565b610a4d81610474565b1491018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b50346102af5760003660031901126102af576020600154604051908152f35b50346102af5760003660031901126102af57610ab561141e565b600360005403610ad3576101006020916101806107d86107ca611011565b60405163100960cb60e01b815260086004820152602490fd5b50346102af5760003660031901126102af57610b0661141e565b600360005403610b24576101606020916101406107d86107ca611011565b60405163100960cb60e01b8152600b6004820152602490fd5b50346102af5760203660031901126102af57600435610b5b816102c0565b610b6361141e565b90600360005403610b9357610430916001610a3a61014093610b86610a1e611011565b50828060a01b03166113cd565b60405163100960cb60e01b8152600a6004820152602490fd5b5060403660031901126102af57610430610780610220602435610bce816102c0565b610779610bd961141e565b8092610be3611237565b60043581526001600160a01b0391821660208201908152604051919290610c0983610f5a565b610c11611237565b83526020830193610c206114b7565b855251835152511660208251015260068251525160e082510152610769611595565b50346102af57600080600319360112610cb4578054610c5f611011565b906040519283918252602090604082840152835191826040850152815b838110610c9d57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610c7c565b80fd5b50346102af5760203660031901126102af576104306101e0600435610cdb816102c0565b610ce361141e565b90610cf2600360005414612ced565b610cfd610a1e611011565b506001600160a01b0316610d10816111b4565b51610d1a81610474565b610d2381610474565b600090600103610d515750610d396040916111b4565b01519182915b01526040519081529081906020820190565b9050918291610d3f565b50346102af5760203660031901126102af5761043061053f600435610d7f816102c0565b610d87611147565b506113cd565b50346102af5760003660031901126102af57610da761141e565b600360005403610dc45761018060209160e06107d86107ca611011565b60405163100960cb60e01b8152600c6004820152602490fd5b50346102af57610430610200610df2366102d1565b90610dfb61141e565b91610e3e610387610e0a611237565b9260018060a01b0380951684526020948585019116815261038161037a610e2f613863565b9561035a600360005414612d0d565b818101906000825152600083835101528051916001610e6b6103d960405195866103bd8982019283611b64565b610e7481610474565b03610eb05750604091610e979151906103d18451918261040b8882019586611b64565b0151015191018190526040519081529081906020820190565b91505051610d39565b50346102af5760003660031901126102af57610ed361141e565b600360005403610ef0576101a060209160c06107d86107ca611011565b60405163100960cb60e01b8152600d6004820152602490fd5b90600182811c92168015610f39575b6020831014610f2357565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f18565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f7557604052565b610f7d610f43565b604052565b602081019081106001600160401b03821117610f7557604052565b606081019081106001600160401b03821117610f7557604052565b60e081019081106001600160401b03821117610f7557604052565b60a081019081106001600160401b03821117610f7557604052565b601f909101601f19168101906001600160401b03821190821017610f7557604052565b604051906000826002549161102583610f09565b808352600193808516908115611099575060011461104b575b5061048692500383610fee565b600260009081526000805160206139c883398151915294602093509091905b81831061108157505061048693508201013861103e565b8554888401850152948501948794509183019161106a565b905061048694506020925060ff191682840152151560051b8201013861103e565b6040519061012082016001600160401b03811183821017610f7557604052565b6040519061026082016001600160401b03811183821017610f7557604052565b6040519061036082016001600160401b03811183821017610f7557604052565b604051906101a082016001600160401b03811183821017610f7557604052565b6040519061048682610f9d565b6040519061115482610f9d565b60006040838281528260208201520152565b6001600160a01b0316600090815260096020526040902090565b6001600160a01b0316600090815260086020526040902090565b6001600160a01b0316600090815260056020526040902090565b906111bd611147565b9160018060a01b03166000908082526005602052600160ff6040842054166111e481610474565b0361122c576040929350815260056020522060016040519161120583610f9d565b60ff815481811661121581610474565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061124482610f5a565b60006020838281520152565b6040519061125d82610f9d565b8160008152600060208201526040611273611237565b910152565b90611281611250565b916000908082526006602052600160ff6040842054166112a081610474565b0361122c5760409293508152600660205220604051906112bf82610f9d565b60ff81548181166112cf81610474565b845260081c16151560208301526002604051916112eb83610f5a565b6001810154835201546020820152604082015290565b9061130a611147565b9160018060a01b03166000908082526007602052600160ff60408420541661133181610474565b0361122c576040929350815260076020522060ff6040519161135283610f9d565b5481811661135f81610474565b8352818160081c161515602084015260101c161515604082015290565b90611385611147565b9160018060a01b03166000908082526008602052600160ff6040842054166113ac81610474565b0361122c576040929350815260086020522060ff6040519161135283610f9d565b906113d6611147565b9160018060a01b03166000908082526009602052600160ff6040842054166113fd81610474565b0361122c576040929350815260096020522060ff6040519161135283610f9d565b6114266110da565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b604051906114b182610f82565b60008252565b6040519061012082016001600160401b03811183821017611545575b6040526000610100838281526040516114eb81610f82565b83815260208201526040516114ff81610f82565b838152604082015261150f611237565b60608201528260808201526115226114a4565b60a082015261152f611147565b60c082015261153c611237565b60e08201520152565b61154d610f43565b6114d3565b6040519061155f82610f5a565b8160405161156c81610f82565b60008152815260206112736114b7565b6001600160a01b039091169052565b6008111561047e57565b604051906115a282610f5a565b816000815260206112736114b7565b604051906115be82610fb8565b8160c06000918281528260208201526040516115d981610f5a565b6115e1611237565b815283602082015260408201528260608201528260808201528260a08201520152565b61160c6110fa565b906116156114a4565b825261161f6115b1565b602083015261162c6114a4565b60408301526116396115b1565b6060830152611646611237565b60808301526116536115b1565b60a08301526116606115b1565b60c083015261166d6114a4565b60e083015261167a6115b1565b610100830152611688611147565b610120830152600061014083015260006101608301526116a6611237565b6101808301526116b4611237565b6101a08301526116c2611237565b6101c08301526116d0611237565b6101e083015260006102008301526116e66115b1565b6102208301526116f4611237565b610240830152611702611237565b610260830152611710611237565b61028083015261171e611237565b6102a083015261172c611237565b6102c083015261173a611147565b6102e08301526117486115b1565b6103008301526117566115b1565b6103208301526117646115b1565b610340830152565b5190610486826102c0565b519061ffff19821682036102af57565b801515036102af57565b8092910391606083126102af57604051906117ab82610f5a565b60408294126102af57604060209181516117c481610f5a565b81518152838201518482015284520151916117de83611787565b0152565b919091610120818403126102af576040519060c0906101009060e084016001600160401b03811185821017611863575b60405261183a849682518652602083015161182c81611787565b602087015260408301611791565b604085015260a0810151606085015282810151608085015260e081015160a08501520151910152565b61186b610f43565b611812565b91908260609103126102af5760405161188881610f9d565b604080829480518452602081015160208501520151916117de83611787565b9080601f830112156102af57604051916118c083610f82565b82606092838301928184116102af57915b8383106118e057505050505090565b602085916118ee8486611870565b8152019201916118d1565b90610320828203126102af5761030061191061111a565b9261191a8161176c565b845261192860208201611777565b60208501526119396040820161176c565b604085015261194b83606083016117e2565b60608501526119b761018093611963818685016118a7565b60808701526101e083015160a087015261020083015160c087015261022083015160e08701526102408301516101008701526102608301516101208701526102808301516101408701526102a08301611870565b61016085015201519082015290565b6101c060206104869395946101e084019660018060a01b03168452805182850152015180516008811015611ab4575b60408401526020810151516001600160a01b031660608401526040810151516080840152606081015180516001600160a01b031660a08501526020015160c08401526080810151151560e084015260a0810151516001600160a01b0316610100848101919091529060c081015180516001600160a01b039081166101208701526020820151166101408601526040015161016085015260e08101518051610180860152602001516001600160a01b03166101a085015201511515910152565b611abc61045d565b6119f5565b516008811015611ace5790565b6102f661045d565b516001600160a01b031690565b60405190611af082610f82565b8160005b60208110611b00575050565b602090611b0b611147565b8184015201611af4565b60405190611b2282610fb8565b600060c083828152826020820152826040820152611b3e6115b1565b6060820152826080820152611b51611ae3565b60a08201520152565b516102f681610474565b81516001600160a01b039081168252602092830151169181019190915260400190565b90611b90611604565b611b9e600360005414612d2d565b6020611bb9611bab611011565b8280825183010191016118f9565b93611bd5611bd0611bcc60045460ff1690565b1590565b612d4d565b7f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac260405180611c058433836119c6565b0390a1611c1d81518015908115612c5e575b50612d6d565b01611c288151611ac1565b611c318161158b565b611dfd579260a0916020610486955101518152611c56611c5183516102b4565b6102b4565b3303611ddd57611c66600161304b565b611c70341561306b565b600060206040840195611c94611c8f611c8989516102b4565b336131fd565b61308b565b611ccb611cbe611ca48651611ad6565b6001600160a01b0316600090815260076020526040902090565b805460ff19166001179055565b611ce7611cdb611ca48651611ad6565b805462ff000019169055565b604051600081527f7d23214734718dd88c7a72499aa1d8fba93792196c2ffeef1a262b227855804190602090a101526020610120830151910190815152604060608301611d47611d3b602083510151151590565b60208551019015159052565b51015160408251015260e082015160608251015261014082015160808251015260c0820151838251015261010082015160c082510152611dbc611db3611d8b611b15565b95611d9f611d9986516102b4565b8861157c565b60208581015161ffff191690880152610381565b6040860161157c565b516060840152436080840152608081015182840152015160c08201526136e7565b611c666001611dee6103d933611301565b611df781610474565b1461304b565b6001611e098251611ac1565b611e128161158b565b03611fd85792611fa860a0926040610486965101519060408101918252611e3c611c5185516102b4565b3303611fb857611e4c6001612feb565b611e56341561300b565b6000604080860197611e7d611e78611e6e8b516102b4565b8751519033613258565b61302b565b8151600081527fb343f1d4f09fba2251a715610e023bc244dddd52f4e62594f1bd1036759c539090602090a101526060611ebf61012086015184515190612ca4565b910190815152604060608501611edc611d3b602083510151151590565b51015160408251015260e084015160608251015261014084015160808251015260c0840151858251015261010084015160c082510152611f51611f48611f20611b15565b97611f34611f2e88516102b4565b8a61157c565b60208781015161ffff1916908a0152610381565b6040880161157c565b5160608601524360808601526080830151906101808401519051510190611fa3610160850151611f8960406020830151920151151590565b90611f9261113a565b948552602085015215156040840152565b6132c2565b82840152015160c08201526136e7565b611e4c6001611fc96103d933611301565b611fd281610474565b14612feb565b6002611fe48251611ac1565b611fed8161158b565b03612102579260a0916000606080610486975101519560808401968752612017611c5186516102b4565b331483146120e2576120296001612f6b565b61203f6020885101516101808701511015612f8b565b6120493415612fab565b604085019661206361205e611c898a516102b4565b612fcb565b612078611cbe6120738351611ad6565b61119a565b51600161208d612073602084015193516102b4565b0155604051600081527f1977b6c4820ea2e69bc60bd54a7572a2bc9e62ae42bf30d94998e02990f64ac390602090a1015282610120830151910190815152604060608301611d47611d3b602083510151151590565b61202960016120f36103d933611301565b6120fc81610474565b14612f6b565b600361210e8251611ac1565b6121178161158b565b036121f657506104869260a09161213f33600180861b0361213885516102b4565b1614612f0b565b6121493415612f2b565b600060806040840195612167612162611c8989516102b4565b612f4b565b604051600081527f13ec431893556e72fb80cdb19b6ec9e68e532adcf1dd991513a3f82279465ef790602090a1015260c0610120830151910190815152600060208251015260406060830151015160408251015260e082015160608251015261014082015160808251015260c0820151838251015261010082015160c082510152611dbc611db3611d8b611b15565b60046122028251611ac1565b61220b8161158b565b03612314579260a09160008380610486975101519560e0840196875261223e612237611c5187516102b4565b3314612ead565b6122483415612ecb565b8261226f611ca46040880199612269612264611c898d516102b4565b612eeb565b51611ad6565b55604051600081527f7dcf4f584f4859c0fabf73eb3326255e7843bc1352a4af9fd4373252937ef6f190602090a1015261012082015190610100809101918251526040606084016122d36122c7602083510151151590565b60208651019015159052565b51015160408351015260e083015160608351015261014083015160808351015260c0830151848351015282015160c082510152611dbc611db3611d8b611b15565b60056123238294939451611ac1565b61232c8161158b565b0361270e579260a0916125e060c080610486975101519261236460406101209580878b01520151858701511061014089019015159052565b61239260016123836103d961237e611c51898d0151611ad6565b6113cd565b61238c81610474565b14612e4d565b610140870151156127075760408488015101515b6101608801526123b63415612e6d565b6123db6123d66123c960408801516102b4565b6101608a01519033613258565b612e8d565b6125306123ea85890151611ad6565b6123fa6101808a0191825161157c565b61241661240c6020888c015101611ad6565b602083510161157c565b600161251e6101a08b01600081515260006020825101528351908361245e6103d9604051948561244a602082019283611b64565b03956103d1601f1997888101835282610fee565b61246781610474565b0361270157506040612494855182516103d181612488602082019485611b64565b03868101835282610fee565b01515b6124c28d60408c60206101c084019580875251956101e0850196875152510151920151015190612ca4565b602082510152612504611cbe86516040516124f1816124e5602082019485611b64565b03878101835282610fee565b5190206000526006602052604060002090565b519351906124f1604051918261040b602082019586611b64565b01906020600191805184550151910155565b612542611cbe612073868a0151611ad6565b600161255e6103d9612559611c51888c0151611ad6565b6111b4565b61256781610474565b036126f7576125946040612583612559611c51888c0151611ad6565b01515b6040868a0151015190612ca4565b60016125a5612073878b0151611ad6565b0155604051600181527f839c468294b242dad9779d7c2cf45148e5566edd225330b4e980d7191ed146729080602081015b0390a10160019052565b610140840151156126e95781810151908401516040015161260091612ca4565b6102008401525b611fa86102008401519361022081019485515260406060840161263d612631602083510151151590565b60208951019015159052565b51015160408651015260e083015160608651015261014083015160808651015260c0830151848651015261010083015160c08651015261267b611b15565b9461268f61268985516102b4565b8761157c565b60208481015161ffff1916908701526126ae611f4860408601516102b4565b5160608601524360808601526080830151906101606101808501519101510190611fa3610160850151611f8960406020830151920151151590565b810151610200840152612607565b6125946000612586565b51612497565b60006123a6565b600661271d8294939451611ac1565b6127268161158b565b03612ba25760e090510151610240820190808252519161274e61018086019384511015612dcd565b600161275c6103d9336111b4565b61276581610474565b03612b98576127856040612778336111b4565b01515b8351511115612ded565b61278f3415612e0d565b6128ba61022060408701956127af6127aa611c8989516102b4565b612e2d565b61288761026085016127c233825161157c565b6127d261240c6020895101611ad6565b600161251e610280880160008151526000602082510152888451918b8561281c6103d96040519687612808602082019283611b64565b03976103d1601f19998a8101835282610fee565b61282581610474565b03612b84576124c291506128716020916102a0604061285e8b5182516103d1816128528a82019485611b64565b038c8101835282610fee565b0151955b01948086525190515190612ca4565b926102c08d01938451525101518c515190612cb8565b604051600181527f64b23cfb7218eb5850a94fc4fff525af4cb6a780f2edef9f25712116a14bb8579080602081016125d6565b6102e08101936128cb33865161157c565b8251516020865101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2361294f602088019661291c61290d895161ffff191690565b60408351019061ffff19169052565b516040805182516001600160a01b03168152602080840151908201529181015161ffff1916908201529081906060820190565b0390a160016129606103d93361137c565b61296981610474565b03612ab657926104869592611fa892612a82612a798761299961298e60a09a516102b4565b8651519033906130ab565b6129b16129a53361119a565b60016000918281550155565b6103206129c66101208a015187515190612cb8565b9401938451526040606089016129ef6129e3602083510151151590565b60208851019015159052565b510151604085510152612a0960e089015186515190612ca4565b606085510152610140880151608085510152612a2860c0890151612c81565b8985510152612a3b610100890151612c81565b60c085510152610381612a6d612a4f611b15565b9b612a648d612a5e8d516102b4565b9061157c565b5161ffff191690565b61ffff191660208c0152565b6040890161157c565b51606087015243608087015260808401519151905151900390611fa3610160850151611f8960406020830151920151151590565b926104869592611fa892612a82612a7960a097612ad5611cbe33611180565b612ae1611cdb33611180565b612aee61298e82516102b4565b612afa6129a53361119a565b610300612b0f6101208a015187515190612cb8565b940193845152604060608901612b2c6129e3602083510151151590565b510151604085510152612b4660e089015186515190612ca4565b606085510152610140880151608085510152612b6560c0890151612c81565b898551015261010088015160c085510152610381612a6d612a4f611b15565b6128716020916102a06124c2945195612862565b612785600061277b565b612bae60079151611ac1565b612bb78161158b565b14612bc157505050565b6104869260a091612bd23415612d8d565b60006102406040840195612bf1612bec611c8989516102b4565b612dad565b612bfd611cbe33611166565b612c09611cdb33611166565b604051600081527fafff68da903745c7789b35c6ebf4cc3b2818e3a9cc960a900a67ccd49129ecc090602090a10152610340610120830151910190815152604060608301611d47611d3b602083510151151590565b90506001541438611c17565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111612c97575b82106102af57565b612c9f612c6a565b612c8f565b9190820191828111612c975782106102af57565b908103908111612cc55790565b6102f6612c6a565b15612cd457565b60405163100960cb60e01b815260096004820152602490fd5b15612cf457565b60405163100960cb60e01b8152600f6004820152602490fd5b15612d1457565b60405163100960cb60e01b815260106004820152602490fd5b15612d3457565b60405163100960cb60e01b815260146004820152602490fd5b15612d5457565b60405163100960cb60e01b815260156004820152602490fd5b15612d7457565b60405163100960cb60e01b815260166004820152602490fd5b15612d9457565b60405163100960cb60e01b8152602e6004820152602490fd5b15612db457565b60405163100960cb60e01b8152602f6004820152602490fd5b15612dd457565b60405163100960cb60e01b8152602a6004820152602490fd5b15612df457565b60405163100960cb60e01b8152602b6004820152602490fd5b15612e1457565b60405163100960cb60e01b8152602c6004820152602490fd5b15612e3457565b60405163100960cb60e01b8152602d6004820152602490fd5b15612e5457565b60405163100960cb60e01b815260276004820152602490fd5b15612e7457565b60405163100960cb60e01b815260286004820152602490fd5b15612e9457565b60405163100960cb60e01b815260296004820152602490fd5b15612eb457565b602460405163100960cb60e01b8152816004820152fd5b15612ed257565b60405163100960cb60e01b815260256004820152602490fd5b15612ef257565b60405163100960cb60e01b815260266004820152602490fd5b15612f1257565b60405163100960cb60e01b815260216004820152602490fd5b15612f3257565b60405163100960cb60e01b815260226004820152602490fd5b15612f5257565b60405163100960cb60e01b815260236004820152602490fd5b15612f7257565b60405163100960cb60e01b8152601d6004820152602490fd5b15612f9257565b60405163100960cb60e01b8152601e6004820152602490fd5b15612fb257565b60405163100960cb60e01b8152601f6004820152602490fd5b15612fd257565b60405163100960cb60e01b815260206004820152602490fd5b15612ff257565b60405163100960cb60e01b8152601a6004820152602490fd5b1561301257565b60405163100960cb60e01b8152601b6004820152602490fd5b1561303257565b60405163100960cb60e01b8152601c6004820152602490fd5b1561305257565b60405163100960cb60e01b815260176004820152602490fd5b1561307257565b60405163100960cb60e01b815260186004820152602490fd5b1561309257565b60405163100960cb60e01b815260196004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261312793600093849392849190608081016001600160401b0381118282101761312e575b6040525193165af161311761311061313b565b809261319d565b5060208082518301019101613188565b156102af57565b613136610f43565b6130fd565b3d15613183573d906001600160401b038211613176575b6040519161316a601f8201601f191660200184610fee565b82523d6000602084013e565b61317e610f43565b613152565b606090565b908160209103126102af57516102f681611787565b156131a55790565b8051156131b457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156131d55790565b8051156131e457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60006102f6928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261324181610fd3565b5193165af161311761325161313b565b80926131cd565b6000916102f69383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261324181610fd3565b9060018110156132ac5760051b0190565b634e487b7160e01b600052603260045260246000fd5b91906132cc611ae3565b9260005b600181106132de5750508252565b806132eb6001928461329b565b516132f6828861329b565b52613301818761329b565b506000198114613312575b016132d0565b61331a612c6a565b61330c565b506040513d6000823e3d90fd5b818110613337575050565b6000815560010161332c565b61334e600254610f09565b806133565750565b601f811160011461336957506000600255565b60026000526133ae90601f0160051c6000805160206139c8833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61332c565b6000602081208160025555565b604051906101a082016001600160401b03811183821017613443575b604052816101806000918281528260208201528260408201526133f86115b1565b6060820152613405611ae3565b60808201528260a08201528260c08201528260e0820152826101008201528261012082015282610140820152613439611147565b6101608201520152565b61344b610f43565b6133d7565b60c061010091805184526020810151151560208501526020604082015161348560408701825160208091805184520151910152565b015115156080850152606081015160a085015260808101518285015260a081015160e08501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b600182106134df57505050565b60206060826134f160019487516134b2565b019301910190916134d2565b81516001600160a01b03168152610320810192916103009060208181015161ffff1916908401526040818101516001600160a01b03169084015261354960608201516060850190613450565b60808101519061355f61018092838601906134cd565b60a08101516101e085015260c081015161020085015260e08101516102208501526101008101516102408501526101208101516102608501526101408101516102808501526135b86101608201516102a08601906134b2565b0151910152565b90601f82116135cc575050565b6104869160026000526020600020906020601f840160051c830193106135fa575b601f0160051c019061332c565b90915081906135ed565b80519091906001600160401b0381116136da575b61362c81613627600254610f09565b6135bf565b602080601f8311600114613668575081929360009261365d575b50508160011b916000199060031b1c191617600255565b015190503880613646565b6002600052601f198316949091906000805160206139c8833981519152926000905b8782106136c25750508360019596106136a9575b505050811b01600255565b015160001960f88460031b161c1916905538808061369e565b8060018596829496860151815501950193019061368a565b6136e2610f43565b613618565b60608101906136fa602083510151151590565b156137dd576137d8610486926137ca9260806137146133bb565b9261372861372284516102b4565b8561157c565b60208381015161ffff191690850152613747611db360408501516102b4565b8051606085015260c060a0840193845184870152015160a085015260a08151015160c085015260608151015160e085015260c0815101516101008501528051516101208501525101516101408301528051516101608301525151516101808201526137b26003600055565b6137bb43600155565b604051928391602083016134fd565b03601f198101835282610fee565b613604565b613837915060008080806137f4611c5186516102b4565b60c08601519082821561385a575bf11561384d575b61381660408201516102b4565b60a061382283516102b4565b9201515151916001600160a01b0316906130ab565b600080556138456000600155565b610486613343565b61385561331f565b613809565b506108fc613802565b6040519061387082610f5a565b81613879611237565b81526020611273611237565b6024359060088210156102af57565b60209060431901126102af57604051906138ad82610f82565b604435826138ba826102c0565b52565b60209060e31901126102af57604051906138d682610f82565b60e435826138ba826102c0565b60209060631901126102af57604051906138fc82610f82565b6064358252565b60409060831901126102af576040519061391c82610f5a565b81608435613929816102c0565b8152602060a435910152565b60c4359061048682611787565b6101a4359061048682611787565b6060906101031901126102af576040519061396a82610f9d565b8161010435613978816102c0565b815261012435613987816102c0565b6020820152604061014435910152565b6040906101631901126102af57604051906139b182610f5a565b610164358252610184356020836117de836102c056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 18361,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './token.rsh:333:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './token.rsh:81:37:after expr stmt semicolon',
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
