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
  const ctc0 = stdlib.T_Contract;
  return {
    E: {
      notify: [ctc0]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc0, ctc5],
      4: [ctc1, ctc5, ctc2]
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
export async function _A_claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc3]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc10 = stdlib.T_Object({
    message: ctc9,
    success: ctc4
    });
  const ctc11 = stdlib.T_Object({
    errored: ctc4,
    message: ctc9
    });
  const ctc12 = stdlib.T_Data({
    data: ctc10,
    error: ctc11
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v305, v336, v337] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc6, ctc3]);
  const v342 = stdlib.protect(ctc8, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)', 'at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)'],
    msg: 'in',
    who: 'A_claim'
    });
  const v343 = v342[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v347 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v343, ctc0), null);
  const v348 = {
    None: 0,
    Some: 1
    }[v347[0]];
  const v349 = stdlib.eq(v348, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v349, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)', 'at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)'],
    msg: 'Forbidden',
    who: 'A_claim'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v305, v336, v337, v342],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./token.rsh:107:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v362], secs: v364, time: v363, didSend: v180, from: v361 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "A_claim"
        });
      const v366 = v362[stdlib.checkedBigNumberify('./token.rsh:103:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v366, ctc0), null);
      ;
      const v380 = ctc.simTokenAccepted(sim_r, v361, v305);
      const v381 = await txn1.getOutput('internal', 'v380', ctc4, v380);
      if (v381) {
        const v404 = 'The result succeded             ';
        const v405 = {
          message: v404,
          success: true
          };
        const v406 = ['data', v405];
        const v407 = await txn1.getOutput('A_claim', 'v406', ctc12, v406);
        
        const v540 = v336[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
        const v541 = v540[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v361,
          tok: v305
          });
        sim_r.txns.push({
          kind: 'from',
          to: v361,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v305
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v383 = 'Failed to claim                 ';
        const v384 = {
          errored: true,
          message: v383
          };
        const v385 = ['error', v384];
        const v386 = await txn1.getOutput('A_claim', 'v385', ctc12, v385);
        
        const v545 = v336;
        const v546 = v337;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v362], secs: v364, time: v363, didSend: v180, from: v361 } = txn1;
  undefined /* setApiDetails */;
  const v366 = v362[stdlib.checkedBigNumberify('./token.rsh:103:10:spread', stdlib.UInt_max, '0')];
  const v368 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v366, ctc0), null);
  const v369 = {
    None: 0,
    Some: 1
    }[v368[0]];
  const v370 = stdlib.eq(v369, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v370, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)', 'at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)'],
    msg: 'Forbidden',
    who: 'A_claim'
    });
  ;
  const v380 = true;
  const v381 = await txn1.getOutput('internal', 'v380', ctc4, v380);
  if (v381) {
    const v404 = 'The result succeded             ';
    const v405 = {
      message: v404,
      success: true
      };
    const v406 = ['data', v405];
    const v407 = await txn1.getOutput('A_claim', 'v406', ctc12, v406);
    if (v180) {
      stdlib.protect(ctc0, await interact.out(v362, v407), {
        at: './token.rsh:103:11:application',
        fs: ['at ./token.rsh:103:11:application call to [unknown function] (defined at: ./token.rsh:103:11:function exp)', 'at ./token.rsh:128:16:application call to "ret" (defined at: ./token.rsh:108:15:function exp)', 'at ./token.rsh:108:15:application call to [unknown function] (defined at: ./token.rsh:108:15:function exp)'],
        msg: 'out',
        who: 'A_claim'
        });
      }
    else {
      }
    
    const v540 = v336[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
    const v541 = v540[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  else {
    const v383 = 'Failed to claim                 ';
    const v384 = {
      errored: true,
      message: v383
      };
    const v385 = ['error', v384];
    const v386 = await txn1.getOutput('A_claim', 'v385', ctc12, v385);
    if (v180) {
      stdlib.protect(ctc0, await interact.out(v362, v386), {
        at: './token.rsh:103:11:application',
        fs: ['at ./token.rsh:103:11:application call to [unknown function] (defined at: ./token.rsh:103:11:function exp)', 'at ./token.rsh:112:16:application call to "ret" (defined at: ./token.rsh:108:15:function exp)', 'at ./token.rsh:108:15:application call to [unknown function] (defined at: ./token.rsh:108:15:function exp)'],
        msg: 'out',
        who: 'A_claim'
        });
      }
    else {
      }
    
    const v545 = v336;
    const v546 = v337;
    return;
    }
  
  
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    addr: ctc2,
    amt: ctc3,
    tok: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc3]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Object({
    message: ctc8,
    success: ctc7
    });
  const ctc10 = stdlib.T_Object({
    errored: ctc7,
    message: ctc8
    });
  const ctc11 = stdlib.T_Data({
    data: ctc9,
    error: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v290 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v291 = [v290];
  const v297 = stdlib.protect(ctc5, await interact.getInfo(), {
    at: './token.rsh:42:59:application',
    fs: ['at ./token.rsh:41:9:application call to [unknown function] (defined at: ./token.rsh:41:13:function exp)'],
    msg: 'getInfo',
    who: 'Alice'
    });
  const v298 = v297.addr;
  const v299 = v297.amt;
  const v300 = v297.tok;
  
  const txn1 = await (ctc.sendrecv({
    args: [v300, v299, v298],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./token.rsh:45:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./token.rsh:45:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v305, v306, v307], secs: v309, time: v308, didSend: v35, from: v304 } = txn1;
      
      const v310 = v291[stdlib.checkedBigNumberify('./token.rsh:45:5:dot', stdlib.UInt_max, '0')];
      const v311 = stdlib.Array_set(v310, '0', stdlib.checkedBigNumberify('./token.rsh:45:5:dot', stdlib.UInt_max, '0'));
      const v312 = stdlib.Array_set(v291, stdlib.checkedBigNumberify('./token.rsh:45:5:dot', stdlib.UInt_max, '0'), v311);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v305
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v305, v306, v307], secs: v309, time: v308, didSend: v35, from: v304 } = txn1;
  const v310 = v291[stdlib.checkedBigNumberify('./token.rsh:45:5:dot', stdlib.UInt_max, '0')];
  const v311 = stdlib.Array_set(v310, '0', stdlib.checkedBigNumberify('./token.rsh:45:5:dot', stdlib.UInt_max, '0'));
  const v312 = stdlib.Array_set(v291, stdlib.checkedBigNumberify('./token.rsh:45:5:dot', stdlib.UInt_max, '0'), v311);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v304, v305, v306, v307, v312],
    evt_cnt: 0,
    funcNum: 1,
    lct: v308,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./token.rsh:48:5:dot', stdlib.UInt_max, '0'), [[v306, v305]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v316, time: v315, didSend: v42, from: v314 } = txn2;
      
      ;
      const v317 = v312[stdlib.checkedBigNumberify('./token.rsh:48:5:dot', stdlib.UInt_max, '0')];
      const v318 = v317[stdlib.checkedBigNumberify('./token.rsh:48:5:dot', stdlib.UInt_max, '0')];
      const v319 = stdlib.add(v318, v306);
      const v321 = stdlib.Array_set(v317, '0', v319);
      const v322 = stdlib.Array_set(v312, stdlib.checkedBigNumberify('./token.rsh:48:5:dot', stdlib.UInt_max, '0'), v321);
      sim_r.txns.push({
        amt: v306,
        kind: 'to',
        tok: v305
        });
      const v324 = await ctc.getContractInfo();
      
      await stdlib.simMapSet(sim_r, 0, ctc2, v307, ctc0, null);
      const v327 = true;
      const v329 = v304;
      const v330 = v315;
      const v336 = v322;
      const v337 = stdlib.checkedBigNumberify('./token.rsh:39:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v327;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v425 = v336[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
        const v426 = v425[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v329,
          tok: v305
          });
        sim_r.txns.push({
          kind: 'from',
          to: v329,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v305
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
    tys: [ctc2, ctc4, ctc3, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v316, time: v315, didSend: v42, from: v314 } = txn2;
  ;
  const v317 = v312[stdlib.checkedBigNumberify('./token.rsh:48:5:dot', stdlib.UInt_max, '0')];
  const v318 = v317[stdlib.checkedBigNumberify('./token.rsh:48:5:dot', stdlib.UInt_max, '0')];
  const v319 = stdlib.add(v318, v306);
  const v321 = stdlib.Array_set(v317, '0', v319);
  const v322 = stdlib.Array_set(v312, stdlib.checkedBigNumberify('./token.rsh:48:5:dot', stdlib.UInt_max, '0'), v321);
  ;
  const v323 = stdlib.addressEq(v304, v314);
  stdlib.assert(v323, {
    at: './token.rsh:48:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v324 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.contractInfo(v324), {
    at: './token.rsh:49:26:application',
    fs: ['at ./token.rsh:49:26:application call to [unknown function] (defined at: ./token.rsh:49:26:function exp)', 'at ./token.rsh:49:26:application call to "liftedInteract" (defined at: ./token.rsh:49:26:application)'],
    msg: 'contractInfo',
    who: 'Alice'
    });
  
  await stdlib.mapSet(map0, ctc2, v307, ctc0, null);
  let v327 = true;
  let v329 = v304;
  let v330 = v315;
  let v336 = v322;
  let v337 = stdlib.checkedBigNumberify('./token.rsh:39:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v327;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v362], secs: v364, time: v363, didSend: v180, from: v361 } = txn4;
    undefined /* setApiDetails */;
    const v366 = v362[stdlib.checkedBigNumberify('./token.rsh:103:10:spread', stdlib.UInt_max, '0')];
    const v368 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v366, ctc0), null);
    const v369 = {
      None: 0,
      Some: 1
      }[v368[0]];
    const v370 = stdlib.eq(v369, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    stdlib.assert(v370, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./token.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)', 'at ./token.rsh:103:40:application call to [unknown function] (defined at: ./token.rsh:103:40:function exp)'],
      msg: 'Forbidden',
      who: 'Alice'
      });
    ;
    const v380 = true;
    const v381 = await txn4.getOutput('internal', 'v380', ctc7, v380);
    if (v381) {
      const v404 = 'The result succeded             ';
      const v405 = {
        message: v404,
        success: true
        };
      const v406 = ['data', v405];
      await txn4.getOutput('A_claim', 'v406', ctc11, v406);
      const cv327 = false;
      const cv329 = v361;
      const cv330 = v363;
      const cv336 = v336;
      const cv337 = v337;
      
      v327 = cv327;
      v329 = cv329;
      v330 = cv330;
      v336 = cv336;
      v337 = cv337;
      
      txn3 = txn4;
      continue;}
    else {
      const v383 = 'Failed to claim                 ';
      const v384 = {
        errored: true,
        message: v383
        };
      const v385 = ['error', v384];
      await txn4.getOutput('A_claim', 'v385', ctc11, v385);
      const cv327 = true;
      const cv329 = v361;
      const cv330 = v363;
      const cv336 = v336;
      const cv337 = v337;
      
      v327 = cv327;
      v329 = cv329;
      v330 = cv330;
      v336 = cv336;
      v337 = cv337;
      
      txn3 = txn4;
      continue;}
    
    }
  const v425 = v336[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
  const v426 = v425[stdlib.checkedBigNumberify('./token.rsh:142:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function A_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`A_claim(address,uint64)(byte,byte[33])`, `_reachp_0((uint64,uint64,uint64,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(address,uint64)))void`],
    pure: [],
    sigs: [`A_claim(address,uint64)(byte,byte[33])`, `_reachp_0((uint64,uint64,uint64,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(address,uint64)))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAFAAEIBKCNBiYCAAEAMRhBAmcoZEkiWzUBJFs1AilkggQEF3NkwAR755WQBN+q2g4E39kjKDYaAI4EAAECEQIsAiEANhoBNhoCFzULNQwkrzQMNAsWUFA1CyU0ARJESSJbNRNJVwgRNQ+BGVs1DjQLIls1DDQLVwgoNQ2ABBPlQLA0DBZQNA1QsDQMiALnKCgpNA1XACBQvkkWUQcIRQRNUCJVIxJEMQA0E3AATEg1DIAIAAAAAAAAAXw0DBZRBwhQsDQMSTULQQHXgCIAVGhlIHJlc3VsdCBzdWNjZWRlZAAAAAAAAAAAAAAAAAABNQuACAAAAAAAAAGWNAtQsDQLNQQiMQAyBjUQNRE1EjQSQQHVNBMWNA9QNA4WUIFAr1AlMgY1AjUBKUxXAGFnKDQBFjQCFlBnMRkiEkSIAk80A0AACoAEFR98dTQEULAjQzEANRY0CyJbNQw0CyRbNRM0C4EQWzUVNAtXGCA1FIAEv7SJbTQMFlA0ExZQNBUWUDQUULA0DIgB7YERr0k1C0lXABEkr1wAXAA1DSEEiAHgIjQTMgqIAeI0FjQTFlA0FRZQNBRQNA1QIzIGQv9mIzQBEkRJVwAgNRZJgSBbNRNJgShbNRVJVzAgNRRXUBE1DTQLFzUMgATVFRkUNAwWULA0DIgBgTQNVwARNQs0FTQTMRY0ACMISTUACUcDOBQyChJEOBAlEkQ4EU8CEkQ4EhJENBYxABJEgdR6KTQUUCiIAWgjNBYyBjQNNAtJIls0FQgWXABcACI1DjUPNRA1ETUSQv66iAEbIQSIASQ2GgE1C0L+7IgBCzYaATULQv9PiAEANhoBNQtC/eAiMTQSRIECMTUSRCIxNhJEIjE3EkSIAOCBYa8iIkL+ijEZIhJEQv6igCIBAUZhaWxlZCB0byBjbGFpbQAAAAAAAAAAAAAAAAAAAAAANQuACAAAAAAAAAGBNAtQsDQLNQQjMQAyBjUQNRE1EkL+JjQPVwARIls0EzQRiACUNA40EYgAiSI0EzIKMgmIAKExGYEFEkSIAH4yCmAyCngJSTUGMgqIAGdC/h1ITL9IiSKyASOyELIHsgiziSKyASWyELIUshGyErOJSIlMCUk1BjIJiAA5iQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiSM1A4lJIhJMNAISEUSJNAYINQaJsUL/nbFC/6U0BjQHSg9B/6xC/7RMSb1A/4JLA4j/20L/erGyFUL/hQ==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `47`,
    101: `48`,
    102: `49`,
    103: `49`,
    104: `49`,
    105: `50`,
    106: `50`,
    107: `51`,
    108: `51`,
    109: `52`,
    11: `2`,
    110: `53`,
    111: `53`,
    112: `54`,
    113: `54`,
    114: `55`,
    115: `56`,
    116: `57`,
    117: `57`,
    118: `58`,
    119: `58`,
    12: `2`,
    120: `59`,
    121: `59`,
    122: `59`,
    123: `60`,
    124: `60`,
    125: `61`,
    126: `61`,
    127: `61`,
    128: `61`,
    129: `61`,
    13: `2`,
    130: `61`,
    131: `62`,
    132: `62`,
    133: `63`,
    134: `64`,
    135: `65`,
    136: `65`,
    137: `66`,
    138: `67`,
    139: `69`,
    14: `2`,
    140: `69`,
    141: `70`,
    142: `70`,
    143: `70`,
    144: `73`,
    145: `74`,
    146: `75`,
    147: `76`,
    148: `76`,
    149: `77`,
    15: `4`,
    150: `77`,
    151: `77`,
    152: `78`,
    153: `80`,
    154: `81`,
    155: `82`,
    156: `83`,
    157: `83`,
    158: `83`,
    159: `84`,
    16: `4`,
    160: `84`,
    161: `85`,
    162: `86`,
    163: `87`,
    164: `88`,
    165: `89`,
    166: `90`,
    167: `91`,
    168: `97`,
    169: `97`,
    17: `5`,
    170: `98`,
    171: `98`,
    172: `100`,
    173: `100`,
    174: `101`,
    175: `102`,
    176: `103`,
    177: `103`,
    178: `104`,
    179: `104`,
    18: `5`,
    180: `104`,
    181: `104`,
    182: `104`,
    183: `104`,
    184: `104`,
    185: `104`,
    186: `104`,
    187: `104`,
    188: `105`,
    189: `105`,
    19: `5`,
    190: `106`,
    191: `107`,
    192: `107`,
    193: `107`,
    194: `108`,
    195: `109`,
    196: `110`,
    197: `110`,
    198: `111`,
    199: `112`,
    2: `2`,
    20: `6`,
    200: `112`,
    201: `113`,
    202: `113`,
    203: `113`,
    204: `114`,
    205: `114`,
    206: `114`,
    207: `114`,
    208: `114`,
    209: `114`,
    21: `7`,
    210: `114`,
    211: `114`,
    212: `114`,
    213: `114`,
    214: `114`,
    215: `114`,
    216: `114`,
    217: `114`,
    218: `114`,
    219: `114`,
    22: `8`,
    220: `114`,
    221: `114`,
    222: `114`,
    223: `114`,
    224: `114`,
    225: `114`,
    226: `114`,
    227: `114`,
    228: `114`,
    229: `114`,
    23: `9`,
    230: `114`,
    231: `114`,
    232: `114`,
    233: `114`,
    234: `114`,
    235: `114`,
    236: `114`,
    237: `114`,
    238: `114`,
    239: `114`,
    24: `10`,
    240: `115`,
    241: `115`,
    242: `116`,
    243: `116`,
    244: `116`,
    245: `116`,
    246: `116`,
    247: `116`,
    248: `116`,
    249: `116`,
    25: `11`,
    250: `116`,
    251: `116`,
    252: `117`,
    253: `117`,
    254: `118`,
    255: `119`,
    256: `120`,
    257: `120`,
    258: `121`,
    259: `121`,
    26: `11`,
    260: `122`,
    261: `123`,
    262: `123`,
    263: `124`,
    264: `124`,
    265: `125`,
    266: `125`,
    267: `126`,
    268: `126`,
    269: `127`,
    27: `12`,
    270: `127`,
    271: `129`,
    272: `129`,
    273: `130`,
    274: `130`,
    275: `130`,
    276: `132`,
    277: `132`,
    278: `133`,
    279: `134`,
    28: `13`,
    280: `134`,
    281: `135`,
    282: `136`,
    283: `136`,
    284: `137`,
    285: `138`,
    286: `139`,
    287: `139`,
    288: `140`,
    289: `141`,
    29: `14`,
    290: `142`,
    291: `143`,
    292: `143`,
    293: `145`,
    294: `145`,
    295: `146`,
    296: `146`,
    297: `147`,
    298: `148`,
    299: `149`,
    3: `2`,
    30: `14`,
    300: `149`,
    301: `149`,
    302: `150`,
    303: `151`,
    304: `152`,
    305: `152`,
    306: `153`,
    307: `154`,
    308: `154`,
    309: `155`,
    31: `15`,
    310: `156`,
    311: `157`,
    312: `158`,
    313: `158`,
    314: `159`,
    315: `160`,
    316: `161`,
    317: `163`,
    318: `163`,
    319: `163`,
    32: `16`,
    320: `165`,
    321: `165`,
    322: `166`,
    323: `166`,
    324: `166`,
    325: `168`,
    326: `168`,
    327: `168`,
    328: `168`,
    329: `168`,
    33: `18`,
    330: `168`,
    331: `169`,
    332: `169`,
    333: `170`,
    334: `171`,
    335: `173`,
    336: `174`,
    337: `176`,
    338: `176`,
    339: `177`,
    34: `18`,
    340: `177`,
    341: `178`,
    342: `178`,
    343: `179`,
    344: `180`,
    345: `181`,
    346: `181`,
    347: `182`,
    348: `182`,
    349: `183`,
    35: `18`,
    350: `184`,
    351: `185`,
    352: `185`,
    353: `186`,
    354: `186`,
    355: `187`,
    356: `187`,
    357: `188`,
    358: `189`,
    359: `189`,
    36: `18`,
    360: `190`,
    361: `190`,
    362: `191`,
    363: `191`,
    364: `191`,
    365: `192`,
    366: `192`,
    367: `193`,
    368: `193`,
    369: `193`,
    37: `18`,
    370: `193`,
    371: `193`,
    372: `193`,
    373: `194`,
    374: `194`,
    375: `195`,
    376: `196`,
    377: `197`,
    378: `197`,
    379: `198`,
    38: `18`,
    380: `199`,
    381: `200`,
    382: `200`,
    383: `201`,
    384: `202`,
    385: `203`,
    386: `203`,
    387: `204`,
    388: `205`,
    389: `207`,
    39: `18`,
    390: `207`,
    391: `208`,
    392: `208`,
    393: `208`,
    394: `209`,
    395: `209`,
    396: `210`,
    397: `211`,
    398: `212`,
    399: `212`,
    4: `2`,
    40: `18`,
    400: `213`,
    401: `214`,
    402: `214`,
    403: `214`,
    404: `215`,
    405: `216`,
    406: `217`,
    407: `217`,
    408: `218`,
    409: `218`,
    41: `18`,
    410: `219`,
    411: `219`,
    412: `220`,
    413: `220`,
    414: `221`,
    415: `221`,
    416: `221`,
    417: `222`,
    418: `224`,
    419: `224`,
    42: `18`,
    420: `225`,
    421: `225`,
    422: `226`,
    423: `226`,
    424: `226`,
    425: `228`,
    426: `228`,
    427: `229`,
    428: `229`,
    429: `230`,
    43: `18`,
    430: `231`,
    431: `232`,
    432: `232`,
    433: `233`,
    434: `234`,
    435: `235`,
    436: `235`,
    437: `236`,
    438: `237`,
    439: `237`,
    44: `18`,
    440: `238`,
    441: `239`,
    442: `240`,
    443: `240`,
    444: `241`,
    445: `241`,
    446: `241`,
    447: `243`,
    448: `244`,
    449: `244`,
    45: `18`,
    450: `245`,
    451: `246`,
    452: `248`,
    453: `249`,
    454: `249`,
    455: `249`,
    456: `250`,
    457: `250`,
    458: `251`,
    459: `252`,
    46: `18`,
    460: `252`,
    461: `253`,
    462: `254`,
    463: `254`,
    464: `255`,
    465: `256`,
    466: `256`,
    467: `257`,
    468: `258`,
    469: `258`,
    47: `18`,
    470: `259`,
    471: `260`,
    472: `260`,
    473: `260`,
    474: `261`,
    475: `261`,
    476: `262`,
    477: `262`,
    478: `262`,
    479: `263`,
    48: `18`,
    480: `263`,
    481: `264`,
    482: `264`,
    483: `265`,
    484: `266`,
    485: `266`,
    486: `267`,
    487: `267`,
    488: `267`,
    489: `267`,
    49: `18`,
    490: `267`,
    491: `267`,
    492: `268`,
    493: `268`,
    494: `269`,
    495: `270`,
    496: `271`,
    497: `273`,
    498: `273`,
    499: `274`,
    5: `2`,
    50: `18`,
    500: `274`,
    501: `274`,
    502: `275`,
    503: `275`,
    504: `276`,
    505: `276`,
    506: `276`,
    507: `277`,
    508: `277`,
    509: `278`,
    51: `18`,
    510: `278`,
    511: `279`,
    512: `279`,
    513: `282`,
    514: `282`,
    515: `283`,
    516: `283`,
    517: `284`,
    518: `285`,
    519: `286`,
    52: `18`,
    520: `287`,
    521: `287`,
    522: `288`,
    523: `289`,
    524: `289`,
    525: `290`,
    526: `290`,
    527: `291`,
    528: `291`,
    529: `292`,
    53: `18`,
    530: `293`,
    531: `294`,
    532: `294`,
    533: `295`,
    534: `296`,
    535: `297`,
    536: `298`,
    537: `298`,
    538: `299`,
    539: `299`,
    54: `18`,
    540: `300`,
    541: `301`,
    542: `302`,
    543: `302`,
    544: `303`,
    545: `304`,
    546: `307`,
    547: `307`,
    548: `308`,
    549: `308`,
    55: `19`,
    550: `309`,
    551: `310`,
    552: `314`,
    553: `314`,
    554: `314`,
    555: `315`,
    556: `316`,
    557: `316`,
    558: `317`,
    559: `318`,
    56: `19`,
    560: `319`,
    561: `319`,
    562: `319`,
    563: `320`,
    564: `321`,
    565: `321`,
    566: `322`,
    567: `322`,
    568: `323`,
    569: `323`,
    57: `19`,
    570: `324`,
    571: `324`,
    572: `325`,
    573: `326`,
    574: `327`,
    575: `328`,
    576: `328`,
    577: `329`,
    578: `330`,
    579: `331`,
    58: `20`,
    580: `331`,
    581: `332`,
    582: `332`,
    583: `333`,
    584: `334`,
    585: `334`,
    586: `335`,
    587: `335`,
    588: `336`,
    589: `336`,
    59: `20`,
    590: `337`,
    591: `337`,
    592: `338`,
    593: `338`,
    594: `339`,
    595: `339`,
    596: `339`,
    597: `341`,
    598: `341`,
    599: `341`,
    6: `2`,
    60: `20`,
    600: `342`,
    601: `342`,
    602: `343`,
    603: `343`,
    604: `343`,
    605: `344`,
    606: `344`,
    607: `344`,
    608: `345`,
    609: `345`,
    61: `20`,
    610: `346`,
    611: `346`,
    612: `346`,
    613: `348`,
    614: `348`,
    615: `348`,
    616: `349`,
    617: `349`,
    618: `349`,
    619: `350`,
    62: `20`,
    620: `350`,
    621: `351`,
    622: `351`,
    623: `351`,
    624: `353`,
    625: `353`,
    626: `353`,
    627: `354`,
    628: `354`,
    629: `354`,
    63: `20`,
    630: `355`,
    631: `355`,
    632: `356`,
    633: `356`,
    634: `356`,
    635: `358`,
    636: `359`,
    637: `359`,
    638: `360`,
    639: `361`,
    64: `20`,
    640: `362`,
    641: `362`,
    642: `363`,
    643: `363`,
    644: `364`,
    645: `365`,
    646: `366`,
    647: `367`,
    648: `367`,
    649: `368`,
    65: `20`,
    650: `369`,
    651: `370`,
    652: `371`,
    653: `371`,
    654: `372`,
    655: `373`,
    656: `374`,
    657: `374`,
    658: `374`,
    659: `375`,
    66: `20`,
    660: `375`,
    661: `376`,
    662: `377`,
    663: `378`,
    664: `379`,
    665: `379`,
    666: `379`,
    667: `381`,
    668: `381`,
    669: `382`,
    67: `20`,
    670: `383`,
    671: `384`,
    672: `386`,
    673: `386`,
    674: `386`,
    675: `388`,
    676: `388`,
    677: `388`,
    678: `388`,
    679: `388`,
    68: `22`,
    680: `388`,
    681: `388`,
    682: `388`,
    683: `388`,
    684: `388`,
    685: `388`,
    686: `388`,
    687: `388`,
    688: `388`,
    689: `388`,
    69: `24`,
    690: `388`,
    691: `388`,
    692: `388`,
    693: `388`,
    694: `388`,
    695: `388`,
    696: `388`,
    697: `388`,
    698: `388`,
    699: `388`,
    7: `2`,
    70: `24`,
    700: `388`,
    701: `388`,
    702: `388`,
    703: `388`,
    704: `388`,
    705: `388`,
    706: `388`,
    707: `388`,
    708: `388`,
    709: `388`,
    71: `24`,
    710: `388`,
    711: `389`,
    712: `389`,
    713: `390`,
    714: `390`,
    715: `390`,
    716: `390`,
    717: `390`,
    718: `390`,
    719: `390`,
    72: `25`,
    720: `390`,
    721: `390`,
    722: `390`,
    723: `391`,
    724: `391`,
    725: `392`,
    726: `393`,
    727: `394`,
    728: `394`,
    729: `395`,
    73: `25`,
    730: `395`,
    731: `396`,
    732: `397`,
    733: `397`,
    734: `398`,
    735: `398`,
    736: `399`,
    737: `399`,
    738: `400`,
    739: `400`,
    74: `25`,
    740: `401`,
    741: `401`,
    742: `402`,
    743: `402`,
    744: `402`,
    745: `404`,
    746: `404`,
    747: `405`,
    748: `405`,
    749: `405`,
    75: `26`,
    750: `406`,
    751: `407`,
    752: `409`,
    753: `409`,
    754: `411`,
    755: `411`,
    756: `412`,
    757: `412`,
    758: `412`,
    759: `413`,
    76: `27`,
    760: `413`,
    761: `414`,
    762: `414`,
    763: `415`,
    764: `415`,
    765: `415`,
    766: `417`,
    767: `418`,
    768: `418`,
    769: `419`,
    77: `27`,
    770: `419`,
    771: `420`,
    772: `420`,
    773: `421`,
    774: `421`,
    775: `421`,
    776: `423`,
    777: `423`,
    778: `424`,
    779: `424`,
    78: `28`,
    780: `425`,
    781: `426`,
    782: `428`,
    783: `428`,
    784: `428`,
    785: `430`,
    786: `430`,
    787: `431`,
    788: `432`,
    789: `432`,
    79: `28`,
    790: `433`,
    791: `434`,
    792: `436`,
    793: `437`,
    794: `437`,
    795: `438`,
    796: `438`,
    797: `439`,
    798: `439`,
    799: `439`,
    8: `2`,
    80: `30`,
    800: `440`,
    801: `440`,
    802: `440`,
    803: `442`,
    804: `443`,
    805: `444`,
    806: `445`,
    807: `446`,
    808: `448`,
    809: `449`,
    81: `31`,
    810: `449`,
    811: `450`,
    812: `451`,
    813: `451`,
    814: `452`,
    815: `452`,
    816: `453`,
    817: `453`,
    818: `454`,
    819: `455`,
    82: `32`,
    820: `457`,
    821: `458`,
    822: `458`,
    823: `459`,
    824: `460`,
    825: `460`,
    826: `461`,
    827: `461`,
    828: `462`,
    829: `462`,
    83: `32`,
    830: `463`,
    831: `463`,
    832: `464`,
    833: `465`,
    834: `467`,
    835: `468`,
    836: `470`,
    837: `471`,
    838: `472`,
    839: `473`,
    84: `33`,
    840: `473`,
    841: `474`,
    842: `474`,
    843: `475`,
    844: `475`,
    845: `475`,
    846: `476`,
    847: `478`,
    848: `479`,
    849: `480`,
    85: `33`,
    850: `480`,
    851: `480`,
    852: `481`,
    853: `482`,
    854: `482`,
    855: `485`,
    856: `485`,
    857: `486`,
    858: `486`,
    859: `487`,
    86: `34`,
    860: `488`,
    861: `489`,
    862: `490`,
    863: `490`,
    864: `491`,
    865: `492`,
    866: `492`,
    867: `493`,
    868: `493`,
    869: `494`,
    87: `35`,
    870: `494`,
    871: `495`,
    872: `496`,
    873: `497`,
    874: `497`,
    875: `498`,
    876: `499`,
    877: `500`,
    878: `501`,
    879: `501`,
    88: `36`,
    880: `502`,
    881: `503`,
    882: `504`,
    883: `506`,
    884: `507`,
    885: `507`,
    886: `508`,
    887: `510`,
    888: `511`,
    889: `512`,
    89: `37`,
    890: `513`,
    891: `514`,
    892: `514`,
    893: `515`,
    894: `516`,
    895: `517`,
    896: `518`,
    897: `520`,
    898: `520`,
    899: `521`,
    9: `2`,
    90: `37`,
    900: `522`,
    901: `522`,
    902: `523`,
    903: `525`,
    904: `526`,
    905: `526`,
    906: `526`,
    907: `528`,
    908: `529`,
    909: `529`,
    91: `39`,
    910: `529`,
    911: `531`,
    912: `531`,
    913: `532`,
    914: `532`,
    915: `533`,
    916: `534`,
    917: `535`,
    918: `535`,
    919: `535`,
    92: `40`,
    920: `536`,
    921: `536`,
    922: `536`,
    923: `538`,
    924: `539`,
    925: `540`,
    926: `541`,
    927: `541`,
    928: `541`,
    929: `542`,
    93: `40`,
    930: `542`,
    931: `543`,
    932: `543`,
    933: `543`,
    934: `544`,
    935: `544`,
    936: `544`,
    937: `546`,
    938: `547`,
    939: `547`,
    94: `41`,
    940: `548`,
    95: `42`,
    96: `44`,
    97: `45`,
    98: `46`,
    99: `47`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T6","name":"v558","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v380","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v385","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v406","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v554","type":"address"},{"internalType":"uint256","name":"v555","type":"uint256"}],"name":"A_claim","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"v561","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v564","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f1962001a3338819003601f810192909216830192916001600160401b039183851083861117620004e1578160809285926040978852833981010312620004f7578251916080830183811083821117620004e1578452805183526020926200006c84830162000534565b8482019081526200008a606087850151948885019586520162000534565b906060830191825243600355865192620000a484620004fc565b60009384815287895191620000b98362000518565b8683528a51620000c981620004fc565b8781528783820152828401528a51620000e281620004fc565b87815287838201528b8401520152875194620000fe86620004fc565b6200010862000549565b8652620001146200056a565b9588810196875260ff60045416620004c957895133815283518a82015284516001600160a01b03908116828d01528351606083015286518116608083015293907f143bd7eb5dd759258158818958ac9cd9e010274ba04900f209594407b18e6cdd9060a090a1518015908115620004bc575b5015620004a45785815152858982510152858a8251015251865152346200048c5788519360a085018581108982111762000478578a5285855288850196868852838b87019288845260608801948986528260808a0198620001e66200056a565b8a52338b5251168b52518452511683525180518b8b82015191015115158c5191620002118362000518565b8983528c8301528c820152620002266200056a565b91885b600181106200042a5750508152845260018087554381558a51955184168a87015296518316858b0152516060850152511660808301525182848760a085015b8284106200040057505050505060e08152610100810181811085821117620003ec5786528051938411620003d8576002548381811c91168015620003cd575b86821014620003b957601f81116200036d575b508491601f851160011462000304579394508492919083620002f8575b50501b916000199060031b1c1916176002555b516114599081620005da8239f35b015192503880620002d7565b6002815285812093958591601f198316915b8883831062000352575050501062000338575b505050811b01600255620002ea565b015160001960f88460031b161c1916905538808062000329565b85870151885590960195948501948793509081019062000316565b60028352858320601f860160051c810191878710620003ae575b601f0160051c019084905b828110620003a2575050620002ba565b84815501849062000392565b909150819062000387565b634e487b7160e01b83526022600452602483fd5b90607f1690620002a7565b634e487b7160e01b82526041600452602482fd5b634e487b7160e01b83526041600452602483fd5b6060908b8651805183528481015185840152015115158c8201520193019101909187869162000268565b620004368183620005b1565b51620004438286620005b1565b52620004508185620005b1565b506000198114620004645760010162000229565b634e487b7160e01b8a52601160045260248afd5b634e487b7160e01b87526041600452602487fd5b885163100960cb60e01b815260096004820152602490fd5b895163100960cb60e01b815260086004820152602490fd5b9050600154143862000186565b895163100960cb60e01b815260076004820152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b03821117620004e157604052565b606081019081106001600160401b03821117620004e157604052565b51906001600160a01b0382168203620004f757565b60405190620005588262000518565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620004e1576040528260005b8281106200059a57505050565b8290620005a662000549565b81840152016200058d565b906001811015620005c35760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631094de4e146100a45780631e93b0f11461009b57806336e56ea514610092578063573b8510146100895780638323075714610080578063ab53f2c6146100775763efa73fa50361000e5761007261049b565b61000e565b506100726103e6565b506100726103c7565b506100726101d1565b50610072610177565b5061007261011b565b6060366003190112610116576100b86107c2565b604051906100c58261059d565b6004358252604036602319011261011657610106916040516100e68161059d565b6024356100f281610146565b8152604435602082015260208201526109c3565b60405160008152602090f35b0390f35b600080fd5b5034610116576000366003190112610116576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361011657565b6002111561016157565b634e487b7160e01b600052602160045260246000fd5b50346101165760203660031901126101165760606101a860043561019a81610146565b6101a26106d6565b506106f5565b604080519180516101b881610157565b8352602081015115156020840152015115156040820152f35b50602080600319360112610116576101e76107c2565b506103b16040916103a083516101fc816105c5565b600435815261020f600160005414610ca2565b61028a61022b61021d61061e565b8580825183010191016112bf565b9161024761024261023e60045460ff1690565b1590565b610cc2565b8651338152815160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a15180159081156103bb575b50610ce2565b6102943415610d02565b8281019261039b60806102a7865161013a565b936102c06102bb8a83019687519033611348565b610d22565b6102dc3360018060a01b036102d5845161013a565b1614610d42565b6103326103266102f9606084016103206103136102f9835161013a565b6001600160a01b0316600090815260056020526040902090565b805460ff19166001179055565b5161013a565b805462ff000019169055565b61034d61034761034061096d565b985161013a565b886107de565b600187850152610368610360825161013a565b8a89016107de565b436060880152015191825193845190510193888282015191015115159161038d6106c9565b958652850152151587840152565b6113c8565b6080820152600060a0820152611077565b5160008152602090f35b90506001541438610284565b5034610116576000366003190112610116576020600154604051908152f35b50346101165760008060031936011261045857805461040361061e565b906040519283918252602090604082840152835191826040850152815b83811061044157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610420565b80fd5b91909160806020604060a0840195805161047481610157565b85528280820151805182880152015115158286015201518051151560608501520151910152565b5060403660031901126101165761011260206004356104b981610146565b6104c1610794565b5061053e6104cd6107c2565b80926104d761077b565b6001600160a01b039182168152602435868201908152604051929091906104fd846105c5565b61050561077b565b9182855251169052518582510152604051906105208261059d565b600082528582019061053061077b565b8252600083525190526109c3565b01516040519182918261045b565b90600182811c9216801561057c575b602083101461056657565b634e487b7160e01b600052602260045260246000fd5b91607f169161055b565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176105b857604052565b6105c0610586565b604052565b602081019081106001600160401b038211176105b857604052565b606081019081106001600160401b038211176105b857604052565b601f909101601f19168101906001600160401b038211908210176105b857604052565b60405190600082600254916106328361054c565b8083526001938085169081156106a8575060011461065a575b50610658925003836105fb565b565b6002600090815260008051602061142d83398151915294602093509091905b81831061069057505061065893508201013861064b565b85548884018501529485019487945091830191610679565b905061065894506020925060ff191682840152151560051b8201013861064b565b60405190610658826105e0565b604051906106e3826105e0565b60006040838281528260208201520152565b906106fe6106d6565b9160018060a01b03166000908082526005602052600160ff60408420541661072581610157565b03610770576040929350815260056020522060ff60405191610746836105e0565b5481811661075381610157565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b604051906107888261059d565b60006020838281520152565b604051906107a1826105e0565b81600081526107ae61077b565b602082015260406107bd61077b565b910152565b604051906107cf8261059d565b816000815260206107bd610794565b6001600160a01b039091169052565b6040519061010082016001600160401b03811183821017610857575b6040528160008152600060208201526000604082015261082761077b565b6060820152610834610794565b6080820152600060a082015261084861077b565b60c082015260e06107bd610794565b61085f610586565b610809565b5190811515820361011657565b9080601f830112156101165760409182519261088c846105c5565b836060938484019381851161011657915b8483106108ad5750505050505090565b858383031261011657835186916108c3826105e0565b8451825260209182860151838201526108dd878701610864565b8782015281520192019161089d565b60a0818303126101165760809061091f60405193610909856105e0565b825161091481610146565b855260208301610871565b60208401520151604082015290565b5161093881610157565b90565b60405190610948826105c5565b8160005b60208110610958575050565b6020906109636106d6565b818401520161094c565b6040519060c082016001600160401b038111838210176109b6575b604052600060a0838281528260208201528260408201528260608201526109ad61093b565b60808201520152565b6109be610586565b610988565b906109cc6107ed565b916109db600460005414610d62565b6109e361061e565b916109f86020938480825183010191016108ec565b90610a10610a0b61023e60045460ff1690565b610d82565b6040805133815284516020808301919091528086015180516001600160a01b031683850152015160608201529093610abf91600191610ab091610aab91610aa691610aa1918b917f7ddbd5d29b0de07af6278be94b3eb825509da3a49edcc66e417771f0c34dde5190608090a1610a9281518015908115610c97575b50610da2565b0151516001600160a01b031690565b61013a565b6106f5565b61092e565b610ab981610157565b14610dc2565b610ac93415610de2565b6001808652610b229015158686019081527f61a00fc0c8d66472d4522d20b8f05555f4efbc697be47e49786cc09e3a8c6108610b19610b088951151590565b875190151581529081906020820190565b0390a151151590565b15610bee57836106589560e072151a19481c995cdd5b1d081cdd58d8d9591959606a1b918260a082015260c0810192835152610b618484510160019052565b019060008251525182825101527fcc58a3b21869856c81549bfa8a52c8a26afe0a3200ee153cada2d0208e4e82d2610b9f825187519182918261045b565b0390a151910152610bae61096d565b92610bc2610bbc835161013a565b856107de565b600081850152610bd4338486016107de565b4360608501528101516080840152015160a0820152611077565b83856080856106589801916e4661696c656420746f20636c61696d60881b83526060810192610c1e845160019052565b5184845101520190610c31825160019052565b5185825101527f64b810d24858b0c15d2290ca20d6fabb92b38493217c25ad8b336e76a99d8e11610c68825187519182918261045b565b0390a151910152610c7761096d565b92610c85610bbc835161013a565b600184820152610bd4338486016107de565b905088541438610a8c565b15610ca957565b60405163100960cb60e01b8152600a6004820152602490fd5b15610cc957565b60405163100960cb60e01b8152600b6004820152602490fd5b15610ce957565b60405163100960cb60e01b8152600c6004820152602490fd5b15610d0957565b60405163100960cb60e01b8152600d6004820152602490fd5b15610d2957565b60405163100960cb60e01b8152600e6004820152602490fd5b15610d4957565b60405163100960cb60e01b8152600f6004820152602490fd5b15610d6957565b60405163100960cb60e01b815260106004820152602490fd5b15610d8957565b60405163100960cb60e01b815260116004820152602490fd5b15610da957565b60405163100960cb60e01b815260126004820152602490fd5b15610dc957565b60405163100960cb60e01b815260136004820152602490fd5b15610de957565b60405163100960cb60e01b815260146004820152602490fd5b906001811015610e135760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b818110610e41575050565b60008155600101610e36565b610e5860025461054c565b80610e605750565b601f8111600114610e7357506000600255565b6002600052610eb890601f0160051c60008051602061142d833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610e36565b6000602081208160025555565b60405190610ed2826105e0565b6000604083828152610ee261093b565b60208201520152565b81516001600160a01b0316815260208083015160a0830194939160008185015b60018210610f23575050505060406080910151910152565b826060600192865180518252838101518483015260408091015115159082015201940191019092610f0b565b90601f8211610f5c575050565b6106589160026000526020600020906020601f840160051c83019310610f8a575b601f0160051c0190610e36565b9091508190610f7d565b80519091906001600160401b03811161106a575b610fbc81610fb760025461054c565b610f4f565b602080601f8311600114610ff85750819293600092610fed575b50508160011b916000199060031b1c191617600255565b015190503880610fd6565b6002600052601f1983169490919060008051602061142d833981519152926000905b878210611052575050836001959610611039575b505050811b01600255565b015160001960f88460031b161c1916905538808061102e565b8060018596829496860151815501950193019061101a565b611072610586565b610fa8565b6020810151156110ef576110dc6110ea6106589260a0611095610ec5565b916110a96110a3825161013a565b846107de565b60808101516020840152015160408201526110c46004600055565b6110cd43600155565b60405192839160208301610eeb565b03601f1981018352826105fb565b610f94565b600080808360a061112f610aa161110785985161013a565b6103206040860191611119835161013a565b906080880151515191600180891b03169061116e565b91015190828215611165575bf115611158575b600080556111506000600155565b610658610e4d565b611160610e29565b611142565b506108fc61113b565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526111ea93600093849392849190608081016001600160401b038111828210176111f1575b6040525193165af16111da6111d36111fe565b809261125f565b506020808251830101910161124b565b1561011657565b6111f9610586565b6111c0565b3d15611246573d906001600160401b038211611239575b6040519161122d601f8201601f1916602001846105fb565b82523d6000602084013e565b611241610586565b611215565b606090565b908160209103126101165761093890610864565b156112675790565b80511561127657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156112975790565b8051156112a657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b9060e0828203126101165760405191611333919060809060a085016001600160401b0381118682101761133b575b60405280516112fb81610146565b8552602081015161130b81610146565b602086015260408101516040860152606081015161132881610146565b606086015201610871565b608082015290565b611343610586565b6112ed565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610938936000938493909284919060a081016001600160401b038111828210176113bb575b6040525193165af16111da6113b46111fe565b809261128f565b6113c3610586565b6113a1565b91906113d261093b565b926000805b600181106113e6575050508252565b6113f08184610e02565b516113fb8288610e02565b526114068187610e02565b506000198114611418576001016113d7565b634e487b7160e01b82526011600452602482fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6707,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './token.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './token.rsh:144:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './token.rsh:74:60:after expr stmt semicolon',
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
  "A_claim": A_claim,
  "Alice": Alice
  };
export const _APIs = {
  A: {
    claim: A_claim
    }
  };
