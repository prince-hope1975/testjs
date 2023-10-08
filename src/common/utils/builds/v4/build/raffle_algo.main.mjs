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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc0
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc2,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Object({
    amountOfRaffleToken: ctc3,
    cost: ctc3,
    creator: ctc0,
    deadline: ctc3,
    isFeatured: ctc2,
    maxEntries: ctc3,
    numberOfTickets: ctc3,
    projectName: ctc1,
    raffleToken: ctc4
    });
  const ctc11 = stdlib.T_Data({
    None: ctc7,
    Some: ctc3
    });
  const ctc12 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc12;
  
  
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        
        return v2199;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        
        return v2183;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        
        return v2195;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        
        return v2235;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async (_v2243 ) => {
          const v2243 = stdlib.protect(ctc0, _v2243, null);
        
        const v2244 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2243, ctc3), null);
        const v2245 = stdlib.fromSome(v2244, stdlib.checkedBigNumberify('./raffle_algo.rsh:153:72:decimal', stdlib.UInt_max, '0'));
        
        return v2245;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async (_v2238 ) => {
          const v2238 = stdlib.protect(ctc0, _v2238, null);
        
        const v2239 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc0, v2238, ctc7), null);
        const v2240 = {
          None: 0,
          Some: 1
          }[v2239[0]];
        const v2241 = stdlib.eq(v2240, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2241;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        const v2181 = {
          amountOfRaffleToken: v2154,
          cost: v2150,
          creator: v2155,
          deadline: v2148,
          isFeatured: v2146,
          maxEntries: v2151,
          numberOfTickets: v2147,
          projectName: v2145,
          raffleToken: v2153
          };
        
        return v2181;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        const v2242 = v2191.currentUserNumber;
        
        return v2242;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsLeft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        const v2236 = v2191.ticketsLeft;
        
        return v2236;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        
        return v2153;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = svs;
      return (await ((async () => {
        
        const v2237 = v2191.winner;
        
        return v2237;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
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
          rng: ctc10
          },
        ticketsBought: {
          decode: Info_ticketsBought,
          dom: [],
          rng: ctc3
          },
        ticketsLeft: {
          decode: Info_ticketsLeft,
          dom: [],
          rng: ctc3
          },
        token: {
          decode: Info_token,
          dom: [],
          rng: ctc4
          },
        winner: {
          decode: Info_winner,
          dom: [],
          rng: ctc8
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc0, ctc0, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc0, ctc0, ctc3, ctc9, ctc3, ctc6, ctc3, ctc2, ctc3, ctc3, ctc3, ctc3]
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    User_buyTicket0_302: ctc8,
    User_claim0_302: ctc9,
    User_end0_302: ctc9,
    User_optin0_302: ctc9,
    User_refund0_302: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v2118 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2119 = [v2118];
  const v2123 = stdlib.protect(ctc4, interact.Admin, 'for Deployer\'s interact field Admin');
  const v2124 = stdlib.protect(ctc1, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v2125 = stdlib.protect(ctc1, interact.cost, 'for Deployer\'s interact field cost');
  const v2126 = stdlib.protect(ctc4, interact.creator, 'for Deployer\'s interact field creator');
  const v2127 = stdlib.protect(ctc1, interact.deadline, 'for Deployer\'s interact field deadline');
  const v2128 = stdlib.protect(ctc5, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v2129 = stdlib.protect(ctc1, interact.maxEntries, 'for Deployer\'s interact field maxEntries');
  const v2130 = stdlib.protect(ctc1, interact.numberOfTickets, 'for Deployer\'s interact field numberOfTickets');
  const v2131 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2132 = stdlib.protect(ctc7, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v2135 = v2128 ? stdlib.checkedBigNumberify('./raffle_algo.rsh:4:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_algo.rsh:64:59:decimal', stdlib.UInt_max, '0');
  const v2136 = stdlib.protect(ctc1, await interact.random(), {
    at: './raffle_algo.rsh:67:46:application',
    fs: ['at ./raffle_algo.rsh:60:16:application call to [unknown function] (defined at: ./raffle_algo.rsh:60:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v2137 = stdlib.safeMod(v2136, v2130);
  
  const v2138 = stdlib.le(v2137, v2130);
  stdlib.assert(v2138, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:90:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v2140 = stdlib.lt(v2125, stdlib.UInt_max);
  stdlib.assert(v2140, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v2142 = stdlib.gt(v2125, stdlib.checkedBigNumberify('./raffle_algo.rsh:92:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2142, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2131, v2128, v2130, v2127, v2137, v2125, v2129, v2135, v2132, v2124, v2126, v2123],
    evt_cnt: 12,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156], secs: v2158, time: v2157, didSend: v147, from: v2144 } = txn1;
      
      const v2159 = v2119[stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:dot', stdlib.UInt_max, '0')];
      const v2160 = stdlib.Array_set(v2159, '0', stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:dot', stdlib.UInt_max, '0'));
      const v2161 = stdlib.Array_set(v2119, stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:dot', stdlib.UInt_max, '0'), v2160);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2153
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156], secs: v2158, time: v2157, didSend: v147, from: v2144 } = txn1;
  const v2159 = v2119[stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:dot', stdlib.UInt_max, '0')];
  const v2160 = stdlib.Array_set(v2159, '0', stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:dot', stdlib.UInt_max, '0'));
  const v2161 = stdlib.Array_set(v2119, stdlib.checkedBigNumberify('./raffle_algo.rsh:75:12:dot', stdlib.UInt_max, '0'), v2160);
  const v2163 = stdlib.le(v2149, v2147);
  stdlib.assert(v2163, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:90:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v2165 = stdlib.lt(v2150, stdlib.UInt_max);
  stdlib.assert(v2165, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v2167 = stdlib.gt(v2150, stdlib.checkedBigNumberify('./raffle_algo.rsh:92:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2167, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2152, v2153, v2154, v2155, v2156, v2161],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2157,
    onlyIf: true,
    out_tys: [],
    pay: [v2152, [[v2154, v2153]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2171, time: v2170, didSend: v156, from: v2169 } = txn2;
      
      sim_r.txns.push({
        amt: v2152,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2174 = v2161[stdlib.checkedBigNumberify('./raffle_algo.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v2175 = v2174[stdlib.checkedBigNumberify('./raffle_algo.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v2176 = stdlib.add(v2175, v2154);
      const v2178 = stdlib.Array_set(v2174, '0', v2176);
      const v2179 = stdlib.Array_set(v2161, stdlib.checkedBigNumberify('./raffle_algo.rsh:96:12:dot', stdlib.UInt_max, '0'), v2178);
      sim_r.txns.push({
        amt: v2154,
        kind: 'to',
        tok: v2153
        });
      const v2183 = stdlib.safeAdd(v2171, v2148);
      const v2184 = await ctc.getContractInfo();
      
      const v2187 = v2179[stdlib.checkedBigNumberify('./raffle_algo.rsh:130:23:application', stdlib.UInt_max, '0')];
      const v2188 = v2187[stdlib.checkedBigNumberify('./raffle_algo.rsh:130:23:application', stdlib.UInt_max, '0')];
      const v2189 = ['None', null];
      const v2190 = {
        bal: v2152,
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v2188,
        ticketsLeft: v2147,
        winner: v2189
        };
      const v2191 = v2190;
      const v2192 = v2170;
      const v2195 = v2171;
      const v2198 = v2179;
      const v2199 = v2152;
      
      if (await (async () => {
        const v2231 = v2191.keepGoing;
        
        return v2231;})()) {
        const v2235 = stdlib.ge(v2195, v2183);
        const v2246 = v2191.currentUserNumber;
        const v2247 = v2191.bal;
        const v2248 = v2191.ticketsLeft;
        const v2249 = v2191.raffleBal;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v2156,
          tok: undefined /* Nothing */
          });
        const v4070 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        const v4071 = v4070[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2156,
          tok: v2153
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2153
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
    tys: [ctc4, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2171, time: v2170, didSend: v156, from: v2169 } = txn2;
  ;
  const v2174 = v2161[stdlib.checkedBigNumberify('./raffle_algo.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v2175 = v2174[stdlib.checkedBigNumberify('./raffle_algo.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v2176 = stdlib.add(v2175, v2154);
  const v2178 = stdlib.Array_set(v2174, '0', v2176);
  const v2179 = stdlib.Array_set(v2161, stdlib.checkedBigNumberify('./raffle_algo.rsh:96:12:dot', stdlib.UInt_max, '0'), v2178);
  ;
  const v2180 = stdlib.addressEq(v2144, v2169);
  stdlib.assert(v2180, {
    at: './raffle_algo.rsh:96:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v2183 = stdlib.safeAdd(v2171, v2148);
  const v2184 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2184, v2149), {
    at: './raffle_algo.rsh:121:27:application',
    fs: ['at ./raffle_algo.rsh:121:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:121:27:function exp)', 'at ./raffle_algo.rsh:121:27:application call to "liftedInteract" (defined at: ./raffle_algo.rsh:121:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2187 = v2179[stdlib.checkedBigNumberify('./raffle_algo.rsh:130:23:application', stdlib.UInt_max, '0')];
  const v2188 = v2187[stdlib.checkedBigNumberify('./raffle_algo.rsh:130:23:application', stdlib.UInt_max, '0')];
  const v2189 = ['None', null];
  const v2190 = {
    bal: v2152,
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v2188,
    ticketsLeft: v2147,
    winner: v2189
    };
  let v2191 = v2190;
  let v2192 = v2170;
  let v2195 = v2171;
  let v2198 = v2179;
  let v2199 = v2152;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2231 = v2191.keepGoing;
    
    return v2231;})()) {
    const v2235 = stdlib.ge(v2195, v2183);
    const v2246 = v2191.currentUserNumber;
    const v2247 = v2191.bal;
    const v2248 = v2191.ticketsLeft;
    const v2249 = v2191.raffleBal;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn4;
    switch (v2454[0]) {
      case 'User_buyTicket0_302': {
        const v2457 = v2454[1];
        undefined /* setApiDetails */;
        const v2462 = v2457[stdlib.checkedBigNumberify('./raffle_algo.rsh:157:10:spread', stdlib.UInt_max, '0')];
        const v2463 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2453, ctc1), null);
        const v2464 = stdlib.fromSome(v2463, stdlib.checkedBigNumberify('./raffle_algo.rsh:158:65:decimal', stdlib.UInt_max, '0'));
        const v2465 = stdlib.lt(v2195, v2183);
        stdlib.assert(v2465, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v2467 = stdlib.safeAdd(v2464, v2462);
        const v2468 = stdlib.ge(v2151, v2467);
        stdlib.assert(v2468, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Limit reached',
          who: 'Deployer'
          });
        const v2470 = stdlib.safeAdd(v2462, v2464);
        const v2471 = stdlib.le(v2470, v2147);
        stdlib.assert(v2471, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Cannot buy more tickets than balance',
          who: 'Deployer'
          });
        const v2473 = stdlib.safeMul(v2462, v2150);
        const v2559 = stdlib.add(v2199, v2473);
        ;
        ;
        await stdlib.mapSet(map0, ctc4, v2453, ctc1, v2467);
        const v2582 = {
          address: v2453,
          amount: v2462
          };
        null;
        const v2583 = stdlib.safeAdd(v2246, stdlib.checkedBigNumberify('./raffle_algo.rsh:184:33:decimal', stdlib.UInt_max, '1'));
        const v2584 = stdlib.eq(v2583, v2149);
        let v2585;
        if (v2584) {
          v2585 = true;
          }
        else {
          const v2587 = stdlib.le(v2583, v2149);
          let v2588;
          if (v2587) {
            const v2589 = stdlib.safeAdd(v2246, v2462);
            const v2590 = stdlib.ge(v2589, v2149);
            v2588 = v2590;
            }
          else {
            v2588 = false;
            }
          v2585 = v2588;
          }
        if (v2585) {
          const v2591 = true;
          await txn4.getOutput('User_buyTicket', 'v2591', ctc5, v2591);
          const v2600 = v2191.keepGoing;
          const v2601 = v2191.percent;
          const v2606 = stdlib.safeAdd(v2246, v2462);
          const v2608 = stdlib.safeAdd(v2247, v2473);
          const v2610 = stdlib.safeSub(v2248, v2462);
          const v2611 = ['Some', v2453];
          const v2612 = {
            bal: v2608,
            currentUserNumber: v2606,
            keepGoing: v2600,
            percent: v2601,
            raffleBal: v2249,
            ticketsLeft: v2610,
            winner: v2611
            };
          const cv2191 = v2612;
          const cv2192 = v2455;
          const cv2195 = v2456;
          const cv2198 = v2198;
          const cv2199 = v2559;
          
          v2191 = cv2191;
          v2192 = cv2192;
          v2195 = cv2195;
          v2198 = cv2198;
          v2199 = cv2199;
          
          txn3 = txn4;
          continue;}
        else {
          const v2614 = true;
          await txn4.getOutput('User_buyTicket', 'v2614', ctc5, v2614);
          const v2623 = v2191.keepGoing;
          const v2624 = v2191.percent;
          const v2627 = v2191.winner;
          const v2629 = stdlib.safeAdd(v2246, v2462);
          const v2631 = stdlib.safeAdd(v2247, v2473);
          const v2633 = stdlib.safeSub(v2248, v2462);
          const v2634 = {
            bal: v2631,
            currentUserNumber: v2629,
            keepGoing: v2623,
            percent: v2624,
            raffleBal: v2249,
            ticketsLeft: v2633,
            winner: v2627
            };
          const cv2191 = v2634;
          const cv2192 = v2455;
          const cv2195 = v2456;
          const cv2198 = v2198;
          const cv2199 = v2559;
          
          v2191 = cv2191;
          v2192 = cv2192;
          v2195 = cv2195;
          v2198 = cv2198;
          v2199 = cv2199;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'User_claim0_302': {
        const v2775 = v2454[1];
        undefined /* setApiDetails */;
        const v2800 = v2191.winner;
        const v2801 = {
          None: 0,
          Some: 1
          }[v2800[0]];
        const v2802 = stdlib.eq(v2801, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2802, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        const v2806 = stdlib.eq(v2248, stdlib.checkedBigNumberify('./raffle_algo.rsh:262:59:decimal', stdlib.UInt_max, '0'));
        const v2807 = v2235 ? v2806 : false;
        stdlib.assert(v2807, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v2809 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
        const v2810 = v2809[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
        const v2811 = stdlib.le(v2249, v2810);
        stdlib.assert(v2811, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v2814 = stdlib.fromSome(v2800, v2144);
        const v2815 = stdlib.addressEq(v2814, v2453);
        stdlib.assert(v2815, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        const v2960 = stdlib.ge(v2456, v2183);
        const v2963 = v2960 ? v2806 : false;
        stdlib.assert(v2963, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:272:13:application call to [unknown function] (defined at: ./raffle_algo.rsh:272:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v2980 = stdlib.sub(v2810, v2810);
        const v2982 = stdlib.Array_set(v2809, '0', v2980);
        const v2983 = stdlib.Array_set(v2198, stdlib.checkedBigNumberify('./raffle_algo.rsh:273:57:application', stdlib.UInt_max, '0'), v2982);
        ;
        const v2985 = stdlib.safeMul(v2199, stdlib.checkedBigNumberify('./raffle_algo.rsh:274:47:decimal', stdlib.UInt_max, '5'));
        const v2986 = stdlib.safeDiv(v2985, stdlib.checkedBigNumberify('./raffle_algo.rsh:274:51:decimal', stdlib.UInt_max, '100'));
        const v2988 = stdlib.safeSub(v2199, v2986);
        const v2992 = stdlib.sub(v2199, v2988);
        ;
        const v2993 = true;
        await txn4.getOutput('User_claim', 'v2993', ctc5, v2993);
        const v3002 = v2191.percent;
        const v3007 = {
          bal: v2992,
          currentUserNumber: v2246,
          keepGoing: false,
          percent: v3002,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          ticketsLeft: v2248,
          winner: v2800
          };
        const cv2191 = v3007;
        const cv2192 = v2455;
        const cv2195 = v2456;
        const cv2198 = v2983;
        const cv2199 = v2992;
        
        v2191 = cv2191;
        v2192 = cv2192;
        v2195 = cv2195;
        v2198 = cv2198;
        v2199 = cv2199;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_end0_302': {
        const v3093 = v2454[1];
        undefined /* setApiDetails */;
        const v3142 = stdlib.addressEq(v2453, v2144);
        const v3143 = stdlib.addressEq(v2453, v2156);
        const v3144 = v3142 ? true : v3143;
        stdlib.assert(v3144, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:288:24:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        const v3147 = stdlib.eq(v2248, v2147);
        stdlib.assert(v3147, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:288:24:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Cannot end contract',
          who: 'Deployer'
          });
        ;
        const v3196 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:126:37:dot', stdlib.UInt_max, '0')];
        const v3197 = v3196[stdlib.checkedBigNumberify('./raffle_algo.rsh:126:37:dot', stdlib.UInt_max, '0')];
        ;
        const v3335 = true;
        await txn4.getOutput('User_end', 'v3335', ctc5, v3335);
        const v3348 = stdlib.sub(v3197, v3197);
        const v3350 = stdlib.Array_set(v3196, '0', v3348);
        const v3351 = stdlib.Array_set(v2198, stdlib.checkedBigNumberify('./raffle_algo.rsh:300:57:application', stdlib.UInt_max, '0'), v3350);
        ;
        const v3355 = v2191.percent;
        const v3358 = v2191.winner;
        const v3359 = {
          bal: v2247,
          currentUserNumber: v2246,
          keepGoing: false,
          percent: v3355,
          raffleBal: v2249,
          ticketsLeft: v2248,
          winner: v3358
          };
        const cv2191 = v3359;
        const cv2192 = v2455;
        const cv2195 = v2456;
        const cv2198 = v3351;
        const cv2199 = v2199;
        
        v2191 = cv2191;
        v2192 = cv2192;
        v2195 = cv2195;
        v2198 = cv2198;
        v2199 = cv2199;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_302': {
        const v3411 = v2454[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3680 = null;
        await txn4.getOutput('User_optin', 'v3680', ctc0, v3680);
        const cv2191 = v2191;
        const cv2192 = v2455;
        const cv2195 = v2456;
        const cv2198 = v2198;
        const cv2199 = v2199;
        
        v2191 = cv2191;
        v2192 = cv2192;
        v2195 = cv2195;
        v2198 = cv2198;
        v2199 = cv2199;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_refund0_302': {
        const v3729 = v2454[1];
        undefined /* setApiDetails */;
        const v3800 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2453, ctc1), null);
        const v3801 = stdlib.fromSome(v3800, stdlib.checkedBigNumberify('./raffle_algo.rsh:226:65:decimal', stdlib.UInt_max, '0'));
        const v3802 = stdlib.safeMul(v3801, v2150);
        const v3804 = {
          None: 0,
          Some: 1
          }[v3800[0]];
        const v3805 = stdlib.eq(v3804, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2235, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Deadline not reached cannot refund',
          who: 'Deployer'
          });
        stdlib.assert(v3805, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:230:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'You do not qualify for refund',
          who: 'Deployer'
          });
        const v3809 = stdlib.gt(v3801, stdlib.checkedBigNumberify('./raffle_algo.rsh:232:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3809, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:231:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'You cannot be refund cus your stake is 0',
          who: 'Deployer'
          });
        const v3812 = stdlib.le(v3802, v2199);
        stdlib.assert(v3812, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Contract balance insufficient',
          who: 'Deployer'
          });
        const v3815 = stdlib.gt(v2246, stdlib.checkedBigNumberify('./raffle_algo.rsh:237:41:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3815, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
          msg: 'Can\'t get a refund because pool is empty',
          who: 'Deployer'
          });
        ;
        ;
        const v4012 = stdlib.ge(v2456, v2183);
        stdlib.assert(v4012, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:242:15:application call to [unknown function] (defined at: ./raffle_algo.rsh:242:15:function exp)'],
          msg: 'Deadline not reached cannot refund',
          who: 'Deployer'
          });
        const v4026 = stdlib.sub(v2199, v3802);
        ;
        await stdlib.mapSet(map0, ctc4, v2453, ctc1, stdlib.checkedBigNumberify('./raffle_algo.rsh:244:33:decimal', stdlib.UInt_max, '0'));
        const v4027 = true;
        await txn4.getOutput('User_refund', 'v4027', ctc5, v4027);
        const v4035 = v2191.keepGoing;
        const v4036 = v2191.percent;
        const v4039 = v2191.winner;
        const v4040 = stdlib.safeSub(v2247, v3802);
        const v4042 = stdlib.safeSub(v2246, v3801);
        const v4044 = stdlib.safeAdd(v2248, v3801);
        const v4045 = {
          bal: v4040,
          currentUserNumber: v4042,
          keepGoing: v4035,
          percent: v4036,
          raffleBal: v2249,
          ticketsLeft: v4044,
          winner: v4039
          };
        const cv2191 = v4045;
        const cv2192 = v2455;
        const cv2195 = v2456;
        const cv2198 = v2198;
        const cv2199 = v4026;
        
        v2191 = cv2191;
        v2192 = cv2192;
        v2195 = cv2195;
        v2198 = cv2198;
        v2199 = cv2199;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  const v4070 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
  const v4071 = v4070[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc6,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_302: ctc12,
    User_claim0_302: ctc13,
    User_end0_302: ctc13,
    User_optin0_302: ctc13,
    User_refund0_302: ctc13
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
  
  
  const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v2251 = ctc.selfAddress();
  const v2253 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo.rsh:1:23:application',
    fs: ['at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_buyTicket0_302" (defined at: ./raffle_algo.rsh:157:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v2254 = v2253[stdlib.checkedBigNumberify('./raffle_algo.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2256 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2251, ctc1), null);
  const v2257 = stdlib.fromSome(v2256, stdlib.checkedBigNumberify('./raffle_algo.rsh:158:65:decimal', stdlib.UInt_max, '0'));
  const v2258 = stdlib.lt(v2195, v2183);
  stdlib.assert(v2258, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_buyTicket0_302" (defined at: ./raffle_algo.rsh:157:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v2260 = stdlib.safeAdd(v2257, v2254);
  const v2261 = stdlib.ge(v2151, v2260);
  stdlib.assert(v2261, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_buyTicket0_302" (defined at: ./raffle_algo.rsh:157:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Limit reached',
    who: 'User_buyTicket'
    });
  const v2263 = stdlib.safeAdd(v2254, v2257);
  const v2264 = stdlib.le(v2263, v2147);
  stdlib.assert(v2264, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_buyTicket0_302" (defined at: ./raffle_algo.rsh:157:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Cannot buy more tickets than balance',
    who: 'User_buyTicket'
    });
  const v2271 = ['User_buyTicket0_302', v2253];
  
  const v2360 = stdlib.safeMul(v2254, v2150);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249, v2271],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v2360, [[stdlib.checkedBigNumberify('./raffle_algo.rsh:171:53:decimal', stdlib.UInt_max, '0'), v2153]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
      
      switch (v2454[0]) {
        case 'User_buyTicket0_302': {
          const v2457 = v2454[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v2462 = v2457[stdlib.checkedBigNumberify('./raffle_algo.rsh:157:10:spread', stdlib.UInt_max, '0')];
          const v2463 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v2453, ctc1), null);
          const v2464 = stdlib.fromSome(v2463, stdlib.checkedBigNumberify('./raffle_algo.rsh:158:65:decimal', stdlib.UInt_max, '0'));
          const v2467 = stdlib.safeAdd(v2464, v2462);
          const v2473 = stdlib.safeMul(v2462, v2150);
          const v2559 = stdlib.add(v2199, v2473);
          sim_r.txns.push({
            amt: v2473,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc4, v2453, ctc1, v2467);
          const v2582 = {
            address: v2453,
            amount: v2462
            };
          null;
          const v2583 = stdlib.safeAdd(v2246, stdlib.checkedBigNumberify('./raffle_algo.rsh:184:33:decimal', stdlib.UInt_max, '1'));
          const v2584 = stdlib.eq(v2583, v2149);
          let v2585;
          if (v2584) {
            v2585 = true;
            }
          else {
            const v2587 = stdlib.le(v2583, v2149);
            let v2588;
            if (v2587) {
              const v2589 = stdlib.safeAdd(v2246, v2462);
              const v2590 = stdlib.ge(v2589, v2149);
              v2588 = v2590;
              }
            else {
              v2588 = false;
              }
            v2585 = v2588;
            }
          if (v2585) {
            const v2591 = true;
            const v2592 = await txn1.getOutput('User_buyTicket', 'v2591', ctc6, v2591);
            
            const v2600 = v2191.keepGoing;
            const v2601 = v2191.percent;
            const v2606 = stdlib.safeAdd(v2246, v2462);
            const v2608 = stdlib.safeAdd(v2247, v2473);
            const v2610 = stdlib.safeSub(v2248, v2462);
            const v2611 = ['Some', v2453];
            const v2612 = {
              bal: v2608,
              currentUserNumber: v2606,
              keepGoing: v2600,
              percent: v2601,
              raffleBal: v2249,
              ticketsLeft: v2610,
              winner: v2611
              };
            const v5934 = v2612;
            const v5936 = v2456;
            const v5937 = v2198;
            const v5938 = v2559;
            const v5939 = v2612.keepGoing;
            if (v5939) {
              const v5940 = stdlib.ge(v2456, v2183);
              const v5941 = v2612.currentUserNumber;
              const v5942 = v2612.bal;
              const v5943 = v2612.ticketsLeft;
              const v5944 = v2612.raffleBal;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v2156,
                tok: undefined /* Nothing */
                });
              const v5946 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
              const v5947 = v5946[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2156,
                tok: v2153
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2153
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v2614 = true;
            const v2615 = await txn1.getOutput('User_buyTicket', 'v2614', ctc6, v2614);
            
            const v2623 = v2191.keepGoing;
            const v2624 = v2191.percent;
            const v2627 = v2191.winner;
            const v2629 = stdlib.safeAdd(v2246, v2462);
            const v2631 = stdlib.safeAdd(v2247, v2473);
            const v2633 = stdlib.safeSub(v2248, v2462);
            const v2634 = {
              bal: v2631,
              currentUserNumber: v2629,
              keepGoing: v2623,
              percent: v2624,
              raffleBal: v2249,
              ticketsLeft: v2633,
              winner: v2627
              };
            const v5948 = v2634;
            const v5950 = v2456;
            const v5951 = v2198;
            const v5952 = v2559;
            const v5953 = v2634.keepGoing;
            if (v5953) {
              const v5954 = stdlib.ge(v2456, v2183);
              const v5955 = v2634.currentUserNumber;
              const v5956 = v2634.bal;
              const v5957 = v2634.ticketsLeft;
              const v5958 = v2634.raffleBal;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v2156,
                tok: undefined /* Nothing */
                });
              const v5960 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
              const v5961 = v5960[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2156,
                tok: v2153
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2153
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'User_claim0_302': {
          const v2775 = v2454[1];
          
          break;
          }
        case 'User_end0_302': {
          const v3093 = v2454[1];
          
          break;
          }
        case 'User_optin0_302': {
          const v3411 = v2454[1];
          
          break;
          }
        case 'User_refund0_302': {
          const v3729 = v2454[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
  switch (v2454[0]) {
    case 'User_buyTicket0_302': {
      const v2457 = v2454[1];
      undefined /* setApiDetails */;
      const v2462 = v2457[stdlib.checkedBigNumberify('./raffle_algo.rsh:157:10:spread', stdlib.UInt_max, '0')];
      const v2463 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2453, ctc1), null);
      const v2464 = stdlib.fromSome(v2463, stdlib.checkedBigNumberify('./raffle_algo.rsh:158:65:decimal', stdlib.UInt_max, '0'));
      const v2465 = stdlib.lt(v2195, v2183);
      stdlib.assert(v2465, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v2467 = stdlib.safeAdd(v2464, v2462);
      const v2468 = stdlib.ge(v2151, v2467);
      stdlib.assert(v2468, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Limit reached',
        who: 'User_buyTicket'
        });
      const v2470 = stdlib.safeAdd(v2462, v2464);
      const v2471 = stdlib.le(v2470, v2147);
      stdlib.assert(v2471, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:50:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Cannot buy more tickets than balance',
        who: 'User_buyTicket'
        });
      const v2473 = stdlib.safeMul(v2462, v2150);
      const v2559 = stdlib.add(v2199, v2473);
      ;
      ;
      await stdlib.mapSet(map0, ctc4, v2453, ctc1, v2467);
      const v2582 = {
        address: v2453,
        amount: v2462
        };
      null;
      const v2583 = stdlib.safeAdd(v2246, stdlib.checkedBigNumberify('./raffle_algo.rsh:184:33:decimal', stdlib.UInt_max, '1'));
      const v2584 = stdlib.eq(v2583, v2149);
      let v2585;
      if (v2584) {
        v2585 = true;
        }
      else {
        const v2587 = stdlib.le(v2583, v2149);
        let v2588;
        if (v2587) {
          const v2589 = stdlib.safeAdd(v2246, v2462);
          const v2590 = stdlib.ge(v2589, v2149);
          v2588 = v2590;
          }
        else {
          v2588 = false;
          }
        v2585 = v2588;
        }
      if (v2585) {
        const v2591 = true;
        const v2592 = await txn1.getOutput('User_buyTicket', 'v2591', ctc6, v2591);
        if (v1548) {
          stdlib.protect(ctc0, await interact.out(v2457, v2592), {
            at: './raffle_algo.rsh:157:11:application',
            fs: ['at ./raffle_algo.rsh:157:11:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:11:function exp)', 'at ./raffle_algo.rsh:190:16:application call to "ret" (defined at: ./raffle_algo.rsh:172:15:function exp)', 'at ./raffle_algo.rsh:172:15:application call to [unknown function] (defined at: ./raffle_algo.rsh:172:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2600 = v2191.keepGoing;
        const v2601 = v2191.percent;
        const v2606 = stdlib.safeAdd(v2246, v2462);
        const v2608 = stdlib.safeAdd(v2247, v2473);
        const v2610 = stdlib.safeSub(v2248, v2462);
        const v2611 = ['Some', v2453];
        const v2612 = {
          bal: v2608,
          currentUserNumber: v2606,
          keepGoing: v2600,
          percent: v2601,
          raffleBal: v2249,
          ticketsLeft: v2610,
          winner: v2611
          };
        const v5934 = v2612;
        const v5936 = v2456;
        const v5937 = v2198;
        const v5938 = v2559;
        const v5939 = v2612.keepGoing;
        if (v5939) {
          const v5940 = stdlib.ge(v2456, v2183);
          const v5941 = v2612.currentUserNumber;
          const v5942 = v2612.bal;
          const v5943 = v2612.ticketsLeft;
          const v5944 = v2612.raffleBal;
          return;
          }
        else {
          ;
          const v5946 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
          const v5947 = v5946[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v2614 = true;
        const v2615 = await txn1.getOutput('User_buyTicket', 'v2614', ctc6, v2614);
        if (v1548) {
          stdlib.protect(ctc0, await interact.out(v2457, v2615), {
            at: './raffle_algo.rsh:157:11:application',
            fs: ['at ./raffle_algo.rsh:157:11:application call to [unknown function] (defined at: ./raffle_algo.rsh:157:11:function exp)', 'at ./raffle_algo.rsh:200:16:application call to "ret" (defined at: ./raffle_algo.rsh:172:15:function exp)', 'at ./raffle_algo.rsh:172:15:application call to [unknown function] (defined at: ./raffle_algo.rsh:172:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2623 = v2191.keepGoing;
        const v2624 = v2191.percent;
        const v2627 = v2191.winner;
        const v2629 = stdlib.safeAdd(v2246, v2462);
        const v2631 = stdlib.safeAdd(v2247, v2473);
        const v2633 = stdlib.safeSub(v2248, v2462);
        const v2634 = {
          bal: v2631,
          currentUserNumber: v2629,
          keepGoing: v2623,
          percent: v2624,
          raffleBal: v2249,
          ticketsLeft: v2633,
          winner: v2627
          };
        const v5948 = v2634;
        const v5950 = v2456;
        const v5951 = v2198;
        const v5952 = v2559;
        const v5953 = v2634.keepGoing;
        if (v5953) {
          const v5954 = stdlib.ge(v2456, v2183);
          const v5955 = v2634.currentUserNumber;
          const v5956 = v2634.bal;
          const v5957 = v2634.ticketsLeft;
          const v5958 = v2634.raffleBal;
          return;
          }
        else {
          ;
          const v5960 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
          const v5961 = v5960[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      break;
      }
    case 'User_claim0_302': {
      const v2775 = v2454[1];
      return;
      break;
      }
    case 'User_end0_302': {
      const v3093 = v2454[1];
      return;
      break;
      }
    case 'User_optin0_302': {
      const v3411 = v2454[1];
      return;
      break;
      }
    case 'User_refund0_302': {
      const v3729 = v2454[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc6,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_302: ctc13,
    User_claim0_302: ctc12,
    User_end0_302: ctc12,
    User_optin0_302: ctc12,
    User_refund0_302: ctc12
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
  
  
  const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v2307 = ctc.selfAddress();
  const v2309 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo.rsh:1:23:application',
    fs: ['at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_claim0_302" (defined at: ./raffle_algo.rsh:257:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2311 = v2191.winner;
  const v2312 = {
    None: 0,
    Some: 1
    }[v2311[0]];
  const v2313 = stdlib.eq(v2312, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2313, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_claim0_302" (defined at: ./raffle_algo.rsh:257:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  const v2317 = stdlib.eq(v2248, stdlib.checkedBigNumberify('./raffle_algo.rsh:262:59:decimal', stdlib.UInt_max, '0'));
  const v2318 = v2235 ? v2317 : false;
  stdlib.assert(v2318, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_claim0_302" (defined at: ./raffle_algo.rsh:257:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v2320 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
  const v2321 = v2320[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
  const v2322 = stdlib.le(v2249, v2321);
  stdlib.assert(v2322, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_claim0_302" (defined at: ./raffle_algo.rsh:257:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v2325 = stdlib.fromSome(v2311, v2144);
  const v2326 = stdlib.addressEq(v2325, v2307);
  stdlib.assert(v2326, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_claim0_302" (defined at: ./raffle_algo.rsh:257:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v2331 = ['User_claim0_302', v2309];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249, v2331],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo.rsh:271:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo.rsh:271:14:decimal', stdlib.UInt_max, '0'), v2153]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
      
      switch (v2454[0]) {
        case 'User_buyTicket0_302': {
          const v2457 = v2454[1];
          
          break;
          }
        case 'User_claim0_302': {
          const v2775 = v2454[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v2800 = v2191.winner;
          const v2809 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
          const v2810 = v2809[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
          const v2814 = stdlib.fromSome(v2800, v2144);
          ;
          ;
          const v2980 = stdlib.sub(v2810, v2810);
          const v2982 = stdlib.Array_set(v2809, '0', v2980);
          const v2983 = stdlib.Array_set(v2198, stdlib.checkedBigNumberify('./raffle_algo.rsh:273:57:application', stdlib.UInt_max, '0'), v2982);
          sim_r.txns.push({
            kind: 'from',
            to: v2814,
            tok: v2153
            });
          const v2985 = stdlib.safeMul(v2199, stdlib.checkedBigNumberify('./raffle_algo.rsh:274:47:decimal', stdlib.UInt_max, '5'));
          const v2986 = stdlib.safeDiv(v2985, stdlib.checkedBigNumberify('./raffle_algo.rsh:274:51:decimal', stdlib.UInt_max, '100'));
          const v2988 = stdlib.safeSub(v2199, v2986);
          const v2992 = stdlib.sub(v2199, v2988);
          sim_r.txns.push({
            kind: 'from',
            to: v2144,
            tok: undefined /* Nothing */
            });
          const v2993 = true;
          const v2994 = await txn1.getOutput('User_claim', 'v2993', ctc6, v2993);
          
          const v3002 = v2191.percent;
          const v3007 = {
            bal: v2992,
            currentUserNumber: v2246,
            keepGoing: false,
            percent: v3002,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ticketsLeft: v2248,
            winner: v2800
            };
          const v6046 = v3007;
          const v6048 = v2456;
          const v6049 = v2983;
          const v6050 = v2992;
          const v6051 = v3007.keepGoing;
          if (v6051) {
            const v6053 = v3007.currentUserNumber;
            const v6054 = v3007.bal;
            const v6055 = v3007.ticketsLeft;
            const v6056 = v3007.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: undefined /* Nothing */
              });
            const v6058 = v2983[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            const v6059 = v6058[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: v2153
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2153
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_end0_302': {
          const v3093 = v2454[1];
          
          break;
          }
        case 'User_optin0_302': {
          const v3411 = v2454[1];
          
          break;
          }
        case 'User_refund0_302': {
          const v3729 = v2454[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
  switch (v2454[0]) {
    case 'User_buyTicket0_302': {
      const v2457 = v2454[1];
      return;
      break;
      }
    case 'User_claim0_302': {
      const v2775 = v2454[1];
      undefined /* setApiDetails */;
      const v2800 = v2191.winner;
      const v2801 = {
        None: 0,
        Some: 1
        }[v2800[0]];
      const v2802 = stdlib.eq(v2801, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2802, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      const v2806 = stdlib.eq(v2248, stdlib.checkedBigNumberify('./raffle_algo.rsh:262:59:decimal', stdlib.UInt_max, '0'));
      const v2807 = v2235 ? v2806 : false;
      stdlib.assert(v2807, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v2809 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
      const v2810 = v2809[stdlib.checkedBigNumberify('./raffle_algo.rsh:265:33:application', stdlib.UInt_max, '0')];
      const v2811 = stdlib.le(v2249, v2810);
      stdlib.assert(v2811, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v2814 = stdlib.fromSome(v2800, v2144);
      const v2815 = stdlib.addressEq(v2814, v2453);
      stdlib.assert(v2815, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:257:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      const v2960 = stdlib.ge(v2456, v2183);
      const v2963 = v2960 ? v2806 : false;
      stdlib.assert(v2963, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:272:13:application call to [unknown function] (defined at: ./raffle_algo.rsh:272:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v2980 = stdlib.sub(v2810, v2810);
      const v2982 = stdlib.Array_set(v2809, '0', v2980);
      const v2983 = stdlib.Array_set(v2198, stdlib.checkedBigNumberify('./raffle_algo.rsh:273:57:application', stdlib.UInt_max, '0'), v2982);
      ;
      const v2985 = stdlib.safeMul(v2199, stdlib.checkedBigNumberify('./raffle_algo.rsh:274:47:decimal', stdlib.UInt_max, '5'));
      const v2986 = stdlib.safeDiv(v2985, stdlib.checkedBigNumberify('./raffle_algo.rsh:274:51:decimal', stdlib.UInt_max, '100'));
      const v2988 = stdlib.safeSub(v2199, v2986);
      const v2992 = stdlib.sub(v2199, v2988);
      ;
      const v2993 = true;
      const v2994 = await txn1.getOutput('User_claim', 'v2993', ctc6, v2993);
      if (v1548) {
        stdlib.protect(ctc0, await interact.out(v2775, v2994), {
          at: './raffle_algo.rsh:257:11:application',
          fs: ['at ./raffle_algo.rsh:257:11:application call to [unknown function] (defined at: ./raffle_algo.rsh:257:11:function exp)', 'at ./raffle_algo.rsh:276:12:application call to "k" (defined at: ./raffle_algo.rsh:272:13:function exp)', 'at ./raffle_algo.rsh:272:13:application call to [unknown function] (defined at: ./raffle_algo.rsh:272:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v3002 = v2191.percent;
      const v3007 = {
        bal: v2992,
        currentUserNumber: v2246,
        keepGoing: false,
        percent: v3002,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ticketsLeft: v2248,
        winner: v2800
        };
      const v6046 = v3007;
      const v6048 = v2456;
      const v6049 = v2983;
      const v6050 = v2992;
      const v6051 = v3007.keepGoing;
      if (v6051) {
        const v6053 = v3007.currentUserNumber;
        const v6054 = v3007.bal;
        const v6055 = v3007.ticketsLeft;
        const v6056 = v3007.raffleBal;
        return;
        }
      else {
        ;
        const v6058 = v2983[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        const v6059 = v6058[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_end0_302': {
      const v3093 = v2454[1];
      return;
      break;
      }
    case 'User_optin0_302': {
      const v3411 = v2454[1];
      return;
      break;
      }
    case 'User_refund0_302': {
      const v3729 = v2454[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc6,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_302: ctc13,
    User_claim0_302: ctc12,
    User_end0_302: ctc12,
    User_optin0_302: ctc12,
    User_refund0_302: ctc12
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
  
  
  const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v2333 = ctc.selfAddress();
  const v2335 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo.rsh:1:23:application',
    fs: ['at ./raffle_algo.rsh:288:24:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_end0_302" (defined at: ./raffle_algo.rsh:288:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'in',
    who: 'User_end'
    });
  const v2336 = stdlib.addressEq(v2333, v2144);
  const v2337 = stdlib.addressEq(v2333, v2156);
  const v2338 = v2336 ? true : v2337;
  stdlib.assert(v2338, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:288:24:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_end0_302" (defined at: ./raffle_algo.rsh:288:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_end'
    });
  const v2341 = stdlib.eq(v2248, v2147);
  stdlib.assert(v2341, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:288:24:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_end0_302" (defined at: ./raffle_algo.rsh:288:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Cannot end contract',
    who: 'User_end'
    });
  const v2346 = ['User_end0_302', v2335];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249, v2346],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo.rsh:297:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo.rsh:297:14:decimal', stdlib.UInt_max, '0'), v2153]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
      
      switch (v2454[0]) {
        case 'User_buyTicket0_302': {
          const v2457 = v2454[1];
          
          break;
          }
        case 'User_claim0_302': {
          const v2775 = v2454[1];
          
          break;
          }
        case 'User_end0_302': {
          const v3093 = v2454[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_end"
            });
          ;
          const v3196 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:126:37:dot', stdlib.UInt_max, '0')];
          const v3197 = v3196[stdlib.checkedBigNumberify('./raffle_algo.rsh:126:37:dot', stdlib.UInt_max, '0')];
          ;
          const v3335 = true;
          const v3336 = await txn1.getOutput('User_end', 'v3335', ctc6, v3335);
          
          const v3348 = stdlib.sub(v3197, v3197);
          const v3350 = stdlib.Array_set(v3196, '0', v3348);
          const v3351 = stdlib.Array_set(v2198, stdlib.checkedBigNumberify('./raffle_algo.rsh:300:57:application', stdlib.UInt_max, '0'), v3350);
          sim_r.txns.push({
            kind: 'from',
            to: v2453,
            tok: v2153
            });
          const v3355 = v2191.percent;
          const v3358 = v2191.winner;
          const v3359 = {
            bal: v2247,
            currentUserNumber: v2246,
            keepGoing: false,
            percent: v3355,
            raffleBal: v2249,
            ticketsLeft: v2248,
            winner: v3358
            };
          const v6144 = v3359;
          const v6146 = v2456;
          const v6147 = v3351;
          const v6148 = v2199;
          const v6149 = v3359.keepGoing;
          if (v6149) {
            const v6150 = stdlib.ge(v2456, v2183);
            const v6151 = v3359.currentUserNumber;
            const v6152 = v3359.bal;
            const v6153 = v3359.ticketsLeft;
            const v6154 = v3359.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: undefined /* Nothing */
              });
            const v6156 = v3351[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            const v6157 = v6156[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: v2153
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2153
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_optin0_302': {
          const v3411 = v2454[1];
          
          break;
          }
        case 'User_refund0_302': {
          const v3729 = v2454[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
  switch (v2454[0]) {
    case 'User_buyTicket0_302': {
      const v2457 = v2454[1];
      return;
      break;
      }
    case 'User_claim0_302': {
      const v2775 = v2454[1];
      return;
      break;
      }
    case 'User_end0_302': {
      const v3093 = v2454[1];
      undefined /* setApiDetails */;
      const v3142 = stdlib.addressEq(v2453, v2144);
      const v3143 = stdlib.addressEq(v2453, v2156);
      const v3144 = v3142 ? true : v3143;
      stdlib.assert(v3144, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:288:24:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_end'
        });
      const v3147 = stdlib.eq(v2248, v2147);
      stdlib.assert(v3147, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:288:24:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:24:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Cannot end contract',
        who: 'User_end'
        });
      ;
      const v3196 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:126:37:dot', stdlib.UInt_max, '0')];
      const v3197 = v3196[stdlib.checkedBigNumberify('./raffle_algo.rsh:126:37:dot', stdlib.UInt_max, '0')];
      ;
      const v3335 = true;
      const v3336 = await txn1.getOutput('User_end', 'v3335', ctc6, v3335);
      if (v1548) {
        stdlib.protect(ctc0, await interact.out(v3093, v3336), {
          at: './raffle_algo.rsh:288:11:application',
          fs: ['at ./raffle_algo.rsh:288:11:application call to [unknown function] (defined at: ./raffle_algo.rsh:288:11:function exp)', 'at ./raffle_algo.rsh:299:14:application call to "ret" (defined at: ./raffle_algo.rsh:298:15:function exp)', 'at ./raffle_algo.rsh:298:15:application call to [unknown function] (defined at: ./raffle_algo.rsh:298:15:function exp)'],
          msg: 'out',
          who: 'User_end'
          });
        }
      else {
        }
      
      const v3348 = stdlib.sub(v3197, v3197);
      const v3350 = stdlib.Array_set(v3196, '0', v3348);
      const v3351 = stdlib.Array_set(v2198, stdlib.checkedBigNumberify('./raffle_algo.rsh:300:57:application', stdlib.UInt_max, '0'), v3350);
      ;
      const v3355 = v2191.percent;
      const v3358 = v2191.winner;
      const v3359 = {
        bal: v2247,
        currentUserNumber: v2246,
        keepGoing: false,
        percent: v3355,
        raffleBal: v2249,
        ticketsLeft: v2248,
        winner: v3358
        };
      const v6144 = v3359;
      const v6146 = v2456;
      const v6147 = v3351;
      const v6148 = v2199;
      const v6149 = v3359.keepGoing;
      if (v6149) {
        const v6150 = stdlib.ge(v2456, v2183);
        const v6151 = v3359.currentUserNumber;
        const v6152 = v3359.bal;
        const v6153 = v3359.ticketsLeft;
        const v6154 = v3359.raffleBal;
        return;
        }
      else {
        ;
        const v6156 = v3351[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        const v6157 = v6156[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_302': {
      const v3411 = v2454[1];
      return;
      break;
      }
    case 'User_refund0_302': {
      const v3729 = v2454[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc6,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_302: ctc13,
    User_claim0_302: ctc12,
    User_end0_302: ctc12,
    User_optin0_302: ctc12,
    User_refund0_302: ctc12
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
  
  
  const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v2275 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo.rsh:1:23:application',
    fs: ['at ./raffle_algo.rsh:213:26:application call to [unknown function] (defined at: ./raffle_algo.rsh:213:26:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_optin0_302" (defined at: ./raffle_algo.rsh:213:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2279 = ['User_optin0_302', v2275];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249, v2279],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo.rsh:215:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo.rsh:215:14:decimal', stdlib.UInt_max, '0'), v2153]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
      
      switch (v2454[0]) {
        case 'User_buyTicket0_302': {
          const v2457 = v2454[1];
          
          break;
          }
        case 'User_claim0_302': {
          const v2775 = v2454[1];
          
          break;
          }
        case 'User_end0_302': {
          const v3093 = v2454[1];
          
          break;
          }
        case 'User_optin0_302': {
          const v3411 = v2454[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          const v3680 = null;
          const v3681 = await txn1.getOutput('User_optin', 'v3680', ctc0, v3680);
          
          const v6242 = v2191;
          const v6244 = v2456;
          const v6245 = v2198;
          const v6246 = v2199;
          const v6247 = v2191.keepGoing;
          if (v6247) {
            const v6248 = stdlib.ge(v2456, v2183);
            const v6249 = v2191.currentUserNumber;
            const v6250 = v2191.bal;
            const v6251 = v2191.ticketsLeft;
            const v6252 = v2191.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: undefined /* Nothing */
              });
            const v6254 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            const v6255 = v6254[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: v2153
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2153
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_refund0_302': {
          const v3729 = v2454[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
  switch (v2454[0]) {
    case 'User_buyTicket0_302': {
      const v2457 = v2454[1];
      return;
      break;
      }
    case 'User_claim0_302': {
      const v2775 = v2454[1];
      return;
      break;
      }
    case 'User_end0_302': {
      const v3093 = v2454[1];
      return;
      break;
      }
    case 'User_optin0_302': {
      const v3411 = v2454[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3680 = null;
      const v3681 = await txn1.getOutput('User_optin', 'v3680', ctc0, v3680);
      if (v1548) {
        stdlib.protect(ctc0, await interact.out(v3411, v3681), {
          at: './raffle_algo.rsh:213:11:application',
          fs: ['at ./raffle_algo.rsh:213:11:application call to [unknown function] (defined at: ./raffle_algo.rsh:213:11:function exp)', 'at ./raffle_algo.rsh:218:14:application call to "ret" (defined at: ./raffle_algo.rsh:216:15:function exp)', 'at ./raffle_algo.rsh:216:15:application call to [unknown function] (defined at: ./raffle_algo.rsh:216:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6242 = v2191;
      const v6244 = v2456;
      const v6245 = v2198;
      const v6246 = v2199;
      const v6247 = v2191.keepGoing;
      if (v6247) {
        const v6248 = stdlib.ge(v2456, v2183);
        const v6249 = v2191.currentUserNumber;
        const v6250 = v2191.bal;
        const v6251 = v2191.ticketsLeft;
        const v6252 = v2191.raffleBal;
        return;
        }
      else {
        ;
        const v6254 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        const v6255 = v6254[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_refund0_302': {
      const v3729 = v2454[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc9 = stdlib.T_Object({
    bal: ctc1,
    currentUserNumber: ctc1,
    keepGoing: ctc6,
    percent: ctc1,
    raffleBal: ctc1,
    ticketsLeft: ctc1,
    winner: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_302: ctc13,
    User_claim0_302: ctc12,
    User_end0_302: ctc12,
    User_optin0_302: ctc12,
    User_refund0_302: ctc12
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
  
  
  const [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const v2281 = ctc.selfAddress();
  const v2283 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo.rsh:1:23:application',
    fs: ['at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_refund0_302" (defined at: ./raffle_algo.rsh:223:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'in',
    who: 'User_refund'
    });
  const v2285 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2281, ctc1), null);
  const v2286 = stdlib.fromSome(v2285, stdlib.checkedBigNumberify('./raffle_algo.rsh:226:65:decimal', stdlib.UInt_max, '0'));
  const v2287 = stdlib.safeMul(v2286, v2150);
  const v2289 = {
    None: 0,
    Some: 1
    }[v2285[0]];
  const v2290 = stdlib.eq(v2289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2235, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_refund0_302" (defined at: ./raffle_algo.rsh:223:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Deadline not reached cannot refund',
    who: 'User_refund'
    });
  stdlib.assert(v2290, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:230:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_refund0_302" (defined at: ./raffle_algo.rsh:223:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'You do not qualify for refund',
    who: 'User_refund'
    });
  const v2294 = stdlib.gt(v2286, stdlib.checkedBigNumberify('./raffle_algo.rsh:232:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2294, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:231:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_refund0_302" (defined at: ./raffle_algo.rsh:223:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'You cannot be refund cus your stake is 0',
    who: 'User_refund'
    });
  const v2297 = stdlib.le(v2287, v2199);
  stdlib.assert(v2297, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_refund0_302" (defined at: ./raffle_algo.rsh:223:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Contract balance insufficient',
    who: 'User_refund'
    });
  const v2300 = stdlib.gt(v2246, stdlib.checkedBigNumberify('./raffle_algo.rsh:237:41:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2300, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to "runUser_refund0_302" (defined at: ./raffle_algo.rsh:223:10:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)'],
    msg: 'Can\'t get a refund because pool is empty',
    who: 'User_refund'
    });
  const v2305 = ['User_refund0_302', v2283];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2144, v2145, v2146, v2147, v2148, v2149, v2150, v2151, v2153, v2154, v2155, v2156, v2183, v2191, v2195, v2198, v2199, v2235, v2246, v2247, v2248, v2249, v2305],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo.rsh:241:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo.rsh:241:14:decimal', stdlib.UInt_max, '0'), v2153]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
      
      switch (v2454[0]) {
        case 'User_buyTicket0_302': {
          const v2457 = v2454[1];
          
          break;
          }
        case 'User_claim0_302': {
          const v2775 = v2454[1];
          
          break;
          }
        case 'User_end0_302': {
          const v3093 = v2454[1];
          
          break;
          }
        case 'User_optin0_302': {
          const v3411 = v2454[1];
          
          break;
          }
        case 'User_refund0_302': {
          const v3729 = v2454[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_refund"
            });
          const v3800 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v2453, ctc1), null);
          const v3801 = stdlib.fromSome(v3800, stdlib.checkedBigNumberify('./raffle_algo.rsh:226:65:decimal', stdlib.UInt_max, '0'));
          const v3802 = stdlib.safeMul(v3801, v2150);
          ;
          ;
          const v4026 = stdlib.sub(v2199, v3802);
          sim_r.txns.push({
            kind: 'from',
            to: v2453,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, ctc4, v2453, ctc1, stdlib.checkedBigNumberify('./raffle_algo.rsh:244:33:decimal', stdlib.UInt_max, '0'));
          const v4027 = true;
          const v4028 = await txn1.getOutput('User_refund', 'v4027', ctc6, v4027);
          
          const v4035 = v2191.keepGoing;
          const v4036 = v2191.percent;
          const v4039 = v2191.winner;
          const v4040 = stdlib.safeSub(v2247, v3802);
          const v4042 = stdlib.safeSub(v2246, v3801);
          const v4044 = stdlib.safeAdd(v2248, v3801);
          const v4045 = {
            bal: v4040,
            currentUserNumber: v4042,
            keepGoing: v4035,
            percent: v4036,
            raffleBal: v2249,
            ticketsLeft: v4044,
            winner: v4039
            };
          const v6340 = v4045;
          const v6342 = v2456;
          const v6343 = v2198;
          const v6344 = v4026;
          const v6345 = v4045.keepGoing;
          if (v6345) {
            const v6347 = v4045.currentUserNumber;
            const v6348 = v4045.bal;
            const v6349 = v4045.ticketsLeft;
            const v6350 = v4045.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: undefined /* Nothing */
              });
            const v6352 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            const v6353 = v6352[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2156,
              tok: v2153
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2153
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
    tys: [ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc4, ctc4, ctc1, ctc9, ctc1, ctc11, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2454], secs: v2456, time: v2455, didSend: v1548, from: v2453 } = txn1;
  switch (v2454[0]) {
    case 'User_buyTicket0_302': {
      const v2457 = v2454[1];
      return;
      break;
      }
    case 'User_claim0_302': {
      const v2775 = v2454[1];
      return;
      break;
      }
    case 'User_end0_302': {
      const v3093 = v2454[1];
      return;
      break;
      }
    case 'User_optin0_302': {
      const v3411 = v2454[1];
      return;
      break;
      }
    case 'User_refund0_302': {
      const v3729 = v2454[1];
      undefined /* setApiDetails */;
      const v3800 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2453, ctc1), null);
      const v3801 = stdlib.fromSome(v3800, stdlib.checkedBigNumberify('./raffle_algo.rsh:226:65:decimal', stdlib.UInt_max, '0'));
      const v3802 = stdlib.safeMul(v3801, v2150);
      const v3804 = {
        None: 0,
        Some: 1
        }[v3800[0]];
      const v3805 = stdlib.eq(v3804, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2235, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Deadline not reached cannot refund',
        who: 'User_refund'
        });
      stdlib.assert(v3805, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:230:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'You do not qualify for refund',
        who: 'User_refund'
        });
      const v3809 = stdlib.gt(v3801, stdlib.checkedBigNumberify('./raffle_algo.rsh:232:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3809, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:231:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'You cannot be refund cus your stake is 0',
        who: 'User_refund'
        });
      const v3812 = stdlib.le(v3802, v2199);
      stdlib.assert(v3812, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Contract balance insufficient',
        who: 'User_refund'
        });
      const v3815 = stdlib.gt(v2246, stdlib.checkedBigNumberify('./raffle_algo.rsh:237:41:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3815, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:223:27:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:27:function exp)', 'at ./raffle_algo.rsh:126:37:application call to [unknown function] (defined at: ./raffle_algo.rsh:126:37:function exp)', 'at ./raffle_algo.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo.rsh:140:14:function exp)'],
        msg: 'Can\'t get a refund because pool is empty',
        who: 'User_refund'
        });
      ;
      ;
      const v4012 = stdlib.ge(v2456, v2183);
      stdlib.assert(v4012, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo.rsh:242:15:application call to [unknown function] (defined at: ./raffle_algo.rsh:242:15:function exp)'],
        msg: 'Deadline not reached cannot refund',
        who: 'User_refund'
        });
      const v4026 = stdlib.sub(v2199, v3802);
      ;
      await stdlib.mapSet(map0, ctc4, v2453, ctc1, stdlib.checkedBigNumberify('./raffle_algo.rsh:244:33:decimal', stdlib.UInt_max, '0'));
      const v4027 = true;
      const v4028 = await txn1.getOutput('User_refund', 'v4027', ctc6, v4027);
      if (v1548) {
        stdlib.protect(ctc0, await interact.out(v3729, v4028), {
          at: './raffle_algo.rsh:223:11:application',
          fs: ['at ./raffle_algo.rsh:223:11:application call to [unknown function] (defined at: ./raffle_algo.rsh:223:11:function exp)', 'at ./raffle_algo.rsh:245:14:application call to "ret" (defined at: ./raffle_algo.rsh:242:15:function exp)', 'at ./raffle_algo.rsh:242:15:application call to [unknown function] (defined at: ./raffle_algo.rsh:242:15:function exp)'],
          msg: 'out',
          who: 'User_refund'
          });
        }
      else {
        }
      
      const v4035 = v2191.keepGoing;
      const v4036 = v2191.percent;
      const v4039 = v2191.winner;
      const v4040 = stdlib.safeSub(v2247, v3802);
      const v4042 = stdlib.safeSub(v2246, v3801);
      const v4044 = stdlib.safeAdd(v2248, v3801);
      const v4045 = {
        bal: v4040,
        currentUserNumber: v4042,
        keepGoing: v4035,
        percent: v4036,
        raffleBal: v2249,
        ticketsLeft: v4044,
        winner: v4039
        };
      const v6340 = v4045;
      const v6342 = v2456;
      const v6343 = v2198;
      const v6344 = v4026;
      const v6345 = v4045.keepGoing;
      if (v6345) {
        const v6347 = v4045.currentUserNumber;
        const v6348 = v4045.bal;
        const v6349 = v4045.ticketsLeft;
        const v6350 = v4045.raffleBal;
        return;
        }
      else {
        ;
        const v6352 = v2198[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
        const v6353 = v6352[stdlib.checkedBigNumberify('./raffle_algo.rsh:312:19:application', stdlib.UInt_max, '0')];
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
    impure: [`User_buyTicket(uint64)byte`, `User_claim()byte`, `User_end()byte`, `User_optin()void`, `User_refund()byte`, `_reachp_0((uint64,byte[30],byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`],
    pure: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`],
    sigs: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`, `User_buyTicket(uint64)byte`, `User_claim()byte`, `User_end()byte`, `User_optin()void`, `User_refund()byte`, `_reachp_0((uint64,byte[30],byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAQAAEECD9HT1df1JMBIQURoI0GZ28mBAEAAAEBAQIxGEEIDilkSSJbNQElWzUCKGQqZFArZFCCEwQTblc7BBPv73gEF49QhgQZWV4pBCk3p/YEKWGf5AQ3R8qlBD75YpoEeTkpUwR/nHFfBIHL2/UEjHK01gSjQdHCBMNv/m4E1f8MfgTf2SMoBOd3Hy4E6xdyZATvYNA2NhoAjhMAcwAvAVgAUgGIAD8HZAABAOsAHwDZAaABDQDHAJYHWQD7AXAHSQA0ASQSRIgIfjQTFjUEMRkiEkSABBUffHU0BFCwI0M0ASQSRIgIYDQYFjUEQv/fNAEkEkSICFA0FRY1BEL/zzQBJBJEiAhANBIWUQcINQRC/7w2GgE1CzQBJBJEiAgoJa8pJa8oNAtQiAi/iAizNQRC/5s2GgE1CzQBJBJEiAgHKSkqNAtQiAihIlUjEhZRBwg1BEL/eDQBJBJEiAfpNBsWNB4WUDQaUDQgFlA0IhZRBwhQNB0WUDQhFlA0I1A0HBZQNQRC/0c0ASQSRIgHuDQXVwgINQRC/zU0ASQSRIgHpjQXVyEINQRC/yM0ASQSRIgHlDQcFjUEQv8TNAEkEkSIB4Q0F1cpITUEQv8BNhoBFzULJa8oNAsWUFA1CyQ0ARJEiAdiNAsiWzUMNAtXCAk1DYAEVOdirDQMFlA0DVCwNAyICBA0DSJVjQUGOgY9BkAGQwZGQv6ogBEAAAAAAAAAAAEAAAAAAAAAADULQv+tgBEAAAAAAAAAAAIAAAAAAAAAADULQv+VgBEAAAAAAAAAAAMAAAAAAAAAADULQv99gBEAAAAAAAAAAAQAAAAAAAAAADULQv9lNA0jWzUMJa8pJa8oMQBQiAdgiAdUFzUNNBU0GAxENA00DAg1CzQdNAsPRDQMNA0INCEORDQMNB4LNSY0EzQmCDUlNCaIBzohCSgxAFA0CxaIB2YxADQMFlA1C4AE+FjIADQLULA0ESMISTUSNB8SQQV0IzUNNA1BBYsjNQuACAAAAAAAAAofNAsWUQcIULA0CxZRBwg1BDQQNCYIFjQRNAwIFlA0F1cQAVA0F1cRCFA0DhZQNA80DAkWUCoxAFBQMgYyBzQlNRM1FTUWNRc0F1cQARdBBYY0FTQYDzUSNBclWzURNBciWzUQNBchCls1DzQXgRlbNQ40JDQjUDQiFlEHCFA0IRZQNCAWUDQfFlA0HhZQNB0WUDQcFlA0GxZQNBpQNBlQNBgWUDQXUDQVFlA0FFA0ExZQNBIWUQcIUDQRFlA0EBZQNA8WUDQOFlAkMgY1AjUBKEsBVwB/ZypLAVd/f2crTFf+TWcpNAEWNAIWUGcxGSISRIgGMjQDQPzlQvzYNBdXKSFJNQwiVSMSRDQPIhI1CzQSNAsQRDQUVwARSTUQIls1DTQONA0ORDQkNAyIBbRJNQ4xABJEMgc0GA80CxBENA00HDQOiAWXNBNJIQsLgWQKCTULNBM0Cwk1DjQLNCSIBXkjNQuACAAAAAAAAAuxNAsWUQcIULA0CxZRBwg1BDQOFjQRFlAoUDQXVxEIUCWvUDQPFlA0DFAyBjIHNBQ0EDQNSQkWXABcADQONRM1FDUVNRY1F0L+kDEANCQSMQA0GRIRRDQPNCESRDQUVwARSTUNIls1DCM1C4AIAAAAAAAADQc0CxZRBwhQsDQLFlEHCDUENAw0HDEAiATjNBAWNBEWUChQNBdXEQhQNA4WUDQPFlA0F1cpIVAyBjIHNBQ0DTQMSQkWXABcADUUNRU1FjUXQv4TKTULgAgAAAAAAAAOYDQLULA0CzUEMgYyBzUVNRZC/fMpJa8oMQBQiASNNQ0lrzQNiAR7F0k1DDQeCzULNBJENA0iVSMSRDQMIg1ENAs0Ew5ENBEiDUQyBzQYD0Q0CzEAiARDIQkoMQBQJa+IBJAjNQ2ACAAAAAAAAA+7NA0WUQcIULA0DRZRBwg1BDQQNAsJFjQRNAwJFlA0F1cQAVA0F1cRCFA0DhZQNA80DAgWUDQXVykhUDIGMgc0EzQLCTUTNRU1FjUXQv1KMQA1JDQLIls1DTQLVwgeNSM0C1cmARc1IjQLgSdbNSE0C4EvWzUgNAuBN1s1HzQLIQRbNR40CyEFWzUdNAshBls1DDQLIQdbNRw0CyEIWzUbNAtXZyA1GjQLV4cgNRmABIMWcaU0DRZQNCNQNCIWUQcIUDQhFlA0IBZQNB8WUDQeFlA0HRZQNAwWUDQcFlA0GxZQNBpQNBlQsDQNiAN6IQyvSTULSVcAESWvXABcADUONB80IQ5ENB6B////////////AQxENB4jDUQhDYgDUyI0HDIKiAMJNCQ0I1A0IhZRBwhQNCEWUDQgFlA0HxZQNB4WUDQdFlA0DBZQNBwWUDQbFlA0GlA0GVA0DlCBe69QIzIGQvy3IzQBEkRJVwAgNSRJVyAeNSNJVz4BFzUiSSEEWzUhSSEFWzUgSSEGWzUfSSEHWzUeSSEIWzUdSSEOWzUMSSEPWzUcSYF3WzUbSVd/IDUaSVefIDUZV78RNQ40Cxc1DYAE1RUZFDQNFlCwNA2IApQ0DIgCczQOVwARNQ00DjQNSSJbNBsIFlwAXAA1CzQbNBwxFjQAIwhJNQAJRwM4FDIKEkQ4ECQSRDgRTwISRDgSEkQ0JDEAEkQyBzQgCDUYNAwWJa9QKlCACAAAAAAAAAAFUDQLVwARVwAIUDQhFlAhCq9QMgYyBzQLNAw1EzUUNRU1FjUXQvs9iAHpIQ2IAg42GgE1C0L944gB2TYaATULQv7viAHONhoBNQtC+a4iMTQSRCQxNRJEIjE2EkQiMTcSRIgBr4HLAq8iIkL7e0L6JkL7pkL8XkL82EL89TQSNB8OQQARNBE0DAg0Hw81CzQLNQ1C+nYiNQtC//MjNQuACAAAAAAAAAo2NAsWUQcIULA0CxZRBwg1BDQQNCYIFjQRNAwIFlA0F1cQAVA0F1cRCFA0DhZQNA80DAkWUDQXVykhUDIGMgc0JTUTNRU1FjUXQvpxNBM0GYgA/TQUVwARIls0HDQZiADzIjQcMgoyCYgBSzEZIQsSRIgBKDIKYDIKeAlJNQYyCogAzUL65EhMv0iJIrIBI7IQsgeyCLOJIrIBJLIQshSyEbISs4lIiUwJSTUGMgmIAJ+JCUlB/+5JNQaIALOJSVcAIDUkSVcgHjUjSVc+ARc1IkkhBFs1IUkhBVs1IEkhBls1H0khB1s1HkkhCFs1HUkhDls1HEkhD1s1G0lXdyA1GklXlyA1GUmBtwFbNRhJV79KNRdJgYkCWzUVSYGRAiEMWDUUSYGiAls1E0mBqgIjWBc1EkmBqwJbNRFJgbMCWzUQSYG7Als1D4HDAls1DomxQv83sUL/P0lXAQBMIlVNib5JFlEHCEUETVCJIzUDiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJIhJMNAISEUSJNAYINQaJNAY0B0oPQf8CQv8KTEm9QP7YSwOI/+NC/tCxshVC/ts=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `544`,
    1001: `545`,
    1002: `546`,
    1003: `546`,
    1004: `547`,
    1005: `548`,
    1006: `549`,
    1007: `550`,
    1008: `550`,
    1009: `551`,
    101: `24`,
    1010: `552`,
    1011: `553`,
    1012: `555`,
    1013: `555`,
    1014: `555`,
    1015: `557`,
    1016: `557`,
    1017: `558`,
    1018: `558`,
    1019: `558`,
    102: `24`,
    1020: `559`,
    1021: `559`,
    1022: `559`,
    1023: `561`,
    1024: `561`,
    1025: `562`,
    1026: `562`,
    1027: `562`,
    1028: `563`,
    1029: `564`,
    103: `24`,
    1030: `564`,
    1031: `565`,
    1032: `566`,
    1033: `567`,
    1034: `568`,
    1035: `569`,
    1036: `577`,
    1037: `577`,
    1038: `578`,
    1039: `579`,
    104: `24`,
    1040: `580`,
    1041: `580`,
    1042: `581`,
    1043: `581`,
    1044: `582`,
    1045: `582`,
    1046: `583`,
    1047: `584`,
    1048: `592`,
    1049: `592`,
    105: `24`,
    1050: `593`,
    1051: `593`,
    1052: `593`,
    1053: `594`,
    1054: `595`,
    1055: `595`,
    1056: `596`,
    1057: `597`,
    1058: `598`,
    1059: `598`,
    106: `24`,
    1060: `599`,
    1061: `599`,
    1062: `600`,
    1063: `600`,
    1064: `601`,
    1065: `602`,
    1066: `610`,
    1067: `610`,
    1068: `611`,
    1069: `611`,
    107: `24`,
    1070: `612`,
    1071: `612`,
    1072: `612`,
    1073: `613`,
    1074: `614`,
    1075: `614`,
    1076: `615`,
    1077: `615`,
    1078: `616`,
    1079: `617`,
    108: `24`,
    1080: `625`,
    1081: `625`,
    1082: `626`,
    1083: `626`,
    1084: `627`,
    1085: `628`,
    1086: `628`,
    1087: `629`,
    1088: `630`,
    1089: `635`,
    109: `24`,
    1090: `635`,
    1091: `637`,
    1092: `637`,
    1093: `639`,
    1094: `639`,
    1095: `640`,
    1096: `640`,
    1097: `640`,
    1098: `641`,
    1099: `641`,
    11: `2`,
    110: `24`,
    1100: `642`,
    1101: `643`,
    1102: `643`,
    1103: `644`,
    1104: `645`,
    1105: `645`,
    1106: `646`,
    1107: `647`,
    1108: `648`,
    1109: `648`,
    111: `24`,
    1110: `649`,
    1111: `649`,
    1112: `650`,
    1113: `650`,
    1114: `651`,
    1115: `652`,
    1116: `652`,
    1117: `653`,
    1118: `653`,
    1119: `655`,
    112: `24`,
    1120: `655`,
    1121: `656`,
    1122: `656`,
    1123: `656`,
    1124: `657`,
    1125: `658`,
    1126: `658`,
    1127: `659`,
    1128: `659`,
    1129: `659`,
    113: `24`,
    1130: `659`,
    1131: `659`,
    1132: `659`,
    1133: `659`,
    1134: `659`,
    1135: `659`,
    1136: `659`,
    1137: `660`,
    1138: `660`,
    1139: `661`,
    114: `24`,
    1140: `662`,
    1141: `662`,
    1142: `662`,
    1143: `663`,
    1144: `664`,
    1145: `665`,
    1146: `665`,
    1147: `666`,
    1148: `667`,
    1149: `667`,
    115: `24`,
    1150: `667`,
    1151: `668`,
    1152: `668`,
    1153: `669`,
    1154: `669`,
    1155: `670`,
    1156: `671`,
    1157: `671`,
    1158: `672`,
    1159: `673`,
    116: `24`,
    1160: `674`,
    1161: `675`,
    1162: `676`,
    1163: `676`,
    1164: `677`,
    1165: `677`,
    1166: `677`,
    1167: `678`,
    1168: `679`,
    1169: `680`,
    117: `24`,
    1170: `681`,
    1171: `682`,
    1172: `682`,
    1173: `683`,
    1174: `684`,
    1175: `685`,
    1176: `685`,
    1177: `686`,
    1178: `687`,
    1179: `687`,
    118: `24`,
    1180: `688`,
    1181: `688`,
    1182: `689`,
    1183: `689`,
    1184: `690`,
    1185: `690`,
    1186: `691`,
    1187: `691`,
    1188: `692`,
    1189: `693`,
    119: `24`,
    1190: `694`,
    1191: `695`,
    1192: `695`,
    1193: `696`,
    1194: `696`,
    1195: `697`,
    1196: `697`,
    1197: `698`,
    1198: `698`,
    1199: `699`,
    12: `2`,
    120: `24`,
    1200: `699`,
    1201: `700`,
    1202: `700`,
    1203: `701`,
    1204: `701`,
    1205: `702`,
    1206: `702`,
    1207: `703`,
    1208: `703`,
    1209: `703`,
    121: `24`,
    1210: `705`,
    1211: `705`,
    1212: `706`,
    1213: `706`,
    1214: `707`,
    1215: `708`,
    1216: `708`,
    1217: `709`,
    1218: `709`,
    1219: `710`,
    122: `24`,
    1220: `711`,
    1221: `712`,
    1222: `720`,
    1223: `720`,
    1224: `721`,
    1225: `721`,
    1226: `722`,
    1227: `723`,
    1228: `731`,
    1229: `731`,
    123: `24`,
    1230: `732`,
    1231: `732`,
    1232: `732`,
    1233: `733`,
    1234: `734`,
    1235: `734`,
    1236: `735`,
    1237: `736`,
    1238: `737`,
    1239: `737`,
    124: `24`,
    1240: `738`,
    1241: `739`,
    1242: `739`,
    1243: `740`,
    1244: `740`,
    1245: `740`,
    1246: `740`,
    1247: `740`,
    1248: `740`,
    1249: `740`,
    125: `24`,
    1250: `740`,
    1251: `740`,
    1252: `740`,
    1253: `741`,
    1254: `741`,
    1255: `742`,
    1256: `743`,
    1257: `743`,
    1258: `743`,
    1259: `744`,
    126: `24`,
    1260: `745`,
    1261: `746`,
    1262: `746`,
    1263: `747`,
    1264: `748`,
    1265: `748`,
    1266: `748`,
    1267: `749`,
    1268: `749`,
    1269: `750`,
    127: `24`,
    1270: `750`,
    1271: `752`,
    1272: `752`,
    1273: `753`,
    1274: `753`,
    1275: `754`,
    1276: `754`,
    1277: `754`,
    1278: `755`,
    1279: `755`,
    128: `24`,
    1280: `756`,
    1281: `757`,
    1282: `757`,
    1283: `758`,
    1284: `759`,
    1285: `760`,
    1286: `761`,
    1287: `762`,
    1288: `762`,
    1289: `763`,
    129: `24`,
    1290: `763`,
    1291: `763`,
    1292: `764`,
    1293: `765`,
    1294: `765`,
    1295: `766`,
    1296: `767`,
    1297: `768`,
    1298: `768`,
    1299: `769`,
    13: `2`,
    130: `24`,
    1300: `770`,
    1301: `771`,
    1302: `771`,
    1303: `772`,
    1304: `772`,
    1305: `772`,
    1306: `773`,
    1307: `774`,
    1308: `774`,
    1309: `775`,
    131: `24`,
    1310: `775`,
    1311: `776`,
    1312: `776`,
    1313: `777`,
    1314: `777`,
    1315: `778`,
    1316: `778`,
    1317: `779`,
    1318: `780`,
    1319: `781`,
    132: `24`,
    1320: `782`,
    1321: `782`,
    1322: `783`,
    1323: `783`,
    1324: `784`,
    1325: `784`,
    1326: `785`,
    1327: `785`,
    1328: `786`,
    1329: `786`,
    133: `24`,
    1330: `787`,
    1331: `787`,
    1332: `788`,
    1333: `788`,
    1334: `788`,
    1335: `790`,
    1336: `791`,
    1337: `791`,
    1338: `792`,
    1339: `792`,
    134: `24`,
    1340: `792`,
    1341: `792`,
    1342: `792`,
    1343: `792`,
    1344: `792`,
    1345: `792`,
    1346: `792`,
    1347: `792`,
    1348: `793`,
    1349: `793`,
    135: `24`,
    1350: `794`,
    1351: `795`,
    1352: `796`,
    1353: `796`,
    1354: `797`,
    1355: `797`,
    1356: `798`,
    1357: `798`,
    1358: `799`,
    1359: `799`,
    136: `24`,
    1360: `800`,
    1361: `800`,
    1362: `801`,
    1363: `801`,
    1364: `802`,
    1365: `802`,
    1366: `802`,
    1367: `805`,
    1368: `806`,
    1369: `807`,
    137: `24`,
    1370: `808`,
    1371: `809`,
    1372: `809`,
    1373: `810`,
    1374: `811`,
    1375: `811`,
    1376: `811`,
    1377: `812`,
    1378: `812`,
    1379: `813`,
    138: `24`,
    1380: `814`,
    1381: `815`,
    1382: `815`,
    1383: `816`,
    1384: `816`,
    1385: `816`,
    1386: `817`,
    1387: `818`,
    1388: `819`,
    1389: `819`,
    139: `24`,
    1390: `820`,
    1391: `820`,
    1392: `821`,
    1393: `822`,
    1394: `822`,
    1395: `823`,
    1396: `823`,
    1397: `824`,
    1398: `832`,
    1399: `832`,
    14: `2`,
    140: `24`,
    1400: `833`,
    1401: `834`,
    1402: `835`,
    1403: `836`,
    1404: `837`,
    1405: `845`,
    1406: `845`,
    1407: `846`,
    1408: `847`,
    1409: `848`,
    141: `24`,
    1410: `856`,
    1411: `856`,
    1412: `857`,
    1413: `857`,
    1414: `858`,
    1415: `859`,
    1416: `867`,
    1417: `867`,
    1418: `868`,
    1419: `869`,
    142: `24`,
    1420: `870`,
    1421: `878`,
    1422: `878`,
    1423: `879`,
    1424: `879`,
    1425: `880`,
    1426: `881`,
    1427: `886`,
    1428: `886`,
    1429: `887`,
    143: `24`,
    1430: `887`,
    1431: `888`,
    1432: `888`,
    1433: `888`,
    1434: `889`,
    1435: `889`,
    1436: `890`,
    1437: `891`,
    1438: `891`,
    1439: `892`,
    144: `24`,
    1440: `893`,
    1441: `894`,
    1442: `895`,
    1443: `895`,
    1444: `895`,
    1445: `896`,
    1446: `897`,
    1447: `897`,
    1448: `898`,
    1449: `898`,
    145: `24`,
    1450: `898`,
    1451: `898`,
    1452: `898`,
    1453: `898`,
    1454: `898`,
    1455: `898`,
    1456: `898`,
    1457: `898`,
    1458: `899`,
    1459: `899`,
    146: `24`,
    1460: `900`,
    1461: `901`,
    1462: `901`,
    1463: `901`,
    1464: `902`,
    1465: `903`,
    1466: `904`,
    1467: `904`,
    1468: `905`,
    1469: `906`,
    147: `24`,
    1470: `906`,
    1471: `906`,
    1472: `907`,
    1473: `907`,
    1474: `908`,
    1475: `908`,
    1476: `909`,
    1477: `909`,
    1478: `910`,
    1479: `911`,
    148: `24`,
    1480: `912`,
    1481: `912`,
    1482: `913`,
    1483: `913`,
    1484: `914`,
    1485: `915`,
    1486: `916`,
    1487: `917`,
    1488: `917`,
    1489: `918`,
    149: `24`,
    1490: `918`,
    1491: `918`,
    1492: `919`,
    1493: `920`,
    1494: `920`,
    1495: `921`,
    1496: `921`,
    1497: `921`,
    1498: `922`,
    1499: `923`,
    15: `2`,
    150: `24`,
    1500: `923`,
    1501: `924`,
    1502: `925`,
    1503: `926`,
    1504: `926`,
    1505: `927`,
    1506: `927`,
    1507: `928`,
    1508: `929`,
    1509: `930`,
    151: `24`,
    1510: `931`,
    1511: `931`,
    1512: `932`,
    1513: `932`,
    1514: `932`,
    1515: `933`,
    1516: `934`,
    1517: `934`,
    1518: `935`,
    1519: `935`,
    152: `24`,
    1520: `936`,
    1521: `936`,
    1522: `937`,
    1523: `937`,
    1524: `938`,
    1525: `939`,
    1526: `939`,
    1527: `940`,
    1528: `940`,
    1529: `941`,
    153: `25`,
    1530: `941`,
    1531: `942`,
    1532: `942`,
    1533: `943`,
    1534: `943`,
    1535: `943`,
    1536: `945`,
    1537: `945`,
    1538: `946`,
    1539: `946`,
    154: `25`,
    1540: `947`,
    1541: `947`,
    1542: `948`,
    1543: `949`,
    1544: `950`,
    1545: `950`,
    1546: `951`,
    1547: `951`,
    1548: `952`,
    1549: `952`,
    155: `25`,
    1550: `952`,
    1551: `953`,
    1552: `953`,
    1553: `954`,
    1554: `954`,
    1555: `955`,
    1556: `955`,
    1557: `955`,
    1558: `956`,
    1559: `957`,
    156: `26`,
    1560: `957`,
    1561: `958`,
    1562: `958`,
    1563: `959`,
    1564: `959`,
    1565: `960`,
    1566: `961`,
    1567: `961`,
    1568: `962`,
    1569: `962`,
    157: `26`,
    1570: `963`,
    1571: `963`,
    1572: `964`,
    1573: `965`,
    1574: `965`,
    1575: `966`,
    1576: `966`,
    1577: `967`,
    1578: `967`,
    1579: `968`,
    158: `26`,
    1580: `969`,
    1581: `969`,
    1582: `970`,
    1583: `970`,
    1584: `971`,
    1585: `971`,
    1586: `972`,
    1587: `973`,
    1588: `973`,
    1589: `974`,
    159: `26`,
    1590: `974`,
    1591: `975`,
    1592: `975`,
    1593: `976`,
    1594: `977`,
    1595: `977`,
    1596: `978`,
    1597: `978`,
    1598: `979`,
    1599: `979`,
    16: `2`,
    160: `26`,
    1600: `980`,
    1601: `981`,
    1602: `981`,
    1603: `982`,
    1604: `982`,
    1605: `983`,
    1606: `983`,
    1607: `984`,
    1608: `985`,
    1609: `985`,
    161: `26`,
    1610: `986`,
    1611: `986`,
    1612: `987`,
    1613: `987`,
    1614: `988`,
    1615: `989`,
    1616: `989`,
    1617: `990`,
    1618: `990`,
    1619: `991`,
    162: `26`,
    1620: `991`,
    1621: `991`,
    1622: `992`,
    1623: `992`,
    1624: `993`,
    1625: `993`,
    1626: `994`,
    1627: `994`,
    1628: `994`,
    1629: `995`,
    163: `26`,
    1630: `995`,
    1631: `996`,
    1632: `996`,
    1633: `996`,
    1634: `996`,
    1635: `996`,
    1636: `996`,
    1637: `997`,
    1638: `997`,
    1639: `998`,
    164: `26`,
    1640: `999`,
    1641: `1000`,
    1642: `1000`,
    1643: `1001`,
    1644: `1002`,
    1645: `1002`,
    1646: `1003`,
    1647: `1004`,
    1648: `1004`,
    1649: `1004`,
    165: `26`,
    1650: `1005`,
    1651: `1006`,
    1652: `1006`,
    1653: `1007`,
    1654: `1008`,
    1655: `1009`,
    1656: `1009`,
    1657: `1010`,
    1658: `1011`,
    1659: `1012`,
    166: `26`,
    1660: `1012`,
    1661: `1013`,
    1662: `1014`,
    1663: `1015`,
    1664: `1015`,
    1665: `1016`,
    1666: `1017`,
    1667: `1018`,
    1668: `1018`,
    1669: `1019`,
    167: `26`,
    1670: `1020`,
    1671: `1021`,
    1672: `1021`,
    1673: `1022`,
    1674: `1023`,
    1675: `1024`,
    1676: `1024`,
    1677: `1025`,
    1678: `1026`,
    1679: `1027`,
    168: `26`,
    1680: `1027`,
    1681: `1028`,
    1682: `1029`,
    1683: `1030`,
    1684: `1030`,
    1685: `1031`,
    1686: `1032`,
    1687: `1032`,
    1688: `1033`,
    1689: `1034`,
    169: `26`,
    1690: `1036`,
    1691: `1036`,
    1692: `1037`,
    1693: `1037`,
    1694: `1037`,
    1695: `1038`,
    1696: `1038`,
    1697: `1039`,
    1698: `1040`,
    1699: `1041`,
    17: `2`,
    170: `26`,
    1700: `1041`,
    1701: `1042`,
    1702: `1043`,
    1703: `1043`,
    1704: `1043`,
    1705: `1044`,
    1706: `1045`,
    1707: `1046`,
    1708: `1046`,
    1709: `1047`,
    171: `26`,
    1710: `1047`,
    1711: `1048`,
    1712: `1048`,
    1713: `1049`,
    1714: `1049`,
    1715: `1050`,
    1716: `1050`,
    1717: `1051`,
    1718: `1052`,
    1719: `1056`,
    172: `26`,
    1720: `1056`,
    1721: `1057`,
    1722: `1057`,
    1723: `1057`,
    1724: `1057`,
    1725: `1057`,
    1726: `1057`,
    1727: `1057`,
    1728: `1057`,
    1729: `1057`,
    173: `26`,
    1730: `1057`,
    1731: `1057`,
    1732: `1058`,
    1733: `1059`,
    1734: `1063`,
    1735: `1063`,
    1736: `1064`,
    1737: `1065`,
    1738: `1066`,
    1739: `1070`,
    174: `26`,
    1740: `1070`,
    1741: `1071`,
    1742: `1071`,
    1743: `1071`,
    1744: `1072`,
    1745: `1074`,
    1746: `1074`,
    1747: `1075`,
    1748: `1075`,
    1749: `1076`,
    175: `26`,
    1750: `1076`,
    1751: `1076`,
    1752: `1078`,
    1753: `1078`,
    1754: `1079`,
    1755: `1079`,
    1756: `1080`,
    1757: `1081`,
    1758: `1081`,
    1759: `1082`,
    176: `26`,
    1760: `1083`,
    1761: `1083`,
    1762: `1083`,
    1763: `1084`,
    1764: `1085`,
    1765: `1085`,
    1766: `1086`,
    1767: `1087`,
    1768: `1088`,
    1769: `1088`,
    177: `26`,
    1770: `1089`,
    1771: `1090`,
    1772: `1091`,
    1773: `1091`,
    1774: `1092`,
    1775: `1093`,
    1776: `1094`,
    1777: `1094`,
    1778: `1095`,
    1779: `1096`,
    178: `26`,
    1780: `1097`,
    1781: `1097`,
    1782: `1098`,
    1783: `1099`,
    1784: `1100`,
    1785: `1100`,
    1786: `1101`,
    1787: `1102`,
    1788: `1103`,
    1789: `1103`,
    179: `26`,
    1790: `1104`,
    1791: `1105`,
    1792: `1106`,
    1793: `1106`,
    1794: `1107`,
    1795: `1108`,
    1796: `1109`,
    1797: `1109`,
    1798: `1110`,
    1799: `1111`,
    18: `2`,
    180: `26`,
    1800: `1111`,
    1801: `1112`,
    1802: `1113`,
    1803: `1113`,
    1804: `1114`,
    1805: `1115`,
    1806: `1115`,
    1807: `1116`,
    1808: `1117`,
    1809: `1118`,
    181: `26`,
    1810: `1119`,
    1811: `1119`,
    1812: `1120`,
    1813: `1120`,
    1814: `1120`,
    1815: `1122`,
    1816: `1123`,
    1817: `1123`,
    1818: `1124`,
    1819: `1125`,
    182: `26`,
    1820: `1127`,
    1821: `1128`,
    1822: `1128`,
    1823: `1128`,
    1824: `1129`,
    1825: `1129`,
    1826: `1130`,
    1827: `1131`,
    1828: `1131`,
    1829: `1131`,
    183: `26`,
    1830: `1132`,
    1831: `1132`,
    1832: `1133`,
    1833: `1134`,
    1834: `1134`,
    1835: `1134`,
    1836: `1135`,
    1837: `1136`,
    1838: `1136`,
    1839: `1137`,
    184: `26`,
    1840: `1138`,
    1841: `1138`,
    1842: `1139`,
    1843: `1140`,
    1844: `1140`,
    1845: `1141`,
    1846: `1142`,
    1847: `1142`,
    1848: `1143`,
    1849: `1144`,
    185: `26`,
    1850: `1144`,
    1851: `1145`,
    1852: `1146`,
    1853: `1146`,
    1854: `1147`,
    1855: `1148`,
    1856: `1148`,
    1857: `1149`,
    1858: `1150`,
    1859: `1150`,
    186: `26`,
    1860: `1151`,
    1861: `1152`,
    1862: `1152`,
    1863: `1153`,
    1864: `1154`,
    1865: `1154`,
    1866: `1155`,
    1867: `1156`,
    1868: `1156`,
    1869: `1157`,
    187: `26`,
    1870: `1158`,
    1871: `1158`,
    1872: `1159`,
    1873: `1160`,
    1874: `1160`,
    1875: `1161`,
    1876: `1162`,
    1877: `1162`,
    1878: `1163`,
    1879: `1164`,
    188: `26`,
    1880: `1164`,
    1881: `1165`,
    1882: `1166`,
    1883: `1166`,
    1884: `1167`,
    1885: `1168`,
    1886: `1168`,
    1887: `1169`,
    1888: `1170`,
    1889: `1170`,
    189: `26`,
    1890: `1170`,
    1891: `1171`,
    1892: `1171`,
    1893: `1172`,
    1894: `1173`,
    1895: `1173`,
    1896: `1173`,
    1897: `1174`,
    1898: `1174`,
    1899: `1175`,
    19: `2`,
    190: `26`,
    1900: `1175`,
    1901: `1175`,
    1902: `1176`,
    1903: `1176`,
    1904: `1177`,
    1905: `1177`,
    1906: `1178`,
    1907: `1179`,
    1908: `1179`,
    1909: `1180`,
    191: `26`,
    1910: `1180`,
    1911: `1180`,
    1912: `1180`,
    1913: `1180`,
    1914: `1180`,
    1915: `1181`,
    1916: `1181`,
    1917: `1182`,
    1918: `1183`,
    1919: `1184`,
    192: `26`,
    1920: `1186`,
    1921: `1186`,
    1922: `1187`,
    1923: `1187`,
    1924: `1187`,
    1925: `1188`,
    1926: `1188`,
    1927: `1189`,
    1928: `1189`,
    1929: `1189`,
    193: `26`,
    1930: `1192`,
    1931: `1192`,
    1932: `1193`,
    1933: `1193`,
    1934: `1193`,
    1935: `1194`,
    1936: `1194`,
    1937: `1195`,
    1938: `1195`,
    1939: `1196`,
    194: `26`,
    1940: `1196`,
    1941: `1197`,
    1942: `1198`,
    1943: `1199`,
    1944: `1200`,
    1945: `1200`,
    1946: `1201`,
    1947: `1202`,
    1948: `1203`,
    1949: `1203`,
    195: `26`,
    1950: `1204`,
    1951: `1204`,
    1952: `1205`,
    1953: `1205`,
    1954: `1206`,
    1955: `1206`,
    1956: `1207`,
    1957: `1207`,
    1958: `1210`,
    1959: `1210`,
    196: `28`,
    1960: `1211`,
    1961: `1211`,
    1962: `1212`,
    1963: `1213`,
    1964: `1214`,
    1965: `1215`,
    1966: `1215`,
    1967: `1216`,
    1968: `1217`,
    1969: `1217`,
    197: `31`,
    1970: `1218`,
    1971: `1218`,
    1972: `1219`,
    1973: `1219`,
    1974: `1220`,
    1975: `1221`,
    1976: `1222`,
    1977: `1222`,
    1978: `1223`,
    1979: `1224`,
    198: `31`,
    1980: `1225`,
    1981: `1226`,
    1982: `1226`,
    1983: `1227`,
    1984: `1227`,
    1985: `1228`,
    1986: `1229`,
    1987: `1230`,
    1988: `1230`,
    1989: `1231`,
    199: `32`,
    1990: `1232`,
    1991: `1235`,
    1992: `1235`,
    1993: `1236`,
    1994: `1236`,
    1995: `1237`,
    1996: `1238`,
    1997: `1241`,
    1998: `1241`,
    1999: `1242`,
    2: `2`,
    20: `2`,
    200: `33`,
    2000: `1242`,
    2001: `1243`,
    2002: `1244`,
    2003: `1244`,
    2004: `1245`,
    2005: `1245`,
    2006: `1246`,
    2007: `1247`,
    2008: `1248`,
    2009: `1249`,
    201: `34`,
    2010: `1250`,
    2011: `1251`,
    2012: `1252`,
    2013: `1252`,
    2014: `1252`,
    2015: `1252`,
    2016: `1252`,
    2017: `1252`,
    2018: `1252`,
    2019: `1252`,
    202: `37`,
    2020: `1252`,
    2021: `1252`,
    2022: `1253`,
    2023: `1254`,
    2024: `1254`,
    2025: `1255`,
    2026: `1255`,
    2027: `1255`,
    2028: `1256`,
    2029: `1256`,
    203: `37`,
    2030: `1256`,
    2031: `1257`,
    2032: `1258`,
    2033: `1258`,
    2034: `1259`,
    2035: `1260`,
    2036: `1261`,
    2037: `1261`,
    2038: `1262`,
    2039: `1263`,
    204: `37`,
    2040: `1264`,
    2041: `1264`,
    2042: `1265`,
    2043: `1265`,
    2044: `1266`,
    2045: `1266`,
    2046: `1267`,
    2047: `1267`,
    2048: `1268`,
    2049: `1268`,
    205: `38`,
    2050: `1269`,
    2051: `1269`,
    2052: `1270`,
    2053: `1270`,
    2054: `1271`,
    2055: `1271`,
    2056: `1272`,
    2057: `1272`,
    2058: `1273`,
    2059: `1273`,
    206: `38`,
    2060: `1273`,
    2061: `1275`,
    2062: `1275`,
    2063: `1275`,
    2064: `1276`,
    2065: `1276`,
    2066: `1277`,
    2067: `1277`,
    2068: `1277`,
    2069: `1278`,
    207: `39`,
    2070: `1278`,
    2071: `1278`,
    2072: `1279`,
    2073: `1279`,
    2074: `1280`,
    2075: `1280`,
    2076: `1280`,
    2077: `1282`,
    2078: `1282`,
    2079: `1282`,
    208: `40`,
    2080: `1283`,
    2081: `1283`,
    2082: `1283`,
    2083: `1284`,
    2084: `1284`,
    2085: `1285`,
    2086: `1285`,
    2087: `1285`,
    2088: `1287`,
    2089: `1287`,
    209: `40`,
    2090: `1287`,
    2091: `1288`,
    2092: `1288`,
    2093: `1288`,
    2094: `1289`,
    2095: `1289`,
    2096: `1290`,
    2097: `1290`,
    2098: `1290`,
    2099: `1292`,
    21: `2`,
    210: `42`,
    2100: `1293`,
    2101: `1293`,
    2102: `1294`,
    2103: `1295`,
    2104: `1296`,
    2105: `1297`,
    2106: `1297`,
    2107: `1298`,
    2108: `1299`,
    2109: `1300`,
    211: `42`,
    2110: `1301`,
    2111: `1301`,
    2112: `1302`,
    2113: `1303`,
    2114: `1304`,
    2115: `1305`,
    2116: `1305`,
    2117: `1306`,
    2118: `1307`,
    2119: `1308`,
    212: `43`,
    2120: `1308`,
    2121: `1308`,
    2122: `1309`,
    2123: `1309`,
    2124: `1309`,
    2125: `1310`,
    2126: `1311`,
    2127: `1312`,
    2128: `1313`,
    2129: `1313`,
    213: `44`,
    2130: `1313`,
    2131: `1315`,
    2132: `1315`,
    2133: `1315`,
    2134: `1317`,
    2135: `1317`,
    2136: `1317`,
    2137: `1319`,
    2138: `1319`,
    2139: `1319`,
    214: `45`,
    2140: `1321`,
    2141: `1321`,
    2142: `1321`,
    2143: `1323`,
    2144: `1323`,
    2145: `1323`,
    2146: `1325`,
    2147: `1325`,
    2148: `1326`,
    2149: `1326`,
    215: `48`,
    2150: `1327`,
    2151: `1328`,
    2152: `1328`,
    2153: `1328`,
    2154: `1329`,
    2155: `1329`,
    2156: `1330`,
    2157: `1330`,
    2158: `1331`,
    2159: `1332`,
    216: `48`,
    2160: `1332`,
    2161: `1333`,
    2162: `1334`,
    2163: `1334`,
    2164: `1336`,
    2165: `1336`,
    2166: `1337`,
    2167: `1337`,
    2168: `1338`,
    2169: `1338`,
    217: `48`,
    2170: `1338`,
    2171: `1340`,
    2172: `1341`,
    2173: `1341`,
    2174: `1342`,
    2175: `1342`,
    2176: `1342`,
    2177: `1344`,
    2178: `1345`,
    2179: `1345`,
    218: `48`,
    2180: `1346`,
    2181: `1346`,
    2182: `1346`,
    2183: `1346`,
    2184: `1346`,
    2185: `1346`,
    2186: `1346`,
    2187: `1346`,
    2188: `1346`,
    2189: `1346`,
    219: `48`,
    2190: `1347`,
    2191: `1347`,
    2192: `1348`,
    2193: `1349`,
    2194: `1349`,
    2195: `1349`,
    2196: `1350`,
    2197: `1351`,
    2198: `1352`,
    2199: `1352`,
    22: `2`,
    220: `48`,
    2200: `1353`,
    2201: `1354`,
    2202: `1354`,
    2203: `1354`,
    2204: `1355`,
    2205: `1355`,
    2206: `1356`,
    2207: `1356`,
    2208: `1357`,
    2209: `1357`,
    221: `49`,
    2210: `1358`,
    2211: `1359`,
    2212: `1360`,
    2213: `1360`,
    2214: `1361`,
    2215: `1361`,
    2216: `1362`,
    2217: `1363`,
    2218: `1364`,
    2219: `1365`,
    222: `49`,
    2220: `1365`,
    2221: `1366`,
    2222: `1366`,
    2223: `1366`,
    2224: `1367`,
    2225: `1368`,
    2226: `1368`,
    2227: `1369`,
    2228: `1369`,
    2229: `1369`,
    223: `50`,
    2230: `1370`,
    2231: `1371`,
    2232: `1371`,
    2233: `1372`,
    2234: `1373`,
    2235: `1374`,
    2236: `1374`,
    2237: `1375`,
    2238: `1375`,
    2239: `1376`,
    224: `51`,
    2240: `1377`,
    2241: `1378`,
    2242: `1379`,
    2243: `1379`,
    2244: `1380`,
    2245: `1380`,
    2246: `1380`,
    2247: `1381`,
    2248: `1382`,
    2249: `1382`,
    225: `53`,
    2250: `1383`,
    2251: `1383`,
    2252: `1384`,
    2253: `1384`,
    2254: `1385`,
    2255: `1385`,
    2256: `1386`,
    2257: `1386`,
    2258: `1387`,
    2259: `1387`,
    226: `54`,
    2260: `1388`,
    2261: `1388`,
    2262: `1389`,
    2263: `1389`,
    2264: `1389`,
    2265: `1391`,
    2266: `1391`,
    2267: `1393`,
    2268: `1393`,
    2269: `1394`,
    227: `57`,
    2270: `1394`,
    2271: `1394`,
    2272: `1395`,
    2273: `1395`,
    2274: `1396`,
    2275: `1396`,
    2276: `1396`,
    2277: `1397`,
    2278: `1398`,
    2279: `1400`,
    228: `57`,
    2280: `1400`,
    2281: `1401`,
    2282: `1401`,
    2283: `1402`,
    2284: `1402`,
    2285: `1402`,
    2286: `1404`,
    2287: `1405`,
    2288: `1405`,
    2289: `1406`,
    229: `58`,
    2290: `1406`,
    2291: `1407`,
    2292: `1407`,
    2293: `1408`,
    2294: `1408`,
    2295: `1408`,
    2296: `1410`,
    2297: `1410`,
    2298: `1411`,
    2299: `1411`,
    23: `2`,
    230: `59`,
    2300: `1412`,
    2301: `1413`,
    2302: `1415`,
    2303: `1415`,
    2304: `1415`,
    2305: `1417`,
    2306: `1417`,
    2307: `1418`,
    2308: `1419`,
    2309: `1419`,
    231: `60`,
    2310: `1420`,
    2311: `1421`,
    2312: `1423`,
    2313: `1424`,
    2314: `1424`,
    2315: `1425`,
    2316: `1425`,
    2317: `1426`,
    2318: `1426`,
    2319: `1426`,
    232: `63`,
    2320: `1427`,
    2321: `1427`,
    2322: `1427`,
    2323: `1429`,
    2324: `1430`,
    2325: `1431`,
    2326: `1432`,
    2327: `1433`,
    2328: `1435`,
    2329: `1436`,
    233: `63`,
    2330: `1436`,
    2331: `1437`,
    2332: `1438`,
    2333: `1438`,
    2334: `1439`,
    2335: `1439`,
    2336: `1440`,
    2337: `1440`,
    2338: `1441`,
    2339: `1442`,
    234: `63`,
    2340: `1444`,
    2341: `1445`,
    2342: `1445`,
    2343: `1446`,
    2344: `1447`,
    2345: `1447`,
    2346: `1448`,
    2347: `1448`,
    2348: `1449`,
    2349: `1449`,
    235: `64`,
    2350: `1450`,
    2351: `1450`,
    2352: `1451`,
    2353: `1452`,
    2354: `1454`,
    2355: `1455`,
    2356: `1457`,
    2357: `1458`,
    2358: `1459`,
    2359: `1460`,
    236: `64`,
    2360: `1460`,
    2361: `1461`,
    2362: `1461`,
    2363: `1462`,
    2364: `1462`,
    2365: `1462`,
    2366: `1463`,
    2367: `1465`,
    2368: `1466`,
    2369: `1467`,
    237: `65`,
    2370: `1467`,
    2371: `1467`,
    2372: `1468`,
    2373: `1469`,
    2374: `1469`,
    2375: `1470`,
    2376: `1470`,
    2377: `1470`,
    2378: `1471`,
    2379: `1473`,
    238: `66`,
    2380: `1474`,
    2381: `1474`,
    2382: `1474`,
    2383: `1475`,
    2384: `1475`,
    2385: `1476`,
    2386: `1477`,
    2387: `1477`,
    2388: `1477`,
    2389: `1478`,
    239: `66`,
    2390: `1478`,
    2391: `1479`,
    2392: `1480`,
    2393: `1480`,
    2394: `1480`,
    2395: `1481`,
    2396: `1482`,
    2397: `1482`,
    2398: `1483`,
    2399: `1484`,
    24: `2`,
    240: `67`,
    2400: `1484`,
    2401: `1485`,
    2402: `1486`,
    2403: `1486`,
    2404: `1487`,
    2405: `1488`,
    2406: `1488`,
    2407: `1489`,
    2408: `1490`,
    2409: `1490`,
    241: `67`,
    2410: `1491`,
    2411: `1492`,
    2412: `1492`,
    2413: `1493`,
    2414: `1494`,
    2415: `1494`,
    2416: `1495`,
    2417: `1496`,
    2418: `1496`,
    2419: `1497`,
    242: `67`,
    2420: `1498`,
    2421: `1498`,
    2422: `1499`,
    2423: `1500`,
    2424: `1500`,
    2425: `1501`,
    2426: `1502`,
    2427: `1502`,
    2428: `1503`,
    2429: `1504`,
    243: `70`,
    2430: `1504`,
    2431: `1505`,
    2432: `1506`,
    2433: `1506`,
    2434: `1507`,
    2435: `1508`,
    2436: `1508`,
    2437: `1509`,
    2438: `1510`,
    2439: `1510`,
    244: `70`,
    2440: `1511`,
    2441: `1512`,
    2442: `1512`,
    2443: `1512`,
    2444: `1513`,
    2445: `1513`,
    2446: `1514`,
    2447: `1515`,
    2448: `1515`,
    2449: `1515`,
    245: `71`,
    2450: `1516`,
    2451: `1516`,
    2452: `1517`,
    2453: `1518`,
    2454: `1518`,
    2455: `1518`,
    2456: `1519`,
    2457: `1520`,
    2458: `1520`,
    2459: `1521`,
    246: `72`,
    2460: `1522`,
    2461: `1522`,
    2462: `1522`,
    2463: `1523`,
    2464: `1523`,
    2465: `1524`,
    2466: `1525`,
    2467: `1525`,
    2468: `1525`,
    2469: `1526`,
    247: `73`,
    2470: `1527`,
    2471: `1527`,
    2472: `1528`,
    2473: `1529`,
    2474: `1529`,
    2475: `1529`,
    2476: `1530`,
    2477: `1530`,
    2478: `1531`,
    2479: `1532`,
    248: `76`,
    2480: `1532`,
    2481: `1533`,
    2482: `1534`,
    2483: `1534`,
    2484: `1534`,
    2485: `1535`,
    2486: `1536`,
    2487: `1536`,
    2488: `1537`,
    2489: `1538`,
    249: `76`,
    2490: `1538`,
    2491: `1538`,
    2492: `1539`,
    2493: `1540`,
    2494: `1541`,
    2495: `1542`,
    2496: `1542`,
    2497: `1543`,
    2498: `1544`,
    2499: `1544`,
    25: `2`,
    250: `76`,
    2500: `1544`,
    2501: `1545`,
    2502: `1546`,
    2503: `1546`,
    2504: `1547`,
    2505: `1548`,
    2506: `1548`,
    2507: `1548`,
    2508: `1549`,
    2509: `1550`,
    251: `77`,
    2510: `1550`,
    2511: `1551`,
    2512: `1552`,
    2513: `1552`,
    2514: `1552`,
    2515: `1553`,
    2516: `1554`,
    2517: `1554`,
    2518: `1555`,
    2519: `1555`,
    252: `77`,
    2520: `1555`,
    2521: `1556`,
    2522: `1557`,
    2523: `1557`,
    2524: `1558`,
    2525: `1560`,
    2526: `1561`,
    2527: `1561`,
    2528: `1561`,
    2529: `1563`,
    253: `78`,
    2530: `1564`,
    2531: `1564`,
    2532: `1564`,
    2533: `1566`,
    2534: `1567`,
    2535: `1567`,
    2536: `1567`,
    2537: `1568`,
    2538: `1569`,
    2539: `1570`,
    254: `79`,
    2540: `1571`,
    2541: `1572`,
    2542: `1574`,
    2543: `1575`,
    2544: `1576`,
    2545: `1577`,
    2546: `1577`,
    2547: `1577`,
    2548: `1578`,
    2549: `1578`,
    255: `79`,
    2550: `1579`,
    2551: `1580`,
    2552: `1581`,
    2553: `1583`,
    2554: `1584`,
    2555: `1584`,
    2556: `1585`,
    2557: `1588`,
    2558: `1588`,
    2559: `1589`,
    256: `80`,
    2560: `1589`,
    2561: `1590`,
    2562: `1591`,
    2563: `1592`,
    2564: `1593`,
    2565: `1593`,
    2566: `1594`,
    2567: `1595`,
    2568: `1595`,
    2569: `1596`,
    257: `80`,
    2570: `1596`,
    2571: `1597`,
    2572: `1597`,
    2573: `1598`,
    2574: `1599`,
    2575: `1600`,
    2576: `1600`,
    2577: `1601`,
    2578: `1602`,
    2579: `1603`,
    258: `80`,
    2580: `1604`,
    2581: `1604`,
    2582: `1605`,
    2583: `1606`,
    2584: `1607`,
    2585: `1609`,
    2586: `1610`,
    2587: `1611`,
    2588: `1612`,
    2589: `1613`,
    259: `83`,
    2590: `1613`,
    2591: `1614`,
    2592: `1615`,
    2593: `1616`,
    2594: `1617`,
    2595: `1619`,
    2596: `1619`,
    2597: `1620`,
    2598: `1621`,
    2599: `1621`,
    26: `2`,
    260: `83`,
    2600: `1622`,
    2601: `1624`,
    2602: `1624`,
    2603: `1625`,
    2604: `1625`,
    2605: `1626`,
    2606: `1627`,
    2607: `1628`,
    2608: `1628`,
    2609: `1628`,
    261: `84`,
    2610: `1629`,
    2611: `1629`,
    2612: `1629`,
    2613: `1631`,
    2614: `1632`,
    2615: `1633`,
    2616: `1634`,
    2617: `1634`,
    2618: `1634`,
    2619: `1635`,
    262: `85`,
    2620: `1635`,
    2621: `1636`,
    2622: `1636`,
    2623: `1636`,
    2624: `1637`,
    2625: `1637`,
    2626: `1637`,
    2627: `1639`,
    2628: `1640`,
    2629: `1640`,
    263: `86`,
    2630: `1641`,
    264: `89`,
    265: `89`,
    266: `89`,
    267: `90`,
    268: `90`,
    269: `91`,
    27: `2`,
    270: `92`,
    271: `92`,
    272: `92`,
    273: `93`,
    274: `93`,
    275: `94`,
    276: `94`,
    277: `94`,
    278: `96`,
    279: `96`,
    28: `2`,
    280: `96`,
    281: `97`,
    282: `97`,
    283: `99`,
    284: `99`,
    285: `100`,
    286: `101`,
    287: `102`,
    288: `105`,
    289: `105`,
    29: `2`,
    290: `105`,
    291: `106`,
    292: `107`,
    293: `109`,
    294: `110`,
    295: `111`,
    296: `112`,
    297: `113`,
    298: `113`,
    299: `114`,
    3: `2`,
    30: `2`,
    300: `115`,
    301: `115`,
    302: `115`,
    303: `116`,
    304: `116`,
    305: `116`,
    306: `117`,
    307: `117`,
    308: `118`,
    309: `118`,
    31: `2`,
    310: `118`,
    311: `120`,
    312: `120`,
    313: `120`,
    314: `121`,
    315: `121`,
    316: `123`,
    317: `123`,
    318: `124`,
    319: `125`,
    32: `4`,
    320: `126`,
    321: `129`,
    322: `129`,
    323: `129`,
    324: `131`,
    325: `132`,
    326: `133`,
    327: `134`,
    328: `134`,
    329: `135`,
    33: `4`,
    330: `136`,
    331: `136`,
    332: `136`,
    333: `137`,
    334: `138`,
    335: `139`,
    336: `140`,
    337: `141`,
    338: `142`,
    339: `142`,
    34: `5`,
    340: `142`,
    341: `143`,
    342: `143`,
    343: `144`,
    344: `144`,
    345: `144`,
    346: `147`,
    347: `147`,
    348: `148`,
    349: `149`,
    35: `5`,
    350: `150`,
    351: `153`,
    352: `153`,
    353: `153`,
    354: `154`,
    355: `154`,
    356: `155`,
    357: `156`,
    358: `156`,
    359: `157`,
    36: `5`,
    360: `158`,
    361: `159`,
    362: `159`,
    363: `160`,
    364: `161`,
    365: `161`,
    366: `162`,
    367: `163`,
    368: `164`,
    369: `164`,
    37: `6`,
    370: `165`,
    371: `166`,
    372: `166`,
    373: `166`,
    374: `167`,
    375: `168`,
    376: `168`,
    377: `169`,
    378: `170`,
    379: `171`,
    38: `7`,
    380: `171`,
    381: `172`,
    382: `173`,
    383: `174`,
    384: `174`,
    385: `175`,
    386: `176`,
    387: `176`,
    388: `177`,
    389: `178`,
    39: `8`,
    390: `179`,
    391: `179`,
    392: `180`,
    393: `180`,
    394: `180`,
    395: `183`,
    396: `183`,
    397: `184`,
    398: `185`,
    399: `186`,
    4: `2`,
    40: `9`,
    400: `189`,
    401: `189`,
    402: `189`,
    403: `190`,
    404: `190`,
    405: `191`,
    406: `191`,
    407: `191`,
    408: `192`,
    409: `192`,
    41: `10`,
    410: `193`,
    411: `193`,
    412: `193`,
    413: `196`,
    414: `196`,
    415: `197`,
    416: `198`,
    417: `199`,
    418: `202`,
    419: `202`,
    42: `11`,
    420: `202`,
    421: `203`,
    422: `203`,
    423: `204`,
    424: `204`,
    425: `204`,
    426: `205`,
    427: `205`,
    428: `206`,
    429: `206`,
    43: `11`,
    430: `206`,
    431: `209`,
    432: `209`,
    433: `210`,
    434: `211`,
    435: `212`,
    436: `215`,
    437: `215`,
    438: `215`,
    439: `216`,
    44: `12`,
    440: `216`,
    441: `217`,
    442: `218`,
    443: `218`,
    444: `219`,
    445: `219`,
    446: `219`,
    447: `222`,
    448: `222`,
    449: `223`,
    45: `13`,
    450: `224`,
    451: `225`,
    452: `228`,
    453: `228`,
    454: `228`,
    455: `229`,
    456: `229`,
    457: `230`,
    458: `230`,
    459: `230`,
    46: `14`,
    460: `231`,
    461: `231`,
    462: `232`,
    463: `232`,
    464: `232`,
    465: `234`,
    466: `234`,
    467: `234`,
    468: `235`,
    469: `236`,
    47: `14`,
    470: `236`,
    471: `238`,
    472: `239`,
    473: `240`,
    474: `241`,
    475: `241`,
    476: `242`,
    477: `243`,
    478: `244`,
    479: `245`,
    48: `15`,
    480: `245`,
    481: `247`,
    482: `248`,
    483: `248`,
    484: `249`,
    485: `250`,
    486: `251`,
    487: `251`,
    488: `251`,
    489: `252`,
    49: `16`,
    490: `252`,
    491: `253`,
    492: `254`,
    493: `255`,
    494: `255`,
    495: `256`,
    496: `256`,
    497: `257`,
    498: `257`,
    499: `257`,
    5: `2`,
    50: `17`,
    500: `258`,
    501: `258`,
    502: `259`,
    503: `259`,
    504: `259`,
    505: `259`,
    506: `259`,
    507: `259`,
    508: `260`,
    509: `260`,
    51: `18`,
    510: `261`,
    511: `262`,
    512: `263`,
    513: `263`,
    514: `264`,
    515: `265`,
    516: `267`,
    517: `267`,
    518: `268`,
    519: `268`,
    52: `19`,
    520: `268`,
    521: `269`,
    522: `269`,
    523: `270`,
    524: `271`,
    525: `272`,
    526: `272`,
    527: `272`,
    528: `272`,
    529: `272`,
    53: `20`,
    530: `272`,
    531: `272`,
    532: `272`,
    533: `272`,
    534: `272`,
    535: `272`,
    536: `272`,
    537: `273`,
    538: `273`,
    539: `273`,
    54: `21`,
    540: `276`,
    541: `276`,
    542: `276`,
    543: `276`,
    544: `276`,
    545: `276`,
    546: `276`,
    547: `276`,
    548: `276`,
    549: `276`,
    55: `22`,
    550: `276`,
    551: `276`,
    552: `276`,
    553: `276`,
    554: `276`,
    555: `276`,
    556: `276`,
    557: `276`,
    558: `276`,
    559: `277`,
    56: `24`,
    560: `277`,
    561: `278`,
    562: `278`,
    563: `278`,
    564: `281`,
    565: `281`,
    566: `281`,
    567: `281`,
    568: `281`,
    569: `281`,
    57: `24`,
    570: `281`,
    571: `281`,
    572: `281`,
    573: `281`,
    574: `281`,
    575: `281`,
    576: `281`,
    577: `281`,
    578: `281`,
    579: `281`,
    58: `24`,
    580: `281`,
    581: `281`,
    582: `281`,
    583: `282`,
    584: `282`,
    585: `283`,
    586: `283`,
    587: `283`,
    588: `286`,
    589: `286`,
    59: `24`,
    590: `286`,
    591: `286`,
    592: `286`,
    593: `286`,
    594: `286`,
    595: `286`,
    596: `286`,
    597: `286`,
    598: `286`,
    599: `286`,
    6: `2`,
    60: `24`,
    600: `286`,
    601: `286`,
    602: `286`,
    603: `286`,
    604: `286`,
    605: `286`,
    606: `286`,
    607: `287`,
    608: `287`,
    609: `288`,
    61: `24`,
    610: `288`,
    611: `288`,
    612: `291`,
    613: `291`,
    614: `291`,
    615: `291`,
    616: `291`,
    617: `291`,
    618: `291`,
    619: `291`,
    62: `24`,
    620: `291`,
    621: `291`,
    622: `291`,
    623: `291`,
    624: `291`,
    625: `291`,
    626: `291`,
    627: `291`,
    628: `291`,
    629: `291`,
    63: `24`,
    630: `291`,
    631: `292`,
    632: `292`,
    633: `293`,
    634: `293`,
    635: `293`,
    636: `295`,
    637: `295`,
    638: `296`,
    639: `297`,
    64: `24`,
    640: `298`,
    641: `298`,
    642: `299`,
    643: `300`,
    644: `302`,
    645: `303`,
    646: `304`,
    647: `305`,
    648: `306`,
    649: `306`,
    65: `24`,
    650: `307`,
    651: `308`,
    652: `308`,
    653: `308`,
    654: `309`,
    655: `309`,
    656: `309`,
    657: `310`,
    658: `311`,
    659: `311`,
    66: `24`,
    660: `312`,
    661: `312`,
    662: `313`,
    663: `313`,
    664: `314`,
    665: `315`,
    666: `323`,
    667: `323`,
    668: `324`,
    669: `324`,
    67: `24`,
    670: `325`,
    671: `326`,
    672: `326`,
    673: `327`,
    674: `327`,
    675: `328`,
    676: `328`,
    677: `329`,
    678: `330`,
    679: `338`,
    68: `24`,
    680: `338`,
    681: `339`,
    682: `339`,
    683: `340`,
    684: `341`,
    685: `341`,
    686: `342`,
    687: `343`,
    688: `351`,
    689: `351`,
    69: `24`,
    690: `352`,
    691: `352`,
    692: `353`,
    693: `354`,
    694: `354`,
    695: `355`,
    696: `355`,
    697: `356`,
    698: `356`,
    699: `357`,
    7: `2`,
    70: `24`,
    700: `358`,
    701: `358`,
    702: `359`,
    703: `359`,
    704: `360`,
    705: `360`,
    706: `360`,
    707: `363`,
    708: `363`,
    709: `364`,
    71: `24`,
    710: `365`,
    711: `365`,
    712: `366`,
    713: `367`,
    714: `367`,
    715: `368`,
    716: `369`,
    717: `369`,
    718: `369`,
    719: `370`,
    72: `24`,
    720: `370`,
    721: `371`,
    722: `371`,
    723: `372`,
    724: `373`,
    725: `374`,
    726: `374`,
    727: `375`,
    728: `375`,
    729: `375`,
    73: `24`,
    730: `375`,
    731: `375`,
    732: `375`,
    733: `376`,
    734: `376`,
    735: `377`,
    736: `378`,
    737: `380`,
    738: `380`,
    739: `381`,
    74: `24`,
    740: `382`,
    741: `383`,
    742: `384`,
    743: `384`,
    744: `385`,
    745: `385`,
    746: `386`,
    747: `387`,
    748: `387`,
    749: `387`,
    75: `24`,
    750: `388`,
    751: `389`,
    752: `389`,
    753: `391`,
    754: `391`,
    755: `392`,
    756: `392`,
    757: `392`,
    758: `393`,
    759: `394`,
    76: `24`,
    760: `394`,
    761: `395`,
    762: `395`,
    763: `395`,
    764: `395`,
    765: `395`,
    766: `395`,
    767: `395`,
    768: `395`,
    769: `395`,
    77: `24`,
    770: `395`,
    771: `396`,
    772: `396`,
    773: `397`,
    774: `398`,
    775: `398`,
    776: `398`,
    777: `399`,
    778: `400`,
    779: `401`,
    78: `24`,
    780: `401`,
    781: `402`,
    782: `403`,
    783: `403`,
    784: `403`,
    785: `404`,
    786: `404`,
    787: `405`,
    788: `405`,
    789: `406`,
    79: `24`,
    790: `406`,
    791: `407`,
    792: `408`,
    793: `409`,
    794: `409`,
    795: `410`,
    796: `410`,
    797: `411`,
    798: `412`,
    799: `413`,
    8: `2`,
    80: `24`,
    800: `414`,
    801: `414`,
    802: `415`,
    803: `415`,
    804: `415`,
    805: `416`,
    806: `417`,
    807: `417`,
    808: `418`,
    809: `418`,
    81: `24`,
    810: `418`,
    811: `419`,
    812: `420`,
    813: `420`,
    814: `421`,
    815: `422`,
    816: `423`,
    817: `423`,
    818: `424`,
    819: `424`,
    82: `24`,
    820: `425`,
    821: `426`,
    822: `427`,
    823: `428`,
    824: `429`,
    825: `429`,
    826: `430`,
    827: `431`,
    828: `432`,
    829: `432`,
    83: `24`,
    830: `433`,
    831: `433`,
    832: `434`,
    833: `434`,
    834: `435`,
    835: `435`,
    836: `436`,
    837: `436`,
    838: `437`,
    839: `437`,
    84: `24`,
    840: `438`,
    841: `438`,
    842: `440`,
    843: `440`,
    844: `441`,
    845: `441`,
    846: `441`,
    847: `442`,
    848: `443`,
    849: `443`,
    85: `24`,
    850: `443`,
    851: `444`,
    852: `444`,
    853: `445`,
    854: `445`,
    855: `446`,
    856: `447`,
    857: `447`,
    858: `448`,
    859: `448`,
    86: `24`,
    860: `449`,
    861: `450`,
    862: `451`,
    863: `451`,
    864: `452`,
    865: `452`,
    866: `453`,
    867: `454`,
    868: `455`,
    869: `455`,
    87: `24`,
    870: `456`,
    871: `456`,
    872: `457`,
    873: `457`,
    874: `458`,
    875: `459`,
    876: `459`,
    877: `460`,
    878: `460`,
    879: `461`,
    88: `24`,
    880: `461`,
    881: `462`,
    882: `463`,
    883: `463`,
    884: `465`,
    885: `465`,
    886: `466`,
    887: `466`,
    888: `467`,
    889: `468`,
    89: `24`,
    890: `468`,
    891: `469`,
    892: `470`,
    893: `470`,
    894: `470`,
    895: `471`,
    896: `472`,
    897: `472`,
    898: `473`,
    899: `474`,
    9: `2`,
    90: `24`,
    900: `475`,
    901: `475`,
    902: `476`,
    903: `477`,
    904: `478`,
    905: `478`,
    906: `479`,
    907: `480`,
    908: `481`,
    909: `481`,
    91: `24`,
    910: `482`,
    911: `483`,
    912: `484`,
    913: `484`,
    914: `485`,
    915: `486`,
    916: `487`,
    917: `487`,
    918: `488`,
    919: `489`,
    92: `24`,
    920: `490`,
    921: `490`,
    922: `491`,
    923: `492`,
    924: `493`,
    925: `493`,
    926: `494`,
    927: `495`,
    928: `495`,
    929: `496`,
    93: `24`,
    930: `497`,
    931: `497`,
    932: `498`,
    933: `499`,
    934: `500`,
    935: `500`,
    936: `501`,
    937: `502`,
    938: `502`,
    939: `503`,
    94: `24`,
    940: `504`,
    941: `505`,
    942: `505`,
    943: `506`,
    944: `507`,
    945: `507`,
    946: `508`,
    947: `509`,
    948: `510`,
    949: `510`,
    95: `24`,
    950: `511`,
    951: `512`,
    952: `512`,
    953: `512`,
    954: `513`,
    955: `514`,
    956: `514`,
    957: `515`,
    958: `516`,
    959: `517`,
    96: `24`,
    960: `517`,
    961: `518`,
    962: `519`,
    963: `520`,
    964: `520`,
    965: `521`,
    966: `522`,
    967: `523`,
    968: `523`,
    969: `524`,
    97: `24`,
    970: `525`,
    971: `526`,
    972: `527`,
    973: `527`,
    974: `529`,
    975: `529`,
    976: `530`,
    977: `530`,
    978: `531`,
    979: `532`,
    98: `24`,
    980: `532`,
    981: `533`,
    982: `533`,
    983: `533`,
    984: `534`,
    985: `535`,
    986: `536`,
    987: `536`,
    988: `537`,
    989: `537`,
    99: `24`,
    990: `537`,
    991: `538`,
    992: `539`,
    993: `540`,
    994: `541`,
    995: `541`,
    996: `541`,
    997: `542`,
    998: `543`,
    999: `544`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 331,
  unsupported: [],
  version: 13,
  warnings: [`API User_claim may use up to 5 accounts, but the limit is 4. API User_claim starts at /app/raffle_algo.rsh:126:37:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/raffle_algo.rsh:126:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"address payable","name":"elem9","type":"address"},{"internalType":"uint256","name":"elem10","type":"uint256"},{"internalType":"address payable","name":"elem11","type":"address"},{"internalType":"address payable","name":"elem12","type":"address"}],"internalType":"struct T12","name":"v6404","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"address payable","name":"elem9","type":"address"},{"internalType":"uint256","name":"elem10","type":"uint256"},{"internalType":"address payable","name":"elem11","type":"address"},{"internalType":"address payable","name":"elem12","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_302","type":"tuple"},{"internalType":"bool","name":"_User_claim0_302","type":"bool"},{"internalType":"bool","name":"_User_end0_302","type":"bool"},{"internalType":"bool","name":"_User_optin0_302","type":"bool"},{"internalType":"bool","name":"_User_refund0_302","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2591","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2614","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2993","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3335","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3680","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4027","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6365","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6369","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"uint256","name":"_maxEntries","type":"uint256"},{"internalType":"uint256","name":"_numberOfTickets","type":"uint256"},{"internalType":"bytes30","name":"_projectName","type":"bytes30"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v6385","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_refund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v6407","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_302","type":"tuple"},{"internalType":"bool","name":"_User_claim0_302","type":"bool"},{"internalType":"bool","name":"_User_end0_302","type":"bool"},{"internalType":"bool","name":"_User_optin0_302","type":"bool"},{"internalType":"bool","name":"_User_refund0_302","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v6410","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62004442388190036080601f8201601f19168101906001600160401b0382119082101762000769576101a0928291604052608039126200089f576040516101a081016001600160401b038111828210176200076957604052608051815260a05161ffff19811681036200089f57602082015260c05180151581036200089f57604082015260e080516060830152610100805160808401526101205160a08401526101405160c084015261016051918301919091526101805190820152620000c86101a0620008c0565b6101208201526101c051610140820152620000e56101e0620008c0565b610160820152620000f8610200620008c0565b6101808201524360035560405161022081016001600160401b0381118282101762000769576040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c08201526040518061012081011060018060401b036101208301111762000769576000918161012061020093016040528381528360208201528360408201528360608201528360808201528360a08201528360c08201528360e08201528361010082015260e0820152826101008201528261012082015282610140820152620001d2620008d5565b61016082015282610180820152826101a0820152826101c0820152826101e082015201526040519081604081011060018060401b0360408401111762000769576040820160405262000223620008d5565b82526200022f620008f6565b602083015260ff6004541662000886577fa647eb6991a60890c589cd95b4a5ecd497afe87f5fe2432e1a0dbdfd8f54a34b6101c06040513381528351602082015261ffff19602085015116604082015260408401511515606082015260608401516080820152608084015160a082015260a084015160c082015260c084015160e082015260e084015161010082015261010084015161012082015260018060a01b036101208501511661014082015261014084015161016082015260018060a01b036101608501511661018082015260018060a01b03610180850151166101a0820152a18051801590811562000879575b50156200086057600082515260006020835101526000604083510152815160208301515260a0810151606082015110620008475760001960c082015110156200082e57600160c08201511115620008155734620007fc57604051916001600160401b036101c084019081119084111762000769576020916101c0840160405260008452600083850152600060408501526000606085015260006080850152600060a0850152600060c0850152600060e08501526000610100850152600061012085015260006101408501526000610160850152600061018085015262000405620008f6565b6101a085015233845261ffff19838201511683850152604081015115156040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015260018060a01b036101208201511661012085015261014081015161014085015260018060a01b036101608201511661016085015261018060018060a01b03910151166101808401520151805160406020820151910151151560405191620004cc83620008a4565b6000835260208301526040820152620004e4620008f6565b9160005b60018110620007ac57505081526101a08201526001600055436001556101a06040519160018060a01b03815116602084015261ffff19602082015116604084015260408101511515606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e081015161010084015261010081015161012084015260018060a01b036101208201511661014084015261014081015161016084015260018060a01b036101608201511661018084015260018060a01b03610180820151168284015201516101c082016000905b600182106200077f5761020084528361022081016001600160401b03811182821017620007695760405280516001600160401b0381116200076957600254600181811c911680156200075e575b60208210146200074857601f8111620006de575b50602091601f8211600114620006745791819260009262000668575b50508160011b916000199060031b1c1916176002555b604051613adc9081620009668239f35b01519050828062000642565b601f19821692600260005260206000209160005b858110620006c557508360019510620006ab575b505050811b0160025562000658565b015160001960f88460031b161c191690558280806200069c565b9192602060018192868501518155019401920162000688565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200073d575b601f0160051c01905b81811062000730575062000626565b6000815560010162000721565b909150819062000718565b634e487b7160e01b600052602260045260246000fd5b90607f169062000612565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620005c5565b620007b881836200093d565b51620007c582866200093d565b52620007d281856200093d565b506000198114620007e657600101620004e8565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b9050600154143862000320565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b606081019081106001600160401b038211176200076957604052565b51906001600160a01b03821682036200089f57565b60405190620008e482620008a4565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000769576040528260005b8281106200092657505050565b829062000932620008d5565b818401520162000919565b9060018110156200094f5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e685146101e45780631e93b0f1146101db578063213b7923146101d257806336e56ea5146101c957806342fbef30146101c057806347dc4e6c146101b7578063573b8510146101ae5780635cd91bc2146101a55780635fde30d81461019c578063690141ef146101935780636cf1d8021461018a5780637888d2df146101815780637a2b54dc14610178578063832307571461016f578063883513de146101665780638ddecb6d1461015d578063a579242414610154578063ab53f2c61461014b578063c5d86f6f14610142578063d184691f14610139578063e07a712014610130578063edca4171146101275763fa726c840361000e57610122610e6d565b61000e565b50610122610e2d565b50610122610ded565b50610122610d9d565b50610122610d43565b50610122610cce565b50610122610c37565b50610122610bc5565b50610122610b2b565b50610122610b0c565b50610122610acc565b50610122610a41565b506101226109de565b5061012261096c565b50610122610879565b5061012261078f565b506101226104d3565b50610122610478565b506101226103c9565b50610122610371565b50610122610292565b50610122610256565b5034610251576000366003190112610251576101fe6112c1565b60046000540361023857604060209161018061022961021b610ff0565b8580825183010191016114a4565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b5034610251576000366003190112610251576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361025157565b50346102515760203660031901126102515761033860a06004356102b581610281565b6102bd6112c1565b906102cc6004600054146115e7565b6102e66102d7610ff0565b602080825183010191016114a4565b50600180841b03166102f78161115f565b516103018161035d565b61030a8161035d565b60009060010361033c575061032060409161115f565b01519182915b01526040519081529081906020820190565b0390f35b9050918291610326565b50634e487b7160e01b600052602160045260246000fd5b6002111561036757565b61036f610346565b565b50346102515760203660031901126102515760606103a260043561039481610281565b61039c611126565b5061115f565b604080519180516103b28161035d565b835260208101511515602084015201516040820152f35b5060e0366003190112610251576103de6112c1565b604051906103eb82610f1e565b600435825260c0366023190112610251576040519161040983610f46565b6024359260058410156102515761046c93815261042536613945565b602082015260643561043681611362565b6040820152610443613a88565b6060820152610450613a95565b608082015261045d613aa2565b60a08201526020820152611e20565b60405160008152602090f35b5060003660031901126102515760206101a06104926112c1565b6104c78161049e611b36565b8581019060018251525115156040825101526104b8611b36565b90600082525186820152611e20565b01511515604051908152f35b50602080600319360112610251576104e96112c1565b506104f336613965565b906104fc613985565b61050a600160005414611607565b610523610515610ff0565b8380825183010191016139b4565b9061053f61053a61053660045460ff1690565b1590565b611627565b60408051338152855160208201529094610589917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908790a1518015908115610783575b50611647565b61010091828101928351341461059e90611667565b6101a0918281015180518051916101409182850193845101908b8b8201519101511515906105ca611099565b9283528b83015215158b8201526105e0916132cd565b86526101208084019283516105f490610275565b8151610600913361328a565b61060990611687565b845133906001600160a01b039061061f90610275565b161461062a906116a7565b898801958651600090528a875101600090528951968c8a01978851528b885101600090528c88510161065c9060019052565b8751606001600590528951515188516080015260608701908151895160a0015251885160c0015261068b611d6c565b9b8c885161069890610275565b6106a191611aac565b8781015161ffff191661ffff1916908d0152868d0151151515158c8e01525160608c01526080860194855160808d015260a087015160a08d015260c087015160c08d015260e087015160e08d0152516106f990610275565b610704918c01611aac565b5190890152610160908184015161071a90610275565b610725918a01611aac565b6101808093015161073590610275565b610740918901611aac565b5161074b9042613028565b908601525190840152436101c0840152426101e0840152516102008301525161022082015261077990613742565b5160008152602090f35b90506001541438610583565b5034610251576000366003190112610251576107a96112c1565b6004600054036107e0576080610338916102206107c76102d7610ff0565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600a6004820152602490fd5b6001600160a01b03169052565b81518152602080830151908201526040808301516001600160a01b0316908201526060808301519082015260808083015115159082015260a0808301519082015260c0808301519082015260e08083015161ffff191690820152610100918201516101208201939261036f9201906107f9565b50346102515760003660031901126102515761089361125d565b5061033860e06108a16112c1565b6108a9611a92565b6108b76004600054146116c7565b61095a6108c56102d7610ff0565b61012081015183515260c08101516020845101526108f46108ea610140830151610275565b6040855101611aac565b608081015160608451015261091b61090f6040830151151590565b60808551019015159052565b84810151835160a001526060810151835160c001526020810151835161ffff199091169086015261095161010080920151610275565b90835101611aac565b51918291015260405191829182610806565b5034610251576000366003190112610251576109866112c1565b6004600054036109c55761012060209160a06101a06109b46109a6610ff0565b8680825183010191016114a4565b015101519182910152604051908152f35b60405163100960cb60e01b8152600f6004820152602490fd5b5060203660031901126102515760206101806109f86112c1565b6104c781604051610a0881610f1e565b604051610a1481610f61565b60008152815285810190610a26611ace565b825260043581515260008251525186825101526104b8611b36565b503461025157600036600319011261025157610a5b6112c1565b600460005403610ab35761014061033891610a74610ff0565b610100610a9160018060a01b0392602080825183010191016114a4565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b815260106004820152602490fd5b5060003660031901126102515760206101e0610ae66112c1565b6104c781610af2611b36565b8581019060038251525115156080825101526104b8611b36565b5034610251576000366003190112610251576020600154604051908152f35b503461025157600036600319011261025157610b456112c1565b600460005403610b6f5760208091610200610229610b61610ff0565b8480825183010191016114a4565b60405163100960cb60e01b815260076004820152602490fd5b6040908051610b968161035d565b83526020818101511515908401528101516001600160a01b0316910152565b60608101929161036f9190610b88565b503461025157600036600319011261025157610bdf611126565b50610be86112c1565b600460005403610c1e576101606103389160c06101a0610c096102d7610ff0565b01510151918291015260405191829182610bb5565b60405163100960cb60e01b815260116004820152602490fd5b503461025157602036600319011261025157600435610c5581610281565b610c5d6112c1565b90600460005403610cb557610338916001610c8c60c093610c7f6102d7610ff0565b50828060a01b03166111e2565b51610c968161035d565b610c9f8161035d565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600c6004820152602490fd5b503461025157600080600319360112610d40578054610ceb610ff0565b906040519283918252602090604082840152835191826040850152815b838110610d2957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610d08565b80fd5b5034610251576020366003190112610251576060610d74600435610d6681610281565b610d6e611126565b506111e2565b60408051918051610d848161035d565b8352602081015115156020840152015115156040820152f35b503461025157600036600319011261025157610db76112c1565b600460005403610dd45760606020916101c061022961021b610ff0565b60405163100960cb60e01b815260096004820152602490fd5b506000366003190112610251576020610200610e076112c1565b6104c781610e13611b36565b85810190600482515251151560a0825101526104b8611b36565b5060003660031901126102515760206101c0610e476112c1565b6104c781610e53611b36565b8581019060028251525115156060825101526104b8611b36565b503461025157600036600319011261025157610e876112c1565b600460005403610eb457610100602091826101a06109b4610ea6610ff0565b8380825183010191016114a4565b60405163100960cb60e01b8152600e6004820152602490fd5b90600182811c92168015610efd575b6020831014610ee757565b634e487b7160e01b600052602260045260246000fd5b91607f1691610edc565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f3957604052565b610f41610f07565b604052565b60c081019081106001600160401b03821117610f3957604052565b602081019081106001600160401b03821117610f3957604052565b606081019081106001600160401b03821117610f3957604052565b60e081019081106001600160401b03821117610f3957604052565b60a081019081106001600160401b03821117610f3957604052565b601f909101601f19168101906001600160401b03821190821017610f3957604052565b604051906000826002549161100483610ecd565b808352600193808516908115611078575060011461102a575b5061036f92500383610fcd565b60026000908152600080516020613ab083398151915294602093509091905b81831061106057505061036f93508201013861101d565b85548884018501529485019487945091830191611049565b905061036f94506020925060ff191682840152151560051b8201013861101d565b6040519061036f82610f7c565b6040519061022082016001600160401b03811183821017610f3957604052565b604051906102c082016001600160401b03811183821017610f3957604052565b6040519061024082016001600160401b03811183821017610f3957604052565b604051906101c082016001600160401b03811183821017610f3957604052565b6040519061113382610f7c565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b90611168611126565b9160018060a01b03166000908082526005602052600160ff60408420541661118f8161035d565b036111d757604092935081526005602052206001604051916111b083610f7c565b60ff81548181166111c08161035d565b855260081c16151560208401520154604082015290565b508083526020830152565b906111eb611126565b9160018060a01b03166000908082526006602052600160ff6040842054166112128161035d565b036111d7576040929350815260066020522060ff6040519161123383610f7c565b548181166112408161035d565b8352818160081c161515602084015260101c161515604082015290565b6040519061012082016001600160401b038111838210176112b4575b604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b6112bc610f07565b611279565b6112c96110a6565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401526112fb61125d565b60e084015280610100840152806101208401528061014084015261131d611126565b61016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b519061036f82610281565b519061ffff198216820361025157565b8015150361025157565b519061036f82611362565b80929103916101208312610251576040519061139282610f97565b60608294825184526020830151602085015260408301516113b281611362565b604085015281830151828501526080830151608085015260a083015160a085015260bf19011261025157604051916113e983610f7c565b60c082015160028110156102515760c09261010091855260e081015161140e81611362565b6020860152015161141e81610281565b60408401520152565b9080601f830112156102515760409182519261144284610f61565b836060938484019381851161025157915b8483106114635750505050505090565b8583830312610251578351869161147982610f7c565b8451825260209182860151838201528686015161149581611362565b87820152815201920191611453565b61040081830312610251576103e0906115936114be6110c6565b936114c883611347565b85526114d660208401611352565b60208601526114e76040840161136c565b6040860152606083015160608601526080830151608086015260a083015160a086015260c083015160c086015260e083015160e086015261010061152c818501611347565b908601526101208084015190860152610140611549818501611347565b9086015261016061155b818501611347565b9086015261018080840151908601526101a061157982828601611377565b908601526102c08301516101c08601526102e08301611427565b6101e08401526103408101516102008401526115b2610360820161136c565b6102208401526103808101516102408401526103a08101516102608401526103c081015161028084015201516102a082015290565b156115ee57565b60405163100960cb60e01b8152600b6004820152602490fd5b1561160e57565b60405163100960cb60e01b815260186004820152602490fd5b1561162e57565b60405163100960cb60e01b815260196004820152602490fd5b1561164e57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561166e57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561168e57565b60405163100960cb60e01b8152601c6004820152602490fd5b156116ae57565b60405163100960cb60e01b8152601d6004820152602490fd5b156116ce57565b60405163100960cb60e01b8152600d6004820152602490fd5b156116ee57565b60405163100960cb60e01b8152601e6004820152602490fd5b1561170e57565b60405163100960cb60e01b8152601f6004820152602490fd5b1561172e57565b60405163100960cb60e01b815260206004820152602490fd5b1561174e57565b60405163100960cb60e01b815260336004820152602490fd5b1561176e57565b60405163100960cb60e01b815260346004820152602490fd5b1561178e57565b60405163100960cb60e01b815260356004820152602490fd5b156117ae57565b60405163100960cb60e01b815260366004820152602490fd5b156117ce57565b60405163100960cb60e01b815260376004820152602490fd5b156117ee57565b60405163100960cb60e01b815260386004820152602490fd5b1561180e57565b60405163100960cb60e01b815260396004820152602490fd5b1561182e57565b60405163100960cb60e01b8152603a6004820152602490fd5b1561184e57565b60405163100960cb60e01b815260316004820152602490fd5b1561186e57565b60405163100960cb60e01b815260326004820152602490fd5b1561188e57565b60405163100960cb60e01b8152602d6004820152602490fd5b156118ae57565b60405163100960cb60e01b8152602e6004820152602490fd5b156118ce57565b60405163100960cb60e01b8152602f6004820152602490fd5b156118ee57565b60405163100960cb60e01b815260306004820152602490fd5b1561190e57565b60405163100960cb60e01b815260266004820152602490fd5b1561192e57565b60405163100960cb60e01b815260276004820152602490fd5b1561194e57565b60405163100960cb60e01b815260286004820152602490fd5b1561196e57565b60405163100960cb60e01b815260296004820152602490fd5b1561198e57565b60405163100960cb60e01b8152602a6004820152602490fd5b156119ae57565b60405163100960cb60e01b8152602b6004820152602490fd5b156119ce57565b60405163100960cb60e01b8152602c6004820152602490fd5b156119ee57565b60405163100960cb60e01b815260216004820152602490fd5b15611a0e57565b60405163100960cb60e01b815260226004820152602490fd5b15611a2e57565b60405163100960cb60e01b815260236004820152602490fd5b15611a4e57565b602460405163100960cb60e01b8152816004820152fd5b15611a6c57565b60405163100960cb60e01b815260256004820152602490fd5b51611a8f8161035d565b90565b60405190611a9f82610f61565b81611aa861125d565b9052565b6001600160a01b039091169052565b60405190611ac882610f61565b60008252565b6040519060c082016001600160401b03811183821017611b1f575b6040528160a0600091828152604051611b0181610f61565b83815260208201528260408201528260608201528260808201520152565b611b27610f07565b611ae9565b6005111561036757565b60405190611b4382610f1e565b81600081526020611b52611ace565b910152565b60405190611b6482610f1e565b60006020838281520152565b6040519060e082016001600160401b03811183821017611bbb575b60405281600080825280602083015280604083015280606083015280608083015260a082015260c0611b52611126565b611bc3610f07565b611b8b565b611bd06110c6565b90611bd9611abb565b82526000806020840152806040840152806060840152806080840152611bfd611b57565b60a08401528060c08401528060e084015280610100840152611c1d611126565b610120840152611c2b611b70565b610140840152611c39611b70565b61016084015280610180840152806101a0840152806101c0840152806101e0840152611c63611b70565b610200840152611c71611b70565b610220840152611c7f611126565b61024084015280610260840152610280830152611c9a611b70565b6102a0830152565b90929160a0602060e092610100850196600180851b03168552805182860152015180516005811015611d0b575b6040850152602081015151606085015260408101511515608085015260608101511515828501526080810151151560c085015201511515910152565b611d13610346565b611ccf565b516005811015611d255790565b611a8f610346565b506040513d6000823e3d90fd5b60405190611d4782610f61565b8160005b60208110611d57575050565b602090611d62611126565b8184015201611d4b565b611d746110e6565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152611dcf611b70565b6101a0840152806101c0840152806101e0840152611deb611d3a565b610200840152610220830152565b906001811015611e0a5760051b0190565b634e487b7160e01b600052603260045260246000fd5b611e28611bc8565b91611e376004600054146116e7565b6020611e52611e44610ff0565b8280825183010191016114a4565b92611e6a611e6561053660045460ff1690565b611707565b7f6208016c67e3e236a673e1e5ef2c2ecb7c82bbbaf3dceeefa8ad16395a7ae0da60405180611e9a843383611ca2565b0390a1611eb281518015908115612fe2575b50611727565b01611ebd8151611d18565b611ec681611b2c565b6124d657516020015183526001611ee4611edf3361115f565b611a85565b611eed8161035d565b036124c957611f5c611f506040611f033361115f565b01515b60208601908152611f226101c0860151610180870151116119e7565b611f45611f33825188515190613028565b80604089015260e08701511015611a07565b855151905190613028565b60608401511015611a27565b611f8a611f7084515160c08501519061307e565b806060860152806102008501510160808601523414611a47565b611fa9611fa4611f9e610100850151610275565b3361322f565b611a65565b611fc2611fb533611145565b805460ff19166001179055565b60408301516001611fd233611145565b01557fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873361203660a08501612007338251611aac565b8551516020825101525160405191829182919091602080604083019460018060a01b0381511684520151910152565b0390a1612047610240830151613005565b8060c085015260a083015190818114600014612474575050600160e08401525b60e08301511561229d5761036f926120bc6101806080937f1a53484f6c5456b80ade9cf4f0f8361a53dbe3b06eefef42c5bc7e0855e456aa604051806120b281906001602083019252565b0390a10160019052565b6120cb61012082015160019052565b6120dd33604061012084015101611aac565b6120f1610260840151606083015190613028565b6101408201515261210a61024084015182515190613028565b6020610140830151015260606101a0840161213c61212c604083510151151590565b6040610140860151019015159052565b510151606061014083015101526102a083015182610140830151015261216a6102808401518251519061303c565b60a0610140830151015261012081015160c0610140830151015261218c611d6c565b926121a061219a8251610275565b85611aac565b60208101516121bb9061ffff19165b61ffff19166020860152565b6121d46121cb6040830151151590565b15156040860152565b60608101516060850152828101518385015260a081015160a085015260c081015160c085015260e081015160e085015261221f612215610100830151610275565b6101008601611aac565b61012081015161012085015261224661223c610140830151610275565b6101408601611aac565b61226061016061225881840151610275565b908601611aac565b6101808101516101808501526101408201516101a0850152436101c08501526101e090428286015201516102008401520151610220820152613742565b61036f926122de6101806080937fba4df3c57d3f81bb70124416bb57d488d78e7e72bad34554042a8d923073908d604051806120b281906001602083019252565b6122f2610260840151606083015190613028565b6101608201515261230b61024084015182515190613028565b6020610160830151015260c06101a0840161233d61232d604083510151151590565b6040610160860151019015159052565b606081510151606061016085015101526102a085015184610160850151015261236e6102808601518451519061303c565b60a0610160850151015251015160c0610160830151015261238d611d6c565b9261239b61219a8251610275565b60208101516123ae9061ffff19166121af565b6123be6121cb6040830151151590565b60608101516060850152828101518385015260a081015160a085015260c081015160c085015260e081015160e08501526123ff612215610100830151610275565b610120808201519085015261241c61014061225881840151610275565b61243761242d610160830151610275565b6101608601611aac565b6101808101516101808501526101608201516101a0850152436101c08501526101e090428286015201516102008401520151610220820152613742565b116124bc5761249d61248e61024084015185515190613028565b60a08401511115610100850152565b6124b76124ae610100850151151590565b151560e0850152565b612067565b600061010084015261249d565b611f5c611f506000611f06565b60016124e58295939551611d18565b6124ee81611b2c565b036128be57506101e0906126d26101a061036f95612526600161251760c0858a01510151611a85565b6125208161035d565b14611907565b61028086015115610180850152610220860151156128b45761255461254f610180860151151590565b611927565b61256a6102a08701518688015151511015611947565b600161257c60c0848901510151611a85565b6125858161035d565b036128a2578582015160c00151604001516125ac906001600160a01b03165b838601611aac565b6125ca3360018060a01b036125c385880151610275565b1614611967565b6125d43415611987565b6125ed6125e8611f9e610100890151610275565b6119a7565b61018086015142106128985761260f61260a610180860151151590565b6119c7565b612644612620610100880151610275565b61262c84870151610275565b888801515151916001600160a01b03909116906130dd565b600080808061266b6102008b015161266561265e82613051565b6064900490565b9061303c565b806101c08a0152806102008c0151038a8a015261269061268b8c51610275565b610275565b82821561288f575bf115612882575b604051600181527f81c74b8e1b5c26b92c6de9e175ec0a9dddcd2250c4431bcce65f396ee1d35ae29080602081016120b2565b81810151610200820151526102408301516020610200830151015260006040610200830151015260606101a084015101516060610200830151015260006080610200830151015261028083015160a0610200830151015260c06101a0840151015160c0610200830151015261286f82612749611d6c565b9461275d6127578251610275565b87611aac565b60208101516127789061ffff19165b61ffff19166020880152565b6127916127886040830151151590565b15156040880152565b606081015160608701526080810151608087015260a081015160a087015260c081015160c087015260e081015160e08701526127de6127d4610100830151610275565b6101008801611aac565b61012080820151908701526128036101406127fb81840151610275565b908801611aac565b6128156101606127fb81840151610275565b6101808101516101808701526102008401516101a0870152436101c08701524282870152015180519061286a604060208401519301511515612855611099565b93600085526020850152604084019015159052565b6132cd565b6102008401520151610220820152613742565b61288a611d2d565b61269f565b506108fc612698565b61260f60006119c7565b6125ac6128af8751610275565b6125a4565b6125546000611927565b60026128cd8295949551611d18565b6128d681611b2c565b03612b38575090916128eb61268b8251610275565b3303612b1d576128fb6001611887565b61028081018051936060830194855114612914906118a7565b61291e34156118c7565b6101009081840192835161293190610275565b61293b903361322f565b612944906118e7565b604051600181527f42e5f661ddca29bc9362a490b1b64cc181bbe632f8c2fc59854fac9c74ac379890602090a160016101c092830152835161298590610275565b936101e09384870195865151513361299c926130dd565b61026087015191610220809901928351526102408801518351602001528251604001600090526101a093848901908151606001518551606001526102a08a015185516080015251845160a001525160c00151835160c001526129fc611d6c565b998851612a0890610275565b612a12908c611aac565b602089015161ffff191661ffff191660208c015260408901511515151560408c01525160608b0152608088015160808b015260a088015160a08b015260c088015160c08b015260e088015160e08b015251612a6c90610275565b612a77918a01611aac565b610120808701519089015261014080870151612a9290610275565b612a9d918a01611aac565b61016080870151612aad90610275565b612ab8918a01611aac565b6101808087015190890152519087015243908601524290850152518051602081015190604001511515612ae9611099565b60008152602081019290925215156040820152612b05916132cd565b90610200918285015201519082015261036f90613742565b6128fb612b3161268b610160840151610275565b3314611887565b6003612b448251611d18565b612b4d81611b2c565b03612ca957505061036f91612b623415611847565b61010091612c3f83830193612b82612b7d611f9e8751610275565b611867565b604051600081527f6d5c3f67dbc359584a386c831a649e089b6ce416db3a956a04cef6d61611fba790602090a160006101e080940152612c37612bc3611d6c565b95612bd7612bd18751610275565b88611aac565b60208681015161ffff191690880152612bff612bf66040880151151590565b15156040890152565b606086015160608801526080860151608088015260a086015160a088015260c086015160c088015260e086015160e088015251610275565b908501611aac565b6101208083015190840152612c5c610140612c3781850151610275565b612c6e610160612c3781850151610275565b61018080830151908401526101a08083015190840152436101c084015242818401528101519061020091828401520151610220820152613742565b612cb560049151611d18565b612cbe81611b2c565b14612cc857505050565b61028061020061036f946001612cdd3361115f565b8061024087015251612cee8161035d565b612cf78161035d565b03612fd857612d1c604061024086015101515b8061026087015260c08301519061307e565b83850152612d36612d31610220830151151590565b611747565b612d586001612d49610240870151611a85565b612d528161035d565b14611767565b612d686102608501511515611787565b612d7a838501518383015110156117a7565b6102408101612d8b815115156117c7565b612d9534156117e7565b61010080830196612db1612dac611f9e8a51610275565b611807565b86612e32866101809360008080808d898d0198612dd18a51421015611827565b0151818115612fcf575b3390f115612fc2575b612df0611fb533611145565b60006001612dfd33611145565b0155604051600181527f0fa6e876ac06cdaa557c71147ac4a6a4e2e15e66eff7de14e99f5fe3bc0b0b029080602081016120b2565b612f61612e48610260870151898b01519061303c565b93612e646102a096878c0196875152516102608c01519061303c565b60208651015260c06101a09687890190612e91612e85604084510151151590565b60408a51019015159052565b606082510151606089510152890151608088510152612eba8c6102608d8c015191015190613028565b60a08851015251015160c086510152612f59612ed4611d6c565b9b612ee98d612ee38b51610275565b90611aac565b612f088d6020612efe818d015161ffff191690565b61ffff1916910152565b612f218d6040612f1a818d0151151590565b1515910152565b8c6060808b01519101528c6080808b01519101528c60a0808b01519101528c60c0808b01519101528c60e0808b015191015251610275565b908b01611aac565b61012080860151908a0152612f7e610140612f5981880151610275565b612f90610160612f5981880151610275565b51908801525190860152436101c08601526101e042818701528101518286015201519101519003610220820152613742565b612fca611d2d565b612de4565b506108fc612ddb565b612d1c6000612d0a565b90506001541438611eac565b50634e487b7160e01b600052601160045260246000fd5b90600182019182811161301b575b821061025157565b613023612fee565b613013565b919082019182811161301b57821061025157565b9081039081116130495790565b611a8f612fee565b90600582029180830460051481151715613071575b600583040361025157565b613079612fee565b613066565b91906000928115918215613096575b50501561025157565b818192939550028281048214831517156130d0575b80946130ba570414388061308d565b634e487b7160e01b600052601260045260246000fd5b6130d8612fee565b6130ab565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261315993600093849392849190608081016001600160401b03811182821017613160575b6040525193165af161314961314261316d565b80926131cf565b50602080825183010191016131ba565b1561025157565b613168610f07565b61312f565b3d156131b5573d906001600160401b0382116131a8575b6040519161319c601f8201601f191660200184610fcd565b82523d6000602084013e565b6131b0610f07565b613184565b606090565b908160209103126102515751611a8f81611362565b156131d75790565b8051156131e657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156132075790565b80511561321657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611a8f928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261327381610fb2565b5193165af161314961328361316d565b80926131ff565b600091611a8f9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261327381610fb2565b91906132d7611d3a565b9260005b600181106132e95750508252565b806132f660019284611df9565b516133018288611df9565b5261330c8187611df9565b50600019811461331d575b016132db565b613325612fee565b613317565b818110613335575050565b6000815560010161332a565b61334c600254610ecd565b806133545750565b601f811160011461336757506000600255565b60026000526133ac90601f0160051c600080516020613ab0833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61332a565b6000602081208160025555565b6133c16110c6565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015280610140840152806101608401528061018084015261341c611b70565b6101a0840152806101c0840152613431611d3a565b6101e084015280610200840152806102208401528061024084015280610260840152806102808401526102a0830152565b9060c08061036f938051845260208101516020850152604081015115156040850152606081015160608501526080810151608085015260a081015160a08501520151910190610b88565b6000915b600183106134bd57505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906134b0565b9190916103e06102a06104008301946135068482516107f9565b60208181015161ffff191690850152604081810151151590850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261356661010080830151908601906107f9565b610120808201519085015261358461014080830151908601906107f9565b61359761016080830151908601906107f9565b61018080820151908501526135b56101a08083015190860190613462565b6101c08101516102c08501526135d56101e08201516102e08601906134ac565b61020081015161034085015261022081015115156103608501526102408101516103808501526102608101516103a08501526102808101516103c08501520151910152565b90601f8211613627575050565b61036f9160026000526020600020906020601f840160051c83019310613655575b601f0160051c019061332a565b9091508190613648565b80519091906001600160401b038111613735575b61368781613682600254610ecd565b61361a565b602080601f83116001146136c357508192936000926136b8575b50508160011b916000199060031b1c191617600255565b0151905038806136a1565b6002600052601f19831694909190600080516020613ab0833981519152926000905b87821061371d575050836001959610613704575b505050811b01600255565b015160001960f88460031b161c191690553880806136f9565b806001859682949686015181550195019301906136e5565b61373d610f07565b613673565b6101a0818101805160400151156138b6576138a39160806138b19261385761036f9661376c6133b9565b9461377a6127578351610275565b602082015161378d9061ffff191661276c565b61379d6127886040840151151590565b60608201516060870152848201518587015260a082015160a087015260c082015160c087015260e082015160e08701526137df6101006127fb81850151610275565b61012080830151908701526137fc6101406127fb81850151610275565b61380e6101606127fb81850151610275565b61018090818301918251908801528451908701526101e08083019081516101c0890152610200908185015190890152610220809401519088015251905111159085019015159052565b60208151015161024084015280515161026084015260a0815101516102808401525101516102a082015261388b6004600055565b61389443600155565b604051928391602083016134ec565b03601f198101835282610fcd565b61365f565b505080610160613919920160008080806138d361268b8651610275565b6102208701519082821561393c575bf11561392f575b6102006139046138fd610100850151610275565b9251610275565b9201515151916001600160a01b0316906130dd565b600080556139276000600155565b61036f613341565b613937611d2d565b6138e9565b506108fc6138e2565b6020906043190112610251576040519061395e82610f61565b6044358252565b6020906003190112610251576040519061397e82610f61565b6004358252565b6040519061399282610f7c565b8161399b611d3a565b81526139a5611126565b60208201526040611b52611b70565b6102008183031261025157613a816139ca611106565b926139d483611347565b84526139e260208401611352565b60208501526139f36040840161136c565b6040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e08501526101008084015190850152610120613a43818501611347565b908501526101408084015190850152610160613a60818501611347565b90850152610180613a72818501611347565b908501526101a0809301611427565b9082015290565b6084359061036f82611362565b60a4359061036f82611362565b60c4359061036f8261136256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 17474,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_algo.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_algo.rsh:313:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_algo.rsh:126:37:after expr stmt semicolon',
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
