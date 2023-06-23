// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Data({
    None: ctc6,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  const map1_ctc = ctc9;
  
  const map2_ctc = ctc10;
  
  const map3_ctc = ctc10;
  
  const map4_ctc = ctc10;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async (_v739 ) => {
          const v739 = stdlib.protect(ctc0, _v739, null);
        
        const v740 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v739, ctc6), null);
        const v741 = {
          None: 0,
          Some: 1
          }[v740[0]];
        const v742 = stdlib.eq(v741, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v742;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async () => {
        
        
        return v754;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async (_v743 ) => {
          const v743 = stdlib.protect(ctc0, _v743, null);
        
        const v744 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v743, ctc6), null);
        const v745 = {
          None: 0,
          Some: 1
          }[v744[0]];
        const v746 = stdlib.eq(v745, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v746;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_rewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async (_v736 ) => {
          const v736 = stdlib.protect(ctc0, _v736, null);
        
        const v737 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v736, ctc2), null);
        const v738 = stdlib.fromSome(v737, stdlib.checkedBigNumberify('./main.rsh:63:49:decimal', stdlib.UInt_max, '0'));
        
        return v738;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async () => {
        
        
        return v779;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async () => {
        
        
        return v778;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async () => {
        
        
        return v780;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = svs;
      return (await ((async () => {
        
        
        return v781;}))(...args));
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
  const ctc3 = stdlib.T_Token;
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
  const ctc3 = stdlib.T_Token;
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
  const ctc12 = stdlib.T_Tuple([ctc6, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Data({
    Admin_endContractAndTransfer0_94: ctc11,
    Admin_setNft0_94: ctc12,
    Admin_setReward0_94: ctc13,
    User_claimAll0_94: ctc11,
    User_optin0_94: ctc11
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
  
  
  const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v836 = ctc.selfAddress();
  const v838 = stdlib.protect(ctc11, await interact.in(), {
    at: './main.rsh:1:23:application',
    fs: ['at ./main.rsh:211:44:application call to [unknown function] (defined at: ./main.rsh:211:44:function exp)', 'at ./main.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_94" (defined at: ./main.rsh:211:10:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v839 = stdlib.addressEq(v730, v836);
  stdlib.assert(v839, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./main.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./main.rsh:211:44:application call to [unknown function] (defined at: ./main.rsh:211:44:function exp)', 'at ./main.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_94" (defined at: ./main.rsh:211:10:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v844 = ['Admin_endContractAndTransfer0_94', v838];
  
  const txn1 = await (ctc.sendrecv({
    args: [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781, v844],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./main.rsh:214:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
      
      switch (v864[0]) {
        case 'Admin_endContractAndTransfer0_94': {
          const v867 = v864[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v893 = null;
          const v894 = await txn1.getOutput('Admin_endContractAndTransfer', 'v893', ctc0, v893);
          
          const v906 = {
            bal: v775,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v781
            };
          const v3217 = v754;
          const v3218 = v906.keepGoing;
          if (v3218) {
            const v3219 = v906.bal;
            const v3221 = v906.percent;
            const v3222 = v906.total_amount_claimed;
            const v3223 = v906.total_rewards_allcoated;
            const v3224 = v906.total_users_claim;
            const v3225 = v906.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v3230 = stdlib.sub(v754, v754);
            sim_r.txns.push({
              kind: 'from',
              to: v730,
              tok: undefined /* Nothing */
              });
            const v3231 = (stdlib.le(await ctc.getBalance(), v3230) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3230));
            sim_r.txns.push({
              kind: 'from',
              to: v730,
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
        case 'Admin_setNft0_94': {
          const v1120 = v864[1];
          
          break;
          }
        case 'Admin_setReward0_94': {
          const v1373 = v864[1];
          
          break;
          }
        case 'User_claimAll0_94': {
          const v1626 = v864[1];
          
          break;
          }
        case 'User_optin0_94': {
          const v1879 = v864[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
  switch (v864[0]) {
    case 'Admin_endContractAndTransfer0_94': {
      const v867 = v864[1];
      undefined /* setApiDetails */;
      const v872 = stdlib.addressEq(v730, v863);
      stdlib.assert(v872, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./main.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./main.rsh:211:44:application call to [unknown function] (defined at: ./main.rsh:211:44:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:211:44:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v893 = null;
      const v894 = await txn1.getOutput('Admin_endContractAndTransfer', 'v893', ctc0, v893);
      if (v417) {
        stdlib.protect(ctc0, await interact.out(v867, v894), {
          at: './main.rsh:211:11:application',
          fs: ['at ./main.rsh:211:11:application call to [unknown function] (defined at: ./main.rsh:211:11:function exp)', 'at ./main.rsh:216:14:application call to "ret" (defined at: ./main.rsh:215:15:function exp)', 'at ./main.rsh:215:15:application call to [unknown function] (defined at: ./main.rsh:215:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v906 = {
        bal: v775,
        keepGoing: v776,
        percent: v777,
        total_amount_claimed: v778,
        total_rewards_allcoated: v779,
        total_users_claim: v780,
        usersNo: v781
        };
      const v3217 = v754;
      const v3218 = v906.keepGoing;
      if (v3218) {
        const v3219 = v906.bal;
        const v3221 = v906.percent;
        const v3222 = v906.total_amount_claimed;
        const v3223 = v906.total_rewards_allcoated;
        const v3224 = v906.total_users_claim;
        const v3225 = v906.usersNo;
        return;
        }
      else {
        const v3230 = stdlib.sub(v754, v754);
        ;
        const v3231 = (stdlib.le(await ctc.getBalance(), v3230) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3230));
        ;
        return;
        }
      break;
      }
    case 'Admin_setNft0_94': {
      const v1120 = v864[1];
      return;
      break;
      }
    case 'Admin_setReward0_94': {
      const v1373 = v864[1];
      return;
      break;
      }
    case 'User_claimAll0_94': {
      const v1626 = v864[1];
      return;
      break;
      }
    case 'User_optin0_94': {
      const v1879 = v864[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_setNft3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_setNft3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_setNft3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
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
  const ctc11 = stdlib.T_Tuple([ctc6, ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Data({
    Admin_endContractAndTransfer0_94: ctc12,
    Admin_setNft0_94: ctc11,
    Admin_setReward0_94: ctc13,
    User_claimAll0_94: ctc12,
    User_optin0_94: ctc12
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
  
  
  const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v785 = stdlib.protect(ctc11, await interact.in(), {
    at: './main.rsh:1:23:application',
    fs: ['at ./main.rsh:97:37:application call to [unknown function] (defined at: ./main.rsh:97:37:function exp)', 'at ./main.rsh:70:37:application call to "runAdmin_setNft0_94" (defined at: ./main.rsh:97:10:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_setNft'
    });
  const v797 = ['Admin_setNft0_94', v785];
  
  const txn1 = await (ctc.sendrecv({
    args: [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781, v797],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./main.rsh:99:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
      
      switch (v864[0]) {
        case 'Admin_endContractAndTransfer0_94': {
          const v867 = v864[1];
          
          break;
          }
        case 'Admin_setNft0_94': {
          const v1120 = v864[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setNft"
            });
          ;
          const v1162 = v1120[stdlib.checkedBigNumberify('./main.rsh:97:10:spread', stdlib.UInt_max, '0')];
          const v1163 = v1120[stdlib.checkedBigNumberify('./main.rsh:97:10:spread', stdlib.UInt_max, '1')];
          const v1168 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v1162, ctc0), null);
          const v1169 = {
            None: 0,
            Some: 1
            }[v1168[0]];
          const v1170 = stdlib.eq(v1169, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1170) {
            await stdlib.simMapSet(sim_r, 1, ctc6, v1162, ctc3, v1163);
            const v1171 = true;
            const v1172 = await txn1.getOutput('Admin_setNft', 'v1171', ctc8, v1171);
            
            const v1186 = {
              bal: v775,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v778,
              total_rewards_allcoated: v779,
              total_users_claim: v780,
              usersNo: v781
              };
            const v3404 = v754;
            const v3405 = v1186.keepGoing;
            if (v3405) {
              const v3406 = v1186.bal;
              const v3408 = v1186.percent;
              const v3409 = v1186.total_amount_claimed;
              const v3410 = v1186.total_rewards_allcoated;
              const v3411 = v1186.total_users_claim;
              const v3412 = v1186.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v3417 = stdlib.sub(v754, v754);
              sim_r.txns.push({
                kind: 'from',
                to: v730,
                tok: undefined /* Nothing */
                });
              const v3418 = (stdlib.le(await ctc.getBalance(), v3417) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3417));
              sim_r.txns.push({
                kind: 'from',
                to: v730,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1188 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
            null;
            const v1189 = false;
            const v1190 = await txn1.getOutput('Admin_setNft', 'v1189', ctc8, v1189);
            
            const v1204 = {
              bal: v775,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v778,
              total_rewards_allcoated: v779,
              total_users_claim: v780,
              usersNo: v781
              };
            const v3421 = v754;
            const v3422 = v1204.keepGoing;
            if (v3422) {
              const v3423 = v1204.bal;
              const v3425 = v1204.percent;
              const v3426 = v1204.total_amount_claimed;
              const v3427 = v1204.total_rewards_allcoated;
              const v3428 = v1204.total_users_claim;
              const v3429 = v1204.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v3434 = stdlib.sub(v754, v754);
              sim_r.txns.push({
                kind: 'from',
                to: v730,
                tok: undefined /* Nothing */
                });
              const v3435 = (stdlib.le(await ctc.getBalance(), v3434) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3434));
              sim_r.txns.push({
                kind: 'from',
                to: v730,
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
        case 'Admin_setReward0_94': {
          const v1373 = v864[1];
          
          break;
          }
        case 'User_claimAll0_94': {
          const v1626 = v864[1];
          
          break;
          }
        case 'User_optin0_94': {
          const v1879 = v864[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
  switch (v864[0]) {
    case 'Admin_endContractAndTransfer0_94': {
      const v867 = v864[1];
      return;
      break;
      }
    case 'Admin_setNft0_94': {
      const v1120 = v864[1];
      undefined /* setApiDetails */;
      ;
      const v1162 = v1120[stdlib.checkedBigNumberify('./main.rsh:97:10:spread', stdlib.UInt_max, '0')];
      const v1163 = v1120[stdlib.checkedBigNumberify('./main.rsh:97:10:spread', stdlib.UInt_max, '1')];
      const v1168 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v1162, ctc0), null);
      const v1169 = {
        None: 0,
        Some: 1
        }[v1168[0]];
      const v1170 = stdlib.eq(v1169, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1170) {
        await stdlib.mapSet(map1, ctc6, v1162, ctc3, v1163);
        const v1171 = true;
        const v1172 = await txn1.getOutput('Admin_setNft', 'v1171', ctc8, v1171);
        if (v417) {
          stdlib.protect(ctc0, await interact.out(v1120, v1172), {
            at: './main.rsh:97:11:application',
            fs: ['at ./main.rsh:97:11:application call to [unknown function] (defined at: ./main.rsh:97:11:function exp)', 'at ./main.rsh:104:16:application call to "ret" (defined at: ./main.rsh:100:15:function exp)', 'at ./main.rsh:100:15:application call to [unknown function] (defined at: ./main.rsh:100:15:function exp)'],
            msg: 'out',
            who: 'Admin_setNft'
            });
          }
        else {
          }
        
        const v1186 = {
          bal: v775,
          keepGoing: v776,
          percent: v777,
          total_amount_claimed: v778,
          total_rewards_allcoated: v779,
          total_users_claim: v780,
          usersNo: v781
          };
        const v3404 = v754;
        const v3405 = v1186.keepGoing;
        if (v3405) {
          const v3406 = v1186.bal;
          const v3408 = v1186.percent;
          const v3409 = v1186.total_amount_claimed;
          const v3410 = v1186.total_rewards_allcoated;
          const v3411 = v1186.total_users_claim;
          const v3412 = v1186.usersNo;
          return;
          }
        else {
          const v3417 = stdlib.sub(v754, v754);
          ;
          const v3418 = (stdlib.le(await ctc.getBalance(), v3417) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3417));
          ;
          return;
          }}
      else {
        const v1188 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
        null;
        const v1189 = false;
        const v1190 = await txn1.getOutput('Admin_setNft', 'v1189', ctc8, v1189);
        if (v417) {
          stdlib.protect(ctc0, await interact.out(v1120, v1190), {
            at: './main.rsh:97:11:application',
            fs: ['at ./main.rsh:97:11:application call to [unknown function] (defined at: ./main.rsh:97:11:function exp)', 'at ./main.rsh:115:16:application call to "ret" (defined at: ./main.rsh:100:15:function exp)', 'at ./main.rsh:100:15:application call to [unknown function] (defined at: ./main.rsh:100:15:function exp)'],
            msg: 'out',
            who: 'Admin_setNft'
            });
          }
        else {
          }
        
        const v1204 = {
          bal: v775,
          keepGoing: v776,
          percent: v777,
          total_amount_claimed: v778,
          total_rewards_allcoated: v779,
          total_users_claim: v780,
          usersNo: v781
          };
        const v3421 = v754;
        const v3422 = v1204.keepGoing;
        if (v3422) {
          const v3423 = v1204.bal;
          const v3425 = v1204.percent;
          const v3426 = v1204.total_amount_claimed;
          const v3427 = v1204.total_rewards_allcoated;
          const v3428 = v1204.total_users_claim;
          const v3429 = v1204.usersNo;
          return;
          }
        else {
          const v3434 = stdlib.sub(v754, v754);
          ;
          const v3435 = (stdlib.le(await ctc.getBalance(), v3434) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3434));
          ;
          return;
          }}
      break;
      }
    case 'Admin_setReward0_94': {
      const v1373 = v864[1];
      return;
      break;
      }
    case 'User_claimAll0_94': {
      const v1626 = v864[1];
      return;
      break;
      }
    case 'User_optin0_94': {
      const v1879 = v864[1];
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
  const ctc3 = stdlib.T_Token;
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
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc3]);
  const ctc14 = stdlib.T_Data({
    Admin_endContractAndTransfer0_94: ctc12,
    Admin_setNft0_94: ctc13,
    Admin_setReward0_94: ctc11,
    User_claimAll0_94: ctc12,
    User_optin0_94: ctc12
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
  
  
  const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v801 = stdlib.protect(ctc11, await interact.in(), {
    at: './main.rsh:1:23:application',
    fs: ['at ./main.rsh:121:40:application call to [unknown function] (defined at: ./main.rsh:121:40:function exp)', 'at ./main.rsh:70:37:application call to "runAdmin_setReward0_94" (defined at: ./main.rsh:121:10:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v803 = v801[stdlib.checkedBigNumberify('./main.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v806 = stdlib.gt(v803, v775);
  const v814 = ['Admin_setReward0_94', v801];
  
  const v856 = v806 ? v803 : stdlib.checkedBigNumberify('./main.rsh:124:30:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781, v814],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v856, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
      
      switch (v864[0]) {
        case 'Admin_endContractAndTransfer0_94': {
          const v867 = v864[1];
          
          break;
          }
        case 'Admin_setNft0_94': {
          const v1120 = v864[1];
          
          break;
          }
        case 'Admin_setReward0_94': {
          const v1373 = v864[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v1385 = v1373[stdlib.checkedBigNumberify('./main.rsh:121:10:spread', stdlib.UInt_max, '1')];
          const v1386 = stdlib.gt(v1385, v775);
          const v1387 = v1386 ? v1385 : stdlib.checkedBigNumberify('./main.rsh:124:30:decimal', stdlib.UInt_max, '0');
          const v1395 = stdlib.add(v754, v1387);
          sim_r.txns.push({
            amt: v1387,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1460 = v1373[stdlib.checkedBigNumberify('./main.rsh:121:10:spread', stdlib.UInt_max, '0')];
          const v1465 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v1460, ctc1), null);
          const v1466 = stdlib.fromSome(v1465, stdlib.checkedBigNumberify('./main.rsh:126:60:decimal', stdlib.UInt_max, '0'));
          const v1467 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v1460, ctc0), null);
          const v1468 = {
            None: 0,
            Some: 1
            }[v1467[0]];
          const v1469 = stdlib.eq(v1468, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1469) {
            const v1470 = stdlib.safeAdd(v1466, v1385);
            await stdlib.simMapSet(sim_r, 0, ctc6, v1460, ctc1, v1470);
            const v1471 = true;
            const v1472 = await txn1.getOutput('Admin_setReward', 'v1471', ctc8, v1471);
            
            let v1486;
            if (v1386) {
              const v1487 = stdlib.safeAdd(v775, v1385);
              v1486 = v1487;
              }
            else {
              v1486 = v775;
              }
            const v1488 = {
              bal: v1486,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v778,
              total_rewards_allcoated: v779,
              total_users_claim: v780,
              usersNo: v781
              };
            const v3608 = v1395;
            const v3609 = v1488.keepGoing;
            if (v3609) {
              const v3610 = v1488.bal;
              const v3612 = v1488.percent;
              const v3613 = v1488.total_amount_claimed;
              const v3614 = v1488.total_rewards_allcoated;
              const v3615 = v1488.total_users_claim;
              const v3616 = v1488.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v3621 = stdlib.sub(v1395, v1395);
              sim_r.txns.push({
                kind: 'from',
                to: v730,
                tok: undefined /* Nothing */
                });
              const v3622 = (stdlib.le(await ctc.getBalance(), v3621) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3621));
              sim_r.txns.push({
                kind: 'from',
                to: v730,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            if (v1386) {
              const v1490 = 'Your user hasn\'t opted in                                                                                                                                                                               ';
              null;
              const v1491 = false;
              const v1492 = await txn1.getOutput('Admin_setReward', 'v1491', ctc8, v1491);
              
              const v1507 = stdlib.safeAdd(v775, v1385);
              const v1508 = {
                bal: v1507,
                keepGoing: v776,
                percent: v777,
                total_amount_claimed: v778,
                total_rewards_allcoated: v779,
                total_users_claim: v780,
                usersNo: v781
                };
              const v3625 = v1395;
              const v3626 = v1508.keepGoing;
              if (v3626) {
                const v3627 = v1508.bal;
                const v3629 = v1508.percent;
                const v3630 = v1508.total_amount_claimed;
                const v3631 = v1508.total_rewards_allcoated;
                const v3632 = v1508.total_users_claim;
                const v3633 = v1508.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v3638 = stdlib.sub(v1395, v1395);
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
                  tok: undefined /* Nothing */
                  });
                const v3639 = (stdlib.le(await ctc.getBalance(), v3638) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3638));
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1510 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
              null;
              const v1511 = false;
              const v1512 = await txn1.getOutput('Admin_setReward', 'v1511', ctc8, v1511);
              
              const v1528 = {
                bal: v775,
                keepGoing: v776,
                percent: v777,
                total_amount_claimed: v778,
                total_rewards_allcoated: v779,
                total_users_claim: v780,
                usersNo: v781
                };
              const v3642 = v1395;
              const v3643 = v1528.keepGoing;
              if (v3643) {
                const v3644 = v1528.bal;
                const v3646 = v1528.percent;
                const v3647 = v1528.total_amount_claimed;
                const v3648 = v1528.total_rewards_allcoated;
                const v3649 = v1528.total_users_claim;
                const v3650 = v1528.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v3655 = stdlib.sub(v1395, v1395);
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
                  tok: undefined /* Nothing */
                  });
                const v3656 = (stdlib.le(await ctc.getBalance(), v3655) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3655));
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
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
        case 'User_claimAll0_94': {
          const v1626 = v864[1];
          
          break;
          }
        case 'User_optin0_94': {
          const v1879 = v864[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
  switch (v864[0]) {
    case 'Admin_endContractAndTransfer0_94': {
      const v867 = v864[1];
      return;
      break;
      }
    case 'Admin_setNft0_94': {
      const v1120 = v864[1];
      return;
      break;
      }
    case 'Admin_setReward0_94': {
      const v1373 = v864[1];
      undefined /* setApiDetails */;
      const v1385 = v1373[stdlib.checkedBigNumberify('./main.rsh:121:10:spread', stdlib.UInt_max, '1')];
      const v1386 = stdlib.gt(v1385, v775);
      const v1387 = v1386 ? v1385 : stdlib.checkedBigNumberify('./main.rsh:124:30:decimal', stdlib.UInt_max, '0');
      const v1395 = stdlib.add(v754, v1387);
      ;
      const v1460 = v1373[stdlib.checkedBigNumberify('./main.rsh:121:10:spread', stdlib.UInt_max, '0')];
      const v1465 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v1460, ctc1), null);
      const v1466 = stdlib.fromSome(v1465, stdlib.checkedBigNumberify('./main.rsh:126:60:decimal', stdlib.UInt_max, '0'));
      const v1467 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v1460, ctc0), null);
      const v1468 = {
        None: 0,
        Some: 1
        }[v1467[0]];
      const v1469 = stdlib.eq(v1468, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1469) {
        const v1470 = stdlib.safeAdd(v1466, v1385);
        await stdlib.mapSet(map0, ctc6, v1460, ctc1, v1470);
        const v1471 = true;
        const v1472 = await txn1.getOutput('Admin_setReward', 'v1471', ctc8, v1471);
        if (v417) {
          stdlib.protect(ctc0, await interact.out(v1373, v1472), {
            at: './main.rsh:121:11:application',
            fs: ['at ./main.rsh:121:11:application call to [unknown function] (defined at: ./main.rsh:121:11:function exp)', 'at ./main.rsh:129:16:application call to "ret" (defined at: ./main.rsh:125:15:function exp)', 'at ./main.rsh:125:15:application call to [unknown function] (defined at: ./main.rsh:125:15:function exp)'],
            msg: 'out',
            who: 'Admin_setReward'
            });
          }
        else {
          }
        
        let v1486;
        if (v1386) {
          const v1487 = stdlib.safeAdd(v775, v1385);
          v1486 = v1487;
          }
        else {
          v1486 = v775;
          }
        const v1488 = {
          bal: v1486,
          keepGoing: v776,
          percent: v777,
          total_amount_claimed: v778,
          total_rewards_allcoated: v779,
          total_users_claim: v780,
          usersNo: v781
          };
        const v3608 = v1395;
        const v3609 = v1488.keepGoing;
        if (v3609) {
          const v3610 = v1488.bal;
          const v3612 = v1488.percent;
          const v3613 = v1488.total_amount_claimed;
          const v3614 = v1488.total_rewards_allcoated;
          const v3615 = v1488.total_users_claim;
          const v3616 = v1488.usersNo;
          return;
          }
        else {
          const v3621 = stdlib.sub(v1395, v1395);
          ;
          const v3622 = (stdlib.le(await ctc.getBalance(), v3621) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3621));
          ;
          return;
          }}
      else {
        if (v1386) {
          const v1490 = 'Your user hasn\'t opted in                                                                                                                                                                               ';
          null;
          const v1491 = false;
          const v1492 = await txn1.getOutput('Admin_setReward', 'v1491', ctc8, v1491);
          if (v417) {
            stdlib.protect(ctc0, await interact.out(v1373, v1492), {
              at: './main.rsh:121:11:application',
              fs: ['at ./main.rsh:121:11:application call to [unknown function] (defined at: ./main.rsh:121:11:function exp)', 'at ./main.rsh:136:16:application call to "ret" (defined at: ./main.rsh:125:15:function exp)', 'at ./main.rsh:125:15:application call to [unknown function] (defined at: ./main.rsh:125:15:function exp)'],
              msg: 'out',
              who: 'Admin_setReward'
              });
            }
          else {
            }
          
          const v1507 = stdlib.safeAdd(v775, v1385);
          const v1508 = {
            bal: v1507,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v781
            };
          const v3625 = v1395;
          const v3626 = v1508.keepGoing;
          if (v3626) {
            const v3627 = v1508.bal;
            const v3629 = v1508.percent;
            const v3630 = v1508.total_amount_claimed;
            const v3631 = v1508.total_rewards_allcoated;
            const v3632 = v1508.total_users_claim;
            const v3633 = v1508.usersNo;
            return;
            }
          else {
            const v3638 = stdlib.sub(v1395, v1395);
            ;
            const v3639 = (stdlib.le(await ctc.getBalance(), v3638) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3638));
            ;
            return;
            }}
        else {
          const v1510 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
          null;
          const v1511 = false;
          const v1512 = await txn1.getOutput('Admin_setReward', 'v1511', ctc8, v1511);
          if (v417) {
            stdlib.protect(ctc0, await interact.out(v1373, v1512), {
              at: './main.rsh:121:11:application',
              fs: ['at ./main.rsh:121:11:application call to [unknown function] (defined at: ./main.rsh:121:11:function exp)', 'at ./main.rsh:148:16:application call to "ret" (defined at: ./main.rsh:125:15:function exp)', 'at ./main.rsh:125:15:application call to [unknown function] (defined at: ./main.rsh:125:15:function exp)'],
              msg: 'out',
              who: 'Admin_setReward'
              });
            }
          else {
            }
          
          const v1528 = {
            bal: v775,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v781
            };
          const v3642 = v1395;
          const v3643 = v1528.keepGoing;
          if (v3643) {
            const v3644 = v1528.bal;
            const v3646 = v1528.percent;
            const v3647 = v1528.total_amount_claimed;
            const v3648 = v1528.total_rewards_allcoated;
            const v3649 = v1528.total_users_claim;
            const v3650 = v1528.usersNo;
            return;
            }
          else {
            const v3655 = stdlib.sub(v1395, v1395);
            ;
            const v3656 = (stdlib.le(await ctc.getBalance(), v3655) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3655));
            ;
            return;
            }}}
      break;
      }
    case 'User_claimAll0_94': {
      const v1626 = v864[1];
      return;
      break;
      }
    case 'User_optin0_94': {
      const v1879 = v864[1];
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc11 = stdlib.T_Data({
    Admin_endContractAndTransfer0_94: ctc7,
    Admin_setNft0_94: ctc9,
    Admin_setReward0_94: ctc10,
    User_claimAll0_94: ctc7,
    User_optin0_94: ctc7
    });
  const ctc12 = stdlib.T_Bool;
  
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
  
  
  const v727 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v727],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./main.rsh:52:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./main.rsh:52:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v731], secs: v733, time: v732, didSend: v27, from: v730 } = txn1;
      
      ;
      const v734 = await ctc.getContractInfo();
      
      const v747 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v748 = {
        i: v747,
        sign: true
        };
      const v749 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v748,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v750 = v749;
      const v751 = v732;
      const v754 = stdlib.checkedBigNumberify('./main.rsh:47:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v767 = v750.keepGoing;
        
        return v767;})()) {
        const v775 = v750.bal;
        const v776 = v750.keepGoing;
        const v777 = v750.percent;
        const v778 = v750.total_amount_claimed;
        const v779 = v750.total_rewards_allcoated;
        const v780 = v750.total_users_claim;
        const v781 = v750.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v2144 = stdlib.sub(v754, v754);
        sim_r.txns.push({
          kind: 'from',
          to: v730,
          tok: undefined /* Nothing */
          });
        const v2146 = (stdlib.le(await ctc.getBalance(), v2144) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2144));
        sim_r.txns.push({
          kind: 'from',
          to: v730,
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
  const {data: [v731], secs: v733, time: v732, didSend: v27, from: v730 } = txn1;
  ;
  const v734 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v734), {
    at: './main.rsh:54:27:application',
    fs: ['at ./main.rsh:54:27:application call to [unknown function] (defined at: ./main.rsh:54:27:function exp)', 'at ./main.rsh:54:27:application call to "liftedInteract" (defined at: ./main.rsh:54:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v747 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v748 = {
    i: v747,
    sign: true
    };
  const v749 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v748,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v750 = v749;
  let v751 = v732;
  let v754 = stdlib.checkedBigNumberify('./main.rsh:47:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v767 = v750.keepGoing;
    
    return v767;})()) {
    const v775 = v750.bal;
    const v776 = v750.keepGoing;
    const v777 = v750.percent;
    const v778 = v750.total_amount_claimed;
    const v779 = v750.total_rewards_allcoated;
    const v780 = v750.total_users_claim;
    const v781 = v750.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn3;
    switch (v864[0]) {
      case 'Admin_endContractAndTransfer0_94': {
        const v867 = v864[1];
        undefined /* setApiDetails */;
        const v872 = stdlib.addressEq(v730, v863);
        stdlib.assert(v872, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./main.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./main.rsh:211:44:application call to [unknown function] (defined at: ./main.rsh:211:44:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:211:44:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        const v893 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v893', ctc0, v893);
        const v906 = {
          bal: v775,
          keepGoing: v776,
          percent: v777,
          total_amount_claimed: v778,
          total_rewards_allcoated: v779,
          total_users_claim: v780,
          usersNo: v781
          };
        const cv750 = v906;
        const cv751 = v865;
        const cv754 = v754;
        
        v750 = cv750;
        v751 = cv751;
        v754 = cv754;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setNft0_94': {
        const v1120 = v864[1];
        undefined /* setApiDetails */;
        ;
        const v1162 = v1120[stdlib.checkedBigNumberify('./main.rsh:97:10:spread', stdlib.UInt_max, '0')];
        const v1163 = v1120[stdlib.checkedBigNumberify('./main.rsh:97:10:spread', stdlib.UInt_max, '1')];
        const v1168 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc8, v1162, ctc0), null);
        const v1169 = {
          None: 0,
          Some: 1
          }[v1168[0]];
        const v1170 = stdlib.eq(v1169, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1170) {
          await stdlib.mapSet(map1, ctc8, v1162, ctc3, v1163);
          const v1171 = true;
          await txn3.getOutput('Admin_setNft', 'v1171', ctc12, v1171);
          const v1186 = {
            bal: v775,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v781
            };
          const cv750 = v1186;
          const cv751 = v865;
          const cv754 = v754;
          
          v750 = cv750;
          v751 = cv751;
          v754 = cv754;
          
          txn2 = txn3;
          continue;}
        else {
          const v1188 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
          null;
          const v1189 = false;
          await txn3.getOutput('Admin_setNft', 'v1189', ctc12, v1189);
          const v1204 = {
            bal: v775,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v781
            };
          const cv750 = v1204;
          const cv751 = v865;
          const cv754 = v754;
          
          v750 = cv750;
          v751 = cv751;
          v754 = cv754;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Admin_setReward0_94': {
        const v1373 = v864[1];
        undefined /* setApiDetails */;
        const v1385 = v1373[stdlib.checkedBigNumberify('./main.rsh:121:10:spread', stdlib.UInt_max, '1')];
        const v1386 = stdlib.gt(v1385, v775);
        const v1387 = v1386 ? v1385 : stdlib.checkedBigNumberify('./main.rsh:124:30:decimal', stdlib.UInt_max, '0');
        const v1395 = stdlib.add(v754, v1387);
        ;
        const v1460 = v1373[stdlib.checkedBigNumberify('./main.rsh:121:10:spread', stdlib.UInt_max, '0')];
        const v1465 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1460, ctc1), null);
        const v1466 = stdlib.fromSome(v1465, stdlib.checkedBigNumberify('./main.rsh:126:60:decimal', stdlib.UInt_max, '0'));
        const v1467 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc8, v1460, ctc0), null);
        const v1468 = {
          None: 0,
          Some: 1
          }[v1467[0]];
        const v1469 = stdlib.eq(v1468, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1469) {
          const v1470 = stdlib.safeAdd(v1466, v1385);
          await stdlib.mapSet(map0, ctc8, v1460, ctc1, v1470);
          const v1471 = true;
          await txn3.getOutput('Admin_setReward', 'v1471', ctc12, v1471);
          let v1486;
          if (v1386) {
            const v1487 = stdlib.safeAdd(v775, v1385);
            v1486 = v1487;
            }
          else {
            v1486 = v775;
            }
          const v1488 = {
            bal: v1486,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v781
            };
          const cv750 = v1488;
          const cv751 = v865;
          const cv754 = v1395;
          
          v750 = cv750;
          v751 = cv751;
          v754 = cv754;
          
          txn2 = txn3;
          continue;}
        else {
          if (v1386) {
            const v1490 = 'Your user hasn\'t opted in                                                                                                                                                                               ';
            null;
            const v1491 = false;
            await txn3.getOutput('Admin_setReward', 'v1491', ctc12, v1491);
            const v1507 = stdlib.safeAdd(v775, v1385);
            const v1508 = {
              bal: v1507,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v778,
              total_rewards_allcoated: v779,
              total_users_claim: v780,
              usersNo: v781
              };
            const cv750 = v1508;
            const cv751 = v865;
            const cv754 = v1395;
            
            v750 = cv750;
            v751 = cv751;
            v754 = cv754;
            
            txn2 = txn3;
            continue;}
          else {
            const v1510 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
            null;
            const v1511 = false;
            await txn3.getOutput('Admin_setReward', 'v1511', ctc12, v1511);
            const v1528 = {
              bal: v775,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v778,
              total_rewards_allcoated: v779,
              total_users_claim: v780,
              usersNo: v781
              };
            const cv750 = v1528;
            const cv751 = v865;
            const cv754 = v1395;
            
            v750 = cv750;
            v751 = cv751;
            v754 = cv754;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_claimAll0_94': {
        const v1626 = v864[1];
        undefined /* setApiDetails */;
        const v1642 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v863, ctc1), null);
        const v1643 = {
          None: 0,
          Some: 1
          }[v1642[0]];
        const v1644 = stdlib.eq(v1643, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1644, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./main.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./main.rsh:157:29:application call to [unknown function] (defined at: ./main.rsh:157:29:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:157:29:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
          msg: 'Cannot claim because you have not earned reward',
          who: 'Deployer'
          });
        ;
        const v1789 = stdlib.fromSome(v1642, stdlib.checkedBigNumberify('./main.rsh:165:60:decimal', stdlib.UInt_max, '0'));
        const v1791 = stdlib.gt(v754, v1789);
        const v1792 = v1791 ? v1789 : v754;
        const v1794 = stdlib.ge(v1789, v754);
        if (v1794) {
          null;
          const v1795 = false;
          await txn3.getOutput('User_claimAll', 'v1795', ctc12, v1795);
          const v1808 = stdlib.safeAdd(v781, stdlib.checkedBigNumberify('./main.rsh:170:57:decimal', stdlib.UInt_max, '1'));
          const v1809 = {
            bal: v775,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v1808
            };
          const cv750 = v1809;
          const cv751 = v865;
          const cv754 = v754;
          
          v750 = cv750;
          v751 = cv751;
          v754 = cv754;
          
          txn2 = txn3;
          continue;}
        else {
          const v1811 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v863, ctc0), null);
          const v1812 = {
            None: 0,
            Some: 1
            }[v1811[0]];
          const v1813 = stdlib.eq(v1812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1813) {
            const v1840 = true;
            await txn3.getOutput('User_claimAll', 'v1840', ctc12, v1840);
            const v1849 = stdlib.sub(v754, v1792);
            ;
            await stdlib.mapSet(map0, ctc8, v863, ctc1, undefined /* Nothing */);
            const v1857 = stdlib.safeSub(v775, v1792);
            const v1858 = stdlib.safeAdd(v780, stdlib.checkedBigNumberify('./main.rsh:193:54:decimal', stdlib.UInt_max, '1'));
            const v1859 = stdlib.safeAdd(v778, v1792);
            const v1860 = {
              bal: v1857,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v1859,
              total_rewards_allcoated: v779,
              total_users_claim: v1858,
              usersNo: v781
              };
            const cv750 = v1860;
            const cv751 = v865;
            const cv754 = v1849;
            
            v750 = cv750;
            v751 = cv751;
            v754 = cv754;
            
            txn2 = txn3;
            continue;}
          else {
            const v1815 = true;
            await txn3.getOutput('User_claimAll', 'v1815', ctc12, v1815);
            const v1821 = {
              addr: v863,
              amount: v1792,
              projectName: v731
              };
            null;
            await stdlib.mapSet(map3, ctc8, v863, ctc0, null);
            const v1826 = stdlib.sub(v754, v1792);
            ;
            await stdlib.mapSet(map0, ctc8, v863, ctc1, undefined /* Nothing */);
            const v1834 = stdlib.safeAdd(v781, stdlib.checkedBigNumberify('./main.rsh:181:34:decimal', stdlib.UInt_max, '1'));
            const v1835 = stdlib.safeSub(v775, v1792);
            const v1836 = stdlib.safeAdd(v780, stdlib.checkedBigNumberify('./main.rsh:183:54:decimal', stdlib.UInt_max, '1'));
            const v1837 = stdlib.safeAdd(v778, v1792);
            const v1838 = {
              bal: v1835,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v1837,
              total_rewards_allcoated: v779,
              total_users_claim: v1836,
              usersNo: v1834
              };
            const cv750 = v1838;
            const cv751 = v865;
            const cv754 = v1826;
            
            v750 = cv750;
            v751 = cv751;
            v754 = cv754;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_94': {
        const v1879 = v864[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map4, ctc8, v863, ctc0, null);
        const v2117 = null;
        await txn3.getOutput('User_optin', 'v2117', ctc0, v2117);
        const v2130 = {
          bal: v775,
          keepGoing: v776,
          percent: v777,
          total_amount_claimed: v778,
          total_rewards_allcoated: v779,
          total_users_claim: v780,
          usersNo: v781
          };
        const cv750 = v2130;
        const cv751 = v865;
        const cv754 = v754;
        
        v750 = cv750;
        v751 = cv751;
        v754 = cv754;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v2144 = stdlib.sub(v754, v754);
  ;
  const v2146 = (stdlib.le(await ctc.getBalance(), v2144) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2144));
  ;
  return;
  
  
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
  const ctc3 = stdlib.T_Token;
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
  const ctc12 = stdlib.T_Tuple([ctc6, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Data({
    Admin_endContractAndTransfer0_94: ctc11,
    Admin_setNft0_94: ctc12,
    Admin_setReward0_94: ctc13,
    User_claimAll0_94: ctc11,
    User_optin0_94: ctc11
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
  
  
  const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v816 = ctc.selfAddress();
  const v818 = stdlib.protect(ctc11, await interact.in(), {
    at: './main.rsh:1:23:application',
    fs: ['at ./main.rsh:157:29:application call to [unknown function] (defined at: ./main.rsh:157:29:function exp)', 'at ./main.rsh:70:37:application call to "runUser_claimAll0_94" (defined at: ./main.rsh:157:10:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_claimAll'
    });
  const v819 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v816, ctc1), null);
  const v820 = {
    None: 0,
    Some: 1
    }[v819[0]];
  const v821 = stdlib.eq(v820, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v821, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./main.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./main.rsh:157:29:application call to [unknown function] (defined at: ./main.rsh:157:29:function exp)', 'at ./main.rsh:70:37:application call to "runUser_claimAll0_94" (defined at: ./main.rsh:157:10:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
    msg: 'Cannot claim because you have not earned reward',
    who: 'User_claimAll'
    });
  const v826 = ['User_claimAll0_94', v818];
  
  const txn1 = await (ctc.sendrecv({
    args: [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781, v826],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./main.rsh:163:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
      
      switch (v864[0]) {
        case 'Admin_endContractAndTransfer0_94': {
          const v867 = v864[1];
          
          break;
          }
        case 'Admin_setNft0_94': {
          const v1120 = v864[1];
          
          break;
          }
        case 'Admin_setReward0_94': {
          const v1373 = v864[1];
          
          break;
          }
        case 'User_claimAll0_94': {
          const v1626 = v864[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimAll"
            });
          const v1642 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v863, ctc1), null);
          ;
          const v1789 = stdlib.fromSome(v1642, stdlib.checkedBigNumberify('./main.rsh:165:60:decimal', stdlib.UInt_max, '0'));
          const v1791 = stdlib.gt(v754, v1789);
          const v1792 = v1791 ? v1789 : v754;
          const v1794 = stdlib.ge(v1789, v754);
          if (v1794) {
            null;
            const v1795 = false;
            const v1796 = await txn1.getOutput('User_claimAll', 'v1795', ctc8, v1795);
            
            const v1808 = stdlib.safeAdd(v781, stdlib.checkedBigNumberify('./main.rsh:170:57:decimal', stdlib.UInt_max, '1'));
            const v1809 = {
              bal: v775,
              keepGoing: v776,
              percent: v777,
              total_amount_claimed: v778,
              total_rewards_allcoated: v779,
              total_users_claim: v780,
              usersNo: v1808
              };
            const v3829 = v754;
            const v3830 = v1809.keepGoing;
            if (v3830) {
              const v3831 = v1809.bal;
              const v3833 = v1809.percent;
              const v3834 = v1809.total_amount_claimed;
              const v3835 = v1809.total_rewards_allcoated;
              const v3836 = v1809.total_users_claim;
              const v3837 = v1809.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v3842 = stdlib.sub(v754, v754);
              sim_r.txns.push({
                kind: 'from',
                to: v730,
                tok: undefined /* Nothing */
                });
              const v3843 = (stdlib.le(await ctc.getBalance(), v3842) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3842));
              sim_r.txns.push({
                kind: 'from',
                to: v730,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1811 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v863, ctc0), null);
            const v1812 = {
              None: 0,
              Some: 1
              }[v1811[0]];
            const v1813 = stdlib.eq(v1812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            if (v1813) {
              const v1840 = true;
              const v1841 = await txn1.getOutput('User_claimAll', 'v1840', ctc8, v1840);
              
              const v1849 = stdlib.sub(v754, v1792);
              sim_r.txns.push({
                kind: 'from',
                to: v863,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, ctc6, v863, ctc1, undefined /* Nothing */);
              const v1857 = stdlib.safeSub(v775, v1792);
              const v1858 = stdlib.safeAdd(v780, stdlib.checkedBigNumberify('./main.rsh:193:54:decimal', stdlib.UInt_max, '1'));
              const v1859 = stdlib.safeAdd(v778, v1792);
              const v1860 = {
                bal: v1857,
                keepGoing: v776,
                percent: v777,
                total_amount_claimed: v1859,
                total_rewards_allcoated: v779,
                total_users_claim: v1858,
                usersNo: v781
                };
              const v3846 = v1849;
              const v3847 = v1860.keepGoing;
              if (v3847) {
                const v3848 = v1860.bal;
                const v3850 = v1860.percent;
                const v3851 = v1860.total_amount_claimed;
                const v3852 = v1860.total_rewards_allcoated;
                const v3853 = v1860.total_users_claim;
                const v3854 = v1860.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v3859 = stdlib.sub(v1849, v1849);
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
                  tok: undefined /* Nothing */
                  });
                const v3860 = (stdlib.le(await ctc.getBalance(), v3859) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3859));
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1815 = true;
              const v1816 = await txn1.getOutput('User_claimAll', 'v1815', ctc8, v1815);
              
              const v1821 = {
                addr: v863,
                amount: v1792,
                projectName: v731
                };
              null;
              await stdlib.simMapSet(sim_r, 3, ctc6, v863, ctc0, null);
              const v1826 = stdlib.sub(v754, v1792);
              sim_r.txns.push({
                kind: 'from',
                to: v863,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, ctc6, v863, ctc1, undefined /* Nothing */);
              const v1834 = stdlib.safeAdd(v781, stdlib.checkedBigNumberify('./main.rsh:181:34:decimal', stdlib.UInt_max, '1'));
              const v1835 = stdlib.safeSub(v775, v1792);
              const v1836 = stdlib.safeAdd(v780, stdlib.checkedBigNumberify('./main.rsh:183:54:decimal', stdlib.UInt_max, '1'));
              const v1837 = stdlib.safeAdd(v778, v1792);
              const v1838 = {
                bal: v1835,
                keepGoing: v776,
                percent: v777,
                total_amount_claimed: v1837,
                total_rewards_allcoated: v779,
                total_users_claim: v1836,
                usersNo: v1834
                };
              const v3863 = v1826;
              const v3864 = v1838.keepGoing;
              if (v3864) {
                const v3865 = v1838.bal;
                const v3867 = v1838.percent;
                const v3868 = v1838.total_amount_claimed;
                const v3869 = v1838.total_rewards_allcoated;
                const v3870 = v1838.total_users_claim;
                const v3871 = v1838.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v3876 = stdlib.sub(v1826, v1826);
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
                  tok: undefined /* Nothing */
                  });
                const v3877 = (stdlib.le(await ctc.getBalance(), v3876) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3876));
                sim_r.txns.push({
                  kind: 'from',
                  to: v730,
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
        case 'User_optin0_94': {
          const v1879 = v864[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
  switch (v864[0]) {
    case 'Admin_endContractAndTransfer0_94': {
      const v867 = v864[1];
      return;
      break;
      }
    case 'Admin_setNft0_94': {
      const v1120 = v864[1];
      return;
      break;
      }
    case 'Admin_setReward0_94': {
      const v1373 = v864[1];
      return;
      break;
      }
    case 'User_claimAll0_94': {
      const v1626 = v864[1];
      undefined /* setApiDetails */;
      const v1642 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v863, ctc1), null);
      const v1643 = {
        None: 0,
        Some: 1
        }[v1642[0]];
      const v1644 = stdlib.eq(v1643, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1644, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./main.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./main.rsh:157:29:application call to [unknown function] (defined at: ./main.rsh:157:29:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:157:29:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
        msg: 'Cannot claim because you have not earned reward',
        who: 'User_claimAll'
        });
      ;
      const v1789 = stdlib.fromSome(v1642, stdlib.checkedBigNumberify('./main.rsh:165:60:decimal', stdlib.UInt_max, '0'));
      const v1791 = stdlib.gt(v754, v1789);
      const v1792 = v1791 ? v1789 : v754;
      const v1794 = stdlib.ge(v1789, v754);
      if (v1794) {
        null;
        const v1795 = false;
        const v1796 = await txn1.getOutput('User_claimAll', 'v1795', ctc8, v1795);
        if (v417) {
          stdlib.protect(ctc0, await interact.out(v1626, v1796), {
            at: './main.rsh:157:11:application',
            fs: ['at ./main.rsh:157:11:application call to [unknown function] (defined at: ./main.rsh:157:11:function exp)', 'at ./main.rsh:169:16:application call to "ret" (defined at: ./main.rsh:164:15:function exp)', 'at ./main.rsh:164:15:application call to [unknown function] (defined at: ./main.rsh:164:15:function exp)'],
            msg: 'out',
            who: 'User_claimAll'
            });
          }
        else {
          }
        
        const v1808 = stdlib.safeAdd(v781, stdlib.checkedBigNumberify('./main.rsh:170:57:decimal', stdlib.UInt_max, '1'));
        const v1809 = {
          bal: v775,
          keepGoing: v776,
          percent: v777,
          total_amount_claimed: v778,
          total_rewards_allcoated: v779,
          total_users_claim: v780,
          usersNo: v1808
          };
        const v3829 = v754;
        const v3830 = v1809.keepGoing;
        if (v3830) {
          const v3831 = v1809.bal;
          const v3833 = v1809.percent;
          const v3834 = v1809.total_amount_claimed;
          const v3835 = v1809.total_rewards_allcoated;
          const v3836 = v1809.total_users_claim;
          const v3837 = v1809.usersNo;
          return;
          }
        else {
          const v3842 = stdlib.sub(v754, v754);
          ;
          const v3843 = (stdlib.le(await ctc.getBalance(), v3842) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3842));
          ;
          return;
          }}
      else {
        const v1811 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v863, ctc0), null);
        const v1812 = {
          None: 0,
          Some: 1
          }[v1811[0]];
        const v1813 = stdlib.eq(v1812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1813) {
          const v1840 = true;
          const v1841 = await txn1.getOutput('User_claimAll', 'v1840', ctc8, v1840);
          if (v417) {
            stdlib.protect(ctc0, await interact.out(v1626, v1841), {
              at: './main.rsh:157:11:application',
              fs: ['at ./main.rsh:157:11:application call to [unknown function] (defined at: ./main.rsh:157:11:function exp)', 'at ./main.rsh:187:16:application call to "ret" (defined at: ./main.rsh:164:15:function exp)', 'at ./main.rsh:164:15:application call to [unknown function] (defined at: ./main.rsh:164:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v1849 = stdlib.sub(v754, v1792);
          ;
          await stdlib.mapSet(map0, ctc6, v863, ctc1, undefined /* Nothing */);
          const v1857 = stdlib.safeSub(v775, v1792);
          const v1858 = stdlib.safeAdd(v780, stdlib.checkedBigNumberify('./main.rsh:193:54:decimal', stdlib.UInt_max, '1'));
          const v1859 = stdlib.safeAdd(v778, v1792);
          const v1860 = {
            bal: v1857,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v1859,
            total_rewards_allcoated: v779,
            total_users_claim: v1858,
            usersNo: v781
            };
          const v3846 = v1849;
          const v3847 = v1860.keepGoing;
          if (v3847) {
            const v3848 = v1860.bal;
            const v3850 = v1860.percent;
            const v3851 = v1860.total_amount_claimed;
            const v3852 = v1860.total_rewards_allcoated;
            const v3853 = v1860.total_users_claim;
            const v3854 = v1860.usersNo;
            return;
            }
          else {
            const v3859 = stdlib.sub(v1849, v1849);
            ;
            const v3860 = (stdlib.le(await ctc.getBalance(), v3859) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3859));
            ;
            return;
            }}
        else {
          const v1815 = true;
          const v1816 = await txn1.getOutput('User_claimAll', 'v1815', ctc8, v1815);
          if (v417) {
            stdlib.protect(ctc0, await interact.out(v1626, v1816), {
              at: './main.rsh:157:11:application',
              fs: ['at ./main.rsh:157:11:application call to [unknown function] (defined at: ./main.rsh:157:11:function exp)', 'at ./main.rsh:172:16:application call to "ret" (defined at: ./main.rsh:164:15:function exp)', 'at ./main.rsh:164:15:application call to [unknown function] (defined at: ./main.rsh:164:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v1821 = {
            addr: v863,
            amount: v1792,
            projectName: v731
            };
          null;
          await stdlib.mapSet(map3, ctc6, v863, ctc0, null);
          const v1826 = stdlib.sub(v754, v1792);
          ;
          await stdlib.mapSet(map0, ctc6, v863, ctc1, undefined /* Nothing */);
          const v1834 = stdlib.safeAdd(v781, stdlib.checkedBigNumberify('./main.rsh:181:34:decimal', stdlib.UInt_max, '1'));
          const v1835 = stdlib.safeSub(v775, v1792);
          const v1836 = stdlib.safeAdd(v780, stdlib.checkedBigNumberify('./main.rsh:183:54:decimal', stdlib.UInt_max, '1'));
          const v1837 = stdlib.safeAdd(v778, v1792);
          const v1838 = {
            bal: v1835,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v1837,
            total_rewards_allcoated: v779,
            total_users_claim: v1836,
            usersNo: v1834
            };
          const v3863 = v1826;
          const v3864 = v1838.keepGoing;
          if (v3864) {
            const v3865 = v1838.bal;
            const v3867 = v1838.percent;
            const v3868 = v1838.total_amount_claimed;
            const v3869 = v1838.total_rewards_allcoated;
            const v3870 = v1838.total_users_claim;
            const v3871 = v1838.usersNo;
            return;
            }
          else {
            const v3876 = stdlib.sub(v1826, v1826);
            ;
            const v3877 = (stdlib.le(await ctc.getBalance(), v3876) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3876));
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_94': {
      const v1879 = v864[1];
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
  const ctc3 = stdlib.T_Token;
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
  const ctc12 = stdlib.T_Tuple([ctc6, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Data({
    Admin_endContractAndTransfer0_94: ctc11,
    Admin_setNft0_94: ctc12,
    Admin_setReward0_94: ctc13,
    User_claimAll0_94: ctc11,
    User_optin0_94: ctc11
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
  
  
  const [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v830 = stdlib.protect(ctc11, await interact.in(), {
    at: './main.rsh:1:23:application',
    fs: ['at ./main.rsh:201:26:application call to [unknown function] (defined at: ./main.rsh:201:26:function exp)', 'at ./main.rsh:70:37:application call to "runUser_optin0_94" (defined at: ./main.rsh:201:10:function exp)', 'at ./main.rsh:70:37:application call to [unknown function] (defined at: ./main.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v834 = ['User_optin0_94', v830];
  
  const txn1 = await (ctc.sendrecv({
    args: [v730, v731, v754, v775, v776, v777, v778, v779, v780, v781, v834],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./main.rsh:203:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
      
      switch (v864[0]) {
        case 'Admin_endContractAndTransfer0_94': {
          const v867 = v864[1];
          
          break;
          }
        case 'Admin_setNft0_94': {
          const v1120 = v864[1];
          
          break;
          }
        case 'Admin_setReward0_94': {
          const v1373 = v864[1];
          
          break;
          }
        case 'User_claimAll0_94': {
          const v1626 = v864[1];
          
          break;
          }
        case 'User_optin0_94': {
          const v1879 = v864[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v863, ctc0, null);
          const v2117 = null;
          const v2118 = await txn1.getOutput('User_optin', 'v2117', ctc0, v2117);
          
          const v2130 = {
            bal: v775,
            keepGoing: v776,
            percent: v777,
            total_amount_claimed: v778,
            total_rewards_allcoated: v779,
            total_users_claim: v780,
            usersNo: v781
            };
          const v4050 = v754;
          const v4051 = v2130.keepGoing;
          if (v4051) {
            const v4052 = v2130.bal;
            const v4054 = v2130.percent;
            const v4055 = v2130.total_amount_claimed;
            const v4056 = v2130.total_rewards_allcoated;
            const v4057 = v2130.total_users_claim;
            const v4058 = v2130.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v4063 = stdlib.sub(v754, v754);
            sim_r.txns.push({
              kind: 'from',
              to: v730,
              tok: undefined /* Nothing */
              });
            const v4064 = (stdlib.le(await ctc.getBalance(), v4063) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4063));
            sim_r.txns.push({
              kind: 'from',
              to: v730,
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
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v864], secs: v866, time: v865, didSend: v417, from: v863 } = txn1;
  switch (v864[0]) {
    case 'Admin_endContractAndTransfer0_94': {
      const v867 = v864[1];
      return;
      break;
      }
    case 'Admin_setNft0_94': {
      const v1120 = v864[1];
      return;
      break;
      }
    case 'Admin_setReward0_94': {
      const v1373 = v864[1];
      return;
      break;
      }
    case 'User_claimAll0_94': {
      const v1626 = v864[1];
      return;
      break;
      }
    case 'User_optin0_94': {
      const v1879 = v864[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map4, ctc6, v863, ctc0, null);
      const v2117 = null;
      const v2118 = await txn1.getOutput('User_optin', 'v2117', ctc0, v2117);
      if (v417) {
        stdlib.protect(ctc0, await interact.out(v1879, v2118), {
          at: './main.rsh:201:11:application',
          fs: ['at ./main.rsh:201:11:application call to [unknown function] (defined at: ./main.rsh:201:11:function exp)', 'at ./main.rsh:206:14:application call to "ret" (defined at: ./main.rsh:204:15:function exp)', 'at ./main.rsh:204:15:application call to [unknown function] (defined at: ./main.rsh:204:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v2130 = {
        bal: v775,
        keepGoing: v776,
        percent: v777,
        total_amount_claimed: v778,
        total_rewards_allcoated: v779,
        total_users_claim: v780,
        usersNo: v781
        };
      const v4050 = v754;
      const v4051 = v2130.keepGoing;
      if (v4051) {
        const v4052 = v2130.bal;
        const v4054 = v2130.percent;
        const v4055 = v2130.total_amount_claimed;
        const v4056 = v2130.total_rewards_allcoated;
        const v4057 = v2130.total_users_claim;
        const v4058 = v2130.usersNo;
        return;
        }
      else {
        const v4063 = stdlib.sub(v754, v754);
        ;
        const v4064 = (stdlib.le(await ctc.getBalance(), v4063) ? stdlib.checkedBigNumberify('./main.rsh:224:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4063));
        ;
        return;
        }
      break;
      }
    }
  
  
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
export async function Admin_setNft(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_setNft expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_setNft expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_setNft3(ctcTop, interact);}
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
    impure: [`Admin_endContractAndTransfer()void`, `Admin_setNft(address,uint64)byte`, `Admin_setReward(address,uint64)byte`, `User_claimAll()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[40])))void`],
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`],
    sigs: [`Admin_endContractAndTransfer()void`, `Admin_setNft(address,uint64)byte`, `Admin_setReward(address,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `User_claimAll()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[40])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAEDCNSTAdR6JggAAQABAQEEBBABneQBAsgBVGhlIGJhbGFuY2UgeW91IGFyZSB0cnlpbmcgdG8gc2V0IGZvciB0aGUgdXNlciBpcyBpbnZhbGlkIGFuZCB0aGV5IGhhdmVuJ3Qgb3B0ZWQgaW4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAzEYQQVYKGRJIls1ASVbNQIpZCpkUIIPBAIYNZQEE25XOwQagx0FBCKETCYEKBME8gQpN6f2BCmLWhAEPvlimgRCaCfVBEgk+QIEbuR2FAR4Stk3BHr+yG0Ek8uVjQTsln4qNhoAjg8AQQC6AN0AeAE+AXYA/gCqBLsBDgABAS4BHgBcBM0AgTGvNQskNAESRIgILjQLIls1DDQLVwgpNQ2ABFJBZ4c0DBZQNA1QsDQMiAh1NA0iVY0FB8sHzgfYB+IEukL/vzYaATYaAhc1CzUMJa8qNAw0CxZQUFA1C0L/qjYaATYaAhc1CzUMJa8nBTQMNAsWUFBQNQtC/442GgE1CzQBJBJEiAe3KCgnBTQLUIgH6iJVIxIWUQcINQQxGSISRIAEFR98dTQEULAjQzQBJBJEiAeKNBUWNQRC/982GgE1CzQBJBJEiAd1KCgrNAtQiAepIlUjEhZRBwg1BEL/vDYaATULNAEkEkSIB1Ilryglryk0C1CIB4OIB501BEL/mzQBJBJEiAc2NBAWNQRC/4s0ASQSRIgHJjQRFjUEQv97NAEkEkSIBxY0DxY1BEL/azQBJBJEiAcGNA4WNQRC/1uAMQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+kIAxAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv5YNBkxABJEKDULgAgAAAAAAAADfTQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRc0F1cIARdBBc00FyJbNRQ0F1cIARc1EzQXVwkRNRI0F4EaWzURNBeBIls1EDQXgSpbNQ80F4EyWzUONBk0GFA0FRZQNBQWUDQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQJDIGNQI1ASlLAVcAf2cqTFd/AWcoNAEWNAIWUGcxGSISRIgGOzQDQP4xQv4kNAtXACA1DCgoKzQMUIgF7yJVIxJBAmohBCo0DFA0C1cgCIgF6SM1C4AIAAAAAAAABJM0CxZRBwhQsDQLFlEHCDUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/wo0C4EgW0k1GzQUDTUaIjQbNBpNNQw0FTQMCDUNNAyIBcc0C1cAIDUMKCgrNAxQiAVmIlUjEkECMSEEKTQMUCWvKCWvKTQMUIgFTYgFZxc0GwgWiAVRIzULgAgAAAAAAAAFvzQLFlEHCFCwNAsWUQcINQQ0GkEDFzQUNBsINQs0CxY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNA01FTUWNRdC/mIoJa8pMQBQiATlSTUMIlUjEkQlrzQMiATzFzULNBU0CzQVNAsNTTUMNAs0FQ9BAxGABP/eeSg0CxZQsCI1C4AIAAAAAAAABwM0CxZRBwhQsDQLFlEHCDUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOIwgWUDIGNRY1F0L94iEFKzEAUCiIBHQoNQuACAAAAAAAAAhFNAtQsDQLNQQ0FBY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNRY1F0L9nTEANRk0CyJbNQw0C1cIHjUYgATRKgaNNAwWUDQYULA0DIgEMIA6AAAAAAAAAAABAAAAAAAAAAUAAAAAAAAAZAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIGIjUVNRY1F0L9MYgD4YGgjQaIA/82GgE1C0L/gogDzzYaATULQvsuIjE0EkQkMTUSRCIxNhJEIjE3EkSIA7CBgAGvIiJC/VhC/w8nBjULJwQ0C1A0DFCwIjULgAgAAAAAAAAEpTQLFlEHCFCwNAsWUQcINQQ0FBY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNRY1F0L8oTQaQQEngMgBWW91ciB1c2VyIGhhc24ndCBvcHRlZCBpbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1CycENAtQNAxQsCI1C4AIAAAAAAAABdM0CxZRBwhQsDQLFlEHCDUENBQ0GwgWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjQNNRU1FjUXQvt8NBQ1C0L86ScGNQsnBDQLUDQMULAiNQuACAAAAAAAAAXnNAsWUQcIULA0CxZRBwg1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY0DTUVNRY1F0L7ISgoJwcxAFCIAaQiVSMSQQBiIzULgAgAAAAAAAAHMDQLFlEHCFCwNAsWUQcINQQ0DDEAiAGEIQQpMQBQiAGwNBQ0DAkWNBMWUQcIUDQSUDQRNAwIFlA0EBZQNA8jCBZQNA4WUDIGNBU0DAk1FTUWNRdC+q4jNQuACAAAAAAAAAcXNAsWUQcIULA0CxZRBwg1BDEANAwWUDQYUDULgASbyFRQNAtQsCEFJwcxAFAoiAENNAwxAIgBAiEEKTEAUIgBLjQUNAwJFjQTFlEHCFA0ElA0ETQMCBZQNBAWUDQPIwgWUDQOIwgWUDIGNBU0DAk1FTUWNRdC+io0FTQZiAC7MgpgMgp4CTQVSQkJSTULNBmIAKcxGYEFEkSIAMcyCmAyCngJSTUGMgqIAI9C+npITL9IiSKyASOyELIHsgiziUL5ojQNVwEoNQtC+mQ0DVcBKDULQvrCQvtnSIlMCUk1BjIJiABViQlJQf/uSTUGiACPiUlXACA1GUlXIB41GEmBPls1FUmBRls1FElXTgEXNRNJV08RNRJJgWBbNRFJgWhbNRBJgXBbNQ+BeFs1Dom+SRZRBwhFBE1QibFC/3VMSb1A/2pLA4gAMUL/YklXAQBMIlVNiSM1A4lJIhJMNAISEUSJNAY0B0oPQf9vQv93vCJOAk00Bwg1B4k0Bgg1BokxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJ`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `392`,
    1001: `393`,
    1002: `393`,
    1003: `393`,
    1004: `394`,
    1005: `394`,
    1006: `396`,
    1007: `397`,
    1008: `398`,
    1009: `399`,
    101: `2`,
    1010: `399`,
    1011: `400`,
    1012: `401`,
    1013: `401`,
    1014: `401`,
    1015: `402`,
    1016: `403`,
    1017: `404`,
    1018: `405`,
    1019: `406`,
    102: `2`,
    1020: `406`,
    1021: `406`,
    1022: `408`,
    1023: `408`,
    1024: `409`,
    1025: `410`,
    1026: `410`,
    1027: `411`,
    1028: `412`,
    1029: `412`,
    103: `2`,
    1030: `413`,
    1031: `413`,
    1032: `413`,
    1033: `414`,
    1034: `414`,
    1035: `414`,
    1036: `415`,
    1037: `416`,
    1038: `416`,
    1039: `417`,
    104: `2`,
    1040: `417`,
    1041: `417`,
    1042: `417`,
    1043: `417`,
    1044: `417`,
    1045: `417`,
    1046: `417`,
    1047: `417`,
    1048: `417`,
    1049: `418`,
    105: `2`,
    1050: `418`,
    1051: `419`,
    1052: `420`,
    1053: `420`,
    1054: `420`,
    1055: `421`,
    1056: `422`,
    1057: `423`,
    1058: `423`,
    1059: `424`,
    106: `2`,
    1060: `425`,
    1061: `425`,
    1062: `425`,
    1063: `426`,
    1064: `426`,
    1065: `427`,
    1066: `427`,
    1067: `428`,
    1068: `429`,
    1069: `429`,
    107: `2`,
    1070: `430`,
    1071: `431`,
    1072: `431`,
    1073: `431`,
    1074: `432`,
    1075: `433`,
    1076: `433`,
    1077: `434`,
    1078: `435`,
    1079: `435`,
    108: `2`,
    1080: `436`,
    1081: `437`,
    1082: `438`,
    1083: `438`,
    1084: `439`,
    1085: `440`,
    1086: `441`,
    1087: `441`,
    1088: `442`,
    1089: `443`,
    109: `2`,
    1090: `444`,
    1091: `444`,
    1092: `445`,
    1093: `446`,
    1094: `447`,
    1095: `447`,
    1096: `448`,
    1097: `448`,
    1098: `449`,
    1099: `449`,
    11: `2`,
    110: `2`,
    1100: `450`,
    1101: `450`,
    1102: `450`,
    1103: `452`,
    1104: `452`,
    1105: `453`,
    1106: `453`,
    1107: `454`,
    1108: `455`,
    1109: `456`,
    111: `2`,
    1110: `456`,
    1111: `457`,
    1112: `457`,
    1113: `458`,
    1114: `459`,
    1115: `459`,
    1116: `460`,
    1117: `461`,
    1118: `461`,
    1119: `462`,
    112: `2`,
    1120: `462`,
    1121: `463`,
    1122: `464`,
    1123: `464`,
    1124: `465`,
    1125: `465`,
    1126: `466`,
    1127: `466`,
    1128: `467`,
    1129: `468`,
    113: `2`,
    1130: `468`,
    1131: `469`,
    1132: `469`,
    1133: `470`,
    1134: `470`,
    1135: `470`,
    1136: `473`,
    1137: `473`,
    1138: `474`,
    1139: `474`,
    114: `2`,
    1140: `474`,
    1141: `475`,
    1142: `475`,
    1143: `477`,
    1144: `478`,
    1145: `479`,
    1146: `480`,
    1147: `480`,
    1148: `481`,
    1149: `482`,
    115: `2`,
    1150: `482`,
    1151: `482`,
    1152: `483`,
    1153: `484`,
    1154: `485`,
    1155: `486`,
    1156: `487`,
    1157: `487`,
    1158: `487`,
    1159: `489`,
    116: `2`,
    1160: `489`,
    1161: `490`,
    1162: `491`,
    1163: `491`,
    1164: `492`,
    1165: `493`,
    1166: `494`,
    1167: `495`,
    1168: `496`,
    1169: `497`,
    117: `2`,
    1170: `498`,
    1171: `499`,
    1172: `499`,
    1173: `500`,
    1174: `501`,
    1175: `501`,
    1176: `501`,
    1177: `502`,
    1178: `502`,
    1179: `502`,
    118: `2`,
    1180: `503`,
    1181: `504`,
    1182: `504`,
    1183: `505`,
    1184: `506`,
    1185: `507`,
    1186: `507`,
    1187: `507`,
    1188: `508`,
    1189: `509`,
    119: `2`,
    1190: `509`,
    1191: `510`,
    1192: `510`,
    1193: `510`,
    1194: `510`,
    1195: `510`,
    1196: `510`,
    1197: `510`,
    1198: `510`,
    1199: `510`,
    12: `2`,
    120: `2`,
    1200: `510`,
    1201: `511`,
    1202: `511`,
    1203: `512`,
    1204: `513`,
    1205: `513`,
    1206: `513`,
    1207: `514`,
    1208: `515`,
    1209: `516`,
    121: `2`,
    1210: `516`,
    1211: `517`,
    1212: `518`,
    1213: `518`,
    1214: `518`,
    1215: `519`,
    1216: `519`,
    1217: `520`,
    1218: `520`,
    1219: `521`,
    122: `2`,
    1220: `521`,
    1221: `521`,
    1222: `522`,
    1223: `522`,
    1224: `523`,
    1225: `523`,
    1226: `524`,
    1227: `525`,
    1228: `525`,
    1229: `527`,
    123: `2`,
    1230: `527`,
    1231: `528`,
    1232: `529`,
    1233: `529`,
    1234: `530`,
    1235: `531`,
    1236: `531`,
    1237: `531`,
    1238: `532`,
    1239: `533`,
    124: `2`,
    1240: `533`,
    1241: `534`,
    1242: `535`,
    1243: `535`,
    1244: `536`,
    1245: `537`,
    1246: `538`,
    1247: `538`,
    1248: `539`,
    1249: `540`,
    125: `2`,
    1250: `541`,
    1251: `541`,
    1252: `542`,
    1253: `543`,
    1254: `544`,
    1255: `544`,
    1256: `545`,
    1257: `546`,
    1258: `547`,
    1259: `547`,
    126: `2`,
    1260: `548`,
    1261: `548`,
    1262: `549`,
    1263: `549`,
    1264: `550`,
    1265: `550`,
    1266: `551`,
    1267: `551`,
    1268: `552`,
    1269: `552`,
    127: `2`,
    1270: `552`,
    1271: `555`,
    1272: `556`,
    1273: `557`,
    1274: `558`,
    1275: `559`,
    1276: `559`,
    1277: `560`,
    1278: `561`,
    1279: `561`,
    128: `2`,
    1280: `561`,
    1281: `562`,
    1282: `563`,
    1283: `563`,
    1284: `564`,
    1285: `565`,
    1286: `566`,
    1287: `567`,
    1288: `568`,
    1289: `575`,
    129: `2`,
    1290: `576`,
    1291: `577`,
    1292: `577`,
    1293: `578`,
    1294: `578`,
    1295: `578`,
    1296: `579`,
    1297: `580`,
    1298: `580`,
    1299: `581`,
    13: `2`,
    130: `2`,
    1300: `581`,
    1301: `582`,
    1302: `582`,
    1303: `583`,
    1304: `583`,
    1305: `584`,
    1306: `584`,
    1307: `585`,
    1308: `586`,
    1309: `587`,
    131: `2`,
    1310: `587`,
    1311: `588`,
    1312: `588`,
    1313: `589`,
    1314: `589`,
    1315: `590`,
    1316: `591`,
    1317: `591`,
    1318: `591`,
    1319: `592`,
    132: `2`,
    1320: `592`,
    1321: `592`,
    1322: `592`,
    1323: `592`,
    1324: `592`,
    1325: `593`,
    1326: `593`,
    1327: `594`,
    1328: `595`,
    1329: `596`,
    133: `2`,
    1330: `598`,
    1331: `599`,
    1332: `599`,
    1333: `600`,
    1334: `600`,
    1335: `600`,
    1336: `600`,
    1337: `600`,
    1338: `600`,
    1339: `600`,
    134: `2`,
    1340: `600`,
    1341: `600`,
    1342: `600`,
    1343: `601`,
    1344: `601`,
    1345: `602`,
    1346: `603`,
    1347: `603`,
    1348: `603`,
    1349: `604`,
    135: `2`,
    1350: `605`,
    1351: `606`,
    1352: `606`,
    1353: `607`,
    1354: `608`,
    1355: `608`,
    1356: `608`,
    1357: `609`,
    1358: `609`,
    1359: `610`,
    136: `2`,
    1360: `610`,
    1361: `611`,
    1362: `612`,
    1363: `612`,
    1364: `613`,
    1365: `614`,
    1366: `614`,
    1367: `614`,
    1368: `615`,
    1369: `616`,
    137: `2`,
    1370: `616`,
    1371: `617`,
    1372: `618`,
    1373: `618`,
    1374: `619`,
    1375: `620`,
    1376: `621`,
    1377: `621`,
    1378: `622`,
    1379: `623`,
    138: `2`,
    1380: `624`,
    1381: `624`,
    1382: `625`,
    1383: `626`,
    1384: `627`,
    1385: `627`,
    1386: `628`,
    1387: `629`,
    1388: `630`,
    1389: `631`,
    139: `2`,
    1390: `632`,
    1391: `632`,
    1392: `633`,
    1393: `633`,
    1394: `634`,
    1395: `634`,
    1396: `635`,
    1397: `635`,
    1398: `635`,
    1399: `638`,
    14: `2`,
    140: `2`,
    1400: `638`,
    1401: `639`,
    1402: `640`,
    1403: `640`,
    1404: `641`,
    1405: `642`,
    1406: `643`,
    1407: `643`,
    1408: `643`,
    1409: `644`,
    141: `2`,
    1410: `645`,
    1411: `645`,
    1412: `646`,
    1413: `646`,
    1414: `646`,
    1415: `646`,
    1416: `646`,
    1417: `646`,
    1418: `646`,
    1419: `646`,
    142: `2`,
    1420: `646`,
    1421: `646`,
    1422: `647`,
    1423: `647`,
    1424: `648`,
    1425: `649`,
    1426: `650`,
    1427: `650`,
    1428: `651`,
    1429: `651`,
    143: `2`,
    1430: `652`,
    1431: `652`,
    1432: `653`,
    1433: `654`,
    1434: `654`,
    1435: `655`,
    1436: `656`,
    1437: `656`,
    1438: `656`,
    1439: `657`,
    144: `2`,
    1440: `658`,
    1441: `658`,
    1442: `659`,
    1443: `660`,
    1444: `660`,
    1445: `661`,
    1446: `662`,
    1447: `663`,
    1448: `663`,
    1449: `664`,
    145: `2`,
    1450: `665`,
    1451: `666`,
    1452: `666`,
    1453: `667`,
    1454: `668`,
    1455: `669`,
    1456: `669`,
    1457: `670`,
    1458: `671`,
    1459: `672`,
    146: `2`,
    1460: `672`,
    1461: `673`,
    1462: `673`,
    1463: `674`,
    1464: `674`,
    1465: `675`,
    1466: `675`,
    1467: `675`,
    1468: `677`,
    1469: `677`,
    147: `2`,
    1470: `678`,
    1471: `678`,
    1472: `679`,
    1473: `679`,
    1474: `680`,
    1475: `681`,
    1476: `682`,
    1477: `682`,
    1478: `683`,
    1479: `683`,
    148: `2`,
    1480: `684`,
    1481: `684`,
    1482: `684`,
    1483: `685`,
    1484: `685`,
    1485: `686`,
    1486: `686`,
    1487: `686`,
    1488: `686`,
    1489: `686`,
    149: `2`,
    1490: `686`,
    1491: `687`,
    1492: `687`,
    1493: `688`,
    1494: `689`,
    1495: `690`,
    1496: `690`,
    1497: `691`,
    1498: `692`,
    1499: `694`,
    15: `2`,
    150: `2`,
    1500: `694`,
    1501: `695`,
    1502: `695`,
    1503: `695`,
    1504: `696`,
    1505: `696`,
    1506: `696`,
    1507: `696`,
    1508: `696`,
    1509: `696`,
    151: `2`,
    1510: `696`,
    1511: `696`,
    1512: `696`,
    1513: `696`,
    1514: `696`,
    1515: `696`,
    1516: `696`,
    1517: `696`,
    1518: `696`,
    1519: `696`,
    152: `2`,
    1520: `696`,
    1521: `696`,
    1522: `696`,
    1523: `696`,
    1524: `696`,
    1525: `696`,
    1526: `696`,
    1527: `696`,
    1528: `696`,
    1529: `696`,
    153: `2`,
    1530: `696`,
    1531: `696`,
    1532: `696`,
    1533: `696`,
    1534: `696`,
    1535: `696`,
    1536: `696`,
    1537: `696`,
    1538: `696`,
    1539: `696`,
    154: `2`,
    1540: `696`,
    1541: `696`,
    1542: `696`,
    1543: `696`,
    1544: `696`,
    1545: `696`,
    1546: `696`,
    1547: `696`,
    1548: `696`,
    1549: `696`,
    155: `2`,
    1550: `696`,
    1551: `696`,
    1552: `696`,
    1553: `696`,
    1554: `696`,
    1555: `696`,
    1556: `696`,
    1557: `696`,
    1558: `696`,
    1559: `696`,
    156: `2`,
    1560: `696`,
    1561: `696`,
    1562: `696`,
    1563: `696`,
    1564: `697`,
    1565: `697`,
    1566: `698`,
    1567: `699`,
    1568: `699`,
    1569: `700`,
    157: `2`,
    1570: `700`,
    1571: `701`,
    1572: `701`,
    1573: `702`,
    1574: `702`,
    1575: `702`,
    1576: `704`,
    1577: `704`,
    1578: `704`,
    1579: `705`,
    158: `2`,
    1580: `705`,
    1581: `705`,
    1582: `705`,
    1583: `706`,
    1584: `706`,
    1585: `706`,
    1586: `707`,
    1587: `707`,
    1588: `707`,
    1589: `708`,
    159: `2`,
    1590: `708`,
    1591: `709`,
    1592: `709`,
    1593: `709`,
    1594: `711`,
    1595: `711`,
    1596: `711`,
    1597: `712`,
    1598: `712`,
    1599: `712`,
    16: `2`,
    160: `2`,
    1600: `713`,
    1601: `713`,
    1602: `714`,
    1603: `714`,
    1604: `714`,
    1605: `716`,
    1606: `717`,
    1607: `717`,
    1608: `718`,
    1609: `719`,
    161: `2`,
    1610: `720`,
    1611: `721`,
    1612: `721`,
    1613: `722`,
    1614: `723`,
    1615: `724`,
    1616: `725`,
    1617: `725`,
    1618: `726`,
    1619: `727`,
    162: `2`,
    1620: `728`,
    1621: `729`,
    1622: `729`,
    1623: `730`,
    1624: `731`,
    1625: `732`,
    1626: `732`,
    1627: `732`,
    1628: `733`,
    1629: `733`,
    163: `2`,
    1630: `733`,
    1631: `734`,
    1632: `735`,
    1633: `736`,
    1634: `737`,
    1635: `737`,
    1636: `737`,
    1637: `739`,
    1638: `739`,
    1639: `739`,
    164: `2`,
    1640: `741`,
    1641: `741`,
    1642: `742`,
    1643: `742`,
    1644: `743`,
    1645: `743`,
    1646: `744`,
    1647: `744`,
    1648: `745`,
    1649: `746`,
    165: `2`,
    1650: `746`,
    1651: `747`,
    1652: `748`,
    1653: `750`,
    1654: `751`,
    1655: `751`,
    1656: `752`,
    1657: `752`,
    1658: `752`,
    1659: `752`,
    166: `2`,
    1660: `752`,
    1661: `752`,
    1662: `752`,
    1663: `752`,
    1664: `752`,
    1665: `752`,
    1666: `753`,
    1667: `753`,
    1668: `754`,
    1669: `755`,
    167: `2`,
    1670: `755`,
    1671: `755`,
    1672: `756`,
    1673: `757`,
    1674: `758`,
    1675: `758`,
    1676: `759`,
    1677: `760`,
    1678: `760`,
    1679: `760`,
    168: `2`,
    1680: `761`,
    1681: `761`,
    1682: `762`,
    1683: `762`,
    1684: `763`,
    1685: `764`,
    1686: `764`,
    1687: `765`,
    1688: `766`,
    1689: `766`,
    169: `2`,
    1690: `766`,
    1691: `767`,
    1692: `768`,
    1693: `768`,
    1694: `769`,
    1695: `770`,
    1696: `770`,
    1697: `771`,
    1698: `772`,
    1699: `773`,
    17: `2`,
    170: `2`,
    1700: `773`,
    1701: `774`,
    1702: `775`,
    1703: `776`,
    1704: `776`,
    1705: `777`,
    1706: `778`,
    1707: `779`,
    1708: `779`,
    1709: `780`,
    171: `2`,
    1710: `781`,
    1711: `782`,
    1712: `782`,
    1713: `783`,
    1714: `783`,
    1715: `784`,
    1716: `784`,
    1717: `785`,
    1718: `785`,
    1719: `785`,
    172: `2`,
    1720: `787`,
    1721: `787`,
    1722: `788`,
    1723: `788`,
    1724: `788`,
    1725: `789`,
    1726: `789`,
    1727: `789`,
    1728: `789`,
    1729: `789`,
    173: `2`,
    1730: `789`,
    1731: `789`,
    1732: `789`,
    1733: `789`,
    1734: `789`,
    1735: `789`,
    1736: `789`,
    1737: `789`,
    1738: `789`,
    1739: `789`,
    174: `2`,
    1740: `789`,
    1741: `789`,
    1742: `789`,
    1743: `789`,
    1744: `789`,
    1745: `789`,
    1746: `789`,
    1747: `789`,
    1748: `789`,
    1749: `789`,
    175: `2`,
    1750: `789`,
    1751: `789`,
    1752: `789`,
    1753: `789`,
    1754: `789`,
    1755: `789`,
    1756: `789`,
    1757: `789`,
    1758: `789`,
    1759: `789`,
    176: `2`,
    1760: `789`,
    1761: `789`,
    1762: `789`,
    1763: `789`,
    1764: `789`,
    1765: `789`,
    1766: `789`,
    1767: `789`,
    1768: `789`,
    1769: `789`,
    177: `2`,
    1770: `789`,
    1771: `789`,
    1772: `789`,
    1773: `789`,
    1774: `789`,
    1775: `789`,
    1776: `789`,
    1777: `789`,
    1778: `789`,
    1779: `789`,
    178: `2`,
    1780: `789`,
    1781: `789`,
    1782: `789`,
    1783: `789`,
    1784: `789`,
    1785: `789`,
    1786: `789`,
    1787: `789`,
    1788: `789`,
    1789: `789`,
    179: `2`,
    1790: `789`,
    1791: `789`,
    1792: `789`,
    1793: `789`,
    1794: `789`,
    1795: `789`,
    1796: `789`,
    1797: `789`,
    1798: `789`,
    1799: `789`,
    18: `2`,
    180: `2`,
    1800: `789`,
    1801: `789`,
    1802: `789`,
    1803: `789`,
    1804: `789`,
    1805: `789`,
    1806: `789`,
    1807: `789`,
    1808: `789`,
    1809: `789`,
    181: `2`,
    1810: `789`,
    1811: `789`,
    1812: `789`,
    1813: `789`,
    1814: `789`,
    1815: `789`,
    1816: `789`,
    1817: `789`,
    1818: `789`,
    1819: `789`,
    182: `2`,
    1820: `789`,
    1821: `789`,
    1822: `789`,
    1823: `789`,
    1824: `789`,
    1825: `789`,
    1826: `789`,
    1827: `789`,
    1828: `789`,
    1829: `789`,
    183: `2`,
    1830: `789`,
    1831: `789`,
    1832: `789`,
    1833: `789`,
    1834: `789`,
    1835: `789`,
    1836: `789`,
    1837: `789`,
    1838: `789`,
    1839: `789`,
    184: `2`,
    1840: `789`,
    1841: `789`,
    1842: `789`,
    1843: `789`,
    1844: `789`,
    1845: `789`,
    1846: `789`,
    1847: `789`,
    1848: `789`,
    1849: `789`,
    185: `2`,
    1850: `789`,
    1851: `789`,
    1852: `789`,
    1853: `789`,
    1854: `789`,
    1855: `789`,
    1856: `789`,
    1857: `789`,
    1858: `789`,
    1859: `789`,
    186: `2`,
    1860: `789`,
    1861: `789`,
    1862: `789`,
    1863: `789`,
    1864: `789`,
    1865: `789`,
    1866: `789`,
    1867: `789`,
    1868: `789`,
    1869: `789`,
    187: `2`,
    1870: `789`,
    1871: `789`,
    1872: `789`,
    1873: `789`,
    1874: `789`,
    1875: `789`,
    1876: `789`,
    1877: `789`,
    1878: `789`,
    1879: `789`,
    188: `2`,
    1880: `789`,
    1881: `789`,
    1882: `789`,
    1883: `789`,
    1884: `789`,
    1885: `789`,
    1886: `789`,
    1887: `789`,
    1888: `789`,
    1889: `789`,
    189: `2`,
    1890: `789`,
    1891: `789`,
    1892: `789`,
    1893: `789`,
    1894: `789`,
    1895: `789`,
    1896: `789`,
    1897: `789`,
    1898: `789`,
    1899: `789`,
    19: `2`,
    190: `2`,
    1900: `789`,
    1901: `789`,
    1902: `789`,
    1903: `789`,
    1904: `789`,
    1905: `789`,
    1906: `789`,
    1907: `789`,
    1908: `789`,
    1909: `789`,
    191: `2`,
    1910: `789`,
    1911: `789`,
    1912: `789`,
    1913: `789`,
    1914: `789`,
    1915: `789`,
    1916: `789`,
    1917: `789`,
    1918: `789`,
    1919: `789`,
    192: `2`,
    1920: `789`,
    1921: `789`,
    1922: `789`,
    1923: `789`,
    1924: `789`,
    1925: `789`,
    1926: `789`,
    1927: `789`,
    1928: `790`,
    1929: `790`,
    193: `2`,
    1930: `791`,
    1931: `791`,
    1932: `792`,
    1933: `792`,
    1934: `793`,
    1935: `794`,
    1936: `794`,
    1937: `795`,
    1938: `796`,
    1939: `798`,
    194: `2`,
    1940: `799`,
    1941: `799`,
    1942: `800`,
    1943: `800`,
    1944: `800`,
    1945: `800`,
    1946: `800`,
    1947: `800`,
    1948: `800`,
    1949: `800`,
    195: `2`,
    1950: `800`,
    1951: `800`,
    1952: `801`,
    1953: `801`,
    1954: `802`,
    1955: `803`,
    1956: `803`,
    1957: `803`,
    1958: `804`,
    1959: `805`,
    196: `2`,
    1960: `806`,
    1961: `806`,
    1962: `807`,
    1963: `808`,
    1964: `808`,
    1965: `808`,
    1966: `809`,
    1967: `809`,
    1968: `810`,
    1969: `810`,
    197: `2`,
    1970: `811`,
    1971: `811`,
    1972: `812`,
    1973: `813`,
    1974: `814`,
    1975: `814`,
    1976: `815`,
    1977: `816`,
    1978: `816`,
    1979: `816`,
    198: `2`,
    1980: `817`,
    1981: `818`,
    1982: `818`,
    1983: `819`,
    1984: `820`,
    1985: `820`,
    1986: `821`,
    1987: `822`,
    1988: `823`,
    1989: `823`,
    199: `2`,
    1990: `824`,
    1991: `825`,
    1992: `826`,
    1993: `826`,
    1994: `827`,
    1995: `828`,
    1996: `829`,
    1997: `829`,
    1998: `830`,
    1999: `831`,
    2: `2`,
    20: `2`,
    200: `2`,
    2000: `832`,
    2001: `832`,
    2002: `833`,
    2003: `833`,
    2004: `834`,
    2005: `834`,
    2006: `835`,
    2007: `835`,
    2008: `836`,
    2009: `836`,
    201: `2`,
    2010: `837`,
    2011: `837`,
    2012: `837`,
    2013: `839`,
    2014: `839`,
    2015: `840`,
    2016: `840`,
    2017: `841`,
    2018: `841`,
    2019: `841`,
    202: `2`,
    2020: `843`,
    2021: `843`,
    2022: `844`,
    2023: `844`,
    2024: `845`,
    2025: `845`,
    2026: `846`,
    2027: `846`,
    2028: `847`,
    2029: `848`,
    203: `2`,
    2030: `848`,
    2031: `849`,
    2032: `850`,
    2033: `852`,
    2034: `853`,
    2035: `853`,
    2036: `854`,
    2037: `854`,
    2038: `854`,
    2039: `854`,
    204: `2`,
    2040: `854`,
    2041: `854`,
    2042: `854`,
    2043: `854`,
    2044: `854`,
    2045: `854`,
    2046: `855`,
    2047: `855`,
    2048: `856`,
    2049: `857`,
    205: `2`,
    2050: `857`,
    2051: `857`,
    2052: `858`,
    2053: `859`,
    2054: `860`,
    2055: `860`,
    2056: `861`,
    2057: `862`,
    2058: `862`,
    2059: `862`,
    206: `2`,
    2060: `863`,
    2061: `863`,
    2062: `864`,
    2063: `864`,
    2064: `865`,
    2065: `866`,
    2066: `866`,
    2067: `867`,
    2068: `868`,
    2069: `868`,
    207: `2`,
    2070: `868`,
    2071: `869`,
    2072: `870`,
    2073: `870`,
    2074: `871`,
    2075: `872`,
    2076: `872`,
    2077: `873`,
    2078: `874`,
    2079: `875`,
    208: `2`,
    2080: `875`,
    2081: `876`,
    2082: `877`,
    2083: `878`,
    2084: `878`,
    2085: `879`,
    2086: `880`,
    2087: `881`,
    2088: `881`,
    2089: `882`,
    209: `2`,
    2090: `883`,
    2091: `884`,
    2092: `884`,
    2093: `885`,
    2094: `885`,
    2095: `886`,
    2096: `886`,
    2097: `887`,
    2098: `887`,
    2099: `888`,
    21: `2`,
    210: `2`,
    2100: `888`,
    2101: `889`,
    2102: `889`,
    2103: `889`,
    2104: `892`,
    2105: `893`,
    2106: `894`,
    2107: `894`,
    2108: `895`,
    2109: `895`,
    211: `2`,
    2110: `896`,
    2111: `897`,
    2112: `897`,
    2113: `897`,
    2114: `898`,
    2115: `899`,
    2116: `900`,
    2117: `901`,
    2118: `902`,
    2119: `902`,
    212: `2`,
    2120: `902`,
    2121: `903`,
    2122: `904`,
    2123: `904`,
    2124: `905`,
    2125: `905`,
    2126: `905`,
    2127: `905`,
    2128: `905`,
    2129: `905`,
    213: `2`,
    2130: `905`,
    2131: `905`,
    2132: `905`,
    2133: `905`,
    2134: `906`,
    2135: `906`,
    2136: `907`,
    2137: `908`,
    2138: `908`,
    2139: `908`,
    214: `2`,
    2140: `909`,
    2141: `910`,
    2142: `911`,
    2143: `911`,
    2144: `912`,
    2145: `913`,
    2146: `913`,
    2147: `913`,
    2148: `914`,
    2149: `914`,
    215: `2`,
    2150: `915`,
    2151: `915`,
    2152: `916`,
    2153: `916`,
    2154: `917`,
    2155: `917`,
    2156: `917`,
    2157: `918`,
    2158: `918`,
    2159: `919`,
    216: `2`,
    2160: `920`,
    2161: `920`,
    2162: `921`,
    2163: `922`,
    2164: `922`,
    2165: `922`,
    2166: `923`,
    2167: `923`,
    2168: `924`,
    2169: `924`,
    217: `2`,
    2170: `925`,
    2171: `926`,
    2172: `927`,
    2173: `927`,
    2174: `928`,
    2175: `929`,
    2176: `929`,
    2177: `929`,
    2178: `930`,
    2179: `931`,
    218: `2`,
    2180: `931`,
    2181: `932`,
    2182: `933`,
    2183: `933`,
    2184: `934`,
    2185: `934`,
    2186: `935`,
    2187: `936`,
    2188: `937`,
    2189: `938`,
    219: `2`,
    2190: `938`,
    2191: `939`,
    2192: `940`,
    2193: `941`,
    2194: `941`,
    2195: `942`,
    2196: `943`,
    2197: `944`,
    2198: `945`,
    2199: `946`,
    22: `2`,
    220: `2`,
    2200: `946`,
    2201: `947`,
    2202: `948`,
    2203: `949`,
    2204: `949`,
    2205: `950`,
    2206: `950`,
    2207: `951`,
    2208: `951`,
    2209: `952`,
    221: `2`,
    2210: `953`,
    2211: `953`,
    2212: `954`,
    2213: `954`,
    2214: `955`,
    2215: `955`,
    2216: `956`,
    2217: `956`,
    2218: `956`,
    2219: `958`,
    222: `2`,
    2220: `959`,
    2221: `959`,
    2222: `960`,
    2223: `960`,
    2224: `960`,
    2225: `960`,
    2226: `960`,
    2227: `960`,
    2228: `960`,
    2229: `960`,
    223: `2`,
    2230: `960`,
    2231: `960`,
    2232: `961`,
    2233: `961`,
    2234: `962`,
    2235: `963`,
    2236: `963`,
    2237: `963`,
    2238: `964`,
    2239: `965`,
    224: `2`,
    2240: `966`,
    2241: `966`,
    2242: `967`,
    2243: `968`,
    2244: `968`,
    2245: `968`,
    2246: `969`,
    2247: `969`,
    2248: `970`,
    2249: `970`,
    225: `2`,
    2250: `971`,
    2251: `971`,
    2252: `972`,
    2253: `973`,
    2254: `974`,
    2255: `974`,
    2256: `975`,
    2257: `976`,
    2258: `976`,
    2259: `977`,
    226: `2`,
    2260: `977`,
    2261: `977`,
    2262: `977`,
    2263: `977`,
    2264: `977`,
    2265: `978`,
    2266: `978`,
    2267: `979`,
    2268: `980`,
    2269: `982`,
    227: `2`,
    2270: `982`,
    2271: `983`,
    2272: `983`,
    2273: `984`,
    2274: `984`,
    2275: `985`,
    2276: `986`,
    2277: `987`,
    2278: `987`,
    2279: `987`,
    228: `2`,
    2280: `988`,
    2281: `988`,
    2282: `989`,
    2283: `989`,
    2284: `990`,
    2285: `990`,
    2286: `990`,
    2287: `991`,
    2288: `991`,
    2289: `992`,
    229: `2`,
    2290: `993`,
    2291: `993`,
    2292: `994`,
    2293: `995`,
    2294: `995`,
    2295: `995`,
    2296: `996`,
    2297: `996`,
    2298: `997`,
    2299: `997`,
    23: `2`,
    230: `2`,
    2300: `998`,
    2301: `999`,
    2302: `1000`,
    2303: `1000`,
    2304: `1001`,
    2305: `1002`,
    2306: `1002`,
    2307: `1002`,
    2308: `1003`,
    2309: `1004`,
    231: `2`,
    2310: `1004`,
    2311: `1005`,
    2312: `1006`,
    2313: `1006`,
    2314: `1007`,
    2315: `1007`,
    2316: `1008`,
    2317: `1009`,
    2318: `1010`,
    2319: `1011`,
    232: `4`,
    2320: `1011`,
    2321: `1012`,
    2322: `1013`,
    2323: `1014`,
    2324: `1014`,
    2325: `1015`,
    2326: `1016`,
    2327: `1017`,
    2328: `1018`,
    2329: `1019`,
    233: `4`,
    2330: `1019`,
    2331: `1020`,
    2332: `1021`,
    2333: `1022`,
    2334: `1023`,
    2335: `1024`,
    2336: `1024`,
    2337: `1025`,
    2338: `1025`,
    2339: `1026`,
    234: `5`,
    2340: `1026`,
    2341: `1027`,
    2342: `1028`,
    2343: `1028`,
    2344: `1029`,
    2345: `1029`,
    2346: `1030`,
    2347: `1030`,
    2348: `1031`,
    2349: `1031`,
    235: `5`,
    2350: `1031`,
    2351: `1033`,
    2352: `1033`,
    2353: `1035`,
    2354: `1035`,
    2355: `1036`,
    2356: `1036`,
    2357: `1036`,
    2358: `1037`,
    2359: `1037`,
    236: `5`,
    2360: `1038`,
    2361: `1039`,
    2362: `1039`,
    2363: `1040`,
    2364: `1041`,
    2365: `1042`,
    2366: `1042`,
    2367: `1043`,
    2368: `1044`,
    2369: `1045`,
    237: `6`,
    2370: `1047`,
    2371: `1048`,
    2372: `1048`,
    2373: `1049`,
    2374: `1049`,
    2375: `1050`,
    2376: `1050`,
    2377: `1050`,
    2378: `1052`,
    2379: `1052`,
    238: `7`,
    2380: `1053`,
    2381: `1053`,
    2382: `1054`,
    2383: `1055`,
    2384: `1057`,
    2385: `1057`,
    2386: `1057`,
    2387: `1059`,
    2388: `1059`,
    2389: `1060`,
    239: `8`,
    2390: `1061`,
    2391: `1061`,
    2392: `1062`,
    2393: `1063`,
    2394: `1065`,
    2395: `1066`,
    2396: `1066`,
    2397: `1067`,
    2398: `1067`,
    2399: `1068`,
    24: `2`,
    240: `9`,
    2400: `1068`,
    2401: `1068`,
    2402: `1069`,
    2403: `1069`,
    2404: `1069`,
    2405: `1071`,
    2406: `1072`,
    2407: `1073`,
    2408: `1074`,
    2409: `1075`,
    241: `10`,
    2410: `1077`,
    2411: `1078`,
    2412: `1078`,
    2413: `1079`,
    2414: `1080`,
    2415: `1080`,
    2416: `1081`,
    2417: `1081`,
    2418: `1082`,
    2419: `1082`,
    242: `11`,
    2420: `1083`,
    2421: `1084`,
    2422: `1086`,
    2423: `1086`,
    2424: `1086`,
    2425: `1088`,
    2426: `1088`,
    2427: `1089`,
    2428: `1089`,
    2429: `1089`,
    243: `11`,
    2430: `1090`,
    2431: `1090`,
    2432: `1091`,
    2433: `1091`,
    2434: `1091`,
    2435: `1093`,
    2436: `1093`,
    2437: `1094`,
    2438: `1094`,
    2439: `1094`,
    244: `12`,
    2440: `1095`,
    2441: `1095`,
    2442: `1096`,
    2443: `1096`,
    2444: `1096`,
    2445: `1098`,
    2446: `1098`,
    2447: `1098`,
    2448: `1100`,
    2449: `1101`,
    245: `13`,
    2450: `1103`,
    2451: `1104`,
    2452: `1105`,
    2453: `1106`,
    2454: `1106`,
    2455: `1107`,
    2456: `1107`,
    2457: `1108`,
    2458: `1108`,
    2459: `1108`,
    246: `14`,
    2460: `1109`,
    2461: `1111`,
    2462: `1112`,
    2463: `1113`,
    2464: `1113`,
    2465: `1113`,
    2466: `1114`,
    2467: `1115`,
    2468: `1115`,
    2469: `1116`,
    247: `14`,
    2470: `1116`,
    2471: `1116`,
    2472: `1117`,
    2473: `1119`,
    2474: `1120`,
    2475: `1120`,
    2476: `1120`,
    2477: `1121`,
    2478: `1121`,
    2479: `1122`,
    248: `15`,
    2480: `1123`,
    2481: `1123`,
    2482: `1123`,
    2483: `1124`,
    2484: `1124`,
    2485: `1125`,
    2486: `1126`,
    2487: `1126`,
    2488: `1127`,
    2489: `1128`,
    249: `16`,
    2490: `1128`,
    2491: `1129`,
    2492: `1130`,
    2493: `1130`,
    2494: `1131`,
    2495: `1132`,
    2496: `1132`,
    2497: `1133`,
    2498: `1134`,
    2499: `1134`,
    25: `2`,
    250: `17`,
    2500: `1134`,
    2501: `1135`,
    2502: `1136`,
    2503: `1136`,
    2504: `1137`,
    2505: `1138`,
    2506: `1138`,
    2507: `1138`,
    2508: `1139`,
    2509: `1139`,
    251: `18`,
    2510: `1140`,
    2511: `1141`,
    2512: `1141`,
    2513: `1142`,
    2514: `1143`,
    2515: `1143`,
    2516: `1144`,
    2517: `1145`,
    2518: `1145`,
    2519: `1146`,
    252: `19`,
    2520: `1147`,
    2521: `1147`,
    2522: `1148`,
    2523: `1149`,
    2524: `1149`,
    2525: `1150`,
    2526: `1151`,
    2527: `1151`,
    2528: `1152`,
    2529: `1152`,
    253: `21`,
    2530: `1153`,
    2531: `1154`,
    2532: `1154`,
    2533: `1155`,
    2534: `1157`,
    2535: `1158`,
    2536: `1159`,
    2537: `1160`,
    2538: `1160`,
    2539: `1160`,
    254: `21`,
    2540: `1161`,
    2541: `1161`,
    2542: `1162`,
    2543: `1163`,
    2544: `1164`,
    2545: `1166`,
    2546: `1167`,
    2547: `1167`,
    2548: `1167`,
    2549: `1169`,
    255: `21`,
    2550: `1170`,
    2551: `1171`,
    2552: `1172`,
    2553: `1172`,
    2554: `1172`,
    2555: `1173`,
    2556: `1173`,
    2557: `1174`,
    2558: `1174`,
    2559: `1174`,
    256: `21`,
    2560: `1175`,
    2561: `1175`,
    2562: `1175`,
    2563: `1177`,
    2564: `1178`,
    2565: `1178`,
    2566: `1178`,
    2567: `1179`,
    2568: `1180`,
    2569: `1181`,
    257: `21`,
    2570: `1182`,
    2571: `1183`,
    2572: `1185`,
    2573: `1186`,
    2574: `1186`,
    2575: `1187`,
    2576: `1189`,
    2577: `1190`,
    2578: `1191`,
    2579: `1192`,
    258: `21`,
    2580: `1193`,
    2581: `1193`,
    2582: `1194`,
    2583: `1195`,
    2584: `1196`,
    2585: `1197`,
    2586: `1199`,
    2587: `1199`,
    2588: `1200`,
    2589: `1200`,
    259: `21`,
    2590: `1201`,
    2591: `1202`,
    2592: `1203`,
    2593: `1203`,
    2594: `1203`,
    2595: `1204`,
    2596: `1204`,
    2597: `1204`,
    2598: `1206`,
    2599: `1207`,
    26: `2`,
    260: `21`,
    2600: `1208`,
    2601: `1208`,
    2602: `1209`,
    2603: `1211`,
    2604: `1211`,
    2605: `1212`,
    2606: `1213`,
    2607: `1213`,
    2608: `1214`,
    2609: `1216`,
    261: `21`,
    2610: `1216`,
    2611: `1217`,
    2612: `1218`,
    2613: `1218`,
    2614: `1219`,
    2615: `1222`,
    2616: `1222`,
    2617: `1223`,
    2618: `1223`,
    2619: `1224`,
    262: `21`,
    2620: `1225`,
    2621: `1226`,
    2622: `1227`,
    2623: `1227`,
    2624: `1228`,
    2625: `1229`,
    2626: `1229`,
    2627: `1230`,
    2628: `1230`,
    2629: `1231`,
    263: `21`,
    2630: `1231`,
    2631: `1232`,
    2632: `1233`,
    2633: `1234`,
    2634: `1234`,
    2635: `1235`,
    2636: `1236`,
    2637: `1237`,
    2638: `1238`,
    2639: `1238`,
    264: `21`,
    2640: `1239`,
    2641: `1240`,
    2642: `1241`,
    265: `21`,
    266: `21`,
    267: `21`,
    268: `21`,
    269: `21`,
    27: `2`,
    270: `21`,
    271: `21`,
    272: `21`,
    273: `21`,
    274: `21`,
    275: `21`,
    276: `21`,
    277: `21`,
    278: `21`,
    279: `21`,
    28: `2`,
    280: `21`,
    281: `21`,
    282: `21`,
    283: `21`,
    284: `21`,
    285: `21`,
    286: `21`,
    287: `21`,
    288: `21`,
    289: `21`,
    29: `2`,
    290: `21`,
    291: `21`,
    292: `21`,
    293: `21`,
    294: `21`,
    295: `21`,
    296: `21`,
    297: `21`,
    298: `21`,
    299: `21`,
    3: `2`,
    30: `2`,
    300: `21`,
    301: `21`,
    302: `21`,
    303: `21`,
    304: `21`,
    305: `21`,
    306: `21`,
    307: `21`,
    308: `21`,
    309: `21`,
    31: `2`,
    310: `21`,
    311: `21`,
    312: `21`,
    313: `21`,
    314: `21`,
    315: `21`,
    316: `21`,
    317: `21`,
    318: `21`,
    319: `21`,
    32: `2`,
    320: `21`,
    321: `21`,
    322: `21`,
    323: `21`,
    324: `21`,
    325: `21`,
    326: `21`,
    327: `21`,
    328: `21`,
    329: `21`,
    33: `2`,
    330: `22`,
    331: `22`,
    332: `22`,
    333: `23`,
    334: `23`,
    335: `23`,
    336: `23`,
    337: `23`,
    338: `23`,
    339: `23`,
    34: `2`,
    340: `23`,
    341: `23`,
    342: `23`,
    343: `23`,
    344: `23`,
    345: `23`,
    346: `23`,
    347: `23`,
    348: `23`,
    349: `23`,
    35: `2`,
    350: `23`,
    351: `23`,
    352: `23`,
    353: `23`,
    354: `23`,
    355: `23`,
    356: `23`,
    357: `23`,
    358: `23`,
    359: `23`,
    36: `2`,
    360: `23`,
    361: `23`,
    362: `23`,
    363: `23`,
    364: `23`,
    365: `25`,
    366: `28`,
    367: `28`,
    368: `29`,
    369: `30`,
    37: `2`,
    370: `30`,
    371: `32`,
    372: `33`,
    373: `33`,
    374: `34`,
    375: `35`,
    376: `36`,
    377: `36`,
    378: `36`,
    379: `37`,
    38: `2`,
    380: `37`,
    381: `38`,
    382: `39`,
    383: `40`,
    384: `40`,
    385: `41`,
    386: `41`,
    387: `42`,
    388: `42`,
    389: `42`,
    39: `2`,
    390: `43`,
    391: `43`,
    392: `44`,
    393: `44`,
    394: `44`,
    395: `44`,
    396: `44`,
    397: `44`,
    398: `45`,
    399: `45`,
    4: `2`,
    40: `2`,
    400: `46`,
    401: `47`,
    402: `48`,
    403: `48`,
    404: `49`,
    405: `50`,
    406: `52`,
    407: `52`,
    408: `53`,
    409: `53`,
    41: `2`,
    410: `53`,
    411: `54`,
    412: `54`,
    413: `55`,
    414: `56`,
    415: `57`,
    416: `57`,
    417: `57`,
    418: `57`,
    419: `57`,
    42: `2`,
    420: `57`,
    421: `57`,
    422: `57`,
    423: `57`,
    424: `57`,
    425: `57`,
    426: `57`,
    427: `58`,
    428: `58`,
    429: `58`,
    43: `2`,
    430: `60`,
    431: `60`,
    432: `60`,
    433: `61`,
    434: `61`,
    435: `61`,
    436: `62`,
    437: `63`,
    438: `63`,
    439: `64`,
    44: `2`,
    440: `64`,
    441: `66`,
    442: `67`,
    443: `68`,
    444: `69`,
    445: `69`,
    446: `70`,
    447: `70`,
    448: `71`,
    449: `72`,
    45: `2`,
    450: `73`,
    451: `74`,
    452: `75`,
    453: `75`,
    454: `76`,
    455: `76`,
    456: `76`,
    457: `78`,
    458: `78`,
    459: `78`,
    46: `2`,
    460: `79`,
    461: `79`,
    462: `79`,
    463: `80`,
    464: `81`,
    465: `81`,
    466: `82`,
    467: `82`,
    468: `84`,
    469: `85`,
    47: `2`,
    470: `86`,
    471: `86`,
    472: `87`,
    473: `87`,
    474: `88`,
    475: `88`,
    476: `89`,
    477: `90`,
    478: `91`,
    479: `92`,
    48: `2`,
    480: `93`,
    481: `93`,
    482: `94`,
    483: `94`,
    484: `94`,
    485: `96`,
    486: `96`,
    487: `96`,
    488: `97`,
    489: `97`,
    49: `2`,
    490: `99`,
    491: `99`,
    492: `100`,
    493: `101`,
    494: `102`,
    495: `105`,
    496: `105`,
    497: `105`,
    498: `107`,
    499: `108`,
    5: `2`,
    50: `2`,
    500: `109`,
    501: `109`,
    502: `110`,
    503: `110`,
    504: `111`,
    505: `112`,
    506: `112`,
    507: `112`,
    508: `113`,
    509: `114`,
    51: `2`,
    510: `115`,
    511: `116`,
    512: `117`,
    513: `118`,
    514: `118`,
    515: `118`,
    516: `119`,
    517: `119`,
    518: `121`,
    519: `121`,
    52: `2`,
    520: `122`,
    521: `123`,
    522: `124`,
    523: `127`,
    524: `127`,
    525: `127`,
    526: `127`,
    527: `127`,
    528: `127`,
    529: `128`,
    53: `2`,
    530: `128`,
    531: `129`,
    532: `130`,
    533: `132`,
    534: `133`,
    535: `136`,
    536: `136`,
    537: `137`,
    538: `138`,
    539: `139`,
    54: `2`,
    540: `142`,
    541: `142`,
    542: `142`,
    543: `143`,
    544: `143`,
    545: `144`,
    546: `145`,
    547: `145`,
    548: `146`,
    549: `146`,
    55: `2`,
    550: `146`,
    551: `148`,
    552: `148`,
    553: `148`,
    554: `149`,
    555: `149`,
    556: `151`,
    557: `151`,
    558: `152`,
    559: `153`,
    56: `2`,
    560: `154`,
    561: `157`,
    562: `157`,
    563: `157`,
    564: `159`,
    565: `160`,
    566: `161`,
    567: `162`,
    568: `162`,
    569: `163`,
    57: `2`,
    570: `164`,
    571: `164`,
    572: `164`,
    573: `165`,
    574: `166`,
    575: `167`,
    576: `168`,
    577: `169`,
    578: `170`,
    579: `170`,
    58: `2`,
    580: `170`,
    581: `171`,
    582: `171`,
    583: `172`,
    584: `172`,
    585: `172`,
    586: `174`,
    587: `174`,
    588: `174`,
    589: `175`,
    59: `2`,
    590: `175`,
    591: `177`,
    592: `177`,
    593: `178`,
    594: `179`,
    595: `180`,
    596: `183`,
    597: `183`,
    598: `183`,
    599: `184`,
    6: `2`,
    60: `2`,
    600: `185`,
    601: `187`,
    602: `188`,
    603: `189`,
    604: `190`,
    605: `191`,
    606: `191`,
    607: `192`,
    608: `193`,
    609: `193`,
    61: `2`,
    610: `193`,
    611: `194`,
    612: `194`,
    613: `194`,
    614: `195`,
    615: `195`,
    616: `196`,
    617: `196`,
    618: `196`,
    619: `199`,
    62: `2`,
    620: `199`,
    621: `200`,
    622: `201`,
    623: `202`,
    624: `205`,
    625: `205`,
    626: `205`,
    627: `206`,
    628: `206`,
    629: `207`,
    63: `2`,
    630: `208`,
    631: `208`,
    632: `209`,
    633: `209`,
    634: `209`,
    635: `212`,
    636: `212`,
    637: `213`,
    638: `214`,
    639: `215`,
    64: `2`,
    640: `218`,
    641: `218`,
    642: `218`,
    643: `219`,
    644: `219`,
    645: `220`,
    646: `221`,
    647: `221`,
    648: `222`,
    649: `222`,
    65: `2`,
    650: `222`,
    651: `225`,
    652: `225`,
    653: `226`,
    654: `227`,
    655: `228`,
    656: `231`,
    657: `231`,
    658: `231`,
    659: `232`,
    66: `2`,
    660: `232`,
    661: `233`,
    662: `234`,
    663: `234`,
    664: `235`,
    665: `235`,
    666: `235`,
    667: `238`,
    668: `238`,
    669: `239`,
    67: `2`,
    670: `240`,
    671: `241`,
    672: `244`,
    673: `244`,
    674: `244`,
    675: `245`,
    676: `245`,
    677: `246`,
    678: `247`,
    679: `247`,
    68: `2`,
    680: `248`,
    681: `248`,
    682: `248`,
    683: `251`,
    684: `251`,
    685: `251`,
    686: `251`,
    687: `251`,
    688: `251`,
    689: `251`,
    69: `2`,
    690: `251`,
    691: `251`,
    692: `251`,
    693: `251`,
    694: `251`,
    695: `251`,
    696: `251`,
    697: `251`,
    698: `251`,
    699: `251`,
    7: `2`,
    70: `2`,
    700: `251`,
    701: `251`,
    702: `251`,
    703: `251`,
    704: `251`,
    705: `251`,
    706: `251`,
    707: `251`,
    708: `251`,
    709: `251`,
    71: `2`,
    710: `251`,
    711: `251`,
    712: `251`,
    713: `251`,
    714: `251`,
    715: `251`,
    716: `251`,
    717: `251`,
    718: `251`,
    719: `251`,
    72: `2`,
    720: `251`,
    721: `251`,
    722: `251`,
    723: `251`,
    724: `251`,
    725: `251`,
    726: `251`,
    727: `251`,
    728: `251`,
    729: `251`,
    73: `2`,
    730: `251`,
    731: `251`,
    732: `251`,
    733: `251`,
    734: `252`,
    735: `252`,
    736: `253`,
    737: `253`,
    738: `253`,
    739: `256`,
    74: `2`,
    740: `256`,
    741: `256`,
    742: `256`,
    743: `256`,
    744: `256`,
    745: `256`,
    746: `256`,
    747: `256`,
    748: `256`,
    749: `256`,
    75: `2`,
    750: `256`,
    751: `256`,
    752: `256`,
    753: `256`,
    754: `256`,
    755: `256`,
    756: `256`,
    757: `256`,
    758: `256`,
    759: `256`,
    76: `2`,
    760: `256`,
    761: `256`,
    762: `256`,
    763: `256`,
    764: `256`,
    765: `256`,
    766: `256`,
    767: `256`,
    768: `256`,
    769: `256`,
    77: `2`,
    770: `256`,
    771: `256`,
    772: `256`,
    773: `256`,
    774: `256`,
    775: `256`,
    776: `256`,
    777: `256`,
    778: `256`,
    779: `256`,
    78: `2`,
    780: `256`,
    781: `256`,
    782: `256`,
    783: `256`,
    784: `256`,
    785: `256`,
    786: `256`,
    787: `256`,
    788: `256`,
    789: `256`,
    79: `2`,
    790: `257`,
    791: `257`,
    792: `258`,
    793: `258`,
    794: `258`,
    795: `260`,
    796: `260`,
    797: `261`,
    798: `261`,
    799: `262`,
    8: `2`,
    80: `2`,
    800: `263`,
    801: `270`,
    802: `271`,
    803: `271`,
    804: `272`,
    805: `272`,
    806: `272`,
    807: `272`,
    808: `272`,
    809: `272`,
    81: `2`,
    810: `272`,
    811: `272`,
    812: `272`,
    813: `272`,
    814: `273`,
    815: `273`,
    816: `274`,
    817: `275`,
    818: `276`,
    819: `276`,
    82: `2`,
    820: `277`,
    821: `277`,
    822: `278`,
    823: `278`,
    824: `279`,
    825: `280`,
    826: `280`,
    827: `281`,
    828: `282`,
    829: `282`,
    83: `2`,
    830: `282`,
    831: `283`,
    832: `284`,
    833: `284`,
    834: `285`,
    835: `286`,
    836: `286`,
    837: `287`,
    838: `288`,
    839: `289`,
    84: `2`,
    840: `289`,
    841: `290`,
    842: `291`,
    843: `292`,
    844: `292`,
    845: `293`,
    846: `294`,
    847: `295`,
    848: `295`,
    849: `296`,
    85: `2`,
    850: `297`,
    851: `298`,
    852: `298`,
    853: `299`,
    854: `299`,
    855: `300`,
    856: `300`,
    857: `302`,
    858: `302`,
    859: `303`,
    86: `2`,
    860: `303`,
    861: `303`,
    862: `304`,
    863: `305`,
    864: `305`,
    865: `305`,
    866: `306`,
    867: `306`,
    868: `307`,
    869: `308`,
    87: `2`,
    870: `309`,
    871: `309`,
    872: `310`,
    873: `310`,
    874: `311`,
    875: `311`,
    876: `311`,
    877: `312`,
    878: `313`,
    879: `313`,
    88: `2`,
    880: `314`,
    881: `314`,
    882: `315`,
    883: `315`,
    884: `315`,
    885: `316`,
    886: `316`,
    887: `317`,
    888: `317`,
    889: `318`,
    89: `2`,
    890: `318`,
    891: `319`,
    892: `320`,
    893: `320`,
    894: `321`,
    895: `321`,
    896: `322`,
    897: `322`,
    898: `323`,
    899: `324`,
    9: `2`,
    90: `2`,
    900: `324`,
    901: `325`,
    902: `325`,
    903: `326`,
    904: `326`,
    905: `327`,
    906: `328`,
    907: `328`,
    908: `329`,
    909: `329`,
    91: `2`,
    910: `330`,
    911: `330`,
    912: `331`,
    913: `332`,
    914: `332`,
    915: `334`,
    916: `334`,
    917: `335`,
    918: `335`,
    919: `336`,
    92: `2`,
    920: `337`,
    921: `337`,
    922: `338`,
    923: `339`,
    924: `340`,
    925: `340`,
    926: `341`,
    927: `342`,
    928: `343`,
    929: `343`,
    93: `2`,
    930: `344`,
    931: `345`,
    932: `345`,
    933: `345`,
    934: `346`,
    935: `347`,
    936: `347`,
    937: `348`,
    938: `349`,
    939: `349`,
    94: `2`,
    940: `350`,
    941: `351`,
    942: `352`,
    943: `352`,
    944: `353`,
    945: `354`,
    946: `355`,
    947: `355`,
    948: `356`,
    949: `357`,
    95: `2`,
    950: `358`,
    951: `358`,
    952: `359`,
    953: `360`,
    954: `361`,
    955: `362`,
    956: `362`,
    957: `364`,
    958: `364`,
    959: `365`,
    96: `2`,
    960: `365`,
    961: `366`,
    962: `367`,
    963: `367`,
    964: `368`,
    965: `368`,
    966: `368`,
    967: `369`,
    968: `370`,
    969: `371`,
    97: `2`,
    970: `372`,
    971: `372`,
    972: `372`,
    973: `373`,
    974: `374`,
    975: `375`,
    976: `375`,
    977: `376`,
    978: `377`,
    979: `377`,
    98: `2`,
    980: `378`,
    981: `379`,
    982: `380`,
    983: `381`,
    984: `381`,
    985: `382`,
    986: `383`,
    987: `384`,
    988: `386`,
    989: `386`,
    99: `2`,
    990: `386`,
    991: `388`,
    992: `388`,
    993: `389`,
    994: `389`,
    995: `389`,
    996: `390`,
    997: `390`,
    998: `390`,
    999: `392`
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T11","name":"v4117","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_94","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"_Admin_setNft0_94","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Admin_setReward0_94","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_94","type":"bool"},{"internalType":"bool","name":"_User_optin0_94","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1171","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1189","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1471","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1491","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1511","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1795","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1815","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1840","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2117","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v893","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"insufficient","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"notify","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v4097","type":"address"},{"internalType":"address payable","name":"v4098","type":"address"}],"name":"Admin_setNft","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v4105","type":"address"},{"internalType":"uint256","name":"v4106","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v4068","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v4074","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v4078","type":"address"}],"name":"Info_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"User_claimAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_94","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"_Admin_setNft0_94","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Admin_setReward0_94","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_94","type":"bool"},{"internalType":"bool","name":"_User_optin0_94","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4120","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200475c38819003918201601f19168301916001600160401b038311848410176200057e578084926040948552833981010312620006e9576020604051916200004c83620006ee565b80518352015161ffff1981168103620006e957602082015260008055436003556040516101c081016001600160401b038111828210176200057e576000916101a0916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015282610140820152826101608201528261018082015201526040519081606081011060018060401b036060840111176200057e57606082016040526200011460608301620006ee565b6000606083015260006080830152606082018252620001326200070a565b6020830152620001416200073a565b604083015260ff60045416620006d0577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a180518015908115620006c3575b5015620006aa5734620006915760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152604051918260a081011060018060401b0360a0850111176200057e5760409060a0840182526000845260006020850152620002506200073a565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b036020830111176200057e5760208181016040908152600083528301510151156200059457506040516001600160401b036101408201908111908211176200057e578061014061012092016040526000815260006020820152600060408201526000606082015260006080820152620003076200070a565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c08101518284015260e0810151610140840152610100810151610160840152015161018082015261018081526101a0810181811060018060401b038211176200057e5760405280516001600160401b0381116200057e576200046e6002546200078c565b601f811162000530575b50602091601f8211600114620004c657918192600092620004ba575b50508160011b916000199060031b1c1916176002555b604051613f599081620007e38239f35b01519050388062000494565b601f19821692600260005260206000209160005b8581106200051757508360019510620004fd575b505050811b01600255620004aa565b015160001960f88460031b161c19169055388080620004ee565b91926020600181928685015181550194019201620004da565b60026000526200056c906000805160206200473c833981519152601f840160051c8101916020851062000573575b601f0160051c0190620007c9565b3862000478565b90915081906200055e565b634e487b7160e01b600052604160045260246000fd5b60018060a01b0360008080808487511660808801519082821562000687575bf1156200067157600080939281939282934780935251168282156200067d575bf1156200067157600080556000600155620005f06002546200078c565b80620005fe575b50620004aa565b601f811160011462000618575060006002555b38620005f7565b60026000526200066090601f0160051c6000805160206200473c833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620007c9565b600060208120816002555562000611565b6040513d6000823e3d90fd5b506108fc620005d3565b506108fc620005b3565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b905060015414386200019e565b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200057e57604052565b604051906200071982620006ee565b60006020836040516200072c81620006ee565b838152838382015281520152565b6040519060e082016001600160401b038111838210176200057e576040528160c0600091828152826020820152620007716200070a565b60408201528260608201528260808201528260a08201520152565b90600182811c92168015620007be575b6020831014620007a857565b634e487b7160e01b600052602260045260246000fd5b91607f16916200079c565b818110620007d5575050565b60008155600101620007c956fe6040608081526004908136101561001d575b5050361561001b57005b005b600090813560e01c80630bda4657146109b95780631e93b0f11461099b57806336e56ea51461093b5780633702d0ce1461090057806355c42a95146108b657806355fc318b14610810578063672422c7146107c157806374623535146107865780637a2b54dc146107445780637f0595e2146106dc57806383230757146106be578063883513de1461067257806392cf8bd514610624578063a57924241461058f578063a5928cf51461054e578063a8d65f20146104a3578063ab53f2c614610438578063bf7df9c3146103eb578063c5d86f6f14610319578063cd6637a8146102cb578063f33c0dce146102615763f74a4a8e1461011c5750610011565b61012036600319011261025d57610131610e2d565b9281519061013e82610aff565b803582526101003660231901126102465782519060c08201906001600160401b0382118383101761024a57508352602435600581101561023a578152604435801515810361023a576020820152826063193601126102465782516101a181610aff565b6001600160a01b039060643582811681036102425781526084358281168103610242576020820152848301528360a31936011261023a578351906101e482610aff565b60a435908116810361023e57815260c4356020820152606082015260e435801515810361023a57608082015261010435801515810361023a5791816102349360a06020989401528682015261118b565b51908152f35b8480fd5b8580fd5b8680fd5b8380fd5b634e487b7160e01b865260419052602485fd5b5080fd5b50913461025d578160031936011261025d57600361027d610e2d565b9254036102b457602061014084846101006102a7610299610bb9565b868082518301019101610fe1565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b50913461025d578160031936011261025d5760036102e7610e2d565b925403610302576020610120848460c06102a7610299610bb9565b602490600c84519163100960cb60e01b8352820152fd5b508290346103e75760209182600319360112610246576001600160a01b0390358181169081900361023a57826060958192610352610c6e565b5061035b610c6e565b81835260068852600160ff858520541661037481610a78565b036103d75750815260068652208282519161038e83610b30565b5460ff811661039c81610a78565b835260ff8160081c1615158784015260101c16828201525b81519481516103c281610a78565b86528082015115159086015201511690820152f35b80935082915052858201526103b4565b8280fd5b5082346103e75760203660031901126103e75735916001600160a01b0383168303610435575061042661043192610420610c6e565b50610ddc565b905191829182610a98565b0390f35b80fd5b503461025d578160031936011261025d578154610453610bb9565b91805193849283526020828185015284518093850152815b83811061048c57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161046b565b508060031936011261025d5760606104b9610a5d565b926105436104c5610e2d565b809285516104d281610aff565b60209788820160018060a01b03809216835260243581528851916104f583610aff565b895161050081610aff565b858152858c82015283528a830193610516610ea6565b855251168251525189825101526002825152518682510152610536610f10565b918252518782015261118b565b015115159051908152f35b508160031936011261025d5761018060209261054361056b610e2d565b8092610575610f10565b878101906003825152511515608082510152610536610f10565b50913461025d57602036600319011261025d576105aa610a5d565b9060036105b5610e2d565b93540361060d57602060c0858560016105ee876105e16105d3610bb9565b888082518301019101610fe1565b50828060a01b0316610ddc565b516105f881610a78565b61060181610a78565b14928391015251908152f35b602490600985519163100960cb60e01b8352820152fd5b50913461025d578160031936011261025d576003610640610e2d565b92540361065b576020610100848460e06102a7610299610bb9565b602490600b84519163100960cb60e01b8352820152fd5b50913461025d578160031936011261025d57600361068e610e2d565b9254036106a757602060a08484816102a7610299610bb9565b602490600884519163100960cb60e01b8352820152fd5b503461025d578160031936011261025d576020906001549051908152f35b50913461025d57602036600319011261025d576106f7610a5d565b906003610702610e2d565b93540361072d5760206080858560016105ee876107206105d3610bb9565b50828060a01b0316610d10565b602490600785519163100960cb60e01b8352820152fd5b5082826003193601126103e7576020926105436101a092610763610e2d565b92839161076e610f10565b8881019182515251151560a082510152610536610f10565b5082346103e75760203660031901126103e75735916001600160a01b03831683036104355750610426610431926107bb610c6e565b50610d10565b50913461025d578160031936011261025d5760036107dd610e2d565b9254036107f957602061016084846101206102a7610299610bb9565b602490600e84519163100960cb60e01b8352820152fd5b508060031936011261025d57610824610a5d565b6001600160a01b0360243581811693929084900361023a576105439083949561084b610e2d565b93849286519161085a83610aff565b602099818b850193168452825287519161087383610aff565b885161087e81610aff565b858152858c8201528352818b840194610895610ea6565b86525116835152511689825101526001825152518682510152610536610f10565b508160031936011261025d57602080926105436108d1610e2d565b80926108db610f10565b858101908282515251151586825101526108f3610f10565b918252518582015261118b565b5082346103e75760203660031901126103e75735916001600160a01b0383168303610435575061042661043192610935610c6e565b50610d8b565b5082346103e75760203660031901126103e75735916001600160a01b0383168303610435575061097560609261096f610c6e565b50610c8d565b9080805192805161098581610a78565b8452602081015115156020850152015190820152f35b503461025d578160031936011261025d576020906003549051908152f35b50919034610435576020366003190112610435576109d5610a5d565b6109dd610e2d565b926003835403610a4657602060e086868187876109fb6105d3610bb9565b506001600160a01b0316906001610a1183610c8d565b51610a1b81610a78565b610a2481610a78565b03610a3b57506102a790610c8d565b015251908152f35b915050928391610a33565b602490600a86519163100960cb60e01b8352820152fd5b600435906001600160a01b0382168203610a7357565b600080fd5b60021115610a8257565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610aae81610a78565b845260208101511515602085015201511515910152565b90600182811c92168015610af5575b6020831014610adf57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610ad4565b604081019081106001600160401b03821117610b1a57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b03821117610b1a57604052565b60e081019081106001600160401b03821117610b1a57604052565b602081019081106001600160401b03821117610b1a57604052565b61014081019081106001600160401b03821117610b1a57604052565b6101a081019081106001600160401b03821117610b1a57604052565b604051906000600254610bcb81610ac5565b808552600191808316908115610c4f5750600114610c09575b5050829003601f01601f191682016001600160401b03811183821017610b1a57604052565b60026000908152602093509183600080516020613ead8339815191525b838510610c3b57505050508301013880610be4565b805488860183015293019284908201610c26565b919250506020925060ff191682850152151560051b8301013880610be4565b60405190610c7b82610b30565b60006040838281528260208201520152565b90610c96610c6e565b9160018060a01b03166000908082526005602052600160ff604084205416610cbd81610a78565b03610d055760409293508152600560205220600160405191610cde83610b30565b60ff8154818116610cee81610a78565b855260081c16151560208401520154604082015290565b508083526020830152565b90610d19610c6e565b9160018060a01b03166000908082526007602052600160ff604084205416610d4081610a78565b03610d05576040929350815260076020522060ff60405191610d6183610b30565b54818116610d6e81610a78565b8352818160081c161515602084015260101c161515604082015290565b90610d94610c6e565b9160018060a01b03166000908082526008602052600160ff604084205416610dbb81610a78565b03610d05576040929350815260086020522060ff60405191610d6183610b30565b90610de5610c6e565b9160018060a01b03166000908082526009602052600160ff604084205416610e0c81610a78565b03610d05576040929350815260096020522060ff60405191610d6183610b30565b604051906101c082016001600160401b03811183821017610b1a57604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152565b6040519060c082016001600160401b03811183821017610b1a576040528160a0600091828152826020820152604051610ede81610aff565b8381528360208201526040820152604051610ef881610aff565b83815283602082015260608201528260808201520152565b60405190610f1d82610aff565b81600081526020610f2c610ea6565b910152565b60405190610f3e82610aff565b6000602083604051610f4f81610aff565b838152838382015281520152565b60405190610f6a82610b4b565b8160c0600091828152826020820152610f81610f31565b60408201528260608201528260808201528260a08201520152565b60405190610fa982610b4b565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b51908115158203610a7357565b8091036101808112610a73576040805192610140928385016001600160401b03811186821017610b1a57835281516001600160a01b0381168103610a73578552602082015161ffff1981168103610a7357602086015282820151838601526060820151606086015261105560808301610fd4565b6080860152609f190160608112610a73578280519161107383610aff565b12610a7357610160925161108681610aff565b60a0830151815260c0830151602082015281526110a560e08301610fd4565b602082015260a08501526101008082015160c0860152610120938483015160e08701528201519085015201519082015290565b516005811015610a825790565b6040519060a082016001600160401b03811183821017610b1a576040526000608083828152826020820152611118610f5d565b60408201528260608201520152565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160c01b031916918101919091526001600160a01b0390911660e08201526101000190565b6040519291906102e084016001600160401b03811185821017610b1a576040526111b3610f5d565b84526040516111c181610aff565b600081526000602082015260208501526111d9610f5d565b60408501526111e6610f9c565b60608501526111f3610f5d565b608085015260405161120481610aff565b600081526000602082015260a0850152600060c0850152600060e08501526000610100850152600061012085015261123a610f5d565b610140850152611248610f9c565b610160850152611256610f5d565b610180850152611264610f9c565b6101a0850152611272610f5d565b6101c0850152611280610c6e565b6101e08501526000610200850152600061022085015261129e610f5d565b6102408501526112ac610c6e565b6102608501526112ba610f5d565b6102808501526112c8610f5d565b6102a08501526112d6610f5d565b6102c0850152600360005403613e30576113006112f1610bb9565b60208082518301019101610fe1565b9060ff60045416613e17576040513381528151602082015260208201518051916005831015610a825760a0610140927fceca346bc1361d27ed93d7441bf5c1ef414dc5ae7781d454dd13106ecfe344459460408401526020810151151560608401526040810151600180841b0381511660808501526020600180851b03910151168284015260206060820151600180851b0381511660c0860152015160e08401526080810151151561010084015201511515610120820152a180518015908115613e0b575b5015613df2576113d860208201516110d8565b6005811015610a825761185757508051336001600160a01b039091160361183e573461182557600060206040937f8d677ca3d7da00e3c808911bf758f26b4696934cd8c8f894e74bba65bba4fff5828651858152a1015260608101518451526080810151151560208551015260a0810151828551015260c081015160608551015260e081015160808551015261010081015160a08551015261012081015160c0855101526114846110e5565b81516001600160a01b0316815260208083015161ffff191690820152935182850152436060850152015160808301526040516114bf81610b66565b600081526040830151602001511561174d57506101206040516114e181610b81565b6000815260006020820152600060408201526000606082015260006080820152611509610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261164182610b9d565b81516001600160401b038111610b1a5761165c600254610ac5565b601f8111611705575b50602092601f82116001146116a25792819293600092611697575b50508160011b916000199060031b1c191617600255565b015190503880611680565b601f19821693600260005260206000209160005b8681106116ed57508360019596106116d4575b505050811b01600255565b015160001960f88460031b161c191690553880806116c9565b919260206001819286850151815501940192016116b6565b600260005261173d90600080516020613ead833981519152601f840160051c81019160208510611743575b601f0160051c0190613e95565b38611665565b9091508190611730565b9091600080808060018060a01b0385511660808601519082821561181c575bf115611807574791829052516000918291829182916001600160a01b0316828215611813575bf115611807576000805560006001556117ac600254610ac5565b806117b45750565b601f81116001146117c757506000600255565b60026000526117fa90601f0160051c600080516020613ead83398151915201600080516020613ecd833981519152613e95565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611792565b506108fc61176c565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b61186460208201516110d8565b6005811015610a825760010361203b5760206040910151015160208501523461202257602084015151604092906001906118a6906001600160a01b0316610ddc565b516118b081610a78565b6118b981610a78565b03611c4e5760208581018051516001600160a01b03908116600090815260068452868120805460ff1916600190811790915592518085015190519092168152869020805462010000600160b01b03191660109290921b62010000600160b01b031691909117905584518181529092859290917f955ea3945217fefbb1138492b7e53889ef43357cf7793fdab150a14ce29603719190a101526060810151828501515260808101511515602083860151015260a08101518280860151015260c0810151606083860151015260e0810151608083860151015261010081015160a083860151015261012081015160c0838601510152816119b56110e5565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516119f181610b66565b600081526040830151602001511561174d5750610120604051611a1381610b81565b6000815260006020820152600060408201526000606082015260006080820152611a3b610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611b7382610b9d565b81516001600160401b038111610b1a57611b8e600254610ac5565b601f8111611c11575b50602092601f8211600114611bc857928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611bf957508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201611bdc565b6002600052611c4890600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b38611b97565b60608581018051600080516020613f2d83398151915290528051600080516020613eed83398151915260209182015281517232bc903430bb32b713ba1037b83a32b21034b760691b908701528151600093018390528151608001839052815160a001839052815160c001839052905190870151518551929386939092600080516020613f0d833981519152928291611cf0916001600160a01b03169083611127565b0390a17fad0630c61dc923d64dde0cbe2751bb96d8910c0f40d13548965fa281eecb4a0760208351858152a1015260608101516080850151526080810151151560206080860151015260a0810151826080860151015260c081015160606080860151015260e0810151608080860151015261010081015160a06080860151015261012081015160c0608086015101526080611d896110e5565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051611dc581610b66565b600081526040830151602001511561174d5750610120604051611de781610b81565b6000815260006020820152600060408201526000606082015260006080820152611e0f610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611f4782610b9d565b81516001600160401b038111610b1a57611f62600254610ac5565b601f8111611fe5575b50602092601f8211600114611f9c57928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611fcd57508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201611fb0565b600260005261201c90600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b38611f6b565b60405163100960cb60e01b815260176004820152602490fd5b61204b60208296939601516110d8565b6005811015610a8257600203612cd557606060208092015101518060a08401520180516060860151108060c0840152600014612ccd57515b8060e0830152806040860151016101008301523403612cb45760a08101515161010092906001906120bc906001600160a01b0316610ddc565b516120c681610a78565b6120cf81610a78565b036124f0576060600191828060a01b0360a08501515116600052600560205260406000208360ff1982541617905582612113818060a01b0360a08701515116610c8d565b5161211d81610a78565b61212681610a78565b036124e6576121576040612145858060a01b0360a08801515116610c8d565b01515b602060a0870151015190613e74565b838060a01b0360a08601515116600052600560205283604060002001557face832e68c7775900da8eedd5bd1c7934a816009598647f32ba401fa07ddca276020604051858152a1015260c0810151156124d6576121c16060850151602060a0840151015190613e74565b6101208201525b61012081015161014082015152608084015115156020610140830151015260a08401516040610140830151015260c08401516060610140830151015260e0840151608061014083015101528184015160a0610140830151015261012084015160c061014083015101526122396110e5565b9360018060a01b038151168552602061ffff1991015116602085015261014081015160408501524360608501520151608083015260405161227981610b66565b600081526040830151602001511561174d575061012060405161229b81610b81565b60008152600060208201526000604082015260006060820152600060808201526122c3610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526123fb82610b9d565b81516001600160401b038111610b1a57612416600254610ac5565b601f8111612499575b50602092601f821160011461245057928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061248157508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201612464565b60026000526124d090600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b3861241f565b60608401516101208201526121c8565b6121576000612148565b60c0820151600091606091156128d85761016084018051782cb7bab9103ab9b2b9103430b9b713ba1037b83a32b21034b760391b9052805160200184905280516040908101859052815184018590528151608001859052815160a0908101869052825160c001869052915191860151519051600080516020613f0d833981519152929091829161258a916001600160a01b03169083611127565b0390a17fceace4cb3b1226015f4c36dfc25feb5bf893a3a69a2bcfaff2334c79c6d8a0a16020604051858152a101526125d06060850151602060a0840151015190613e74565b61018082015152608084015115156020610180830151015260a08401516040610180830151015260c08401516060610180830151015260e0840151608061018083015101528184015160a0610180830151015261012084015160c0610180830151015261263b6110e5565b9360018060a01b038151168552602061ffff1991015116602085015261018081015160408501524360608501520151608083015260405161267b81610b66565b600081526040830151602001511561174d575061012060405161269d81610b81565b60008152600060208201526000604082015260006060820152600060808201526126c5610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526127fd82610b9d565b81516001600160401b038111610b1a57612818600254610ac5565b601f811161289b575b50602092601f821160011461285257928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061288357508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201612866565b60026000526128d290600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b38612821565b6101a084018051600080516020613f2d83398151915290528051600080516020613eed83398151915260209091015280517232bc903430bb32b713ba1037b83a32b21034b760691b604091820152815184018590528151608001859052815160a0908101869052825160c001869052915191860151519051600080516020613f0d8339815191529290918291612978916001600160a01b03169083611127565b0390a17fdabe4f37d3ec648a60b7bd5322983eefc63e267f69ea564cbb30ae5c97f809736020604051858152a1015260608401516101c0820151526080840151151560206101c0830151015260a084015160406101c0830151015260c084015160606101c0830151015260e084015160806101c083015101528184015160a06101c0830151015261012084015160c06101c08301510152612a176110e5565b9360018060a01b038151168552602061ffff199101511660208501526101c0810151604085015243606085015201516080830152604051612a5781610b66565b600081526040830151602001511561174d5750610120604051612a7981610b81565b6000815260006020820152600060408201526000606082015260006080820152612aa1610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612bd982610b9d565b81516001600160401b038111610b1a57612bf4600254610ac5565b601f8111612c77575b50602092601f8211600114612c2e57928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612c5f57508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201612c42565b6002600052612cae90600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b38612bfd565b60405163100960cb60e01b815260186004820152602490fd5b506000612083565b612ce560208296939601516110d8565b6005811015610a82576003036139495750906001612d0233610c8d565b806101e087015251612d1381610a78565b612d1c81610a78565b0361393057346139175760016101e085015151612d3881610a78565b612d4181610a78565b036139105760406101e085015101515b80610200860152604083015181811160001461390b5750805b6102208601526040830151116130f2579060006101806040937f98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e9835160206102008901518751908152a17f33907453dd832c1f3ed024668da07163e2278974d068c0c72d3f74d1cca78cb460208651858152a10152606081015161024085015152608081015115156020610240860151015260a081015182610240860151015260c08101516060610240860151015260e08101516080610240860151015261010081015160a06102408601510152612e44610120820151613e49565b60c06102408601510152610240612e596110e5565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612e9581610b66565b600081526040830151602001511561174d5750610120604051612eb781610b81565b6000815260006020820152600060408201526000606082015260006080820152612edf610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261301782610b9d565b81516001600160401b038111610b1a57613032600254610ac5565b601f81116130b5575b50602092601f821160011461306c57928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061309d57508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201613080565b60026000526130ec90600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b3861303b565b6101806001918261310596949633610d8b565b5161310f81610a78565b61311881610a78565b036134c2577ff72f18adb64d06e4b40258ceba3fbcb85ab6acedf38f8191ac4d62870475619f6020604051858152a1015260008080806102208501518181156134b9575b3390f115611807573360005260056020526000600160408220828155015561318e606084015161022083015190613e88565b6102a0820151526080830151151560206102a0830151015260a083015160406102a083015101526131c960c084015161022083015190613e74565b60606102a0830151015260e083015160806102a083015101526131f0610100840151613e49565b60a06102a0830151015261012083015160c06102a0830151015261022060406132176110e5565b85516001600160a01b0316815260208087015161ffff1916908201526102a0840151828201524360608201529401519101519003608083015260405161325c81610b66565b600081526040830151602001511561174d575061012060405161327e81610b81565b60008152600060208201526000604082015260006060820152600060808201526132a6610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526133de82610b9d565b81516001600160401b038111610b1a576133f9600254610ac5565b601f811161347c575b50602092601f821160011461343357928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061346457508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201613447565b60026000526134b390600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b38613402565b506108fc61315c565b7fbbe685d3081b655043fc78e3a46b09bdbbbf947e90eecc1653018a245b84bf566020604051858152a1015233610260820151526102208101516020610260830151015261ffff19602084015116604061026083015101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2360606102608301516040519060018060a01b03815116825260208101516020830152604061ffff19910151166040820152a1336000908152600860205260408120805462ff00ff19166001179055610220820151819081908190818115613902575b3390f11561180757336000526005602052600060016040822082815501556135cf606084015161022083015190613e88565b61028082015152608083015115156020610280830151015260a08301516040610280830151015261360a60c084015161022083015190613e74565b6060610280830151015260e083015160806102808301510152613631610100840151613e49565b60a06102808301510152613649610120840151613e49565b60c0610280830151015261022060406136606110e5565b85516001600160a01b0316815260208087015161ffff19169082015261028084015182820152436060820152940151910151900360808301526040516136a581610b66565b600081526040830151602001511561174d57506101206040516136c781610b81565b60008152600060208201526000604082015260006060820152600060808201526136ef610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261382782610b9d565b81516001600160401b038111610b1a57613842600254610ac5565b601f81116138c5575b50602092601f821160011461387c57928192936000926116975750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106138ad57508360019596106116d457505050811b01600255565b91926020600181928685015181550194019201613890565b60026000526138fc90600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b3861384b565b506108fc61359d565b612d6a565b6000612d51565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60206139569101516110d8565b6005811015610a825760041461396d575b50509050565b34613dd957336000908152600960209081526040808320805462ff00ff19166001179055805183815290946101a09290917f71ad1b42656ea3746ff3cce074dd3334fcbc87787cc38f8b18f2b88084ed86c39190a1015260608101516102c0850151526080810151151560206102c0860151015260a0810151826102c0860151015260c081015160606102c0860151015260e081015160806102c0860151015261010081015160a06102c0860151015261012081015160c06102c086015101526102c0613a386110e5565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051613a7481610b66565b6000815260408301516020015115613d015750610120604051613a9681610b81565b6000815260006020820152600060408201526000606082015260006080820152613abe610f31565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613bf682610b9d565b81516001600160401b038111610b1a57613c11600254610ac5565b601f8111613cc4575b50602092601f8211600114613c5e5792819293600092613c53575b50508160011b916000199060031b1c1916176002555b803880613967565b015190503880613c35565b601f19821693600260005260206000209160005b868110613cac5750836001959610613c93575b505050811b01600255613c4b565b015160001960f88460031b161c19169055388080613c85565b91926020600181928685015181550194019201613c72565b6002600052613cfb90600080516020613ead833981519152601f840160051c8101916020851061174357601f0160051c0190613e95565b38613c1a565b9091600080808060018060a01b03855116608086015190828215613dd0575bf115611807574791829052516000918291829182916001600160a01b0316828215613dc7575bf11561180757600080556000600155613d60600254610ac5565b80613d6c575b50613c4b565b601f8111600114613d84575060006002555b38613d66565b6002600052613db790601f0160051c600080516020613ead83398151915201600080516020613ecd833981519152613e95565b6000602081208160025555613d7e565b506108fc613d46565b506108fc613d20565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b905060015414386113c5565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b906001820191828111613e5e578210610a7357565b634e487b7160e01b600052601160045260246000fd5b9190820191828111613e5e578210610a7357565b908103908111613e5e5790565b818110613ea0575050565b60008155600101613e9556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf7420666f7220746865207573657220697320696e76616c696420616e6420746809d8b835c4a9bc404ae4d3376ad99a9231f0da2c04c16034ca895777fffc54ba5468652062616c616e636520796f752061726520747279696e6720746f207365a164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 18268,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './main.rsh:225:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './main.rsh:70:37:after expr stmt semicolon',
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
  "Admin_endContractAndTransfer": Admin_endContractAndTransfer,
  "Admin_setNft": Admin_setNft,
  "Admin_setReward": Admin_setReward,
  "Deployer": Deployer,
  "User_claimAll": User_claimAll,
  "User_optin": User_optin
  };
export const _APIs = {
  Admin: {
    endContractAndTransfer: Admin_endContractAndTransfer,
    setNft: Admin_setNft,
    setReward: Admin_setReward
    },
  User: {
    claimAll: User_claimAll,
    optin: User_optin
    }
  };
