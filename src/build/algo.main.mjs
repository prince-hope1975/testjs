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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc1
    });
  const map0_ctc = ctc2;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0]
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
export async function _A_claim3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_claim3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_claim3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc2]);
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    message: ctc5,
    success: ctc6
    });
  const ctc8 = stdlib.T_Object({
    errored: ctc6,
    message: ctc5
    });
  const ctc9 = stdlib.T_Data({
    data: ctc7,
    error: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v259] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2]);
  const v264 = stdlib.protect(ctc4, await interact.in(), {
    at: './algo.rsh:1:23:application',
    fs: ['at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)', 'at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)'],
    msg: 'in',
    who: 'A_claim'
    });
  const v265 = v264[stdlib.checkedBigNumberify('./algo.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v269 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v265, ctc0), null);
  const v270 = {
    None: 0,
    Some: 1
    }[v269[0]];
  const v271 = stdlib.eq(v270, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v271, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./algo.rsh:77:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)', 'at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)'],
    msg: 'Forbidden',
    who: 'A_claim'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v259, v264],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./algo.rsh:79:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v284], secs: v286, time: v285, didSend: v172, from: v283 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "A_claim"
        });
      const v288 = v284[stdlib.checkedBigNumberify('./algo.rsh:75:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v288, ctc0), null);
      ;
      const v302 = 'The User Claimed succeded       ';
      const v303 = {
        message: v302,
        success: true
        };
      const v304 = ['data', v303];
      const v305 = await txn1.getOutput('A_claim', 'v304', ctc9, v304);
      
      sim_r.txns.push({
        kind: 'from',
        to: v283,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v284], secs: v286, time: v285, didSend: v172, from: v283 } = txn1;
  undefined /* setApiDetails */;
  const v288 = v284[stdlib.checkedBigNumberify('./algo.rsh:75:10:spread', stdlib.UInt_max, '0')];
  const v290 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v288, ctc0), null);
  const v291 = {
    None: 0,
    Some: 1
    }[v290[0]];
  const v292 = stdlib.eq(v291, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v292, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./algo.rsh:77:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)', 'at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)'],
    msg: 'Forbidden',
    who: 'A_claim'
    });
  ;
  const v302 = 'The User Claimed succeded       ';
  const v303 = {
    message: v302,
    success: true
    };
  const v304 = ['data', v303];
  const v305 = await txn1.getOutput('A_claim', 'v304', ctc9, v304);
  if (v172) {
    stdlib.protect(ctc0, await interact.out(v284, v305), {
      at: './algo.rsh:75:11:application',
      fs: ['at ./algo.rsh:75:11:application call to [unknown function] (defined at: ./algo.rsh:75:11:function exp)', 'at ./algo.rsh:89:14:application call to "ret" (defined at: ./algo.rsh:80:15:function exp)', 'at ./algo.rsh:80:15:application call to [unknown function] (defined at: ./algo.rsh:80:15:function exp)'],
      msg: 'out',
      who: 'A_claim'
      });
    }
  else {
    }
  
  ;
  return;
  
  
  
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
  const ctc4 = stdlib.T_Object({
    addr: ctc2,
    amt: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc3]);
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    message: ctc6,
    success: ctc7
    });
  const ctc9 = stdlib.T_Object({
    errored: ctc7,
    message: ctc6
    });
  const ctc10 = stdlib.T_Data({
    data: ctc8,
    error: ctc9
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v238 = stdlib.protect(ctc4, await interact.getInfo(), {
    at: './algo.rsh:40:54:application',
    fs: ['at ./algo.rsh:39:9:application call to [unknown function] (defined at: ./algo.rsh:39:13:function exp)'],
    msg: 'getInfo',
    who: 'Alice'
    });
  const v239 = v238.addr;
  const v240 = v238.amt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v240, v239],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./algo.rsh:43:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [v240, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v244, v245], secs: v247, time: v246, didSend: v34, from: v243 } = txn1;
      
      sim_r.txns.push({
        amt: v244,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v250 = await ctc.getContractInfo();
      
      await stdlib.simMapSet(sim_r, 0, ctc2, v245, ctc0, null);
      const v253 = true;
      const v255 = v243;
      const v256 = v246;
      const v259 = v244;
      
      if (await (async () => {
        
        return v253;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v255,
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
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v244, v245], secs: v247, time: v246, didSend: v34, from: v243 } = txn1;
  ;
  const v250 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.contractInfo(v250), {
    at: './algo.rsh:46:26:application',
    fs: ['at ./algo.rsh:46:26:application call to [unknown function] (defined at: ./algo.rsh:46:26:function exp)', 'at ./algo.rsh:46:26:application call to "liftedInteract" (defined at: ./algo.rsh:46:26:application)'],
    msg: 'contractInfo',
    who: 'Alice'
    });
  
  await stdlib.mapSet(map0, ctc2, v245, ctc0, null);
  let v253 = true;
  let v255 = v243;
  let v256 = v246;
  let v259 = v244;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return v253;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v284], secs: v286, time: v285, didSend: v172, from: v283 } = txn3;
    undefined /* setApiDetails */;
    const v288 = v284[stdlib.checkedBigNumberify('./algo.rsh:75:10:spread', stdlib.UInt_max, '0')];
    const v290 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v288, ctc0), null);
    const v291 = {
      None: 0,
      Some: 1
      }[v290[0]];
    const v292 = stdlib.eq(v291, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    stdlib.assert(v292, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./algo.rsh:77:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)', 'at ./algo.rsh:75:40:application call to [unknown function] (defined at: ./algo.rsh:75:40:function exp)'],
      msg: 'Forbidden',
      who: 'Alice'
      });
    ;
    const v302 = 'The User Claimed succeded       ';
    const v303 = {
      message: v302,
      success: true
      };
    const v304 = ['data', v303];
    await txn3.getOutput('A_claim', 'v304', ctc10, v304);
    const cv253 = false;
    const cv255 = v283;
    const cv256 = v285;
    const cv259 = v259;
    
    v253 = cv253;
    v255 = cv255;
    v256 = cv256;
    v259 = cv259;
    
    txn2 = txn3;
    continue;
    
    }
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
  if (step == 3) {return _A_claim3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`A_claim(address,uint64)(byte,byte[33])`, `_reachp_0((uint64,uint64,address))void`, `_reachp_2((uint64,(address,uint64)))void`],
    pure: [],
    sigs: [`A_claim(address,uint64)(byte,byte[33])`, `_reachp_0((uint64,uint64,address))void`, `_reachp_2((uint64,(address,uint64)))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAyYCAAEAMRhBAWQoZEkiWzUBJFs1AilkggMEAssjFQQXc2TABD8XBkU2GgCOAwEeAAEBMAA2GgE2GgIXNQs1DCSvNAw0CxZQUDULJTQBEkQiWzUONAsiWzUMNAtXCCg1DYAE9i3DfTQMFlA0DVCwNAyIAZUoKCk0DVcAIFC+SRZRBwhFBE1QIlUjEkSAIgBUaGUgVXNlciBDbGFpbWVkIHN1Y2NlZGVkAAAAAAAAAAE1C4AIAAAAAAAAATA0C1CwNAs1BCIxADIGNQ81EDURNBFBAN40DhYlMgY1AjUBKUxXAAhnKDQBFjQCFlBnMRkiEkSIASQ0A0AACoAEFR98dTQEULAjQzQLIls1DDQLJFs1EjQLVxAgNQ2ABFA+Dqs0DBZQNBIWUDQNULA0DIgA2TQSiAC4gdR6KTQNUCiIAOUjMQAyBjQSNQ41DzUQNRFC/32IAJSBoI0GiAC3NhoBNQtC/6KIAII2GgE1C0L+3CIxNBJEgQIxNRJEIjE2EkQiMTcSRIgAYiSvIiJC/0wxGSISREL/ZEk1BjIKiABHQv9USEy/SIkisgEjshCyB7IIs4k0DjQQiAAsMRmBBRJEiABXMgpgMgp4CUL/ykiJTAlJNQYyCYgADYkJSUH/7kk1BogACYmxQv+9IzUDiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJIhJMNAISEUSJNAYINQaJNAY0B0oPQf+sQv+0TEm9QP92SwOI/+NC/24=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `52`,
    101: `53`,
    102: `53`,
    103: `54`,
    104: `54`,
    105: `54`,
    106: `54`,
    107: `54`,
    108: `54`,
    109: `55`,
    11: `2`,
    110: `55`,
    111: `56`,
    112: `57`,
    113: `58`,
    114: `58`,
    115: `59`,
    116: `60`,
    117: `62`,
    118: `62`,
    119: `63`,
    12: `4`,
    120: `63`,
    121: `63`,
    122: `66`,
    123: `67`,
    124: `68`,
    125: `69`,
    126: `69`,
    127: `70`,
    128: `70`,
    129: `70`,
    13: `4`,
    130: `71`,
    131: `73`,
    132: `74`,
    133: `75`,
    134: `76`,
    135: `76`,
    136: `76`,
    137: `77`,
    138: `77`,
    139: `78`,
    14: `5`,
    140: `79`,
    141: `80`,
    142: `81`,
    143: `82`,
    144: `83`,
    145: `84`,
    146: `90`,
    147: `90`,
    148: `90`,
    149: `90`,
    15: `5`,
    150: `90`,
    151: `90`,
    152: `90`,
    153: `90`,
    154: `90`,
    155: `90`,
    156: `90`,
    157: `90`,
    158: `90`,
    159: `90`,
    16: `5`,
    160: `90`,
    161: `90`,
    162: `90`,
    163: `90`,
    164: `90`,
    165: `90`,
    166: `90`,
    167: `90`,
    168: `90`,
    169: `90`,
    17: `6`,
    170: `90`,
    171: `90`,
    172: `90`,
    173: `90`,
    174: `90`,
    175: `90`,
    176: `90`,
    177: `90`,
    178: `90`,
    179: `90`,
    18: `7`,
    180: `90`,
    181: `90`,
    182: `91`,
    183: `91`,
    184: `92`,
    185: `92`,
    186: `92`,
    187: `92`,
    188: `92`,
    189: `92`,
    19: `8`,
    190: `92`,
    191: `92`,
    192: `92`,
    193: `92`,
    194: `93`,
    195: `93`,
    196: `94`,
    197: `95`,
    198: `96`,
    199: `96`,
    2: `2`,
    20: `9`,
    200: `97`,
    201: `97`,
    202: `98`,
    203: `99`,
    204: `99`,
    205: `100`,
    206: `100`,
    207: `101`,
    208: `101`,
    209: `102`,
    21: `10`,
    210: `102`,
    211: `103`,
    212: `103`,
    213: `105`,
    214: `105`,
    215: `106`,
    216: `106`,
    217: `106`,
    218: `108`,
    219: `108`,
    22: `11`,
    220: `109`,
    221: `110`,
    222: `111`,
    223: `111`,
    224: `113`,
    225: `113`,
    226: `114`,
    227: `114`,
    228: `115`,
    229: `116`,
    23: `11`,
    230: `117`,
    231: `117`,
    232: `117`,
    233: `118`,
    234: `119`,
    235: `120`,
    236: `120`,
    237: `121`,
    238: `122`,
    239: `122`,
    24: `12`,
    240: `123`,
    241: `124`,
    242: `125`,
    243: `126`,
    244: `126`,
    245: `127`,
    246: `128`,
    247: `129`,
    248: `131`,
    249: `131`,
    25: `13`,
    250: `131`,
    251: `133`,
    252: `133`,
    253: `134`,
    254: `134`,
    255: `134`,
    256: `136`,
    257: `136`,
    258: `136`,
    259: `136`,
    26: `14`,
    260: `136`,
    261: `136`,
    262: `137`,
    263: `137`,
    264: `138`,
    265: `139`,
    266: `141`,
    267: `142`,
    268: `144`,
    269: `144`,
    27: `14`,
    270: `145`,
    271: `146`,
    272: `147`,
    273: `147`,
    274: `148`,
    275: `148`,
    276: `149`,
    277: `150`,
    278: `151`,
    279: `151`,
    28: `15`,
    280: `152`,
    281: `152`,
    282: `153`,
    283: `153`,
    284: `153`,
    285: `154`,
    286: `154`,
    287: `155`,
    288: `155`,
    289: `155`,
    29: `16`,
    290: `155`,
    291: `155`,
    292: `155`,
    293: `156`,
    294: `156`,
    295: `157`,
    296: `158`,
    297: `159`,
    298: `159`,
    299: `160`,
    3: `2`,
    30: `18`,
    300: `161`,
    301: `162`,
    302: `162`,
    303: `163`,
    304: `164`,
    305: `166`,
    306: `166`,
    307: `167`,
    308: `167`,
    309: `167`,
    31: `18`,
    310: `168`,
    311: `168`,
    312: `169`,
    313: `169`,
    314: `169`,
    315: `173`,
    316: `173`,
    317: `173`,
    318: `174`,
    319: `175`,
    32: `18`,
    320: `175`,
    321: `176`,
    322: `177`,
    323: `178`,
    324: `178`,
    325: `178`,
    326: `179`,
    327: `180`,
    328: `180`,
    329: `181`,
    33: `18`,
    330: `181`,
    331: `182`,
    332: `182`,
    333: `183`,
    334: `183`,
    335: `184`,
    336: `184`,
    337: `185`,
    338: `185`,
    339: `186`,
    34: `18`,
    340: `186`,
    341: `187`,
    342: `187`,
    343: `187`,
    344: `189`,
    345: `189`,
    346: `189`,
    347: `190`,
    348: `190`,
    349: `190`,
    35: `18`,
    350: `190`,
    351: `191`,
    352: `191`,
    353: `191`,
    354: `192`,
    355: `192`,
    356: `192`,
    357: `193`,
    358: `193`,
    359: `194`,
    36: `18`,
    360: `194`,
    361: `194`,
    362: `196`,
    363: `196`,
    364: `196`,
    365: `197`,
    366: `197`,
    367: `197`,
    368: `198`,
    369: `198`,
    37: `18`,
    370: `199`,
    371: `199`,
    372: `199`,
    373: `201`,
    374: `202`,
    375: `202`,
    376: `203`,
    377: `204`,
    378: `205`,
    379: `205`,
    38: `18`,
    380: `206`,
    381: `206`,
    382: `207`,
    383: `208`,
    384: `209`,
    385: `210`,
    386: `210`,
    387: `211`,
    388: `212`,
    389: `213`,
    39: `18`,
    390: `214`,
    391: `214`,
    392: `215`,
    393: `216`,
    394: `217`,
    395: `217`,
    396: `217`,
    397: `218`,
    398: `219`,
    399: `220`,
    4: `2`,
    40: `18`,
    400: `221`,
    401: `222`,
    402: `222`,
    403: `222`,
    404: `224`,
    405: `224`,
    406: `225`,
    407: `226`,
    408: `227`,
    409: `229`,
    41: `18`,
    410: `229`,
    411: `229`,
    412: `231`,
    413: `232`,
    414: `232`,
    415: `233`,
    416: `233`,
    417: `234`,
    418: `234`,
    419: `234`,
    42: `18`,
    420: `235`,
    421: `235`,
    422: `235`,
    423: `237`,
    424: `238`,
    425: `239`,
    426: `240`,
    427: `241`,
    428: `243`,
    429: `244`,
    43: `18`,
    430: `244`,
    431: `245`,
    432: `246`,
    433: `246`,
    434: `247`,
    435: `247`,
    436: `248`,
    437: `248`,
    438: `249`,
    439: `250`,
    44: `18`,
    440: `252`,
    441: `252`,
    442: `254`,
    443: `254`,
    444: `255`,
    445: `255`,
    446: `255`,
    447: `257`,
    448: `257`,
    449: `258`,
    45: `18`,
    450: `258`,
    451: `259`,
    452: `260`,
    453: `262`,
    454: `262`,
    455: `262`,
    456: `264`,
    457: `264`,
    458: `265`,
    459: `266`,
    46: `18`,
    460: `266`,
    461: `267`,
    462: `268`,
    463: `269`,
    464: `269`,
    465: `269`,
    466: `271`,
    467: `272`,
    468: `274`,
    469: `275`,
    47: `19`,
    470: `276`,
    471: `277`,
    472: `277`,
    473: `278`,
    474: `278`,
    475: `279`,
    476: `279`,
    477: `279`,
    478: `280`,
    479: `282`,
    48: `19`,
    480: `283`,
    481: `284`,
    482: `284`,
    483: `284`,
    484: `285`,
    485: `286`,
    486: `286`,
    487: `287`,
    488: `287`,
    489: `287`,
    49: `19`,
    490: `288`,
    491: `290`,
    492: `291`,
    493: `291`,
    494: `291`,
    495: `293`,
    496: `294`,
    497: `294`,
    498: `295`,
    499: `298`,
    5: `2`,
    50: `20`,
    500: `298`,
    501: `299`,
    502: `299`,
    503: `300`,
    504: `301`,
    505: `302`,
    506: `303`,
    507: `303`,
    508: `304`,
    509: `305`,
    51: `20`,
    510: `305`,
    511: `306`,
    512: `306`,
    513: `307`,
    514: `307`,
    515: `308`,
    516: `309`,
    517: `310`,
    518: `310`,
    519: `311`,
    52: `20`,
    520: `312`,
    521: `313`,
    522: `314`,
    523: `314`,
    524: `315`,
    525: `316`,
    526: `317`,
    527: `319`,
    528: `320`,
    529: `321`,
    53: `20`,
    530: `322`,
    531: `323`,
    532: `323`,
    533: `324`,
    534: `325`,
    535: `326`,
    536: `327`,
    537: `329`,
    538: `329`,
    539: `330`,
    54: `20`,
    540: `331`,
    541: `331`,
    542: `332`,
    543: `334`,
    544: `334`,
    545: `335`,
    546: `335`,
    547: `336`,
    548: `337`,
    549: `338`,
    55: `20`,
    550: `338`,
    551: `338`,
    552: `339`,
    553: `339`,
    554: `339`,
    555: `341`,
    556: `342`,
    557: `343`,
    558: `344`,
    559: `344`,
    56: `20`,
    560: `344`,
    561: `345`,
    562: `345`,
    563: `346`,
    564: `346`,
    565: `346`,
    566: `347`,
    57: `20`,
    58: `22`,
    59: `24`,
    6: `2`,
    60: `24`,
    61: `24`,
    62: `25`,
    63: `25`,
    64: `25`,
    65: `26`,
    66: `27`,
    67: `27`,
    68: `28`,
    69: `28`,
    7: `2`,
    70: `30`,
    71: `31`,
    72: `32`,
    73: `32`,
    74: `33`,
    75: `33`,
    76: `34`,
    77: `35`,
    78: `36`,
    79: `37`,
    8: `2`,
    80: `37`,
    81: `39`,
    82: `40`,
    83: `40`,
    84: `41`,
    85: `42`,
    86: `44`,
    87: `45`,
    88: `46`,
    89: `46`,
    9: `2`,
    90: `47`,
    91: `47`,
    92: `48`,
    93: `49`,
    94: `50`,
    95: `50`,
    96: `51`,
    97: `51`,
    98: `52`,
    99: `52`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 8,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T6","name":"v386","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v304","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v382","type":"address"},{"internalType":"uint256","name":"v383","type":"uint256"}],"name":"A_claim","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v389","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062000c6a9081380391601f1980601f85011683019360018060401b0392848610848711176200039f5781606092869260409889528339810103126200039a578351926200004e84620003b5565b8051845260208082015181860190815291860151946001600160a01b03919082871687036200039a578781019687526000928380554360035588516200009481620003d1565b848152838a5191620000a683620003b5565b8683528b51620000b681620003d1565b8781528783820152828401528b51620000cf81620003d1565b87815287838201528c840152015260049160ff83541662000383577fbcb5f2f906a8f77f40e37f43863b415e6e6497c7bfad2598456ddd132e0e3db960808b5133815283518782015288518d820152848c51166060820152a151801590811562000376575b50156200035f5784513403620003485787518116845260058352888420805460ff191660019081179091559751168352878320805462ff0000191690558751936080850187811186821017620003355789526060850194848652888152338482015289439101525184528751938285018581108882111762000335578952838552518094526003835543875587519382850152818452620001d584620003d1565b83519586116200032257600254908782811c9216801562000317575b83831014620003045750601f8111620002b8575b508093601f8611600114620002505750509183949184939462000244575b50501b916000199060031b1c1916176002555b5161087c9081620003ee8239f35b01519250388062000223565b600283528183209493928692918316915b888383106200029d575050501062000283575b505050811b0160025562000236565b015160001960f88460031b161c1916905538808062000274565b85870151885590960195948501948793509081019062000261565b60028352818320601f870160051c810191838810620002f9575b601f0160051c019087905b828110620002ed57505062000205565b848155018790620002dd565b9091508190620002d2565b634e487b7160e01b845260229052602483fd5b91607f1691620001f1565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b855260418352602485fd5b885163100960cb60e01b8152600981840152602490fd5b885163100960cb60e01b8152600881840152602490fd5b9050600154143862000134565b895163100960cb60e01b8152600781850152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176200039f57604052565b604081019081106001600160401b038211176200039f5760405256fe60806040818152600436101561001c575b5050361561001a57005b005b600091823560e01c9081631e93b0f11461029d5750806336e56ea51461023a578063832307571461021c5780638fa17fd4146101a0578063ab53f2c6146101355763efa73fa5036100105780600319360112610131576004356001600160a01b038181169182900361012d5761011c61012994610097610526565b506100a0610571565b9283918651956100af87610353565b60209687810191815260243582528851936100c985610384565b8951916100d583610353565b848352848a840152828652511690525186835101528651916100f683610353565b81835286830191885161010881610353565b818152818982015283528352519052610592565b01519051918291826102d9565b0390f35b8380fd5b5080fd5b503461013157816003193601126101315781546101506103ba565b91805193849283526020828185015284518093850152815b83811061018957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610168565b50906060366003190112610219576101b6610571565b9180516101c281610353565b6004358152816023193601126102155781516101dd81610353565b6024356001600160a01b038116810361021157918161020b9360209793526044358782015286820152610592565b51908152f35b8480fd5b8280fd5b80fd5b50346101315781600319360112610131576020906001549051908152f35b503461013157602036600319011261013157600435916001600160a01b0383168303610219575061027560609261026f610481565b506104a0565b90808051928051610285816102b9565b84526020810151151560208501520151151590820152f35b8390346101315781600319360112610131576020906003548152f35b600211156102c357565b634e487b7160e01b600052602160045260246000fd5b91909160806020604060a084019580516102f2816102b9565b85528280820151805182880152015115158286015201518051151560608501520151910152565b90600182811c92168015610349575b602083101461033357565b634e487b7160e01b600052602260045260246000fd5b91607f1691610328565b604081019081106001600160401b0382111761036e57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761036e57604052565b606081019081106001600160401b0382111761036e57604052565b6040519060006002546103cc81610319565b808552600191808316908115610462575060011461040a575b5050829003601f01601f191682016001600160401b0381118382101761036e57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b83851061044e575050505083010138806103e5565b805488860183015293019284908201610439565b919250506020925060ff191682850152151560051b83010138806103e5565b6040519061048e8261039f565b60006040838281528260208201520152565b906104a9610481565b9160018060a01b03166000908082526005602052600160ff6040842054166104d0816102b9565b0361051b576040929350815260056020522060ff604051916104f18361039f565b548181166104fe816102b9565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b604051906105338261039f565b816000815260405161054481610353565b60008152600060208201526020820152604080519161056283610353565b60008352600060208401520152565b6040519061057e82610353565b8160008152602061058d610526565b910152565b9060408051906105a18261039f565b6000938483526020938484019083516105b981610353565b878152878782015282528385016105ce610526565b81526003885403610857576105e16103ba565b92878480518101031261085357878651946105fb86610384565b0151845260049460ff86541661083c57865133815281518a820152898201805180516001600160a01b03908116848c0152908c015160608401529290917f985be207e5fc8645310ff3a92b6b863ba74c1c3c16b616f3ab4f47c85e958a7b90608090a1518015908115610830575b501561081957515161067b91166104a0565b5196610686886102b9565b61068f886102b9565b600180980361080257346107eb579088929178151a1948155cd95c8810db185a5b5959081cdd58d8d9591959603a1b809152815152878382510152898251525182825101527ffb3aa9821850eb27f53dab897a5e020dc750841883f32215e5bf6bf179aa6f4461070582518851918291826102d9565b0390a15191015282519160808301906001600160401b038211848310176107d857508680938193829387526060820191838352838152338a8201528743910152518091528181156107cf575b3390f1156107c6575082805582815561076b600254610319565b80610777575b50505050565b601f8111600114610792575050506002555b38808080610771565b6002845281601f848620920160051c820191015b8181106107bc5750505081208160025555610789565b84815582016107a6565b513d84823e3d90fd5b506108fc610751565b634e487b7160e01b885260419052602487fd5b865163100960cb60e01b8152600e81880152602490fd5b865163100960cb60e01b8152600d81880152602490fd5b875163100960cb60e01b8152600c81890152602490fd5b90506001541438610669565b865163100960cb60e01b8152600b81880152602490fd5b8880fd5b845163100960cb60e01b8152600a6004820152602490fdfea164736f6c6343000811000a`,
  BytecodeLen: 3178,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './algo.rsh:103:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './algo.rsh:72:60:after expr stmt semicolon',
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
