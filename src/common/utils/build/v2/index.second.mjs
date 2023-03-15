// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

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
      const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = svs;
      return (await ((async (_v1636 ) => {
          const v1636 = stdlib.protect(ctc0, _v1636, null);
        
        const v1637 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1636), null);
        const v1638 = {
          None: 0,
          Some: 1
          }[v1637[0]];
        const v1639 = stdlib.eq(v1638, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1639;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = svs;
      return (await ((async (_v1640 ) => {
          const v1640 = stdlib.protect(ctc0, _v1640, null);
        
        const v1641 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v1640), null);
        const v1642 = {
          None: 0,
          Some: 1
          }[v1641[0]];
        const v1643 = stdlib.eq(v1642, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1643;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_rewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = svs;
      return (await ((async (_v1633 ) => {
          const v1633 = stdlib.protect(ctc0, _v1633, null);
        
        const v1634 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1633), null);
        const v1635 = stdlib.fromSome(v1634, stdlib.checkedBigNumberify('./index.rsh:63:49:decimal', stdlib.UInt_max, '0'));
        
        return v1635;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = svs;
      return (await ((async () => {
        
        
        return v1668;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = svs;
      return (await ((async () => {
        
        
        return v1668;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = svs;
      return (await ((async () => {
        
        
        return v1670;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = svs;
      return (await ((async () => {
        
        
        return v1671;}))(...args));
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
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2]
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
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc7,
    Admin_deposit0_233: ctc8,
    Admin_editUserReward0_233: ctc9,
    Admin_endContractAndTransfer0_233: ctc10,
    Admin_revokeAdmin0_233: ctc7,
    Admin_setReward0_233: ctc9,
    User_claim0_233: ctc8,
    User_claimAll0_233: ctc10,
    User_optin0_233: ctc10
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1729 = ctc.selfAddress();
  const v1731 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_addAdmin0_233" (defined at: ./index.rsh:156:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v1734 = stdlib.addressEq(v1729, v1627);
  const v1735 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1729), null);
  const v1736 = {
    None: 0,
    Some: 1
    }[v1735[0]];
  const v1737 = stdlib.eq(v1736, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1738 = v1734 ? true : v1737;
  stdlib.assert(v1738, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_addAdmin0_233" (defined at: ./index.rsh:156:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v1745 = ['Admin_addAdmin0_233', v1731];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1745],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:162:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1856), null);
          ;
          const v1916 = v1860[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v1916, null);
          const v1925 = null;
          const v1926 = await txn1.getOutput('Admin_addAdmin', 'v1925', ctc0, v1925);
          
          const v1938 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v8223 = v1649;
          const v8224 = v1938.keepGoing;
          if (v8224) {
            const v8225 = v1938.bal;
            const v8227 = v1938.total_amount_claimed;
            const v8228 = v1938.total_rewards_allcoated;
            const v8229 = v1938.total_users_claim;
            const v8230 = v1938.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8234 = stdlib.sub(v1649, v1649);
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
              tok: undefined /* Nothing */
              });
            const v8235 = (stdlib.le(await ctc.getBalance(), v8234) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8234));
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
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
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      undefined /* setApiDetails */;
      const v1866 = stdlib.addressEq(v1856, v1627);
      const v1867 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1856), null);
      const v1868 = {
        None: 0,
        Some: 1
        }[v1867[0]];
      const v1869 = stdlib.eq(v1868, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1870 = v1866 ? true : v1869;
      stdlib.assert(v1870, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v1916 = v1860[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v1916, null);
      const v1925 = null;
      const v1926 = await txn1.getOutput('Admin_addAdmin', 'v1925', ctc0, v1925);
      if (v1100) {
        stdlib.protect(ctc0, await interact.out(v1860, v1926), {
          at: './index.rsh:156:11:application',
          fs: ['at ./index.rsh:156:11:application call to [unknown function] (defined at: ./index.rsh:156:11:function exp)', 'at ./index.rsh:165:14:application call to "ret" (defined at: ./index.rsh:163:15:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v1938 = {
        bal: v1666,
        keepGoing: v1667,
        total_amount_claimed: v1668,
        total_rewards_allcoated: v1669,
        total_users_claim: v1670,
        usersNo: v1671
        };
      const v8223 = v1649;
      const v8224 = v1938.keepGoing;
      if (v8224) {
        const v8225 = v1938.bal;
        const v8227 = v1938.total_amount_claimed;
        const v8228 = v1938.total_rewards_allcoated;
        const v8229 = v1938.total_users_claim;
        const v8230 = v1938.usersNo;
        return;
        }
      else {
        const v8234 = stdlib.sub(v1649, v1649);
        ;
        const v8235 = (stdlib.le(await ctc.getBalance(), v8234) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8234));
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc8,
    Admin_deposit0_233: ctc7,
    Admin_editUserReward0_233: ctc9,
    Admin_endContractAndTransfer0_233: ctc10,
    Admin_revokeAdmin0_233: ctc8,
    Admin_setReward0_233: ctc9,
    User_claim0_233: ctc7,
    User_claimAll0_233: ctc10,
    User_optin0_233: ctc10
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1672 = ctc.selfAddress();
  const v1674 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_deposit0_233" (defined at: ./index.rsh:95:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v1675 = v1674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1677 = stdlib.addressEq(v1672, v1627);
  const v1678 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1672), null);
  const v1679 = {
    None: 0,
    Some: 1
    }[v1678[0]];
  const v1680 = stdlib.eq(v1679, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1681 = v1677 ? true : v1680;
  stdlib.assert(v1681, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_deposit0_233" (defined at: ./index.rsh:95:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v1688 = ['Admin_deposit0_233', v1674];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1688],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1675, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v2286 = v2273[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1856), null);
          const v2327 = stdlib.add(v1649, v2286);
          sim_r.txns.push({
            amt: v2286,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v2362 = null;
          const v2363 = await txn1.getOutput('Admin_deposit', 'v2362', ctc0, v2362);
          
          const v2375 = stdlib.safeAdd(v1666, v2286);
          const v2376 = {
            bal: v2375,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v8463 = v2327;
          const v8464 = v2376.keepGoing;
          if (v8464) {
            const v8465 = v2376.bal;
            const v8467 = v2376.total_amount_claimed;
            const v8468 = v2376.total_rewards_allcoated;
            const v8469 = v2376.total_users_claim;
            const v8470 = v2376.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8474 = stdlib.sub(v2327, v2327);
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
              tok: undefined /* Nothing */
              });
            const v8475 = (stdlib.le(await ctc.getBalance(), v8474) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8474));
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
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
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      undefined /* setApiDetails */;
      const v2286 = v2273[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '0')];
      const v2287 = stdlib.addressEq(v1856, v1627);
      const v2288 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1856), null);
      const v2289 = {
        None: 0,
        Some: 1
        }[v2288[0]];
      const v2290 = stdlib.eq(v2289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2291 = v2287 ? true : v2290;
      stdlib.assert(v2291, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v2327 = stdlib.add(v1649, v2286);
      ;
      const v2362 = null;
      const v2363 = await txn1.getOutput('Admin_deposit', 'v2362', ctc0, v2362);
      if (v1100) {
        stdlib.protect(ctc0, await interact.out(v2273, v2363), {
          at: './index.rsh:95:11:application',
          fs: ['at ./index.rsh:95:11:application call to [unknown function] (defined at: ./index.rsh:95:11:function exp)', 'at ./index.rsh:100:14:application call to "ret" (defined at: ./index.rsh:99:15:function exp)', 'at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v2375 = stdlib.safeAdd(v1666, v2286);
      const v2376 = {
        bal: v2375,
        keepGoing: v1667,
        total_amount_claimed: v1668,
        total_rewards_allcoated: v1669,
        total_users_claim: v1670,
        usersNo: v1671
        };
      const v8463 = v2327;
      const v8464 = v2376.keepGoing;
      if (v8464) {
        const v8465 = v2376.bal;
        const v8467 = v2376.total_amount_claimed;
        const v8468 = v2376.total_rewards_allcoated;
        const v8469 = v2376.total_users_claim;
        const v8470 = v2376.usersNo;
        return;
        }
      else {
        const v8474 = stdlib.sub(v2327, v2327);
        ;
        const v8475 = (stdlib.le(await ctc.getBalance(), v8474) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8474));
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc8,
    Admin_deposit0_233: ctc9,
    Admin_editUserReward0_233: ctc7,
    Admin_endContractAndTransfer0_233: ctc10,
    Admin_revokeAdmin0_233: ctc8,
    Admin_setReward0_233: ctc7,
    User_claim0_233: ctc9,
    User_claimAll0_233: ctc10,
    User_optin0_233: ctc10
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1707 = ctc.selfAddress();
  const v1709 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_editUserReward0_233" (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v1714 = stdlib.addressEq(v1707, v1627);
  const v1715 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1707), null);
  const v1716 = {
    None: 0,
    Some: 1
    }[v1715[0]];
  const v1717 = stdlib.eq(v1716, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1718 = v1714 ? true : v1717;
  stdlib.assert(v1718, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_editUserReward0_233" (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v1727 = ['Admin_editUserReward0_233', v1709];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1727],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:148:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1856), null);
          ;
          const v2792 = v2686[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '0')];
          const v2793 = v2686[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '1')];
          await stdlib.simMapSet(sim_r, 0, v2792, v2793);
          const v2802 = null;
          const v2803 = await txn1.getOutput('Admin_editUserReward', 'v2802', ctc0, v2802);
          
          const v2816 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v8703 = v1649;
          const v8704 = v2816.keepGoing;
          if (v8704) {
            const v8705 = v2816.bal;
            const v8707 = v2816.total_amount_claimed;
            const v8708 = v2816.total_rewards_allcoated;
            const v8709 = v2816.total_users_claim;
            const v8710 = v2816.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8714 = stdlib.sub(v1649, v1649);
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
              tok: undefined /* Nothing */
              });
            const v8715 = (stdlib.le(await ctc.getBalance(), v8714) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8714));
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
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
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      undefined /* setApiDetails */;
      const v2709 = stdlib.addressEq(v1856, v1627);
      const v2710 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1856), null);
      const v2711 = {
        None: 0,
        Some: 1
        }[v2710[0]];
      const v2712 = stdlib.eq(v2711, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2713 = v2709 ? true : v2712;
      stdlib.assert(v2713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      ;
      const v2792 = v2686[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '0')];
      const v2793 = v2686[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '1')];
      await stdlib.mapSet(map0, v2792, v2793);
      const v2802 = null;
      const v2803 = await txn1.getOutput('Admin_editUserReward', 'v2802', ctc0, v2802);
      if (v1100) {
        stdlib.protect(ctc0, await interact.out(v2686, v2803), {
          at: './index.rsh:144:11:application',
          fs: ['at ./index.rsh:144:11:application call to [unknown function] (defined at: ./index.rsh:144:11:function exp)', 'at ./index.rsh:151:14:application call to "ret" (defined at: ./index.rsh:149:15:function exp)', 'at ./index.rsh:149:15:application call to [unknown function] (defined at: ./index.rsh:149:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v2816 = {
        bal: v1666,
        keepGoing: v1667,
        total_amount_claimed: v1668,
        total_rewards_allcoated: v1669,
        total_users_claim: v1670,
        usersNo: v1671
        };
      const v8703 = v1649;
      const v8704 = v2816.keepGoing;
      if (v8704) {
        const v8705 = v2816.bal;
        const v8707 = v2816.total_amount_claimed;
        const v8708 = v2816.total_rewards_allcoated;
        const v8709 = v2816.total_users_claim;
        const v8710 = v2816.usersNo;
        return;
        }
      else {
        const v8714 = stdlib.sub(v1649, v1649);
        ;
        const v8715 = (stdlib.le(await ctc.getBalance(), v8714) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8714));
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc8,
    Admin_deposit0_233: ctc9,
    Admin_editUserReward0_233: ctc10,
    Admin_endContractAndTransfer0_233: ctc7,
    Admin_revokeAdmin0_233: ctc8,
    Admin_setReward0_233: ctc10,
    User_claim0_233: ctc9,
    User_claimAll0_233: ctc7,
    User_optin0_233: ctc7
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1797 = ctc.selfAddress();
  const v1799 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./index.rsh:281:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v1800 = stdlib.addressEq(v1627, v1797);
  stdlib.assert(v1800, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./index.rsh:281:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v1805 = ['Admin_endContractAndTransfer0_233', v1799];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1805],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:284:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v3234 = null;
          const v3235 = await txn1.getOutput('Admin_endContractAndTransfer', 'v3234', ctc0, v3234);
          
          const v3246 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v8943 = v1649;
          const v8944 = v3246.keepGoing;
          if (v8944) {
            const v8945 = v3246.bal;
            const v8947 = v3246.total_amount_claimed;
            const v8948 = v3246.total_rewards_allcoated;
            const v8949 = v3246.total_users_claim;
            const v8950 = v3246.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v8954 = stdlib.sub(v1649, v1649);
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
              tok: undefined /* Nothing */
              });
            const v8955 = (stdlib.le(await ctc.getBalance(), v8954) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8954));
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
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
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      undefined /* setApiDetails */;
      const v3129 = stdlib.addressEq(v1627, v1856);
      stdlib.assert(v3129, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v3234 = null;
      const v3235 = await txn1.getOutput('Admin_endContractAndTransfer', 'v3234', ctc0, v3234);
      if (v1100) {
        stdlib.protect(ctc0, await interact.out(v3099, v3235), {
          at: './index.rsh:281:11:application',
          fs: ['at ./index.rsh:281:11:application call to [unknown function] (defined at: ./index.rsh:281:11:function exp)', 'at ./index.rsh:286:14:application call to "ret" (defined at: ./index.rsh:285:15:function exp)', 'at ./index.rsh:285:15:application call to [unknown function] (defined at: ./index.rsh:285:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v3246 = {
        bal: v1666,
        keepGoing: v1667,
        total_amount_claimed: v1668,
        total_rewards_allcoated: v1669,
        total_users_claim: v1670,
        usersNo: v1671
        };
      const v8943 = v1649;
      const v8944 = v3246.keepGoing;
      if (v8944) {
        const v8945 = v3246.bal;
        const v8947 = v3246.total_amount_claimed;
        const v8948 = v3246.total_rewards_allcoated;
        const v8949 = v3246.total_users_claim;
        const v8950 = v3246.usersNo;
        return;
        }
      else {
        const v8954 = stdlib.sub(v1649, v1649);
        ;
        const v8955 = (stdlib.le(await ctc.getBalance(), v8954) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8954));
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc7,
    Admin_deposit0_233: ctc8,
    Admin_editUserReward0_233: ctc9,
    Admin_endContractAndTransfer0_233: ctc10,
    Admin_revokeAdmin0_233: ctc7,
    Admin_setReward0_233: ctc9,
    User_claim0_233: ctc8,
    User_claimAll0_233: ctc10,
    User_optin0_233: ctc10
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1747 = ctc.selfAddress();
  const v1749 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./index.rsh:170:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v1752 = stdlib.addressEq(v1747, v1627);
  stdlib.assert(v1752, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./index.rsh:170:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v1759 = ['Admin_revokeAdmin0_233', v1749];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1759],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:173:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v3662 = v3512[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v3662, undefined /* Nothing */);
          const v3667 = null;
          const v3668 = await txn1.getOutput('Admin_revokeAdmin', 'v3667', ctc0, v3667);
          
          const v3680 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v9183 = v1649;
          const v9184 = v3680.keepGoing;
          if (v9184) {
            const v9185 = v3680.bal;
            const v9187 = v3680.total_amount_claimed;
            const v9188 = v3680.total_rewards_allcoated;
            const v9189 = v3680.total_users_claim;
            const v9190 = v3680.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9194 = stdlib.sub(v1649, v1649);
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
              tok: undefined /* Nothing */
              });
            const v9195 = (stdlib.le(await ctc.getBalance(), v9194) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9194));
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
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
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      undefined /* setApiDetails */;
      const v3546 = stdlib.addressEq(v1856, v1627);
      stdlib.assert(v3546, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v3662 = v3512[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v3662, undefined /* Nothing */);
      const v3667 = null;
      const v3668 = await txn1.getOutput('Admin_revokeAdmin', 'v3667', ctc0, v3667);
      if (v1100) {
        stdlib.protect(ctc0, await interact.out(v3512, v3668), {
          at: './index.rsh:170:11:application',
          fs: ['at ./index.rsh:170:11:application call to [unknown function] (defined at: ./index.rsh:170:11:function exp)', 'at ./index.rsh:176:14:application call to "ret" (defined at: ./index.rsh:174:15:function exp)', 'at ./index.rsh:174:15:application call to [unknown function] (defined at: ./index.rsh:174:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v3680 = {
        bal: v1666,
        keepGoing: v1667,
        total_amount_claimed: v1668,
        total_rewards_allcoated: v1669,
        total_users_claim: v1670,
        usersNo: v1671
        };
      const v9183 = v1649;
      const v9184 = v3680.keepGoing;
      if (v9184) {
        const v9185 = v3680.bal;
        const v9187 = v3680.total_amount_claimed;
        const v9188 = v3680.total_rewards_allcoated;
        const v9189 = v3680.total_users_claim;
        const v9190 = v3680.usersNo;
        return;
        }
      else {
        const v9194 = stdlib.sub(v1649, v1649);
        ;
        const v9195 = (stdlib.le(await ctc.getBalance(), v9194) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9194));
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc8,
    Admin_deposit0_233: ctc9,
    Admin_editUserReward0_233: ctc7,
    Admin_endContractAndTransfer0_233: ctc10,
    Admin_revokeAdmin0_233: ctc8,
    Admin_setReward0_233: ctc7,
    User_claim0_233: ctc9,
    User_claimAll0_233: ctc10,
    User_optin0_233: ctc10
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1692 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:108:40:application call to [unknown function] (defined at: ./index.rsh:108:40:function exp)', 'at ./index.rsh:70:37:application call to "runAdmin_setReward0_233" (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v1694 = v1692[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1697 = stdlib.gt(v1694, v1666);
  const v1705 = ['Admin_setReward0_233', v1692];
  
  const v1843 = v1697 ? v1694 : stdlib.checkedBigNumberify('./index.rsh:111:30:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1705],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1843, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v3963 = v3925[stdlib.checkedBigNumberify('./index.rsh:108:10:spread', stdlib.UInt_max, '1')];
          const v3964 = stdlib.gt(v3963, v1666);
          const v3965 = v3964 ? v3963 : stdlib.checkedBigNumberify('./index.rsh:111:30:decimal', stdlib.UInt_max, '0');
          const v3979 = stdlib.add(v1649, v3965);
          sim_r.txns.push({
            amt: v3965,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4096 = v3925[stdlib.checkedBigNumberify('./index.rsh:108:10:spread', stdlib.UInt_max, '0')];
          const v4101 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4096), null);
          const v4102 = stdlib.fromSome(v4101, stdlib.checkedBigNumberify('./index.rsh:113:60:decimal', stdlib.UInt_max, '0'));
          const v4103 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v4096), null);
          const v4104 = {
            None: 0,
            Some: 1
            }[v4103[0]];
          const v4105 = stdlib.eq(v4104, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v4105) {
            const v4106 = stdlib.safeAdd(v4102, v3963);
            await stdlib.simMapSet(sim_r, 0, v4096, v4106);
            const v4107 = true;
            const v4108 = await txn1.getOutput('Admin_setReward', 'v4107', ctc6, v4107);
            
            let v4121;
            if (v3964) {
              const v4122 = stdlib.safeAdd(v1666, v3963);
              v4121 = v4122;
              }
            else {
              v4121 = v1666;
              }
            const v4123 = {
              bal: v4121,
              keepGoing: v1667,
              total_amount_claimed: v1668,
              total_rewards_allcoated: v1669,
              total_users_claim: v1670,
              usersNo: v1671
              };
            const v9423 = v3979;
            const v9424 = v4123.keepGoing;
            if (v9424) {
              const v9425 = v4123.bal;
              const v9427 = v4123.total_amount_claimed;
              const v9428 = v4123.total_rewards_allcoated;
              const v9429 = v4123.total_users_claim;
              const v9430 = v4123.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v9434 = stdlib.sub(v3979, v3979);
              sim_r.txns.push({
                kind: 'from',
                to: v1627,
                tok: undefined /* Nothing */
                });
              const v9435 = (stdlib.le(await ctc.getBalance(), v9434) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9434));
              sim_r.txns.push({
                kind: 'from',
                to: v1627,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            if (v3964) {
              const v4125 = 'Your user hasn\'t opted in                                                                                                                                                                               ';
              null;
              const v4126 = false;
              const v4127 = await txn1.getOutput('Admin_setReward', 'v4126', ctc6, v4126);
              
              const v4141 = stdlib.safeAdd(v1666, v3963);
              const v4142 = {
                bal: v4141,
                keepGoing: v1667,
                total_amount_claimed: v1668,
                total_rewards_allcoated: v1669,
                total_users_claim: v1670,
                usersNo: v1671
                };
              const v9438 = v3979;
              const v9439 = v4142.keepGoing;
              if (v9439) {
                const v9440 = v4142.bal;
                const v9442 = v4142.total_amount_claimed;
                const v9443 = v4142.total_rewards_allcoated;
                const v9444 = v4142.total_users_claim;
                const v9445 = v4142.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v9449 = stdlib.sub(v3979, v3979);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                const v9450 = (stdlib.le(await ctc.getBalance(), v9449) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9449));
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v4144 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
              null;
              const v4145 = false;
              const v4146 = await txn1.getOutput('Admin_setReward', 'v4145', ctc6, v4145);
              
              const v4161 = {
                bal: v1666,
                keepGoing: v1667,
                total_amount_claimed: v1668,
                total_rewards_allcoated: v1669,
                total_users_claim: v1670,
                usersNo: v1671
                };
              const v9453 = v3979;
              const v9454 = v4161.keepGoing;
              if (v9454) {
                const v9455 = v4161.bal;
                const v9457 = v4161.total_amount_claimed;
                const v9458 = v4161.total_rewards_allcoated;
                const v9459 = v4161.total_users_claim;
                const v9460 = v4161.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v9464 = stdlib.sub(v3979, v3979);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                const v9465 = (stdlib.le(await ctc.getBalance(), v9464) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9464));
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
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
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      undefined /* setApiDetails */;
      const v3963 = v3925[stdlib.checkedBigNumberify('./index.rsh:108:10:spread', stdlib.UInt_max, '1')];
      const v3964 = stdlib.gt(v3963, v1666);
      const v3965 = v3964 ? v3963 : stdlib.checkedBigNumberify('./index.rsh:111:30:decimal', stdlib.UInt_max, '0');
      const v3979 = stdlib.add(v1649, v3965);
      ;
      const v4096 = v3925[stdlib.checkedBigNumberify('./index.rsh:108:10:spread', stdlib.UInt_max, '0')];
      const v4101 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4096), null);
      const v4102 = stdlib.fromSome(v4101, stdlib.checkedBigNumberify('./index.rsh:113:60:decimal', stdlib.UInt_max, '0'));
      const v4103 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v4096), null);
      const v4104 = {
        None: 0,
        Some: 1
        }[v4103[0]];
      const v4105 = stdlib.eq(v4104, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v4105) {
        const v4106 = stdlib.safeAdd(v4102, v3963);
        await stdlib.mapSet(map0, v4096, v4106);
        const v4107 = true;
        const v4108 = await txn1.getOutput('Admin_setReward', 'v4107', ctc6, v4107);
        if (v1100) {
          stdlib.protect(ctc0, await interact.out(v3925, v4108), {
            at: './index.rsh:108:11:application',
            fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:116:16:application call to "ret" (defined at: ./index.rsh:112:15:function exp)', 'at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)'],
            msg: 'out',
            who: 'Admin_setReward'
            });
          }
        else {
          }
        
        let v4121;
        if (v3964) {
          const v4122 = stdlib.safeAdd(v1666, v3963);
          v4121 = v4122;
          }
        else {
          v4121 = v1666;
          }
        const v4123 = {
          bal: v4121,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v1671
          };
        const v9423 = v3979;
        const v9424 = v4123.keepGoing;
        if (v9424) {
          const v9425 = v4123.bal;
          const v9427 = v4123.total_amount_claimed;
          const v9428 = v4123.total_rewards_allcoated;
          const v9429 = v4123.total_users_claim;
          const v9430 = v4123.usersNo;
          return;
          }
        else {
          const v9434 = stdlib.sub(v3979, v3979);
          ;
          const v9435 = (stdlib.le(await ctc.getBalance(), v9434) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9434));
          ;
          return;
          }}
      else {
        if (v3964) {
          const v4125 = 'Your user hasn\'t opted in                                                                                                                                                                               ';
          null;
          const v4126 = false;
          const v4127 = await txn1.getOutput('Admin_setReward', 'v4126', ctc6, v4126);
          if (v1100) {
            stdlib.protect(ctc0, await interact.out(v3925, v4127), {
              at: './index.rsh:108:11:application',
              fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:123:16:application call to "ret" (defined at: ./index.rsh:112:15:function exp)', 'at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)'],
              msg: 'out',
              who: 'Admin_setReward'
              });
            }
          else {
            }
          
          const v4141 = stdlib.safeAdd(v1666, v3963);
          const v4142 = {
            bal: v4141,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v9438 = v3979;
          const v9439 = v4142.keepGoing;
          if (v9439) {
            const v9440 = v4142.bal;
            const v9442 = v4142.total_amount_claimed;
            const v9443 = v4142.total_rewards_allcoated;
            const v9444 = v4142.total_users_claim;
            const v9445 = v4142.usersNo;
            return;
            }
          else {
            const v9449 = stdlib.sub(v3979, v3979);
            ;
            const v9450 = (stdlib.le(await ctc.getBalance(), v9449) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9449));
            ;
            return;
            }}
        else {
          const v4144 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
          null;
          const v4145 = false;
          const v4146 = await txn1.getOutput('Admin_setReward', 'v4145', ctc6, v4145);
          if (v1100) {
            stdlib.protect(ctc0, await interact.out(v3925, v4146), {
              at: './index.rsh:108:11:application',
              fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:135:16:application call to "ret" (defined at: ./index.rsh:112:15:function exp)', 'at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)'],
              msg: 'out',
              who: 'Admin_setReward'
              });
            }
          else {
            }
          
          const v4161 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v9453 = v3979;
          const v9454 = v4161.keepGoing;
          if (v9454) {
            const v9455 = v4161.bal;
            const v9457 = v4161.total_amount_claimed;
            const v9458 = v4161.total_rewards_allcoated;
            const v9459 = v4161.total_users_claim;
            const v9460 = v4161.usersNo;
            return;
            }
          else {
            const v9464 = stdlib.sub(v3979, v3979);
            ;
            const v9465 = (stdlib.le(await ctc.getBalance(), v9464) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9464));
            ;
            return;
            }}}
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
    Admin_addAdmin0_233: ctc6,
    Admin_deposit0_233: ctc7,
    Admin_editUserReward0_233: ctc8,
    Admin_endContractAndTransfer0_233: ctc9,
    Admin_revokeAdmin0_233: ctc6,
    Admin_setReward0_233: ctc8,
    User_claim0_233: ctc7,
    User_claimAll0_233: ctc9,
    User_optin0_233: ctc9
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
  
  
  const v1624 = stdlib.protect(ctc4, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1624],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:53:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1628], secs: v1630, time: v1629, didSend: v170, from: v1627 } = txn1;
      
      ;
      const v1631 = await ctc.getContractInfo();
      
      const v1644 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1645 = v1644;
      const v1646 = v1629;
      const v1649 = stdlib.checkedBigNumberify('./index.rsh:48:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1660 = v1645.keepGoing;
        
        return v1660;})()) {
        const v1666 = v1645.bal;
        const v1667 = v1645.keepGoing;
        const v1668 = v1645.total_amount_claimed;
        const v1669 = v1645.total_rewards_allcoated;
        const v1670 = v1645.total_users_claim;
        const v1671 = v1645.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v5587 = stdlib.sub(v1649, v1649);
        sim_r.txns.push({
          kind: 'from',
          to: v1627,
          tok: undefined /* Nothing */
          });
        const v5589 = (stdlib.le(await ctc.getBalance(), v5587) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v5587));
        sim_r.txns.push({
          kind: 'from',
          to: v1627,
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
  const {data: [v1628], secs: v1630, time: v1629, didSend: v170, from: v1627 } = txn1;
  ;
  const v1631 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v1631), {
    at: './index.rsh:55:27:application',
    fs: ['at ./index.rsh:55:27:application call to [unknown function] (defined at: ./index.rsh:55:27:function exp)', 'at ./index.rsh:55:27:application call to "liftedInteract" (defined at: ./index.rsh:55:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v1644 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v1645 = v1644;
  let v1646 = v1629;
  let v1649 = stdlib.checkedBigNumberify('./index.rsh:48:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v1660 = v1645.keepGoing;
    
    return v1660;})()) {
    const v1666 = v1645.bal;
    const v1667 = v1645.keepGoing;
    const v1668 = v1645.total_amount_claimed;
    const v1669 = v1645.total_rewards_allcoated;
    const v1670 = v1645.total_users_claim;
    const v1671 = v1645.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn3;
    switch (v1857[0]) {
      case 'Admin_addAdmin0_233': {
        const v1860 = v1857[1];
        undefined /* setApiDetails */;
        const v1866 = stdlib.addressEq(v1856, v1627);
        const v1867 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1856), null);
        const v1868 = {
          None: 0,
          Some: 1
          }[v1867[0]];
        const v1869 = stdlib.eq(v1868, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1870 = v1866 ? true : v1869;
        stdlib.assert(v1870, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v1916 = v1860[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, v1916, null);
        const v1925 = null;
        await txn3.getOutput('Admin_addAdmin', 'v1925', ctc0, v1925);
        const v1938 = {
          bal: v1666,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v1671
          };
        const cv1645 = v1938;
        const cv1646 = v1858;
        const cv1649 = v1649;
        
        v1645 = cv1645;
        v1646 = cv1646;
        v1649 = cv1649;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_233': {
        const v2273 = v1857[1];
        undefined /* setApiDetails */;
        const v2286 = v2273[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '0')];
        const v2287 = stdlib.addressEq(v1856, v1627);
        const v2288 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1856), null);
        const v2289 = {
          None: 0,
          Some: 1
          }[v2288[0]];
        const v2290 = stdlib.eq(v2289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2291 = v2287 ? true : v2290;
        stdlib.assert(v2291, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v2327 = stdlib.add(v1649, v2286);
        ;
        const v2362 = null;
        await txn3.getOutput('Admin_deposit', 'v2362', ctc0, v2362);
        const v2375 = stdlib.safeAdd(v1666, v2286);
        const v2376 = {
          bal: v2375,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v1671
          };
        const cv1645 = v2376;
        const cv1646 = v1858;
        const cv1649 = v2327;
        
        v1645 = cv1645;
        v1646 = cv1646;
        v1649 = cv1649;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_233': {
        const v2686 = v1857[1];
        undefined /* setApiDetails */;
        const v2709 = stdlib.addressEq(v1856, v1627);
        const v2710 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1856), null);
        const v2711 = {
          None: 0,
          Some: 1
          }[v2710[0]];
        const v2712 = stdlib.eq(v2711, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2713 = v2709 ? true : v2712;
        stdlib.assert(v2713, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        ;
        const v2792 = v2686[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '0')];
        const v2793 = v2686[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '1')];
        await stdlib.mapSet(map0, v2792, v2793);
        const v2802 = null;
        await txn3.getOutput('Admin_editUserReward', 'v2802', ctc0, v2802);
        const v2816 = {
          bal: v1666,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v1671
          };
        const cv1645 = v2816;
        const cv1646 = v1858;
        const cv1649 = v1649;
        
        v1645 = cv1645;
        v1646 = cv1646;
        v1649 = cv1649;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_233': {
        const v3099 = v1857[1];
        undefined /* setApiDetails */;
        const v3129 = stdlib.addressEq(v1627, v1856);
        stdlib.assert(v3129, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        const v3234 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v3234', ctc0, v3234);
        const v3246 = {
          bal: v1666,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v1671
          };
        const cv1645 = v3246;
        const cv1646 = v1858;
        const cv1649 = v1649;
        
        v1645 = cv1645;
        v1646 = cv1646;
        v1649 = cv1649;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_233': {
        const v3512 = v1857[1];
        undefined /* setApiDetails */;
        const v3546 = stdlib.addressEq(v1856, v1627);
        stdlib.assert(v3546, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v3662 = v3512[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, v3662, undefined /* Nothing */);
        const v3667 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v3667', ctc0, v3667);
        const v3680 = {
          bal: v1666,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v1671
          };
        const cv1645 = v3680;
        const cv1646 = v1858;
        const cv1649 = v1649;
        
        v1645 = cv1645;
        v1646 = cv1646;
        v1649 = cv1649;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_233': {
        const v3925 = v1857[1];
        undefined /* setApiDetails */;
        const v3963 = v3925[stdlib.checkedBigNumberify('./index.rsh:108:10:spread', stdlib.UInt_max, '1')];
        const v3964 = stdlib.gt(v3963, v1666);
        const v3965 = v3964 ? v3963 : stdlib.checkedBigNumberify('./index.rsh:111:30:decimal', stdlib.UInt_max, '0');
        const v3979 = stdlib.add(v1649, v3965);
        ;
        const v4096 = v3925[stdlib.checkedBigNumberify('./index.rsh:108:10:spread', stdlib.UInt_max, '0')];
        const v4101 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4096), null);
        const v4102 = stdlib.fromSome(v4101, stdlib.checkedBigNumberify('./index.rsh:113:60:decimal', stdlib.UInt_max, '0'));
        const v4103 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v4096), null);
        const v4104 = {
          None: 0,
          Some: 1
          }[v4103[0]];
        const v4105 = stdlib.eq(v4104, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v4105) {
          const v4106 = stdlib.safeAdd(v4102, v3963);
          await stdlib.mapSet(map0, v4096, v4106);
          const v4107 = true;
          await txn3.getOutput('Admin_setReward', 'v4107', ctc11, v4107);
          let v4121;
          if (v3964) {
            const v4122 = stdlib.safeAdd(v1666, v3963);
            v4121 = v4122;
            }
          else {
            v4121 = v1666;
            }
          const v4123 = {
            bal: v4121,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const cv1645 = v4123;
          const cv1646 = v1858;
          const cv1649 = v3979;
          
          v1645 = cv1645;
          v1646 = cv1646;
          v1649 = cv1649;
          
          txn2 = txn3;
          continue;}
        else {
          if (v3964) {
            const v4125 = 'Your user hasn\'t opted in                                                                                                                                                                               ';
            null;
            const v4126 = false;
            await txn3.getOutput('Admin_setReward', 'v4126', ctc11, v4126);
            const v4141 = stdlib.safeAdd(v1666, v3963);
            const v4142 = {
              bal: v4141,
              keepGoing: v1667,
              total_amount_claimed: v1668,
              total_rewards_allcoated: v1669,
              total_users_claim: v1670,
              usersNo: v1671
              };
            const cv1645 = v4142;
            const cv1646 = v1858;
            const cv1649 = v3979;
            
            v1645 = cv1645;
            v1646 = cv1646;
            v1649 = cv1649;
            
            txn2 = txn3;
            continue;}
          else {
            const v4144 = 'The balance you are trying to set for the user is invalid and they haven\'t opted in                                                                                                                     ';
            null;
            const v4145 = false;
            await txn3.getOutput('Admin_setReward', 'v4145', ctc11, v4145);
            const v4161 = {
              bal: v1666,
              keepGoing: v1667,
              total_amount_claimed: v1668,
              total_rewards_allcoated: v1669,
              total_users_claim: v1670,
              usersNo: v1671
              };
            const cv1645 = v4161;
            const cv1646 = v1858;
            const cv1649 = v3979;
            
            v1645 = cv1645;
            v1646 = cv1646;
            v1649 = cv1649;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_claim0_233': {
        const v4338 = v1857[1];
        undefined /* setApiDetails */;
        const v4381 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1856), null);
        const v4382 = {
          None: 0,
          Some: 1
          }[v4381[0]];
        const v4383 = stdlib.eq(v4382, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4383, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
          msg: 'Cannot claim because you have not earned reward',
          who: 'Deployer'
          });
        ;
        const v4577 = v4338[stdlib.checkedBigNumberify('./index.rsh:224:10:spread', stdlib.UInt_max, '0')];
        const v4584 = stdlib.fromSome(v4381, stdlib.checkedBigNumberify('./index.rsh:232:60:decimal', stdlib.UInt_max, '0'));
        const v4585 = stdlib.gt(v4577, v4584);
        const v4586 = v4585 ? v4584 : v4577;
        const v4588 = stdlib.gt(v1649, v4586);
        const v4589 = v4588 ? v4586 : v1649;
        const v4591 = stdlib.ge(v4584, v1649);
        if (v4591) {
          null;
          const v4592 = false;
          await txn3.getOutput('User_claim', 'v4592', ctc11, v4592);
          const v4605 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:238:57:decimal', stdlib.UInt_max, '1'));
          const v4606 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v4605
            };
          const cv1645 = v4606;
          const cv1646 = v1858;
          const cv1649 = v1649;
          
          v1645 = cv1645;
          v1646 = cv1646;
          v1649 = cv1649;
          
          txn2 = txn3;
          continue;}
        else {
          const v4608 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1856), null);
          const v4609 = {
            None: 0,
            Some: 1
            }[v4608[0]];
          const v4610 = stdlib.eq(v4609, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v4610) {
            const v4637 = true;
            await txn3.getOutput('User_claim', 'v4637', ctc11, v4637);
            const v4647 = stdlib.sub(v1649, v4589);
            ;
            await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
            const v4654 = stdlib.safeSub(v1666, v4589);
            const v4655 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:261:54:decimal', stdlib.UInt_max, '1'));
            const v4656 = stdlib.safeAdd(v1668, v4589);
            const v4657 = {
              bal: v4654,
              keepGoing: v1667,
              total_amount_claimed: v4656,
              total_rewards_allcoated: v1669,
              total_users_claim: v4655,
              usersNo: v1671
              };
            const cv1645 = v4657;
            const cv1646 = v1858;
            const cv1649 = v4647;
            
            v1645 = cv1645;
            v1646 = cv1646;
            v1649 = cv1649;
            
            txn2 = txn3;
            continue;}
          else {
            const v4612 = true;
            await txn3.getOutput('User_claim', 'v4612', ctc11, v4612);
            const v4619 = {
              addr: v1856,
              amount: v4589,
              projectName: v1628
              };
            null;
            await stdlib.mapSet(map2, v1856, null);
            const v4624 = stdlib.sub(v1649, v4589);
            ;
            await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
            const v4631 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:249:34:decimal', stdlib.UInt_max, '1'));
            const v4632 = stdlib.safeSub(v1666, v4589);
            const v4633 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:251:54:decimal', stdlib.UInt_max, '1'));
            const v4634 = stdlib.safeAdd(v1668, v4589);
            const v4635 = {
              bal: v4632,
              keepGoing: v1667,
              total_amount_claimed: v4634,
              total_rewards_allcoated: v1669,
              total_users_claim: v4633,
              usersNo: v4631
              };
            const cv1645 = v4635;
            const cv1646 = v1858;
            const cv1649 = v4624;
            
            v1645 = cv1645;
            v1646 = cv1646;
            v1649 = cv1649;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_claimAll0_233': {
        const v4751 = v1857[1];
        undefined /* setApiDetails */;
        const v4799 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1856), null);
        const v4800 = {
          None: 0,
          Some: 1
          }[v4799[0]];
        const v4801 = stdlib.eq(v4800, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4801, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
          msg: 'Cannot claim because you have not earned reward',
          who: 'Deployer'
          });
        ;
        const v5078 = stdlib.fromSome(v4799, stdlib.checkedBigNumberify('./index.rsh:189:60:decimal', stdlib.UInt_max, '0'));
        const v5080 = stdlib.gt(v1649, v5078);
        const v5081 = v5080 ? v5078 : v1649;
        const v5083 = stdlib.ge(v5078, v1649);
        if (v5083) {
          null;
          const v5084 = false;
          await txn3.getOutput('User_claimAll', 'v5084', ctc11, v5084);
          const v5096 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:194:57:decimal', stdlib.UInt_max, '1'));
          const v5097 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v5096
            };
          const cv1645 = v5097;
          const cv1646 = v1858;
          const cv1649 = v1649;
          
          v1645 = cv1645;
          v1646 = cv1646;
          v1649 = cv1649;
          
          txn2 = txn3;
          continue;}
        else {
          const v5099 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1856), null);
          const v5100 = {
            None: 0,
            Some: 1
            }[v5099[0]];
          const v5101 = stdlib.eq(v5100, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v5101) {
            const v5127 = true;
            await txn3.getOutput('User_claimAll', 'v5127', ctc11, v5127);
            const v5136 = stdlib.sub(v1649, v5081);
            ;
            await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
            const v5143 = stdlib.safeSub(v1666, v5081);
            const v5144 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:217:54:decimal', stdlib.UInt_max, '1'));
            const v5145 = stdlib.safeAdd(v1668, v5081);
            const v5146 = {
              bal: v5143,
              keepGoing: v1667,
              total_amount_claimed: v5145,
              total_rewards_allcoated: v1669,
              total_users_claim: v5144,
              usersNo: v1671
              };
            const cv1645 = v5146;
            const cv1646 = v1858;
            const cv1649 = v5136;
            
            v1645 = cv1645;
            v1646 = cv1646;
            v1649 = cv1649;
            
            txn2 = txn3;
            continue;}
          else {
            const v5103 = true;
            await txn3.getOutput('User_claimAll', 'v5103', ctc11, v5103);
            const v5109 = {
              addr: v1856,
              amount: v5081,
              projectName: v1628
              };
            null;
            await stdlib.mapSet(map2, v1856, null);
            const v5114 = stdlib.sub(v1649, v5081);
            ;
            await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
            const v5121 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:205:34:decimal', stdlib.UInt_max, '1'));
            const v5122 = stdlib.safeSub(v1666, v5081);
            const v5123 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', stdlib.UInt_max, '1'));
            const v5124 = stdlib.safeAdd(v1668, v5081);
            const v5125 = {
              bal: v5122,
              keepGoing: v1667,
              total_amount_claimed: v5124,
              total_rewards_allcoated: v1669,
              total_users_claim: v5123,
              usersNo: v5121
              };
            const cv1645 = v5125;
            const cv1646 = v1858;
            const cv1649 = v5114;
            
            v1645 = cv1645;
            v1646 = cv1646;
            v1649 = cv1649;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_233': {
        const v5164 = v1857[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map3, v1856, null);
        const v5563 = null;
        await txn3.getOutput('User_optin', 'v5563', ctc0, v5563);
        const v5575 = {
          bal: v1666,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v1671
          };
        const cv1645 = v5575;
        const cv1646 = v1858;
        const cv1649 = v1649;
        
        v1645 = cv1645;
        v1646 = cv1646;
        v1649 = cv1649;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v5587 = stdlib.sub(v1649, v1649);
  ;
  const v5589 = (stdlib.le(await ctc.getBalance(), v5587) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v5587));
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
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc8,
    Admin_deposit0_233: ctc7,
    Admin_editUserReward0_233: ctc9,
    Admin_endContractAndTransfer0_233: ctc10,
    Admin_revokeAdmin0_233: ctc8,
    Admin_setReward0_233: ctc9,
    User_claim0_233: ctc7,
    User_claimAll0_233: ctc10,
    User_optin0_233: ctc10
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1773 = ctc.selfAddress();
  const v1775 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)', 'at ./index.rsh:70:37:application call to "runUser_claim0_233" (defined at: ./index.rsh:224:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v1778 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1773), null);
  const v1779 = {
    None: 0,
    Some: 1
    }[v1778[0]];
  const v1780 = stdlib.eq(v1779, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1780, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)', 'at ./index.rsh:70:37:application call to "runUser_claim0_233" (defined at: ./index.rsh:224:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'Cannot claim because you have not earned reward',
    who: 'User_claim'
    });
  const v1787 = ['User_claim0_233', v1775];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1787],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:230:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v4381 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1856), null);
          ;
          const v4577 = v4338[stdlib.checkedBigNumberify('./index.rsh:224:10:spread', stdlib.UInt_max, '0')];
          const v4584 = stdlib.fromSome(v4381, stdlib.checkedBigNumberify('./index.rsh:232:60:decimal', stdlib.UInt_max, '0'));
          const v4585 = stdlib.gt(v4577, v4584);
          const v4586 = v4585 ? v4584 : v4577;
          const v4588 = stdlib.gt(v1649, v4586);
          const v4589 = v4588 ? v4586 : v1649;
          const v4591 = stdlib.ge(v4584, v1649);
          if (v4591) {
            null;
            const v4592 = false;
            const v4593 = await txn1.getOutput('User_claim', 'v4592', ctc6, v4592);
            
            const v4605 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:238:57:decimal', stdlib.UInt_max, '1'));
            const v4606 = {
              bal: v1666,
              keepGoing: v1667,
              total_amount_claimed: v1668,
              total_rewards_allcoated: v1669,
              total_users_claim: v1670,
              usersNo: v4605
              };
            const v9693 = v1649;
            const v9694 = v4606.keepGoing;
            if (v9694) {
              const v9695 = v4606.bal;
              const v9697 = v4606.total_amount_claimed;
              const v9698 = v4606.total_rewards_allcoated;
              const v9699 = v4606.total_users_claim;
              const v9700 = v4606.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v9704 = stdlib.sub(v1649, v1649);
              sim_r.txns.push({
                kind: 'from',
                to: v1627,
                tok: undefined /* Nothing */
                });
              const v9705 = (stdlib.le(await ctc.getBalance(), v9704) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9704));
              sim_r.txns.push({
                kind: 'from',
                to: v1627,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v4608 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1856), null);
            const v4609 = {
              None: 0,
              Some: 1
              }[v4608[0]];
            const v4610 = stdlib.eq(v4609, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            if (v4610) {
              const v4637 = true;
              const v4638 = await txn1.getOutput('User_claim', 'v4637', ctc6, v4637);
              
              const v4647 = stdlib.sub(v1649, v4589);
              sim_r.txns.push({
                kind: 'from',
                to: v1856,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, v1856, undefined /* Nothing */);
              const v4654 = stdlib.safeSub(v1666, v4589);
              const v4655 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:261:54:decimal', stdlib.UInt_max, '1'));
              const v4656 = stdlib.safeAdd(v1668, v4589);
              const v4657 = {
                bal: v4654,
                keepGoing: v1667,
                total_amount_claimed: v4656,
                total_rewards_allcoated: v1669,
                total_users_claim: v4655,
                usersNo: v1671
                };
              const v9708 = v4647;
              const v9709 = v4657.keepGoing;
              if (v9709) {
                const v9710 = v4657.bal;
                const v9712 = v4657.total_amount_claimed;
                const v9713 = v4657.total_rewards_allcoated;
                const v9714 = v4657.total_users_claim;
                const v9715 = v4657.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v9719 = stdlib.sub(v4647, v4647);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                const v9720 = (stdlib.le(await ctc.getBalance(), v9719) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9719));
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v4612 = true;
              const v4613 = await txn1.getOutput('User_claim', 'v4612', ctc6, v4612);
              
              const v4619 = {
                addr: v1856,
                amount: v4589,
                projectName: v1628
                };
              null;
              await stdlib.simMapSet(sim_r, 2, v1856, null);
              const v4624 = stdlib.sub(v1649, v4589);
              sim_r.txns.push({
                kind: 'from',
                to: v1856,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, v1856, undefined /* Nothing */);
              const v4631 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:249:34:decimal', stdlib.UInt_max, '1'));
              const v4632 = stdlib.safeSub(v1666, v4589);
              const v4633 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:251:54:decimal', stdlib.UInt_max, '1'));
              const v4634 = stdlib.safeAdd(v1668, v4589);
              const v4635 = {
                bal: v4632,
                keepGoing: v1667,
                total_amount_claimed: v4634,
                total_rewards_allcoated: v1669,
                total_users_claim: v4633,
                usersNo: v4631
                };
              const v9723 = v4624;
              const v9724 = v4635.keepGoing;
              if (v9724) {
                const v9725 = v4635.bal;
                const v9727 = v4635.total_amount_claimed;
                const v9728 = v4635.total_rewards_allcoated;
                const v9729 = v4635.total_users_claim;
                const v9730 = v4635.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v9734 = stdlib.sub(v4624, v4624);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                const v9735 = (stdlib.le(await ctc.getBalance(), v9734) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9734));
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
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
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      undefined /* setApiDetails */;
      const v4381 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1856), null);
      const v4382 = {
        None: 0,
        Some: 1
        }[v4381[0]];
      const v4383 = stdlib.eq(v4382, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4383, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
        msg: 'Cannot claim because you have not earned reward',
        who: 'User_claim'
        });
      ;
      const v4577 = v4338[stdlib.checkedBigNumberify('./index.rsh:224:10:spread', stdlib.UInt_max, '0')];
      const v4584 = stdlib.fromSome(v4381, stdlib.checkedBigNumberify('./index.rsh:232:60:decimal', stdlib.UInt_max, '0'));
      const v4585 = stdlib.gt(v4577, v4584);
      const v4586 = v4585 ? v4584 : v4577;
      const v4588 = stdlib.gt(v1649, v4586);
      const v4589 = v4588 ? v4586 : v1649;
      const v4591 = stdlib.ge(v4584, v1649);
      if (v4591) {
        null;
        const v4592 = false;
        const v4593 = await txn1.getOutput('User_claim', 'v4592', ctc6, v4592);
        if (v1100) {
          stdlib.protect(ctc0, await interact.out(v4338, v4593), {
            at: './index.rsh:224:11:application',
            fs: ['at ./index.rsh:224:11:application call to [unknown function] (defined at: ./index.rsh:224:11:function exp)', 'at ./index.rsh:237:16:application call to "ret" (defined at: ./index.rsh:231:15:function exp)', 'at ./index.rsh:231:15:application call to [unknown function] (defined at: ./index.rsh:231:15:function exp)'],
            msg: 'out',
            who: 'User_claim'
            });
          }
        else {
          }
        
        const v4605 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:238:57:decimal', stdlib.UInt_max, '1'));
        const v4606 = {
          bal: v1666,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v4605
          };
        const v9693 = v1649;
        const v9694 = v4606.keepGoing;
        if (v9694) {
          const v9695 = v4606.bal;
          const v9697 = v4606.total_amount_claimed;
          const v9698 = v4606.total_rewards_allcoated;
          const v9699 = v4606.total_users_claim;
          const v9700 = v4606.usersNo;
          return;
          }
        else {
          const v9704 = stdlib.sub(v1649, v1649);
          ;
          const v9705 = (stdlib.le(await ctc.getBalance(), v9704) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9704));
          ;
          return;
          }}
      else {
        const v4608 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1856), null);
        const v4609 = {
          None: 0,
          Some: 1
          }[v4608[0]];
        const v4610 = stdlib.eq(v4609, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v4610) {
          const v4637 = true;
          const v4638 = await txn1.getOutput('User_claim', 'v4637', ctc6, v4637);
          if (v1100) {
            stdlib.protect(ctc0, await interact.out(v4338, v4638), {
              at: './index.rsh:224:11:application',
              fs: ['at ./index.rsh:224:11:application call to [unknown function] (defined at: ./index.rsh:224:11:function exp)', 'at ./index.rsh:255:16:application call to "ret" (defined at: ./index.rsh:231:15:function exp)', 'at ./index.rsh:231:15:application call to [unknown function] (defined at: ./index.rsh:231:15:function exp)'],
              msg: 'out',
              who: 'User_claim'
              });
            }
          else {
            }
          
          const v4647 = stdlib.sub(v1649, v4589);
          ;
          await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
          const v4654 = stdlib.safeSub(v1666, v4589);
          const v4655 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:261:54:decimal', stdlib.UInt_max, '1'));
          const v4656 = stdlib.safeAdd(v1668, v4589);
          const v4657 = {
            bal: v4654,
            keepGoing: v1667,
            total_amount_claimed: v4656,
            total_rewards_allcoated: v1669,
            total_users_claim: v4655,
            usersNo: v1671
            };
          const v9708 = v4647;
          const v9709 = v4657.keepGoing;
          if (v9709) {
            const v9710 = v4657.bal;
            const v9712 = v4657.total_amount_claimed;
            const v9713 = v4657.total_rewards_allcoated;
            const v9714 = v4657.total_users_claim;
            const v9715 = v4657.usersNo;
            return;
            }
          else {
            const v9719 = stdlib.sub(v4647, v4647);
            ;
            const v9720 = (stdlib.le(await ctc.getBalance(), v9719) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9719));
            ;
            return;
            }}
        else {
          const v4612 = true;
          const v4613 = await txn1.getOutput('User_claim', 'v4612', ctc6, v4612);
          if (v1100) {
            stdlib.protect(ctc0, await interact.out(v4338, v4613), {
              at: './index.rsh:224:11:application',
              fs: ['at ./index.rsh:224:11:application call to [unknown function] (defined at: ./index.rsh:224:11:function exp)', 'at ./index.rsh:240:16:application call to "ret" (defined at: ./index.rsh:231:15:function exp)', 'at ./index.rsh:231:15:application call to [unknown function] (defined at: ./index.rsh:231:15:function exp)'],
              msg: 'out',
              who: 'User_claim'
              });
            }
          else {
            }
          
          const v4619 = {
            addr: v1856,
            amount: v4589,
            projectName: v1628
            };
          null;
          await stdlib.mapSet(map2, v1856, null);
          const v4624 = stdlib.sub(v1649, v4589);
          ;
          await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
          const v4631 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:249:34:decimal', stdlib.UInt_max, '1'));
          const v4632 = stdlib.safeSub(v1666, v4589);
          const v4633 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:251:54:decimal', stdlib.UInt_max, '1'));
          const v4634 = stdlib.safeAdd(v1668, v4589);
          const v4635 = {
            bal: v4632,
            keepGoing: v1667,
            total_amount_claimed: v4634,
            total_rewards_allcoated: v1669,
            total_users_claim: v4633,
            usersNo: v4631
            };
          const v9723 = v4624;
          const v9724 = v4635.keepGoing;
          if (v9724) {
            const v9725 = v4635.bal;
            const v9727 = v4635.total_amount_claimed;
            const v9728 = v4635.total_rewards_allcoated;
            const v9729 = v4635.total_users_claim;
            const v9730 = v4635.usersNo;
            return;
            }
          else {
            const v9734 = stdlib.sub(v4624, v4624);
            ;
            const v9735 = (stdlib.le(await ctc.getBalance(), v9734) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9734));
            ;
            return;
            }}}
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc8,
    Admin_deposit0_233: ctc9,
    Admin_editUserReward0_233: ctc10,
    Admin_endContractAndTransfer0_233: ctc7,
    Admin_revokeAdmin0_233: ctc8,
    Admin_setReward0_233: ctc10,
    User_claim0_233: ctc9,
    User_claimAll0_233: ctc7,
    User_optin0_233: ctc7
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1761 = ctc.selfAddress();
  const v1763 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)', 'at ./index.rsh:70:37:application call to "runUser_claimAll0_233" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_claimAll'
    });
  const v1764 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1761), null);
  const v1765 = {
    None: 0,
    Some: 1
    }[v1764[0]];
  const v1766 = stdlib.eq(v1765, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1766, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)', 'at ./index.rsh:70:37:application call to "runUser_claimAll0_233" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'Cannot claim because you have not earned reward',
    who: 'User_claimAll'
    });
  const v1771 = ['User_claimAll0_233', v1763];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1771],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:187:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimAll"
            });
          const v4799 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1856), null);
          ;
          const v5078 = stdlib.fromSome(v4799, stdlib.checkedBigNumberify('./index.rsh:189:60:decimal', stdlib.UInt_max, '0'));
          const v5080 = stdlib.gt(v1649, v5078);
          const v5081 = v5080 ? v5078 : v1649;
          const v5083 = stdlib.ge(v5078, v1649);
          if (v5083) {
            null;
            const v5084 = false;
            const v5085 = await txn1.getOutput('User_claimAll', 'v5084', ctc6, v5084);
            
            const v5096 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:194:57:decimal', stdlib.UInt_max, '1'));
            const v5097 = {
              bal: v1666,
              keepGoing: v1667,
              total_amount_claimed: v1668,
              total_rewards_allcoated: v1669,
              total_users_claim: v1670,
              usersNo: v5096
              };
            const v9963 = v1649;
            const v9964 = v5097.keepGoing;
            if (v9964) {
              const v9965 = v5097.bal;
              const v9967 = v5097.total_amount_claimed;
              const v9968 = v5097.total_rewards_allcoated;
              const v9969 = v5097.total_users_claim;
              const v9970 = v5097.usersNo;
              sim_r.isHalt = false;
              }
            else {
              const v9974 = stdlib.sub(v1649, v1649);
              sim_r.txns.push({
                kind: 'from',
                to: v1627,
                tok: undefined /* Nothing */
                });
              const v9975 = (stdlib.le(await ctc.getBalance(), v9974) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9974));
              sim_r.txns.push({
                kind: 'from',
                to: v1627,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v5099 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1856), null);
            const v5100 = {
              None: 0,
              Some: 1
              }[v5099[0]];
            const v5101 = stdlib.eq(v5100, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            if (v5101) {
              const v5127 = true;
              const v5128 = await txn1.getOutput('User_claimAll', 'v5127', ctc6, v5127);
              
              const v5136 = stdlib.sub(v1649, v5081);
              sim_r.txns.push({
                kind: 'from',
                to: v1856,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, v1856, undefined /* Nothing */);
              const v5143 = stdlib.safeSub(v1666, v5081);
              const v5144 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:217:54:decimal', stdlib.UInt_max, '1'));
              const v5145 = stdlib.safeAdd(v1668, v5081);
              const v5146 = {
                bal: v5143,
                keepGoing: v1667,
                total_amount_claimed: v5145,
                total_rewards_allcoated: v1669,
                total_users_claim: v5144,
                usersNo: v1671
                };
              const v9978 = v5136;
              const v9979 = v5146.keepGoing;
              if (v9979) {
                const v9980 = v5146.bal;
                const v9982 = v5146.total_amount_claimed;
                const v9983 = v5146.total_rewards_allcoated;
                const v9984 = v5146.total_users_claim;
                const v9985 = v5146.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v9989 = stdlib.sub(v5136, v5136);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                const v9990 = (stdlib.le(await ctc.getBalance(), v9989) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9989));
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v5103 = true;
              const v5104 = await txn1.getOutput('User_claimAll', 'v5103', ctc6, v5103);
              
              const v5109 = {
                addr: v1856,
                amount: v5081,
                projectName: v1628
                };
              null;
              await stdlib.simMapSet(sim_r, 2, v1856, null);
              const v5114 = stdlib.sub(v1649, v5081);
              sim_r.txns.push({
                kind: 'from',
                to: v1856,
                tok: undefined /* Nothing */
                });
              await stdlib.simMapSet(sim_r, 0, v1856, undefined /* Nothing */);
              const v5121 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:205:34:decimal', stdlib.UInt_max, '1'));
              const v5122 = stdlib.safeSub(v1666, v5081);
              const v5123 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', stdlib.UInt_max, '1'));
              const v5124 = stdlib.safeAdd(v1668, v5081);
              const v5125 = {
                bal: v5122,
                keepGoing: v1667,
                total_amount_claimed: v5124,
                total_rewards_allcoated: v1669,
                total_users_claim: v5123,
                usersNo: v5121
                };
              const v9993 = v5114;
              const v9994 = v5125.keepGoing;
              if (v9994) {
                const v9995 = v5125.bal;
                const v9997 = v5125.total_amount_claimed;
                const v9998 = v5125.total_rewards_allcoated;
                const v9999 = v5125.total_users_claim;
                const v10000 = v5125.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v10004 = stdlib.sub(v5114, v5114);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
                  tok: undefined /* Nothing */
                  });
                const v10005 = (stdlib.le(await ctc.getBalance(), v10004) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10004));
                sim_r.txns.push({
                  kind: 'from',
                  to: v1627,
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
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      undefined /* setApiDetails */;
      const v4799 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1856), null);
      const v4800 = {
        None: 0,
        Some: 1
        }[v4799[0]];
      const v4801 = stdlib.eq(v4800, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4801, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
        msg: 'Cannot claim because you have not earned reward',
        who: 'User_claimAll'
        });
      ;
      const v5078 = stdlib.fromSome(v4799, stdlib.checkedBigNumberify('./index.rsh:189:60:decimal', stdlib.UInt_max, '0'));
      const v5080 = stdlib.gt(v1649, v5078);
      const v5081 = v5080 ? v5078 : v1649;
      const v5083 = stdlib.ge(v5078, v1649);
      if (v5083) {
        null;
        const v5084 = false;
        const v5085 = await txn1.getOutput('User_claimAll', 'v5084', ctc6, v5084);
        if (v1100) {
          stdlib.protect(ctc0, await interact.out(v4751, v5085), {
            at: './index.rsh:181:11:application',
            fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)', 'at ./index.rsh:193:16:application call to "ret" (defined at: ./index.rsh:188:15:function exp)', 'at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)'],
            msg: 'out',
            who: 'User_claimAll'
            });
          }
        else {
          }
        
        const v5096 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:194:57:decimal', stdlib.UInt_max, '1'));
        const v5097 = {
          bal: v1666,
          keepGoing: v1667,
          total_amount_claimed: v1668,
          total_rewards_allcoated: v1669,
          total_users_claim: v1670,
          usersNo: v5096
          };
        const v9963 = v1649;
        const v9964 = v5097.keepGoing;
        if (v9964) {
          const v9965 = v5097.bal;
          const v9967 = v5097.total_amount_claimed;
          const v9968 = v5097.total_rewards_allcoated;
          const v9969 = v5097.total_users_claim;
          const v9970 = v5097.usersNo;
          return;
          }
        else {
          const v9974 = stdlib.sub(v1649, v1649);
          ;
          const v9975 = (stdlib.le(await ctc.getBalance(), v9974) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9974));
          ;
          return;
          }}
      else {
        const v5099 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1856), null);
        const v5100 = {
          None: 0,
          Some: 1
          }[v5099[0]];
        const v5101 = stdlib.eq(v5100, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v5101) {
          const v5127 = true;
          const v5128 = await txn1.getOutput('User_claimAll', 'v5127', ctc6, v5127);
          if (v1100) {
            stdlib.protect(ctc0, await interact.out(v4751, v5128), {
              at: './index.rsh:181:11:application',
              fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)', 'at ./index.rsh:211:16:application call to "ret" (defined at: ./index.rsh:188:15:function exp)', 'at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v5136 = stdlib.sub(v1649, v5081);
          ;
          await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
          const v5143 = stdlib.safeSub(v1666, v5081);
          const v5144 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:217:54:decimal', stdlib.UInt_max, '1'));
          const v5145 = stdlib.safeAdd(v1668, v5081);
          const v5146 = {
            bal: v5143,
            keepGoing: v1667,
            total_amount_claimed: v5145,
            total_rewards_allcoated: v1669,
            total_users_claim: v5144,
            usersNo: v1671
            };
          const v9978 = v5136;
          const v9979 = v5146.keepGoing;
          if (v9979) {
            const v9980 = v5146.bal;
            const v9982 = v5146.total_amount_claimed;
            const v9983 = v5146.total_rewards_allcoated;
            const v9984 = v5146.total_users_claim;
            const v9985 = v5146.usersNo;
            return;
            }
          else {
            const v9989 = stdlib.sub(v5136, v5136);
            ;
            const v9990 = (stdlib.le(await ctc.getBalance(), v9989) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9989));
            ;
            return;
            }}
        else {
          const v5103 = true;
          const v5104 = await txn1.getOutput('User_claimAll', 'v5103', ctc6, v5103);
          if (v1100) {
            stdlib.protect(ctc0, await interact.out(v4751, v5104), {
              at: './index.rsh:181:11:application',
              fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)', 'at ./index.rsh:196:16:application call to "ret" (defined at: ./index.rsh:188:15:function exp)', 'at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v5109 = {
            addr: v1856,
            amount: v5081,
            projectName: v1628
            };
          null;
          await stdlib.mapSet(map2, v1856, null);
          const v5114 = stdlib.sub(v1649, v5081);
          ;
          await stdlib.mapSet(map0, v1856, undefined /* Nothing */);
          const v5121 = stdlib.safeAdd(v1671, stdlib.checkedBigNumberify('./index.rsh:205:34:decimal', stdlib.UInt_max, '1'));
          const v5122 = stdlib.safeSub(v1666, v5081);
          const v5123 = stdlib.safeAdd(v1670, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', stdlib.UInt_max, '1'));
          const v5124 = stdlib.safeAdd(v1668, v5081);
          const v5125 = {
            bal: v5122,
            keepGoing: v1667,
            total_amount_claimed: v5124,
            total_rewards_allcoated: v1669,
            total_users_claim: v5123,
            usersNo: v5121
            };
          const v9993 = v5114;
          const v9994 = v5125.keepGoing;
          if (v9994) {
            const v9995 = v5125.bal;
            const v9997 = v5125.total_amount_claimed;
            const v9998 = v5125.total_rewards_allcoated;
            const v9999 = v5125.total_users_claim;
            const v10000 = v5125.usersNo;
            return;
            }
          else {
            const v10004 = stdlib.sub(v5114, v5114);
            ;
            const v10005 = (stdlib.le(await ctc.getBalance(), v10004) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10004));
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc8,
    Admin_deposit0_233: ctc9,
    Admin_editUserReward0_233: ctc10,
    Admin_endContractAndTransfer0_233: ctc7,
    Admin_revokeAdmin0_233: ctc8,
    Admin_setReward0_233: ctc10,
    User_claim0_233: ctc9,
    User_claimAll0_233: ctc7,
    User_optin0_233: ctc7
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
  
  
  const [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v1791 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:271:26:application call to [unknown function] (defined at: ./index.rsh:271:26:function exp)', 'at ./index.rsh:70:37:application call to "runUser_optin0_233" (defined at: ./index.rsh:271:10:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v1795 = ['User_optin0_233', v1791];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1649, v1666, v1667, v1668, v1669, v1670, v1671, v1795],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:273:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'Admin_addAdmin0_233': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v2273 = v1857[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v2686 = v1857[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v3099 = v1857[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v3512 = v1857[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v3925 = v1857[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v4338 = v1857[1];
          
          break;
          }
        case 'User_claimAll0_233': {
          const v4751 = v1857[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v5164 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 3, v1856, null);
          const v5563 = null;
          const v5564 = await txn1.getOutput('User_optin', 'v5563', ctc0, v5563);
          
          const v5575 = {
            bal: v1666,
            keepGoing: v1667,
            total_amount_claimed: v1668,
            total_rewards_allcoated: v1669,
            total_users_claim: v1670,
            usersNo: v1671
            };
          const v10233 = v1649;
          const v10234 = v5575.keepGoing;
          if (v10234) {
            const v10235 = v5575.bal;
            const v10237 = v5575.total_amount_claimed;
            const v10238 = v5575.total_rewards_allcoated;
            const v10239 = v5575.total_users_claim;
            const v10240 = v5575.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v10244 = stdlib.sub(v1649, v1649);
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
              tok: undefined /* Nothing */
              });
            const v10245 = (stdlib.le(await ctc.getBalance(), v10244) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10244));
            sim_r.txns.push({
              kind: 'from',
              to: v1627,
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
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v1100, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'Admin_addAdmin0_233': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v2273 = v1857[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v2686 = v1857[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v3099 = v1857[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v3512 = v1857[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v3925 = v1857[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v4338 = v1857[1];
      return;
      break;
      }
    case 'User_claimAll0_233': {
      const v4751 = v1857[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v5164 = v1857[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map3, v1856, null);
      const v5563 = null;
      const v5564 = await txn1.getOutput('User_optin', 'v5563', ctc0, v5563);
      if (v1100) {
        stdlib.protect(ctc0, await interact.out(v5164, v5564), {
          at: './index.rsh:271:11:application',
          fs: ['at ./index.rsh:271:11:application call to [unknown function] (defined at: ./index.rsh:271:11:function exp)', 'at ./index.rsh:276:14:application call to "ret" (defined at: ./index.rsh:274:15:function exp)', 'at ./index.rsh:274:15:application call to [unknown function] (defined at: ./index.rsh:274:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v5575 = {
        bal: v1666,
        keepGoing: v1667,
        total_amount_claimed: v1668,
        total_rewards_allcoated: v1669,
        total_users_claim: v1670,
        usersNo: v1671
        };
      const v10233 = v1649;
      const v10234 = v5575.keepGoing;
      if (v10234) {
        const v10235 = v5575.bal;
        const v10237 = v5575.total_amount_claimed;
        const v10238 = v5575.total_rewards_allcoated;
        const v10239 = v5575.total_users_claim;
        const v10240 = v5575.usersNo;
        return;
        }
      else {
        const v10244 = stdlib.sub(v1649, v1649);
        ;
        const v10245 = (stdlib.le(await ctc.getBalance(), v10244) ? stdlib.checkedBigNumberify('./index.rsh:294:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10244));
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
    impure: [`Admin_addAdmin(address)byte[0]`, `Admin_deposit(uint64)byte[0]`, `Admin_editUserReward(address,uint64)byte[0]`, `Admin_endContractAndTransfer()byte[0]`, `Admin_revokeAdmin(address)byte[0]`, `Admin_setReward(address,uint64)byte`, `User_claim(uint64)byte`, `User_claimAll()byte`, `User_optin()byte[0]`],
    pure: [`Info_Admins(address)byte`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`],
    sigs: [`Admin_addAdmin(address)byte[0]`, `Admin_deposit(uint64)byte[0]`, `Admin_editUserReward(address,uint64)byte[0]`, `Admin_endContractAndTransfer()byte[0]`, `Admin_revokeAdmin(address)byte[0]`, `Admin_setReward(address,uint64)byte`, `Info_Admins(address)byte`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `User_claim(uint64)byte`, `User_claimAll()byte`, `User_optin()byte[0]`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAYAAEDCAkCKAz8lKG0Bb/St7YIq+eynwuK4/fnDI2rrp4Jt7KrwgftkPvXB5TS3MEHkLStzAK9+eKuBILyk8EE4oak5gKmmJGUAvKJzMAChbqM1AEFJgUBAAEBAAT/3nkoBJvIVFAiNQAxGEELaSpkSSJbNQElWzUCMRkjEkEACjEAKCEHr2ZCCzY2GgAXSUEB5CI1BCM1BkkhCAxAANtJIQkMQABpSSEKDEAAMEkhCwxAABQhCxJEKjX/gAEINP9QIQavUEIBxiEKEkQ2GgE1/4ABBDT/UCWvUEIBsUkhDAxAABYhDBJENhoBNhoCUDX/gAEFNP9QQgGUIQkSRDYaATX/gAEGNP9QMgNQQgF/SSENDEAAM0khDgxAABYhDhJENAEkEkQoZEk1A1dfCDUHQgqcIQ0SRDQBJBJEKGRJNQNXZwg1B0IKhkkhDwxAABYhDxJENhoBNhoCUDX/gAECNP9QQgEoIQgSRCo1/4ABAzT/UCEGr1BCARRJIRAMQABnSSERDEAAMEkhEgxAABYhEhJENAEkEkQoZEk1A1dPCDUHQgoqIRESRDYaATX/KDT/UCWvUEIA1kkhEwxAABMhExJENhoBNf8pNP9QMgNQQgC8IRASRDQBJBJEKGRJNQNXTwg1B0IJ50khFAxAADpJIRUMQAAUIRUSRCo1/4ABBzT/UCEGr1BCAIQhFBJENAEkEkQ2GgGICdxXCQEiVSMSFlEHCDUHQgmmSSEWDEAAIyEWEkQ0ASQSRCI2GgGICbVXAAlJNf8jWzT/IlVNFjUHQgl8gbuuuZsBEkQ0ASQSRDYaAYgJj1cLASJVIxIWUQcINQdCCVk2GgIXNQQ2GgM2GgEXSSEFDEAH+yEFEkQkNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/VyAeNf6BPls1/YFGWzX8V04BFzX7gU9bNfqBV1s1+YFfWzX4gWdbNfdJNQU19oAE/FtmxzT2ULA09iJVSYEEDEAGKkmBBgxAAw9JgQcMQAGcSSUMQABCJRJEMQAoMQCICOYpXAtmgAgAAAAAAAAVu7AqNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjT9QgedSDEAiAipVwAJSTX1IlUjEkQiNPVJNfMjWzTzIlVNNfQ0/TT0NP009A1NNfM09DT9D0EAPCs09BZQsIAJAAAAAAAAE9wAsCg1BzT/NP40/BY0+xZRBwhQNPoWUDT5FlA0+BZQNPcjCBZQMgY0/UIHLTEAiAg6VwoBIlUjEkEAXYAJAAAAAAAAFAcBsCk1B7EisgE087III7IQMQCyB7MxACgxAIgICSEEr1wAZjT/NP40/DTzCRY0+xZRBwhQNPo08wgWUDT5FlA0+CMIFlA09xZQMgY0/TTzCUIGwYAJAAAAAAAAE+8BsCk1BycEMQA08xZQNP5QULAxACgxAIgHrylcCmaxIrIBNPOyCCOyEDEAsgezMQAoMQCIB5MhBK9cAGY0/zT+NPw08wkWNPsWUQcIUDT6NPMIFlA0+RZQNPgjCBZQNPcjCBZQMgY0/TTzCUIGSUg09lcBCDX1MQCIB05XAAlJNfQiVSMSRDT1FzXzIjT0STXxI1s08SJVTTXyNPM08jTzNPINTTXxNP008TT9NPENTTXwNPI0/Q9BADwrNPIWULCACQAAAAAAABHwALAoNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3IwgWUDIGNP1CBcExAIgGzlcKASJVIxJBAF2ACQAAAAAAABIdAbApNQexIrIBNPCyCCOyEDEAsgezMQAoMQCIBp0hBK9cAGY0/zT+NPw08AkWNPsWUQcIUDT6NPAIFlA0+RZQNPgjCBZQNPcWUDIGNP008AlCBVWACQAAAAAAABIEAbApNQcnBDEANPAWUDT+UFCwMQAoMQCIBkMpXApmsSKyATTwsggjshAxALIHszEAKDEAiAYnIQSvXABmNP80/jT8NPAJFjT7FlEHCFA0+jTwCBZQNPkWUDT4IwgWUDT3IwgWUDIGNP008AlCBN1JIRcMQALASDT2VwEoNfU09YEgW0k19DT8DTXzIjT0NPNNNfI0/TTyCDXxNPKIBc409VcAIDXwNPCIBbNXCwEiVSMSQQBrNPAoNPCIBaEpIjTwiAWaVwAJSTXvI1s07yJVTTT0CBZQXABmgAkAAAAAAAAQCwGwKTUHNPNBAAo0/DT0CDXvQgAENPw17zT/NP407xY0+xZRBwhQNPoWUDT5FlA0+BZQNPcWUDIGNPFCBCw080EBCoDMARABneRZb3VyIHVzZXIgaGFzbid0IG9wdGVkIGluAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTwULCACQAAAAAAABAeALAoNQc0/zT+NPw09AgWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjTxQgMdgMwBEAGd5FRoZSBiYWxhbmNlIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBmb3IgdGhlIHVzZXIgaXMgaW52YWxpZCBhbmQgdGhleSBoYXZlbid0IG9wdGVkIGluAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANPBQsIAJAAAAAAAAEDEAsCg1BzT/NP40/BY0+xZRBwhQNPoWUDT5FlA0+BZQNPcWUDIGNPFCAhZINPZXASA19TEANP8SRDT1KDT1iAMSKFwJZoAIAAAAAAAADlOwKjUHNP80/jT8FjT7FlEHCFA0+hZQNPkWUDT4FlA09xZQMgY0/UIByUkhBQxAAKZJJAxAADpINP8xABJEgAgAAAAAAAAMorAqNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjT9QgGCSDT2VwEoNfUxADT/EjEAiAKCVwkBIlUjEhFENPVXACAoNPVXACCIAmspNPVXIAhQXABmgAgAAAAAAAAK8rAqNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjT9QgEcSSMMQABeSDT2VwEINfU09Rc19DEANP8SMQCIAhFXCQEiVSMSEUQ09IgCEoAIAAAAAAAACTqwKjUHNP80/jT8NPQIFjT7FlEHCFA0+hZQNPkWUDT4FlA09xZQMgY0/TT0CEIAuEg09lcBIDX1MQA0/xIxAIgBuFcJASJVIxIRRDT1KDT1iAGnKVwJZoAIAAAAAAAAB4WwKjUHNP80/jT8FjT7FlEHCFA0+hZQNPkWUDT4FlA09xZQMgY0/UIAXiISRIGgjQaIAXUiNAESRDQESSISTDQCEhFESTUFNf+ABK215JQ0/1CwMQA0/4ApAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyBiJCAAA1/zX+Nf01/DX7NP1XCAEXQQBgNP0iWzX6NP1XCAEXNfk0/SEEWzX4NP2BEVs19zT9gRlbNfY0/YEhWzX1NPs0/FA0/xZQNPoWUDT5FlEHCFA0+BZQNPcWUDT2FlA09RZQKEsBVwBvZ0gkNQEyBjUCQgBNsSKyATT/sggjshA0+7IHszIKYDIKeAk0/0kJCTX6sSKyATT6sggjshA0+7IHs0IAADEZIRcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 12,
  stateKeys: 1,
  stateSize: 111,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T9","name":"v10308","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_233","type":"bool"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1925","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2362","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2802","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3234","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3667","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4107","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4126","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4145","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4592","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4612","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4637","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5084","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5103","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5127","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5563","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T13","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"insufficient","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"notify","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v10263","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10268","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10273","type":"address"},{"internalType":"uint256","name":"v10274","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10283","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10288","type":"address"},{"internalType":"uint256","name":"v10289","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10246","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10249","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10252","type":"address"}],"name":"Info_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10294","type":"uint256"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claimAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_233","type":"bool"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v10313","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200589838819003918201601f19168301916001600160401b03831184841017620004c557808492604094855283398101031262000630576040805191908201906001600160401b03821183831017620004c55760209160405280518352015161ffff198116810362000630576020820152600080554360035560405161022081016001600160401b03811182821017620004c557600091610200916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152015260405190620001188262000635565b6200012262000651565b825260ff6004541662000617577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a1805180159081156200060a575b5015620005f15734620005d85760008251526001602083510152600060408351015260006060835101526000608083510152600060a083510152604051918260a081011060018060401b0360a085011117620004c55760a083016040526000835260006020840152620001ee62000651565b604084015260608301916000835260006080850152338452602061ffff199101511660208401525160408301524390526040516200022c8162000635565b6000815260408201516020015115620004db57506040516001600160401b03610120820190811190821117620004c5578061012061010092016040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a084015260a081015160c084015260c081015160e084015260e08101518284015201516101208201526101208152610140810181811060018060401b03821117620004c55760405280516001600160401b038111620004c557620003b560025462000694565b601f811162000477575b50602091601f82116001146200040d5791819260009262000401575b50508160011b916000199060031b1c1916176002555b60405161518d9081620006eb8239f35b015190503880620003db565b601f19821692600260005260206000209160005b8581106200045e5750836001951062000444575b505050811b01600255620003f1565b015160001960f88460031b161c1916905538808062000435565b9192602060018192868501518155019401920162000421565b6002600052620004b39060008051602062005878833981519152601f840160051c81019160208510620004ba575b601f0160051c0190620006d1565b38620003bf565b9091508190620004a5565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620005ce575bf115620005b85760008093928193928293478093525116828215620005c4575bf115620005b8576000805560006001556200053760025462000694565b8062000545575b50620003f1565b601f81116001146200055f575060006002555b386200053e565b6002600052620005a790601f0160051c60008051602062005878833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620006d1565b600060208120816002555562000558565b6040513d6000823e3d90fd5b506108fc6200051a565b506108fc620004fa565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b905060015414386200017c565b60405163100960cb60e01b8152600e6004820152602490fd5b600080fd5b602081019081106001600160401b03821117620004c557604052565b6040519060c082016001600160401b03811183821017620004c5576040528160a06000918281528260208201528260408201528260608201528260808201520152565b90600182811c92168015620006c6575b6020831014620006b057565b634e487b7160e01b600052602260045260246000fd5b91607f1691620006a4565b818110620006dd575050565b60008155600101620006d156fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610a985780630bda4657146109f45780631e93b0f1146109d557806336e56ea5146109745780633702d0ce146109385780634ab9f8b3146108e2578063523df4f61461087f57806355c42a951461083f578063672422c7146107f157806374623535146107b557806374f16ec91461073f5780637a2b54dc146106fc5780637f0595e214610695578063832307571461067657806392cf8bd514610629578063a579242414610594578063a5928cf514610551578063a8d65f20146104db578063ab53f2c61461046f578063c568a57c1461029c578063c5d86f6f1461024e578063cd6637a814610201578063e0590c9a1461019c5763f33c0dce146101315750610010565b34610198578160031936011261019857600361014b610eac565b925403610181576020610180848460e0610174610166610c42565b86808251830101910161106c565b0151928391015251908152f35b602490600c84519163100960cb60e01b8352820152fd5b5080fd5b50829060203660031901126101fd576020926101f26101c0926101bd610eac565b9283916101c8610ff0565b90358151528781019060068251525160e0825101526101e561101f565b9182525187820152611286565b015115159051908152f35b8280fd5b5034610198578160031936011261019857600361021c610eac565b925403610237576020610160848460a0610174610166610c42565b602490600b84519163100960cb60e01b8352820152fd5b508290346101fd5760203660031901126101fd5735916001600160a01b0383168303610299575061028a61029592610284610ced565b50610d8f565b905191829182610b19565b0390f35b80fd5b50916101a0366003190112610198576102b3610eac565b81516102be81610b80565b8435815261018036602319011261046b578251946101408601906001600160401b0382118783101761045857508352602435600981101561044c5785526020948560431936011261044c57835161031481610bcc565b6001600160a01b03906044358281168103610454578152878301528660631936011261044857845161034581610bcc565b6064358152858301528460831936011261044857845161036481610b80565b608435828116810361045457815260a43588820152606083015260c43580151581036104505760808301528660e3193601126104485784516103a581610bcc565b60e435828116810361045457815260a08301528461010319360112610448578451906103d082610b80565b610104359081168103610450578152610124358782015260c0820152856101431936011261044c57835161040381610bcc565b61014435815260e08201526101643580151581036104485761010082015261018435801515810361044857610120820152858201526104429190611286565b51908152f35b8580fd5b8480fd5b8680fd5b8780fd5b634e487b7160e01b865260419052602485fd5b8380fd5b828434610198578160031936011261019857815461048b610c42565b91805193849283526020828185015284518093850152815b8381106104c457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104a3565b8284806003193601126101985760c06020926101f26104f8610ade565b610500610eac565b92839186519061050f82610b80565b6001600160a01b039081168252602435828a019081529061052e61103b565b9251168251525188825101528781019060058251525186825101526101e561101f565b828481600319360112610198576101e06020926101f261056f610eac565b809261057961101f565b878101906007825152511515610100825101526101e561101f565b5034610198576020366003190112610198576105ae610ade565b9060036105b9610eac565b935403610612576020610100858560016105f3876105e66105d8610c42565b88808251830101910161106c565b50828060a01b0316610e5b565b516105fd81610af9565b61060681610af9565b14928391015251908152f35b602490600885519163100960cb60e01b8352820152fd5b50346101985781600319360112610198576003610644610eac565b92540361065f576020610140848460a0610174610166610c42565b602490600a84519163100960cb60e01b8352820152fd5b8284346101985781600319360112610198576020906001549051908152f35b5034610198576020366003190112610198576106af610ade565b9060036106ba610eac565b9354036106e557602060e0858560016105f3876106d86105d8610c42565b50828060a01b0316610d8f565b602490600785519163100960cb60e01b8352820152fd5b828481600319360112610198576102006020926101f261071a610eac565b809261072461101f565b878101906008825152511515610120825101526101e561101f565b8284806003193601126101985760606020926101f261075c610ade565b610764610eac565b92839186519061077382610b80565b6001600160a01b039081168252602435828a019081529061079261103b565b9251168251525188825101528781019060028251525186825101526101e561101f565b508290346101fd5760203660031901126101fd5735916001600160a01b0383168303610299575061028a610295926107eb610ced565b50610e0a565b5034610198578160031936011261019857600361080c610eac565b9254036108285760206101a08484610100610174610166610c42565b602490600d84519163100960cb60e01b8352820152fd5b8284816003193601126101985760806020926101f261085c610eac565b809261086661101f565b87810190600382515251151586825101526101e561101f565b60208484366003190183136102995782906101f261089b610ade565b6108a3610eac565b9283916108ae610ff0565b80516001600160a01b039092169091528581018051839052905181518701526108d561101f565b9182525185820152611286565b50829060203660031901126101fd5760a0906101f2602094610902610ade565b9061090b610eac565b938492610916610ff0565b908151906001808a1b03169052888101918251525186825101526101e561101f565b508290346101fd5760203660031901126101fd5735916001600160a01b0383168303610299575061028a6102959261096e610ced565b50610e5b565b508290346101fd5760203660031901126101fd5735916001600160a01b038316830361029957506109af6060926109a9610ced565b50610d0c565b908080519280516109bf81610af9565b8452602081015115156020850152015190820152f35b8284346101985781600319360112610198576020906003549051908152f35b50903461029957602036600319011261029957610a0f610ade565b610a17610eac565b926003835403610a815760206101208686818787610a366105d8610c42565b506001600160a01b0316906001610a4c83610d0c565b51610a5681610af9565b610a5f81610af9565b03610a76575061017490610d0c565b015251908152f35b915050928391610a6e565b602490600986519163100960cb60e01b8352820152fd5b50829060203660031901126101fd576020926101f28392610ab7610eac565b928391610ac2610ff0565b90358151528781019060018251525186825101526101e561101f565b600435906001600160a01b0382168203610af457565b600080fd5b60021115610b0357565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610b2f81610af9565b845260208101511515602085015201511515910152565b90600182811c92168015610b76575b6020831014610b6057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b55565b604081019081106001600160401b03821117610b9b57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b03821117610b9b57604052565b602081019081106001600160401b03821117610b9b57604052565b61012081019081106001600160401b03821117610b9b57604052565b61014081019081106001600160401b03821117610b9b57604052565b601f909101601f19168101906001600160401b03821190821017610b9b57604052565b6040519060008260025491610c5683610b46565b808352600193808516908115610ccc5750600114610c7e575b50610c7c92500383610c1f565b565b600260009081526000805160206150e183398151915294602093509091905b818310610cb4575050610c7c935082010138610c6f565b85548884018501529485019487945091830191610c9d565b9050610c7c94506020925060ff191682840152151560051b82010138610c6f565b60405190610cfa82610bb1565b60006040838281528260208201520152565b90610d15610ced565b9160018060a01b03166000908082526005602052600160ff604084205416610d3c81610af9565b03610d845760409293508152600560205220600160405191610d5d83610bb1565b60ff8154818116610d6d81610af9565b855260081c16151560208401520154604082015290565b508083526020830152565b90610d98610ced565b9160018060a01b03166000908082526006602052600160ff604084205416610dbf81610af9565b03610d84576040929350815260066020522060ff60405191610de083610bb1565b54818116610ded81610af9565b8352818160081c161515602084015260101c161515604082015290565b90610e13610ced565b9160018060a01b03166000908082526007602052600160ff604084205416610e3a81610af9565b03610d84576040929350815260076020522060ff60405191610de083610bb1565b90610e64610ced565b9160018060a01b03166000908082526008602052600160ff604084205416610e8b81610af9565b03610d84576040929350815260086020522060ff60405191610de083610bb1565b6040519061022082016001600160401b03811183821017610b9b57604052816102006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201520152565b60408051919061014083016001600160401b03811184821017610b9b578152610120836000928382528051610f6e81610bcc565b84815260208301528051610f8181610bcc565b848152818301528051610f9381610b80565b84815284602082015260608301528360808301528051610fb281610bcc565b84815260a08301528051610fc581610b80565b84815284602082015260c083015251610fdd81610bcc565b83815260e0820152826101008201520152565b60405190610ffd82610b80565b8160405161100a81610bcc565b600081528152602061101a610f3a565b910152565b6040519061102c82610b80565b8160008152602061101a610f3a565b6040519061104882610b80565b8160405161105581610b80565b60008152600060208201528152602061101a610f3a565b9081610120910312610af4576040519061108582610be7565b80516001600160a01b0381168103610af4578252602081015161ffff1981168103610af4576020830152604081015160408301526060810151606083015260808101518015158103610af457608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100809101519082015290565b6040519060c082016001600160401b03811183821017610b9b576040528160a06000918281528260208201528260408201528260608201528260808201520152565b6040519060e082016001600160401b03811183821017610b9b576040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b80516001600160a01b03168252602090810151910152565b516009811015610b035790565b6040519060a082016001600160401b03811183821017610b9b5760405260006080838281528260208201526111e4611102565b60408201528260608201520152565b81516001600160a01b031681526020808301519082015260409182015161ffff19169181019190915260600190565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160c01b031916918101919091526001600160a01b0390911660e08201526101000190565b60405192919061048084016001600160401b03811185821017610b9b57806040526112b081610bcc565b6000815284526112be611102565b60208501526040516112cf81610bcc565b6000815260408501526112e0611102565b60608501526040516112f181610b80565b60008152600060208201526080850152611309611102565b60a0850152611316611102565b60c085015260405161132781610bcc565b6000815260e0850152611338611102565b61010085015260405161134a81610b80565b600081526000602082015261012085015260006101408501526000610160850152600061018085015260006101a0850152611383611102565b6101c0850152611391611144565b6101e085015261139f611102565b6102008501526113ad611144565b6102208501526113bb611102565b6102408501526040516113cd81610bcc565b600081526102608501526113df610ced565b61028085015260006102a085015260006102c085015260006102e0850152611405611102565b610300850152611413610ced565b610320850152611421611102565b61034085015261142f611102565b61036085015261143d610ced565b61038085015260006103a085015260006103c085015261145b611102565b6103e0850152611469610ced565b610400850152611477611102565b610420850152611485611102565b610440850152611493611102565b61046085015260ff60045416615064576040513381528151602082015260208201518051916009831015610b03576101206101c0927fb212047171f573087bd7daffa4c27e0281c01018b089f7487c3ab5d443db17d294604084015260018060a01b03602082015151166060840152604081015151608084015261151f606082015160a085019061118c565b6080810151151560e084015260a0810151516001600160a01b031661010084015260c0810151611552908385019061118c565b60e0810151516101608401526101008101511515610180840152015115156101a0820152a160036000540361504b57604051600060025461159281610b46565b80845290600181169081156150275750600114614fda575b50906115bb816115ca930382610c1f565b6020808251830101910161106c565b9080518015908115614fce575b5015614fb5576115ea60208201516111a4565b6009811015610b0357611a9b57602090810151015184528051336001600160a01b0390911603611a775760015b15611a5e5734611a45576000602060409360018060a01b0387515116835260068252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557f2067dbcd163ab95da12d91112da700dd928f03fe45369fc790951895c463b65d828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015260206116e76111b1565b82516001600160a01b031681528183015161ffff191682820152940151828501524360608501520151608083015260405161172181610bcc565b600081526040830151602001511561196d575061010060405161174381610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261186182610c03565b81516001600160401b038111610b9b5761187c600254610b46565b601f8111611925575b50602092601f82116001146118c257928192936000926118b7575b50508160011b916000199060031b1c191617600255565b0151905038806118a0565b601f19821693600260005260206000209160005b86811061190d57508360019596106118f4575b505050811b01600255565b015160001960f88460031b161c191690553880806118e9565b919260206001819286850151815501940192016118d6565b600260005261195d906000805160206150e1833981519152601f840160051c81019160208510611963575b601f0160051c01906150c9565b38611885565b9091508190611950565b9091600080808060018060a01b03855116608086015190828215611a3c575bf115611a27574791829052516000918291829182916001600160a01b0316828215611a33575bf115611a27576000805560006001556119cc600254610b46565b806119d45750565b601f81116001146119e757506000600255565b6002600052611a1a90601f0160051c6000805160206150e1833981519152016000805160206151018339815191526150c9565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc6119b2565b506108fc61198c565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b6001611a8233610d8f565b51611a8c81610af9565b611a9581610af9565b14611617565b611aac6020829694939601516111a4565b6009811015610b0357600103611e435760200151604090810151908301528351336001600160a01b0390911603611e1f5760015b15611e06576040820151513403611ded5760406000917f8b07657c2bf18217272ad349202a4aaf85678fc7dd6fa66e5d88a9da9a9ed0fa60208351858152a10152611b356060840151604083015151906150a8565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a060608301510152604080611b8e6111b1565b85516001600160a01b0316815260208087015161ffff19169082015260608481015183830152439082015294015191015151016080830152604051611bd281610bcc565b600081526040830151602001511561196d5750610100604051611bf481610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252611d1282610c03565b81516001600160401b038111610b9b57611d2d600254610b46565b601f8111611db0575b50602092601f8211600114611d6757928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611d9857508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201611d7b565b6002600052611de7906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38611d36565b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b6001611e2a33610d8f565b51611e3481610af9565b611e3d81610af9565b14611ae0565b611e546020829693949601516111a4565b6009811015610b035760020361220b57602001516060015160808501528051336001600160a01b03909116036121e75760015b156121ce57346121b5576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557fa272e56ec986308372eaaa54a8a3d42fc9be80e397de05eba354ec41bb3fb9d860208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015260a0611f606111b1565b94600180831b03835116865261ffff19602084015116602087015201518285015243606085015201516080830152604051611f9a81610bcc565b600081526040830151602001511561196d5750610100604051611fbc81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526120da82610c03565b81516001600160401b038111610b9b576120f5600254610b46565b601f8111612178575b50602092601f821160011461212f57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061216057508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201612143565b60026000526121af906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386120fe565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60016121f233610d8f565b516121fc81610af9565b61220581610af9565b14611e87565b61221860208201516111a4565b6009811015610b035760030361255957508051336001600160a01b0390911603612540573461252757600060806040937f2fe74d0df3a0b53bb8219565762eb9aac8b32d04a7d281d8648b1812877ac7b660208651858152a10152606081015160c08501515260808101511515602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015260c06122d06111b1565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161230c81610bcc565b600081526040830151602001511561196d575061010060405161232e81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261244c82610c03565b81516001600160401b038111610b9b57612467600254610b46565b601f81116124ea575b50602092601f82116001146124a157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106124d257508360019596106118f457505050811b01600255565b919260206001819286850151815501940192016124b5565b6002600052612521906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38612470565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b61256660208201516111a4565b6009811015610b03576004036128d1576020015160a0015160e085015280516001600160a01b031633036128b8573461289f57600060a0604093600180831b0360e088015151168352600660205282858120557f09afb2ea2ab0c50bed523377910a32468f87558edeec2d28a963d3560005866960208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a061010086015101526101006126486111b1565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161268481610bcc565b600081526040830151602001511561196d57506101006040516126a681610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526127c482610c03565b81516001600160401b038111610b9b576127df600254610b46565b601f8111612862575b50602092601f821160011461281957928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061284a57508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161282d565b6002600052612899906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386127e8565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b6128e160208296939601516111a4565b6009811015610b03576005036134b05760c0602080920151015180610120840152018051606086015110806101408401526000146134a857515b8061016083015280604086015101610180830152340361348f57610120810151516101809290600190612956906001600160a01b0316610e5b565b5161296081610af9565b61296981610af9565b03612d415760c0600191828060a01b036101208501515116600052600560205260406000208360ff19825416179055826129af818060a01b036101208701515116610d0c565b516129b981610af9565b6129c281610af9565b03612d37576129f560406129e2858060a01b036101208801515116610d0c565b01515b60206101208701510151906150a8565b838060a01b036101208601515116600052600560205283604060002001557fc9644300eabfe13643d34e4c3dec09e5add7d4cbf05d7f9b4c2386e2c212eff86020604051858152a1015261014081015115612d2757612a62606085015160206101208401510151906150a8565b6101a08201525b6101a08101516101c0820151526080840151151560206101c0830151015260a084015160406101c0830151015260c084015160606101c0830151015260e084015160806101c0830151015261010084015160a06101c08301510152612acc6111b1565b9360018060a01b038151168552602061ffff199101511660208501526101c0810151604085015243606085015201516080830152604051612b0c81610bcc565b600081526040830151602001511561196d5750610100604051612b2e81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252612c4c82610c03565b81516001600160401b038111610b9b57612c67600254610b46565b601f8111612cea575b50602092601f8211600114612ca157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612cd257508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201612cb5565b6002600052612d21906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38612c70565b60608401516101a0820152612a69565b6129f560006129e5565b61014082015160009160c091156130dd576101e084018051782cb7bab9103ab9b2b9103430b9b713ba1037b83a32b21034b760391b905280516020018490528051604090810185905281516060018590528151608001859052815160a0018590528151840185905290516101208601515191516000805160206151418339815191529290918291612dde916001600160a01b039091169083611222565b0390a17f318d16f621f5b1c2d9dd46ef099bd52bef83fb23a498383763f838af7510d5616020604051858152a10152612e25606085015160206101208401510151906150a8565b61020082015152608084015115156020610200830151015260a08401516040610200830151015260c08401516060610200830151015260e08401516080610200830151015261010084015160a06102008301510152612e826111b1565b9360018060a01b038151168552602061ffff19910151166020850152610200810151604085015243606085015201516080830152604051612ec281610bcc565b600081526040830151602001511561196d5750610100604051612ee481610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261300282610c03565b81516001600160401b038111610b9b5761301d600254610b46565b601f81116130a0575b50602092601f821160011461305757928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061308857508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161306b565b60026000526130d7906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38613026565b610220840180517f5468652062616c616e636520796f752061726520747279696e6720746f207365905280517f7420666f7220746865207573657220697320696e76616c696420616e6420746860209091015280517232bc903430bb32b713ba1037b83a32b21034b760691b60409182015281516060018590528151608001859052815160a00185905281518401859052905161012086015151915160008051602061514183398151915292909182916131a3916001600160a01b039091169083611222565b0390a17f44cff8ac89ce9062b310b9a5cf06105f3b2d93ab61cc1a9c39cf4e798807470a6020604051858152a10152606084015161024082015152608084015115156020610240830151015260a08401516040610240830151015260c08401516060610240830151015260e08401516080610240830151015261010084015160a061024083015101526132346111b1565b9360018060a01b038151168552602061ffff1991015116602085015261024081015160408501524360608501520151608083015260405161327481610bcc565b600081526040830151602001511561196d575061010060405161329681610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526133b482610c03565b81516001600160401b038111610b9b576133cf600254610b46565b601f8111613452575b50602092601f821160011461340957928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061343a57508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161341d565b6002600052613489906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386133d8565b60405163100960cb60e01b8152601e6004820152602490fd5b50600061291b565b6134c16020829694939601516111a4565b6009811015610b035760060361401e576020015160e0015161026085015260016134ea33610d0c565b80610280870152516134fb81610af9565b61350481610af9565b036140055734613fec5760016102808501515161352081610af9565b61352981610af9565b03613fe557604061028085015101515b806102a086015261026085015151818111600014613fe05750805b806102c08701526040840151818111600014613fd957505b6102e0860152604083015111613890579060006101c060409360008051602061512183398151915260206102a08901518751908152a17f57cf20ac719706a171c13764fad4b0b9898d0709ca0b5e7ee4961a0bfd7cabd260208651858152a10152606081015161030085015152608081015115156020610300860151015260a081015182610300860151015260c08101516060610300860151015260e08101516080610300860151015261362461010082015161507d565b60a061030086015101526103006136396111b1565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161367581610bcc565b600081526040830151602001511561196d575061010060405161369781610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526137b582610c03565b81516001600160401b038111610b9b576137d0600254610b46565b601f8111613853575b50602092601f821160011461380a57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061383b57508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161381e565b600260005261388a906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386137d9565b6101c0600191826138a396949633610e0a565b516138ad81610af9565b6138b681610af9565b03613c0e577f70a38983878ff904802e18d37028795c12b195a3081304196a1a5c1d3f7ee53b6020604051858152a1015260008080806102e0850151818115613c05575b3390f115611a27573360005260056020526000600160408220828155015561392c60608401516102e0830151906150bc565b61036082015152608083015115156020610360830151015261395860a08401516102e0830151906150a8565b6040610360830151015260c08301516060610360830151015261397e60e084015161507d565b6080610360830151015261010083015160a061036083015101526102e060406139a56111b1565b85516001600160a01b0316815260208087015161ffff19169082015261036084015182820152436060820152940151910151900360808301526040516139ea81610bcc565b600081526040830151602001511561196d5750610100604051613a0c81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252613b2a82610c03565b81516001600160401b038111610b9b57613b45600254610b46565b601f8111613bc8575b50602092601f8211600114613b7f57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613bb057508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201613b93565b6002600052613bff906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38613b4e565b506108fc6138fa565b7fba146aea4aa3fd1c8c4f6903e04bd073963ed0f6e0e0b29320cd1a922b7fd0326020604051858152a1015233610320820151526102e08101516020610320830151015261ffff1960208401511660406103208301510152600080516020615161833981519152613c8a610320830151604051918291826111f3565b0390a1336000908152600760205260408120805462ff00ff191660011790556102e0820151819081908190818115613fd0575b3390f115611a275733600052600560205260006001604082208281550155613cef60608401516102e0830151906150bc565b610340820151526080830151151560206103408301510152613d1b60a08401516102e0830151906150a8565b6040610340830151015260c083015160606103408301510152613d4160e084015161507d565b60806103408301510152613d5961010084015161507d565b60a061034083015101526102e06040613d706111b1565b85516001600160a01b0316815260208087015161ffff1916908201526103408401518282015243606082015294015191015190036080830152604051613db581610bcc565b600081526040830151602001511561196d5750610100604051613dd781610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252613ef582610c03565b81516001600160401b038111610b9b57613f10600254610b46565b601f8111613f93575b50602092601f8211600114613f4a57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613f7b57508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201613f5e565b6002600052613fca906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38613f19565b506108fc613cbd565b905061356c565b613554565b6000613539565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b61402e60208294939401516111a4565b6009811015610b0357600703614b5e575090600161404b33610d0c565b806103808701525161405c81610af9565b61406581610af9565b03614b455734614b2c5760016103808501515161408181610af9565b61408a81610af9565b03614b2557604061038085015101515b806103a08601526040830151818111600014614b205750805b6103c08601526040830151116143d7579060006101e060409360008051602061512183398151915260206103a08901518751908152a17fd94f3281a1590701493ddbe33b1f846b4a177c4ccfe89e26654c8fdd05d91e7860208651858152a1015260608101516103e0850151526080810151151560206103e0860151015260a0810151826103e0860151015260c081015160606103e0860151015260e081015160806103e0860151015261416b61010082015161507d565b60a06103e086015101526103e06141806111b1565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516141bc81610bcc565b600081526040830151602001511561196d57506101006040516141de81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526142fc82610c03565b81516001600160401b038111610b9b57614317600254610b46565b601f811161439a575b50602092601f821160011461435157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061438257508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201614365565b60026000526143d1906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614320565b6101e0600191826143ea96949633610e0a565b516143f481610af9565b6143fd81610af9565b03614755577f7a0bbbe146f7a2a31628da3e57be5733251d320645f79c603ce8679b5fc90e566020604051858152a1015260008080806103c085015181811561474c575b3390f115611a27573360005260056020526000600160408220828155015561447360608401516103c0830151906150bc565b61044082015152608083015115156020610440830151015261449f60a08401516103c0830151906150a8565b6040610440830151015260c0830151606061044083015101526144c560e084015161507d565b6080610440830151015261010083015160a061044083015101526103c060406144ec6111b1565b85516001600160a01b0316815260208087015161ffff191690820152610440840151828201524360608201529401519101519003608083015260405161453181610bcc565b600081526040830151602001511561196d575061010060405161455381610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261467182610c03565b81516001600160401b038111610b9b5761468c600254610b46565b601f811161470f575b50602092601f82116001146146c657928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106146f757508360019596106118f457505050811b01600255565b919260206001819286850151815501940192016146da565b6002600052614746906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614695565b506108fc614441565b7fb1cc857bb751d63fd1c211f08c56c86b8f749abb0d0e7ecbfdc69e0fc77760a76020604051858152a1015233610400820151526103c08101516020610400830151015261ffff19602084015116604061040083015101526000805160206151618339815191526147d1610400830151604051918291826111f3565b0390a1336000908152600760205260408120805462ff00ff191660011790556103c0820151819081908190818115614b17575b3390f115611a27573360005260056020526000600160408220828155015561483660608401516103c0830151906150bc565b61042082015152608083015115156020610420830151015261486260a08401516103c0830151906150a8565b6040610420830151015260c08301516060610420830151015261488860e084015161507d565b608061042083015101526148a061010084015161507d565b60a061042083015101526103c060406148b76111b1565b85516001600160a01b0316815260208087015161ffff19169082015261042084015182820152436060820152940151910151900360808301526040516148fc81610bcc565b600081526040830151602001511561196d575061010060405161491e81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252614a3c82610c03565b81516001600160401b038111610b9b57614a57600254610b46565b601f8111614ada575b50602092601f8211600114614a9157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614ac257508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201614aa5565b6002600052614b11906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614a60565b506108fc614804565b6140b3565b600061409a565b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b6020614b6b9101516111a4565b6009811015610b0357600814614b82575b50509050565b34614f9c57336000908152600860209081526040808320805462ff00ff19166001179055805183815290946102009290917f935d87b3ec356b814d0e69e252f2bb936b7c8721b7b1a9bbad986092e4a381af9190a10152606081015161046085015152608081015115156020610460860151015260a081015182610460860151015260c08101516060610460860151015260e08101516080610460860151015261010081015160a06104608601510152610460614c3d6111b1565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051614c7981610bcc565b6000815260408301516020015115614ec45750610100604051614c9b81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252614db982610c03565b81516001600160401b038111610b9b57614dd4600254610b46565b601f8111614e87575b50602092601f8211600114614e215792819293600092614e16575b50508160011b916000199060031b1c1916176002555b803880614b7c565b015190503880614df8565b601f19821693600260005260206000209160005b868110614e6f5750836001959610614e56575b505050811b01600255614e0e565b015160001960f88460031b161c19169055388080614e48565b91926020600181928685015181550194019201614e35565b6002600052614ebe906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614ddd565b9091600080808060018060a01b03855116608086015190828215614f93575bf115611a27574791829052516000918291829182916001600160a01b0316828215614f8a575bf115611a2757600080556000600155614f23600254610b46565b80614f2f575b50614e0e565b601f8111600114614f47575060006002555b38614f29565b6002600052614f7a90601f0160051c6000805160206150e1833981519152016000805160206151018339815191526150c9565b6000602081208160025555614f41565b506108fc614f09565b506108fc614ee3565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b905060015414386115d7565b600260009081526000805160206150e1833981519152939250905b80821061500d575090915081016020016115bb6115aa565b919260018160209254838588010152019101909291614ff5565b60ff191660208086019190915291151560051b840190910191506115bb90506115aa565b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b906001820191828111615092578210610af457565b634e487b7160e01b600052601160045260246000fd5b9190820191828111615092578210610af457565b9081039081116150925790565b8181106150d4575050565b600081556001016150c956fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e9835109d8b835c4a9bc404ae4d3376ad99a9231f0da2c04c16034ca895777fffc54ba0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23a164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 22680,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:295:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:70:37:after expr stmt semicolon',
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
