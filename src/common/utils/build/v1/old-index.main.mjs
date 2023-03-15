// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (ae94865f)';
export const _backendVersion = 25;

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
  return {
    claimed: [ctc3],
    insufficient: [ctc1],
    newReward: [ctc0, ctc4]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  const map1_ctc = ctc6;
  
  const map2_ctc = ctc6;
  
  const map3_ctc = ctc6;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1029, v1030, v1046, v1048, v1052] = svs;
      return (await ((async (_v1038 ) => {
          const v1038 = stdlib.protect(ctc0, _v1038, null);
        
        const v1039 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1038), null);
        const v1040 = {
          None: 0,
          Some: 1
          }[v1039[0]];
        const v1041 = stdlib.eq(v1040, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1041;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1029, v1030, v1046, v1048, v1052] = svs;
      return (await ((async (_v1042 ) => {
          const v1042 = stdlib.protect(ctc0, _v1042, null);
        
        const v1043 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v1042), null);
        const v1044 = {
          None: 0,
          Some: 1
          }[v1043[0]];
        const v1045 = stdlib.eq(v1044, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1045;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_rewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1029, v1030, v1046, v1048, v1052] = svs;
      return (await ((async (_v1035 ) => {
          const v1035 = stdlib.protect(ctc0, _v1035, null);
        
        const v1036 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1035), null);
        const v1037 = stdlib.fromSome(v1036, stdlib.checkedBigNumberify('./index.rsh:58:49:decimal', stdlib.UInt_max, '0'));
        
        return v1037;}))(...args));
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
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc3
          },
        rewards: {
          decode: Info_rewards,
          dom: [ctc0],
          rng: ctc2
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc2, ctc2]
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
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc6,
    Admin_deposit0_70: ctc7,
    Admin_editUserReward0_70: ctc8,
    Admin_endContractAndTransfer0_70: ctc9,
    Admin_revokeAdmin0_70: ctc6,
    Admin_setReward0_70: ctc8,
    User_claim0_70: ctc9,
    User_optin0_70: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1105 = ctc.selfAddress();
  const v1107 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:104:34:application call to [unknown function] (defined at: ./index.rsh:104:34:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_addAdmin0_70" (defined at: ./index.rsh:104:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v1110 = stdlib.addressEq(v1105, v1029);
  const v1111 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1105), null);
  const v1112 = {
    None: 0,
    Some: 1
    }[v1111[0]];
  const v1113 = stdlib.eq(v1112, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1114 = v1110 ? true : v1113;
  stdlib.assert(v1114, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:34:application call to [unknown function] (defined at: ./index.rsh:104:34:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_addAdmin0_70" (defined at: ./index.rsh:104:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v1121 = ['Admin_addAdmin0_70', v1107];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1121],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1202), null);
          ;
          const v1248 = v1206[stdlib.checkedBigNumberify('./index.rsh:104:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v1248, null);
          const v1257 = null;
          const v1258 = await txn1.getOutput('Admin_addAdmin', 'v1257', ctc0, v1257);
          
          const v4824 = v1046;
          const v4826 = v1048;
          const v4828 = v1052;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      undefined /* setApiDetails */;
      const v1212 = stdlib.addressEq(v1202, v1029);
      const v1213 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1202), null);
      const v1214 = {
        None: 0,
        Some: 1
        }[v1213[0]];
      const v1215 = stdlib.eq(v1214, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1216 = v1212 ? true : v1215;
      stdlib.assert(v1216, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:34:application call to [unknown function] (defined at: ./index.rsh:104:34:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:104:34:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v1248 = v1206[stdlib.checkedBigNumberify('./index.rsh:104:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v1248, null);
      const v1257 = null;
      const v1258 = await txn1.getOutput('Admin_addAdmin', 'v1257', ctc0, v1257);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v1206, v1258), {
          at: './index.rsh:104:11:application',
          fs: ['at ./index.rsh:104:11:application call to [unknown function] (defined at: ./index.rsh:104:11:function exp)', 'at ./index.rsh:113:14:application call to "ret" (defined at: ./index.rsh:111:15:function exp)', 'at ./index.rsh:111:15:application call to [unknown function] (defined at: ./index.rsh:111:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v4824 = v1046;
      const v4826 = v1048;
      const v4828 = v1052;
      return;
      
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      return;
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      return;
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      return;
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
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
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc7,
    Admin_deposit0_70: ctc6,
    Admin_editUserReward0_70: ctc8,
    Admin_endContractAndTransfer0_70: ctc9,
    Admin_revokeAdmin0_70: ctc7,
    Admin_setReward0_70: ctc8,
    User_claim0_70: ctc9,
    User_optin0_70: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1055 = ctc.selfAddress();
  const v1057 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:68:32:application call to [unknown function] (defined at: ./index.rsh:68:32:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_deposit0_70" (defined at: ./index.rsh:68:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v1058 = v1057[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1060 = stdlib.addressEq(v1055, v1029);
  const v1061 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1055), null);
  const v1062 = {
    None: 0,
    Some: 1
    }[v1061[0]];
  const v1063 = stdlib.eq(v1062, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1064 = v1060 ? true : v1063;
  stdlib.assert(v1064, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:32:application call to [unknown function] (defined at: ./index.rsh:68:32:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_deposit0_70" (defined at: ./index.rsh:68:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v1071 = ['Admin_deposit0_70', v1057];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1071],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v1058, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v1437 = v1424[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1202), null);
          const v1464 = stdlib.add(v1052, v1437);
          sim_r.txns.push({
            amt: v1437,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1492 = null;
          const v1493 = await txn1.getOutput('Admin_deposit', 'v1492', ctc0, v1492);
          
          const v1499 = stdlib.safeAdd(v1046, v1437);
          const v4908 = v1499;
          const v4910 = v1048;
          const v4912 = v1464;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      return;
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      undefined /* setApiDetails */;
      const v1437 = v1424[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
      const v1438 = stdlib.addressEq(v1202, v1029);
      const v1439 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1202), null);
      const v1440 = {
        None: 0,
        Some: 1
        }[v1439[0]];
      const v1441 = stdlib.eq(v1440, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1442 = v1438 ? true : v1441;
      stdlib.assert(v1442, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:32:application call to [unknown function] (defined at: ./index.rsh:68:32:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:68:32:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v1464 = stdlib.add(v1052, v1437);
      ;
      const v1492 = null;
      const v1493 = await txn1.getOutput('Admin_deposit', 'v1492', ctc0, v1492);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v1424, v1493), {
          at: './index.rsh:68:11:application',
          fs: ['at ./index.rsh:68:11:application call to [unknown function] (defined at: ./index.rsh:68:11:function exp)', 'at ./index.rsh:73:14:application call to "ret" (defined at: ./index.rsh:72:15:function exp)', 'at ./index.rsh:72:15:application call to [unknown function] (defined at: ./index.rsh:72:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v1499 = stdlib.safeAdd(v1046, v1437);
      const v4908 = v1499;
      const v4910 = v1048;
      const v4912 = v1464;
      return;
      
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      return;
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      return;
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      return;
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc7,
    Admin_deposit0_70: ctc8,
    Admin_editUserReward0_70: ctc6,
    Admin_endContractAndTransfer0_70: ctc9,
    Admin_revokeAdmin0_70: ctc7,
    Admin_setReward0_70: ctc6,
    User_claim0_70: ctc9,
    User_optin0_70: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1091 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:94:45:application call to [unknown function] (defined at: ./index.rsh:94:45:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_editUserReward0_70" (defined at: ./index.rsh:94:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v1103 = ['Admin_editUserReward0_70', v1091];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1103],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:96:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          ;
          const v1720 = v1642[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '0')];
          const v1721 = v1642[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '1')];
          await stdlib.simMapSet(sim_r, 0, v1720, v1721);
          const v1724 = null;
          const v1725 = await txn1.getOutput('Admin_editUserReward', 'v1724', ctc0, v1724);
          
          const v4992 = v1046;
          const v4994 = v1048;
          const v4996 = v1052;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      return;
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      undefined /* setApiDetails */;
      ;
      const v1720 = v1642[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '0')];
      const v1721 = v1642[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '1')];
      await stdlib.mapSet(map0, v1720, v1721);
      const v1724 = null;
      const v1725 = await txn1.getOutput('Admin_editUserReward', 'v1724', ctc0, v1724);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v1642, v1725), {
          at: './index.rsh:94:11:application',
          fs: ['at ./index.rsh:94:11:application call to [unknown function] (defined at: ./index.rsh:94:11:function exp)', 'at ./index.rsh:99:14:application call to "ret" (defined at: ./index.rsh:97:15:function exp)', 'at ./index.rsh:97:15:application call to [unknown function] (defined at: ./index.rsh:97:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v4992 = v1046;
      const v4994 = v1048;
      const v4996 = v1052;
      return;
      
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      return;
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      return;
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      return;
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
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
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc7,
    Admin_deposit0_70: ctc8,
    Admin_editUserReward0_70: ctc9,
    Admin_endContractAndTransfer0_70: ctc6,
    Admin_revokeAdmin0_70: ctc7,
    Admin_setReward0_70: ctc9,
    User_claim0_70: ctc6,
    User_optin0_70: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1157 = ctc.selfAddress();
  const v1159 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:171:44:application call to [unknown function] (defined at: ./index.rsh:171:44:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_endContractAndTransfer0_70" (defined at: ./index.rsh:171:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v1160 = stdlib.addressEq(v1029, v1157);
  stdlib.assert(v1160, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:44:application call to [unknown function] (defined at: ./index.rsh:171:44:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_endContractAndTransfer0_70" (defined at: ./index.rsh:171:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v1165 = ['Admin_endContractAndTransfer0_70', v1159];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1165],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:174:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v1954 = null;
          const v1955 = await txn1.getOutput('Admin_endContractAndTransfer', 'v1954', ctc0, v1954);
          
          const v5081 = stdlib.sub(v1052, v1052);
          sim_r.txns.push({
            kind: 'from',
            to: v1029,
            tok: undefined /* Nothing */
            });
          const v5082 = (stdlib.le(await ctc.getBalance(), v5081) ? stdlib.checkedBigNumberify('./index.rsh:184:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v5081));
          sim_r.txns.push({
            kind: 'from',
            to: v1029,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      return;
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      undefined /* setApiDetails */;
      const v1884 = stdlib.addressEq(v1029, v1202);
      stdlib.assert(v1884, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:44:application call to [unknown function] (defined at: ./index.rsh:171:44:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:171:44:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v1954 = null;
      const v1955 = await txn1.getOutput('Admin_endContractAndTransfer', 'v1954', ctc0, v1954);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v1860, v1955), {
          at: './index.rsh:171:11:application',
          fs: ['at ./index.rsh:171:11:application call to [unknown function] (defined at: ./index.rsh:171:11:function exp)', 'at ./index.rsh:176:14:application call to "ret" (defined at: ./index.rsh:175:15:function exp)', 'at ./index.rsh:175:15:application call to [unknown function] (defined at: ./index.rsh:175:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v5081 = stdlib.sub(v1052, v1052);
      ;
      const v5082 = (stdlib.le(await ctc.getBalance(), v5081) ? stdlib.checkedBigNumberify('./index.rsh:184:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v5081));
      ;
      return;
      
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      return;
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      return;
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      return;
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc6,
    Admin_deposit0_70: ctc7,
    Admin_editUserReward0_70: ctc8,
    Admin_endContractAndTransfer0_70: ctc9,
    Admin_revokeAdmin0_70: ctc6,
    Admin_setReward0_70: ctc8,
    User_claim0_70: ctc9,
    User_optin0_70: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1123 = ctc.selfAddress();
  const v1125 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:118:37:application call to [unknown function] (defined at: ./index.rsh:118:37:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_revokeAdmin0_70" (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v1128 = stdlib.addressEq(v1123, v1029);
  stdlib.assert(v1128, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:37:application call to [unknown function] (defined at: ./index.rsh:118:37:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_revokeAdmin0_70" (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v1135 = ['Admin_revokeAdmin0_70', v1125];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1135],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:121:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v2180 = v2078[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v2180, undefined /* Nothing */);
          const v2185 = null;
          const v2186 = await txn1.getOutput('Admin_revokeAdmin', 'v2185', ctc0, v2185);
          
          const v5160 = v1046;
          const v5162 = v1048;
          const v5164 = v1052;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      return;
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      undefined /* setApiDetails */;
      const v2106 = stdlib.addressEq(v1202, v1029);
      stdlib.assert(v2106, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:37:application call to [unknown function] (defined at: ./index.rsh:118:37:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:118:37:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v2180 = v2078[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v2180, undefined /* Nothing */);
      const v2185 = null;
      const v2186 = await txn1.getOutput('Admin_revokeAdmin', 'v2185', ctc0, v2185);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v2078, v2186), {
          at: './index.rsh:118:11:application',
          fs: ['at ./index.rsh:118:11:application call to [unknown function] (defined at: ./index.rsh:118:11:function exp)', 'at ./index.rsh:124:14:application call to "ret" (defined at: ./index.rsh:122:15:function exp)', 'at ./index.rsh:122:15:application call to [unknown function] (defined at: ./index.rsh:122:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5160 = v1046;
      const v5162 = v1048;
      const v5164 = v1052;
      return;
      
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      return;
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      return;
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc7,
    Admin_deposit0_70: ctc8,
    Admin_editUserReward0_70: ctc6,
    Admin_endContractAndTransfer0_70: ctc9,
    Admin_revokeAdmin0_70: ctc7,
    Admin_setReward0_70: ctc6,
    User_claim0_70: ctc9,
    User_optin0_70: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1075 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:78:40:application call to [unknown function] (defined at: ./index.rsh:78:40:function exp)', 'at ./index.rsh:65:51:application call to "runAdmin_setReward0_70" (defined at: ./index.rsh:78:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v1087 = ['Admin_setReward0_70', v1075];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1087],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          ;
          const v2412 = v2296[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '0')];
          const v2413 = v2296[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '1')];
          const v2416 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2412), null);
          const v2417 = stdlib.fromSome(v2416, stdlib.checkedBigNumberify('./index.rsh:82:60:decimal', stdlib.UInt_max, '0'));
          const v2418 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2412), null);
          const v2419 = {
            None: 0,
            Some: 1
            }[v2418[0]];
          const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v2420) {
            const v2421 = stdlib.safeAdd(v2417, v2413);
            await stdlib.simMapSet(sim_r, 0, v2412, v2421);
            const v2422 = true;
            const v2423 = await txn1.getOutput('Admin_setReward', 'v2422', ctc11, v2422);
            
            const v5244 = v1046;
            const v5246 = v1048;
            const v5248 = v1052;
            sim_r.isHalt = false;
            }
          else {
            const v2432 = false;
            const v2433 = await txn1.getOutput('Admin_setReward', 'v2432', ctc11, v2432);
            
            const v5251 = v1046;
            const v5253 = v1048;
            const v5255 = v1052;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      return;
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      return;
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      undefined /* setApiDetails */;
      ;
      const v2412 = v2296[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '0')];
      const v2413 = v2296[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '1')];
      const v2416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2412), null);
      const v2417 = stdlib.fromSome(v2416, stdlib.checkedBigNumberify('./index.rsh:82:60:decimal', stdlib.UInt_max, '0'));
      const v2418 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2412), null);
      const v2419 = {
        None: 0,
        Some: 1
        }[v2418[0]];
      const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v2420) {
        const v2421 = stdlib.safeAdd(v2417, v2413);
        await stdlib.mapSet(map0, v2412, v2421);
        const v2422 = true;
        const v2423 = await txn1.getOutput('Admin_setReward', 'v2422', ctc11, v2422);
        if (v732) {
          stdlib.protect(ctc0, await interact.out(v2296, v2423), {
            at: './index.rsh:78:11:application',
            fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:11:function exp)', 'at ./index.rsh:85:16:application call to "ret" (defined at: ./index.rsh:81:15:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
            msg: 'out',
            who: 'Admin_setReward'
            });
          }
        else {
          }
        
        const v5244 = v1046;
        const v5246 = v1048;
        const v5248 = v1052;
        return;
        }
      else {
        const v2432 = false;
        const v2433 = await txn1.getOutput('Admin_setReward', 'v2432', ctc11, v2432);
        if (v732) {
          stdlib.protect(ctc0, await interact.out(v2296, v2433), {
            at: './index.rsh:78:11:application',
            fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:11:function exp)', 'at ./index.rsh:88:16:application call to "ret" (defined at: ./index.rsh:81:15:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
            msg: 'out',
            who: 'Admin_setReward'
            });
          }
        else {
          }
        
        const v5251 = v1046;
        const v5253 = v1048;
        const v5255 = v1052;
        return;
        }
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      return;
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
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
    Admin_addAdmin0_70: ctc6,
    Admin_deposit0_70: ctc7,
    Admin_editUserReward0_70: ctc8,
    Admin_endContractAndTransfer0_70: ctc9,
    Admin_revokeAdmin0_70: ctc6,
    Admin_setReward0_70: ctc8,
    User_claim0_70: ctc9,
    User_optin0_70: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v1026 = stdlib.protect(ctc4, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1026],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1030], secs: v1032, time: v1031, didSend: v27, from: v1029 } = txn1;
      
      ;
      const v1033 = await ctc.getContractInfo();
      
      const v1046 = stdlib.checkedBigNumberify('./index.rsh:65:62:decimal', stdlib.UInt_max, '0');
      const v1047 = true;
      const v1048 = stdlib.checkedBigNumberify('./index.rsh:65:53:decimal', stdlib.UInt_max, '0');
      const v1049 = v1031;
      const v1052 = stdlib.checkedBigNumberify('./index.rsh:42:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v1047;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v2954 = stdlib.sub(v1052, v1052);
        sim_r.txns.push({
          kind: 'from',
          to: v1029,
          tok: undefined /* Nothing */
          });
        const v2956 = (stdlib.le(await ctc.getBalance(), v2954) ? stdlib.checkedBigNumberify('./index.rsh:184:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2954));
        sim_r.txns.push({
          kind: 'from',
          to: v1029,
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
  const {data: [v1030], secs: v1032, time: v1031, didSend: v27, from: v1029 } = txn1;
  ;
  const v1033 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v1033), {
    at: './index.rsh:50:27:application',
    fs: ['at ./index.rsh:50:27:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at ./index.rsh:50:27:application call to "liftedInteract" (defined at: ./index.rsh:50:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  let v1046 = stdlib.checkedBigNumberify('./index.rsh:65:62:decimal', stdlib.UInt_max, '0');
  let v1047 = true;
  let v1048 = stdlib.checkedBigNumberify('./index.rsh:65:53:decimal', stdlib.UInt_max, '0');
  let v1049 = v1031;
  let v1052 = stdlib.checkedBigNumberify('./index.rsh:42:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return v1047;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn3;
    switch (v1203[0]) {
      case 'Admin_addAdmin0_70': {
        const v1206 = v1203[1];
        undefined /* setApiDetails */;
        const v1212 = stdlib.addressEq(v1202, v1029);
        const v1213 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1202), null);
        const v1214 = {
          None: 0,
          Some: 1
          }[v1213[0]];
        const v1215 = stdlib.eq(v1214, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1216 = v1212 ? true : v1215;
        stdlib.assert(v1216, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:34:application call to [unknown function] (defined at: ./index.rsh:104:34:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:104:34:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v1248 = v1206[stdlib.checkedBigNumberify('./index.rsh:104:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, v1248, null);
        const v1257 = null;
        await txn3.getOutput('Admin_addAdmin', 'v1257', ctc0, v1257);
        const cv1046 = v1046;
        const cv1047 = true;
        const cv1048 = v1048;
        const cv1049 = v1204;
        const cv1052 = v1052;
        
        v1046 = cv1046;
        v1047 = cv1047;
        v1048 = cv1048;
        v1049 = cv1049;
        v1052 = cv1052;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_70': {
        const v1424 = v1203[1];
        undefined /* setApiDetails */;
        const v1437 = v1424[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
        const v1438 = stdlib.addressEq(v1202, v1029);
        const v1439 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1202), null);
        const v1440 = {
          None: 0,
          Some: 1
          }[v1439[0]];
        const v1441 = stdlib.eq(v1440, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1442 = v1438 ? true : v1441;
        stdlib.assert(v1442, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:32:application call to [unknown function] (defined at: ./index.rsh:68:32:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:68:32:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v1464 = stdlib.add(v1052, v1437);
        ;
        const v1492 = null;
        await txn3.getOutput('Admin_deposit', 'v1492', ctc0, v1492);
        const v1499 = stdlib.safeAdd(v1046, v1437);
        const cv1046 = v1499;
        const cv1047 = true;
        const cv1048 = v1048;
        const cv1049 = v1204;
        const cv1052 = v1464;
        
        v1046 = cv1046;
        v1047 = cv1047;
        v1048 = cv1048;
        v1049 = cv1049;
        v1052 = cv1052;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_70': {
        const v1642 = v1203[1];
        undefined /* setApiDetails */;
        ;
        const v1720 = v1642[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '0')];
        const v1721 = v1642[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '1')];
        await stdlib.mapSet(map0, v1720, v1721);
        const v1724 = null;
        await txn3.getOutput('Admin_editUserReward', 'v1724', ctc0, v1724);
        const cv1046 = v1046;
        const cv1047 = true;
        const cv1048 = v1048;
        const cv1049 = v1204;
        const cv1052 = v1052;
        
        v1046 = cv1046;
        v1047 = cv1047;
        v1048 = cv1048;
        v1049 = cv1049;
        v1052 = cv1052;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_70': {
        const v1860 = v1203[1];
        undefined /* setApiDetails */;
        const v1884 = stdlib.addressEq(v1029, v1202);
        stdlib.assert(v1884, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:44:application call to [unknown function] (defined at: ./index.rsh:171:44:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:171:44:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        const v1954 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v1954', ctc0, v1954);
        const cv1046 = v1046;
        const cv1047 = false;
        const cv1048 = v1048;
        const cv1049 = v1204;
        const cv1052 = v1052;
        
        v1046 = cv1046;
        v1047 = cv1047;
        v1048 = cv1048;
        v1049 = cv1049;
        v1052 = cv1052;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_70': {
        const v2078 = v1203[1];
        undefined /* setApiDetails */;
        const v2106 = stdlib.addressEq(v1202, v1029);
        stdlib.assert(v2106, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:37:application call to [unknown function] (defined at: ./index.rsh:118:37:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:118:37:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v2180 = v2078[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, v2180, undefined /* Nothing */);
        const v2185 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v2185', ctc0, v2185);
        const cv1046 = v1046;
        const cv1047 = true;
        const cv1048 = v1048;
        const cv1049 = v1204;
        const cv1052 = v1052;
        
        v1046 = cv1046;
        v1047 = cv1047;
        v1048 = cv1048;
        v1049 = cv1049;
        v1052 = cv1052;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_70': {
        const v2296 = v1203[1];
        undefined /* setApiDetails */;
        ;
        const v2412 = v2296[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '0')];
        const v2413 = v2296[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '1')];
        const v2416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2412), null);
        const v2417 = stdlib.fromSome(v2416, stdlib.checkedBigNumberify('./index.rsh:82:60:decimal', stdlib.UInt_max, '0'));
        const v2418 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2412), null);
        const v2419 = {
          None: 0,
          Some: 1
          }[v2418[0]];
        const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v2420) {
          const v2421 = stdlib.safeAdd(v2417, v2413);
          await stdlib.mapSet(map0, v2412, v2421);
          const v2422 = true;
          await txn3.getOutput('Admin_setReward', 'v2422', ctc11, v2422);
          const cv1046 = v1046;
          const cv1047 = true;
          const cv1048 = v1048;
          const cv1049 = v1204;
          const cv1052 = v1052;
          
          v1046 = cv1046;
          v1047 = cv1047;
          v1048 = cv1048;
          v1049 = cv1049;
          v1052 = cv1052;
          
          txn2 = txn3;
          continue;}
        else {
          const v2432 = false;
          await txn3.getOutput('Admin_setReward', 'v2432', ctc11, v2432);
          const cv1046 = v1046;
          const cv1047 = true;
          const cv1048 = v1048;
          const cv1049 = v1204;
          const cv1052 = v1052;
          
          v1046 = cv1046;
          v1047 = cv1047;
          v1048 = cv1048;
          v1049 = cv1049;
          v1052 = cv1052;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'User_claim0_70': {
        const v2514 = v1203[1];
        undefined /* setApiDetails */;
        const v2548 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1202), null);
        const v2549 = {
          None: 0,
          Some: 1
          }[v2548[0]];
        const v2550 = stdlib.eq(v2549, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2550, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:26:application call to [unknown function] (defined at: ./index.rsh:129:26:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:129:26:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
          msg: 'Cannot claim because you have not earned reward',
          who: 'Deployer'
          });
        ;
        const v2666 = stdlib.fromSome(v2548, stdlib.checkedBigNumberify('./index.rsh:137:60:decimal', stdlib.UInt_max, '0'));
        const v2668 = stdlib.gt(v1052, v2666);
        const v2669 = v2668 ? v2666 : v1052;
        const v2671 = stdlib.ge(v2666, v1052);
        if (v2671) {
          null;
          const v2672 = false;
          await txn3.getOutput('User_claim', 'v2672', ctc11, v2672);
          const v2678 = stdlib.safeAdd(v1048, stdlib.checkedBigNumberify('./index.rsh:142:31:decimal', stdlib.UInt_max, '1'));
          const cv1046 = v1046;
          const cv1047 = true;
          const cv1048 = v2678;
          const cv1049 = v1204;
          const cv1052 = v1052;
          
          v1046 = cv1046;
          v1047 = cv1047;
          v1048 = cv1048;
          v1049 = cv1049;
          v1052 = cv1052;
          
          txn2 = txn3;
          continue;}
        else {
          const v2684 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1202), null);
          const v2685 = {
            None: 0,
            Some: 1
            }[v2684[0]];
          const v2686 = stdlib.eq(v2685, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v2686) {
            const v2707 = true;
            await txn3.getOutput('User_claim', 'v2707', ctc11, v2707);
            const v2716 = stdlib.sub(v1052, v2669);
            ;
            await stdlib.mapSet(map0, v1202, undefined /* Nothing */);
            const v2717 = stdlib.safeSub(v1046, v2669);
            const cv1046 = v2717;
            const cv1047 = true;
            const cv1048 = v1048;
            const cv1049 = v1204;
            const cv1052 = v2716;
            
            v1046 = cv1046;
            v1047 = cv1047;
            v1048 = cv1048;
            v1049 = cv1049;
            v1052 = cv1052;
            
            txn2 = txn3;
            continue;}
          else {
            const v2688 = true;
            await txn3.getOutput('User_claim', 'v2688', ctc11, v2688);
            const v2694 = {
              addr: v1202,
              amount: v2669,
              projectName: v1030
              };
            null;
            await stdlib.mapSet(map2, v1202, null);
            const v2699 = stdlib.sub(v1052, v2669);
            ;
            await stdlib.mapSet(map0, v1202, undefined /* Nothing */);
            const v2700 = stdlib.safeAdd(v1048, stdlib.checkedBigNumberify('./index.rsh:151:31:decimal', stdlib.UInt_max, '1'));
            const v2701 = stdlib.safeSub(v1046, v2669);
            const cv1046 = v2701;
            const cv1047 = true;
            const cv1048 = v2700;
            const cv1049 = v1204;
            const cv1052 = v2699;
            
            v1046 = cv1046;
            v1047 = cv1047;
            v1048 = cv1048;
            v1049 = cv1049;
            v1052 = cv1052;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_70': {
        const v2732 = v1203[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map3, v1202, null);
        const v2943 = null;
        await txn3.getOutput('User_optin', 'v2943', ctc0, v2943);
        const cv1046 = v1046;
        const cv1047 = true;
        const cv1048 = v1048;
        const cv1049 = v1204;
        const cv1052 = v1052;
        
        v1046 = cv1046;
        v1047 = cv1047;
        v1048 = cv1048;
        v1049 = cv1049;
        v1052 = cv1052;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v2954 = stdlib.sub(v1052, v1052);
  ;
  const v2956 = (stdlib.le(await ctc.getBalance(), v2954) ? stdlib.checkedBigNumberify('./index.rsh:184:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2954));
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
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc7,
    Admin_deposit0_70: ctc8,
    Admin_editUserReward0_70: ctc9,
    Admin_endContractAndTransfer0_70: ctc6,
    Admin_revokeAdmin0_70: ctc7,
    Admin_setReward0_70: ctc9,
    User_claim0_70: ctc6,
    User_optin0_70: ctc6
    });
  const ctc11 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1137 = ctc.selfAddress();
  const v1139 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:129:26:application call to [unknown function] (defined at: ./index.rsh:129:26:function exp)', 'at ./index.rsh:65:51:application call to "runUser_claim0_70" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v1140 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1137), null);
  const v1141 = {
    None: 0,
    Some: 1
    }[v1140[0]];
  const v1142 = stdlib.eq(v1141, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1142, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:26:application call to [unknown function] (defined at: ./index.rsh:129:26:function exp)', 'at ./index.rsh:65:51:application call to "runUser_claim0_70" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'Cannot claim because you have not earned reward',
    who: 'User_claim'
    });
  const v1147 = ['User_claim0_70', v1139];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1147],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:135:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v2548 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1202), null);
          ;
          const v2666 = stdlib.fromSome(v2548, stdlib.checkedBigNumberify('./index.rsh:137:60:decimal', stdlib.UInt_max, '0'));
          const v2668 = stdlib.gt(v1052, v2666);
          const v2669 = v2668 ? v2666 : v1052;
          const v2671 = stdlib.ge(v2666, v1052);
          if (v2671) {
            null;
            const v2672 = false;
            const v2673 = await txn1.getOutput('User_claim', 'v2672', ctc11, v2672);
            
            const v2678 = stdlib.safeAdd(v1048, stdlib.checkedBigNumberify('./index.rsh:142:31:decimal', stdlib.UInt_max, '1'));
            const v5335 = v1046;
            const v5337 = v2678;
            const v5339 = v1052;
            sim_r.isHalt = false;
            }
          else {
            const v2684 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1202), null);
            const v2685 = {
              None: 0,
              Some: 1
              }[v2684[0]];
            const v2686 = stdlib.eq(v2685, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            if (v2686) {
              const v2707 = true;
              const v2708 = await txn1.getOutput('User_claim', 'v2707', ctc11, v2707);
              
              const v2716 = stdlib.sub(v1052, v2669);
              sim_r.txns.push({
                kind: 'from',
                to: v1202,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, v1202, undefined /* Nothing */);
              const v2717 = stdlib.safeSub(v1046, v2669);
              const v5342 = v2717;
              const v5344 = v1048;
              const v5346 = v2716;
              sim_r.isHalt = false;
              }
            else {
              const v2688 = true;
              const v2689 = await txn1.getOutput('User_claim', 'v2688', ctc11, v2688);
              
              const v2694 = {
                addr: v1202,
                amount: v2669,
                projectName: v1030
                };
              null;
              await stdlib.simMapSet(sim_r, 2, v1202, null);
              const v2699 = stdlib.sub(v1052, v2669);
              sim_r.txns.push({
                kind: 'from',
                to: v1202,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, v1202, undefined /* Nothing */);
              const v2700 = stdlib.safeAdd(v1048, stdlib.checkedBigNumberify('./index.rsh:151:31:decimal', stdlib.UInt_max, '1'));
              const v2701 = stdlib.safeSub(v1046, v2669);
              const v5349 = v2701;
              const v5351 = v2700;
              const v5353 = v2699;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      return;
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      return;
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      return;
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      undefined /* setApiDetails */;
      const v2548 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1202), null);
      const v2549 = {
        None: 0,
        Some: 1
        }[v2548[0]];
      const v2550 = stdlib.eq(v2549, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2550, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:26:application call to [unknown function] (defined at: ./index.rsh:129:26:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:129:26:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
        msg: 'Cannot claim because you have not earned reward',
        who: 'User_claim'
        });
      ;
      const v2666 = stdlib.fromSome(v2548, stdlib.checkedBigNumberify('./index.rsh:137:60:decimal', stdlib.UInt_max, '0'));
      const v2668 = stdlib.gt(v1052, v2666);
      const v2669 = v2668 ? v2666 : v1052;
      const v2671 = stdlib.ge(v2666, v1052);
      if (v2671) {
        null;
        const v2672 = false;
        const v2673 = await txn1.getOutput('User_claim', 'v2672', ctc11, v2672);
        if (v732) {
          stdlib.protect(ctc0, await interact.out(v2514, v2673), {
            at: './index.rsh:129:11:application',
            fs: ['at ./index.rsh:129:11:application call to [unknown function] (defined at: ./index.rsh:129:11:function exp)', 'at ./index.rsh:141:16:application call to "ret" (defined at: ./index.rsh:136:15:function exp)', 'at ./index.rsh:136:15:application call to [unknown function] (defined at: ./index.rsh:136:15:function exp)'],
            msg: 'out',
            who: 'User_claim'
            });
          }
        else {
          }
        
        const v2678 = stdlib.safeAdd(v1048, stdlib.checkedBigNumberify('./index.rsh:142:31:decimal', stdlib.UInt_max, '1'));
        const v5335 = v1046;
        const v5337 = v2678;
        const v5339 = v1052;
        return;
        }
      else {
        const v2684 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1202), null);
        const v2685 = {
          None: 0,
          Some: 1
          }[v2684[0]];
        const v2686 = stdlib.eq(v2685, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v2686) {
          const v2707 = true;
          const v2708 = await txn1.getOutput('User_claim', 'v2707', ctc11, v2707);
          if (v732) {
            stdlib.protect(ctc0, await interact.out(v2514, v2708), {
              at: './index.rsh:129:11:application',
              fs: ['at ./index.rsh:129:11:application call to [unknown function] (defined at: ./index.rsh:129:11:function exp)', 'at ./index.rsh:153:16:application call to "ret" (defined at: ./index.rsh:136:15:function exp)', 'at ./index.rsh:136:15:application call to [unknown function] (defined at: ./index.rsh:136:15:function exp)'],
              msg: 'out',
              who: 'User_claim'
              });
            }
          else {
            }
          
          const v2716 = stdlib.sub(v1052, v2669);
          ;
          await stdlib.mapSet(map0, v1202, undefined /* Nothing */);
          const v2717 = stdlib.safeSub(v1046, v2669);
          const v5342 = v2717;
          const v5344 = v1048;
          const v5346 = v2716;
          return;
          }
        else {
          const v2688 = true;
          const v2689 = await txn1.getOutput('User_claim', 'v2688', ctc11, v2688);
          if (v732) {
            stdlib.protect(ctc0, await interact.out(v2514, v2689), {
              at: './index.rsh:129:11:application',
              fs: ['at ./index.rsh:129:11:application call to [unknown function] (defined at: ./index.rsh:129:11:function exp)', 'at ./index.rsh:144:16:application call to "ret" (defined at: ./index.rsh:136:15:function exp)', 'at ./index.rsh:136:15:application call to [unknown function] (defined at: ./index.rsh:136:15:function exp)'],
              msg: 'out',
              who: 'User_claim'
              });
            }
          else {
            }
          
          const v2694 = {
            addr: v1202,
            amount: v2669,
            projectName: v1030
            };
          null;
          await stdlib.mapSet(map2, v1202, null);
          const v2699 = stdlib.sub(v1052, v2669);
          ;
          await stdlib.mapSet(map0, v1202, undefined /* Nothing */);
          const v2700 = stdlib.safeAdd(v1048, stdlib.checkedBigNumberify('./index.rsh:151:31:decimal', stdlib.UInt_max, '1'));
          const v2701 = stdlib.safeSub(v1046, v2669);
          const v5349 = v2701;
          const v5351 = v2700;
          const v5353 = v2699;
          return;
          }}
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
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
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_70: ctc7,
    Admin_deposit0_70: ctc8,
    Admin_editUserReward0_70: ctc9,
    Admin_endContractAndTransfer0_70: ctc6,
    Admin_revokeAdmin0_70: ctc7,
    Admin_setReward0_70: ctc9,
    User_claim0_70: ctc6,
    User_optin0_70: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v1029, v1030, v1046, v1048, v1052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc1]);
  const v1151 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:26:application call to [unknown function] (defined at: ./index.rsh:161:26:function exp)', 'at ./index.rsh:65:51:application call to "runUser_optin0_70" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:65:51:application call to [unknown function] (defined at: ./index.rsh:65:51:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v1155 = ['User_optin0_70', v1151];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1029, v1030, v1046, v1048, v1052, v1155],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:163:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
      
      switch (v1203[0]) {
        case 'Admin_addAdmin0_70': {
          const v1206 = v1203[1];
          
          break;
          }
        case 'Admin_deposit0_70': {
          const v1424 = v1203[1];
          
          break;
          }
        case 'Admin_editUserReward0_70': {
          const v1642 = v1203[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_70': {
          const v1860 = v1203[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_70': {
          const v2078 = v1203[1];
          
          break;
          }
        case 'Admin_setReward0_70': {
          const v2296 = v1203[1];
          
          break;
          }
        case 'User_claim0_70': {
          const v2514 = v1203[1];
          
          break;
          }
        case 'User_optin0_70': {
          const v2732 = v1203[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 3, v1202, null);
          const v2943 = null;
          const v2944 = await txn1.getOutput('User_optin', 'v2943', ctc0, v2943);
          
          const v5433 = v1046;
          const v5435 = v1048;
          const v5437 = v1052;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v732, from: v1202 } = txn1;
  switch (v1203[0]) {
    case 'Admin_addAdmin0_70': {
      const v1206 = v1203[1];
      return;
      break;
      }
    case 'Admin_deposit0_70': {
      const v1424 = v1203[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_70': {
      const v1642 = v1203[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_70': {
      const v1860 = v1203[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_70': {
      const v2078 = v1203[1];
      return;
      break;
      }
    case 'Admin_setReward0_70': {
      const v2296 = v1203[1];
      return;
      break;
      }
    case 'User_claim0_70': {
      const v2514 = v1203[1];
      return;
      break;
      }
    case 'User_optin0_70': {
      const v2732 = v1203[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map3, v1202, null);
      const v2943 = null;
      const v2944 = await txn1.getOutput('User_optin', 'v2943', ctc0, v2943);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v2732, v2944), {
          at: './index.rsh:161:11:application',
          fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:11:function exp)', 'at ./index.rsh:166:14:application call to "ret" (defined at: ./index.rsh:164:15:function exp)', 'at ./index.rsh:164:15:application call to [unknown function] (defined at: ./index.rsh:164:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v5433 = v1046;
      const v5435 = v1048;
      const v5437 = v1052;
      return;
      
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
    impure: [`Admin_addAdmin(address)byte[0]`, `Admin_deposit(uint64)byte[0]`, `Admin_editUserReward(address,uint64)byte[0]`, `Admin_endContractAndTransfer()byte[0]`, `Admin_revokeAdmin(address)byte[0]`, `Admin_setReward(address,uint64)byte`, `User_claim()byte`, `User_optin()byte[0]`],
    pure: [`Info_Admins(address)byte`, `Info_opted(address)byte`, `Info_rewards(address)uint64`],
    sigs: [`Admin_addAdmin(address)byte[0]`, `Admin_deposit(uint64)byte[0]`, `Admin_editUserReward(address,uint64)byte[0]`, `Admin_endContractAndTransfer()byte[0]`, `Admin_revokeAdmin(address)byte[0]`, `Admin_setReward(address,uint64)byte`, `Info_Admins(address)byte`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `User_claim()byte`, `User_optin()byte[0]`]
    },
  appApproval: `ByAUAAEDAggoDL354q4Ejauungmr57KfC4rj9+cM/JShtAWU0tzBB4W6jNQBppiRlALihqTmAoahvbwBBwkFJgMBAAABASI1ADEYQQXeKWRJIls1ASEEWzUCMRkjEkEACjEAKCEGr2ZCBao2GgAXSUEBViI1BCM1BkkhBwxAAKFJIQgMQABOSSEJDEAAMUkhCgxAABQhChJEKTX/gAEHNP9QIQWvUEIBNiEJEkQ2GgE1/4ABBDT/UCEEr1BCASAhCBJENhoBNhoCUDX/gAEFNP9QQgEKSSELDEAAMUkhDAxAABYhDBJENhoBNhoCUDX/gAECNP9QQgDmIQsSRCk1/4ABAzT/UCEFr1BCANIhBxJENhoBNf8oNP9QIQSvUEIAvkkhDQxAAGNJIQ4MQAA5SSEPDEAAEyEPEkQ2GgE1/yo0/1AyA1BCAJYhDhJENAEkEkQ2GgGIBPFXCQEiVSMSFlEHCDUHQgS8IQ0SRDQBJBJEIjYaAYgE0VcACUk1/yNbNP8iVU0WNQdCBJlJIRAMQAAUIRASRCk1/4ABBjT/UCEFr1BCADmBu665mwESRDQBJBJENhoBiASQVwsBIlUjEhZRBwg1B0IEWzYaAhc1BDYaAzYaARdJJQxAA2MlEkQkNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/1cgHjX+gT5bNf2BRls1/IFOWzX7STUFNfqABPxbZsc0+lCwNPoiVUmBBAxAAhJJgQYMQAFJSSERDEAALiEREkQxACgxAIgEBSpcC2aACAAAAAAAAAt/sCk1BzT/NP40/SM0/DIGNPtCAw9IMQCIA91XAAlJNfkiVSMSRCI0+Uk19yNbNPciVU01+DT7NPg0+zT4DU019zT4NPsPQQAsgAT/3nkoNPgWULCACQAAAAAAAApwALAoNQc0/zT+NP0jNPwjCDIGNPtCAq8xAIgDflcKASJVIxJBAEOACQAAAAAAAAqTAbAqNQexIrIBNPeyCCOyEDEAsgezMQAoMQCIA00hEq9cAGY0/zT+NP009wkjNPwyBjT7NPcJQgJdgAkAAAAAAAAKgAGwKjUHgASbyFRQMQA09xZQNP5QULAxACgxAIgDCSpcCmaxIrIBNPeyCCOyEDEAsgezMQAoMQCIAu0hEq9cAGY0/zT+NP009wkjNPwjCDIGNPs09wlCAftJIRMMQACDSDT6VwEoNfk0+VcAIDX4NPiIArRXCwEiVSMSQQBGNPgoNPiIAqIqIjT4iAKbVwAJSTX3I1s09yJVTTT5gSBbCBZQXABmgAkAAAAAAAAJdgGwKjUHNP80/jT9IzT8MgY0+0IBkIAJAAAAAAAACYAAsCg1BzT/NP40/SM0/DIGNPtCAXFINPpXASA1+TEANP8SRDT5KDT5iAIvKFwJZoAIAAAAAAAACImwKTUHNP80/jT9IzT8MgY0+0IBOUklDEAAaUkkDEAAJUg0/zEAEkSACAAAAAAAAAeisCk1BzT/NP40/SI0/DIGNPtCAQhINPpXASg1+TT5VwAgKDT5VwAgiAHGKjT5VyAIUFwAZoAIAAAAAAAABrywKTUHNP80/jT9IzT8MgY0+0IAykkjDEAASUg0+lcBCDX5NPkXNfgxADT/EjEAiAGBVwkBIlUjEhFENPiIAYKACAAAAAAAAAXUsCk1BzT/NP40/TT4CCM0/DIGNPs0+AhCAHtINPpXASA1+TEANP8SMQCIAT1XCQEiVSMSEUQ0+Sg0+YgBLCpcCWaACAAAAAAAAATpsCk1BzT/NP40/SM0/DIGNPtCADYiEkSBoI0GiAEPIjQBEkQ0BEkiEkw0AhIRREk1BTX/gAStteSUNP9QsDEANP8iIyIyBiJCAAA1/zX+Nf01/DX7Nfo1+TT8QQAjNPk0+lA0+xZQNP0WUDT/FlAoSwFXAFZnSCQ1ATIGNQJCAE2xIrIBNP+yCCOyEDT5sgezMgpgMgp4CTT/SQkJNfixIrIBNPiyCCOyEDT5sgezQgAAMRkhExJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAAVIIQaviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 12,
  stateKeys: 1,
  stateSize: 86,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes30",
                "name": "v1030",
                "type": "bytes30"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes30",
                "name": "v1030",
                "type": "bytes30"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_Admin_addAdmin0_70",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Admin_deposit0_70",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Admin_editUserReward0_70",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin_endContractAndTransfer0_70",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_Admin_revokeAdmin0_70",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Admin_setReward0_70",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_User_claim0_70",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_User_optin0_70",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v1203",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1257",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1492",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1724",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1954",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2185",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2422",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2432",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2672",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2688",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2707",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2943",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes30",
            "name": "projectName",
            "type": "bytes30"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "claimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "insufficient",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Admin_addAdmin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Admin_deposit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Admin_editUserReward",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Admin_endContractAndTransfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Admin_revokeAdmin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Admin_setReward",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v5440",
        "type": "address"
      }
    ],
    "name": "Info_Admins",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v5442",
        "type": "address"
      }
    ],
    "name": "Info_opted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v5444",
        "type": "address"
      }
    ],
    "name": "Info_rewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "User_claim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "User_optin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_Admin_addAdmin0_70",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Admin_deposit0_70",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Admin_editUserReward0_70",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin_endContractAndTransfer0_70",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_Admin_revokeAdmin0_70",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Admin_setReward0_70",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_User_claim0_70",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_User_optin0_70",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v1203",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620028cd380380620028cd8339810160408190526200002691620003ce565b60008055436003556040805133815282516020808301919091528301515161ffff19168183015290517f58ceb02db5f7d38699d40d0639f414ae6f2fc8df88b032afbb70dadbda0f779b9181900360600190a1620000873415600a620000e8565b620000916200028a565b805133905260208083015151825161ffff199091169082015280820180516000908190528151600193019290925280516040018290528051436060909101525160800152620000e08162000112565b5050620004c5565b816200010e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602081019091526000815281602001516020015115620001f0576040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d5188015161ffff1990811688528e8901805151885280518e015186525184015183526003909955436001558b51978801529451909616988501989098529051908301529451918101919091529251908301529060c00160405160208183030381529060405260029080519060200190620001ea929190620002e6565b50505050565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000233573d6000803e3d6000fd5b50478082528251516040516001600160a01b03909116916108fc811502916000818181858888f1935050505015801562000271573d6000803e3d6000fd5b50600080805560018190556200010e9060029062000375565b60408051608081018252600091810182815260608201929092529081908152602001620002e16040518060a00160405280600081526020016000151581526020016000815260200160008152602001600081525090565b905290565b828054620002f49062000488565b90600052602060002090601f01602090048101928262000318576000855562000363565b82601f106200033357805160ff191683800117855562000363565b8280016001018555821562000363579182015b828111156200036357825182559160200191906001019062000346565b5062000371929150620003b7565b5090565b508054620003839062000488565b6000825580601f1062000394575050565b601f016020900490600052602060002090810190620003b49190620003b7565b50565b5b80821115620003715760008155600101620003b8565b6000818303604080821215620003e357600080fd5b80518082016001600160401b0380821183831017156200041357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200042d57600080fd5b8351945060208501915084821081831117156200045a57634e487b7160e01b600052604160045260246000fd5b5090915260208401519061ffff19821682146200047657600080fd5b90825260208101919091529392505050565b600181811c908216806200049d57607f821691505b60208210811415620004bf57634e487b7160e01b600052602260045260246000fd5b50919050565b6123f880620004d56000396000f3fe60806040526004361061010c5760003560e01c806374f16ec91161009a578063a579242411610061578063a579242414610284578063a8d65f20146102a4578063ab53f2c6146102b7578063bcaf29f6146102da578063cadc2e7a146102ed57005b806374f16ec9146102145780637a2b54dc146102275780637f0595e21461022f578063817d57f31461024f578063832307571461026f57005b80633bc5b7bf116100de5780633bc5b7bf146101b157806347dc4e6c146101de5780634ab9f8b3146101e6578063523df4f6146101f957806355c42a951461020c57005b806306dc92ff146101155780630a84e99f1461014b5780630bda46571461016e5780631e93b0f11461019c57005b3661011357005b005b34801561012157600080fd5b50610135610130366004611e2a565b61030d565b6040516101429190611e6d565b60405180910390f35b61015e610159366004611e9f565b610324565b6040519015158152602001610142565b34801561017a57600080fd5b5061018e610189366004611e2a565b61032f565b604051908152602001610142565b3480156101a857600080fd5b5060035461018e565b3480156101bd57600080fd5b506101d16101cc366004611e2a565b610362565b6040516101429190611eb8565b61015e610373565b61015e6101f4366004611e2a565b610382565b61015e610207366004611e2a565b61038d565b61015e610398565b61015e610222366004611ee8565b6103a2565b61015e6103ae565b34801561023b57600080fd5b5061015e61024a366004611e2a565b6103b8565b34801561025b57600080fd5b5061013561026a366004611e2a565b6103e4565b34801561027b57600080fd5b5060015461018e565b34801561029057600080fd5b5061015e61029f366004611e2a565b6103f5565b61015e6102b2366004611ee8565b610421565b3480156102c357600080fd5b506102cc61042d565b604051610142929190611f14565b6101136102e8366004611f71565b6104ca565b3480156102f957600080fd5b50610135610308366004611e2a565b6104ee565b610315611ada565b61031e826104ff565b92915050565b600061031e826105c3565b600061034660408051602081019091526000815290565b6001600160a01b038316815261035b816105fe565b9392505050565b61036a611ada565b61031e826106fa565b600061037d6107a8565b905090565b600061031e826107d8565b600061031e8261081c565b600061037d61085c565b600061035b838361088c565b600061037d6108de565b60006103cf60408051602081019091526000815290565b6001600160a01b038316815261035b8161090e565b6103ec611ada565b61031e826109f2565b600061040c60408051602081019091526000815290565b6001600160a01b038316815261035b81610a6a565b600061035b8383610b34565b60006060600054600280805461044290611f8a565b80601f016020809104026020016040519081016040528092919081815260200182805461046e90611f8a565b80156104bb5780601f10610490576101008083540402835291602001916104bb565b820191906000526020600020905b81548152906001019060200180831161049e57829003601f168201915b50505050509050915091509091565b6104d2611afd565b6104ea6104e436849003840184612106565b82610b86565b5050565b6104f6611ada565b61031e82611835565b610507611ada565b60016001600160a01b03831660009081526007602052604090205460ff16600181111561053657610536611e47565b14156105b3576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561057757610577611e47565b600181111561058857610588611e47565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b60006105cd611b41565b60208101805151600190525151604001518390526105e9611afd565b6105f38282610b86565b602001519392505050565b6000600360005414156106ee5760006002805461061a90611f8a565b80601f016020809104026020016040519081016040528092919081815260200182805461064690611f8a565b80156106935780601f1061066857610100808354040283529160200191610693565b820191906000526020600020905b81548152906001019060200180831161067657829003601f168201915b50505050508060200190518101906106ab91906121fa565b9050600183516106ba906106fa565b5160018111156106cc576106cc611e47565b146106d857600061035b565b82516106e3906106fa565b604001519392505050565b6105be600060096118ad565b610702611ada565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561073157610731611e47565b14156105b3576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561077257610772611e47565b600181111561078357610783611e47565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60006107b2611b41565b602081015151600690526107c4611afd565b6107ce8282610b86565b60c0015192915050565b60006107e2611b41565b6020810180515160049052515160a001516001600160a01b0384169052610807611afd565b6108118282610b86565b608001519392505050565b6000610826611b41565b602081810180515160009052515101516001600160a01b038416905261084a611afd565b6108548282610b86565b519392505050565b6000610866611b41565b60208101515160039052610878611afd565b6108828282610b86565b6060015192915050565b6000610896611b41565b6020818101805151600290528051516060908101516001600160a01b03881690529051510151018390526108c8611afd565b6108d28282610b86565b60400151949350505050565b60006108e8611b41565b602081015151600790526108fa611afd565b6109048282610b86565b60e0015192915050565b6000600360005414156109e65760006002805461092a90611f8a565b80601f016020809104026020016040519081016040528092919081815260200182805461095690611f8a565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b50505050508060200190518101906109bb91906121fa565b905060016109cc8460000151611835565b5160018111156109de576109de611e47565b149392505050565b6105be600060076118ad565b6109fa611ada565b60016001600160a01b03831660009081526006602052604090205460ff166001811115610a2957610a29611e47565b14156105b3576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561057757610577611e47565b600060036000541415610b2857600060028054610a8690611f8a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab290611f8a565b8015610aff5780601f10610ad457610100808354040283529160200191610aff565b820191906000526020600020905b815481529060010190602001808311610ae257829003601f168201915b5050505050806020019051810190610b1791906121fa565b905060016109cc84600001516104ff565b6105be600060086118ad565b6000610b3e611b41565b60208181018051516005905280515160c0908101516001600160a01b0388169052905151015101839052610b70611afd565b610b7a8282610b86565b60a00151949350505050565b610b9660036000541460186118ad565b8151610bb1901580610baa57508251600154145b60196118ad565b600080805560028054610bc390611f8a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bef90611f8a565b8015610c3c5780601f10610c1157610100808354040283529160200191610c3c565b820191906000526020600020905b815481529060010190602001808311610c1f57829003601f168201915b5050505050806020019051810190610c5491906121fa565b9050610c5e611b60565b7f807ffb23c8a1edeb6e6cb8d62cea7a80739734b6d79e090ef5da6cf386da4b853385604051610c8f929190612292565b60405180910390a16000602085015151516007811115610cb157610cb1611e47565b1415610df65760208481015151015181528151610d04906001600160a01b03163314610cfa576001610ce233611835565b516001811115610cf457610cf4611e47565b14610cfd565b60015b600b6118ad565b610d103415600c6118ad565b8051516001600160a01b039081166000908152600560209081526040808320805460ff191660011790558451519093168252828220805462ff00001916905591519081527f9e8fb7746f0923ae62c8fd81f95a469a39d96c9fbf16de3be3e9f22d01cb35e5910160405180910390a160008352610d8b611c33565b825181516001600160a01b039091169052602080840151825161ffff19909116908201526040808501518284018051919091528051600193019290925260608086015183519092019190915281514391015260808085015191510152610df0816118d3565b5061182f565b6001602085015151516007811115610e1057610e10611e47565b1415610f3b576020848101515160400151908201528151610e67906001600160a01b03163314610e5d576001610e4533611835565b516001811115610e5757610e57611e47565b14610e60565b60015b600d6118ad565b602081015151610e7a903414600e6118ad565b604051600081527f6d8bfcee7ec64d333064f9c2e89f3793bffbf2a4d13526e90292067a2a011d3f9060200160405180910390a160006020840152610ebd611c33565b825181516001600160a01b039091169052602080840151825161ffff199091169082015260408401519083015151610ef59190611a3e565b6020828101805192909252815160019082015260608581015183516040015291514392019190915260808401519083015151015b602082015160800152610df0816118d3565b6002602085015151516007811115610f5557610f55611e47565b1415610ffc57602084015151606001516040820152610f763415600f6118ad565b60408181018051516001600160a01b03908116600090815260046020908152848220805460ff19166001908117909155935180820151905190931682528482209093019190915591519182527f40f3a9d37993c1aacb2fb1309290bbf30a1879a97d9216777471bf00f060d2fa910160405180910390a160006040840152610d8b611c33565b600360208501515151600781111561101657611016611e47565b14156110e8578151611034906001600160a01b0316331460106118ad565b611040341560116118ad565b604051600081527fdd26c114887d496334eef3624700df275c8ac3cd0a49875a70dc420e183d05049060200160405180910390a160006060840152611083611c33565b825181516001600160a01b039091169052602080840151825161ffff19909116908201526040808501518284018051919091528051600093019290925260608086015183519092019190915281514391015260808085015191510152610df0816118d3565b600460208501515151600781111561110257611102611e47565b14156111a35760208401515160a001516060820152815161112f906001600160a01b0316331460126118ad565b61113b341560136118ad565b6060810151516001600160a01b03166000908152600560209081526040808320805462ffffff19169055519182527fbc8a57b03e556e57b40d9bff249fba78fa29950b270697a94e9e3e6dddccc551910160405180910390a160006080840152610d8b611c33565b60056020850151515160078111156111bd576111bd611e47565b14156113325760208401515160c0015160808201526111de341560146118ad565b60016111f18260800151600001516104ff565b51600181111561120357611203611e47565b14156112ef57608081018051516001600160a01b03166000908152600460205260409020805460ff191660019081179091559051516112869190611246906106fa565b51600181111561125857611258611e47565b14611264576000611278565b608082015151611273906106fa565b604001515b826080015160200151611a3e565b6080820151516001600160a01b031660009081526004602090815260409182902060019081019390935590519182527f7aab877de587c0dd2347f8c326e6c9e7a510a260d47c6e82ad11de2ca4f54d61910160405180910390a1600160a0840152610d8b611c33565b604051600081527f38b90512a3744afef0bbfd0a36366b0a746b35da37285148d0faa70080e397f09060200160405180910390a1600060a0840152610d8b611c33565b600660208501515151600781111561134c5761134c611e47565b14156117a65761135b336106fa565b60a0820181905251611382906001908181111561137a5761137a611e47565b1460156118ad565b61138e341560166118ad565b600160a08201515160018111156113a7576113a7611e47565b146113b35760006113bd565b8060a00151604001515b60c082018190526080830151116113d85781608001516113de565b8060c001515b60e0820152608082015160c0820151106114e3577f98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e983518160c0015160405161142791815260200190565b60405180910390a1604051600081527f636a71d554319fb429e7d317ce04c43d6b498c1abbfb45d0a4acfd6b4f9f54529060200160405180910390a1600060c0840152611472611c33565b825181516001600160a01b039091169052602080840151825161ffff19909116908201526040840151818301805191909152516001910181905260608401516114ba91611a3e565b6020820180516040019190915280514360609091015260808085015191510152610df0816118d3565b60016114ee336109f2565b51600181111561150057611500611e47565b141561160257604051600181527f46b7debdec7930d85de757ace14cf958057531e31b6c71a14b3a901e55b267fd9060200160405180910390a1600160c084015260e0810151604051339180156108fc02916000818181858888f19350505050158015611571573d6000803e3d6000fd5b50336000908152600460205260408120805461ffff1916815560010155611596611c33565b825181516001600160a01b039091169052602080840151825161ffff19909116910152604083015160e08301516115cd9190611a8b565b602082810180519290925281516001910152606084810151825160400152905143910152608083015160e08301519003610f29565b604051600181527f75e7756f36ce7f47111191b97fa0f7413e71a72c0dcbd2b61b61f6463f7861ed9060200160405180910390a1600160c08401526101008101805133905260e0820151815160209081019190915283810151825161ffff199182166040918201529251835181516001600160a01b031681528184015193810193909352830151168183015290517f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce239181900360600190a133600081815260066020526040808220805462ff00ff1916600117905560e084015190516108fc82150292818181858888f19350505050158015611702573d6000803e3d6000fd5b50336000908152600460205260408120805461ffff1916815560010155611727611c33565b825181516001600160a01b039091169052602080840151825161ffff19909116910152604083015160e083015161175e9190611a8b565b6020808301805192909252905160019101819052606084015161178091611a3e565b602082018051604001919091525143606090910152608083015160e08301519003610f29565b60076020850151515160078111156117c0576117c0611e47565b141561182f576117d2341560176118ad565b336000908152600760209081526040808320805462ff00ff19166001179055519182527ffe6c11e2807699331f9e080475bd684980b21729ec083788140af14b5faed068910160405180910390a1600060e0840152610d8b611c33565b50505050565b61183d611ada565b60016001600160a01b03831660009081526005602052604090205460ff16600181111561186c5761186c611e47565b14156105b3576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561057757610577611e47565b816104ea5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152816020015160200151156119a8576040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d5188015161ffff1990811688528e8901805151885280518e015186525184015183526003909955436001558b51978801529451909616988501989098529051908301529451918101919091529251908301529060c0016040516020818303038152906040526002908051906020019061182f929190611c89565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156119ea573d6000803e3d6000fd5b50478082528251516040516001600160a01b03909116916108fc811502916000818181858888f19350505050158015611a27573d6000803e3d6000fd5b50600080805560018190556104ea90600290611d0d565b600082611a4b8382612393565b915081101561031e5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016118ca565b600082611a9883826123ab565b915081111561031e5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016118ca565b60408051606081019091528060005b815260006020820181905260409091015290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b604051806040016040528060008152602001611b5b611d4a565b905290565b60408051610140810182526000610120820181815282528251602081810190945290815290918201908152602001611ba8604080518082019091526000808252602082015290565b8152602001611bc260408051602081019091526000815290565b8152602001611be1604080518082019091526000808252602082015290565b8152602001611bee611ada565b81526020016000815260200160008152602001611b5b604051806060016040528060006001600160a01b0316815260200160008152602001600061ffff191681525090565b60408051608081018252600091810182815260608201929092529081908152602001611b5b6040518060a00160405280600081526020016000151581526020016000815260200160008152602001600081525090565b828054611c9590611f8a565b90600052602060002090601f016020900481019282611cb75760008555611cfd565b82601f10611cd057805160ff1916838001178555611cfd565b82800160010185558215611cfd579182015b82811115611cfd578251825591602001919060010190611ce2565b50611d09929150611d5d565b5090565b508054611d1990611f8a565b6000825580601f10611d29575050565b601f016020900490600052602060002090810190611d479190611d5d565b50565b6040518060200160405280611b5b611d72565b5b80821115611d095760008155600101611d5e565b6040805161012081019091528060008152602001611d9b60408051602081019091526000815290565b8152602001611db66040518060200160405280600081525090565b8152602001611dd5604080518082019091526000808252602082015290565b815260006020820152604001611df660408051602081019091526000815290565b8152602001611ae9604080518082019091526000808252602082015290565b6001600160a01b0381168114611d4757600080fd5b600060208284031215611e3c57600080fd5b813561035b81611e15565b634e487b7160e01b600052602160045260246000fd5b60028110611d4757611d47611e47565b81516060820190611e7d81611e5d565b8083525060208301511515602083015260408301511515604083015292915050565b600060208284031215611eb157600080fd5b5035919050565b81516060820190611ec881611e5d565b808352506020830151151560208301526040830151604083015292915050565b60008060408385031215611efb57600080fd5b8235611f0681611e15565b946020939093013593505050565b82815260006020604081840152835180604085015260005b81811015611f4857858101830151858201606001528201611f2c565b81811115611f5a576000606083870101525b50601f01601f191692909201606001949350505050565b60006101808284031215611f8457600080fd5b50919050565b600181811c90821680611f9e57607f821691505b60208210811415611f8457634e487b7160e01b600052602260045260246000fd5b6040516020810167ffffffffffffffff81118282101715611ff057634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff81118282101715611ff057634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611ff057634e487b7160e01b600052604160045260246000fd5b8035600881106105be57600080fd5b60006020828403121561207a57600080fd5b612082611fbf565b9050813561208f81611e15565b815292915050565b6000602082840312156120a957600080fd5b6120b1611fbf565b9135825250919050565b6000604082840312156120cd57600080fd5b6120d5611ff6565b905081356120e281611e15565b808252506020820135602082015292915050565b803580151581146105be57600080fd5b600081830361018081121561211a57600080fd5b612122611ff6565b8335815261016080601f198401121561213a57600080fd5b612142611fbf565b925061214c612027565b61215860208701612059565b81526121678760408801612068565b60208201526121798760608801612097565b604082015261218b87608088016120bb565b606082015261219c60c087016120f6565b60808201526121ae8760e08801612068565b60a08201526101006121c2888289016120bb565b60c08301526121d461014088016120f6565b60e08301526121e48388016120f6565b9082015283525060208101919091529392505050565b600060a0828403121561220c57600080fd5b60405160a0810181811067ffffffffffffffff8211171561223d57634e487b7160e01b600052604160045260246000fd5b604052825161224b81611e15565b8152602083015161ffff198116811461226357600080fd5b806020830152506040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b038316815281516020808301919091528201515180516101a083019190600881106122c6576122c6611e47565b6040840152602081015180516001600160a01b031660608501525060408101518051608085015250606081015180516001600160a01b031660a0850152602081015160c085015250608081015180151560e08501525060a081015161010061233981860183516001600160a01b03169052565b60c083015180516001600160a01b03166101208701526020015161014086015260e08301511515610160860152909101511515610180909301929092529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156123a6576123a661237d565b500190565b6000828210156123bd576123bd61237d565b50039056fea2646970667358221220b79f13fbf99dfb215f9ee9e5a85e634446f3e904d076ea2bcab66f3cc5fbeb0564736f6c634300080c0033`,
  BytecodeLen: 10445,
  Which: `oD`,
  version: 8,
  views: {
    Info: {
      Admins: `Info_Admins`,
      opted: `Info_opted`,
      rewards: `Info_rewards`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:185:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:65:51:after expr stmt semicolon',
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
