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
  const ctc2 = stdlib.T_Object({
    address: ctc0,
    amount: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  return {
    bought: [ctc2],
    raffleOver: [ctc3]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc0
    });
  const ctc8 = stdlib.T_Object({
    adminClaimed: ctc1,
    bal: ctc2,
    buyers: ctc2,
    claimed: ctc1,
    currentUserNumber: ctc2,
    keepGoing: ctc1,
    percent: ctc2,
    raffleBal: ctc2,
    winner: ctc7
    });
  const ctc9 = stdlib.T_Object({
    amountOfRaffleToken: ctc2,
    cost: ctc2,
    creator: ctc0,
    deadline: ctc2,
    isFeatured: ctc1,
    raffleToken: ctc3
    });
  const ctc10 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc10;
  
  
  const Info_adminClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        const v3228 = v3194.adminClaimed;
        
        return v3228;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        
        return v3202;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        
        return v3186;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        
        return v3198;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        
        return v3221;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async (_v3223 ) => {
          const v3223 = stdlib.protect(ctc0, _v3223, null);
        
        const v3224 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3223, ctc6), null);
        const v3225 = {
          None: 0,
          Some: 1
          }[v3224[0]];
        const v3226 = stdlib.eq(v3225, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3226;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        const v3184 = {
          amountOfRaffleToken: v3159,
          cost: v3156,
          creator: v3160,
          deadline: v3154,
          isFeatured: v3153,
          raffleToken: v3158
          };
        
        return v3184;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_randomNumber = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        stdlib.assert(v3221, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:146:28:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:146:28:application)'],
          msg: 'Cannot view this till deadline',
          who: 'Module'
          });
        
        return v3155;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        const v3227 = v3194.currentUserNumber;
        
        return v3227;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        
        return v3158;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        const v3229 = v3194.claimed;
        
        return v3229;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = svs;
      return (await ((async () => {
        
        const v3222 = v3194.winner;
        
        return v3222;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        adminClaimed: {
          decode: Info_adminClaimed,
          dom: [],
          rng: ctc1
          },
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc2
          },
        currentSec: {
          decode: Info_currentSec,
          dom: [],
          rng: ctc2
          },
        currentTime: {
          decode: Info_currentTime,
          dom: [],
          rng: ctc2
          },
        hasDeadlineReached: {
          decode: Info_hasDeadlineReached,
          dom: [],
          rng: ctc1
          },
        myTicketsAmount: {
          decode: Info_myTicketsAmount,
          dom: [ctc0],
          rng: ctc2
          },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc1
          },
        props: {
          decode: Info_props,
          dom: [],
          rng: ctc9
          },
        randomNumber: {
          decode: Info_randomNumber,
          dom: [],
          rng: ctc2
          },
        ticketsBought: {
          decode: Info_ticketsBought,
          dom: [],
          rng: ctc2
          },
        token: {
          decode: Info_token,
          dom: [],
          rng: ctc3
          },
        userClaimed: {
          decode: Info_userClaimed,
          dom: [],
          rng: ctc1
          },
        winner: {
          decode: Info_winner,
          dom: [],
          rng: ctc7
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc0, ctc5],
      4: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc0, ctc2, ctc8, ctc2, ctc5, ctc2, ctc1, ctc2, ctc2]
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
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    User_buyTicket0_266: ctc6,
    User_claim0_266: ctc7,
    User_delete0_266: ctc7,
    User_determinWinnerAfterDeadline0_266: ctc8,
    User_optin0_266: ctc7
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v3132 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v3133 = [v3132];
  const v3137 = stdlib.protect(ctc2, interact.Admin, 'for Deployer\'s interact field Admin');
  const v3138 = stdlib.protect(ctc3, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v3139 = stdlib.protect(ctc3, interact.cost, 'for Deployer\'s interact field cost');
  const v3140 = stdlib.protect(ctc2, interact.creator, 'for Deployer\'s interact field creator');
  const v3141 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v3142 = stdlib.protect(ctc4, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v3143 = stdlib.protect(ctc5, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v3146 = v3142 ? stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:5:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:66:59:decimal', stdlib.UInt_max, '0');
  const v3147 = stdlib.protect(ctc3, await interact.random(), {
    at: './raffle_algo_v4.rsh:68:52:application',
    fs: ['at ./raffle_algo_v4.rsh:63:16:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:63:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  
  const v3148 = stdlib.lt(v3139, stdlib.UInt_max);
  stdlib.assert(v3148, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3150 = stdlib.ge(v3139, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:89:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3150, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3142, v3141, v3147, v3139, v3146, v3143, v3138, v3140, v3137],
    evt_cnt: 9,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc3, ctc3, ctc3, ctc5, ctc3, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161], secs: v3163, time: v3162, didSend: v108, from: v3152 } = txn1;
      
      const v3164 = v3133[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:dot', stdlib.UInt_max, '0')];
      const v3165 = stdlib.Array_set(v3164, '0', stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:dot', stdlib.UInt_max, '0'));
      const v3166 = stdlib.Array_set(v3133, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:dot', stdlib.UInt_max, '0'), v3165);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3158
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc3, ctc3, ctc3, ctc5, ctc3, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161], secs: v3163, time: v3162, didSend: v108, from: v3152 } = txn1;
  const v3164 = v3133[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:dot', stdlib.UInt_max, '0')];
  const v3165 = stdlib.Array_set(v3164, '0', stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:dot', stdlib.UInt_max, '0'));
  const v3166 = stdlib.Array_set(v3133, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:76:12:dot', stdlib.UInt_max, '0'), v3165);
  const v3168 = stdlib.lt(v3156, stdlib.UInt_max);
  stdlib.assert(v3168, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3170 = stdlib.ge(v3156, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:89:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3170, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v3152, v3153, v3154, v3155, v3156, v3157, v3158, v3159, v3160, v3161, v3166],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3162,
    onlyIf: true,
    out_tys: [],
    pay: [v3157, [[v3159, v3158]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v3174, time: v3173, didSend: v117, from: v3172 } = txn2;
      
      sim_r.txns.push({
        amt: v3157,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v3177 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:93:12:dot', stdlib.UInt_max, '0')];
      const v3178 = v3177[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:93:12:dot', stdlib.UInt_max, '0')];
      const v3179 = stdlib.add(v3178, v3159);
      const v3181 = stdlib.Array_set(v3177, '0', v3179);
      const v3182 = stdlib.Array_set(v3166, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:93:12:dot', stdlib.UInt_max, '0'), v3181);
      sim_r.txns.push({
        amt: v3159,
        kind: 'to',
        tok: v3158
        });
      const v3186 = stdlib.safeAdd(v3174, v3154);
      const v3187 = await ctc.getContractInfo();
      
      const v3190 = v3182[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:124:23:application', stdlib.UInt_max, '0')];
      const v3191 = v3190[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:124:23:application', stdlib.UInt_max, '0')];
      const v3192 = ['None', null];
      const v3193 = {
        adminClaimed: false,
        bal: v3157,
        buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        claimed: false,
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v3191,
        winner: v3192
        };
      const v3194 = v3193;
      const v3195 = v3173;
      const v3198 = v3174;
      const v3201 = v3182;
      const v3202 = v3157;
      
      if (await (async () => {
        const v3216 = v3194.keepGoing;
        const v3217 = v3194.claimed;
        const v3218 = v3217 ? false : true;
        const v3219 = v3216 ? v3218 : false;
        
        return v3219;})()) {
        const v3221 = stdlib.ge(v3198, v3186);
        const v3231 = v3194.bal;
        const v3232 = v3194.raffleBal;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v3161,
          tok: undefined /* Nothing */
          });
        const v4777 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        const v4778 = v4777[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v3152,
          tok: v3158
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v3158
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
    tys: [ctc2, ctc4, ctc3, ctc3, ctc3, ctc3, ctc5, ctc3, ctc2, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3174, time: v3173, didSend: v117, from: v3172 } = txn2;
  ;
  const v3177 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:93:12:dot', stdlib.UInt_max, '0')];
  const v3178 = v3177[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:93:12:dot', stdlib.UInt_max, '0')];
  const v3179 = stdlib.add(v3178, v3159);
  const v3181 = stdlib.Array_set(v3177, '0', v3179);
  const v3182 = stdlib.Array_set(v3166, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:93:12:dot', stdlib.UInt_max, '0'), v3181);
  ;
  const v3183 = stdlib.addressEq(v3152, v3172);
  stdlib.assert(v3183, {
    at: './raffle_algo_v4.rsh:93:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v3186 = stdlib.safeAdd(v3174, v3154);
  const v3187 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v3187, v3155), {
    at: './raffle_algo_v4.rsh:116:27:application',
    fs: ['at ./raffle_algo_v4.rsh:116:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:116:27:function exp)', 'at ./raffle_algo_v4.rsh:116:27:application call to "liftedInteract" (defined at: ./raffle_algo_v4.rsh:116:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v3190 = v3182[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:124:23:application', stdlib.UInt_max, '0')];
  const v3191 = v3190[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:124:23:application', stdlib.UInt_max, '0')];
  const v3192 = ['None', null];
  const v3193 = {
    adminClaimed: false,
    bal: v3157,
    buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    claimed: false,
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v3191,
    winner: v3192
    };
  let v3194 = v3193;
  let v3195 = v3173;
  let v3198 = v3174;
  let v3201 = v3182;
  let v3202 = v3157;
  
  let txn3 = txn2;
  while (await (async () => {
    const v3216 = v3194.keepGoing;
    const v3217 = v3194.claimed;
    const v3218 = v3217 ? false : true;
    const v3219 = v3216 ? v3218 : false;
    
    return v3219;})()) {
    const v3221 = stdlib.ge(v3198, v3186);
    const v3231 = v3194.bal;
    const v3232 = v3194.raffleBal;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn4;
    switch (v3410[0]) {
      case 'User_buyTicket0_266': {
        const v3413 = v3410[1];
        undefined /* setApiDetails */;
        const v3418 = v3413[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:153:10:spread', stdlib.UInt_max, '0')];
        const v3419 = stdlib.lt(v3198, v3186);
        stdlib.assert(v3419, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v3421 = stdlib.ge(v3418, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:155:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v3421, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Cannot purchase less than 1',
          who: 'Deployer'
          });
        const v3423 = stdlib.safeMul(v3418, v3156);
        const v3500 = stdlib.add(v3202, v3423);
        ;
        ;
        const v3514 = {
          address: v3409,
          amount: v3418
          };
        null;
        const v3515 = true;
        await txn4.getOutput('User_buyTicket', 'v3515', ctc4, v3515);
        const v3522 = v3194.adminClaimed;
        const v3524 = v3194.buyers;
        const v3525 = v3194.claimed;
        const v3526 = v3194.currentUserNumber;
        const v3527 = v3194.keepGoing;
        const v3528 = v3194.percent;
        const v3530 = v3194.winner;
        const v3532 = stdlib.safeAdd(v3526, v3418);
        const v3534 = stdlib.safeAdd(v3231, v3423);
        const v3536 = stdlib.safeAdd(v3524, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:174:42:decimal', stdlib.UInt_max, '1'));
        const v3537 = {
          adminClaimed: v3522,
          bal: v3534,
          buyers: v3536,
          claimed: v3525,
          currentUserNumber: v3532,
          keepGoing: v3527,
          percent: v3528,
          raffleBal: v3232,
          winner: v3530
          };
        const cv3194 = v3537;
        const cv3195 = v3411;
        const cv3198 = v3412;
        const cv3201 = v3201;
        const cv3202 = v3500;
        
        v3194 = cv3194;
        v3195 = cv3195;
        v3198 = cv3198;
        v3201 = cv3201;
        v3202 = cv3202;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_claim0_266': {
        const v3682 = v3410[1];
        undefined /* setApiDetails */;
        const v3701 = v3194.winner;
        const v3702 = {
          None: 0,
          Some: 1
          }[v3701[0]];
        const v3703 = stdlib.eq(v3702, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3703, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3221, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v3707 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
        const v3708 = v3707[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
        const v3709 = stdlib.le(v3232, v3708);
        stdlib.assert(v3709, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v3712 = stdlib.fromSome(v3701, v3152);
        const v3713 = stdlib.addressEq(v3712, v3409);
        stdlib.assert(v3713, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        const v3814 = stdlib.ge(v3412, v3186);
        stdlib.assert(v3814, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:200:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:200:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v3831 = stdlib.sub(v3708, v3708);
        const v3833 = stdlib.Array_set(v3707, '0', v3831);
        const v3834 = stdlib.Array_set(v3201, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:201:57:application', stdlib.UInt_max, '0'), v3833);
        ;
        const v3836 = stdlib.safeMul(v3202, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:202:47:decimal', stdlib.UInt_max, '5'));
        const v3837 = stdlib.safeDiv(v3836, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:202:51:decimal', stdlib.UInt_max, '100'));
        const v3838 = stdlib.safeSub(v3231, v3837);
        const v3842 = stdlib.sub(v3202, v3838);
        ;
        const v3843 = true;
        await txn4.getOutput('User_claim', 'v3843', ctc4, v3843);
        const v3851 = v3194.buyers;
        const v3853 = v3194.currentUserNumber;
        const v3855 = v3194.percent;
        const v3859 = {
          adminClaimed: true,
          bal: v3842,
          buyers: v3851,
          claimed: true,
          currentUserNumber: v3853,
          keepGoing: false,
          percent: v3855,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          winner: v3701
          };
        const cv3194 = v3859;
        const cv3195 = v3411;
        const cv3198 = v3412;
        const cv3201 = v3834;
        const cv3202 = v3842;
        
        v3194 = cv3194;
        v3195 = cv3195;
        v3198 = cv3198;
        v3201 = cv3201;
        v3202 = cv3202;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_delete0_266': {
        const v3951 = v3410[1];
        undefined /* setApiDetails */;
        const v3991 = stdlib.addressEq(v3409, v3152);
        const v3992 = stdlib.addressEq(v3409, v3161);
        const v3993 = v3991 ? true : v3992;
        stdlib.assert(v3993, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        stdlib.assert(v3221, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v3997 = v3194.currentUserNumber;
        const v3998 = stdlib.eq(v3997, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:278:42:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3998, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Can only delete when nobody used contract',
          who: 'Deployer'
          });
        ;
        const v4039 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:120:37:dot', stdlib.UInt_max, '0')];
        const v4040 = v4039[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:120:37:dot', stdlib.UInt_max, '0')];
        ;
        const v4140 = true;
        await txn4.getOutput('User_delete', 'v4140', ctc4, v4140);
        const v4153 = stdlib.sub(v4040, v4040);
        const v4155 = stdlib.Array_set(v4039, '0', v4153);
        const v4156 = stdlib.Array_set(v3201, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:285:57:application', stdlib.UInt_max, '0'), v4155);
        ;
        const v4157 = v3194.adminClaimed;
        const v4159 = v3194.buyers;
        const v4163 = v3194.percent;
        const v4165 = v3194.winner;
        const v4166 = {
          adminClaimed: v4157,
          bal: v3231,
          buyers: v4159,
          claimed: true,
          currentUserNumber: v3997,
          keepGoing: false,
          percent: v4163,
          raffleBal: v3232,
          winner: v4165
          };
        const cv3194 = v4166;
        const cv3195 = v3411;
        const cv3198 = v3412;
        const cv3201 = v4156;
        const cv3202 = v3202;
        
        v3194 = cv3194;
        v3195 = cv3195;
        v3198 = cv3198;
        v3201 = cv3201;
        v3202 = cv3202;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_determinWinnerAfterDeadline0_266': {
        const v4220 = v3410[1];
        undefined /* setApiDetails */;
        const v4278 = v3194.winner;
        const v4279 = {
          None: 0,
          Some: 1
          }[v4278[0]];
        const v4280 = stdlib.eq(v4279, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4280, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3221, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4284 = stdlib.addressEq(v3409, v3161);
        stdlib.assert(v4284, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
          msg: 'You cannot perform this action',
          who: 'Deployer'
          });
        ;
        ;
        const v4438 = v4220[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:217:10:spread', stdlib.UInt_max, '0')];
        const v4444 = stdlib.ge(v3412, v3186);
        stdlib.assert(v4444, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v4.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:228:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:228:13:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4450 = stdlib.safeMul(v3202, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:229:47:decimal', stdlib.UInt_max, '5'));
        const v4451 = stdlib.safeDiv(v4450, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:229:51:decimal', stdlib.UInt_max, '100'));
        const v4455 = stdlib.sub(v3202, v4451);
        ;
        const v4460 = stdlib.sub(v4455, v4455);
        ;
        const v4461 = null;
        await txn4.getOutput('User_determinWinnerAfterDeadline', 'v4461', ctc0, v4461);
        const v4470 = v3194.buyers;
        const v4471 = v3194.claimed;
        const v4472 = v3194.currentUserNumber;
        const v4473 = v3194.keepGoing;
        const v4474 = v3194.percent;
        const v4478 = ['Some', v4438];
        const v4479 = {
          adminClaimed: true,
          bal: v4460,
          buyers: v4470,
          claimed: v4471,
          currentUserNumber: v4472,
          keepGoing: v4473,
          percent: v4474,
          raffleBal: v3232,
          winner: v4478
          };
        const cv3194 = v4479;
        const cv3195 = v3411;
        const cv3198 = v3412;
        const cv3201 = v3201;
        const cv3202 = v4460;
        
        v3194 = cv3194;
        v3195 = cv3195;
        v3198 = cv3198;
        v3201 = cv3201;
        v3202 = cv3202;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_266': {
        const v4489 = v3410[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4752 = null;
        await txn4.getOutput('User_optin', 'v4752', ctc0, v4752);
        const cv3194 = v3194;
        const cv3195 = v3411;
        const cv3198 = v3412;
        const cv3201 = v3201;
        const cv3202 = v3202;
        
        v3194 = cv3194;
        v3195 = cv3195;
        v3198 = cv3198;
        v3201 = cv3201;
        v3202 = cv3202;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  const v4777 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
  const v4778 = v4777[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  };
export async function _User_buyTicket4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_buyTicket4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_buyTicket4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc3,
    bal: ctc4,
    buyers: ctc4,
    claimed: ctc3,
    currentUserNumber: ctc4,
    keepGoing: ctc3,
    percent: ctc4,
    raffleBal: ctc4,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_266: ctc10,
    User_claim0_266: ctc11,
    User_delete0_266: ctc11,
    User_determinWinnerAfterDeadline0_266: ctc12,
    User_optin0_266: ctc11
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3236 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v4.rsh:1:23:application',
    fs: ['at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_buyTicket0_266" (defined at: ./raffle_algo_v4.rsh:153:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v3237 = v3236[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3239 = stdlib.lt(v3198, v3186);
  stdlib.assert(v3239, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_buyTicket0_266" (defined at: ./raffle_algo_v4.rsh:153:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v3241 = stdlib.ge(v3237, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:155:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3241, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_buyTicket0_266" (defined at: ./raffle_algo_v4.rsh:153:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Cannot purchase less than 1',
    who: 'User_buyTicket'
    });
  const v3248 = ['User_buyTicket0_266', v3236];
  
  const v3325 = stdlib.safeMul(v3237, v3156);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232, v3248],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3325, [[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:157:53:decimal', stdlib.UInt_max, '0'), v3158]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
      
      switch (v3410[0]) {
        case 'User_buyTicket0_266': {
          const v3413 = v3410[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v3418 = v3413[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:153:10:spread', stdlib.UInt_max, '0')];
          const v3423 = stdlib.safeMul(v3418, v3156);
          const v3500 = stdlib.add(v3202, v3423);
          sim_r.txns.push({
            amt: v3423,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          const v3514 = {
            address: v3409,
            amount: v3418
            };
          null;
          const v3515 = true;
          const v3516 = await txn1.getOutput('User_buyTicket', 'v3515', ctc3, v3515);
          
          const v3522 = v3194.adminClaimed;
          const v3524 = v3194.buyers;
          const v3525 = v3194.claimed;
          const v3526 = v3194.currentUserNumber;
          const v3527 = v3194.keepGoing;
          const v3528 = v3194.percent;
          const v3530 = v3194.winner;
          const v3532 = stdlib.safeAdd(v3526, v3418);
          const v3534 = stdlib.safeAdd(v3231, v3423);
          const v3536 = stdlib.safeAdd(v3524, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:174:42:decimal', stdlib.UInt_max, '1'));
          const v3537 = {
            adminClaimed: v3522,
            bal: v3534,
            buyers: v3536,
            claimed: v3525,
            currentUserNumber: v3532,
            keepGoing: v3527,
            percent: v3528,
            raffleBal: v3232,
            winner: v3530
            };
          const v5750 = v3537;
          const v5752 = v3412;
          const v5753 = v3201;
          const v5754 = v3500;
          const v5755 = v3537.keepGoing;
          const v5756 = v3537.claimed;
          const v5757 = v5756 ? false : true;
          const v5758 = v5755 ? v5757 : false;
          if (v5758) {
            const v5759 = stdlib.ge(v3412, v3186);
            const v5760 = v3537.bal;
            const v5761 = v3537.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3161,
              tok: undefined /* Nothing */
              });
            const v5763 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            const v5764 = v5763[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3152,
              tok: v3158
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3158
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_266': {
          const v3682 = v3410[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3951 = v3410[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4220 = v3410[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4489 = v3410[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
  switch (v3410[0]) {
    case 'User_buyTicket0_266': {
      const v3413 = v3410[1];
      undefined /* setApiDetails */;
      const v3418 = v3413[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:153:10:spread', stdlib.UInt_max, '0')];
      const v3419 = stdlib.lt(v3198, v3186);
      stdlib.assert(v3419, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v3421 = stdlib.ge(v3418, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:155:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v3421, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Cannot purchase less than 1',
        who: 'User_buyTicket'
        });
      const v3423 = stdlib.safeMul(v3418, v3156);
      const v3500 = stdlib.add(v3202, v3423);
      ;
      ;
      const v3514 = {
        address: v3409,
        amount: v3418
        };
      null;
      const v3515 = true;
      const v3516 = await txn1.getOutput('User_buyTicket', 'v3515', ctc3, v3515);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v3413, v3516), {
          at: './raffle_algo_v4.rsh:153:11:application',
          fs: ['at ./raffle_algo_v4.rsh:153:11:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:11:function exp)', 'at ./raffle_algo_v4.rsh:168:14:application call to "ret" (defined at: ./raffle_algo_v4.rsh:158:15:function exp)', 'at ./raffle_algo_v4.rsh:158:15:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:158:15:function exp)'],
          msg: 'out',
          who: 'User_buyTicket'
          });
        }
      else {
        }
      
      const v3522 = v3194.adminClaimed;
      const v3524 = v3194.buyers;
      const v3525 = v3194.claimed;
      const v3526 = v3194.currentUserNumber;
      const v3527 = v3194.keepGoing;
      const v3528 = v3194.percent;
      const v3530 = v3194.winner;
      const v3532 = stdlib.safeAdd(v3526, v3418);
      const v3534 = stdlib.safeAdd(v3231, v3423);
      const v3536 = stdlib.safeAdd(v3524, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:174:42:decimal', stdlib.UInt_max, '1'));
      const v3537 = {
        adminClaimed: v3522,
        bal: v3534,
        buyers: v3536,
        claimed: v3525,
        currentUserNumber: v3532,
        keepGoing: v3527,
        percent: v3528,
        raffleBal: v3232,
        winner: v3530
        };
      const v5750 = v3537;
      const v5752 = v3412;
      const v5753 = v3201;
      const v5754 = v3500;
      const v5755 = v3537.keepGoing;
      const v5756 = v3537.claimed;
      const v5757 = v5756 ? false : true;
      const v5758 = v5755 ? v5757 : false;
      if (v5758) {
        const v5759 = stdlib.ge(v3412, v3186);
        const v5760 = v3537.bal;
        const v5761 = v3537.raffleBal;
        return;
        }
      else {
        ;
        const v5763 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        const v5764 = v5763[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_claim0_266': {
      const v3682 = v3410[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3951 = v3410[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4220 = v3410[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4489 = v3410[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc3,
    bal: ctc4,
    buyers: ctc4,
    claimed: ctc3,
    currentUserNumber: ctc4,
    keepGoing: ctc3,
    percent: ctc4,
    raffleBal: ctc4,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_266: ctc11,
    User_claim0_266: ctc10,
    User_delete0_266: ctc10,
    User_determinWinnerAfterDeadline0_266: ctc12,
    User_optin0_266: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3258 = ctc.selfAddress();
  const v3260 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v4.rsh:1:23:application',
    fs: ['at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v4.rsh:189:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v3262 = v3194.winner;
  const v3263 = {
    None: 0,
    Some: 1
    }[v3262[0]];
  const v3264 = stdlib.eq(v3263, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3264, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v4.rsh:189:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  stdlib.assert(v3221, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v4.rsh:189:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v3268 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
  const v3269 = v3268[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
  const v3270 = stdlib.le(v3232, v3269);
  stdlib.assert(v3270, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v4.rsh:189:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v3273 = stdlib.fromSome(v3262, v3152);
  const v3274 = stdlib.addressEq(v3273, v3258);
  stdlib.assert(v3274, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v4.rsh:189:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v3279 = ['User_claim0_266', v3260];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232, v3279],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:199:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:199:14:decimal', stdlib.UInt_max, '0'), v3158]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
      
      switch (v3410[0]) {
        case 'User_buyTicket0_266': {
          const v3413 = v3410[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3682 = v3410[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v3701 = v3194.winner;
          const v3707 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
          const v3708 = v3707[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
          const v3712 = stdlib.fromSome(v3701, v3152);
          ;
          ;
          const v3831 = stdlib.sub(v3708, v3708);
          const v3833 = stdlib.Array_set(v3707, '0', v3831);
          const v3834 = stdlib.Array_set(v3201, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:201:57:application', stdlib.UInt_max, '0'), v3833);
          sim_r.txns.push({
            kind: 'from',
            to: v3712,
            tok: v3158
            });
          const v3836 = stdlib.safeMul(v3202, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:202:47:decimal', stdlib.UInt_max, '5'));
          const v3837 = stdlib.safeDiv(v3836, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:202:51:decimal', stdlib.UInt_max, '100'));
          const v3838 = stdlib.safeSub(v3231, v3837);
          const v3842 = stdlib.sub(v3202, v3838);
          sim_r.txns.push({
            kind: 'from',
            to: v3152,
            tok: undefined /* Nothing */
            });
          const v3843 = true;
          const v3844 = await txn1.getOutput('User_claim', 'v3843', ctc3, v3843);
          
          const v3851 = v3194.buyers;
          const v3853 = v3194.currentUserNumber;
          const v3855 = v3194.percent;
          const v3859 = {
            adminClaimed: true,
            bal: v3842,
            buyers: v3851,
            claimed: true,
            currentUserNumber: v3853,
            keepGoing: false,
            percent: v3855,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            winner: v3701
            };
          const v5840 = v3859;
          const v5842 = v3412;
          const v5843 = v3834;
          const v5844 = v3842;
          const v5845 = v3859.keepGoing;
          const v5846 = v3859.claimed;
          const v5847 = v5846 ? false : true;
          const v5848 = v5845 ? v5847 : false;
          if (v5848) {
            const v5850 = v3859.bal;
            const v5851 = v3859.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3161,
              tok: undefined /* Nothing */
              });
            const v5853 = v3834[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            const v5854 = v5853[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3152,
              tok: v3158
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3158
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_delete0_266': {
          const v3951 = v3410[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4220 = v3410[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4489 = v3410[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
  switch (v3410[0]) {
    case 'User_buyTicket0_266': {
      const v3413 = v3410[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3682 = v3410[1];
      undefined /* setApiDetails */;
      const v3701 = v3194.winner;
      const v3702 = {
        None: 0,
        Some: 1
        }[v3701[0]];
      const v3703 = stdlib.eq(v3702, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3703, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      stdlib.assert(v3221, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v3707 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
      const v3708 = v3707[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:193:33:application', stdlib.UInt_max, '0')];
      const v3709 = stdlib.le(v3232, v3708);
      stdlib.assert(v3709, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v3712 = stdlib.fromSome(v3701, v3152);
      const v3713 = stdlib.addressEq(v3712, v3409);
      stdlib.assert(v3713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      const v3814 = stdlib.ge(v3412, v3186);
      stdlib.assert(v3814, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:200:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:200:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v3831 = stdlib.sub(v3708, v3708);
      const v3833 = stdlib.Array_set(v3707, '0', v3831);
      const v3834 = stdlib.Array_set(v3201, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:201:57:application', stdlib.UInt_max, '0'), v3833);
      ;
      const v3836 = stdlib.safeMul(v3202, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:202:47:decimal', stdlib.UInt_max, '5'));
      const v3837 = stdlib.safeDiv(v3836, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:202:51:decimal', stdlib.UInt_max, '100'));
      const v3838 = stdlib.safeSub(v3231, v3837);
      const v3842 = stdlib.sub(v3202, v3838);
      ;
      const v3843 = true;
      const v3844 = await txn1.getOutput('User_claim', 'v3843', ctc3, v3843);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v3682, v3844), {
          at: './raffle_algo_v4.rsh:189:11:application',
          fs: ['at ./raffle_algo_v4.rsh:189:11:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:11:function exp)', 'at ./raffle_algo_v4.rsh:204:12:application call to "k" (defined at: ./raffle_algo_v4.rsh:200:13:function exp)', 'at ./raffle_algo_v4.rsh:200:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:200:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v3851 = v3194.buyers;
      const v3853 = v3194.currentUserNumber;
      const v3855 = v3194.percent;
      const v3859 = {
        adminClaimed: true,
        bal: v3842,
        buyers: v3851,
        claimed: true,
        currentUserNumber: v3853,
        keepGoing: false,
        percent: v3855,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        winner: v3701
        };
      const v5840 = v3859;
      const v5842 = v3412;
      const v5843 = v3834;
      const v5844 = v3842;
      const v5845 = v3859.keepGoing;
      const v5846 = v3859.claimed;
      const v5847 = v5846 ? false : true;
      const v5848 = v5845 ? v5847 : false;
      if (v5848) {
        const v5850 = v3859.bal;
        const v5851 = v3859.raffleBal;
        return;
        }
      else {
        ;
        const v5853 = v3834[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        const v5854 = v5853[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_delete0_266': {
      const v3951 = v3410[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4220 = v3410[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4489 = v3410[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_delete4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_delete4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_delete4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc3,
    bal: ctc4,
    buyers: ctc4,
    claimed: ctc3,
    currentUserNumber: ctc4,
    keepGoing: ctc3,
    percent: ctc4,
    raffleBal: ctc4,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_266: ctc11,
    User_claim0_266: ctc10,
    User_delete0_266: ctc10,
    User_determinWinnerAfterDeadline0_266: ctc12,
    User_optin0_266: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3302 = ctc.selfAddress();
  const v3304 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v4.rsh:1:23:application',
    fs: ['at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v4.rsh:268:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_delete'
    });
  const v3305 = stdlib.addressEq(v3302, v3152);
  const v3306 = stdlib.addressEq(v3302, v3161);
  const v3307 = v3305 ? true : v3306;
  stdlib.assert(v3307, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v4.rsh:268:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_delete'
    });
  stdlib.assert(v3221, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v4.rsh:268:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_delete'
    });
  const v3311 = v3194.currentUserNumber;
  const v3312 = stdlib.eq(v3311, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:278:42:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3312, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v4.rsh:268:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Can only delete when nobody used contract',
    who: 'User_delete'
    });
  const v3317 = ['User_delete0_266', v3304];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232, v3317],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:282:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:282:14:decimal', stdlib.UInt_max, '0'), v3158]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
      
      switch (v3410[0]) {
        case 'User_buyTicket0_266': {
          const v3413 = v3410[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3682 = v3410[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3951 = v3410[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_delete"
            });
          const v3997 = v3194.currentUserNumber;
          ;
          const v4039 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:120:37:dot', stdlib.UInt_max, '0')];
          const v4040 = v4039[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:120:37:dot', stdlib.UInt_max, '0')];
          ;
          const v4140 = true;
          const v4141 = await txn1.getOutput('User_delete', 'v4140', ctc3, v4140);
          
          const v4153 = stdlib.sub(v4040, v4040);
          const v4155 = stdlib.Array_set(v4039, '0', v4153);
          const v4156 = stdlib.Array_set(v3201, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:285:57:application', stdlib.UInt_max, '0'), v4155);
          sim_r.txns.push({
            kind: 'from',
            to: v3152,
            tok: v3158
            });
          const v4157 = v3194.adminClaimed;
          const v4159 = v3194.buyers;
          const v4163 = v3194.percent;
          const v4165 = v3194.winner;
          const v4166 = {
            adminClaimed: v4157,
            bal: v3231,
            buyers: v4159,
            claimed: true,
            currentUserNumber: v3997,
            keepGoing: false,
            percent: v4163,
            raffleBal: v3232,
            winner: v4165
            };
          const v5930 = v4166;
          const v5932 = v3412;
          const v5933 = v4156;
          const v5934 = v3202;
          const v5935 = v4166.keepGoing;
          const v5936 = v4166.claimed;
          const v5937 = v5936 ? false : true;
          const v5938 = v5935 ? v5937 : false;
          if (v5938) {
            const v5939 = stdlib.ge(v3412, v3186);
            const v5940 = v4166.bal;
            const v5941 = v4166.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3161,
              tok: undefined /* Nothing */
              });
            const v5943 = v4156[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            const v5944 = v5943[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3152,
              tok: v3158
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3158
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4220 = v3410[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4489 = v3410[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
  switch (v3410[0]) {
    case 'User_buyTicket0_266': {
      const v3413 = v3410[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3682 = v3410[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3951 = v3410[1];
      undefined /* setApiDetails */;
      const v3991 = stdlib.addressEq(v3409, v3152);
      const v3992 = stdlib.addressEq(v3409, v3161);
      const v3993 = v3991 ? true : v3992;
      stdlib.assert(v3993, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_delete'
        });
      stdlib.assert(v3221, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_delete'
        });
      const v3997 = v3194.currentUserNumber;
      const v3998 = stdlib.eq(v3997, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:278:42:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3998, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Can only delete when nobody used contract',
        who: 'User_delete'
        });
      ;
      const v4039 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:120:37:dot', stdlib.UInt_max, '0')];
      const v4040 = v4039[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:120:37:dot', stdlib.UInt_max, '0')];
      ;
      const v4140 = true;
      const v4141 = await txn1.getOutput('User_delete', 'v4140', ctc3, v4140);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v3951, v4141), {
          at: './raffle_algo_v4.rsh:268:11:application',
          fs: ['at ./raffle_algo_v4.rsh:268:11:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:11:function exp)', 'at ./raffle_algo_v4.rsh:284:14:application call to "ret" (defined at: ./raffle_algo_v4.rsh:283:15:function exp)', 'at ./raffle_algo_v4.rsh:283:15:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:283:15:function exp)'],
          msg: 'out',
          who: 'User_delete'
          });
        }
      else {
        }
      
      const v4153 = stdlib.sub(v4040, v4040);
      const v4155 = stdlib.Array_set(v4039, '0', v4153);
      const v4156 = stdlib.Array_set(v3201, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:285:57:application', stdlib.UInt_max, '0'), v4155);
      ;
      const v4157 = v3194.adminClaimed;
      const v4159 = v3194.buyers;
      const v4163 = v3194.percent;
      const v4165 = v3194.winner;
      const v4166 = {
        adminClaimed: v4157,
        bal: v3231,
        buyers: v4159,
        claimed: true,
        currentUserNumber: v3997,
        keepGoing: false,
        percent: v4163,
        raffleBal: v3232,
        winner: v4165
        };
      const v5930 = v4166;
      const v5932 = v3412;
      const v5933 = v4156;
      const v5934 = v3202;
      const v5935 = v4166.keepGoing;
      const v5936 = v4166.claimed;
      const v5937 = v5936 ? false : true;
      const v5938 = v5935 ? v5937 : false;
      if (v5938) {
        const v5939 = stdlib.ge(v3412, v3186);
        const v5940 = v4166.bal;
        const v5941 = v4166.raffleBal;
        return;
        }
      else {
        ;
        const v5943 = v4156[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        const v5944 = v5943[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4220 = v3410[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4489 = v3410[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_determinWinnerAfterDeadline4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_determinWinnerAfterDeadline4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_determinWinnerAfterDeadline4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc3,
    bal: ctc4,
    buyers: ctc4,
    claimed: ctc3,
    currentUserNumber: ctc4,
    keepGoing: ctc3,
    percent: ctc4,
    raffleBal: ctc4,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_266: ctc11,
    User_claim0_266: ctc12,
    User_delete0_266: ctc12,
    User_determinWinnerAfterDeadline0_266: ctc10,
    User_optin0_266: ctc12
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3281 = ctc.selfAddress();
  const v3283 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v4.rsh:1:23:application',
    fs: ['at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v4.rsh:217:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3287 = v3194.winner;
  const v3288 = {
    None: 0,
    Some: 1
    }[v3287[0]];
  const v3289 = stdlib.eq(v3288, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3289, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v4.rsh:217:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_determinWinnerAfterDeadline'
    });
  stdlib.assert(v3221, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v4.rsh:217:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3293 = stdlib.addressEq(v3281, v3161);
  stdlib.assert(v3293, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v4.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v4.rsh:217:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'You cannot perform this action',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3300 = ['User_determinWinnerAfterDeadline0_266', v3283];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232, v3300],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:227:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:227:14:decimal', stdlib.UInt_max, '0'), v3158]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
      
      switch (v3410[0]) {
        case 'User_buyTicket0_266': {
          const v3413 = v3410[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3682 = v3410[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3951 = v3410[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4220 = v3410[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_determinWinnerAfterDeadline"
            });
          ;
          ;
          const v4438 = v4220[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:217:10:spread', stdlib.UInt_max, '0')];
          const v4450 = stdlib.safeMul(v3202, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:229:47:decimal', stdlib.UInt_max, '5'));
          const v4451 = stdlib.safeDiv(v4450, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:229:51:decimal', stdlib.UInt_max, '100'));
          const v4455 = stdlib.sub(v3202, v4451);
          sim_r.txns.push({
            kind: 'from',
            to: v3161,
            tok: undefined /* Nothing */
            });
          const v4460 = stdlib.sub(v4455, v4455);
          sim_r.txns.push({
            kind: 'from',
            to: v3152,
            tok: undefined /* Nothing */
            });
          const v4461 = null;
          const v4462 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v4461', ctc0, v4461);
          
          const v4470 = v3194.buyers;
          const v4471 = v3194.claimed;
          const v4472 = v3194.currentUserNumber;
          const v4473 = v3194.keepGoing;
          const v4474 = v3194.percent;
          const v4478 = ['Some', v4438];
          const v4479 = {
            adminClaimed: true,
            bal: v4460,
            buyers: v4470,
            claimed: v4471,
            currentUserNumber: v4472,
            keepGoing: v4473,
            percent: v4474,
            raffleBal: v3232,
            winner: v4478
            };
          const v6020 = v4479;
          const v6022 = v3412;
          const v6023 = v3201;
          const v6024 = v4460;
          const v6025 = v4479.keepGoing;
          const v6026 = v4479.claimed;
          const v6027 = v6026 ? false : true;
          const v6028 = v6025 ? v6027 : false;
          if (v6028) {
            const v6030 = v4479.bal;
            const v6031 = v4479.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3161,
              tok: undefined /* Nothing */
              });
            const v6033 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            const v6034 = v6033[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3152,
              tok: v3158
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3158
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_optin0_266': {
          const v4489 = v3410[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
  switch (v3410[0]) {
    case 'User_buyTicket0_266': {
      const v3413 = v3410[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3682 = v3410[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3951 = v3410[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4220 = v3410[1];
      undefined /* setApiDetails */;
      const v4278 = v3194.winner;
      const v4279 = {
        None: 0,
        Some: 1
        }[v4278[0]];
      const v4280 = stdlib.eq(v4279, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4280, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_determinWinnerAfterDeadline'
        });
      stdlib.assert(v3221, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v4284 = stdlib.addressEq(v3409, v3161);
      stdlib.assert(v4284, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)', 'at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)'],
        msg: 'You cannot perform this action',
        who: 'User_determinWinnerAfterDeadline'
        });
      ;
      ;
      const v4438 = v4220[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:217:10:spread', stdlib.UInt_max, '0')];
      const v4444 = stdlib.ge(v3412, v3186);
      stdlib.assert(v4444, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v4.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v4.rsh:228:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:228:13:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v4450 = stdlib.safeMul(v3202, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:229:47:decimal', stdlib.UInt_max, '5'));
      const v4451 = stdlib.safeDiv(v4450, stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:229:51:decimal', stdlib.UInt_max, '100'));
      const v4455 = stdlib.sub(v3202, v4451);
      ;
      const v4460 = stdlib.sub(v4455, v4455);
      ;
      const v4461 = null;
      const v4462 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v4461', ctc0, v4461);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v4220, v4462), {
          at: './raffle_algo_v4.rsh:217:11:application',
          fs: ['at ./raffle_algo_v4.rsh:217:11:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:11:function exp)', 'at ./raffle_algo_v4.rsh:232:12:application call to "k" (defined at: ./raffle_algo_v4.rsh:228:13:function exp)', 'at ./raffle_algo_v4.rsh:228:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:228:13:function exp)'],
          msg: 'out',
          who: 'User_determinWinnerAfterDeadline'
          });
        }
      else {
        }
      
      const v4470 = v3194.buyers;
      const v4471 = v3194.claimed;
      const v4472 = v3194.currentUserNumber;
      const v4473 = v3194.keepGoing;
      const v4474 = v3194.percent;
      const v4478 = ['Some', v4438];
      const v4479 = {
        adminClaimed: true,
        bal: v4460,
        buyers: v4470,
        claimed: v4471,
        currentUserNumber: v4472,
        keepGoing: v4473,
        percent: v4474,
        raffleBal: v3232,
        winner: v4478
        };
      const v6020 = v4479;
      const v6022 = v3412;
      const v6023 = v3201;
      const v6024 = v4460;
      const v6025 = v4479.keepGoing;
      const v6026 = v4479.claimed;
      const v6027 = v6026 ? false : true;
      const v6028 = v6025 ? v6027 : false;
      if (v6028) {
        const v6030 = v4479.bal;
        const v6031 = v4479.raffleBal;
        return;
        }
      else {
        ;
        const v6033 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        const v6034 = v6033[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_266': {
      const v4489 = v3410[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_optin4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_optin4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_optin4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc3,
    bal: ctc4,
    buyers: ctc4,
    claimed: ctc3,
    currentUserNumber: ctc4,
    keepGoing: ctc3,
    percent: ctc4,
    raffleBal: ctc4,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_266: ctc11,
    User_claim0_266: ctc10,
    User_delete0_266: ctc10,
    User_determinWinnerAfterDeadline0_266: ctc12,
    User_optin0_266: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3252 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v4.rsh:1:23:application',
    fs: ['at ./raffle_algo_v4.rsh:180:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:180:26:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to "runUser_optin0_266" (defined at: ./raffle_algo_v4.rsh:180:10:function exp)', 'at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v3256 = ['User_optin0_266', v3252];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3152, v3153, v3154, v3155, v3156, v3158, v3159, v3160, v3161, v3186, v3194, v3198, v3201, v3202, v3221, v3231, v3232, v3256],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:182:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:182:14:decimal', stdlib.UInt_max, '0'), v3158]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
      
      switch (v3410[0]) {
        case 'User_buyTicket0_266': {
          const v3413 = v3410[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3682 = v3410[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3951 = v3410[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4220 = v3410[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4489 = v3410[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          const v4752 = null;
          const v4753 = await txn1.getOutput('User_optin', 'v4752', ctc0, v4752);
          
          const v6110 = v3194;
          const v6112 = v3412;
          const v6113 = v3201;
          const v6114 = v3202;
          const v6115 = v3194.keepGoing;
          const v6116 = v3194.claimed;
          const v6117 = v6116 ? false : true;
          const v6118 = v6115 ? v6117 : false;
          if (v6118) {
            const v6119 = stdlib.ge(v3412, v3186);
            const v6120 = v3194.bal;
            const v6121 = v3194.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3161,
              tok: undefined /* Nothing */
              });
            const v6123 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            const v6124 = v6123[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3152,
              tok: v3158
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3158
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
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3410], secs: v3412, time: v3411, didSend: v2611, from: v3409 } = txn1;
  switch (v3410[0]) {
    case 'User_buyTicket0_266': {
      const v3413 = v3410[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3682 = v3410[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3951 = v3410[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4220 = v3410[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4489 = v3410[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4752 = null;
      const v4753 = await txn1.getOutput('User_optin', 'v4752', ctc0, v4752);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v4489, v4753), {
          at: './raffle_algo_v4.rsh:180:11:application',
          fs: ['at ./raffle_algo_v4.rsh:180:11:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:180:11:function exp)', 'at ./raffle_algo_v4.rsh:184:14:application call to "ret" (defined at: ./raffle_algo_v4.rsh:183:15:function exp)', 'at ./raffle_algo_v4.rsh:183:15:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:183:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6110 = v3194;
      const v6112 = v3412;
      const v6113 = v3201;
      const v6114 = v3202;
      const v6115 = v3194.keepGoing;
      const v6116 = v3194.claimed;
      const v6117 = v6116 ? false : true;
      const v6118 = v6115 ? v6117 : false;
      if (v6118) {
        const v6119 = stdlib.ge(v3412, v3186);
        const v6120 = v3194.bal;
        const v6121 = v3194.raffleBal;
        return;
        }
      else {
        ;
        const v6123 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        const v6124 = v6123[stdlib.checkedBigNumberify('./raffle_algo_v4.rsh:297:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function User_buyTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_buyTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_buyTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_buyTicket4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_delete4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_determinWinnerAfterDeadline(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_determinWinnerAfterDeadline expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_determinWinnerAfterDeadline expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_determinWinnerAfterDeadline4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_optin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_optin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_optin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_optin4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`User_buyTicket(uint64)byte`, `User_claim()byte`, `User_delete()byte`, `User_determinWinnerAfterDeadline(address)void`, `User_optin()void`, `_reachp_0((uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[32])))void`],
    pure: [`Info_adminClaimed()byte`, `Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,address,uint64,byte,uint64)`, `Info_randomNumber()uint64`, `Info_ticketsBought()uint64`, `Info_token()uint64`, `Info_userClaimed()byte`, `Info_winner()(byte,byte[32])`],
    sigs: [`Info_adminClaimed()byte`, `Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,address,uint64,byte,uint64)`, `Info_randomNumber()uint64`, `Info_ticketsBought()uint64`, `Info_token()uint64`, `Info_userClaimed()byte`, `Info_winner()(byte,byte[32])`, `User_buyTicket(uint64)byte`, `User_claim()byte`, `User_delete()byte`, `User_determinWinnerAfterDeadline(address)void`, `User_optin()void`, `_reachp_0((uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[32])))void`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAEECCEFKTEJEmQRoI0GOUEmBAEAAQEAAQIxGEEH3CpkSSJbNQElWzUCKGQpZFArZFCCFQQTblc7BBPv73gEF49QhgQZWV4pBCfv3mwEKTen9gQpYZ/kBD75YpoEQrPxHgRUaD/tBF9V69UEeTkpUwR6Nv4ABH+ccV8EgsSWBgSRbE/aBKNB0cIEqaV4pgTDb/5uBN/ZIygE53cfLjYaAI4VAG4AQQFmAGQHJAHZAFEAIQDzAcYHCQDjAZYAMQABAJgBFwC+ANEHGQEFADQBJBJEiAfCNBVXAAE1BDEZIhJEgAQVH3x1NARQsCNDNAEkEkSIB6I0ERY1BEL/3zQBJBJEiAeSNBYWNQRC/880ASQSRIgHgjQTFjUEQv+/NAEkEkSIB3I0EBZRBwg1BEL/rDYaATULIkRC/6I2GgE1CzQBJBJEiAdQKiooNAtQvkkWUQcIRQRNUCJVIxIWUQcINQRC/3g0ASQSRIgHKzQZFjQbFlA0GFA0HRZQNB4WUQcIUDQaFlA1BEL/UjQBJBJEiAcFNBBENBwWNQRC/z80ASQSRIgG8jQVVxIINQRC/y00ASQSRIgG4DQaFjUEQv8dNAEkEkSIBtA0FVcRATUEQv8LNAEkEkSIBr40FVcrITUEQv75NhoBFzULJa8oNAsWUIEYr1BQNQskNAESRIgGmDQLIls1DDQLVwghNQ2ABOorTNM0DBZQNA1QsDQMiAcNNA0iVY0FBewF7wXyBfUF+EL+moApAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/lYApAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/ZTYaATULJa+AAQM0C1BQNQtC/1KAKQAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/yI0DSNbNQs0EzQWDEQ0CyMPRDQLNBsLSTUNiAYfMQA0CxZQNQyABPhYyAA0DFCwIzUMgAgAAAAAAAANuzQMFlEHCFCwNAwWUQcINQQ0FVcAATQPNA0IFlA0FSEIWyMIFlA0FVcRAVA0FSEJWzQLCBZQNBVXGgFQNBVXGwhQNA4WUDQVVyshUDIGMgc0ETQNCDURNRM1FDUVNBVXGgEXNBVXEQEXFBBBBK00EzQWDzUQNBUjWzUPNBWBI1s1DjQfNB4WUQcIUDQdFlA0HBZQNBsWUDQaFlA0GRZQNBhQNBdQNBYWUDQVUDQTFlA0ElA0ERZQNBAWUQcIUDQPFlA0DhZQJDIGNQI1AShLAVcAf2cpSwFXf39nK0xX/hFnKjQBFjQCFlBnMRkiEkSIBTU0A0D85UL82DQVVyshSTULIlUjEkQ0EEQ0ElcAEUk1DSJbNQw0DjQMDkQ0HzQLSVcBAEwiVU1JNQ4xABJEMgc0Fg9ENAw0GjQOiAS7NA80ESEFCyEKCgk1DjQRNA4JNQ80DjQfiAScIzUOgAgAAAAAAAAPAzQOFlEHCFCwNA4WUQcINQQpNA8WUDQVVwkIUClQNBVXEghQKFA0FVcbCFAlr1A0C1AyBjIHNBI0DTQMSQkWXABcADQPNRE1EjUTNRQ1FUL+pjEANB8SMQA0FxIRRDQQRDQVIQlbSTUQIhJENBJXABFJNQ0iWzUMIzULgAgAAAAAAAAQLDQLFlEHCFCwNAsWUQcINQQ0DDQaNB+IA/Y0FVcAATQPFlA0FVcJCFApUDQQFlAoUDQVVxsIUDQOFlA0FVcrIVAyBjIHNBI0DTQMSQkWXABcADUSNRM1FDUVQv4XNBVXKyEiVSISRDQQRDEANBcSRDIHNBYPRDQRIQULIQoKNQw0ETQMCTULNAw0F4gDfjQLSQk1DDQLNB+IA3EqNQuACAAAAAAAABFtNAtQsDQLNQQpNAwWUDQVVwkIUDQVVxEBUDQVVxIIUDQVVxoBUDQVVxsIUDQOFlApNA1XASBQUDIGMgc0DDURNRM1FDUVQv2EKjULgAgAAAAAAAASkDQLULA0CzUEMgYyBzUTNRRC/WQxADUfNAsiWzUNNAtXCAEXNR40CyEIWzUdNAshC1s1HDQLgRlbNRs0CyEEWzUMNAshBls1GjQLIQdbNRk0C1c5IDUYNAtXWSA1F4AEom/jCTQNFlA0HhZRBwhQNB0WUDQcFlA0GxZQNAwWUDQaFlA0GRZQNBhQNBdQsDQNiAKlIQuvSTULSVcAESWvXABcADUONBuB////////////AQxENBsjD0QhDIgCkCI0GjIKiAJONB80HhZRBwhQNB0WUDQcFlA0GxZQNAwWUDQaFlA0GRZQNBhQNBdQNA5QgW2vUCMyBkL86iM0ARJESVcAIDUfSVcgARc1HkkhBFs1HUkhBls1HEkhB1s1G0khDVs1DEkhDls1GkmBSVs1GUlXUSA1GElXcSA1F1eRETUONAsXNQ2ABNUVGRQ0DRZQsDQNiAHiNAyIAcE0DlcAETUNNA40DUkiWzQZCBZcAFwANQs0GTQaMRY0ACMISTUACUcDOBQyChJEOBAkEkQ4EU8CEkQ4EhJENB8xABJEMgc0HQg1Fig0DBZQJa9QKFAlr1ApUIAIAAAAAAAAAAVQNAtXABFXAAhQIQSvUDIGMgc0CzQMNRE1EjUTNRQ1FUL7l4gBNCEMiAFlNhoBNQtC/iOIASQ2GgE1C0L+/ogBGTYaATULQvn8IjE0EkQkMTUSRCIxNhJEIjE3EkSIAPqBjwKvIiJC+71C+rdC++hC/KJC/S5C/b40ETQXiADTNBJXABEiWzQaNB+IAMkiNBoyCjIJiAD/MRkhBRJEiADkMgpgMgp4CUk1BjIKiACjQvudIrIBI7IQsgeyCLOJIrIBJLIQshSyEbISs4lIiUwJSTUGMgmIAHqJCUlB/+5JNQaIAHqJSVcAIDUfSVcgARc1HkkhBFs1HUkhBls1HEkhB1s1G0khDVs1GkkhDls1GUlXSSA1GElXaSA1F0mBiQFbNRZJV5FMNRVJgd0BWzUTSVflETUSSYH2AVs1EUlX/gEXNRBJgf8BWzUPgYcCWzUOibFC/1yxQv9kIzUDiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJIhJMNAISEUSJNAY0B0oPQf9BQv9JNAYINQaJsbIVQv8i`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `502`,
    1001: `503`,
    1002: `503`,
    1003: `503`,
    1004: `504`,
    1005: `505`,
    1006: `506`,
    1007: `507`,
    1008: `507`,
    1009: `507`,
    101: `24`,
    1010: `508`,
    1011: `509`,
    1012: `510`,
    1013: `510`,
    1014: `511`,
    1015: `512`,
    1016: `512`,
    1017: `513`,
    1018: `514`,
    1019: `515`,
    102: `24`,
    1020: `516`,
    1021: `516`,
    1022: `517`,
    1023: `518`,
    1024: `519`,
    1025: `521`,
    1026: `521`,
    1027: `521`,
    1028: `523`,
    1029: `523`,
    103: `24`,
    1030: `524`,
    1031: `524`,
    1032: `524`,
    1033: `525`,
    1034: `525`,
    1035: `525`,
    1036: `527`,
    1037: `527`,
    1038: `528`,
    1039: `528`,
    104: `24`,
    1040: `528`,
    1041: `529`,
    1042: `530`,
    1043: `530`,
    1044: `531`,
    1045: `532`,
    1046: `533`,
    1047: `534`,
    1048: `535`,
    1049: `543`,
    105: `24`,
    1050: `543`,
    1051: `544`,
    1052: `552`,
    1053: `552`,
    1054: `553`,
    1055: `553`,
    1056: `553`,
    1057: `554`,
    1058: `555`,
    1059: `555`,
    106: `24`,
    1060: `556`,
    1061: `557`,
    1062: `558`,
    1063: `558`,
    1064: `559`,
    1065: `559`,
    1066: `560`,
    1067: `560`,
    1068: `561`,
    1069: `562`,
    107: `24`,
    1070: `570`,
    1071: `570`,
    1072: `571`,
    1073: `571`,
    1074: `573`,
    1075: `574`,
    1076: `574`,
    1077: `574`,
    1078: `575`,
    1079: `576`,
    108: `24`,
    1080: `577`,
    1081: `578`,
    1082: `579`,
    1083: `580`,
    1084: `580`,
    1085: `581`,
    1086: `581`,
    1087: `582`,
    1088: `583`,
    1089: `591`,
    109: `24`,
    1090: `591`,
    1091: `592`,
    1092: `592`,
    1093: `593`,
    1094: `594`,
    1095: `599`,
    1096: `599`,
    1097: `601`,
    1098: `601`,
    1099: `603`,
    11: `2`,
    110: `24`,
    1100: `603`,
    1101: `604`,
    1102: `604`,
    1103: `604`,
    1104: `605`,
    1105: `605`,
    1106: `606`,
    1107: `606`,
    1108: `607`,
    1109: `607`,
    111: `24`,
    1110: `608`,
    1111: `609`,
    1112: `609`,
    1113: `610`,
    1114: `611`,
    1115: `612`,
    1116: `612`,
    1117: `613`,
    1118: `613`,
    1119: `614`,
    112: `24`,
    1120: `614`,
    1121: `615`,
    1122: `616`,
    1123: `616`,
    1124: `617`,
    1125: `617`,
    1126: `619`,
    1127: `619`,
    1128: `620`,
    1129: `620`,
    113: `24`,
    1130: `620`,
    1131: `621`,
    1132: `622`,
    1133: `622`,
    1134: `623`,
    1135: `623`,
    1136: `623`,
    1137: `623`,
    1138: `623`,
    1139: `623`,
    114: `24`,
    1140: `623`,
    1141: `623`,
    1142: `623`,
    1143: `623`,
    1144: `624`,
    1145: `624`,
    1146: `625`,
    1147: `626`,
    1148: `626`,
    1149: `626`,
    115: `24`,
    1150: `627`,
    1151: `628`,
    1152: `629`,
    1153: `629`,
    1154: `630`,
    1155: `631`,
    1156: `631`,
    1157: `631`,
    1158: `632`,
    1159: `632`,
    116: `24`,
    1160: `633`,
    1161: `634`,
    1162: `634`,
    1163: `635`,
    1164: `636`,
    1165: `637`,
    1166: `637`,
    1167: `638`,
    1168: `638`,
    1169: `638`,
    117: `24`,
    1170: `639`,
    1171: `640`,
    1172: `641`,
    1173: `642`,
    1174: `642`,
    1175: `643`,
    1176: `643`,
    1177: `643`,
    1178: `644`,
    1179: `645`,
    118: `24`,
    1180: `646`,
    1181: `647`,
    1182: `647`,
    1183: `648`,
    1184: `648`,
    1185: `648`,
    1186: `649`,
    1187: `650`,
    1188: `651`,
    1189: `652`,
    119: `24`,
    1190: `653`,
    1191: `653`,
    1192: `654`,
    1193: `655`,
    1194: `655`,
    1195: `656`,
    1196: `656`,
    1197: `657`,
    1198: `657`,
    1199: `658`,
    12: `2`,
    120: `24`,
    1200: `658`,
    1201: `659`,
    1202: `659`,
    1203: `660`,
    1204: `661`,
    1205: `662`,
    1206: `663`,
    1207: `663`,
    1208: `664`,
    1209: `664`,
    121: `24`,
    1210: `665`,
    1211: `665`,
    1212: `666`,
    1213: `666`,
    1214: `667`,
    1215: `667`,
    1216: `668`,
    1217: `668`,
    1218: `669`,
    1219: `669`,
    122: `24`,
    1220: `670`,
    1221: `670`,
    1222: `671`,
    1223: `671`,
    1224: `671`,
    1225: `673`,
    1226: `673`,
    1227: `674`,
    1228: `674`,
    1229: `675`,
    123: `24`,
    1230: `676`,
    1231: `676`,
    1232: `677`,
    1233: `677`,
    1234: `678`,
    1235: `679`,
    1236: `680`,
    1237: `688`,
    1238: `688`,
    1239: `689`,
    124: `24`,
    1240: `697`,
    1241: `697`,
    1242: `698`,
    1243: `698`,
    1244: `699`,
    1245: `700`,
    1246: `701`,
    1247: `701`,
    1248: `702`,
    1249: `703`,
    125: `24`,
    1250: `704`,
    1251: `712`,
    1252: `712`,
    1253: `713`,
    1254: `713`,
    1255: `713`,
    1256: `714`,
    1257: `715`,
    1258: `715`,
    1259: `716`,
    126: `24`,
    1260: `717`,
    1261: `718`,
    1262: `718`,
    1263: `719`,
    1264: `720`,
    1265: `720`,
    1266: `721`,
    1267: `721`,
    1268: `721`,
    1269: `721`,
    127: `24`,
    1270: `721`,
    1271: `721`,
    1272: `721`,
    1273: `721`,
    1274: `721`,
    1275: `721`,
    1276: `722`,
    1277: `722`,
    1278: `723`,
    1279: `724`,
    128: `24`,
    1280: `724`,
    1281: `724`,
    1282: `725`,
    1283: `726`,
    1284: `727`,
    1285: `727`,
    1286: `728`,
    1287: `729`,
    1288: `729`,
    1289: `729`,
    129: `24`,
    1290: `730`,
    1291: `730`,
    1292: `731`,
    1293: `731`,
    1294: `733`,
    1295: `733`,
    1296: `735`,
    1297: `735`,
    1298: `736`,
    1299: `736`,
    13: `2`,
    130: `24`,
    1300: `736`,
    1301: `737`,
    1302: `737`,
    1303: `738`,
    1304: `738`,
    1305: `738`,
    1306: `739`,
    1307: `739`,
    1308: `740`,
    1309: `741`,
    131: `24`,
    1310: `742`,
    1311: `742`,
    1312: `743`,
    1313: `743`,
    1314: `743`,
    1315: `744`,
    1316: `745`,
    1317: `746`,
    1318: `747`,
    1319: `747`,
    132: `24`,
    1320: `748`,
    1321: `749`,
    1322: `750`,
    1323: `751`,
    1324: `752`,
    1325: `752`,
    1326: `753`,
    1327: `753`,
    1328: `753`,
    1329: `754`,
    133: `24`,
    1330: `755`,
    1331: `755`,
    1332: `756`,
    1333: `757`,
    1334: `758`,
    1335: `758`,
    1336: `759`,
    1337: `759`,
    1338: `759`,
    1339: `760`,
    134: `24`,
    1340: `761`,
    1341: `761`,
    1342: `762`,
    1343: `762`,
    1344: `763`,
    1345: `763`,
    1346: `764`,
    1347: `764`,
    1348: `765`,
    1349: `765`,
    135: `24`,
    1350: `766`,
    1351: `767`,
    1352: `768`,
    1353: `769`,
    1354: `769`,
    1355: `770`,
    1356: `770`,
    1357: `771`,
    1358: `771`,
    1359: `772`,
    136: `24`,
    1360: `772`,
    1361: `773`,
    1362: `773`,
    1363: `774`,
    1364: `774`,
    1365: `775`,
    1366: `775`,
    1367: `775`,
    1368: `777`,
    1369: `777`,
    137: `24`,
    1370: `778`,
    1371: `778`,
    1372: `778`,
    1373: `779`,
    1374: `780`,
    1375: `781`,
    1376: `782`,
    1377: `783`,
    1378: `791`,
    1379: `791`,
    138: `24`,
    1380: `792`,
    1381: `800`,
    1382: `800`,
    1383: `801`,
    1384: `801`,
    1385: `802`,
    1386: `803`,
    1387: `811`,
    1388: `811`,
    1389: `812`,
    139: `24`,
    1390: `812`,
    1391: `813`,
    1392: `814`,
    1393: `819`,
    1394: `819`,
    1395: `820`,
    1396: `820`,
    1397: `821`,
    1398: `822`,
    1399: `822`,
    14: `2`,
    140: `24`,
    1400: `823`,
    1401: `824`,
    1402: `824`,
    1403: `825`,
    1404: `825`,
    1405: `826`,
    1406: `826`,
    1407: `827`,
    1408: `828`,
    1409: `828`,
    141: `24`,
    1410: `829`,
    1411: `829`,
    1412: `831`,
    1413: `831`,
    1414: `832`,
    1415: `832`,
    1416: `832`,
    1417: `833`,
    1418: `833`,
    1419: `834`,
    142: `24`,
    1420: `835`,
    1421: `836`,
    1422: `836`,
    1423: `837`,
    1424: `837`,
    1425: `839`,
    1426: `839`,
    1427: `840`,
    1428: `840`,
    1429: `840`,
    143: `24`,
    1430: `841`,
    1431: `842`,
    1432: `842`,
    1433: `843`,
    1434: `843`,
    1435: `843`,
    1436: `843`,
    1437: `843`,
    1438: `843`,
    1439: `843`,
    144: `24`,
    1440: `843`,
    1441: `843`,
    1442: `843`,
    1443: `844`,
    1444: `844`,
    1445: `845`,
    1446: `846`,
    1447: `847`,
    1448: `847`,
    1449: `848`,
    145: `24`,
    1450: `848`,
    1451: `849`,
    1452: `850`,
    1453: `850`,
    1454: `851`,
    1455: `852`,
    1456: `853`,
    1457: `853`,
    1458: `854`,
    1459: `854`,
    146: `24`,
    1460: `854`,
    1461: `855`,
    1462: `856`,
    1463: `856`,
    1464: `857`,
    1465: `857`,
    1466: `857`,
    1467: `858`,
    1468: `859`,
    1469: `859`,
    147: `24`,
    1470: `860`,
    1471: `860`,
    1472: `860`,
    1473: `861`,
    1474: `862`,
    1475: `862`,
    1476: `863`,
    1477: `863`,
    1478: `863`,
    1479: `864`,
    148: `24`,
    1480: `865`,
    1481: `865`,
    1482: `866`,
    1483: `866`,
    1484: `866`,
    1485: `867`,
    1486: `868`,
    1487: `868`,
    1488: `869`,
    1489: `870`,
    149: `24`,
    1490: `871`,
    1491: `872`,
    1492: `872`,
    1493: `873`,
    1494: `873`,
    1495: `873`,
    1496: `874`,
    1497: `875`,
    1498: `876`,
    1499: `876`,
    15: `2`,
    150: `24`,
    1500: `877`,
    1501: `877`,
    1502: `878`,
    1503: `878`,
    1504: `879`,
    1505: `879`,
    1506: `880`,
    1507: `880`,
    1508: `881`,
    1509: `881`,
    151: `24`,
    1510: `882`,
    1511: `882`,
    1512: `883`,
    1513: `883`,
    1514: `883`,
    1515: `885`,
    1516: `886`,
    1517: `886`,
    1518: `887`,
    1519: `887`,
    152: `24`,
    1520: `887`,
    1521: `887`,
    1522: `887`,
    1523: `887`,
    1524: `887`,
    1525: `887`,
    1526: `887`,
    1527: `887`,
    1528: `888`,
    1529: `888`,
    153: `24`,
    1530: `889`,
    1531: `890`,
    1532: `891`,
    1533: `891`,
    1534: `892`,
    1535: `892`,
    1536: `893`,
    1537: `893`,
    1538: `894`,
    1539: `894`,
    154: `24`,
    1540: `895`,
    1541: `895`,
    1542: `896`,
    1543: `896`,
    1544: `897`,
    1545: `897`,
    1546: `897`,
    1547: `899`,
    1548: `899`,
    1549: `900`,
    155: `24`,
    1550: `900`,
    1551: `901`,
    1552: `901`,
    1553: `902`,
    1554: `903`,
    1555: `904`,
    1556: `904`,
    1557: `905`,
    1558: `905`,
    1559: `906`,
    156: `24`,
    1560: `906`,
    1561: `906`,
    1562: `907`,
    1563: `908`,
    1564: `908`,
    1565: `909`,
    1566: `909`,
    1567: `910`,
    1568: `910`,
    1569: `911`,
    157: `24`,
    1570: `912`,
    1571: `912`,
    1572: `913`,
    1573: `913`,
    1574: `914`,
    1575: `914`,
    1576: `915`,
    1577: `916`,
    1578: `916`,
    1579: `917`,
    158: `24`,
    1580: `917`,
    1581: `918`,
    1582: `918`,
    1583: `919`,
    1584: `920`,
    1585: `920`,
    1586: `921`,
    1587: `921`,
    1588: `922`,
    1589: `922`,
    159: `24`,
    1590: `923`,
    1591: `924`,
    1592: `924`,
    1593: `925`,
    1594: `925`,
    1595: `926`,
    1596: `926`,
    1597: `927`,
    1598: `928`,
    1599: `928`,
    16: `2`,
    160: `25`,
    1600: `929`,
    1601: `929`,
    1602: `930`,
    1603: `930`,
    1604: `931`,
    1605: `932`,
    1606: `932`,
    1607: `933`,
    1608: `933`,
    1609: `934`,
    161: `25`,
    1610: `934`,
    1611: `934`,
    1612: `935`,
    1613: `935`,
    1614: `936`,
    1615: `936`,
    1616: `937`,
    1617: `937`,
    1618: `937`,
    1619: `938`,
    162: `25`,
    1620: `938`,
    1621: `939`,
    1622: `939`,
    1623: `939`,
    1624: `939`,
    1625: `939`,
    1626: `939`,
    1627: `940`,
    1628: `940`,
    1629: `941`,
    163: `26`,
    1630: `942`,
    1631: `943`,
    1632: `943`,
    1633: `944`,
    1634: `945`,
    1635: `945`,
    1636: `945`,
    1637: `946`,
    1638: `947`,
    1639: `947`,
    164: `26`,
    1640: `948`,
    1641: `949`,
    1642: `950`,
    1643: `950`,
    1644: `951`,
    1645: `952`,
    1646: `953`,
    1647: `953`,
    1648: `954`,
    1649: `955`,
    165: `26`,
    1650: `956`,
    1651: `956`,
    1652: `957`,
    1653: `958`,
    1654: `959`,
    1655: `959`,
    1656: `960`,
    1657: `961`,
    1658: `962`,
    1659: `962`,
    166: `26`,
    1660: `963`,
    1661: `964`,
    1662: `965`,
    1663: `965`,
    1664: `966`,
    1665: `967`,
    1666: `967`,
    1667: `968`,
    1668: `969`,
    1669: `971`,
    167: `26`,
    1670: `971`,
    1671: `972`,
    1672: `972`,
    1673: `972`,
    1674: `973`,
    1675: `973`,
    1676: `974`,
    1677: `975`,
    1678: `976`,
    1679: `976`,
    168: `26`,
    1680: `977`,
    1681: `978`,
    1682: `978`,
    1683: `978`,
    1684: `979`,
    1685: `980`,
    1686: `981`,
    1687: `981`,
    1688: `982`,
    1689: `982`,
    169: `26`,
    1690: `983`,
    1691: `983`,
    1692: `984`,
    1693: `984`,
    1694: `985`,
    1695: `985`,
    1696: `985`,
    1697: `985`,
    1698: `985`,
    1699: `985`,
    17: `2`,
    170: `26`,
    1700: `985`,
    1701: `985`,
    1702: `985`,
    1703: `985`,
    1704: `985`,
    1705: `986`,
    1706: `987`,
    1707: `991`,
    1708: `991`,
    1709: `992`,
    171: `26`,
    1710: `993`,
    1711: `994`,
    1712: `998`,
    1713: `998`,
    1714: `999`,
    1715: `999`,
    1716: `999`,
    1717: `1000`,
    1718: `1002`,
    1719: `1002`,
    172: `26`,
    1720: `1003`,
    1721: `1003`,
    1722: `1004`,
    1723: `1004`,
    1724: `1004`,
    1725: `1006`,
    1726: `1006`,
    1727: `1007`,
    1728: `1007`,
    1729: `1008`,
    173: `26`,
    1730: `1009`,
    1731: `1009`,
    1732: `1009`,
    1733: `1010`,
    1734: `1011`,
    1735: `1011`,
    1736: `1012`,
    1737: `1013`,
    1738: `1014`,
    1739: `1014`,
    174: `26`,
    1740: `1015`,
    1741: `1016`,
    1742: `1017`,
    1743: `1017`,
    1744: `1018`,
    1745: `1019`,
    1746: `1020`,
    1747: `1020`,
    1748: `1021`,
    1749: `1022`,
    175: `26`,
    1750: `1023`,
    1751: `1023`,
    1752: `1024`,
    1753: `1025`,
    1754: `1026`,
    1755: `1026`,
    1756: `1027`,
    1757: `1028`,
    1758: `1029`,
    1759: `1029`,
    176: `26`,
    1760: `1030`,
    1761: `1031`,
    1762: `1031`,
    1763: `1032`,
    1764: `1033`,
    1765: `1033`,
    1766: `1034`,
    1767: `1035`,
    1768: `1035`,
    1769: `1036`,
    177: `26`,
    1770: `1037`,
    1771: `1038`,
    1772: `1039`,
    1773: `1039`,
    1774: `1040`,
    1775: `1040`,
    1776: `1040`,
    1777: `1042`,
    1778: `1043`,
    1779: `1043`,
    178: `26`,
    1780: `1044`,
    1781: `1045`,
    1782: `1047`,
    1783: `1048`,
    1784: `1048`,
    1785: `1048`,
    1786: `1049`,
    1787: `1049`,
    1788: `1050`,
    1789: `1051`,
    179: `26`,
    1790: `1051`,
    1791: `1051`,
    1792: `1052`,
    1793: `1053`,
    1794: `1053`,
    1795: `1054`,
    1796: `1055`,
    1797: `1055`,
    1798: `1056`,
    1799: `1057`,
    18: `2`,
    180: `26`,
    1800: `1057`,
    1801: `1058`,
    1802: `1059`,
    1803: `1059`,
    1804: `1060`,
    1805: `1061`,
    1806: `1061`,
    1807: `1062`,
    1808: `1063`,
    1809: `1063`,
    181: `26`,
    1810: `1064`,
    1811: `1065`,
    1812: `1065`,
    1813: `1066`,
    1814: `1067`,
    1815: `1067`,
    1816: `1068`,
    1817: `1069`,
    1818: `1069`,
    1819: `1070`,
    182: `26`,
    1820: `1071`,
    1821: `1071`,
    1822: `1072`,
    1823: `1073`,
    1824: `1073`,
    1825: `1074`,
    1826: `1075`,
    1827: `1075`,
    1828: `1076`,
    1829: `1077`,
    183: `26`,
    1830: `1077`,
    1831: `1078`,
    1832: `1079`,
    1833: `1079`,
    1834: `1079`,
    1835: `1080`,
    1836: `1080`,
    1837: `1081`,
    1838: `1082`,
    1839: `1082`,
    184: `26`,
    1840: `1082`,
    1841: `1083`,
    1842: `1083`,
    1843: `1084`,
    1844: `1084`,
    1845: `1084`,
    1846: `1085`,
    1847: `1085`,
    1848: `1086`,
    1849: `1086`,
    185: `26`,
    1850: `1087`,
    1851: `1088`,
    1852: `1088`,
    1853: `1089`,
    1854: `1089`,
    1855: `1089`,
    1856: `1089`,
    1857: `1089`,
    1858: `1089`,
    1859: `1090`,
    186: `26`,
    1860: `1090`,
    1861: `1091`,
    1862: `1092`,
    1863: `1093`,
    1864: `1095`,
    1865: `1095`,
    1866: `1096`,
    1867: `1096`,
    1868: `1096`,
    1869: `1097`,
    187: `26`,
    1870: `1097`,
    1871: `1098`,
    1872: `1098`,
    1873: `1098`,
    1874: `1101`,
    1875: `1101`,
    1876: `1102`,
    1877: `1102`,
    1878: `1102`,
    1879: `1103`,
    188: `26`,
    1880: `1103`,
    1881: `1104`,
    1882: `1104`,
    1883: `1105`,
    1884: `1105`,
    1885: `1106`,
    1886: `1107`,
    1887: `1108`,
    1888: `1109`,
    1889: `1109`,
    189: `26`,
    1890: `1110`,
    1891: `1111`,
    1892: `1112`,
    1893: `1112`,
    1894: `1113`,
    1895: `1113`,
    1896: `1114`,
    1897: `1114`,
    1898: `1115`,
    1899: `1115`,
    19: `2`,
    190: `26`,
    1900: `1116`,
    1901: `1116`,
    1902: `1119`,
    1903: `1119`,
    1904: `1120`,
    1905: `1120`,
    1906: `1121`,
    1907: `1122`,
    1908: `1123`,
    1909: `1124`,
    191: `26`,
    1910: `1124`,
    1911: `1125`,
    1912: `1126`,
    1913: `1126`,
    1914: `1127`,
    1915: `1127`,
    1916: `1128`,
    1917: `1128`,
    1918: `1129`,
    1919: `1130`,
    192: `26`,
    1920: `1131`,
    1921: `1131`,
    1922: `1132`,
    1923: `1133`,
    1924: `1134`,
    1925: `1135`,
    1926: `1135`,
    1927: `1136`,
    1928: `1136`,
    1929: `1137`,
    193: `26`,
    1930: `1138`,
    1931: `1139`,
    1932: `1139`,
    1933: `1140`,
    1934: `1141`,
    1935: `1144`,
    1936: `1144`,
    1937: `1145`,
    1938: `1145`,
    1939: `1146`,
    194: `26`,
    1940: `1147`,
    1941: `1150`,
    1942: `1150`,
    1943: `1151`,
    1944: `1151`,
    1945: `1152`,
    1946: `1153`,
    1947: `1153`,
    1948: `1154`,
    1949: `1155`,
    195: `26`,
    1950: `1155`,
    1951: `1156`,
    1952: `1157`,
    1953: `1158`,
    1954: `1159`,
    1955: `1160`,
    1956: `1161`,
    1957: `1162`,
    1958: `1163`,
    1959: `1164`,
    196: `26`,
    1960: `1165`,
    1961: `1166`,
    1962: `1167`,
    1963: `1168`,
    1964: `1168`,
    1965: `1168`,
    1966: `1168`,
    1967: `1168`,
    1968: `1168`,
    1969: `1168`,
    197: `26`,
    1970: `1168`,
    1971: `1168`,
    1972: `1168`,
    1973: `1169`,
    1974: `1170`,
    1975: `1170`,
    1976: `1171`,
    1977: `1171`,
    1978: `1171`,
    1979: `1172`,
    198: `26`,
    1980: `1172`,
    1981: `1172`,
    1982: `1173`,
    1983: `1174`,
    1984: `1174`,
    1985: `1175`,
    1986: `1176`,
    1987: `1177`,
    1988: `1177`,
    1989: `1178`,
    199: `26`,
    1990: `1178`,
    1991: `1179`,
    1992: `1179`,
    1993: `1180`,
    1994: `1180`,
    1995: `1181`,
    1996: `1181`,
    1997: `1182`,
    1998: `1182`,
    1999: `1183`,
    2: `2`,
    20: `2`,
    200: `26`,
    2000: `1183`,
    2001: `1184`,
    2002: `1184`,
    2003: `1185`,
    2004: `1185`,
    2005: `1186`,
    2006: `1186`,
    2007: `1186`,
    2008: `1188`,
    2009: `1188`,
    201: `26`,
    2010: `1188`,
    2011: `1189`,
    2012: `1189`,
    2013: `1190`,
    2014: `1190`,
    2015: `1190`,
    2016: `1191`,
    2017: `1191`,
    2018: `1191`,
    2019: `1192`,
    202: `26`,
    2020: `1192`,
    2021: `1193`,
    2022: `1193`,
    2023: `1193`,
    2024: `1195`,
    2025: `1195`,
    2026: `1195`,
    2027: `1196`,
    2028: `1196`,
    2029: `1196`,
    203: `26`,
    2030: `1197`,
    2031: `1197`,
    2032: `1198`,
    2033: `1198`,
    2034: `1198`,
    2035: `1200`,
    2036: `1200`,
    2037: `1200`,
    2038: `1201`,
    2039: `1201`,
    204: `26`,
    2040: `1201`,
    2041: `1202`,
    2042: `1202`,
    2043: `1203`,
    2044: `1203`,
    2045: `1203`,
    2046: `1205`,
    2047: `1206`,
    2048: `1206`,
    2049: `1207`,
    205: `26`,
    2050: `1208`,
    2051: `1209`,
    2052: `1210`,
    2053: `1210`,
    2054: `1211`,
    2055: `1212`,
    2056: `1213`,
    2057: `1214`,
    2058: `1214`,
    2059: `1215`,
    206: `26`,
    2060: `1216`,
    2061: `1217`,
    2062: `1218`,
    2063: `1218`,
    2064: `1219`,
    2065: `1220`,
    2066: `1221`,
    2067: `1221`,
    2068: `1221`,
    2069: `1222`,
    207: `28`,
    2070: `1222`,
    2071: `1222`,
    2072: `1223`,
    2073: `1224`,
    2074: `1225`,
    2075: `1226`,
    2076: `1226`,
    2077: `1226`,
    2078: `1228`,
    2079: `1228`,
    208: `31`,
    2080: `1228`,
    2081: `1230`,
    2082: `1230`,
    2083: `1230`,
    2084: `1232`,
    2085: `1232`,
    2086: `1232`,
    2087: `1234`,
    2088: `1234`,
    2089: `1234`,
    209: `31`,
    2090: `1236`,
    2091: `1236`,
    2092: `1236`,
    2093: `1238`,
    2094: `1238`,
    2095: `1240`,
    2096: `1240`,
    2097: `1241`,
    2098: `1241`,
    2099: `1241`,
    21: `2`,
    210: `32`,
    2100: `1242`,
    2101: `1242`,
    2102: `1243`,
    2103: `1243`,
    2104: `1243`,
    2105: `1244`,
    2106: `1245`,
    2107: `1247`,
    2108: `1247`,
    2109: `1249`,
    211: `33`,
    2110: `1249`,
    2111: `1250`,
    2112: `1250`,
    2113: `1250`,
    2114: `1252`,
    2115: `1253`,
    2116: `1253`,
    2117: `1254`,
    2118: `1254`,
    2119: `1255`,
    212: `34`,
    2120: `1255`,
    2121: `1256`,
    2122: `1256`,
    2123: `1256`,
    2124: `1258`,
    2125: `1258`,
    2126: `1259`,
    2127: `1259`,
    2128: `1260`,
    2129: `1261`,
    213: `37`,
    2130: `1263`,
    2131: `1263`,
    2132: `1263`,
    2133: `1265`,
    2134: `1265`,
    2135: `1266`,
    2136: `1267`,
    2137: `1267`,
    2138: `1268`,
    2139: `1269`,
    214: `37`,
    2140: `1271`,
    2141: `1272`,
    2142: `1272`,
    2143: `1273`,
    2144: `1273`,
    2145: `1274`,
    2146: `1274`,
    2147: `1274`,
    2148: `1275`,
    2149: `1275`,
    215: `37`,
    2150: `1275`,
    2151: `1277`,
    2152: `1278`,
    2153: `1278`,
    2154: `1279`,
    2155: `1280`,
    2156: `1280`,
    2157: `1281`,
    2158: `1281`,
    2159: `1282`,
    216: `38`,
    2160: `1282`,
    2161: `1283`,
    2162: `1284`,
    2163: `1286`,
    2164: `1287`,
    2165: `1287`,
    2166: `1288`,
    2167: `1289`,
    2168: `1289`,
    2169: `1290`,
    217: `38`,
    2170: `1290`,
    2171: `1291`,
    2172: `1291`,
    2173: `1292`,
    2174: `1292`,
    2175: `1293`,
    2176: `1294`,
    2177: `1296`,
    2178: `1297`,
    2179: `1299`,
    218: `39`,
    2180: `1300`,
    2181: `1301`,
    2182: `1302`,
    2183: `1302`,
    2184: `1303`,
    2185: `1303`,
    2186: `1304`,
    2187: `1304`,
    2188: `1304`,
    2189: `1305`,
    219: `39`,
    2190: `1307`,
    2191: `1308`,
    2192: `1309`,
    2193: `1309`,
    2194: `1309`,
    2195: `1310`,
    2196: `1311`,
    2197: `1311`,
    2198: `1312`,
    2199: `1312`,
    22: `2`,
    220: `39`,
    2200: `1312`,
    2201: `1313`,
    2202: `1315`,
    2203: `1316`,
    2204: `1316`,
    2205: `1316`,
    2206: `1317`,
    2207: `1317`,
    2208: `1318`,
    2209: `1319`,
    221: `40`,
    2210: `1319`,
    2211: `1319`,
    2212: `1320`,
    2213: `1321`,
    2214: `1321`,
    2215: `1322`,
    2216: `1323`,
    2217: `1323`,
    2218: `1324`,
    2219: `1325`,
    222: `40`,
    2220: `1325`,
    2221: `1326`,
    2222: `1327`,
    2223: `1327`,
    2224: `1328`,
    2225: `1329`,
    2226: `1329`,
    2227: `1330`,
    2228: `1331`,
    2229: `1331`,
    223: `42`,
    2230: `1332`,
    2231: `1333`,
    2232: `1333`,
    2233: `1334`,
    2234: `1335`,
    2235: `1335`,
    2236: `1336`,
    2237: `1337`,
    2238: `1337`,
    2239: `1338`,
    224: `42`,
    2240: `1339`,
    2241: `1339`,
    2242: `1340`,
    2243: `1341`,
    2244: `1341`,
    2245: `1342`,
    2246: `1343`,
    2247: `1343`,
    2248: `1343`,
    2249: `1344`,
    225: `43`,
    2250: `1344`,
    2251: `1345`,
    2252: `1346`,
    2253: `1346`,
    2254: `1346`,
    2255: `1347`,
    2256: `1347`,
    2257: `1348`,
    2258: `1349`,
    2259: `1349`,
    226: `44`,
    2260: `1349`,
    2261: `1350`,
    2262: `1351`,
    2263: `1351`,
    2264: `1352`,
    2265: `1353`,
    2266: `1353`,
    2267: `1353`,
    2268: `1354`,
    2269: `1354`,
    227: `45`,
    2270: `1355`,
    2271: `1356`,
    2272: `1356`,
    2273: `1356`,
    2274: `1357`,
    2275: `1358`,
    2276: `1358`,
    2277: `1359`,
    2278: `1360`,
    2279: `1360`,
    228: `48`,
    2280: `1360`,
    2281: `1361`,
    2282: `1361`,
    2283: `1362`,
    2284: `1363`,
    2285: `1363`,
    2286: `1363`,
    2287: `1364`,
    2288: `1365`,
    2289: `1365`,
    229: `48`,
    2290: `1366`,
    2291: `1367`,
    2292: `1367`,
    2293: `1367`,
    2294: `1368`,
    2295: `1369`,
    2296: `1369`,
    2297: `1370`,
    2298: `1371`,
    2299: `1371`,
    23: `2`,
    230: `48`,
    2300: `1371`,
    2301: `1372`,
    2302: `1373`,
    2303: `1373`,
    2304: `1374`,
    2305: `1374`,
    2306: `1374`,
    2307: `1375`,
    2308: `1376`,
    2309: `1376`,
    231: `48`,
    2310: `1377`,
    2311: `1379`,
    2312: `1380`,
    2313: `1380`,
    2314: `1380`,
    2315: `1382`,
    2316: `1383`,
    2317: `1383`,
    2318: `1383`,
    2319: `1385`,
    232: `48`,
    2320: `1386`,
    2321: `1386`,
    2322: `1387`,
    2323: `1390`,
    2324: `1390`,
    2325: `1391`,
    2326: `1391`,
    2327: `1392`,
    2328: `1393`,
    2329: `1394`,
    233: `48`,
    2330: `1395`,
    2331: `1395`,
    2332: `1396`,
    2333: `1397`,
    2334: `1397`,
    2335: `1398`,
    2336: `1398`,
    2337: `1399`,
    2338: `1399`,
    2339: `1400`,
    234: `49`,
    2340: `1401`,
    2341: `1402`,
    2342: `1402`,
    2343: `1403`,
    2344: `1404`,
    2345: `1405`,
    2346: `1406`,
    2347: `1406`,
    2348: `1407`,
    2349: `1408`,
    235: `49`,
    2350: `1409`,
    2351: `1411`,
    2352: `1412`,
    2353: `1413`,
    2354: `1414`,
    2355: `1415`,
    2356: `1415`,
    2357: `1416`,
    2358: `1417`,
    2359: `1418`,
    236: `50`,
    2360: `1419`,
    2361: `1421`,
    2362: `1421`,
    2363: `1422`,
    2364: `1422`,
    2365: `1423`,
    2366: `1424`,
    2367: `1425`,
    2368: `1425`,
    2369: `1425`,
    237: `51`,
    2370: `1426`,
    2371: `1426`,
    2372: `1426`,
    2373: `1428`,
    2374: `1428`,
    2375: `1429`,
    2376: `1430`,
    2377: `1430`,
    2378: `1431`,
    2379: `1433`,
    238: `53`,
    2380: `1434`,
    2381: `1434`,
    2382: `1435`,
    239: `54`,
    24: `2`,
    240: `57`,
    241: `57`,
    242: `58`,
    243: `59`,
    244: `60`,
    245: `63`,
    246: `63`,
    247: `63`,
    248: `64`,
    249: `64`,
    25: `2`,
    250: `65`,
    251: `66`,
    252: `66`,
    253: `67`,
    254: `67`,
    255: `67`,
    256: `70`,
    257: `70`,
    258: `71`,
    259: `72`,
    26: `2`,
    260: `73`,
    261: `76`,
    262: `76`,
    263: `76`,
    264: `77`,
    265: `77`,
    266: `78`,
    267: `79`,
    268: `79`,
    269: `80`,
    27: `2`,
    270: `80`,
    271: `80`,
    272: `83`,
    273: `83`,
    274: `84`,
    275: `85`,
    276: `86`,
    277: `89`,
    278: `89`,
    279: `89`,
    28: `2`,
    280: `90`,
    281: `90`,
    282: `91`,
    283: `92`,
    284: `92`,
    285: `93`,
    286: `93`,
    287: `93`,
    288: `96`,
    289: `96`,
    29: `4`,
    290: `97`,
    291: `98`,
    292: `99`,
    293: `102`,
    294: `102`,
    295: `102`,
    296: `103`,
    297: `103`,
    298: `104`,
    299: `105`,
    3: `2`,
    30: `4`,
    300: `105`,
    301: `105`,
    302: `106`,
    303: `106`,
    304: `107`,
    305: `107`,
    306: `107`,
    307: `109`,
    308: `109`,
    309: `109`,
    31: `5`,
    310: `110`,
    311: `110`,
    312: `112`,
    313: `113`,
    314: `116`,
    315: `116`,
    316: `116`,
    317: `118`,
    318: `118`,
    319: `118`,
    32: `5`,
    320: `119`,
    321: `119`,
    322: `121`,
    323: `121`,
    324: `122`,
    325: `123`,
    326: `124`,
    327: `127`,
    328: `127`,
    329: `127`,
    33: `5`,
    330: `129`,
    331: `130`,
    332: `131`,
    333: `132`,
    334: `132`,
    335: `133`,
    336: `135`,
    337: `136`,
    338: `137`,
    339: `138`,
    34: `6`,
    340: `138`,
    341: `138`,
    342: `139`,
    343: `139`,
    344: `140`,
    345: `141`,
    346: `142`,
    347: `143`,
    348: `144`,
    349: `145`,
    35: `7`,
    350: `146`,
    351: `147`,
    352: `147`,
    353: `147`,
    354: `148`,
    355: `148`,
    356: `149`,
    357: `149`,
    358: `149`,
    359: `152`,
    36: `8`,
    360: `152`,
    361: `153`,
    362: `154`,
    363: `155`,
    364: `158`,
    365: `158`,
    366: `158`,
    367: `159`,
    368: `159`,
    369: `160`,
    37: `9`,
    370: `161`,
    371: `161`,
    372: `162`,
    373: `163`,
    374: `164`,
    375: `164`,
    376: `165`,
    377: `166`,
    378: `166`,
    379: `167`,
    38: `10`,
    380: `168`,
    381: `169`,
    382: `169`,
    383: `170`,
    384: `171`,
    385: `171`,
    386: `171`,
    387: `172`,
    388: `173`,
    389: `173`,
    39: `11`,
    390: `174`,
    391: `175`,
    392: `176`,
    393: `176`,
    394: `177`,
    395: `177`,
    396: `177`,
    397: `180`,
    398: `180`,
    399: `181`,
    4: `2`,
    40: `11`,
    400: `182`,
    401: `183`,
    402: `186`,
    403: `186`,
    404: `186`,
    405: `187`,
    406: `187`,
    407: `188`,
    408: `193`,
    409: `193`,
    41: `12`,
    410: `194`,
    411: `195`,
    412: `195`,
    413: `196`,
    414: `196`,
    415: `196`,
    416: `199`,
    417: `199`,
    418: `200`,
    419: `201`,
    42: `13`,
    420: `202`,
    421: `205`,
    422: `205`,
    423: `205`,
    424: `206`,
    425: `206`,
    426: `207`,
    427: `207`,
    428: `207`,
    429: `208`,
    43: `14`,
    430: `208`,
    431: `209`,
    432: `209`,
    433: `209`,
    434: `212`,
    435: `212`,
    436: `213`,
    437: `214`,
    438: `215`,
    439: `218`,
    44: `14`,
    440: `218`,
    441: `218`,
    442: `219`,
    443: `219`,
    444: `220`,
    445: `221`,
    446: `221`,
    447: `222`,
    448: `222`,
    449: `222`,
    45: `15`,
    450: `225`,
    451: `225`,
    452: `226`,
    453: `227`,
    454: `228`,
    455: `231`,
    456: `231`,
    457: `231`,
    458: `232`,
    459: `232`,
    46: `16`,
    460: `233`,
    461: `233`,
    462: `233`,
    463: `234`,
    464: `234`,
    465: `235`,
    466: `235`,
    467: `235`,
    468: `238`,
    469: `238`,
    47: `17`,
    470: `239`,
    471: `240`,
    472: `241`,
    473: `244`,
    474: `244`,
    475: `244`,
    476: `245`,
    477: `245`,
    478: `246`,
    479: `246`,
    48: `18`,
    480: `246`,
    481: `247`,
    482: `247`,
    483: `248`,
    484: `248`,
    485: `248`,
    486: `250`,
    487: `250`,
    488: `250`,
    489: `251`,
    49: `19`,
    490: `252`,
    491: `252`,
    492: `254`,
    493: `255`,
    494: `256`,
    495: `257`,
    496: `257`,
    497: `258`,
    498: `259`,
    499: `260`,
    5: `2`,
    50: `20`,
    500: `260`,
    501: `261`,
    502: `262`,
    503: `263`,
    504: `264`,
    505: `264`,
    506: `266`,
    507: `267`,
    508: `267`,
    509: `268`,
    51: `21`,
    510: `269`,
    511: `270`,
    512: `270`,
    513: `270`,
    514: `271`,
    515: `271`,
    516: `272`,
    517: `273`,
    518: `274`,
    519: `274`,
    52: `22`,
    520: `275`,
    521: `275`,
    522: `276`,
    523: `276`,
    524: `276`,
    525: `277`,
    526: `277`,
    527: `278`,
    528: `278`,
    529: `278`,
    53: `24`,
    530: `278`,
    531: `278`,
    532: `278`,
    533: `279`,
    534: `279`,
    535: `280`,
    536: `281`,
    537: `282`,
    538: `282`,
    539: `283`,
    54: `24`,
    540: `284`,
    541: `286`,
    542: `286`,
    543: `287`,
    544: `287`,
    545: `287`,
    546: `288`,
    547: `288`,
    548: `289`,
    549: `290`,
    55: `24`,
    550: `291`,
    551: `291`,
    552: `291`,
    553: `291`,
    554: `291`,
    555: `291`,
    556: `291`,
    557: `291`,
    558: `291`,
    559: `291`,
    56: `24`,
    560: `291`,
    561: `291`,
    562: `292`,
    563: `292`,
    564: `292`,
    565: `295`,
    566: `295`,
    567: `295`,
    568: `295`,
    569: `295`,
    57: `24`,
    570: `295`,
    571: `295`,
    572: `295`,
    573: `295`,
    574: `295`,
    575: `295`,
    576: `295`,
    577: `295`,
    578: `295`,
    579: `295`,
    58: `24`,
    580: `295`,
    581: `295`,
    582: `295`,
    583: `295`,
    584: `295`,
    585: `295`,
    586: `295`,
    587: `295`,
    588: `295`,
    589: `295`,
    59: `24`,
    590: `295`,
    591: `295`,
    592: `295`,
    593: `295`,
    594: `295`,
    595: `295`,
    596: `295`,
    597: `295`,
    598: `295`,
    599: `295`,
    6: `2`,
    60: `24`,
    600: `295`,
    601: `295`,
    602: `295`,
    603: `295`,
    604: `295`,
    605: `295`,
    606: `295`,
    607: `295`,
    608: `296`,
    609: `296`,
    61: `24`,
    610: `297`,
    611: `297`,
    612: `297`,
    613: `300`,
    614: `300`,
    615: `300`,
    616: `300`,
    617: `300`,
    618: `300`,
    619: `300`,
    62: `24`,
    620: `300`,
    621: `300`,
    622: `300`,
    623: `300`,
    624: `300`,
    625: `300`,
    626: `300`,
    627: `300`,
    628: `300`,
    629: `300`,
    63: `24`,
    630: `300`,
    631: `300`,
    632: `300`,
    633: `300`,
    634: `300`,
    635: `300`,
    636: `300`,
    637: `300`,
    638: `300`,
    639: `300`,
    64: `24`,
    640: `300`,
    641: `300`,
    642: `300`,
    643: `300`,
    644: `300`,
    645: `300`,
    646: `300`,
    647: `300`,
    648: `300`,
    649: `300`,
    65: `24`,
    650: `300`,
    651: `300`,
    652: `300`,
    653: `300`,
    654: `300`,
    655: `300`,
    656: `301`,
    657: `301`,
    658: `302`,
    659: `302`,
    66: `24`,
    660: `302`,
    661: `304`,
    662: `304`,
    663: `304`,
    664: `305`,
    665: `305`,
    666: `307`,
    667: `308`,
    668: `309`,
    669: `309`,
    67: `24`,
    670: `309`,
    671: `310`,
    672: `310`,
    673: `311`,
    674: `312`,
    675: `313`,
    676: `313`,
    677: `314`,
    678: `314`,
    679: `314`,
    68: `24`,
    680: `317`,
    681: `317`,
    682: `317`,
    683: `317`,
    684: `317`,
    685: `317`,
    686: `317`,
    687: `317`,
    688: `317`,
    689: `317`,
    69: `24`,
    690: `317`,
    691: `317`,
    692: `317`,
    693: `317`,
    694: `317`,
    695: `317`,
    696: `317`,
    697: `317`,
    698: `317`,
    699: `317`,
    7: `2`,
    70: `24`,
    700: `317`,
    701: `317`,
    702: `317`,
    703: `317`,
    704: `317`,
    705: `317`,
    706: `317`,
    707: `317`,
    708: `317`,
    709: `317`,
    71: `24`,
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
    72: `24`,
    720: `317`,
    721: `317`,
    722: `317`,
    723: `318`,
    724: `318`,
    725: `319`,
    726: `319`,
    727: `319`,
    728: `321`,
    729: `321`,
    73: `24`,
    730: `322`,
    731: `323`,
    732: `324`,
    733: `324`,
    734: `325`,
    735: `325`,
    736: `326`,
    737: `326`,
    738: `327`,
    739: `328`,
    74: `24`,
    740: `336`,
    741: `336`,
    742: `337`,
    743: `338`,
    744: `339`,
    745: `347`,
    746: `347`,
    747: `348`,
    748: `348`,
    749: `349`,
    75: `24`,
    750: `350`,
    751: `351`,
    752: `351`,
    753: `352`,
    754: `352`,
    755: `352`,
    756: `355`,
    757: `355`,
    758: `356`,
    759: `356`,
    76: `24`,
    760: `357`,
    761: `358`,
    762: `359`,
    763: `359`,
    764: `360`,
    765: `360`,
    766: `360`,
    767: `360`,
    768: `360`,
    769: `360`,
    77: `24`,
    770: `361`,
    771: `361`,
    772: `362`,
    773: `363`,
    774: `365`,
    775: `366`,
    776: `366`,
    777: `367`,
    778: `367`,
    779: `367`,
    78: `24`,
    780: `367`,
    781: `367`,
    782: `367`,
    783: `367`,
    784: `367`,
    785: `367`,
    786: `367`,
    787: `368`,
    788: `368`,
    789: `369`,
    79: `24`,
    790: `370`,
    791: `370`,
    792: `370`,
    793: `371`,
    794: `372`,
    795: `373`,
    796: `373`,
    797: `374`,
    798: `375`,
    799: `375`,
    8: `2`,
    80: `24`,
    800: `375`,
    801: `376`,
    802: `376`,
    803: `377`,
    804: `377`,
    805: `378`,
    806: `378`,
    807: `378`,
    808: `379`,
    809: `379`,
    81: `24`,
    810: `380`,
    811: `380`,
    812: `381`,
    813: `382`,
    814: `383`,
    815: `384`,
    816: `384`,
    817: `385`,
    818: `385`,
    819: `386`,
    82: `24`,
    820: `387`,
    821: `388`,
    822: `389`,
    823: `390`,
    824: `391`,
    825: `391`,
    826: `392`,
    827: `392`,
    828: `392`,
    829: `393`,
    83: `24`,
    830: `394`,
    831: `394`,
    832: `395`,
    833: `395`,
    834: `396`,
    835: `397`,
    836: `397`,
    837: `398`,
    838: `399`,
    839: `400`,
    84: `24`,
    840: `401`,
    841: `401`,
    842: `402`,
    843: `402`,
    844: `402`,
    845: `403`,
    846: `404`,
    847: `404`,
    848: `405`,
    849: `405`,
    85: `24`,
    850: `405`,
    851: `406`,
    852: `407`,
    853: `407`,
    854: `408`,
    855: `409`,
    856: `410`,
    857: `410`,
    858: `411`,
    859: `411`,
    86: `24`,
    860: `411`,
    861: `412`,
    862: `413`,
    863: `413`,
    864: `414`,
    865: `414`,
    866: `415`,
    867: `415`,
    868: `416`,
    869: `416`,
    87: `24`,
    870: `417`,
    871: `418`,
    872: `418`,
    873: `419`,
    874: `419`,
    875: `420`,
    876: `420`,
    877: `421`,
    878: `421`,
    879: `423`,
    88: `24`,
    880: `423`,
    881: `424`,
    882: `424`,
    883: `424`,
    884: `425`,
    885: `426`,
    886: `426`,
    887: `427`,
    888: `427`,
    889: `427`,
    89: `24`,
    890: `428`,
    891: `429`,
    892: `430`,
    893: `431`,
    894: `431`,
    895: `431`,
    896: `432`,
    897: `432`,
    898: `433`,
    899: `433`,
    9: `2`,
    90: `24`,
    900: `434`,
    901: `435`,
    902: `435`,
    903: `436`,
    904: `436`,
    905: `437`,
    906: `438`,
    907: `439`,
    908: `439`,
    909: `440`,
    91: `24`,
    910: `440`,
    911: `441`,
    912: `441`,
    913: `442`,
    914: `443`,
    915: `443`,
    916: `445`,
    917: `445`,
    918: `446`,
    919: `446`,
    92: `24`,
    920: `447`,
    921: `448`,
    922: `448`,
    923: `448`,
    924: `449`,
    925: `450`,
    926: `450`,
    927: `451`,
    928: `452`,
    929: `453`,
    93: `24`,
    930: `453`,
    931: `454`,
    932: `455`,
    933: `456`,
    934: `456`,
    935: `457`,
    936: `458`,
    937: `459`,
    938: `459`,
    939: `460`,
    94: `24`,
    940: `461`,
    941: `462`,
    942: `462`,
    943: `463`,
    944: `464`,
    945: `465`,
    946: `465`,
    947: `466`,
    948: `467`,
    949: `467`,
    95: `24`,
    950: `468`,
    951: `469`,
    952: `469`,
    953: `470`,
    954: `471`,
    955: `472`,
    956: `472`,
    957: `473`,
    958: `474`,
    959: `474`,
    96: `24`,
    960: `475`,
    961: `476`,
    962: `477`,
    963: `477`,
    964: `478`,
    965: `479`,
    966: `479`,
    967: `480`,
    968: `481`,
    969: `482`,
    97: `24`,
    970: `482`,
    971: `483`,
    972: `484`,
    973: `484`,
    974: `484`,
    975: `485`,
    976: `486`,
    977: `486`,
    978: `487`,
    979: `488`,
    98: `24`,
    980: `489`,
    981: `489`,
    982: `490`,
    983: `491`,
    984: `492`,
    985: `493`,
    986: `493`,
    987: `495`,
    988: `495`,
    989: `496`,
    99: `24`,
    990: `496`,
    991: `497`,
    992: `498`,
    993: `498`,
    994: `499`,
    995: `499`,
    996: `499`,
    997: `500`,
    998: `501`,
    999: `502`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 271,
  unsupported: [],
  version: 13,
  warnings: [`API User_claim may use up to 6 accounts, but the limit is 4. API User_claim starts at /app/raffle_algo_v4.rsh:120:37:application.`, `API User_delete may use up to 5 accounts, but the limit is 4. API User_delete starts at /app/raffle_algo_v4.rsh:120:37:application.`, `API User_determinWinnerAfterDeadline may use up to 6 accounts, but the limit is 4. API User_determinWinnerAfterDeadline starts at /app/raffle_algo_v4.rsh:120:37:application.`, `Step 3 may use up to 6 accounts, but the limit is 4. Step 3 starts at /app/raffle_algo_v4.rsh:120:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"address payable","name":"elem8","type":"address"},{"internalType":"address payable","name":"elem9","type":"address"}],"internalType":"struct T12","name":"v6180","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"address payable","name":"elem8","type":"address"},{"internalType":"address payable","name":"elem9","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_266","type":"tuple"},{"internalType":"bool","name":"_User_claim0_266","type":"bool"},{"internalType":"bool","name":"_User_delete0_266","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_266","type":"tuple"},{"internalType":"bool","name":"_User_optin0_266","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3515","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3843","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4140","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4461","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4752","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_adminClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6137","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6141","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_randomNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_userClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v6159","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6173","type":"address"}],"name":"User_determinWinnerAfterDeadline","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v6183","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_266","type":"tuple"},{"internalType":"bool","name":"_User_claim0_266","type":"bool"},{"internalType":"bool","name":"_User_delete0_266","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_266","type":"tuple"},{"internalType":"bool","name":"_User_optin0_266","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v6186","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62003dfe38819003918201601f19168301916001600160401b03831184841017620006a45780849261014094604052833981010312620007c1576040519061014082016001600160401b03811183821017620006a4576040528051825260208101518015158103620007c157620000de9161012091602085015260408101516040850152606081015160608501526080810151608085015260a081015160a0850152620000b360c08201620007e2565b60c085015260e081015160e0850152620000d16101008201620007e2565b61010085015201620007e2565b6101208201524360035560405161026081016001600160401b03811182821017620006a4576040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526040518060c081011060018060401b0360c083011117620006a4576000918160c061024093016040528381528360208201528360408201528360608201528360808201528360a082015261010082015282610120820152826101408201528261016082015282610180820152620001b1620007f7565b6101a0820152826101c0820152826101e0820152826102008201528261022082015201526040519081604081011060018060401b03604084011117620006a4576040820160405262000202620007f7565b82526200020e62000818565b602083015260ff60045416620007a8577f9660c10419d34cce8fbb42cdf0cb6de03e621f5bc15c0c2d5e328a48af41e507610160604051338152835160208201526020840151151560408201526040840151606082015260608401516080820152608084015160a082015260a084015160c082015260018060a01b0360c08501511660e082015260e084015161010082015260018060a01b036101008501511661012082015260018060a01b0361012085015116610140820152a1805180159081156200079b575b50156200078257600082515260006020835101526000604083510152815160208301515260001960808201511015620007695760016080820151106200075057346200073757604051916001600160401b03610160840190811190841117620006a457602091610160840160405260008452600083850152600060408501526000606085015260006080850152600060a0850152600060c0850152600060e0850152600061010085015260006101208501526200039262000818565b6101408501523384528281015115158385015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c085015260e081015160e085015260018060a01b036101008201511661010085015261012060018060a01b039101511661012084015201518051604060208201519101511515604051916200043083620007c6565b60008352602083015260408201526200044862000818565b9160005b60018110620006e757505081526101408201526001600055436001556101406040519160018060a01b0381511660208401526020810151151560408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260018060a01b0360c08201511660e084015260e081015161010084015260018060a01b036101008201511661012084015260018060a01b036101208201511682840152015161016082016000905b60018210620006ba576101a08452836101c081016001600160401b03811182821017620006a45760405280516001600160401b038111620006a457600254600181811c9116801562000699575b60208210146200068357601f811162000619575b50602091601f8211600114620005af57918192600092620005a3575b50508160011b916000199060031b1c1916176002555b6040516135769081620008888239f35b0151905082806200057d565b601f19821692600260005260206000209160005b8581106200060057508360019510620005e6575b505050811b0160025562000593565b015160001960f88460031b161c19169055828080620005d7565b91926020600181928685015181550194019201620005c3565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000678575b601f0160051c01905b8181106200066b575062000561565b600081556001016200065c565b909150819062000653565b634e487b7160e01b600052602260045260246000fd5b90607f16906200054d565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000500565b620006f381836200085f565b516200070082866200085f565b526200070d81856200085f565b50600019811462000721576001016200044c565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541438620002d6565b60405163100960cb60e01b815260156004820152602490fd5b600080fd5b606081019081106001600160401b03821117620006a457604052565b51906001600160a01b0382168203620007c157565b604051906200080682620007c6565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620006a4576040528260005b8281106200084857505050565b829062000854620007f7565b81840152016200083b565b906001811015620008715760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e685146101f857806308e8b3fb146101ef5780631e93b0f1146101e6578063213b7923146101dd57806336e56ea5146101d457806347dc4e6c146101cb578063573b8510146101c25780635cd91bc2146101b95780635fde30d8146101b05780636a672754146101a75780636cf1d8021461019e57806373c86a71146101955780637888d2df1461018c5780637a2b54dc14610183578063832307571461017a578063883513de146101715780638ddecb6d146101685780639686b6e91461015f578063a579242414610156578063ab53f2c61461014d578063c4807dc714610144578063d184691f1461013b578063eaa4fd51146101325763fa726c840361000e5761012d610e84565b61000e565b5061012d610ddb565b5061012d610d8b565b5061012d610d13565b5061012d610c9e565b5061012d610c07565b5061012d610bc7565b5061012d610b54565b5061012d610ac7565b5061012d610aa8565b5061012d610a68565b5061012d6109df565b5061012d610970565b5061012d61090d565b5061012d610894565b5061012d610786565b5061012d61070d565b5061012d610479565b5061012d61041e565b5061012d6103c4565b5061012d61035a565b5061012d61031e565b5061012d61026a565b50346102655760003660031901126102655761021261122b565b60046000540361024c57606060209161012061023d61022f610ffe565b858082518301019101611435565b01519182910152604051908152f35b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b5060e03660031901126102655761027f61122b565b6040519061028c82610f47565b600435825260c036602319011261026557604051916102aa83610f6f565b6024359260058410156102655761030e9381526102c6366133eb565b60208201526064356102d7816112ca565b60408201526102e4613506565b60608201526102f236613520565b60808201526102ff613513565b60a08201526020820152611cea565b60405160008152602090f35b0390f35b5034610265576000366003190112610265576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361026557565b503461026557602036600319011261026557610377600435610349565b61037f61122b565b5060405163100960cb60e01b8152600c6004820152602490fd5b50634e487b7160e01b600052602160045260246000fd5b600211156103ba57565b6103c2610399565b565b50346102655760203660031901126102655760606103f56004356103e781610349565b6103ef611154565b50611173565b60408051918051610405816103b0565b8352602081015115156020840152015115156040820152f35b5060003660031901126102655760206101e061043861122b565b61046d81610444611a2a565b85810190600182515251151560408251015261045e611a2a565b90600082525186820152611cea565b01511515604051908152f35b506020806003193601126102655761048f61122b565b506106f761049c3661340b565b916104a561342b565b6000906104b56001835414611538565b6104ce6104c0610ffe565b84808251830101910161345a565b916104ea6104e56104e160045460ff1690565b1590565b611558565b60408051338152875160208201529096610534917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908990a1518015908115610701575b50611578565b60a08301809361054682513414611598565b6106cd886106c688846106916106888a6101409a6105998c86015180519061059460e08351990198895101928c8b8201519101511515906105856110a7565b9485528b85015215158c840152565b612dbc565b825260c08a01956105be6105b96105b0895161033d565b88519033612d79565b6115b8565b8a516105df9033906001600160a01b03906105d89061033d565b16146115d8565b888184019383855152838386510152019b828d515251908c51015280888c5101528060608c51015260808b51015261061b60a08b510160019052565b600560c08b5101528b51515160e08b510152519361010094858b510152610664610643611c34565b9e8f906106596106538d5161033d565b836119b0565b808c01511515910152565b8d878a019788519101528d6060808b01519101528d6080808b01519101525161033d565b60a08d016119b0565b5160c08b01526106af6106a68287015161033d565b60e08c016119b0565b6106be6101208096015161033d565b908a016119b0565b5142612b17565b9086015251908401524361016084015242610180840152516101a0830152516101c08201526131f6565b5160008152602090f35b9050600154143861052e565b50346102655760003660031901126102655761072761122b565b60046000540361076d5760a061031a916101c0610754610745610ffe565b60208082518301019101611435565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5034610265576000366003190112610265576107a06111f9565b5061031a6101006107af61122b565b6107b7611996565b6107c56004600054146115f8565b61083d61083360a06107d8610745610ffe565b60c081015185515260808101516020865101526108056107fb60e083015161033d565b60408751016119b0565b604081015160608651015261082c6108206020830151151590565b60808751019015159052565b015161033d565b60a08351016119b0565b5191829101526040519182918291909160a060c0820193805183526020810151602084015281600180821b039182604082015116604086015260608101516060860152608081015115156080860152015116910152565b5034610265576000366003190112610265576108ae61122b565b6004600054036108f457602061031a916101406108da6108cc610ffe565b848082518301019101611435565b015151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b5060203660031901126102655760206101c061092761122b565b61046d8160405161093781610f47565b60405161094381610f8a565b600081528152858101906109556119d2565b8252600435815152600082515251868251015261045e611a2a565b50346102655760003660031901126102655761098a61122b565b6004600054036109c65761018061031a9160606101406109ab610745610ffe565b01510151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260136004820152602490fd5b5034610265576000366003190112610265576109f961122b565b600460005403610a4f5761016061031a91610a12610ffe565b60a0610a2d600180831b039260208082518301019101611435565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b815260126004820152602490fd5b506000366003190112610265576020610240610a8261122b565b61046d81610a8e611a2a565b85810190600482515251151560a08251015261045e611a2a565b5034610265576000366003190112610265576020600154604051908152f35b503461026557600036600319011261026557610ae161122b565b600460005403610afe5760406020916101a061023d61022f610ffe565b60405163100960cb60e01b815260086004820152602490fd5b6040908051610b25816103b0565b83526020818101511515908401528101516001600160a01b0316910152565b6060810192916103c29190610b17565b503461026557600036600319011261026557610b6e611154565b50610b7761122b565b600460005403610bae576101a061031a91610100610140610b99610745610ffe565b01510151918291015260405191829182610b44565b60405163100960cb60e01b815260146004820152602490fd5b506000366003190112610265576020610200610be161122b565b61046d81610bed611a2a565b85810190600282515251151560608251015261045e611a2a565b503461026557602036600319011261026557600435610c2581610349565b610c2d61122b565b90600460005403610c855761031a916001610c5c60e093610c4f610745610ffe565b50828060a01b0316611173565b51610c66816103b0565b610c6f816103b0565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600d6004820152602490fd5b503461026557600080600319360112610d10578054610cbb610ffe565b906040519283918252602090604082840152835191826040850152815b838110610cf957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610cd8565b80fd5b503461026557600036600319011261026557610d2d61122b565b600460005403610d725761012061031a916060610d4b610745610ffe565b610d5b6101c08201511515611618565b015191018190526040519081529081906020820190565b60405163100960cb60e01b8152600f6004820152602490fd5b503461026557600036600319011261026557610da561122b565b600460005403610dc257608060209161016061023d61022f610ffe565b60405163100960cb60e01b8152600a6004820152602490fd5b5060203660031901126102655761031a610e72610220600435610dfd81610349565b610e6b610e0861122b565b8092604051610e1681610f47565b604051610e2281610f8a565b6000815281526020810191610e356119d2565b835281516001600160a01b03909116905281516003905251815160800152610e5b611a2a565b9060008252516020820152611cea565b0151151590565b60405191829182901515815260200190565b503461026557600036600319011261026557610e9e61122b565b600460005403610edd57610ecc6020916080610eb8610ffe565b610140938186808794518301019101611435565b015101519182910152604051908152f35b60405163100960cb60e01b815260116004820152602490fd5b90600182811c92168015610f26575b6020831014610f1057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f05565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f6257604052565b610f6a610f30565b604052565b60c081019081106001600160401b03821117610f6257604052565b602081019081106001600160401b03821117610f6257604052565b606081019081106001600160401b03821117610f6257604052565b60a081019081106001600160401b03821117610f6257604052565b601f909101601f19168101906001600160401b03821190821017610f6257604052565b604051906000826002549161101283610ef6565b8083526001938085169081156110865750600114611038575b506103c292500383610fdb565b6002600090815260008051602061354a83398151915294602093509091905b81831061106e5750506103c293508201013861102b565b85548884018501529485019487945091830191611057565b90506103c294506020925060ff191682840152151560051b8201013861102b565b604051906103c282610fa5565b6040519061026082016001600160401b03811183821017610f6257604052565b6040519061012082016001600160401b03811183821017610f6257604052565b6040519061022082016001600160401b03811183821017610f6257604052565b604051906101e082016001600160401b03811183821017610f6257604052565b6040519061016082016001600160401b03811183821017610f6257604052565b6040519061116182610fa5565b60006040838281528260208201520152565b9061117c611154565b9160018060a01b03166000908082526005602052600160ff6040842054166111a3816103b0565b036111ee576040929350815260056020522060ff604051916111c483610fa5565b548181166111d1816103b0565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b6040519061120682610f6f565b8160a06000918281528260208201528260408201528260608201528260808201520152565b6112336110b4565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015261126b6111f9565b61010084015280610120840152806101408401528061016084015280610180840152611295611154565b6101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b51906103c282610349565b8015150361026557565b51906103c2826112ca565b9190826060910312610265576040516112f781610fa5565b80928051600281101561026557604091829184526020810151611319816112ca565b602085015201519161132a83610349565b0152565b91909161016081840312610265576113b26113476110d4565b93611351836112d4565b85526020830151602086015260408301516040860152611373606084016112d4565b60608601526080830151608086015261138e60a084016112d4565b60a086015260c083015160c086015260e083015160e08601526101008093016112df565b90830152565b9080601f83011215610265576040918251926113d384610f8a565b836060938484019381851161026557915b8483106113f45750505050505090565b8583830312610265578351869161140a82610fa5565b84518252602091828601518382015286860151611426816112ca565b878201528152019201916113e4565b6103a08183031261026557610380906114fc61144f6110f4565b93611459836112bf565b8552611467602084016112d4565b602086015260408301516040860152606083015160608601526080830151608086015261149660a084016112bf565b60a086015260c083015160c08601526114b160e084016112bf565b60e08601526101006114c48185016112bf565b9086015261012080840151908601526101406114e28282860161132e565b908601526102a08301516101608601526102c083016113b8565b6101808401526103208101516101a084015261151b61034082016112d4565b6101c08401526103608101516101e0840152015161020082015290565b1561153f57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561155f57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561157f57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561159f57565b60405163100960cb60e01b8152601d6004820152602490fd5b156115bf57565b60405163100960cb60e01b8152601e6004820152602490fd5b156115df57565b60405163100960cb60e01b8152601f6004820152602490fd5b156115ff57565b60405163100960cb60e01b8152600e6004820152602490fd5b1561161f57565b60405163100960cb60e01b815260106004820152602490fd5b1561163f57565b60405163100960cb60e01b815260206004820152602490fd5b1561165f57565b60405163100960cb60e01b815260216004820152602490fd5b1561167f57565b60405163100960cb60e01b815260226004820152602490fd5b1561169f57565b60405163100960cb60e01b815260396004820152602490fd5b156116bf57565b60405163100960cb60e01b8152603a6004820152602490fd5b156116df57565b60405163100960cb60e01b815260336004820152602490fd5b156116ff57565b60405163100960cb60e01b815260346004820152602490fd5b1561171f57565b60405163100960cb60e01b815260356004820152602490fd5b1561173f57565b60405163100960cb60e01b815260366004820152602490fd5b1561175f57565b60405163100960cb60e01b815260376004820152602490fd5b1561177f57565b60405163100960cb60e01b815260386004820152602490fd5b1561179f57565b60405163100960cb60e01b8152602e6004820152602490fd5b156117bf57565b60405163100960cb60e01b8152602f6004820152602490fd5b156117df57565b60405163100960cb60e01b815260306004820152602490fd5b156117ff57565b60405163100960cb60e01b815260316004820152602490fd5b1561181f57565b60405163100960cb60e01b815260326004820152602490fd5b1561183f57565b60405163100960cb60e01b815260276004820152602490fd5b1561185f57565b60405163100960cb60e01b815260286004820152602490fd5b1561187f57565b60405163100960cb60e01b815260296004820152602490fd5b1561189f57565b60405163100960cb60e01b8152602a6004820152602490fd5b156118bf57565b60405163100960cb60e01b8152602b6004820152602490fd5b156118df57565b60405163100960cb60e01b8152602c6004820152602490fd5b156118ff57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561191f57565b60405163100960cb60e01b815260236004820152602490fd5b1561193f57565b602460405163100960cb60e01b8152816004820152fd5b1561195d57565b60405163100960cb60e01b815260256004820152602490fd5b1561197d57565b60405163100960cb60e01b815260266004820152602490fd5b604051906119a382610f8a565b816119ac6111f9565b9052565b6001600160a01b039091169052565b604051906119cc82610f8a565b60008252565b604051906119df82610f6f565b8160a06000918281526040516119f481610f8a565b8381526020820152826040820152826060820152604051611a1481610f8a565b83815260808201520152565b600511156103ba57565b60405190611a3782610f47565b81600081526020611a466119d2565b910152565b60405190611a5882610f47565b60006020838281520152565b6040519061012082016001600160401b03811183821017611abd575b6040528160008082528060208301528060408301528060608301528060808301528060a08301528060c083015260e0820152610100611a46611154565b611ac5610f30565b611a80565b611ad2611114565b90611adb6119bf565b82526000806020840152611aed611a4b565b6040840152611afa611a64565b60608401528060808401528060a08401528060c0840152611b19611a64565b60e0840152611b26611a64565b610100840152611b346119bf565b6101208401528061014084015280610160840152610180830152611b56611154565b6101a0830152611b64611a64565b6101c0830152565b60e060a06103c2939594956020610100850197600180851b03809316865280518287015201519081516005811015611bdd575b6040860152602082015151606086015260408201511515608086015260608201511515838601526080820151511660c0850152015191019015159052565b611be5610399565b611b9f565b516005811015611bf75790565b611bff610399565b90565b60405190611c0f82610f8a565b8160005b60208110611c1f575050565b602090611c2a611154565b8184015201611c13565b611c3c611114565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611c82611a64565b6101408401528061016084015280610180840152611c9e611c02565b6101a08401526101c0830152565b51611bff816103b0565b506040513d6000823e3d90fd5b906001811015611cd45760051b0190565b634e487b7160e01b600052603260045260246000fd5b90611cf3611aca565b91611d02600460005414611638565b6020611d1d611d0f610ffe565b828082518301019101611435565b91611d35611d306104e160045460ff1690565b611658565b7fdaec047d8800b54c015aa48d6d37d33ec5420cb485b62f7e95edc2c08b87483560405180611d65843383611b6c565b0390a1611d7d81518015908115612ad1575b50611678565b01611d888151611bea565b611d9181611a20565b61202c57516020015183526101609081810151916101209283830190815111611db990611918565b85515160011115611dc990611938565b8551519560808401968751611ddd91612b6d565b9460208201958087523414611df190611956565b60a08501928351611e019061033d565b611e0b9033612d1e565b611e1490611976565b6040830133815190611e25916119b0565b83515181516020015251604051611e56819282919091602080604083019460018060a01b0381511684520151910152565b037fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873391a1604051600181527ff67b5442eec6842e73acccde1d66edc01c681e32a823f930b53aa7b097ef0ef190602090a160016101c09889015261014093848701908151611ec49051151590565b606086018051911515909152946101e08901518a51611ee291612b17565b865160200152825160400151611ef790612af4565b86516040015282516060908101518751901515910152825160800151905151611f1f91612b17565b855160800152815160a001511515855190151560a090910152815160c00151855160c00152610200880151855160e0015261010080925101518286510152611f65611c34565b9a8851611f719061033d565b611f7b908d6119b0565b60208901511515151560208d0152604089015160408d0152606089015160608d01525160808c015251611fad9061033d565b611fba9060a08c016119b0565b60c087015160c08b015260e0870151611fd29061033d565b611fdf9060e08c016119b0565b80870151611fec9061033d565b611ff7918b016119b0565b5190880152519086015243908501526101804281860152810151906101a091828601520151905101908201526103c2906131f6565b600161203c829593949551611bea565b61204581611a20565b036123d2575060c0906122086101e06103c29561207f60016120706101006101408a01510151611cac565b612079816103b0565b14611838565b6120956120906101c0880151151590565b611858565b6120ad61020087015161018088015151511015611878565b60016120c26101006101408901510151611cac565b6120cb816103b0565b036123c057610140860151610100015160400151612179906001600160a01b03165b6120fb6080870191826119b0565b60018060a01b03906121193383612112845161033d565b1614611898565b61212334156118b8565b61214161213c61213660a08c015161033d565b33612d1e565b6118d8565b6121526101208a01514210156118f8565b61216961216260a08b015161033d565b915161033d565b6101808a01515151921690612bcc565b6000808080858a01516121a56101a08c019161219f6121988451612b40565b6064900490565b90612b2b565b80918160a08c015251038a8a01526121c56121c08c5161033d565b61033d565b8282156123b7575bf1156123aa575b604051600181527f0c0a9acc8218979821ea9b80614482163e7deb99211c322dd6e45d00ba48d64f90602090a10160019052565b61221660e082015160019052565b81810151602060e0830151015260406101408401510151604060e08301510152612247606060e08301510160019052565b60806101408401510151608060e08301510152600060a060e083015101528161014084015101518260e08301510152600060e0808301510152610100610140840151015161010060e083015101526123976101806122a3611c34565b946122b76122b1825161033d565b876119b0565b6122d06122c76020830151151590565b15156020880152565b6040810151604087015260608101516060870152608081015160808701526123076122fe60a083015161033d565b60a088016119b0565b848101518587015261232861231f60e083015161033d565b60e088016119b0565b61234361233961010083015161033d565b61010088016119b0565b61012081015161012087015260e084015161014087015243610160870152428287015201518051906105946040602084015193015115156123826110a7565b93600085526020850152604084019015159052565b6101a084015201516101c08201526131f6565b6123b2611cb6565b6121d4565b506108fc6121cd565b6121796123cd875161033d565b6120ed565b60026123e18294939451611bea565b6123ea81611a20565b0361266a57506123fd6121c0825161033d565b330361264f5761240d6001611798565b6101c0918282015161241e90151590565b612427906117b8565b61014093848301948551608001511561243f906117d8565b61244934156117f8565b60a084019586516124599061033d565b6124639033612d1e565b61246c90611818565b604051600181527f15b7a8f989a94ee2cbb2ef15cccc477ddeda9bb831d05adebae6f4bd510f17b490602090a160016102009384015286516124ad9061033d565b9285516124b99061033d565b9461018094858801968751515190600160a01b60019003166124da92612bcc565b82515161010091820180519115159091529290918291906101e089015185516020015281516040015185516040015284516060016125189060019052565b815160800151855160800152845160a00160009052815160c00151855160c00152880151845160e001525101518183510152612552611c34565b97865161255e9061033d565b612568908a6119b0565b60208701511515151560208a0152604087015160408a0152606087015160608a0152608087015160808a01525161259e9061033d565b6125ab9060a08a016119b0565b60c086015160c089015260e08601516125c39061033d565b6125d09060e08a016119b0565b808601516125dd9061033d565b6125e89189016119b0565b6101208086015190880152519086015243610160860152429085015251805160208101519060400151151561261b6110a7565b6000815260208101929092521515604082015261263791612dbc565b906101a091828501520151908201526103c2906131f6565b61240d6126636121c061010084015161033d565b3314611798565b60036126798295939551611bea565b61268281611a20565b0361297157916000610220610180938280808087818080806103c29f9e8f6121c0610100612766926080610140955101516101208b01526126da6126cb83878401510151611cac565b6126d4816103b0565b156116d8565b6126f06126eb6101c0830151151590565b6116f8565b6127096127026121c08484015161033d565b3314611718565b6127133415611738565b61272b61272661213660a084015161033d565b611758565b61273c610120820151421015611778565b6101608a6101a083016127526121988251612b40565b80988193015251039a01998a52015161033d565b828215612968575bf11561295b575b51818a8a01526127886121c08c5161033d565b828215612952575bf115612945575b604051600081527fcba112fe45411fe7ca22520e56a0031f6e0483241f971fdbf31b347e84ca29fe90602090a10152816101a08201936127d8855160019052565b610120830151516127f1906001600160a01b03166107fb565b6101c0830194612802865160019052565b828401516020875101526040610140830151015160408751015261283d61283160606101408501510151151590565b60608851019015159052565b6080610140830151015160808751015261286e61286260a06101408501510151151590565b60a08851019015159052565b60c0610140830151015160c08751015261020082015160e087510152516101008651015261289a611c34565b946128a86122b1835161033d565b6128b86122c76020840151151590565b6040820151604087015260608201516060870152608082015160808701526128e66122fe60a084015161033d565b60c082015160c087015261290061231f60e084015161033d565b61291161233961010084015161033d565b6101208201516101208701525161014086015243610160860152428286015201516101a084015201516101c08201526131f6565b61294d611cb6565b612797565b506108fc612790565b612963611cb6565b612775565b506108fc61276e565b60049192506129809051611bea565b61298981611a20565b14612992575050565b6103c2916129a03415611698565b600061024060a08301936129bf6129ba612136875161033d565b6116b8565b604051600081527ff1d53e799d380b3013b8b620ce5c00381af7d8b3a0d260d5536374029f366b3290602090a10152612a56612a4d6129fc611c34565b93612a10612a0a855161033d565b866119b0565b612a29612a206020860151151590565b15156020870152565b6040840151604086015260608401516060860152608084015160808601525161033d565b60a084016119b0565b60c081015160c0830152612a79612a7060e083015161033d565b60e084016119b0565b612a93610100612a8b8184015161033d565b9084016119b0565b61012080820151908301526101408082015190830152436101608301526101804281840152810151906101a0918284015201516101c08201526131f6565b90506001541438611d77565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111612b0a575b821061026557565b612b12612add565b612b02565b9190820191828111612b0a57821061026557565b908103908111612b385790565b611bff612add565b90600582029180830460051481151715612b60575b600583040361026557565b612b68612add565b612b55565b91906000928115918215612b85575b50501561026557565b81819293955002828104821483151715612bbf575b8094612ba95704143880612b7c565b634e487b7160e01b600052601260045260246000fd5b612bc7612add565b612b9a565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152612c4893600093849392849190608081016001600160401b03811182821017612c4f575b6040525193165af1612c38612c31612c5c565b8092612cbe565b5060208082518301019101612ca9565b1561026557565b612c57610f30565b612c1e565b3d15612ca4573d906001600160401b038211612c97575b60405191612c8b601f8201601f191660200184610fdb565b82523d6000602084013e565b612c9f610f30565b612c73565b606090565b908160209103126102655751611bff816112ca565b15612cc65790565b805115612cd557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612cf65790565b805115612d0557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611bff928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152612d6281610fc0565b5193165af1612c38612d72612c5c565b8092612cee565b600091611bff9383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152612d6281610fc0565b9190612dc6611c02565b9260005b60018110612dd85750508252565b80612de560019284611cc3565b51612df08288611cc3565b52612dfb8187611cc3565b506000198114612e0c575b01612dca565b612e14612add565b612e06565b818110612e24575050565b60008155600101612e19565b612e3b600254610ef6565b80612e435750565b601f8111600114612e5657506000600255565b6002600052612e9b90601f0160051c60008051602061354a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612e19565b6000602081208160025555565b612eb06110f4565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152612ef6611a64565b61014084015280610160840152612f0b611c02565b610180840152806101a0840152806101c0840152806101e0840152610200830152565b906103c291805115158252602081015160208301526040810151604083015260608101511515606083015260808101516080830152612f7660a082015160a084019015159052565b60c081015160c083015260e081015160e083015261010080910151910190610b17565b6000915b60018310612faa57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612f9d565b81516001600160a01b031681526103a081019291610380906102009060208181015115159085015260408181015190850152606080820151908501526080808201519085015260a0808201516001600160a01b03169085015260c0818101519085015260e0808201516001600160a01b031690850152610100818101516001600160a01b03169085015261012080820151908501526130816101408083015190860190612f2e565b6101608101516102a08501526130a16101808201516102c0860190612f99565b6101a08101516103208501526101c081015115156103408501526101e08101516103608501520151910152565b90601f82116130db575050565b6103c29160026000526020600020906020601f840160051c83019310613109575b601f0160051c0190612e19565b90915081906130fc565b80519091906001600160401b0381116131e9575b61313b81613136600254610ef6565b6130ce565b602080601f8311600114613177575081929360009261316c575b50508160011b916000199060031b1c191617600255565b015190503880613155565b6002600052601f1983169490919060008051602061354a833981519152926000905b8782106131d15750508360019596106131b8575b505050811b01600255565b015160001960f88460031b161c191690553880806131ad565b80600185968294968601518155019501930190613199565b6131f1610f30565b613127565b610140818101805160a0810151600090156133e4575060600151156133dd5760005b156133505761333d9160e061334b926133066103c296613236612ea8565b946132446122b1835161033d565b6132546122c76020840151151590565b6040820151604087015260608201516060870152608082015160808701526132826122fe60a084015161033d565b60c082015160c08701526132a361329b8684015161033d565b8688016119b0565b6132bd6101006132b58185015161033d565b9088016119b0565b61012090818301918251908801528451908701526101808083019081516101608901526101a09081850151908901526101c0809401519088015251905111159085019015159052565b6020815101516101e08401525101516102008201526133256004600055565b61332e43600155565b60405192839160208301612fd9565b03601f198101835282610fdb565b613113565b505080600080808061336c6121c06101006133b198015161033d565b6101c0860151908282156133d4575bf1156133c7575b61338f60a082015161033d565b6101a061339c835161033d565b9201515151916001600160a01b031690612bcc565b600080556133bf6000600155565b6103c2612e30565b6133cf611cb6565b613382565b506108fc61337b565b6001613218565b9050613218565b6020906043190112610265576040519061340482610f8a565b6044358252565b6020906003190112610265576040519061342482610f8a565b6004358252565b6040519061343882610fa5565b81613441611c02565b815261344b611154565b60208201526040611a46611a64565b6101a081830312610265576134ff613470611134565b9261347a836112bf565b8452613488602084016112d4565b602085015260408301516040850152606083015160608501526080830151608085015260a083015160a08501526134c160c084016112bf565b60c085015260e083015160e08501526101006134de8185016112bf565b908501526101206134f08185016112bf565b908501526101408093016113b8565b9082015290565b608435906103c2826112ca565b60c435906103c2826112ca565b60209060a3190112610265576040519061353982610f8a565b60a4358261354682610349565b5256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 15870,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_algo_v4.rsh:92:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_algo_v4.rsh:298:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_algo_v4.rsh:120:37:after expr stmt semicolon',
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
  "Deployer": Deployer,
  "User_buyTicket": User_buyTicket,
  "User_claim": User_claim,
  "User_delete": User_delete,
  "User_determinWinnerAfterDeadline": User_determinWinnerAfterDeadline,
  "User_optin": User_optin
  };
export const _APIs = {
  User: {
    buyTicket: User_buyTicket,
    claim: User_claim,
    delete: User_delete,
    determinWinnerAfterDeadline: User_determinWinnerAfterDeadline,
    optin: User_optin
    }
  };
