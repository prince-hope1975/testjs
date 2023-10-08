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
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        const v3593 = v3556.adminClaimed;
        
        return v3593;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        
        return v3599;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        
        return v3547;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        
        return v3560;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        
        return v3586;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async (_v3588 ) => {
          const v3588 = stdlib.protect(ctc0, _v3588, null);
        
        const v3589 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3588, ctc6), null);
        const v3590 = {
          None: 0,
          Some: 1
          }[v3589[0]];
        const v3591 = stdlib.eq(v3590, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3591;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        const v3545 = {
          amountOfRaffleToken: v3514,
          asset: v3507,
          cost: v3511,
          creator: v3515,
          deadline: v3509,
          isFeatured: v3508,
          raffleToken: v3513
          };
        
        return v3545;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_randomNumber = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        stdlib.assert(v3586, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:150:28:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:150:28:application)'],
          msg: 'Cannot view this till deadline',
          who: 'Module'
          });
        
        return v3510;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        const v3592 = v3556.currentUserNumber;
        
        return v3592;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        
        return v3513;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        const v3594 = v3556.claimed;
        
        return v3594;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = svs;
      return (await ((async () => {
        
        const v3587 = v3556.winner;
        
        return v3587;}))(...args));
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
  
  
  const v3483 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v3484 = [v3483, v3483];
  const v3488 = stdlib.protect(ctc2, interact.Admin, 'for Deployer\'s interact field Admin');
  const v3489 = stdlib.protect(ctc3, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v3490 = stdlib.protect(ctc4, interact.asset, 'for Deployer\'s interact field asset');
  const v3491 = stdlib.protect(ctc3, interact.cost, 'for Deployer\'s interact field cost');
  const v3492 = stdlib.protect(ctc2, interact.creator, 'for Deployer\'s interact field creator');
  const v3493 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v3494 = stdlib.protect(ctc5, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v3495 = stdlib.protect(ctc4, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v3498 = v3494 ? stdlib.checkedBigNumberify('./raffle_token_v4.rsh:5:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_token_v4.rsh:68:59:decimal', stdlib.UInt_max, '0');
  const v3499 = stdlib.protect(ctc3, await interact.random(), {
    at: './raffle_token_v4.rsh:70:52:application',
    fs: ['at ./raffle_token_v4.rsh:64:16:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:64:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v3500 = stdlib.tokenEq(v3490, v3495);
  const v3501 = v3500 ? false : true;
  stdlib.assert(v3501, {
    at: './raffle_token_v4.rsh:76:11:application',
    fs: ['at ./raffle_token_v4.rsh:64:16:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:64:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const v3502 = stdlib.lt(v3491, stdlib.UInt_max);
  stdlib.assert(v3502, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3504 = stdlib.ge(v3491, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:92:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3504, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3490, v3494, v3493, v3499, v3491, v3498, v3495, v3489, v3492, v3488],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc5, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516], secs: v3518, time: v3517, didSend: v115, from: v3506 } = txn1;
      
      const v3519 = v3484[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0')];
      const v3520 = stdlib.Array_set(v3519, '0', stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v3521 = stdlib.Array_set(v3484, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0'), v3520);
      const v3523 = v3521[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '1')];
      const v3524 = stdlib.Array_set(v3523, '0', stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v3525 = stdlib.Array_set(v3521, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '1'), v3524);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3507
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3513
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
  const {data: [v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516], secs: v3518, time: v3517, didSend: v115, from: v3506 } = txn1;
  const v3519 = v3484[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0')];
  const v3520 = stdlib.Array_set(v3519, '0', stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v3521 = stdlib.Array_set(v3484, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0'), v3520);
  const v3523 = v3521[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '1')];
  const v3524 = stdlib.Array_set(v3523, '0', stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v3525 = stdlib.Array_set(v3521, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:78:12:dot', stdlib.UInt_max, '1'), v3524);
  const v3527 = stdlib.tokenEq(v3513, v3507);
  const v3528 = v3527 ? false : true;
  stdlib.assert(v3528, {
    at: './raffle_token_v4.rsh:78:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v3529 = stdlib.lt(v3511, stdlib.UInt_max);
  stdlib.assert(v3529, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v3531 = stdlib.ge(v3511, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:92:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3531, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3525],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3517,
    onlyIf: true,
    out_tys: [],
    pay: [v3512, [[v3514, v3513]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v3535, time: v3534, didSend: v124, from: v3533 } = txn2;
      
      sim_r.txns.push({
        amt: v3512,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v3538 = v3525[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:96:12:dot', stdlib.UInt_max, '1')];
      const v3539 = v3538[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v3540 = stdlib.add(v3539, v3514);
      const v3542 = stdlib.Array_set(v3538, '0', v3540);
      const v3543 = stdlib.Array_set(v3525, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:96:12:dot', stdlib.UInt_max, '1'), v3542);
      sim_r.txns.push({
        amt: v3514,
        kind: 'to',
        tok: v3513
        });
      const v3547 = stdlib.safeAdd(v3535, v3509);
      const v3548 = await ctc.getContractInfo();
      
      const v3550 = v3543[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:127:17:application', stdlib.UInt_max, '0')];
      const v3551 = v3550[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:127:17:application', stdlib.UInt_max, '0')];
      const v3552 = v3543[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:128:23:application', stdlib.UInt_max, '1')];
      const v3553 = v3552[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v3554 = ['None', null];
      const v3555 = {
        adminClaimed: false,
        bal: v3551,
        buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        claimed: false,
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v3553,
        winner: v3554
        };
      const v3556 = v3555;
      const v3557 = v3534;
      const v3560 = v3535;
      const v3563 = v3543;
      const v3564 = v3512;
      
      if (await (async () => {
        const v3581 = v3556.keepGoing;
        const v3582 = v3556.claimed;
        const v3583 = v3582 ? false : true;
        const v3584 = v3581 ? v3583 : false;
        
        return v3584;})()) {
        const v3586 = stdlib.ge(v3560, v3547);
        const v3596 = v3556.bal;
        const v3597 = v3556.raffleBal;
        const v3598 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v3599 = v3598[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v5492 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v5493 = v5492[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v3516,
          tok: undefined /* Nothing */
          });
        const v5506 = stdlib.sub(v5493, v5493);
        const v5508 = stdlib.Array_set(v5492, '0', v5506);
        const v5509 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v5508);
        sim_r.txns.push({
          kind: 'from',
          to: v3516,
          tok: v3507
          });
        const v5510 = v5509[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
        const v5511 = v5510[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v3506,
          tok: v3513
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v3513
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v3507
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
  const {data: [], secs: v3535, time: v3534, didSend: v124, from: v3533 } = txn2;
  ;
  const v3538 = v3525[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:96:12:dot', stdlib.UInt_max, '1')];
  const v3539 = v3538[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v3540 = stdlib.add(v3539, v3514);
  const v3542 = stdlib.Array_set(v3538, '0', v3540);
  const v3543 = stdlib.Array_set(v3525, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:96:12:dot', stdlib.UInt_max, '1'), v3542);
  ;
  const v3544 = stdlib.addressEq(v3506, v3533);
  stdlib.assert(v3544, {
    at: './raffle_token_v4.rsh:96:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v3547 = stdlib.safeAdd(v3535, v3509);
  const v3548 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v3548, v3510), {
    at: './raffle_token_v4.rsh:120:27:application',
    fs: ['at ./raffle_token_v4.rsh:120:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:120:27:function exp)', 'at ./raffle_token_v4.rsh:120:27:application call to "liftedInteract" (defined at: ./raffle_token_v4.rsh:120:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v3550 = v3543[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:127:17:application', stdlib.UInt_max, '0')];
  const v3551 = v3550[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:127:17:application', stdlib.UInt_max, '0')];
  const v3552 = v3543[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:128:23:application', stdlib.UInt_max, '1')];
  const v3553 = v3552[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:128:23:application', stdlib.UInt_max, '0')];
  const v3554 = ['None', null];
  const v3555 = {
    adminClaimed: false,
    bal: v3551,
    buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    claimed: false,
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v3553,
    winner: v3554
    };
  let v3556 = v3555;
  let v3557 = v3534;
  let v3560 = v3535;
  let v3563 = v3543;
  let v3564 = v3512;
  
  let txn3 = txn2;
  while (await (async () => {
    const v3581 = v3556.keepGoing;
    const v3582 = v3556.claimed;
    const v3583 = v3582 ? false : true;
    const v3584 = v3581 ? v3583 : false;
    
    return v3584;})()) {
    const v3586 = stdlib.ge(v3560, v3547);
    const v3596 = v3556.bal;
    const v3597 = v3556.raffleBal;
    const v3598 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
    const v3599 = v3598[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn4;
    switch (v3846[0]) {
      case 'User_buyTicket0_273': {
        const v3849 = v3846[1];
        undefined /* setApiDetails */;
        const v3854 = v3849[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:157:10:spread', stdlib.UInt_max, '0')];
        const v3855 = stdlib.lt(v3560, v3547);
        stdlib.assert(v3855, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v3857 = stdlib.ge(v3854, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:159:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v3857, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Cannot purchase less than 1',
          who: 'Deployer'
          });
        const v3859 = stdlib.safeMul(v3854, v3511);
        ;
        const v3968 = stdlib.add(v3599, v3859);
        const v3970 = stdlib.Array_set(v3598, '0', v3968);
        const v3971 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '0'), v3970);
        ;
        ;
        const v3985 = {
          address: v3845,
          amount: v3854
          };
        null;
        const v3986 = true;
        await txn4.getOutput('User_buyTicket', 'v3986', ctc5, v3986);
        const v3993 = v3556.adminClaimed;
        const v3995 = v3556.buyers;
        const v3996 = v3556.claimed;
        const v3997 = v3556.currentUserNumber;
        const v3998 = v3556.keepGoing;
        const v3999 = v3556.percent;
        const v4001 = v3556.winner;
        const v4003 = stdlib.safeAdd(v3997, v3854);
        const v4005 = stdlib.safeAdd(v3596, v3859);
        const v4007 = stdlib.safeAdd(v3995, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:181:42:decimal', stdlib.UInt_max, '1'));
        const v4008 = {
          adminClaimed: v3993,
          bal: v4005,
          buyers: v4007,
          claimed: v3996,
          currentUserNumber: v4003,
          keepGoing: v3998,
          percent: v3999,
          raffleBal: v3597,
          winner: v4001
          };
        const cv3556 = v4008;
        const cv3557 = v3847;
        const cv3560 = v3848;
        const cv3563 = v3971;
        const cv3564 = v3564;
        
        v3556 = cv3556;
        v3557 = cv3557;
        v3560 = cv3560;
        v3563 = cv3563;
        v3564 = cv3564;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_claim0_273': {
        const v4175 = v3846[1];
        undefined /* setApiDetails */;
        const v4197 = v3556.winner;
        const v4198 = {
          None: 0,
          Some: 1
          }[v4197[0]];
        const v4199 = stdlib.eq(v4198, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4199, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3586, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v4203 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '1')];
        const v4204 = v4203[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '0')];
        const v4205 = stdlib.le(v3597, v4204);
        stdlib.assert(v4205, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v4208 = stdlib.fromSome(v4197, v3506);
        const v4209 = stdlib.addressEq(v4208, v3845);
        stdlib.assert(v4209, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v4342 = stdlib.ge(v3848, v3547);
        stdlib.assert(v4342, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:207:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:207:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v4359 = stdlib.sub(v4204, v4204);
        const v4361 = stdlib.Array_set(v4203, '0', v4359);
        const v4362 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:208:57:application', stdlib.UInt_max, '1'), v4361);
        ;
        const v4363 = v4362[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:43:application', stdlib.UInt_max, '0')];
        const v4364 = v4363[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:43:application', stdlib.UInt_max, '0')];
        const v4365 = stdlib.safeMul(v4364, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:54:decimal', stdlib.UInt_max, '5'));
        const v4366 = stdlib.safeDiv(v4365, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:58:decimal', stdlib.UInt_max, '100'));
        const v4369 = stdlib.safeSub(v4364, v4366);
        const v4375 = stdlib.sub(v4364, v4369);
        const v4377 = stdlib.Array_set(v4363, '0', v4375);
        const v4378 = stdlib.Array_set(v4362, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:210:60:application', stdlib.UInt_max, '0'), v4377);
        ;
        const v4379 = true;
        await txn4.getOutput('User_claim', 'v4379', ctc5, v4379);
        const v4387 = v3556.buyers;
        const v4389 = v3556.currentUserNumber;
        const v4391 = v3556.percent;
        const v4394 = v4378[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:216:25:application', stdlib.UInt_max, '0')];
        const v4395 = v4394[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:216:25:application', stdlib.UInt_max, '0')];
        const v4396 = {
          adminClaimed: true,
          bal: v4395,
          buyers: v4387,
          claimed: true,
          currentUserNumber: v4389,
          keepGoing: false,
          percent: v4391,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          winner: v4197
          };
        const cv3556 = v4396;
        const cv3557 = v3847;
        const cv3560 = v3848;
        const cv3563 = v4378;
        const cv3564 = v3564;
        
        v3556 = cv3556;
        v3557 = cv3557;
        v3560 = cv3560;
        v3563 = cv3563;
        v3564 = cv3564;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_delete0_273': {
        const v4501 = v3846[1];
        undefined /* setApiDetails */;
        const v4547 = stdlib.addressEq(v3845, v3506);
        const v4548 = stdlib.addressEq(v3845, v3516);
        const v4549 = v4547 ? true : v4548;
        stdlib.assert(v4549, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        stdlib.assert(v3586, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4553 = v3556.currentUserNumber;
        const v4554 = stdlib.eq(v4553, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:287:42:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4554, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Can only delete when nobody used contract',
          who: 'Deployer'
          });
        ;
        ;
        const v4624 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '1')];
        const v4625 = v4624[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '0')];
        ;
        const v4734 = true;
        await txn4.getOutput('User_delete', 'v4734', ctc5, v4734);
        const v4747 = stdlib.sub(v4625, v4625);
        const v4749 = stdlib.Array_set(v4624, '0', v4747);
        const v4750 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:294:57:application', stdlib.UInt_max, '1'), v4749);
        ;
        const v4751 = v3556.adminClaimed;
        const v4753 = v3556.buyers;
        const v4757 = v3556.percent;
        const v4759 = v3556.winner;
        const v4760 = {
          adminClaimed: v4751,
          bal: v3596,
          buyers: v4753,
          claimed: true,
          currentUserNumber: v4553,
          keepGoing: false,
          percent: v4757,
          raffleBal: v3597,
          winner: v4759
          };
        const cv3556 = v4760;
        const cv3557 = v3847;
        const cv3560 = v3848;
        const cv3563 = v4750;
        const cv3564 = v3564;
        
        v3556 = cv3556;
        v3557 = cv3557;
        v3560 = cv3560;
        v3563 = cv3563;
        v3564 = cv3564;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_determinWinnerAfterDeadline0_273': {
        const v4827 = v3846[1];
        undefined /* setApiDetails */;
        const v4894 = v3556.winner;
        const v4895 = {
          None: 0,
          Some: 1
          }[v4894[0]];
        const v4896 = stdlib.eq(v4895, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4896, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v3586, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v4900 = stdlib.addressEq(v3845, v3516);
        stdlib.assert(v4900, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
          msg: 'You cannot perform this action',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v5089 = v4827[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:224:10:spread', stdlib.UInt_max, '0')];
        const v5095 = stdlib.ge(v3848, v3547);
        stdlib.assert(v5095, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v4.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:235:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:235:13:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v5102 = stdlib.safeMul(v3599, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:236:54:decimal', stdlib.UInt_max, '5'));
        const v5103 = stdlib.safeDiv(v5102, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:236:58:decimal', stdlib.UInt_max, '100'));
        const v5109 = stdlib.sub(v3599, v5103);
        const v5111 = stdlib.Array_set(v3598, '0', v5109);
        const v5112 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:237:41:application', stdlib.UInt_max, '0'), v5111);
        ;
        const v5113 = v5112[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:27:application', stdlib.UInt_max, '0')];
        const v5114 = v5113[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:27:application', stdlib.UInt_max, '0')];
        const v5120 = stdlib.sub(v5114, v5114);
        const v5122 = stdlib.Array_set(v5113, '0', v5120);
        const v5123 = stdlib.Array_set(v5112, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:49:application', stdlib.UInt_max, '0'), v5122);
        ;
        const v5124 = null;
        await txn4.getOutput('User_determinWinnerAfterDeadline', 'v5124', ctc0, v5124);
        const v5133 = v3556.buyers;
        const v5134 = v3556.claimed;
        const v5135 = v3556.currentUserNumber;
        const v5136 = v3556.keepGoing;
        const v5137 = v3556.percent;
        const v5140 = v5123[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:243:25:application', stdlib.UInt_max, '0')];
        const v5141 = v5140[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:243:25:application', stdlib.UInt_max, '0')];
        const v5142 = ['Some', v5089];
        const v5143 = {
          adminClaimed: true,
          bal: v5141,
          buyers: v5133,
          claimed: v5134,
          currentUserNumber: v5135,
          keepGoing: v5136,
          percent: v5137,
          raffleBal: v3597,
          winner: v5142
          };
        const cv3556 = v5143;
        const cv3557 = v3847;
        const cv3560 = v3848;
        const cv3563 = v5123;
        const cv3564 = v3564;
        
        v3556 = cv3556;
        v3557 = cv3557;
        v3560 = cv3560;
        v3563 = cv3563;
        v3564 = cv3564;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_273': {
        const v5153 = v3846[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v5473 = null;
        await txn4.getOutput('User_optin', 'v5473', ctc0, v5473);
        const cv3556 = v3556;
        const cv3557 = v3847;
        const cv3560 = v3848;
        const cv3563 = v3563;
        const cv3564 = v3564;
        
        v3556 = cv3556;
        v3557 = cv3557;
        v3560 = cv3560;
        v3563 = cv3563;
        v3564 = cv3564;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v5492 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
  const v5493 = v5492[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
  ;
  const v5506 = stdlib.sub(v5493, v5493);
  const v5508 = stdlib.Array_set(v5492, '0', v5506);
  const v5509 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v5508);
  ;
  const v5510 = v5509[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
  const v5511 = v5510[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
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
  
  
  const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3602 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v4.rsh:1:23:application',
    fs: ['at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_buyTicket0_273" (defined at: ./raffle_token_v4.rsh:157:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v3603 = v3602[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3605 = stdlib.lt(v3560, v3547);
  stdlib.assert(v3605, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_buyTicket0_273" (defined at: ./raffle_token_v4.rsh:157:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v3607 = stdlib.ge(v3603, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:159:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3607, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_buyTicket0_273" (defined at: ./raffle_token_v4.rsh:157:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Cannot purchase less than 1',
    who: 'User_buyTicket'
    });
  const v3614 = ['User_buyTicket0_273', v3602];
  
  const v3691 = stdlib.safeMul(v3603, v3511);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599, v3614],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:162:11:decimal', stdlib.UInt_max, '0'), [[v3691, v3507], [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:164:12:decimal', stdlib.UInt_max, '0'), v3513]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
      
      switch (v3846[0]) {
        case 'User_buyTicket0_273': {
          const v3849 = v3846[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v3854 = v3849[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:157:10:spread', stdlib.UInt_max, '0')];
          const v3859 = stdlib.safeMul(v3854, v3511);
          ;
          const v3968 = stdlib.add(v3599, v3859);
          const v3970 = stdlib.Array_set(v3598, '0', v3968);
          const v3971 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '0'), v3970);
          sim_r.txns.push({
            amt: v3859,
            kind: 'to',
            tok: v3507
            });
          ;
          const v3985 = {
            address: v3845,
            amount: v3854
            };
          null;
          const v3986 = true;
          const v3987 = await txn1.getOutput('User_buyTicket', 'v3986', ctc4, v3986);
          
          const v3993 = v3556.adminClaimed;
          const v3995 = v3556.buyers;
          const v3996 = v3556.claimed;
          const v3997 = v3556.currentUserNumber;
          const v3998 = v3556.keepGoing;
          const v3999 = v3556.percent;
          const v4001 = v3556.winner;
          const v4003 = stdlib.safeAdd(v3997, v3854);
          const v4005 = stdlib.safeAdd(v3596, v3859);
          const v4007 = stdlib.safeAdd(v3995, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:181:42:decimal', stdlib.UInt_max, '1'));
          const v4008 = {
            adminClaimed: v3993,
            bal: v4005,
            buyers: v4007,
            claimed: v3996,
            currentUserNumber: v4003,
            keepGoing: v3998,
            percent: v3999,
            raffleBal: v3597,
            winner: v4001
            };
          const v6656 = v4008;
          const v6658 = v3848;
          const v6659 = v3971;
          const v6660 = v3564;
          const v6661 = v4008.keepGoing;
          const v6662 = v4008.claimed;
          const v6663 = v6662 ? false : true;
          const v6664 = v6661 ? v6663 : false;
          if (v6664) {
            const v6665 = stdlib.ge(v3848, v3547);
            const v6666 = v4008.bal;
            const v6667 = v4008.raffleBal;
            const v6668 = v3971[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6669 = v6668[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v6671 = v3971[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6672 = v6671[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: undefined /* Nothing */
              });
            const v6673 = stdlib.sub(v6672, v6672);
            const v6674 = stdlib.Array_set(v6671, '0', v6673);
            const v6675 = stdlib.Array_set(v3971, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v6674);
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: v3507
              });
            const v6676 = v6675[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
            const v6677 = v6676[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3506,
              tok: v3513
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3513
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3507
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
          const v4175 = v3846[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4501 = v3846[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4827 = v3846[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5153 = v3846[1];
          
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
  const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
  switch (v3846[0]) {
    case 'User_buyTicket0_273': {
      const v3849 = v3846[1];
      undefined /* setApiDetails */;
      const v3854 = v3849[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:157:10:spread', stdlib.UInt_max, '0')];
      const v3855 = stdlib.lt(v3560, v3547);
      stdlib.assert(v3855, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v3857 = stdlib.ge(v3854, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:159:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v3857, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Cannot purchase less than 1',
        who: 'User_buyTicket'
        });
      const v3859 = stdlib.safeMul(v3854, v3511);
      ;
      const v3968 = stdlib.add(v3599, v3859);
      const v3970 = stdlib.Array_set(v3598, '0', v3968);
      const v3971 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '0'), v3970);
      ;
      ;
      const v3985 = {
        address: v3845,
        amount: v3854
        };
      null;
      const v3986 = true;
      const v3987 = await txn1.getOutput('User_buyTicket', 'v3986', ctc4, v3986);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v3849, v3987), {
          at: './raffle_token_v4.rsh:157:11:application',
          fs: ['at ./raffle_token_v4.rsh:157:11:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:11:function exp)', 'at ./raffle_token_v4.rsh:175:14:application call to "ret" (defined at: ./raffle_token_v4.rsh:166:15:function exp)', 'at ./raffle_token_v4.rsh:166:15:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:166:15:function exp)'],
          msg: 'out',
          who: 'User_buyTicket'
          });
        }
      else {
        }
      
      const v3993 = v3556.adminClaimed;
      const v3995 = v3556.buyers;
      const v3996 = v3556.claimed;
      const v3997 = v3556.currentUserNumber;
      const v3998 = v3556.keepGoing;
      const v3999 = v3556.percent;
      const v4001 = v3556.winner;
      const v4003 = stdlib.safeAdd(v3997, v3854);
      const v4005 = stdlib.safeAdd(v3596, v3859);
      const v4007 = stdlib.safeAdd(v3995, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:181:42:decimal', stdlib.UInt_max, '1'));
      const v4008 = {
        adminClaimed: v3993,
        bal: v4005,
        buyers: v4007,
        claimed: v3996,
        currentUserNumber: v4003,
        keepGoing: v3998,
        percent: v3999,
        raffleBal: v3597,
        winner: v4001
        };
      const v6656 = v4008;
      const v6658 = v3848;
      const v6659 = v3971;
      const v6660 = v3564;
      const v6661 = v4008.keepGoing;
      const v6662 = v4008.claimed;
      const v6663 = v6662 ? false : true;
      const v6664 = v6661 ? v6663 : false;
      if (v6664) {
        const v6665 = stdlib.ge(v3848, v3547);
        const v6666 = v4008.bal;
        const v6667 = v4008.raffleBal;
        const v6668 = v3971[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6669 = v6668[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v6671 = v3971[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6672 = v6671[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        ;
        const v6673 = stdlib.sub(v6672, v6672);
        const v6674 = stdlib.Array_set(v6671, '0', v6673);
        const v6675 = stdlib.Array_set(v3971, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v6674);
        ;
        const v6676 = v6675[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
        const v6677 = v6676[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_claim0_273': {
      const v4175 = v3846[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4501 = v3846[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4827 = v3846[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5153 = v3846[1];
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
  
  
  const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3624 = ctc.selfAddress();
  const v3626 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v4.rsh:1:23:application',
    fs: ['at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v4.rsh:196:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v3628 = v3556.winner;
  const v3629 = {
    None: 0,
    Some: 1
    }[v3628[0]];
  const v3630 = stdlib.eq(v3629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3630, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v4.rsh:196:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  stdlib.assert(v3586, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v4.rsh:196:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v3634 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '1')];
  const v3635 = v3634[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '0')];
  const v3636 = stdlib.le(v3597, v3635);
  stdlib.assert(v3636, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v4.rsh:196:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v3639 = stdlib.fromSome(v3628, v3506);
  const v3640 = stdlib.addressEq(v3639, v3624);
  stdlib.assert(v3640, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_claim0_273" (defined at: ./raffle_token_v4.rsh:196:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v3645 = ['User_claim0_273', v3626];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599, v3645],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:206:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:206:14:decimal', stdlib.UInt_max, '0'), v3507], [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:206:28:decimal', stdlib.UInt_max, '0'), v3513]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
      
      switch (v3846[0]) {
        case 'User_buyTicket0_273': {
          const v3849 = v3846[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4175 = v3846[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v4197 = v3556.winner;
          const v4203 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '1')];
          const v4204 = v4203[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '0')];
          const v4208 = stdlib.fromSome(v4197, v3506);
          ;
          ;
          ;
          const v4359 = stdlib.sub(v4204, v4204);
          const v4361 = stdlib.Array_set(v4203, '0', v4359);
          const v4362 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:208:57:application', stdlib.UInt_max, '1'), v4361);
          sim_r.txns.push({
            kind: 'from',
            to: v4208,
            tok: v3513
            });
          const v4363 = v4362[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:43:application', stdlib.UInt_max, '0')];
          const v4364 = v4363[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:43:application', stdlib.UInt_max, '0')];
          const v4365 = stdlib.safeMul(v4364, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:54:decimal', stdlib.UInt_max, '5'));
          const v4366 = stdlib.safeDiv(v4365, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:58:decimal', stdlib.UInt_max, '100'));
          const v4369 = stdlib.safeSub(v4364, v4366);
          const v4375 = stdlib.sub(v4364, v4369);
          const v4377 = stdlib.Array_set(v4363, '0', v4375);
          const v4378 = stdlib.Array_set(v4362, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:210:60:application', stdlib.UInt_max, '0'), v4377);
          sim_r.txns.push({
            kind: 'from',
            to: v3506,
            tok: v3507
            });
          const v4379 = true;
          const v4380 = await txn1.getOutput('User_claim', 'v4379', ctc4, v4379);
          
          const v4387 = v3556.buyers;
          const v4389 = v3556.currentUserNumber;
          const v4391 = v3556.percent;
          const v4394 = v4378[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:216:25:application', stdlib.UInt_max, '0')];
          const v4395 = v4394[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:216:25:application', stdlib.UInt_max, '0')];
          const v4396 = {
            adminClaimed: true,
            bal: v4395,
            buyers: v4387,
            claimed: true,
            currentUserNumber: v4389,
            keepGoing: false,
            percent: v4391,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            winner: v4197
            };
          const v6788 = v4396;
          const v6790 = v3848;
          const v6791 = v4378;
          const v6792 = v3564;
          const v6793 = v4396.keepGoing;
          const v6794 = v4396.claimed;
          const v6795 = v6794 ? false : true;
          const v6796 = v6793 ? v6795 : false;
          if (v6796) {
            const v6798 = v4396.bal;
            const v6799 = v4396.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: undefined /* Nothing */
              });
            const v6805 = stdlib.sub(v4395, v4395);
            const v6806 = stdlib.Array_set(v4394, '0', v6805);
            const v6807 = stdlib.Array_set(v4378, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v6806);
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: v3507
              });
            const v6808 = v6807[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
            const v6809 = v6808[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3506,
              tok: v3513
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3513
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3507
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
          const v4501 = v3846[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4827 = v3846[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5153 = v3846[1];
          
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
  const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
  switch (v3846[0]) {
    case 'User_buyTicket0_273': {
      const v3849 = v3846[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4175 = v3846[1];
      undefined /* setApiDetails */;
      const v4197 = v3556.winner;
      const v4198 = {
        None: 0,
        Some: 1
        }[v4197[0]];
      const v4199 = stdlib.eq(v4198, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4199, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      stdlib.assert(v3586, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v4203 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '1')];
      const v4204 = v4203[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:200:33:application', stdlib.UInt_max, '0')];
      const v4205 = stdlib.le(v3597, v4204);
      stdlib.assert(v4205, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v4208 = stdlib.fromSome(v4197, v3506);
      const v4209 = stdlib.addressEq(v4208, v3845);
      stdlib.assert(v4209, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      ;
      const v4342 = stdlib.ge(v3848, v3547);
      stdlib.assert(v4342, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:207:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:207:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v4359 = stdlib.sub(v4204, v4204);
      const v4361 = stdlib.Array_set(v4203, '0', v4359);
      const v4362 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:208:57:application', stdlib.UInt_max, '1'), v4361);
      ;
      const v4363 = v4362[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:43:application', stdlib.UInt_max, '0')];
      const v4364 = v4363[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:43:application', stdlib.UInt_max, '0')];
      const v4365 = stdlib.safeMul(v4364, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:54:decimal', stdlib.UInt_max, '5'));
      const v4366 = stdlib.safeDiv(v4365, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:209:58:decimal', stdlib.UInt_max, '100'));
      const v4369 = stdlib.safeSub(v4364, v4366);
      const v4375 = stdlib.sub(v4364, v4369);
      const v4377 = stdlib.Array_set(v4363, '0', v4375);
      const v4378 = stdlib.Array_set(v4362, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:210:60:application', stdlib.UInt_max, '0'), v4377);
      ;
      const v4379 = true;
      const v4380 = await txn1.getOutput('User_claim', 'v4379', ctc4, v4379);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v4175, v4380), {
          at: './raffle_token_v4.rsh:196:11:application',
          fs: ['at ./raffle_token_v4.rsh:196:11:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:11:function exp)', 'at ./raffle_token_v4.rsh:211:12:application call to "k" (defined at: ./raffle_token_v4.rsh:207:13:function exp)', 'at ./raffle_token_v4.rsh:207:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:207:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v4387 = v3556.buyers;
      const v4389 = v3556.currentUserNumber;
      const v4391 = v3556.percent;
      const v4394 = v4378[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:216:25:application', stdlib.UInt_max, '0')];
      const v4395 = v4394[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:216:25:application', stdlib.UInt_max, '0')];
      const v4396 = {
        adminClaimed: true,
        bal: v4395,
        buyers: v4387,
        claimed: true,
        currentUserNumber: v4389,
        keepGoing: false,
        percent: v4391,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        winner: v4197
        };
      const v6788 = v4396;
      const v6790 = v3848;
      const v6791 = v4378;
      const v6792 = v3564;
      const v6793 = v4396.keepGoing;
      const v6794 = v4396.claimed;
      const v6795 = v6794 ? false : true;
      const v6796 = v6793 ? v6795 : false;
      if (v6796) {
        const v6798 = v4396.bal;
        const v6799 = v4396.raffleBal;
        return;
        }
      else {
        ;
        const v6805 = stdlib.sub(v4395, v4395);
        const v6806 = stdlib.Array_set(v4394, '0', v6805);
        const v6807 = stdlib.Array_set(v4378, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v6806);
        ;
        const v6808 = v6807[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
        const v6809 = v6808[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_delete0_273': {
      const v4501 = v3846[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4827 = v3846[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5153 = v3846[1];
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
  
  
  const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3668 = ctc.selfAddress();
  const v3670 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v4.rsh:1:23:application',
    fs: ['at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v4.rsh:277:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_delete'
    });
  const v3671 = stdlib.addressEq(v3668, v3506);
  const v3672 = stdlib.addressEq(v3668, v3516);
  const v3673 = v3671 ? true : v3672;
  stdlib.assert(v3673, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v4.rsh:277:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_delete'
    });
  stdlib.assert(v3586, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v4.rsh:277:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_delete'
    });
  const v3677 = v3556.currentUserNumber;
  const v3678 = stdlib.eq(v3677, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:287:42:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3678, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_delete0_273" (defined at: ./raffle_token_v4.rsh:277:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Can only delete when nobody used contract',
    who: 'User_delete'
    });
  const v3683 = ['User_delete0_273', v3670];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599, v3683],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:291:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:291:14:decimal', stdlib.UInt_max, '0'), v3507], [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:291:28:decimal', stdlib.UInt_max, '0'), v3513]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
      
      switch (v3846[0]) {
        case 'User_buyTicket0_273': {
          const v3849 = v3846[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4175 = v3846[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4501 = v3846[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_delete"
            });
          const v4553 = v3556.currentUserNumber;
          ;
          ;
          const v4624 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '1')];
          const v4625 = v4624[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '0')];
          ;
          const v4734 = true;
          const v4735 = await txn1.getOutput('User_delete', 'v4734', ctc4, v4734);
          
          const v4747 = stdlib.sub(v4625, v4625);
          const v4749 = stdlib.Array_set(v4624, '0', v4747);
          const v4750 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:294:57:application', stdlib.UInt_max, '1'), v4749);
          sim_r.txns.push({
            kind: 'from',
            to: v3506,
            tok: v3513
            });
          const v4751 = v3556.adminClaimed;
          const v4753 = v3556.buyers;
          const v4757 = v3556.percent;
          const v4759 = v3556.winner;
          const v4760 = {
            adminClaimed: v4751,
            bal: v3596,
            buyers: v4753,
            claimed: true,
            currentUserNumber: v4553,
            keepGoing: false,
            percent: v4757,
            raffleBal: v3597,
            winner: v4759
            };
          const v6920 = v4760;
          const v6922 = v3848;
          const v6923 = v4750;
          const v6924 = v3564;
          const v6925 = v4760.keepGoing;
          const v6926 = v4760.claimed;
          const v6927 = v6926 ? false : true;
          const v6928 = v6925 ? v6927 : false;
          if (v6928) {
            const v6929 = stdlib.ge(v3848, v3547);
            const v6930 = v4760.bal;
            const v6931 = v4760.raffleBal;
            const v6932 = v4750[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6933 = v6932[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v6935 = v4750[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v6936 = v6935[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: undefined /* Nothing */
              });
            const v6937 = stdlib.sub(v6936, v6936);
            const v6938 = stdlib.Array_set(v6935, '0', v6937);
            const v6939 = stdlib.Array_set(v4750, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v6938);
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: v3507
              });
            const v6940 = v6939[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
            const v6941 = v6940[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3506,
              tok: v3513
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3513
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3507
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
          const v4827 = v3846[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5153 = v3846[1];
          
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
  const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
  switch (v3846[0]) {
    case 'User_buyTicket0_273': {
      const v3849 = v3846[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4175 = v3846[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4501 = v3846[1];
      undefined /* setApiDetails */;
      const v4547 = stdlib.addressEq(v3845, v3506);
      const v4548 = stdlib.addressEq(v3845, v3516);
      const v4549 = v4547 ? true : v4548;
      stdlib.assert(v4549, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_delete'
        });
      stdlib.assert(v3586, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_delete'
        });
      const v4553 = v3556.currentUserNumber;
      const v4554 = stdlib.eq(v4553, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:287:42:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4554, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Can only delete when nobody used contract',
        who: 'User_delete'
        });
      ;
      ;
      const v4624 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '1')];
      const v4625 = v4624[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:124:37:dot', stdlib.UInt_max, '0')];
      ;
      const v4734 = true;
      const v4735 = await txn1.getOutput('User_delete', 'v4734', ctc4, v4734);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v4501, v4735), {
          at: './raffle_token_v4.rsh:277:11:application',
          fs: ['at ./raffle_token_v4.rsh:277:11:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:11:function exp)', 'at ./raffle_token_v4.rsh:293:14:application call to "ret" (defined at: ./raffle_token_v4.rsh:292:15:function exp)', 'at ./raffle_token_v4.rsh:292:15:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:292:15:function exp)'],
          msg: 'out',
          who: 'User_delete'
          });
        }
      else {
        }
      
      const v4747 = stdlib.sub(v4625, v4625);
      const v4749 = stdlib.Array_set(v4624, '0', v4747);
      const v4750 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:294:57:application', stdlib.UInt_max, '1'), v4749);
      ;
      const v4751 = v3556.adminClaimed;
      const v4753 = v3556.buyers;
      const v4757 = v3556.percent;
      const v4759 = v3556.winner;
      const v4760 = {
        adminClaimed: v4751,
        bal: v3596,
        buyers: v4753,
        claimed: true,
        currentUserNumber: v4553,
        keepGoing: false,
        percent: v4757,
        raffleBal: v3597,
        winner: v4759
        };
      const v6920 = v4760;
      const v6922 = v3848;
      const v6923 = v4750;
      const v6924 = v3564;
      const v6925 = v4760.keepGoing;
      const v6926 = v4760.claimed;
      const v6927 = v6926 ? false : true;
      const v6928 = v6925 ? v6927 : false;
      if (v6928) {
        const v6929 = stdlib.ge(v3848, v3547);
        const v6930 = v4760.bal;
        const v6931 = v4760.raffleBal;
        const v6932 = v4750[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6933 = v6932[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v6935 = v4750[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v6936 = v6935[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        ;
        const v6937 = stdlib.sub(v6936, v6936);
        const v6938 = stdlib.Array_set(v6935, '0', v6937);
        const v6939 = stdlib.Array_set(v4750, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v6938);
        ;
        const v6940 = v6939[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
        const v6941 = v6940[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4827 = v3846[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5153 = v3846[1];
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
  
  
  const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3647 = ctc.selfAddress();
  const v3649 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v4.rsh:1:23:application',
    fs: ['at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v4.rsh:224:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3653 = v3556.winner;
  const v3654 = {
    None: 0,
    Some: 1
    }[v3653[0]];
  const v3655 = stdlib.eq(v3654, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3655, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v4.rsh:224:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_determinWinnerAfterDeadline'
    });
  stdlib.assert(v3586, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v4.rsh:224:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3659 = stdlib.addressEq(v3647, v3516);
  stdlib.assert(v3659, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v4.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_determinWinnerAfterDeadline0_273" (defined at: ./raffle_token_v4.rsh:224:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'You cannot perform this action',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v3666 = ['User_determinWinnerAfterDeadline0_273', v3649];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599, v3666],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:234:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:234:14:decimal', stdlib.UInt_max, '0'), v3507], [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:234:28:decimal', stdlib.UInt_max, '0'), v3513]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
      
      switch (v3846[0]) {
        case 'User_buyTicket0_273': {
          const v3849 = v3846[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4175 = v3846[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4501 = v3846[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4827 = v3846[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_determinWinnerAfterDeadline"
            });
          ;
          ;
          ;
          const v5089 = v4827[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:224:10:spread', stdlib.UInt_max, '0')];
          const v5102 = stdlib.safeMul(v3599, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:236:54:decimal', stdlib.UInt_max, '5'));
          const v5103 = stdlib.safeDiv(v5102, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:236:58:decimal', stdlib.UInt_max, '100'));
          const v5109 = stdlib.sub(v3599, v5103);
          const v5111 = stdlib.Array_set(v3598, '0', v5109);
          const v5112 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:237:41:application', stdlib.UInt_max, '0'), v5111);
          sim_r.txns.push({
            kind: 'from',
            to: v3516,
            tok: v3507
            });
          const v5113 = v5112[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:27:application', stdlib.UInt_max, '0')];
          const v5114 = v5113[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:27:application', stdlib.UInt_max, '0')];
          const v5120 = stdlib.sub(v5114, v5114);
          const v5122 = stdlib.Array_set(v5113, '0', v5120);
          const v5123 = stdlib.Array_set(v5112, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:49:application', stdlib.UInt_max, '0'), v5122);
          sim_r.txns.push({
            kind: 'from',
            to: v3506,
            tok: v3507
            });
          const v5124 = null;
          const v5125 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v5124', ctc0, v5124);
          
          const v5133 = v3556.buyers;
          const v5134 = v3556.claimed;
          const v5135 = v3556.currentUserNumber;
          const v5136 = v3556.keepGoing;
          const v5137 = v3556.percent;
          const v5140 = v5123[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:243:25:application', stdlib.UInt_max, '0')];
          const v5141 = v5140[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:243:25:application', stdlib.UInt_max, '0')];
          const v5142 = ['Some', v5089];
          const v5143 = {
            adminClaimed: true,
            bal: v5141,
            buyers: v5133,
            claimed: v5134,
            currentUserNumber: v5135,
            keepGoing: v5136,
            percent: v5137,
            raffleBal: v3597,
            winner: v5142
            };
          const v7052 = v5143;
          const v7054 = v3848;
          const v7055 = v5123;
          const v7056 = v3564;
          const v7057 = v5143.keepGoing;
          const v7058 = v5143.claimed;
          const v7059 = v7058 ? false : true;
          const v7060 = v7057 ? v7059 : false;
          if (v7060) {
            const v7062 = v5143.bal;
            const v7063 = v5143.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: undefined /* Nothing */
              });
            const v7069 = stdlib.sub(v5141, v5141);
            const v7070 = stdlib.Array_set(v5140, '0', v7069);
            const v7071 = stdlib.Array_set(v5123, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v7070);
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: v3507
              });
            const v7072 = v7071[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
            const v7073 = v7072[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3506,
              tok: v3513
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3513
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3507
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
          const v5153 = v3846[1];
          
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
  const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
  switch (v3846[0]) {
    case 'User_buyTicket0_273': {
      const v3849 = v3846[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4175 = v3846[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4501 = v3846[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4827 = v3846[1];
      undefined /* setApiDetails */;
      const v4894 = v3556.winner;
      const v4895 = {
        None: 0,
        Some: 1
        }[v4894[0]];
      const v4896 = stdlib.eq(v4895, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4896, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_determinWinnerAfterDeadline'
        });
      stdlib.assert(v3586, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v4900 = stdlib.addressEq(v3845, v3516);
      stdlib.assert(v4900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)', 'at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)'],
        msg: 'You cannot perform this action',
        who: 'User_determinWinnerAfterDeadline'
        });
      ;
      ;
      ;
      const v5089 = v4827[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:224:10:spread', stdlib.UInt_max, '0')];
      const v5095 = stdlib.ge(v3848, v3547);
      stdlib.assert(v5095, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v4.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v4.rsh:235:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:235:13:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v5102 = stdlib.safeMul(v3599, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:236:54:decimal', stdlib.UInt_max, '5'));
      const v5103 = stdlib.safeDiv(v5102, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:236:58:decimal', stdlib.UInt_max, '100'));
      const v5109 = stdlib.sub(v3599, v5103);
      const v5111 = stdlib.Array_set(v3598, '0', v5109);
      const v5112 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:237:41:application', stdlib.UInt_max, '0'), v5111);
      ;
      const v5113 = v5112[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:27:application', stdlib.UInt_max, '0')];
      const v5114 = v5113[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:27:application', stdlib.UInt_max, '0')];
      const v5120 = stdlib.sub(v5114, v5114);
      const v5122 = stdlib.Array_set(v5113, '0', v5120);
      const v5123 = stdlib.Array_set(v5112, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:238:49:application', stdlib.UInt_max, '0'), v5122);
      ;
      const v5124 = null;
      const v5125 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v5124', ctc0, v5124);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v4827, v5125), {
          at: './raffle_token_v4.rsh:224:11:application',
          fs: ['at ./raffle_token_v4.rsh:224:11:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:11:function exp)', 'at ./raffle_token_v4.rsh:239:12:application call to "k" (defined at: ./raffle_token_v4.rsh:235:13:function exp)', 'at ./raffle_token_v4.rsh:235:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:235:13:function exp)'],
          msg: 'out',
          who: 'User_determinWinnerAfterDeadline'
          });
        }
      else {
        }
      
      const v5133 = v3556.buyers;
      const v5134 = v3556.claimed;
      const v5135 = v3556.currentUserNumber;
      const v5136 = v3556.keepGoing;
      const v5137 = v3556.percent;
      const v5140 = v5123[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:243:25:application', stdlib.UInt_max, '0')];
      const v5141 = v5140[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:243:25:application', stdlib.UInt_max, '0')];
      const v5142 = ['Some', v5089];
      const v5143 = {
        adminClaimed: true,
        bal: v5141,
        buyers: v5133,
        claimed: v5134,
        currentUserNumber: v5135,
        keepGoing: v5136,
        percent: v5137,
        raffleBal: v3597,
        winner: v5142
        };
      const v7052 = v5143;
      const v7054 = v3848;
      const v7055 = v5123;
      const v7056 = v3564;
      const v7057 = v5143.keepGoing;
      const v7058 = v5143.claimed;
      const v7059 = v7058 ? false : true;
      const v7060 = v7057 ? v7059 : false;
      if (v7060) {
        const v7062 = v5143.bal;
        const v7063 = v5143.raffleBal;
        return;
        }
      else {
        ;
        const v7069 = stdlib.sub(v5141, v5141);
        const v7070 = stdlib.Array_set(v5140, '0', v7069);
        const v7071 = stdlib.Array_set(v5123, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v7070);
        ;
        const v7072 = v7071[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
        const v7073 = v7072[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_273': {
      const v5153 = v3846[1];
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
  
  
  const [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc5, ctc5, ctc3, ctc5, ctc2, ctc2, ctc5, ctc7, ctc5, ctc9, ctc5, ctc4, ctc5, ctc5, ctc8, ctc5]);
  const v3618 = stdlib.protect(ctc10, await interact.in(), {
    at: './raffle_token_v4.rsh:1:23:application',
    fs: ['at ./raffle_token_v4.rsh:187:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:187:26:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to "runUser_optin0_273" (defined at: ./raffle_token_v4.rsh:187:10:function exp)', 'at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v3622 = ['User_optin0_273', v3618];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3506, v3507, v3508, v3509, v3510, v3511, v3513, v3514, v3515, v3516, v3547, v3556, v3560, v3563, v3564, v3586, v3596, v3597, v3598, v3599, v3622],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:189:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:189:14:decimal', stdlib.UInt_max, '0'), v3507], [stdlib.checkedBigNumberify('./raffle_token_v4.rsh:189:28:decimal', stdlib.UInt_max, '0'), v3513]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
      
      switch (v3846[0]) {
        case 'User_buyTicket0_273': {
          const v3849 = v3846[1];
          
          break;
          }
        case 'User_claim0_273': {
          const v4175 = v3846[1];
          
          break;
          }
        case 'User_delete0_273': {
          const v4501 = v3846[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_273': {
          const v4827 = v3846[1];
          
          break;
          }
        case 'User_optin0_273': {
          const v5153 = v3846[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          ;
          const v5473 = null;
          const v5474 = await txn1.getOutput('User_optin', 'v5473', ctc0, v5473);
          
          const v7184 = v3556;
          const v7186 = v3848;
          const v7187 = v3563;
          const v7188 = v3564;
          const v7189 = v3556.keepGoing;
          const v7190 = v3556.claimed;
          const v7191 = v7190 ? false : true;
          const v7192 = v7189 ? v7191 : false;
          if (v7192) {
            const v7193 = stdlib.ge(v3848, v3547);
            const v7194 = v3556.bal;
            const v7195 = v3556.raffleBal;
            const v7196 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v7197 = v7196[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v7199 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            const v7200 = v7199[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: undefined /* Nothing */
              });
            const v7201 = stdlib.sub(v7200, v7200);
            const v7202 = stdlib.Array_set(v7199, '0', v7201);
            const v7203 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v7202);
            sim_r.txns.push({
              kind: 'from',
              to: v3516,
              tok: v3507
              });
            const v7204 = v7203[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
            const v7205 = v7204[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v3506,
              tok: v3513
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3513
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v3507
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
  const {data: [v3846], secs: v3848, time: v3847, didSend: v2812, from: v3845 } = txn1;
  switch (v3846[0]) {
    case 'User_buyTicket0_273': {
      const v3849 = v3846[1];
      return;
      break;
      }
    case 'User_claim0_273': {
      const v4175 = v3846[1];
      return;
      break;
      }
    case 'User_delete0_273': {
      const v4501 = v3846[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_273': {
      const v4827 = v3846[1];
      return;
      break;
      }
    case 'User_optin0_273': {
      const v5153 = v3846[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v5473 = null;
      const v5474 = await txn1.getOutput('User_optin', 'v5473', ctc0, v5473);
      if (v2812) {
        stdlib.protect(ctc0, await interact.out(v5153, v5474), {
          at: './raffle_token_v4.rsh:187:11:application',
          fs: ['at ./raffle_token_v4.rsh:187:11:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:187:11:function exp)', 'at ./raffle_token_v4.rsh:191:14:application call to "ret" (defined at: ./raffle_token_v4.rsh:190:15:function exp)', 'at ./raffle_token_v4.rsh:190:15:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:190:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v7184 = v3556;
      const v7186 = v3848;
      const v7187 = v3563;
      const v7188 = v3564;
      const v7189 = v3556.keepGoing;
      const v7190 = v3556.claimed;
      const v7191 = v7190 ? false : true;
      const v7192 = v7189 ? v7191 : false;
      if (v7192) {
        const v7193 = stdlib.ge(v3848, v3547);
        const v7194 = v3556.bal;
        const v7195 = v3556.raffleBal;
        const v7196 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v7197 = v7196[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v7199 = v3563[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        const v7200 = v7199[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:155:31:application', stdlib.UInt_max, '0')];
        ;
        const v7201 = stdlib.sub(v7200, v7200);
        const v7202 = stdlib.Array_set(v7199, '0', v7201);
        const v7203 = stdlib.Array_set(v3563, stdlib.checkedBigNumberify('./raffle_token_v4.rsh:306:41:application', stdlib.UInt_max, '0'), v7202);
        ;
        const v7204 = v7203[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '1')];
        const v7205 = v7204[stdlib.checkedBigNumberify('./raffle_token_v4.rsh:307:19:application', stdlib.UInt_max, '0')];
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
  appApproval: `CCAQAAEECAURKTE5oI0GEmQhIEFJJgQBAAEBAAECMRhBCGQqZEkiWzUBJVs1AihkKWRQK2RQghUEE25XOwQT7+94BBePUIYEGVleKQQn795sBCk3p/YEKWGf5AQ++WKaBEKz8R4EVGg/7QR5OSlTBHo2/gAEf5xxXwSCxJYGBKNB0cIEqaV4pgStudPfBMNv/m4E1oNbMgTf2SMoBOd3Hy42GgCOFQBuAEEBagBkB6wB3QBRACEA9wHKAOcBmgAxAAEBGwDCAJgA1QeRB6EBCQA0ASQSRIgIdDQXVwABNQQxGSISRIAEFR98dTQEULAjQzQBJBJEiAhUNA4WNQRC/980ASQSRIgIRDQYFjUEQv/PNAEkEkSICDQ0FRY1BEL/vzQBJBJEiAgkNBIWUQcINQRC/6w2GgE1CyJEQv+iNhoBNQs0ASQSRIgIAioqKDQLUL5JFlEHCEUETVAiVSMSFlEHCDUEQv94NAEkEkSIB900GxY0IRZQNB0WUDQaUDQfFlA0IBZRBwhQNBwWUDUEQv9ONAEkEkSIB7M0EkQ0HhY1BEL/OzQBJBJEiAegNBdXEgg1BEL/KTQBJBJEiAeONBwWNQRC/xk0ASQSRIgHfjQXVxEBNQRC/wc0ASQSRIgHbDQXVyshNQRC/vU2GgEXNQslryg0CxZQgRivUFA1CyQ0ARJEiAdGNAsiWzUMNAtXCCE1DYAE6itM0zQMFlA0DVCwNAyIB7M0DSJVjQUGcAZzBnYGeQZ8Qv6WgCkAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv+VgCkAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9lNhoBNQslr4ABAzQLUFA1C0L/UoApAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/IjQNI1s1CzQVNBgMRDQLIw9ENAs0HQtJNQ00IYgG8zEANAsWUDUMgAT4WMgANAxQsCM1DIAIAAAAAAAAD5I0DBZRBwhQsDQMFlEHCDUENBdXAAE0ETQNCBZQNBeBCVsjCBZQNBdXEQFQNBchCls0CwgWUDQXVxoBUDQXVxsIUDQQFlA0F1crIVAyBjIHNBQ0DzQONA0IFlwAXAA1FDUVNRY1FzQXVxoBFzQXVxEBFxQQQQUmNBU0GA81EjQXI1s1ETQXgSNbNRA0FFcAEUk1DyJbNQ40IjQhFlA0IBZRBwhQNB8WUDQeFlA0HRZQNBwWUDQbFlA0GlA0GVA0GBZQNBdQNBUWUDQUUDQTFlA0EhZRBwhQNBEWUDQQFlA0D1A0DhZQJDIGNQI1AShLAVcAf2cpSwFXf39nK0xX/kNnKjQBFjQCFlBnMRkiEkSIBgE0A0D8v0L8sjQXVyshSTULIlUjEkQ0EkQ0FFcREUk1DSJbNQw0EDQMDkQ0IjQLSVcBAEwiVU1JNQ8xABJEMgc0GA9ENBQ0DTQMSQkWXABcETUONAw0HDQPiAVMNA5XABFJNRAiW0k1D0khBAshCwoJNQ00DjQQNA80DQkWXABcADUMNA00ITQiiAUcIzUNgAgAAAAAAAARGzQNFlEHCFCwNA0WUQcINQQpNAxXABFXAAhQNBdXCQhQKVA0F1cSCFAoUDQXVxsIUCWvUDQLUDIGMgc0DDUUNRU1FjUXQv51MQA0IhIxADQZEhFENBJENBchCltJNQ4iEkQ0FFcREUk1DSJbNQwjNQuACAAAAAAAABJ+NAsWUQcIULA0CxZRBwg1BDQMNBw0IogEfDQXVwABNBEWUDQXVwkIUClQNA4WUChQNBdXGwhQNBAWUDQXVyshUDIGMgc0FDQNNAxJCRZcAFwRNRQ1FTUWNRdC/eY0F1crISJVIhJENBJEMQA0GRJEMgc0GA9ENA4hBAshCwo1DDQUNA80DjQMCRZcAFwANQs0DDQhNBmIA/00C1cAEUk1DyJbNQ40CzQPNA5JCRZcAFwANQw0DjQhNCKIA9kqNQuACAAAAAAAABQENAtQsDQLNQQpNAxXABFXAAhQNBdXCQhQNBdXEQFQNBdXEghQNBdXGgFQNBdXGwhQNBAWUCk0DVcBIFBQMgYyBzQMNRQ1FTUWNRdC/SwqNQuACAAAAAAAABVhNAtQsDQLNQQyBjIHNRU1FkL9DDEANSI0CyJbNQ00CyVbNSE0C1cQARc1IDQLIQVbNR80C4EZWzUeNAshDFs1HTQLIQZbNQw0CyEHWzUcNAshCFs1GzQLV0EgNRo0C1dhIDUZgATWNZi7NA0WUDQhFlA0IBZRBwhQNB8WUDQeFlA0HRZQNAwWUDQcFlA0GxZQNBpQNBlQsDQNiALeIQWvSTULSVBJNQ1JVwARJa9cAFwASTULSVcRESWvXABcETUONBw0IRNENB2B////////////AQxENB0jD0QhCYgCpSI0ITIKiAKLIQmIApgiNBwyCogCfjQiNCEWUDQgFlEHCFA0HxZQNB4WUDQdFlA0DBZQNBwWUDQbFlA0GlA0GVA0DlCBhgGvUCMyBkL8dSM0ARJESVcAIDUiSSENWzUhSVcoARc1IEkhBls1H0khB1s1HkkhCFs1HUkhDls1DEkhD1s1HEmBUVs1G0lXWSA1GklXeSA1GVeZIjUONAsXNQ2ABNUVGRQ0DRZQsDQNiAHrNAyIAhw0DlcRETUNNA40DUkiWzQbCBZcAFwRNQs0GzQciAHbNCIxABJEMgc0Hwg1GCg0C1cAEVcACFAlr1AoUCWvUClQgAgAAAAAAAAABVA0C1cREVcACFAhDK9QMgYyBzQLNAw1EzUUNRU1FjUXQvseiAFyIQmIAXs2GgE1C0L+AogBYjYaATULQv8RiAFXNhoBNQtC+XgiMTQSRCQxNRJEIjE2EkQiMTcSRIgBOIHBAq8iIkL7W0L6M0L7hkL8WkL85kL9nTQUVwARSTUMIls1CzQTNBmIASE0CzQhNBmIAQA0FDQMNAtJCRZcAFwAVxERIls0HDQiiADnIjQcMgoyCYgBQyI0ITIKMgmIATkxGSEEEkSIASQyCmAyCngJSTUGMgqIANNC+xEisgEjshCyB7IIs4kisgEkshCyFLIRshKziUiJTAlJNQYyCYgAqokJSUH/7kk1BogAxIlJVwAgNSJJIQ1bNSFJVygBFzUgSSEGWzUfSSEHWzUeSSEIWzUdSSEOWzUcSSEPWzUbSVdRIDUaSVdxIDUZSYGRAVs1GElXmUw1F0mB5QFbNRVJV+0iNRRJgY8CWzUTSYGXAiNYFzUSSYGYAls1EUmBoAJbNRBJgagCIQVYNQ+BuQJbNQ6JsUL/UCM1A4lJIhJMNAISEUSJNAYINQaJsUL/LDEWNAAjCEk1AAlHAzgUMgoSRDgQJBJEOBFPAhJEOBISRIkxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJNAY0B0oPQf8BQv8JsbIVQv7o`,
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
    1317: `751`,
    1318: `752`,
    1319: `752`,
    132: `24`,
    1320: `752`,
    1321: `753`,
    1322: `754`,
    1323: `754`,
    1324: `755`,
    1325: `756`,
    1326: `757`,
    1327: `757`,
    1328: `758`,
    1329: `759`,
    133: `24`,
    1330: `759`,
    1331: `760`,
    1332: `760`,
    1333: `760`,
    1334: `760`,
    1335: `760`,
    1336: `760`,
    1337: `760`,
    1338: `760`,
    1339: `760`,
    134: `24`,
    1340: `760`,
    1341: `761`,
    1342: `761`,
    1343: `762`,
    1344: `763`,
    1345: `763`,
    1346: `763`,
    1347: `764`,
    1348: `765`,
    1349: `766`,
    135: `24`,
    1350: `766`,
    1351: `767`,
    1352: `768`,
    1353: `768`,
    1354: `768`,
    1355: `769`,
    1356: `769`,
    1357: `770`,
    1358: `770`,
    1359: `772`,
    136: `24`,
    1360: `772`,
    1361: `774`,
    1362: `774`,
    1363: `775`,
    1364: `775`,
    1365: `775`,
    1366: `776`,
    1367: `776`,
    1368: `777`,
    1369: `777`,
    137: `24`,
    1370: `777`,
    1371: `778`,
    1372: `778`,
    1373: `779`,
    1374: `780`,
    1375: `781`,
    1376: `781`,
    1377: `782`,
    1378: `782`,
    1379: `782`,
    138: `24`,
    1380: `783`,
    1381: `784`,
    1382: `785`,
    1383: `786`,
    1384: `786`,
    1385: `787`,
    1386: `788`,
    1387: `789`,
    1388: `790`,
    1389: `791`,
    139: `24`,
    1390: `791`,
    1391: `792`,
    1392: `792`,
    1393: `792`,
    1394: `793`,
    1395: `794`,
    1396: `794`,
    1397: `795`,
    1398: `796`,
    1399: `797`,
    14: `2`,
    140: `24`,
    1400: `797`,
    1401: `798`,
    1402: `798`,
    1403: `798`,
    1404: `799`,
    1405: `800`,
    1406: `800`,
    1407: `801`,
    1408: `801`,
    1409: `802`,
    141: `24`,
    1410: `802`,
    1411: `803`,
    1412: `803`,
    1413: `804`,
    1414: `804`,
    1415: `805`,
    1416: `806`,
    1417: `807`,
    1418: `808`,
    1419: `808`,
    142: `24`,
    1420: `809`,
    1421: `809`,
    1422: `810`,
    1423: `810`,
    1424: `811`,
    1425: `811`,
    1426: `812`,
    1427: `812`,
    1428: `813`,
    1429: `813`,
    143: `24`,
    1430: `814`,
    1431: `814`,
    1432: `814`,
    1433: `816`,
    1434: `816`,
    1435: `817`,
    1436: `817`,
    1437: `817`,
    1438: `818`,
    1439: `819`,
    144: `24`,
    1440: `820`,
    1441: `821`,
    1442: `822`,
    1443: `830`,
    1444: `830`,
    1445: `831`,
    1446: `839`,
    1447: `839`,
    1448: `840`,
    1449: `840`,
    145: `24`,
    1450: `841`,
    1451: `842`,
    1452: `850`,
    1453: `850`,
    1454: `851`,
    1455: `851`,
    1456: `852`,
    1457: `853`,
    1458: `858`,
    1459: `858`,
    146: `24`,
    1460: `859`,
    1461: `859`,
    1462: `860`,
    1463: `861`,
    1464: `861`,
    1465: `862`,
    1466: `863`,
    1467: `863`,
    1468: `864`,
    1469: `864`,
    147: `24`,
    1470: `865`,
    1471: `865`,
    1472: `866`,
    1473: `866`,
    1474: `867`,
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
    1486: `875`,
    1487: `875`,
    1488: `877`,
    1489: `877`,
    149: `24`,
    1490: `878`,
    1491: `878`,
    1492: `878`,
    1493: `879`,
    1494: `879`,
    1495: `880`,
    1496: `880`,
    1497: `880`,
    1498: `881`,
    1499: `882`,
    15: `2`,
    150: `24`,
    1500: `882`,
    1501: `883`,
    1502: `884`,
    1503: `885`,
    1504: `885`,
    1505: `886`,
    1506: `886`,
    1507: `887`,
    1508: `887`,
    1509: `888`,
    151: `24`,
    1510: `888`,
    1511: `889`,
    1512: `890`,
    1513: `891`,
    1514: `892`,
    1515: `892`,
    1516: `893`,
    1517: `893`,
    1518: `894`,
    1519: `894`,
    152: `24`,
    1520: `895`,
    1521: `895`,
    1522: `896`,
    1523: `896`,
    1524: `898`,
    1525: `898`,
    1526: `899`,
    1527: `899`,
    1528: `899`,
    1529: `900`,
    153: `24`,
    1530: `901`,
    1531: `901`,
    1532: `902`,
    1533: `902`,
    1534: `902`,
    1535: `902`,
    1536: `902`,
    1537: `902`,
    1538: `902`,
    1539: `902`,
    154: `24`,
    1540: `902`,
    1541: `902`,
    1542: `903`,
    1543: `903`,
    1544: `904`,
    1545: `905`,
    1546: `906`,
    1547: `906`,
    1548: `907`,
    1549: `907`,
    155: `24`,
    1550: `908`,
    1551: `909`,
    1552: `909`,
    1553: `910`,
    1554: `910`,
    1555: `910`,
    1556: `911`,
    1557: `911`,
    1558: `911`,
    1559: `912`,
    156: `24`,
    1560: `913`,
    1561: `913`,
    1562: `914`,
    1563: `914`,
    1564: `914`,
    1565: `915`,
    1566: `916`,
    1567: `916`,
    1568: `917`,
    1569: `917`,
    157: `24`,
    1570: `917`,
    1571: `918`,
    1572: `919`,
    1573: `919`,
    1574: `920`,
    1575: `920`,
    1576: `920`,
    1577: `921`,
    1578: `922`,
    1579: `922`,
    158: `24`,
    1580: `923`,
    1581: `923`,
    1582: `923`,
    1583: `924`,
    1584: `925`,
    1585: `925`,
    1586: `926`,
    1587: `926`,
    1588: `926`,
    1589: `927`,
    159: `24`,
    1590: `928`,
    1591: `928`,
    1592: `929`,
    1593: `930`,
    1594: `931`,
    1595: `932`,
    1596: `932`,
    1597: `933`,
    1598: `933`,
    1599: `933`,
    16: `2`,
    160: `24`,
    1600: `934`,
    1601: `935`,
    1602: `936`,
    1603: `936`,
    1604: `937`,
    1605: `937`,
    1606: `938`,
    1607: `938`,
    1608: `939`,
    1609: `939`,
    161: `25`,
    1610: `940`,
    1611: `940`,
    1612: `941`,
    1613: `941`,
    1614: `942`,
    1615: `942`,
    1616: `943`,
    1617: `943`,
    1618: `943`,
    1619: `945`,
    162: `25`,
    1620: `946`,
    1621: `946`,
    1622: `947`,
    1623: `947`,
    1624: `947`,
    1625: `947`,
    1626: `947`,
    1627: `947`,
    1628: `947`,
    1629: `947`,
    163: `25`,
    1630: `947`,
    1631: `947`,
    1632: `948`,
    1633: `948`,
    1634: `949`,
    1635: `950`,
    1636: `951`,
    1637: `951`,
    1638: `952`,
    1639: `952`,
    164: `26`,
    1640: `953`,
    1641: `953`,
    1642: `954`,
    1643: `954`,
    1644: `955`,
    1645: `955`,
    1646: `956`,
    1647: `956`,
    1648: `957`,
    1649: `957`,
    165: `26`,
    1650: `957`,
    1651: `959`,
    1652: `959`,
    1653: `960`,
    1654: `960`,
    1655: `961`,
    1656: `961`,
    1657: `962`,
    1658: `963`,
    1659: `964`,
    166: `26`,
    1660: `964`,
    1661: `965`,
    1662: `965`,
    1663: `966`,
    1664: `967`,
    1665: `968`,
    1666: `968`,
    1667: `969`,
    1668: `969`,
    1669: `970`,
    167: `26`,
    1670: `970`,
    1671: `970`,
    1672: `971`,
    1673: `972`,
    1674: `972`,
    1675: `973`,
    1676: `973`,
    1677: `974`,
    1678: `974`,
    1679: `975`,
    168: `26`,
    1680: `976`,
    1681: `976`,
    1682: `977`,
    1683: `977`,
    1684: `978`,
    1685: `978`,
    1686: `979`,
    1687: `980`,
    1688: `980`,
    1689: `981`,
    169: `26`,
    1690: `981`,
    1691: `982`,
    1692: `982`,
    1693: `983`,
    1694: `984`,
    1695: `984`,
    1696: `985`,
    1697: `985`,
    1698: `986`,
    1699: `986`,
    17: `2`,
    170: `26`,
    1700: `987`,
    1701: `988`,
    1702: `988`,
    1703: `989`,
    1704: `989`,
    1705: `990`,
    1706: `990`,
    1707: `991`,
    1708: `992`,
    1709: `992`,
    171: `26`,
    1710: `993`,
    1711: `993`,
    1712: `994`,
    1713: `994`,
    1714: `995`,
    1715: `996`,
    1716: `996`,
    1717: `997`,
    1718: `997`,
    1719: `998`,
    172: `26`,
    1720: `998`,
    1721: `998`,
    1722: `999`,
    1723: `999`,
    1724: `1000`,
    1725: `1000`,
    1726: `1001`,
    1727: `1001`,
    1728: `1001`,
    1729: `1002`,
    173: `26`,
    1730: `1002`,
    1731: `1003`,
    1732: `1003`,
    1733: `1003`,
    1734: `1003`,
    1735: `1003`,
    1736: `1003`,
    1737: `1004`,
    1738: `1004`,
    1739: `1005`,
    174: `26`,
    1740: `1006`,
    1741: `1007`,
    1742: `1007`,
    1743: `1008`,
    1744: `1009`,
    1745: `1010`,
    1746: `1010`,
    1747: `1011`,
    1748: `1012`,
    1749: `1012`,
    175: `26`,
    1750: `1012`,
    1751: `1013`,
    1752: `1014`,
    1753: `1014`,
    1754: `1015`,
    1755: `1016`,
    1756: `1017`,
    1757: `1017`,
    1758: `1018`,
    1759: `1019`,
    176: `26`,
    1760: `1020`,
    1761: `1020`,
    1762: `1021`,
    1763: `1022`,
    1764: `1023`,
    1765: `1023`,
    1766: `1024`,
    1767: `1025`,
    1768: `1026`,
    1769: `1026`,
    177: `26`,
    1770: `1027`,
    1771: `1028`,
    1772: `1029`,
    1773: `1029`,
    1774: `1030`,
    1775: `1031`,
    1776: `1032`,
    1777: `1032`,
    1778: `1033`,
    1779: `1034`,
    178: `26`,
    1780: `1034`,
    1781: `1035`,
    1782: `1036`,
    1783: `1038`,
    1784: `1038`,
    1785: `1039`,
    1786: `1039`,
    1787: `1039`,
    1788: `1040`,
    1789: `1040`,
    179: `26`,
    1790: `1041`,
    1791: `1042`,
    1792: `1043`,
    1793: `1043`,
    1794: `1044`,
    1795: `1045`,
    1796: `1046`,
    1797: `1047`,
    1798: `1047`,
    1799: `1048`,
    18: `2`,
    180: `26`,
    1800: `1049`,
    1801: `1049`,
    1802: `1049`,
    1803: `1050`,
    1804: `1051`,
    1805: `1052`,
    1806: `1052`,
    1807: `1053`,
    1808: `1053`,
    1809: `1054`,
    181: `26`,
    1810: `1055`,
    1811: `1055`,
    1812: `1056`,
    1813: `1057`,
    1814: `1057`,
    1815: `1057`,
    1816: `1058`,
    1817: `1059`,
    1818: `1060`,
    1819: `1060`,
    182: `26`,
    1820: `1061`,
    1821: `1061`,
    1822: `1062`,
    1823: `1062`,
    1824: `1063`,
    1825: `1063`,
    1826: `1064`,
    1827: `1064`,
    1828: `1065`,
    1829: `1066`,
    183: `26`,
    1830: `1069`,
    1831: `1069`,
    1832: `1070`,
    1833: `1070`,
    1834: `1070`,
    1835: `1070`,
    1836: `1070`,
    1837: `1070`,
    1838: `1070`,
    1839: `1070`,
    184: `26`,
    1840: `1070`,
    1841: `1070`,
    1842: `1070`,
    1843: `1071`,
    1844: `1072`,
    1845: `1076`,
    1846: `1076`,
    1847: `1077`,
    1848: `1078`,
    1849: `1079`,
    185: `26`,
    1850: `1083`,
    1851: `1083`,
    1852: `1084`,
    1853: `1084`,
    1854: `1084`,
    1855: `1085`,
    1856: `1087`,
    1857: `1087`,
    1858: `1088`,
    1859: `1088`,
    186: `26`,
    1860: `1089`,
    1861: `1089`,
    1862: `1089`,
    1863: `1090`,
    1864: `1090`,
    1865: `1091`,
    1866: `1091`,
    1867: `1091`,
    1868: `1092`,
    1869: `1094`,
    187: `26`,
    1870: `1094`,
    1871: `1095`,
    1872: `1095`,
    1873: `1096`,
    1874: `1096`,
    1875: `1096`,
    1876: `1098`,
    1877: `1098`,
    1878: `1099`,
    1879: `1099`,
    188: `26`,
    1880: `1100`,
    1881: `1101`,
    1882: `1102`,
    1883: `1102`,
    1884: `1103`,
    1885: `1104`,
    1886: `1104`,
    1887: `1104`,
    1888: `1105`,
    1889: `1106`,
    189: `26`,
    1890: `1106`,
    1891: `1107`,
    1892: `1108`,
    1893: `1109`,
    1894: `1109`,
    1895: `1110`,
    1896: `1111`,
    1897: `1112`,
    1898: `1112`,
    1899: `1113`,
    19: `2`,
    190: `26`,
    1900: `1114`,
    1901: `1115`,
    1902: `1115`,
    1903: `1116`,
    1904: `1117`,
    1905: `1118`,
    1906: `1118`,
    1907: `1119`,
    1908: `1120`,
    1909: `1121`,
    191: `26`,
    1910: `1121`,
    1911: `1122`,
    1912: `1123`,
    1913: `1124`,
    1914: `1124`,
    1915: `1125`,
    1916: `1126`,
    1917: `1126`,
    1918: `1127`,
    1919: `1128`,
    192: `26`,
    1920: `1128`,
    1921: `1129`,
    1922: `1130`,
    1923: `1130`,
    1924: `1130`,
    1925: `1131`,
    1926: `1132`,
    1927: `1133`,
    1928: `1134`,
    1929: `1134`,
    193: `26`,
    1930: `1135`,
    1931: `1135`,
    1932: `1135`,
    1933: `1137`,
    1934: `1138`,
    1935: `1138`,
    1936: `1139`,
    1937: `1140`,
    1938: `1142`,
    1939: `1143`,
    194: `26`,
    1940: `1143`,
    1941: `1143`,
    1942: `1144`,
    1943: `1144`,
    1944: `1145`,
    1945: `1146`,
    1946: `1146`,
    1947: `1147`,
    1948: `1148`,
    1949: `1148`,
    195: `26`,
    1950: `1149`,
    1951: `1150`,
    1952: `1150`,
    1953: `1150`,
    1954: `1151`,
    1955: `1152`,
    1956: `1152`,
    1957: `1153`,
    1958: `1154`,
    1959: `1154`,
    196: `26`,
    1960: `1155`,
    1961: `1156`,
    1962: `1156`,
    1963: `1157`,
    1964: `1158`,
    1965: `1158`,
    1966: `1159`,
    1967: `1160`,
    1968: `1160`,
    1969: `1161`,
    197: `26`,
    1970: `1162`,
    1971: `1162`,
    1972: `1163`,
    1973: `1164`,
    1974: `1164`,
    1975: `1165`,
    1976: `1166`,
    1977: `1166`,
    1978: `1167`,
    1979: `1168`,
    198: `26`,
    1980: `1168`,
    1981: `1169`,
    1982: `1170`,
    1983: `1170`,
    1984: `1171`,
    1985: `1172`,
    1986: `1172`,
    1987: `1173`,
    1988: `1174`,
    1989: `1174`,
    199: `26`,
    1990: `1175`,
    1991: `1176`,
    1992: `1176`,
    1993: `1177`,
    1994: `1178`,
    1995: `1178`,
    1996: `1178`,
    1997: `1179`,
    1998: `1179`,
    1999: `1180`,
    2: `2`,
    20: `2`,
    200: `26`,
    2000: `1181`,
    2001: `1181`,
    2002: `1181`,
    2003: `1182`,
    2004: `1182`,
    2005: `1183`,
    2006: `1183`,
    2007: `1183`,
    2008: `1184`,
    2009: `1184`,
    201: `26`,
    2010: `1185`,
    2011: `1185`,
    2012: `1186`,
    2013: `1187`,
    2014: `1187`,
    2015: `1188`,
    2016: `1188`,
    2017: `1188`,
    2018: `1188`,
    2019: `1188`,
    202: `26`,
    2020: `1188`,
    2021: `1189`,
    2022: `1189`,
    2023: `1190`,
    2024: `1191`,
    2025: `1192`,
    2026: `1194`,
    2027: `1194`,
    2028: `1195`,
    2029: `1195`,
    203: `26`,
    2030: `1195`,
    2031: `1196`,
    2032: `1196`,
    2033: `1197`,
    2034: `1197`,
    2035: `1197`,
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
    2045: `1204`,
    2046: `1204`,
    2047: `1205`,
    2048: `1206`,
    2049: `1207`,
    205: `26`,
    2050: `1208`,
    2051: `1208`,
    2052: `1209`,
    2053: `1210`,
    2054: `1211`,
    2055: `1211`,
    2056: `1212`,
    2057: `1212`,
    2058: `1213`,
    2059: `1213`,
    206: `26`,
    2060: `1214`,
    2061: `1214`,
    2062: `1215`,
    2063: `1215`,
    2064: `1216`,
    2065: `1216`,
    2066: `1216`,
    2067: `1219`,
    2068: `1219`,
    2069: `1220`,
    207: `26`,
    2070: `1220`,
    2071: `1221`,
    2072: `1222`,
    2073: `1225`,
    2074: `1225`,
    2075: `1226`,
    2076: `1226`,
    2077: `1227`,
    2078: `1228`,
    2079: `1228`,
    208: `28`,
    2080: `1229`,
    2081: `1230`,
    2082: `1230`,
    2083: `1231`,
    2084: `1231`,
    2085: `1231`,
    2086: `1232`,
    2087: `1232`,
    2088: `1232`,
    2089: `1233`,
    209: `31`,
    2090: `1234`,
    2091: `1235`,
    2092: `1236`,
    2093: `1237`,
    2094: `1238`,
    2095: `1239`,
    2096: `1240`,
    2097: `1241`,
    2098: `1242`,
    2099: `1243`,
    21: `2`,
    210: `31`,
    2100: `1244`,
    2101: `1244`,
    2102: `1244`,
    2103: `1244`,
    2104: `1244`,
    2105: `1244`,
    2106: `1244`,
    2107: `1244`,
    2108: `1244`,
    2109: `1244`,
    211: `32`,
    2110: `1245`,
    2111: `1246`,
    2112: `1246`,
    2113: `1247`,
    2114: `1247`,
    2115: `1247`,
    2116: `1248`,
    2117: `1248`,
    2118: `1248`,
    2119: `1249`,
    212: `33`,
    2120: `1250`,
    2121: `1250`,
    2122: `1251`,
    2123: `1252`,
    2124: `1253`,
    2125: `1253`,
    2126: `1254`,
    2127: `1254`,
    2128: `1255`,
    2129: `1255`,
    213: `34`,
    2130: `1256`,
    2131: `1256`,
    2132: `1257`,
    2133: `1257`,
    2134: `1258`,
    2135: `1258`,
    2136: `1259`,
    2137: `1259`,
    2138: `1260`,
    2139: `1260`,
    214: `37`,
    2140: `1261`,
    2141: `1261`,
    2142: `1262`,
    2143: `1262`,
    2144: `1262`,
    2145: `1264`,
    2146: `1264`,
    2147: `1264`,
    2148: `1265`,
    2149: `1265`,
    215: `37`,
    2150: `1266`,
    2151: `1266`,
    2152: `1266`,
    2153: `1267`,
    2154: `1267`,
    2155: `1267`,
    2156: `1268`,
    2157: `1268`,
    2158: `1269`,
    2159: `1269`,
    216: `37`,
    2160: `1269`,
    2161: `1271`,
    2162: `1271`,
    2163: `1271`,
    2164: `1272`,
    2165: `1272`,
    2166: `1272`,
    2167: `1273`,
    2168: `1273`,
    2169: `1274`,
    217: `38`,
    2170: `1274`,
    2171: `1274`,
    2172: `1276`,
    2173: `1276`,
    2174: `1276`,
    2175: `1277`,
    2176: `1277`,
    2177: `1277`,
    2178: `1278`,
    2179: `1278`,
    218: `38`,
    2180: `1279`,
    2181: `1279`,
    2182: `1279`,
    2183: `1281`,
    2184: `1282`,
    2185: `1282`,
    2186: `1283`,
    2187: `1284`,
    2188: `1285`,
    2189: `1286`,
    219: `39`,
    2190: `1286`,
    2191: `1287`,
    2192: `1288`,
    2193: `1289`,
    2194: `1290`,
    2195: `1290`,
    2196: `1291`,
    2197: `1292`,
    2198: `1293`,
    2199: `1294`,
    22: `2`,
    220: `39`,
    2200: `1294`,
    2201: `1295`,
    2202: `1296`,
    2203: `1297`,
    2204: `1297`,
    2205: `1297`,
    2206: `1298`,
    2207: `1298`,
    2208: `1298`,
    2209: `1299`,
    221: `39`,
    2210: `1300`,
    2211: `1301`,
    2212: `1302`,
    2213: `1302`,
    2214: `1302`,
    2215: `1304`,
    2216: `1304`,
    2217: `1304`,
    2218: `1306`,
    2219: `1306`,
    222: `40`,
    2220: `1306`,
    2221: `1308`,
    2222: `1308`,
    2223: `1308`,
    2224: `1310`,
    2225: `1310`,
    2226: `1310`,
    2227: `1312`,
    2228: `1312`,
    2229: `1312`,
    223: `40`,
    2230: `1314`,
    2231: `1314`,
    2232: `1315`,
    2233: `1315`,
    2234: `1315`,
    2235: `1316`,
    2236: `1317`,
    2237: `1317`,
    2238: `1318`,
    2239: `1319`,
    224: `42`,
    2240: `1320`,
    2241: `1320`,
    2242: `1321`,
    2243: `1321`,
    2244: `1323`,
    2245: `1323`,
    2246: `1324`,
    2247: `1324`,
    2248: `1324`,
    2249: `1325`,
    225: `42`,
    2250: `1325`,
    2251: `1327`,
    2252: `1327`,
    2253: `1328`,
    2254: `1328`,
    2255: `1329`,
    2256: `1329`,
    2257: `1329`,
    2258: `1330`,
    2259: `1330`,
    226: `43`,
    2260: `1331`,
    2261: `1331`,
    2262: `1332`,
    2263: `1332`,
    2264: `1333`,
    2265: `1334`,
    2266: `1335`,
    2267: `1336`,
    2268: `1336`,
    2269: `1337`,
    227: `44`,
    2270: `1337`,
    2271: `1338`,
    2272: `1338`,
    2273: `1338`,
    2274: `1339`,
    2275: `1340`,
    2276: `1342`,
    2277: `1342`,
    2278: `1344`,
    2279: `1344`,
    228: `45`,
    2280: `1345`,
    2281: `1345`,
    2282: `1345`,
    2283: `1347`,
    2284: `1348`,
    2285: `1348`,
    2286: `1349`,
    2287: `1349`,
    2288: `1350`,
    2289: `1350`,
    229: `48`,
    2290: `1351`,
    2291: `1351`,
    2292: `1351`,
    2293: `1352`,
    2294: `1353`,
    2295: `1353`,
    2296: `1354`,
    2297: `1354`,
    2298: `1355`,
    2299: `1355`,
    23: `2`,
    230: `48`,
    2300: `1356`,
    2301: `1356`,
    2302: `1356`,
    2303: `1358`,
    2304: `1358`,
    2305: `1359`,
    2306: `1359`,
    2307: `1360`,
    2308: `1361`,
    2309: `1363`,
    231: `48`,
    2310: `1363`,
    2311: `1363`,
    2312: `1365`,
    2313: `1365`,
    2314: `1366`,
    2315: `1367`,
    2316: `1367`,
    2317: `1368`,
    2318: `1369`,
    2319: `1371`,
    232: `48`,
    2320: `1372`,
    2321: `1372`,
    2322: `1373`,
    2323: `1373`,
    2324: `1374`,
    2325: `1374`,
    2326: `1374`,
    2327: `1375`,
    2328: `1375`,
    2329: `1375`,
    233: `48`,
    2330: `1377`,
    2331: `1378`,
    2332: `1378`,
    2333: `1379`,
    2334: `1380`,
    2335: `1380`,
    2336: `1381`,
    2337: `1381`,
    2338: `1382`,
    2339: `1382`,
    234: `48`,
    2340: `1383`,
    2341: `1384`,
    2342: `1386`,
    2343: `1387`,
    2344: `1387`,
    2345: `1388`,
    2346: `1389`,
    2347: `1389`,
    2348: `1390`,
    2349: `1390`,
    235: `49`,
    2350: `1391`,
    2351: `1391`,
    2352: `1392`,
    2353: `1392`,
    2354: `1393`,
    2355: `1394`,
    2356: `1396`,
    2357: `1397`,
    2358: `1399`,
    2359: `1400`,
    236: `49`,
    2360: `1401`,
    2361: `1402`,
    2362: `1402`,
    2363: `1403`,
    2364: `1403`,
    2365: `1404`,
    2366: `1404`,
    2367: `1404`,
    2368: `1405`,
    2369: `1407`,
    237: `50`,
    2370: `1408`,
    2371: `1409`,
    2372: `1409`,
    2373: `1409`,
    2374: `1410`,
    2375: `1411`,
    2376: `1411`,
    2377: `1412`,
    2378: `1412`,
    2379: `1412`,
    238: `51`,
    2380: `1413`,
    2381: `1415`,
    2382: `1416`,
    2383: `1416`,
    2384: `1416`,
    2385: `1417`,
    2386: `1417`,
    2387: `1418`,
    2388: `1419`,
    2389: `1419`,
    239: `53`,
    2390: `1420`,
    2391: `1421`,
    2392: `1421`,
    2393: `1422`,
    2394: `1423`,
    2395: `1423`,
    2396: `1423`,
    2397: `1424`,
    2398: `1425`,
    2399: `1425`,
    24: `2`,
    240: `54`,
    2400: `1426`,
    2401: `1427`,
    2402: `1427`,
    2403: `1428`,
    2404: `1429`,
    2405: `1429`,
    2406: `1430`,
    2407: `1431`,
    2408: `1431`,
    2409: `1432`,
    241: `57`,
    2410: `1433`,
    2411: `1433`,
    2412: `1434`,
    2413: `1435`,
    2414: `1435`,
    2415: `1436`,
    2416: `1437`,
    2417: `1437`,
    2418: `1438`,
    2419: `1439`,
    242: `57`,
    2420: `1439`,
    2421: `1440`,
    2422: `1441`,
    2423: `1441`,
    2424: `1442`,
    2425: `1443`,
    2426: `1443`,
    2427: `1444`,
    2428: `1445`,
    2429: `1445`,
    243: `58`,
    2430: `1446`,
    2431: `1447`,
    2432: `1447`,
    2433: `1447`,
    2434: `1448`,
    2435: `1448`,
    2436: `1449`,
    2437: `1450`,
    2438: `1450`,
    2439: `1450`,
    244: `59`,
    2440: `1451`,
    2441: `1451`,
    2442: `1452`,
    2443: `1453`,
    2444: `1453`,
    2445: `1453`,
    2446: `1454`,
    2447: `1455`,
    2448: `1455`,
    2449: `1456`,
    245: `60`,
    2450: `1457`,
    2451: `1457`,
    2452: `1457`,
    2453: `1458`,
    2454: `1458`,
    2455: `1459`,
    2456: `1460`,
    2457: `1460`,
    2458: `1460`,
    2459: `1461`,
    246: `63`,
    2460: `1462`,
    2461: `1462`,
    2462: `1463`,
    2463: `1464`,
    2464: `1464`,
    2465: `1464`,
    2466: `1465`,
    2467: `1465`,
    2468: `1466`,
    2469: `1467`,
    247: `63`,
    2470: `1467`,
    2471: `1467`,
    2472: `1468`,
    2473: `1469`,
    2474: `1469`,
    2475: `1470`,
    2476: `1471`,
    2477: `1471`,
    2478: `1471`,
    2479: `1472`,
    248: `63`,
    2480: `1473`,
    2481: `1474`,
    2482: `1475`,
    2483: `1475`,
    2484: `1476`,
    2485: `1477`,
    2486: `1477`,
    2487: `1477`,
    2488: `1478`,
    2489: `1479`,
    249: `64`,
    2490: `1479`,
    2491: `1480`,
    2492: `1481`,
    2493: `1481`,
    2494: `1481`,
    2495: `1482`,
    2496: `1483`,
    2497: `1483`,
    2498: `1484`,
    2499: `1485`,
    25: `2`,
    250: `64`,
    2500: `1485`,
    2501: `1485`,
    2502: `1486`,
    2503: `1486`,
    2504: `1487`,
    2505: `1488`,
    2506: `1488`,
    2507: `1489`,
    2508: `1489`,
    2509: `1489`,
    251: `65`,
    2510: `1490`,
    2511: `1491`,
    2512: `1491`,
    2513: `1492`,
    2514: `1494`,
    2515: `1495`,
    2516: `1495`,
    2517: `1495`,
    2518: `1497`,
    2519: `1498`,
    252: `66`,
    2520: `1498`,
    2521: `1499`,
    2522: `1501`,
    2523: `1502`,
    2524: `1503`,
    2525: `1504`,
    2526: `1505`,
    2527: `1505`,
    2528: `1506`,
    2529: `1507`,
    253: `66`,
    2530: `1508`,
    2531: `1509`,
    2532: `1511`,
    2533: `1511`,
    2534: `1512`,
    2535: `1513`,
    2536: `1513`,
    2537: `1514`,
    2538: `1516`,
    2539: `1517`,
    254: `67`,
    2540: `1517`,
    2541: `1517`,
    2542: `1520`,
    2543: `1520`,
    2544: `1521`,
    2545: `1521`,
    2546: `1522`,
    2547: `1523`,
    2548: `1524`,
    2549: `1525`,
    255: `67`,
    2550: `1525`,
    2551: `1526`,
    2552: `1527`,
    2553: `1527`,
    2554: `1528`,
    2555: `1528`,
    2556: `1529`,
    2557: `1529`,
    2558: `1530`,
    2559: `1531`,
    256: `67`,
    2560: `1532`,
    2561: `1532`,
    2562: `1533`,
    2563: `1534`,
    2564: `1535`,
    2565: `1536`,
    2566: `1536`,
    2567: `1537`,
    2568: `1537`,
    2569: `1538`,
    257: `70`,
    2570: `1539`,
    2571: `1540`,
    2572: `1540`,
    2573: `1541`,
    2574: `1542`,
    2575: `1543`,
    2576: `1546`,
    2577: `1546`,
    2578: `1547`,
    2579: `1547`,
    258: `70`,
    2580: `1548`,
    2581: `1549`,
    2582: `1550`,
    2583: `1551`,
    2584: `1551`,
    2585: `1552`,
    2586: `1553`,
    2587: `1553`,
    2588: `1554`,
    2589: `1554`,
    259: `71`,
    2590: `1555`,
    2591: `1555`,
    2592: `1556`,
    2593: `1557`,
    2594: `1558`,
    2595: `1558`,
    2596: `1559`,
    2597: `1560`,
    2598: `1561`,
    2599: `1562`,
    26: `2`,
    260: `72`,
    2600: `1562`,
    2601: `1563`,
    2602: `1564`,
    2603: `1565`,
    2604: `1567`,
    2605: `1567`,
    2606: `1568`,
    2607: `1568`,
    2608: `1569`,
    2609: `1570`,
    261: `73`,
    2610: `1571`,
    2611: `1571`,
    2612: `1571`,
    2613: `1572`,
    2614: `1572`,
    2615: `1572`,
    2616: `1574`,
    2617: `1575`,
    2618: `1575`,
    2619: `1576`,
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
  warnings: [`API User_claim may use up to 10 transaction references, but the limit is 8. API User_claim starts at /app/raffle_token_v4.rsh:124:37:application.`, `API User_claim may use up to 6 accounts, but the limit is 4. API User_claim starts at /app/raffle_token_v4.rsh:124:37:application.`, `API User_delete may use up to 5 accounts, but the limit is 4. API User_delete starts at /app/raffle_token_v4.rsh:124:37:application.`, `API User_determinWinnerAfterDeadline may use up to 6 accounts, but the limit is 4. API User_determinWinnerAfterDeadline starts at /app/raffle_token_v4.rsh:124:37:application.`, `API User_determinWinnerAfterDeadline may use up to 9 transaction references, but the limit is 8. API User_determinWinnerAfterDeadline starts at /app/raffle_token_v4.rsh:124:37:application.`, `Step 3 may use up to 10 transaction references, but the limit is 8. Step 3 starts at /app/raffle_token_v4.rsh:124:37:dot.`, `Step 3 may use up to 6 accounts, but the limit is 4. Step 3 starts at /app/raffle_token_v4.rsh:124:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"address payable","name":"elem7","type":"address"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"address payable","name":"elem9","type":"address"},{"internalType":"address payable","name":"elem10","type":"address"}],"internalType":"struct T12","name":"v7261","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"address payable","name":"elem7","type":"address"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"address payable","name":"elem9","type":"address"},{"internalType":"address payable","name":"elem10","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_273","type":"tuple"},{"internalType":"bool","name":"_User_claim0_273","type":"bool"},{"internalType":"bool","name":"_User_delete0_273","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_273","type":"tuple"},{"internalType":"bool","name":"_User_optin0_273","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3986","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4379","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4734","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5124","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5473","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_adminClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7218","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7222","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"address payable","name":"_asset","type":"address"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_randomNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_userClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v7240","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7254","type":"address"}],"name":"User_determinWinnerAfterDeadline","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v7264","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_User_buyTicket0_273","type":"tuple"},{"internalType":"bool","name":"_User_claim0_273","type":"bool"},{"internalType":"bool","name":"_User_delete0_273","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T9","name":"_User_determinWinnerAfterDeadline0_273","type":"tuple"},{"internalType":"bool","name":"_User_optin0_273","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v7267","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62004497388190036080601f8201601f19168101906001600160401b03821190821017620007745761016092829160405260803912620008ec5760405161016081016001600160401b03811182821017620007745760405260805181526200006860a06200090d565b602082015260c0518015158103620008ec57604082015260e05160608201526101005160808201526101205160a08201526101405160c0820152620000af6101606200090d565b60e082015261018051610100820152620000cb6101a06200090d565b610120820152620000de6101c06200090d565b610140820152436003556040516001600160401b03610260820190811190821117620007745761026081016040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526040518060e081011060018060401b0360e08301111762000774576000918160e061024093016040528381528360208201528360408201528360608201528360808201528360a08201528360c082015261010082015282610120820152826101408201528261016082015282610180820152620001bd62000922565b6101a0820152826101c0820152826101e08201528261020082015282610220820152015260405190620001f082620008f1565b620001fa62000922565b82526200020662000943565b60208301526200021562000943565b604083015260ff60045416620008d3577f78b8f98fda035a64f290cdd5b0eb27d27879acfe0fef3a07a67da819974f024f6101806040513381528351602082015260018060a01b03602085015116604082015260408401511515606082015260608401516080820152608084015160a082015260a084015160c082015260c084015160e082015260018060a01b0360e08501511661010082015261010084015161012082015260018060a01b036101208501511661014082015260018060a01b0361014085015116610160820152a180518015908115620008c6575b5015620008ad5760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200034183620008f1565b60008352602083015260408201526200035962000943565b9160005b60028110620008735750508152604083015260e081015160208201516001600160a01b039081169116036200086b5760005b15620008525760001960a082015110156200083957600160a0820151106200082057346200080757604051916001600160401b0361018084019081119084111762000774576040916101808401835260008452600060208501526000838501526000606085015260006080850152600060a0850152600060c0850152600060e08501526000610100850152600061012085015260006101408501526200043462000943565b61016085015233845260018060a01b03602082015116602085015282810151151583850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260018060a01b0360e08201511660e085015261010081015161010085015260018060a01b036101208201511661012085015261014060018060a01b03910151166101408401520151602081015160406020820151910151151560405191620004e983620008f1565b60008352602083015260408201526200050162000943565b9160005b60028110620007b757505060208201526101608201526001600055436001556101606040519160018060a01b03815116602084015260018060a01b03602082015116604084015260408101511515606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260018060a01b0360e08201511661010084015261010081015161012084015260018060a01b036101208201511661014084015260018060a01b036101408201511682840152015161018082016000905b600282106200078a5761022084528361024081016001600160401b03811182821017620007745760405280516001600160401b0381116200077457600254600181811c9116801562000769575b60208210146200075357601f8111620006e9575b50602091601f82116001146200067f5791819260009262000673575b50508160011b916000199060031b1c1916176002555b604051613ae49081620009b38239f35b0151905082806200064d565b601f19821692600260005260206000209160005b858110620006d057508360019510620006b6575b505050811b0160025562000663565b015160001960f88460031b161c19169055828080620006a7565b9192602060018192868501518155019401920162000693565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000748575b601f0160051c01905b8181106200073b575062000631565b600081556001016200072c565b909150819062000723565b634e487b7160e01b600052602260045260246000fd5b90607f16906200061d565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620005d0565b620007c381836200098a565b51620007d082866200098a565b52620007dd81856200098a565b506000198114620007f15760010162000505565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60016200038f565b6200087f81836200098a565b516200088c82866200098a565b526200089981856200098a565b506000198114620007f1576001016200035d565b60405163100960cb60e01b815260166004820152602490fd5b90506001541438620002f1565b60405163100960cb60e01b815260156004820152602490fd5b600080fd5b606081019081106001600160401b038211176200077457604052565b51906001600160a01b0382168203620008ec57565b604051906200093182620008f1565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620007745781528260005b8281106200097257505050565b6020906200097f62000922565b818401520162000965565b9060028110156200099c5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e685146101f857806308e8b3fb146101ef5780631e93b0f1146101e6578063213b7923146101dd57806336e56ea5146101d457806347dc4e6c146101cb578063573b8510146101c25780635cd91bc2146101b95780635fde30d8146101b05780636a672754146101a75780636cf1d8021461019e57806373c86a71146101955780637888d2df1461018c5780637a2b54dc14610183578063832307571461017a578063883513de146101715780638ddecb6d146101685780639686b6e91461015f578063a579242414610156578063ab53f2c61461014d578063c4807dc714610144578063d184691f1461013b578063eaa4fd51146101325763fa726c840361000e5761012d610ee8565b61000e565b5061012d610e3f565b5061012d610def565b5061012d610d77565b5061012d610d02565b5061012d610c6b565b5061012d610c2b565b5061012d610bb8565b5061012d610b2b565b5061012d610b0c565b5061012d610acc565b5061012d610a42565b5061012d6109d3565b5061012d610970565b5061012d6108f7565b5061012d6107c0565b5061012d61073a565b5061012d610479565b5061012d61041e565b5061012d6103c4565b5061012d61035a565b5061012d61031e565b5061012d61026a565b5034610265576000366003190112610265576102126112b3565b60046000540361024c57606060209161014061023d61022f611062565b8580825183010191016114c7565b01519182910152604051908152f35b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b5060e03660031901126102655761027f6112b3565b6040519061028c82610fab565b600435825260c036602319011261026557604051916102aa83610fd3565b6024359260058410156102655761030e9381526102c636613947565b60208201526064356102d781611352565b60408201526102e4613a74565b60608201526102f236613a8e565b60808201526102ff613a81565b60a08201526020820152611e8d565b60405160008152602090f35b0390f35b5034610265576000366003190112610265576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361026557565b503461026557602036600319011261026557610377600435610349565b61037f6112b3565b5060405163100960cb60e01b8152600c6004820152602490fd5b50634e487b7160e01b600052602160045260246000fd5b600211156103ba57565b6103c2610399565b565b50346102655760203660031901126102655760606103f56004356103e781610349565b6103ef6111b8565b506111d7565b60408051918051610405816103b0565b8352602081015115156020840152015115156040820152f35b5060003660031901126102655760206101e06104386112b3565b61046d81610444611bab565b85810190600182515251151560408251015261045e611bab565b90600082525186820152611e8d565b01511515604051908152f35b506020806003193601126102655761048f6112b3565b5061072461049c36613967565b916104a5613987565b6000906104b560018354146115fc565b6104ce6104c0611062565b8480825183010191016139b6565b916104ea6104e56104e160045460ff1690565b1590565b61161c565b60408051338152875160208201529096610534917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908990a151801590811561072e575b5061163c565b8360c08401936105468551341461165c565b6106fa610160936106f38584015185810151906105978d83519261059261010095868b019586510193808d83015192015115159161058261110b565b9586528d86015284019015159052565b613164565b89528c60e08701946105bd6105b86105af885161033d565b85519033613121565b61167c565b6105d93360018060a01b036105d28b5161033d565b161461169c565b80898c019281845152818b85510152808d019a828c51528d515151908c5101528a5101528060608a51015260808951015261061860a089510160019052565b600560c08951015261062b8a5160200190565b515160e08951015251828851015261066d610644611ddd565b9b6106598d6106538a5161033d565b90611b13565b6106658189015161033d565b908d01611b13565b6106858d61067d81890151151590565b1515908d0152565b6106bb6106b260608801958d606088519101528d6080808b01519101528d60a0808b01519101525161033d565b60c08d01611b13565b5160e08b01526106dc610120916106d48388015161033d565b908c01611b13565b6106eb6101408096015161033d565b908a01611b13565b5142612ebf565b90860152519084015243610180840152426101a0840152516101c0830152516101e08201526136c0565b5160008152602090f35b9050600154143861052e565b5034610265576000366003190112610265576107546112b3565b60046000540361079a5760a061031a916101e0610781610772611062565b602080825183010191016114c7565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b6001600160a01b03169052565b5034610265576000366003190112610265576107da61125d565b5061031a6107e66112b3565b6107ee611af9565b906107fd6004600054146116bc565b610808610772611062565b9160e083015181515261082b610821602085015161033d565b6020835101611b13565b60a083015160408251015261089361088960c06101009561085b6108518883015161033d565b6060875101611b13565b60608101516080865101526108826108766040830151151590565b60a08751019015159052565b015161033d565b60c0835101611b13565b5191829101526040519182918291909160c060e0820193805183528160018060a01b0391826020820151166020860152604081015160408601528260608201511660608601526080810151608086015260a0810151151560a0860152015116910152565b5034610265576000366003190112610265576109116112b3565b60046000540361095757602061031a9161016061093d61092f611062565b8480825183010191016114c7565b015151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b5060203660031901126102655760206101c061098a6112b3565b61046d8160405161099a81610fab565b6040516109a681610fee565b600081528152858101906109b8611b35565b8252600435815152600082515251868251015261045e611bab565b5034610265576000366003190112610265576109ed6112b3565b600460005403610a295761018061031a916060610160610a0e610772611062565b01510151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260136004820152602490fd5b503461026557600036600319011261026557610a5c6112b3565b600460005403610ab35761016061031a91610a75611062565b60c0610a9160018060a01b0392602080825183010191016114c7565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b815260126004820152602490fd5b506000366003190112610265576020610240610ae66112b3565b61046d81610af2611bab565b85810190600482515251151560a08251015261045e611bab565b5034610265576000366003190112610265576020600154604051908152f35b503461026557600036600319011261026557610b456112b3565b600460005403610b6257604060209161026061023d61022f611062565b60405163100960cb60e01b815260086004820152602490fd5b6040908051610b89816103b0565b83526020818101511515908401528101516001600160a01b0316910152565b6060810192916103c29190610b7b565b503461026557600036600319011261026557610bd26111b8565b50610bdb6112b3565b600460005403610c12576101a061031a91610100610160610bfd610772611062565b01510151918291015260405191829182610ba8565b60405163100960cb60e01b815260146004820152602490fd5b506000366003190112610265576020610200610c456112b3565b61046d81610c51611bab565b85810190600282515251151560608251015261045e611bab565b503461026557602036600319011261026557600435610c8981610349565b610c916112b3565b90600460005403610ce95761031a916001610cc060e093610cb3610772611062565b50828060a01b03166111d7565b51610cca816103b0565b610cd3816103b0565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600d6004820152602490fd5b503461026557600080600319360112610d74578054610d1f611062565b906040519283918252602090604082840152835191826040850152815b838110610d5d57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610d3c565b80fd5b503461026557600036600319011261026557610d916112b3565b600460005403610dd65761012061031a916080610daf610772611062565b610dbf6101e082015115156116dc565b015191018190526040519081529081906020820190565b60405163100960cb60e01b8152600f6004820152602490fd5b503461026557600036600319011261026557610e096112b3565b600460005403610e2657608060209161018061023d61022f611062565b60405163100960cb60e01b8152600a6004820152602490fd5b5060203660031901126102655761031a610ed6610220600435610e6181610349565b610ecf610e6c6112b3565b8092604051610e7a81610fab565b604051610e8681610fee565b6000815281526020810191610e99611b35565b835281516001600160a01b03909116905281516003905251815160800152610ebf611bab565b9060008252516020820152611e8d565b0151151590565b60405191829182901515815260200190565b503461026557600036600319011261026557610f026112b3565b600460005403610f41576101406020916080610160610f30610f22611062565b8680825183010191016114c7565b015101519182910152604051908152f35b60405163100960cb60e01b815260116004820152602490fd5b90600182811c92168015610f8a575b6020831014610f7457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f69565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610fc657604052565b610fce610f94565b604052565b60c081019081106001600160401b03821117610fc657604052565b602081019081106001600160401b03821117610fc657604052565b606081019081106001600160401b03821117610fc657604052565b60a081019081106001600160401b03821117610fc657604052565b601f909101601f19168101906001600160401b03821190821017610fc657604052565b604051906000826002549161107683610f5a565b8083526001938085169081156110ea575060011461109c575b506103c29250038361103f565b60026000908152600080516020613ab883398151915294602093509091905b8183106110d25750506103c293508201013861108f565b855488840185015294850194879450918301916110bb565b90506103c294506020925060ff191682840152151560051b8201013861108f565b604051906103c282611009565b6040519061026082016001600160401b03811183821017610fc657604052565b6040519061012082016001600160401b03811183821017610fc657604052565b6040519061028082016001600160401b03811183821017610fc657604052565b6040519061020082016001600160401b03811183821017610fc657604052565b6040519061018082016001600160401b03811183821017610fc657604052565b604051906111c582611009565b60006040838281528260208201520152565b906111e06111b8565b9160018060a01b03166000908082526005602052600160ff604084205416611207816103b0565b03611252576040929350815260056020522060ff6040519161122883611009565b54818116611235816103b0565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b6040519060e082016001600160401b038111838210176112a6575b6040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b6112ae610f94565b611278565b6112bb611118565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401526112f361125d565b6101008401528061012084015280610140840152806101608401528061018084015261131d6111b8565b6101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b51906103c282610349565b8015150361026557565b51906103c282611352565b91908260609103126102655760405161137f81611009565b809280516002811015610265576040918291845260208101516113a181611352565b60208501520151916113b283610349565b0152565b919091610160818403126102655761143a6113cf611138565b936113d98361135c565b855260208301516020860152604083015160408601526113fb6060840161135c565b60608601526080830151608086015261141660a0840161135c565b60a086015260c083015160c086015260e083015160e0860152610100809301611367565b90830152565b91908260609103126102655760405161145881611009565b604080829480518452602081015160208501520151916113b283611352565b81601f82011215610265576040519161148f83610fab565b829060c083019281841161026557915b8383106114ad575050505090565b60206060916114bc8486611440565b81520192019161149f565b6104a08183031261026557610480906115eb6114e1611158565b936114eb83611347565b85526114f960208401611347565b602086015261150a6040840161135c565b6040860152606083015160608601526080830151608086015260a083015160a086015261153960c08401611347565b60c086015260e083015160e0860152610100611556818501611347565b90860152610120611568818501611347565b908601526101408084015190860152610160611586828286016113b6565b908601526102c08301516101808601526115a4816102e08501611477565b6101a08601526103a08301516101c08601526115c36103c0840161135c565b6101e08601526103e08301516102008601526104008301516102208601526104208301611440565b610240840152015161026082015290565b1561160357565b60405163100960cb60e01b8152601b6004820152602490fd5b1561162357565b60405163100960cb60e01b8152601c6004820152602490fd5b1561164357565b60405163100960cb60e01b8152601d6004820152602490fd5b1561166357565b60405163100960cb60e01b8152601e6004820152602490fd5b1561168357565b60405163100960cb60e01b8152601f6004820152602490fd5b156116a357565b60405163100960cb60e01b815260206004820152602490fd5b156116c357565b60405163100960cb60e01b8152600e6004820152602490fd5b156116e357565b60405163100960cb60e01b815260106004820152602490fd5b1561170357565b60405163100960cb60e01b815260216004820152602490fd5b1561172357565b60405163100960cb60e01b815260226004820152602490fd5b1561174357565b60405163100960cb60e01b815260236004820152602490fd5b1561176357565b60405163100960cb60e01b8152603e6004820152602490fd5b1561178357565b60405163100960cb60e01b8152603f6004820152602490fd5b156117a357565b602460405163100960cb60e01b815260406004820152fd5b156117c257565b60405163100960cb60e01b815260376004820152602490fd5b156117e257565b60405163100960cb60e01b815260386004820152602490fd5b1561180257565b60405163100960cb60e01b815260396004820152602490fd5b1561182257565b60405163100960cb60e01b8152603a6004820152602490fd5b1561184257565b60405163100960cb60e01b8152603b6004820152602490fd5b1561186257565b60405163100960cb60e01b8152603c6004820152602490fd5b1561188257565b60405163100960cb60e01b8152603d6004820152602490fd5b156118a257565b60405163100960cb60e01b815260316004820152602490fd5b156118c257565b60405163100960cb60e01b815260326004820152602490fd5b156118e257565b60405163100960cb60e01b815260336004820152602490fd5b1561190257565b60405163100960cb60e01b815260346004820152602490fd5b1561192257565b60405163100960cb60e01b815260356004820152602490fd5b1561194257565b60405163100960cb60e01b815260366004820152602490fd5b1561196257565b60405163100960cb60e01b815260296004820152602490fd5b1561198257565b60405163100960cb60e01b8152602a6004820152602490fd5b156119a257565b60405163100960cb60e01b8152602b6004820152602490fd5b156119c257565b60405163100960cb60e01b8152602c6004820152602490fd5b156119e257565b60405163100960cb60e01b8152602d6004820152602490fd5b15611a0257565b60405163100960cb60e01b8152602e6004820152602490fd5b15611a2257565b60405163100960cb60e01b8152602f6004820152602490fd5b15611a4257565b60405163100960cb60e01b815260306004820152602490fd5b15611a6257565b602460405163100960cb60e01b8152816004820152fd5b15611a8057565b60405163100960cb60e01b815260256004820152602490fd5b15611aa057565b60405163100960cb60e01b815260266004820152602490fd5b15611ac057565b60405163100960cb60e01b815260276004820152602490fd5b15611ae057565b60405163100960cb60e01b815260286004820152602490fd5b60405190611b0682610fee565b81611b0f61125d565b9052565b6001600160a01b039091169052565b60405190611b2f82610fee565b60008252565b6040519060c082016001600160401b03811183821017611b94575b6040528160a0600091828152604051611b6881610fee565b8381526020820152826040820152826060820152604051611b8881610fee565b83815260808201520152565b611b9c610f94565b611b50565b600511156103ba57565b60405190611bb882610fab565b81600081526020611bc7611b35565b910152565b60405190611bd982610fab565b60006020838281520152565b6040519061012082016001600160401b03811183821017611c3e575b6040528160008082528060208301528060408301528060608301528060808301528060a08301528060c083015260e0820152610100611bc76111b8565b611c46610f94565b611c01565b604090815191611c5a83610fab565b8260005b828110611c6a57505050565b602090611c756111b8565b8184015201611c5e565b611c87611178565b90611c90611b22565b825260006020830152611ca1611bcc565b6040830152611cae611be5565b606083015260006080830152611cc2611c4b565b60a0830152600060c0830152611cd6611c4b565b60e0830152611ce3611be5565b610100830152611cf1611be5565b610120830152611cff611b22565b6101408301526000610160830152611d15611c4b565b610180830152611d23611c4b565b6101a0830152611d316111b8565b6101c0830152611d3f611be5565b6101e0830152565b60e060a06103c2939594956020610100850197600180851b03809316865280518287015201519081516005811015611db8575b6040860152602082015151606086015260408201511515608086015260608201511515838601526080820151511660c0850152015191019015159052565b611dc0610399565b611d7a565b516005811015611dd25790565b611dda610399565b90565b611de5611178565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015280610140840152611e32611be5565b61016084015280610180840152806101a0840152611e4e611c4b565b6101c08401526101e0830152565b51611dda816103b0565b906002811015611e775760051b0190565b634e487b7160e01b600052603260045260246000fd5b90611e96611c7f565b91611ea56004600054146116fc565b6020611ec0611eb2611062565b8280825183010191016114c7565b91611ed8611ed36104e160045460ff1690565b61171c565b7fdaec047d8800b54c015aa48d6d37d33ec5420cb485b62f7e95edc2c08b87483560405180611f08843383611d47565b0390a1611f2081518015908115612e79575b5061173c565b01611f2b8151611dc5565b611f3481611ba1565b61224757516020015183526101809283820151936101409182840195865111611f5c90611a5b565b80515160011115611f6c90611a79565b8051519060a08501918251611f8091612f15565b6020820190815293611f923415611a99565b60208601978851611fa29061033d565b8651611fae9133613121565b611fb790611ab9565b60c08701938451611fc79061033d565b611fd190336130c6565b611fda90611ad9565b6040840133815190611feb91611b13565b8451518151602001525160405161201c819282919091602080604083019460018060a01b0381511684520151910152565b037fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873391a1604051600181527fdc092695c66d03ab294e7c8e9575c5e57e8e352135544814038e9079e62a97c090602090a160016101c0998a01526101609485890191825161208a9051151590565b606087018051911515909152956102008b01518a516120a891612ebf565b8751602001528351604001516120bd90612e9c565b875160400152835160609081015188519015159101528351608001519051516120e591612ebf565b865160800152825160a001511515865190151560a090910152825160c00151865160c001526102208a0151865160e001526101008093510151838751015261212b611ddd565b9b8c8b516121389061033d565b61214191611b13565b5161214b9061033d565b6121589060208e01611b13565b60408a01511515151560408d015260608a015160608d015260808a015160808d01525160a08c01525161218a9061033d565b6121979060c08c01611b13565b60e088015160e08b0152808801516121ae9061033d565b6121b9918b01611b13565b610120808801516121c99061033d565b6121d4918b01611b13565b5190880152519086015243908501526101a04281860152820151906102608301519051016102408301516020810151906040015161221190151590565b9061221a61110b565b928352602083015215156040820152612232916131c4565b8284015201516101e08201526103c2906136c0565b60016122568295949551611dc5565b61225f81611ba1565b0361265f57506124d46101e06103c29461229660016122876101006101608801510151611e5c565b612290816103b0565b1461195b565b6122aa6122a583860151151590565b61197b565b6122cb6102208501516122c26101a087015160200190565b5151101561199b565b60016122e06101006101608701510151611e5c565b6122e9816103b0565b0361264d57610160840151610100015160400151612314906001600160a01b03165b60808701611b13565b6123333360018060a01b0361232c608089015161033d565b16146119bb565b61233d34156119db565b61235b612356612350602087015161033d565b336130c6565b6119fb565b61237361236e61235060c087015161033d565b611a1b565b612384610140850151421015611a3b565b61246a6123c76101a08601516020810151906123c26040602084015193015115156123ad61110b565b93600085526020850152604084019015159052565b613221565b60a0870190815261240d6123de60c088015161033d565b6123eb60808a015161033d565b906123fb6101a08a015160200190565b5151916001600160a01b031690612f74565b61242d8151515161242761242082612ee8565b6064900490565b90612ed3565b908160c089015251612465815192835103926040602082015191015115159061245461110b565b948552602085015215156040840152565b6131c4565b60e08601526124a061247f602086015161033d565b612489865161033d565b60c0880151916001600160a01b0390911690612f74565b604051600181527f38f75455f3afa3b5e76e9643069631dd44af2a7d15d31e50c3ff3455ba74b3d690602090a10160019052565b60e06101008301926124e7845160019052565b81810151515160208551015260406101608401510151604085510152612511606085510160019052565b60806101608401510151608085510152600060a08551015260c0610160840151015160c0855101526000828551015261010061016084015101516101008551015261255a611ddd565b9361256e612568855161033d565b86611b13565b61258761257e602086015161033d565b60208701611b13565b6125a06125976040860151151590565b15156040870152565b606084015160608601526080840151608086015260a084015160a08601526125d76125ce60c086015161033d565b60c08701611b13565b82840151838601526125fa6125f061010086015161033d565b6101008701611b13565b61261461012061260c8187015161033d565b908701611b13565b6101408401516101408601525161016085015243610180850152426101a08501520151906101c0918284015201516101e08201526136c0565b61231461265a855161033d565b61230b565b600261266b8251611dc5565b61267481611ba1565b0361293f575061268c612687825161033d565b61033d565b33036129245761269c600161189b565b6101e091828201516126ad90151590565b6126b6906118bb565b61016080830190815160800151156126cd906118db565b6126d734156118fb565b602084019586516126e79061033d565b6126f190336130c6565b6126fa9061191b565b60c0850193845161270a9061033d565b61271490336130c6565b61271d9061193b565b604051600181527f8f845f12a92d9566494a28b4f4d80001892cdd910b35d13653966ea89f13ced490602090a1600161020092830152845161275e9061033d565b93865161276a9061033d565b956101a09586890197885161277f9060200190565b51516127969290916001600160a01b031690612f74565b815151151561012093840180519115159091529388015184516020015281516040015184516040015283516060016127ce9060019052565b815160800151845160800152835160a00160009052815160c00151845160c00152610220880151845160e0015261010080925101518285510152612810611ddd565b99885161281c9061033d565b612826908c611b13565b516128309061033d565b61283d9060208c01611b13565b60408801511515151560408b0152606088015160608b0152608088015160808b015260a088015160a08b0152516128739061033d565b6128809060c08b01611b13565b60e087015160e08a0152808701516128979061033d565b6128a2918a01611b13565b808601516128af9061033d565b6128ba918901611b13565b610140808601519088015251908601524361018086015242908501525160208101516020810151906040015115156128f061110b565b6000815260208101929092521515604082015261290c91613221565b906101c091828501520151908201526103c2906136c0565b61269c61293861268761012084015161033d565b331461189b565b600361294e8295939551611dc5565b61295781611ba1565b03612d03579260006102206101c09360806103c29751015161014087015261299a61298b6101006101608701510151611e5c565b612994816103b0565b156117bb565b6129b06129ab6101e0860151151590565b6117db565b6129cb6129c461268761012087015161033d565b33146117fb565b6129d5341561181b565b6129ed6129e8612350602087015161033d565b61183b565b612a05612a0061235060c087015161033d565b61185b565b612a1661014085015142101561187b565b612a64612a2a612420610260870151612ee8565b806101608901526101a0860151906102608701510390612465610240880151612a5b60406020830151920151151590565b9061245461110b565b610180870152612aa0612a7a602086015161033d565b612a8861012087015161033d565b610160890151916001600160a01b0390911690612f74565b612ad7610180870151805190612465604060208401519301511515612ac361110b565b938885526020850152604084019015159052565b6101a0870152612b11612aed602086015161033d565b612af7865161033d565b6101808901515151916001600160a01b0390911690612f74565b604051600081527f05c49283690cb629248925f507204ec134e2f2600beadaceead8f3b0e0bd3c6390602090a10152818301612b4e815160019052565b61014084015151612b6c906001600160a01b03166040835101611b13565b612b7b6101e085015160019052565b6101a0840151515160206101e086015101526040610160830151015160406101e08601510152612bc6612bb660606101608501510151151590565b60606101e0870151019015159052565b6080610160830151015160806101e08601510152612bff612bef60a06101608501510151151590565b60a06101e0870151019015159052565b60c0610160830151015160c06101e0860151015261022082015160e06101e08601510152516101006101e085015101526101a0612c3a611ddd565b93612c48612568845161033d565b612c5861257e602085015161033d565b612c686125976040850151151590565b606083015160608601526080830151608086015260a083015160a0860152612c966125ce60c085015161033d565b60e083015160e0860152612cb16125f061010085015161033d565b612ccc612cc261012085015161033d565b6101208701611b13565b6101408301516101408601526101e081015161016086015243610180860152428286015201518284015201516101e08201526136c0565b6004919250612d129051611dc5565b612d1b81611ba1565b14612d24575050565b6103c291612d32341561175c565b612e05612dfc6020830193612d52612d4d612350875161033d565b61177c565b600061024060c0860192612d71612d6c612350865161033d565b61179c565b604051600081527fd0da4862b9dbde4e07430c2ee08a3f1d319931a9d464bf130b1bdf34c77fcfb890602090a10152612dc861257e612dae611ddd565b96612dc2612dbc885161033d565b89611b13565b5161033d565b612dd86125976040860151151590565b606084015160608601526080840151608086015260a084015160a08601525161033d565b60c08401611b13565b60e081015160e0830152612e29610100612e218184015161033d565b908401611b13565b612e3b610120612e218184015161033d565b61014080820151908301526101608082015190830152436101808301526101a04281840152810151906101c0918284015201516101e08201526136c0565b90506001541438611f1a565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111612eb2575b821061026557565b612eba612e85565b612eaa565b9190820191828111612eb257821061026557565b908103908111612ee05790565b611dda612e85565b90600582029180830460051481151715612f08575b600583040361026557565b612f10612e85565b612efd565b91906000928115918215612f2d575b50501561026557565b81819293955002828104821483151715612f67575b8094612f515704143880612f24565b634e487b7160e01b600052601260045260246000fd5b612f6f612e85565b612f42565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152612ff093600093849392849190608081016001600160401b03811182821017612ff7575b6040525193165af1612fe0612fd9613004565b8092613066565b5060208082518301019101613051565b1561026557565b612fff610f94565b612fc6565b3d1561304c573d906001600160401b03821161303f575b60405191613033601f8201601f19166020018461103f565b82523d6000602084013e565b613047610f94565b61301b565b606090565b908160209103126102655751611dda81611352565b1561306e5790565b80511561307d57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561309e5790565b8051156130ad57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611dda928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261310a81611024565b5193165af1612fe061311a613004565b8092613096565b600091611dda9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261310a81611024565b919061316e611c4b565b9260005b600281106131835750506020830152565b8061319060019284611e66565b5161319b8288611e66565b526131a68187611e66565b5060001981146131b7575b01613172565b6131bf612e85565b6131b1565b91906131ce611c4b565b9260005b600281106131e05750508252565b806131ed60019284611e66565b516131f88288611e66565b526132038187611e66565b506000198114613214575b016131d2565b61321c612e85565b61320e565b919061322b611c4b565b9260005b600281106132405750506020830152565b8061324d60019284611e66565b516132588288611e66565b526132638187611e66565b506000198114613274575b0161322f565b61327c612e85565b61326e565b506040513d6000823e3d90fd5b818110613299575050565b6000815560010161328e565b6132b0600254610f5a565b806132b85750565b601f81116001146132cb57506000600255565b600260005261331090601f0160051c600080516020613ab8833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61328e565b6000602081208160025555565b613325611158565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015280610140840152613372611be5565b61016084015280610180840152613387611c4b565b6101a0840152806101c0840152806101e084015280610200840152806102208401526133b16111b8565b610240840152610260830152565b906103c29180511515825260208101516020830152604081015160408301526060810151151560608301526080810151608083015261340760a082015160a084019015159052565b60c081015160c083015260e081015160e083015261010080910151910190610b7b565b60408091805184526020810151602085015201511515910152565b906000905b6002821061345757505050565b6020606082613469600194875161342a565b0193019101909161344a565b9190916104806102606104a083019461348f8482516107b3565b6134a1602082015160208601906107b3565b604081810151151590850152606081015160608501526080810151608085015260a081015160a08501526134dd60c082015160c08601906107b3565b60e081015160e08501526134fa61010080830151908601906107b3565b61350d61012080830151908601906107b3565b610140808201519085015261352b61016080830151908601906133bf565b6101808101516102c085015261354b6101a08201516102e0860190613445565b6101c08101516103a08501526101e081015115156103c08501526102008101516103e085015261022081015161040085015261359161024082015161042086019061342a565b0151910152565b90601f82116135a5575050565b6103c29160026000526020600020906020601f840160051c830193106135d3575b601f0160051c019061328e565b90915081906135c6565b80519091906001600160401b0381116136b3575b61360581613600600254610f5a565b613598565b602080601f83116001146136415750819293600092613636575b50508160011b916000199060031b1c191617600255565b01519050388061361f565b6002600052601f19831694909190600080516020613ab8833981519152926000905b87821061369b575050836001959610613682575b505050811b01600255565b015160001960f88460031b161c19169055388080613677565b80600185968294968601518155019501930190613663565b6136bb610f94565b6135f1565b610160818101805160a081015160009015613940575060600151156139395760005b15613857576103c2926138449260e0613852936137fb61370061331d565b9461371461370e825161033d565b87611b13565b61372d613724602083015161033d565b60208801611b13565b61374661373d6040830151151590565b15156040880152565b606081015160608701526080810151608087015260a081015160a087015261377d61377460c083015161033d565b60c08801611b13565b838101518487015261379f6101006137978184015161033d565b908801611b13565b6137b16101206137978184015161033d565b61014094858201958651908801528351908701526101a09485820180516101808901526101c0808401978851908a01526101e0809401519089015251905111159086019015159052565b60208151015161020085015251015161022083015280515161024083015251515161026082015261382c6004600055565b61383543600155565b60405192839160208301613475565b03601f19810183528261103f565b6135dd565b50508061012061390d9201906000808080613875612687875161033d565b6101e086015190828215613930575bf115613923575b6138a261389b602083015161033d565b925161033d565b6101c082018051515190936001600160a01b03926138c4929190841690612f74565b6139036138fd6138e16138da60c086015161033d565b945161033d565b94518051906124656040602084015193015115156123ad61110b565b60200190565b5151921690612f74565b6000805561391b6000600155565b6103c26132a5565b61392b613281565b61388b565b506108fc613884565b60016136e2565b90506136e2565b6020906043190112610265576040519061396082610fee565b6044358252565b6020906003190112610265576040519061398082610fee565b6004358252565b6040519061399482611009565b8161399d611c4b565b81526139a76111b8565b60208201526040611bc7611be5565b6102208183031261026557613a6d6139cc611198565b926139d683611347565b84526139e460208401611347565b60208501526139f56040840161135c565b6040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c0850152613a2e60e08401611347565b60e08501526101008084015190850152610120613a4c818501611347565b90850152610140613a5e818501611347565b90850152610160809301611477565b9082015290565b608435906103c282611352565b60c435906103c282611352565b60209060a31901126102655760405190613aa782610fee565b60a43582613ab482610349565b5256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 17559,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_token_v4.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_token_v4.rsh:308:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_token_v4.rsh:124:37:after expr stmt semicolon',
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
