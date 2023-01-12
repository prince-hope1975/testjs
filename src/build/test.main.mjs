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
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1],
      4: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1]
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
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    admin: ctc3,
    amount: ctc1,
    min: ctc1,
    supply: ctc1,
    tok: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Buyer_claim0_85: ctc6,
    Buyer_deposit0_85: ctc7
    });
  const ctc9 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v649 = stdlib.protect(ctc5, interact.params, 'for Admin\'s interact field params');
  const v650 = v649.admin;
  const v652 = v649.min;
  const v653 = v649.supply;
  const v654 = v649.tok;
  
  const txn1 = await (ctc.sendrecv({
    args: [v652, v654, v653, v650],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./test.rsh:31:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc4, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./test.rsh:31:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v662, v663, v664, v665], secs: v667, time: v666, didSend: v39, from: v661 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v663
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc4, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v662, v663, v664, v665], secs: v667, time: v666, didSend: v39, from: v661 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v661, v662, v663, v664],
    evt_cnt: 0,
    funcNum: 1,
    lct: v666,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./test.rsh:33:5:dot', stdlib.UInt_max, '0'), [[v664, v663]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v674, time: v673, didSend: v46, from: v672 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v664,
        kind: 'to',
        tok: v663
        });
      const v682 = await ctc.getContractInfo();
      
      const v684 = stdlib.checkedBigNumberify('./test.rsh:37:48:decimal', stdlib.UInt_max, '0');
      const v685 = stdlib.checkedBigNumberify('./test.rsh:37:51:decimal', stdlib.UInt_max, '0');
      const v686 = v673;
      
      if (await (async () => {
        const v709 = stdlib.lt(v684, v664);
        
        return v709;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v661,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v663
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
    tys: [ctc9, ctc1, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v674, time: v673, didSend: v46, from: v672 } = txn2;
  ;
  ;
  const v681 = stdlib.addressEq(v661, v672);
  stdlib.assert(v681, {
    at: './test.rsh:33:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v682 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v682), {
    at: './test.rsh:34:22:application',
    fs: ['at ./test.rsh:34:22:application call to [unknown function] (defined at: ./test.rsh:34:22:function exp)', 'at ./test.rsh:34:22:application call to "liftedInteract" (defined at: ./test.rsh:34:22:application)'],
    msg: 'launched',
    who: 'Admin'
    });
  
  let v684 = stdlib.checkedBigNumberify('./test.rsh:37:48:decimal', stdlib.UInt_max, '0');
  let v685 = stdlib.checkedBigNumberify('./test.rsh:37:51:decimal', stdlib.UInt_max, '0');
  let v686 = v673;
  
  let txn3 = txn2;
  while (await (async () => {
    const v709 = stdlib.lt(v684, v664);
    
    return v709;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v778], secs: v780, time: v779, didSend: v487, from: v777 } = txn4;
    switch (v778[0]) {
      case 'Buyer_claim0_85': {
        const v781 = v778[1];
        undefined /* setApiDetails */;
        const v786 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v777, ctc1), null);
        const v787 = {
          None: 0,
          Some: 1
          }[v786[0]];
        const v788 = stdlib.eq(v787, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v788, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./test.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:69:23:application call to [unknown function] (defined at: ./test.rsh:69:23:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:69:23:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
          msg: 'sorry, you are not in the list',
          who: 'Admin'
          });
        ;
        ;
        const v834 = stdlib.fromSome(v786, stdlib.checkedBigNumberify('./test.rsh:74:45:decimal', stdlib.UInt_max, '0'));
        ;
        await txn4.getOutput('Buyer_claim', 'v834', ctc1, v834);
        await stdlib.mapSet(map0, ctc9, v777, ctc1, undefined /* Nothing */);
        const v844 = stdlib.safeSub(v684, stdlib.checkedBigNumberify('./test.rsh:78:33:decimal', stdlib.UInt_max, '1'));
        const v845 = stdlib.safeSub(v685, v834);
        const cv684 = v844;
        const cv685 = v845;
        const cv686 = v779;
        
        v684 = cv684;
        v685 = cv685;
        v686 = cv686;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Buyer_deposit0_85': {
        const v878 = v778[1];
        undefined /* setApiDetails */;
        const v894 = v878[stdlib.checkedBigNumberify('./test.rsh:46:10:spread', stdlib.UInt_max, '0')];
        const v895 = stdlib.eq(v684, v664);
        const v896 = v895 ? false : true;
        stdlib.assert(v896, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./test.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
          msg: 'sorry, out of tickets',
          who: 'Admin'
          });
        const v898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v777, ctc1), null);
        const v899 = {
          None: 0,
          Some: 1
          }[v898[0]];
        const v900 = stdlib.eq(v899, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v900, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./test.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
          msg: 'sorry, you are already in this list',
          who: 'Admin'
          });
        const v902 = stdlib.ge(v894, v662);
        stdlib.assert(v902, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./test.rsh:58:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
          msg: 'sorry, amount too low',
          who: 'Admin'
          });
        ;
        ;
        await stdlib.mapSet(map0, ctc9, v777, ctc1, v894);
        ;
        const v965 = null;
        await txn4.getOutput('Buyer_deposit', 'v965', ctc0, v965);
        const v972 = stdlib.safeAdd(v684, stdlib.checkedBigNumberify('./test.rsh:65:33:decimal', stdlib.UInt_max, '1'));
        const v973 = stdlib.safeAdd(v685, v894);
        const cv684 = v972;
        const cv685 = v973;
        const cv686 = v779;
        
        v684 = cv684;
        v685 = cv685;
        v686 = cv686;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function _Buyer_claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Buyer_claim0_85: ctc5,
    Buyer_deposit0_85: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v661, v662, v663, v664, v684, v685] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1]);
  const v731 = ctc.selfAddress();
  const v733 = stdlib.protect(ctc5, await interact.in(), {
    at: './test.rsh:1:23:application',
    fs: ['at ./test.rsh:69:23:application call to [unknown function] (defined at: ./test.rsh:69:23:function exp)', 'at ./test.rsh:37:46:application call to "runBuyer_claim0_85" (defined at: ./test.rsh:69:10:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)'],
    msg: 'in',
    who: 'Buyer_claim'
    });
  const v734 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v731, ctc1), null);
  const v735 = {
    None: 0,
    Some: 1
    }[v734[0]];
  const v736 = stdlib.eq(v735, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v736, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:69:23:application call to [unknown function] (defined at: ./test.rsh:69:23:function exp)', 'at ./test.rsh:37:46:application call to "runBuyer_claim0_85" (defined at: ./test.rsh:69:10:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)'],
    msg: 'sorry, you are not in the list',
    who: 'Buyer_claim'
    });
  const v741 = ['Buyer_claim0_85', v733];
  
  const txn1 = await (ctc.sendrecv({
    args: [v661, v662, v663, v664, v684, v685, v741],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./test.rsh:72:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./test.rsh:72:14:decimal', stdlib.UInt_max, '1'), v663]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v778], secs: v780, time: v779, didSend: v487, from: v777 } = txn1;
      
      switch (v778[0]) {
        case 'Buyer_claim0_85': {
          const v781 = v778[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Buyer_claim"
            });
          const v786 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v777, ctc1), null);
          ;
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v663
            });
          const v834 = stdlib.fromSome(v786, stdlib.checkedBigNumberify('./test.rsh:74:45:decimal', stdlib.UInt_max, '0'));
          sim_r.txns.push({
            kind: 'from',
            to: v777,
            tok: undefined /* Nothing */
            });
          const v839 = await txn1.getOutput('Buyer_claim', 'v834', ctc1, v834);
          
          await stdlib.simMapSet(sim_r, 0, ctc3, v777, ctc1, undefined /* Nothing */);
          const v844 = stdlib.safeSub(v684, stdlib.checkedBigNumberify('./test.rsh:78:33:decimal', stdlib.UInt_max, '1'));
          const v845 = stdlib.safeSub(v685, v834);
          const v1585 = v844;
          const v1586 = v845;
          const v1588 = stdlib.lt(v844, v664);
          if (v1588) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v661,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v663
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Buyer_deposit0_85': {
          const v878 = v778[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v778], secs: v780, time: v779, didSend: v487, from: v777 } = txn1;
  switch (v778[0]) {
    case 'Buyer_claim0_85': {
      const v781 = v778[1];
      undefined /* setApiDetails */;
      const v786 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v777, ctc1), null);
      const v787 = {
        None: 0,
        Some: 1
        }[v786[0]];
      const v788 = stdlib.eq(v787, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v788, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./test.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:69:23:application call to [unknown function] (defined at: ./test.rsh:69:23:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:69:23:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
        msg: 'sorry, you are not in the list',
        who: 'Buyer_claim'
        });
      ;
      ;
      const v834 = stdlib.fromSome(v786, stdlib.checkedBigNumberify('./test.rsh:74:45:decimal', stdlib.UInt_max, '0'));
      ;
      const v839 = await txn1.getOutput('Buyer_claim', 'v834', ctc1, v834);
      if (v487) {
        stdlib.protect(ctc0, await interact.out(v781, v839), {
          at: './test.rsh:69:11:application',
          fs: ['at ./test.rsh:69:11:application call to [unknown function] (defined at: ./test.rsh:69:11:function exp)', 'at ./test.rsh:76:14:application call to "ret" (defined at: ./test.rsh:73:15:function exp)', 'at ./test.rsh:73:15:application call to [unknown function] (defined at: ./test.rsh:73:15:function exp)'],
          msg: 'out',
          who: 'Buyer_claim'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, ctc3, v777, ctc1, undefined /* Nothing */);
      const v844 = stdlib.safeSub(v684, stdlib.checkedBigNumberify('./test.rsh:78:33:decimal', stdlib.UInt_max, '1'));
      const v845 = stdlib.safeSub(v685, v834);
      const v1585 = v844;
      const v1586 = v845;
      const v1588 = stdlib.lt(v844, v664);
      if (v1588) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Buyer_deposit0_85': {
      const v878 = v778[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Buyer_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Buyer_claim0_85: ctc6,
    Buyer_deposit0_85: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v661, v662, v663, v664, v684, v685] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1]);
  const v710 = ctc.selfAddress();
  const v712 = stdlib.protect(ctc5, await interact.in(), {
    at: './test.rsh:1:23:application',
    fs: ['at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to "runBuyer_deposit0_85" (defined at: ./test.rsh:46:10:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)'],
    msg: 'in',
    who: 'Buyer_deposit'
    });
  const v713 = v712[stdlib.checkedBigNumberify('./test.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v715 = stdlib.eq(v684, v664);
  const v716 = v715 ? false : true;
  stdlib.assert(v716, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to "runBuyer_deposit0_85" (defined at: ./test.rsh:46:10:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)'],
    msg: 'sorry, out of tickets',
    who: 'Buyer_deposit'
    });
  const v718 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v710, ctc1), null);
  const v719 = {
    None: 0,
    Some: 1
    }[v718[0]];
  const v720 = stdlib.eq(v719, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v720, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to "runBuyer_deposit0_85" (defined at: ./test.rsh:46:10:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)'],
    msg: 'sorry, you are already in this list',
    who: 'Buyer_deposit'
    });
  const v722 = stdlib.ge(v713, v662);
  stdlib.assert(v722, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:58:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to "runBuyer_deposit0_85" (defined at: ./test.rsh:46:10:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)'],
    msg: 'sorry, amount too low',
    who: 'Buyer_deposit'
    });
  const v729 = ['Buyer_deposit0_85', v712];
  
  const txn1 = await (ctc.sendrecv({
    args: [v661, v662, v663, v664, v684, v685, v729],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v713, [[stdlib.checkedBigNumberify('./test.rsh:60:19:decimal', stdlib.UInt_max, '0'), v663]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v778], secs: v780, time: v779, didSend: v487, from: v777 } = txn1;
      
      switch (v778[0]) {
        case 'Buyer_claim0_85': {
          const v781 = v778[1];
          
          break;
          }
        case 'Buyer_deposit0_85': {
          const v878 = v778[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Buyer_deposit"
            });
          const v894 = v878[stdlib.checkedBigNumberify('./test.rsh:46:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v777, ctc1), null);
          sim_r.txns.push({
            amt: v894,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v777, ctc1, v894);
          sim_r.txns.push({
            kind: 'from',
            to: v777,
            tok: v663
            });
          const v965 = null;
          const v966 = await txn1.getOutput('Buyer_deposit', 'v965', ctc0, v965);
          
          const v972 = stdlib.safeAdd(v684, stdlib.checkedBigNumberify('./test.rsh:65:33:decimal', stdlib.UInt_max, '1'));
          const v973 = stdlib.safeAdd(v685, v894);
          const v1597 = v972;
          const v1598 = v973;
          const v1600 = stdlib.lt(v972, v664);
          if (v1600) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v661,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v663
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
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v778], secs: v780, time: v779, didSend: v487, from: v777 } = txn1;
  switch (v778[0]) {
    case 'Buyer_claim0_85': {
      const v781 = v778[1];
      return;
      break;
      }
    case 'Buyer_deposit0_85': {
      const v878 = v778[1];
      undefined /* setApiDetails */;
      const v894 = v878[stdlib.checkedBigNumberify('./test.rsh:46:10:spread', stdlib.UInt_max, '0')];
      const v895 = stdlib.eq(v684, v664);
      const v896 = v895 ? false : true;
      stdlib.assert(v896, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./test.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
        msg: 'sorry, out of tickets',
        who: 'Buyer_deposit'
        });
      const v898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v777, ctc1), null);
      const v899 = {
        None: 0,
        Some: 1
        }[v898[0]];
      const v900 = stdlib.eq(v899, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./test.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
        msg: 'sorry, you are already in this list',
        who: 'Buyer_deposit'
        });
      const v902 = stdlib.ge(v894, v662);
      stdlib.assert(v902, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./test.rsh:58:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:46:31:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:46:31:function exp)', 'at ./test.rsh:37:46:application call to [unknown function] (defined at: ./test.rsh:37:46:function exp)', 'at ./test.rsh:38:14:application call to [unknown function] (defined at: ./test.rsh:38:14:function exp)'],
        msg: 'sorry, amount too low',
        who: 'Buyer_deposit'
        });
      ;
      ;
      await stdlib.mapSet(map0, ctc3, v777, ctc1, v894);
      ;
      const v965 = null;
      const v966 = await txn1.getOutput('Buyer_deposit', 'v965', ctc0, v965);
      if (v487) {
        stdlib.protect(ctc0, await interact.out(v878, v966), {
          at: './test.rsh:46:11:application',
          fs: ['at ./test.rsh:46:11:application call to [unknown function] (defined at: ./test.rsh:46:11:function exp)', 'at ./test.rsh:64:14:application call to "ret" (defined at: ./test.rsh:61:15:function exp)', 'at ./test.rsh:61:15:application call to [unknown function] (defined at: ./test.rsh:61:15:function exp)'],
          msg: 'out',
          who: 'Buyer_deposit'
          });
        }
      else {
        }
      
      const v972 = stdlib.safeAdd(v684, stdlib.checkedBigNumberify('./test.rsh:65:33:decimal', stdlib.UInt_max, '1'));
      const v973 = stdlib.safeAdd(v685, v894);
      const v1597 = v972;
      const v1598 = v973;
      const v1600 = stdlib.lt(v972, v664);
      if (v1600) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Buyer_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Buyer_claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Buyer_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Buyer_deposit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Buyer_claim()uint64`, `Buyer_deposit(uint64)void`, `_reachp_0((uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`],
    pure: [],
    sigs: [`Buyer_claim()uint64`, `Buyer_deposit(uint64)void`, `_reachp_0((uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEIBCAoMNSTARCgjQYmAgEAADEYQQKPKWRJIls1ASRbNQIoZIIFBDdHyqUEylx50QTWO0i6BNskbEgE39kjKDYaAI4FAk0AWwIyAAECQgCBEa81CyU0ARJESVcAIDUUSSEEWzUTSSEFWzUSSSEGWzURSYE4WzUQgUBbNQ80CyJbNQw0C1cICTUNgARU52KsNAwWUDQNULA0DIgCmTQNIlWNAgJsAm9C/6U2GgEXNQskr4ABATQLFlBQNQtC/5YpJK8oMQBQiALPSTUMIlUjEkQjNBKIAnMkrzQMSVcBAEwiVU0XSTULMQCIAlqACAAAAAAAAANCNAsWULA0CxY1BCEHKDEAULwiTgJNNAcINQc0ECMJNA80CwkyBjUONQ81EDQQNBEMQQGmNBQ0ExZQNBIWUDQRFlA0EBZQNA8WUCUyBjUCNQEoTFcASGcpNAEWNAIWUGcxGSISRIgCEzQDQAAKgAQVH3x1NARQsCNDNA0jWzUMNBA0ERNEKSSvKDEAUIgCFCJVIhJENAw0Ew9ENAyIAeghBygxAFA0DBaIAg8jNBIxAIgBxCk1C4AIAAAAAAAAA8U0C1CwNAs1BDQQIwg0DzQMCDIGNQ41DzUQQv9QMQA1FDQLIls1DDQLJFs1EzQLIQhbNRI0C4EYWzURgARNfgcnNAwWUDQTFlA0EhZQNBEWUDQLVyAIULA0DIgBJSEJiAEqIjQSMgqIAU40FDQTFlA0EhZQNBEWUCEIr1AjMgZC/wwjNAESRElXACA1FEkhBFs1E0khBVs1EiEGWzURNAsXNQyABNUVGRQ0DBZQsDQMiADPNBE0EogA3DQUMQASRCIiMgY1DjUPNRBC/qCIAK4hCYgAtzYaATULQv9AiACeNhoBNQtC/5qIAJM2GgE1C0L9riIxNBJEgQIxNRJEIjE2EkQiMTcSRIgAc4FIryIiQv57MRkiEkRC/pM0DzQUiABwIjQSMgoyCYgAyTEZgQUSRIgAhyIyCjIJiACyQv5pSEy/SIkisgEjshCyB7IIs4kisgElshCyFLIRshKziUL9qUL+VUiJTAlJNQYyCYgAIYkJSUH/7kk1BogAS4kjNQOJSSISTDQCEhFEiTQGCDUGibFC/68xFjQAIwhJNQAJRwM4FDIKEkQ4ECUSRDgRTwISRDgSEkSJsUL/lTQGNAdKD0H/okL/qjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIm+SRZRBwhFBE1QibGyCUL/ULGyFUL/VkxJvUD/P0sDiP+GQv83`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `38`,
    101: `38`,
    102: `39`,
    103: `40`,
    104: `40`,
    105: `41`,
    106: `42`,
    107: `42`,
    108: `43`,
    109: `44`,
    11: `2`,
    110: `44`,
    111: `45`,
    112: `46`,
    113: `46`,
    114: `47`,
    115: `48`,
    116: `48`,
    117: `49`,
    118: `50`,
    119: `50`,
    12: `2`,
    120: `51`,
    121: `52`,
    122: `52`,
    123: `53`,
    124: `53`,
    125: `54`,
    126: `55`,
    127: `55`,
    128: `56`,
    129: `56`,
    13: `2`,
    130: `57`,
    131: `58`,
    132: `59`,
    133: `59`,
    134: `60`,
    135: `60`,
    136: `61`,
    137: `61`,
    138: `61`,
    139: `62`,
    14: `2`,
    140: `62`,
    141: `63`,
    142: `63`,
    143: `63`,
    144: `63`,
    145: `63`,
    146: `63`,
    147: `64`,
    148: `64`,
    149: `65`,
    15: `2`,
    150: `66`,
    151: `67`,
    152: `67`,
    153: `68`,
    154: `69`,
    155: `71`,
    156: `71`,
    157: `72`,
    158: `72`,
    159: `72`,
    16: `2`,
    160: `73`,
    161: `73`,
    162: `74`,
    163: `75`,
    164: `76`,
    165: `76`,
    166: `76`,
    167: `76`,
    168: `76`,
    169: `76`,
    17: `2`,
    170: `77`,
    171: `77`,
    172: `77`,
    173: `79`,
    174: `79`,
    175: `79`,
    176: `80`,
    177: `81`,
    178: `81`,
    179: `83`,
    18: `2`,
    180: `84`,
    181: `85`,
    182: `85`,
    183: `85`,
    184: `86`,
    185: `86`,
    186: `87`,
    187: `88`,
    188: `89`,
    189: `90`,
    19: `2`,
    190: `90`,
    191: `91`,
    192: `91`,
    193: `91`,
    194: `94`,
    195: `95`,
    196: `96`,
    197: `97`,
    198: `98`,
    199: `98`,
    2: `2`,
    20: `2`,
    200: `99`,
    201: `100`,
    202: `100`,
    203: `100`,
    204: `101`,
    205: `102`,
    206: `102`,
    207: `103`,
    208: `104`,
    209: `105`,
    21: `2`,
    210: `106`,
    211: `107`,
    212: `115`,
    213: `116`,
    214: `116`,
    215: `117`,
    216: `117`,
    217: `117`,
    218: `120`,
    219: `121`,
    22: `4`,
    220: `122`,
    221: `122`,
    222: `124`,
    223: `125`,
    224: `125`,
    225: `125`,
    226: `126`,
    227: `127`,
    228: `128`,
    229: `129`,
    23: `4`,
    230: `130`,
    231: `131`,
    232: `132`,
    233: `132`,
    234: `133`,
    235: `133`,
    236: `134`,
    237: `134`,
    238: `134`,
    239: `135`,
    24: `5`,
    240: `135`,
    241: `135`,
    242: `135`,
    243: `135`,
    244: `135`,
    245: `135`,
    246: `135`,
    247: `135`,
    248: `135`,
    249: `136`,
    25: `5`,
    250: `136`,
    251: `137`,
    252: `138`,
    253: `139`,
    254: `140`,
    255: `140`,
    256: `141`,
    257: `142`,
    258: `142`,
    259: `143`,
    26: `5`,
    260: `143`,
    261: `144`,
    262: `145`,
    263: `145`,
    264: `146`,
    265: `148`,
    266: `149`,
    267: `150`,
    268: `150`,
    269: `151`,
    27: `6`,
    270: `153`,
    271: `153`,
    272: `154`,
    273: `155`,
    274: `155`,
    275: `156`,
    276: `156`,
    277: `157`,
    278: `158`,
    279: `159`,
    28: `7`,
    280: `159`,
    281: `160`,
    282: `160`,
    283: `161`,
    284: `162`,
    285: `162`,
    286: `163`,
    287: `163`,
    288: `164`,
    289: `164`,
    29: `8`,
    290: `165`,
    291: `165`,
    292: `167`,
    293: `167`,
    294: `168`,
    295: `168`,
    296: `169`,
    297: `170`,
    298: `170`,
    299: `170`,
    3: `2`,
    30: `9`,
    300: `172`,
    301: `172`,
    302: `173`,
    303: `173`,
    304: `174`,
    305: `175`,
    306: `176`,
    307: `176`,
    308: `177`,
    309: `178`,
    31: `10`,
    310: `179`,
    311: `179`,
    312: `180`,
    313: `181`,
    314: `182`,
    315: `182`,
    316: `183`,
    317: `184`,
    318: `185`,
    319: `185`,
    32: `11`,
    320: `186`,
    321: `187`,
    322: `188`,
    323: `189`,
    324: `189`,
    325: `191`,
    326: `191`,
    327: `192`,
    328: `192`,
    329: `193`,
    33: `11`,
    330: `194`,
    331: `195`,
    332: `195`,
    333: `195`,
    334: `196`,
    335: `197`,
    336: `198`,
    337: `198`,
    338: `199`,
    339: `200`,
    34: `12`,
    340: `200`,
    341: `201`,
    342: `202`,
    343: `203`,
    344: `204`,
    345: `204`,
    346: `205`,
    347: `206`,
    348: `207`,
    349: `209`,
    35: `13`,
    350: `209`,
    351: `209`,
    352: `211`,
    353: `211`,
    354: `212`,
    355: `212`,
    356: `212`,
    357: `214`,
    358: `214`,
    359: `214`,
    36: `14`,
    360: `214`,
    361: `214`,
    362: `214`,
    363: `215`,
    364: `215`,
    365: `216`,
    366: `217`,
    367: `219`,
    368: `220`,
    369: `222`,
    37: `14`,
    370: `222`,
    371: `223`,
    372: `224`,
    373: `225`,
    374: `225`,
    375: `226`,
    376: `226`,
    377: `227`,
    378: `227`,
    379: `228`,
    38: `15`,
    380: `229`,
    381: `238`,
    382: `239`,
    383: `240`,
    384: `241`,
    385: `242`,
    386: `242`,
    387: `243`,
    388: `244`,
    389: `244`,
    39: `16`,
    390: `244`,
    391: `245`,
    392: `246`,
    393: `247`,
    394: `248`,
    395: `249`,
    396: `257`,
    397: `257`,
    398: `258`,
    399: `258`,
    4: `2`,
    40: `18`,
    400: `259`,
    401: `260`,
    402: `268`,
    403: `268`,
    404: `269`,
    405: `269`,
    406: `269`,
    407: `272`,
    408: `272`,
    409: `273`,
    41: `18`,
    410: `274`,
    411: `274`,
    412: `275`,
    413: `276`,
    414: `276`,
    415: `277`,
    416: `278`,
    417: `278`,
    418: `278`,
    419: `279`,
    42: `18`,
    420: `281`,
    421: `281`,
    422: `282`,
    423: `282`,
    424: `283`,
    425: `283`,
    426: `283`,
    427: `284`,
    428: `285`,
    429: `285`,
    43: `18`,
    430: `286`,
    431: `286`,
    432: `286`,
    433: `286`,
    434: `286`,
    435: `286`,
    436: `286`,
    437: `286`,
    438: `286`,
    439: `286`,
    44: `18`,
    440: `287`,
    441: `287`,
    442: `288`,
    443: `289`,
    444: `290`,
    445: `290`,
    446: `291`,
    447: `291`,
    448: `292`,
    449: `292`,
    45: `18`,
    450: `293`,
    451: `294`,
    452: `295`,
    453: `295`,
    454: `296`,
    455: `296`,
    456: `297`,
    457: `298`,
    458: `298`,
    459: `299`,
    46: `18`,
    460: `299`,
    461: `300`,
    462: `300`,
    463: `301`,
    464: `301`,
    465: `302`,
    466: `302`,
    467: `302`,
    468: `304`,
    469: `304`,
    47: `18`,
    470: `305`,
    471: `305`,
    472: `306`,
    473: `306`,
    474: `307`,
    475: `308`,
    476: `309`,
    477: `309`,
    478: `310`,
    479: `310`,
    48: `18`,
    480: `311`,
    481: `312`,
    482: `313`,
    483: `313`,
    484: `314`,
    485: `314`,
    486: `315`,
    487: `315`,
    488: `316`,
    489: `317`,
    49: `18`,
    490: `317`,
    491: `318`,
    492: `318`,
    493: `319`,
    494: `319`,
    495: `320`,
    496: `321`,
    497: `321`,
    498: `322`,
    499: `322`,
    5: `2`,
    50: `18`,
    500: `322`,
    501: `322`,
    502: `322`,
    503: `322`,
    504: `323`,
    505: `323`,
    506: `324`,
    507: `325`,
    508: `326`,
    509: `326`,
    51: `18`,
    510: `327`,
    511: `328`,
    512: `329`,
    513: `329`,
    514: `330`,
    515: `331`,
    516: `332`,
    517: `332`,
    518: `333`,
    519: `334`,
    52: `18`,
    520: `335`,
    521: `335`,
    522: `336`,
    523: `336`,
    524: `336`,
    525: `337`,
    526: `338`,
    527: `340`,
    528: `340`,
    529: `341`,
    53: `18`,
    530: `341`,
    531: `341`,
    532: `342`,
    533: `342`,
    534: `343`,
    535: `343`,
    536: `343`,
    537: `344`,
    538: `346`,
    539: `346`,
    54: `18`,
    540: `347`,
    541: `347`,
    542: `348`,
    543: `348`,
    544: `348`,
    545: `350`,
    546: `350`,
    547: `351`,
    548: `351`,
    549: `352`,
    55: `18`,
    550: `353`,
    551: `354`,
    552: `354`,
    553: `355`,
    554: `356`,
    555: `357`,
    556: `357`,
    557: `358`,
    558: `359`,
    559: `360`,
    56: `18`,
    560: `360`,
    561: `361`,
    562: `362`,
    563: `363`,
    564: `364`,
    565: `364`,
    566: `365`,
    567: `365`,
    568: `365`,
    569: `367`,
    57: `18`,
    570: `368`,
    571: `368`,
    572: `369`,
    573: `370`,
    574: `372`,
    575: `373`,
    576: `373`,
    577: `373`,
    578: `374`,
    579: `374`,
    58: `18`,
    580: `375`,
    581: `376`,
    582: `376`,
    583: `377`,
    584: `378`,
    585: `378`,
    586: `379`,
    587: `380`,
    588: `380`,
    589: `381`,
    59: `18`,
    590: `382`,
    591: `382`,
    592: `383`,
    593: `383`,
    594: `384`,
    595: `385`,
    596: `385`,
    597: `386`,
    598: `386`,
    599: `387`,
    6: `2`,
    60: `18`,
    600: `388`,
    601: `388`,
    602: `389`,
    603: `389`,
    604: `389`,
    605: `389`,
    606: `389`,
    607: `389`,
    608: `390`,
    609: `390`,
    61: `18`,
    610: `391`,
    611: `392`,
    612: `393`,
    613: `395`,
    614: `395`,
    615: `396`,
    616: `396`,
    617: `396`,
    618: `397`,
    619: `397`,
    62: `18`,
    620: `398`,
    621: `398`,
    622: `399`,
    623: `399`,
    624: `399`,
    625: `402`,
    626: `402`,
    627: `403`,
    628: `403`,
    629: `404`,
    63: `18`,
    630: `405`,
    631: `408`,
    632: `409`,
    633: `410`,
    634: `410`,
    635: `411`,
    636: `411`,
    637: `412`,
    638: `412`,
    639: `413`,
    64: `18`,
    640: `413`,
    641: `414`,
    642: `414`,
    643: `414`,
    644: `416`,
    645: `416`,
    646: `416`,
    647: `417`,
    648: `417`,
    649: `418`,
    65: `18`,
    650: `418`,
    651: `418`,
    652: `419`,
    653: `419`,
    654: `419`,
    655: `420`,
    656: `420`,
    657: `421`,
    658: `421`,
    659: `421`,
    66: `18`,
    660: `423`,
    661: `423`,
    662: `423`,
    663: `424`,
    664: `424`,
    665: `424`,
    666: `425`,
    667: `425`,
    668: `426`,
    669: `426`,
    67: `19`,
    670: `426`,
    671: `428`,
    672: `428`,
    673: `428`,
    674: `429`,
    675: `429`,
    676: `429`,
    677: `430`,
    678: `430`,
    679: `431`,
    68: `19`,
    680: `431`,
    681: `431`,
    682: `433`,
    683: `434`,
    684: `434`,
    685: `435`,
    686: `436`,
    687: `437`,
    688: `437`,
    689: `438`,
    69: `19`,
    690: `438`,
    691: `439`,
    692: `440`,
    693: `441`,
    694: `442`,
    695: `442`,
    696: `443`,
    697: `444`,
    698: `445`,
    699: `446`,
    7: `2`,
    70: `20`,
    700: `446`,
    701: `447`,
    702: `448`,
    703: `449`,
    704: `449`,
    705: `449`,
    706: `450`,
    707: `450`,
    708: `451`,
    709: `452`,
    71: `20`,
    710: `453`,
    711: `454`,
    712: `454`,
    713: `454`,
    714: `456`,
    715: `456`,
    716: `457`,
    717: `458`,
    718: `459`,
    719: `461`,
    72: `20`,
    720: `461`,
    721: `461`,
    722: `463`,
    723: `463`,
    724: `465`,
    725: `465`,
    726: `466`,
    727: `466`,
    728: `466`,
    729: `468`,
    73: `20`,
    730: `470`,
    731: `470`,
    732: `471`,
    733: `471`,
    734: `472`,
    735: `472`,
    736: `473`,
    737: `473`,
    738: `473`,
    739: `475`,
    74: `20`,
    740: `475`,
    741: `476`,
    742: `476`,
    743: `477`,
    744: `478`,
    745: `480`,
    746: `480`,
    747: `480`,
    748: `482`,
    749: `483`,
    75: `20`,
    750: `483`,
    751: `484`,
    752: `484`,
    753: `485`,
    754: `485`,
    755: `485`,
    756: `486`,
    757: `486`,
    758: `486`,
    759: `488`,
    76: `20`,
    760: `489`,
    761: `490`,
    762: `491`,
    763: `492`,
    764: `494`,
    765: `495`,
    766: `495`,
    767: `496`,
    768: `497`,
    769: `497`,
    77: `20`,
    770: `498`,
    771: `498`,
    772: `499`,
    773: `499`,
    774: `500`,
    775: `501`,
    776: `503`,
    777: `504`,
    778: `504`,
    779: `505`,
    78: `20`,
    780: `506`,
    781: `506`,
    782: `507`,
    783: `507`,
    784: `508`,
    785: `508`,
    786: `509`,
    787: `509`,
    788: `510`,
    789: `511`,
    79: `20`,
    790: `513`,
    791: `513`,
    792: `513`,
    793: `515`,
    794: `515`,
    795: `515`,
    796: `517`,
    797: `518`,
    798: `520`,
    799: `521`,
    8: `2`,
    80: `20`,
    800: `522`,
    801: `523`,
    802: `523`,
    803: `524`,
    804: `524`,
    805: `525`,
    806: `525`,
    807: `525`,
    808: `526`,
    809: `528`,
    81: `20`,
    810: `529`,
    811: `530`,
    812: `530`,
    813: `530`,
    814: `531`,
    815: `532`,
    816: `532`,
    817: `533`,
    818: `533`,
    819: `533`,
    82: `22`,
    820: `534`,
    821: `536`,
    822: `537`,
    823: `537`,
    824: `538`,
    825: `540`,
    826: `541`,
    827: `542`,
    828: `543`,
    829: `544`,
    83: `25`,
    830: `544`,
    831: `545`,
    832: `546`,
    833: `547`,
    834: `548`,
    835: `550`,
    836: `550`,
    837: `551`,
    838: `552`,
    839: `552`,
    84: `25`,
    840: `553`,
    841: `555`,
    842: `556`,
    843: `556`,
    844: `556`,
    845: `559`,
    846: `559`,
    847: `560`,
    848: `560`,
    849: `561`,
    85: `26`,
    850: `562`,
    851: `563`,
    852: `564`,
    853: `564`,
    854: `565`,
    855: `566`,
    856: `566`,
    857: `567`,
    858: `567`,
    859: `568`,
    86: `27`,
    860: `568`,
    861: `569`,
    862: `570`,
    863: `571`,
    864: `571`,
    865: `572`,
    866: `573`,
    867: `574`,
    868: `575`,
    869: `575`,
    87: `27`,
    870: `576`,
    871: `576`,
    872: `577`,
    873: `578`,
    874: `579`,
    875: `579`,
    876: `580`,
    877: `581`,
    878: `582`,
    879: `584`,
    88: `29`,
    880: `585`,
    881: `585`,
    882: `585`,
    883: `587`,
    884: `587`,
    885: `588`,
    886: `588`,
    887: `589`,
    888: `590`,
    889: `591`,
    89: `30`,
    890: `591`,
    891: `591`,
    892: `592`,
    893: `592`,
    894: `592`,
    895: `595`,
    896: `595`,
    897: `596`,
    898: `596`,
    899: `597`,
    9: `2`,
    90: `30`,
    900: `598`,
    901: `599`,
    902: `600`,
    903: `600`,
    904: `601`,
    905: `602`,
    906: `602`,
    907: `603`,
    908: `603`,
    909: `604`,
    91: `31`,
    910: `604`,
    911: `605`,
    912: `606`,
    913: `607`,
    914: `607`,
    915: `608`,
    916: `609`,
    917: `610`,
    918: `611`,
    919: `611`,
    92: `32`,
    920: `612`,
    921: `613`,
    922: `614`,
    923: `616`,
    924: `617`,
    925: `618`,
    926: `619`,
    927: `619`,
    928: `619`,
    929: `620`,
    93: `34`,
    930: `620`,
    931: `621`,
    932: `622`,
    933: `623`,
    934: `625`,
    935: `626`,
    936: `626`,
    937: `627`,
    938: `627`,
    939: `627`,
    94: `35`,
    940: `629`,
    941: `630`,
    942: `630`,
    943: `631`,
    944: `631`,
    945: `631`,
    946: `633`,
    947: `634`,
    948: `635`,
    949: `636`,
    95: `35`,
    950: `636`,
    951: `636`,
    952: `637`,
    953: `637`,
    954: `638`,
    955: `638`,
    956: `638`,
    957: `639`,
    96: `35`,
    97: `36`,
    98: `36`,
    99: `37`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"address payable","name":"elem4","type":"address"}],"internalType":"struct T5","name":"v1613","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"address payable","name":"elem4","type":"address"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Buyer_claim0_85","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Buyer_deposit0_85","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v834","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v965","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Buyer_claim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1610","type":"uint256"}],"name":"Buyer_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1616","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Buyer_claim0_85","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Buyer_deposit0_85","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v1619","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620019399081380391601f1980601f85011683019360018060401b03928486108487111762000391578160a09286926040988952833981010312620003a757835160a08101818110848211176200039157855283518152602090818501519482820195865262000073878201620003ac565b95878301968752606080830151818501908152620000956080809501620003ac565b90848601918252436003558a5199838b019a808c108b8d111762000391578c9b8c5260009b818d809352828b820152015260049660ff8854166200037a578c5133815281518a8201528651818f015282516001600160a01b03908116878301528451898301529451851660a08201527fa1b50abb485a0a72f2e007afa773ac3aea718783f25e6514a03a8dd706daa7d89060c090a15180159081156200036d575b50156200035657346200033f578b51948686018681108c8211176200032c579380928e9a989694928e9a98968c528987019b8b8d5287019e8f52858701968b8852339052518b5251168c5251835260019a8b8855438c558c519833888b0152518d8a01525116908701525181860152845260a08401848110878211176200031957885283519586116200030657600254908782811c92168015620002fb575b83831014620002e85750601f81116200029c575b508093601f8611600114620002345750509183949184939462000228575b50501b916000199060031b1c1916176002555b516115779081620003c28239f35b01519250388062000207565b600283528183209493928692918316915b8883831062000281575050501062000267575b505050811b016002556200021a565b015160001960f88460031b161c1916905538808062000258565b85870151885590960195948501948793509081019062000245565b60028352818320601f870160051c810191838810620002dd575b601f0160051c019087905b828110620002d1575050620001e9565b848155018790620002c1565b9091508190620002b6565b634e487b7160e01b845260229052602483fd5b91607f1691620001d5565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b8d526041895260248dfd5b8b5163100960cb60e01b8152600981890152602490fd5b8b5163100960cb60e01b8152600881890152602490fd5b9050600154143862000136565b8c5163100960cb60e01b81526007818a0152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b51906001600160a01b0382168203620003a75756fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f1146100bb5750806336e56ea5146100b2578063573b8510146100a957806383230757146100a057806385f051f714610097578063ab53f2c61461008e578063b83875d6146100855763e234065e0361000e57610080610467565b61000e565b506100806103eb565b50610080610379565b506100806102fe565b506100806102df565b50610080610174565b5061008061011c565b346100d757806003193601126100d75760035460805260206080f35b80fd5b6001600160a01b031690565b6001600160a01b038116036100f757565b600080fd5b6002111561010657565b634e487b7160e01b600052602160045260246000fd5b50346100f75760203660031901126100f757606061014d60043561013f816100e6565b610147610670565b506106a9565b6040805191805161015d816100fc565b835260208101511515602084015201516040820152f35b5060203660031901126100f757610189610670565b506102c76101963661149d565b6101a4600160005414610d0b565b6102206101c16101b26105c5565b602080825183010191016114dd565b916101dd6101d86101d460045460ff1690565b1590565b610d2b565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a15180159081156102d3575b50610d4b565b61022a3415610d6b565b604081016102a861029f61023e83516100da565b92610258610253606087019586519033611129565b610d8b565b6102743360018060a01b0361026d88516100da565b1614610dab565b602061027e61085c565b9561029261028c82516100da565b886108b2565b01516020860152516100da565b604084016108b2565b51606082015260006080820152600060a08201524360c0820152611355565b60405160008152602090f35b9050600154143861021a565b50346100f75760003660031901126100f7576020600154604051908152f35b5060203660031901126100f75760206040610317610670565b61036d8183516103268161050e565b845161033181610536565b6000815281528581019061034361072c565b8252600435815152600182515251858251015261035e61075b565b906000825251868201526108ce565b01511515604051908152f35b50346100f7576000806003193601126100d75780546103966105c5565b906040519283918252602090604082840152835191826040850152815b8381106103d457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016103b3565b5060803660031901126100f757610400610670565b6040519061040d8261050e565b600435825260603660231901126100f7576040519161042b83610551565b6024359260028410156100f7576102c793815260443561044a8161100a565b6020820152610458366114bd565b604082015260208201526108ce565b5060003660031901126100f75760208061047f610670565b6104b38161048b61075b565b84810190600082515251151585825101526104a461075b565b906000825251858201526108ce565b0151604051908152f35b90600182811c921680156104ed575b60208310146104d757565b634e487b7160e01b600052602260045260246000fd5b91607f16916104cc565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761052957604052565b6105316104f7565b604052565b602081019081106001600160401b0382111761052957604052565b606081019081106001600160401b0382111761052957604052565b60c081019081106001600160401b0382111761052957604052565b60a081019081106001600160401b0382111761052957604052565b601f909101601f19168101906001600160401b0382119082101761052957604052565b60405190600082600254916105d9836104bd565b80835260019380851690811561064f5750600114610601575b506105ff925003836105a2565b565b6002600090815260008051602061154b83398151915294602093509091905b8183106106375750506105ff9350820101386105f2565b85548884018501529485019487945091830191610620565b90506105ff94506020925060ff191682840152151560051b820101386105f2565b6040519061067d82610551565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b906106b2610670565b9160018060a01b03166000908082526005602052600160ff6040842054166106d9816100fc565b0361072157604092935081526005602052206001604051916106fa83610551565b60ff815481811661070a816100fc565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061073982610551565b816000815260006020820152604080519161075383610536565b600083520152565b604051906107688261050e565b8160008152602061077761072c565b910152565b6040519061078982610551565b81610792610670565b815260006020820152604080519161075383610536565b908160c09103126100f75760a0604051916107c38361056c565b80516107ce816100e6565b83526020810151602084015260408101516107e8816100e6565b60408401526060810151606084015260808101516080840152015160a082015290565b9092916040602060809260a085019660018060a01b0316855280518286015201518051610837816100fc565b82850152602081015115156060850152015151910152565b51610859816100fc565b90565b6040519060e082016001600160401b038111838210176108a5575b6040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b6108ad6104f7565b610877565b6001600160a01b039091169052565b506040513d6000823e3d90fd5b6108d661077c565b6000926108e66004855414610dcb565b6108ee6105c5565b926109036020948580825183010191016107a9565b9161091b6109166101d460045460ff1690565b610deb565b846040927fa0c23df89b8234b78126648cddf10773bdde8ece99caba3b9fe7a3811bd4dfc884518061094e84338361080b565b0390a161096681518015908115610c8d575b50610e0b565b01610971815161084f565b61097a816100fc565b610af4575091610a9d60a092610a956105ff98610ac397966109bc60016109a0336106a9565b808b52516109ad816100fc565b6109b6816100fc565b14610ecb565b6109c63415610eeb565b838601916109e56109e06109da85516100da565b336110e4565b610f0b565b60016109f18a5161084f565b6109fa816100fc565b03610ae9578080808d888d5101519c5b019b808d52818115610ae0575b3390f115610ad3575b875184519081527f750a055c1cab00a8b7d0284a364cd55c9e3694b2e0f2681661c3e3a8e6410ee390602090a1898851910152610a6b610a5f3361068f565b60016000918281550155565b610a7361085c565b98610a87610a8187516100da565b8b6108b2565b80860151908a0152516100da565b9087016108b2565b60608101516060860152610ab46080820151610ce7565b60808601520151905190610cfe565b60a08201524360c0820152611355565b610adb6108c1565b610a20565b506108fc610a17565b8080808d819c610a0a565b6001610b0482979593975161084f565b610b0d816100fc565b14610b1c575b50505050505050565b610c7796610c4896610c5b85610c53610ac3998260a099610c67985101519101998a9182528860808101978589519860608401998a5114600014610c8357610b6383610e2b565b610b86610b77610b72336106a9565b61084f565b610b80816100fc565b15610e4b565b610b998587515195019485511115610e6b565b610ba68651513414610e8b565b818d0195610bc5610bc0610bba89516100da565b33611089565b610eab565b610bde610bd13361068f565b805460ff19166001179055565b51516001610beb3361068f565b0155610c0033610bfb88516100da565b610f2b565b8151600081527f2be3a7bd4fdc053504b9a16a1acf2cb75c99761065f4b00b5abc6c9e86774e3590602090a10152610c3661085c565b9d8e610c428c516100da565b906108b2565b51908d0152516100da565b908a016108b2565b51606088015251610cb0565b6080860152015190515190610cd3565b38808080808080610b13565b610b636001610e2b565b90506001541438610960565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111610cc6575b82106100f757565b610cce610c99565b610cbe565b9190820191828111610cc65782106100f757565b6000198101908111610cf65790565b610859610c99565b908103908111610cf65790565b15610d1257565b60405163100960cb60e01b8152600a6004820152602490fd5b15610d3257565b60405163100960cb60e01b8152600b6004820152602490fd5b15610d5257565b60405163100960cb60e01b8152600c6004820152602490fd5b15610d7257565b60405163100960cb60e01b8152600d6004820152602490fd5b15610d9257565b60405163100960cb60e01b8152600e6004820152602490fd5b15610db257565b60405163100960cb60e01b8152600f6004820152602490fd5b15610dd257565b60405163100960cb60e01b815260106004820152602490fd5b15610df257565b60405163100960cb60e01b815260116004820152602490fd5b15610e1257565b60405163100960cb60e01b815260126004820152602490fd5b15610e3257565b60405163100960cb60e01b815260166004820152602490fd5b15610e5257565b60405163100960cb60e01b815260176004820152602490fd5b15610e7257565b60405163100960cb60e01b815260186004820152602490fd5b15610e9257565b60405163100960cb60e01b815260196004820152602490fd5b15610eb257565b60405163100960cb60e01b8152601a6004820152602490fd5b15610ed257565b60405163100960cb60e01b815260136004820152602490fd5b15610ef257565b60405163100960cb60e01b815260146004820152602490fd5b15610f1257565b60405163100960cb60e01b815260156004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260016044808401919091528252610fa99360009384939092918491608081016001600160401b03811182821017610fb0575b6040525193165af1610f99610f92610fbd565b8092611029565b5060208082518301019101611014565b156100f757565b610fb86104f7565b610f7f565b3d15611005573d906001600160401b038211610ff8575b60405191610fec601f8201601f1916602001846105a2565b82523d6000602084013e565b6110006104f7565b610fd4565b606090565b801515036100f757565b908160209103126100f757516108598161100a565b156110315790565b80511561104057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156110615790565b80511561107057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000610859928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526110cd81610587565b5193165af1610f996110dd610fbd565b8092611059565b6000610859928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015260016064820152606481526110cd81610587565b6000916108599383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526110cd81610587565b818110611177575050565b6000815560010161116c565b61118e6002546104bd565b806111965750565b601f81116001146111a957506000600255565b60026000526111ee90601f0160051c60008051602061154b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61116c565b6000602081208160025555565b604051906112088261056c565b8160a06000918281528260208201528260408201528260608201528260808201520152565b90601f821161123a575050565b6105ff9160026000526020600020906020601f840160051c83019310611268575b601f0160051c019061116c565b909150819061125b565b80519091906001600160401b038111611348575b61129a816112956002546104bd565b61122d565b602080601f83116001146112d657508192936000926112cb575b50508160011b916000199060031b1c191617600255565b0151905038806112b4565b6002600052601f1983169490919060008051602061154b833981519152926000905b878210611330575050836001959610611317575b505050811b01600255565b015160001960f88460031b161c1916905538808061130c565b806001859682949686015181550195019301906112f8565b6113506104f7565b611286565b6080810180519060608301918251116000146114425761142f9160a06105ff9461143d936113816111fb565b9361139561138f84516100da565b866108b2565b602083015160208601526113b86113af60408501516100da565b604087016108b2565b516060850152516080840152015160a08201526113d56004600055565b6113de43600155565b6040519283916020830191909160a08060c0830194600180831b0380825116855260208201516020860152604082015116604085015260608101516060850152608081015160808501520151910152565b03601f1981018352826105a2565b611272565b5050600080808360a061145e6114598497516100da565b6100da565b91015190828215611494575bf115611487575b6000805561147f6000600155565b6105ff611183565b61148f6108c1565b611471565b506108fc61146a565b60209060031901126100f757604051906114b682610536565b6004358252565b60209060631901126100f757604051906114d682610536565b6064358252565b908160809103126100f75760405190606090608083016001600160401b0381118482101761153d575b6040528051611514816100e6565b835260208101516020840152604081015161152e816100e6565b60408401520151606082015290565b6115456104f7565b61150656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6457,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './test.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './test.rsh:83:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './test.rsh:37:46:after expr stmt semicolon',
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
  "Admin": Admin,
  "Buyer_claim": Buyer_claim,
  "Buyer_deposit": Buyer_deposit
  };
export const _APIs = {
  Buyer: {
    claim: Buyer_claim,
    deposit: Buyer_deposit
    }
  };
