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
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        const v3193 = v3159.adminClaimed;
        
        return v3193;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        
        return v3167;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        
        return v3151;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        
        return v3163;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        
        return v3186;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async (_v3188 ) => {
          const v3188 = stdlib.protect(ctc0, _v3188, null);
        
        const v3189 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3188, ctc6), null);
        const v3190 = {
          None: 0,
          Some: 1
          }[v3189[0]];
        const v3191 = stdlib.eq(v3190, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3191;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        const v3149 = {
          amountOfRaffleToken: v3124,
          cost: v3121,
          creator: v3125,
          deadline: v3119,
          isFeatured: v3118,
          raffleToken: v3123
          };
        
        return v3149;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_randomNumber = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        stdlib.assert(v3186, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:146:28:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:146:28:application)'],
          msg: 'Cannot view this till deadline',
          who: 'Module'
          });
        
        return v3120;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        const v3192 = v3159.currentUserNumber;
        
        return v3192;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        
        return v3123;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        const v3194 = v3159.claimed;
        
        return v3194;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = svs;
      return (await ((async () => {
        
        const v3187 = v3159.winner;
        
        return v3187;}))(...args));
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
  
  
  const v3097 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v3098 = [v3097];
  const v3102 = stdlib.protect(ctc2, interact.Admin, 'for Deployer\'s interact field Admin');
  const v3103 = stdlib.protect(ctc3, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v3104 = stdlib.protect(ctc3, interact.cost, 'for Deployer\'s interact field cost');
  const v3105 = stdlib.protect(ctc2, interact.creator, 'for Deployer\'s interact field creator');
  const v3106 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v3107 = stdlib.protect(ctc4, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v3108 = stdlib.protect(ctc5, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v3111 = v3107 ? stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:5:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:66:59:decimal', stdlib.UInt_max, '0');
  const v3112 = stdlib.protect(ctc3, await interact.random(), {
    at: './raffle_algo_v3.rsh:68:52:application',
    fs: ['at ./raffle_algo_v3.rsh:63:16:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:63:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  
  const v3113 = stdlib.lt(v3104, stdlib.UInt_max);
  stdlib.assert(v3113, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3115 = stdlib.ge(v3104, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:89:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3115, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3107, v3106, v3112, v3104, v3111, v3108, v3103, v3105, v3102],
    evt_cnt: 9,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc3, ctc3, ctc3, ctc5, ctc3, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126], secs: v3128, time: v3127, didSend: v108, from: v3117 } = txn1;
      
      const v3129 = v3098[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:dot', stdlib.UInt_max, '0')];
      const v3130 = stdlib.Array_set(v3129, '0', stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:dot', stdlib.UInt_max, '0'));
      const v3131 = stdlib.Array_set(v3098, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:dot', stdlib.UInt_max, '0'), v3130);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3123
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
  const {data: [v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126], secs: v3128, time: v3127, didSend: v108, from: v3117 } = txn1;
  const v3129 = v3098[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:dot', stdlib.UInt_max, '0')];
  const v3130 = stdlib.Array_set(v3129, '0', stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:dot', stdlib.UInt_max, '0'));
  const v3131 = stdlib.Array_set(v3098, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:76:12:dot', stdlib.UInt_max, '0'), v3130);
  const v3133 = stdlib.lt(v3121, stdlib.UInt_max);
  stdlib.assert(v3133, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3135 = stdlib.ge(v3121, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:89:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3135, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v3117, v3118, v3119, v3120, v3121, v3122, v3123, v3124, v3125, v3126, v3131],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3127,
    onlyIf: true,
    out_tys: [],
    pay: [v3122, [[v3124, v3123]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v3139, time: v3138, didSend: v117, from: v3137 } = txn2;
      
      sim_r.txns.push({
        amt: v3122,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v3142 = v3131[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:93:12:dot', stdlib.UInt_max, '0')];
      const v3143 = v3142[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:93:12:dot', stdlib.UInt_max, '0')];
      const v3144 = stdlib.add(v3143, v3124);
      const v3146 = stdlib.Array_set(v3142, '0', v3144);
      const v3147 = stdlib.Array_set(v3131, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:93:12:dot', stdlib.UInt_max, '0'), v3146);
      sim_r.txns.push({
        amt: v3124,
        kind: 'to',
        tok: v3123
        });
      const v3151 = stdlib.safeAdd(v3139, v3119);
      const v3152 = await ctc.getContractInfo();
      
      const v3155 = v3147[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:124:23:application', stdlib.UInt_max, '0')];
      const v3156 = v3155[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:124:23:application', stdlib.UInt_max, '0')];
      const v3157 = ['None', null];
      const v3158 = {
        adminClaimed: false,
        bal: v3122,
        buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        claimed: false,
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v3156,
        winner: v3157
        };
      const v3159 = v3158;
      const v3160 = v3138;
      const v3163 = v3139;
      const v3166 = v3147;
      const v3167 = v3122;
      
      if (await (async () => {
        const v3181 = v3159.keepGoing;
        const v3182 = v3159.claimed;
        const v3183 = v3182 ? false : true;
        const v3184 = v3181 ? v3183 : false;
        
        return v3184;})()) {
        const v3186 = stdlib.ge(v3163, v3151);
        const v3196 = v3159.bal;
        const v3197 = v3159.raffleBal;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v3126,
          tok: undefined /* Nothing */
          });
        const v4687 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        const v4688 = v4687[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v3126,
          tok: v3123
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v3123
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
  const {data: [], secs: v3139, time: v3138, didSend: v117, from: v3137 } = txn2;
  ;
  const v3142 = v3131[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:93:12:dot', stdlib.UInt_max, '0')];
  const v3143 = v3142[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:93:12:dot', stdlib.UInt_max, '0')];
  const v3144 = stdlib.add(v3143, v3124);
  const v3146 = stdlib.Array_set(v3142, '0', v3144);
  const v3147 = stdlib.Array_set(v3131, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:93:12:dot', stdlib.UInt_max, '0'), v3146);
  ;
  const v3148 = stdlib.addressEq(v3117, v3137);
  stdlib.assert(v3148, {
    at: './raffle_algo_v3.rsh:93:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v3151 = stdlib.safeAdd(v3139, v3119);
  const v3152 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v3152, v3120), {
    at: './raffle_algo_v3.rsh:116:27:application',
    fs: ['at ./raffle_algo_v3.rsh:116:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:116:27:function exp)', 'at ./raffle_algo_v3.rsh:116:27:application call to "liftedInteract" (defined at: ./raffle_algo_v3.rsh:116:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v3155 = v3147[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:124:23:application', stdlib.UInt_max, '0')];
  const v3156 = v3155[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:124:23:application', stdlib.UInt_max, '0')];
  const v3157 = ['None', null];
  const v3158 = {
    adminClaimed: false,
    bal: v3122,
    buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    claimed: false,
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v3156,
    winner: v3157
    };
  let v3159 = v3158;
  let v3160 = v3138;
  let v3163 = v3139;
  let v3166 = v3147;
  let v3167 = v3122;
  
  let txn3 = txn2;
  while (await (async () => {
    const v3181 = v3159.keepGoing;
    const v3182 = v3159.claimed;
    const v3183 = v3182 ? false : true;
    const v3184 = v3181 ? v3183 : false;
    
    return v3184;})()) {
    const v3186 = stdlib.ge(v3163, v3151);
    const v3196 = v3159.bal;
    const v3197 = v3159.raffleBal;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn4;
    switch (v3375[0]) {
      case 'User_buyTicket0_266': {
        const v3378 = v3375[1];
        undefined /* setApiDetails */;
        const v3383 = v3378[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:153:10:spread', stdlib.UInt_max, '0')];
        const v3384 = stdlib.lt(v3163, v3151);
        stdlib.assert(v3384, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v3386 = stdlib.ge(v3383, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:155:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v3386, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Cannot purchase less than 1',
          who: 'Deployer'
          });
        const v3388 = stdlib.safeMul(v3383, v3121);
        const v3465 = stdlib.add(v3167, v3388);
        ;
        ;
        const v3479 = {
          address: v3374,
          amount: v3383
          };
        null;
        const v3480 = true;
        await txn4.getOutput('User_buyTicket', 'v3480', ctc4, v3480);
        const v3487 = v3159.adminClaimed;
        const v3489 = v3159.buyers;
        const v3490 = v3159.claimed;
        const v3491 = v3159.currentUserNumber;
        const v3492 = v3159.keepGoing;
        const v3493 = v3159.percent;
        const v3495 = v3159.winner;
        const v3497 = stdlib.safeAdd(v3491, v3383);
        const v3499 = stdlib.safeAdd(v3196, v3388);
        const v3501 = stdlib.safeAdd(v3489, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:174:42:decimal', stdlib.UInt_max, '1'));
        const v3502 = {
          adminClaimed: v3487,
          bal: v3499,
          buyers: v3501,
          claimed: v3490,
          currentUserNumber: v3497,
          keepGoing: v3492,
          percent: v3493,
          raffleBal: v3197,
          winner: v3495
          };
        const cv3159 = v3502;
        const cv3160 = v3376;
        const cv3163 = v3377;
        const cv3166 = v3166;
        const cv3167 = v3465;
        
        v3159 = cv3159;
        v3160 = cv3160;
        v3163 = cv3163;
        v3166 = cv3166;
        v3167 = cv3167;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_claim0_266': {
        const v3636 = v3375[1];
        undefined /* setApiDetails */;
        const v3655 = v3159.winner;
        const v3656 = {
          None: 0,
          Some: 1
          }[v3655[0]];
        const v3657 = stdlib.eq(v3656, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3657, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3186, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v3661 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
        const v3662 = v3661[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
        const v3663 = stdlib.le(v3197, v3662);
        stdlib.assert(v3663, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v3666 = stdlib.fromSome(v3655, v3117);
        const v3667 = stdlib.addressEq(v3666, v3374);
        stdlib.assert(v3667, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        const v3768 = stdlib.ge(v3377, v3151);
        stdlib.assert(v3768, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:200:13:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:200:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v3785 = stdlib.sub(v3662, v3662);
        const v3787 = stdlib.Array_set(v3661, '0', v3785);
        const v3788 = stdlib.Array_set(v3166, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:201:57:application', stdlib.UInt_max, '0'), v3787);
        ;
        const v3790 = stdlib.safeMul(v3167, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:202:47:decimal', stdlib.UInt_max, '5'));
        const v3791 = stdlib.safeDiv(v3790, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:202:51:decimal', stdlib.UInt_max, '100'));
        const v3792 = stdlib.safeSub(v3196, v3791);
        const v3796 = stdlib.sub(v3167, v3792);
        ;
        const v3797 = true;
        await txn4.getOutput('User_claim', 'v3797', ctc4, v3797);
        const v3805 = v3159.buyers;
        const v3807 = v3159.currentUserNumber;
        const v3809 = v3159.percent;
        const v3813 = {
          adminClaimed: true,
          bal: v3796,
          buyers: v3805,
          claimed: true,
          currentUserNumber: v3807,
          keepGoing: false,
          percent: v3809,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          winner: v3655
          };
        const cv3159 = v3813;
        const cv3160 = v3376;
        const cv3163 = v3377;
        const cv3166 = v3788;
        const cv3167 = v3796;
        
        v3159 = cv3159;
        v3160 = cv3160;
        v3163 = cv3163;
        v3166 = cv3166;
        v3167 = cv3167;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_delete0_266': {
        const v3894 = v3375[1];
        undefined /* setApiDetails */;
        const v3934 = stdlib.addressEq(v3374, v3117);
        const v3935 = stdlib.addressEq(v3374, v3126);
        const v3936 = v3934 ? true : v3935;
        stdlib.assert(v3936, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        stdlib.assert(v3186, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v3940 = v3159.currentUserNumber;
        const v3941 = stdlib.eq(v3940, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:278:42:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3941, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Can only delete when nobody used contract',
          who: 'Deployer'
          });
        ;
        ;
        const v4083 = true;
        await txn4.getOutput('User_delete', 'v4083', ctc4, v4083);
        const v4089 = v3159.adminClaimed;
        const v4091 = v3159.buyers;
        const v4095 = v3159.percent;
        const v4097 = v3159.winner;
        const v4098 = {
          adminClaimed: v4089,
          bal: v3196,
          buyers: v4091,
          claimed: true,
          currentUserNumber: v3940,
          keepGoing: false,
          percent: v4095,
          raffleBal: v3197,
          winner: v4097
          };
        const cv3159 = v4098;
        const cv3160 = v3376;
        const cv3163 = v3377;
        const cv3166 = v3166;
        const cv3167 = v3167;
        
        v3159 = cv3159;
        v3160 = cv3160;
        v3163 = cv3163;
        v3166 = cv3166;
        v3167 = cv3167;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_determinWinnerAfterDeadline0_266': {
        const v4152 = v3375[1];
        undefined /* setApiDetails */;
        const v4210 = v3159.winner;
        const v4211 = {
          None: 0,
          Some: 1
          }[v4210[0]];
        const v4212 = stdlib.eq(v4211, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4212, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3186, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4216 = stdlib.addressEq(v3374, v3126);
        stdlib.assert(v4216, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
          msg: 'You cannot perform this action',
          who: 'Deployer'
          });
        ;
        ;
        const v4359 = v4152[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:217:10:spread', stdlib.UInt_max, '0')];
        const v4365 = stdlib.ge(v3377, v3151);
        stdlib.assert(v4365, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v3.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:228:13:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:228:13:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4371 = stdlib.safeMul(v3167, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:229:47:decimal', stdlib.UInt_max, '5'));
        const v4372 = stdlib.safeDiv(v4371, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:229:51:decimal', stdlib.UInt_max, '100'));
        const v4376 = stdlib.sub(v3167, v4372);
        ;
        const v4381 = stdlib.sub(v4376, v4376);
        ;
        const v4382 = null;
        await txn4.getOutput('User_determinWinnerAfterDeadline', 'v4382', ctc0, v4382);
        const v4391 = v3159.buyers;
        const v4392 = v3159.claimed;
        const v4393 = v3159.currentUserNumber;
        const v4394 = v3159.keepGoing;
        const v4395 = v3159.percent;
        const v4399 = ['Some', v4359];
        const v4400 = {
          adminClaimed: true,
          bal: v4381,
          buyers: v4391,
          claimed: v4392,
          currentUserNumber: v4393,
          keepGoing: v4394,
          percent: v4395,
          raffleBal: v3197,
          winner: v4399
          };
        const cv3159 = v4400;
        const cv3160 = v3376;
        const cv3163 = v3377;
        const cv3166 = v3166;
        const cv3167 = v4381;
        
        v3159 = cv3159;
        v3160 = cv3160;
        v3163 = cv3163;
        v3166 = cv3166;
        v3167 = cv3167;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_266': {
        const v4410 = v3375[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4662 = null;
        await txn4.getOutput('User_optin', 'v4662', ctc0, v4662);
        const cv3159 = v3159;
        const cv3160 = v3376;
        const cv3163 = v3377;
        const cv3166 = v3166;
        const cv3167 = v3167;
        
        v3159 = cv3159;
        v3160 = cv3160;
        v3163 = cv3163;
        v3166 = cv3166;
        v3167 = cv3167;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  const v4687 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
  const v4688 = v4687[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
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
  
  
  const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3201 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v3.rsh:1:23:application',
    fs: ['at ./raffle_algo_v3.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_buyTicket0_266" (defined at: ./raffle_algo_v3.rsh:153:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v3202 = v3201[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3204 = stdlib.lt(v3163, v3151);
  stdlib.assert(v3204, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_buyTicket0_266" (defined at: ./raffle_algo_v3.rsh:153:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v3206 = stdlib.ge(v3202, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:155:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3206, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_buyTicket0_266" (defined at: ./raffle_algo_v3.rsh:153:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Cannot purchase less than 1',
    who: 'User_buyTicket'
    });
  const v3213 = ['User_buyTicket0_266', v3201];
  
  const v3290 = stdlib.safeMul(v3202, v3121);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197, v3213],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3290, [[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:157:53:decimal', stdlib.UInt_max, '0'), v3123]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
      
      switch (v3375[0]) {
        case 'User_buyTicket0_266': {
          const v3378 = v3375[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v3383 = v3378[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:153:10:spread', stdlib.UInt_max, '0')];
          const v3388 = stdlib.safeMul(v3383, v3121);
          const v3465 = stdlib.add(v3167, v3388);
          sim_r.txns.push({
            amt: v3388,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          const v3479 = {
            address: v3374,
            amount: v3383
            };
          null;
          const v3480 = true;
          const v3481 = await txn1.getOutput('User_buyTicket', 'v3480', ctc3, v3480);
          
          const v3487 = v3159.adminClaimed;
          const v3489 = v3159.buyers;
          const v3490 = v3159.claimed;
          const v3491 = v3159.currentUserNumber;
          const v3492 = v3159.keepGoing;
          const v3493 = v3159.percent;
          const v3495 = v3159.winner;
          const v3497 = stdlib.safeAdd(v3491, v3383);
          const v3499 = stdlib.safeAdd(v3196, v3388);
          const v3501 = stdlib.safeAdd(v3489, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:174:42:decimal', stdlib.UInt_max, '1'));
          const v3502 = {
            adminClaimed: v3487,
            bal: v3499,
            buyers: v3501,
            claimed: v3490,
            currentUserNumber: v3497,
            keepGoing: v3492,
            percent: v3493,
            raffleBal: v3197,
            winner: v3495
            };
          const v5660 = v3502;
          const v5662 = v3377;
          const v5663 = v3166;
          const v5664 = v3465;
          const v5665 = v3502.keepGoing;
          const v5666 = v3502.claimed;
          const v5667 = v5666 ? false : true;
          const v5668 = v5665 ? v5667 : false;
          if (v5668) {
            const v5669 = stdlib.ge(v3377, v3151);
            const v5670 = v3502.bal;
            const v5671 = v3502.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: undefined /* Nothing */
              });
            const v5673 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            const v5674 = v5673[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: v3123
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3123
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
          const v3636 = v3375[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3894 = v3375[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4152 = v3375[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4410 = v3375[1];
          
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
  const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
  switch (v3375[0]) {
    case 'User_buyTicket0_266': {
      const v3378 = v3375[1];
      undefined /* setApiDetails */;
      const v3383 = v3378[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:153:10:spread', stdlib.UInt_max, '0')];
      const v3384 = stdlib.lt(v3163, v3151);
      stdlib.assert(v3384, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v3386 = stdlib.ge(v3383, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:155:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v3386, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:50:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Cannot purchase less than 1',
        who: 'User_buyTicket'
        });
      const v3388 = stdlib.safeMul(v3383, v3121);
      const v3465 = stdlib.add(v3167, v3388);
      ;
      ;
      const v3479 = {
        address: v3374,
        amount: v3383
        };
      null;
      const v3480 = true;
      const v3481 = await txn1.getOutput('User_buyTicket', 'v3480', ctc3, v3480);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v3378, v3481), {
          at: './raffle_algo_v3.rsh:153:11:application',
          fs: ['at ./raffle_algo_v3.rsh:153:11:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:153:11:function exp)', 'at ./raffle_algo_v3.rsh:168:14:application call to "ret" (defined at: ./raffle_algo_v3.rsh:158:15:function exp)', 'at ./raffle_algo_v3.rsh:158:15:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:158:15:function exp)'],
          msg: 'out',
          who: 'User_buyTicket'
          });
        }
      else {
        }
      
      const v3487 = v3159.adminClaimed;
      const v3489 = v3159.buyers;
      const v3490 = v3159.claimed;
      const v3491 = v3159.currentUserNumber;
      const v3492 = v3159.keepGoing;
      const v3493 = v3159.percent;
      const v3495 = v3159.winner;
      const v3497 = stdlib.safeAdd(v3491, v3383);
      const v3499 = stdlib.safeAdd(v3196, v3388);
      const v3501 = stdlib.safeAdd(v3489, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:174:42:decimal', stdlib.UInt_max, '1'));
      const v3502 = {
        adminClaimed: v3487,
        bal: v3499,
        buyers: v3501,
        claimed: v3490,
        currentUserNumber: v3497,
        keepGoing: v3492,
        percent: v3493,
        raffleBal: v3197,
        winner: v3495
        };
      const v5660 = v3502;
      const v5662 = v3377;
      const v5663 = v3166;
      const v5664 = v3465;
      const v5665 = v3502.keepGoing;
      const v5666 = v3502.claimed;
      const v5667 = v5666 ? false : true;
      const v5668 = v5665 ? v5667 : false;
      if (v5668) {
        const v5669 = stdlib.ge(v3377, v3151);
        const v5670 = v3502.bal;
        const v5671 = v3502.raffleBal;
        return;
        }
      else {
        ;
        const v5673 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        const v5674 = v5673[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_claim0_266': {
      const v3636 = v3375[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3894 = v3375[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4152 = v3375[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4410 = v3375[1];
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
  
  
  const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3223 = ctc.selfAddress();
  const v3225 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v3.rsh:1:23:application',
    fs: ['at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v3.rsh:189:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v3227 = v3159.winner;
  const v3228 = {
    None: 0,
    Some: 1
    }[v3227[0]];
  const v3229 = stdlib.eq(v3228, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3229, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v3.rsh:189:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  stdlib.assert(v3186, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v3.rsh:189:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v3233 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
  const v3234 = v3233[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
  const v3235 = stdlib.le(v3197, v3234);
  stdlib.assert(v3235, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v3.rsh:189:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v3238 = stdlib.fromSome(v3227, v3117);
  const v3239 = stdlib.addressEq(v3238, v3223);
  stdlib.assert(v3239, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_claim0_266" (defined at: ./raffle_algo_v3.rsh:189:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v3244 = ['User_claim0_266', v3225];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197, v3244],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:199:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:199:14:decimal', stdlib.UInt_max, '0'), v3123]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
      
      switch (v3375[0]) {
        case 'User_buyTicket0_266': {
          const v3378 = v3375[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3636 = v3375[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v3655 = v3159.winner;
          const v3661 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
          const v3662 = v3661[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
          const v3666 = stdlib.fromSome(v3655, v3117);
          ;
          ;
          const v3785 = stdlib.sub(v3662, v3662);
          const v3787 = stdlib.Array_set(v3661, '0', v3785);
          const v3788 = stdlib.Array_set(v3166, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:201:57:application', stdlib.UInt_max, '0'), v3787);
          sim_r.txns.push({
            kind: 'from',
            to: v3666,
            tok: v3123
            });
          const v3790 = stdlib.safeMul(v3167, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:202:47:decimal', stdlib.UInt_max, '5'));
          const v3791 = stdlib.safeDiv(v3790, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:202:51:decimal', stdlib.UInt_max, '100'));
          const v3792 = stdlib.safeSub(v3196, v3791);
          const v3796 = stdlib.sub(v3167, v3792);
          sim_r.txns.push({
            kind: 'from',
            to: v3117,
            tok: undefined /* Nothing */
            });
          const v3797 = true;
          const v3798 = await txn1.getOutput('User_claim', 'v3797', ctc3, v3797);
          
          const v3805 = v3159.buyers;
          const v3807 = v3159.currentUserNumber;
          const v3809 = v3159.percent;
          const v3813 = {
            adminClaimed: true,
            bal: v3796,
            buyers: v3805,
            claimed: true,
            currentUserNumber: v3807,
            keepGoing: false,
            percent: v3809,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            winner: v3655
            };
          const v5750 = v3813;
          const v5752 = v3377;
          const v5753 = v3788;
          const v5754 = v3796;
          const v5755 = v3813.keepGoing;
          const v5756 = v3813.claimed;
          const v5757 = v5756 ? false : true;
          const v5758 = v5755 ? v5757 : false;
          if (v5758) {
            const v5760 = v3813.bal;
            const v5761 = v3813.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: undefined /* Nothing */
              });
            const v5763 = v3788[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            const v5764 = v5763[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: v3123
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3123
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
          const v3894 = v3375[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4152 = v3375[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4410 = v3375[1];
          
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
  const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
  switch (v3375[0]) {
    case 'User_buyTicket0_266': {
      const v3378 = v3375[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3636 = v3375[1];
      undefined /* setApiDetails */;
      const v3655 = v3159.winner;
      const v3656 = {
        None: 0,
        Some: 1
        }[v3655[0]];
      const v3657 = stdlib.eq(v3656, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3657, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      stdlib.assert(v3186, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v3661 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
      const v3662 = v3661[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:193:33:application', stdlib.UInt_max, '0')];
      const v3663 = stdlib.le(v3197, v3662);
      stdlib.assert(v3663, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v3666 = stdlib.fromSome(v3655, v3117);
      const v3667 = stdlib.addressEq(v3666, v3374);
      stdlib.assert(v3667, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      const v3768 = stdlib.ge(v3377, v3151);
      stdlib.assert(v3768, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:200:13:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:200:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v3785 = stdlib.sub(v3662, v3662);
      const v3787 = stdlib.Array_set(v3661, '0', v3785);
      const v3788 = stdlib.Array_set(v3166, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:201:57:application', stdlib.UInt_max, '0'), v3787);
      ;
      const v3790 = stdlib.safeMul(v3167, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:202:47:decimal', stdlib.UInt_max, '5'));
      const v3791 = stdlib.safeDiv(v3790, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:202:51:decimal', stdlib.UInt_max, '100'));
      const v3792 = stdlib.safeSub(v3196, v3791);
      const v3796 = stdlib.sub(v3167, v3792);
      ;
      const v3797 = true;
      const v3798 = await txn1.getOutput('User_claim', 'v3797', ctc3, v3797);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v3636, v3798), {
          at: './raffle_algo_v3.rsh:189:11:application',
          fs: ['at ./raffle_algo_v3.rsh:189:11:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:189:11:function exp)', 'at ./raffle_algo_v3.rsh:204:12:application call to "k" (defined at: ./raffle_algo_v3.rsh:200:13:function exp)', 'at ./raffle_algo_v3.rsh:200:13:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:200:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v3805 = v3159.buyers;
      const v3807 = v3159.currentUserNumber;
      const v3809 = v3159.percent;
      const v3813 = {
        adminClaimed: true,
        bal: v3796,
        buyers: v3805,
        claimed: true,
        currentUserNumber: v3807,
        keepGoing: false,
        percent: v3809,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        winner: v3655
        };
      const v5750 = v3813;
      const v5752 = v3377;
      const v5753 = v3788;
      const v5754 = v3796;
      const v5755 = v3813.keepGoing;
      const v5756 = v3813.claimed;
      const v5757 = v5756 ? false : true;
      const v5758 = v5755 ? v5757 : false;
      if (v5758) {
        const v5760 = v3813.bal;
        const v5761 = v3813.raffleBal;
        return;
        }
      else {
        ;
        const v5763 = v3788[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        const v5764 = v5763[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_delete0_266': {
      const v3894 = v3375[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4152 = v3375[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4410 = v3375[1];
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
  
  
  const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3267 = ctc.selfAddress();
  const v3269 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v3.rsh:1:23:application',
    fs: ['at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v3.rsh:268:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_delete'
    });
  const v3270 = stdlib.addressEq(v3267, v3117);
  const v3271 = stdlib.addressEq(v3267, v3126);
  const v3272 = v3270 ? true : v3271;
  stdlib.assert(v3272, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v3.rsh:268:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_delete'
    });
  stdlib.assert(v3186, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v3.rsh:268:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_delete'
    });
  const v3276 = v3159.currentUserNumber;
  const v3277 = stdlib.eq(v3276, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:278:42:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3277, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_delete0_266" (defined at: ./raffle_algo_v3.rsh:268:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Can only delete when nobody used contract',
    who: 'User_delete'
    });
  const v3282 = ['User_delete0_266', v3269];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197, v3282],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:282:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:282:14:decimal', stdlib.UInt_max, '0'), v3123]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
      
      switch (v3375[0]) {
        case 'User_buyTicket0_266': {
          const v3378 = v3375[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3636 = v3375[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3894 = v3375[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_delete"
            });
          const v3940 = v3159.currentUserNumber;
          ;
          ;
          const v4083 = true;
          const v4084 = await txn1.getOutput('User_delete', 'v4083', ctc3, v4083);
          
          const v4089 = v3159.adminClaimed;
          const v4091 = v3159.buyers;
          const v4095 = v3159.percent;
          const v4097 = v3159.winner;
          const v4098 = {
            adminClaimed: v4089,
            bal: v3196,
            buyers: v4091,
            claimed: true,
            currentUserNumber: v3940,
            keepGoing: false,
            percent: v4095,
            raffleBal: v3197,
            winner: v4097
            };
          const v5840 = v4098;
          const v5842 = v3377;
          const v5843 = v3166;
          const v5844 = v3167;
          const v5845 = v4098.keepGoing;
          const v5846 = v4098.claimed;
          const v5847 = v5846 ? false : true;
          const v5848 = v5845 ? v5847 : false;
          if (v5848) {
            const v5849 = stdlib.ge(v3377, v3151);
            const v5850 = v4098.bal;
            const v5851 = v4098.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: undefined /* Nothing */
              });
            const v5853 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            const v5854 = v5853[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: v3123
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3123
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
          const v4152 = v3375[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4410 = v3375[1];
          
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
  const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
  switch (v3375[0]) {
    case 'User_buyTicket0_266': {
      const v3378 = v3375[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3636 = v3375[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3894 = v3375[1];
      undefined /* setApiDetails */;
      const v3934 = stdlib.addressEq(v3374, v3117);
      const v3935 = stdlib.addressEq(v3374, v3126);
      const v3936 = v3934 ? true : v3935;
      stdlib.assert(v3936, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_delete'
        });
      stdlib.assert(v3186, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_delete'
        });
      const v3940 = v3159.currentUserNumber;
      const v3941 = stdlib.eq(v3940, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:278:42:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3941, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:27:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Can only delete when nobody used contract',
        who: 'User_delete'
        });
      ;
      ;
      const v4083 = true;
      const v4084 = await txn1.getOutput('User_delete', 'v4083', ctc3, v4083);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v3894, v4084), {
          at: './raffle_algo_v3.rsh:268:11:application',
          fs: ['at ./raffle_algo_v3.rsh:268:11:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:268:11:function exp)', 'at ./raffle_algo_v3.rsh:284:14:application call to "ret" (defined at: ./raffle_algo_v3.rsh:283:15:function exp)', 'at ./raffle_algo_v3.rsh:283:15:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:283:15:function exp)'],
          msg: 'out',
          who: 'User_delete'
          });
        }
      else {
        }
      
      const v4089 = v3159.adminClaimed;
      const v4091 = v3159.buyers;
      const v4095 = v3159.percent;
      const v4097 = v3159.winner;
      const v4098 = {
        adminClaimed: v4089,
        bal: v3196,
        buyers: v4091,
        claimed: true,
        currentUserNumber: v3940,
        keepGoing: false,
        percent: v4095,
        raffleBal: v3197,
        winner: v4097
        };
      const v5840 = v4098;
      const v5842 = v3377;
      const v5843 = v3166;
      const v5844 = v3167;
      const v5845 = v4098.keepGoing;
      const v5846 = v4098.claimed;
      const v5847 = v5846 ? false : true;
      const v5848 = v5845 ? v5847 : false;
      if (v5848) {
        const v5849 = stdlib.ge(v3377, v3151);
        const v5850 = v4098.bal;
        const v5851 = v4098.raffleBal;
        return;
        }
      else {
        ;
        const v5853 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        const v5854 = v5853[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4152 = v3375[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4410 = v3375[1];
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
  
  
  const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3246 = ctc.selfAddress();
  const v3248 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v3.rsh:1:23:application',
    fs: ['at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v3.rsh:217:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3252 = v3159.winner;
  const v3253 = {
    None: 0,
    Some: 1
    }[v3252[0]];
  const v3254 = stdlib.eq(v3253, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3254, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v3.rsh:217:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_determinWinnerAfterDeadline'
    });
  stdlib.assert(v3186, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v3.rsh:217:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3258 = stdlib.addressEq(v3246, v3126);
  stdlib.assert(v3258, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v3.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_determinWinnerAfterDeadline0_266" (defined at: ./raffle_algo_v3.rsh:217:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'You cannot perform this action',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3265 = ['User_determinWinnerAfterDeadline0_266', v3248];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197, v3265],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:227:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:227:14:decimal', stdlib.UInt_max, '0'), v3123]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
      
      switch (v3375[0]) {
        case 'User_buyTicket0_266': {
          const v3378 = v3375[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3636 = v3375[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3894 = v3375[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4152 = v3375[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_determinWinnerAfterDeadline"
            });
          ;
          ;
          const v4359 = v4152[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:217:10:spread', stdlib.UInt_max, '0')];
          const v4371 = stdlib.safeMul(v3167, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:229:47:decimal', stdlib.UInt_max, '5'));
          const v4372 = stdlib.safeDiv(v4371, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:229:51:decimal', stdlib.UInt_max, '100'));
          const v4376 = stdlib.sub(v3167, v4372);
          sim_r.txns.push({
            kind: 'from',
            to: v3126,
            tok: undefined /* Nothing */
            });
          const v4381 = stdlib.sub(v4376, v4376);
          sim_r.txns.push({
            kind: 'from',
            to: v3117,
            tok: undefined /* Nothing */
            });
          const v4382 = null;
          const v4383 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v4382', ctc0, v4382);
          
          const v4391 = v3159.buyers;
          const v4392 = v3159.claimed;
          const v4393 = v3159.currentUserNumber;
          const v4394 = v3159.keepGoing;
          const v4395 = v3159.percent;
          const v4399 = ['Some', v4359];
          const v4400 = {
            adminClaimed: true,
            bal: v4381,
            buyers: v4391,
            claimed: v4392,
            currentUserNumber: v4393,
            keepGoing: v4394,
            percent: v4395,
            raffleBal: v3197,
            winner: v4399
            };
          const v5930 = v4400;
          const v5932 = v3377;
          const v5933 = v3166;
          const v5934 = v4381;
          const v5935 = v4400.keepGoing;
          const v5936 = v4400.claimed;
          const v5937 = v5936 ? false : true;
          const v5938 = v5935 ? v5937 : false;
          if (v5938) {
            const v5940 = v4400.bal;
            const v5941 = v4400.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: undefined /* Nothing */
              });
            const v5943 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            const v5944 = v5943[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: v3123
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3123
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
          const v4410 = v3375[1];
          
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
  const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
  switch (v3375[0]) {
    case 'User_buyTicket0_266': {
      const v3378 = v3375[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3636 = v3375[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3894 = v3375[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4152 = v3375[1];
      undefined /* setApiDetails */;
      const v4210 = v3159.winner;
      const v4211 = {
        None: 0,
        Some: 1
        }[v4210[0]];
      const v4212 = stdlib.eq(v4211, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4212, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_determinWinnerAfterDeadline'
        });
      stdlib.assert(v3186, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v4216 = stdlib.addressEq(v3374, v3126);
      stdlib.assert(v4216, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:54:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)', 'at ./raffle_algo_v3.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:134:14:function exp)'],
        msg: 'You cannot perform this action',
        who: 'User_determinWinnerAfterDeadline'
        });
      ;
      ;
      const v4359 = v4152[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:217:10:spread', stdlib.UInt_max, '0')];
      const v4365 = stdlib.ge(v3377, v3151);
      stdlib.assert(v4365, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v3.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v3.rsh:228:13:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:228:13:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v4371 = stdlib.safeMul(v3167, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:229:47:decimal', stdlib.UInt_max, '5'));
      const v4372 = stdlib.safeDiv(v4371, stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:229:51:decimal', stdlib.UInt_max, '100'));
      const v4376 = stdlib.sub(v3167, v4372);
      ;
      const v4381 = stdlib.sub(v4376, v4376);
      ;
      const v4382 = null;
      const v4383 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v4382', ctc0, v4382);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v4152, v4383), {
          at: './raffle_algo_v3.rsh:217:11:application',
          fs: ['at ./raffle_algo_v3.rsh:217:11:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:217:11:function exp)', 'at ./raffle_algo_v3.rsh:232:12:application call to "k" (defined at: ./raffle_algo_v3.rsh:228:13:function exp)', 'at ./raffle_algo_v3.rsh:228:13:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:228:13:function exp)'],
          msg: 'out',
          who: 'User_determinWinnerAfterDeadline'
          });
        }
      else {
        }
      
      const v4391 = v3159.buyers;
      const v4392 = v3159.claimed;
      const v4393 = v3159.currentUserNumber;
      const v4394 = v3159.keepGoing;
      const v4395 = v3159.percent;
      const v4399 = ['Some', v4359];
      const v4400 = {
        adminClaimed: true,
        bal: v4381,
        buyers: v4391,
        claimed: v4392,
        currentUserNumber: v4393,
        keepGoing: v4394,
        percent: v4395,
        raffleBal: v3197,
        winner: v4399
        };
      const v5930 = v4400;
      const v5932 = v3377;
      const v5933 = v3166;
      const v5934 = v4381;
      const v5935 = v4400.keepGoing;
      const v5936 = v4400.claimed;
      const v5937 = v5936 ? false : true;
      const v5938 = v5935 ? v5937 : false;
      if (v5938) {
        const v5940 = v4400.bal;
        const v5941 = v4400.raffleBal;
        return;
        }
      else {
        ;
        const v5943 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        const v5944 = v5943[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_266': {
      const v4410 = v3375[1];
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
  
  
  const [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc2, ctc2, ctc4, ctc7, ctc4, ctc9, ctc4, ctc3, ctc4, ctc4]);
  const v3217 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_algo_v3.rsh:1:23:application',
    fs: ['at ./raffle_algo_v3.rsh:180:26:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:180:26:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to "runUser_optin0_266" (defined at: ./raffle_algo_v3.rsh:180:10:function exp)', 'at ./raffle_algo_v3.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:120:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v3221 = ['User_optin0_266', v3217];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3117, v3118, v3119, v3120, v3121, v3123, v3124, v3125, v3126, v3151, v3159, v3163, v3166, v3167, v3186, v3196, v3197, v3221],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:182:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:182:14:decimal', stdlib.UInt_max, '0'), v3123]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
      
      switch (v3375[0]) {
        case 'User_buyTicket0_266': {
          const v3378 = v3375[1];
          
          break;
          }
        case 'User_claim0_266': {
          const v3636 = v3375[1];
          
          break;
          }
        case 'User_delete0_266': {
          const v3894 = v3375[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_266': {
          const v4152 = v3375[1];
          
          break;
          }
        case 'User_optin0_266': {
          const v4410 = v3375[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          const v4662 = null;
          const v4663 = await txn1.getOutput('User_optin', 'v4662', ctc0, v4662);
          
          const v6020 = v3159;
          const v6022 = v3377;
          const v6023 = v3166;
          const v6024 = v3167;
          const v6025 = v3159.keepGoing;
          const v6026 = v3159.claimed;
          const v6027 = v6026 ? false : true;
          const v6028 = v6025 ? v6027 : false;
          if (v6028) {
            const v6029 = stdlib.ge(v3377, v3151);
            const v6030 = v3159.bal;
            const v6031 = v3159.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: undefined /* Nothing */
              });
            const v6033 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            const v6034 = v6033[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3126,
              tok: v3123
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3123
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
  const {data: [v3375], secs: v3377, time: v3376, didSend: v2611, from: v3374 } = txn1;
  switch (v3375[0]) {
    case 'User_buyTicket0_266': {
      const v3378 = v3375[1];
      return;
      break;
      }
    case 'User_claim0_266': {
      const v3636 = v3375[1];
      return;
      break;
      }
    case 'User_delete0_266': {
      const v3894 = v3375[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_266': {
      const v4152 = v3375[1];
      return;
      break;
      }
    case 'User_optin0_266': {
      const v4410 = v3375[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4662 = null;
      const v4663 = await txn1.getOutput('User_optin', 'v4662', ctc0, v4662);
      if (v2611) {
        stdlib.protect(ctc0, await interact.out(v4410, v4663), {
          at: './raffle_algo_v3.rsh:180:11:application',
          fs: ['at ./raffle_algo_v3.rsh:180:11:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:180:11:function exp)', 'at ./raffle_algo_v3.rsh:184:14:application call to "ret" (defined at: ./raffle_algo_v3.rsh:183:15:function exp)', 'at ./raffle_algo_v3.rsh:183:15:application call to [unknown function] (defined at: ./raffle_algo_v3.rsh:183:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6020 = v3159;
      const v6022 = v3377;
      const v6023 = v3166;
      const v6024 = v3167;
      const v6025 = v3159.keepGoing;
      const v6026 = v3159.claimed;
      const v6027 = v6026 ? false : true;
      const v6028 = v6025 ? v6027 : false;
      if (v6028) {
        const v6029 = stdlib.ge(v3377, v3151);
        const v6030 = v3159.bal;
        const v6031 = v3159.raffleBal;
        return;
        }
      else {
        ;
        const v6033 = v3166[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
        const v6034 = v6033[stdlib.checkedBigNumberify('./raffle_algo_v3.rsh:296:19:application', stdlib.UInt_max, '0')];
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
  appApproval: `CCAPAAEECCEFKTEJEmQRoI0GOUEmBAEAAQEAAQIxGEEHuCpkSSJbNQElWzUCKGQpZFArZFCCFQQTblc7BBPv73gEF49QhgQZWV4pBCfv3mwEKTen9gQpYZ/kBD75YpoEQrPxHgRUaD/tBF9V69UEeTkpUwR6Nv4ABH+ccV8EgsSWBgSRbE/aBKNB0cIEqaV4pgTDb/5uBN/ZIygE53cfLjYaAI4VAG4AQQFmAGQHAAHZAFEAIQDzAcYG5QDjAZYAMQABAJgBFwC+ANEG9QEFADQBJBJEiAeeNBVXAAE1BDEZIhJEgAQVH3x1NARQsCNDNAEkEkSIB340ERY1BEL/3zQBJBJEiAduNBYWNQRC/880ASQSRIgHXjQTFjUEQv+/NAEkEkSIB040EBZRBwg1BEL/rDYaATULIkRC/6I2GgE1CzQBJBJEiAcsKiooNAtQvkkWUQcIRQRNUCJVIxIWUQcINQRC/3g0ASQSRIgHBzQZFjQbFlA0GFA0HRZQNB4WUQcIUDQaFlA1BEL/UjQBJBJEiAbhNBBENBwWNQRC/z80ASQSRIgGzjQVVxIINQRC/y00ASQSRIgGvDQaFjUEQv8dNAEkEkSIBqw0FVcRATUEQv8LNAEkEkSIBpo0FVcrITUEQv75NhoBFzULJa8oNAsWUIEYr1BQNQskNAESRIgGdDQLIls1DDQLVwghNQ2ABOorTNM0DBZQNA1QsDQMiAbpNA0iVY0FBcgFywXOBdEF1EL+moApAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/lYApAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/ZTYaATULJa+AAQM0C1BQNQtC/1KAKQAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/yI0DSNbNQs0EzQWDEQ0CyMPRDQLNBsLSTUNiAX3MQA0CxZQNQyABPhYyAA0DFCwIzUMgAgAAAAAAAANmDQMFlEHCFCwNAwWUQcINQQ0FVcAATQPNA0IFlA0FSEIWyMIFlA0FVcRAVA0FSEJWzQLCBZQNBVXGgFQNBVXGwhQNA4WUDQVVyshUDIGMgc0ETQNCDURNRM1FDUVNBVXGgEXNBVXEQEXFBBBBIk0EzQWDzUQNBUjWzUPNBWBI1s1DjQfNB4WUQcIUDQdFlA0HBZQNBsWUDQaFlA0GRZQNBhQNBdQNBYWUDQVUDQTFlA0ElA0ERZQNBAWUQcIUDQPFlA0DhZQJDIGNQI1AShLAVcAf2cpSwFXf39nK0xX/hFnKjQBFjQCFlBnMRkiEkSIBRE0A0D85UL82DQVVyshSTULIlUjEkQ0EEQ0ElcAEUk1DSJbNQw0DjQMDkQ0HzQLSVcBAEwiVU1JNQ4xABJEMgc0Fg9ENAw0GjQOiAS3NA80ESEFCyEKCgk1DjQRNA4JNQ80DjQfiAR4IzUOgAgAAAAAAAAO1TQOFlEHCFCwNA4WUQcINQQpNA8WUDQVVwkIUClQNBVXEghQKFA0FVcbCFAlr1A0C1AyBjIHNBI0DTQMSQkWXABcADQPNRE1EjUTNRQ1FUL+pjEANB8SMQA0FxIRRDQQRDQVIQlbSTUMIhJEIzULgAgAAAAAAAAP8zQLFlEHCFCwNAsWUQcINQQ0FVcAATQPFlA0FVcJCFApUDQMFlAoUDQVVxsIUDQOFlA0FVcrIVAyBjIHNRM1FDUVQv47NBVXKyEiVSISRDQQRDEANBcSRDIHNBYPRDQRIQULIQoKNQw0ETQMCTULNAw0F4gDfjQLSQk1DDQLNB+IA3EqNQuACAAAAAAAABEeNAtQsDQLNQQpNAwWUDQVVwkIUDQVVxEBUDQVVxIIUDQVVxoBUDQVVxsIUDQOFlApNA1XASBQUDIGMgc0DDURNRM1FDUVQv2oKjULgAgAAAAAAAASNjQLULA0CzUEMgYyBzUTNRRC/YgxADUfNAsiWzUNNAtXCAEXNR40CyEIWzUdNAshC1s1HDQLgRlbNRs0CyEEWzUMNAshBls1GjQLIQdbNRk0C1c5IDUYNAtXWSA1F4AEom/jCTQNFlA0HhZRBwhQNB0WUDQcFlA0GxZQNAwWUDQaFlA0GRZQNBhQNBdQsDQNiAKlIQuvSTULSVcAESWvXABcADUONBuB////////////AQxENBsjD0QhDIgCkCI0GjIKiAJuNB80HhZRBwhQNB0WUDQcFlA0GxZQNAwWUDQaFlA0GRZQNBhQNBdQNA5QgW2vUCMyBkL9DiM0ARJESVcAIDUfSVcgARc1HkkhBFs1HUkhBls1HEkhB1s1G0khDVs1DEkhDls1GkmBSVs1GUlXUSA1GElXcSA1F1eRETUONAsXNQ2ABNUVGRQ0DRZQsDQNiAHiNAyIAb00DlcAETUNNA40DUkiWzQZCBZcAFwANQs0GTQaMRY0ACMISTUACUcDOBQyChJEOBAkEkQ4EU8CEkQ4EhJENB8xABJEMgc0HQg1Fig0DBZQJa9QKFAlr1ApUIAIAAAAAAAAAAVQNAtXABFXAAhQIQSvUDIGMgc0CzQMNRE1EjUTNRQ1FUL7u4gBMCEMiAFlNhoBNQtC/iOIASA2GgE1C0L+/ogBFTYaATULQvogIjE0EkQkMTUSRCIxNhJEIjE3EkSIAPaBjwKvIiJC++FC+ttC/AxC/MZC/S5C/b40ETQXiADTNBJXABEiWzQaNBeIAOkiNBoyCjIJiAD/MRkhBRJEiADkMgpgMgp4CUk1BjIKiACjQvvBIrIBI7IQsgeyCLOJIrIBJLIQshSyEbISs4lIiUwJSTUGMgmIAHqJCUlB/+5JNQaIAHaJSVcAIDUfSVcgARc1HkkhBFs1HUkhBls1HEkhB1s1G0khDVs1GkkhDls1GUlXSSA1GElXaSA1F0mBiQFbNRZJV5FMNRVJgd0BWzUTSVflETUSSYH2AVs1EUlX/gEXNRBJgf8BWzUPgYcCWzUOibFC/1wjNQOJMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEibFC/0RJIhJMNAISEUSJNAY0B0oPQf9BQv9JNAYINQaJsbIVQv8i`,
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
    1252: `713`,
    1253: `713`,
    1254: `714`,
    1255: `714`,
    1256: `714`,
    1257: `714`,
    1258: `714`,
    1259: `714`,
    126: `24`,
    1260: `714`,
    1261: `714`,
    1262: `714`,
    1263: `714`,
    1264: `715`,
    1265: `715`,
    1266: `716`,
    1267: `717`,
    1268: `717`,
    1269: `717`,
    127: `24`,
    1270: `718`,
    1271: `719`,
    1272: `720`,
    1273: `720`,
    1274: `721`,
    1275: `722`,
    1276: `722`,
    1277: `722`,
    1278: `723`,
    1279: `723`,
    128: `24`,
    1280: `724`,
    1281: `724`,
    1282: `725`,
    1283: `725`,
    1284: `725`,
    1285: `726`,
    1286: `726`,
    1287: `727`,
    1288: `728`,
    1289: `729`,
    129: `24`,
    1290: `729`,
    1291: `730`,
    1292: `730`,
    1293: `730`,
    1294: `731`,
    1295: `732`,
    1296: `733`,
    1297: `734`,
    1298: `734`,
    1299: `735`,
    13: `2`,
    130: `24`,
    1300: `736`,
    1301: `737`,
    1302: `738`,
    1303: `739`,
    1304: `739`,
    1305: `740`,
    1306: `740`,
    1307: `740`,
    1308: `741`,
    1309: `742`,
    131: `24`,
    1310: `742`,
    1311: `743`,
    1312: `744`,
    1313: `745`,
    1314: `745`,
    1315: `746`,
    1316: `746`,
    1317: `746`,
    1318: `747`,
    1319: `748`,
    132: `24`,
    1320: `748`,
    1321: `749`,
    1322: `749`,
    1323: `750`,
    1324: `750`,
    1325: `751`,
    1326: `751`,
    1327: `752`,
    1328: `752`,
    1329: `753`,
    133: `24`,
    1330: `753`,
    1331: `753`,
    1332: `755`,
    1333: `755`,
    1334: `756`,
    1335: `756`,
    1336: `756`,
    1337: `757`,
    1338: `758`,
    1339: `759`,
    134: `24`,
    1340: `760`,
    1341: `761`,
    1342: `769`,
    1343: `769`,
    1344: `770`,
    1345: `778`,
    1346: `778`,
    1347: `779`,
    1348: `779`,
    1349: `780`,
    135: `24`,
    1350: `781`,
    1351: `789`,
    1352: `789`,
    1353: `790`,
    1354: `790`,
    1355: `791`,
    1356: `792`,
    1357: `797`,
    1358: `797`,
    1359: `798`,
    136: `24`,
    1360: `798`,
    1361: `799`,
    1362: `800`,
    1363: `800`,
    1364: `801`,
    1365: `802`,
    1366: `802`,
    1367: `803`,
    1368: `803`,
    1369: `804`,
    137: `24`,
    1370: `804`,
    1371: `805`,
    1372: `806`,
    1373: `806`,
    1374: `807`,
    1375: `807`,
    1376: `809`,
    1377: `809`,
    1378: `810`,
    1379: `810`,
    138: `24`,
    1380: `810`,
    1381: `811`,
    1382: `811`,
    1383: `812`,
    1384: `813`,
    1385: `814`,
    1386: `814`,
    1387: `815`,
    1388: `815`,
    1389: `817`,
    139: `24`,
    1390: `817`,
    1391: `818`,
    1392: `818`,
    1393: `818`,
    1394: `819`,
    1395: `820`,
    1396: `820`,
    1397: `821`,
    1398: `821`,
    1399: `821`,
    14: `2`,
    140: `24`,
    1400: `821`,
    1401: `821`,
    1402: `821`,
    1403: `821`,
    1404: `821`,
    1405: `821`,
    1406: `821`,
    1407: `822`,
    1408: `822`,
    1409: `823`,
    141: `24`,
    1410: `824`,
    1411: `825`,
    1412: `825`,
    1413: `826`,
    1414: `826`,
    1415: `827`,
    1416: `828`,
    1417: `828`,
    1418: `829`,
    1419: `830`,
    142: `24`,
    1420: `831`,
    1421: `831`,
    1422: `832`,
    1423: `832`,
    1424: `832`,
    1425: `833`,
    1426: `834`,
    1427: `834`,
    1428: `835`,
    1429: `835`,
    143: `24`,
    1430: `835`,
    1431: `836`,
    1432: `837`,
    1433: `837`,
    1434: `838`,
    1435: `838`,
    1436: `838`,
    1437: `839`,
    1438: `840`,
    1439: `840`,
    144: `24`,
    1440: `841`,
    1441: `841`,
    1442: `841`,
    1443: `842`,
    1444: `843`,
    1445: `843`,
    1446: `844`,
    1447: `844`,
    1448: `844`,
    1449: `845`,
    145: `24`,
    1450: `846`,
    1451: `846`,
    1452: `847`,
    1453: `848`,
    1454: `849`,
    1455: `850`,
    1456: `850`,
    1457: `851`,
    1458: `851`,
    1459: `851`,
    146: `24`,
    1460: `852`,
    1461: `853`,
    1462: `854`,
    1463: `854`,
    1464: `855`,
    1465: `855`,
    1466: `856`,
    1467: `856`,
    1468: `857`,
    1469: `857`,
    147: `24`,
    1470: `858`,
    1471: `858`,
    1472: `859`,
    1473: `859`,
    1474: `860`,
    1475: `860`,
    1476: `861`,
    1477: `861`,
    1478: `861`,
    1479: `863`,
    148: `24`,
    1480: `864`,
    1481: `864`,
    1482: `865`,
    1483: `865`,
    1484: `865`,
    1485: `865`,
    1486: `865`,
    1487: `865`,
    1488: `865`,
    1489: `865`,
    149: `24`,
    1490: `865`,
    1491: `865`,
    1492: `866`,
    1493: `866`,
    1494: `867`,
    1495: `868`,
    1496: `869`,
    1497: `869`,
    1498: `870`,
    1499: `870`,
    15: `2`,
    150: `24`,
    1500: `871`,
    1501: `871`,
    1502: `872`,
    1503: `872`,
    1504: `873`,
    1505: `873`,
    1506: `874`,
    1507: `874`,
    1508: `875`,
    1509: `875`,
    151: `24`,
    1510: `875`,
    1511: `877`,
    1512: `877`,
    1513: `878`,
    1514: `878`,
    1515: `879`,
    1516: `879`,
    1517: `880`,
    1518: `881`,
    1519: `882`,
    152: `24`,
    1520: `882`,
    1521: `883`,
    1522: `883`,
    1523: `884`,
    1524: `884`,
    1525: `884`,
    1526: `885`,
    1527: `886`,
    1528: `886`,
    1529: `887`,
    153: `24`,
    1530: `887`,
    1531: `888`,
    1532: `888`,
    1533: `889`,
    1534: `890`,
    1535: `890`,
    1536: `891`,
    1537: `891`,
    1538: `892`,
    1539: `892`,
    154: `24`,
    1540: `893`,
    1541: `894`,
    1542: `894`,
    1543: `895`,
    1544: `895`,
    1545: `896`,
    1546: `896`,
    1547: `897`,
    1548: `898`,
    1549: `898`,
    155: `24`,
    1550: `899`,
    1551: `899`,
    1552: `900`,
    1553: `900`,
    1554: `901`,
    1555: `902`,
    1556: `902`,
    1557: `903`,
    1558: `903`,
    1559: `904`,
    156: `24`,
    1560: `904`,
    1561: `905`,
    1562: `906`,
    1563: `906`,
    1564: `907`,
    1565: `907`,
    1566: `908`,
    1567: `908`,
    1568: `909`,
    1569: `910`,
    157: `24`,
    1570: `910`,
    1571: `911`,
    1572: `911`,
    1573: `912`,
    1574: `912`,
    1575: `912`,
    1576: `913`,
    1577: `913`,
    1578: `914`,
    1579: `914`,
    158: `24`,
    1580: `915`,
    1581: `915`,
    1582: `915`,
    1583: `916`,
    1584: `916`,
    1585: `917`,
    1586: `917`,
    1587: `917`,
    1588: `917`,
    1589: `917`,
    159: `24`,
    1590: `917`,
    1591: `918`,
    1592: `918`,
    1593: `919`,
    1594: `920`,
    1595: `921`,
    1596: `921`,
    1597: `922`,
    1598: `923`,
    1599: `923`,
    16: `2`,
    160: `25`,
    1600: `923`,
    1601: `924`,
    1602: `925`,
    1603: `925`,
    1604: `926`,
    1605: `927`,
    1606: `928`,
    1607: `928`,
    1608: `929`,
    1609: `930`,
    161: `25`,
    1610: `931`,
    1611: `931`,
    1612: `932`,
    1613: `933`,
    1614: `934`,
    1615: `934`,
    1616: `935`,
    1617: `936`,
    1618: `937`,
    1619: `937`,
    162: `25`,
    1620: `938`,
    1621: `939`,
    1622: `940`,
    1623: `940`,
    1624: `941`,
    1625: `942`,
    1626: `943`,
    1627: `943`,
    1628: `944`,
    1629: `945`,
    163: `26`,
    1630: `945`,
    1631: `946`,
    1632: `947`,
    1633: `949`,
    1634: `949`,
    1635: `950`,
    1636: `950`,
    1637: `950`,
    1638: `951`,
    1639: `951`,
    164: `26`,
    1640: `952`,
    1641: `953`,
    1642: `954`,
    1643: `954`,
    1644: `955`,
    1645: `956`,
    1646: `956`,
    1647: `956`,
    1648: `957`,
    1649: `958`,
    165: `26`,
    1650: `959`,
    1651: `959`,
    1652: `960`,
    1653: `960`,
    1654: `961`,
    1655: `961`,
    1656: `962`,
    1657: `962`,
    1658: `963`,
    1659: `963`,
    166: `26`,
    1660: `963`,
    1661: `963`,
    1662: `963`,
    1663: `963`,
    1664: `963`,
    1665: `963`,
    1666: `963`,
    1667: `963`,
    1668: `963`,
    1669: `964`,
    167: `26`,
    1670: `965`,
    1671: `969`,
    1672: `969`,
    1673: `970`,
    1674: `971`,
    1675: `972`,
    1676: `976`,
    1677: `976`,
    1678: `977`,
    1679: `977`,
    168: `26`,
    1680: `977`,
    1681: `978`,
    1682: `980`,
    1683: `980`,
    1684: `981`,
    1685: `981`,
    1686: `982`,
    1687: `982`,
    1688: `982`,
    1689: `984`,
    169: `26`,
    1690: `984`,
    1691: `985`,
    1692: `985`,
    1693: `986`,
    1694: `987`,
    1695: `987`,
    1696: `987`,
    1697: `988`,
    1698: `989`,
    1699: `989`,
    17: `2`,
    170: `26`,
    1700: `990`,
    1701: `991`,
    1702: `992`,
    1703: `992`,
    1704: `993`,
    1705: `994`,
    1706: `995`,
    1707: `995`,
    1708: `996`,
    1709: `997`,
    171: `26`,
    1710: `998`,
    1711: `998`,
    1712: `999`,
    1713: `1000`,
    1714: `1001`,
    1715: `1001`,
    1716: `1002`,
    1717: `1003`,
    1718: `1004`,
    1719: `1004`,
    172: `26`,
    1720: `1005`,
    1721: `1006`,
    1722: `1007`,
    1723: `1007`,
    1724: `1008`,
    1725: `1009`,
    1726: `1009`,
    1727: `1010`,
    1728: `1011`,
    1729: `1011`,
    173: `26`,
    1730: `1012`,
    1731: `1013`,
    1732: `1013`,
    1733: `1014`,
    1734: `1015`,
    1735: `1016`,
    1736: `1017`,
    1737: `1017`,
    1738: `1018`,
    1739: `1018`,
    174: `26`,
    1740: `1018`,
    1741: `1020`,
    1742: `1021`,
    1743: `1021`,
    1744: `1022`,
    1745: `1023`,
    1746: `1025`,
    1747: `1026`,
    1748: `1026`,
    1749: `1026`,
    175: `26`,
    1750: `1027`,
    1751: `1027`,
    1752: `1028`,
    1753: `1029`,
    1754: `1029`,
    1755: `1029`,
    1756: `1030`,
    1757: `1031`,
    1758: `1031`,
    1759: `1032`,
    176: `26`,
    1760: `1033`,
    1761: `1033`,
    1762: `1034`,
    1763: `1035`,
    1764: `1035`,
    1765: `1036`,
    1766: `1037`,
    1767: `1037`,
    1768: `1038`,
    1769: `1039`,
    177: `26`,
    1770: `1039`,
    1771: `1040`,
    1772: `1041`,
    1773: `1041`,
    1774: `1042`,
    1775: `1043`,
    1776: `1043`,
    1777: `1044`,
    1778: `1045`,
    1779: `1045`,
    178: `26`,
    1780: `1046`,
    1781: `1047`,
    1782: `1047`,
    1783: `1048`,
    1784: `1049`,
    1785: `1049`,
    1786: `1050`,
    1787: `1051`,
    1788: `1051`,
    1789: `1052`,
    179: `26`,
    1790: `1053`,
    1791: `1053`,
    1792: `1054`,
    1793: `1055`,
    1794: `1055`,
    1795: `1056`,
    1796: `1057`,
    1797: `1057`,
    1798: `1057`,
    1799: `1058`,
    18: `2`,
    180: `26`,
    1800: `1058`,
    1801: `1059`,
    1802: `1060`,
    1803: `1060`,
    1804: `1060`,
    1805: `1061`,
    1806: `1061`,
    1807: `1062`,
    1808: `1062`,
    1809: `1062`,
    181: `26`,
    1810: `1063`,
    1811: `1063`,
    1812: `1064`,
    1813: `1064`,
    1814: `1065`,
    1815: `1066`,
    1816: `1066`,
    1817: `1067`,
    1818: `1067`,
    1819: `1067`,
    182: `26`,
    1820: `1067`,
    1821: `1067`,
    1822: `1067`,
    1823: `1068`,
    1824: `1068`,
    1825: `1069`,
    1826: `1070`,
    1827: `1071`,
    1828: `1073`,
    1829: `1073`,
    183: `26`,
    1830: `1074`,
    1831: `1074`,
    1832: `1074`,
    1833: `1075`,
    1834: `1075`,
    1835: `1076`,
    1836: `1076`,
    1837: `1076`,
    1838: `1079`,
    1839: `1079`,
    184: `26`,
    1840: `1080`,
    1841: `1080`,
    1842: `1080`,
    1843: `1081`,
    1844: `1081`,
    1845: `1082`,
    1846: `1082`,
    1847: `1083`,
    1848: `1083`,
    1849: `1084`,
    185: `26`,
    1850: `1085`,
    1851: `1086`,
    1852: `1087`,
    1853: `1087`,
    1854: `1088`,
    1855: `1089`,
    1856: `1090`,
    1857: `1090`,
    1858: `1091`,
    1859: `1091`,
    186: `26`,
    1860: `1092`,
    1861: `1092`,
    1862: `1093`,
    1863: `1093`,
    1864: `1094`,
    1865: `1094`,
    1866: `1097`,
    1867: `1097`,
    1868: `1098`,
    1869: `1098`,
    187: `26`,
    1870: `1099`,
    1871: `1100`,
    1872: `1101`,
    1873: `1102`,
    1874: `1102`,
    1875: `1103`,
    1876: `1104`,
    1877: `1104`,
    1878: `1105`,
    1879: `1105`,
    188: `26`,
    1880: `1106`,
    1881: `1106`,
    1882: `1107`,
    1883: `1108`,
    1884: `1109`,
    1885: `1109`,
    1886: `1110`,
    1887: `1111`,
    1888: `1112`,
    1889: `1113`,
    189: `26`,
    1890: `1113`,
    1891: `1114`,
    1892: `1114`,
    1893: `1115`,
    1894: `1116`,
    1895: `1117`,
    1896: `1117`,
    1897: `1118`,
    1898: `1119`,
    1899: `1122`,
    19: `2`,
    190: `26`,
    1900: `1122`,
    1901: `1123`,
    1902: `1123`,
    1903: `1124`,
    1904: `1125`,
    1905: `1128`,
    1906: `1128`,
    1907: `1129`,
    1908: `1129`,
    1909: `1130`,
    191: `26`,
    1910: `1131`,
    1911: `1131`,
    1912: `1132`,
    1913: `1133`,
    1914: `1133`,
    1915: `1134`,
    1916: `1135`,
    1917: `1136`,
    1918: `1137`,
    1919: `1138`,
    192: `26`,
    1920: `1139`,
    1921: `1140`,
    1922: `1141`,
    1923: `1142`,
    1924: `1143`,
    1925: `1144`,
    1926: `1145`,
    1927: `1146`,
    1928: `1146`,
    1929: `1146`,
    193: `26`,
    1930: `1146`,
    1931: `1146`,
    1932: `1146`,
    1933: `1146`,
    1934: `1146`,
    1935: `1146`,
    1936: `1146`,
    1937: `1147`,
    1938: `1148`,
    1939: `1148`,
    194: `26`,
    1940: `1149`,
    1941: `1149`,
    1942: `1149`,
    1943: `1150`,
    1944: `1150`,
    1945: `1150`,
    1946: `1151`,
    1947: `1152`,
    1948: `1152`,
    1949: `1153`,
    195: `26`,
    1950: `1154`,
    1951: `1155`,
    1952: `1155`,
    1953: `1156`,
    1954: `1156`,
    1955: `1157`,
    1956: `1157`,
    1957: `1158`,
    1958: `1158`,
    1959: `1159`,
    196: `26`,
    1960: `1159`,
    1961: `1160`,
    1962: `1160`,
    1963: `1161`,
    1964: `1161`,
    1965: `1162`,
    1966: `1162`,
    1967: `1163`,
    1968: `1163`,
    1969: `1164`,
    197: `26`,
    1970: `1164`,
    1971: `1164`,
    1972: `1166`,
    1973: `1166`,
    1974: `1166`,
    1975: `1167`,
    1976: `1167`,
    1977: `1168`,
    1978: `1168`,
    1979: `1168`,
    198: `26`,
    1980: `1169`,
    1981: `1169`,
    1982: `1169`,
    1983: `1170`,
    1984: `1170`,
    1985: `1171`,
    1986: `1171`,
    1987: `1171`,
    1988: `1173`,
    1989: `1173`,
    199: `26`,
    1990: `1173`,
    1991: `1174`,
    1992: `1174`,
    1993: `1174`,
    1994: `1175`,
    1995: `1175`,
    1996: `1176`,
    1997: `1176`,
    1998: `1176`,
    1999: `1178`,
    2: `2`,
    20: `2`,
    200: `26`,
    2000: `1178`,
    2001: `1178`,
    2002: `1179`,
    2003: `1179`,
    2004: `1179`,
    2005: `1180`,
    2006: `1180`,
    2007: `1181`,
    2008: `1181`,
    2009: `1181`,
    201: `26`,
    2010: `1183`,
    2011: `1184`,
    2012: `1184`,
    2013: `1185`,
    2014: `1186`,
    2015: `1187`,
    2016: `1188`,
    2017: `1188`,
    2018: `1189`,
    2019: `1190`,
    202: `26`,
    2020: `1191`,
    2021: `1192`,
    2022: `1192`,
    2023: `1193`,
    2024: `1194`,
    2025: `1195`,
    2026: `1196`,
    2027: `1196`,
    2028: `1197`,
    2029: `1198`,
    203: `26`,
    2030: `1199`,
    2031: `1199`,
    2032: `1199`,
    2033: `1200`,
    2034: `1200`,
    2035: `1200`,
    2036: `1201`,
    2037: `1202`,
    2038: `1203`,
    2039: `1204`,
    204: `26`,
    2040: `1204`,
    2041: `1204`,
    2042: `1206`,
    2043: `1206`,
    2044: `1206`,
    2045: `1208`,
    2046: `1208`,
    2047: `1208`,
    2048: `1210`,
    2049: `1210`,
    205: `26`,
    2050: `1210`,
    2051: `1212`,
    2052: `1212`,
    2053: `1212`,
    2054: `1214`,
    2055: `1214`,
    2056: `1214`,
    2057: `1216`,
    2058: `1216`,
    2059: `1218`,
    206: `26`,
    2060: `1218`,
    2061: `1219`,
    2062: `1219`,
    2063: `1219`,
    2064: `1220`,
    2065: `1220`,
    2066: `1221`,
    2067: `1221`,
    2068: `1221`,
    2069: `1222`,
    207: `28`,
    2070: `1223`,
    2071: `1225`,
    2072: `1225`,
    2073: `1226`,
    2074: `1226`,
    2075: `1227`,
    2076: `1227`,
    2077: `1227`,
    2078: `1229`,
    2079: `1230`,
    208: `31`,
    2080: `1230`,
    2081: `1231`,
    2082: `1231`,
    2083: `1232`,
    2084: `1232`,
    2085: `1233`,
    2086: `1233`,
    2087: `1233`,
    2088: `1235`,
    2089: `1235`,
    209: `31`,
    2090: `1236`,
    2091: `1236`,
    2092: `1237`,
    2093: `1238`,
    2094: `1240`,
    2095: `1240`,
    2096: `1240`,
    2097: `1242`,
    2098: `1242`,
    2099: `1243`,
    21: `2`,
    210: `32`,
    2100: `1244`,
    2101: `1244`,
    2102: `1245`,
    2103: `1246`,
    2104: `1248`,
    2105: `1249`,
    2106: `1249`,
    2107: `1250`,
    2108: `1250`,
    2109: `1251`,
    211: `33`,
    2110: `1251`,
    2111: `1251`,
    2112: `1252`,
    2113: `1252`,
    2114: `1252`,
    2115: `1254`,
    2116: `1255`,
    2117: `1255`,
    2118: `1256`,
    2119: `1257`,
    212: `34`,
    2120: `1257`,
    2121: `1258`,
    2122: `1258`,
    2123: `1259`,
    2124: `1259`,
    2125: `1260`,
    2126: `1261`,
    2127: `1263`,
    2128: `1264`,
    2129: `1264`,
    213: `37`,
    2130: `1265`,
    2131: `1266`,
    2132: `1266`,
    2133: `1267`,
    2134: `1267`,
    2135: `1268`,
    2136: `1268`,
    2137: `1269`,
    2138: `1269`,
    2139: `1270`,
    214: `37`,
    2140: `1271`,
    2141: `1273`,
    2142: `1274`,
    2143: `1276`,
    2144: `1277`,
    2145: `1278`,
    2146: `1279`,
    2147: `1279`,
    2148: `1280`,
    2149: `1280`,
    215: `37`,
    2150: `1281`,
    2151: `1281`,
    2152: `1281`,
    2153: `1282`,
    2154: `1284`,
    2155: `1285`,
    2156: `1286`,
    2157: `1286`,
    2158: `1286`,
    2159: `1287`,
    216: `38`,
    2160: `1288`,
    2161: `1288`,
    2162: `1289`,
    2163: `1289`,
    2164: `1289`,
    2165: `1290`,
    2166: `1292`,
    2167: `1293`,
    2168: `1293`,
    2169: `1293`,
    217: `38`,
    2170: `1294`,
    2171: `1294`,
    2172: `1295`,
    2173: `1296`,
    2174: `1296`,
    2175: `1296`,
    2176: `1297`,
    2177: `1298`,
    2178: `1298`,
    2179: `1299`,
    218: `39`,
    2180: `1300`,
    2181: `1300`,
    2182: `1301`,
    2183: `1302`,
    2184: `1302`,
    2185: `1303`,
    2186: `1304`,
    2187: `1304`,
    2188: `1305`,
    2189: `1306`,
    219: `39`,
    2190: `1306`,
    2191: `1307`,
    2192: `1308`,
    2193: `1308`,
    2194: `1309`,
    2195: `1310`,
    2196: `1310`,
    2197: `1311`,
    2198: `1312`,
    2199: `1312`,
    22: `2`,
    220: `39`,
    2200: `1313`,
    2201: `1314`,
    2202: `1314`,
    2203: `1315`,
    2204: `1316`,
    2205: `1316`,
    2206: `1317`,
    2207: `1318`,
    2208: `1318`,
    2209: `1319`,
    221: `40`,
    2210: `1320`,
    2211: `1320`,
    2212: `1320`,
    2213: `1321`,
    2214: `1321`,
    2215: `1322`,
    2216: `1323`,
    2217: `1323`,
    2218: `1323`,
    2219: `1324`,
    222: `40`,
    2220: `1324`,
    2221: `1325`,
    2222: `1326`,
    2223: `1326`,
    2224: `1326`,
    2225: `1327`,
    2226: `1328`,
    2227: `1328`,
    2228: `1329`,
    2229: `1330`,
    223: `42`,
    2230: `1330`,
    2231: `1330`,
    2232: `1331`,
    2233: `1331`,
    2234: `1332`,
    2235: `1333`,
    2236: `1333`,
    2237: `1333`,
    2238: `1334`,
    2239: `1335`,
    224: `42`,
    2240: `1335`,
    2241: `1336`,
    2242: `1337`,
    2243: `1337`,
    2244: `1337`,
    2245: `1338`,
    2246: `1338`,
    2247: `1339`,
    2248: `1340`,
    2249: `1340`,
    225: `43`,
    2250: `1340`,
    2251: `1341`,
    2252: `1342`,
    2253: `1342`,
    2254: `1343`,
    2255: `1344`,
    2256: `1344`,
    2257: `1344`,
    2258: `1345`,
    2259: `1346`,
    226: `44`,
    2260: `1346`,
    2261: `1347`,
    2262: `1348`,
    2263: `1348`,
    2264: `1348`,
    2265: `1349`,
    2266: `1350`,
    2267: `1350`,
    2268: `1351`,
    2269: `1351`,
    227: `45`,
    2270: `1351`,
    2271: `1352`,
    2272: `1353`,
    2273: `1353`,
    2274: `1354`,
    2275: `1356`,
    2276: `1357`,
    2277: `1357`,
    2278: `1357`,
    2279: `1359`,
    228: `48`,
    2280: `1360`,
    2281: `1360`,
    2282: `1361`,
    2283: `1364`,
    2284: `1364`,
    2285: `1365`,
    2286: `1365`,
    2287: `1366`,
    2288: `1367`,
    2289: `1368`,
    229: `48`,
    2290: `1369`,
    2291: `1369`,
    2292: `1370`,
    2293: `1371`,
    2294: `1371`,
    2295: `1372`,
    2296: `1372`,
    2297: `1373`,
    2298: `1373`,
    2299: `1374`,
    23: `2`,
    230: `48`,
    2300: `1375`,
    2301: `1376`,
    2302: `1376`,
    2303: `1377`,
    2304: `1378`,
    2305: `1379`,
    2306: `1380`,
    2307: `1380`,
    2308: `1381`,
    2309: `1382`,
    231: `48`,
    2310: `1383`,
    2311: `1385`,
    2312: `1386`,
    2313: `1386`,
    2314: `1386`,
    2315: `1388`,
    2316: `1389`,
    2317: `1390`,
    2318: `1391`,
    2319: `1392`,
    232: `48`,
    2320: `1392`,
    2321: `1393`,
    2322: `1394`,
    2323: `1395`,
    2324: `1396`,
    2325: `1398`,
    2326: `1398`,
    2327: `1399`,
    2328: `1399`,
    2329: `1400`,
    233: `48`,
    2330: `1401`,
    2331: `1402`,
    2332: `1402`,
    2333: `1402`,
    2334: `1403`,
    2335: `1403`,
    2336: `1403`,
    2337: `1405`,
    2338: `1405`,
    2339: `1406`,
    234: `49`,
    2340: `1407`,
    2341: `1407`,
    2342: `1408`,
    2343: `1410`,
    2344: `1411`,
    2345: `1411`,
    2346: `1412`,
    235: `49`,
    236: `50`,
    237: `51`,
    238: `53`,
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
  warnings: [`API User_claim may use up to 5 accounts, but the limit is 4. API User_claim starts at /app/raffle_algo_v3.rsh:120:37:application.`, `API User_determinWinnerAfterDeadline may use up to 5 accounts, but the limit is 4. API User_determinWinnerAfterDeadline starts at /app/raffle_algo_v3.rsh:120:37:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/raffle_algo_v3.rsh:120:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"address payable","name":"elem8","type":"address"},{"internalType":"address payable","name":"elem9","type":"address"}],"internalType":"struct T12","name":"v6090","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"address payable","name":"elem8","type":"address"},{"internalType":"address payable","name":"elem9","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_266","type":"tuple"},{"internalType":"bool","name":"_User_claim0_266","type":"bool"},{"internalType":"bool","name":"_User_delete0_266","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_266","type":"tuple"},{"internalType":"bool","name":"_User_optin0_266","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3480","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3797","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4083","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4382","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4662","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_adminClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6047","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6051","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_randomNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_userClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v6069","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6083","type":"address"}],"name":"User_determinWinnerAfterDeadline","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v6093","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_266","type":"tuple"},{"internalType":"bool","name":"_User_claim0_266","type":"bool"},{"internalType":"bool","name":"_User_delete0_266","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_266","type":"tuple"},{"internalType":"bool","name":"_User_optin0_266","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v6096","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62003d8f38819003918201601f19168301916001600160401b03831184841017620006a45780849261014094604052833981010312620007c1576040519061014082016001600160401b03811183821017620006a4576040528051825260208101518015158103620007c157620000de9161012091602085015260408101516040850152606081015160608501526080810151608085015260a081015160a0850152620000b360c08201620007e2565b60c085015260e081015160e0850152620000d16101008201620007e2565b61010085015201620007e2565b6101208201524360035560405161026081016001600160401b03811182821017620006a4576040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526040518060c081011060018060401b0360c083011117620006a4576000918160c061024093016040528381528360208201528360408201528360608201528360808201528360a082015261010082015282610120820152826101408201528261016082015282610180820152620001b1620007f7565b6101a0820152826101c0820152826101e0820152826102008201528261022082015201526040519081604081011060018060401b03604084011117620006a4576040820160405262000202620007f7565b82526200020e62000818565b602083015260ff60045416620007a8577f9660c10419d34cce8fbb42cdf0cb6de03e621f5bc15c0c2d5e328a48af41e507610160604051338152835160208201526020840151151560408201526040840151606082015260608401516080820152608084015160a082015260a084015160c082015260018060a01b0360c08501511660e082015260e084015161010082015260018060a01b036101008501511661012082015260018060a01b0361012085015116610140820152a1805180159081156200079b575b50156200078257600082515260006020835101526000604083510152815160208301515260001960808201511015620007695760016080820151106200075057346200073757604051916001600160401b03610160840190811190841117620006a457602091610160840160405260008452600083850152600060408501526000606085015260006080850152600060a0850152600060c0850152600060e0850152600061010085015260006101208501526200039262000818565b6101408501523384528281015115158385015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c085015260e081015160e085015260018060a01b036101008201511661010085015261012060018060a01b039101511661012084015201518051604060208201519101511515604051916200043083620007c6565b60008352602083015260408201526200044862000818565b9160005b60018110620006e757505081526101408201526001600055436001556101406040519160018060a01b0381511660208401526020810151151560408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260018060a01b0360c08201511660e084015260e081015161010084015260018060a01b036101008201511661012084015260018060a01b036101208201511682840152015161016082016000905b60018210620006ba576101a08452836101c081016001600160401b03811182821017620006a45760405280516001600160401b038111620006a457600254600181811c9116801562000699575b60208210146200068357601f811162000619575b50602091601f8211600114620005af57918192600092620005a3575b50508160011b916000199060031b1c1916176002555b6040516135079081620008888239f35b0151905082806200057d565b601f19821692600260005260206000209160005b8581106200060057508360019510620005e6575b505050811b0160025562000593565b015160001960f88460031b161c19169055828080620005d7565b91926020600181928685015181550194019201620005c3565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000678575b601f0160051c01905b8181106200066b575062000561565b600081556001016200065c565b909150819062000653565b634e487b7160e01b600052602260045260246000fd5b90607f16906200054d565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000500565b620006f381836200085f565b516200070082866200085f565b526200070d81856200085f565b50600019811462000721576001016200044c565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541438620002d6565b60405163100960cb60e01b815260156004820152602490fd5b600080fd5b606081019081106001600160401b03821117620006a457604052565b51906001600160a01b0382168203620007c157565b604051906200080682620007c6565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620006a4576040528260005b8281106200084857505050565b829062000854620007f7565b81840152016200083b565b906001811015620008715760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e685146101f857806308e8b3fb146101ef5780631e93b0f1146101e6578063213b7923146101dd57806336e56ea5146101d457806347dc4e6c146101cb578063573b8510146101c25780635cd91bc2146101b95780635fde30d8146101b05780636a672754146101a75780636cf1d8021461019e57806373c86a71146101955780637888d2df1461018c5780637a2b54dc14610183578063832307571461017a578063883513de146101715780638ddecb6d146101685780639686b6e91461015f578063a579242414610156578063ab53f2c61461014d578063c4807dc714610144578063d184691f1461013b578063eaa4fd51146101325763fa726c840361000e5761012d610e84565b61000e565b5061012d610ddb565b5061012d610d8b565b5061012d610d13565b5061012d610c9e565b5061012d610c07565b5061012d610bc7565b5061012d610b54565b5061012d610ac7565b5061012d610aa8565b5061012d610a68565b5061012d6109df565b5061012d610970565b5061012d61090d565b5061012d610894565b5061012d610786565b5061012d61070d565b5061012d610479565b5061012d61041e565b5061012d6103c4565b5061012d61035a565b5061012d61031e565b5061012d61026a565b50346102655760003660031901126102655761021261122b565b60046000540361024c57606060209161012061023d61022f610ffe565b858082518301019101611435565b01519182910152604051908152f35b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b5060e03660031901126102655761027f61122b565b6040519061028c82610f47565b600435825260c036602319011261026557604051916102aa83610f6f565b6024359260058410156102655761030e9381526102c63661337c565b60208201526064356102d7816112ca565b60408201526102e4613497565b60608201526102f2366134b1565b60808201526102ff6134a4565b60a08201526020820152611cea565b60405160008152602090f35b0390f35b5034610265576000366003190112610265576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361026557565b503461026557602036600319011261026557610377600435610349565b61037f61122b565b5060405163100960cb60e01b8152600c6004820152602490fd5b50634e487b7160e01b600052602160045260246000fd5b600211156103ba57565b6103c2610399565b565b50346102655760203660031901126102655760606103f56004356103e781610349565b6103ef611154565b50611173565b60408051918051610405816103b0565b8352602081015115156020840152015115156040820152f35b5060003660031901126102655760206101e061043861122b565b61046d81610444611a2a565b85810190600182515251151560408251015261045e611a2a565b90600082525186820152611cea565b01511515604051908152f35b506020806003193601126102655761048f61122b565b506106f761049c3661339c565b916104a56133bc565b6000906104b56001835414611538565b6104ce6104c0610ffe565b8480825183010191016133eb565b916104ea6104e56104e160045460ff1690565b1590565b611558565b60408051338152875160208201529096610534917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908990a1518015908115610701575b50611578565b60a08301809361054682513414611598565b6106cd886106c688846106916106888a6101409a6105998c86015180519061059460e08351990198895101928c8b8201519101511515906105856110a7565b9485528b85015215158c840152565b612d4c565b825260c08a01956105be6105b96105b0895161033d565b88519033612d09565b6115b8565b8a516105df9033906001600160a01b03906105d89061033d565b16146115d8565b888184019383855152838386510152019b828d515251908c51015280888c5101528060608c51015260808b51015261061b60a08b510160019052565b600560c08b5101528b51515160e08b510152519361010094858b510152610664610643611c34565b9e8f906106596106538d5161033d565b836119b0565b808c01511515910152565b8d878a019788519101528d6060808b01519101528d6080808b01519101525161033d565b60a08d016119b0565b5160c08b01526106af6106a68287015161033d565b60e08c016119b0565b6106be6101208096015161033d565b908a016119b0565b5142612aa7565b9086015251908401524361016084015242610180840152516101a0830152516101c0820152613186565b5160008152602090f35b9050600154143861052e565b50346102655760003660031901126102655761072761122b565b60046000540361076d5760a061031a916101c0610754610745610ffe565b60208082518301019101611435565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5034610265576000366003190112610265576107a06111f9565b5061031a6101006107af61122b565b6107b7611996565b6107c56004600054146115f8565b61083d61083360a06107d8610745610ffe565b60c081015185515260808101516020865101526108056107fb60e083015161033d565b60408751016119b0565b604081015160608651015261082c6108206020830151151590565b60808751019015159052565b015161033d565b60a08351016119b0565b5191829101526040519182918291909160a060c0820193805183526020810151602084015281600180821b039182604082015116604086015260608101516060860152608081015115156080860152015116910152565b5034610265576000366003190112610265576108ae61122b565b6004600054036108f457602061031a916101406108da6108cc610ffe565b848082518301019101611435565b015151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b5060203660031901126102655760206101c061092761122b565b61046d8160405161093781610f47565b60405161094381610f8a565b600081528152858101906109556119d2565b8252600435815152600082515251868251015261045e611a2a565b50346102655760003660031901126102655761098a61122b565b6004600054036109c65761018061031a9160606101406109ab610745610ffe565b01510151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260136004820152602490fd5b5034610265576000366003190112610265576109f961122b565b600460005403610a4f5761016061031a91610a12610ffe565b60a0610a2d600180831b039260208082518301019101611435565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b815260126004820152602490fd5b506000366003190112610265576020610240610a8261122b565b61046d81610a8e611a2a565b85810190600482515251151560a08251015261045e611a2a565b5034610265576000366003190112610265576020600154604051908152f35b503461026557600036600319011261026557610ae161122b565b600460005403610afe5760406020916101a061023d61022f610ffe565b60405163100960cb60e01b815260086004820152602490fd5b6040908051610b25816103b0565b83526020818101511515908401528101516001600160a01b0316910152565b6060810192916103c29190610b17565b503461026557600036600319011261026557610b6e611154565b50610b7761122b565b600460005403610bae576101a061031a91610100610140610b99610745610ffe565b01510151918291015260405191829182610b44565b60405163100960cb60e01b815260146004820152602490fd5b506000366003190112610265576020610200610be161122b565b61046d81610bed611a2a565b85810190600282515251151560608251015261045e611a2a565b503461026557602036600319011261026557600435610c2581610349565b610c2d61122b565b90600460005403610c855761031a916001610c5c60e093610c4f610745610ffe565b50828060a01b0316611173565b51610c66816103b0565b610c6f816103b0565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600d6004820152602490fd5b503461026557600080600319360112610d10578054610cbb610ffe565b906040519283918252602090604082840152835191826040850152815b838110610cf957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610cd8565b80fd5b503461026557600036600319011261026557610d2d61122b565b600460005403610d725761012061031a916060610d4b610745610ffe565b610d5b6101c08201511515611618565b015191018190526040519081529081906020820190565b60405163100960cb60e01b8152600f6004820152602490fd5b503461026557600036600319011261026557610da561122b565b600460005403610dc257608060209161016061023d61022f610ffe565b60405163100960cb60e01b8152600a6004820152602490fd5b5060203660031901126102655761031a610e72610220600435610dfd81610349565b610e6b610e0861122b565b8092604051610e1681610f47565b604051610e2281610f8a565b6000815281526020810191610e356119d2565b835281516001600160a01b03909116905281516003905251815160800152610e5b611a2a565b9060008252516020820152611cea565b0151151590565b60405191829182901515815260200190565b503461026557600036600319011261026557610e9e61122b565b600460005403610edd57610ecc6020916080610eb8610ffe565b610140938186808794518301019101611435565b015101519182910152604051908152f35b60405163100960cb60e01b815260116004820152602490fd5b90600182811c92168015610f26575b6020831014610f1057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f05565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f6257604052565b610f6a610f30565b604052565b60c081019081106001600160401b03821117610f6257604052565b602081019081106001600160401b03821117610f6257604052565b606081019081106001600160401b03821117610f6257604052565b60a081019081106001600160401b03821117610f6257604052565b601f909101601f19168101906001600160401b03821190821017610f6257604052565b604051906000826002549161101283610ef6565b8083526001938085169081156110865750600114611038575b506103c292500383610fdb565b600260009081526000805160206134db83398151915294602093509091905b81831061106e5750506103c293508201013861102b565b85548884018501529485019487945091830191611057565b90506103c294506020925060ff191682840152151560051b8201013861102b565b604051906103c282610fa5565b6040519061026082016001600160401b03811183821017610f6257604052565b6040519061012082016001600160401b03811183821017610f6257604052565b6040519061022082016001600160401b03811183821017610f6257604052565b604051906101e082016001600160401b03811183821017610f6257604052565b6040519061016082016001600160401b03811183821017610f6257604052565b6040519061116182610fa5565b60006040838281528260208201520152565b9061117c611154565b9160018060a01b03166000908082526005602052600160ff6040842054166111a3816103b0565b036111ee576040929350815260056020522060ff604051916111c483610fa5565b548181166111d1816103b0565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b6040519061120682610f6f565b8160a06000918281528260208201528260408201528260608201528260808201520152565b6112336110b4565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015261126b6111f9565b61010084015280610120840152806101408401528061016084015280610180840152611295611154565b6101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b51906103c282610349565b8015150361026557565b51906103c2826112ca565b9190826060910312610265576040516112f781610fa5565b80928051600281101561026557604091829184526020810151611319816112ca565b602085015201519161132a83610349565b0152565b91909161016081840312610265576113b26113476110d4565b93611351836112d4565b85526020830151602086015260408301516040860152611373606084016112d4565b60608601526080830151608086015261138e60a084016112d4565b60a086015260c083015160c086015260e083015160e08601526101008093016112df565b90830152565b9080601f83011215610265576040918251926113d384610f8a565b836060938484019381851161026557915b8483106113f45750505050505090565b8583830312610265578351869161140a82610fa5565b84518252602091828601518382015286860151611426816112ca565b878201528152019201916113e4565b6103a08183031261026557610380906114fc61144f6110f4565b93611459836112bf565b8552611467602084016112d4565b602086015260408301516040860152606083015160608601526080830151608086015261149660a084016112bf565b60a086015260c083015160c08601526114b160e084016112bf565b60e08601526101006114c48185016112bf565b9086015261012080840151908601526101406114e28282860161132e565b908601526102a08301516101608601526102c083016113b8565b6101808401526103208101516101a084015261151b61034082016112d4565b6101c08401526103608101516101e0840152015161020082015290565b1561153f57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561155f57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561157f57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561159f57565b60405163100960cb60e01b8152601d6004820152602490fd5b156115bf57565b60405163100960cb60e01b8152601e6004820152602490fd5b156115df57565b60405163100960cb60e01b8152601f6004820152602490fd5b156115ff57565b60405163100960cb60e01b8152600e6004820152602490fd5b1561161f57565b60405163100960cb60e01b815260106004820152602490fd5b1561163f57565b60405163100960cb60e01b815260206004820152602490fd5b1561165f57565b60405163100960cb60e01b815260216004820152602490fd5b1561167f57565b60405163100960cb60e01b815260226004820152602490fd5b1561169f57565b60405163100960cb60e01b815260396004820152602490fd5b156116bf57565b60405163100960cb60e01b8152603a6004820152602490fd5b156116df57565b60405163100960cb60e01b815260336004820152602490fd5b156116ff57565b60405163100960cb60e01b815260346004820152602490fd5b1561171f57565b60405163100960cb60e01b815260356004820152602490fd5b1561173f57565b60405163100960cb60e01b815260366004820152602490fd5b1561175f57565b60405163100960cb60e01b815260376004820152602490fd5b1561177f57565b60405163100960cb60e01b815260386004820152602490fd5b1561179f57565b60405163100960cb60e01b8152602e6004820152602490fd5b156117bf57565b60405163100960cb60e01b8152602f6004820152602490fd5b156117df57565b60405163100960cb60e01b815260306004820152602490fd5b156117ff57565b60405163100960cb60e01b815260316004820152602490fd5b1561181f57565b60405163100960cb60e01b815260326004820152602490fd5b1561183f57565b60405163100960cb60e01b815260276004820152602490fd5b1561185f57565b60405163100960cb60e01b815260286004820152602490fd5b1561187f57565b60405163100960cb60e01b815260296004820152602490fd5b1561189f57565b60405163100960cb60e01b8152602a6004820152602490fd5b156118bf57565b60405163100960cb60e01b8152602b6004820152602490fd5b156118df57565b60405163100960cb60e01b8152602c6004820152602490fd5b156118ff57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561191f57565b60405163100960cb60e01b815260236004820152602490fd5b1561193f57565b602460405163100960cb60e01b8152816004820152fd5b1561195d57565b60405163100960cb60e01b815260256004820152602490fd5b1561197d57565b60405163100960cb60e01b815260266004820152602490fd5b604051906119a382610f8a565b816119ac6111f9565b9052565b6001600160a01b039091169052565b604051906119cc82610f8a565b60008252565b604051906119df82610f6f565b8160a06000918281526040516119f481610f8a565b8381526020820152826040820152826060820152604051611a1481610f8a565b83815260808201520152565b600511156103ba57565b60405190611a3782610f47565b81600081526020611a466119d2565b910152565b60405190611a5882610f47565b60006020838281520152565b6040519061012082016001600160401b03811183821017611abd575b6040528160008082528060208301528060408301528060608301528060808301528060a08301528060c083015260e0820152610100611a46611154565b611ac5610f30565b611a80565b611ad2611114565b90611adb6119bf565b82526000806020840152611aed611a4b565b6040840152611afa611a64565b60608401528060808401528060a08401528060c0840152611b19611a64565b60e0840152611b26611a64565b610100840152611b346119bf565b6101208401528061014084015280610160840152610180830152611b56611154565b6101a0830152611b64611a64565b6101c0830152565b60e060a06103c2939594956020610100850197600180851b03809316865280518287015201519081516005811015611bdd575b6040860152602082015151606086015260408201511515608086015260608201511515838601526080820151511660c0850152015191019015159052565b611be5610399565b611b9f565b516005811015611bf75790565b611bff610399565b90565b60405190611c0f82610f8a565b8160005b60208110611c1f575050565b602090611c2a611154565b8184015201611c13565b611c3c611114565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611c82611a64565b6101408401528061016084015280610180840152611c9e611c02565b6101a08401526101c0830152565b51611bff816103b0565b506040513d6000823e3d90fd5b906001811015611cd45760051b0190565b634e487b7160e01b600052603260045260246000fd5b90611cf3611aca565b91611d02600460005414611638565b6020611d1d611d0f610ffe565b828082518301019101611435565b91611d35611d306104e160045460ff1690565b611658565b7fdaec047d8800b54c015aa48d6d37d33ec5420cb485b62f7e95edc2c08b87483560405180611d65843383611b6c565b0390a1611d7d81518015908115612a61575b50611678565b01611d888151611bea565b611d9181611a20565b61202c57516020015183526101609081810151916101209283830190815111611db990611918565b85515160011115611dc990611938565b8551519560808401968751611ddd91612afd565b9460208201958087523414611df190611956565b60a08501928351611e019061033d565b611e0b9033612cae565b611e1490611976565b6040830133815190611e25916119b0565b83515181516020015251604051611e56819282919091602080604083019460018060a01b0381511684520151910152565b037fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873391a1604051600181527f7170462fb9ec8d0ef116bed9b1e9e4c2ed92fbd529293a6f5dd3701c5d7aae6990602090a160016101c09889015261014093848701908151611ec49051151590565b606086018051911515909152946101e08901518a51611ee291612aa7565b865160200152825160400151611ef790612a84565b86516040015282516060908101518751901515910152825160800151905151611f1f91612aa7565b855160800152815160a001511515855190151560a090910152815160c00151855160c00152610200880151855160e0015261010080925101518286510152611f65611c34565b9a8851611f719061033d565b611f7b908d6119b0565b60208901511515151560208d0152604089015160408d0152606089015160608d01525160808c015251611fad9061033d565b611fba9060a08c016119b0565b60c087015160c08b015260e0870151611fd29061033d565b611fdf9060e08c016119b0565b80870151611fec9061033d565b611ff7918b016119b0565b5190880152519086015243908501526101804281860152810151906101a091828601520151905101908201526103c290613186565b600161203c829594939551611bea565b61204581611a20565b036123d3575082916122096101e060c09361208060016120716101006101406103c29b01510151611cac565b61207a816103b0565b14611838565b6120966120916101c0880151151590565b611858565b6120ae61020087015161018088015151511015611878565b60016120c36101006101408901510151611cac565b6120cc816103b0565b036123c15761014086015161010001516040015161217a906001600160a01b03165b6120fc6080870191826119b0565b60018060a01b039061211a3383612113845161033d565b1614611898565b61212434156118b8565b61214261213d61213760a08c015161033d565b33612cae565b6118d8565b6121536101208a01514210156118f8565b61216a61216360a08b015161033d565b915161033d565b6101808a01515151921690612b5c565b6000808080858a01516121a66101a08c01916121a06121998451612ad0565b6064900490565b90612abb565b80918160a08c015251038a8a01526121c66121c18c5161033d565b61033d565b8282156123b8575bf1156123ab575b604051600181527f029d3290f58c281ab430464895258e665b06dd2d90bacfcc31674a374e6096a890602090a10160019052565b61221760e082015160019052565b81810151602060e0830151015260406101408401510151604060e08301510152612248606060e08301510160019052565b60806101408401510151608060e08301510152600060a060e083015101528161014084015101518260e08301510152600060e0808301510152610100610140840151015161010060e083015101526123986101806122a4611c34565b946122b86122b2825161033d565b876119b0565b6122d16122c86020830151151590565b15156020880152565b6040810151604087015260608101516060870152608081015160808701526123086122ff60a083015161033d565b60a088016119b0565b848101518587015261232961232060e083015161033d565b60e088016119b0565b61234461233a61010083015161033d565b61010088016119b0565b61012081015161012087015260e084015161014087015243610160870152428287015201518051906105946040602084015193015115156123836110a7565b93600085526020850152604084019015159052565b6101a084015201516101c0820152613186565b6123b3611cb6565b6121d5565b506108fc6121ce565b61217a6123ce875161033d565b6120ee565b60026123df8251611bea565b6123e881611a20565b036125fd5750826123ff6121c16103c2955161033d565b33036125e25761240f6001611798565b6101c09161242761242284840151151590565b6117b8565b610140906125ac6124b683850196612444608089510151156117d8565b61244e34156117f8565b60a08601976124686124636121378b5161033d565b611818565b604051600181527f69e583ec8c38d85bedddfa766d5bbd7321243c4a4e821471e9e3a901f7609ad790602090a160016102009586015280515115159461010093848094019687519015159052565b6101e08801516020875101526040825101516040875101526124dc606087510160019052565b608082510151608087510152600060a08751015260c08251015160c08751015287015160e086510152510151818451015261257561256c61251b611c34565b9861252f612529895161033d565b8b6119b0565b61254861253f60208a0151151590565b151560208c0152565b604088015160408b0152606088015160608b0152608088015160808b01525161033d565b60a089016119b0565b60c085015160c088015261259861258f60e087015161033d565b60e089016119b0565b6125a48186015161033d565b9087016119b0565b61012080840151908601525190840152436101608401526101804281850152810151906101a09182850152015190820152613186565b61240f6125f66121c161010084015161033d565b3314611798565b60036126098251611bea565b61261281611a20565b0361290157916000610220610180938280808087818080806103c29f9e8f6121c16101006126f6926080610140955101516101208b015261266a61265b83878401510151611cac565b612664816103b0565b156116d8565b61268061267b6101c0830151151590565b6116f8565b6126996126926121c18484015161033d565b3314611718565b6126a33415611738565b6126bb6126b661213760a084015161033d565b611758565b6126cc610120820151421015611778565b6101608a6101a083016126e26121998251612ad0565b80988193015251039a01998a52015161033d565b8282156128f8575bf1156128eb575b51818a8a01526127186121c18c5161033d565b8282156128e2575bf1156128d5575b604051600081527f8925284066daec14ccedfa9c591e94a55b8459422eb9d9e3f72b3f0cd0e0f75690602090a10152816101a0820193612768855160019052565b61012083015151612781906001600160a01b03166107fb565b6101c0830194612792865160019052565b82840151602087510152604061014083015101516040875101526127cd6127c160606101408501510151151590565b60608851019015159052565b608061014083015101516080875101526127fe6127f260a06101408501510151151590565b60a08851019015159052565b60c0610140830151015160c08751015261020082015160e087510152516101008651015261282a611c34565b946128386122b2835161033d565b6128486122c86020840151151590565b6040820151604087015260608201516060870152608082015160808701526128766122ff60a084015161033d565b60c082015160c087015261289061232060e084015161033d565b6128a161233a61010084015161033d565b6101208201516101208701525161014086015243610160860152428286015201516101a084015201516101c0820152613186565b6128dd611cb6565b612727565b506108fc612720565b6128f3611cb6565b612705565b506108fc6126fe565b60049192506129109051611bea565b61291981611a20565b14612922575050565b6103c2916129303415611698565b600061024060a083019361294f61294a612137875161033d565b6116b8565b604051600081527f919b402eeda403175f52ae3c77bada1c4651639728d14ff97f001c9b1dece3b790602090a101526129e66129dd61298c611c34565b936129a061299a855161033d565b866119b0565b6129b96129b06020860151151590565b15156020870152565b6040840151604086015260608401516060860152608084015160808601525161033d565b60a084016119b0565b60c081015160c0830152612a09612a0060e083015161033d565b60e084016119b0565b612a23610100612a1b8184015161033d565b9084016119b0565b61012080820151908301526101408082015190830152436101608301526101804281840152810151906101a0918284015201516101c0820152613186565b90506001541438611d77565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111612a9a575b821061026557565b612aa2612a6d565b612a92565b9190820191828111612a9a57821061026557565b908103908111612ac85790565b611bff612a6d565b90600582029180830460051481151715612af0575b600583040361026557565b612af8612a6d565b612ae5565b91906000928115918215612b15575b50501561026557565b81819293955002828104821483151715612b4f575b8094612b395704143880612b0c565b634e487b7160e01b600052601260045260246000fd5b612b57612a6d565b612b2a565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152612bd893600093849392849190608081016001600160401b03811182821017612bdf575b6040525193165af1612bc8612bc1612bec565b8092612c4e565b5060208082518301019101612c39565b1561026557565b612be7610f30565b612bae565b3d15612c34573d906001600160401b038211612c27575b60405191612c1b601f8201601f191660200184610fdb565b82523d6000602084013e565b612c2f610f30565b612c03565b606090565b908160209103126102655751611bff816112ca565b15612c565790565b805115612c6557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612c865790565b805115612c9557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611bff928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152612cf281610fc0565b5193165af1612bc8612d02612bec565b8092612c7e565b600091611bff9383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152612cf281610fc0565b9190612d56611c02565b9260005b60018110612d685750508252565b80612d7560019284611cc3565b51612d808288611cc3565b52612d8b8187611cc3565b506000198114612d9c575b01612d5a565b612da4612a6d565b612d96565b818110612db4575050565b60008155600101612da9565b612dcb600254610ef6565b80612dd35750565b601f8111600114612de657506000600255565b6002600052612e2b90601f0160051c6000805160206134db833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612da9565b6000602081208160025555565b612e406110f4565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152612e86611a64565b61014084015280610160840152612e9b611c02565b610180840152806101a0840152806101c0840152806101e0840152610200830152565b906103c291805115158252602081015160208301526040810151604083015260608101511515606083015260808101516080830152612f0660a082015160a084019015159052565b60c081015160c083015260e081015160e083015261010080910151910190610b17565b6000915b60018310612f3a57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612f2d565b81516001600160a01b031681526103a081019291610380906102009060208181015115159085015260408181015190850152606080820151908501526080808201519085015260a0808201516001600160a01b03169085015260c0818101519085015260e0808201516001600160a01b031690850152610100818101516001600160a01b03169085015261012080820151908501526130116101408083015190860190612ebe565b6101608101516102a08501526130316101808201516102c0860190612f29565b6101a08101516103208501526101c081015115156103408501526101e08101516103608501520151910152565b90601f821161306b575050565b6103c29160026000526020600020906020601f840160051c83019310613099575b601f0160051c0190612da9565b909150819061308c565b80519091906001600160401b038111613179575b6130cb816130c6600254610ef6565b61305e565b602080601f831160011461310757508192936000926130fc575b50508160011b916000199060031b1c191617600255565b0151905038806130e5565b6002600052601f198316949091906000805160206134db833981519152926000905b878210613161575050836001959610613148575b505050811b01600255565b015160001960f88460031b161c1916905538808061313d565b80600185968294968601518155019501930190613129565b613181610f30565b6130b7565b610140818101805160a0810151600090156133755750606001511561336e5760005b156132e0576132cd9160e06132db926132966103c2966131c6612e38565b946131d46122b2835161033d565b6131e46122c86020840151151590565b6040820151604087015260608201516060870152608082015160808701526132126122ff60a084015161033d565b60c082015160c087015261323361322b8684015161033d565b8688016119b0565b61324d6101006132458185015161033d565b9088016119b0565b61012090818301918251908801528451908701526101808083019081516101608901526101a09081850151908901526101c0809401519088015251905111159085019015159052565b6020815101516101e08401525101516102008201526132b56004600055565b6132be43600155565b60405192839160208301612f69565b03601f198101835282610fdb565b6130a3565b505080610100613342920160008080806132fd6121c1865161033d565b6101c087015190828215613365575bf115613358575b6101a061332d61332660a085015161033d565b925161033d565b9201515151916001600160a01b031690612b5c565b600080556133506000600155565b6103c2612dc0565b613360611cb6565b613313565b506108fc61330c565b60016131a8565b90506131a8565b6020906043190112610265576040519061339582610f8a565b6044358252565b602090600319011261026557604051906133b582610f8a565b6004358252565b604051906133c982610fa5565b816133d2611c02565b81526133dc611154565b60208201526040611a46611a64565b6101a08183031261026557613490613401611134565b9261340b836112bf565b8452613419602084016112d4565b602085015260408301516040850152606083015160608501526080830151608085015260a083015160a085015261345260c084016112bf565b60c085015260e083015160e085015261010061346f8185016112bf565b908501526101206134818185016112bf565b908501526101408093016113b8565b9082015290565b608435906103c2826112ca565b60c435906103c2826112ca565b60209060a319011261026557604051906134ca82610f8a565b60a435826134d782610349565b5256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 15759,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_algo_v3.rsh:92:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_algo_v3.rsh:297:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_algo_v3.rsh:120:37:after expr stmt semicolon',
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
