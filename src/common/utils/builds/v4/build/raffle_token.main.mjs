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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc0
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc4,
    currentUserNumber: ctc4,
    keepGoing: ctc3,
    percent: ctc4,
    raffleBal: ctc4,
    ticketsLeft: ctc4,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Object({
    amountOfRaffleToken: ctc4,
    asset: ctc2,
    cost: ctc4,
    creator: ctc0,
    deadline: ctc4,
    isFeatured: ctc3,
    maxEntries: ctc4,
    numberOfTickets: ctc4,
    projectName: ctc1,
    raffleToken: ctc2
    });
  const ctc11 = stdlib.T_Data({
    None: ctc7,
    Some: ctc4
    });
  const ctc12 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc12;
  
  
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        
        return v2514;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        
        return v2441;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        
        return v2454;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        
        return v2498;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async (_v2506 ) => {
          const v2506 = stdlib.protect(ctc0, _v2506, null);
        
        const v2507 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2506, ctc4), null);
        const v2508 = stdlib.fromSome(v2507, stdlib.checkedBigNumberify('./raffle_token.rsh:157:72:decimal', stdlib.UInt_max, '0'));
        
        return v2508;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async (_v2501 ) => {
          const v2501 = stdlib.protect(ctc0, _v2501, null);
        
        const v2502 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc0, v2501, ctc7), null);
        const v2503 = {
          None: 0,
          Some: 1
          }[v2502[0]];
        const v2504 = stdlib.eq(v2503, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2504;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        const v2439 = {
          amountOfRaffleToken: v2406,
          asset: v2397,
          cost: v2402,
          creator: v2407,
          deadline: v2400,
          isFeatured: v2398,
          maxEntries: v2403,
          numberOfTickets: v2399,
          projectName: v2396,
          raffleToken: v2405
          };
        
        return v2439;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        const v2505 = v2450.currentUserNumber;
        
        return v2505;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsLeft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        const v2499 = v2450.ticketsLeft;
        
        return v2499;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        
        return v2405;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = svs;
      return (await ((async () => {
        
        const v2500 = v2450.winner;
        
        return v2500;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc4
          },
        currentSec: {
          decode: Info_currentSec,
          dom: [],
          rng: ctc4
          },
        currentTime: {
          decode: Info_currentTime,
          dom: [],
          rng: ctc4
          },
        hasDeadlineReached: {
          decode: Info_hasDeadlineReached,
          dom: [],
          rng: ctc3
          },
        myTicketsAmount: {
          decode: Info_myTicketsAmount,
          dom: [ctc0],
          rng: ctc4
          },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc3
          },
        props: {
          decode: Info_props,
          dom: [],
          rng: ctc10
          },
        ticketsBought: {
          decode: Info_ticketsBought,
          dom: [],
          rng: ctc4
          },
        ticketsLeft: {
          decode: Info_ticketsLeft,
          dom: [],
          rng: ctc4
          },
        token: {
          decode: Info_token,
          dom: [],
          rng: ctc2
          },
        winner: {
          decode: Info_winner,
          dom: [],
          rng: ctc8
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc2, ctc4, ctc0, ctc0, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc2, ctc4, ctc0, ctc0, ctc4, ctc9, ctc4, ctc6, ctc4, ctc3, ctc4, ctc4, ctc4, ctc4, ctc5, ctc4]
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
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
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
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    User_buyTicket0_309: ctc8,
    User_claim0_309: ctc9,
    User_end0_309: ctc9,
    User_optin0_309: ctc9,
    User_refund0_309: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  
  const v2366 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2367 = [v2366, v2366];
  const v2371 = stdlib.protect(ctc4, interact.Admin, 'for Deployer\'s interact field Admin');
  const v2372 = stdlib.protect(ctc1, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v2373 = stdlib.protect(ctc5, interact.asset, 'for Deployer\'s interact field asset');
  const v2374 = stdlib.protect(ctc1, interact.cost, 'for Deployer\'s interact field cost');
  const v2375 = stdlib.protect(ctc4, interact.creator, 'for Deployer\'s interact field creator');
  const v2376 = stdlib.protect(ctc1, interact.deadline, 'for Deployer\'s interact field deadline');
  const v2377 = stdlib.protect(ctc6, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v2378 = stdlib.protect(ctc1, interact.maxEntries, 'for Deployer\'s interact field maxEntries');
  const v2379 = stdlib.protect(ctc1, interact.numberOfTickets, 'for Deployer\'s interact field numberOfTickets');
  const v2380 = stdlib.protect(ctc7, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2381 = stdlib.protect(ctc5, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v2384 = v2377 ? stdlib.checkedBigNumberify('./raffle_token.rsh:4:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_token.rsh:66:59:decimal', stdlib.UInt_max, '0');
  const v2385 = stdlib.protect(ctc1, await interact.random(), {
    at: './raffle_token.rsh:69:46:application',
    fs: ['at ./raffle_token.rsh:61:16:application call to [unknown function] (defined at: ./raffle_token.rsh:61:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v2386 = stdlib.safeMod(v2385, v2379);
  const v2387 = stdlib.tokenEq(v2373, v2381);
  const v2388 = v2387 ? false : true;
  stdlib.assert(v2388, {
    at: './raffle_token.rsh:76:11:application',
    fs: ['at ./raffle_token.rsh:61:16:application call to [unknown function] (defined at: ./raffle_token.rsh:61:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const v2389 = stdlib.le(v2386, v2379);
  stdlib.assert(v2389, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:93:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v2391 = stdlib.lt(v2374, stdlib.UInt_max);
  stdlib.assert(v2391, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:94:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v2393 = stdlib.gt(v2374, stdlib.checkedBigNumberify('./raffle_token.rsh:95:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2393, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2380, v2373, v2377, v2379, v2376, v2386, v2374, v2378, v2384, v2381, v2372, v2375, v2371],
    evt_cnt: 13,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408], secs: v2410, time: v2409, didSend: v154, from: v2395 } = txn1;
      
      const v2411 = v2367[stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0')];
      const v2412 = stdlib.Array_set(v2411, '0', stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v2413 = stdlib.Array_set(v2367, stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0'), v2412);
      const v2415 = v2413[stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '1')];
      const v2416 = stdlib.Array_set(v2415, '0', stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v2417 = stdlib.Array_set(v2413, stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '1'), v2416);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2397
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2405
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408], secs: v2410, time: v2409, didSend: v154, from: v2395 } = txn1;
  const v2411 = v2367[stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0')];
  const v2412 = stdlib.Array_set(v2411, '0', stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v2413 = stdlib.Array_set(v2367, stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0'), v2412);
  const v2415 = v2413[stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '1')];
  const v2416 = stdlib.Array_set(v2415, '0', stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v2417 = stdlib.Array_set(v2413, stdlib.checkedBigNumberify('./raffle_token.rsh:78:12:dot', stdlib.UInt_max, '1'), v2416);
  const v2419 = stdlib.tokenEq(v2405, v2397);
  const v2420 = v2419 ? false : true;
  stdlib.assert(v2420, {
    at: './raffle_token.rsh:78:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v2421 = stdlib.le(v2401, v2399);
  stdlib.assert(v2421, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:93:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v2423 = stdlib.lt(v2402, stdlib.UInt_max);
  stdlib.assert(v2423, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:94:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v2425 = stdlib.gt(v2402, stdlib.checkedBigNumberify('./raffle_token.rsh:95:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2425, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2404, v2405, v2406, v2407, v2408, v2417],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2409,
    onlyIf: true,
    out_tys: [],
    pay: [v2404, [[v2406, v2405]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2429, time: v2428, didSend: v163, from: v2427 } = txn2;
      
      sim_r.txns.push({
        amt: v2404,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2432 = v2417[stdlib.checkedBigNumberify('./raffle_token.rsh:99:12:dot', stdlib.UInt_max, '1')];
      const v2433 = v2432[stdlib.checkedBigNumberify('./raffle_token.rsh:99:12:dot', stdlib.UInt_max, '0')];
      const v2434 = stdlib.add(v2433, v2406);
      const v2436 = stdlib.Array_set(v2432, '0', v2434);
      const v2437 = stdlib.Array_set(v2417, stdlib.checkedBigNumberify('./raffle_token.rsh:99:12:dot', stdlib.UInt_max, '1'), v2436);
      sim_r.txns.push({
        amt: v2406,
        kind: 'to',
        tok: v2405
        });
      const v2441 = stdlib.safeAdd(v2429, v2400);
      const v2442 = await ctc.getContractInfo();
      
      const v2444 = v2437[stdlib.checkedBigNumberify('./raffle_token.rsh:133:17:application', stdlib.UInt_max, '0')];
      const v2445 = v2444[stdlib.checkedBigNumberify('./raffle_token.rsh:133:17:application', stdlib.UInt_max, '0')];
      const v2446 = v2437[stdlib.checkedBigNumberify('./raffle_token.rsh:134:23:application', stdlib.UInt_max, '1')];
      const v2447 = v2446[stdlib.checkedBigNumberify('./raffle_token.rsh:134:23:application', stdlib.UInt_max, '0')];
      const v2448 = ['None', null];
      const v2449 = {
        bal: v2445,
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v2447,
        ticketsLeft: v2399,
        winner: v2448
        };
      const v2450 = v2449;
      const v2451 = v2428;
      const v2454 = v2429;
      const v2457 = v2437;
      const v2458 = v2404;
      
      if (await (async () => {
        const v2494 = v2450.keepGoing;
        
        return v2494;})()) {
        const v2498 = stdlib.ge(v2454, v2441);
        const v2509 = v2450.currentUserNumber;
        const v2510 = v2450.bal;
        const v2511 = v2450.ticketsLeft;
        const v2512 = v2450.raffleBal;
        const v2513 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v2514 = v2513[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v4650 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v4651 = v4650[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2408,
          tok: undefined /* Nothing */
          });
        const v4664 = stdlib.sub(v4651, v4651);
        const v4666 = stdlib.Array_set(v4650, '0', v4664);
        const v4667 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v4666);
        sim_r.txns.push({
          kind: 'from',
          to: v2408,
          tok: v2397
          });
        const v4668 = v4667[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
        const v4669 = v4668[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2408,
          tok: v2405
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2405
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2397
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
    tys: [ctc4, ctc7, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc4, ctc4, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2429, time: v2428, didSend: v163, from: v2427 } = txn2;
  ;
  const v2432 = v2417[stdlib.checkedBigNumberify('./raffle_token.rsh:99:12:dot', stdlib.UInt_max, '1')];
  const v2433 = v2432[stdlib.checkedBigNumberify('./raffle_token.rsh:99:12:dot', stdlib.UInt_max, '0')];
  const v2434 = stdlib.add(v2433, v2406);
  const v2436 = stdlib.Array_set(v2432, '0', v2434);
  const v2437 = stdlib.Array_set(v2417, stdlib.checkedBigNumberify('./raffle_token.rsh:99:12:dot', stdlib.UInt_max, '1'), v2436);
  ;
  const v2438 = stdlib.addressEq(v2395, v2427);
  stdlib.assert(v2438, {
    at: './raffle_token.rsh:99:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v2441 = stdlib.safeAdd(v2429, v2400);
  const v2442 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2442, v2401), {
    at: './raffle_token.rsh:125:27:application',
    fs: ['at ./raffle_token.rsh:125:27:application call to [unknown function] (defined at: ./raffle_token.rsh:125:27:function exp)', 'at ./raffle_token.rsh:125:27:application call to "liftedInteract" (defined at: ./raffle_token.rsh:125:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2444 = v2437[stdlib.checkedBigNumberify('./raffle_token.rsh:133:17:application', stdlib.UInt_max, '0')];
  const v2445 = v2444[stdlib.checkedBigNumberify('./raffle_token.rsh:133:17:application', stdlib.UInt_max, '0')];
  const v2446 = v2437[stdlib.checkedBigNumberify('./raffle_token.rsh:134:23:application', stdlib.UInt_max, '1')];
  const v2447 = v2446[stdlib.checkedBigNumberify('./raffle_token.rsh:134:23:application', stdlib.UInt_max, '0')];
  const v2448 = ['None', null];
  const v2449 = {
    bal: v2445,
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v2447,
    ticketsLeft: v2399,
    winner: v2448
    };
  let v2450 = v2449;
  let v2451 = v2428;
  let v2454 = v2429;
  let v2457 = v2437;
  let v2458 = v2404;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2494 = v2450.keepGoing;
    
    return v2494;})()) {
    const v2498 = stdlib.ge(v2454, v2441);
    const v2509 = v2450.currentUserNumber;
    const v2510 = v2450.bal;
    const v2511 = v2450.ticketsLeft;
    const v2512 = v2450.raffleBal;
    const v2513 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
    const v2514 = v2513[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn4;
    switch (v2790[0]) {
      case 'User_buyTicket0_309': {
        const v2793 = v2790[1];
        undefined /* setApiDetails */;
        const v2798 = v2793[stdlib.checkedBigNumberify('./raffle_token.rsh:161:10:spread', stdlib.UInt_max, '0')];
        const v2799 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2789, ctc1), null);
        const v2800 = stdlib.fromSome(v2799, stdlib.checkedBigNumberify('./raffle_token.rsh:162:65:decimal', stdlib.UInt_max, '0'));
        const v2801 = stdlib.lt(v2454, v2441);
        stdlib.assert(v2801, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v2803 = stdlib.safeAdd(v2800, v2798);
        const v2804 = stdlib.ge(v2403, v2803);
        stdlib.assert(v2804, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Limit reached',
          who: 'Deployer'
          });
        const v2806 = stdlib.safeAdd(v2798, v2800);
        const v2807 = stdlib.le(v2806, v2399);
        stdlib.assert(v2807, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Cannot buy more tickets than balance',
          who: 'Deployer'
          });
        const v2809 = stdlib.safeMul(v2798, v2402);
        ;
        const v2928 = stdlib.add(v2514, v2809);
        const v2930 = stdlib.Array_set(v2513, '0', v2928);
        const v2931 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '0'), v2930);
        ;
        ;
        await stdlib.mapSet(map0, ctc4, v2789, ctc1, v2803);
        const v2954 = {
          address: v2789,
          amount: v2798
          };
        null;
        const v2955 = stdlib.safeAdd(v2509, stdlib.checkedBigNumberify('./raffle_token.rsh:192:33:decimal', stdlib.UInt_max, '1'));
        const v2956 = stdlib.eq(v2955, v2401);
        let v2957;
        if (v2956) {
          v2957 = true;
          }
        else {
          const v2959 = stdlib.le(v2955, v2401);
          let v2960;
          if (v2959) {
            const v2961 = stdlib.safeAdd(v2509, v2798);
            const v2962 = stdlib.ge(v2961, v2401);
            v2960 = v2962;
            }
          else {
            v2960 = false;
            }
          v2957 = v2960;
          }
        if (v2957) {
          const v2963 = true;
          await txn4.getOutput('User_buyTicket', 'v2963', ctc6, v2963);
          const v2972 = v2450.keepGoing;
          const v2973 = v2450.percent;
          const v2978 = stdlib.safeAdd(v2509, v2798);
          const v2980 = stdlib.safeAdd(v2510, v2809);
          const v2982 = stdlib.safeSub(v2511, v2798);
          const v2983 = ['Some', v2789];
          const v2984 = {
            bal: v2980,
            currentUserNumber: v2978,
            keepGoing: v2972,
            percent: v2973,
            raffleBal: v2512,
            ticketsLeft: v2982,
            winner: v2983
            };
          const cv2450 = v2984;
          const cv2451 = v2791;
          const cv2454 = v2792;
          const cv2457 = v2931;
          const cv2458 = v2458;
          
          v2450 = cv2450;
          v2451 = cv2451;
          v2454 = cv2454;
          v2457 = cv2457;
          v2458 = cv2458;
          
          txn3 = txn4;
          continue;}
        else {
          const v2986 = true;
          await txn4.getOutput('User_buyTicket', 'v2986', ctc6, v2986);
          const v2995 = v2450.keepGoing;
          const v2996 = v2450.percent;
          const v2999 = v2450.winner;
          const v3001 = stdlib.safeAdd(v2509, v2798);
          const v3003 = stdlib.safeAdd(v2510, v2809);
          const v3005 = stdlib.safeSub(v2511, v2798);
          const v3006 = {
            bal: v3003,
            currentUserNumber: v3001,
            keepGoing: v2995,
            percent: v2996,
            raffleBal: v2512,
            ticketsLeft: v3005,
            winner: v2999
            };
          const cv2450 = v3006;
          const cv2451 = v2791;
          const cv2454 = v2792;
          const cv2457 = v2931;
          const cv2458 = v2458;
          
          v2450 = cv2450;
          v2451 = cv2451;
          v2454 = cv2454;
          v2457 = cv2457;
          v2458 = cv2458;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'User_claim0_309': {
        const v3161 = v2790[1];
        undefined /* setApiDetails */;
        const v3189 = v2450.winner;
        const v3190 = {
          None: 0,
          Some: 1
          }[v3189[0]];
        const v3191 = stdlib.eq(v3190, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3191, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        const v3195 = stdlib.eq(v2511, stdlib.checkedBigNumberify('./raffle_token.rsh:270:59:decimal', stdlib.UInt_max, '0'));
        const v3196 = v2498 ? v3195 : false;
        stdlib.assert(v3196, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v3198 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '1')];
        const v3199 = v3198[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '0')];
        const v3200 = stdlib.le(v2512, v3199);
        stdlib.assert(v3200, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v3203 = stdlib.fromSome(v3189, v2395);
        const v3204 = stdlib.addressEq(v3203, v2789);
        stdlib.assert(v3204, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v3382 = stdlib.ge(v2792, v2441);
        const v3385 = v3382 ? v3195 : false;
        stdlib.assert(v3385, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:280:13:application call to [unknown function] (defined at: ./raffle_token.rsh:280:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v3402 = stdlib.sub(v3199, v3199);
        const v3404 = stdlib.Array_set(v3198, '0', v3402);
        const v3405 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:281:57:application', stdlib.UInt_max, '1'), v3404);
        ;
        const v3406 = v3405[stdlib.checkedBigNumberify('./raffle_token.rsh:282:43:application', stdlib.UInt_max, '0')];
        const v3407 = v3406[stdlib.checkedBigNumberify('./raffle_token.rsh:282:43:application', stdlib.UInt_max, '0')];
        const v3408 = stdlib.safeMul(v3407, stdlib.checkedBigNumberify('./raffle_token.rsh:282:54:decimal', stdlib.UInt_max, '5'));
        const v3409 = stdlib.safeDiv(v3408, stdlib.checkedBigNumberify('./raffle_token.rsh:282:58:decimal', stdlib.UInt_max, '100'));
        const v3412 = stdlib.safeSub(v3407, v3409);
        const v3418 = stdlib.sub(v3407, v3412);
        const v3420 = stdlib.Array_set(v3406, '0', v3418);
        const v3421 = stdlib.Array_set(v3405, stdlib.checkedBigNumberify('./raffle_token.rsh:283:60:application', stdlib.UInt_max, '0'), v3420);
        ;
        const v3422 = true;
        await txn4.getOutput('User_claim', 'v3422', ctc6, v3422);
        const v3431 = v2450.percent;
        const v3435 = v3421[stdlib.checkedBigNumberify('./raffle_token.rsh:294:25:application', stdlib.UInt_max, '0')];
        const v3436 = v3435[stdlib.checkedBigNumberify('./raffle_token.rsh:294:25:application', stdlib.UInt_max, '0')];
        const v3437 = {
          bal: v3436,
          currentUserNumber: v2509,
          keepGoing: false,
          percent: v3431,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          ticketsLeft: v2511,
          winner: v3189
          };
        const cv2450 = v3437;
        const cv2451 = v2791;
        const cv2454 = v2792;
        const cv2457 = v3421;
        const cv2458 = v2458;
        
        v2450 = cv2450;
        v2451 = cv2451;
        v2454 = cv2454;
        v2457 = cv2457;
        v2458 = cv2458;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_end0_309': {
        const v3529 = v2790[1];
        undefined /* setApiDetails */;
        const v3584 = stdlib.addressEq(v2789, v2395);
        const v3585 = stdlib.addressEq(v2789, v2408);
        const v3586 = v3584 ? true : v3585;
        stdlib.assert(v3586, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        const v3589 = stdlib.eq(v2511, v2399);
        stdlib.assert(v3589, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:307:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Cannot end contract',
          who: 'Deployer'
          });
        ;
        ;
        const v3668 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '1')];
        const v3669 = v3668[stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '0')];
        ;
        const v3815 = true;
        await txn4.getOutput('User_end', 'v3815', ctc6, v3815);
        const v3828 = stdlib.sub(v3669, v3669);
        const v3830 = stdlib.Array_set(v3668, '0', v3828);
        const v3831 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:312:57:application', stdlib.UInt_max, '1'), v3830);
        ;
        const v3835 = v2450.percent;
        const v3838 = v2450.winner;
        const v3839 = {
          bal: v2510,
          currentUserNumber: v2509,
          keepGoing: false,
          percent: v3835,
          raffleBal: v2512,
          ticketsLeft: v2511,
          winner: v3838
          };
        const cv2450 = v3839;
        const cv2451 = v2791;
        const cv2454 = v2792;
        const cv2457 = v3831;
        const cv2458 = v2458;
        
        v2450 = cv2450;
        v2451 = cv2451;
        v2454 = cv2454;
        v2457 = cv2457;
        v2458 = cv2458;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_309': {
        const v3897 = v2790[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v4210 = null;
        await txn4.getOutput('User_optin', 'v4210', ctc0, v4210);
        const cv2450 = v2450;
        const cv2451 = v2791;
        const cv2454 = v2792;
        const cv2457 = v2457;
        const cv2458 = v2458;
        
        v2450 = cv2450;
        v2451 = cv2451;
        v2454 = cv2454;
        v2457 = cv2457;
        v2458 = cv2458;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_refund0_309': {
        const v4265 = v2790[1];
        undefined /* setApiDetails */;
        const v4348 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2789, ctc1), null);
        const v4349 = stdlib.fromSome(v4348, stdlib.checkedBigNumberify('./raffle_token.rsh:234:65:decimal', stdlib.UInt_max, '0'));
        const v4350 = stdlib.safeMul(v4349, v2402);
        const v4352 = {
          None: 0,
          Some: 1
          }[v4348[0]];
        const v4353 = stdlib.eq(v4352, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2498, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Deadline not reached cannot refund',
          who: 'Deployer'
          });
        stdlib.assert(v4353, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'You do not qualify for refund',
          who: 'Deployer'
          });
        const v4357 = stdlib.gt(v4349, stdlib.checkedBigNumberify('./raffle_token.rsh:240:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4357, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'You cannot be refund cus your stake is 0',
          who: 'Deployer'
          });
        const v4361 = stdlib.le(v4350, v2514);
        stdlib.assert(v4361, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:243:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Contract balance insufficient',
          who: 'Deployer'
          });
        const v4364 = stdlib.gt(v2509, stdlib.checkedBigNumberify('./raffle_token.rsh:245:41:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4364, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
          msg: 'Can\'t get a refund because pool is empty',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v4592 = stdlib.ge(v2792, v2441);
        stdlib.assert(v4592, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:250:15:application call to [unknown function] (defined at: ./raffle_token.rsh:250:15:function exp)'],
          msg: 'Deadline not reached cannot refund',
          who: 'Deployer'
          });
        const v4609 = stdlib.sub(v2514, v4350);
        const v4611 = stdlib.Array_set(v2513, '0', v4609);
        const v4612 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:251:36:application', stdlib.UInt_max, '0'), v4611);
        ;
        await stdlib.mapSet(map0, ctc4, v2789, ctc1, stdlib.checkedBigNumberify('./raffle_token.rsh:252:33:decimal', stdlib.UInt_max, '0'));
        const v4613 = true;
        await txn4.getOutput('User_refund', 'v4613', ctc6, v4613);
        const v4621 = v2450.keepGoing;
        const v4622 = v2450.percent;
        const v4625 = v2450.winner;
        const v4626 = stdlib.safeSub(v2510, v4350);
        const v4628 = stdlib.safeSub(v2509, v4349);
        const v4630 = stdlib.safeAdd(v2511, v4349);
        const v4631 = {
          bal: v4626,
          currentUserNumber: v4628,
          keepGoing: v4621,
          percent: v4622,
          raffleBal: v2512,
          ticketsLeft: v4630,
          winner: v4625
          };
        const cv2450 = v4631;
        const cv2451 = v2791;
        const cv2454 = v2792;
        const cv2457 = v4612;
        const cv2458 = v2458;
        
        v2450 = cv2450;
        v2451 = cv2451;
        v2454 = cv2454;
        v2457 = cv2457;
        v2458 = cv2458;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v4650 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
  const v4651 = v4650[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
  ;
  const v4664 = stdlib.sub(v4651, v4651);
  const v4666 = stdlib.Array_set(v4650, '0', v4664);
  const v4667 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v4666);
  ;
  const v4668 = v4667[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
  const v4669 = v4668[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc7,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_309: ctc12,
    User_claim0_309: ctc13,
    User_end0_309: ctc13,
    User_optin0_309: ctc13,
    User_refund0_309: ctc13
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
  
  
  const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1]);
  const v2515 = ctc.selfAddress();
  const v2517 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token.rsh:1:23:application',
    fs: ['at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_buyTicket0_309" (defined at: ./raffle_token.rsh:161:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v2518 = v2517[stdlib.checkedBigNumberify('./raffle_token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2520 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2515, ctc1), null);
  const v2521 = stdlib.fromSome(v2520, stdlib.checkedBigNumberify('./raffle_token.rsh:162:65:decimal', stdlib.UInt_max, '0'));
  const v2522 = stdlib.lt(v2454, v2441);
  stdlib.assert(v2522, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_buyTicket0_309" (defined at: ./raffle_token.rsh:161:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v2524 = stdlib.safeAdd(v2521, v2518);
  const v2525 = stdlib.ge(v2403, v2524);
  stdlib.assert(v2525, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_buyTicket0_309" (defined at: ./raffle_token.rsh:161:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Limit reached',
    who: 'User_buyTicket'
    });
  const v2527 = stdlib.safeAdd(v2518, v2521);
  const v2528 = stdlib.le(v2527, v2399);
  stdlib.assert(v2528, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_buyTicket0_309" (defined at: ./raffle_token.rsh:161:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Cannot buy more tickets than balance',
    who: 'User_buyTicket'
    });
  const v2535 = ['User_buyTicket0_309', v2517];
  
  const v2625 = stdlib.safeMul(v2518, v2402);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514, v2535],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token.rsh:176:11:decimal', stdlib.UInt_max, '0'), [[v2625, v2397], [stdlib.checkedBigNumberify('./raffle_token.rsh:178:12:decimal', stdlib.UInt_max, '0'), v2405]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
      
      switch (v2790[0]) {
        case 'User_buyTicket0_309': {
          const v2793 = v2790[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v2798 = v2793[stdlib.checkedBigNumberify('./raffle_token.rsh:161:10:spread', stdlib.UInt_max, '0')];
          const v2799 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v2789, ctc1), null);
          const v2800 = stdlib.fromSome(v2799, stdlib.checkedBigNumberify('./raffle_token.rsh:162:65:decimal', stdlib.UInt_max, '0'));
          const v2803 = stdlib.safeAdd(v2800, v2798);
          const v2809 = stdlib.safeMul(v2798, v2402);
          ;
          const v2928 = stdlib.add(v2514, v2809);
          const v2930 = stdlib.Array_set(v2513, '0', v2928);
          const v2931 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '0'), v2930);
          sim_r.txns.push({
            amt: v2809,
            kind: 'to',
            tok: v2397
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc4, v2789, ctc1, v2803);
          const v2954 = {
            address: v2789,
            amount: v2798
            };
          null;
          const v2955 = stdlib.safeAdd(v2509, stdlib.checkedBigNumberify('./raffle_token.rsh:192:33:decimal', stdlib.UInt_max, '1'));
          const v2956 = stdlib.eq(v2955, v2401);
          let v2957;
          if (v2956) {
            v2957 = true;
            }
          else {
            const v2959 = stdlib.le(v2955, v2401);
            let v2960;
            if (v2959) {
              const v2961 = stdlib.safeAdd(v2509, v2798);
              const v2962 = stdlib.ge(v2961, v2401);
              v2960 = v2962;
              }
            else {
              v2960 = false;
              }
            v2957 = v2960;
            }
          if (v2957) {
            const v2963 = true;
            const v2964 = await txn1.getOutput('User_buyTicket', 'v2963', ctc7, v2963);
            
            const v2972 = v2450.keepGoing;
            const v2973 = v2450.percent;
            const v2978 = stdlib.safeAdd(v2509, v2798);
            const v2980 = stdlib.safeAdd(v2510, v2809);
            const v2982 = stdlib.safeSub(v2511, v2798);
            const v2983 = ['Some', v2789];
            const v2984 = {
              bal: v2980,
              currentUserNumber: v2978,
              keepGoing: v2972,
              percent: v2973,
              raffleBal: v2512,
              ticketsLeft: v2982,
              winner: v2983
              };
            const v6725 = v2984;
            const v6727 = v2792;
            const v6728 = v2931;
            const v6729 = v2458;
            const v6730 = v2984.keepGoing;
            if (v6730) {
              const v6731 = stdlib.ge(v2792, v2441);
              const v6732 = v2984.currentUserNumber;
              const v6733 = v2984.bal;
              const v6734 = v2984.ticketsLeft;
              const v6735 = v2984.raffleBal;
              const v6736 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              const v6737 = v6736[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v6739 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              const v6740 = v6739[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2408,
                tok: undefined /* Nothing */
                });
              const v6741 = stdlib.sub(v6740, v6740);
              const v6742 = stdlib.Array_set(v6739, '0', v6741);
              const v6743 = stdlib.Array_set(v2931, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v6742);
              sim_r.txns.push({
                kind: 'from',
                to: v2408,
                tok: v2397
                });
              const v6744 = v6743[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
              const v6745 = v6744[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2408,
                tok: v2405
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2405
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v2397
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v2986 = true;
            const v2987 = await txn1.getOutput('User_buyTicket', 'v2986', ctc7, v2986);
            
            const v2995 = v2450.keepGoing;
            const v2996 = v2450.percent;
            const v2999 = v2450.winner;
            const v3001 = stdlib.safeAdd(v2509, v2798);
            const v3003 = stdlib.safeAdd(v2510, v2809);
            const v3005 = stdlib.safeSub(v2511, v2798);
            const v3006 = {
              bal: v3003,
              currentUserNumber: v3001,
              keepGoing: v2995,
              percent: v2996,
              raffleBal: v2512,
              ticketsLeft: v3005,
              winner: v2999
              };
            const v6746 = v3006;
            const v6748 = v2792;
            const v6749 = v2931;
            const v6750 = v2458;
            const v6751 = v3006.keepGoing;
            if (v6751) {
              const v6752 = stdlib.ge(v2792, v2441);
              const v6753 = v3006.currentUserNumber;
              const v6754 = v3006.bal;
              const v6755 = v3006.ticketsLeft;
              const v6756 = v3006.raffleBal;
              const v6757 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              const v6758 = v6757[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v6760 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              const v6761 = v6760[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2408,
                tok: undefined /* Nothing */
                });
              const v6762 = stdlib.sub(v6761, v6761);
              const v6763 = stdlib.Array_set(v6760, '0', v6762);
              const v6764 = stdlib.Array_set(v2931, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v6763);
              sim_r.txns.push({
                kind: 'from',
                to: v2408,
                tok: v2397
                });
              const v6765 = v6764[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
              const v6766 = v6765[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2408,
                tok: v2405
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2405
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v2397
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'User_claim0_309': {
          const v3161 = v2790[1];
          
          break;
          }
        case 'User_end0_309': {
          const v3529 = v2790[1];
          
          break;
          }
        case 'User_optin0_309': {
          const v3897 = v2790[1];
          
          break;
          }
        case 'User_refund0_309': {
          const v4265 = v2790[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
  switch (v2790[0]) {
    case 'User_buyTicket0_309': {
      const v2793 = v2790[1];
      undefined /* setApiDetails */;
      const v2798 = v2793[stdlib.checkedBigNumberify('./raffle_token.rsh:161:10:spread', stdlib.UInt_max, '0')];
      const v2799 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2789, ctc1), null);
      const v2800 = stdlib.fromSome(v2799, stdlib.checkedBigNumberify('./raffle_token.rsh:162:65:decimal', stdlib.UInt_max, '0'));
      const v2801 = stdlib.lt(v2454, v2441);
      stdlib.assert(v2801, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v2803 = stdlib.safeAdd(v2800, v2798);
      const v2804 = stdlib.ge(v2403, v2803);
      stdlib.assert(v2804, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Limit reached',
        who: 'User_buyTicket'
        });
      const v2806 = stdlib.safeAdd(v2798, v2800);
      const v2807 = stdlib.le(v2806, v2399);
      stdlib.assert(v2807, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Cannot buy more tickets than balance',
        who: 'User_buyTicket'
        });
      const v2809 = stdlib.safeMul(v2798, v2402);
      ;
      const v2928 = stdlib.add(v2514, v2809);
      const v2930 = stdlib.Array_set(v2513, '0', v2928);
      const v2931 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '0'), v2930);
      ;
      ;
      await stdlib.mapSet(map0, ctc4, v2789, ctc1, v2803);
      const v2954 = {
        address: v2789,
        amount: v2798
        };
      null;
      const v2955 = stdlib.safeAdd(v2509, stdlib.checkedBigNumberify('./raffle_token.rsh:192:33:decimal', stdlib.UInt_max, '1'));
      const v2956 = stdlib.eq(v2955, v2401);
      let v2957;
      if (v2956) {
        v2957 = true;
        }
      else {
        const v2959 = stdlib.le(v2955, v2401);
        let v2960;
        if (v2959) {
          const v2961 = stdlib.safeAdd(v2509, v2798);
          const v2962 = stdlib.ge(v2961, v2401);
          v2960 = v2962;
          }
        else {
          v2960 = false;
          }
        v2957 = v2960;
        }
      if (v2957) {
        const v2963 = true;
        const v2964 = await txn1.getOutput('User_buyTicket', 'v2963', ctc7, v2963);
        if (v1674) {
          stdlib.protect(ctc0, await interact.out(v2793, v2964), {
            at: './raffle_token.rsh:161:11:application',
            fs: ['at ./raffle_token.rsh:161:11:application call to [unknown function] (defined at: ./raffle_token.rsh:161:11:function exp)', 'at ./raffle_token.rsh:198:16:application call to "ret" (defined at: ./raffle_token.rsh:180:15:function exp)', 'at ./raffle_token.rsh:180:15:application call to [unknown function] (defined at: ./raffle_token.rsh:180:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2972 = v2450.keepGoing;
        const v2973 = v2450.percent;
        const v2978 = stdlib.safeAdd(v2509, v2798);
        const v2980 = stdlib.safeAdd(v2510, v2809);
        const v2982 = stdlib.safeSub(v2511, v2798);
        const v2983 = ['Some', v2789];
        const v2984 = {
          bal: v2980,
          currentUserNumber: v2978,
          keepGoing: v2972,
          percent: v2973,
          raffleBal: v2512,
          ticketsLeft: v2982,
          winner: v2983
          };
        const v6725 = v2984;
        const v6727 = v2792;
        const v6728 = v2931;
        const v6729 = v2458;
        const v6730 = v2984.keepGoing;
        if (v6730) {
          const v6731 = stdlib.ge(v2792, v2441);
          const v6732 = v2984.currentUserNumber;
          const v6733 = v2984.bal;
          const v6734 = v2984.ticketsLeft;
          const v6735 = v2984.raffleBal;
          const v6736 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          const v6737 = v6736[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v6739 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          const v6740 = v6739[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          ;
          const v6741 = stdlib.sub(v6740, v6740);
          const v6742 = stdlib.Array_set(v6739, '0', v6741);
          const v6743 = stdlib.Array_set(v2931, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v6742);
          ;
          const v6744 = v6743[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
          const v6745 = v6744[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v2986 = true;
        const v2987 = await txn1.getOutput('User_buyTicket', 'v2986', ctc7, v2986);
        if (v1674) {
          stdlib.protect(ctc0, await interact.out(v2793, v2987), {
            at: './raffle_token.rsh:161:11:application',
            fs: ['at ./raffle_token.rsh:161:11:application call to [unknown function] (defined at: ./raffle_token.rsh:161:11:function exp)', 'at ./raffle_token.rsh:208:16:application call to "ret" (defined at: ./raffle_token.rsh:180:15:function exp)', 'at ./raffle_token.rsh:180:15:application call to [unknown function] (defined at: ./raffle_token.rsh:180:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2995 = v2450.keepGoing;
        const v2996 = v2450.percent;
        const v2999 = v2450.winner;
        const v3001 = stdlib.safeAdd(v2509, v2798);
        const v3003 = stdlib.safeAdd(v2510, v2809);
        const v3005 = stdlib.safeSub(v2511, v2798);
        const v3006 = {
          bal: v3003,
          currentUserNumber: v3001,
          keepGoing: v2995,
          percent: v2996,
          raffleBal: v2512,
          ticketsLeft: v3005,
          winner: v2999
          };
        const v6746 = v3006;
        const v6748 = v2792;
        const v6749 = v2931;
        const v6750 = v2458;
        const v6751 = v3006.keepGoing;
        if (v6751) {
          const v6752 = stdlib.ge(v2792, v2441);
          const v6753 = v3006.currentUserNumber;
          const v6754 = v3006.bal;
          const v6755 = v3006.ticketsLeft;
          const v6756 = v3006.raffleBal;
          const v6757 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          const v6758 = v6757[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v6760 = v2931[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          const v6761 = v6760[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
          ;
          const v6762 = stdlib.sub(v6761, v6761);
          const v6763 = stdlib.Array_set(v6760, '0', v6762);
          const v6764 = stdlib.Array_set(v2931, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v6763);
          ;
          const v6765 = v6764[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
          const v6766 = v6765[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      break;
      }
    case 'User_claim0_309': {
      const v3161 = v2790[1];
      return;
      break;
      }
    case 'User_end0_309': {
      const v3529 = v2790[1];
      return;
      break;
      }
    case 'User_optin0_309': {
      const v3897 = v2790[1];
      return;
      break;
      }
    case 'User_refund0_309': {
      const v4265 = v2790[1];
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc7,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_309: ctc13,
    User_claim0_309: ctc12,
    User_end0_309: ctc12,
    User_optin0_309: ctc12,
    User_refund0_309: ctc12
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
  
  
  const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1]);
  const v2572 = ctc.selfAddress();
  const v2574 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token.rsh:1:23:application',
    fs: ['at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_claim0_309" (defined at: ./raffle_token.rsh:265:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2576 = v2450.winner;
  const v2577 = {
    None: 0,
    Some: 1
    }[v2576[0]];
  const v2578 = stdlib.eq(v2577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2578, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_claim0_309" (defined at: ./raffle_token.rsh:265:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  const v2582 = stdlib.eq(v2511, stdlib.checkedBigNumberify('./raffle_token.rsh:270:59:decimal', stdlib.UInt_max, '0'));
  const v2583 = v2498 ? v2582 : false;
  stdlib.assert(v2583, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_claim0_309" (defined at: ./raffle_token.rsh:265:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v2585 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '1')];
  const v2586 = v2585[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '0')];
  const v2587 = stdlib.le(v2512, v2586);
  stdlib.assert(v2587, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_claim0_309" (defined at: ./raffle_token.rsh:265:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v2590 = stdlib.fromSome(v2576, v2395);
  const v2591 = stdlib.addressEq(v2590, v2572);
  stdlib.assert(v2591, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_claim0_309" (defined at: ./raffle_token.rsh:265:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v2596 = ['User_claim0_309', v2574];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514, v2596],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token.rsh:279:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token.rsh:279:14:decimal', stdlib.UInt_max, '0'), v2397], [stdlib.checkedBigNumberify('./raffle_token.rsh:279:28:decimal', stdlib.UInt_max, '0'), v2405]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
      
      switch (v2790[0]) {
        case 'User_buyTicket0_309': {
          const v2793 = v2790[1];
          
          break;
          }
        case 'User_claim0_309': {
          const v3161 = v2790[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v3189 = v2450.winner;
          const v3198 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '1')];
          const v3199 = v3198[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '0')];
          const v3203 = stdlib.fromSome(v3189, v2395);
          ;
          ;
          ;
          const v3402 = stdlib.sub(v3199, v3199);
          const v3404 = stdlib.Array_set(v3198, '0', v3402);
          const v3405 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:281:57:application', stdlib.UInt_max, '1'), v3404);
          sim_r.txns.push({
            kind: 'from',
            to: v3203,
            tok: v2405
            });
          const v3406 = v3405[stdlib.checkedBigNumberify('./raffle_token.rsh:282:43:application', stdlib.UInt_max, '0')];
          const v3407 = v3406[stdlib.checkedBigNumberify('./raffle_token.rsh:282:43:application', stdlib.UInt_max, '0')];
          const v3408 = stdlib.safeMul(v3407, stdlib.checkedBigNumberify('./raffle_token.rsh:282:54:decimal', stdlib.UInt_max, '5'));
          const v3409 = stdlib.safeDiv(v3408, stdlib.checkedBigNumberify('./raffle_token.rsh:282:58:decimal', stdlib.UInt_max, '100'));
          const v3412 = stdlib.safeSub(v3407, v3409);
          const v3418 = stdlib.sub(v3407, v3412);
          const v3420 = stdlib.Array_set(v3406, '0', v3418);
          const v3421 = stdlib.Array_set(v3405, stdlib.checkedBigNumberify('./raffle_token.rsh:283:60:application', stdlib.UInt_max, '0'), v3420);
          sim_r.txns.push({
            kind: 'from',
            to: v2395,
            tok: v2397
            });
          const v3422 = true;
          const v3423 = await txn1.getOutput('User_claim', 'v3422', ctc7, v3422);
          
          const v3431 = v2450.percent;
          const v3435 = v3421[stdlib.checkedBigNumberify('./raffle_token.rsh:294:25:application', stdlib.UInt_max, '0')];
          const v3436 = v3435[stdlib.checkedBigNumberify('./raffle_token.rsh:294:25:application', stdlib.UInt_max, '0')];
          const v3437 = {
            bal: v3436,
            currentUserNumber: v2509,
            keepGoing: false,
            percent: v3431,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ticketsLeft: v2511,
            winner: v3189
            };
          const v6893 = v3437;
          const v6895 = v2792;
          const v6896 = v3421;
          const v6897 = v2458;
          const v6898 = v3437.keepGoing;
          if (v6898) {
            const v6900 = v3437.currentUserNumber;
            const v6901 = v3437.bal;
            const v6902 = v3437.ticketsLeft;
            const v6903 = v3437.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: undefined /* Nothing */
              });
            const v6909 = stdlib.sub(v3436, v3436);
            const v6910 = stdlib.Array_set(v3435, '0', v6909);
            const v6911 = stdlib.Array_set(v3421, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v6910);
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2397
              });
            const v6912 = v6911[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
            const v6913 = v6912[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2405
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2405
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2397
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_end0_309': {
          const v3529 = v2790[1];
          
          break;
          }
        case 'User_optin0_309': {
          const v3897 = v2790[1];
          
          break;
          }
        case 'User_refund0_309': {
          const v4265 = v2790[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
  switch (v2790[0]) {
    case 'User_buyTicket0_309': {
      const v2793 = v2790[1];
      return;
      break;
      }
    case 'User_claim0_309': {
      const v3161 = v2790[1];
      undefined /* setApiDetails */;
      const v3189 = v2450.winner;
      const v3190 = {
        None: 0,
        Some: 1
        }[v3189[0]];
      const v3191 = stdlib.eq(v3190, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3191, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      const v3195 = stdlib.eq(v2511, stdlib.checkedBigNumberify('./raffle_token.rsh:270:59:decimal', stdlib.UInt_max, '0'));
      const v3196 = v2498 ? v3195 : false;
      stdlib.assert(v3196, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v3198 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '1')];
      const v3199 = v3198[stdlib.checkedBigNumberify('./raffle_token.rsh:273:33:application', stdlib.UInt_max, '0')];
      const v3200 = stdlib.le(v2512, v3199);
      stdlib.assert(v3200, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v3203 = stdlib.fromSome(v3189, v2395);
      const v3204 = stdlib.addressEq(v3203, v2789);
      stdlib.assert(v3204, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      ;
      const v3382 = stdlib.ge(v2792, v2441);
      const v3385 = v3382 ? v3195 : false;
      stdlib.assert(v3385, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:280:13:application call to [unknown function] (defined at: ./raffle_token.rsh:280:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v3402 = stdlib.sub(v3199, v3199);
      const v3404 = stdlib.Array_set(v3198, '0', v3402);
      const v3405 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:281:57:application', stdlib.UInt_max, '1'), v3404);
      ;
      const v3406 = v3405[stdlib.checkedBigNumberify('./raffle_token.rsh:282:43:application', stdlib.UInt_max, '0')];
      const v3407 = v3406[stdlib.checkedBigNumberify('./raffle_token.rsh:282:43:application', stdlib.UInt_max, '0')];
      const v3408 = stdlib.safeMul(v3407, stdlib.checkedBigNumberify('./raffle_token.rsh:282:54:decimal', stdlib.UInt_max, '5'));
      const v3409 = stdlib.safeDiv(v3408, stdlib.checkedBigNumberify('./raffle_token.rsh:282:58:decimal', stdlib.UInt_max, '100'));
      const v3412 = stdlib.safeSub(v3407, v3409);
      const v3418 = stdlib.sub(v3407, v3412);
      const v3420 = stdlib.Array_set(v3406, '0', v3418);
      const v3421 = stdlib.Array_set(v3405, stdlib.checkedBigNumberify('./raffle_token.rsh:283:60:application', stdlib.UInt_max, '0'), v3420);
      ;
      const v3422 = true;
      const v3423 = await txn1.getOutput('User_claim', 'v3422', ctc7, v3422);
      if (v1674) {
        stdlib.protect(ctc0, await interact.out(v3161, v3423), {
          at: './raffle_token.rsh:265:11:application',
          fs: ['at ./raffle_token.rsh:265:11:application call to [unknown function] (defined at: ./raffle_token.rsh:265:11:function exp)', 'at ./raffle_token.rsh:284:12:application call to "k" (defined at: ./raffle_token.rsh:280:13:function exp)', 'at ./raffle_token.rsh:280:13:application call to [unknown function] (defined at: ./raffle_token.rsh:280:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v3431 = v2450.percent;
      const v3435 = v3421[stdlib.checkedBigNumberify('./raffle_token.rsh:294:25:application', stdlib.UInt_max, '0')];
      const v3436 = v3435[stdlib.checkedBigNumberify('./raffle_token.rsh:294:25:application', stdlib.UInt_max, '0')];
      const v3437 = {
        bal: v3436,
        currentUserNumber: v2509,
        keepGoing: false,
        percent: v3431,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ticketsLeft: v2511,
        winner: v3189
        };
      const v6893 = v3437;
      const v6895 = v2792;
      const v6896 = v3421;
      const v6897 = v2458;
      const v6898 = v3437.keepGoing;
      if (v6898) {
        const v6900 = v3437.currentUserNumber;
        const v6901 = v3437.bal;
        const v6902 = v3437.ticketsLeft;
        const v6903 = v3437.raffleBal;
        return;
        }
      else {
        ;
        const v6909 = stdlib.sub(v3436, v3436);
        const v6910 = stdlib.Array_set(v3435, '0', v6909);
        const v6911 = stdlib.Array_set(v3421, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v6910);
        ;
        const v6912 = v6911[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
        const v6913 = v6912[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_end0_309': {
      const v3529 = v2790[1];
      return;
      break;
      }
    case 'User_optin0_309': {
      const v3897 = v2790[1];
      return;
      break;
      }
    case 'User_refund0_309': {
      const v4265 = v2790[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_end4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_end4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_end4 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc7,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_309: ctc13,
    User_claim0_309: ctc12,
    User_end0_309: ctc12,
    User_optin0_309: ctc12,
    User_refund0_309: ctc12
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
  
  
  const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1]);
  const v2598 = ctc.selfAddress();
  const v2600 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token.rsh:1:23:application',
    fs: ['at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_end0_309" (defined at: ./raffle_token.rsh:300:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'in',
    who: 'User_end'
    });
  const v2601 = stdlib.addressEq(v2598, v2395);
  const v2602 = stdlib.addressEq(v2598, v2408);
  const v2603 = v2601 ? true : v2602;
  stdlib.assert(v2603, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_end0_309" (defined at: ./raffle_token.rsh:300:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_end'
    });
  const v2606 = stdlib.eq(v2511, v2399);
  stdlib.assert(v2606, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:307:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_end0_309" (defined at: ./raffle_token.rsh:300:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Cannot end contract',
    who: 'User_end'
    });
  const v2611 = ['User_end0_309', v2600];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514, v2611],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token.rsh:309:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token.rsh:309:14:decimal', stdlib.UInt_max, '0'), v2397], [stdlib.checkedBigNumberify('./raffle_token.rsh:309:28:decimal', stdlib.UInt_max, '0'), v2405]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
      
      switch (v2790[0]) {
        case 'User_buyTicket0_309': {
          const v2793 = v2790[1];
          
          break;
          }
        case 'User_claim0_309': {
          const v3161 = v2790[1];
          
          break;
          }
        case 'User_end0_309': {
          const v3529 = v2790[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_end"
            });
          ;
          ;
          const v3668 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '1')];
          const v3669 = v3668[stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '0')];
          ;
          const v3815 = true;
          const v3816 = await txn1.getOutput('User_end', 'v3815', ctc7, v3815);
          
          const v3828 = stdlib.sub(v3669, v3669);
          const v3830 = stdlib.Array_set(v3668, '0', v3828);
          const v3831 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:312:57:application', stdlib.UInt_max, '1'), v3830);
          sim_r.txns.push({
            kind: 'from',
            to: v2789,
            tok: v2405
            });
          const v3835 = v2450.percent;
          const v3838 = v2450.winner;
          const v3839 = {
            bal: v2510,
            currentUserNumber: v2509,
            keepGoing: false,
            percent: v3835,
            raffleBal: v2512,
            ticketsLeft: v2511,
            winner: v3838
            };
          const v7040 = v3839;
          const v7042 = v2792;
          const v7043 = v3831;
          const v7044 = v2458;
          const v7045 = v3839.keepGoing;
          if (v7045) {
            const v7046 = stdlib.ge(v2792, v2441);
            const v7047 = v3839.currentUserNumber;
            const v7048 = v3839.bal;
            const v7049 = v3839.ticketsLeft;
            const v7050 = v3839.raffleBal;
            const v7051 = v3831[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            const v7052 = v7051[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v7054 = v3831[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            const v7055 = v7054[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: undefined /* Nothing */
              });
            const v7056 = stdlib.sub(v7055, v7055);
            const v7057 = stdlib.Array_set(v7054, '0', v7056);
            const v7058 = stdlib.Array_set(v3831, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v7057);
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2397
              });
            const v7059 = v7058[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
            const v7060 = v7059[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2405
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2405
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2397
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_optin0_309': {
          const v3897 = v2790[1];
          
          break;
          }
        case 'User_refund0_309': {
          const v4265 = v2790[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
  switch (v2790[0]) {
    case 'User_buyTicket0_309': {
      const v2793 = v2790[1];
      return;
      break;
      }
    case 'User_claim0_309': {
      const v3161 = v2790[1];
      return;
      break;
      }
    case 'User_end0_309': {
      const v3529 = v2790[1];
      undefined /* setApiDetails */;
      const v3584 = stdlib.addressEq(v2789, v2395);
      const v3585 = stdlib.addressEq(v2789, v2408);
      const v3586 = v3584 ? true : v3585;
      stdlib.assert(v3586, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_end'
        });
      const v3589 = stdlib.eq(v2511, v2399);
      stdlib.assert(v3589, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:307:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Cannot end contract',
        who: 'User_end'
        });
      ;
      ;
      const v3668 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '1')];
      const v3669 = v3668[stdlib.checkedBigNumberify('./raffle_token.rsh:130:37:dot', stdlib.UInt_max, '0')];
      ;
      const v3815 = true;
      const v3816 = await txn1.getOutput('User_end', 'v3815', ctc7, v3815);
      if (v1674) {
        stdlib.protect(ctc0, await interact.out(v3529, v3816), {
          at: './raffle_token.rsh:300:11:application',
          fs: ['at ./raffle_token.rsh:300:11:application call to [unknown function] (defined at: ./raffle_token.rsh:300:11:function exp)', 'at ./raffle_token.rsh:311:14:application call to "ret" (defined at: ./raffle_token.rsh:310:15:function exp)', 'at ./raffle_token.rsh:310:15:application call to [unknown function] (defined at: ./raffle_token.rsh:310:15:function exp)'],
          msg: 'out',
          who: 'User_end'
          });
        }
      else {
        }
      
      const v3828 = stdlib.sub(v3669, v3669);
      const v3830 = stdlib.Array_set(v3668, '0', v3828);
      const v3831 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:312:57:application', stdlib.UInt_max, '1'), v3830);
      ;
      const v3835 = v2450.percent;
      const v3838 = v2450.winner;
      const v3839 = {
        bal: v2510,
        currentUserNumber: v2509,
        keepGoing: false,
        percent: v3835,
        raffleBal: v2512,
        ticketsLeft: v2511,
        winner: v3838
        };
      const v7040 = v3839;
      const v7042 = v2792;
      const v7043 = v3831;
      const v7044 = v2458;
      const v7045 = v3839.keepGoing;
      if (v7045) {
        const v7046 = stdlib.ge(v2792, v2441);
        const v7047 = v3839.currentUserNumber;
        const v7048 = v3839.bal;
        const v7049 = v3839.ticketsLeft;
        const v7050 = v3839.raffleBal;
        const v7051 = v3831[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v7052 = v7051[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v7054 = v3831[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v7055 = v7054[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        ;
        const v7056 = stdlib.sub(v7055, v7055);
        const v7057 = stdlib.Array_set(v7054, '0', v7056);
        const v7058 = stdlib.Array_set(v3831, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v7057);
        ;
        const v7059 = v7058[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
        const v7060 = v7059[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_309': {
      const v3897 = v2790[1];
      return;
      break;
      }
    case 'User_refund0_309': {
      const v4265 = v2790[1];
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc7,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_309: ctc13,
    User_claim0_309: ctc12,
    User_end0_309: ctc12,
    User_optin0_309: ctc12,
    User_refund0_309: ctc12
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
  
  
  const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1]);
  const v2539 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token.rsh:1:23:application',
    fs: ['at ./raffle_token.rsh:221:26:application call to [unknown function] (defined at: ./raffle_token.rsh:221:26:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_optin0_309" (defined at: ./raffle_token.rsh:221:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2543 = ['User_optin0_309', v2539];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514, v2543],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token.rsh:223:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token.rsh:223:14:decimal', stdlib.UInt_max, '0'), v2397], [stdlib.checkedBigNumberify('./raffle_token.rsh:223:28:decimal', stdlib.UInt_max, '0'), v2405]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
      
      switch (v2790[0]) {
        case 'User_buyTicket0_309': {
          const v2793 = v2790[1];
          
          break;
          }
        case 'User_claim0_309': {
          const v3161 = v2790[1];
          
          break;
          }
        case 'User_end0_309': {
          const v3529 = v2790[1];
          
          break;
          }
        case 'User_optin0_309': {
          const v3897 = v2790[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          ;
          const v4210 = null;
          const v4211 = await txn1.getOutput('User_optin', 'v4210', ctc0, v4210);
          
          const v7187 = v2450;
          const v7189 = v2792;
          const v7190 = v2457;
          const v7191 = v2458;
          const v7192 = v2450.keepGoing;
          if (v7192) {
            const v7193 = stdlib.ge(v2792, v2441);
            const v7194 = v2450.currentUserNumber;
            const v7195 = v2450.bal;
            const v7196 = v2450.ticketsLeft;
            const v7197 = v2450.raffleBal;
            const v7198 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            const v7199 = v7198[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v7201 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            const v7202 = v7201[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: undefined /* Nothing */
              });
            const v7203 = stdlib.sub(v7202, v7202);
            const v7204 = stdlib.Array_set(v7201, '0', v7203);
            const v7205 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v7204);
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2397
              });
            const v7206 = v7205[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
            const v7207 = v7206[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2405
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2405
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2397
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_refund0_309': {
          const v4265 = v2790[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
  switch (v2790[0]) {
    case 'User_buyTicket0_309': {
      const v2793 = v2790[1];
      return;
      break;
      }
    case 'User_claim0_309': {
      const v3161 = v2790[1];
      return;
      break;
      }
    case 'User_end0_309': {
      const v3529 = v2790[1];
      return;
      break;
      }
    case 'User_optin0_309': {
      const v3897 = v2790[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v4210 = null;
      const v4211 = await txn1.getOutput('User_optin', 'v4210', ctc0, v4210);
      if (v1674) {
        stdlib.protect(ctc0, await interact.out(v3897, v4211), {
          at: './raffle_token.rsh:221:11:application',
          fs: ['at ./raffle_token.rsh:221:11:application call to [unknown function] (defined at: ./raffle_token.rsh:221:11:function exp)', 'at ./raffle_token.rsh:226:14:application call to "ret" (defined at: ./raffle_token.rsh:224:15:function exp)', 'at ./raffle_token.rsh:224:15:application call to [unknown function] (defined at: ./raffle_token.rsh:224:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v7187 = v2450;
      const v7189 = v2792;
      const v7190 = v2457;
      const v7191 = v2458;
      const v7192 = v2450.keepGoing;
      if (v7192) {
        const v7193 = stdlib.ge(v2792, v2441);
        const v7194 = v2450.currentUserNumber;
        const v7195 = v2450.bal;
        const v7196 = v2450.ticketsLeft;
        const v7197 = v2450.raffleBal;
        const v7198 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v7199 = v7198[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v7201 = v2457[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v7202 = v7201[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        ;
        const v7203 = stdlib.sub(v7202, v7202);
        const v7204 = stdlib.Array_set(v7201, '0', v7203);
        const v7205 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v7204);
        ;
        const v7206 = v7205[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
        const v7207 = v7206[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_refund0_309': {
      const v4265 = v2790[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_refund4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_refund4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_refund4 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc7,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_309: ctc13,
    User_claim0_309: ctc12,
    User_end0_309: ctc12,
    User_optin0_309: ctc12,
    User_refund0_309: ctc12
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
  
  
  const [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1]);
  const v2545 = ctc.selfAddress();
  const v2547 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token.rsh:1:23:application',
    fs: ['at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_refund0_309" (defined at: ./raffle_token.rsh:231:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'in',
    who: 'User_refund'
    });
  const v2549 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2545, ctc1), null);
  const v2550 = stdlib.fromSome(v2549, stdlib.checkedBigNumberify('./raffle_token.rsh:234:65:decimal', stdlib.UInt_max, '0'));
  const v2551 = stdlib.safeMul(v2550, v2402);
  const v2553 = {
    None: 0,
    Some: 1
    }[v2549[0]];
  const v2554 = stdlib.eq(v2553, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2498, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_refund0_309" (defined at: ./raffle_token.rsh:231:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Deadline not reached cannot refund',
    who: 'User_refund'
    });
  stdlib.assert(v2554, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_refund0_309" (defined at: ./raffle_token.rsh:231:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'You do not qualify for refund',
    who: 'User_refund'
    });
  const v2558 = stdlib.gt(v2550, stdlib.checkedBigNumberify('./raffle_token.rsh:240:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2558, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_refund0_309" (defined at: ./raffle_token.rsh:231:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'You cannot be refund cus your stake is 0',
    who: 'User_refund'
    });
  const v2562 = stdlib.le(v2551, v2514);
  stdlib.assert(v2562, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:243:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_refund0_309" (defined at: ./raffle_token.rsh:231:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Contract balance insufficient',
    who: 'User_refund'
    });
  const v2565 = stdlib.gt(v2509, stdlib.checkedBigNumberify('./raffle_token.rsh:245:41:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2565, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to "runUser_refund0_309" (defined at: ./raffle_token.rsh:231:10:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)'],
    msg: 'Can\'t get a refund because pool is empty',
    who: 'User_refund'
    });
  const v2570 = ['User_refund0_309', v2547];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2402, v2403, v2405, v2406, v2407, v2408, v2441, v2450, v2454, v2457, v2458, v2498, v2509, v2510, v2511, v2512, v2513, v2514, v2570],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token.rsh:249:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token.rsh:249:14:decimal', stdlib.UInt_max, '0'), v2397], [stdlib.checkedBigNumberify('./raffle_token.rsh:249:28:decimal', stdlib.UInt_max, '0'), v2405]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
      
      switch (v2790[0]) {
        case 'User_buyTicket0_309': {
          const v2793 = v2790[1];
          
          break;
          }
        case 'User_claim0_309': {
          const v3161 = v2790[1];
          
          break;
          }
        case 'User_end0_309': {
          const v3529 = v2790[1];
          
          break;
          }
        case 'User_optin0_309': {
          const v3897 = v2790[1];
          
          break;
          }
        case 'User_refund0_309': {
          const v4265 = v2790[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_refund"
            });
          const v4348 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v2789, ctc1), null);
          const v4349 = stdlib.fromSome(v4348, stdlib.checkedBigNumberify('./raffle_token.rsh:234:65:decimal', stdlib.UInt_max, '0'));
          const v4350 = stdlib.safeMul(v4349, v2402);
          ;
          ;
          ;
          const v4609 = stdlib.sub(v2514, v4350);
          const v4611 = stdlib.Array_set(v2513, '0', v4609);
          const v4612 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:251:36:application', stdlib.UInt_max, '0'), v4611);
          sim_r.txns.push({
            kind: 'from',
            to: v2789,
            tok: v2397
            });
          await stdlib.simMapSet(sim_r, 0, ctc4, v2789, ctc1, stdlib.checkedBigNumberify('./raffle_token.rsh:252:33:decimal', stdlib.UInt_max, '0'));
          const v4613 = true;
          const v4614 = await txn1.getOutput('User_refund', 'v4613', ctc7, v4613);
          
          const v4621 = v2450.keepGoing;
          const v4622 = v2450.percent;
          const v4625 = v2450.winner;
          const v4626 = stdlib.safeSub(v2510, v4350);
          const v4628 = stdlib.safeSub(v2509, v4349);
          const v4630 = stdlib.safeAdd(v2511, v4349);
          const v4631 = {
            bal: v4626,
            currentUserNumber: v4628,
            keepGoing: v4621,
            percent: v4622,
            raffleBal: v2512,
            ticketsLeft: v4630,
            winner: v4625
            };
          const v7334 = v4631;
          const v7336 = v2792;
          const v7337 = v4612;
          const v7338 = v2458;
          const v7339 = v4631.keepGoing;
          if (v7339) {
            const v7341 = v4631.currentUserNumber;
            const v7342 = v4631.bal;
            const v7343 = v4631.ticketsLeft;
            const v7344 = v4631.raffleBal;
            const v7345 = v4612[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            const v7346 = v7345[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v7348 = v4612[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            const v7349 = v7348[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: undefined /* Nothing */
              });
            const v7350 = stdlib.sub(v7349, v7349);
            const v7351 = stdlib.Array_set(v7348, '0', v7350);
            const v7352 = stdlib.Array_set(v4612, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v7351);
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2397
              });
            const v7353 = v7352[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
            const v7354 = v7353[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2408,
              tok: v2405
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2405
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2397
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
    tys: [ctc4, ctc5, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2790], secs: v2792, time: v2791, didSend: v1674, from: v2789 } = txn1;
  switch (v2790[0]) {
    case 'User_buyTicket0_309': {
      const v2793 = v2790[1];
      return;
      break;
      }
    case 'User_claim0_309': {
      const v3161 = v2790[1];
      return;
      break;
      }
    case 'User_end0_309': {
      const v3529 = v2790[1];
      return;
      break;
      }
    case 'User_optin0_309': {
      const v3897 = v2790[1];
      return;
      break;
      }
    case 'User_refund0_309': {
      const v4265 = v2790[1];
      undefined /* setApiDetails */;
      const v4348 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2789, ctc1), null);
      const v4349 = stdlib.fromSome(v4348, stdlib.checkedBigNumberify('./raffle_token.rsh:234:65:decimal', stdlib.UInt_max, '0'));
      const v4350 = stdlib.safeMul(v4349, v2402);
      const v4352 = {
        None: 0,
        Some: 1
        }[v4348[0]];
      const v4353 = stdlib.eq(v4352, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2498, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Deadline not reached cannot refund',
        who: 'User_refund'
        });
      stdlib.assert(v4353, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'You do not qualify for refund',
        who: 'User_refund'
        });
      const v4357 = stdlib.gt(v4349, stdlib.checkedBigNumberify('./raffle_token.rsh:240:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4357, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'You cannot be refund cus your stake is 0',
        who: 'User_refund'
        });
      const v4361 = stdlib.le(v4350, v2514);
      stdlib.assert(v4361, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:243:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Contract balance insufficient',
        who: 'User_refund'
        });
      const v4364 = stdlib.gt(v2509, stdlib.checkedBigNumberify('./raffle_token.rsh:245:41:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4364, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp)', 'at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp)', 'at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)'],
        msg: 'Can\'t get a refund because pool is empty',
        who: 'User_refund'
        });
      ;
      ;
      ;
      const v4592 = stdlib.ge(v2792, v2441);
      stdlib.assert(v4592, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token.rsh:250:15:application call to [unknown function] (defined at: ./raffle_token.rsh:250:15:function exp)'],
        msg: 'Deadline not reached cannot refund',
        who: 'User_refund'
        });
      const v4609 = stdlib.sub(v2514, v4350);
      const v4611 = stdlib.Array_set(v2513, '0', v4609);
      const v4612 = stdlib.Array_set(v2457, stdlib.checkedBigNumberify('./raffle_token.rsh:251:36:application', stdlib.UInt_max, '0'), v4611);
      ;
      await stdlib.mapSet(map0, ctc4, v2789, ctc1, stdlib.checkedBigNumberify('./raffle_token.rsh:252:33:decimal', stdlib.UInt_max, '0'));
      const v4613 = true;
      const v4614 = await txn1.getOutput('User_refund', 'v4613', ctc7, v4613);
      if (v1674) {
        stdlib.protect(ctc0, await interact.out(v4265, v4614), {
          at: './raffle_token.rsh:231:11:application',
          fs: ['at ./raffle_token.rsh:231:11:application call to [unknown function] (defined at: ./raffle_token.rsh:231:11:function exp)', 'at ./raffle_token.rsh:253:14:application call to "ret" (defined at: ./raffle_token.rsh:250:15:function exp)', 'at ./raffle_token.rsh:250:15:application call to [unknown function] (defined at: ./raffle_token.rsh:250:15:function exp)'],
          msg: 'out',
          who: 'User_refund'
          });
        }
      else {
        }
      
      const v4621 = v2450.keepGoing;
      const v4622 = v2450.percent;
      const v4625 = v2450.winner;
      const v4626 = stdlib.safeSub(v2510, v4350);
      const v4628 = stdlib.safeSub(v2509, v4349);
      const v4630 = stdlib.safeAdd(v2511, v4349);
      const v4631 = {
        bal: v4626,
        currentUserNumber: v4628,
        keepGoing: v4621,
        percent: v4622,
        raffleBal: v2512,
        ticketsLeft: v4630,
        winner: v4625
        };
      const v7334 = v4631;
      const v7336 = v2792;
      const v7337 = v4612;
      const v7338 = v2458;
      const v7339 = v4631.keepGoing;
      if (v7339) {
        const v7341 = v4631.currentUserNumber;
        const v7342 = v4631.bal;
        const v7343 = v4631.ticketsLeft;
        const v7344 = v4631.raffleBal;
        const v7345 = v4612[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v7346 = v7345[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v7348 = v4612[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        const v7349 = v7348[stdlib.checkedBigNumberify('./raffle_token.rsh:159:31:application', stdlib.UInt_max, '0')];
        ;
        const v7350 = stdlib.sub(v7349, v7349);
        const v7351 = stdlib.Array_set(v7348, '0', v7350);
        const v7352 = stdlib.Array_set(v4612, stdlib.checkedBigNumberify('./raffle_token.rsh:324:41:application', stdlib.UInt_max, '0'), v7351);
        ;
        const v7353 = v7352[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '1')];
        const v7354 = v7353[stdlib.checkedBigNumberify('./raffle_token.rsh:325:19:application', stdlib.UInt_max, '0')];
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
export async function User_end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_end4(ctcTop, interact);}
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
export async function User_refund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_refund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_refund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_refund4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`User_buyTicket(uint64)byte`, `User_claim()byte`, `User_end()byte`, `User_optin()void`, `User_refund()byte`, `_reachp_0((uint64,byte[30],uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`],
    pure: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`],
    sigs: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`, `User_buyTicket(uint64)byte`, `User_claim()byte`, `User_end()byte`, `User_optin()void`, `User_refund()byte`, `_reachp_0((uint64,byte[30],uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCARAAEECEdPV19noI0G1JMBIQURPm93JgQBAAABAQECMRhBCHwpZEkiWzUBJVs1AihkKmRQK2RQghMEE25XOwQT7+94BBePUIYEGVleKQQpN6f2BClhn+QEN0fKpQQ3/yLLBD75YpoEeTkpUwR/nHFfBIHL2/UEjHK01gSjQdHCBMNv/m4E39kjKATndx8uBOsXcmQE7FSAQjYaAI4TAHMALwFcAFIBjAA/B9IAlgABAO8AHwDdAaQBEQDLB8cA/wF0B7cANAEkEkSICRY0DhY1BDEZIhJEgAQVH3x1NARQsCNDNAEkEkSICPg0GhY1BEL/3zQBJBJEiAjoNBcWNQRC/880ASQSRIgI2DQUFlEHCDUEQv+8NhoBNQs0ASQSRIgIwCWvKSWvKDQLUIgJaYgJXTUEQv+bNhoBNQs0ASQSRIgInykpKjQLUIgJSyJVIxIWUQcINQRC/3g0ASQSRIgIgTQdFjQlFlA0IBZQNBxQNCIWUDQkFlEHCFA0HxZQNCMWUDQmUDQeFlA1BEL/QzQBJBJEiAhMNBlXCAg1BEL/MTQBJBJEiAg6NBlXIQg1BEL/HzQBJBJEiAgoNB4WNQRC/w80ASQSRIgIGDQZVykhNQRC/v02GgEXNQslryg0CxZQUDULJDQBEkSIB/Y0CyJbNQw0C1cICTUNgARU52KsNAwWUDQNULA0DIgIoDQNIlWNBQakBqcGqgatBrBC/qSAEQAAAAAAAAAAAQAAAAAAAAAANQtC/62AEQAAAAAAAAAAAgAAAAAAAAAANQtC/5WAEQAAAAAAAAAAAwAAAAAAAAAANQtC/32AEQAAAAAAAAAABAAAAAAAAAAANQtC/2U0DSNbNQwlryklrygxAFCICAaIB/oXNQ00FzQaDEQ0DTQMCDULNB80Cw9ENAw0DQg0Iw5ENAw0IAs1FDQWNA80DjQUCBZcAFwANQ00FDQliAglIQooMQBQNAsWiAgLMQA0DBZQNQuABPhYyAA0C1CwNBMjCEk1DzQhEkEF0yM1DjQOQQXqIzULgAgAAAAAAAALkzQLFlEHCFCwNAsWUQcINQQ0EjQUCBY0EzQMCBZQNBlXEAFQNBlXEQhQNBAWUDQRNAwJFlAqMQBQUDIGMgc0DTUWNRc1GDUZNBlXEAEXQQXlNBc0Gg81FDQZJVs1EzQZIls1EjQZIQtbNRE0GYEZWzUQNBZXABFJNQ8iWzUONCc0JlA0JRZQNCQWUQcIUDQjFlA0IhZQNCEWUDQgFlA0HxZQNB4WUDQdFlA0HFA0G1A0GhZQNBlQNBcWUDQWUDQVFlA0FBZRBwhQNBMWUDQSFlA0ERZQNBAWUDQPUDQOFlAkMgY1AjUBKEsBVwB/ZypLAVd/f2crTFf+f2cpNAEWNAIWUGcxGSISRIgGujQDQPy/QvyyNBlXKSFJNQwiVSMSRDQRIhI1CzQUNAsQRDQWVxERSTUOIls1DTQQNA0ORDQnNAyIBjhJNQ8xABJEMgc0Gg80CxBENBY0DjQNSQkWXABcETULNA00HjQPiAYMNAtXABFJNRAiW0k1D0khDAuBZAoJNQ40CzQQNA80DgkWXABcADUNNA40JTQniAXcIzULgAgAAAAAAAANXjQLFlEHCFCwNAsWUQcINQQ0DVcAEVcACDQTFlAoUDQZVxEIUCWvUDQRFlA0DFAyBjIHNA01FjUXNRg1GUL+XjEANCcSMQA0GxIRRDQRNCMSRDQWVxERSTUNIls1DCM1C4AIAAAAAAAADuc0CxZRBwhQsDQLFlEHCDUENAw0HjEAiAVMNBIWNBMWUChQNBlXEQhQNBAWUDQRFlA0GVcpIVAyBjIHNBY0DTQMSQkWXABcETUWNRc1GDUZQv3hKTULgAgAAAAAAAAQcjQLULA0CzUEMgYyBzUXNRhC/cEpJa8oMQBQiAT2NQ0lrzQNiATkF0k1DDQgCzULNBRENA0iVSMSRDQMIg1ENAs0Dg5ENBMiDUQyBzQaD0Q0CzQlMQCIBK4hCigxAFAlr4gFASM1DYAIAAAAAAAAEgU0DRZRBwhQsDQNFlEHCDUENBI0CwkWNBM0DAkWUDQZVxABUDQZVxEIUDQQFlA0ETQMCBZQNBlXKSFQMgYyBzQWNA80DjQLCRZcAFwANRY1FzUYNRlC/Q0xADUnNAsiWzUNNAtXCB41JjQLgSZbNSU0C1cuARc1JDQLgS9bNSM0C4E3WzUiNAuBP1s1ITQLIQRbNSA0CyEFWzUfNAshBls1DDQLIQdbNR40CyEIWzUdNAtXbyA1HDQLV48gNRuABGTazS40DRZQNCZQNCUWUDQkFlEHCFA0IxZQNCIWUDQhFlA0IBZQNB8WUDQMFlA0HhZQNB0WUDQcUDQbULA0DYgDtyENr0k1C0lQSTUNSVcAESWvXABcAEk1C0lXERElr1wAXBE1DjQeNCUTRDQhNCMORDQggf///////////wEMRDQgIw1EIQmIA2QiNCUyCogDRCEJiANXIjQeMgqIAzc0JzQmUDQlFlA0JBZRBwhQNCMWUDQiFlA0IRZQNCAWUDQfFlA0DBZQNB4WUDQdFlA0HFA0G1A0DlCBlAGvUCMyBkL8XCM0ARJESVcAIDUnSVcgHjUmSSEOWzUlSVdGARc1JEkhBFs1I0khBVs1IkkhBls1IUkhB1s1IEkhCFs1H0khD1s1DEkhEFs1HkmBf1s1HUlXhyA1HElXpyA1G1fHIjUONAsXNQ2ABNUVGRQ0DRZQsDQNiAKhNAyIAqo0DlcRETUNNA40DUkiWzQdCBZcAFwRNQs0HTQeiALHNCcxABJEMgc0Igg1GjQLVwARVwAIJa9QKlCACAAAAAAAAAAFUDQLVxERVwAIUDQjFlAhC69QMgYyBzQLNAw1FTUWNRc1GDUZQvreiAIrIQmIAiA2GgE1C0L9wYgCGzYaATULQv8CiAIQNhoBNQtC+UQiMTQSRCQxNRJEIjE2EkQiMTcSRIgB8YH9Aq8iIkL7M0L5vEL7XkL8MUL8q0L8yDQPNCEOQQARNBM0DAg0IQ81CzQLNQ5C+hciNQtC//MjNQuACAAAAAAAAAuqNAsWUQcIULA0CxZRBwg1BDQSNBQIFjQTNAwIFlA0GVcQAVA0GVcRCFA0EBZQNBE0DAkWUDQZVykhUDIGMgc0DTUWNRc1GDUZQvoSNBZXABFJNQwiWzULNBU0G4gBXTQLNCU0G4gBKDQWNAw0C0kJFlwAXABXEREiWzQeNBuIAQ8iNB4yCjIJiAFdIjQlMgoyCYgBUzEZIQwSRIgBPjIKYDIKeAlJNQYyCogBD0L6ckhMv0iJIrIBI7IQsgeyCLOJIrIBJLIQshSyEbISs4lIiUwJSTUGMgmIAOGJCUlB/+5JNQaIANmJSVcAIDUnSVcgHjUmSSEOWzUlSVdGARc1JEkhBFs1I0khBVs1IkkhBls1IUkhB1s1IEkhCFs1H0khD1s1HkkhEFs1HUlXfyA1HElXnyA1G0mBvwFbNRpJV8dKNRlJgZECWzUXSYGZAoEiWDUWSYG7Als1FUmBwwIjWBc1FEmBxAJbNRNJgcwCWzUSSYHUAls1EUmB3AJbNRBJgeQCIQ1YNQ+B9QJbNQ6JsUL/LUlXAQBMIlVNib5JFlEHCEUETVCJNAYINQaJIzUDiUkiEkw0AhIRRImxQv71MRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiTQGNAdKD0H+7EL+9LGyFUL+00xJvUD+vEsDiP+vQv60MRY0ACMISTUACUcDOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `542`,
    1001: `543`,
    1002: `544`,
    1003: `545`,
    1004: `545`,
    1005: `546`,
    1006: `547`,
    1007: `547`,
    1008: `548`,
    1009: `549`,
    101: `24`,
    1010: `550`,
    1011: `551`,
    1012: `551`,
    1013: `553`,
    1014: `553`,
    1015: `554`,
    1016: `554`,
    1017: `555`,
    1018: `556`,
    1019: `556`,
    102: `24`,
    1020: `557`,
    1021: `557`,
    1022: `557`,
    1023: `558`,
    1024: `559`,
    1025: `560`,
    1026: `560`,
    1027: `561`,
    1028: `561`,
    1029: `561`,
    103: `24`,
    1030: `562`,
    1031: `563`,
    1032: `564`,
    1033: `565`,
    1034: `565`,
    1035: `565`,
    1036: `566`,
    1037: `567`,
    1038: `568`,
    1039: `568`,
    104: `24`,
    1040: `569`,
    1041: `570`,
    1042: `570`,
    1043: `571`,
    1044: `572`,
    1045: `573`,
    1046: `574`,
    1047: `574`,
    1048: `575`,
    1049: `576`,
    105: `24`,
    1050: `577`,
    1051: `579`,
    1052: `579`,
    1053: `579`,
    1054: `581`,
    1055: `581`,
    1056: `582`,
    1057: `582`,
    1058: `582`,
    1059: `583`,
    106: `24`,
    1060: `583`,
    1061: `583`,
    1062: `585`,
    1063: `585`,
    1064: `586`,
    1065: `586`,
    1066: `586`,
    1067: `587`,
    1068: `588`,
    1069: `588`,
    107: `24`,
    1070: `589`,
    1071: `590`,
    1072: `591`,
    1073: `592`,
    1074: `593`,
    1075: `601`,
    1076: `601`,
    1077: `602`,
    1078: `603`,
    1079: `604`,
    108: `24`,
    1080: `604`,
    1081: `605`,
    1082: `605`,
    1083: `606`,
    1084: `606`,
    1085: `607`,
    1086: `608`,
    1087: `616`,
    1088: `616`,
    1089: `617`,
    109: `24`,
    1090: `617`,
    1091: `617`,
    1092: `618`,
    1093: `619`,
    1094: `619`,
    1095: `620`,
    1096: `621`,
    1097: `622`,
    1098: `622`,
    1099: `623`,
    11: `2`,
    110: `24`,
    1100: `623`,
    1101: `624`,
    1102: `624`,
    1103: `625`,
    1104: `626`,
    1105: `634`,
    1106: `634`,
    1107: `635`,
    1108: `635`,
    1109: `636`,
    111: `24`,
    1110: `636`,
    1111: `636`,
    1112: `637`,
    1113: `638`,
    1114: `638`,
    1115: `639`,
    1116: `639`,
    1117: `640`,
    1118: `641`,
    1119: `649`,
    112: `24`,
    1120: `649`,
    1121: `650`,
    1122: `650`,
    1123: `651`,
    1124: `652`,
    1125: `652`,
    1126: `653`,
    1127: `654`,
    1128: `659`,
    1129: `659`,
    113: `24`,
    1130: `660`,
    1131: `660`,
    1132: `661`,
    1133: `661`,
    1134: `662`,
    1135: `663`,
    1136: `664`,
    1137: `665`,
    1138: `665`,
    1139: `666`,
    114: `24`,
    1140: `666`,
    1141: `667`,
    1142: `667`,
    1143: `668`,
    1144: `668`,
    1145: `670`,
    1146: `670`,
    1147: `672`,
    1148: `672`,
    1149: `673`,
    115: `24`,
    1150: `673`,
    1151: `673`,
    1152: `674`,
    1153: `674`,
    1154: `675`,
    1155: `675`,
    1156: `675`,
    1157: `676`,
    1158: `677`,
    1159: `677`,
    116: `24`,
    1160: `678`,
    1161: `679`,
    1162: `680`,
    1163: `681`,
    1164: `681`,
    1165: `682`,
    1166: `683`,
    1167: `683`,
    1168: `684`,
    1169: `685`,
    117: `24`,
    1170: `685`,
    1171: `686`,
    1172: `687`,
    1173: `688`,
    1174: `688`,
    1175: `689`,
    1176: `689`,
    1177: `690`,
    1178: `690`,
    1179: `691`,
    118: `24`,
    1180: `691`,
    1181: `692`,
    1182: `692`,
    1183: `693`,
    1184: `694`,
    1185: `695`,
    1186: `695`,
    1187: `696`,
    1188: `696`,
    1189: `697`,
    119: `24`,
    1190: `697`,
    1191: `698`,
    1192: `698`,
    1193: `700`,
    1194: `700`,
    1195: `702`,
    1196: `702`,
    1197: `703`,
    1198: `703`,
    1199: `703`,
    12: `2`,
    120: `24`,
    1200: `704`,
    1201: `705`,
    1202: `705`,
    1203: `706`,
    1204: `706`,
    1205: `706`,
    1206: `706`,
    1207: `706`,
    1208: `706`,
    1209: `706`,
    121: `24`,
    1210: `706`,
    1211: `706`,
    1212: `706`,
    1213: `707`,
    1214: `707`,
    1215: `708`,
    1216: `709`,
    1217: `709`,
    1218: `709`,
    1219: `710`,
    122: `24`,
    1220: `711`,
    1221: `712`,
    1222: `712`,
    1223: `713`,
    1224: `714`,
    1225: `714`,
    1226: `714`,
    1227: `715`,
    1228: `715`,
    1229: `716`,
    123: `24`,
    1230: `716`,
    1231: `717`,
    1232: `717`,
    1233: `717`,
    1234: `718`,
    1235: `718`,
    1236: `718`,
    1237: `719`,
    1238: `719`,
    1239: `720`,
    124: `24`,
    1240: `721`,
    1241: `722`,
    1242: `723`,
    1243: `724`,
    1244: `724`,
    1245: `725`,
    1246: `725`,
    1247: `725`,
    1248: `726`,
    1249: `727`,
    125: `24`,
    1250: `728`,
    1251: `729`,
    1252: `730`,
    1253: `730`,
    1254: `731`,
    1255: `732`,
    1256: `733`,
    1257: `733`,
    1258: `734`,
    1259: `735`,
    126: `24`,
    1260: `735`,
    1261: `736`,
    1262: `736`,
    1263: `737`,
    1264: `737`,
    1265: `738`,
    1266: `738`,
    1267: `739`,
    1268: `739`,
    1269: `740`,
    127: `24`,
    1270: `740`,
    1271: `741`,
    1272: `741`,
    1273: `742`,
    1274: `742`,
    1275: `742`,
    1276: `744`,
    1277: `744`,
    1278: `745`,
    1279: `745`,
    128: `24`,
    1280: `746`,
    1281: `747`,
    1282: `747`,
    1283: `748`,
    1284: `748`,
    1285: `749`,
    1286: `750`,
    1287: `751`,
    1288: `759`,
    1289: `759`,
    129: `24`,
    1290: `760`,
    1291: `760`,
    1292: `761`,
    1293: `762`,
    1294: `770`,
    1295: `770`,
    1296: `771`,
    1297: `771`,
    1298: `771`,
    1299: `772`,
    13: `2`,
    130: `24`,
    1300: `773`,
    1301: `773`,
    1302: `774`,
    1303: `775`,
    1304: `776`,
    1305: `776`,
    1306: `777`,
    1307: `778`,
    1308: `778`,
    1309: `779`,
    131: `24`,
    1310: `779`,
    1311: `779`,
    1312: `779`,
    1313: `779`,
    1314: `779`,
    1315: `779`,
    1316: `779`,
    1317: `779`,
    1318: `779`,
    1319: `780`,
    132: `24`,
    1320: `780`,
    1321: `781`,
    1322: `782`,
    1323: `782`,
    1324: `782`,
    1325: `783`,
    1326: `784`,
    1327: `785`,
    1328: `785`,
    1329: `786`,
    133: `24`,
    1330: `787`,
    1331: `787`,
    1332: `787`,
    1333: `788`,
    1334: `788`,
    1335: `789`,
    1336: `789`,
    1337: `791`,
    1338: `791`,
    1339: `792`,
    134: `24`,
    1340: `792`,
    1341: `793`,
    1342: `793`,
    1343: `793`,
    1344: `794`,
    1345: `794`,
    1346: `795`,
    1347: `796`,
    1348: `796`,
    1349: `797`,
    135: `24`,
    1350: `798`,
    1351: `799`,
    1352: `800`,
    1353: `801`,
    1354: `801`,
    1355: `802`,
    1356: `802`,
    1357: `802`,
    1358: `803`,
    1359: `804`,
    136: `24`,
    1360: `804`,
    1361: `805`,
    1362: `806`,
    1363: `807`,
    1364: `807`,
    1365: `808`,
    1366: `809`,
    1367: `810`,
    1368: `810`,
    1369: `811`,
    137: `24`,
    1370: `811`,
    1371: `811`,
    1372: `812`,
    1373: `813`,
    1374: `813`,
    1375: `814`,
    1376: `814`,
    1377: `815`,
    1378: `815`,
    1379: `816`,
    138: `24`,
    1380: `816`,
    1381: `817`,
    1382: `817`,
    1383: `818`,
    1384: `819`,
    1385: `820`,
    1386: `821`,
    1387: `821`,
    1388: `822`,
    1389: `822`,
    139: `24`,
    1390: `823`,
    1391: `823`,
    1392: `824`,
    1393: `824`,
    1394: `825`,
    1395: `825`,
    1396: `826`,
    1397: `826`,
    1398: `827`,
    1399: `827`,
    14: `2`,
    140: `24`,
    1400: `827`,
    1401: `829`,
    1402: `830`,
    1403: `830`,
    1404: `831`,
    1405: `831`,
    1406: `831`,
    1407: `831`,
    1408: `831`,
    1409: `831`,
    141: `24`,
    1410: `831`,
    1411: `831`,
    1412: `831`,
    1413: `831`,
    1414: `832`,
    1415: `832`,
    1416: `833`,
    1417: `834`,
    1418: `835`,
    1419: `835`,
    142: `24`,
    1420: `836`,
    1421: `836`,
    1422: `837`,
    1423: `837`,
    1424: `838`,
    1425: `838`,
    1426: `839`,
    1427: `839`,
    1428: `840`,
    1429: `840`,
    143: `24`,
    1430: `841`,
    1431: `841`,
    1432: `841`,
    1433: `844`,
    1434: `845`,
    1435: `846`,
    1436: `847`,
    1437: `848`,
    1438: `848`,
    1439: `849`,
    144: `24`,
    1440: `850`,
    1441: `850`,
    1442: `850`,
    1443: `851`,
    1444: `851`,
    1445: `852`,
    1446: `853`,
    1447: `854`,
    1448: `854`,
    1449: `855`,
    145: `24`,
    1450: `855`,
    1451: `855`,
    1452: `856`,
    1453: `857`,
    1454: `858`,
    1455: `858`,
    1456: `859`,
    1457: `859`,
    1458: `860`,
    1459: `861`,
    146: `24`,
    1460: `861`,
    1461: `862`,
    1462: `862`,
    1463: `863`,
    1464: `871`,
    1465: `871`,
    1466: `872`,
    1467: `873`,
    1468: `874`,
    1469: `875`,
    147: `24`,
    1470: `876`,
    1471: `884`,
    1472: `884`,
    1473: `885`,
    1474: `886`,
    1475: `887`,
    1476: `895`,
    1477: `895`,
    1478: `896`,
    1479: `896`,
    148: `24`,
    1480: `897`,
    1481: `898`,
    1482: `906`,
    1483: `906`,
    1484: `907`,
    1485: `908`,
    1486: `909`,
    1487: `917`,
    1488: `917`,
    1489: `918`,
    149: `24`,
    1490: `918`,
    1491: `919`,
    1492: `920`,
    1493: `925`,
    1494: `925`,
    1495: `927`,
    1496: `927`,
    1497: `928`,
    1498: `928`,
    1499: `929`,
    15: `2`,
    150: `24`,
    1500: `929`,
    1501: `929`,
    1502: `930`,
    1503: `930`,
    1504: `931`,
    1505: `932`,
    1506: `932`,
    1507: `933`,
    1508: `934`,
    1509: `935`,
    151: `24`,
    1510: `936`,
    1511: `936`,
    1512: `936`,
    1513: `937`,
    1514: `938`,
    1515: `938`,
    1516: `939`,
    1517: `939`,
    1518: `939`,
    1519: `939`,
    152: `24`,
    1520: `939`,
    1521: `939`,
    1522: `939`,
    1523: `939`,
    1524: `939`,
    1525: `939`,
    1526: `940`,
    1527: `940`,
    1528: `941`,
    1529: `942`,
    153: `24`,
    1530: `942`,
    1531: `942`,
    1532: `943`,
    1533: `944`,
    1534: `945`,
    1535: `945`,
    1536: `946`,
    1537: `947`,
    1538: `947`,
    1539: `947`,
    154: `25`,
    1540: `948`,
    1541: `948`,
    1542: `949`,
    1543: `949`,
    1544: `950`,
    1545: `950`,
    1546: `951`,
    1547: `952`,
    1548: `953`,
    1549: `953`,
    155: `25`,
    1550: `954`,
    1551: `954`,
    1552: `955`,
    1553: `956`,
    1554: `957`,
    1555: `958`,
    1556: `958`,
    1557: `959`,
    1558: `959`,
    1559: `959`,
    156: `25`,
    1560: `960`,
    1561: `961`,
    1562: `961`,
    1563: `962`,
    1564: `962`,
    1565: `962`,
    1566: `963`,
    1567: `964`,
    1568: `964`,
    1569: `965`,
    157: `26`,
    1570: `966`,
    1571: `967`,
    1572: `967`,
    1573: `968`,
    1574: `968`,
    1575: `969`,
    1576: `970`,
    1577: `971`,
    1578: `972`,
    1579: `972`,
    158: `26`,
    1580: `973`,
    1581: `973`,
    1582: `973`,
    1583: `974`,
    1584: `975`,
    1585: `975`,
    1586: `976`,
    1587: `976`,
    1588: `977`,
    1589: `977`,
    159: `26`,
    1590: `978`,
    1591: `978`,
    1592: `979`,
    1593: `979`,
    1594: `980`,
    1595: `980`,
    1596: `981`,
    1597: `982`,
    1598: `983`,
    1599: `983`,
    16: `2`,
    160: `26`,
    1600: `984`,
    1601: `984`,
    1602: `985`,
    1603: `985`,
    1604: `986`,
    1605: `986`,
    1606: `987`,
    1607: `987`,
    1608: `988`,
    1609: `988`,
    161: `26`,
    1610: `989`,
    1611: `989`,
    1612: `989`,
    1613: `991`,
    1614: `991`,
    1615: `992`,
    1616: `992`,
    1617: `993`,
    1618: `993`,
    1619: `994`,
    162: `26`,
    1620: `995`,
    1621: `996`,
    1622: `996`,
    1623: `997`,
    1624: `997`,
    1625: `998`,
    1626: `998`,
    1627: `998`,
    1628: `999`,
    1629: `999`,
    163: `26`,
    1630: `1000`,
    1631: `1000`,
    1632: `1001`,
    1633: `1001`,
    1634: `1002`,
    1635: `1003`,
    1636: `1003`,
    1637: `1004`,
    1638: `1004`,
    1639: `1005`,
    164: `26`,
    1640: `1005`,
    1641: `1005`,
    1642: `1006`,
    1643: `1007`,
    1644: `1007`,
    1645: `1008`,
    1646: `1008`,
    1647: `1009`,
    1648: `1009`,
    1649: `1010`,
    165: `26`,
    1650: `1011`,
    1651: `1011`,
    1652: `1012`,
    1653: `1012`,
    1654: `1013`,
    1655: `1013`,
    1656: `1014`,
    1657: `1015`,
    1658: `1015`,
    1659: `1016`,
    166: `26`,
    1660: `1016`,
    1661: `1017`,
    1662: `1017`,
    1663: `1018`,
    1664: `1019`,
    1665: `1019`,
    1666: `1020`,
    1667: `1020`,
    1668: `1021`,
    1669: `1021`,
    167: `26`,
    1670: `1022`,
    1671: `1023`,
    1672: `1023`,
    1673: `1024`,
    1674: `1024`,
    1675: `1025`,
    1676: `1025`,
    1677: `1026`,
    1678: `1027`,
    1679: `1027`,
    168: `26`,
    1680: `1028`,
    1681: `1028`,
    1682: `1029`,
    1683: `1029`,
    1684: `1030`,
    1685: `1031`,
    1686: `1031`,
    1687: `1032`,
    1688: `1032`,
    1689: `1033`,
    169: `26`,
    1690: `1033`,
    1691: `1034`,
    1692: `1035`,
    1693: `1035`,
    1694: `1036`,
    1695: `1036`,
    1696: `1037`,
    1697: `1037`,
    1698: `1038`,
    1699: `1039`,
    17: `2`,
    170: `26`,
    1700: `1039`,
    1701: `1040`,
    1702: `1040`,
    1703: `1041`,
    1704: `1041`,
    1705: `1041`,
    1706: `1042`,
    1707: `1042`,
    1708: `1043`,
    1709: `1043`,
    171: `26`,
    1710: `1044`,
    1711: `1044`,
    1712: `1044`,
    1713: `1045`,
    1714: `1045`,
    1715: `1046`,
    1716: `1046`,
    1717: `1046`,
    1718: `1046`,
    1719: `1046`,
    172: `26`,
    1720: `1046`,
    1721: `1047`,
    1722: `1047`,
    1723: `1048`,
    1724: `1049`,
    1725: `1050`,
    1726: `1050`,
    1727: `1051`,
    1728: `1052`,
    1729: `1052`,
    173: `26`,
    1730: `1053`,
    1731: `1054`,
    1732: `1055`,
    1733: `1055`,
    1734: `1056`,
    1735: `1057`,
    1736: `1057`,
    1737: `1057`,
    1738: `1058`,
    1739: `1059`,
    174: `26`,
    1740: `1059`,
    1741: `1060`,
    1742: `1061`,
    1743: `1062`,
    1744: `1062`,
    1745: `1063`,
    1746: `1064`,
    1747: `1065`,
    1748: `1065`,
    1749: `1066`,
    175: `26`,
    1750: `1067`,
    1751: `1068`,
    1752: `1068`,
    1753: `1069`,
    1754: `1070`,
    1755: `1071`,
    1756: `1071`,
    1757: `1072`,
    1758: `1073`,
    1759: `1074`,
    176: `26`,
    1760: `1074`,
    1761: `1075`,
    1762: `1076`,
    1763: `1077`,
    1764: `1077`,
    1765: `1078`,
    1766: `1079`,
    1767: `1080`,
    1768: `1080`,
    1769: `1081`,
    177: `26`,
    1770: `1082`,
    1771: `1083`,
    1772: `1083`,
    1773: `1084`,
    1774: `1085`,
    1775: `1085`,
    1776: `1086`,
    1777: `1087`,
    1778: `1089`,
    1779: `1089`,
    178: `26`,
    1780: `1090`,
    1781: `1090`,
    1782: `1090`,
    1783: `1091`,
    1784: `1091`,
    1785: `1092`,
    1786: `1093`,
    1787: `1094`,
    1788: `1094`,
    1789: `1095`,
    179: `26`,
    1790: `1096`,
    1791: `1097`,
    1792: `1098`,
    1793: `1098`,
    1794: `1099`,
    1795: `1100`,
    1796: `1100`,
    1797: `1100`,
    1798: `1101`,
    1799: `1102`,
    18: `2`,
    180: `26`,
    1800: `1103`,
    1801: `1103`,
    1802: `1104`,
    1803: `1104`,
    1804: `1105`,
    1805: `1106`,
    1806: `1106`,
    1807: `1107`,
    1808: `1108`,
    1809: `1108`,
    181: `26`,
    1810: `1108`,
    1811: `1109`,
    1812: `1110`,
    1813: `1111`,
    1814: `1111`,
    1815: `1112`,
    1816: `1112`,
    1817: `1113`,
    1818: `1113`,
    1819: `1114`,
    182: `26`,
    1820: `1114`,
    1821: `1115`,
    1822: `1115`,
    1823: `1116`,
    1824: `1117`,
    1825: `1120`,
    1826: `1120`,
    1827: `1121`,
    1828: `1121`,
    1829: `1122`,
    183: `26`,
    1830: `1123`,
    1831: `1127`,
    1832: `1127`,
    1833: `1128`,
    1834: `1128`,
    1835: `1128`,
    1836: `1128`,
    1837: `1128`,
    1838: `1128`,
    1839: `1128`,
    184: `26`,
    1840: `1128`,
    1841: `1128`,
    1842: `1128`,
    1843: `1128`,
    1844: `1129`,
    1845: `1130`,
    1846: `1134`,
    1847: `1134`,
    1848: `1135`,
    1849: `1136`,
    185: `26`,
    1850: `1137`,
    1851: `1141`,
    1852: `1141`,
    1853: `1142`,
    1854: `1142`,
    1855: `1142`,
    1856: `1143`,
    1857: `1145`,
    1858: `1145`,
    1859: `1146`,
    186: `26`,
    1860: `1146`,
    1861: `1147`,
    1862: `1147`,
    1863: `1147`,
    1864: `1148`,
    1865: `1148`,
    1866: `1149`,
    1867: `1149`,
    1868: `1149`,
    1869: `1150`,
    187: `26`,
    1870: `1152`,
    1871: `1152`,
    1872: `1153`,
    1873: `1153`,
    1874: `1154`,
    1875: `1154`,
    1876: `1154`,
    1877: `1156`,
    1878: `1156`,
    1879: `1157`,
    188: `26`,
    1880: `1157`,
    1881: `1158`,
    1882: `1159`,
    1883: `1159`,
    1884: `1160`,
    1885: `1161`,
    1886: `1162`,
    1887: `1162`,
    1888: `1163`,
    1889: `1164`,
    189: `26`,
    1890: `1164`,
    1891: `1164`,
    1892: `1165`,
    1893: `1166`,
    1894: `1166`,
    1895: `1167`,
    1896: `1168`,
    1897: `1169`,
    1898: `1169`,
    1899: `1170`,
    19: `2`,
    190: `26`,
    1900: `1171`,
    1901: `1172`,
    1902: `1172`,
    1903: `1173`,
    1904: `1174`,
    1905: `1175`,
    1906: `1175`,
    1907: `1176`,
    1908: `1177`,
    1909: `1178`,
    191: `26`,
    1910: `1178`,
    1911: `1179`,
    1912: `1180`,
    1913: `1181`,
    1914: `1181`,
    1915: `1182`,
    1916: `1183`,
    1917: `1184`,
    1918: `1184`,
    1919: `1185`,
    192: `26`,
    1920: `1186`,
    1921: `1187`,
    1922: `1187`,
    1923: `1188`,
    1924: `1189`,
    1925: `1190`,
    1926: `1190`,
    1927: `1191`,
    1928: `1192`,
    1929: `1192`,
    193: `26`,
    1930: `1193`,
    1931: `1194`,
    1932: `1194`,
    1933: `1195`,
    1934: `1196`,
    1935: `1196`,
    1936: `1196`,
    1937: `1197`,
    1938: `1198`,
    1939: `1199`,
    194: `26`,
    1940: `1200`,
    1941: `1200`,
    1942: `1201`,
    1943: `1201`,
    1944: `1201`,
    1945: `1203`,
    1946: `1204`,
    1947: `1204`,
    1948: `1205`,
    1949: `1206`,
    195: `26`,
    1950: `1208`,
    1951: `1209`,
    1952: `1209`,
    1953: `1209`,
    1954: `1210`,
    1955: `1210`,
    1956: `1211`,
    1957: `1212`,
    1958: `1212`,
    1959: `1212`,
    196: `26`,
    1960: `1213`,
    1961: `1213`,
    1962: `1214`,
    1963: `1215`,
    1964: `1215`,
    1965: `1216`,
    1966: `1217`,
    1967: `1217`,
    1968: `1218`,
    1969: `1219`,
    197: `28`,
    1970: `1219`,
    1971: `1219`,
    1972: `1220`,
    1973: `1221`,
    1974: `1221`,
    1975: `1222`,
    1976: `1223`,
    1977: `1223`,
    1978: `1224`,
    1979: `1225`,
    198: `31`,
    1980: `1225`,
    1981: `1226`,
    1982: `1227`,
    1983: `1227`,
    1984: `1228`,
    1985: `1229`,
    1986: `1229`,
    1987: `1230`,
    1988: `1231`,
    1989: `1231`,
    199: `31`,
    1990: `1232`,
    1991: `1233`,
    1992: `1233`,
    1993: `1234`,
    1994: `1235`,
    1995: `1235`,
    1996: `1236`,
    1997: `1237`,
    1998: `1237`,
    1999: `1238`,
    2: `2`,
    20: `2`,
    200: `32`,
    2000: `1239`,
    2001: `1239`,
    2002: `1240`,
    2003: `1241`,
    2004: `1241`,
    2005: `1242`,
    2006: `1243`,
    2007: `1243`,
    2008: `1244`,
    2009: `1245`,
    201: `33`,
    2010: `1245`,
    2011: `1246`,
    2012: `1247`,
    2013: `1247`,
    2014: `1248`,
    2015: `1249`,
    2016: `1249`,
    2017: `1250`,
    2018: `1251`,
    2019: `1251`,
    202: `34`,
    2020: `1252`,
    2021: `1253`,
    2022: `1253`,
    2023: `1254`,
    2024: `1255`,
    2025: `1255`,
    2026: `1255`,
    2027: `1256`,
    2028: `1256`,
    2029: `1257`,
    203: `37`,
    2030: `1258`,
    2031: `1258`,
    2032: `1258`,
    2033: `1259`,
    2034: `1259`,
    2035: `1260`,
    2036: `1260`,
    2037: `1260`,
    2038: `1261`,
    2039: `1261`,
    204: `37`,
    2040: `1262`,
    2041: `1262`,
    2042: `1263`,
    2043: `1264`,
    2044: `1264`,
    2045: `1265`,
    2046: `1265`,
    2047: `1265`,
    2048: `1265`,
    2049: `1265`,
    205: `37`,
    2050: `1265`,
    2051: `1266`,
    2052: `1266`,
    2053: `1267`,
    2054: `1268`,
    2055: `1269`,
    2056: `1271`,
    2057: `1271`,
    2058: `1272`,
    2059: `1272`,
    206: `38`,
    2060: `1272`,
    2061: `1273`,
    2062: `1273`,
    2063: `1274`,
    2064: `1274`,
    2065: `1274`,
    2066: `1277`,
    2067: `1277`,
    2068: `1278`,
    2069: `1278`,
    207: `38`,
    2070: `1278`,
    2071: `1279`,
    2072: `1279`,
    2073: `1280`,
    2074: `1280`,
    2075: `1281`,
    2076: `1281`,
    2077: `1282`,
    2078: `1283`,
    2079: `1284`,
    208: `39`,
    2080: `1285`,
    2081: `1285`,
    2082: `1286`,
    2083: `1287`,
    2084: `1288`,
    2085: `1288`,
    2086: `1289`,
    2087: `1289`,
    2088: `1290`,
    2089: `1290`,
    209: `40`,
    2090: `1291`,
    2091: `1291`,
    2092: `1292`,
    2093: `1292`,
    2094: `1293`,
    2095: `1293`,
    2096: `1293`,
    2097: `1296`,
    2098: `1296`,
    2099: `1297`,
    21: `2`,
    210: `40`,
    2100: `1297`,
    2101: `1298`,
    2102: `1299`,
    2103: `1302`,
    2104: `1302`,
    2105: `1303`,
    2106: `1303`,
    2107: `1304`,
    2108: `1305`,
    2109: `1305`,
    211: `42`,
    2110: `1306`,
    2111: `1306`,
    2112: `1307`,
    2113: `1307`,
    2114: `1307`,
    2115: `1308`,
    2116: `1308`,
    2117: `1308`,
    2118: `1309`,
    2119: `1310`,
    212: `42`,
    2120: `1311`,
    2121: `1312`,
    2122: `1313`,
    2123: `1314`,
    2124: `1314`,
    2125: `1314`,
    2126: `1314`,
    2127: `1314`,
    2128: `1314`,
    2129: `1314`,
    213: `43`,
    2130: `1314`,
    2131: `1314`,
    2132: `1314`,
    2133: `1315`,
    2134: `1316`,
    2135: `1316`,
    2136: `1317`,
    2137: `1317`,
    2138: `1317`,
    2139: `1318`,
    214: `44`,
    2140: `1318`,
    2141: `1318`,
    2142: `1319`,
    2143: `1320`,
    2144: `1320`,
    2145: `1321`,
    2146: `1322`,
    2147: `1323`,
    2148: `1323`,
    2149: `1324`,
    215: `45`,
    2150: `1325`,
    2151: `1326`,
    2152: `1326`,
    2153: `1327`,
    2154: `1327`,
    2155: `1328`,
    2156: `1328`,
    2157: `1329`,
    2158: `1329`,
    2159: `1330`,
    216: `48`,
    2160: `1330`,
    2161: `1331`,
    2162: `1331`,
    2163: `1332`,
    2164: `1332`,
    2165: `1333`,
    2166: `1333`,
    2167: `1334`,
    2168: `1334`,
    2169: `1335`,
    217: `48`,
    2170: `1335`,
    2171: `1335`,
    2172: `1337`,
    2173: `1337`,
    2174: `1337`,
    2175: `1338`,
    2176: `1338`,
    2177: `1339`,
    2178: `1339`,
    2179: `1339`,
    218: `48`,
    2180: `1340`,
    2181: `1340`,
    2182: `1340`,
    2183: `1341`,
    2184: `1341`,
    2185: `1342`,
    2186: `1342`,
    2187: `1342`,
    2188: `1344`,
    2189: `1344`,
    219: `48`,
    2190: `1344`,
    2191: `1345`,
    2192: `1345`,
    2193: `1345`,
    2194: `1346`,
    2195: `1346`,
    2196: `1347`,
    2197: `1347`,
    2198: `1347`,
    2199: `1349`,
    22: `2`,
    220: `48`,
    2200: `1349`,
    2201: `1349`,
    2202: `1350`,
    2203: `1350`,
    2204: `1350`,
    2205: `1351`,
    2206: `1351`,
    2207: `1352`,
    2208: `1352`,
    2209: `1352`,
    221: `48`,
    2210: `1354`,
    2211: `1355`,
    2212: `1355`,
    2213: `1356`,
    2214: `1357`,
    2215: `1358`,
    2216: `1359`,
    2217: `1359`,
    2218: `1360`,
    2219: `1361`,
    222: `49`,
    2220: `1362`,
    2221: `1363`,
    2222: `1363`,
    2223: `1364`,
    2224: `1365`,
    2225: `1366`,
    2226: `1367`,
    2227: `1367`,
    2228: `1368`,
    2229: `1369`,
    223: `49`,
    2230: `1370`,
    2231: `1370`,
    2232: `1370`,
    2233: `1371`,
    2234: `1371`,
    2235: `1371`,
    2236: `1372`,
    2237: `1373`,
    2238: `1374`,
    2239: `1375`,
    224: `50`,
    2240: `1375`,
    2241: `1375`,
    2242: `1377`,
    2243: `1377`,
    2244: `1377`,
    2245: `1379`,
    2246: `1379`,
    2247: `1379`,
    2248: `1381`,
    2249: `1381`,
    225: `51`,
    2250: `1381`,
    2251: `1383`,
    2252: `1383`,
    2253: `1383`,
    2254: `1385`,
    2255: `1385`,
    2256: `1385`,
    2257: `1387`,
    2258: `1387`,
    2259: `1388`,
    226: `53`,
    2260: `1388`,
    2261: `1389`,
    2262: `1390`,
    2263: `1390`,
    2264: `1390`,
    2265: `1391`,
    2266: `1391`,
    2267: `1392`,
    2268: `1392`,
    2269: `1393`,
    227: `54`,
    2270: `1394`,
    2271: `1394`,
    2272: `1395`,
    2273: `1396`,
    2274: `1396`,
    2275: `1398`,
    2276: `1398`,
    2277: `1399`,
    2278: `1399`,
    2279: `1400`,
    228: `57`,
    2280: `1400`,
    2281: `1400`,
    2282: `1402`,
    2283: `1403`,
    2284: `1403`,
    2285: `1404`,
    2286: `1404`,
    2287: `1404`,
    2288: `1406`,
    2289: `1407`,
    229: `57`,
    2290: `1407`,
    2291: `1408`,
    2292: `1408`,
    2293: `1408`,
    2294: `1408`,
    2295: `1408`,
    2296: `1408`,
    2297: `1408`,
    2298: `1408`,
    2299: `1408`,
    23: `2`,
    230: `58`,
    2300: `1408`,
    2301: `1409`,
    2302: `1409`,
    2303: `1410`,
    2304: `1411`,
    2305: `1411`,
    2306: `1411`,
    2307: `1412`,
    2308: `1413`,
    2309: `1414`,
    231: `59`,
    2310: `1414`,
    2311: `1415`,
    2312: `1416`,
    2313: `1416`,
    2314: `1416`,
    2315: `1417`,
    2316: `1417`,
    2317: `1418`,
    2318: `1418`,
    2319: `1419`,
    232: `60`,
    2320: `1419`,
    2321: `1420`,
    2322: `1421`,
    2323: `1422`,
    2324: `1422`,
    2325: `1423`,
    2326: `1423`,
    2327: `1424`,
    2328: `1425`,
    2329: `1426`,
    233: `63`,
    2330: `1427`,
    2331: `1427`,
    2332: `1428`,
    2333: `1428`,
    2334: `1428`,
    2335: `1429`,
    2336: `1430`,
    2337: `1430`,
    2338: `1431`,
    2339: `1431`,
    234: `63`,
    2340: `1431`,
    2341: `1432`,
    2342: `1433`,
    2343: `1433`,
    2344: `1434`,
    2345: `1435`,
    2346: `1436`,
    2347: `1436`,
    2348: `1437`,
    2349: `1437`,
    235: `63`,
    2350: `1438`,
    2351: `1439`,
    2352: `1440`,
    2353: `1441`,
    2354: `1441`,
    2355: `1442`,
    2356: `1442`,
    2357: `1442`,
    2358: `1443`,
    2359: `1444`,
    236: `64`,
    2360: `1444`,
    2361: `1445`,
    2362: `1445`,
    2363: `1446`,
    2364: `1446`,
    2365: `1447`,
    2366: `1447`,
    2367: `1448`,
    2368: `1448`,
    2369: `1449`,
    237: `64`,
    2370: `1449`,
    2371: `1450`,
    2372: `1450`,
    2373: `1451`,
    2374: `1451`,
    2375: `1451`,
    2376: `1453`,
    2377: `1453`,
    2378: `1454`,
    2379: `1454`,
    238: `65`,
    2380: `1454`,
    2381: `1455`,
    2382: `1456`,
    2383: `1456`,
    2384: `1457`,
    2385: `1458`,
    2386: `1459`,
    2387: `1459`,
    2388: `1460`,
    2389: `1460`,
    239: `66`,
    2390: `1462`,
    2391: `1462`,
    2392: `1463`,
    2393: `1463`,
    2394: `1463`,
    2395: `1464`,
    2396: `1464`,
    2397: `1466`,
    2398: `1466`,
    2399: `1467`,
    24: `2`,
    240: `66`,
    2400: `1467`,
    2401: `1468`,
    2402: `1468`,
    2403: `1468`,
    2404: `1469`,
    2405: `1469`,
    2406: `1470`,
    2407: `1470`,
    2408: `1471`,
    2409: `1471`,
    241: `67`,
    2410: `1472`,
    2411: `1473`,
    2412: `1474`,
    2413: `1475`,
    2414: `1475`,
    2415: `1476`,
    2416: `1476`,
    2417: `1477`,
    2418: `1477`,
    2419: `1477`,
    242: `67`,
    2420: `1478`,
    2421: `1479`,
    2422: `1481`,
    2423: `1481`,
    2424: `1482`,
    2425: `1482`,
    2426: `1483`,
    2427: `1483`,
    2428: `1483`,
    2429: `1485`,
    243: `67`,
    2430: `1486`,
    2431: `1486`,
    2432: `1487`,
    2433: `1487`,
    2434: `1488`,
    2435: `1488`,
    2436: `1489`,
    2437: `1489`,
    2438: `1489`,
    2439: `1490`,
    244: `70`,
    2440: `1491`,
    2441: `1491`,
    2442: `1492`,
    2443: `1492`,
    2444: `1493`,
    2445: `1493`,
    2446: `1494`,
    2447: `1494`,
    2448: `1494`,
    2449: `1496`,
    245: `70`,
    2450: `1496`,
    2451: `1497`,
    2452: `1497`,
    2453: `1498`,
    2454: `1499`,
    2455: `1501`,
    2456: `1501`,
    2457: `1501`,
    2458: `1503`,
    2459: `1503`,
    246: `71`,
    2460: `1504`,
    2461: `1505`,
    2462: `1505`,
    2463: `1506`,
    2464: `1507`,
    2465: `1509`,
    2466: `1510`,
    2467: `1510`,
    2468: `1511`,
    2469: `1511`,
    247: `72`,
    2470: `1512`,
    2471: `1512`,
    2472: `1512`,
    2473: `1513`,
    2474: `1513`,
    2475: `1513`,
    2476: `1515`,
    2477: `1516`,
    2478: `1517`,
    2479: `1518`,
    248: `73`,
    2480: `1519`,
    2481: `1521`,
    2482: `1522`,
    2483: `1522`,
    2484: `1523`,
    2485: `1524`,
    2486: `1524`,
    2487: `1525`,
    2488: `1525`,
    2489: `1526`,
    249: `76`,
    2490: `1526`,
    2491: `1527`,
    2492: `1528`,
    2493: `1530`,
    2494: `1531`,
    2495: `1531`,
    2496: `1532`,
    2497: `1533`,
    2498: `1533`,
    2499: `1534`,
    25: `2`,
    250: `76`,
    2500: `1534`,
    2501: `1535`,
    2502: `1535`,
    2503: `1536`,
    2504: `1536`,
    2505: `1537`,
    2506: `1538`,
    2507: `1540`,
    2508: `1541`,
    2509: `1543`,
    251: `76`,
    2510: `1544`,
    2511: `1545`,
    2512: `1546`,
    2513: `1546`,
    2514: `1547`,
    2515: `1547`,
    2516: `1548`,
    2517: `1548`,
    2518: `1548`,
    2519: `1549`,
    252: `77`,
    2520: `1551`,
    2521: `1552`,
    2522: `1553`,
    2523: `1553`,
    2524: `1553`,
    2525: `1554`,
    2526: `1555`,
    2527: `1555`,
    2528: `1556`,
    2529: `1556`,
    253: `77`,
    2530: `1556`,
    2531: `1557`,
    2532: `1559`,
    2533: `1560`,
    2534: `1560`,
    2535: `1560`,
    2536: `1561`,
    2537: `1561`,
    2538: `1562`,
    2539: `1563`,
    254: `78`,
    2540: `1563`,
    2541: `1563`,
    2542: `1564`,
    2543: `1564`,
    2544: `1565`,
    2545: `1566`,
    2546: `1566`,
    2547: `1567`,
    2548: `1568`,
    2549: `1568`,
    255: `79`,
    2550: `1569`,
    2551: `1570`,
    2552: `1570`,
    2553: `1570`,
    2554: `1571`,
    2555: `1572`,
    2556: `1572`,
    2557: `1573`,
    2558: `1574`,
    2559: `1574`,
    256: `79`,
    2560: `1575`,
    2561: `1576`,
    2562: `1576`,
    2563: `1577`,
    2564: `1578`,
    2565: `1578`,
    2566: `1579`,
    2567: `1580`,
    2568: `1580`,
    2569: `1581`,
    257: `80`,
    2570: `1582`,
    2571: `1582`,
    2572: `1583`,
    2573: `1584`,
    2574: `1584`,
    2575: `1585`,
    2576: `1586`,
    2577: `1586`,
    2578: `1587`,
    2579: `1588`,
    258: `80`,
    2580: `1588`,
    2581: `1589`,
    2582: `1590`,
    2583: `1590`,
    2584: `1591`,
    2585: `1592`,
    2586: `1592`,
    2587: `1593`,
    2588: `1594`,
    2589: `1594`,
    259: `80`,
    2590: `1595`,
    2591: `1596`,
    2592: `1596`,
    2593: `1597`,
    2594: `1598`,
    2595: `1598`,
    2596: `1599`,
    2597: `1600`,
    2598: `1600`,
    2599: `1601`,
    26: `2`,
    260: `83`,
    2600: `1602`,
    2601: `1602`,
    2602: `1602`,
    2603: `1603`,
    2604: `1603`,
    2605: `1604`,
    2606: `1605`,
    2607: `1605`,
    2608: `1605`,
    2609: `1606`,
    261: `83`,
    2610: `1606`,
    2611: `1607`,
    2612: `1608`,
    2613: `1608`,
    2614: `1608`,
    2615: `1609`,
    2616: `1610`,
    2617: `1610`,
    2618: `1611`,
    2619: `1612`,
    262: `84`,
    2620: `1612`,
    2621: `1612`,
    2622: `1613`,
    2623: `1613`,
    2624: `1614`,
    2625: `1615`,
    2626: `1615`,
    2627: `1615`,
    2628: `1616`,
    2629: `1617`,
    263: `85`,
    2630: `1617`,
    2631: `1618`,
    2632: `1619`,
    2633: `1619`,
    2634: `1619`,
    2635: `1620`,
    2636: `1620`,
    2637: `1621`,
    2638: `1622`,
    2639: `1622`,
    264: `86`,
    2640: `1623`,
    2641: `1624`,
    2642: `1624`,
    2643: `1624`,
    2644: `1625`,
    2645: `1626`,
    2646: `1626`,
    2647: `1627`,
    2648: `1628`,
    2649: `1628`,
    265: `89`,
    2650: `1628`,
    2651: `1629`,
    2652: `1630`,
    2653: `1631`,
    2654: `1632`,
    2655: `1632`,
    2656: `1633`,
    2657: `1634`,
    2658: `1634`,
    2659: `1634`,
    266: `89`,
    2660: `1635`,
    2661: `1636`,
    2662: `1636`,
    2663: `1637`,
    2664: `1638`,
    2665: `1638`,
    2666: `1638`,
    2667: `1639`,
    2668: `1640`,
    2669: `1640`,
    267: `89`,
    2670: `1641`,
    2671: `1642`,
    2672: `1642`,
    2673: `1642`,
    2674: `1643`,
    2675: `1644`,
    2676: `1644`,
    2677: `1645`,
    2678: `1646`,
    2679: `1646`,
    268: `90`,
    2680: `1646`,
    2681: `1647`,
    2682: `1648`,
    2683: `1648`,
    2684: `1649`,
    2685: `1650`,
    2686: `1650`,
    2687: `1650`,
    2688: `1651`,
    2689: `1651`,
    269: `90`,
    2690: `1652`,
    2691: `1653`,
    2692: `1653`,
    2693: `1654`,
    2694: `1654`,
    2695: `1654`,
    2696: `1655`,
    2697: `1656`,
    2698: `1656`,
    2699: `1657`,
    27: `2`,
    270: `91`,
    2700: `1659`,
    2701: `1660`,
    2702: `1660`,
    2703: `1660`,
    2704: `1662`,
    2705: `1663`,
    2706: `1663`,
    2707: `1663`,
    2708: `1664`,
    2709: `1665`,
    271: `92`,
    2710: `1666`,
    2711: `1667`,
    2712: `1668`,
    2713: `1670`,
    2714: `1671`,
    2715: `1672`,
    2716: `1673`,
    2717: `1673`,
    2718: `1673`,
    2719: `1674`,
    272: `92`,
    2720: `1674`,
    2721: `1675`,
    2722: `1676`,
    2723: `1677`,
    2724: `1679`,
    2725: `1679`,
    2726: `1680`,
    2727: `1681`,
    2728: `1681`,
    2729: `1682`,
    273: `92`,
    2730: `1684`,
    2731: `1685`,
    2732: `1685`,
    2733: `1686`,
    2734: `1688`,
    2735: `1689`,
    2736: `1690`,
    2737: `1691`,
    2738: `1692`,
    2739: `1692`,
    274: `93`,
    2740: `1693`,
    2741: `1694`,
    2742: `1695`,
    2743: `1696`,
    2744: `1698`,
    2745: `1699`,
    2746: `1699`,
    2747: `1699`,
    2748: `1702`,
    2749: `1702`,
    275: `93`,
    2750: `1703`,
    2751: `1703`,
    2752: `1704`,
    2753: `1705`,
    2754: `1706`,
    2755: `1707`,
    2756: `1707`,
    2757: `1708`,
    2758: `1709`,
    2759: `1709`,
    276: `94`,
    2760: `1710`,
    2761: `1710`,
    2762: `1711`,
    2763: `1711`,
    2764: `1712`,
    2765: `1713`,
    2766: `1714`,
    2767: `1714`,
    2768: `1715`,
    2769: `1716`,
    277: `94`,
    2770: `1717`,
    2771: `1718`,
    2772: `1718`,
    2773: `1719`,
    2774: `1720`,
    2775: `1721`,
    2776: `1723`,
    2777: `1723`,
    2778: `1724`,
    2779: `1724`,
    278: `94`,
    2780: `1725`,
    2781: `1726`,
    2782: `1727`,
    2783: `1727`,
    2784: `1727`,
    2785: `1728`,
    2786: `1728`,
    2787: `1728`,
    2788: `1730`,
    2789: `1731`,
    279: `96`,
    2790: `1731`,
    2791: `1732`,
    2792: `1732`,
    2793: `1732`,
    2794: `1734`,
    2795: `1735`,
    2796: `1736`,
    2797: `1737`,
    2798: `1737`,
    2799: `1737`,
    28: `2`,
    280: `96`,
    2800: `1738`,
    2801: `1738`,
    2802: `1739`,
    2803: `1739`,
    2804: `1739`,
    2805: `1740`,
    2806: `1740`,
    2807: `1740`,
    2808: `1743`,
    2809: `1743`,
    281: `96`,
    2810: `1744`,
    2811: `1744`,
    2812: `1745`,
    2813: `1746`,
    2814: `1747`,
    2815: `1748`,
    2816: `1748`,
    2817: `1749`,
    2818: `1750`,
    2819: `1750`,
    282: `97`,
    2820: `1751`,
    2821: `1751`,
    2822: `1752`,
    2823: `1752`,
    2824: `1753`,
    2825: `1754`,
    2826: `1755`,
    2827: `1755`,
    2828: `1756`,
    2829: `1757`,
    283: `97`,
    2830: `1758`,
    2831: `1759`,
    2832: `1759`,
    2833: `1760`,
    2834: `1760`,
    2835: `1761`,
    2836: `1762`,
    2837: `1763`,
    2838: `1763`,
    2839: `1764`,
    284: `99`,
    2840: `1765`,
    2841: `1766`,
    285: `99`,
    286: `100`,
    287: `101`,
    288: `102`,
    289: `105`,
    29: `2`,
    290: `105`,
    291: `105`,
    292: `106`,
    293: `107`,
    294: `109`,
    295: `110`,
    296: `111`,
    297: `112`,
    298: `113`,
    299: `113`,
    3: `2`,
    30: `2`,
    300: `114`,
    301: `115`,
    302: `115`,
    303: `115`,
    304: `116`,
    305: `116`,
    306: `116`,
    307: `117`,
    308: `117`,
    309: `118`,
    31: `2`,
    310: `118`,
    311: `118`,
    312: `120`,
    313: `120`,
    314: `120`,
    315: `121`,
    316: `121`,
    317: `123`,
    318: `123`,
    319: `124`,
    32: `2`,
    320: `125`,
    321: `126`,
    322: `129`,
    323: `129`,
    324: `129`,
    325: `131`,
    326: `132`,
    327: `133`,
    328: `134`,
    329: `134`,
    33: `4`,
    330: `135`,
    331: `136`,
    332: `136`,
    333: `136`,
    334: `137`,
    335: `138`,
    336: `139`,
    337: `140`,
    338: `141`,
    339: `142`,
    34: `4`,
    340: `142`,
    341: `142`,
    342: `143`,
    343: `143`,
    344: `144`,
    345: `144`,
    346: `144`,
    347: `147`,
    348: `147`,
    349: `148`,
    35: `5`,
    350: `149`,
    351: `150`,
    352: `153`,
    353: `153`,
    354: `153`,
    355: `154`,
    356: `154`,
    357: `155`,
    358: `156`,
    359: `156`,
    36: `5`,
    360: `157`,
    361: `158`,
    362: `159`,
    363: `159`,
    364: `160`,
    365: `161`,
    366: `162`,
    367: `162`,
    368: `163`,
    369: `164`,
    37: `5`,
    370: `164`,
    371: `165`,
    372: `166`,
    373: `167`,
    374: `167`,
    375: `168`,
    376: `169`,
    377: `169`,
    378: `169`,
    379: `170`,
    38: `6`,
    380: `171`,
    381: `171`,
    382: `172`,
    383: `173`,
    384: `174`,
    385: `174`,
    386: `175`,
    387: `176`,
    388: `177`,
    389: `177`,
    39: `7`,
    390: `178`,
    391: `179`,
    392: `179`,
    393: `180`,
    394: `181`,
    395: `182`,
    396: `182`,
    397: `183`,
    398: `183`,
    399: `183`,
    4: `2`,
    40: `8`,
    400: `186`,
    401: `186`,
    402: `187`,
    403: `188`,
    404: `189`,
    405: `192`,
    406: `192`,
    407: `192`,
    408: `193`,
    409: `193`,
    41: `9`,
    410: `194`,
    411: `194`,
    412: `194`,
    413: `195`,
    414: `195`,
    415: `196`,
    416: `196`,
    417: `196`,
    418: `199`,
    419: `199`,
    42: `10`,
    420: `200`,
    421: `201`,
    422: `202`,
    423: `205`,
    424: `205`,
    425: `205`,
    426: `206`,
    427: `206`,
    428: `207`,
    429: `207`,
    43: `11`,
    430: `207`,
    431: `208`,
    432: `208`,
    433: `209`,
    434: `209`,
    435: `209`,
    436: `212`,
    437: `212`,
    438: `213`,
    439: `214`,
    44: `11`,
    440: `215`,
    441: `218`,
    442: `218`,
    443: `218`,
    444: `219`,
    445: `219`,
    446: `220`,
    447: `221`,
    448: `221`,
    449: `222`,
    45: `12`,
    450: `222`,
    451: `222`,
    452: `225`,
    453: `225`,
    454: `226`,
    455: `227`,
    456: `228`,
    457: `231`,
    458: `231`,
    459: `231`,
    46: `13`,
    460: `232`,
    461: `232`,
    462: `233`,
    463: `233`,
    464: `233`,
    465: `234`,
    466: `234`,
    467: `235`,
    468: `235`,
    469: `235`,
    47: `14`,
    470: `237`,
    471: `237`,
    472: `237`,
    473: `238`,
    474: `239`,
    475: `239`,
    476: `241`,
    477: `242`,
    478: `243`,
    479: `244`,
    48: `14`,
    480: `244`,
    481: `245`,
    482: `246`,
    483: `247`,
    484: `248`,
    485: `248`,
    486: `250`,
    487: `251`,
    488: `251`,
    489: `252`,
    49: `15`,
    490: `253`,
    491: `254`,
    492: `254`,
    493: `254`,
    494: `255`,
    495: `255`,
    496: `256`,
    497: `257`,
    498: `258`,
    499: `258`,
    5: `2`,
    50: `16`,
    500: `259`,
    501: `259`,
    502: `260`,
    503: `260`,
    504: `260`,
    505: `261`,
    506: `261`,
    507: `262`,
    508: `262`,
    509: `262`,
    51: `17`,
    510: `262`,
    511: `262`,
    512: `262`,
    513: `263`,
    514: `263`,
    515: `264`,
    516: `265`,
    517: `266`,
    518: `266`,
    519: `267`,
    52: `18`,
    520: `268`,
    521: `270`,
    522: `270`,
    523: `271`,
    524: `271`,
    525: `271`,
    526: `272`,
    527: `272`,
    528: `273`,
    529: `274`,
    53: `19`,
    530: `275`,
    531: `275`,
    532: `275`,
    533: `275`,
    534: `275`,
    535: `275`,
    536: `275`,
    537: `275`,
    538: `275`,
    539: `275`,
    54: `20`,
    540: `275`,
    541: `275`,
    542: `276`,
    543: `276`,
    544: `276`,
    545: `279`,
    546: `279`,
    547: `279`,
    548: `279`,
    549: `279`,
    55: `21`,
    550: `279`,
    551: `279`,
    552: `279`,
    553: `279`,
    554: `279`,
    555: `279`,
    556: `279`,
    557: `279`,
    558: `279`,
    559: `279`,
    56: `22`,
    560: `279`,
    561: `279`,
    562: `279`,
    563: `279`,
    564: `280`,
    565: `280`,
    566: `281`,
    567: `281`,
    568: `281`,
    569: `284`,
    57: `24`,
    570: `284`,
    571: `284`,
    572: `284`,
    573: `284`,
    574: `284`,
    575: `284`,
    576: `284`,
    577: `284`,
    578: `284`,
    579: `284`,
    58: `24`,
    580: `284`,
    581: `284`,
    582: `284`,
    583: `284`,
    584: `284`,
    585: `284`,
    586: `284`,
    587: `284`,
    588: `285`,
    589: `285`,
    59: `24`,
    590: `286`,
    591: `286`,
    592: `286`,
    593: `289`,
    594: `289`,
    595: `289`,
    596: `289`,
    597: `289`,
    598: `289`,
    599: `289`,
    6: `2`,
    60: `24`,
    600: `289`,
    601: `289`,
    602: `289`,
    603: `289`,
    604: `289`,
    605: `289`,
    606: `289`,
    607: `289`,
    608: `289`,
    609: `289`,
    61: `24`,
    610: `289`,
    611: `289`,
    612: `290`,
    613: `290`,
    614: `291`,
    615: `291`,
    616: `291`,
    617: `294`,
    618: `294`,
    619: `294`,
    62: `24`,
    620: `294`,
    621: `294`,
    622: `294`,
    623: `294`,
    624: `294`,
    625: `294`,
    626: `294`,
    627: `294`,
    628: `294`,
    629: `294`,
    63: `24`,
    630: `294`,
    631: `294`,
    632: `294`,
    633: `294`,
    634: `294`,
    635: `294`,
    636: `295`,
    637: `295`,
    638: `296`,
    639: `296`,
    64: `24`,
    640: `296`,
    641: `298`,
    642: `298`,
    643: `299`,
    644: `300`,
    645: `301`,
    646: `301`,
    647: `302`,
    648: `303`,
    649: `305`,
    65: `24`,
    650: `306`,
    651: `307`,
    652: `308`,
    653: `309`,
    654: `309`,
    655: `310`,
    656: `311`,
    657: `311`,
    658: `311`,
    659: `312`,
    66: `24`,
    660: `312`,
    661: `312`,
    662: `313`,
    663: `314`,
    664: `314`,
    665: `315`,
    666: `315`,
    667: `316`,
    668: `316`,
    669: `317`,
    67: `24`,
    670: `318`,
    671: `326`,
    672: `326`,
    673: `327`,
    674: `327`,
    675: `328`,
    676: `329`,
    677: `329`,
    678: `330`,
    679: `330`,
    68: `24`,
    680: `331`,
    681: `331`,
    682: `332`,
    683: `333`,
    684: `341`,
    685: `341`,
    686: `342`,
    687: `342`,
    688: `343`,
    689: `344`,
    69: `24`,
    690: `344`,
    691: `345`,
    692: `346`,
    693: `354`,
    694: `354`,
    695: `355`,
    696: `355`,
    697: `356`,
    698: `357`,
    699: `357`,
    7: `2`,
    70: `24`,
    700: `358`,
    701: `358`,
    702: `359`,
    703: `359`,
    704: `360`,
    705: `360`,
    706: `361`,
    707: `361`,
    708: `362`,
    709: `363`,
    71: `24`,
    710: `364`,
    711: `364`,
    712: `365`,
    713: `365`,
    714: `366`,
    715: `366`,
    716: `367`,
    717: `367`,
    718: `368`,
    719: `368`,
    72: `24`,
    720: `369`,
    721: `369`,
    722: `369`,
    723: `372`,
    724: `372`,
    725: `373`,
    726: `374`,
    727: `374`,
    728: `375`,
    729: `376`,
    73: `24`,
    730: `376`,
    731: `377`,
    732: `378`,
    733: `378`,
    734: `378`,
    735: `379`,
    736: `379`,
    737: `380`,
    738: `380`,
    739: `381`,
    74: `24`,
    740: `382`,
    741: `383`,
    742: `383`,
    743: `384`,
    744: `384`,
    745: `384`,
    746: `384`,
    747: `384`,
    748: `384`,
    749: `385`,
    75: `24`,
    750: `385`,
    751: `386`,
    752: `387`,
    753: `389`,
    754: `389`,
    755: `390`,
    756: `391`,
    757: `392`,
    758: `393`,
    759: `393`,
    76: `24`,
    760: `394`,
    761: `394`,
    762: `395`,
    763: `396`,
    764: `396`,
    765: `396`,
    766: `397`,
    767: `398`,
    768: `398`,
    769: `400`,
    77: `24`,
    770: `400`,
    771: `401`,
    772: `401`,
    773: `401`,
    774: `402`,
    775: `403`,
    776: `403`,
    777: `404`,
    778: `404`,
    779: `404`,
    78: `24`,
    780: `404`,
    781: `404`,
    782: `404`,
    783: `404`,
    784: `404`,
    785: `404`,
    786: `404`,
    787: `405`,
    788: `405`,
    789: `406`,
    79: `24`,
    790: `407`,
    791: `407`,
    792: `407`,
    793: `408`,
    794: `409`,
    795: `410`,
    796: `410`,
    797: `411`,
    798: `412`,
    799: `412`,
    8: `2`,
    80: `24`,
    800: `412`,
    801: `413`,
    802: `413`,
    803: `414`,
    804: `414`,
    805: `415`,
    806: `415`,
    807: `416`,
    808: `417`,
    809: `418`,
    81: `24`,
    810: `418`,
    811: `419`,
    812: `419`,
    813: `420`,
    814: `421`,
    815: `422`,
    816: `423`,
    817: `423`,
    818: `424`,
    819: `424`,
    82: `24`,
    820: `424`,
    821: `425`,
    822: `426`,
    823: `426`,
    824: `427`,
    825: `427`,
    826: `427`,
    827: `428`,
    828: `429`,
    829: `429`,
    83: `24`,
    830: `430`,
    831: `431`,
    832: `432`,
    833: `432`,
    834: `433`,
    835: `433`,
    836: `434`,
    837: `435`,
    838: `436`,
    839: `437`,
    84: `24`,
    840: `438`,
    841: `438`,
    842: `439`,
    843: `440`,
    844: `441`,
    845: `441`,
    846: `442`,
    847: `442`,
    848: `443`,
    849: `443`,
    85: `24`,
    850: `444`,
    851: `444`,
    852: `445`,
    853: `445`,
    854: `446`,
    855: `446`,
    856: `447`,
    857: `447`,
    858: `449`,
    859: `449`,
    86: `24`,
    860: `450`,
    861: `450`,
    862: `450`,
    863: `451`,
    864: `452`,
    865: `452`,
    866: `452`,
    867: `453`,
    868: `453`,
    869: `454`,
    87: `24`,
    870: `454`,
    871: `455`,
    872: `456`,
    873: `456`,
    874: `457`,
    875: `457`,
    876: `458`,
    877: `459`,
    878: `460`,
    879: `460`,
    88: `24`,
    880: `461`,
    881: `461`,
    882: `462`,
    883: `463`,
    884: `464`,
    885: `464`,
    886: `465`,
    887: `465`,
    888: `466`,
    889: `466`,
    89: `24`,
    890: `467`,
    891: `468`,
    892: `468`,
    893: `469`,
    894: `469`,
    895: `470`,
    896: `470`,
    897: `471`,
    898: `472`,
    899: `472`,
    9: `2`,
    90: `24`,
    900: `473`,
    901: `473`,
    902: `474`,
    903: `474`,
    904: `474`,
    905: `475`,
    906: `476`,
    907: `476`,
    908: `477`,
    909: `478`,
    91: `24`,
    910: `479`,
    911: `479`,
    912: `481`,
    913: `481`,
    914: `482`,
    915: `482`,
    916: `483`,
    917: `484`,
    918: `484`,
    919: `485`,
    92: `24`,
    920: `486`,
    921: `487`,
    922: `487`,
    923: `488`,
    924: `489`,
    925: `489`,
    926: `489`,
    927: `490`,
    928: `491`,
    929: `491`,
    93: `24`,
    930: `492`,
    931: `493`,
    932: `494`,
    933: `494`,
    934: `495`,
    935: `496`,
    936: `497`,
    937: `497`,
    938: `498`,
    939: `499`,
    94: `24`,
    940: `500`,
    941: `500`,
    942: `501`,
    943: `502`,
    944: `503`,
    945: `503`,
    946: `504`,
    947: `505`,
    948: `506`,
    949: `506`,
    95: `24`,
    950: `507`,
    951: `508`,
    952: `509`,
    953: `509`,
    954: `510`,
    955: `511`,
    956: `512`,
    957: `512`,
    958: `513`,
    959: `514`,
    96: `24`,
    960: `514`,
    961: `515`,
    962: `516`,
    963: `516`,
    964: `517`,
    965: `518`,
    966: `519`,
    967: `519`,
    968: `520`,
    969: `521`,
    97: `24`,
    970: `521`,
    971: `522`,
    972: `523`,
    973: `524`,
    974: `524`,
    975: `525`,
    976: `526`,
    977: `526`,
    978: `527`,
    979: `528`,
    98: `24`,
    980: `529`,
    981: `529`,
    982: `530`,
    983: `531`,
    984: `531`,
    985: `531`,
    986: `532`,
    987: `533`,
    988: `533`,
    989: `534`,
    99: `24`,
    990: `535`,
    991: `536`,
    992: `536`,
    993: `537`,
    994: `538`,
    995: `539`,
    996: `539`,
    997: `540`,
    998: `541`,
    999: `542`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 381,
  unsupported: [],
  version: 13,
  warnings: [`API User_claim may use up to 5 accounts, but the limit is 4. API User_claim starts at /app/raffle_token.rsh:130:37:application.`, `API User_claim may use up to 9 transaction references, but the limit is 8. API User_claim starts at /app/raffle_token.rsh:130:37:application.`, `Step 3 may use up to 10 transaction references, but the limit is 8. Step 3 starts at /app/raffle_token.rsh:130:37:dot.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/raffle_token.rsh:130:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"uint256","name":"elem9","type":"uint256"},{"internalType":"address payable","name":"elem10","type":"address"},{"internalType":"uint256","name":"elem11","type":"uint256"},{"internalType":"address payable","name":"elem12","type":"address"},{"internalType":"address payable","name":"elem13","type":"address"}],"internalType":"struct T12","name":"v7405","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"uint256","name":"elem9","type":"uint256"},{"internalType":"address payable","name":"elem10","type":"address"},{"internalType":"uint256","name":"elem11","type":"uint256"},{"internalType":"address payable","name":"elem12","type":"address"},{"internalType":"address payable","name":"elem13","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_309","type":"tuple"},{"internalType":"bool","name":"_User_claim0_309","type":"bool"},{"internalType":"bool","name":"_User_end0_309","type":"bool"},{"internalType":"bool","name":"_User_optin0_309","type":"bool"},{"internalType":"bool","name":"_User_refund0_309","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2963","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2986","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3422","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3815","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4210","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4613","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7366","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7370","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"address payable","name":"_asset","type":"address"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"uint256","name":"_maxEntries","type":"uint256"},{"internalType":"uint256","name":"_numberOfTickets","type":"uint256"},{"internalType":"bytes30","name":"_projectName","type":"bytes30"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v7386","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_refund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v7408","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_309","type":"tuple"},{"internalType":"bool","name":"_User_claim0_309","type":"bool"},{"internalType":"bool","name":"_User_end0_309","type":"bool"},{"internalType":"bool","name":"_User_optin0_309","type":"bool"},{"internalType":"bool","name":"_User_refund0_309","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v7411","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62004a76388190036080601f8201601f19168101906001600160401b038211908210176200084a576101c092829160405260803912620009db576040516101c081016001600160401b038111828210176200084a57604052608051815260a05161ffff1981168103620009db5760208201526200007d60c0620009fc565b604082015260e0518015158103620009db57606082015261010080516080830152610120805160a08401526101405160c08401526101605160e084015261018051918301919091526101a05190820152620000da6101c0620009fc565b6101408201526101e051610160820152620000f7610200620009fc565b6101808201526200010a610220620009fc565b6101a08201524360035560405161022081016001600160401b038111828210176200084a576040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c08201526040518061014081011060018060401b03610140830111176200084a576000918161014061020093016040528381528360208201528360408201528360608201528360808201528360a08201528360c08201528360e0820152836101008201528361012082015260e0820152826101008201528261012082015282610140820152620001eb62000a11565b61016082015282610180820152826101a0820152826101c0820152826101e08201520152604051906200021e82620009e0565b6200022862000a11565b82526200023462000a32565b60208301526200024362000a32565b604083015260ff60045416620009c2577f11f8d66f2838b5521f85b7f9a36434010ceddf3ff699ab16afd71003391760fe6101e06040513381528351602082015261ffff19602085015116604082015260018060a01b036040850151166060820152606084015115156080820152608084015160a082015260a084015160c082015260c084015160e082015260e084015161010082015261010084015161012082015261012084015161014082015260018060a01b036101408501511661016082015261016084015161018082015260018060a01b03610180850151166101a082015260018060a01b036101a0850151166101c0820152a180518015908115620009b5575b50156200099c5760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200039883620009e0565b6000835260208301526040820152620003b062000a32565b9160005b60028110620009625750508152604083810191909152610140820151908201516001600160a01b039081169116036200095a5760005b15620009415760c0810151608082015110620009285760001960e082015110156200090f57600160e08201511115620008f65734620008dd57604051916001600160401b036101e08401908111908411176200084a576040916101e08401835260008452600060208501526000838501526000606085015260006080850152600060a0850152600060c0850152600060e08501526000610100850152600061012085015260006101408501526000610160850152600061018085015260006101a0850152620004b862000a32565b6101c085015233845261ffff19602082015116602085015260018060a01b038382015116838501526060810151151560608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015261012081015161012085015260018060a01b036101408201511661014085015261016081015161016085015260018060a01b03610180820151166101808501526101a060018060a01b03910151166101a084015201516020810151604060208201519101511515604051916200059683620009e0565b6000835260208301526040820152620005ae62000a32565b9160005b600281106200088d57505060208201526101c08201526001600055436001556101c06040519160018060a01b03815116602084015261ffff19602082015116604084015260018060a01b036040820151166060840152606081015115156080840152608081015160a084015260a081015160c084015260c081015160e084015260e081015161010084015261010081015161012084015261012081015161014084015260018060a01b036101408201511661016084015261016081015161018084015260018060a01b03610180820151166101a084015260018060a01b036101a0820151168284015201516101e082016000905b6002821062000860576102808452836102a081016001600160401b038111828210176200084a5760405280516001600160401b0381116200084a57600254600181811c911680156200083f575b60208210146200082957601f8111620007bf575b50602091601f8211600114620007555791819260009262000749575b50508160011b916000199060031b1c1916176002555b604051613fd4908162000aa28239f35b01519050828062000723565b601f19821692600260005260206000209160005b858110620007a6575083600195106200078c575b505050811b0160025562000739565b015160001960f88460031b161c191690558280806200077d565b9192602060018192868501518155019401920162000769565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200081e575b601f0160051c01905b81811062000811575062000707565b6000815560010162000802565b9091508190620007f9565b634e487b7160e01b600052602260045260246000fd5b90607f1690620006f3565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620006a6565b62000899818362000a79565b51620008a6828662000a79565b52620008b3818562000a79565b506000198114620008c757600101620005b2565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b6001620003ea565b6200096e818362000a79565b516200097b828662000a79565b5262000988818562000a79565b506000198114620008c757600101620003b4565b60405163100960cb60e01b815260136004820152602490fd5b9050600154143862000348565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b606081019081106001600160401b038211176200084a57604052565b51906001600160a01b0382168203620009db57565b6040519062000a2082620009e0565b60006040838281528260208201520152565b6040805191908281016001600160401b038111848210176200084a5781528260005b82811062000a6157505050565b60209062000a6e62000a11565b818401520162000a54565b90600281101562000a8b5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e685146101e45780631e93b0f1146101db578063213b7923146101d257806336e56ea5146101c957806342fbef30146101c057806347dc4e6c146101b7578063573b8510146101ae5780635cd91bc2146101a55780635fde30d81461019c578063690141ef146101935780636cf1d8021461018a5780637888d2df146101815780637a2b54dc14610178578063832307571461016f578063883513de146101665780638ddecb6d1461015d578063a579242414610154578063ab53f2c61461014b578063c5d86f6f14610142578063d184691f14610139578063e07a712014610130578063edca4171146101275763fa726c840361000e57610122610ed2565b61000e565b50610122610e92565b50610122610e52565b50610122610e02565b50610122610da8565b50610122610d33565b50610122610c9c565b50610122610c2a565b50610122610b90565b50610122610b71565b50610122610b31565b50610122610aa6565b50610122610a43565b506101226109d1565b506101226108b4565b506101226107ae565b506101226104d3565b50610122610478565b506101226103c9565b50610122610371565b50610122610292565b50610122610256565b5034610251576000366003190112610251576101fe61134d565b6004600054036102385760406020916101a061022961021b611055565b85808251830101910161155c565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b5034610251576000366003190112610251576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361025157565b50346102515760203660031901126102515761033860a06004356102b581610281565b6102bd61134d565b906102cc6004600054146116d0565b6102e66102d7611055565b6020808251830101910161155c565b50600180841b03166102f7816111e4565b516103018161035d565b61030a8161035d565b60009060010361033c57506103206040916111e4565b01519182915b01526040519081529081906020820190565b0390f35b9050918291610326565b50634e487b7160e01b600052602160045260246000fd5b6002111561036757565b61036f610346565b565b50346102515760203660031901126102515760606103a260043561039481610281565b61039c6111ab565b506111e4565b604080519180516103b28161035d565b835260208101511515602084015201516040820152f35b5060e0366003190112610251576103de61134d565b604051906103eb82610f83565b600435825260c0366023190112610251576040519161040983610fab565b6024359260058410156102515761046c93815261042536613e2b565b6020820152606435610436816113ee565b6040820152610443613f80565b6060820152610450613f8d565b608082015261045d613f9a565b60a08201526020820152611fc0565b60405160008152602090f35b5060003660031901126102515760206101a061049261134d565b6104c78161049e611cbe565b8581019060018251525115156040825101526104b8611cbe565b90600082525186820152611fc0565b01511515604051908152f35b50602080600319360112610251576104e961134d565b506104f336613e4b565b906104fc613e6b565b61050a6001600054146116f0565b610523610515611055565b838082518301019101613e9a565b9061053f61053a61053660045460ff1690565b1590565b611710565b60408051338152855160208201529094610589917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908790a15180159081156107a2575b50611730565b61012091828101928351341461059e90611750565b6101c09182810151868101518051916101609182850193845101908b8b8201519101511515906105cc6110fe565b9283528b83015215158b8201526105e2916135e6565b86526101408084019283516105f690610275565b815161060291336135a3565b61060b90611770565b845133906001600160a01b039061062190610275565b161461062c90611790565b898801958651600090528a8751016000905288515151968c8a01978851528b885101600090528c8851016106609060019052565b875160056060909101528951602001515188516080015260808701908151895160a0015251885160c00152610693611f05565b9b8c88516106a090610275565b6106a991611c34565b8088015161ffff1916908d01528c8701516106c390610275565b6106cf908d8f01611c34565b60608701511515151560608d01525160808c015260a0860194855160a08d015260c087015160c08d015260e087015160e08d015261010080880151908d01525161071890610275565b610723918c01611c34565b5190890152610180908184015161073990610275565b610744918a01611c34565b6101a08093015161075490610275565b61075f918901611c34565b5161076a9042613341565b908601525190840152436101e084015242610200840152516102208301525161024082015261079890613b82565b5160008152602090f35b90506001541438610583565b5034610251576000366003190112610251576107c861134d565b6004600054036107ff576080610338916102406107e66102d7611055565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600a6004820152602490fd5b6001600160a01b03169052565b61036f909291926101408101938051825261084860208201516020840190610818565b6040810151604083015261086460608201516060840190610818565b6080810151608083015261088160a082015160a084019015159052565b60c0818101519083015260e080820151908301526101008082015161ffff19169083015261012080910151910190610818565b5034610251576000366003190112610251576108ce6112e2565b5061033860e06108dc61134d565b6108e4611c1a565b6108f26004600054146117b0565b6109bf6109006102d7611055565b6101408101518351526109236109196040830151610275565b6020855101611c34565b8481015160408451015261094861093e610160830151610275565b6060855101611c34565b60a081015160808451015261096f6109636060830151151590565b60a08551019015159052565b6109a76101008083015160c08651015260808301518786510152610999602084015161ffff191690565b855161ffff19909116910152565b6109b661012080920151610275565b90835101611c34565b51918291015260405191829182610825565b5034610251576000366003190112610251576109eb61134d565b600460005403610a2a5761012060209160a06101c0610a19610a0b611055565b86808251830101910161155c565b015101519182910152604051908152f35b60405163100960cb60e01b8152600f6004820152602490fd5b506020366003190112610251576020610180610a5d61134d565b6104c781604051610a6d81610f83565b604051610a7981610fc6565b60008152815285810190610a8b611c56565b825260043581515260008251525186825101526104b8611cbe565b503461025157600036600319011261025157610ac061134d565b600460005403610b185761014061033891610ad9611055565b610120610af660018060a01b03926020808251830101910161155c565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b815260106004820152602490fd5b5060003660031901126102515760206101e0610b4b61134d565b6104c781610b57611cbe565b8581019060038251525115156080825101526104b8611cbe565b5034610251576000366003190112610251576020600154604051908152f35b503461025157600036600319011261025157610baa61134d565b600460005403610bd45760208091610300610229610bc6611055565b84808251830101910161155c565b60405163100960cb60e01b815260076004820152602490fd5b6040908051610bfb8161035d565b83526020818101511515908401528101516001600160a01b0316910152565b60608101929161036f9190610bed565b503461025157600036600319011261025157610c446111ab565b50610c4d61134d565b600460005403610c83576101606103389160c06101c0610c6e6102d7611055565b01510151918291015260405191829182610c1a565b60405163100960cb60e01b815260116004820152602490fd5b503461025157602036600319011261025157600435610cba81610281565b610cc261134d565b90600460005403610d1a57610338916001610cf160c093610ce46102d7611055565b50828060a01b0316611267565b51610cfb8161035d565b610d048161035d565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600c6004820152602490fd5b503461025157600080600319360112610da5578054610d50611055565b906040519283918252602090604082840152835191826040850152815b838110610d8e57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610d6d565b80fd5b5034610251576020366003190112610251576060610dd9600435610dcb81610281565b610dd36111ab565b50611267565b60408051918051610de98161035d565b8352602081015115156020840152015115156040820152f35b503461025157600036600319011261025157610e1c61134d565b600460005403610e395760606020916101e061022961021b611055565b60405163100960cb60e01b815260096004820152602490fd5b506000366003190112610251576020610200610e6c61134d565b6104c781610e78611cbe565b85810190600482515251151560a0825101526104b8611cbe565b5060003660031901126102515760206101c0610eac61134d565b6104c781610eb8611cbe565b8581019060028251525115156060825101526104b8611cbe565b503461025157600036600319011261025157610eec61134d565b600460005403610f1957610100602091826101c0610a19610f0b611055565b83808251830101910161155c565b60405163100960cb60e01b8152600e6004820152602490fd5b90600182811c92168015610f62575b6020831014610f4c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f41565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f9e57604052565b610fa6610f6c565b604052565b60c081019081106001600160401b03821117610f9e57604052565b602081019081106001600160401b03821117610f9e57604052565b606081019081106001600160401b03821117610f9e57604052565b60e081019081106001600160401b03821117610f9e57604052565b60a081019081106001600160401b03821117610f9e57604052565b601f909101601f19168101906001600160401b03821190821017610f9e57604052565b604051906000826002549161106983610f32565b8083526001938085169081156110dd575060011461108f575b5061036f92500383611032565b60026000908152600080516020613fa883398151915294602093509091905b8183106110c557505061036f935082010138611082565b855488840185015294850194879450918301916110ae565b905061036f94506020925060ff191682840152151560051b82010138611082565b6040519061036f82610fe1565b6040519061022082016001600160401b03811183821017610f9e57604052565b6040519061032082016001600160401b03811183821017610f9e57604052565b604051906102e082016001600160401b03811183821017610f9e57604052565b6040519061026082016001600160401b03811183821017610f9e57604052565b604051906101e082016001600160401b03811183821017610f9e57604052565b604051906111b882610fe1565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b906111ed6111ab565b9160018060a01b03166000908082526005602052600160ff6040842054166112148161035d565b0361125c576040929350815260056020522060016040519161123583610fe1565b60ff81548181166112458161035d565b855260081c16151560208401520154604082015290565b508083526020830152565b906112706111ab565b9160018060a01b03166000908082526006602052600160ff6040842054166112978161035d565b0361125c576040929350815260066020522060ff604051916112b883610fe1565b548181166112c58161035d565b8352818160081c161515602084015260101c161515604082015290565b6040519061014082016001600160401b03811183821017611340575b604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b611348610f6c565b6112fe565b61135561110b565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401526113876112e2565b60e08401528061010084015280610120840152806101408401526113a96111ab565b61016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b519061036f82610281565b519061ffff198216820361025157565b8015150361025157565b519061036f826113ee565b80929103916101208312610251576040519061141e82610ffc565b606082948251845260208301516020850152604083015161143e816113ee565b604085015281830151828501526080830151608085015260a083015160a085015260bf190112610251576040519161147583610fe1565b60c082015160028110156102515760c09261010091855260e081015161149a816113ee565b602086015201516114aa81610281565b60408401520152565b919082606091031261025157604051606081016001600160401b038111828210176114ff575b604052604080829480518452602081015160208501520151916114fb836113ee565b0152565b611507610f6c565b6114d9565b81601f82011215610251576040519161152483610f83565b829060c083019281841161025157915b838310611542575050505090565b602060609161155184866114b3565b815201920191611534565b9061050082820312610251576104e061157361112b565b9261157d816113d3565b845261158b602082016113de565b602085015261159c604082016113d3565b60408501526115ad606082016113f8565b60608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010080820151908501526101206115f38183016113d3565b9085015261014080820151908501526101606116108183016113d3565b908501526101806116228183016113d3565b908501526101a080820151908501526101c061164084828401611403565b908501526102e0808201516101e08601526116c3610300946116648187860161150c565b6102008801526103c08401516102208801526116836103e085016113f8565b6102408801526104008401516102608801526104208401516102808801526104408401516102a08801526104608401516102c088015261048084016114b3565b9085015201519082015290565b156116d757565b60405163100960cb60e01b8152600b6004820152602490fd5b156116f757565b60405163100960cb60e01b815260196004820152602490fd5b1561171757565b60405163100960cb60e01b8152601a6004820152602490fd5b1561173757565b60405163100960cb60e01b8152601b6004820152602490fd5b1561175757565b60405163100960cb60e01b8152601c6004820152602490fd5b1561177757565b60405163100960cb60e01b8152601d6004820152602490fd5b1561179757565b60405163100960cb60e01b8152601e6004820152602490fd5b156117b757565b60405163100960cb60e01b8152600d6004820152602490fd5b156117d757565b60405163100960cb60e01b8152601f6004820152602490fd5b156117f757565b60405163100960cb60e01b815260206004820152602490fd5b1561181757565b60405163100960cb60e01b815260216004820152602490fd5b1561183757565b60405163100960cb60e01b815260386004820152602490fd5b1561185757565b60405163100960cb60e01b815260396004820152602490fd5b1561187757565b60405163100960cb60e01b8152603a6004820152602490fd5b1561189757565b60405163100960cb60e01b8152603b6004820152602490fd5b156118b757565b60405163100960cb60e01b8152603c6004820152602490fd5b156118d757565b60405163100960cb60e01b8152603d6004820152602490fd5b156118f757565b60405163100960cb60e01b8152603e6004820152602490fd5b1561191757565b60405163100960cb60e01b8152603f6004820152602490fd5b1561193757565b602460405163100960cb60e01b815260406004820152fd5b1561195657565b60405163100960cb60e01b815260356004820152602490fd5b1561197657565b60405163100960cb60e01b815260366004820152602490fd5b1561199657565b60405163100960cb60e01b815260376004820152602490fd5b156119b657565b60405163100960cb60e01b815260306004820152602490fd5b156119d657565b60405163100960cb60e01b815260316004820152602490fd5b156119f657565b60405163100960cb60e01b815260326004820152602490fd5b15611a1657565b60405163100960cb60e01b815260336004820152602490fd5b15611a3657565b60405163100960cb60e01b815260346004820152602490fd5b15611a5657565b60405163100960cb60e01b815260286004820152602490fd5b15611a7657565b60405163100960cb60e01b815260296004820152602490fd5b15611a9657565b60405163100960cb60e01b8152602a6004820152602490fd5b15611ab657565b60405163100960cb60e01b8152602b6004820152602490fd5b15611ad657565b60405163100960cb60e01b8152602c6004820152602490fd5b15611af657565b60405163100960cb60e01b8152602d6004820152602490fd5b15611b1657565b60405163100960cb60e01b8152602e6004820152602490fd5b15611b3657565b60405163100960cb60e01b8152602f6004820152602490fd5b15611b5657565b60405163100960cb60e01b815260226004820152602490fd5b15611b7657565b60405163100960cb60e01b815260236004820152602490fd5b15611b9657565b602460405163100960cb60e01b8152816004820152fd5b15611bb457565b60405163100960cb60e01b815260256004820152602490fd5b15611bd457565b60405163100960cb60e01b815260266004820152602490fd5b15611bf457565b60405163100960cb60e01b815260276004820152602490fd5b51611c178161035d565b90565b60405190611c2782610fc6565b81611c306112e2565b9052565b6001600160a01b039091169052565b60405190611c5082610fc6565b60008252565b6040519060c082016001600160401b03811183821017611ca7575b6040528160a0600091828152604051611c8981610fc6565b83815260208201528260408201528260608201528260808201520152565b611caf610f6c565b611c71565b6005111561036757565b60405190611ccb82610f83565b81600081526020611cda611c56565b910152565b604090815191611cee83610f83565b8260005b828110611cfe57505050565b602090611d096111ab565b8184015201611cf2565b60405190611d2082610f83565b60006020838281520152565b6040519060e082016001600160401b03811183821017611d77575b60405281600080825280602083015280604083015280606083015280608083015260a082015260c0611cda6111ab565b611d7f610f6c565b611d47565b611d8c61114b565b90611d95611c43565b82526000806020840152806040840152806060840152611db3611cdf565b6080840152611dc0611d13565b60a08401528060c08401528060e084015280610100840152611de06111ab565b610120840152611dee611d2c565b610140840152611dfc611d2c565b61016084015280610180840152806101a0840152611e18611cdf565b6101c0840152806101e0840152611e2d611cdf565b610200840152611e3b611d2c565b610220840152611e49611d2c565b610240840152611e576111ab565b610260840152806102808401526102a0830152611e72611d2c565b6102c0830152565b90929160a0602060e092610100850196600180851b03168552805182860152015180516005811015611ee3575b6040850152602081015151606085015260408101511515608085015260608101511515828501526080810151151560c085015201511515910152565b611eeb610346565b611ea7565b516005811015611efd5790565b611c17610346565b611f0d61116b565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152611f6f611d2c565b6101c0840152806101e084015280610200840152611f8b611cdf565b610220840152610240830152565b906002811015611faa5760051b0190565b634e487b7160e01b600052603260045260246000fd5b611fc8611d84565b90611fd76004600054146117d0565b6020611ff2611fe4611055565b82808251830101910161155c565b9161200a61200561053660045460ff1690565b6117f0565b7f6208016c67e3e236a673e1e5ef2c2ecb7c82bbbaf3dceeefa8ad16395a7ae0da6040518061203a843383611e7a565b0390a1612052815180159081156132fb575b50611810565b0161205d8151611ef0565b61206681611cb4565b6127105751602001518252600161208461207f336111e4565b611c0d565b61208d8161035d565b03612703576120fd6120f160406120a3336111e4565b01515b602085019081526120c26101e08501516101a086015111611b4f565b6120e66120d3825187515190613341565b8060408801526101008601511015611b6f565b845151905190613341565b60808301511015611b8f565b61210e82515160e083015190613397565b606083015261211d3415611bad565b61216d610200820151610300830151606085015101906121686102e085015161214e60406020830151920151151590565b906121576110fe565b948552602085015215156040840152565b613646565b60808301526121966121916121856040840151610275565b606085015190336135a3565b611bcd565b6121b56121b06121aa610120840151610275565b33613548565b611bed565b6121ce6121c1336111ca565b805460ff19166001179055565b604082015160016121de336111ca565b01557fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873361224260a08401612213338251611c34565b8451516020825101525160405191829182919091602080604083019460018060a01b0381511684520151910152565b0390a161225361026082015161331e565b8060c084015260c0820151908181146000146126ae575050600160e08301525b60e0820151156124c5576122c561018061036f947fb3622a89a03bcb1d8299bad81c707e6be992b2e01b3c407ee03569757eb5eb8f604051806122bb81906001602083019252565b0390a10160019052565b6122d461012083015160019052565b6122e633604061012085015101611c34565b6122fa610280820151606084015190613341565b6101408301515261231361026082015183515190613341565b6020610140840151015260606101c08201612345612335604083510151151590565b6040610140870151019015159052565b510151606061014084015101526102c0810151608061014084015101526123746102a082015183515190613355565b60a0610140840151015261012082015160c061014084015101526080612398611f05565b926123ac6123a68451610275565b85611c34565b60208301516123c79061ffff19165b61ffff19166020860152565b6123e06123d76040850151610275565b60408601611c34565b6123f96123f06060850151151590565b15156060860152565b818301518285015260a083015160a085015260c083015160c085015260e083015160e085015261010083015161010085015261244661243c610120850151610275565b6101208601611c34565b61014083015161014085015261246c61016061246481860151610275565b908601611c34565b61248761247d610180850151610275565b6101808601611c34565b6101a08301516101a08501526101408101516101c0850152436101e08501524261020085015201519061022091828401520151610240820152613b82565b61250361018061036f947f839a3d76d2b33d2e449be12c503195ca4d5c4ab94da8c4ee79ad7e18f3299fab604051806122bb81906001602083019252565b612517610280820151606084015190613341565b6101608301515261253061026082015183515190613341565b6020610160840151015260c06101c08201612562612552604083510151151590565b6040610160870151019015159052565b606081510151606061016086015101526102c0830151608061016086015101526125946102a084015185515190613355565b60a0610160860151015251015160c0610160840151015260806125b5611f05565b926125c36123a68451610275565b60208301516125d69061ffff19166123bb565b6125e66123d76040850151610275565b6125f66123f06060850151151590565b818301518285015260a083015160a085015260c083015160c085015260e083015160e085015261010083015161010085015261263961243c610120850151610275565b610140808401519085015261265f612655610160850151610275565b6101608601611c34565b61267061247d610180850151610275565b6101a08301516101a08501526101608101516101c0850152436101e08501524261020085015201519061022091828401520151610240820152613b82565b116126f6576126d76126c861026083015184515190613341565b60c08301511115610100840152565b6126f16126e8610100840151151590565b151560e0840152565b612273565b60006101008301526126d7565b6120fd6120f160006120a6565b600161271c8251611ef0565b61272581611cb4565b03612b665750806129b06101a061036f9561275f600161275060c06101c06102209901510151611c0d565b6127598161035d565b14611a4f565b6102a08401511561018087015261024084015115612b5c5761278d612788610180880151151590565b611a6f565b6127ae6102c08501516127a561020087015160200190565b51511015611a8f565b60016127c260c06101c08701510151611c0d565b6127cb8161035d565b03612b4a576101c084015160c00151604001516127f4906001600160a01b03165b838801611c34565b6128123360018060a01b0361280b858a0151610275565b1614611aaf565b61281c3415611acf565b61283461282f6121aa6040870151610275565b611aef565b61284d6128486121aa610120870151610275565b611b0f565b838201514210612b405761286d612868610180880151151590565b611b2f565b6128ad6102008501516020810151906128a86040602084015193015115156128936110fe565b93600085526020850152604084019015159052565b6136a3565b6101c08701526128f26128c4610120860151610275565b6128d084890151610275565b906128e061020088015160200190565b5151916001600160a01b0316906133f6565b6129456129196101c0880151515161291361290c8261336a565b6064900490565b90613355565b806101e08901526101c088015161216881519283510392604060208201519101511515906121576110fe565b61020087015261297d61295b6040860151610275565b6129658651610275565b6101e0890151916001600160a01b03909116906133f6565b604051600181527f01b557faac41283a3359a8efad82a2fb79974b3811fa661621112feac62d777a9080602081016122bb565b6102008301515151828401515261026081015160208385015101526000604083850151015260606101c082015101516060838501510152600060808385015101526102a081015160a083850151015260c06101c0820151015160c0838501510152610200612a1c611f05565b93612a30612a2a8451610275565b86611c34565b6020830151612a4b9061ffff19165b61ffff19166020870152565b612a64612a5b6040850151610275565b60408701611c34565b612a7d612a746060850151151590565b15156060870152565b6080830151608086015260a083015160a086015260c083015160c086015260e083015160e08601526101008084015190860152612acb612ac1610120850151610275565b6101208701611c34565b6101408084015190860152612af0610160612ae881860151610275565b908701611c34565b612b0b612b01610180850151610275565b6101808701611c34565b6101a08301516101a0860152838101516101c0860152436101e086015242828601520151828401520151610240820152613b82565b61286d6000611b2f565b6127f4612b578551610275565b6127ec565b61278d6000611a6f565b6002612b728251611ef0565b612b7b81611cb4565b03612df75750612c2f6101c061036f94612b9d612b988551610275565b610275565b3303612ddc57612bad60016119af565b612bc16102a08501516080860151146119cf565b612bcb34156119ef565b612be3612bde6121aa6040870151610275565b611a0f565b612bfc612bf76121aa610120870151610275565b611a2f565b604051600181527f060ebb99a5332f41fa786debe8007640dc003878fc7f6f3293fa0a79171ea9949080602081016122bb565b612c53612c40610120830151610275565b61020083015160200151519033906133f6565b610280810151610240830151526102608101516020610240840151015260006040610240840151015260c06101c08201606081510151606061024086015101526102c0830151608061024086015101526102a083015160a0610240860151015251015160c06102408401510152610240612ccb611f05565b92612cd96123a68451610275565b6020830151612cec9061ffff19166123bb565b612cfc6123d76040850151610275565b612d0c6123f06060850151151590565b6080830151608085015260a083015160a085015260c083015160c085015260e083015160e08501526101008084015190850152612d5061243c610120850151610275565b6101408084015190850152612d6d61016061246481860151610275565b612d7f61018061246481860151610275565b6101a0808401519085015201516101c0830152436101e083015242610200830152612dc66102008201516020810151906128a86040602084015193015115156128936110fe565b9061022091828401520151610240820152613b82565b612bad612df0612b98610180870151610275565b33146119af565b92916003612e058551611ef0565b612e0e81611cb4565b03612f99575061036f9250612e23341561194f565b6040810191612e3d612e386121aa8551610275565b61196f565b612f2e610120612f26818501612e5e612e596121aa8351610275565b61198f565b604051600081527f59b90981525a7f695034a1c162b05f580f9878a684a866a8b30ae01d1222bbc690602090a160006101e080960152612ed4612ecb612ea2611f05565b98612eb6612eb08a51610275565b8b611c34565b60208981015161ffff1916908b015251610275565b60408901611c34565b612eed612ee46060880151151590565b15156060890152565b6080860151608088015260a086015160a088015260c086015160c088015260e086015160e0880152610100808701519088015251610275565b908501611c34565b6101408083015190840152612f4b610160612f2681850151610275565b612f5d610180612f2681850151610275565b6101a080830151908401526101c08083015190840152439083015261020042818401528101519061022091828401520151610240820152613b82565b9192612fa760049151611ef0565b612fb081611cb4565b14612fba57505050565b61313a61020061036f946001612fcf336111e4565b8061026088015251612fe08161035d565b612fe98161035d565b036132f15761300e604061026087015101515b8061028088015260e086015190613397565b6102a086015261302a613025610240860151151590565b611830565b61304c600161303d610260880151611c0d565b6130468161035d565b14611850565b61305c6102808601511515611870565b6130726102a08601516103008601511015611890565b61308261026085015115156118b0565b61308c34156118d0565b6130a461309f6121aa6040870151610275565b6118f0565b6130bd6130b86121aa610120870151610275565b611910565b6130ce6101a0850151421015611930565b6130ec6130de6040860151610275565b6102a08701519033906133f6565b6130f86121c1336111ca565b60006001613105336111ca565b0155604051600181527f314f7db1c2d41696fcdb63828b8c9b3dfd36f2038c45feea18d8ef7be920d42c9080602081016122bb565b612dc66131526102808301516102a085015190613355565b926102c093848201515261317161026084015161028083015190613355565b602085830151015260c06101c0840161319f613191604083510151151590565b604088860151019015159052565b60608151015160608785015101528585015160808785015101526131ce6102a086015161028085015190613341565b60a087850151015251015160c08583015101526131e9611f05565b936131f7612a2a8551610275565b602084015161320a9061ffff1916612a3f565b61321a612a5b6040860151610275565b61322a612a746060860151151590565b6080840151608086015260a084015160a086015260c084015160c086015260e084015160e0860152610100808501519086015261326e612ac1610120860151610275565b610140808501519086015261328b610160612ae881870151610275565b61329d610180612ae881870151610275565b6101a08401516101a08601528101516101c0850152436101e085015242610200850152610200830151906102a06103008501519101519003906121686102e085015161214e60406020830151920151151590565b61300e6000612ffc565b9050600154143861204c565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111613334575b821061025157565b61333c613307565b61332c565b919082019182811161333457821061025157565b9081039081116133625790565b611c17613307565b9060058202918083046005148115171561338a575b600583040361025157565b613392613307565b61337f565b919060009281159182156133af575b50501561025157565b818192939550028281048214831517156133e9575b80946133d357041438806133a6565b634e487b7160e01b600052601260045260246000fd5b6133f1613307565b6133c4565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261347293600093849392849190608081016001600160401b03811182821017613479575b6040525193165af161346261345b613486565b80926134e8565b50602080825183010191016134d3565b1561025157565b613481610f6c565b613448565b3d156134ce573d906001600160401b0382116134c1575b604051916134b5601f8201601f191660200184611032565b82523d6000602084013e565b6134c9610f6c565b61349d565b606090565b908160209103126102515751611c17816113ee565b156134f05790565b8051156134ff57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156135205790565b80511561352f57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611c17928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261358c81611017565b5193165af161346261359c613486565b8092613518565b600091611c179383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261358c81611017565b91906135f0611cdf565b9260005b600281106136055750506020830152565b8061361260019284611f99565b5161361d8288611f99565b526136288187611f99565b506000198114613639575b016135f4565b613641613307565b613633565b9190613650611cdf565b9260005b600281106136625750508252565b8061366f60019284611f99565b5161367a8288611f99565b526136858187611f99565b506000198114613696575b01613654565b61369e613307565b613690565b91906136ad611cdf565b9260005b600281106136c25750506020830152565b806136cf60019284611f99565b516136da8288611f99565b526136e58187611f99565b5060001981146136f6575b016136b1565b6136fe613307565b6136f0565b506040513d6000823e3d90fd5b81811061371b575050565b60008155600101613710565b613732600254610f32565b8061373a5750565b601f811160011461374d57506000600255565b600260005261379290601f0160051c600080516020613fa8833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf613710565b6000602081208160025555565b6137a761112b565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152613809611d2c565b6101c0840152806101e084015261381e611cdf565b61020084015280610220840152806102408401528061026084015280610280840152806102a0840152806102c08401526138566111ab565b6102e0840152610300830152565b9060c08061036f938051845260208101516020850152604081015115156040850152606081015160608501526080810151608085015260a081015160a08501520151910190610bed565b60408091805184526020810151602085015201511515910152565b906000905b600282106138db57505050565b60206060826138ed60019487516138ae565b019301910190916138ce565b9190916104e0610500820193613910838251610818565b60208181015161ffff19169084015261393160408201516040850190610818565b6060818101511515908401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010080820151908401526139836101208083015190850190610818565b61014080820151908401526139a16101608083015190850190610818565b6139b46101808083015190850190610818565b6101a080820151908401526139d26101c08083015190850190613864565b6101e0810151906102e09182850152613a53610200820151926139fb61030094858801906138c9565b6102208301516103c087015261024083015115156103e08701526102608301516104008701526102808301516104208701526102a08301516104408701526102c08301516104608701528201516104808601906138ae565b0151910152565b90601f8211613a67575050565b61036f9160026000526020600020906020601f840160051c83019310613a95575b601f0160051c0190613710565b9091508190613a88565b80519091906001600160401b038111613b75575b613ac781613ac2600254610f32565b613a5a565b602080601f8311600114613b035750819293600092613af8575b50508160011b916000199060031b1c191617600255565b015190503880613ae1565b6002600052601f19831694909190600080516020613fa8833981519152926000905b878210613b5d575050836001959610613b44575b505050811b01600255565b015160001960f88460031b161c19169055388080613b39565b80600185968294968601518155019501930190613b25565b613b7d610f6c565b613ab3565b6101c080820190604091613b998382510151151590565b15613d355792613d2292613d3092608061036f96613cc6613bb861379f565b95613bcc613bc68251610275565b88611c34565b60208181015161ffff191690880152613bf2613bea87830151610275565b878901611c34565b613c02612ee46060830151151590565b838101518488015260a081015160a088015260c081015160c088015260e081015160e08801526101008082015190880152613c4d610120613c4581840151610275565b908901611c34565b6101408082015190880152613c6a610160613c4581840151610275565b613c7c610180613c4581840151610275565b6101a094858201958651908901528351908801526102009485820180516101e08a0152610220808401978851908b015261024080940151908a015251905111159087019015159052565b60208151015161026086015280515161028086015260a0815101516102a08601525101516102c08401528051516102e0840152515151610300830152613d0c6004600055565b613d1543600155565b51928391602083016138f9565b03601f198101835282611032565b613a9f565b505081610180613dff9301906000808080613d53612b988751610275565b61024086015190828215613e22575bf115613e15575b613df5613def613d7b85840151610275565b94613dc0613db9610120613d8f8851610275565b610220880180515151909a6001600160a01b039992613db29291908b16906133f6565b0151610275565b9551610275565b9551612168815192806020850151940151151590613ddc6110fe565b9460008652602086015284019015159052565b60200190565b51519216906133f6565b60008055613e0d6000600155565b61036f613727565b613e1d613703565b613d69565b506108fc613d62565b60209060431901126102515760405190613e4482610fc6565b6044358252565b60209060031901126102515760405190613e6482610fc6565b6004358252565b60405190613e7882610fe1565b81613e81611cdf565b8152613e8b6111ab565b60208201526040611cda611d2c565b6102808183031261025157613f79613eb061118b565b92613eba836113d3565b8452613ec8602084016113de565b6020850152613ed9604084016113d3565b6040850152613eea606084016113f8565b60608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e085015261010080840151908501526101208084015190850152610140613f3b8185016113d3565b908501526101608084015190850152610180613f588185016113d3565b908501526101a0613f6a8185016113d3565b908501526101c080930161150c565b9082015290565b6084359061036f826113ee565b60a4359061036f826113ee565b60c4359061036f826113ee56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 19062,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_token.rsh:98:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_token.rsh:326:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_token.rsh:130:37:after expr stmt semicolon',
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
  "User_end": User_end,
  "User_optin": User_optin,
  "User_refund": User_refund
  };
export const _APIs = {
  User: {
    buyTicket: User_buyTicket,
    claim: User_claim,
    end: User_end,
    optin: User_optin,
    refund: User_refund
    }
  };
