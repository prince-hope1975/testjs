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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amount: ctc0,
    creator: ctc1,
    creatorAddress: ctc2,
    depositAddress: ctc2,
    token: ctc5
    });
  return {
    E: {
      done: [ctc6],
      notify: [ctc6]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const map0_ctc = ctc2;
  
  const map1_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      3: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    amount: ctc4,
    creator: ctc5,
    creatorAddress: ctc1,
    depositAddress: ctc1,
    token: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    claimed0_37: ctc9,
    created0_37: ctc9
    });
  
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
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:113:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v244, time: v243, didSend: v23, from: v242 } = txn1;
      
      ;
      const v245 = await ctc.getContractInfo();
      
      const v247 = v243;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
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
  const {data: [], secs: v244, time: v243, didSend: v23, from: v242 } = txn1;
  ;
  const v245 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.contractInfo(v245), {
    at: './index.rsh:117:26:application',
    fs: ['at ./index.rsh:117:26:application call to [unknown function] (defined at: ./index.rsh:117:26:function exp)', 'at ./index.rsh:117:26:application call to "liftedInteract" (defined at: ./index.rsh:117:26:application)'],
    msg: 'contractInfo',
    who: 'Alice'
    });
  
  let v247 = v243;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v316], secs: v318, time: v317, didSend: v170, from: v315 } = txn3;
    switch (v316[0]) {
      case 'claimed0_37': {
        const v319 = v316[1];
        undefined /* setApiDetails */;
        ;
        const v334 = v319[stdlib.checkedBigNumberify('./index.rsh:139:10:spread', stdlib.UInt_max, '0')];
        null;
        const v343 = null;
        await txn3.getOutput('claimed', 'v343', ctc0, v343);
        const cv247 = v317;
        
        v247 = cv247;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'created0_37': {
        const v385 = v316[1];
        undefined /* setApiDetails */;
        ;
        const v425 = v385[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '0')];
        const v428 = v425.creator;
        const v430 = v425.depositAddress;
        null;
        await stdlib.mapSet(map0, ctc5, v428, ctc1, v430);
        const v436 = null;
        await txn3.getOutput('created', 'v436', ctc0, v436);
        const cv247 = v317;
        
        v247 = cv247;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _claimed3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimed3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimed3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    amount: ctc4,
    creator: ctc5,
    creatorAddress: ctc1,
    depositAddress: ctc1,
    token: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    claimed0_37: ctc9,
    created0_37: ctc9
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
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v281 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:139:33:application call to [unknown function] (defined at: ./index.rsh:139:33:function exp)', 'at ./index.rsh:123:28:application call to "runclaimed0_37" (defined at: ./index.rsh:139:10:function exp)', 'at ./index.rsh:123:28:application call to [unknown function] (defined at: ./index.rsh:123:28:function exp)'],
    msg: 'in',
    who: 'claimed'
    });
  const v303 = ['claimed0_37', v281];
  
  const txn1 = await (ctc.sendrecv({
    args: [v303],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:142:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v316], secs: v318, time: v317, didSend: v170, from: v315 } = txn1;
      
      switch (v316[0]) {
        case 'claimed0_37': {
          const v319 = v316[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimed"
            });
          ;
          const v334 = v319[stdlib.checkedBigNumberify('./index.rsh:139:10:spread', stdlib.UInt_max, '0')];
          null;
          const v343 = null;
          const v344 = await txn1.getOutput('claimed', 'v343', ctc0, v343);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'created0_37': {
          const v385 = v316[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v316], secs: v318, time: v317, didSend: v170, from: v315 } = txn1;
  switch (v316[0]) {
    case 'claimed0_37': {
      const v319 = v316[1];
      undefined /* setApiDetails */;
      ;
      const v334 = v319[stdlib.checkedBigNumberify('./index.rsh:139:10:spread', stdlib.UInt_max, '0')];
      null;
      const v343 = null;
      const v344 = await txn1.getOutput('claimed', 'v343', ctc0, v343);
      if (v170) {
        stdlib.protect(ctc0, await interact.out(v319, v344), {
          at: './index.rsh:139:11:application',
          fs: ['at ./index.rsh:139:11:application call to [unknown function] (defined at: ./index.rsh:139:11:function exp)', 'at ./index.rsh:145:14:application call to "ret" (defined at: ./index.rsh:143:15:function exp)', 'at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:15:function exp)'],
          msg: 'out',
          who: 'claimed'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'created0_37': {
      const v385 = v316[1];
      return;
      break;
      }
    }
  
  
  };
export async function _created3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _created3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _created3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    amount: ctc4,
    creator: ctc5,
    creatorAddress: ctc1,
    depositAddress: ctc1,
    token: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    claimed0_37: ctc9,
    created0_37: ctc9
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
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v255 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:126:35:application call to [unknown function] (defined at: ./index.rsh:126:35:function exp)', 'at ./index.rsh:123:28:application call to "runcreated0_37" (defined at: ./index.rsh:126:10:function exp)', 'at ./index.rsh:123:28:application call to [unknown function] (defined at: ./index.rsh:123:28:function exp)'],
    msg: 'in',
    who: 'created'
    });
  const v277 = ['created0_37', v255];
  
  const txn1 = await (ctc.sendrecv({
    args: [v277],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v316], secs: v318, time: v317, didSend: v170, from: v315 } = txn1;
      
      switch (v316[0]) {
        case 'claimed0_37': {
          const v319 = v316[1];
          
          break;
          }
        case 'created0_37': {
          const v385 = v316[1];
          sim_r.txns.push({
            kind: 'api',
            who: "created"
            });
          ;
          const v425 = v385[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '0')];
          const v428 = v425.creator;
          const v430 = v425.depositAddress;
          null;
          await stdlib.simMapSet(sim_r, 0, ctc5, v428, ctc1, v430);
          const v436 = null;
          const v437 = await txn1.getOutput('created', 'v436', ctc0, v436);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v316], secs: v318, time: v317, didSend: v170, from: v315 } = txn1;
  switch (v316[0]) {
    case 'claimed0_37': {
      const v319 = v316[1];
      return;
      break;
      }
    case 'created0_37': {
      const v385 = v316[1];
      undefined /* setApiDetails */;
      ;
      const v425 = v385[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '0')];
      const v428 = v425.creator;
      const v430 = v425.depositAddress;
      null;
      await stdlib.mapSet(map0, ctc5, v428, ctc1, v430);
      const v436 = null;
      const v437 = await txn1.getOutput('created', 'v436', ctc0, v436);
      if (v170) {
        stdlib.protect(ctc0, await interact.out(v385, v437), {
          at: './index.rsh:126:11:application',
          fs: ['at ./index.rsh:126:11:application call to [unknown function] (defined at: ./index.rsh:126:11:function exp)', 'at ./index.rsh:134:14:application call to "ret" (defined at: ./index.rsh:130:15:function exp)', 'at ./index.rsh:130:15:application call to [unknown function] (defined at: ./index.rsh:130:15:function exp)'],
          msg: 'out',
          who: 'created'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function claimed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _claimed3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function created(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for created expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for created expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _created3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[89])))void`, `claimed((uint64,uint64,address,address,(byte,byte[8])))void`, `created((uint64,uint64,address,address,(byte,byte[8])))void`],
    pure: [],
    sigs: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[89])))void`, `claimed((uint64,uint64,address,address,(byte,byte[8])))void`, `created((uint64,uint64,address,address,(byte,byte[8])))void`]
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAyYDAASZIrWgAQAxGEEBPShkSSJbNQEkWzUCKIIEBESIZGMEgjI0VQTBlK2ZBPbXMYc2GgCOBAEDATsA8QEzADQNVwFZNQspNAtQsCg1C4AIAAAAAAAAAVc0C1CwNAs1BDIGNQ4oJTIGNQI1AUgoNAEWNAIWUGcxGSISRIgBYzQDQAAKgAQVH3x1NARQsCNDNA1XAVk1Cyk0C1CwgdSTASo0C1cICFA0C1cwIIgBVSg1C4AIAAAAAAAAAbQ0C1CwNAs1BDIGNQ5C/5okryo0C1BQNQslNAESRDQLIls1DDQLVwhaNQ2ABM0zZwU0DBZQNA1QsDQMiAD1NA0iVY0CAJAAk0L/OSSvgAEBNAtQUDULQv/ANAsXNQyABILEYf40DBZQsDQMiADFMgY1DkL/NYgAq4GgjQaIAL42GgE1C0L/0ogAmTYaATULQv+HIjE0EkQjMTUSRCIxNhJEIjE3EkSIAHooIiJC/v8xGSISREL/EjYaATULQv9RNhoBNQtC/4RITL9IiSKyASOyELIHsgiziUL+qkL+90iJTAlJNQYyCYgAbYkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIkxGYEFEkSIAA8iMgoyCYgAI0L+oSM1A4k0BjQHSg9B/7BC/7hJIhJMNAISEUSJNAYINQaJsbIJQv+DTEm9QP94SwOI/+lC/3CxQv9x`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `37`,
    101: `38`,
    102: `38`,
    103: `39`,
    104: `39`,
    105: `40`,
    106: `40`,
    107: `43`,
    108: `44`,
    109: `45`,
    11: `2`,
    110: `45`,
    111: `47`,
    112: `47`,
    113: `48`,
    114: `48`,
    115: `49`,
    116: `50`,
    117: `51`,
    118: `51`,
    119: `52`,
    12: `2`,
    120: `53`,
    121: `53`,
    122: `54`,
    123: `55`,
    124: `56`,
    125: `57`,
    126: `57`,
    127: `58`,
    128: `59`,
    129: `60`,
    13: `2`,
    130: `62`,
    131: `62`,
    132: `62`,
    133: `64`,
    134: `64`,
    135: `65`,
    136: `65`,
    137: `65`,
    138: `67`,
    139: `67`,
    14: `2`,
    140: `67`,
    141: `67`,
    142: `67`,
    143: `67`,
    144: `68`,
    145: `68`,
    146: `69`,
    147: `70`,
    148: `72`,
    149: `73`,
    15: `2`,
    150: `75`,
    151: `75`,
    152: `76`,
    153: `76`,
    154: `76`,
    155: `77`,
    156: `77`,
    157: `78`,
    158: `79`,
    159: `79`,
    16: `2`,
    160: `80`,
    161: `81`,
    162: `84`,
    163: `84`,
    164: `84`,
    165: `84`,
    166: `85`,
    167: `86`,
    168: `86`,
    169: `87`,
    17: `4`,
    170: `87`,
    171: `87`,
    172: `88`,
    173: `89`,
    174: `89`,
    175: `90`,
    176: `90`,
    177: `90`,
    178: `91`,
    179: `91`,
    18: `4`,
    180: `91`,
    181: `92`,
    182: `93`,
    183: `93`,
    184: `94`,
    185: `94`,
    186: `94`,
    187: `94`,
    188: `94`,
    189: `94`,
    19: `5`,
    190: `94`,
    191: `94`,
    192: `94`,
    193: `94`,
    194: `95`,
    195: `95`,
    196: `96`,
    197: `97`,
    198: `98`,
    199: `98`,
    2: `2`,
    20: `5`,
    200: `99`,
    201: `99`,
    202: `100`,
    203: `100`,
    204: `101`,
    205: `101`,
    206: `102`,
    207: `102`,
    208: `102`,
    209: `104`,
    21: `5`,
    210: `105`,
    211: `106`,
    212: `107`,
    213: `107`,
    214: `108`,
    215: `109`,
    216: `110`,
    217: `110`,
    218: `112`,
    219: `113`,
    22: `6`,
    220: `113`,
    221: `114`,
    222: `115`,
    223: `117`,
    224: `117`,
    225: `118`,
    226: `119`,
    227: `120`,
    228: `120`,
    229: `121`,
    23: `7`,
    230: `121`,
    231: `122`,
    232: `122`,
    233: `122`,
    234: `123`,
    235: `123`,
    236: `124`,
    237: `124`,
    238: `124`,
    239: `124`,
    24: `8`,
    240: `124`,
    241: `124`,
    242: `125`,
    243: `125`,
    244: `126`,
    245: `127`,
    246: `128`,
    247: `128`,
    248: `129`,
    249: `130`,
    25: `9`,
    250: `132`,
    251: `132`,
    252: `133`,
    253: `133`,
    254: `133`,
    255: `134`,
    256: `134`,
    257: `135`,
    258: `136`,
    259: `137`,
    26: `10`,
    260: `137`,
    261: `137`,
    262: `137`,
    263: `137`,
    264: `137`,
    265: `138`,
    266: `138`,
    267: `138`,
    268: `140`,
    269: `141`,
    27: `11`,
    270: `142`,
    271: `142`,
    272: `142`,
    273: `143`,
    274: `143`,
    275: `144`,
    276: `145`,
    277: `146`,
    278: `146`,
    279: `147`,
    28: `11`,
    280: `147`,
    281: `147`,
    282: `149`,
    283: `149`,
    284: `150`,
    285: `151`,
    286: `151`,
    287: `152`,
    288: `152`,
    289: `152`,
    29: `12`,
    290: `152`,
    291: `152`,
    292: `152`,
    293: `153`,
    294: `153`,
    295: `154`,
    296: `155`,
    297: `156`,
    298: `158`,
    299: `158`,
    3: `2`,
    30: `13`,
    300: `159`,
    301: `159`,
    302: `159`,
    303: `160`,
    304: `160`,
    305: `161`,
    306: `161`,
    307: `162`,
    308: `162`,
    309: `162`,
    31: `14`,
    310: `164`,
    311: `164`,
    312: `164`,
    313: `165`,
    314: `165`,
    315: `165`,
    316: `165`,
    317: `166`,
    318: `166`,
    319: `166`,
    32: `14`,
    320: `167`,
    321: `167`,
    322: `167`,
    323: `168`,
    324: `168`,
    325: `169`,
    326: `169`,
    327: `169`,
    328: `171`,
    329: `171`,
    33: `15`,
    330: `171`,
    331: `172`,
    332: `172`,
    333: `172`,
    334: `173`,
    335: `173`,
    336: `174`,
    337: `174`,
    338: `174`,
    339: `176`,
    34: `17`,
    340: `177`,
    341: `177`,
    342: `178`,
    343: `179`,
    344: `180`,
    345: `181`,
    346: `181`,
    347: `182`,
    348: `183`,
    349: `184`,
    35: `17`,
    350: `185`,
    351: `185`,
    352: `186`,
    353: `187`,
    354: `188`,
    355: `189`,
    356: `189`,
    357: `190`,
    358: `191`,
    359: `192`,
    36: `17`,
    360: `192`,
    361: `192`,
    362: `193`,
    363: `194`,
    364: `195`,
    365: `196`,
    366: `196`,
    367: `196`,
    368: `198`,
    369: `198`,
    37: `17`,
    370: `199`,
    371: `200`,
    372: `201`,
    373: `203`,
    374: `203`,
    375: `203`,
    376: `205`,
    377: `205`,
    378: `205`,
    379: `206`,
    38: `17`,
    380: `206`,
    381: `207`,
    382: `207`,
    383: `207`,
    384: `209`,
    385: `209`,
    386: `209`,
    387: `210`,
    388: `210`,
    389: `211`,
    39: `17`,
    390: `211`,
    391: `211`,
    392: `213`,
    393: `214`,
    394: `215`,
    395: `216`,
    396: `217`,
    397: `219`,
    398: `220`,
    399: `220`,
    4: `2`,
    40: `17`,
    400: `221`,
    401: `222`,
    402: `222`,
    403: `223`,
    404: `223`,
    405: `224`,
    406: `224`,
    407: `225`,
    408: `226`,
    409: `228`,
    41: `17`,
    410: `228`,
    411: `228`,
    412: `230`,
    413: `230`,
    414: `230`,
    415: `232`,
    416: `233`,
    417: `235`,
    418: `236`,
    419: `237`,
    42: `17`,
    420: `238`,
    421: `238`,
    422: `239`,
    423: `239`,
    424: `240`,
    425: `240`,
    426: `240`,
    427: `241`,
    428: `243`,
    429: `244`,
    43: `17`,
    430: `245`,
    431: `245`,
    432: `245`,
    433: `246`,
    434: `247`,
    435: `247`,
    436: `250`,
    437: `250`,
    438: `251`,
    439: `251`,
    44: `17`,
    440: `252`,
    441: `253`,
    442: `254`,
    443: `255`,
    444: `255`,
    445: `256`,
    446: `257`,
    447: `257`,
    448: `258`,
    449: `258`,
    45: `17`,
    450: `259`,
    451: `259`,
    452: `260`,
    453: `261`,
    454: `262`,
    455: `262`,
    456: `263`,
    457: `264`,
    458: `265`,
    459: `266`,
    46: `17`,
    460: `266`,
    461: `267`,
    462: `268`,
    463: `269`,
    464: `271`,
    465: `271`,
    466: `272`,
    467: `272`,
    468: `273`,
    469: `274`,
    47: `17`,
    470: `276`,
    471: `276`,
    472: `276`,
    473: `278`,
    474: `279`,
    475: `279`,
    476: `280`,
    477: `280`,
    478: `281`,
    479: `281`,
    48: `17`,
    480: `281`,
    481: `282`,
    482: `282`,
    483: `282`,
    484: `284`,
    485: `285`,
    486: `285`,
    487: `286`,
    488: `288`,
    489: `288`,
    49: `17`,
    490: `289`,
    491: `289`,
    492: `290`,
    493: `291`,
    494: `292`,
    495: `292`,
    496: `292`,
    497: `293`,
    498: `293`,
    499: `293`,
    5: `2`,
    50: `17`,
    500: `295`,
    501: `296`,
    502: `297`,
    503: `298`,
    504: `299`,
    505: `299`,
    506: `300`,
    507: `301`,
    508: `302`,
    509: `303`,
    51: `17`,
    510: `305`,
    511: `305`,
    512: `306`,
    513: `307`,
    514: `307`,
    515: `308`,
    516: `310`,
    517: `311`,
    518: `311`,
    519: `312`,
    52: `17`,
    520: `312`,
    521: `312`,
    522: `314`,
    523: `315`,
    524: `316`,
    525: `317`,
    526: `317`,
    527: `317`,
    528: `318`,
    529: `318`,
    53: `17`,
    530: `319`,
    531: `319`,
    532: `319`,
    533: `320`,
    534: `320`,
    535: `320`,
    536: `322`,
    537: `323`,
    54: `17`,
    55: `17`,
    56: `18`,
    57: `18`,
    58: `18`,
    59: `19`,
    6: `2`,
    60: `19`,
    61: `19`,
    62: `19`,
    63: `19`,
    64: `19`,
    65: `19`,
    66: `19`,
    67: `19`,
    68: `19`,
    69: `21`,
    7: `2`,
    70: `23`,
    71: `23`,
    72: `24`,
    73: `24`,
    74: `24`,
    75: `25`,
    76: `25`,
    77: `26`,
    78: `27`,
    79: `27`,
    8: `2`,
    80: `28`,
    81: `29`,
    82: `31`,
    83: `32`,
    84: `32`,
    85: `33`,
    86: `33`,
    87: `33`,
    88: `33`,
    89: `33`,
    9: `2`,
    90: `33`,
    91: `33`,
    92: `33`,
    93: `33`,
    94: `33`,
    95: `34`,
    96: `34`,
    97: `35`,
    98: `36`,
    99: `37`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v567","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"address payable","name":"_depositAddress","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"_token","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"E_notify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"address payable","name":"_depositAddress","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"_token","type":"tuple"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_claimed0_37","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"address payable","name":"_depositAddress","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"_token","type":"tuple"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_created0_37","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v343","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v436","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"address payable","name":"_depositAddress","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"_token","type":"tuple"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_claimed0_37","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"address payable","name":"_depositAddress","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"_token","type":"tuple"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_created0_37","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v570","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"address payable","name":"_depositAddress","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"_token","type":"tuple"}],"internalType":"struct T3","name":"v558","type":"tuple"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"address payable","name":"_depositAddress","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"_token","type":"tuple"}],"internalType":"struct T3","name":"v564","type":"tuple"}],"name":"created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200114f90813803601f1980601f83011683019360018060401b039284861084871117620002c15780859260409788528339602094859181010312620002d75784519084820182811085821117620002c1578652518152436003558451606081019080821085831117620002c1578691825260009181838093528288820152015260049160ff835416620002aa577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a15180159081156200029d575b50156200028657346200026f57600381556001944386558651928282850152818452878401848110878211176200025c57885283519586116200024957600254908782811c921680156200023e575b838310146200022b5750601f8111620001df575b508093601f861160011462000177575050918394918493946200016b575b50501b916000199060031b1c1916176002555b51610e729081620002dd8239f35b0151925038806200014a565b600283528183209493928692918316915b88838310620001c45750505010620001aa575b505050811b016002556200015d565b015160001960f88460031b161c191690553880806200019b565b85870151885590960195948501948793509081019062000188565b60028352818320601f870160051c81019183881062000220575b601f0160051c019087905b828110620002145750506200012c565b84815501879062000204565b9091508190620001f9565b634e487b7160e01b845260229052602483fd5b91607f169162000118565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000c9565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe604060808152600436101561001a575b50361561001857005b005b600090813560e01c80630fbec8631461052f5780631e93b0f11461051157806336e56ea5146104445780633f21b257146102425780638323075714610224578063ab53f2c6146101b9578063c5d86f6f146100e35763d0bc8a281461007f575061000f565b60e03660031901126100df57602080926100d461009a610729565b80926100a536610748565b6100ad610e07565b9081515285810190828251525186825101526100c7610e29565b91825251858201526108b0565b015115159051908152f35b5080fd5b50346100df57602090816003193601126101b5576004356001600160a01b038116908190036101b15781606094819261011a610729565b50610123610729565b81835260068752600160ff858520541661013c81610586565b036101a157508152600685522060ff825191610157836105e0565b5481811661016481610586565b8352818160081c1615158684015260101c161515828201525b815193815161018b81610586565b8552808201511515908501520151151590820152f35b809350829150528482015261017d565b8380fd5b8280fd5b50346100df57816003193601126100df5781546101d4610662565b91805193849283526020828185015284518093850152815b83811061020d57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016101ec565b50346100df57816003193601126100df576020906001549051908152f35b506102003660031901126100df57610258610729565b9181519161026583610611565b60043583526101e03660231901126100df57805193606085016001600160401b0381118682101761043057825260243560028110156101b157855260e03660431901126101b5578151936102b885610647565b8251956102c48761062c565b60443587526001600160a01b03966064359690888816880361042857602097888201526084358981168103610420578682015260a4358981168103610420576060820152606060c31936011261042857855161031f816105e0565b60c435600281101561042457815260e43580151581036104245789820152610104358a811681036104245781880152608082015281528187015260e03661012319011261042c57835161037181610647565b845161037c8161062c565b6101243581526101443589811681036104205788820152610164358981168103610420578682015261018435898116810361042057606082015260606101a3193601126104285785516103ce816105e0565b6101a43560028110156104245781526101c435801515810361042457898201526101e435998a168a03610420578697989961041a978201526080820152815285820152868201526108b0565b51908152f35b8780fd5b8880fd5b8680fd5b8480fd5b634e487b7160e01b84526041600452602484fd5b50346100df57602090816003193601126101b5576001600160a01b036004358181169081900361042c5782606095819261047c610729565b50610485610729565b81835260058852600160ff858520541661049e81610586565b03610501575081526005865220828251916104b8836105e0565b5460ff81166104c681610586565b835260ff8160081c1615158784015260101c16828201525b81519481516104ec81610586565b86528082015115159086015201511690820152f35b80935082915052858201526104de565b50346100df57816003193601126100df576020906003549051908152f35b5060e03660031901126100df57806020926100d461054b610729565b809261055636610748565b61055e610e07565b90815152878101906001825152518682510152610579610e29565b91825251878201526108b0565b6002111561059057565b634e487b7160e01b600052602160045260246000fd5b90600182811c921680156105d6575b60208310146105c057565b634e487b7160e01b600052602260045260246000fd5b91607f16916105b5565b606081019081106001600160401b038211176105fb57604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176105fb57604052565b60a081019081106001600160401b038211176105fb57604052565b602081019081106001600160401b038211176105fb57604052565b604051906000600254610674816105a6565b80855260019180831690811561070a57506001146106b2575b5050829003601f01601f191682016001600160401b038111838210176105fb57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106106f65750505050830101388061068d565b8054888601830152930192849082016106e1565b919250506020925060ff191682850152151560051b830101388061068d565b60405190610736826105e0565b60006040838281528260208201520152565b9060e06003198301126107f5576040516107618161062c565b60043581529182906001600160a01b039060243582811681036107f557602084015260443582811681036107f55760408401526064359082821682036107f5576060918285015260831901126107f557604051916107be836105e0565b60843560028110156107f557835260a43580151581036107f557602084015260c43591821682036107f55760809160408401520152565b600080fd5b6040516001600160401b0391906020810190838211818310176105fb57809360c0820190838210908211176105fb576040526000825260006040820152600060608201526000608082015261084d610729565b60a082015252565b60c090805183526040608060018060a01b0392836020820151166020870152838382015116838701528360608201511660608701520151805161089781610586565b60808601526020810151151560a0860152015116910152565b60408051906108be82610611565b6108c66107fa565b8252602093848301906108d76107fa565b825260039360009285845403610dc1576108ef610662565b888180518101031261042c57880151801515036101b15760049660ff885416610daa579088917faa9651ffa687eaa5edb3b79be2e0d899fc03c99a0a34b4c2997a0146fb30b88a610220885133815283518682015261097d8a8786019761096f895191825161095d81610586565b84870152820151606086019051610855565b015161014083019051610855565ba1518015908115610d9e575b5015610d875790889181515161099e81610586565b6109a781610586565b610b545750510151815234610b3d578291600080516020610e4683398151915260e0899351516109d988518092610855565ba17f2be37cd4d1babf8837a9e40ff8c09939a6fbf5513bb2a46fbc982c7bb26d7a12828651858152a10152828155600191438355518186820152858152610a1f81610611565b8051946001600160401b038611610b2a5750610a3c6002546105a6565b601f8111610ae3575b508591601f8611600114610a7d579495508592919083610a72575b50501b92600019911b1c191617600255565b015193503880610a60565b6002815286812093969394938691601f198316915b89838310610ac95750505010610aaf575b50505050811b01600255565b01519060f884600019921b161c1916905538808080610aa3565b858701518955909701969485019488935090810190610a92565b60028352868320601f870160051c810191888810610b20575b601f0160051c019084905b828110610b15575050610a45565b848155018490610b07565b9091508190610afc565b634e487b7160e01b835260419052602482fd5b835163100960cb60e01b8152600d81880152602490fd5b815151969493509150610b6686610586565b610b6f86610586565b6001809614610b84575b505050505050505050565b51830151815234610d7057839181600080516020610e4683398151915260e086945151610bb386518092610855565ba18051518a01516001600160a01b03908116855260058b52838520805460ff1916891790559051516060810151908b01519091168452828420805462010000600160b01b03191660109290921b62010000600160b01b031691909117905581518381527f9865049d10e59a454d4b128329a1d773eae7d24b99c015890a0ec7ca88ed8251908a90a10152838255438355518186820152858152610c5581610611565b8051946001600160401b038611610b2a5750610c726002546105a6565b601f8111610d29575b508591601f8611600114610cc0579495508592919083610cb5575b50501b92600019911b1c1916176002555b388080808080808080610b79565b015193503880610c96565b6002815286812093969394938691601f198316915b89838310610d0f5750505010610cf5575b50505050811b01600255610ca7565b01519060f884600019921b161c1916905538808080610ce6565b858701518955909701969485019488935090810190610cd5565b60028352868320601f870160051c810191888810610d66575b601f0160051c019084905b828110610d5b575050610c7b565b848155018490610d4d565b9091508190610d42565b825163100960cb60e01b8152600e81890152602490fd5b855163100960cb60e01b8152600c818a0152602490fd5b90506001541438610989565b855163100960cb60e01b8152600b818a0152602490fd5b845163100960cb60e01b8152600a6004820152602490fd5b60405190610de6826105e0565b8160008152610df36107fa565b60208201526040610e026107fa565b910152565b60405190610e1482610611565b81610e1d6107fa565b81526020610e02610dd9565b60405190610e3682610611565b81600081526020610e02610dd956fefd641a5382c3654a3f5eb2bbdc4ee427c6e651797b9c3500c6c2c7a53f73460ba164736f6c6343000811000a`,
  BytecodeLen: 4431,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:152:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:123:28:after expr stmt semicolon',
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
  "Alice": Alice,
  "claimed": claimed,
  "created": created
  };
export const _APIs = {
  claimed: claimed,
  created: created
  };
