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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc0
    });
  const ctc8 = stdlib.T_Object({
    adminClaimed: ctc2,
    bal: ctc3,
    buyers: ctc3,
    claimed: ctc2,
    currentUserNumber: ctc3,
    keepGoing: ctc2,
    percent: ctc3,
    raffleBal: ctc3,
    winner: ctc7
    });
  const ctc9 = stdlib.T_Object({
    amountOfRaffleToken: ctc3,
    asset: ctc1,
    cost: ctc3,
    creator: ctc0,
    deadline: ctc3,
    isFeatured: ctc2,
    raffleToken: ctc1
    });
  const ctc10 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc10;
  
  
  const Info_adminClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        const v3558 = v3521.adminClaimed;
        
        return v3558;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        
        return v3564;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        
        return v3512;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        
        return v3525;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        
        return v3551;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async (_v3553 ) => {
          const v3553 = stdlib.protect(ctc0, _v3553, null);
        
        const v3554 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3553, ctc6), null);
        const v3555 = {
          None: 0,
          Some: 1
          }[v3554[0]];
        const v3556 = stdlib.eq(v3555, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3556;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        const v3510 = {
          amountOfRaffleToken: v3479,
          asset: v3472,
          cost: v3476,
          creator: v3480,
          deadline: v3474,
          isFeatured: v3473,
          raffleToken: v3478
          };
        
        return v3510;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_randomNumber = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        stdlib.assert(v3551, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:150:28:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:150:28:application)'],
          msg: 'Cannot view this till deadline',
          who: 'Module'
          });
        
        return v3475;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        const v3557 = v3521.currentUserNumber;
        
        return v3557;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        
        return v3478;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        const v3559 = v3521.claimed;
        
        return v3559;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = svs;
      return (await ((async () => {
        
        const v3552 = v3521.winner;
        
        return v3552;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        adminClaimed: {
          decode: Info_adminClaimed,
          dom: [],
          rng: ctc2
          },
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc3
          },
        currentSec: {
          decode: Info_currentSec,
          dom: [],
          rng: ctc3
          },
        currentTime: {
          decode: Info_currentTime,
          dom: [],
          rng: ctc3
          },
        hasDeadlineReached: {
          decode: Info_hasDeadlineReached,
          dom: [],
          rng: ctc2
          },
        myTicketsAmount: {
          decode: Info_myTicketsAmount,
          dom: [ctc0],
          rng: ctc3
          },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc2
          },
        props: {
          decode: Info_props,
          dom: [],
          rng: ctc9
          },
        randomNumber: {
          decode: Info_randomNumber,
          dom: [],
          rng: ctc3
          },
        ticketsBought: {
          decode: Info_ticketsBought,
          dom: [],
          rng: ctc3
          },
        token: {
          decode: Info_token,
          dom: [],
          rng: ctc1
          },
        userClaimed: {
          decode: Info_userClaimed,
          dom: [],
          rng: ctc2
          },
        winner: {
          decode: Info_winner,
          dom: [],
          rng: ctc7
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc3, ctc3, ctc1, ctc3, ctc0, ctc0, ctc5],
      4: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc3, ctc1, ctc3, ctc0, ctc0, ctc3, ctc8, ctc3, ctc5, ctc3, ctc2, ctc3, ctc3, ctc4, ctc3]
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
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    User_buyTicket0_273: ctc6,
    User_claim0_273: ctc7,
    User_delete0_273: ctc7,
    User_determinWinnerAfterDeadline0_273: ctc8,
    User_optin0_273: ctc7
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v3448 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v3449 = [v3448, v3448];
  const v3453 = stdlib.protect(ctc2, interact.Admin, 'for Deployer\'s interact field Admin');
  const v3454 = stdlib.protect(ctc3, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v3455 = stdlib.protect(ctc4, interact.asset, 'for Deployer\'s interact field asset');
  const v3456 = stdlib.protect(ctc3, interact.cost, 'for Deployer\'s interact field cost');
  const v3457 = stdlib.protect(ctc2, interact.creator, 'for Deployer\'s interact field creator');
  const v3458 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v3459 = stdlib.protect(ctc5, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v3460 = stdlib.protect(ctc4, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v3463 = v3459 ? stdlib.checkedBigNumberify('./raffle_token_v3.rsh:5:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_token_v3.rsh:68:59:decimal', stdlib.UInt_max, '0');
  const v3464 = stdlib.protect(ctc3, await interact.random(), {
    at: './raffle_token_v3.rsh:70:52:application',
    fs: ['at ./raffle_token_v3.rsh:64:16:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:64:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v3465 = stdlib.tokenEq(v3455, v3460);
  const v3466 = v3465 ? false : true;
  stdlib.assert(v3466, {
    at: './raffle_token_v3.rsh:76:11:application',
    fs: ['at ./raffle_token_v3.rsh:64:16:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:64:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const v3467 = stdlib.lt(v3456, stdlib.UInt_max);
  stdlib.assert(v3467, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3469 = stdlib.ge(v3456, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:92:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3469, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3455, v3459, v3458, v3464, v3456, v3463, v3460, v3454, v3457, v3453],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc5, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481], secs: v3483, time: v3482, didSend: v115, from: v3471 } = txn1;
      
      const v3484 = v3449[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0')];
      const v3485 = stdlib.Array_set(v3484, '0', stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v3486 = stdlib.Array_set(v3449, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0'), v3485);
      const v3488 = v3486[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '1')];
      const v3489 = stdlib.Array_set(v3488, '0', stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v3490 = stdlib.Array_set(v3486, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '1'), v3489);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3472
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3478
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481], secs: v3483, time: v3482, didSend: v115, from: v3471 } = txn1;
  const v3484 = v3449[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0')];
  const v3485 = stdlib.Array_set(v3484, '0', stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v3486 = stdlib.Array_set(v3449, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0'), v3485);
  const v3488 = v3486[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '1')];
  const v3489 = stdlib.Array_set(v3488, '0', stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v3490 = stdlib.Array_set(v3486, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:78:12:dot', stdlib.UInt_max, '1'), v3489);
  const v3492 = stdlib.tokenEq(v3478, v3472);
  const v3493 = v3492 ? false : true;
  stdlib.assert(v3493, {
    at: './raffle_token_v3.rsh:78:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v3494 = stdlib.lt(v3476, stdlib.UInt_max);
  stdlib.assert(v3494, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3496 = stdlib.ge(v3476, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:92:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3496, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3490],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3482,
    onlyIf: true,
    out_tys: [],
    pay: [v3477, [[v3479, v3478]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v3500, time: v3499, didSend: v124, from: v3498 } = txn2;
      
      sim_r.txns.push({
        amt: v3477,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v3503 = v3490[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:96:12:dot', stdlib.UInt_max, '1')];
      const v3504 = v3503[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v3505 = stdlib.add(v3504, v3479);
      const v3507 = stdlib.Array_set(v3503, '0', v3505);
      const v3508 = stdlib.Array_set(v3490, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:96:12:dot', stdlib.UInt_max, '1'), v3507);
      sim_r.txns.push({
        amt: v3479,
        kind: 'to',
        tok: v3478
        });
      const v3512 = stdlib.safeAdd(v3500, v3474);
      const v3513 = await ctc.getContractInfo();
      
      const v3515 = v3508[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:127:17:application', stdlib.UInt_max, '0')];
      const v3516 = v3515[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:127:17:application', stdlib.UInt_max, '0')];
      const v3517 = v3508[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:128:23:application', stdlib.UInt_max, '1')];
      const v3518 = v3517[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v3519 = ['None', null];
      const v3520 = {
        adminClaimed: false,
        bal: v3516,
        buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        claimed: false,
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v3518,
        winner: v3519
        };
      const v3521 = v3520;
      const v3522 = v3499;
      const v3525 = v3500;
      const v3528 = v3508;
      const v3529 = v3477;
      
      if (await (async () => {
        const v3546 = v3521.keepGoing;
        const v3547 = v3521.claimed;
        const v3548 = v3547 ? false : true;
        const v3549 = v3546 ? v3548 : false;
        
        return v3549;})()) {
        const v3551 = stdlib.ge(v3525, v3512);
        const v3561 = v3521.bal;
        const v3562 = v3521.raffleBal;
        const v3563 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v3564 = v3563[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v5402 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v5403 = v5402[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v3481,
          tok: undefined /* Nothing */
          });
        const v5416 = stdlib.sub(v5403, v5403);
        const v5418 = stdlib.Array_set(v5402, '0', v5416);
        const v5419 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v5418);
        sim_r.txns.push({
          kind: 'from',
          to: v3481,
          tok: v3472
          });
        const v5420 = v5419[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
        const v5421 = v5420[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v3481,
          tok: v3478
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v3478
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v3472
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
    tys: [ctc2, ctc4, ctc5, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc2, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3500, time: v3499, didSend: v124, from: v3498 } = txn2;
  ;
  const v3503 = v3490[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:96:12:dot', stdlib.UInt_max, '1')];
  const v3504 = v3503[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v3505 = stdlib.add(v3504, v3479);
  const v3507 = stdlib.Array_set(v3503, '0', v3505);
  const v3508 = stdlib.Array_set(v3490, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:96:12:dot', stdlib.UInt_max, '1'), v3507);
  ;
  const v3509 = stdlib.addressEq(v3471, v3498);
  stdlib.assert(v3509, {
    at: './raffle_token_v3.rsh:96:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v3512 = stdlib.safeAdd(v3500, v3474);
  const v3513 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v3513, v3475), {
    at: './raffle_token_v3.rsh:120:27:application',
    fs: ['at ./raffle_token_v3.rsh:120:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:120:27:function exp)', 'at ./raffle_token_v3.rsh:120:27:application call to "liftedInteract" (defined at: ./raffle_token_v3.rsh:120:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v3515 = v3508[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:127:17:application', stdlib.UInt_max, '0')];
  const v3516 = v3515[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:127:17:application', stdlib.UInt_max, '0')];
  const v3517 = v3508[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:128:23:application', stdlib.UInt_max, '1')];
  const v3518 = v3517[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:128:23:application', stdlib.UInt_max, '0')];
  const v3519 = ['None', null];
  const v3520 = {
    adminClaimed: false,
    bal: v3516,
    buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    claimed: false,
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v3518,
    winner: v3519
    };
  let v3521 = v3520;
  let v3522 = v3499;
  let v3525 = v3500;
  let v3528 = v3508;
  let v3529 = v3477;
  
  let txn3 = txn2;
  while (await (async () => {
    const v3546 = v3521.keepGoing;
    const v3547 = v3521.claimed;
    const v3548 = v3547 ? false : true;
    const v3549 = v3546 ? v3548 : false;
    
    return v3549;})()) {
    const v3551 = stdlib.ge(v3525, v3512);
    const v3561 = v3521.bal;
    const v3562 = v3521.raffleBal;
    const v3563 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
    const v3564 = v3563[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn4;
    switch (v3811[0]) {
      case 'User_buyTicket0_273': {
        const v3814 = v3811[1];
        undefined /* setApiDetails */;
        const v3819 = v3814[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:157:10:spread', stdlib.UInt_max, '0')];
        const v3820 = stdlib.lt(v3525, v3512);
        stdlib.assert(v3820, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v3822 = stdlib.ge(v3819, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:159:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v3822, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Cannot purchase less than 1',
          who: 'Deployer'
          });
        const v3824 = stdlib.safeMul(v3819, v3476);
        ;
        const v3933 = stdlib.add(v3564, v3824);
        const v3935 = stdlib.Array_set(v3563, '0', v3933);
        const v3936 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:124:37:dot', stdlib.UInt_max, '0'), v3935);
        ;
        ;
        const v3950 = {
          address: v3810,
          amount: v3819
          };
        null;
        const v3951 = true;
        await txn4.getOutput('User_buyTicket', 'v3951', ctc5, v3951);
        const v3958 = v3521.adminClaimed;
        const v3960 = v3521.buyers;
        const v3961 = v3521.claimed;
        const v3962 = v3521.currentUserNumber;
        const v3963 = v3521.keepGoing;
        const v3964 = v3521.percent;
        const v3966 = v3521.winner;
        const v3968 = stdlib.safeAdd(v3962, v3819);
        const v3970 = stdlib.safeAdd(v3561, v3824);
        const v3972 = stdlib.safeAdd(v3960, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:181:42:decimal', stdlib.UInt_max, '1'));
        const v3973 = {
          adminClaimed: v3958,
          bal: v3970,
          buyers: v3972,
          claimed: v3961,
          currentUserNumber: v3968,
          keepGoing: v3963,
          percent: v3964,
          raffleBal: v3562,
          winner: v3966
          };
        const cv3521 = v3973;
        const cv3522 = v3812;
        const cv3525 = v3813;
        const cv3528 = v3936;
        const cv3529 = v3529;
        
        v3521 = cv3521;
        v3522 = cv3522;
        v3525 = cv3525;
        v3528 = cv3528;
        v3529 = cv3529;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_claim0_273': {
        const v4129 = v3811[1];
        undefined /* setApiDetails */;
        const v4151 = v3521.winner;
        const v4152 = {
          None: 0,
          Some: 1
          }[v4151[0]];
        const v4153 = stdlib.eq(v4152, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4153, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3551, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v4157 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '1')];
        const v4158 = v4157[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '0')];
        const v4159 = stdlib.le(v3562, v4158);
        stdlib.assert(v4159, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v4162 = stdlib.fromSome(v4151, v3471);
        const v4163 = stdlib.addressEq(v4162, v3810);
        stdlib.assert(v4163, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v4296 = stdlib.ge(v3813, v3512);
        stdlib.assert(v4296, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:207:13:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:207:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v4313 = stdlib.sub(v4158, v4158);
        const v4315 = stdlib.Array_set(v4157, '0', v4313);
        const v4316 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:208:57:application', stdlib.UInt_max, '1'), v4315);
        ;
        const v4317 = v4316[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:43:application', stdlib.UInt_max, '0')];
        const v4318 = v4317[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:43:application', stdlib.UInt_max, '0')];
        const v4319 = stdlib.safeMul(v4318, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:54:decimal', stdlib.UInt_max, '5'));
        const v4320 = stdlib.safeDiv(v4319, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:58:decimal', stdlib.UInt_max, '100'));
        const v4323 = stdlib.safeSub(v4318, v4320);
        const v4329 = stdlib.sub(v4318, v4323);
        const v4331 = stdlib.Array_set(v4317, '0', v4329);
        const v4332 = stdlib.Array_set(v4316, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:210:60:application', stdlib.UInt_max, '0'), v4331);
        ;
        const v4333 = true;
        await txn4.getOutput('User_claim', 'v4333', ctc5, v4333);
        const v4341 = v3521.buyers;
        const v4343 = v3521.currentUserNumber;
        const v4345 = v3521.percent;
        const v4348 = v4332[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:216:25:application', stdlib.UInt_max, '0')];
        const v4349 = v4348[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:216:25:application', stdlib.UInt_max, '0')];
        const v4350 = {
          adminClaimed: true,
          bal: v4349,
          buyers: v4341,
          claimed: true,
          currentUserNumber: v4343,
          keepGoing: false,
          percent: v4345,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          winner: v4151
          };
        const cv3521 = v4350;
        const cv3522 = v3812;
        const cv3525 = v3813;
        const cv3528 = v4332;
        const cv3529 = v3529;
        
        v3521 = cv3521;
        v3522 = cv3522;
        v3525 = cv3525;
        v3528 = cv3528;
        v3529 = cv3529;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_delete0_273': {
        const v4444 = v3811[1];
        undefined /* setApiDetails */;
        const v4490 = stdlib.addressEq(v3810, v3471);
        const v4491 = stdlib.addressEq(v3810, v3481);
        const v4492 = v4490 ? true : v4491;
        stdlib.assert(v4492, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        stdlib.assert(v3551, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4496 = v3521.currentUserNumber;
        const v4497 = stdlib.eq(v4496, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:287:42:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4497, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Can only delete when nobody used contract',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v4677 = true;
        await txn4.getOutput('User_delete', 'v4677', ctc5, v4677);
        const v4683 = v3521.adminClaimed;
        const v4685 = v3521.buyers;
        const v4689 = v3521.percent;
        const v4691 = v3521.winner;
        const v4692 = {
          adminClaimed: v4683,
          bal: v3561,
          buyers: v4685,
          claimed: true,
          currentUserNumber: v4496,
          keepGoing: false,
          percent: v4689,
          raffleBal: v3562,
          winner: v4691
          };
        const cv3521 = v4692;
        const cv3522 = v3812;
        const cv3525 = v3813;
        const cv3528 = v3528;
        const cv3529 = v3529;
        
        v3521 = cv3521;
        v3522 = cv3522;
        v3525 = cv3525;
        v3528 = cv3528;
        v3529 = cv3529;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_determinWinnerAfterDeadline0_273': {
        const v4759 = v3811[1];
        undefined /* setApiDetails */;
        const v4826 = v3521.winner;
        const v4827 = {
          None: 0,
          Some: 1
          }[v4826[0]];
        const v4828 = stdlib.eq(v4827, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4828, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3551, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4832 = stdlib.addressEq(v3810, v3481);
        stdlib.assert(v4832, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
          msg: 'You cannot perform this action',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v5010 = v4759[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:224:10:spread', stdlib.UInt_max, '0')];
        const v5016 = stdlib.ge(v3813, v3512);
        stdlib.assert(v5016, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v3.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:235:13:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:235:13:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v5023 = stdlib.safeMul(v3564, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:236:54:decimal', stdlib.UInt_max, '5'));
        const v5024 = stdlib.safeDiv(v5023, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:236:58:decimal', stdlib.UInt_max, '100'));
        const v5030 = stdlib.sub(v3564, v5024);
        const v5032 = stdlib.Array_set(v3563, '0', v5030);
        const v5033 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:237:41:application', stdlib.UInt_max, '0'), v5032);
        ;
        const v5034 = v5033[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:27:application', stdlib.UInt_max, '0')];
        const v5035 = v5034[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:27:application', stdlib.UInt_max, '0')];
        const v5041 = stdlib.sub(v5035, v5035);
        const v5043 = stdlib.Array_set(v5034, '0', v5041);
        const v5044 = stdlib.Array_set(v5033, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:49:application', stdlib.UInt_max, '0'), v5043);
        ;
        const v5045 = null;
        await txn4.getOutput('User_determinWinnerAfterDeadline', 'v5045', ctc0, v5045);
        const v5054 = v3521.buyers;
        const v5055 = v3521.claimed;
        const v5056 = v3521.currentUserNumber;
        const v5057 = v3521.keepGoing;
        const v5058 = v3521.percent;
        const v5061 = v5044[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:243:25:application', stdlib.UInt_max, '0')];
        const v5062 = v5061[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:243:25:application', stdlib.UInt_max, '0')];
        const v5063 = ['Some', v5010];
        const v5064 = {
          adminClaimed: true,
          bal: v5062,
          buyers: v5054,
          claimed: v5055,
          currentUserNumber: v5056,
          keepGoing: v5057,
          percent: v5058,
          raffleBal: v3562,
          winner: v5063
          };
        const cv3521 = v5064;
        const cv3522 = v3812;
        const cv3525 = v3813;
        const cv3528 = v5044;
        const cv3529 = v3529;
        
        v3521 = cv3521;
        v3522 = cv3522;
        v3525 = cv3525;
        v3528 = cv3528;
        v3529 = cv3529;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_273': {
        const v5074 = v3811[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v5383 = null;
        await txn4.getOutput('User_optin', 'v5383', ctc0, v5383);
        const cv3521 = v3521;
        const cv3522 = v3812;
        const cv3525 = v3813;
        const cv3528 = v3528;
        const cv3529 = v3529;
        
        v3521 = cv3521;
        v3522 = cv3522;
        v3525 = cv3525;
        v3528 = cv3528;
        v3529 = cv3529;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v5402 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
  const v5403 = v5402[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
  ;
  const v5416 = stdlib.sub(v5403, v5403);
  const v5418 = stdlib.Array_set(v5402, '0', v5416);
  const v5419 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v5418);
  ;
  const v5420 = v5419[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
  const v5421 = v5420[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc4,
    bal: ctc5,
    buyers: ctc5,
    claimed: ctc4,
    currentUserNumber: ctc5,
    keepGoing: ctc4,
    percent: ctc5,
    raffleBal: ctc5,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc5]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_273: ctc10,
    User_claim0_273: ctc11,
    User_delete0_273: ctc11,
    User_determinWinnerAfterDeadline0_273: ctc12,
    User_optin0_273: ctc11
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3567 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v3.rsh:1:23:application',
    fs: ['at ./raffle_token_v3.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_buyTicket0_273" (defined at: ./raffle_token_v3.rsh:157:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v3568 = v3567[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3570 = stdlib.lt(v3525, v3512);
  stdlib.assert(v3570, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_buyTicket0_273" (defined at: ./raffle_token_v3.rsh:157:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v3572 = stdlib.ge(v3568, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:159:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3572, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_buyTicket0_273" (defined at: ./raffle_token_v3.rsh:157:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Cannot purchase less than 1',
    who: 'User_buyTicket'
    });
  const v3579 = ['User_buyTicket0_273', v3567];
  
  const v3656 = stdlib.safeMul(v3568, v3476);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564, v3579],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:162:11:decimal', stdlib.UInt_max, '0'), [[v3656, v3472], [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:164:12:decimal', stdlib.UInt_max, '0'), v3478]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
      
      switch (v3811[0]) {
        case 'User_buyTicket0_273': {
          const v3814 = v3811[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v3819 = v3814[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:157:10:spread', stdlib.UInt_max, '0')];
          const v3824 = stdlib.safeMul(v3819, v3476);
          ;
          const v3933 = stdlib.add(v3564, v3824);
          const v3935 = stdlib.Array_set(v3563, '0', v3933);
          const v3936 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:124:37:dot', stdlib.UInt_max, '0'), v3935);
          sim_r.txns.push({
            amt: v3824,
            kind: 'to',
            tok: v3472
            });
          ;
          const v3950 = {
            address: v3810,
            amount: v3819
            };
          null;
          const v3951 = true;
          const v3952 = await txn1.getOutput('User_buyTicket', 'v3951', ctc4, v3951);
          
          const v3958 = v3521.adminClaimed;
          const v3960 = v3521.buyers;
          const v3961 = v3521.claimed;
          const v3962 = v3521.currentUserNumber;
          const v3963 = v3521.keepGoing;
          const v3964 = v3521.percent;
          const v3966 = v3521.winner;
          const v3968 = stdlib.safeAdd(v3962, v3819);
          const v3970 = stdlib.safeAdd(v3561, v3824);
          const v3972 = stdlib.safeAdd(v3960, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:181:42:decimal', stdlib.UInt_max, '1'));
          const v3973 = {
            adminClaimed: v3958,
            bal: v3970,
            buyers: v3972,
            claimed: v3961,
            currentUserNumber: v3968,
            keepGoing: v3963,
            percent: v3964,
            raffleBal: v3562,
            winner: v3966
            };
          const v6566 = v3973;
          const v6568 = v3813;
          const v6569 = v3936;
          const v6570 = v3529;
          const v6571 = v3973.keepGoing;
          const v6572 = v3973.claimed;
          const v6573 = v6572 ? false : true;
          const v6574 = v6571 ? v6573 : false;
          if (v6574) {
            const v6575 = stdlib.ge(v3813, v3512);
            const v6576 = v3973.bal;
            const v6577 = v3973.raffleBal;
            const v6578 = v3936[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6579 = v6578[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v6581 = v3936[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6582 = v6581[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: undefined /* Nothing */
              });
            const v6583 = stdlib.sub(v6582, v6582);
            const v6584 = stdlib.Array_set(v6581, '0', v6583);
            const v6585 = stdlib.Array_set(v3936, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6584);
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3472
              });
            const v6586 = v6585[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
            const v6587 = v6586[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3478
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3478
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3472
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_273': {
          const v4129 = v3811[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4444 = v3811[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4759 = v3811[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5074 = v3811[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
  switch (v3811[0]) {
    case 'User_buyTicket0_273': {
      const v3814 = v3811[1];
      undefined /* setApiDetails */;
      const v3819 = v3814[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:157:10:spread', stdlib.UInt_max, '0')];
      const v3820 = stdlib.lt(v3525, v3512);
      stdlib.assert(v3820, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v3822 = stdlib.ge(v3819, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:159:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v3822, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:50:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Cannot purchase less than 1',
        who: 'User_buyTicket'
        });
      const v3824 = stdlib.safeMul(v3819, v3476);
      ;
      const v3933 = stdlib.add(v3564, v3824);
      const v3935 = stdlib.Array_set(v3563, '0', v3933);
      const v3936 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:124:37:dot', stdlib.UInt_max, '0'), v3935);
      ;
      ;
      const v3950 = {
        address: v3810,
        amount: v3819
        };
      null;
      const v3951 = true;
      const v3952 = await txn1.getOutput('User_buyTicket', 'v3951', ctc4, v3951);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v3814, v3952), {
          at: './raffle_token_v3.rsh:157:11:application',
          fs: ['at ./raffle_token_v3.rsh:157:11:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:157:11:function exp)', 'at ./raffle_token_v3.rsh:175:14:application call to "ret" (defined at: ./raffle_token_v3.rsh:166:15:function exp)', 'at ./raffle_token_v3.rsh:166:15:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:166:15:function exp)'],
          msg: 'out',
          who: 'User_buyTicket'
          });
        }
      else {
        }
      
      const v3958 = v3521.adminClaimed;
      const v3960 = v3521.buyers;
      const v3961 = v3521.claimed;
      const v3962 = v3521.currentUserNumber;
      const v3963 = v3521.keepGoing;
      const v3964 = v3521.percent;
      const v3966 = v3521.winner;
      const v3968 = stdlib.safeAdd(v3962, v3819);
      const v3970 = stdlib.safeAdd(v3561, v3824);
      const v3972 = stdlib.safeAdd(v3960, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:181:42:decimal', stdlib.UInt_max, '1'));
      const v3973 = {
        adminClaimed: v3958,
        bal: v3970,
        buyers: v3972,
        claimed: v3961,
        currentUserNumber: v3968,
        keepGoing: v3963,
        percent: v3964,
        raffleBal: v3562,
        winner: v3966
        };
      const v6566 = v3973;
      const v6568 = v3813;
      const v6569 = v3936;
      const v6570 = v3529;
      const v6571 = v3973.keepGoing;
      const v6572 = v3973.claimed;
      const v6573 = v6572 ? false : true;
      const v6574 = v6571 ? v6573 : false;
      if (v6574) {
        const v6575 = stdlib.ge(v3813, v3512);
        const v6576 = v3973.bal;
        const v6577 = v3973.raffleBal;
        const v6578 = v3936[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6579 = v6578[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v6581 = v3936[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6582 = v6581[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        ;
        const v6583 = stdlib.sub(v6582, v6582);
        const v6584 = stdlib.Array_set(v6581, '0', v6583);
        const v6585 = stdlib.Array_set(v3936, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6584);
        ;
        const v6586 = v6585[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
        const v6587 = v6586[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_claim0_273': {
      const v4129 = v3811[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4444 = v3811[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4759 = v3811[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5074 = v3811[1];
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc4,
    bal: ctc5,
    buyers: ctc5,
    claimed: ctc4,
    currentUserNumber: ctc5,
    keepGoing: ctc4,
    percent: ctc5,
    raffleBal: ctc5,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_273: ctc11,
    User_claim0_273: ctc10,
    User_delete0_273: ctc10,
    User_determinWinnerAfterDeadline0_273: ctc12,
    User_optin0_273: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3589 = ctc.selfAddress();
  const v3591 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v3.rsh:1:23:application',
    fs: ['at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v3.rsh:196:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v3593 = v3521.winner;
  const v3594 = {
    None: 0,
    Some: 1
    }[v3593[0]];
  const v3595 = stdlib.eq(v3594, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3595, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v3.rsh:196:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  stdlib.assert(v3551, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v3.rsh:196:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v3599 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '1')];
  const v3600 = v3599[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '0')];
  const v3601 = stdlib.le(v3562, v3600);
  stdlib.assert(v3601, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v3.rsh:196:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v3604 = stdlib.fromSome(v3593, v3471);
  const v3605 = stdlib.addressEq(v3604, v3589);
  stdlib.assert(v3605, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v3.rsh:196:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v3610 = ['User_claim0_273', v3591];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564, v3610],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:206:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:206:14:decimal', stdlib.UInt_max, '0'), v3472], [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:206:28:decimal', stdlib.UInt_max, '0'), v3478]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
      
      switch (v3811[0]) {
        case 'User_buyTicket0_273': {
          const v3814 = v3811[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4129 = v3811[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v4151 = v3521.winner;
          const v4157 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '1')];
          const v4158 = v4157[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '0')];
          const v4162 = stdlib.fromSome(v4151, v3471);
          ;
          ;
          ;
          const v4313 = stdlib.sub(v4158, v4158);
          const v4315 = stdlib.Array_set(v4157, '0', v4313);
          const v4316 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:208:57:application', stdlib.UInt_max, '1'), v4315);
          sim_r.txns.push({
            kind: 'from',
            to: v4162,
            tok: v3478
            });
          const v4317 = v4316[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:43:application', stdlib.UInt_max, '0')];
          const v4318 = v4317[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:43:application', stdlib.UInt_max, '0')];
          const v4319 = stdlib.safeMul(v4318, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:54:decimal', stdlib.UInt_max, '5'));
          const v4320 = stdlib.safeDiv(v4319, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:58:decimal', stdlib.UInt_max, '100'));
          const v4323 = stdlib.safeSub(v4318, v4320);
          const v4329 = stdlib.sub(v4318, v4323);
          const v4331 = stdlib.Array_set(v4317, '0', v4329);
          const v4332 = stdlib.Array_set(v4316, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:210:60:application', stdlib.UInt_max, '0'), v4331);
          sim_r.txns.push({
            kind: 'from',
            to: v3471,
            tok: v3472
            });
          const v4333 = true;
          const v4334 = await txn1.getOutput('User_claim', 'v4333', ctc4, v4333);
          
          const v4341 = v3521.buyers;
          const v4343 = v3521.currentUserNumber;
          const v4345 = v3521.percent;
          const v4348 = v4332[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:216:25:application', stdlib.UInt_max, '0')];
          const v4349 = v4348[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:216:25:application', stdlib.UInt_max, '0')];
          const v4350 = {
            adminClaimed: true,
            bal: v4349,
            buyers: v4341,
            claimed: true,
            currentUserNumber: v4343,
            keepGoing: false,
            percent: v4345,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            winner: v4151
            };
          const v6698 = v4350;
          const v6700 = v3813;
          const v6701 = v4332;
          const v6702 = v3529;
          const v6703 = v4350.keepGoing;
          const v6704 = v4350.claimed;
          const v6705 = v6704 ? false : true;
          const v6706 = v6703 ? v6705 : false;
          if (v6706) {
            const v6708 = v4350.bal;
            const v6709 = v4350.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: undefined /* Nothing */
              });
            const v6715 = stdlib.sub(v4349, v4349);
            const v6716 = stdlib.Array_set(v4348, '0', v6715);
            const v6717 = stdlib.Array_set(v4332, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6716);
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3472
              });
            const v6718 = v6717[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
            const v6719 = v6718[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3478
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3478
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3472
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_delete0_273': {
          const v4444 = v3811[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4759 = v3811[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5074 = v3811[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
  switch (v3811[0]) {
    case 'User_buyTicket0_273': {
      const v3814 = v3811[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4129 = v3811[1];
      undefined /* setApiDetails */;
      const v4151 = v3521.winner;
      const v4152 = {
        None: 0,
        Some: 1
        }[v4151[0]];
      const v4153 = stdlib.eq(v4152, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4153, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      stdlib.assert(v3551, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v4157 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '1')];
      const v4158 = v4157[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:200:33:application', stdlib.UInt_max, '0')];
      const v4159 = stdlib.le(v3562, v4158);
      stdlib.assert(v4159, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v4162 = stdlib.fromSome(v4151, v3471);
      const v4163 = stdlib.addressEq(v4162, v3810);
      stdlib.assert(v4163, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      ;
      const v4296 = stdlib.ge(v3813, v3512);
      stdlib.assert(v4296, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:207:13:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:207:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v4313 = stdlib.sub(v4158, v4158);
      const v4315 = stdlib.Array_set(v4157, '0', v4313);
      const v4316 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:208:57:application', stdlib.UInt_max, '1'), v4315);
      ;
      const v4317 = v4316[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:43:application', stdlib.UInt_max, '0')];
      const v4318 = v4317[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:43:application', stdlib.UInt_max, '0')];
      const v4319 = stdlib.safeMul(v4318, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:54:decimal', stdlib.UInt_max, '5'));
      const v4320 = stdlib.safeDiv(v4319, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:209:58:decimal', stdlib.UInt_max, '100'));
      const v4323 = stdlib.safeSub(v4318, v4320);
      const v4329 = stdlib.sub(v4318, v4323);
      const v4331 = stdlib.Array_set(v4317, '0', v4329);
      const v4332 = stdlib.Array_set(v4316, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:210:60:application', stdlib.UInt_max, '0'), v4331);
      ;
      const v4333 = true;
      const v4334 = await txn1.getOutput('User_claim', 'v4333', ctc4, v4333);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v4129, v4334), {
          at: './raffle_token_v3.rsh:196:11:application',
          fs: ['at ./raffle_token_v3.rsh:196:11:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:196:11:function exp)', 'at ./raffle_token_v3.rsh:211:12:application call to "k" (defined at: ./raffle_token_v3.rsh:207:13:function exp)', 'at ./raffle_token_v3.rsh:207:13:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:207:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v4341 = v3521.buyers;
      const v4343 = v3521.currentUserNumber;
      const v4345 = v3521.percent;
      const v4348 = v4332[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:216:25:application', stdlib.UInt_max, '0')];
      const v4349 = v4348[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:216:25:application', stdlib.UInt_max, '0')];
      const v4350 = {
        adminClaimed: true,
        bal: v4349,
        buyers: v4341,
        claimed: true,
        currentUserNumber: v4343,
        keepGoing: false,
        percent: v4345,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        winner: v4151
        };
      const v6698 = v4350;
      const v6700 = v3813;
      const v6701 = v4332;
      const v6702 = v3529;
      const v6703 = v4350.keepGoing;
      const v6704 = v4350.claimed;
      const v6705 = v6704 ? false : true;
      const v6706 = v6703 ? v6705 : false;
      if (v6706) {
        const v6708 = v4350.bal;
        const v6709 = v4350.raffleBal;
        return;
        }
      else {
        ;
        const v6715 = stdlib.sub(v4349, v4349);
        const v6716 = stdlib.Array_set(v4348, '0', v6715);
        const v6717 = stdlib.Array_set(v4332, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6716);
        ;
        const v6718 = v6717[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
        const v6719 = v6718[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_delete0_273': {
      const v4444 = v3811[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4759 = v3811[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5074 = v3811[1];
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc4,
    bal: ctc5,
    buyers: ctc5,
    claimed: ctc4,
    currentUserNumber: ctc5,
    keepGoing: ctc4,
    percent: ctc5,
    raffleBal: ctc5,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_273: ctc11,
    User_claim0_273: ctc10,
    User_delete0_273: ctc10,
    User_determinWinnerAfterDeadline0_273: ctc12,
    User_optin0_273: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3633 = ctc.selfAddress();
  const v3635 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v3.rsh:1:23:application',
    fs: ['at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v3.rsh:277:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_delete'
    });
  const v3636 = stdlib.addressEq(v3633, v3471);
  const v3637 = stdlib.addressEq(v3633, v3481);
  const v3638 = v3636 ? true : v3637;
  stdlib.assert(v3638, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v3.rsh:277:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_delete'
    });
  stdlib.assert(v3551, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v3.rsh:277:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_delete'
    });
  const v3642 = v3521.currentUserNumber;
  const v3643 = stdlib.eq(v3642, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:287:42:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3643, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v3.rsh:277:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Can only delete when nobody used contract',
    who: 'User_delete'
    });
  const v3648 = ['User_delete0_273', v3635];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564, v3648],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:291:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:291:14:decimal', stdlib.UInt_max, '0'), v3472], [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:291:28:decimal', stdlib.UInt_max, '0'), v3478]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
      
      switch (v3811[0]) {
        case 'User_buyTicket0_273': {
          const v3814 = v3811[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4129 = v3811[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4444 = v3811[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_delete"
            });
          const v4496 = v3521.currentUserNumber;
          ;
          ;
          ;
          const v4677 = true;
          const v4678 = await txn1.getOutput('User_delete', 'v4677', ctc4, v4677);
          
          const v4683 = v3521.adminClaimed;
          const v4685 = v3521.buyers;
          const v4689 = v3521.percent;
          const v4691 = v3521.winner;
          const v4692 = {
            adminClaimed: v4683,
            bal: v3561,
            buyers: v4685,
            claimed: true,
            currentUserNumber: v4496,
            keepGoing: false,
            percent: v4689,
            raffleBal: v3562,
            winner: v4691
            };
          const v6830 = v4692;
          const v6832 = v3813;
          const v6833 = v3528;
          const v6834 = v3529;
          const v6835 = v4692.keepGoing;
          const v6836 = v4692.claimed;
          const v6837 = v6836 ? false : true;
          const v6838 = v6835 ? v6837 : false;
          if (v6838) {
            const v6839 = stdlib.ge(v3813, v3512);
            const v6840 = v4692.bal;
            const v6841 = v4692.raffleBal;
            const v6842 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6843 = v6842[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v6845 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6846 = v6845[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: undefined /* Nothing */
              });
            const v6847 = stdlib.sub(v6846, v6846);
            const v6848 = stdlib.Array_set(v6845, '0', v6847);
            const v6849 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6848);
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3472
              });
            const v6850 = v6849[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
            const v6851 = v6850[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3478
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3478
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3472
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4759 = v3811[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5074 = v3811[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
  switch (v3811[0]) {
    case 'User_buyTicket0_273': {
      const v3814 = v3811[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4129 = v3811[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4444 = v3811[1];
      undefined /* setApiDetails */;
      const v4490 = stdlib.addressEq(v3810, v3471);
      const v4491 = stdlib.addressEq(v3810, v3481);
      const v4492 = v4490 ? true : v4491;
      stdlib.assert(v4492, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_delete'
        });
      stdlib.assert(v3551, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_delete'
        });
      const v4496 = v3521.currentUserNumber;
      const v4497 = stdlib.eq(v4496, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:287:42:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4497, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:27:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Can only delete when nobody used contract',
        who: 'User_delete'
        });
      ;
      ;
      ;
      const v4677 = true;
      const v4678 = await txn1.getOutput('User_delete', 'v4677', ctc4, v4677);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v4444, v4678), {
          at: './raffle_token_v3.rsh:277:11:application',
          fs: ['at ./raffle_token_v3.rsh:277:11:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:277:11:function exp)', 'at ./raffle_token_v3.rsh:293:14:application call to "ret" (defined at: ./raffle_token_v3.rsh:292:15:function exp)', 'at ./raffle_token_v3.rsh:292:15:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:292:15:function exp)'],
          msg: 'out',
          who: 'User_delete'
          });
        }
      else {
        }
      
      const v4683 = v3521.adminClaimed;
      const v4685 = v3521.buyers;
      const v4689 = v3521.percent;
      const v4691 = v3521.winner;
      const v4692 = {
        adminClaimed: v4683,
        bal: v3561,
        buyers: v4685,
        claimed: true,
        currentUserNumber: v4496,
        keepGoing: false,
        percent: v4689,
        raffleBal: v3562,
        winner: v4691
        };
      const v6830 = v4692;
      const v6832 = v3813;
      const v6833 = v3528;
      const v6834 = v3529;
      const v6835 = v4692.keepGoing;
      const v6836 = v4692.claimed;
      const v6837 = v6836 ? false : true;
      const v6838 = v6835 ? v6837 : false;
      if (v6838) {
        const v6839 = stdlib.ge(v3813, v3512);
        const v6840 = v4692.bal;
        const v6841 = v4692.raffleBal;
        const v6842 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6843 = v6842[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v6845 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6846 = v6845[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        ;
        const v6847 = stdlib.sub(v6846, v6846);
        const v6848 = stdlib.Array_set(v6845, '0', v6847);
        const v6849 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6848);
        ;
        const v6850 = v6849[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
        const v6851 = v6850[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4759 = v3811[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5074 = v3811[1];
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc4,
    bal: ctc5,
    buyers: ctc5,
    claimed: ctc4,
    currentUserNumber: ctc5,
    keepGoing: ctc4,
    percent: ctc5,
    raffleBal: ctc5,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_273: ctc11,
    User_claim0_273: ctc12,
    User_delete0_273: ctc12,
    User_determinWinnerAfterDeadline0_273: ctc10,
    User_optin0_273: ctc12
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3612 = ctc.selfAddress();
  const v3614 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v3.rsh:1:23:application',
    fs: ['at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v3.rsh:224:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3618 = v3521.winner;
  const v3619 = {
    None: 0,
    Some: 1
    }[v3618[0]];
  const v3620 = stdlib.eq(v3619, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3620, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v3.rsh:224:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_determinWinnerAfterDeadline'
    });
  stdlib.assert(v3551, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v3.rsh:224:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3624 = stdlib.addressEq(v3612, v3481);
  stdlib.assert(v3624, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v3.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v3.rsh:224:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'You cannot perform this action',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3631 = ['User_determinWinnerAfterDeadline0_273', v3614];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564, v3631],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:234:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:234:14:decimal', stdlib.UInt_max, '0'), v3472], [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:234:28:decimal', stdlib.UInt_max, '0'), v3478]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
      
      switch (v3811[0]) {
        case 'User_buyTicket0_273': {
          const v3814 = v3811[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4129 = v3811[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4444 = v3811[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4759 = v3811[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_determinWinnerAfterDeadline"
            });
          ;
          ;
          ;
          const v5010 = v4759[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:224:10:spread', stdlib.UInt_max, '0')];
          const v5023 = stdlib.safeMul(v3564, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:236:54:decimal', stdlib.UInt_max, '5'));
          const v5024 = stdlib.safeDiv(v5023, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:236:58:decimal', stdlib.UInt_max, '100'));
          const v5030 = stdlib.sub(v3564, v5024);
          const v5032 = stdlib.Array_set(v3563, '0', v5030);
          const v5033 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:237:41:application', stdlib.UInt_max, '0'), v5032);
          sim_r.txns.push({
            kind: 'from',
            to: v3481,
            tok: v3472
            });
          const v5034 = v5033[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:27:application', stdlib.UInt_max, '0')];
          const v5035 = v5034[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:27:application', stdlib.UInt_max, '0')];
          const v5041 = stdlib.sub(v5035, v5035);
          const v5043 = stdlib.Array_set(v5034, '0', v5041);
          const v5044 = stdlib.Array_set(v5033, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:49:application', stdlib.UInt_max, '0'), v5043);
          sim_r.txns.push({
            kind: 'from',
            to: v3471,
            tok: v3472
            });
          const v5045 = null;
          const v5046 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v5045', ctc0, v5045);
          
          const v5054 = v3521.buyers;
          const v5055 = v3521.claimed;
          const v5056 = v3521.currentUserNumber;
          const v5057 = v3521.keepGoing;
          const v5058 = v3521.percent;
          const v5061 = v5044[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:243:25:application', stdlib.UInt_max, '0')];
          const v5062 = v5061[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:243:25:application', stdlib.UInt_max, '0')];
          const v5063 = ['Some', v5010];
          const v5064 = {
            adminClaimed: true,
            bal: v5062,
            buyers: v5054,
            claimed: v5055,
            currentUserNumber: v5056,
            keepGoing: v5057,
            percent: v5058,
            raffleBal: v3562,
            winner: v5063
            };
          const v6962 = v5064;
          const v6964 = v3813;
          const v6965 = v5044;
          const v6966 = v3529;
          const v6967 = v5064.keepGoing;
          const v6968 = v5064.claimed;
          const v6969 = v6968 ? false : true;
          const v6970 = v6967 ? v6969 : false;
          if (v6970) {
            const v6972 = v5064.bal;
            const v6973 = v5064.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: undefined /* Nothing */
              });
            const v6979 = stdlib.sub(v5062, v5062);
            const v6980 = stdlib.Array_set(v5061, '0', v6979);
            const v6981 = stdlib.Array_set(v5044, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6980);
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3472
              });
            const v6982 = v6981[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
            const v6983 = v6982[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3478
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3478
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3472
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_optin0_273': {
          const v5074 = v3811[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
  switch (v3811[0]) {
    case 'User_buyTicket0_273': {
      const v3814 = v3811[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4129 = v3811[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4444 = v3811[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4759 = v3811[1];
      undefined /* setApiDetails */;
      const v4826 = v3521.winner;
      const v4827 = {
        None: 0,
        Some: 1
        }[v4826[0]];
      const v4828 = stdlib.eq(v4827, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4828, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_determinWinnerAfterDeadline'
        });
      stdlib.assert(v3551, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v4832 = stdlib.addressEq(v3810, v3481);
      stdlib.assert(v4832, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:54:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)', 'at ./raffle_token_v3.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:138:14:function exp)'],
        msg: 'You cannot perform this action',
        who: 'User_determinWinnerAfterDeadline'
        });
      ;
      ;
      ;
      const v5010 = v4759[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:224:10:spread', stdlib.UInt_max, '0')];
      const v5016 = stdlib.ge(v3813, v3512);
      stdlib.assert(v5016, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v3.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v3.rsh:235:13:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:235:13:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v5023 = stdlib.safeMul(v3564, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:236:54:decimal', stdlib.UInt_max, '5'));
      const v5024 = stdlib.safeDiv(v5023, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:236:58:decimal', stdlib.UInt_max, '100'));
      const v5030 = stdlib.sub(v3564, v5024);
      const v5032 = stdlib.Array_set(v3563, '0', v5030);
      const v5033 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:237:41:application', stdlib.UInt_max, '0'), v5032);
      ;
      const v5034 = v5033[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:27:application', stdlib.UInt_max, '0')];
      const v5035 = v5034[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:27:application', stdlib.UInt_max, '0')];
      const v5041 = stdlib.sub(v5035, v5035);
      const v5043 = stdlib.Array_set(v5034, '0', v5041);
      const v5044 = stdlib.Array_set(v5033, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:238:49:application', stdlib.UInt_max, '0'), v5043);
      ;
      const v5045 = null;
      const v5046 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v5045', ctc0, v5045);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v4759, v5046), {
          at: './raffle_token_v3.rsh:224:11:application',
          fs: ['at ./raffle_token_v3.rsh:224:11:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:224:11:function exp)', 'at ./raffle_token_v3.rsh:239:12:application call to "k" (defined at: ./raffle_token_v3.rsh:235:13:function exp)', 'at ./raffle_token_v3.rsh:235:13:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:235:13:function exp)'],
          msg: 'out',
          who: 'User_determinWinnerAfterDeadline'
          });
        }
      else {
        }
      
      const v5054 = v3521.buyers;
      const v5055 = v3521.claimed;
      const v5056 = v3521.currentUserNumber;
      const v5057 = v3521.keepGoing;
      const v5058 = v3521.percent;
      const v5061 = v5044[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:243:25:application', stdlib.UInt_max, '0')];
      const v5062 = v5061[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:243:25:application', stdlib.UInt_max, '0')];
      const v5063 = ['Some', v5010];
      const v5064 = {
        adminClaimed: true,
        bal: v5062,
        buyers: v5054,
        claimed: v5055,
        currentUserNumber: v5056,
        keepGoing: v5057,
        percent: v5058,
        raffleBal: v3562,
        winner: v5063
        };
      const v6962 = v5064;
      const v6964 = v3813;
      const v6965 = v5044;
      const v6966 = v3529;
      const v6967 = v5064.keepGoing;
      const v6968 = v5064.claimed;
      const v6969 = v6968 ? false : true;
      const v6970 = v6967 ? v6969 : false;
      if (v6970) {
        const v6972 = v5064.bal;
        const v6973 = v5064.raffleBal;
        return;
        }
      else {
        ;
        const v6979 = stdlib.sub(v5062, v5062);
        const v6980 = stdlib.Array_set(v5061, '0', v6979);
        const v6981 = stdlib.Array_set(v5044, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v6980);
        ;
        const v6982 = v6981[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
        const v6983 = v6982[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_273': {
      const v5074 = v3811[1];
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Object({
    adminClaimed: ctc4,
    bal: ctc5,
    buyers: ctc5,
    claimed: ctc4,
    currentUserNumber: ctc5,
    keepGoing: ctc4,
    percent: ctc5,
    raffleBal: ctc5,
    winner: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    User_buyTicket0_273: ctc11,
    User_claim0_273: ctc10,
    User_delete0_273: ctc10,
    User_determinWinnerAfterDeadline0_273: ctc12,
    User_optin0_273: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3583 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v3.rsh:1:23:application',
    fs: ['at ./raffle_token_v3.rsh:187:26:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:187:26:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to "runUser_optin0_273" (defined at: ./raffle_token_v3.rsh:187:10:function exp)', 'at ./raffle_token_v3.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v3587 = ['User_optin0_273', v3583];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3476, v3478, v3479, v3480, v3481, v3512, v3521, v3525, v3528, v3529, v3551, v3561, v3562, v3563, v3564, v3587],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:189:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:189:14:decimal', stdlib.UInt_max, '0'), v3472], [stdlib.checkedBigNumberify('./raffle_token_v3.rsh:189:28:decimal', stdlib.UInt_max, '0'), v3478]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
      
      switch (v3811[0]) {
        case 'User_buyTicket0_273': {
          const v3814 = v3811[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4129 = v3811[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4444 = v3811[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4759 = v3811[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5074 = v3811[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          ;
          const v5383 = null;
          const v5384 = await txn1.getOutput('User_optin', 'v5383', ctc0, v5383);
          
          const v7094 = v3521;
          const v7096 = v3813;
          const v7097 = v3528;
          const v7098 = v3529;
          const v7099 = v3521.keepGoing;
          const v7100 = v3521.claimed;
          const v7101 = v7100 ? false : true;
          const v7102 = v7099 ? v7101 : false;
          if (v7102) {
            const v7103 = stdlib.ge(v3813, v3512);
            const v7104 = v3521.bal;
            const v7105 = v3521.raffleBal;
            const v7106 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v7107 = v7106[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v7109 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v7110 = v7109[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: undefined /* Nothing */
              });
            const v7111 = stdlib.sub(v7110, v7110);
            const v7112 = stdlib.Array_set(v7109, '0', v7111);
            const v7113 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v7112);
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3472
              });
            const v7114 = v7113[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
            const v7115 = v7114[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3481,
              tok: v3478
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3478
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3472
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
    tys: [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v3811], secs: v3813, time: v3812, didSend: v2812, from: v3810 } = txn1;
  switch (v3811[0]) {
    case 'User_buyTicket0_273': {
      const v3814 = v3811[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4129 = v3811[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4444 = v3811[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4759 = v3811[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5074 = v3811[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v5383 = null;
      const v5384 = await txn1.getOutput('User_optin', 'v5383', ctc0, v5383);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v5074, v5384), {
          at: './raffle_token_v3.rsh:187:11:application',
          fs: ['at ./raffle_token_v3.rsh:187:11:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:187:11:function exp)', 'at ./raffle_token_v3.rsh:191:14:application call to "ret" (defined at: ./raffle_token_v3.rsh:190:15:function exp)', 'at ./raffle_token_v3.rsh:190:15:application call to [unknown function] (defined at: ./raffle_token_v3.rsh:190:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v7094 = v3521;
      const v7096 = v3813;
      const v7097 = v3528;
      const v7098 = v3529;
      const v7099 = v3521.keepGoing;
      const v7100 = v3521.claimed;
      const v7101 = v7100 ? false : true;
      const v7102 = v7099 ? v7101 : false;
      if (v7102) {
        const v7103 = stdlib.ge(v3813, v3512);
        const v7104 = v3521.bal;
        const v7105 = v3521.raffleBal;
        const v7106 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v7107 = v7106[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v7109 = v3528[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v7110 = v7109[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:155:31:application', stdlib.UInt_max, '0')];
        ;
        const v7111 = stdlib.sub(v7110, v7110);
        const v7112 = stdlib.Array_set(v7109, '0', v7111);
        const v7113 = stdlib.Array_set(v3528, stdlib.checkedBigNumberify('./raffle_token_v3.rsh:305:41:application', stdlib.UInt_max, '0'), v7112);
        ;
        const v7114 = v7113[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '1')];
        const v7115 = v7114[stdlib.checkedBigNumberify('./raffle_token_v3.rsh:306:19:application', stdlib.UInt_max, '0')];
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
    impure: [`User_buyTicket(uint64)byte`, `User_claim()byte`, `User_delete()byte`, `User_determinWinnerAfterDeadline(address)void`, `User_optin()void`, `_reachp_0((uint64,uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[32])))void`],
    pure: [`Info_adminClaimed()byte`, `Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,uint64,address,uint64,byte,uint64)`, `Info_randomNumber()uint64`, `Info_ticketsBought()uint64`, `Info_token()uint64`, `Info_userClaimed()byte`, `Info_winner()(byte,byte[32])`],
    sigs: [`Info_adminClaimed()byte`, `Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,uint64,address,uint64,byte,uint64)`, `Info_randomNumber()uint64`, `Info_ticketsBought()uint64`, `Info_token()uint64`, `Info_userClaimed()byte`, `Info_winner()(byte,byte[32])`, `User_buyTicket(uint64)byte`, `User_claim()byte`, `User_delete()byte`, `User_determinWinnerAfterDeadline(address)void`, `User_optin()void`, `_reachp_0((uint64,uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[32])))void`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAQAAEECAURKTE5oI0GEmQhIEFJJgQBAAEBAAECMRhBCEAqZEkiWzUBJVs1AihkKWRQK2RQghUEE25XOwQT7+94BBePUIYEGVleKQQn795sBCk3p/YEKWGf5AQ++WKaBEKz8R4EVGg/7QR5OSlTBHo2/gAEf5xxXwSCxJYGBKNB0cIEqaV4pgStudPfBMNv/m4E1oNbMgTf2SMoBOd3Hy42GgCOFQBuAEEBagBkB4gB3QBRACEA9wHKAOcBmgAxAAEBGwDCAJgA1QdtB30BCQA0ASQSRIgIUDQXVwABNQQxGSISRIAEFR98dTQEULAjQzQBJBJEiAgwNA4WNQRC/980ASQSRIgIIDQYFjUEQv/PNAEkEkSICBA0FRY1BEL/vzQBJBJEiAgANBIWUQcINQRC/6w2GgE1CyJEQv+iNhoBNQs0ASQSRIgH3ioqKDQLUL5JFlEHCEUETVAiVSMSFlEHCDUEQv94NAEkEkSIB7k0GxY0IRZQNB0WUDQaUDQfFlA0IBZRBwhQNBwWUDUEQv9ONAEkEkSIB480EkQ0HhY1BEL/OzQBJBJEiAd8NBdXEgg1BEL/KTQBJBJEiAdqNBwWNQRC/xk0ASQSRIgHWjQXVxEBNQRC/wc0ASQSRIgHSDQXVyshNQRC/vU2GgEXNQslryg0CxZQgRivUFA1CyQ0ARJEiAciNAsiWzUMNAtXCCE1DYAE6itM0zQMFlA0DVCwNAyIB480DSJVjQUGTAZPBlIGVQZYQv6WgCkAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv+VgCkAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9lNhoBNQslr4ABAzQLUFA1C0L/UoApAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/IjQNI1s1CzQVNBgMRDQLIw9ENAs0HQtJNQ00IYgGzzEANAsWUDUMgAT4WMgANAxQsCM1DIAIAAAAAAAAD280DBZRBwhQsDQMFlEHCDUENBdXAAE0ETQNCBZQNBeBCVsjCBZQNBdXEQFQNBchCls0CwgWUDQXVxoBUDQXVxsIUDQQFlA0F1crIVAyBjIHNBQ0DzQONA0IFlwAXAA1FDUVNRY1FzQXVxoBFzQXVxEBFxQQQQUCNBU0GA81EjQXI1s1ETQXgSNbNRA0FFcAEUk1DyJbNQ40IjQhFlA0IBZRBwhQNB8WUDQeFlA0HRZQNBwWUDQbFlA0GlA0GVA0GBZQNBdQNBUWUDQUUDQTFlA0EhZRBwhQNBEWUDQQFlA0D1A0DhZQJDIGNQI1AShLAVcAf2cpSwFXf39nK0xX/kNnKjQBFjQCFlBnMRkiEkSIBd00A0D8v0L8sjQXVyshSTULIlUjEkQ0EkQ0FFcREUk1DSJbNQw0EDQMDkQ0IjQLSVcBAEwiVU1JNQ8xABJEMgc0GA9ENBQ0DTQMSQkWXABcETUONAw0HDQPiAUoNA5XABFJNRAiW0k1D0khBAshCwoJNQ00DjQQNA80DQkWXABcADUMNA00ITQiiAT4IzUNgAgAAAAAAAAQ7TQNFlEHCFCwNA0WUQcINQQpNAxXABFXAAhQNBdXCQhQKVA0F1cSCFAoUDQXVxsIUCWvUDQLUDIGMgc0DDUUNRU1FjUXQv51MQA0IhIxADQZEhFENBJENBchCltJNQwiEkQjNQuACAAAAAAAABJFNAsWUQcIULA0CxZRBwg1BDQXVwABNBEWUDQXVwkIUClQNAwWUChQNBdXGwhQNBAWUDQXVyshUDIGMgc1FTUWNRdC/go0F1crISJVIhJENBJEMQA0GRJEMgc0GA9ENA4hBAshCwo1DDQUNA80DjQMCRZcAFwANQs0DDQhNBmIA/00C1cAEUk1DyJbNQ40CzQPNA5JCRZcAFwANQw0DjQhNCKIA9kqNQuACAAAAAAAABO1NAtQsDQLNQQpNAxXABFXAAhQNBdXCQhQNBdXEQFQNBdXEghQNBdXGgFQNBdXGwhQNBAWUCk0DVcBIFBQMgYyBzQMNRQ1FTUWNRdC/VAqNQuACAAAAAAAABUHNAtQsDQLNQQyBjIHNRU1FkL9MDEANSI0CyJbNQ00CyVbNSE0C1cQARc1IDQLIQVbNR80C4EZWzUeNAshDFs1HTQLIQZbNQw0CyEHWzUcNAshCFs1GzQLV0EgNRo0C1dhIDUZgATWNZi7NA0WUDQhFlA0IBZRBwhQNB8WUDQeFlA0HRZQNAwWUDQcFlA0GxZQNBpQNBlQsDQNiALeIQWvSTULSVBJNQ1JVwARJa9cAFwASTULSVcRESWvXABcETUONBw0IRNENB2B////////////AQxENB0jD0QhCYgCpSI0ITIKiAKLIQmIApgiNBwyCogCfjQiNCEWUDQgFlEHCFA0HxZQNB4WUDQdFlA0DBZQNBwWUDQbFlA0GlA0GVA0DlCBhgGvUCMyBkL8mSM0ARJESVcAIDUiSSENWzUhSVcoARc1IEkhBls1H0khB1s1HkkhCFs1HUkhDls1DEkhD1s1HEmBUVs1G0lXWSA1GklXeSA1GVeZIjUONAsXNQ2ABNUVGRQ0DRZQsDQNiAHrNAyIAhw0DlcRETUNNA40DUkiWzQbCBZcAFwRNQs0GzQciAHbNCIxABJEMgc0Hwg1GCg0C1cAEVcACFAlr1AoUCWvUClQgAgAAAAAAAAABVA0C1cREVcACFAhDK9QMgYyBzQLNAw1EzUUNRU1FjUXQvtCiAFyIQmIAXs2GgE1C0L+AogBYjYaATULQv8RiAFXNhoBNQtC+ZwiMTQSRCQxNRJEIjE2EkQiMTcSRIgBOIHBAq8iIkL7f0L6V0L7qkL8fkL85kL9nTQUVwARSTUMIls1CzQTNBmIASE0CzQhNBmIAQA0FDQMNAtJCRZcAFwAVxERIls0HDQZiADnIjQcMgoyCYgBQyI0ITIKMgmIATkxGSEEEkSIASQyCmAyCngJSTUGMgqIANNC+zUisgEjshCyB7IIs4kisgEkshCyFLIRshKziUiJTAlJNQYyCYgAqokJSUH/7kk1BogAxIlJVwAgNSJJIQ1bNSFJVygBFzUgSSEGWzUfSSEHWzUeSSEIWzUdSSEOWzUcSSEPWzUbSVdRIDUaSVdxIDUZSYGRAVs1GElXmUw1F0mB5QFbNRVJV+0iNRRJgY8CWzUTSYGXAiNYFzUSSYGYAls1EUmBoAJbNRBJgagCIQVYNQ+BuQJbNQ6JsUL/UCM1A4lJIhJMNAISEUSJNAYINQaJsUL/LDEWNAAjCEk1AAlHAzgUMgoSRDgQJBJEOBFPAhJEOBISRIkxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJNAY0B0oPQf8BQv8JsbIVQv7o`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `500`,
    1001: `501`,
    1002: `501`,
    1003: `502`,
    1004: `503`,
    1005: `503`,
    1006: `503`,
    1007: `504`,
    1008: `505`,
    1009: `505`,
    101: `24`,
    1010: `506`,
    1011: `507`,
    1012: `508`,
    1013: `508`,
    1014: `509`,
    1015: `510`,
    1016: `511`,
    1017: `511`,
    1018: `512`,
    1019: `513`,
    102: `24`,
    1020: `513`,
    1021: `514`,
    1022: `515`,
    1023: `516`,
    1024: `517`,
    1025: `517`,
    1026: `519`,
    1027: `519`,
    1028: `520`,
    1029: `520`,
    103: `24`,
    1030: `521`,
    1031: `522`,
    1032: `522`,
    1033: `523`,
    1034: `523`,
    1035: `523`,
    1036: `524`,
    1037: `525`,
    1038: `526`,
    1039: `526`,
    104: `24`,
    1040: `527`,
    1041: `527`,
    1042: `527`,
    1043: `528`,
    1044: `529`,
    1045: `530`,
    1046: `531`,
    1047: `531`,
    1048: `531`,
    1049: `532`,
    105: `24`,
    1050: `533`,
    1051: `534`,
    1052: `534`,
    1053: `535`,
    1054: `536`,
    1055: `536`,
    1056: `537`,
    1057: `538`,
    1058: `539`,
    1059: `540`,
    106: `24`,
    1060: `540`,
    1061: `541`,
    1062: `542`,
    1063: `543`,
    1064: `545`,
    1065: `545`,
    1066: `545`,
    1067: `547`,
    1068: `547`,
    1069: `548`,
    107: `24`,
    1070: `548`,
    1071: `548`,
    1072: `549`,
    1073: `549`,
    1074: `549`,
    1075: `551`,
    1076: `551`,
    1077: `552`,
    1078: `552`,
    1079: `552`,
    108: `24`,
    1080: `553`,
    1081: `554`,
    1082: `554`,
    1083: `555`,
    1084: `556`,
    1085: `557`,
    1086: `558`,
    1087: `559`,
    1088: `567`,
    1089: `567`,
    109: `24`,
    1090: `568`,
    1091: `576`,
    1092: `576`,
    1093: `577`,
    1094: `577`,
    1095: `577`,
    1096: `578`,
    1097: `579`,
    1098: `579`,
    1099: `580`,
    11: `2`,
    110: `24`,
    1100: `581`,
    1101: `582`,
    1102: `582`,
    1103: `583`,
    1104: `583`,
    1105: `584`,
    1106: `584`,
    1107: `585`,
    1108: `586`,
    1109: `594`,
    111: `24`,
    1110: `594`,
    1111: `595`,
    1112: `595`,
    1113: `597`,
    1114: `598`,
    1115: `598`,
    1116: `598`,
    1117: `599`,
    1118: `600`,
    1119: `601`,
    112: `24`,
    1120: `602`,
    1121: `603`,
    1122: `604`,
    1123: `604`,
    1124: `605`,
    1125: `605`,
    1126: `606`,
    1127: `607`,
    1128: `615`,
    1129: `615`,
    113: `24`,
    1130: `616`,
    1131: `616`,
    1132: `617`,
    1133: `618`,
    1134: `623`,
    1135: `623`,
    1136: `624`,
    1137: `624`,
    1138: `625`,
    1139: `625`,
    114: `24`,
    1140: `626`,
    1141: `627`,
    1142: `628`,
    1143: `629`,
    1144: `629`,
    1145: `630`,
    1146: `630`,
    1147: `631`,
    1148: `631`,
    1149: `632`,
    115: `24`,
    1150: `632`,
    1151: `634`,
    1152: `634`,
    1153: `636`,
    1154: `636`,
    1155: `637`,
    1156: `637`,
    1157: `637`,
    1158: `638`,
    1159: `638`,
    116: `24`,
    1160: `639`,
    1161: `639`,
    1162: `639`,
    1163: `640`,
    1164: `641`,
    1165: `641`,
    1166: `642`,
    1167: `643`,
    1168: `644`,
    1169: `645`,
    117: `24`,
    1170: `645`,
    1171: `646`,
    1172: `647`,
    1173: `647`,
    1174: `648`,
    1175: `649`,
    1176: `649`,
    1177: `650`,
    1178: `651`,
    1179: `652`,
    118: `24`,
    1180: `652`,
    1181: `653`,
    1182: `653`,
    1183: `654`,
    1184: `654`,
    1185: `655`,
    1186: `655`,
    1187: `656`,
    1188: `656`,
    1189: `657`,
    119: `24`,
    1190: `658`,
    1191: `659`,
    1192: `659`,
    1193: `660`,
    1194: `660`,
    1195: `661`,
    1196: `661`,
    1197: `662`,
    1198: `662`,
    1199: `664`,
    12: `2`,
    120: `24`,
    1200: `664`,
    1201: `666`,
    1202: `666`,
    1203: `667`,
    1204: `667`,
    1205: `667`,
    1206: `668`,
    1207: `669`,
    1208: `669`,
    1209: `670`,
    121: `24`,
    1210: `670`,
    1211: `670`,
    1212: `670`,
    1213: `670`,
    1214: `670`,
    1215: `670`,
    1216: `670`,
    1217: `670`,
    1218: `670`,
    1219: `671`,
    122: `24`,
    1220: `671`,
    1221: `672`,
    1222: `673`,
    1223: `673`,
    1224: `673`,
    1225: `674`,
    1226: `675`,
    1227: `676`,
    1228: `676`,
    1229: `677`,
    123: `24`,
    1230: `678`,
    1231: `678`,
    1232: `678`,
    1233: `679`,
    1234: `679`,
    1235: `680`,
    1236: `681`,
    1237: `681`,
    1238: `682`,
    1239: `682`,
    124: `24`,
    1240: `682`,
    1241: `683`,
    1242: `683`,
    1243: `683`,
    1244: `684`,
    1245: `685`,
    1246: `685`,
    1247: `686`,
    1248: `686`,
    1249: `686`,
    125: `24`,
    1250: `687`,
    1251: `688`,
    1252: `689`,
    1253: `690`,
    1254: `690`,
    1255: `691`,
    1256: `691`,
    1257: `691`,
    1258: `692`,
    1259: `693`,
    126: `24`,
    1260: `694`,
    1261: `695`,
    1262: `695`,
    1263: `696`,
    1264: `696`,
    1265: `696`,
    1266: `697`,
    1267: `698`,
    1268: `699`,
    1269: `700`,
    127: `24`,
    1270: `701`,
    1271: `701`,
    1272: `702`,
    1273: `703`,
    1274: `703`,
    1275: `704`,
    1276: `704`,
    1277: `705`,
    1278: `705`,
    1279: `706`,
    128: `24`,
    1280: `706`,
    1281: `707`,
    1282: `707`,
    1283: `708`,
    1284: `708`,
    1285: `709`,
    1286: `709`,
    1287: `710`,
    1288: `710`,
    1289: `710`,
    129: `24`,
    1290: `712`,
    1291: `712`,
    1292: `713`,
    1293: `713`,
    1294: `714`,
    1295: `715`,
    1296: `715`,
    1297: `716`,
    1298: `716`,
    1299: `717`,
    13: `2`,
    130: `24`,
    1300: `718`,
    1301: `719`,
    1302: `727`,
    1303: `727`,
    1304: `728`,
    1305: `736`,
    1306: `736`,
    1307: `737`,
    1308: `737`,
    1309: `738`,
    131: `24`,
    1310: `739`,
    1311: `740`,
    1312: `740`,
    1313: `741`,
    1314: `742`,
    1315: `743`,
    1316: `751`,
    1317: `752`,
    1318: `752`,
    1319: `753`,
    132: `24`,
    1320: `753`,
    1321: `753`,
    1322: `753`,
    1323: `753`,
    1324: `753`,
    1325: `753`,
    1326: `753`,
    1327: `753`,
    1328: `753`,
    1329: `754`,
    133: `24`,
    1330: `754`,
    1331: `755`,
    1332: `756`,
    1333: `756`,
    1334: `756`,
    1335: `757`,
    1336: `758`,
    1337: `759`,
    1338: `759`,
    1339: `760`,
    134: `24`,
    1340: `761`,
    1341: `761`,
    1342: `761`,
    1343: `762`,
    1344: `762`,
    1345: `763`,
    1346: `763`,
    1347: `764`,
    1348: `764`,
    1349: `764`,
    135: `24`,
    1350: `765`,
    1351: `765`,
    1352: `766`,
    1353: `767`,
    1354: `768`,
    1355: `768`,
    1356: `769`,
    1357: `769`,
    1358: `769`,
    1359: `770`,
    136: `24`,
    1360: `771`,
    1361: `772`,
    1362: `773`,
    1363: `773`,
    1364: `774`,
    1365: `775`,
    1366: `776`,
    1367: `777`,
    1368: `778`,
    1369: `778`,
    137: `24`,
    1370: `779`,
    1371: `779`,
    1372: `779`,
    1373: `780`,
    1374: `781`,
    1375: `781`,
    1376: `782`,
    1377: `783`,
    1378: `784`,
    1379: `784`,
    138: `24`,
    1380: `785`,
    1381: `785`,
    1382: `785`,
    1383: `786`,
    1384: `787`,
    1385: `787`,
    1386: `788`,
    1387: `788`,
    1388: `789`,
    1389: `789`,
    139: `24`,
    1390: `790`,
    1391: `790`,
    1392: `791`,
    1393: `791`,
    1394: `792`,
    1395: `792`,
    1396: `792`,
    1397: `794`,
    1398: `794`,
    1399: `795`,
    14: `2`,
    140: `24`,
    1400: `795`,
    1401: `795`,
    1402: `796`,
    1403: `797`,
    1404: `798`,
    1405: `799`,
    1406: `800`,
    1407: `808`,
    1408: `808`,
    1409: `809`,
    141: `24`,
    1410: `817`,
    1411: `817`,
    1412: `818`,
    1413: `818`,
    1414: `819`,
    1415: `820`,
    1416: `828`,
    1417: `828`,
    1418: `829`,
    1419: `829`,
    142: `24`,
    1420: `830`,
    1421: `831`,
    1422: `836`,
    1423: `836`,
    1424: `837`,
    1425: `837`,
    1426: `838`,
    1427: `839`,
    1428: `839`,
    1429: `840`,
    143: `24`,
    1430: `841`,
    1431: `841`,
    1432: `842`,
    1433: `842`,
    1434: `843`,
    1435: `843`,
    1436: `844`,
    1437: `844`,
    1438: `845`,
    1439: `845`,
    144: `24`,
    1440: `846`,
    1441: `847`,
    1442: `848`,
    1443: `848`,
    1444: `849`,
    1445: `849`,
    1446: `850`,
    1447: `850`,
    1448: `851`,
    1449: `851`,
    145: `24`,
    1450: `853`,
    1451: `853`,
    1452: `855`,
    1453: `855`,
    1454: `856`,
    1455: `856`,
    1456: `856`,
    1457: `857`,
    1458: `857`,
    1459: `858`,
    146: `24`,
    1460: `858`,
    1461: `858`,
    1462: `859`,
    1463: `860`,
    1464: `860`,
    1465: `861`,
    1466: `862`,
    1467: `863`,
    1468: `863`,
    1469: `864`,
    147: `24`,
    1470: `864`,
    1471: `865`,
    1472: `865`,
    1473: `866`,
    1474: `866`,
    1475: `867`,
    1476: `868`,
    1477: `869`,
    1478: `870`,
    1479: `870`,
    148: `24`,
    1480: `871`,
    1481: `871`,
    1482: `872`,
    1483: `872`,
    1484: `873`,
    1485: `873`,
    1486: `874`,
    1487: `874`,
    1488: `876`,
    1489: `876`,
    149: `24`,
    1490: `877`,
    1491: `877`,
    1492: `877`,
    1493: `878`,
    1494: `879`,
    1495: `879`,
    1496: `880`,
    1497: `880`,
    1498: `880`,
    1499: `880`,
    15: `2`,
    150: `24`,
    1500: `880`,
    1501: `880`,
    1502: `880`,
    1503: `880`,
    1504: `880`,
    1505: `880`,
    1506: `881`,
    1507: `881`,
    1508: `882`,
    1509: `883`,
    151: `24`,
    1510: `884`,
    1511: `884`,
    1512: `885`,
    1513: `885`,
    1514: `886`,
    1515: `887`,
    1516: `887`,
    1517: `888`,
    1518: `888`,
    1519: `888`,
    152: `24`,
    1520: `889`,
    1521: `889`,
    1522: `889`,
    1523: `890`,
    1524: `891`,
    1525: `891`,
    1526: `892`,
    1527: `892`,
    1528: `892`,
    1529: `893`,
    153: `24`,
    1530: `894`,
    1531: `894`,
    1532: `895`,
    1533: `895`,
    1534: `895`,
    1535: `896`,
    1536: `897`,
    1537: `897`,
    1538: `898`,
    1539: `898`,
    154: `24`,
    1540: `898`,
    1541: `899`,
    1542: `900`,
    1543: `900`,
    1544: `901`,
    1545: `901`,
    1546: `901`,
    1547: `902`,
    1548: `903`,
    1549: `903`,
    155: `24`,
    1550: `904`,
    1551: `904`,
    1552: `904`,
    1553: `905`,
    1554: `906`,
    1555: `906`,
    1556: `907`,
    1557: `908`,
    1558: `909`,
    1559: `910`,
    156: `24`,
    1560: `910`,
    1561: `911`,
    1562: `911`,
    1563: `911`,
    1564: `912`,
    1565: `913`,
    1566: `914`,
    1567: `914`,
    1568: `915`,
    1569: `915`,
    157: `24`,
    1570: `916`,
    1571: `916`,
    1572: `917`,
    1573: `917`,
    1574: `918`,
    1575: `918`,
    1576: `919`,
    1577: `919`,
    1578: `920`,
    1579: `920`,
    158: `24`,
    1580: `921`,
    1581: `921`,
    1582: `921`,
    1583: `923`,
    1584: `924`,
    1585: `924`,
    1586: `925`,
    1587: `925`,
    1588: `925`,
    1589: `925`,
    159: `24`,
    1590: `925`,
    1591: `925`,
    1592: `925`,
    1593: `925`,
    1594: `925`,
    1595: `925`,
    1596: `926`,
    1597: `926`,
    1598: `927`,
    1599: `928`,
    16: `2`,
    160: `24`,
    1600: `929`,
    1601: `929`,
    1602: `930`,
    1603: `930`,
    1604: `931`,
    1605: `931`,
    1606: `932`,
    1607: `932`,
    1608: `933`,
    1609: `933`,
    161: `25`,
    1610: `934`,
    1611: `934`,
    1612: `935`,
    1613: `935`,
    1614: `935`,
    1615: `937`,
    1616: `937`,
    1617: `938`,
    1618: `938`,
    1619: `939`,
    162: `25`,
    1620: `939`,
    1621: `940`,
    1622: `941`,
    1623: `942`,
    1624: `942`,
    1625: `943`,
    1626: `943`,
    1627: `944`,
    1628: `945`,
    1629: `946`,
    163: `25`,
    1630: `946`,
    1631: `947`,
    1632: `947`,
    1633: `948`,
    1634: `948`,
    1635: `948`,
    1636: `949`,
    1637: `950`,
    1638: `950`,
    1639: `951`,
    164: `26`,
    1640: `951`,
    1641: `952`,
    1642: `952`,
    1643: `953`,
    1644: `954`,
    1645: `954`,
    1646: `955`,
    1647: `955`,
    1648: `956`,
    1649: `956`,
    165: `26`,
    1650: `957`,
    1651: `958`,
    1652: `958`,
    1653: `959`,
    1654: `959`,
    1655: `960`,
    1656: `960`,
    1657: `961`,
    1658: `962`,
    1659: `962`,
    166: `26`,
    1660: `963`,
    1661: `963`,
    1662: `964`,
    1663: `964`,
    1664: `965`,
    1665: `966`,
    1666: `966`,
    1667: `967`,
    1668: `967`,
    1669: `968`,
    167: `26`,
    1670: `968`,
    1671: `969`,
    1672: `970`,
    1673: `970`,
    1674: `971`,
    1675: `971`,
    1676: `972`,
    1677: `972`,
    1678: `973`,
    1679: `974`,
    168: `26`,
    1680: `974`,
    1681: `975`,
    1682: `975`,
    1683: `976`,
    1684: `976`,
    1685: `976`,
    1686: `977`,
    1687: `977`,
    1688: `978`,
    1689: `978`,
    169: `26`,
    1690: `979`,
    1691: `979`,
    1692: `979`,
    1693: `980`,
    1694: `980`,
    1695: `981`,
    1696: `981`,
    1697: `981`,
    1698: `981`,
    1699: `981`,
    17: `2`,
    170: `26`,
    1700: `981`,
    1701: `982`,
    1702: `982`,
    1703: `983`,
    1704: `984`,
    1705: `985`,
    1706: `985`,
    1707: `986`,
    1708: `987`,
    1709: `988`,
    171: `26`,
    1710: `988`,
    1711: `989`,
    1712: `990`,
    1713: `990`,
    1714: `990`,
    1715: `991`,
    1716: `992`,
    1717: `992`,
    1718: `993`,
    1719: `994`,
    172: `26`,
    1720: `995`,
    1721: `995`,
    1722: `996`,
    1723: `997`,
    1724: `998`,
    1725: `998`,
    1726: `999`,
    1727: `1000`,
    1728: `1001`,
    1729: `1001`,
    173: `26`,
    1730: `1002`,
    1731: `1003`,
    1732: `1004`,
    1733: `1004`,
    1734: `1005`,
    1735: `1006`,
    1736: `1007`,
    1737: `1007`,
    1738: `1008`,
    1739: `1009`,
    174: `26`,
    1740: `1010`,
    1741: `1010`,
    1742: `1011`,
    1743: `1012`,
    1744: `1012`,
    1745: `1013`,
    1746: `1014`,
    1747: `1016`,
    1748: `1016`,
    1749: `1017`,
    175: `26`,
    1750: `1017`,
    1751: `1017`,
    1752: `1018`,
    1753: `1018`,
    1754: `1019`,
    1755: `1020`,
    1756: `1021`,
    1757: `1021`,
    1758: `1022`,
    1759: `1023`,
    176: `26`,
    1760: `1024`,
    1761: `1025`,
    1762: `1025`,
    1763: `1026`,
    1764: `1027`,
    1765: `1027`,
    1766: `1027`,
    1767: `1028`,
    1768: `1029`,
    1769: `1030`,
    177: `26`,
    1770: `1030`,
    1771: `1031`,
    1772: `1031`,
    1773: `1032`,
    1774: `1033`,
    1775: `1033`,
    1776: `1034`,
    1777: `1035`,
    1778: `1035`,
    1779: `1035`,
    178: `26`,
    1780: `1036`,
    1781: `1037`,
    1782: `1038`,
    1783: `1038`,
    1784: `1039`,
    1785: `1039`,
    1786: `1040`,
    1787: `1040`,
    1788: `1041`,
    1789: `1041`,
    179: `26`,
    1790: `1042`,
    1791: `1042`,
    1792: `1043`,
    1793: `1044`,
    1794: `1047`,
    1795: `1047`,
    1796: `1048`,
    1797: `1048`,
    1798: `1048`,
    1799: `1048`,
    18: `2`,
    180: `26`,
    1800: `1048`,
    1801: `1048`,
    1802: `1048`,
    1803: `1048`,
    1804: `1048`,
    1805: `1048`,
    1806: `1048`,
    1807: `1049`,
    1808: `1050`,
    1809: `1054`,
    181: `26`,
    1810: `1054`,
    1811: `1055`,
    1812: `1056`,
    1813: `1057`,
    1814: `1061`,
    1815: `1061`,
    1816: `1062`,
    1817: `1062`,
    1818: `1062`,
    1819: `1063`,
    182: `26`,
    1820: `1065`,
    1821: `1065`,
    1822: `1066`,
    1823: `1066`,
    1824: `1067`,
    1825: `1067`,
    1826: `1067`,
    1827: `1068`,
    1828: `1068`,
    1829: `1069`,
    183: `26`,
    1830: `1069`,
    1831: `1069`,
    1832: `1070`,
    1833: `1072`,
    1834: `1072`,
    1835: `1073`,
    1836: `1073`,
    1837: `1074`,
    1838: `1074`,
    1839: `1074`,
    184: `26`,
    1840: `1076`,
    1841: `1076`,
    1842: `1077`,
    1843: `1077`,
    1844: `1078`,
    1845: `1079`,
    1846: `1080`,
    1847: `1080`,
    1848: `1081`,
    1849: `1082`,
    185: `26`,
    1850: `1082`,
    1851: `1082`,
    1852: `1083`,
    1853: `1084`,
    1854: `1084`,
    1855: `1085`,
    1856: `1086`,
    1857: `1087`,
    1858: `1087`,
    1859: `1088`,
    186: `26`,
    1860: `1089`,
    1861: `1090`,
    1862: `1090`,
    1863: `1091`,
    1864: `1092`,
    1865: `1093`,
    1866: `1093`,
    1867: `1094`,
    1868: `1095`,
    1869: `1096`,
    187: `26`,
    1870: `1096`,
    1871: `1097`,
    1872: `1098`,
    1873: `1099`,
    1874: `1099`,
    1875: `1100`,
    1876: `1101`,
    1877: `1102`,
    1878: `1102`,
    1879: `1103`,
    188: `26`,
    1880: `1104`,
    1881: `1104`,
    1882: `1105`,
    1883: `1106`,
    1884: `1106`,
    1885: `1107`,
    1886: `1108`,
    1887: `1108`,
    1888: `1108`,
    1889: `1109`,
    189: `26`,
    1890: `1110`,
    1891: `1111`,
    1892: `1112`,
    1893: `1112`,
    1894: `1113`,
    1895: `1113`,
    1896: `1113`,
    1897: `1115`,
    1898: `1116`,
    1899: `1116`,
    19: `2`,
    190: `26`,
    1900: `1117`,
    1901: `1118`,
    1902: `1120`,
    1903: `1121`,
    1904: `1121`,
    1905: `1121`,
    1906: `1122`,
    1907: `1122`,
    1908: `1123`,
    1909: `1124`,
    191: `26`,
    1910: `1124`,
    1911: `1125`,
    1912: `1126`,
    1913: `1126`,
    1914: `1127`,
    1915: `1128`,
    1916: `1128`,
    1917: `1128`,
    1918: `1129`,
    1919: `1130`,
    192: `26`,
    1920: `1130`,
    1921: `1131`,
    1922: `1132`,
    1923: `1132`,
    1924: `1133`,
    1925: `1134`,
    1926: `1134`,
    1927: `1135`,
    1928: `1136`,
    1929: `1136`,
    193: `26`,
    1930: `1137`,
    1931: `1138`,
    1932: `1138`,
    1933: `1139`,
    1934: `1140`,
    1935: `1140`,
    1936: `1141`,
    1937: `1142`,
    1938: `1142`,
    1939: `1143`,
    194: `26`,
    1940: `1144`,
    1941: `1144`,
    1942: `1145`,
    1943: `1146`,
    1944: `1146`,
    1945: `1147`,
    1946: `1148`,
    1947: `1148`,
    1948: `1149`,
    1949: `1150`,
    195: `26`,
    1950: `1150`,
    1951: `1151`,
    1952: `1152`,
    1953: `1152`,
    1954: `1153`,
    1955: `1154`,
    1956: `1154`,
    1957: `1155`,
    1958: `1156`,
    1959: `1156`,
    196: `26`,
    1960: `1156`,
    1961: `1157`,
    1962: `1157`,
    1963: `1158`,
    1964: `1159`,
    1965: `1159`,
    1966: `1159`,
    1967: `1160`,
    1968: `1160`,
    1969: `1161`,
    197: `26`,
    1970: `1161`,
    1971: `1161`,
    1972: `1162`,
    1973: `1162`,
    1974: `1163`,
    1975: `1163`,
    1976: `1164`,
    1977: `1165`,
    1978: `1165`,
    1979: `1166`,
    198: `26`,
    1980: `1166`,
    1981: `1166`,
    1982: `1166`,
    1983: `1166`,
    1984: `1166`,
    1985: `1167`,
    1986: `1167`,
    1987: `1168`,
    1988: `1169`,
    1989: `1170`,
    199: `26`,
    1990: `1172`,
    1991: `1172`,
    1992: `1173`,
    1993: `1173`,
    1994: `1173`,
    1995: `1174`,
    1996: `1174`,
    1997: `1175`,
    1998: `1175`,
    1999: `1175`,
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
    2009: `1182`,
    201: `26`,
    2010: `1182`,
    2011: `1183`,
    2012: `1184`,
    2013: `1185`,
    2014: `1186`,
    2015: `1186`,
    2016: `1187`,
    2017: `1188`,
    2018: `1189`,
    2019: `1189`,
    202: `26`,
    2020: `1190`,
    2021: `1190`,
    2022: `1191`,
    2023: `1191`,
    2024: `1192`,
    2025: `1192`,
    2026: `1193`,
    2027: `1193`,
    2028: `1194`,
    2029: `1194`,
    203: `26`,
    2030: `1194`,
    2031: `1197`,
    2032: `1197`,
    2033: `1198`,
    2034: `1198`,
    2035: `1199`,
    2036: `1200`,
    2037: `1203`,
    2038: `1203`,
    2039: `1204`,
    204: `26`,
    2040: `1204`,
    2041: `1205`,
    2042: `1206`,
    2043: `1206`,
    2044: `1207`,
    2045: `1208`,
    2046: `1208`,
    2047: `1209`,
    2048: `1209`,
    2049: `1209`,
    205: `26`,
    2050: `1210`,
    2051: `1210`,
    2052: `1210`,
    2053: `1211`,
    2054: `1212`,
    2055: `1213`,
    2056: `1214`,
    2057: `1215`,
    2058: `1216`,
    2059: `1217`,
    206: `26`,
    2060: `1218`,
    2061: `1219`,
    2062: `1220`,
    2063: `1221`,
    2064: `1222`,
    2065: `1222`,
    2066: `1222`,
    2067: `1222`,
    2068: `1222`,
    2069: `1222`,
    207: `26`,
    2070: `1222`,
    2071: `1222`,
    2072: `1222`,
    2073: `1222`,
    2074: `1223`,
    2075: `1224`,
    2076: `1224`,
    2077: `1225`,
    2078: `1225`,
    2079: `1225`,
    208: `28`,
    2080: `1226`,
    2081: `1226`,
    2082: `1226`,
    2083: `1227`,
    2084: `1228`,
    2085: `1228`,
    2086: `1229`,
    2087: `1230`,
    2088: `1231`,
    2089: `1231`,
    209: `31`,
    2090: `1232`,
    2091: `1232`,
    2092: `1233`,
    2093: `1233`,
    2094: `1234`,
    2095: `1234`,
    2096: `1235`,
    2097: `1235`,
    2098: `1236`,
    2099: `1236`,
    21: `2`,
    210: `31`,
    2100: `1237`,
    2101: `1237`,
    2102: `1238`,
    2103: `1238`,
    2104: `1239`,
    2105: `1239`,
    2106: `1240`,
    2107: `1240`,
    2108: `1240`,
    2109: `1242`,
    211: `32`,
    2110: `1242`,
    2111: `1242`,
    2112: `1243`,
    2113: `1243`,
    2114: `1244`,
    2115: `1244`,
    2116: `1244`,
    2117: `1245`,
    2118: `1245`,
    2119: `1245`,
    212: `33`,
    2120: `1246`,
    2121: `1246`,
    2122: `1247`,
    2123: `1247`,
    2124: `1247`,
    2125: `1249`,
    2126: `1249`,
    2127: `1249`,
    2128: `1250`,
    2129: `1250`,
    213: `34`,
    2130: `1250`,
    2131: `1251`,
    2132: `1251`,
    2133: `1252`,
    2134: `1252`,
    2135: `1252`,
    2136: `1254`,
    2137: `1254`,
    2138: `1254`,
    2139: `1255`,
    214: `37`,
    2140: `1255`,
    2141: `1255`,
    2142: `1256`,
    2143: `1256`,
    2144: `1257`,
    2145: `1257`,
    2146: `1257`,
    2147: `1259`,
    2148: `1260`,
    2149: `1260`,
    215: `37`,
    2150: `1261`,
    2151: `1262`,
    2152: `1263`,
    2153: `1264`,
    2154: `1264`,
    2155: `1265`,
    2156: `1266`,
    2157: `1267`,
    2158: `1268`,
    2159: `1268`,
    216: `37`,
    2160: `1269`,
    2161: `1270`,
    2162: `1271`,
    2163: `1272`,
    2164: `1272`,
    2165: `1273`,
    2166: `1274`,
    2167: `1275`,
    2168: `1275`,
    2169: `1275`,
    217: `38`,
    2170: `1276`,
    2171: `1276`,
    2172: `1276`,
    2173: `1277`,
    2174: `1278`,
    2175: `1279`,
    2176: `1280`,
    2177: `1280`,
    2178: `1280`,
    2179: `1282`,
    218: `38`,
    2180: `1282`,
    2181: `1282`,
    2182: `1284`,
    2183: `1284`,
    2184: `1284`,
    2185: `1286`,
    2186: `1286`,
    2187: `1286`,
    2188: `1288`,
    2189: `1288`,
    219: `39`,
    2190: `1288`,
    2191: `1290`,
    2192: `1290`,
    2193: `1290`,
    2194: `1292`,
    2195: `1292`,
    2196: `1293`,
    2197: `1293`,
    2198: `1293`,
    2199: `1294`,
    22: `2`,
    220: `39`,
    2200: `1295`,
    2201: `1295`,
    2202: `1296`,
    2203: `1297`,
    2204: `1298`,
    2205: `1298`,
    2206: `1299`,
    2207: `1299`,
    2208: `1301`,
    2209: `1301`,
    221: `39`,
    2210: `1302`,
    2211: `1302`,
    2212: `1302`,
    2213: `1303`,
    2214: `1303`,
    2215: `1305`,
    2216: `1305`,
    2217: `1306`,
    2218: `1306`,
    2219: `1307`,
    222: `40`,
    2220: `1307`,
    2221: `1307`,
    2222: `1308`,
    2223: `1308`,
    2224: `1309`,
    2225: `1309`,
    2226: `1310`,
    2227: `1310`,
    2228: `1311`,
    2229: `1312`,
    223: `40`,
    2230: `1313`,
    2231: `1314`,
    2232: `1314`,
    2233: `1315`,
    2234: `1315`,
    2235: `1316`,
    2236: `1316`,
    2237: `1316`,
    2238: `1317`,
    2239: `1318`,
    224: `42`,
    2240: `1320`,
    2241: `1320`,
    2242: `1321`,
    2243: `1321`,
    2244: `1322`,
    2245: `1322`,
    2246: `1322`,
    2247: `1324`,
    2248: `1325`,
    2249: `1325`,
    225: `42`,
    2250: `1326`,
    2251: `1326`,
    2252: `1327`,
    2253: `1327`,
    2254: `1328`,
    2255: `1328`,
    2256: `1328`,
    2257: `1329`,
    2258: `1330`,
    2259: `1330`,
    226: `43`,
    2260: `1331`,
    2261: `1331`,
    2262: `1332`,
    2263: `1332`,
    2264: `1333`,
    2265: `1333`,
    2266: `1333`,
    2267: `1335`,
    2268: `1335`,
    2269: `1336`,
    227: `44`,
    2270: `1336`,
    2271: `1337`,
    2272: `1338`,
    2273: `1340`,
    2274: `1340`,
    2275: `1340`,
    2276: `1342`,
    2277: `1342`,
    2278: `1343`,
    2279: `1344`,
    228: `45`,
    2280: `1344`,
    2281: `1345`,
    2282: `1346`,
    2283: `1348`,
    2284: `1349`,
    2285: `1349`,
    2286: `1350`,
    2287: `1350`,
    2288: `1351`,
    2289: `1351`,
    229: `48`,
    2290: `1351`,
    2291: `1352`,
    2292: `1352`,
    2293: `1352`,
    2294: `1354`,
    2295: `1355`,
    2296: `1355`,
    2297: `1356`,
    2298: `1357`,
    2299: `1357`,
    23: `2`,
    230: `48`,
    2300: `1358`,
    2301: `1358`,
    2302: `1359`,
    2303: `1359`,
    2304: `1360`,
    2305: `1361`,
    2306: `1363`,
    2307: `1364`,
    2308: `1364`,
    2309: `1365`,
    231: `48`,
    2310: `1366`,
    2311: `1366`,
    2312: `1367`,
    2313: `1367`,
    2314: `1368`,
    2315: `1368`,
    2316: `1369`,
    2317: `1369`,
    2318: `1370`,
    2319: `1371`,
    232: `48`,
    2320: `1373`,
    2321: `1374`,
    2322: `1376`,
    2323: `1377`,
    2324: `1378`,
    2325: `1379`,
    2326: `1379`,
    2327: `1380`,
    2328: `1380`,
    2329: `1381`,
    233: `48`,
    2330: `1381`,
    2331: `1381`,
    2332: `1382`,
    2333: `1384`,
    2334: `1385`,
    2335: `1386`,
    2336: `1386`,
    2337: `1386`,
    2338: `1387`,
    2339: `1388`,
    234: `48`,
    2340: `1388`,
    2341: `1389`,
    2342: `1389`,
    2343: `1389`,
    2344: `1390`,
    2345: `1392`,
    2346: `1393`,
    2347: `1393`,
    2348: `1393`,
    2349: `1394`,
    235: `49`,
    2350: `1394`,
    2351: `1395`,
    2352: `1396`,
    2353: `1396`,
    2354: `1397`,
    2355: `1398`,
    2356: `1398`,
    2357: `1399`,
    2358: `1400`,
    2359: `1400`,
    236: `49`,
    2360: `1400`,
    2361: `1401`,
    2362: `1402`,
    2363: `1402`,
    2364: `1403`,
    2365: `1404`,
    2366: `1404`,
    2367: `1405`,
    2368: `1406`,
    2369: `1406`,
    237: `50`,
    2370: `1407`,
    2371: `1408`,
    2372: `1408`,
    2373: `1409`,
    2374: `1410`,
    2375: `1410`,
    2376: `1411`,
    2377: `1412`,
    2378: `1412`,
    2379: `1413`,
    238: `51`,
    2380: `1414`,
    2381: `1414`,
    2382: `1415`,
    2383: `1416`,
    2384: `1416`,
    2385: `1417`,
    2386: `1418`,
    2387: `1418`,
    2388: `1419`,
    2389: `1420`,
    239: `53`,
    2390: `1420`,
    2391: `1421`,
    2392: `1422`,
    2393: `1422`,
    2394: `1423`,
    2395: `1424`,
    2396: `1424`,
    2397: `1424`,
    2398: `1425`,
    2399: `1425`,
    24: `2`,
    240: `54`,
    2400: `1426`,
    2401: `1427`,
    2402: `1427`,
    2403: `1427`,
    2404: `1428`,
    2405: `1428`,
    2406: `1429`,
    2407: `1430`,
    2408: `1430`,
    2409: `1430`,
    241: `57`,
    2410: `1431`,
    2411: `1432`,
    2412: `1432`,
    2413: `1433`,
    2414: `1434`,
    2415: `1434`,
    2416: `1434`,
    2417: `1435`,
    2418: `1435`,
    2419: `1436`,
    242: `57`,
    2420: `1437`,
    2421: `1437`,
    2422: `1437`,
    2423: `1438`,
    2424: `1439`,
    2425: `1439`,
    2426: `1440`,
    2427: `1441`,
    2428: `1441`,
    2429: `1441`,
    243: `58`,
    2430: `1442`,
    2431: `1442`,
    2432: `1443`,
    2433: `1444`,
    2434: `1444`,
    2435: `1444`,
    2436: `1445`,
    2437: `1446`,
    2438: `1446`,
    2439: `1447`,
    244: `59`,
    2440: `1448`,
    2441: `1448`,
    2442: `1448`,
    2443: `1449`,
    2444: `1450`,
    2445: `1451`,
    2446: `1452`,
    2447: `1452`,
    2448: `1453`,
    2449: `1454`,
    245: `60`,
    2450: `1454`,
    2451: `1454`,
    2452: `1455`,
    2453: `1456`,
    2454: `1456`,
    2455: `1457`,
    2456: `1458`,
    2457: `1458`,
    2458: `1458`,
    2459: `1459`,
    246: `63`,
    2460: `1460`,
    2461: `1460`,
    2462: `1461`,
    2463: `1462`,
    2464: `1462`,
    2465: `1462`,
    2466: `1463`,
    2467: `1463`,
    2468: `1464`,
    2469: `1465`,
    247: `63`,
    2470: `1465`,
    2471: `1466`,
    2472: `1466`,
    2473: `1466`,
    2474: `1467`,
    2475: `1468`,
    2476: `1468`,
    2477: `1469`,
    2478: `1471`,
    2479: `1472`,
    248: `63`,
    2480: `1472`,
    2481: `1472`,
    2482: `1474`,
    2483: `1475`,
    2484: `1475`,
    2485: `1476`,
    2486: `1478`,
    2487: `1479`,
    2488: `1480`,
    2489: `1481`,
    249: `64`,
    2490: `1482`,
    2491: `1482`,
    2492: `1483`,
    2493: `1484`,
    2494: `1485`,
    2495: `1486`,
    2496: `1488`,
    2497: `1488`,
    2498: `1489`,
    2499: `1490`,
    25: `2`,
    250: `64`,
    2500: `1490`,
    2501: `1491`,
    2502: `1493`,
    2503: `1494`,
    2504: `1494`,
    2505: `1494`,
    2506: `1497`,
    2507: `1497`,
    2508: `1498`,
    2509: `1498`,
    251: `65`,
    2510: `1499`,
    2511: `1500`,
    2512: `1501`,
    2513: `1502`,
    2514: `1502`,
    2515: `1503`,
    2516: `1504`,
    2517: `1504`,
    2518: `1505`,
    2519: `1505`,
    252: `66`,
    2520: `1506`,
    2521: `1506`,
    2522: `1507`,
    2523: `1508`,
    2524: `1509`,
    2525: `1509`,
    2526: `1510`,
    2527: `1511`,
    2528: `1512`,
    2529: `1513`,
    253: `66`,
    2530: `1513`,
    2531: `1514`,
    2532: `1514`,
    2533: `1515`,
    2534: `1516`,
    2535: `1517`,
    2536: `1517`,
    2537: `1518`,
    2538: `1519`,
    2539: `1520`,
    254: `67`,
    2540: `1523`,
    2541: `1523`,
    2542: `1524`,
    2543: `1524`,
    2544: `1525`,
    2545: `1526`,
    2546: `1527`,
    2547: `1528`,
    2548: `1528`,
    2549: `1529`,
    255: `67`,
    2550: `1530`,
    2551: `1530`,
    2552: `1531`,
    2553: `1531`,
    2554: `1532`,
    2555: `1532`,
    2556: `1533`,
    2557: `1534`,
    2558: `1535`,
    2559: `1535`,
    256: `67`,
    2560: `1536`,
    2561: `1537`,
    2562: `1538`,
    2563: `1539`,
    2564: `1539`,
    2565: `1540`,
    2566: `1541`,
    2567: `1542`,
    2568: `1544`,
    2569: `1544`,
    257: `70`,
    2570: `1545`,
    2571: `1545`,
    2572: `1546`,
    2573: `1547`,
    2574: `1548`,
    2575: `1548`,
    2576: `1548`,
    2577: `1549`,
    2578: `1549`,
    2579: `1549`,
    258: `70`,
    2580: `1551`,
    2581: `1552`,
    2582: `1552`,
    2583: `1553`,
    259: `71`,
    26: `2`,
    260: `72`,
    261: `73`,
    262: `76`,
    263: `76`,
    264: `76`,
    265: `77`,
    266: `77`,
    267: `78`,
    268: `79`,
    269: `79`,
    27: `2`,
    270: `80`,
    271: `80`,
    272: `80`,
    273: `83`,
    274: `83`,
    275: `84`,
    276: `85`,
    277: `86`,
    278: `89`,
    279: `89`,
    28: `2`,
    280: `89`,
    281: `90`,
    282: `90`,
    283: `91`,
    284: `92`,
    285: `92`,
    286: `93`,
    287: `93`,
    288: `93`,
    289: `96`,
    29: `2`,
    290: `96`,
    291: `97`,
    292: `98`,
    293: `99`,
    294: `102`,
    295: `102`,
    296: `102`,
    297: `103`,
    298: `103`,
    299: `104`,
    3: `2`,
    30: `4`,
    300: `105`,
    301: `105`,
    302: `105`,
    303: `106`,
    304: `106`,
    305: `107`,
    306: `107`,
    307: `107`,
    308: `109`,
    309: `109`,
    31: `4`,
    310: `109`,
    311: `110`,
    312: `110`,
    313: `112`,
    314: `113`,
    315: `116`,
    316: `116`,
    317: `116`,
    318: `118`,
    319: `118`,
    32: `5`,
    320: `118`,
    321: `119`,
    322: `119`,
    323: `121`,
    324: `121`,
    325: `122`,
    326: `123`,
    327: `124`,
    328: `127`,
    329: `127`,
    33: `5`,
    330: `127`,
    331: `129`,
    332: `130`,
    333: `131`,
    334: `132`,
    335: `132`,
    336: `133`,
    337: `135`,
    338: `136`,
    339: `137`,
    34: `5`,
    340: `138`,
    341: `138`,
    342: `138`,
    343: `139`,
    344: `139`,
    345: `140`,
    346: `141`,
    347: `142`,
    348: `143`,
    349: `144`,
    35: `6`,
    350: `145`,
    351: `146`,
    352: `147`,
    353: `147`,
    354: `147`,
    355: `148`,
    356: `148`,
    357: `149`,
    358: `149`,
    359: `149`,
    36: `7`,
    360: `152`,
    361: `152`,
    362: `153`,
    363: `154`,
    364: `155`,
    365: `158`,
    366: `158`,
    367: `158`,
    368: `159`,
    369: `159`,
    37: `8`,
    370: `160`,
    371: `161`,
    372: `161`,
    373: `162`,
    374: `163`,
    375: `164`,
    376: `164`,
    377: `165`,
    378: `166`,
    379: `167`,
    38: `9`,
    380: `167`,
    381: `168`,
    382: `169`,
    383: `169`,
    384: `170`,
    385: `171`,
    386: `172`,
    387: `172`,
    388: `173`,
    389: `174`,
    39: `10`,
    390: `174`,
    391: `174`,
    392: `175`,
    393: `176`,
    394: `176`,
    395: `177`,
    396: `178`,
    397: `179`,
    398: `179`,
    399: `180`,
    4: `2`,
    40: `11`,
    400: `180`,
    401: `180`,
    402: `183`,
    403: `183`,
    404: `184`,
    405: `185`,
    406: `186`,
    407: `189`,
    408: `189`,
    409: `189`,
    41: `11`,
    410: `190`,
    411: `190`,
    412: `191`,
    413: `196`,
    414: `196`,
    415: `197`,
    416: `198`,
    417: `198`,
    418: `199`,
    419: `199`,
    42: `12`,
    420: `199`,
    421: `202`,
    422: `202`,
    423: `203`,
    424: `204`,
    425: `205`,
    426: `208`,
    427: `208`,
    428: `208`,
    429: `209`,
    43: `13`,
    430: `209`,
    431: `210`,
    432: `210`,
    433: `210`,
    434: `211`,
    435: `211`,
    436: `212`,
    437: `212`,
    438: `212`,
    439: `215`,
    44: `14`,
    440: `215`,
    441: `216`,
    442: `217`,
    443: `218`,
    444: `221`,
    445: `221`,
    446: `221`,
    447: `222`,
    448: `222`,
    449: `223`,
    45: `14`,
    450: `224`,
    451: `224`,
    452: `225`,
    453: `225`,
    454: `225`,
    455: `228`,
    456: `228`,
    457: `229`,
    458: `230`,
    459: `231`,
    46: `15`,
    460: `234`,
    461: `234`,
    462: `234`,
    463: `235`,
    464: `235`,
    465: `236`,
    466: `236`,
    467: `236`,
    468: `237`,
    469: `237`,
    47: `16`,
    470: `238`,
    471: `238`,
    472: `238`,
    473: `241`,
    474: `241`,
    475: `242`,
    476: `243`,
    477: `244`,
    478: `247`,
    479: `247`,
    48: `17`,
    480: `247`,
    481: `248`,
    482: `248`,
    483: `249`,
    484: `249`,
    485: `249`,
    486: `250`,
    487: `250`,
    488: `251`,
    489: `251`,
    49: `18`,
    490: `251`,
    491: `253`,
    492: `253`,
    493: `253`,
    494: `254`,
    495: `255`,
    496: `255`,
    497: `257`,
    498: `258`,
    499: `259`,
    5: `2`,
    50: `19`,
    500: `260`,
    501: `260`,
    502: `261`,
    503: `262`,
    504: `263`,
    505: `263`,
    506: `264`,
    507: `265`,
    508: `266`,
    509: `267`,
    51: `20`,
    510: `267`,
    511: `269`,
    512: `270`,
    513: `270`,
    514: `271`,
    515: `272`,
    516: `273`,
    517: `273`,
    518: `273`,
    519: `274`,
    52: `21`,
    520: `274`,
    521: `275`,
    522: `276`,
    523: `277`,
    524: `277`,
    525: `278`,
    526: `278`,
    527: `279`,
    528: `279`,
    529: `279`,
    53: `22`,
    530: `280`,
    531: `280`,
    532: `281`,
    533: `281`,
    534: `281`,
    535: `281`,
    536: `281`,
    537: `281`,
    538: `282`,
    539: `282`,
    54: `24`,
    540: `283`,
    541: `284`,
    542: `285`,
    543: `285`,
    544: `286`,
    545: `287`,
    546: `289`,
    547: `289`,
    548: `290`,
    549: `290`,
    55: `24`,
    550: `290`,
    551: `291`,
    552: `291`,
    553: `292`,
    554: `293`,
    555: `294`,
    556: `294`,
    557: `294`,
    558: `294`,
    559: `294`,
    56: `24`,
    560: `294`,
    561: `294`,
    562: `294`,
    563: `294`,
    564: `294`,
    565: `294`,
    566: `294`,
    567: `295`,
    568: `295`,
    569: `295`,
    57: `24`,
    570: `298`,
    571: `298`,
    572: `298`,
    573: `298`,
    574: `298`,
    575: `298`,
    576: `298`,
    577: `298`,
    578: `298`,
    579: `298`,
    58: `24`,
    580: `298`,
    581: `298`,
    582: `298`,
    583: `298`,
    584: `298`,
    585: `298`,
    586: `298`,
    587: `298`,
    588: `298`,
    589: `298`,
    59: `24`,
    590: `298`,
    591: `298`,
    592: `298`,
    593: `298`,
    594: `298`,
    595: `298`,
    596: `298`,
    597: `298`,
    598: `298`,
    599: `298`,
    6: `2`,
    60: `24`,
    600: `298`,
    601: `298`,
    602: `298`,
    603: `298`,
    604: `298`,
    605: `298`,
    606: `298`,
    607: `298`,
    608: `298`,
    609: `298`,
    61: `24`,
    610: `298`,
    611: `298`,
    612: `298`,
    613: `299`,
    614: `299`,
    615: `300`,
    616: `300`,
    617: `300`,
    618: `303`,
    619: `303`,
    62: `24`,
    620: `303`,
    621: `303`,
    622: `303`,
    623: `303`,
    624: `303`,
    625: `303`,
    626: `303`,
    627: `303`,
    628: `303`,
    629: `303`,
    63: `24`,
    630: `303`,
    631: `303`,
    632: `303`,
    633: `303`,
    634: `303`,
    635: `303`,
    636: `303`,
    637: `303`,
    638: `303`,
    639: `303`,
    64: `24`,
    640: `303`,
    641: `303`,
    642: `303`,
    643: `303`,
    644: `303`,
    645: `303`,
    646: `303`,
    647: `303`,
    648: `303`,
    649: `303`,
    65: `24`,
    650: `303`,
    651: `303`,
    652: `303`,
    653: `303`,
    654: `303`,
    655: `303`,
    656: `303`,
    657: `303`,
    658: `303`,
    659: `303`,
    66: `24`,
    660: `303`,
    661: `304`,
    662: `304`,
    663: `305`,
    664: `305`,
    665: `305`,
    666: `307`,
    667: `307`,
    668: `307`,
    669: `308`,
    67: `24`,
    670: `308`,
    671: `310`,
    672: `311`,
    673: `312`,
    674: `312`,
    675: `312`,
    676: `313`,
    677: `313`,
    678: `314`,
    679: `315`,
    68: `24`,
    680: `316`,
    681: `316`,
    682: `317`,
    683: `317`,
    684: `317`,
    685: `320`,
    686: `320`,
    687: `320`,
    688: `320`,
    689: `320`,
    69: `24`,
    690: `320`,
    691: `320`,
    692: `320`,
    693: `320`,
    694: `320`,
    695: `320`,
    696: `320`,
    697: `320`,
    698: `320`,
    699: `320`,
    7: `2`,
    70: `24`,
    700: `320`,
    701: `320`,
    702: `320`,
    703: `320`,
    704: `320`,
    705: `320`,
    706: `320`,
    707: `320`,
    708: `320`,
    709: `320`,
    71: `24`,
    710: `320`,
    711: `320`,
    712: `320`,
    713: `320`,
    714: `320`,
    715: `320`,
    716: `320`,
    717: `320`,
    718: `320`,
    719: `320`,
    72: `24`,
    720: `320`,
    721: `320`,
    722: `320`,
    723: `320`,
    724: `320`,
    725: `320`,
    726: `320`,
    727: `320`,
    728: `321`,
    729: `321`,
    73: `24`,
    730: `322`,
    731: `322`,
    732: `322`,
    733: `324`,
    734: `324`,
    735: `325`,
    736: `326`,
    737: `327`,
    738: `327`,
    739: `328`,
    74: `24`,
    740: `328`,
    741: `329`,
    742: `329`,
    743: `330`,
    744: `331`,
    745: `339`,
    746: `339`,
    747: `340`,
    748: `341`,
    749: `342`,
    75: `24`,
    750: `350`,
    751: `350`,
    752: `351`,
    753: `351`,
    754: `352`,
    755: `353`,
    756: `354`,
    757: `354`,
    758: `355`,
    759: `355`,
    76: `24`,
    760: `356`,
    761: `356`,
    762: `356`,
    763: `359`,
    764: `359`,
    765: `360`,
    766: `360`,
    767: `361`,
    768: `362`,
    769: `363`,
    77: `24`,
    770: `363`,
    771: `364`,
    772: `364`,
    773: `364`,
    774: `364`,
    775: `364`,
    776: `364`,
    777: `365`,
    778: `365`,
    779: `366`,
    78: `24`,
    780: `367`,
    781: `369`,
    782: `370`,
    783: `370`,
    784: `371`,
    785: `371`,
    786: `371`,
    787: `371`,
    788: `371`,
    789: `371`,
    79: `24`,
    790: `371`,
    791: `371`,
    792: `371`,
    793: `371`,
    794: `372`,
    795: `372`,
    796: `373`,
    797: `374`,
    798: `374`,
    799: `374`,
    8: `2`,
    80: `24`,
    800: `375`,
    801: `376`,
    802: `377`,
    803: `377`,
    804: `378`,
    805: `379`,
    806: `379`,
    807: `379`,
    808: `380`,
    809: `380`,
    81: `24`,
    810: `381`,
    811: `381`,
    812: `382`,
    813: `382`,
    814: `382`,
    815: `383`,
    816: `383`,
    817: `384`,
    818: `384`,
    819: `385`,
    82: `24`,
    820: `386`,
    821: `387`,
    822: `388`,
    823: `388`,
    824: `389`,
    825: `389`,
    826: `390`,
    827: `391`,
    828: `392`,
    829: `393`,
    83: `24`,
    830: `394`,
    831: `395`,
    832: `395`,
    833: `396`,
    834: `396`,
    835: `396`,
    836: `397`,
    837: `398`,
    838: `398`,
    839: `399`,
    84: `24`,
    840: `399`,
    841: `400`,
    842: `401`,
    843: `401`,
    844: `402`,
    845: `403`,
    846: `404`,
    847: `405`,
    848: `405`,
    849: `406`,
    85: `24`,
    850: `406`,
    851: `406`,
    852: `407`,
    853: `408`,
    854: `408`,
    855: `409`,
    856: `409`,
    857: `409`,
    858: `410`,
    859: `411`,
    86: `24`,
    860: `411`,
    861: `412`,
    862: `413`,
    863: `414`,
    864: `414`,
    865: `415`,
    866: `415`,
    867: `415`,
    868: `416`,
    869: `417`,
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
    879: `422`,
    88: `24`,
    880: `422`,
    881: `423`,
    882: `424`,
    883: `425`,
    884: `425`,
    885: `426`,
    886: `426`,
    887: `427`,
    888: `427`,
    889: `428`,
    89: `24`,
    890: `428`,
    891: `429`,
    892: `429`,
    893: `430`,
    894: `430`,
    895: `432`,
    896: `432`,
    897: `433`,
    898: `433`,
    899: `433`,
    9: `2`,
    90: `24`,
    900: `434`,
    901: `435`,
    902: `435`,
    903: `436`,
    904: `436`,
    905: `436`,
    906: `437`,
    907: `438`,
    908: `439`,
    909: `440`,
    91: `24`,
    910: `440`,
    911: `440`,
    912: `441`,
    913: `441`,
    914: `442`,
    915: `442`,
    916: `443`,
    917: `444`,
    918: `444`,
    919: `445`,
    92: `24`,
    920: `445`,
    921: `446`,
    922: `447`,
    923: `448`,
    924: `448`,
    925: `449`,
    926: `449`,
    927: `450`,
    928: `450`,
    929: `451`,
    93: `24`,
    930: `452`,
    931: `452`,
    932: `453`,
    933: `453`,
    934: `454`,
    935: `454`,
    936: `454`,
    937: `455`,
    938: `456`,
    939: `456`,
    94: `24`,
    940: `457`,
    941: `458`,
    942: `459`,
    943: `459`,
    944: `461`,
    945: `461`,
    946: `462`,
    947: `462`,
    948: `463`,
    949: `464`,
    95: `24`,
    950: `465`,
    951: `465`,
    952: `466`,
    953: `467`,
    954: `467`,
    955: `467`,
    956: `468`,
    957: `469`,
    958: `469`,
    959: `470`,
    96: `24`,
    960: `471`,
    961: `472`,
    962: `472`,
    963: `473`,
    964: `474`,
    965: `475`,
    966: `475`,
    967: `476`,
    968: `477`,
    969: `478`,
    97: `24`,
    970: `478`,
    971: `479`,
    972: `480`,
    973: `481`,
    974: `481`,
    975: `482`,
    976: `483`,
    977: `484`,
    978: `484`,
    979: `485`,
    98: `24`,
    980: `486`,
    981: `486`,
    982: `487`,
    983: `488`,
    984: `488`,
    985: `489`,
    986: `490`,
    987: `491`,
    988: `491`,
    989: `492`,
    99: `24`,
    990: `493`,
    991: `493`,
    992: `494`,
    993: `495`,
    994: `496`,
    995: `496`,
    996: `497`,
    997: `498`,
    998: `498`,
    999: `499`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 321,
  unsupported: [],
  version: 13,
  warnings: [`API User_claim may use up to 5 accounts, but the limit is 4. API User_claim starts at /app/raffle_token_v3.rsh:124:37:application.`, `API User_claim may use up to 9 transaction references, but the limit is 8. API User_claim starts at /app/raffle_token_v3.rsh:124:37:application.`, `API User_determinWinnerAfterDeadline may use up to 5 accounts, but the limit is 4. API User_determinWinnerAfterDeadline starts at /app/raffle_token_v3.rsh:124:37:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/raffle_token_v3.rsh:124:37:dot.`, `Step 3 may use up to 9 transaction references, but the limit is 8. Step 3 starts at /app/raffle_token_v3.rsh:124:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"address payable","name":"elem7","type":"address"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"address payable","name":"elem9","type":"address"},{"internalType":"address payable","name":"elem10","type":"address"}],"internalType":"struct T12","name":"v7171","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"address payable","name":"elem7","type":"address"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"address payable","name":"elem9","type":"address"},{"internalType":"address payable","name":"elem10","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_273","type":"tuple"},{"internalType":"bool","name":"_User_claim0_273","type":"bool"},{"internalType":"bool","name":"_User_delete0_273","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_273","type":"tuple"},{"internalType":"bool","name":"_User_optin0_273","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3951","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4333","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4677","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5045","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5383","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_adminClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7128","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7132","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"address payable","name":"_asset","type":"address"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_randomNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_userClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v7150","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7164","type":"address"}],"name":"User_determinWinnerAfterDeadline","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v7174","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_273","type":"tuple"},{"internalType":"bool","name":"_User_claim0_273","type":"bool"},{"internalType":"bool","name":"_User_delete0_273","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_273","type":"tuple"},{"internalType":"bool","name":"_User_optin0_273","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v7177","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200441e388190036080601f8201601f19168101906001600160401b03821190821017620007745761016092829160405260803912620008ec5760405161016081016001600160401b03811182821017620007745760405260805181526200006860a06200090d565b602082015260c0518015158103620008ec57604082015260e05160608201526101005160808201526101205160a08201526101405160c0820152620000af6101606200090d565b60e082015261018051610100820152620000cb6101a06200090d565b610120820152620000de6101c06200090d565b610140820152436003556040516001600160401b03610260820190811190821117620007745761026081016040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526040518060e081011060018060401b0360e08301111762000774576000918160e061024093016040528381528360208201528360408201528360608201528360808201528360a08201528360c082015261010082015282610120820152826101408201528261016082015282610180820152620001bd62000922565b6101a0820152826101c0820152826101e08201528261020082015282610220820152015260405190620001f082620008f1565b620001fa62000922565b82526200020662000943565b60208301526200021562000943565b604083015260ff60045416620008d3577f78b8f98fda035a64f290cdd5b0eb27d27879acfe0fef3a07a67da819974f024f6101806040513381528351602082015260018060a01b03602085015116604082015260408401511515606082015260608401516080820152608084015160a082015260a084015160c082015260c084015160e082015260018060a01b0360e08501511661010082015261010084015161012082015260018060a01b036101208501511661014082015260018060a01b0361014085015116610160820152a180518015908115620008c6575b5015620008ad5760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200034183620008f1565b60008352602083015260408201526200035962000943565b9160005b60028110620008735750508152604083015260e081015160208201516001600160a01b039081169116036200086b5760005b15620008525760001960a082015110156200083957600160a0820151106200082057346200080757604051916001600160401b0361018084019081119084111762000774576040916101808401835260008452600060208501526000838501526000606085015260006080850152600060a0850152600060c0850152600060e08501526000610100850152600061012085015260006101408501526200043462000943565b61016085015233845260018060a01b03602082015116602085015282810151151583850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260018060a01b0360e08201511660e085015261010081015161010085015260018060a01b036101208201511661012085015261014060018060a01b03910151166101408401520151602081015160406020820151910151151560405191620004e983620008f1565b60008352602083015260408201526200050162000943565b9160005b60028110620007b757505060208201526101608201526001600055436001556101606040519160018060a01b03815116602084015260018060a01b03602082015116604084015260408101511515606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260018060a01b0360e08201511661010084015261010081015161012084015260018060a01b036101208201511661014084015260018060a01b036101408201511682840152015161018082016000905b600282106200078a5761022084528361024081016001600160401b03811182821017620007745760405280516001600160401b0381116200077457600254600181811c9116801562000769575b60208210146200075357601f8111620006e9575b50602091601f82116001146200067f5791819260009262000673575b50508160011b916000199060031b1c1916176002555b604051613a6b9081620009b38239f35b0151905082806200064d565b601f19821692600260005260206000209160005b858110620006d057508360019510620006b6575b505050811b0160025562000663565b015160001960f88460031b161c19169055828080620006a7565b9192602060018192868501518155019401920162000693565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000748575b601f0160051c01905b8181106200073b575062000631565b600081556001016200072c565b909150819062000723565b634e487b7160e01b600052602260045260246000fd5b90607f16906200061d565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620005d0565b620007c381836200098a565b51620007d082866200098a565b52620007dd81856200098a565b506000198114620007f15760010162000505565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60016200038f565b6200087f81836200098a565b516200088c82866200098a565b526200089981856200098a565b506000198114620007f1576001016200035d565b60405163100960cb60e01b815260166004820152602490fd5b90506001541438620002f1565b60405163100960cb60e01b815260156004820152602490fd5b600080fd5b606081019081106001600160401b038211176200077457604052565b51906001600160a01b0382168203620008ec57565b604051906200093182620008f1565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620007745781528260005b8281106200097257505050565b6020906200097f62000922565b818401520162000965565b9060028110156200099c5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e685146101f857806308e8b3fb146101ef5780631e93b0f1146101e6578063213b7923146101dd57806336e56ea5146101d457806347dc4e6c146101cb578063573b8510146101c25780635cd91bc2146101b95780635fde30d8146101b05780636a672754146101a75780636cf1d8021461019e57806373c86a71146101955780637888d2df1461018c5780637a2b54dc14610183578063832307571461017a578063883513de146101715780638ddecb6d146101685780639686b6e91461015f578063a579242414610156578063ab53f2c61461014d578063c4807dc714610144578063d184691f1461013b578063eaa4fd51146101325763fa726c840361000e5761012d610ee8565b61000e565b5061012d610e3f565b5061012d610def565b5061012d610d77565b5061012d610d02565b5061012d610c6b565b5061012d610c2b565b5061012d610bb8565b5061012d610b2b565b5061012d610b0c565b5061012d610acc565b5061012d610a42565b5061012d6109d3565b5061012d610970565b5061012d6108f7565b5061012d6107c0565b5061012d61073a565b5061012d610479565b5061012d61041e565b5061012d6103c4565b5061012d61035a565b5061012d61031e565b5061012d61026a565b5034610265576000366003190112610265576102126112b3565b60046000540361024c57606060209161014061023d61022f611062565b8580825183010191016114c7565b01519182910152604051908152f35b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b5060e03660031901126102655761027f6112b3565b6040519061028c82610fab565b600435825260c036602319011261026557604051916102aa83610fd3565b6024359260058410156102655761030e9381526102c6366138ce565b60208201526064356102d781611352565b60408201526102e46139fb565b60608201526102f236613a15565b60808201526102ff613a08565b60a08201526020820152611e8d565b60405160008152602090f35b0390f35b5034610265576000366003190112610265576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361026557565b503461026557602036600319011261026557610377600435610349565b61037f6112b3565b5060405163100960cb60e01b8152600c6004820152602490fd5b50634e487b7160e01b600052602160045260246000fd5b600211156103ba57565b6103c2610399565b565b50346102655760203660031901126102655760606103f56004356103e781610349565b6103ef6111b8565b506111d7565b60408051918051610405816103b0565b8352602081015115156020840152015115156040820152f35b5060003660031901126102655760206101e06104386112b3565b61046d81610444611bab565b85810190600182515251151560408251015261045e611bab565b90600082525186820152611e8d565b01511515604051908152f35b506020806003193601126102655761048f6112b3565b5061072461049c366138ee565b916104a561390e565b6000906104b560018354146115fc565b6104ce6104c0611062565b84808251830101910161393d565b916104ea6104e56104e160045460ff1690565b1590565b61161c565b60408051338152875160208201529096610534917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908990a151801590811561072e575b5061163c565b8360c08401936105468551341461165c565b6106fa610160936106f38584015185810151906105978d83519261059261010095868b019586510193808d83015192015115159161058261110b565b9586528d86015284019015159052565b6130f2565b89528c60e08701946105bd6105b86105af885161033d565b855190336130af565b61167c565b6105d93360018060a01b036105d28b5161033d565b161461169c565b80898c019281845152818b85510152808d019a828c51528d515151908c5101528a5101528060608a51015260808951015261061860a089510160019052565b600560c08951015261062b8a5160200190565b515160e08951015251828851015261066d610644611ddd565b9b6106598d6106538a5161033d565b90611b13565b6106658189015161033d565b908d01611b13565b6106858d61067d81890151151590565b1515908d0152565b6106bb6106b260608801958d606088519101528d6080808b01519101528d60a0808b01519101525161033d565b60c08d01611b13565b5160e08b01526106dc610120916106d48388015161033d565b908c01611b13565b6106eb6101408096015161033d565b908a01611b13565b5142612e4d565b90860152519084015243610180840152426101a0840152516101c0830152516101e082015261364e565b5160008152602090f35b9050600154143861052e565b5034610265576000366003190112610265576107546112b3565b60046000540361079a5760a061031a916101e0610781610772611062565b602080825183010191016114c7565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b6001600160a01b03169052565b5034610265576000366003190112610265576107da61125d565b5061031a6107e66112b3565b6107ee611af9565b906107fd6004600054146116bc565b610808610772611062565b9160e083015181515261082b610821602085015161033d565b6020835101611b13565b60a083015160408251015261089361088960c06101009561085b6108518883015161033d565b6060875101611b13565b60608101516080865101526108826108766040830151151590565b60a08751019015159052565b015161033d565b60c0835101611b13565b5191829101526040519182918291909160c060e0820193805183528160018060a01b0391826020820151166020860152604081015160408601528260608201511660608601526080810151608086015260a0810151151560a0860152015116910152565b5034610265576000366003190112610265576109116112b3565b60046000540361095757602061031a9161016061093d61092f611062565b8480825183010191016114c7565b015151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b5060203660031901126102655760206101c061098a6112b3565b61046d8160405161099a81610fab565b6040516109a681610fee565b600081528152858101906109b8611b35565b8252600435815152600082515251868251015261045e611bab565b5034610265576000366003190112610265576109ed6112b3565b600460005403610a295761018061031a916060610160610a0e610772611062565b01510151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260136004820152602490fd5b503461026557600036600319011261026557610a5c6112b3565b600460005403610ab35761016061031a91610a75611062565b60c0610a9160018060a01b0392602080825183010191016114c7565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b815260126004820152602490fd5b506000366003190112610265576020610240610ae66112b3565b61046d81610af2611bab565b85810190600482515251151560a08251015261045e611bab565b5034610265576000366003190112610265576020600154604051908152f35b503461026557600036600319011261026557610b456112b3565b600460005403610b6257604060209161026061023d61022f611062565b60405163100960cb60e01b815260086004820152602490fd5b6040908051610b89816103b0565b83526020818101511515908401528101516001600160a01b0316910152565b6060810192916103c29190610b7b565b503461026557600036600319011261026557610bd26111b8565b50610bdb6112b3565b600460005403610c12576101a061031a91610100610160610bfd610772611062565b01510151918291015260405191829182610ba8565b60405163100960cb60e01b815260146004820152602490fd5b506000366003190112610265576020610200610c456112b3565b61046d81610c51611bab565b85810190600282515251151560608251015261045e611bab565b503461026557602036600319011261026557600435610c8981610349565b610c916112b3565b90600460005403610ce95761031a916001610cc060e093610cb3610772611062565b50828060a01b03166111d7565b51610cca816103b0565b610cd3816103b0565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600d6004820152602490fd5b503461026557600080600319360112610d74578054610d1f611062565b906040519283918252602090604082840152835191826040850152815b838110610d5d57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610d3c565b80fd5b503461026557600036600319011261026557610d916112b3565b600460005403610dd65761012061031a916080610daf610772611062565b610dbf6101e082015115156116dc565b015191018190526040519081529081906020820190565b60405163100960cb60e01b8152600f6004820152602490fd5b503461026557600036600319011261026557610e096112b3565b600460005403610e2657608060209161018061023d61022f611062565b60405163100960cb60e01b8152600a6004820152602490fd5b5060203660031901126102655761031a610ed6610220600435610e6181610349565b610ecf610e6c6112b3565b8092604051610e7a81610fab565b604051610e8681610fee565b6000815281526020810191610e99611b35565b835281516001600160a01b03909116905281516003905251815160800152610ebf611bab565b9060008252516020820152611e8d565b0151151590565b60405191829182901515815260200190565b503461026557600036600319011261026557610f026112b3565b600460005403610f41576101406020916080610160610f30610f22611062565b8680825183010191016114c7565b015101519182910152604051908152f35b60405163100960cb60e01b815260116004820152602490fd5b90600182811c92168015610f8a575b6020831014610f7457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f69565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610fc657604052565b610fce610f94565b604052565b60c081019081106001600160401b03821117610fc657604052565b602081019081106001600160401b03821117610fc657604052565b606081019081106001600160401b03821117610fc657604052565b60a081019081106001600160401b03821117610fc657604052565b601f909101601f19168101906001600160401b03821190821017610fc657604052565b604051906000826002549161107683610f5a565b8083526001938085169081156110ea575060011461109c575b506103c29250038361103f565b60026000908152600080516020613a3f83398151915294602093509091905b8183106110d25750506103c293508201013861108f565b855488840185015294850194879450918301916110bb565b90506103c294506020925060ff191682840152151560051b8201013861108f565b604051906103c282611009565b6040519061026082016001600160401b03811183821017610fc657604052565b6040519061012082016001600160401b03811183821017610fc657604052565b6040519061028082016001600160401b03811183821017610fc657604052565b6040519061020082016001600160401b03811183821017610fc657604052565b6040519061018082016001600160401b03811183821017610fc657604052565b604051906111c582611009565b60006040838281528260208201520152565b906111e06111b8565b9160018060a01b03166000908082526005602052600160ff604084205416611207816103b0565b03611252576040929350815260056020522060ff6040519161122883611009565b54818116611235816103b0565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b6040519060e082016001600160401b038111838210176112a6575b6040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b6112ae610f94565b611278565b6112bb611118565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401526112f361125d565b6101008401528061012084015280610140840152806101608401528061018084015261131d6111b8565b6101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b51906103c282610349565b8015150361026557565b51906103c282611352565b91908260609103126102655760405161137f81611009565b809280516002811015610265576040918291845260208101516113a181611352565b60208501520151916113b283610349565b0152565b919091610160818403126102655761143a6113cf611138565b936113d98361135c565b855260208301516020860152604083015160408601526113fb6060840161135c565b60608601526080830151608086015261141660a0840161135c565b60a086015260c083015160c086015260e083015160e0860152610100809301611367565b90830152565b91908260609103126102655760405161145881611009565b604080829480518452602081015160208501520151916113b283611352565b81601f82011215610265576040519161148f83610fab565b829060c083019281841161026557915b8383106114ad575050505090565b60206060916114bc8486611440565b81520192019161149f565b6104a08183031261026557610480906115eb6114e1611158565b936114eb83611347565b85526114f960208401611347565b602086015261150a6040840161135c565b6040860152606083015160608601526080830151608086015260a083015160a086015261153960c08401611347565b60c086015260e083015160e0860152610100611556818501611347565b90860152610120611568818501611347565b908601526101408084015190860152610160611586828286016113b6565b908601526102c08301516101808601526115a4816102e08501611477565b6101a08601526103a08301516101c08601526115c36103c0840161135c565b6101e08601526103e08301516102008601526104008301516102208601526104208301611440565b610240840152015161026082015290565b1561160357565b60405163100960cb60e01b8152601b6004820152602490fd5b1561162357565b60405163100960cb60e01b8152601c6004820152602490fd5b1561164357565b60405163100960cb60e01b8152601d6004820152602490fd5b1561166357565b60405163100960cb60e01b8152601e6004820152602490fd5b1561168357565b60405163100960cb60e01b8152601f6004820152602490fd5b156116a357565b60405163100960cb60e01b815260206004820152602490fd5b156116c357565b60405163100960cb60e01b8152600e6004820152602490fd5b156116e357565b60405163100960cb60e01b815260106004820152602490fd5b1561170357565b60405163100960cb60e01b815260216004820152602490fd5b1561172357565b60405163100960cb60e01b815260226004820152602490fd5b1561174357565b60405163100960cb60e01b815260236004820152602490fd5b1561176357565b60405163100960cb60e01b8152603e6004820152602490fd5b1561178357565b60405163100960cb60e01b8152603f6004820152602490fd5b156117a357565b602460405163100960cb60e01b815260406004820152fd5b156117c257565b60405163100960cb60e01b815260376004820152602490fd5b156117e257565b60405163100960cb60e01b815260386004820152602490fd5b1561180257565b60405163100960cb60e01b815260396004820152602490fd5b1561182257565b60405163100960cb60e01b8152603a6004820152602490fd5b1561184257565b60405163100960cb60e01b8152603b6004820152602490fd5b1561186257565b60405163100960cb60e01b8152603c6004820152602490fd5b1561188257565b60405163100960cb60e01b8152603d6004820152602490fd5b156118a257565b60405163100960cb60e01b815260316004820152602490fd5b156118c257565b60405163100960cb60e01b815260326004820152602490fd5b156118e257565b60405163100960cb60e01b815260336004820152602490fd5b1561190257565b60405163100960cb60e01b815260346004820152602490fd5b1561192257565b60405163100960cb60e01b815260356004820152602490fd5b1561194257565b60405163100960cb60e01b815260366004820152602490fd5b1561196257565b60405163100960cb60e01b815260296004820152602490fd5b1561198257565b60405163100960cb60e01b8152602a6004820152602490fd5b156119a257565b60405163100960cb60e01b8152602b6004820152602490fd5b156119c257565b60405163100960cb60e01b8152602c6004820152602490fd5b156119e257565b60405163100960cb60e01b8152602d6004820152602490fd5b15611a0257565b60405163100960cb60e01b8152602e6004820152602490fd5b15611a2257565b60405163100960cb60e01b8152602f6004820152602490fd5b15611a4257565b60405163100960cb60e01b815260306004820152602490fd5b15611a6257565b602460405163100960cb60e01b8152816004820152fd5b15611a8057565b60405163100960cb60e01b815260256004820152602490fd5b15611aa057565b60405163100960cb60e01b815260266004820152602490fd5b15611ac057565b60405163100960cb60e01b815260276004820152602490fd5b15611ae057565b60405163100960cb60e01b815260286004820152602490fd5b60405190611b0682610fee565b81611b0f61125d565b9052565b6001600160a01b039091169052565b60405190611b2f82610fee565b60008252565b6040519060c082016001600160401b03811183821017611b94575b6040528160a0600091828152604051611b6881610fee565b8381526020820152826040820152826060820152604051611b8881610fee565b83815260808201520152565b611b9c610f94565b611b50565b600511156103ba57565b60405190611bb882610fab565b81600081526020611bc7611b35565b910152565b60405190611bd982610fab565b60006020838281520152565b6040519061012082016001600160401b03811183821017611c3e575b6040528160008082528060208301528060408301528060608301528060808301528060a08301528060c083015260e0820152610100611bc76111b8565b611c46610f94565b611c01565b604090815191611c5a83610fab565b8260005b828110611c6a57505050565b602090611c756111b8565b8184015201611c5e565b611c87611178565b90611c90611b22565b825260006020830152611ca1611bcc565b6040830152611cae611be5565b606083015260006080830152611cc2611c4b565b60a0830152600060c0830152611cd6611c4b565b60e0830152611ce3611be5565b610100830152611cf1611be5565b610120830152611cff611b22565b6101408301526000610160830152611d15611c4b565b610180830152611d23611c4b565b6101a0830152611d316111b8565b6101c0830152611d3f611be5565b6101e0830152565b60e060a06103c2939594956020610100850197600180851b03809316865280518287015201519081516005811015611db8575b6040860152602082015151606086015260408201511515608086015260608201511515838601526080820151511660c0850152015191019015159052565b611dc0610399565b611d7a565b516005811015611dd25790565b611dda610399565b90565b611de5611178565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015280610140840152611e32611be5565b61016084015280610180840152806101a0840152611e4e611c4b565b6101c08401526101e0830152565b51611dda816103b0565b906002811015611e775760051b0190565b634e487b7160e01b600052603260045260246000fd5b90611e96611c7f565b91611ea56004600054146116fc565b6020611ec0611eb2611062565b8280825183010191016114c7565b91611ed8611ed36104e160045460ff1690565b61171c565b7fdaec047d8800b54c015aa48d6d37d33ec5420cb485b62f7e95edc2c08b87483560405180611f08843383611d47565b0390a1611f2081518015908115612e07575b5061173c565b01611f2b8151611dc5565b611f3481611ba1565b61224757516020015183526101809283820151936101409182840195865111611f5c90611a5b565b80515160011115611f6c90611a79565b8051519060a08501918251611f8091612ea3565b6020820190815293611f923415611a99565b60208601978851611fa29061033d565b8651611fae91336130af565b611fb790611ab9565b60c08701938451611fc79061033d565b611fd19033613054565b611fda90611ad9565b6040840133815190611feb91611b13565b8451518151602001525160405161201c819282919091602080604083019460018060a01b0381511684520151910152565b037fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873391a1604051600181527f661c71c0a49e64d03a88ba6fe3342542307cef699257a5408f35cfcf9c2f7eaa90602090a160016101c0998a01526101609485890191825161208a9051151590565b606087018051911515909152956102008b01518a516120a891612e4d565b8751602001528351604001516120bd90612e2a565b875160400152835160609081015188519015159101528351608001519051516120e591612e4d565b865160800152825160a001511515865190151560a090910152825160c00151865160c001526102208a0151865160e001526101008093510151838751015261212b611ddd565b9b8c8b516121389061033d565b61214191611b13565b5161214b9061033d565b6121589060208e01611b13565b60408a01511515151560408d015260608a015160608d015260808a015160808d01525160a08c01525161218a9061033d565b6121979060c08c01611b13565b60e088015160e08b0152808801516121ae9061033d565b6121b9918b01611b13565b610120808801516121c99061033d565b6121d4918b01611b13565b5190880152519086015243908501526101a04281860152820151906102608301519051016102408301516020810151906040015161221190151590565b9061221a61110b565b92835260208301521515604082015261223291613152565b8284015201516101e08201526103c29061364e565b6001612257829594939551611dc5565b61226081611ba1565b036126615750916124d66101e06103c29461229860016122896101006101608801510151611e5c565b612292816103b0565b1461195b565b6122ac6122a783860151151590565b61197b565b6122cd6102208501516122c46101a087015160200190565b5151101561199b565b60016122e26101006101608701510151611e5c565b6122eb816103b0565b0361264f57610160840151610100015160400151612316906001600160a01b03165b60808701611b13565b6123353360018060a01b0361232e608089015161033d565b16146119bb565b61233f34156119db565b61235d612358612352602087015161033d565b33613054565b6119fb565b61237561237061235260c087015161033d565b611a1b565b612386610140850151421015611a3b565b61246c6123c96101a08601516020810151906123c46040602084015193015115156123af61110b565b93600085526020850152604084019015159052565b6131af565b60a0870190815261240f6123e060c088015161033d565b6123ed60808a015161033d565b906123fd6101a08a015160200190565b5151916001600160a01b031690612f02565b61242f8151515161242961242282612e76565b6064900490565b90612e61565b908160c089015251612467815192835103926040602082015191015115159061245661110b565b948552602085015215156040840152565b613152565b60e08601526124a2612481602086015161033d565b61248b865161033d565b60c0880151916001600160a01b0390911690612f02565b604051600181527f9294f333acc890c2f35cbad90433995f334558a418b6bfd837f8a44a45d9c2e090602090a10160019052565b60e06101008301926124e9845160019052565b81810151515160208551015260406101608401510151604085510152612513606085510160019052565b60806101608401510151608085510152600060a08551015260c0610160840151015160c0855101526000828551015261010061016084015101516101008551015261255c611ddd565b9361257061256a855161033d565b86611b13565b612589612580602086015161033d565b60208701611b13565b6125a26125996040860151151590565b15156040870152565b606084015160608601526080840151608086015260a084015160a08601526125d96125d060c086015161033d565b60c08701611b13565b82840151838601526125fc6125f261010086015161033d565b6101008701611b13565b61261661012061260e8187015161033d565b908701611b13565b6101408401516101408601525161016085015243610180850152426101a08501520151906101c0918284015201516101e082015261364e565b61231661265c855161033d565b61230d565b600261266d8251611dc5565b61267681611ba1565b036128d05750909161269061268b825161033d565b61033d565b33036128b5576126a0600161189b565b6101e091828201516126b190151590565b6126ba906118bb565b6101609081830194855160800151156126d2906118db565b6126dc34156118fb565b602084019586516126ec9061033d565b6126f69033613054565b6126ff9061191b565b60c08501805161270e9061033d565b6127189033613054565b6127219061193b565b604051600181527fe4c9ee31e6bee28c985384967f9099acb538d82d291aee26259d0ba67915995290602090a16001610200948501528151511515610120938401805191151590915293860151845160200152815160400151845160400152835160600161278f9060019052565b815160800151845160800152835160a00160009052815160c00151845160c00152610220860151845160e00152610100809251015182855101526127d1611ddd565b9786516127dd9061033d565b6127e7908a611b13565b516127f19061033d565b6127fe9060208a01611b13565b6040860151151515156040890152606086015160608901526080860151608089015260a086015160a0890152516128349061033d565b6128419060c08901611b13565b60e085015160e0880152808501516128589061033d565b612863918801611b13565b808401516128709061033d565b61287b918701611b13565b61014080840151908601525190840152436101808401526101a04281850152810151906101c091828501520151908201526103c29061364e565b6126a06128c961268b61012084015161033d565b331461189b565b60036128dc8251611dc5565b6128e581611ba1565b03612c91579260006102206101c09360806103c2975101516101408701526129286129196101006101608701510151611e5c565b612922816103b0565b156117bb565b61293e6129396101e0860151151590565b6117db565b61295961295261268b61012087015161033d565b33146117fb565b612963341561181b565b61297b612976612352602087015161033d565b61183b565b61299361298e61235260c087015161033d565b61185b565b6129a461014085015142101561187b565b6129f26129b8612422610260870151612e76565b806101608901526101a08601519061026087015103906124676102408801516129e960406020830151920151151590565b9061245661110b565b610180870152612a2e612a08602086015161033d565b612a1661012087015161033d565b610160890151916001600160a01b0390911690612f02565b612a65610180870151805190612467604060208401519301511515612a5161110b565b938885526020850152604084019015159052565b6101a0870152612a9f612a7b602086015161033d565b612a85865161033d565b6101808901515151916001600160a01b0390911690612f02565b604051600081527f5f7f4749a53aee2c3021e9e48fd12a3e33df75af383b664fe5a810064578aafd90602090a10152818301612adc815160019052565b61014084015151612afa906001600160a01b03166040835101611b13565b612b096101e085015160019052565b6101a0840151515160206101e086015101526040610160830151015160406101e08601510152612b54612b4460606101608501510151151590565b60606101e0870151019015159052565b6080610160830151015160806101e08601510152612b8d612b7d60a06101608501510151151590565b60a06101e0870151019015159052565b60c0610160830151015160c06101e0860151015261022082015160e06101e08601510152516101006101e085015101526101a0612bc8611ddd565b93612bd661256a845161033d565b612be6612580602085015161033d565b612bf66125996040850151151590565b606083015160608601526080830151608086015260a083015160a0860152612c246125d060c085015161033d565b60e083015160e0860152612c3f6125f261010085015161033d565b612c5a612c5061012085015161033d565b6101208701611b13565b6101408301516101408601526101e081015161016086015243610180860152428286015201518284015201516101e082015261364e565b6004919250612ca09051611dc5565b612ca981611ba1565b14612cb2575050565b6103c291612cc0341561175c565b612d93612d8a6020830193612ce0612cdb612352875161033d565b61177c565b600061024060c0860192612cff612cfa612352865161033d565b61179c565b604051600081527fa42ae018106f63caad225e60baeccd505bca235e46b9987fee9f296428e9e6a390602090a10152612d56612580612d3c611ddd565b96612d50612d4a885161033d565b89611b13565b5161033d565b612d666125996040860151151590565b606084015160608601526080840151608086015260a084015160a08601525161033d565b60c08401611b13565b60e081015160e0830152612db7610100612daf8184015161033d565b908401611b13565b612dc9610120612daf8184015161033d565b61014080820151908301526101608082015190830152436101808301526101a04281840152810151906101c0918284015201516101e082015261364e565b90506001541438611f1a565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111612e40575b821061026557565b612e48612e13565b612e38565b9190820191828111612e4057821061026557565b908103908111612e6e5790565b611dda612e13565b90600582029180830460051481151715612e96575b600583040361026557565b612e9e612e13565b612e8b565b91906000928115918215612ebb575b50501561026557565b81819293955002828104821483151715612ef5575b8094612edf5704143880612eb2565b634e487b7160e01b600052601260045260246000fd5b612efd612e13565b612ed0565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152612f7e93600093849392849190608081016001600160401b03811182821017612f85575b6040525193165af1612f6e612f67612f92565b8092612ff4565b5060208082518301019101612fdf565b1561026557565b612f8d610f94565b612f54565b3d15612fda573d906001600160401b038211612fcd575b60405191612fc1601f8201601f19166020018461103f565b82523d6000602084013e565b612fd5610f94565b612fa9565b606090565b908160209103126102655751611dda81611352565b15612ffc5790565b80511561300b57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561302c5790565b80511561303b57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611dda928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261309881611024565b5193165af1612f6e6130a8612f92565b8092613024565b600091611dda9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261309881611024565b91906130fc611c4b565b9260005b600281106131115750506020830152565b8061311e60019284611e66565b516131298288611e66565b526131348187611e66565b506000198114613145575b01613100565b61314d612e13565b61313f565b919061315c611c4b565b9260005b6002811061316e5750508252565b8061317b60019284611e66565b516131868288611e66565b526131918187611e66565b5060001981146131a2575b01613160565b6131aa612e13565b61319c565b91906131b9611c4b565b9260005b600281106131ce5750506020830152565b806131db60019284611e66565b516131e68288611e66565b526131f18187611e66565b506000198114613202575b016131bd565b61320a612e13565b6131fc565b506040513d6000823e3d90fd5b818110613227575050565b6000815560010161321c565b61323e600254610f5a565b806132465750565b601f811160011461325957506000600255565b600260005261329e90601f0160051c600080516020613a3f833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61321c565b6000602081208160025555565b6132b3611158565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015280610140840152613300611be5565b61016084015280610180840152613315611c4b565b6101a0840152806101c0840152806101e0840152806102008401528061022084015261333f6111b8565b610240840152610260830152565b906103c29180511515825260208101516020830152604081015160408301526060810151151560608301526080810151608083015261339560a082015160a084019015159052565b60c081015160c083015260e081015160e083015261010080910151910190610b7b565b60408091805184526020810151602085015201511515910152565b906000905b600282106133e557505050565b60206060826133f760019487516133b8565b019301910190916133d8565b9190916104806102606104a083019461341d8482516107b3565b61342f602082015160208601906107b3565b604081810151151590850152606081015160608501526080810151608085015260a081015160a085015261346b60c082015160c08601906107b3565b60e081015160e085015261348861010080830151908601906107b3565b61349b61012080830151908601906107b3565b61014080820151908501526134b9610160808301519086019061334d565b6101808101516102c08501526134d96101a08201516102e08601906133d3565b6101c08101516103a08501526101e081015115156103c08501526102008101516103e085015261022081015161040085015261351f6102408201516104208601906133b8565b0151910152565b90601f8211613533575050565b6103c29160026000526020600020906020601f840160051c83019310613561575b601f0160051c019061321c565b9091508190613554565b80519091906001600160401b038111613641575b6135938161358e600254610f5a565b613526565b602080601f83116001146135cf57508192936000926135c4575b50508160011b916000199060031b1c191617600255565b0151905038806135ad565b6002600052601f19831694909190600080516020613a3f833981519152926000905b878210613629575050836001959610613610575b505050811b01600255565b015160001960f88460031b161c19169055388080613605565b806001859682949686015181550195019301906135f1565b613649610f94565b61357f565b610160818101805160a0810151600090156138c7575060600151156138c05760005b156137e5576103c2926137d29260e06137e09361378961368e6132ab565b946136a261369c825161033d565b87611b13565b6136bb6136b2602083015161033d565b60208801611b13565b6136d46136cb6040830151151590565b15156040880152565b606081015160608701526080810151608087015260a081015160a087015261370b61370260c083015161033d565b60c08801611b13565b838101518487015261372d6101006137258184015161033d565b908801611b13565b61373f6101206137258184015161033d565b61014094858201958651908801528351908701526101a09485820180516101808901526101c0808401978851908a01526101e0809401519089015251905111159086019015159052565b6020815101516102008501525101516102208301528051516102408301525151516102608201526137ba6004600055565b6137c343600155565b60405192839160208301613403565b03601f19810183528261103f565b61356b565b5050806101206138949201600080808061380261268b865161033d565b6101e0870151908282156138b7575bf1156138aa575b613825602083015161033d565b9161388a61388461386861386160c061383e875161033d565b6101c087018051515190996001600160a01b0398926108829291908a1690612f02565b945161033d565b94518051906124676040602084015193015115156123af61110b565b60200190565b5151921690612f02565b600080556138a26000600155565b6103c2613233565b6138b261320f565b613818565b506108fc613811565b6001613670565b9050613670565b602090604319011261026557604051906138e782610fee565b6044358252565b6020906003190112610265576040519061390782610fee565b6004358252565b6040519061391b82611009565b81613924611c4b565b815261392e6111b8565b60208201526040611bc7611be5565b61022081830312610265576139f4613953611198565b9261395d83611347565b845261396b60208401611347565b602085015261397c6040840161135c565b6040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c08501526139b560e08401611347565b60e085015261010080840151908501526101206139d3818501611347565b908501526101406139e5818501611347565b90850152610160809301611477565b9082015290565b608435906103c282611352565b60c435906103c282611352565b60209060a31901126102655760405190613a2e82610fee565b60a43582613a3b82610349565b5256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 17438,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_token_v3.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_token_v3.rsh:307:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_token_v3.rsh:124:37:after expr stmt semicolon',
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
