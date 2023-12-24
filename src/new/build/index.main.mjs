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
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    keepGoing: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v310, v316, v320] = svs;
      return (await ((async (_v324 ) => {
          const v324 = stdlib.protect(ctc0, _v324, null);
        
        const v325 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v324, ctc4), null);
        const v326 = {
          None: 0,
          Some: 1
          }[v325[0]];
        const v327 = stdlib.eq(v326, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v327;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc1
          }
        }
      },
    views: {
      3: [ctc0, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Admin_end3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_end3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_end3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    keepGoing: ctc3
    });
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Admin_end0_63: ctc6,
    User_optin0_63: ctc6
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v310, v316, v320] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc4, ctc5]);
  const v336 = ctc.selfAddress();
  const v338 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:51:25:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)', 'at ./index.rsh:32:37:application call to "runAdmin_end0_63" (defined at: ./index.rsh:51:10:function exp)', 'at ./index.rsh:32:37:application call to [unknown function] (defined at: ./index.rsh:32:37:function exp)'],
    msg: 'in',
    who: 'Admin_end'
    });
  const v339 = stdlib.addressEq(v336, v310);
  stdlib.assert(v339, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:25:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)', 'at ./index.rsh:32:37:application call to "runAdmin_end0_63" (defined at: ./index.rsh:51:10:function exp)', 'at ./index.rsh:32:37:application call to [unknown function] (defined at: ./index.rsh:32:37:function exp)'],
    msg: 'Only deployers can end contracts',
    who: 'Admin_end'
    });
  const v344 = ['Admin_end0_63', v338];
  
  const txn1 = await (ctc.sendrecv({
    args: [v310, v316, v320, v344],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v351], secs: v353, time: v352, didSend: v232, from: v350 } = txn1;
      
      switch (v351[0]) {
        case 'Admin_end0_63': {
          const v354 = v351[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_end"
            });
          ;
          const v365 = null;
          const v366 = await txn1.getOutput('Admin_end', 'v365', ctc0, v365);
          
          const v372 = {
            keepGoing: false
            };
          const v545 = v372;
          const v547 = v320;
          const v548 = v372.keepGoing;
          if (v548) {
            sim_r.isHalt = false;
            }
          else {
            const v549 = stdlib.sub(v320, v320);
            sim_r.txns.push({
              kind: 'from',
              to: v310,
              tok: undefined /* Nothing */
              });
            const v550 = (stdlib.le(await ctc.getBalance(), v549) ? stdlib.checkedBigNumberify('./index.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v549));
            sim_r.txns.push({
              kind: 'from',
              to: v310,
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
        case 'User_optin0_63': {
          const v385 = v351[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc4, ctc5, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v351], secs: v353, time: v352, didSend: v232, from: v350 } = txn1;
  switch (v351[0]) {
    case 'Admin_end0_63': {
      const v354 = v351[1];
      undefined /* setApiDetails */;
      const v359 = stdlib.addressEq(v350, v310);
      stdlib.assert(v359, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:25:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)', 'at ./index.rsh:32:37:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)', 'at ./index.rsh:32:37:application call to [unknown function] (defined at: ./index.rsh:32:37:function exp)'],
        msg: 'Only deployers can end contracts',
        who: 'Admin_end'
        });
      ;
      const v365 = null;
      const v366 = await txn1.getOutput('Admin_end', 'v365', ctc0, v365);
      if (v232) {
        stdlib.protect(ctc0, await interact.out(v354, v366), {
          at: './index.rsh:51:11:application',
          fs: ['at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:11:function exp)', 'at ./index.rsh:56:14:application call to "ret" (defined at: ./index.rsh:55:15:function exp)', 'at ./index.rsh:55:15:application call to [unknown function] (defined at: ./index.rsh:55:15:function exp)'],
          msg: 'out',
          who: 'Admin_end'
          });
        }
      else {
        }
      
      const v372 = {
        keepGoing: false
        };
      const v545 = v372;
      const v547 = v320;
      const v548 = v372.keepGoing;
      if (v548) {
        return;
        }
      else {
        const v549 = stdlib.sub(v320, v320);
        ;
        const v550 = (stdlib.le(await ctc.getBalance(), v549) ? stdlib.checkedBigNumberify('./index.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v549));
        ;
        return;
        }
      break;
      }
    case 'User_optin0_63': {
      const v385 = v351[1];
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
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Admin_end0_63: ctc2,
    User_optin0_63: ctc2
    });
  const ctc4 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v312, time: v311, didSend: v25, from: v310 } = txn1;
      
      ;
      const v313 = await ctc.getContractInfo();
      
      const v315 = {
        keepGoing: true
        };
      const v316 = v315;
      const v317 = v311;
      const v320 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v323 = v316.keepGoing;
        
        return v323;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v424 = stdlib.sub(v320, v320);
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        const v426 = (stdlib.le(await ctc.getBalance(), v424) ? stdlib.checkedBigNumberify('./index.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v424));
        sim_r.txns.push({
          kind: 'from',
          to: v310,
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
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v312, time: v311, didSend: v25, from: v310 } = txn1;
  ;
  const v313 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v313), {
    at: './index.rsh:28:27:application',
    fs: ['at ./index.rsh:28:27:application call to [unknown function] (defined at: ./index.rsh:28:27:function exp)', 'at ./index.rsh:28:27:application call to "liftedInteract" (defined at: ./index.rsh:28:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v315 = {
    keepGoing: true
    };
  let v316 = v315;
  let v317 = v311;
  let v320 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v323 = v316.keepGoing;
    
    return v323;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v351], secs: v353, time: v352, didSend: v232, from: v350 } = txn3;
    switch (v351[0]) {
      case 'Admin_end0_63': {
        const v354 = v351[1];
        undefined /* setApiDetails */;
        const v359 = stdlib.addressEq(v350, v310);
        stdlib.assert(v359, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:25:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)', 'at ./index.rsh:32:37:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)', 'at ./index.rsh:32:37:application call to [unknown function] (defined at: ./index.rsh:32:37:function exp)'],
          msg: 'Only deployers can end contracts',
          who: 'Deployer'
          });
        ;
        const v365 = null;
        await txn3.getOutput('Admin_end', 'v365', ctc0, v365);
        const v372 = {
          keepGoing: false
          };
        const cv316 = v372;
        const cv317 = v352;
        const cv320 = v320;
        
        v316 = cv316;
        v317 = cv317;
        v320 = cv320;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_optin0_63': {
        const v385 = v351[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map0, ctc4, v350, ctc0, null);
        const v407 = null;
        await txn3.getOutput('User_optin', 'v407', ctc0, v407);
        const v413 = v316.keepGoing;
        const v414 = {
          keepGoing: v413
          };
        const cv316 = v414;
        const cv317 = v352;
        const cv320 = v320;
        
        v316 = cv316;
        v317 = cv317;
        v320 = cv320;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v424 = stdlib.sub(v320, v320);
  ;
  const v426 = (stdlib.le(await ctc.getBalance(), v424) ? stdlib.checkedBigNumberify('./index.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v424));
  ;
  return;
  
  
  };
export async function _User_optin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_optin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_optin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    keepGoing: ctc3
    });
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Admin_end0_63: ctc6,
    User_optin0_63: ctc6
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v310, v316, v320] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc4, ctc5]);
  const v330 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:41:26:application call to [unknown function] (defined at: ./index.rsh:41:26:function exp)', 'at ./index.rsh:32:37:application call to "runUser_optin0_63" (defined at: ./index.rsh:41:10:function exp)', 'at ./index.rsh:32:37:application call to [unknown function] (defined at: ./index.rsh:32:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v334 = ['User_optin0_63', v330];
  
  const txn1 = await (ctc.sendrecv({
    args: [v310, v316, v320, v334],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v351], secs: v353, time: v352, didSend: v232, from: v350 } = txn1;
      
      switch (v351[0]) {
        case 'Admin_end0_63': {
          const v354 = v351[1];
          
          break;
          }
        case 'User_optin0_63': {
          const v385 = v351[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc2, v350, ctc0, null);
          const v407 = null;
          const v408 = await txn1.getOutput('User_optin', 'v407', ctc0, v407);
          
          const v413 = v316.keepGoing;
          const v414 = {
            keepGoing: v413
            };
          const v563 = v414;
          const v565 = v320;
          const v566 = v414.keepGoing;
          if (v566) {
            sim_r.isHalt = false;
            }
          else {
            const v567 = stdlib.sub(v320, v320);
            sim_r.txns.push({
              kind: 'from',
              to: v310,
              tok: undefined /* Nothing */
              });
            const v568 = (stdlib.le(await ctc.getBalance(), v567) ? stdlib.checkedBigNumberify('./index.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v567));
            sim_r.txns.push({
              kind: 'from',
              to: v310,
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
    tys: [ctc2, ctc4, ctc5, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v351], secs: v353, time: v352, didSend: v232, from: v350 } = txn1;
  switch (v351[0]) {
    case 'Admin_end0_63': {
      const v354 = v351[1];
      return;
      break;
      }
    case 'User_optin0_63': {
      const v385 = v351[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map0, ctc2, v350, ctc0, null);
      const v407 = null;
      const v408 = await txn1.getOutput('User_optin', 'v407', ctc0, v407);
      if (v232) {
        stdlib.protect(ctc0, await interact.out(v385, v408), {
          at: './index.rsh:41:11:application',
          fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:11:function exp)', 'at ./index.rsh:46:14:application call to "ret" (defined at: ./index.rsh:44:15:function exp)', 'at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v413 = v316.keepGoing;
      const v414 = {
        keepGoing: v413
        };
      const v563 = v414;
      const v565 = v320;
      const v566 = v414.keepGoing;
      if (v566) {
        return;
        }
      else {
        const v567 = stdlib.sub(v320, v320);
        ;
        const v568 = (stdlib.le(await ctc.getBalance(), v567) ? stdlib.checkedBigNumberify('./index.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v567));
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Admin_end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_end3(ctcTop, interact);}
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
    impure: [`Admin_end()void`, `User_optin()void`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[0])))void`],
    pure: [`Info_opted(address)byte`],
    sigs: [`Admin_end()void`, `Info_opted(address)byte`, `User_optin()void`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[0])))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCADAAEDJgIAAQAxGEEBgihkSSJbNQGBCFs1AilkggUEE25XOwQegcfLBCk3p/YEftXKLATBlK2ZNhoAjgUAOwABAHMBPwEtAIEJrzULJDQBEkSIAe80CyJbNQw0C1cIATUNgATV3gbBNAwWUDQNULA0DIgBxTQNIlWNAgFmAWlC/8U2GgE1CzQBJBJEiAG1KCgpNAtQvkkWUQcIRQRNUCJVIxIWUQcINQQxGSISRIAEFR98dTQEULAjQ4AJAAAAAAAAAAABNQtC/4MxADQREkQoNQuACAAAAAAAAAFtNAtQsDQLNQQpMgY1DzUQNBAXQQD5NBE0EFA0DhZQJDIGNQI1ASlMVwApZyg0ARY0AhZQZzEZIhJEiAFDNANA/5pC/42B1HopMQBQKIgBPCg1C4AIAAAAAAAAAZc0C1CwNAs1BDQQMgY1DzUQQv+gMQA1ETQLFzUMgASCxGH+NAwWULA0DIgA1YABATIGIjUONQ81EEL/eIgAv4GgjQaIANg2GgE1C0L/xogArTYaATULQv68IjE0EkSBAjE1EkQiMTYSRCIxNxJEiACNgSmvIiJC/01JNQs0EYgAeTEZgQUSRIgAmjIKYDIKeAlJNQYyCogAYUL/RUhMv0iJIrIBI7IQsgeyCLOJQv7iQv82NA40EYgAQDIKYDIKeAk0DkkJCUL/sEiJTAlJNQYyCYgAJYkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRImxQv+jIzUDiUkiEkw0AhIRRIlJVwAgNRFJVyABNRCBIVs1Dok0Bgg1Bok0BjQHSg9B/55C/6ZMSb1A/2ZLA4j/40L/Xg==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `41`,
    101: `41`,
    102: `41`,
    103: `41`,
    104: `41`,
    105: `42`,
    106: `42`,
    107: `43`,
    108: `44`,
    109: `45`,
    11: `4`,
    110: `45`,
    111: `46`,
    112: `47`,
    113: `49`,
    114: `49`,
    115: `50`,
    116: `50`,
    117: `50`,
    118: `51`,
    119: `51`,
    12: `4`,
    120: `52`,
    121: `53`,
    122: `54`,
    123: `54`,
    124: `54`,
    125: `54`,
    126: `54`,
    127: `54`,
    128: `55`,
    129: `55`,
    13: `5`,
    130: `55`,
    131: `57`,
    132: `57`,
    133: `57`,
    134: `58`,
    135: `58`,
    136: `60`,
    137: `60`,
    138: `61`,
    139: `62`,
    14: `5`,
    140: `63`,
    141: `66`,
    142: `66`,
    143: `66`,
    144: `68`,
    145: `69`,
    146: `70`,
    147: `71`,
    148: `71`,
    149: `72`,
    15: `5`,
    150: `74`,
    151: `75`,
    152: `76`,
    153: `77`,
    154: `77`,
    155: `77`,
    156: `78`,
    157: `78`,
    158: `79`,
    159: `80`,
    16: `6`,
    160: `81`,
    161: `82`,
    162: `83`,
    163: `84`,
    164: `85`,
    165: `86`,
    166: `86`,
    167: `86`,
    168: `87`,
    169: `87`,
    17: `7`,
    170: `89`,
    171: `89`,
    172: `90`,
    173: `91`,
    174: `92`,
    175: `95`,
    176: `95`,
    177: `95`,
    178: `95`,
    179: `95`,
    18: `8`,
    180: `95`,
    181: `96`,
    182: `96`,
    183: `97`,
    184: `98`,
    185: `100`,
    186: `101`,
    187: `104`,
    188: `104`,
    189: `104`,
    19: `9`,
    190: `104`,
    191: `104`,
    192: `104`,
    193: `104`,
    194: `104`,
    195: `104`,
    196: `104`,
    197: `104`,
    198: `105`,
    199: `105`,
    2: `2`,
    20: `10`,
    200: `106`,
    201: `106`,
    202: `106`,
    203: `108`,
    204: `108`,
    205: `109`,
    206: `109`,
    207: `110`,
    208: `111`,
    209: `118`,
    21: `11`,
    210: `119`,
    211: `119`,
    212: `120`,
    213: `120`,
    214: `120`,
    215: `120`,
    216: `120`,
    217: `120`,
    218: `120`,
    219: `120`,
    22: `11`,
    220: `120`,
    221: `120`,
    222: `121`,
    223: `121`,
    224: `122`,
    225: `123`,
    226: `124`,
    227: `124`,
    228: `125`,
    229: `125`,
    23: `12`,
    230: `126`,
    231: `127`,
    232: `127`,
    233: `128`,
    234: `128`,
    235: `129`,
    236: `129`,
    237: `131`,
    238: `131`,
    239: `132`,
    24: `12`,
    240: `133`,
    241: `133`,
    242: `133`,
    243: `135`,
    244: `135`,
    245: `136`,
    246: `136`,
    247: `137`,
    248: `138`,
    249: `138`,
    25: `13`,
    250: `139`,
    251: `140`,
    252: `141`,
    253: `142`,
    254: `142`,
    255: `144`,
    256: `144`,
    257: `145`,
    258: `145`,
    259: `146`,
    26: `14`,
    260: `147`,
    261: `148`,
    262: `148`,
    263: `148`,
    264: `149`,
    265: `150`,
    266: `151`,
    267: `151`,
    268: `152`,
    269: `153`,
    27: `14`,
    270: `153`,
    271: `154`,
    272: `155`,
    273: `156`,
    274: `157`,
    275: `157`,
    276: `158`,
    277: `159`,
    278: `160`,
    279: `162`,
    28: `15`,
    280: `162`,
    281: `162`,
    282: `164`,
    283: `164`,
    284: `165`,
    285: `165`,
    286: `165`,
    287: `166`,
    288: `166`,
    289: `166`,
    29: `16`,
    290: `169`,
    291: `169`,
    292: `169`,
    293: `170`,
    294: `171`,
    295: `171`,
    296: `172`,
    297: `173`,
    298: `174`,
    299: `174`,
    3: `2`,
    30: `18`,
    300: `174`,
    301: `175`,
    302: `176`,
    303: `176`,
    304: `177`,
    305: `177`,
    306: `177`,
    307: `177`,
    308: `177`,
    309: `177`,
    31: `18`,
    310: `177`,
    311: `177`,
    312: `177`,
    313: `177`,
    314: `178`,
    315: `178`,
    316: `179`,
    317: `180`,
    318: `181`,
    319: `181`,
    32: `18`,
    320: `182`,
    321: `182`,
    322: `183`,
    323: `183`,
    324: `184`,
    325: `184`,
    326: `185`,
    327: `185`,
    328: `186`,
    329: `186`,
    33: `18`,
    330: `187`,
    331: `187`,
    332: `187`,
    333: `189`,
    334: `189`,
    335: `190`,
    336: `190`,
    337: `191`,
    338: `191`,
    339: `192`,
    34: `18`,
    340: `193`,
    341: `193`,
    342: `194`,
    343: `194`,
    344: `194`,
    345: `194`,
    346: `194`,
    347: `194`,
    348: `195`,
    349: `195`,
    35: `18`,
    350: `196`,
    351: `197`,
    352: `198`,
    353: `200`,
    354: `200`,
    355: `201`,
    356: `201`,
    357: `201`,
    358: `202`,
    359: `202`,
    36: `18`,
    360: `202`,
    361: `203`,
    362: `203`,
    363: `204`,
    364: `205`,
    365: `205`,
    366: `206`,
    367: `206`,
    368: `207`,
    369: `207`,
    37: `18`,
    370: `208`,
    371: `208`,
    372: `208`,
    373: `210`,
    374: `210`,
    375: `210`,
    376: `211`,
    377: `211`,
    378: `211`,
    379: `211`,
    38: `18`,
    380: `212`,
    381: `212`,
    382: `212`,
    383: `213`,
    384: `213`,
    385: `213`,
    386: `214`,
    387: `214`,
    388: `215`,
    389: `215`,
    39: `18`,
    390: `215`,
    391: `217`,
    392: `217`,
    393: `217`,
    394: `218`,
    395: `218`,
    396: `218`,
    397: `219`,
    398: `219`,
    399: `220`,
    4: `2`,
    40: `18`,
    400: `220`,
    401: `220`,
    402: `222`,
    403: `223`,
    404: `223`,
    405: `224`,
    406: `225`,
    407: `226`,
    408: `226`,
    409: `227`,
    41: `18`,
    410: `227`,
    411: `228`,
    412: `229`,
    413: `230`,
    414: `231`,
    415: `231`,
    416: `232`,
    417: `233`,
    418: `234`,
    419: `235`,
    42: `18`,
    420: `235`,
    421: `236`,
    422: `237`,
    423: `238`,
    424: `238`,
    425: `238`,
    426: `239`,
    427: `239`,
    428: `240`,
    429: `241`,
    43: `18`,
    430: `242`,
    431: `243`,
    432: `243`,
    433: `243`,
    434: `245`,
    435: `246`,
    436: `246`,
    437: `247`,
    438: `247`,
    439: `248`,
    44: `18`,
    440: `248`,
    441: `248`,
    442: `250`,
    443: `250`,
    444: `251`,
    445: `251`,
    446: `252`,
    447: `253`,
    448: `255`,
    449: `255`,
    45: `18`,
    450: `255`,
    451: `257`,
    452: `257`,
    453: `258`,
    454: `259`,
    455: `259`,
    456: `260`,
    457: `261`,
    458: `263`,
    459: `264`,
    46: `18`,
    460: `264`,
    461: `265`,
    462: `265`,
    463: `266`,
    464: `266`,
    465: `266`,
    466: `267`,
    467: `267`,
    468: `267`,
    469: `269`,
    47: `18`,
    470: `270`,
    471: `271`,
    472: `272`,
    473: `273`,
    474: `275`,
    475: `276`,
    476: `276`,
    477: `277`,
    478: `278`,
    479: `278`,
    48: `18`,
    480: `279`,
    481: `279`,
    482: `280`,
    483: `280`,
    484: `281`,
    485: `282`,
    486: `284`,
    487: `284`,
    488: `284`,
    489: `286`,
    49: `18`,
    490: `286`,
    491: `286`,
    492: `288`,
    493: `288`,
    494: `290`,
    495: `290`,
    496: `291`,
    497: `291`,
    498: `291`,
    499: `292`,
    5: `2`,
    50: `18`,
    500: `292`,
    501: `293`,
    502: `294`,
    503: `294`,
    504: `295`,
    505: `296`,
    506: `297`,
    507: `297`,
    508: `298`,
    509: `299`,
    51: `18`,
    510: `300`,
    511: `301`,
    512: `301`,
    513: `301`,
    514: `303`,
    515: `304`,
    516: `306`,
    517: `307`,
    518: `308`,
    519: `309`,
    52: `18`,
    520: `309`,
    521: `310`,
    522: `310`,
    523: `311`,
    524: `311`,
    525: `311`,
    526: `312`,
    527: `314`,
    528: `315`,
    529: `316`,
    53: `18`,
    530: `316`,
    531: `316`,
    532: `317`,
    533: `318`,
    534: `318`,
    535: `321`,
    536: `321`,
    537: `322`,
    538: `322`,
    539: `323`,
    54: `18`,
    540: `324`,
    541: `325`,
    542: `326`,
    543: `326`,
    544: `327`,
    545: `328`,
    546: `328`,
    547: `329`,
    548: `329`,
    549: `330`,
    55: `18`,
    550: `330`,
    551: `331`,
    552: `332`,
    553: `333`,
    554: `333`,
    555: `334`,
    556: `335`,
    557: `336`,
    558: `337`,
    559: `337`,
    56: `18`,
    560: `338`,
    561: `339`,
    562: `340`,
    563: `342`,
    564: `343`,
    565: `343`,
    566: `343`,
    567: `345`,
    568: `346`,
    569: `346`,
    57: `19`,
    570: `347`,
    571: `349`,
    572: `350`,
    573: `351`,
    574: `352`,
    575: `353`,
    576: `353`,
    577: `354`,
    578: `355`,
    579: `356`,
    58: `19`,
    580: `357`,
    581: `359`,
    582: `360`,
    583: `360`,
    584: `360`,
    585: `361`,
    586: `361`,
    587: `362`,
    588: `363`,
    589: `363`,
    59: `19`,
    590: `363`,
    591: `364`,
    592: `364`,
    593: `365`,
    594: `365`,
    595: `366`,
    596: `367`,
    597: `367`,
    598: `368`,
    599: `370`,
    6: `2`,
    60: `20`,
    600: `370`,
    601: `371`,
    602: `372`,
    603: `372`,
    604: `373`,
    605: `375`,
    606: `375`,
    607: `376`,
    608: `376`,
    609: `377`,
    61: `20`,
    610: `378`,
    611: `379`,
    612: `379`,
    613: `379`,
    614: `380`,
    615: `380`,
    616: `380`,
    617: `382`,
    618: `383`,
    619: `384`,
    62: `20`,
    620: `385`,
    621: `385`,
    622: `385`,
    623: `386`,
    624: `386`,
    625: `387`,
    626: `387`,
    627: `387`,
    628: `388`,
    63: `20`,
    64: `20`,
    65: `20`,
    66: `20`,
    67: `20`,
    68: `20`,
    69: `20`,
    7: `2`,
    70: `20`,
    71: `20`,
    72: `22`,
    73: `25`,
    74: `25`,
    75: `26`,
    76: `27`,
    77: `27`,
    78: `29`,
    79: `30`,
    8: `2`,
    80: `30`,
    81: `31`,
    82: `32`,
    83: `33`,
    84: `33`,
    85: `33`,
    86: `34`,
    87: `34`,
    88: `35`,
    89: `36`,
    9: `2`,
    90: `37`,
    91: `37`,
    92: `38`,
    93: `38`,
    94: `39`,
    95: `39`,
    96: `39`,
    97: `40`,
    98: `40`,
    99: `41`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 41,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T6","name":"v583","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Admin_end0_63","type":"bool"},{"internalType":"bool","name":"_User_optin0_63","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v365","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v407","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Admin_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v572","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Admin_end0_63","type":"bool"},{"internalType":"bool","name":"_User_optin0_63","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v586","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620012d890813803601f19601f90808284011684019460018060401b0393858710858811176200042d57808692604098895283396020918291810103126200042857855194620000518662000443565b5185526000908180554360035581606088516200006e816200045f565b8281528284820152828a82015201528651926200008b8462000443565b8751620000988162000443565b838152845260049660ff88541662000411577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87898051338152835186820152a151801590811562000404575b5015620003ed5734620003d65760019687855152885162000105816200045f565b8481528381018a51620001188162000443565b86815281528a820186815260608301978789523384525182524390528a51620001418162000443565b86815281515115620002f557508a5196606088018881108b821117620002e2578c52868852858801918c51620001778162000443565b88815283528c89019388855260018060a01b0390511680995251825251825260038655438a558a519685880152515115158a87015251606086015260608552620001c1856200045f565b8451968711620002cf5750620001d96002546200047b565b85811162000293575b50819486116001146200022b575050918394918493946200021f575b50501b916000199060031b1c1916176002555b51610e069081620004d28239f35b015192503880620001fe565b600283528183209493928692918316915b888383106200027857505050106200025e575b505050811b0160025562000211565b015160001960f88460031b161c191690553880806200024f565b8587015188559096019594850194879350908101906200023c565b620002be906002855283852087808a0160051c820192868b10620002c5575b0160051c0190620004b8565b38620001e2565b92508192620002b2565b634e487b7160e01b845260419052602483fd5b634e487b7160e01b885260418552602488fd5b95809a979599508093508092945080915060018060a01b039586865116905190828215620003cc575bf115620003c25786809381938293478093525116828215620003b8575bf115620003ae57838055838155620003556002546200047b565b908162000368575b505050505062000211565b8282116001146200038657505050506002555b38808080806200035d565b620003a19260028652848620920160051c82019101620004b8565b812081600255556200037b565b84513d85823e3d90fd5b506108fc6200033b565b87513d88823e3d90fd5b506108fc6200031e565b875163100960cb60e01b8152600a81890152602490fd5b875163100960cb60e01b8152600981890152602490fd5b90506001541438620000e4565b885163100960cb60e01b81526008818a0152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176200042d57604052565b608081019081106001600160401b038211176200042d57604052565b90600182811c92168015620004ad575b60208310146200049757565b634e487b7160e01b600052602260045260246000fd5b91607f16916200048b565b818110620004c4575050565b60008155600101620004b856fe608060409080825260049182361015610020575b505050361561001e57005b005b600091823560e01c9081631e93b0f11461035b5750806336e56ea5146102fc5780636efa5166146102b25780637a2b54dc1461025b578063832307571461023d578063a5792424146101a0578063ab53f2c6146101355763f396fd8b03610013576080366003190112610131576100956105bf565b928151906100a2826103d1565b80358252606036602319011261012d5782519060608201906001600160401b0382118383101761011a575083526024356002811015610116578152604435801515810361011657602082015260643580151581036101165791816101109385602098940152868201526106a7565b51908152f35b8480fd5b634e487b7160e01b865260419052602485fd5b8380fd5b5080fd5b50346101315781600319360112610131578154610150610453565b91805193849283526020828185015284518093850152815b83811061018957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610168565b5091346101315760203660031901126101315780356001600160a01b03811691908290036102395760036101d26105bf565b9354036102225760208480856001610203876101fd6101ef610453565b888082518301019101610605565b50610539565b5161020d81610377565b61021681610377565b14928391015251908152f35b602490600785519163100960cb60e01b8352820152fd5b8280fd5b50346101315781600319360112610131576020906001549051908152f35b50816003193601126101315760606020926102a76102776105bf565b80926102816105e4565b878101906001825152511515878251015261029a6105e4565b91825251878201526106a7565b015115159051908152f35b508160031936011261013157602080926102a76102cd6105bf565b80926102d76105e4565b858101908282515251151586825101526102ef6105e4565b91825251858201526106a7565b5082346102395760203660031901126102395735916001600160a01b038316830361035857506103306060926101fd61051a565b9080805192805161034081610377565b84526020810151151560208501520151151590820152f35b80fd5b8390346101315781600319360112610131576020906003548152f35b6002111561038157565b634e487b7160e01b600052602160045260246000fd5b90600182811c921680156103c7575b60208310146103b157565b634e487b7160e01b600052602260045260246000fd5b91607f16916103a6565b604081019081106001600160401b038211176103ec57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176103ec57604052565b608081019081106001600160401b038211176103ec57604052565b602081019081106001600160401b038211176103ec57604052565b60405190600060025461046581610397565b8085526001918083169081156104fb57506001146104a3575b5050829003601f01601f191682016001600160401b038111838210176103ec57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106104e75750505050830101388061047e565b8054888601830152930192849082016104d2565b919250506020925060ff191682850152151560051b830101388061047e565b6040519061052782610402565b60006040838281528260208201520152565b9061054261051a565b9160018060a01b03166000908082526005602052600160ff60408420541661056981610377565b036105b4576040929350815260056020522060ff6040519161058a83610402565b5481811661059781610377565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b604051906105cc8261041d565b60006060838281528260208201528260408201520152565b604051906105f1826103d1565b8160008152602061060061051a565b910152565b809103906060821261066f576040519161061e83610402565b8151906001600160a01b038216820361066f576020918452601f19011261066f576040519061064c82610438565b602081015191821515830361066f57604092815260208401520151604082015290565b600080fd5b604051906106818261041d565b600060608382815260405161069581610438565b83815260208201528260408201520152565b60408051926106b5846103d1565b81516106c081610438565b60009081815285526020948581019084516106da81610438565b838152825260039485845403610dcb576107036106f5610453565b898082518301019101610605565b9260049760ff895416610db4579082918a949351903382528051868301527f17ec5e38ba31c24e430a6a804a7954ae08580921024aa52b2d69ed2100c2e7d060a087830193868551998a5161075781610377565b828401528a015115159960609a8b840152015115156080820152a1518015908115610da8575b5015610d915780515161078f81610377565b61079881610377565b610a7d57505083516001600160a01b03969087163303610a665734610a4f578986917f820b1e2d146c84642cbac51c4970f49bb491d10b4a68711a140baa693f588459828551858152a1015284825152806107f1610674565b9287865116845251948a840195865243828501520151838301908152815161081881610438565b86815285515115610992575081519461083086610402565b8686528a860197835161084281610438565b88815289528387019488865251168096525187525182528685556001954387558151948a8601525151151590840152518183015281526108818161041d565b8051946001600160401b03861161097f575061089e600254610397565b601f8111610945575b508591601f86116001146108df5794955085929190836108d4575b50501b92600019911b1c191617600255565b0151935038806108c2565b6002815286812093969394938691601f198316915b8983831061092b5750505010610911575b50505050811b01600255565b01519060f884600019921b161c1916905538808080610905565b8587015189559097019694850194889350908101906108f4565b61096f9060028452878420601f880160051c810191898910610975575b601f0160051c0190610de2565b386108a7565b9091508190610962565b634e487b7160e01b835260419052602482fd5b96959998508993508392945082919750819086865116905190828215610a46575bf115610a3c5785809381938293478093525116828215610a33575bf115610a285750818055816001556109e7600254610397565b806109f157505050565b601f8111600114610a03575050600255565b60028352818320610a1f91601f0160051c810190600101610de2565b81208160025555565b51913d9150823e3d90fd5b506108fc6109ce565b83513d87823e3d90fd5b506108fc6109b3565b815163100960cb60e01b8152600f818b0152602490fd5b815163100960cb60e01b8152600e818b0152602490fd5b909250515195610a8c87610377565b610a9587610377565b6001809714610aab575b50505050505050505050565b34610d7a5783869133835260058c528383208960ff1982541617905583832062ff00001981541690557f906f6aed91eb48f2647c8addfda09ee050e109fe0e5d9710480c1deff2ec40728c8551858152a1015288840151511515825152610b10610674565b84516001600160a01b03908116825292518a82019081524383830152948201518482019081528251919391610b4481610438565b87815286515115610cae5750825195610b5c87610402565b8787528b8701928451610b6e81610438565b89815284528488019589875251168097525182525183528786554387558151948a860152515115159084015251818301528152610baa8161041d565b8051946001600160401b03861161097f5750610bc7600254610397565b601f8111610c7f575b508591601f8611600114610c16579495508592919083610c0b575b50501b92600019911b1c1916176002555b38808080808080808080610a9f565b015193503880610beb565b6002815286812093969394938691601f198316915b89838310610c655750505010610c4b575b50505050811b01600255610bfc565b01519060f884600019921b161c1916905538808080610c3c565b858701518955909701969485019488935090810190610c2b565b610ca89060028452878420601f880160051c81019189891061097557601f0160051c0190610de2565b38610bd0565b969a99508a93945083929798508195508291908291865116905190828215610d71575bf115610d675786809381938293478093525116828215610d5e575bf115610d555750828055828155610d04600254610397565b80610d13575b50505050610bfc565b601f8111600114610d2e575050506002555b38808080610d0a565b610d499160028552601f848620920160051c82019101610de2565b81208160025555610d25565b513d84823e3d90fd5b506108fc610cec565b83513d88823e3d90fd5b506108fc610cd1565b815163100960cb60e01b81526010818b0152602490fd5b825163100960cb60e01b8152600d818c0152602490fd5b9050600154143861077d565b825163100960cb60e01b8152600c818b0152602490fd5b5163100960cb60e01b8152600b6004820152602490fd5b818110610ded575050565b60008155600101610de256fea164736f6c6343000811000a`,
  BytecodeLen: 4824,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:32:37:after expr stmt semicolon',
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
  "Admin_end": Admin_end,
  "Deployer": Deployer,
  "User_optin": User_optin
  };
export const _APIs = {
  Admin: {
    end: Admin_end
    },
  User: {
    optin: User_optin
    }
  };
