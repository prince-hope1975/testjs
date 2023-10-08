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
    buyers: ctc4,
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
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc11;
  
  const map2_ctc = ctc8;
  
  const map3_ctc = ctc12;
  
  
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        
        return v2300;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        
        return v2227;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        
        return v2240;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        
        return v2284;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async (_v2292 ) => {
          const v2292 = stdlib.protect(ctc0, _v2292, null);
        
        const v2293 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc0, v2292, ctc4), null);
        const v2294 = stdlib.fromSome(v2293, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:162:72:decimal', stdlib.UInt_max, '0'));
        
        return v2294;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async (_v2287 ) => {
          const v2287 = stdlib.protect(ctc0, _v2287, null);
        
        const v2288 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc0, v2287, ctc7), null);
        const v2289 = {
          None: 0,
          Some: 1
          }[v2288[0]];
        const v2290 = stdlib.eq(v2289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2290;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        const v2225 = {
          amountOfRaffleToken: v2192,
          asset: v2182,
          cost: v2188,
          creator: v2193,
          deadline: v2185,
          isFeatured: v2183,
          maxEntries: v2189,
          numberOfTickets: v2184,
          projectName: v2181,
          raffleToken: v2191
          };
        
        return v2225;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        const v2291 = v2236.currentUserNumber;
        
        return v2291;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsLeft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        const v2285 = v2236.ticketsLeft;
        
        return v2285;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        
        return v2191;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = svs;
      return (await ((async () => {
        
        const v2286 = v2236.winner;
        
        return v2286;}))(...args));
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
      1: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc2, ctc4, ctc0, ctc0, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc2, ctc4, ctc0, ctc0, ctc4, ctc9, ctc4, ctc6, ctc4, ctc3, ctc4, ctc4, ctc4, ctc4, ctc5, ctc4]
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc2, ctc5]);
  return {
    mapDataTy: ctc6
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    User_buyTicket0_310: ctc9,
    User_claim0_310: ctc10,
    User_determinWinnerAfterDeadline0_310: ctc10,
    User_end0_310: ctc10,
    User_optin0_310: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  
  const v2151 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2152 = [v2151, v2151];
  const v2156 = stdlib.protect(ctc1, interact.Admin, 'for Deployer\'s interact field Admin');
  const v2157 = stdlib.protect(ctc3, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v2158 = stdlib.protect(ctc6, interact.asset, 'for Deployer\'s interact field asset');
  const v2159 = stdlib.protect(ctc3, interact.cost, 'for Deployer\'s interact field cost');
  const v2160 = stdlib.protect(ctc1, interact.creator, 'for Deployer\'s interact field creator');
  const v2161 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v2162 = stdlib.protect(ctc7, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v2163 = stdlib.protect(ctc3, interact.maxEntries, 'for Deployer\'s interact field maxEntries');
  const v2164 = stdlib.protect(ctc3, interact.numberOfTickets, 'for Deployer\'s interact field numberOfTickets');
  const v2165 = stdlib.protect(ctc8, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2166 = stdlib.protect(ctc6, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v2169 = v2162 ? stdlib.checkedBigNumberify('./raffle_token_v2.rsh:4:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_token_v2.rsh:66:59:decimal', stdlib.UInt_max, '0');
  const v2170 = stdlib.protect(ctc3, await interact.random(), {
    at: './raffle_token_v2.rsh:69:46:application',
    fs: ['at ./raffle_token_v2.rsh:61:16:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:61:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v2171 = stdlib.safeMod(v2170, v2164);
  const v2172 = stdlib.tokenEq(v2158, v2166);
  const v2173 = v2172 ? false : true;
  stdlib.assert(v2173, {
    at: './raffle_token_v2.rsh:76:11:application',
    fs: ['at ./raffle_token_v2.rsh:61:16:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:61:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const v2174 = stdlib.le(v2171, v2164);
  stdlib.assert(v2174, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:94:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v2176 = stdlib.lt(v2159, stdlib.UInt_max);
  stdlib.assert(v2176, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v2178 = stdlib.ge(v2159, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:96:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2178, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:96:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2165, v2158, v2162, v2164, v2161, v2171, v2170, v2159, v2163, v2169, v2166, v2157, v2160, v2156],
    evt_cnt: 14,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6, ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194], secs: v2196, time: v2195, didSend: v155, from: v2180 } = txn1;
      
      const v2197 = v2152[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0')];
      const v2198 = stdlib.Array_set(v2197, '0', stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v2199 = stdlib.Array_set(v2152, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0'), v2198);
      const v2201 = v2199[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '1')];
      const v2202 = stdlib.Array_set(v2201, '0', stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0'));
      const v2203 = stdlib.Array_set(v2199, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '1'), v2202);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2182
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2191
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194], secs: v2196, time: v2195, didSend: v155, from: v2180 } = txn1;
  const v2197 = v2152[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0')];
  const v2198 = stdlib.Array_set(v2197, '0', stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v2199 = stdlib.Array_set(v2152, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0'), v2198);
  const v2201 = v2199[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '1')];
  const v2202 = stdlib.Array_set(v2201, '0', stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '0'));
  const v2203 = stdlib.Array_set(v2199, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:78:12:dot', stdlib.UInt_max, '1'), v2202);
  const v2205 = stdlib.tokenEq(v2191, v2182);
  const v2206 = v2205 ? false : true;
  stdlib.assert(v2206, {
    at: './raffle_token_v2.rsh:78:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v2207 = stdlib.le(v2186, v2184);
  stdlib.assert(v2207, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:94:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v2209 = stdlib.lt(v2188, stdlib.UInt_max);
  stdlib.assert(v2209, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v2211 = stdlib.ge(v2188, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:96:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2211, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:96:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2190, v2191, v2192, v2193, v2194, v2203],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2195,
    onlyIf: true,
    out_tys: [],
    pay: [v2190, [[v2192, v2191]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v2215, time: v2214, didSend: v164, from: v2213 } = txn2;
      
      sim_r.txns.push({
        amt: v2190,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2218 = v2203[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:100:12:dot', stdlib.UInt_max, '1')];
      const v2219 = v2218[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:100:12:dot', stdlib.UInt_max, '0')];
      const v2220 = stdlib.add(v2219, v2192);
      const v2222 = stdlib.Array_set(v2218, '0', v2220);
      const v2223 = stdlib.Array_set(v2203, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:100:12:dot', stdlib.UInt_max, '1'), v2222);
      sim_r.txns.push({
        amt: v2192,
        kind: 'to',
        tok: v2191
        });
      const v2227 = stdlib.safeAdd(v2215, v2185);
      const v2228 = await ctc.getContractInfo();
      
      const v2230 = v2223[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:137:17:application', stdlib.UInt_max, '0')];
      const v2231 = v2230[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:137:17:application', stdlib.UInt_max, '0')];
      const v2232 = v2223[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:138:23:application', stdlib.UInt_max, '1')];
      const v2233 = v2232[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:138:23:application', stdlib.UInt_max, '0')];
      const v2234 = ['None', null];
      const v2235 = {
        bal: v2231,
        buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v2233,
        ticketsLeft: v2184,
        winner: v2234
        };
      const v2236 = v2235;
      const v2237 = v2214;
      const v2240 = v2215;
      const v2243 = v2223;
      const v2244 = v2190;
      
      if (await (async () => {
        const v2280 = v2236.keepGoing;
        
        return v2280;})()) {
        const v2284 = stdlib.ge(v2240, v2227);
        const v2295 = v2236.currentUserNumber;
        const v2296 = v2236.bal;
        const v2297 = v2236.ticketsLeft;
        const v2298 = v2236.raffleBal;
        const v2299 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v2300 = v2299[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v4305 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v4306 = v4305[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2194,
          tok: undefined /* Nothing */
          });
        const v4319 = stdlib.sub(v4306, v4306);
        const v4321 = stdlib.Array_set(v4305, '0', v4319);
        const v4322 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v4321);
        sim_r.txns.push({
          kind: 'from',
          to: v2194,
          tok: v2182
          });
        const v4323 = v4322[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
        const v4324 = v4323[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2194,
          tok: v2191
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2191
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2182
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
    tys: [ctc1, ctc8, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6, ctc3, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2215, time: v2214, didSend: v164, from: v2213 } = txn2;
  ;
  const v2218 = v2203[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:100:12:dot', stdlib.UInt_max, '1')];
  const v2219 = v2218[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:100:12:dot', stdlib.UInt_max, '0')];
  const v2220 = stdlib.add(v2219, v2192);
  const v2222 = stdlib.Array_set(v2218, '0', v2220);
  const v2223 = stdlib.Array_set(v2203, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:100:12:dot', stdlib.UInt_max, '1'), v2222);
  ;
  const v2224 = stdlib.addressEq(v2180, v2213);
  stdlib.assert(v2224, {
    at: './raffle_token_v2.rsh:100:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v2227 = stdlib.safeAdd(v2215, v2185);
  const v2228 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2228, v2186), {
    at: './raffle_token_v2.rsh:128:27:application',
    fs: ['at ./raffle_token_v2.rsh:128:27:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:128:27:function exp)', 'at ./raffle_token_v2.rsh:128:27:application call to "liftedInteract" (defined at: ./raffle_token_v2.rsh:128:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2230 = v2223[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:137:17:application', stdlib.UInt_max, '0')];
  const v2231 = v2230[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:137:17:application', stdlib.UInt_max, '0')];
  const v2232 = v2223[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:138:23:application', stdlib.UInt_max, '1')];
  const v2233 = v2232[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:138:23:application', stdlib.UInt_max, '0')];
  const v2234 = ['None', null];
  const v2235 = {
    bal: v2231,
    buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v2233,
    ticketsLeft: v2184,
    winner: v2234
    };
  let v2236 = v2235;
  let v2237 = v2214;
  let v2240 = v2215;
  let v2243 = v2223;
  let v2244 = v2190;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2280 = v2236.keepGoing;
    
    return v2280;})()) {
    const v2284 = stdlib.ge(v2240, v2227);
    const v2295 = v2236.currentUserNumber;
    const v2296 = v2236.bal;
    const v2297 = v2236.ticketsLeft;
    const v2298 = v2236.raffleBal;
    const v2299 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
    const v2300 = v2299[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn4;
    switch (v2550[0]) {
      case 'User_buyTicket0_310': {
        const v2553 = v2550[1];
        undefined /* setApiDetails */;
        const v2558 = v2553[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:166:10:spread', stdlib.UInt_max, '0')];
        const v2559 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v2549, ctc3), null);
        const v2560 = stdlib.fromSome(v2559, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:167:65:decimal', stdlib.UInt_max, '0'));
        const v2561 = stdlib.lt(v2240, v2227);
        stdlib.assert(v2561, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v2563 = stdlib.ge(v2558, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:169:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v2563, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Cannot purchase less than 1',
          who: 'Deployer'
          });
        const v2565 = stdlib.safeAdd(v2560, v2558);
        const v2566 = stdlib.ge(v2189, v2565);
        stdlib.assert(v2566, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Limit reached',
          who: 'Deployer'
          });
        const v2568 = stdlib.safeAdd(v2558, v2560);
        const v2569 = stdlib.le(v2568, v2184);
        stdlib.assert(v2569, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Cannot buy more tickets than balance',
          who: 'Deployer'
          });
        const v2571 = stdlib.safeMul(v2558, v2188);
        ;
        const v2675 = stdlib.add(v2300, v2571);
        const v2677 = stdlib.Array_set(v2299, '0', v2675);
        const v2678 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '0'), v2677);
        ;
        ;
        await stdlib.mapSet(map1, ctc1, v2549, ctc3, v2565);
        const v2703 = {
          address: v2549,
          amount: v2558
          };
        null;
        const v2704 = v2236.buyers;
        await stdlib.mapSet(map0, ctc3, v2704, ctc1, v2549);
        const v2705 = stdlib.safeAdd(v2295, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:203:33:decimal', stdlib.UInt_max, '1'));
        const v2706 = stdlib.eq(v2705, v2186);
        let v2707;
        if (v2706) {
          v2707 = true;
          }
        else {
          const v2709 = stdlib.le(v2705, v2186);
          let v2710;
          if (v2709) {
            const v2711 = stdlib.safeAdd(v2295, v2558);
            const v2712 = stdlib.ge(v2711, v2186);
            v2710 = v2712;
            }
          else {
            v2710 = false;
            }
          v2707 = v2710;
          }
        if (v2707) {
          const v2713 = true;
          await txn4.getOutput('User_buyTicket', 'v2713', ctc7, v2713);
          const v2723 = v2236.keepGoing;
          const v2724 = v2236.percent;
          const v2729 = stdlib.safeAdd(v2295, v2558);
          const v2731 = stdlib.safeAdd(v2296, v2571);
          const v2733 = stdlib.safeSub(v2297, v2558);
          const v2735 = stdlib.safeAdd(v2704, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:217:44:decimal', stdlib.UInt_max, '1'));
          const v2736 = ['Some', v2549];
          const v2737 = {
            bal: v2731,
            buyers: v2735,
            currentUserNumber: v2729,
            keepGoing: v2723,
            percent: v2724,
            raffleBal: v2298,
            ticketsLeft: v2733,
            winner: v2736
            };
          const cv2236 = v2737;
          const cv2237 = v2551;
          const cv2240 = v2552;
          const cv2243 = v2678;
          const cv2244 = v2244;
          
          v2236 = cv2236;
          v2237 = cv2237;
          v2240 = cv2240;
          v2243 = cv2243;
          v2244 = cv2244;
          
          txn3 = txn4;
          continue;}
        else {
          const v2739 = true;
          await txn4.getOutput('User_buyTicket', 'v2739', ctc7, v2739);
          const v2749 = v2236.keepGoing;
          const v2750 = v2236.percent;
          const v2753 = v2236.winner;
          const v2755 = stdlib.safeAdd(v2295, v2558);
          const v2757 = stdlib.safeAdd(v2296, v2571);
          const v2759 = stdlib.safeSub(v2297, v2558);
          const v2761 = stdlib.safeAdd(v2704, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:227:44:decimal', stdlib.UInt_max, '1'));
          const v2762 = {
            bal: v2757,
            buyers: v2761,
            currentUserNumber: v2755,
            keepGoing: v2749,
            percent: v2750,
            raffleBal: v2298,
            ticketsLeft: v2759,
            winner: v2753
            };
          const cv2236 = v2762;
          const cv2237 = v2551;
          const cv2240 = v2552;
          const cv2243 = v2678;
          const cv2244 = v2244;
          
          v2236 = cv2236;
          v2237 = cv2237;
          v2240 = cv2240;
          v2243 = cv2243;
          v2244 = cv2244;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'User_claim0_310': {
        const v2900 = v2550[1];
        undefined /* setApiDetails */;
        const v2930 = v2236.winner;
        const v2931 = {
          None: 0,
          Some: 1
          }[v2930[0]];
        const v2932 = stdlib.eq(v2931, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2932, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v2284, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v2936 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '1')];
        const v2937 = v2936[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '0')];
        const v2938 = stdlib.le(v2298, v2937);
        stdlib.assert(v2938, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:251:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v2941 = stdlib.fromSome(v2930, v2180);
        const v2942 = stdlib.addressEq(v2941, v2549);
        stdlib.assert(v2942, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v3117 = stdlib.ge(v2552, v2227);
        stdlib.assert(v3117, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:258:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:258:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v3134 = stdlib.sub(v2937, v2937);
        const v3136 = stdlib.Array_set(v2936, '0', v3134);
        const v3137 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:259:57:application', stdlib.UInt_max, '1'), v3136);
        ;
        const v3138 = v3137[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:43:application', stdlib.UInt_max, '0')];
        const v3139 = v3138[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:43:application', stdlib.UInt_max, '0')];
        const v3140 = stdlib.safeMul(v3139, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:54:decimal', stdlib.UInt_max, '5'));
        const v3141 = stdlib.safeDiv(v3140, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:58:decimal', stdlib.UInt_max, '100'));
        const v3144 = stdlib.safeSub(v3139, v3141);
        const v3150 = stdlib.sub(v3139, v3144);
        const v3152 = stdlib.Array_set(v3138, '0', v3150);
        const v3153 = stdlib.Array_set(v3137, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:261:60:application', stdlib.UInt_max, '0'), v3152);
        ;
        const v3154 = true;
        await txn4.getOutput('User_claim', 'v3154', ctc7, v3154);
        const v3161 = v2236.buyers;
        const v3164 = v2236.percent;
        const v3168 = v3153[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:272:25:application', stdlib.UInt_max, '0')];
        const v3169 = v3168[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:272:25:application', stdlib.UInt_max, '0')];
        const v3170 = {
          bal: v3169,
          buyers: v3161,
          currentUserNumber: v2295,
          keepGoing: false,
          percent: v3164,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          ticketsLeft: v2297,
          winner: v2930
          };
        const cv2236 = v3170;
        const cv2237 = v2551;
        const cv2240 = v2552;
        const cv2243 = v3153;
        const cv2244 = v2244;
        
        v2236 = cv2236;
        v2237 = cv2237;
        v2240 = cv2240;
        v2243 = cv2243;
        v2244 = cv2244;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_determinWinnerAfterDeadline0_310': {
        const v3247 = v2550[1];
        undefined /* setApiDetails */;
        const v3302 = v2236.winner;
        const v3303 = {
          None: 0,
          Some: 1
          }[v3302[0]];
        const v3304 = stdlib.eq(v3303, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3304, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v2284, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        ;
        ;
        ;
        const v3525 = stdlib.ge(v2552, v2227);
        stdlib.assert(v3525, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:289:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:289:13:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v3527 = v2236.buyers;
        const v3528 = stdlib.safeMod(v2187, v3527);
        const v3529 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3528, ctc1), null);
        const v3530 = {
          None: 0,
          Some: 1
          }[v3529[0]];
        const v3531 = stdlib.eq(v3530, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3531, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:291:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:289:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:289:13:function exp)'],
          msg: 'Error as the buyer for the winner index does not exist',
          who: 'Deployer'
          });
        const v3534 = stdlib.fromSome(v3529, v2194);
        await txn4.getOutput('User_determinWinnerAfterDeadline', 'v3534', ctc1, v3534);
        const v3543 = v2236.keepGoing;
        const v3544 = v2236.percent;
        const v3548 = ['Some', v3534];
        const v3549 = {
          bal: v2296,
          buyers: v3527,
          currentUserNumber: v2295,
          keepGoing: v3543,
          percent: v3544,
          raffleBal: v2298,
          ticketsLeft: v2297,
          winner: v3548
          };
        const cv2236 = v3549;
        const cv2237 = v2551;
        const cv2240 = v2552;
        const cv2243 = v2243;
        const cv2244 = v2244;
        
        v2236 = cv2236;
        v2237 = cv2237;
        v2240 = cv2240;
        v2243 = cv2243;
        v2244 = cv2244;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_end0_310': {
        const v3594 = v2550[1];
        undefined /* setApiDetails */;
        const v3665 = stdlib.addressEq(v2549, v2180);
        const v3666 = stdlib.addressEq(v2549, v2194);
        const v3667 = v3665 ? true : v3666;
        stdlib.assert(v3667, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        const v3670 = stdlib.eq(v2297, v2184);
        stdlib.assert(v3670, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_token_v2.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
          msg: 'Cannot end contract',
          who: 'Deployer'
          });
        ;
        ;
        const v3720 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '1')];
        const v3721 = v3720[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '0')];
        ;
        const v3907 = true;
        await txn4.getOutput('User_end', 'v3907', ctc7, v3907);
        const v3920 = stdlib.sub(v3721, v3721);
        const v3922 = stdlib.Array_set(v3720, '0', v3920);
        const v3923 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:317:57:application', stdlib.UInt_max, '1'), v3922);
        ;
        const v3925 = v2236.buyers;
        const v3928 = v2236.percent;
        const v3931 = v2236.winner;
        const v3932 = {
          bal: v2296,
          buyers: v3925,
          currentUserNumber: v2295,
          keepGoing: false,
          percent: v3928,
          raffleBal: v2298,
          ticketsLeft: v2297,
          winner: v3931
          };
        const cv2236 = v3932;
        const cv2237 = v2551;
        const cv2240 = v2552;
        const cv2243 = v3923;
        const cv2244 = v2244;
        
        v2236 = cv2236;
        v2237 = cv2237;
        v2240 = cv2240;
        v2243 = cv2243;
        v2244 = cv2244;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_310': {
        const v3941 = v2550[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v4282 = null;
        await txn4.getOutput('User_optin', 'v4282', ctc0, v4282);
        const cv2236 = v2236;
        const cv2237 = v2551;
        const cv2240 = v2552;
        const cv2243 = v2243;
        const cv2244 = v2244;
        
        v2236 = cv2236;
        v2237 = cv2237;
        v2240 = cv2240;
        v2243 = cv2243;
        v2244 = cv2244;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v4305 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
  const v4306 = v4305[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
  ;
  const v4319 = stdlib.sub(v4306, v4306);
  const v4321 = stdlib.Array_set(v4305, '0', v4319);
  const v4322 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v4321);
  ;
  const v4323 = v4322[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
  const v4324 = v4323[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc8,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_310: ctc12,
    User_claim0_310: ctc13,
    User_determinWinnerAfterDeadline0_310: ctc13,
    User_end0_310: ctc13,
    User_optin0_310: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3]);
  const v2301 = ctc.selfAddress();
  const v2303 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token_v2.rsh:1:23:application',
    fs: ['at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_buyTicket0_310" (defined at: ./raffle_token_v2.rsh:166:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v2304 = v2303[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2306 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v2301, ctc3), null);
  const v2307 = stdlib.fromSome(v2306, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:167:65:decimal', stdlib.UInt_max, '0'));
  const v2308 = stdlib.lt(v2240, v2227);
  stdlib.assert(v2308, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_buyTicket0_310" (defined at: ./raffle_token_v2.rsh:166:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v2310 = stdlib.ge(v2304, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:169:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2310, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_buyTicket0_310" (defined at: ./raffle_token_v2.rsh:166:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Cannot purchase less than 1',
    who: 'User_buyTicket'
    });
  const v2312 = stdlib.safeAdd(v2307, v2304);
  const v2313 = stdlib.ge(v2189, v2312);
  stdlib.assert(v2313, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_buyTicket0_310" (defined at: ./raffle_token_v2.rsh:166:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Limit reached',
    who: 'User_buyTicket'
    });
  const v2315 = stdlib.safeAdd(v2304, v2307);
  const v2316 = stdlib.le(v2315, v2184);
  stdlib.assert(v2316, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_buyTicket0_310" (defined at: ./raffle_token_v2.rsh:166:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Cannot buy more tickets than balance',
    who: 'User_buyTicket'
    });
  const v2323 = ['User_buyTicket0_310', v2303];
  
  const v2400 = stdlib.safeMul(v2304, v2188);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300, v2323],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:182:11:decimal', stdlib.UInt_max, '0'), [[v2400, v2182], [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:184:12:decimal', stdlib.UInt_max, '0'), v2191]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
      
      switch (v2550[0]) {
        case 'User_buyTicket0_310': {
          const v2553 = v2550[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v2558 = v2553[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:166:10:spread', stdlib.UInt_max, '0')];
          const v2559 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v2549, ctc3), null);
          const v2560 = stdlib.fromSome(v2559, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:167:65:decimal', stdlib.UInt_max, '0'));
          const v2565 = stdlib.safeAdd(v2560, v2558);
          const v2571 = stdlib.safeMul(v2558, v2188);
          ;
          const v2675 = stdlib.add(v2300, v2571);
          const v2677 = stdlib.Array_set(v2299, '0', v2675);
          const v2678 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '0'), v2677);
          sim_r.txns.push({
            amt: v2571,
            kind: 'to',
            tok: v2182
            });
          ;
          await stdlib.simMapSet(sim_r, 1, ctc1, v2549, ctc3, v2565);
          const v2703 = {
            address: v2549,
            amount: v2558
            };
          null;
          const v2704 = v2236.buyers;
          await stdlib.simMapSet(sim_r, 0, ctc3, v2704, ctc1, v2549);
          const v2705 = stdlib.safeAdd(v2295, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:203:33:decimal', stdlib.UInt_max, '1'));
          const v2706 = stdlib.eq(v2705, v2186);
          let v2707;
          if (v2706) {
            v2707 = true;
            }
          else {
            const v2709 = stdlib.le(v2705, v2186);
            let v2710;
            if (v2709) {
              const v2711 = stdlib.safeAdd(v2295, v2558);
              const v2712 = stdlib.ge(v2711, v2186);
              v2710 = v2712;
              }
            else {
              v2710 = false;
              }
            v2707 = v2710;
            }
          if (v2707) {
            const v2713 = true;
            const v2714 = await txn1.getOutput('User_buyTicket', 'v2713', ctc8, v2713);
            
            const v2723 = v2236.keepGoing;
            const v2724 = v2236.percent;
            const v2729 = stdlib.safeAdd(v2295, v2558);
            const v2731 = stdlib.safeAdd(v2296, v2571);
            const v2733 = stdlib.safeSub(v2297, v2558);
            const v2735 = stdlib.safeAdd(v2704, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:217:44:decimal', stdlib.UInt_max, '1'));
            const v2736 = ['Some', v2549];
            const v2737 = {
              bal: v2731,
              buyers: v2735,
              currentUserNumber: v2729,
              keepGoing: v2723,
              percent: v2724,
              raffleBal: v2298,
              ticketsLeft: v2733,
              winner: v2736
              };
            const v6390 = v2737;
            const v6392 = v2552;
            const v6393 = v2678;
            const v6394 = v2244;
            const v6395 = v2737.keepGoing;
            if (v6395) {
              const v6396 = stdlib.ge(v2552, v2227);
              const v6397 = v2737.currentUserNumber;
              const v6398 = v2737.bal;
              const v6399 = v2737.ticketsLeft;
              const v6400 = v2737.raffleBal;
              const v6401 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              const v6402 = v6401[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v6404 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              const v6405 = v6404[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2194,
                tok: undefined /* Nothing */
                });
              const v6406 = stdlib.sub(v6405, v6405);
              const v6407 = stdlib.Array_set(v6404, '0', v6406);
              const v6408 = stdlib.Array_set(v2678, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6407);
              sim_r.txns.push({
                kind: 'from',
                to: v2194,
                tok: v2182
                });
              const v6409 = v6408[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
              const v6410 = v6409[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2194,
                tok: v2191
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2191
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v2182
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v2739 = true;
            const v2740 = await txn1.getOutput('User_buyTicket', 'v2739', ctc8, v2739);
            
            const v2749 = v2236.keepGoing;
            const v2750 = v2236.percent;
            const v2753 = v2236.winner;
            const v2755 = stdlib.safeAdd(v2295, v2558);
            const v2757 = stdlib.safeAdd(v2296, v2571);
            const v2759 = stdlib.safeSub(v2297, v2558);
            const v2761 = stdlib.safeAdd(v2704, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:227:44:decimal', stdlib.UInt_max, '1'));
            const v2762 = {
              bal: v2757,
              buyers: v2761,
              currentUserNumber: v2755,
              keepGoing: v2749,
              percent: v2750,
              raffleBal: v2298,
              ticketsLeft: v2759,
              winner: v2753
              };
            const v6411 = v2762;
            const v6413 = v2552;
            const v6414 = v2678;
            const v6415 = v2244;
            const v6416 = v2762.keepGoing;
            if (v6416) {
              const v6417 = stdlib.ge(v2552, v2227);
              const v6418 = v2762.currentUserNumber;
              const v6419 = v2762.bal;
              const v6420 = v2762.ticketsLeft;
              const v6421 = v2762.raffleBal;
              const v6422 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              const v6423 = v6422[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v6425 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              const v6426 = v6425[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2194,
                tok: undefined /* Nothing */
                });
              const v6427 = stdlib.sub(v6426, v6426);
              const v6428 = stdlib.Array_set(v6425, '0', v6427);
              const v6429 = stdlib.Array_set(v2678, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6428);
              sim_r.txns.push({
                kind: 'from',
                to: v2194,
                tok: v2182
                });
              const v6430 = v6429[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
              const v6431 = v6430[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2194,
                tok: v2191
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2191
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v2182
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'User_claim0_310': {
          const v2900 = v2550[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_310': {
          const v3247 = v2550[1];
          
          break;
          }
        case 'User_end0_310': {
          const v3594 = v2550[1];
          
          break;
          }
        case 'User_optin0_310': {
          const v3941 = v2550[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
  switch (v2550[0]) {
    case 'User_buyTicket0_310': {
      const v2553 = v2550[1];
      undefined /* setApiDetails */;
      const v2558 = v2553[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:166:10:spread', stdlib.UInt_max, '0')];
      const v2559 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v2549, ctc3), null);
      const v2560 = stdlib.fromSome(v2559, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:167:65:decimal', stdlib.UInt_max, '0'));
      const v2561 = stdlib.lt(v2240, v2227);
      stdlib.assert(v2561, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v2563 = stdlib.ge(v2558, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:169:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v2563, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Cannot purchase less than 1',
        who: 'User_buyTicket'
        });
      const v2565 = stdlib.safeAdd(v2560, v2558);
      const v2566 = stdlib.ge(v2189, v2565);
      stdlib.assert(v2566, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Limit reached',
        who: 'User_buyTicket'
        });
      const v2568 = stdlib.safeAdd(v2558, v2560);
      const v2569 = stdlib.le(v2568, v2184);
      stdlib.assert(v2569, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Cannot buy more tickets than balance',
        who: 'User_buyTicket'
        });
      const v2571 = stdlib.safeMul(v2558, v2188);
      ;
      const v2675 = stdlib.add(v2300, v2571);
      const v2677 = stdlib.Array_set(v2299, '0', v2675);
      const v2678 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '0'), v2677);
      ;
      ;
      await stdlib.mapSet(map1, ctc1, v2549, ctc3, v2565);
      const v2703 = {
        address: v2549,
        amount: v2558
        };
      null;
      const v2704 = v2236.buyers;
      await stdlib.mapSet(map0, ctc3, v2704, ctc1, v2549);
      const v2705 = stdlib.safeAdd(v2295, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:203:33:decimal', stdlib.UInt_max, '1'));
      const v2706 = stdlib.eq(v2705, v2186);
      let v2707;
      if (v2706) {
        v2707 = true;
        }
      else {
        const v2709 = stdlib.le(v2705, v2186);
        let v2710;
        if (v2709) {
          const v2711 = stdlib.safeAdd(v2295, v2558);
          const v2712 = stdlib.ge(v2711, v2186);
          v2710 = v2712;
          }
        else {
          v2710 = false;
          }
        v2707 = v2710;
        }
      if (v2707) {
        const v2713 = true;
        const v2714 = await txn1.getOutput('User_buyTicket', 'v2713', ctc8, v2713);
        if (v1511) {
          stdlib.protect(ctc0, await interact.out(v2553, v2714), {
            at: './raffle_token_v2.rsh:166:11:application',
            fs: ['at ./raffle_token_v2.rsh:166:11:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:11:function exp)', 'at ./raffle_token_v2.rsh:209:16:application call to "ret" (defined at: ./raffle_token_v2.rsh:186:15:function exp)', 'at ./raffle_token_v2.rsh:186:15:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:186:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2723 = v2236.keepGoing;
        const v2724 = v2236.percent;
        const v2729 = stdlib.safeAdd(v2295, v2558);
        const v2731 = stdlib.safeAdd(v2296, v2571);
        const v2733 = stdlib.safeSub(v2297, v2558);
        const v2735 = stdlib.safeAdd(v2704, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:217:44:decimal', stdlib.UInt_max, '1'));
        const v2736 = ['Some', v2549];
        const v2737 = {
          bal: v2731,
          buyers: v2735,
          currentUserNumber: v2729,
          keepGoing: v2723,
          percent: v2724,
          raffleBal: v2298,
          ticketsLeft: v2733,
          winner: v2736
          };
        const v6390 = v2737;
        const v6392 = v2552;
        const v6393 = v2678;
        const v6394 = v2244;
        const v6395 = v2737.keepGoing;
        if (v6395) {
          const v6396 = stdlib.ge(v2552, v2227);
          const v6397 = v2737.currentUserNumber;
          const v6398 = v2737.bal;
          const v6399 = v2737.ticketsLeft;
          const v6400 = v2737.raffleBal;
          const v6401 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          const v6402 = v6401[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v6404 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          const v6405 = v6404[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          ;
          const v6406 = stdlib.sub(v6405, v6405);
          const v6407 = stdlib.Array_set(v6404, '0', v6406);
          const v6408 = stdlib.Array_set(v2678, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6407);
          ;
          const v6409 = v6408[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
          const v6410 = v6409[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v2739 = true;
        const v2740 = await txn1.getOutput('User_buyTicket', 'v2739', ctc8, v2739);
        if (v1511) {
          stdlib.protect(ctc0, await interact.out(v2553, v2740), {
            at: './raffle_token_v2.rsh:166:11:application',
            fs: ['at ./raffle_token_v2.rsh:166:11:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:11:function exp)', 'at ./raffle_token_v2.rsh:220:16:application call to "ret" (defined at: ./raffle_token_v2.rsh:186:15:function exp)', 'at ./raffle_token_v2.rsh:186:15:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:186:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2749 = v2236.keepGoing;
        const v2750 = v2236.percent;
        const v2753 = v2236.winner;
        const v2755 = stdlib.safeAdd(v2295, v2558);
        const v2757 = stdlib.safeAdd(v2296, v2571);
        const v2759 = stdlib.safeSub(v2297, v2558);
        const v2761 = stdlib.safeAdd(v2704, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:227:44:decimal', stdlib.UInt_max, '1'));
        const v2762 = {
          bal: v2757,
          buyers: v2761,
          currentUserNumber: v2755,
          keepGoing: v2749,
          percent: v2750,
          raffleBal: v2298,
          ticketsLeft: v2759,
          winner: v2753
          };
        const v6411 = v2762;
        const v6413 = v2552;
        const v6414 = v2678;
        const v6415 = v2244;
        const v6416 = v2762.keepGoing;
        if (v6416) {
          const v6417 = stdlib.ge(v2552, v2227);
          const v6418 = v2762.currentUserNumber;
          const v6419 = v2762.bal;
          const v6420 = v2762.ticketsLeft;
          const v6421 = v2762.raffleBal;
          const v6422 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          const v6423 = v6422[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v6425 = v2678[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          const v6426 = v6425[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
          ;
          const v6427 = stdlib.sub(v6426, v6426);
          const v6428 = stdlib.Array_set(v6425, '0', v6427);
          const v6429 = stdlib.Array_set(v2678, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6428);
          ;
          const v6430 = v6429[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
          const v6431 = v6430[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      break;
      }
    case 'User_claim0_310': {
      const v2900 = v2550[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_310': {
      const v3247 = v2550[1];
      return;
      break;
      }
    case 'User_end0_310': {
      const v3594 = v2550[1];
      return;
      break;
      }
    case 'User_optin0_310': {
      const v3941 = v2550[1];
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc8,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_310: ctc13,
    User_claim0_310: ctc12,
    User_determinWinnerAfterDeadline0_310: ctc12,
    User_end0_310: ctc12,
    User_optin0_310: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3]);
  const v2333 = ctc.selfAddress();
  const v2335 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token_v2.rsh:1:23:application',
    fs: ['at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_claim0_310" (defined at: ./raffle_token_v2.rsh:244:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2337 = v2236.winner;
  const v2338 = {
    None: 0,
    Some: 1
    }[v2337[0]];
  const v2339 = stdlib.eq(v2338, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2339, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_claim0_310" (defined at: ./raffle_token_v2.rsh:244:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  stdlib.assert(v2284, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_claim0_310" (defined at: ./raffle_token_v2.rsh:244:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v2343 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '1')];
  const v2344 = v2343[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '0')];
  const v2345 = stdlib.le(v2298, v2344);
  stdlib.assert(v2345, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:251:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_claim0_310" (defined at: ./raffle_token_v2.rsh:244:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v2348 = stdlib.fromSome(v2337, v2180);
  const v2349 = stdlib.addressEq(v2348, v2333);
  stdlib.assert(v2349, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_claim0_310" (defined at: ./raffle_token_v2.rsh:244:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v2354 = ['User_claim0_310', v2335];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300, v2354],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:257:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:257:14:decimal', stdlib.UInt_max, '0'), v2182], [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:257:28:decimal', stdlib.UInt_max, '0'), v2191]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
      
      switch (v2550[0]) {
        case 'User_buyTicket0_310': {
          const v2553 = v2550[1];
          
          break;
          }
        case 'User_claim0_310': {
          const v2900 = v2550[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v2930 = v2236.winner;
          const v2936 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '1')];
          const v2937 = v2936[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '0')];
          const v2941 = stdlib.fromSome(v2930, v2180);
          ;
          ;
          ;
          const v3134 = stdlib.sub(v2937, v2937);
          const v3136 = stdlib.Array_set(v2936, '0', v3134);
          const v3137 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:259:57:application', stdlib.UInt_max, '1'), v3136);
          sim_r.txns.push({
            kind: 'from',
            to: v2941,
            tok: v2191
            });
          const v3138 = v3137[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:43:application', stdlib.UInt_max, '0')];
          const v3139 = v3138[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:43:application', stdlib.UInt_max, '0')];
          const v3140 = stdlib.safeMul(v3139, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:54:decimal', stdlib.UInt_max, '5'));
          const v3141 = stdlib.safeDiv(v3140, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:58:decimal', stdlib.UInt_max, '100'));
          const v3144 = stdlib.safeSub(v3139, v3141);
          const v3150 = stdlib.sub(v3139, v3144);
          const v3152 = stdlib.Array_set(v3138, '0', v3150);
          const v3153 = stdlib.Array_set(v3137, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:261:60:application', stdlib.UInt_max, '0'), v3152);
          sim_r.txns.push({
            kind: 'from',
            to: v2180,
            tok: v2182
            });
          const v3154 = true;
          const v3155 = await txn1.getOutput('User_claim', 'v3154', ctc8, v3154);
          
          const v3161 = v2236.buyers;
          const v3164 = v2236.percent;
          const v3168 = v3153[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:272:25:application', stdlib.UInt_max, '0')];
          const v3169 = v3168[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:272:25:application', stdlib.UInt_max, '0')];
          const v3170 = {
            bal: v3169,
            buyers: v3161,
            currentUserNumber: v2295,
            keepGoing: false,
            percent: v3164,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ticketsLeft: v2297,
            winner: v2930
            };
          const v6558 = v3170;
          const v6560 = v2552;
          const v6561 = v3153;
          const v6562 = v2244;
          const v6563 = v3170.keepGoing;
          if (v6563) {
            const v6565 = v3170.currentUserNumber;
            const v6566 = v3170.bal;
            const v6567 = v3170.ticketsLeft;
            const v6568 = v3170.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: undefined /* Nothing */
              });
            const v6574 = stdlib.sub(v3169, v3169);
            const v6575 = stdlib.Array_set(v3168, '0', v6574);
            const v6576 = stdlib.Array_set(v3153, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6575);
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2182
              });
            const v6577 = v6576[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
            const v6578 = v6577[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2191
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2191
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2182
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_determinWinnerAfterDeadline0_310': {
          const v3247 = v2550[1];
          
          break;
          }
        case 'User_end0_310': {
          const v3594 = v2550[1];
          
          break;
          }
        case 'User_optin0_310': {
          const v3941 = v2550[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
  switch (v2550[0]) {
    case 'User_buyTicket0_310': {
      const v2553 = v2550[1];
      return;
      break;
      }
    case 'User_claim0_310': {
      const v2900 = v2550[1];
      undefined /* setApiDetails */;
      const v2930 = v2236.winner;
      const v2931 = {
        None: 0,
        Some: 1
        }[v2930[0]];
      const v2932 = stdlib.eq(v2931, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2932, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      stdlib.assert(v2284, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v2936 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '1')];
      const v2937 = v2936[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:251:33:application', stdlib.UInt_max, '0')];
      const v2938 = stdlib.le(v2298, v2937);
      stdlib.assert(v2938, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:251:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v2941 = stdlib.fromSome(v2930, v2180);
      const v2942 = stdlib.addressEq(v2941, v2549);
      stdlib.assert(v2942, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      ;
      const v3117 = stdlib.ge(v2552, v2227);
      stdlib.assert(v3117, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:258:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:258:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v3134 = stdlib.sub(v2937, v2937);
      const v3136 = stdlib.Array_set(v2936, '0', v3134);
      const v3137 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:259:57:application', stdlib.UInt_max, '1'), v3136);
      ;
      const v3138 = v3137[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:43:application', stdlib.UInt_max, '0')];
      const v3139 = v3138[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:43:application', stdlib.UInt_max, '0')];
      const v3140 = stdlib.safeMul(v3139, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:54:decimal', stdlib.UInt_max, '5'));
      const v3141 = stdlib.safeDiv(v3140, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:260:58:decimal', stdlib.UInt_max, '100'));
      const v3144 = stdlib.safeSub(v3139, v3141);
      const v3150 = stdlib.sub(v3139, v3144);
      const v3152 = stdlib.Array_set(v3138, '0', v3150);
      const v3153 = stdlib.Array_set(v3137, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:261:60:application', stdlib.UInt_max, '0'), v3152);
      ;
      const v3154 = true;
      const v3155 = await txn1.getOutput('User_claim', 'v3154', ctc8, v3154);
      if (v1511) {
        stdlib.protect(ctc0, await interact.out(v2900, v3155), {
          at: './raffle_token_v2.rsh:244:11:application',
          fs: ['at ./raffle_token_v2.rsh:244:11:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:11:function exp)', 'at ./raffle_token_v2.rsh:262:12:application call to "k" (defined at: ./raffle_token_v2.rsh:258:13:function exp)', 'at ./raffle_token_v2.rsh:258:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:258:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v3161 = v2236.buyers;
      const v3164 = v2236.percent;
      const v3168 = v3153[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:272:25:application', stdlib.UInt_max, '0')];
      const v3169 = v3168[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:272:25:application', stdlib.UInt_max, '0')];
      const v3170 = {
        bal: v3169,
        buyers: v3161,
        currentUserNumber: v2295,
        keepGoing: false,
        percent: v3164,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ticketsLeft: v2297,
        winner: v2930
        };
      const v6558 = v3170;
      const v6560 = v2552;
      const v6561 = v3153;
      const v6562 = v2244;
      const v6563 = v3170.keepGoing;
      if (v6563) {
        const v6565 = v3170.currentUserNumber;
        const v6566 = v3170.bal;
        const v6567 = v3170.ticketsLeft;
        const v6568 = v3170.raffleBal;
        return;
        }
      else {
        ;
        const v6574 = stdlib.sub(v3169, v3169);
        const v6575 = stdlib.Array_set(v3168, '0', v6574);
        const v6576 = stdlib.Array_set(v3153, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6575);
        ;
        const v6577 = v6576[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
        const v6578 = v6577[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_determinWinnerAfterDeadline0_310': {
      const v3247 = v2550[1];
      return;
      break;
      }
    case 'User_end0_310': {
      const v3594 = v2550[1];
      return;
      break;
      }
    case 'User_optin0_310': {
      const v3941 = v2550[1];
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc8,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_310: ctc13,
    User_claim0_310: ctc12,
    User_determinWinnerAfterDeadline0_310: ctc12,
    User_end0_310: ctc12,
    User_optin0_310: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3]);
  const v2358 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token_v2.rsh:1:23:application',
    fs: ['at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_determinWinnerAfterDeadline0_310" (defined at: ./raffle_token_v2.rsh:278:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'in',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v2360 = v2236.winner;
  const v2361 = {
    None: 0,
    Some: 1
    }[v2360[0]];
  const v2362 = stdlib.eq(v2361, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2362, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_determinWinnerAfterDeadline0_310" (defined at: ./raffle_token_v2.rsh:278:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_determinWinnerAfterDeadline'
    });
  stdlib.assert(v2284, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_determinWinnerAfterDeadline0_310" (defined at: ./raffle_token_v2.rsh:278:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v2369 = ['User_determinWinnerAfterDeadline0_310', v2358];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300, v2369],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:288:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:288:14:decimal', stdlib.UInt_max, '0'), v2182], [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:288:28:decimal', stdlib.UInt_max, '0'), v2191]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
      
      switch (v2550[0]) {
        case 'User_buyTicket0_310': {
          const v2553 = v2550[1];
          
          break;
          }
        case 'User_claim0_310': {
          const v2900 = v2550[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_310': {
          const v3247 = v2550[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_determinWinnerAfterDeadline"
            });
          ;
          ;
          ;
          const v3527 = v2236.buyers;
          const v3528 = stdlib.safeMod(v2187, v3527);
          const v3529 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3528, ctc1), null);
          const v3534 = stdlib.fromSome(v3529, v2194);
          const v3535 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v3534', ctc1, v3534);
          
          const v3543 = v2236.keepGoing;
          const v3544 = v2236.percent;
          const v3548 = ['Some', v3534];
          const v3549 = {
            bal: v2296,
            buyers: v3527,
            currentUserNumber: v2295,
            keepGoing: v3543,
            percent: v3544,
            raffleBal: v2298,
            ticketsLeft: v2297,
            winner: v3548
            };
          const v6705 = v3549;
          const v6707 = v2552;
          const v6708 = v2243;
          const v6709 = v2244;
          const v6710 = v3549.keepGoing;
          if (v6710) {
            const v6712 = v3549.currentUserNumber;
            const v6713 = v3549.bal;
            const v6714 = v3549.ticketsLeft;
            const v6715 = v3549.raffleBal;
            const v6716 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            const v6717 = v6716[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v6719 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            const v6720 = v6719[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: undefined /* Nothing */
              });
            const v6721 = stdlib.sub(v6720, v6720);
            const v6722 = stdlib.Array_set(v6719, '0', v6721);
            const v6723 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6722);
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2182
              });
            const v6724 = v6723[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
            const v6725 = v6724[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2191
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2191
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2182
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_end0_310': {
          const v3594 = v2550[1];
          
          break;
          }
        case 'User_optin0_310': {
          const v3941 = v2550[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
  switch (v2550[0]) {
    case 'User_buyTicket0_310': {
      const v2553 = v2550[1];
      return;
      break;
      }
    case 'User_claim0_310': {
      const v2900 = v2550[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_310': {
      const v3247 = v2550[1];
      undefined /* setApiDetails */;
      const v3302 = v2236.winner;
      const v3303 = {
        None: 0,
        Some: 1
        }[v3302[0]];
      const v3304 = stdlib.eq(v3303, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3304, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_determinWinnerAfterDeadline'
        });
      stdlib.assert(v2284, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      ;
      ;
      ;
      const v3525 = stdlib.ge(v2552, v2227);
      stdlib.assert(v3525, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:289:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:289:13:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v3527 = v2236.buyers;
      const v3528 = stdlib.safeMod(v2187, v3527);
      const v3529 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3528, ctc1), null);
      const v3530 = {
        None: 0,
        Some: 1
        }[v3529[0]];
      const v3531 = stdlib.eq(v3530, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3531, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:291:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:289:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:289:13:function exp)'],
        msg: 'Error as the buyer for the winner index does not exist',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v3534 = stdlib.fromSome(v3529, v2194);
      const v3535 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v3534', ctc1, v3534);
      if (v1511) {
        stdlib.protect(ctc0, await interact.out(v3247, v3535), {
          at: './raffle_token_v2.rsh:278:11:application',
          fs: ['at ./raffle_token_v2.rsh:278:11:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:11:function exp)', 'at ./raffle_token_v2.rsh:296:12:application call to "k" (defined at: ./raffle_token_v2.rsh:289:13:function exp)', 'at ./raffle_token_v2.rsh:289:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:289:13:function exp)'],
          msg: 'out',
          who: 'User_determinWinnerAfterDeadline'
          });
        }
      else {
        }
      
      const v3543 = v2236.keepGoing;
      const v3544 = v2236.percent;
      const v3548 = ['Some', v3534];
      const v3549 = {
        bal: v2296,
        buyers: v3527,
        currentUserNumber: v2295,
        keepGoing: v3543,
        percent: v3544,
        raffleBal: v2298,
        ticketsLeft: v2297,
        winner: v3548
        };
      const v6705 = v3549;
      const v6707 = v2552;
      const v6708 = v2243;
      const v6709 = v2244;
      const v6710 = v3549.keepGoing;
      if (v6710) {
        const v6712 = v3549.currentUserNumber;
        const v6713 = v3549.bal;
        const v6714 = v3549.ticketsLeft;
        const v6715 = v3549.raffleBal;
        const v6716 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v6717 = v6716[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v6719 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v6720 = v6719[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        ;
        const v6721 = stdlib.sub(v6720, v6720);
        const v6722 = stdlib.Array_set(v6719, '0', v6721);
        const v6723 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6722);
        ;
        const v6724 = v6723[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
        const v6725 = v6724[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_end0_310': {
      const v3594 = v2550[1];
      return;
      break;
      }
    case 'User_optin0_310': {
      const v3941 = v2550[1];
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc8,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_310: ctc13,
    User_claim0_310: ctc12,
    User_determinWinnerAfterDeadline0_310: ctc12,
    User_end0_310: ctc12,
    User_optin0_310: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3]);
  const v2371 = ctc.selfAddress();
  const v2373 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token_v2.rsh:1:23:application',
    fs: ['at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_end0_310" (defined at: ./raffle_token_v2.rsh:305:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'in',
    who: 'User_end'
    });
  const v2374 = stdlib.addressEq(v2371, v2180);
  const v2375 = stdlib.addressEq(v2371, v2194);
  const v2376 = v2374 ? true : v2375;
  stdlib.assert(v2376, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_end0_310" (defined at: ./raffle_token_v2.rsh:305:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_end'
    });
  const v2379 = stdlib.eq(v2297, v2184);
  stdlib.assert(v2379, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_token_v2.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_end0_310" (defined at: ./raffle_token_v2.rsh:305:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'Cannot end contract',
    who: 'User_end'
    });
  const v2384 = ['User_end0_310', v2373];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300, v2384],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:314:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:314:14:decimal', stdlib.UInt_max, '0'), v2182], [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:314:28:decimal', stdlib.UInt_max, '0'), v2191]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
      
      switch (v2550[0]) {
        case 'User_buyTicket0_310': {
          const v2553 = v2550[1];
          
          break;
          }
        case 'User_claim0_310': {
          const v2900 = v2550[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_310': {
          const v3247 = v2550[1];
          
          break;
          }
        case 'User_end0_310': {
          const v3594 = v2550[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_end"
            });
          ;
          ;
          const v3720 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '1')];
          const v3721 = v3720[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '0')];
          ;
          const v3907 = true;
          const v3908 = await txn1.getOutput('User_end', 'v3907', ctc8, v3907);
          
          const v3920 = stdlib.sub(v3721, v3721);
          const v3922 = stdlib.Array_set(v3720, '0', v3920);
          const v3923 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:317:57:application', stdlib.UInt_max, '1'), v3922);
          sim_r.txns.push({
            kind: 'from',
            to: v2549,
            tok: v2191
            });
          const v3925 = v2236.buyers;
          const v3928 = v2236.percent;
          const v3931 = v2236.winner;
          const v3932 = {
            bal: v2296,
            buyers: v3925,
            currentUserNumber: v2295,
            keepGoing: false,
            percent: v3928,
            raffleBal: v2298,
            ticketsLeft: v2297,
            winner: v3931
            };
          const v6852 = v3932;
          const v6854 = v2552;
          const v6855 = v3923;
          const v6856 = v2244;
          const v6857 = v3932.keepGoing;
          if (v6857) {
            const v6858 = stdlib.ge(v2552, v2227);
            const v6859 = v3932.currentUserNumber;
            const v6860 = v3932.bal;
            const v6861 = v3932.ticketsLeft;
            const v6862 = v3932.raffleBal;
            const v6863 = v3923[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            const v6864 = v6863[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v6866 = v3923[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            const v6867 = v6866[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: undefined /* Nothing */
              });
            const v6868 = stdlib.sub(v6867, v6867);
            const v6869 = stdlib.Array_set(v6866, '0', v6868);
            const v6870 = stdlib.Array_set(v3923, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6869);
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2182
              });
            const v6871 = v6870[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
            const v6872 = v6871[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2191
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2191
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2182
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_optin0_310': {
          const v3941 = v2550[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
  switch (v2550[0]) {
    case 'User_buyTicket0_310': {
      const v2553 = v2550[1];
      return;
      break;
      }
    case 'User_claim0_310': {
      const v2900 = v2550[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_310': {
      const v3247 = v2550[1];
      return;
      break;
      }
    case 'User_end0_310': {
      const v3594 = v2550[1];
      undefined /* setApiDetails */;
      const v3665 = stdlib.addressEq(v2549, v2180);
      const v3666 = stdlib.addressEq(v2549, v2194);
      const v3667 = v3665 ? true : v3666;
      stdlib.assert(v3667, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_end'
        });
      const v3670 = stdlib.eq(v2297, v2184);
      stdlib.assert(v3670, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_token_v2.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)', 'at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)'],
        msg: 'Cannot end contract',
        who: 'User_end'
        });
      ;
      ;
      const v3720 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '1')];
      const v3721 = v3720[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:134:37:dot', stdlib.UInt_max, '0')];
      ;
      const v3907 = true;
      const v3908 = await txn1.getOutput('User_end', 'v3907', ctc8, v3907);
      if (v1511) {
        stdlib.protect(ctc0, await interact.out(v3594, v3908), {
          at: './raffle_token_v2.rsh:305:11:application',
          fs: ['at ./raffle_token_v2.rsh:305:11:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:11:function exp)', 'at ./raffle_token_v2.rsh:316:14:application call to "ret" (defined at: ./raffle_token_v2.rsh:315:15:function exp)', 'at ./raffle_token_v2.rsh:315:15:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:315:15:function exp)'],
          msg: 'out',
          who: 'User_end'
          });
        }
      else {
        }
      
      const v3920 = stdlib.sub(v3721, v3721);
      const v3922 = stdlib.Array_set(v3720, '0', v3920);
      const v3923 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:317:57:application', stdlib.UInt_max, '1'), v3922);
      ;
      const v3925 = v2236.buyers;
      const v3928 = v2236.percent;
      const v3931 = v2236.winner;
      const v3932 = {
        bal: v2296,
        buyers: v3925,
        currentUserNumber: v2295,
        keepGoing: false,
        percent: v3928,
        raffleBal: v2298,
        ticketsLeft: v2297,
        winner: v3931
        };
      const v6852 = v3932;
      const v6854 = v2552;
      const v6855 = v3923;
      const v6856 = v2244;
      const v6857 = v3932.keepGoing;
      if (v6857) {
        const v6858 = stdlib.ge(v2552, v2227);
        const v6859 = v3932.currentUserNumber;
        const v6860 = v3932.bal;
        const v6861 = v3932.ticketsLeft;
        const v6862 = v3932.raffleBal;
        const v6863 = v3923[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v6864 = v6863[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v6866 = v3923[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v6867 = v6866[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        ;
        const v6868 = stdlib.sub(v6867, v6867);
        const v6869 = stdlib.Array_set(v6866, '0', v6868);
        const v6870 = stdlib.Array_set(v3923, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v6869);
        ;
        const v6871 = v6870[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
        const v6872 = v6871[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_310': {
      const v3941 = v2550[1];
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc8,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_310: ctc13,
    User_claim0_310: ctc12,
    User_determinWinnerAfterDeadline0_310: ctc12,
    User_end0_310: ctc12,
    User_optin0_310: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3]);
  const v2327 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_token_v2.rsh:1:23:application',
    fs: ['at ./raffle_token_v2.rsh:234:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:234:26:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to "runUser_optin0_310" (defined at: ./raffle_token_v2.rsh:234:10:function exp)', 'at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2331 = ['User_optin0_310', v2327];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2180, v2181, v2182, v2183, v2184, v2185, v2186, v2187, v2188, v2189, v2191, v2192, v2193, v2194, v2227, v2236, v2240, v2243, v2244, v2284, v2295, v2296, v2297, v2298, v2299, v2300, v2331],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:236:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:236:14:decimal', stdlib.UInt_max, '0'), v2182], [stdlib.checkedBigNumberify('./raffle_token_v2.rsh:236:28:decimal', stdlib.UInt_max, '0'), v2191]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
      
      switch (v2550[0]) {
        case 'User_buyTicket0_310': {
          const v2553 = v2550[1];
          
          break;
          }
        case 'User_claim0_310': {
          const v2900 = v2550[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_310': {
          const v3247 = v2550[1];
          
          break;
          }
        case 'User_end0_310': {
          const v3594 = v2550[1];
          
          break;
          }
        case 'User_optin0_310': {
          const v3941 = v2550[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          ;
          const v4282 = null;
          const v4283 = await txn1.getOutput('User_optin', 'v4282', ctc0, v4282);
          
          const v6999 = v2236;
          const v7001 = v2552;
          const v7002 = v2243;
          const v7003 = v2244;
          const v7004 = v2236.keepGoing;
          if (v7004) {
            const v7005 = stdlib.ge(v2552, v2227);
            const v7006 = v2236.currentUserNumber;
            const v7007 = v2236.bal;
            const v7008 = v2236.ticketsLeft;
            const v7009 = v2236.raffleBal;
            const v7010 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            const v7011 = v7010[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v7013 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            const v7014 = v7013[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: undefined /* Nothing */
              });
            const v7015 = stdlib.sub(v7014, v7014);
            const v7016 = stdlib.Array_set(v7013, '0', v7015);
            const v7017 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v7016);
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2182
              });
            const v7018 = v7017[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
            const v7019 = v7018[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2194,
              tok: v2191
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2191
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2182
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
    tys: [ctc1, ctc6, ctc7, ctc8, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc8, ctc3, ctc3, ctc3, ctc3, ctc10, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2550], secs: v2552, time: v2551, didSend: v1511, from: v2549 } = txn1;
  switch (v2550[0]) {
    case 'User_buyTicket0_310': {
      const v2553 = v2550[1];
      return;
      break;
      }
    case 'User_claim0_310': {
      const v2900 = v2550[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_310': {
      const v3247 = v2550[1];
      return;
      break;
      }
    case 'User_end0_310': {
      const v3594 = v2550[1];
      return;
      break;
      }
    case 'User_optin0_310': {
      const v3941 = v2550[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v4282 = null;
      const v4283 = await txn1.getOutput('User_optin', 'v4282', ctc0, v4282);
      if (v1511) {
        stdlib.protect(ctc0, await interact.out(v3941, v4283), {
          at: './raffle_token_v2.rsh:234:11:application',
          fs: ['at ./raffle_token_v2.rsh:234:11:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:234:11:function exp)', 'at ./raffle_token_v2.rsh:239:14:application call to "ret" (defined at: ./raffle_token_v2.rsh:237:15:function exp)', 'at ./raffle_token_v2.rsh:237:15:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:237:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6999 = v2236;
      const v7001 = v2552;
      const v7002 = v2243;
      const v7003 = v2244;
      const v7004 = v2236.keepGoing;
      if (v7004) {
        const v7005 = stdlib.ge(v2552, v2227);
        const v7006 = v2236.currentUserNumber;
        const v7007 = v2236.bal;
        const v7008 = v2236.ticketsLeft;
        const v7009 = v2236.raffleBal;
        const v7010 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v7011 = v7010[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v7013 = v2243[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        const v7014 = v7013[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:164:31:application', stdlib.UInt_max, '0')];
        ;
        const v7015 = stdlib.sub(v7014, v7014);
        const v7016 = stdlib.Array_set(v7013, '0', v7015);
        const v7017 = stdlib.Array_set(v2243, stdlib.checkedBigNumberify('./raffle_token_v2.rsh:328:41:application', stdlib.UInt_max, '0'), v7016);
        ;
        const v7018 = v7017[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '1')];
        const v7019 = v7018[stdlib.checkedBigNumberify('./raffle_token_v2.rsh:329:19:application', stdlib.UInt_max, '0')];
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
const _ALGO = {
  ABI: {
    impure: [`User_buyTicket(uint64)byte`, `User_claim()byte`, `User_determinWinnerAfterDeadline()address`, `User_end()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`],
    pure: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`],
    sigs: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`, `User_buyTicket(uint64)byte`, `User_claim()byte`, `User_determinWinnerAfterDeadline()address`, `User_end()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`]
    },
  GlobalNumByteSlice: 5,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCATAAEECAVHT1dfZ2+gjQbUkwEQIRE+d38mBQABAQEAAQMBAjEYQQiNKGRJIls1ASVbNQIqZClkUCcEZFArZFCCEwQTblc7BBPv73gEF49QhgQZWV4pBCk3p/YEKWGf5AQ3R8qlBDf/IssEPvlimgQ/LOQuBHk5KVMEf5xxXwSBy9v1BKNB0cIEw2/+bgTcvIdTBN/ZIygE53cfLgTrF3JkNhoAjhMAcwAvAVwAUgGkAD8H3wCWAAEBdADvAB8A3QERAMsHxAfUAP8BjAA0ASQSRIgJKjQOFjUEMRkiEkSABBUffHU0BFCwI0M0ASQSRIgJDDQaFjUEQv/fNAEkEkSICPw0FxY1BEL/zzQBJBJEiAjsNBQWUQcINQRC/7w2GgE1CzQBJBJEiAjUJa8oJa8pNAtQiAmDiAl3NQRC/5s2GgE1CzQBJBJEiAizKCgrNAtQiAllIlUjEhZRBwg1BEL/eDQBJBJEiAiVNB0WNCYWUDQgFlA0HFA0IxZQNCUWUQcIUDQfFlA0JBZQNCdQNB4WUDUEQv9DNAEkEkSICGA0GVcQCDUEQv8xNAEkEkSICE40GVcpCDUEQv8fNAEkEkSICDw0HhY1BEL/DzQBJBJEiAgsNBlXMSE1BEL+/TYaARc1CyWvKjQLFlBQNQskNAESRIgICjQLIls1DDQLVwgJNQ2ABFTnYqw0DBZQNA1QsDQMiAi6NA0iVY0FBrIGtQa4BrsGvkL+pIARAAAAAAAAAAABAAAAAAAAAAA1C0L/rYARAAAAAAAAAAACAAAAAAAAAAA1C0L/lYARAAAAAAAAAAADAAAAAAAAAAA1C0L/fYARAAAAAAAAAAAEAAAAAAAAAAA1C0L/ZTQNI1s1DCWvKCWvKTEAUIgIIIgIFBc1DTQXNBoMRDQMIw9ENA00DAg1CzQfNAsPRDQMNA0INCQORDQMNCALNRQ0FjQPNA40FAgWXABcADUNNBQ0JogIOiEMKTEAUDQLFogIIDEANAwWUDULgAT4WMgANAtQsDQZJVs1KSEMKjQpFlAxAIgH/DQTIwhJNQ80IhJBBcojNQ40DkEF4SM1C4AIAAAAAAAACpk0CxZRBwhQsDQLFlEHCDUENBI0FAgWNCkjCBZQNBM0DAgWUDQZVxgBUDQZVxkIUDQQFlA0ETQMCRZQKTEAUFAyBjIHNA01FjUXNRg1GTQZVxgBF0EF3DQXNBoPNRQ0GSENWzUTNBkiWzUSNBmBKVs1ETQZIQ5bNRA0FlcAEUk1DyJbNQ40KDQnUDQmFlA0JRZRBwhQNCQWUDQjFlA0IhZQNCEWUDQgFlA0HxZQNB4WUDQdFlA0HFA0G1A0GhZQNBlQNBcWUDQWUDQVFlA0FBZRBwhQNBMWUDQSFlA0ERZQNBAWUDQPUDQOFlAkMgY1AjUBKksBVwB/ZylLAVd/f2cnBEsBV/5/ZytMgf0CIQ1YZyg0ARY0AhZQZzEZIhJEiAanNANA/JJC/IU0GVcxIUk1CyJVIxJENBRENBZXERFJNQ0iWzUMNBA0DA5ENCg0C4gGLkk1DzEAEkQyBzQaD0Q0FjQNNAxJCRZcAFwRNQ40DDQeNA+IBgU0DlcAEUk1ECJbSTUPSSEEC4FkCgk1DTQONBA0DzQNCRZcAFwANQw0DTQmNCiIBdUjNQ2ACAAAAAAAAAxSNA0WUQcIULA0DRZRBwg1BDQMVwARVwAINBlXCAhQNBMWUCpQNBlXGQhQJa9QNBEWUDQLUDIGMgc0DDUWNRc1GDUZQv5UNBlXMSEiVSISRDQURDIHNBoPRDQZJVs1DSgyAyo0ITQNGBZQiAVpSTUMIlUjEkQ0GzQMiAVRNQuACAAAAAAAAA3ONAtQsDQLNQQ0EhY0DRZQNBMWUDQZVxgBUDQZVxkIUDQQFlA0ERZQKTQLUFAyBjIHNRc1GDUZQv3ZMQA0KBIxADQbEhFENBE0JBJENBZXERFJNQ0iWzUMIzULgAgAAAAAAAAPQzQLFlEHCFCwNAsWUQcINQQ0DDQeMQCIBMQ0EhY0GVcICFA0ExZQKlA0GVcZCFA0EBZQNBEWUDQZVzEhUDIGMgc0FjQNNAxJCRZcAFwRNRY1FzUYNRlC/VYoNQuACAAAAAAAABC6NAtQsDQLNQQyBjIHNRc1GEL9NjEANSg0CyJbNQ00C1cIHjUnNAuBJls1JjQLVy4BFzUlNAuBL1s1JDQLgTdbNSM0C4E/WzUiNAshBVs1ITQLIQZbNSA0CyEHWzUfNAshCFs1DDQLIQlbNR40CyEKWzUdNAtXdyA1HDQLV5cgNRuABNeHOwQ0DRZQNCdQNCYWUDQlFlEHCFA0JBZQNCMWUDQiFlA0IRZQNCAWUDQfFlA0DBZQNB4WUDQdFlA0HFA0G1CwNA2IA9IhD69JNQtJUEk1DUlXABElr1wAXABJNQtJVxERJa9cAFwRNQ40HjQmE0Q0IjQkDkQ0IIH///////////8BDEQ0ICMPRCELiAN/IjQmMgqIA18hC4gDciI0HjIKiANSNCg0J1A0JhZQNCUWUQcIUDQkFlA0IxZQNCIWUDQhFlA0IBZQNB8WUDQMFlA0HhZQNB0WUDQcUDQbUDQOUIGcAa9QIzIGQvx7IzQBEkRJVwAgNShJVyAeNSdJIRBbNSZJV0YBFzUlSSEFWzUkSSEGWzUjSSEHWzUiSSEIWzUhSSEJWzUgSSEKWzUfSSERWzUMSSESWzUeSYGHAVs1HUlXjyA1HElXryA1G1fPIjUONAsXNQ2ABNUVGRQ0DRZQsDQNiAKxNAyIAro0DlcRETUNNA40DUkiWzQdCBZcAFwRNQs0HTQeiALXNCgxABJEMgc0Iwg1GjQLVwARVwAIJa9QJa9QKVCACAAAAAAAAAAFUDQLVxERVwAIUDQkFlAhDq9QMgYyBzQLNAw1FTUWNRc1GDUZQvruiAI4IQuIAi02GgE1C0L9qIgCKDYaATULQv74iAIdNhoBNQtC+TciMTQSRCEEMTUSRCIxNhJEIjE3EkSIAf2BjQOvIiJC+0dC+a5C+31C/EpC/MJC/UI0DzQiDkEAETQTNAwINCIPNQs0CzUOQvogIjULQv/zIzULgAgAAAAAAAAKszQLFlEHCFCwNAsWUQcINQQ0EjQUCBY0KSMIFlA0EzQMCBZQNBlXGAFQNBlXGQhQNBAWUDQRNAwJFlA0GVcxIVAyBjIHNA01FjUXNRg1GUL6GzQWVwARSTUMIls1CzQVNBuIAWM0CzQmNBuIAS40FjQMNAtJCRZcAFwAVxERIls0HjQbiAEVIjQeMgoyCYgBYyI0JjIKMgmIAVkxGSEEEkSIAUQyCmAyCngJSTUGMgqIARVC+otITL9IiSKyASOyELIHsgiziSKyASSyELIUshGyErOJSIlMCUk1BjIJiADniQlJQf/uSTUGiADfiUlXACA1KElXIB41J0khEFs1JklXRgEXNSVJIQVbNSRJIQZbNSNJIQdbNSJJIQhbNSFJIQlbNSBJIQpbNR9JIRFbNR5JIRJbNR1JV4cgNRxJV6cgNRtJgccBWzUaSVfPUjUZSYGhAls1F0mBqQKBIlg1FkmBywJbNRVJgdMCI1gXNRRJgdQCWzUTSYHcAls1EkmB5AJbNRFJgewCWzUQSYH0AiEPWDUPgYUDWzUOibFC/ydJVwEATCJVTYm+SRZRBwhFBE1QiTQGCDUGiSM1A4lJIhJMNAISEUSJsUL+7zEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIk0BjQHSg9B/uZC/u6xshVC/s1MSb1A/rZLA4j/r0L+rjEWNAAjCEk1AAlHAzgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `27`,
    1000: `547`,
    1001: `548`,
    1002: `548`,
    1003: `549`,
    1004: `550`,
    1005: `550`,
    1006: `551`,
    1007: `552`,
    1008: `553`,
    1009: `553`,
    101: `27`,
    1010: `554`,
    1011: `555`,
    1012: `555`,
    1013: `556`,
    1014: `557`,
    1015: `558`,
    1016: `558`,
    1017: `559`,
    1018: `560`,
    1019: `560`,
    102: `27`,
    1020: `561`,
    1021: `562`,
    1022: `563`,
    1023: `563`,
    1024: `564`,
    1025: `565`,
    1026: `565`,
    1027: `565`,
    1028: `566`,
    1029: `567`,
    103: `27`,
    1030: `567`,
    1031: `568`,
    1032: `569`,
    1033: `570`,
    1034: `570`,
    1035: `571`,
    1036: `572`,
    1037: `573`,
    1038: `573`,
    1039: `574`,
    104: `27`,
    1040: `575`,
    1041: `576`,
    1042: `576`,
    1043: `577`,
    1044: `578`,
    1045: `579`,
    1046: `579`,
    1047: `580`,
    1048: `581`,
    1049: `581`,
    105: `27`,
    1050: `582`,
    1051: `583`,
    1052: `584`,
    1053: `585`,
    1054: `585`,
    1055: `587`,
    1056: `587`,
    1057: `588`,
    1058: `588`,
    1059: `589`,
    106: `27`,
    1060: `590`,
    1061: `590`,
    1062: `591`,
    1063: `591`,
    1064: `591`,
    1065: `592`,
    1066: `593`,
    1067: `594`,
    1068: `594`,
    1069: `595`,
    107: `27`,
    1070: `595`,
    1071: `595`,
    1072: `596`,
    1073: `597`,
    1074: `597`,
    1075: `598`,
    1076: `598`,
    1077: `599`,
    1078: `599`,
    1079: `599`,
    108: `27`,
    1080: `600`,
    1081: `601`,
    1082: `602`,
    1083: `603`,
    1084: `603`,
    1085: `603`,
    1086: `604`,
    1087: `604`,
    1088: `605`,
    1089: `606`,
    109: `27`,
    1090: `607`,
    1091: `608`,
    1092: `608`,
    1093: `609`,
    1094: `610`,
    1095: `610`,
    1096: `611`,
    1097: `612`,
    1098: `613`,
    1099: `614`,
    11: `2`,
    110: `27`,
    1100: `614`,
    1101: `615`,
    1102: `616`,
    1103: `617`,
    1104: `619`,
    1105: `619`,
    1106: `619`,
    1107: `621`,
    1108: `621`,
    1109: `622`,
    111: `27`,
    1110: `622`,
    1111: `622`,
    1112: `623`,
    1113: `623`,
    1114: `623`,
    1115: `625`,
    1116: `625`,
    1117: `626`,
    1118: `626`,
    1119: `626`,
    112: `27`,
    1120: `627`,
    1121: `628`,
    1122: `628`,
    1123: `629`,
    1124: `630`,
    1125: `631`,
    1126: `632`,
    1127: `633`,
    1128: `641`,
    1129: `641`,
    113: `27`,
    1130: `642`,
    1131: `650`,
    1132: `650`,
    1133: `651`,
    1134: `651`,
    1135: `651`,
    1136: `652`,
    1137: `653`,
    1138: `653`,
    1139: `654`,
    114: `27`,
    1140: `655`,
    1141: `656`,
    1142: `656`,
    1143: `657`,
    1144: `657`,
    1145: `658`,
    1146: `658`,
    1147: `659`,
    1148: `660`,
    1149: `668`,
    115: `27`,
    1150: `668`,
    1151: `669`,
    1152: `669`,
    1153: `670`,
    1154: `670`,
    1155: `670`,
    1156: `671`,
    1157: `672`,
    1158: `672`,
    1159: `673`,
    116: `27`,
    1160: `673`,
    1161: `674`,
    1162: `675`,
    1163: `683`,
    1164: `683`,
    1165: `684`,
    1166: `684`,
    1167: `685`,
    1168: `686`,
    1169: `691`,
    117: `27`,
    1170: `691`,
    1171: `692`,
    1172: `692`,
    1173: `693`,
    1174: `693`,
    1175: `694`,
    1176: `695`,
    1177: `696`,
    1178: `697`,
    1179: `697`,
    118: `27`,
    1180: `698`,
    1181: `698`,
    1182: `699`,
    1183: `699`,
    1184: `700`,
    1185: `700`,
    1186: `702`,
    1187: `702`,
    1188: `704`,
    1189: `704`,
    119: `27`,
    1190: `705`,
    1191: `705`,
    1192: `705`,
    1193: `706`,
    1194: `706`,
    1195: `707`,
    1196: `707`,
    1197: `707`,
    1198: `708`,
    1199: `709`,
    12: `2`,
    120: `27`,
    1200: `709`,
    1201: `710`,
    1202: `711`,
    1203: `712`,
    1204: `713`,
    1205: `713`,
    1206: `714`,
    1207: `715`,
    1208: `715`,
    1209: `716`,
    121: `27`,
    1210: `717`,
    1211: `717`,
    1212: `718`,
    1213: `719`,
    1214: `720`,
    1215: `720`,
    1216: `721`,
    1217: `721`,
    1218: `722`,
    1219: `722`,
    122: `27`,
    1220: `723`,
    1221: `723`,
    1222: `724`,
    1223: `724`,
    1224: `725`,
    1225: `726`,
    1226: `727`,
    1227: `727`,
    1228: `728`,
    1229: `728`,
    123: `27`,
    1230: `729`,
    1231: `729`,
    1232: `730`,
    1233: `730`,
    1234: `732`,
    1235: `732`,
    1236: `734`,
    1237: `734`,
    1238: `735`,
    1239: `735`,
    124: `27`,
    1240: `735`,
    1241: `736`,
    1242: `737`,
    1243: `737`,
    1244: `738`,
    1245: `738`,
    1246: `738`,
    1247: `738`,
    1248: `738`,
    1249: `738`,
    125: `27`,
    1250: `738`,
    1251: `738`,
    1252: `738`,
    1253: `738`,
    1254: `739`,
    1255: `739`,
    1256: `740`,
    1257: `741`,
    1258: `741`,
    1259: `741`,
    126: `27`,
    1260: `742`,
    1261: `743`,
    1262: `744`,
    1263: `744`,
    1264: `745`,
    1265: `746`,
    1266: `746`,
    1267: `746`,
    1268: `747`,
    1269: `747`,
    127: `27`,
    1270: `748`,
    1271: `748`,
    1272: `749`,
    1273: `749`,
    1274: `749`,
    1275: `750`,
    1276: `750`,
    1277: `750`,
    1278: `751`,
    1279: `751`,
    128: `27`,
    1280: `752`,
    1281: `752`,
    1282: `752`,
    1283: `753`,
    1284: `754`,
    1285: `754`,
    1286: `755`,
    1287: `756`,
    1288: `757`,
    1289: `758`,
    129: `27`,
    1290: `759`,
    1291: `759`,
    1292: `760`,
    1293: `760`,
    1294: `760`,
    1295: `761`,
    1296: `762`,
    1297: `763`,
    1298: `764`,
    1299: `765`,
    13: `2`,
    130: `27`,
    1300: `765`,
    1301: `766`,
    1302: `767`,
    1303: `768`,
    1304: `768`,
    1305: `769`,
    1306: `770`,
    1307: `770`,
    1308: `771`,
    1309: `771`,
    131: `27`,
    1310: `772`,
    1311: `772`,
    1312: `773`,
    1313: `773`,
    1314: `774`,
    1315: `774`,
    1316: `775`,
    1317: `775`,
    1318: `776`,
    1319: `776`,
    132: `27`,
    1320: `777`,
    1321: `777`,
    1322: `777`,
    1323: `779`,
    1324: `779`,
    1325: `780`,
    1326: `780`,
    1327: `780`,
    1328: `781`,
    1329: `782`,
    133: `27`,
    1330: `783`,
    1331: `784`,
    1332: `785`,
    1333: `793`,
    1334: `793`,
    1335: `794`,
    1336: `802`,
    1337: `802`,
    1338: `803`,
    1339: `803`,
    134: `27`,
    1340: `804`,
    1341: `805`,
    1342: `810`,
    1343: `810`,
    1344: `811`,
    1345: `812`,
    1346: `813`,
    1347: `813`,
    1348: `815`,
    1349: `816`,
    135: `27`,
    1350: `816`,
    1351: `817`,
    1352: `818`,
    1353: `818`,
    1354: `819`,
    1355: `819`,
    1356: `820`,
    1357: `821`,
    1358: `822`,
    1359: `823`,
    136: `27`,
    1360: `823`,
    1361: `823`,
    1362: `824`,
    1363: `825`,
    1364: `825`,
    1365: `826`,
    1366: `827`,
    1367: `828`,
    1368: `829`,
    1369: `830`,
    137: `27`,
    1370: `835`,
    1371: `835`,
    1372: `836`,
    1373: `836`,
    1374: `837`,
    1375: `837`,
    1376: `837`,
    1377: `838`,
    1378: `838`,
    1379: `839`,
    138: `27`,
    1380: `839`,
    1381: `839`,
    1382: `839`,
    1383: `839`,
    1384: `839`,
    1385: `839`,
    1386: `839`,
    1387: `839`,
    1388: `839`,
    1389: `840`,
    139: `27`,
    1390: `840`,
    1391: `841`,
    1392: `842`,
    1393: `843`,
    1394: `843`,
    1395: `844`,
    1396: `844`,
    1397: `845`,
    1398: `845`,
    1399: `846`,
    14: `2`,
    140: `27`,
    1400: `847`,
    1401: `847`,
    1402: `848`,
    1403: `849`,
    1404: `850`,
    1405: `850`,
    1406: `851`,
    1407: `852`,
    1408: `853`,
    1409: `853`,
    141: `27`,
    1410: `854`,
    1411: `854`,
    1412: `854`,
    1413: `855`,
    1414: `856`,
    1415: `856`,
    1416: `857`,
    1417: `857`,
    1418: `857`,
    1419: `858`,
    142: `27`,
    1420: `859`,
    1421: `859`,
    1422: `860`,
    1423: `861`,
    1424: `862`,
    1425: `862`,
    1426: `863`,
    1427: `864`,
    1428: `865`,
    1429: `866`,
    143: `27`,
    1430: `866`,
    1431: `867`,
    1432: `868`,
    1433: `869`,
    1434: `869`,
    1435: `870`,
    1436: `870`,
    1437: `871`,
    1438: `871`,
    1439: `872`,
    144: `27`,
    1440: `872`,
    1441: `873`,
    1442: `873`,
    1443: `874`,
    1444: `874`,
    1445: `874`,
    1446: `876`,
    1447: `876`,
    1448: `877`,
    1449: `877`,
    145: `27`,
    1450: `878`,
    1451: `879`,
    1452: `879`,
    1453: `880`,
    1454: `880`,
    1455: `881`,
    1456: `882`,
    1457: `883`,
    1458: `891`,
    1459: `891`,
    146: `27`,
    1460: `892`,
    1461: `892`,
    1462: `893`,
    1463: `894`,
    1464: `902`,
    1465: `902`,
    1466: `903`,
    1467: `903`,
    1468: `903`,
    1469: `904`,
    147: `27`,
    1470: `905`,
    1471: `905`,
    1472: `906`,
    1473: `907`,
    1474: `908`,
    1475: `908`,
    1476: `909`,
    1477: `910`,
    1478: `910`,
    1479: `911`,
    148: `27`,
    1480: `911`,
    1481: `911`,
    1482: `911`,
    1483: `911`,
    1484: `911`,
    1485: `911`,
    1486: `911`,
    1487: `911`,
    1488: `911`,
    1489: `912`,
    149: `27`,
    1490: `912`,
    1491: `913`,
    1492: `914`,
    1493: `914`,
    1494: `914`,
    1495: `915`,
    1496: `916`,
    1497: `917`,
    1498: `917`,
    1499: `918`,
    15: `2`,
    150: `27`,
    1500: `919`,
    1501: `919`,
    1502: `919`,
    1503: `920`,
    1504: `920`,
    1505: `921`,
    1506: `921`,
    1507: `923`,
    1508: `923`,
    1509: `924`,
    151: `27`,
    1510: `924`,
    1511: `925`,
    1512: `925`,
    1513: `925`,
    1514: `926`,
    1515: `926`,
    1516: `927`,
    1517: `928`,
    1518: `928`,
    1519: `929`,
    152: `27`,
    1520: `929`,
    1521: `929`,
    1522: `930`,
    1523: `931`,
    1524: `931`,
    1525: `932`,
    1526: `933`,
    1527: `934`,
    1528: `935`,
    1529: `936`,
    153: `27`,
    1530: `936`,
    1531: `937`,
    1532: `937`,
    1533: `937`,
    1534: `938`,
    1535: `939`,
    1536: `939`,
    1537: `940`,
    1538: `941`,
    1539: `942`,
    154: `27`,
    1540: `942`,
    1541: `943`,
    1542: `944`,
    1543: `945`,
    1544: `945`,
    1545: `946`,
    1546: `946`,
    1547: `946`,
    1548: `947`,
    1549: `948`,
    155: `27`,
    1550: `948`,
    1551: `949`,
    1552: `949`,
    1553: `950`,
    1554: `950`,
    1555: `951`,
    1556: `951`,
    1557: `952`,
    1558: `952`,
    1559: `953`,
    156: `27`,
    1560: `954`,
    1561: `955`,
    1562: `956`,
    1563: `956`,
    1564: `957`,
    1565: `957`,
    1566: `958`,
    1567: `958`,
    1568: `959`,
    1569: `959`,
    157: `27`,
    1570: `960`,
    1571: `960`,
    1572: `961`,
    1573: `961`,
    1574: `962`,
    1575: `962`,
    1576: `962`,
    1577: `964`,
    1578: `965`,
    1579: `965`,
    158: `27`,
    1580: `966`,
    1581: `966`,
    1582: `966`,
    1583: `966`,
    1584: `966`,
    1585: `966`,
    1586: `966`,
    1587: `966`,
    1588: `966`,
    1589: `966`,
    159: `27`,
    1590: `967`,
    1591: `967`,
    1592: `968`,
    1593: `969`,
    1594: `970`,
    1595: `970`,
    1596: `971`,
    1597: `971`,
    1598: `972`,
    1599: `972`,
    16: `2`,
    160: `27`,
    1600: `973`,
    1601: `973`,
    1602: `974`,
    1603: `974`,
    1604: `975`,
    1605: `975`,
    1606: `976`,
    1607: `976`,
    1608: `976`,
    1609: `978`,
    161: `27`,
    1610: `978`,
    1611: `979`,
    1612: `979`,
    1613: `980`,
    1614: `980`,
    1615: `981`,
    1616: `982`,
    1617: `983`,
    1618: `983`,
    1619: `984`,
    162: `28`,
    1620: `984`,
    1621: `985`,
    1622: `985`,
    1623: `985`,
    1624: `986`,
    1625: `986`,
    1626: `987`,
    1627: `987`,
    1628: `988`,
    1629: `988`,
    163: `28`,
    1630: `989`,
    1631: `990`,
    1632: `990`,
    1633: `991`,
    1634: `991`,
    1635: `992`,
    1636: `992`,
    1637: `992`,
    1638: `993`,
    1639: `994`,
    164: `28`,
    1640: `994`,
    1641: `995`,
    1642: `995`,
    1643: `996`,
    1644: `996`,
    1645: `997`,
    1646: `998`,
    1647: `998`,
    1648: `999`,
    1649: `999`,
    165: `29`,
    1650: `1000`,
    1651: `1000`,
    1652: `1001`,
    1653: `1002`,
    1654: `1002`,
    1655: `1003`,
    1656: `1003`,
    1657: `1004`,
    1658: `1004`,
    1659: `1005`,
    166: `29`,
    1660: `1006`,
    1661: `1006`,
    1662: `1007`,
    1663: `1007`,
    1664: `1008`,
    1665: `1008`,
    1666: `1009`,
    1667: `1010`,
    1668: `1010`,
    1669: `1011`,
    167: `29`,
    1670: `1011`,
    1671: `1012`,
    1672: `1012`,
    1673: `1013`,
    1674: `1014`,
    1675: `1014`,
    1676: `1015`,
    1677: `1015`,
    1678: `1016`,
    1679: `1016`,
    168: `29`,
    1680: `1017`,
    1681: `1018`,
    1682: `1018`,
    1683: `1019`,
    1684: `1019`,
    1685: `1020`,
    1686: `1020`,
    1687: `1021`,
    1688: `1022`,
    1689: `1022`,
    169: `29`,
    1690: `1023`,
    1691: `1023`,
    1692: `1024`,
    1693: `1024`,
    1694: `1025`,
    1695: `1026`,
    1696: `1026`,
    1697: `1027`,
    1698: `1027`,
    1699: `1028`,
    17: `2`,
    170: `29`,
    1700: `1028`,
    1701: `1029`,
    1702: `1030`,
    1703: `1030`,
    1704: `1031`,
    1705: `1031`,
    1706: `1032`,
    1707: `1032`,
    1708: `1032`,
    1709: `1033`,
    171: `29`,
    1710: `1033`,
    1711: `1034`,
    1712: `1034`,
    1713: `1035`,
    1714: `1035`,
    1715: `1035`,
    1716: `1036`,
    1717: `1036`,
    1718: `1037`,
    1719: `1037`,
    172: `29`,
    1720: `1037`,
    1721: `1037`,
    1722: `1037`,
    1723: `1037`,
    1724: `1038`,
    1725: `1038`,
    1726: `1039`,
    1727: `1040`,
    1728: `1041`,
    1729: `1041`,
    173: `29`,
    1730: `1042`,
    1731: `1043`,
    1732: `1043`,
    1733: `1044`,
    1734: `1045`,
    1735: `1046`,
    1736: `1046`,
    1737: `1047`,
    1738: `1048`,
    1739: `1048`,
    174: `29`,
    1740: `1048`,
    1741: `1049`,
    1742: `1050`,
    1743: `1050`,
    1744: `1051`,
    1745: `1052`,
    1746: `1053`,
    1747: `1053`,
    1748: `1054`,
    1749: `1055`,
    175: `29`,
    1750: `1056`,
    1751: `1056`,
    1752: `1057`,
    1753: `1058`,
    1754: `1059`,
    1755: `1059`,
    1756: `1060`,
    1757: `1061`,
    1758: `1062`,
    1759: `1062`,
    176: `29`,
    1760: `1063`,
    1761: `1064`,
    1762: `1065`,
    1763: `1065`,
    1764: `1066`,
    1765: `1067`,
    1766: `1068`,
    1767: `1068`,
    1768: `1069`,
    1769: `1070`,
    177: `29`,
    1770: `1071`,
    1771: `1071`,
    1772: `1072`,
    1773: `1073`,
    1774: `1074`,
    1775: `1074`,
    1776: `1075`,
    1777: `1076`,
    1778: `1077`,
    1779: `1077`,
    178: `29`,
    1780: `1078`,
    1781: `1079`,
    1782: `1079`,
    1783: `1080`,
    1784: `1081`,
    1785: `1083`,
    1786: `1083`,
    1787: `1084`,
    1788: `1084`,
    1789: `1084`,
    179: `29`,
    1790: `1085`,
    1791: `1085`,
    1792: `1086`,
    1793: `1087`,
    1794: `1088`,
    1795: `1088`,
    1796: `1089`,
    1797: `1090`,
    1798: `1091`,
    1799: `1092`,
    18: `2`,
    180: `29`,
    1800: `1092`,
    1801: `1093`,
    1802: `1094`,
    1803: `1094`,
    1804: `1094`,
    1805: `1095`,
    1806: `1096`,
    1807: `1097`,
    1808: `1097`,
    1809: `1098`,
    181: `29`,
    1810: `1098`,
    1811: `1099`,
    1812: `1100`,
    1813: `1100`,
    1814: `1101`,
    1815: `1102`,
    1816: `1102`,
    1817: `1102`,
    1818: `1103`,
    1819: `1104`,
    182: `29`,
    1820: `1105`,
    1821: `1105`,
    1822: `1106`,
    1823: `1106`,
    1824: `1107`,
    1825: `1107`,
    1826: `1108`,
    1827: `1108`,
    1828: `1109`,
    1829: `1109`,
    183: `29`,
    1830: `1110`,
    1831: `1111`,
    1832: `1114`,
    1833: `1114`,
    1834: `1115`,
    1835: `1115`,
    1836: `1116`,
    1837: `1117`,
    1838: `1121`,
    1839: `1121`,
    184: `29`,
    1840: `1122`,
    1841: `1122`,
    1842: `1122`,
    1843: `1122`,
    1844: `1122`,
    1845: `1122`,
    1846: `1122`,
    1847: `1122`,
    1848: `1122`,
    1849: `1122`,
    185: `29`,
    1850: `1122`,
    1851: `1123`,
    1852: `1124`,
    1853: `1128`,
    1854: `1128`,
    1855: `1129`,
    1856: `1130`,
    1857: `1131`,
    1858: `1135`,
    1859: `1135`,
    186: `29`,
    1860: `1136`,
    1861: `1136`,
    1862: `1136`,
    1863: `1137`,
    1864: `1139`,
    1865: `1139`,
    1866: `1140`,
    1867: `1140`,
    1868: `1141`,
    1869: `1141`,
    187: `29`,
    1870: `1141`,
    1871: `1142`,
    1872: `1142`,
    1873: `1143`,
    1874: `1143`,
    1875: `1143`,
    1876: `1144`,
    1877: `1146`,
    1878: `1146`,
    1879: `1147`,
    188: `29`,
    1880: `1147`,
    1881: `1148`,
    1882: `1148`,
    1883: `1148`,
    1884: `1150`,
    1885: `1150`,
    1886: `1151`,
    1887: `1151`,
    1888: `1152`,
    1889: `1153`,
    189: `29`,
    1890: `1153`,
    1891: `1154`,
    1892: `1155`,
    1893: `1156`,
    1894: `1156`,
    1895: `1157`,
    1896: `1158`,
    1897: `1158`,
    1898: `1158`,
    1899: `1159`,
    19: `2`,
    190: `29`,
    1900: `1160`,
    1901: `1160`,
    1902: `1161`,
    1903: `1162`,
    1904: `1163`,
    1905: `1163`,
    1906: `1164`,
    1907: `1165`,
    1908: `1166`,
    1909: `1166`,
    191: `29`,
    1910: `1167`,
    1911: `1168`,
    1912: `1169`,
    1913: `1169`,
    1914: `1170`,
    1915: `1171`,
    1916: `1172`,
    1917: `1172`,
    1918: `1173`,
    1919: `1174`,
    192: `29`,
    1920: `1175`,
    1921: `1175`,
    1922: `1176`,
    1923: `1177`,
    1924: `1178`,
    1925: `1178`,
    1926: `1179`,
    1927: `1180`,
    1928: `1181`,
    1929: `1181`,
    193: `29`,
    1930: `1182`,
    1931: `1183`,
    1932: `1184`,
    1933: `1184`,
    1934: `1185`,
    1935: `1186`,
    1936: `1187`,
    1937: `1187`,
    1938: `1188`,
    1939: `1189`,
    194: `29`,
    1940: `1189`,
    1941: `1190`,
    1942: `1191`,
    1943: `1191`,
    1944: `1192`,
    1945: `1193`,
    1946: `1193`,
    1947: `1193`,
    1948: `1194`,
    1949: `1195`,
    195: `29`,
    1950: `1196`,
    1951: `1197`,
    1952: `1197`,
    1953: `1198`,
    1954: `1198`,
    1955: `1198`,
    1956: `1200`,
    1957: `1201`,
    1958: `1201`,
    1959: `1202`,
    196: `29`,
    1960: `1203`,
    1961: `1205`,
    1962: `1206`,
    1963: `1206`,
    1964: `1206`,
    1965: `1207`,
    1966: `1207`,
    1967: `1208`,
    1968: `1209`,
    1969: `1209`,
    197: `29`,
    1970: `1209`,
    1971: `1210`,
    1972: `1210`,
    1973: `1211`,
    1974: `1212`,
    1975: `1212`,
    1976: `1213`,
    1977: `1214`,
    1978: `1214`,
    1979: `1215`,
    198: `29`,
    1980: `1216`,
    1981: `1216`,
    1982: `1216`,
    1983: `1217`,
    1984: `1218`,
    1985: `1218`,
    1986: `1219`,
    1987: `1220`,
    1988: `1220`,
    1989: `1221`,
    199: `29`,
    1990: `1222`,
    1991: `1222`,
    1992: `1223`,
    1993: `1224`,
    1994: `1224`,
    1995: `1225`,
    1996: `1226`,
    1997: `1226`,
    1998: `1227`,
    1999: `1228`,
    2: `2`,
    20: `2`,
    200: `29`,
    2000: `1228`,
    2001: `1229`,
    2002: `1230`,
    2003: `1230`,
    2004: `1231`,
    2005: `1232`,
    2006: `1232`,
    2007: `1233`,
    2008: `1234`,
    2009: `1234`,
    201: `29`,
    2010: `1235`,
    2011: `1236`,
    2012: `1236`,
    2013: `1237`,
    2014: `1238`,
    2015: `1238`,
    2016: `1239`,
    2017: `1240`,
    2018: `1240`,
    2019: `1241`,
    202: `29`,
    2020: `1242`,
    2021: `1242`,
    2022: `1243`,
    2023: `1244`,
    2024: `1244`,
    2025: `1245`,
    2026: `1246`,
    2027: `1246`,
    2028: `1247`,
    2029: `1248`,
    203: `29`,
    2030: `1248`,
    2031: `1249`,
    2032: `1250`,
    2033: `1250`,
    2034: `1251`,
    2035: `1252`,
    2036: `1252`,
    2037: `1252`,
    2038: `1253`,
    2039: `1254`,
    204: `29`,
    2040: `1254`,
    2041: `1255`,
    2042: `1256`,
    2043: `1256`,
    2044: `1256`,
    2045: `1257`,
    2046: `1257`,
    2047: `1258`,
    2048: `1259`,
    2049: `1259`,
    205: `31`,
    2050: `1259`,
    2051: `1260`,
    2052: `1260`,
    2053: `1261`,
    2054: `1261`,
    2055: `1261`,
    2056: `1262`,
    2057: `1262`,
    2058: `1263`,
    2059: `1263`,
    206: `34`,
    2060: `1264`,
    2061: `1265`,
    2062: `1265`,
    2063: `1266`,
    2064: `1266`,
    2065: `1266`,
    2066: `1266`,
    2067: `1266`,
    2068: `1266`,
    2069: `1267`,
    207: `34`,
    2070: `1267`,
    2071: `1268`,
    2072: `1269`,
    2073: `1270`,
    2074: `1272`,
    2075: `1272`,
    2076: `1273`,
    2077: `1273`,
    2078: `1273`,
    2079: `1274`,
    208: `35`,
    2080: `1274`,
    2081: `1275`,
    2082: `1275`,
    2083: `1275`,
    2084: `1278`,
    2085: `1278`,
    2086: `1279`,
    2087: `1279`,
    2088: `1279`,
    2089: `1280`,
    209: `36`,
    2090: `1280`,
    2091: `1281`,
    2092: `1281`,
    2093: `1282`,
    2094: `1282`,
    2095: `1283`,
    2096: `1284`,
    2097: `1285`,
    2098: `1286`,
    2099: `1286`,
    21: `2`,
    210: `37`,
    2100: `1287`,
    2101: `1288`,
    2102: `1289`,
    2103: `1289`,
    2104: `1290`,
    2105: `1290`,
    2106: `1291`,
    2107: `1291`,
    2108: `1292`,
    2109: `1292`,
    211: `40`,
    2110: `1293`,
    2111: `1293`,
    2112: `1294`,
    2113: `1294`,
    2114: `1294`,
    2115: `1297`,
    2116: `1297`,
    2117: `1298`,
    2118: `1298`,
    2119: `1299`,
    212: `40`,
    2120: `1300`,
    2121: `1303`,
    2122: `1303`,
    2123: `1304`,
    2124: `1304`,
    2125: `1305`,
    2126: `1306`,
    2127: `1306`,
    2128: `1307`,
    2129: `1307`,
    213: `40`,
    2130: `1308`,
    2131: `1308`,
    2132: `1308`,
    2133: `1309`,
    2134: `1309`,
    2135: `1309`,
    2136: `1310`,
    2137: `1311`,
    2138: `1312`,
    2139: `1313`,
    214: `41`,
    2140: `1314`,
    2141: `1315`,
    2142: `1316`,
    2143: `1317`,
    2144: `1318`,
    2145: `1318`,
    2146: `1318`,
    2147: `1318`,
    2148: `1318`,
    2149: `1318`,
    215: `41`,
    2150: `1318`,
    2151: `1318`,
    2152: `1318`,
    2153: `1318`,
    2154: `1319`,
    2155: `1320`,
    2156: `1320`,
    2157: `1321`,
    2158: `1321`,
    2159: `1321`,
    216: `42`,
    2160: `1322`,
    2161: `1322`,
    2162: `1322`,
    2163: `1323`,
    2164: `1324`,
    2165: `1324`,
    2166: `1325`,
    2167: `1326`,
    2168: `1327`,
    2169: `1327`,
    217: `43`,
    2170: `1328`,
    2171: `1329`,
    2172: `1330`,
    2173: `1330`,
    2174: `1331`,
    2175: `1331`,
    2176: `1332`,
    2177: `1332`,
    2178: `1333`,
    2179: `1333`,
    218: `43`,
    2180: `1334`,
    2181: `1334`,
    2182: `1335`,
    2183: `1335`,
    2184: `1336`,
    2185: `1336`,
    2186: `1337`,
    2187: `1337`,
    2188: `1338`,
    2189: `1338`,
    219: `45`,
    2190: `1339`,
    2191: `1339`,
    2192: `1339`,
    2193: `1341`,
    2194: `1341`,
    2195: `1341`,
    2196: `1342`,
    2197: `1342`,
    2198: `1343`,
    2199: `1343`,
    22: `2`,
    220: `45`,
    2200: `1343`,
    2201: `1344`,
    2202: `1344`,
    2203: `1344`,
    2204: `1345`,
    2205: `1345`,
    2206: `1346`,
    2207: `1346`,
    2208: `1346`,
    2209: `1348`,
    221: `46`,
    2210: `1348`,
    2211: `1348`,
    2212: `1349`,
    2213: `1349`,
    2214: `1349`,
    2215: `1350`,
    2216: `1350`,
    2217: `1351`,
    2218: `1351`,
    2219: `1351`,
    222: `47`,
    2220: `1353`,
    2221: `1353`,
    2222: `1353`,
    2223: `1354`,
    2224: `1354`,
    2225: `1354`,
    2226: `1355`,
    2227: `1355`,
    2228: `1356`,
    2229: `1356`,
    223: `48`,
    2230: `1356`,
    2231: `1358`,
    2232: `1359`,
    2233: `1359`,
    2234: `1360`,
    2235: `1361`,
    2236: `1362`,
    2237: `1362`,
    2238: `1363`,
    2239: `1363`,
    224: `51`,
    2240: `1364`,
    2241: `1365`,
    2242: `1366`,
    2243: `1367`,
    2244: `1367`,
    2245: `1368`,
    2246: `1369`,
    2247: `1370`,
    2248: `1371`,
    2249: `1371`,
    225: `51`,
    2250: `1372`,
    2251: `1373`,
    2252: `1374`,
    2253: `1374`,
    2254: `1374`,
    2255: `1375`,
    2256: `1375`,
    2257: `1375`,
    2258: `1376`,
    2259: `1377`,
    226: `51`,
    2260: `1378`,
    2261: `1379`,
    2262: `1379`,
    2263: `1379`,
    2264: `1381`,
    2265: `1381`,
    2266: `1381`,
    2267: `1383`,
    2268: `1383`,
    2269: `1383`,
    227: `51`,
    2270: `1385`,
    2271: `1385`,
    2272: `1385`,
    2273: `1387`,
    2274: `1387`,
    2275: `1387`,
    2276: `1389`,
    2277: `1389`,
    2278: `1389`,
    2279: `1391`,
    228: `51`,
    2280: `1391`,
    2281: `1392`,
    2282: `1392`,
    2283: `1393`,
    2284: `1394`,
    2285: `1394`,
    2286: `1394`,
    2287: `1395`,
    2288: `1395`,
    2289: `1396`,
    229: `51`,
    2290: `1396`,
    2291: `1397`,
    2292: `1398`,
    2293: `1398`,
    2294: `1399`,
    2295: `1400`,
    2296: `1400`,
    2297: `1402`,
    2298: `1402`,
    2299: `1403`,
    23: `2`,
    230: `52`,
    2300: `1403`,
    2301: `1404`,
    2302: `1404`,
    2303: `1404`,
    2304: `1406`,
    2305: `1407`,
    2306: `1407`,
    2307: `1408`,
    2308: `1408`,
    2309: `1408`,
    231: `52`,
    2310: `1410`,
    2311: `1411`,
    2312: `1411`,
    2313: `1412`,
    2314: `1412`,
    2315: `1412`,
    2316: `1412`,
    2317: `1412`,
    2318: `1412`,
    2319: `1412`,
    232: `53`,
    2320: `1412`,
    2321: `1412`,
    2322: `1412`,
    2323: `1413`,
    2324: `1413`,
    2325: `1414`,
    2326: `1415`,
    2327: `1415`,
    2328: `1415`,
    2329: `1416`,
    233: `54`,
    2330: `1417`,
    2331: `1418`,
    2332: `1418`,
    2333: `1419`,
    2334: `1420`,
    2335: `1420`,
    2336: `1420`,
    2337: `1421`,
    2338: `1421`,
    2339: `1422`,
    234: `56`,
    2340: `1422`,
    2341: `1423`,
    2342: `1423`,
    2343: `1424`,
    2344: `1425`,
    2345: `1426`,
    2346: `1426`,
    2347: `1427`,
    2348: `1428`,
    2349: `1429`,
    235: `57`,
    2350: `1430`,
    2351: `1431`,
    2352: `1431`,
    2353: `1432`,
    2354: `1432`,
    2355: `1433`,
    2356: `1434`,
    2357: `1435`,
    2358: `1436`,
    2359: `1436`,
    236: `60`,
    2360: `1437`,
    2361: `1437`,
    2362: `1437`,
    2363: `1438`,
    2364: `1439`,
    2365: `1439`,
    2366: `1440`,
    2367: `1440`,
    2368: `1440`,
    2369: `1441`,
    237: `60`,
    2370: `1442`,
    2371: `1442`,
    2372: `1443`,
    2373: `1444`,
    2374: `1445`,
    2375: `1445`,
    2376: `1446`,
    2377: `1446`,
    2378: `1447`,
    2379: `1448`,
    238: `61`,
    2380: `1449`,
    2381: `1450`,
    2382: `1450`,
    2383: `1451`,
    2384: `1451`,
    2385: `1451`,
    2386: `1452`,
    2387: `1453`,
    2388: `1453`,
    2389: `1454`,
    239: `62`,
    2390: `1454`,
    2391: `1455`,
    2392: `1455`,
    2393: `1456`,
    2394: `1456`,
    2395: `1457`,
    2396: `1457`,
    2397: `1458`,
    2398: `1458`,
    2399: `1459`,
    24: `2`,
    240: `63`,
    2400: `1459`,
    2401: `1460`,
    2402: `1460`,
    2403: `1460`,
    2404: `1462`,
    2405: `1462`,
    2406: `1463`,
    2407: `1463`,
    2408: `1463`,
    2409: `1464`,
    241: `66`,
    2410: `1465`,
    2411: `1465`,
    2412: `1466`,
    2413: `1467`,
    2414: `1468`,
    2415: `1468`,
    2416: `1469`,
    2417: `1469`,
    2418: `1471`,
    2419: `1471`,
    242: `66`,
    2420: `1472`,
    2421: `1472`,
    2422: `1472`,
    2423: `1473`,
    2424: `1473`,
    2425: `1475`,
    2426: `1475`,
    2427: `1476`,
    2428: `1476`,
    2429: `1477`,
    243: `66`,
    2430: `1477`,
    2431: `1477`,
    2432: `1478`,
    2433: `1478`,
    2434: `1479`,
    2435: `1479`,
    2436: `1480`,
    2437: `1480`,
    2438: `1481`,
    2439: `1482`,
    244: `67`,
    2440: `1483`,
    2441: `1484`,
    2442: `1484`,
    2443: `1485`,
    2444: `1485`,
    2445: `1486`,
    2446: `1486`,
    2447: `1486`,
    2448: `1487`,
    2449: `1488`,
    245: `67`,
    2450: `1490`,
    2451: `1490`,
    2452: `1491`,
    2453: `1491`,
    2454: `1492`,
    2455: `1492`,
    2456: `1492`,
    2457: `1494`,
    2458: `1495`,
    2459: `1495`,
    246: `68`,
    2460: `1496`,
    2461: `1496`,
    2462: `1497`,
    2463: `1497`,
    2464: `1498`,
    2465: `1498`,
    2466: `1498`,
    2467: `1499`,
    2468: `1500`,
    2469: `1500`,
    247: `69`,
    2470: `1501`,
    2471: `1501`,
    2472: `1502`,
    2473: `1502`,
    2474: `1503`,
    2475: `1503`,
    2476: `1503`,
    2477: `1505`,
    2478: `1505`,
    2479: `1506`,
    248: `69`,
    2480: `1506`,
    2481: `1507`,
    2482: `1508`,
    2483: `1510`,
    2484: `1510`,
    2485: `1510`,
    2486: `1512`,
    2487: `1512`,
    2488: `1513`,
    2489: `1514`,
    249: `70`,
    2490: `1514`,
    2491: `1515`,
    2492: `1516`,
    2493: `1518`,
    2494: `1519`,
    2495: `1519`,
    2496: `1520`,
    2497: `1520`,
    2498: `1521`,
    2499: `1521`,
    25: `2`,
    250: `70`,
    2500: `1521`,
    2501: `1522`,
    2502: `1522`,
    2503: `1522`,
    2504: `1524`,
    2505: `1525`,
    2506: `1526`,
    2507: `1527`,
    2508: `1528`,
    2509: `1530`,
    251: `70`,
    2510: `1531`,
    2511: `1531`,
    2512: `1532`,
    2513: `1533`,
    2514: `1533`,
    2515: `1534`,
    2516: `1534`,
    2517: `1535`,
    2518: `1535`,
    2519: `1536`,
    252: `73`,
    2520: `1537`,
    2521: `1539`,
    2522: `1540`,
    2523: `1540`,
    2524: `1541`,
    2525: `1542`,
    2526: `1542`,
    2527: `1543`,
    2528: `1543`,
    2529: `1544`,
    253: `73`,
    2530: `1544`,
    2531: `1545`,
    2532: `1545`,
    2533: `1546`,
    2534: `1547`,
    2535: `1549`,
    2536: `1550`,
    2537: `1552`,
    2538: `1553`,
    2539: `1554`,
    254: `74`,
    2540: `1555`,
    2541: `1555`,
    2542: `1556`,
    2543: `1556`,
    2544: `1557`,
    2545: `1557`,
    2546: `1557`,
    2547: `1558`,
    2548: `1560`,
    2549: `1561`,
    255: `75`,
    2550: `1562`,
    2551: `1562`,
    2552: `1562`,
    2553: `1563`,
    2554: `1564`,
    2555: `1564`,
    2556: `1565`,
    2557: `1565`,
    2558: `1565`,
    2559: `1566`,
    256: `76`,
    2560: `1568`,
    2561: `1569`,
    2562: `1569`,
    2563: `1569`,
    2564: `1570`,
    2565: `1570`,
    2566: `1571`,
    2567: `1572`,
    2568: `1572`,
    2569: `1572`,
    257: `79`,
    2570: `1573`,
    2571: `1573`,
    2572: `1574`,
    2573: `1575`,
    2574: `1575`,
    2575: `1576`,
    2576: `1577`,
    2577: `1577`,
    2578: `1578`,
    2579: `1579`,
    258: `79`,
    2580: `1579`,
    2581: `1579`,
    2582: `1580`,
    2583: `1581`,
    2584: `1581`,
    2585: `1582`,
    2586: `1583`,
    2587: `1583`,
    2588: `1584`,
    2589: `1585`,
    259: `79`,
    2590: `1585`,
    2591: `1586`,
    2592: `1587`,
    2593: `1587`,
    2594: `1588`,
    2595: `1589`,
    2596: `1589`,
    2597: `1590`,
    2598: `1591`,
    2599: `1591`,
    26: `2`,
    260: `80`,
    2600: `1592`,
    2601: `1593`,
    2602: `1593`,
    2603: `1594`,
    2604: `1595`,
    2605: `1595`,
    2606: `1596`,
    2607: `1597`,
    2608: `1597`,
    2609: `1598`,
    261: `80`,
    2610: `1599`,
    2611: `1599`,
    2612: `1600`,
    2613: `1601`,
    2614: `1601`,
    2615: `1602`,
    2616: `1603`,
    2617: `1603`,
    2618: `1604`,
    2619: `1605`,
    262: `81`,
    2620: `1605`,
    2621: `1606`,
    2622: `1607`,
    2623: `1607`,
    2624: `1608`,
    2625: `1609`,
    2626: `1609`,
    2627: `1610`,
    2628: `1611`,
    2629: `1611`,
    263: `82`,
    2630: `1612`,
    2631: `1613`,
    2632: `1613`,
    2633: `1614`,
    2634: `1615`,
    2635: `1615`,
    2636: `1615`,
    2637: `1616`,
    2638: `1616`,
    2639: `1617`,
    264: `82`,
    2640: `1618`,
    2641: `1618`,
    2642: `1618`,
    2643: `1619`,
    2644: `1619`,
    2645: `1620`,
    2646: `1621`,
    2647: `1621`,
    2648: `1621`,
    2649: `1622`,
    265: `83`,
    2650: `1623`,
    2651: `1623`,
    2652: `1624`,
    2653: `1625`,
    2654: `1625`,
    2655: `1625`,
    2656: `1626`,
    2657: `1626`,
    2658: `1627`,
    2659: `1628`,
    266: `83`,
    2660: `1628`,
    2661: `1628`,
    2662: `1629`,
    2663: `1630`,
    2664: `1630`,
    2665: `1631`,
    2666: `1632`,
    2667: `1632`,
    2668: `1632`,
    2669: `1633`,
    267: `83`,
    2670: `1633`,
    2671: `1634`,
    2672: `1635`,
    2673: `1635`,
    2674: `1636`,
    2675: `1637`,
    2676: `1637`,
    2677: `1637`,
    2678: `1638`,
    2679: `1639`,
    268: `86`,
    2680: `1639`,
    2681: `1640`,
    2682: `1641`,
    2683: `1641`,
    2684: `1641`,
    2685: `1642`,
    2686: `1643`,
    2687: `1644`,
    2688: `1645`,
    2689: `1645`,
    269: `86`,
    2690: `1646`,
    2691: `1647`,
    2692: `1647`,
    2693: `1647`,
    2694: `1648`,
    2695: `1649`,
    2696: `1649`,
    2697: `1650`,
    2698: `1651`,
    2699: `1651`,
    27: `2`,
    270: `87`,
    2700: `1651`,
    2701: `1652`,
    2702: `1653`,
    2703: `1653`,
    2704: `1654`,
    2705: `1655`,
    2706: `1655`,
    2707: `1655`,
    2708: `1656`,
    2709: `1657`,
    271: `88`,
    2710: `1657`,
    2711: `1658`,
    2712: `1659`,
    2713: `1659`,
    2714: `1659`,
    2715: `1660`,
    2716: `1661`,
    2717: `1661`,
    2718: `1662`,
    2719: `1663`,
    272: `89`,
    2720: `1663`,
    2721: `1663`,
    2722: `1664`,
    2723: `1664`,
    2724: `1665`,
    2725: `1666`,
    2726: `1666`,
    2727: `1667`,
    2728: `1667`,
    2729: `1667`,
    273: `92`,
    2730: `1668`,
    2731: `1669`,
    2732: `1669`,
    2733: `1670`,
    2734: `1672`,
    2735: `1673`,
    2736: `1673`,
    2737: `1673`,
    2738: `1675`,
    2739: `1676`,
    274: `92`,
    2740: `1676`,
    2741: `1676`,
    2742: `1677`,
    2743: `1678`,
    2744: `1679`,
    2745: `1680`,
    2746: `1681`,
    2747: `1683`,
    2748: `1684`,
    2749: `1685`,
    275: `92`,
    2750: `1686`,
    2751: `1686`,
    2752: `1686`,
    2753: `1687`,
    2754: `1687`,
    2755: `1688`,
    2756: `1689`,
    2757: `1690`,
    2758: `1692`,
    2759: `1692`,
    276: `93`,
    2760: `1693`,
    2761: `1694`,
    2762: `1694`,
    2763: `1695`,
    2764: `1697`,
    2765: `1698`,
    2766: `1698`,
    2767: `1699`,
    2768: `1701`,
    2769: `1702`,
    277: `93`,
    2770: `1703`,
    2771: `1704`,
    2772: `1705`,
    2773: `1705`,
    2774: `1706`,
    2775: `1707`,
    2776: `1708`,
    2777: `1709`,
    2778: `1711`,
    2779: `1712`,
    278: `94`,
    2780: `1712`,
    2781: `1712`,
    2782: `1715`,
    2783: `1715`,
    2784: `1716`,
    2785: `1716`,
    2786: `1717`,
    2787: `1718`,
    2788: `1719`,
    2789: `1720`,
    279: `95`,
    2790: `1720`,
    2791: `1721`,
    2792: `1722`,
    2793: `1722`,
    2794: `1723`,
    2795: `1723`,
    2796: `1724`,
    2797: `1724`,
    2798: `1725`,
    2799: `1726`,
    28: `2`,
    280: `95`,
    2800: `1727`,
    2801: `1727`,
    2802: `1728`,
    2803: `1729`,
    2804: `1730`,
    2805: `1731`,
    2806: `1731`,
    2807: `1732`,
    2808: `1733`,
    2809: `1734`,
    281: `95`,
    2810: `1736`,
    2811: `1736`,
    2812: `1737`,
    2813: `1737`,
    2814: `1738`,
    2815: `1739`,
    2816: `1740`,
    2817: `1740`,
    2818: `1740`,
    2819: `1741`,
    282: `96`,
    2820: `1741`,
    2821: `1741`,
    2822: `1743`,
    2823: `1744`,
    2824: `1744`,
    2825: `1745`,
    2826: `1745`,
    2827: `1745`,
    2828: `1747`,
    2829: `1748`,
    283: `96`,
    2830: `1749`,
    2831: `1750`,
    2832: `1750`,
    2833: `1750`,
    2834: `1751`,
    2835: `1751`,
    2836: `1752`,
    2837: `1752`,
    2838: `1752`,
    2839: `1753`,
    284: `97`,
    2840: `1753`,
    2841: `1753`,
    2842: `1756`,
    2843: `1756`,
    2844: `1757`,
    2845: `1757`,
    2846: `1758`,
    2847: `1759`,
    2848: `1760`,
    2849: `1761`,
    285: `97`,
    2850: `1761`,
    2851: `1762`,
    2852: `1763`,
    2853: `1763`,
    2854: `1764`,
    2855: `1764`,
    2856: `1765`,
    2857: `1765`,
    2858: `1766`,
    2859: `1767`,
    286: `97`,
    2860: `1768`,
    2861: `1768`,
    2862: `1769`,
    2863: `1770`,
    2864: `1771`,
    2865: `1772`,
    2866: `1772`,
    2867: `1773`,
    2868: `1773`,
    2869: `1774`,
    287: `99`,
    2870: `1775`,
    2871: `1776`,
    2872: `1776`,
    2873: `1777`,
    2874: `1778`,
    2875: `1779`,
    288: `99`,
    289: `99`,
    29: `2`,
    290: `100`,
    291: `100`,
    292: `102`,
    293: `102`,
    294: `103`,
    295: `104`,
    296: `105`,
    297: `108`,
    298: `108`,
    299: `108`,
    3: `2`,
    30: `2`,
    300: `109`,
    301: `110`,
    302: `112`,
    303: `113`,
    304: `114`,
    305: `115`,
    306: `116`,
    307: `116`,
    308: `117`,
    309: `118`,
    31: `2`,
    310: `118`,
    311: `118`,
    312: `119`,
    313: `119`,
    314: `119`,
    315: `120`,
    316: `120`,
    317: `121`,
    318: `121`,
    319: `121`,
    32: `2`,
    320: `123`,
    321: `123`,
    322: `123`,
    323: `124`,
    324: `124`,
    325: `126`,
    326: `126`,
    327: `127`,
    328: `128`,
    329: `129`,
    33: `2`,
    330: `132`,
    331: `132`,
    332: `132`,
    333: `134`,
    334: `135`,
    335: `136`,
    336: `137`,
    337: `137`,
    338: `138`,
    339: `139`,
    34: `2`,
    340: `139`,
    341: `139`,
    342: `140`,
    343: `141`,
    344: `142`,
    345: `143`,
    346: `144`,
    347: `145`,
    348: `145`,
    349: `145`,
    35: `2`,
    350: `146`,
    351: `146`,
    352: `147`,
    353: `147`,
    354: `147`,
    355: `150`,
    356: `150`,
    357: `151`,
    358: `152`,
    359: `153`,
    36: `2`,
    360: `156`,
    361: `156`,
    362: `156`,
    363: `157`,
    364: `157`,
    365: `158`,
    366: `159`,
    367: `159`,
    368: `160`,
    369: `161`,
    37: `4`,
    370: `162`,
    371: `162`,
    372: `163`,
    373: `164`,
    374: `165`,
    375: `165`,
    376: `166`,
    377: `167`,
    378: `167`,
    379: `168`,
    38: `4`,
    380: `169`,
    381: `170`,
    382: `170`,
    383: `171`,
    384: `172`,
    385: `172`,
    386: `172`,
    387: `173`,
    388: `174`,
    389: `174`,
    39: `5`,
    390: `175`,
    391: `176`,
    392: `177`,
    393: `177`,
    394: `178`,
    395: `179`,
    396: `180`,
    397: `180`,
    398: `181`,
    399: `182`,
    4: `2`,
    40: `5`,
    400: `182`,
    401: `183`,
    402: `184`,
    403: `185`,
    404: `185`,
    405: `186`,
    406: `186`,
    407: `186`,
    408: `189`,
    409: `189`,
    41: `5`,
    410: `190`,
    411: `191`,
    412: `192`,
    413: `195`,
    414: `195`,
    415: `195`,
    416: `196`,
    417: `196`,
    418: `197`,
    419: `197`,
    42: `6`,
    420: `197`,
    421: `198`,
    422: `198`,
    423: `199`,
    424: `199`,
    425: `199`,
    426: `202`,
    427: `202`,
    428: `203`,
    429: `204`,
    43: `7`,
    430: `205`,
    431: `208`,
    432: `208`,
    433: `208`,
    434: `209`,
    435: `209`,
    436: `210`,
    437: `210`,
    438: `210`,
    439: `211`,
    44: `8`,
    440: `211`,
    441: `212`,
    442: `212`,
    443: `212`,
    444: `215`,
    445: `215`,
    446: `216`,
    447: `217`,
    448: `218`,
    449: `221`,
    45: `9`,
    450: `221`,
    451: `221`,
    452: `222`,
    453: `222`,
    454: `223`,
    455: `224`,
    456: `224`,
    457: `225`,
    458: `225`,
    459: `225`,
    46: `10`,
    460: `228`,
    461: `228`,
    462: `229`,
    463: `230`,
    464: `231`,
    465: `234`,
    466: `234`,
    467: `234`,
    468: `235`,
    469: `235`,
    47: `11`,
    470: `236`,
    471: `236`,
    472: `236`,
    473: `237`,
    474: `237`,
    475: `238`,
    476: `238`,
    477: `238`,
    478: `240`,
    479: `240`,
    48: `11`,
    480: `240`,
    481: `241`,
    482: `242`,
    483: `242`,
    484: `244`,
    485: `245`,
    486: `246`,
    487: `247`,
    488: `247`,
    489: `248`,
    49: `12`,
    490: `249`,
    491: `250`,
    492: `251`,
    493: `251`,
    494: `253`,
    495: `254`,
    496: `254`,
    497: `255`,
    498: `256`,
    499: `257`,
    5: `2`,
    50: `13`,
    500: `257`,
    501: `257`,
    502: `258`,
    503: `258`,
    504: `259`,
    505: `260`,
    506: `261`,
    507: `261`,
    508: `262`,
    509: `262`,
    51: `14`,
    510: `263`,
    511: `263`,
    512: `263`,
    513: `264`,
    514: `264`,
    515: `265`,
    516: `265`,
    517: `265`,
    518: `265`,
    519: `265`,
    52: `14`,
    520: `265`,
    521: `266`,
    522: `266`,
    523: `267`,
    524: `268`,
    525: `269`,
    526: `269`,
    527: `270`,
    528: `271`,
    529: `273`,
    53: `15`,
    530: `273`,
    531: `274`,
    532: `274`,
    533: `274`,
    534: `275`,
    535: `275`,
    536: `276`,
    537: `277`,
    538: `278`,
    539: `278`,
    54: `16`,
    540: `278`,
    541: `278`,
    542: `278`,
    543: `278`,
    544: `278`,
    545: `278`,
    546: `278`,
    547: `278`,
    548: `278`,
    549: `278`,
    55: `17`,
    550: `279`,
    551: `279`,
    552: `279`,
    553: `282`,
    554: `282`,
    555: `282`,
    556: `282`,
    557: `282`,
    558: `282`,
    559: `282`,
    56: `18`,
    560: `282`,
    561: `282`,
    562: `282`,
    563: `282`,
    564: `282`,
    565: `282`,
    566: `282`,
    567: `282`,
    568: `282`,
    569: `282`,
    57: `19`,
    570: `282`,
    571: `282`,
    572: `283`,
    573: `283`,
    574: `284`,
    575: `284`,
    576: `284`,
    577: `287`,
    578: `287`,
    579: `287`,
    58: `20`,
    580: `287`,
    581: `287`,
    582: `287`,
    583: `287`,
    584: `287`,
    585: `287`,
    586: `287`,
    587: `287`,
    588: `287`,
    589: `287`,
    59: `20`,
    590: `287`,
    591: `287`,
    592: `287`,
    593: `287`,
    594: `287`,
    595: `287`,
    596: `288`,
    597: `288`,
    598: `289`,
    599: `289`,
    6: `2`,
    60: `21`,
    600: `289`,
    601: `292`,
    602: `292`,
    603: `292`,
    604: `292`,
    605: `292`,
    606: `292`,
    607: `292`,
    608: `292`,
    609: `292`,
    61: `22`,
    610: `292`,
    611: `292`,
    612: `292`,
    613: `292`,
    614: `292`,
    615: `292`,
    616: `292`,
    617: `292`,
    618: `292`,
    619: `292`,
    62: `23`,
    620: `293`,
    621: `293`,
    622: `294`,
    623: `294`,
    624: `294`,
    625: `297`,
    626: `297`,
    627: `297`,
    628: `297`,
    629: `297`,
    63: `24`,
    630: `297`,
    631: `297`,
    632: `297`,
    633: `297`,
    634: `297`,
    635: `297`,
    636: `297`,
    637: `297`,
    638: `297`,
    639: `297`,
    64: `25`,
    640: `297`,
    641: `297`,
    642: `297`,
    643: `297`,
    644: `298`,
    645: `298`,
    646: `299`,
    647: `299`,
    648: `299`,
    649: `301`,
    65: `27`,
    650: `301`,
    651: `302`,
    652: `303`,
    653: `304`,
    654: `304`,
    655: `305`,
    656: `306`,
    657: `308`,
    658: `309`,
    659: `310`,
    66: `27`,
    660: `311`,
    661: `312`,
    662: `312`,
    663: `313`,
    664: `314`,
    665: `314`,
    666: `314`,
    667: `315`,
    668: `315`,
    669: `315`,
    67: `27`,
    670: `316`,
    671: `317`,
    672: `317`,
    673: `318`,
    674: `318`,
    675: `319`,
    676: `319`,
    677: `320`,
    678: `321`,
    679: `329`,
    68: `27`,
    680: `329`,
    681: `330`,
    682: `331`,
    683: `332`,
    684: `340`,
    685: `340`,
    686: `341`,
    687: `341`,
    688: `342`,
    689: `343`,
    69: `27`,
    690: `343`,
    691: `344`,
    692: `344`,
    693: `345`,
    694: `345`,
    695: `346`,
    696: `347`,
    697: `355`,
    698: `355`,
    699: `356`,
    7: `2`,
    70: `27`,
    700: `356`,
    701: `357`,
    702: `358`,
    703: `358`,
    704: `359`,
    705: `360`,
    706: `368`,
    707: `368`,
    708: `369`,
    709: `369`,
    71: `27`,
    710: `370`,
    711: `371`,
    712: `371`,
    713: `372`,
    714: `372`,
    715: `373`,
    716: `373`,
    717: `374`,
    718: `374`,
    719: `375`,
    72: `27`,
    720: `375`,
    721: `376`,
    722: `377`,
    723: `378`,
    724: `378`,
    725: `379`,
    726: `379`,
    727: `380`,
    728: `380`,
    729: `381`,
    73: `27`,
    730: `381`,
    731: `382`,
    732: `382`,
    733: `383`,
    734: `383`,
    735: `383`,
    736: `386`,
    737: `386`,
    738: `387`,
    739: `388`,
    74: `27`,
    740: `388`,
    741: `389`,
    742: `390`,
    743: `390`,
    744: `391`,
    745: `392`,
    746: `392`,
    747: `392`,
    748: `393`,
    749: `393`,
    75: `27`,
    750: `394`,
    751: `394`,
    752: `395`,
    753: `396`,
    754: `397`,
    755: `397`,
    756: `398`,
    757: `398`,
    758: `398`,
    759: `398`,
    76: `27`,
    760: `398`,
    761: `398`,
    762: `399`,
    763: `399`,
    764: `400`,
    765: `401`,
    766: `403`,
    767: `403`,
    768: `404`,
    769: `405`,
    77: `27`,
    770: `406`,
    771: `406`,
    772: `408`,
    773: `408`,
    774: `409`,
    775: `410`,
    776: `410`,
    777: `411`,
    778: `412`,
    779: `413`,
    78: `27`,
    780: `413`,
    781: `414`,
    782: `414`,
    783: `414`,
    784: `415`,
    785: `415`,
    786: `416`,
    787: `417`,
    788: `418`,
    789: `419`,
    79: `27`,
    790: `419`,
    791: `420`,
    792: `420`,
    793: `421`,
    794: `422`,
    795: `422`,
    796: `422`,
    797: `423`,
    798: `424`,
    799: `424`,
    8: `2`,
    80: `27`,
    800: `426`,
    801: `426`,
    802: `427`,
    803: `427`,
    804: `427`,
    805: `428`,
    806: `429`,
    807: `429`,
    808: `430`,
    809: `430`,
    81: `27`,
    810: `430`,
    811: `430`,
    812: `430`,
    813: `430`,
    814: `430`,
    815: `430`,
    816: `430`,
    817: `430`,
    818: `431`,
    819: `431`,
    82: `27`,
    820: `432`,
    821: `433`,
    822: `433`,
    823: `433`,
    824: `434`,
    825: `435`,
    826: `436`,
    827: `436`,
    828: `437`,
    829: `438`,
    83: `27`,
    830: `438`,
    831: `438`,
    832: `439`,
    833: `439`,
    834: `440`,
    835: `440`,
    836: `441`,
    837: `441`,
    838: `442`,
    839: `443`,
    84: `27`,
    840: `444`,
    841: `444`,
    842: `445`,
    843: `446`,
    844: `447`,
    845: `448`,
    846: `449`,
    847: `449`,
    848: `450`,
    849: `450`,
    85: `27`,
    850: `451`,
    851: `452`,
    852: `453`,
    853: `454`,
    854: `454`,
    855: `455`,
    856: `455`,
    857: `455`,
    858: `456`,
    859: `457`,
    86: `27`,
    860: `457`,
    861: `458`,
    862: `458`,
    863: `458`,
    864: `459`,
    865: `460`,
    866: `460`,
    867: `461`,
    868: `462`,
    869: `463`,
    87: `27`,
    870: `463`,
    871: `464`,
    872: `464`,
    873: `465`,
    874: `466`,
    875: `467`,
    876: `468`,
    877: `469`,
    878: `469`,
    879: `470`,
    88: `27`,
    880: `471`,
    881: `472`,
    882: `472`,
    883: `473`,
    884: `473`,
    885: `474`,
    886: `474`,
    887: `475`,
    888: `475`,
    889: `476`,
    89: `27`,
    890: `476`,
    891: `477`,
    892: `477`,
    893: `478`,
    894: `478`,
    895: `480`,
    896: `480`,
    897: `481`,
    898: `481`,
    899: `481`,
    9: `2`,
    90: `27`,
    900: `482`,
    901: `483`,
    902: `483`,
    903: `483`,
    904: `484`,
    905: `484`,
    906: `485`,
    907: `485`,
    908: `486`,
    909: `487`,
    91: `27`,
    910: `487`,
    911: `488`,
    912: `488`,
    913: `489`,
    914: `489`,
    915: `490`,
    916: `491`,
    917: `491`,
    918: `492`,
    919: `492`,
    92: `27`,
    920: `493`,
    921: `494`,
    922: `495`,
    923: `495`,
    924: `496`,
    925: `496`,
    926: `497`,
    927: `497`,
    928: `498`,
    929: `499`,
    93: `27`,
    930: `499`,
    931: `500`,
    932: `500`,
    933: `501`,
    934: `501`,
    935: `502`,
    936: `503`,
    937: `503`,
    938: `504`,
    939: `504`,
    94: `27`,
    940: `505`,
    941: `505`,
    942: `505`,
    943: `506`,
    944: `507`,
    945: `507`,
    946: `508`,
    947: `509`,
    948: `510`,
    949: `510`,
    95: `27`,
    950: `512`,
    951: `512`,
    952: `513`,
    953: `513`,
    954: `514`,
    955: `515`,
    956: `515`,
    957: `516`,
    958: `517`,
    959: `518`,
    96: `27`,
    960: `518`,
    961: `519`,
    962: `520`,
    963: `520`,
    964: `520`,
    965: `521`,
    966: `522`,
    967: `522`,
    968: `523`,
    969: `524`,
    97: `27`,
    970: `525`,
    971: `525`,
    972: `526`,
    973: `527`,
    974: `528`,
    975: `528`,
    976: `529`,
    977: `530`,
    978: `531`,
    979: `531`,
    98: `27`,
    980: `532`,
    981: `533`,
    982: `534`,
    983: `534`,
    984: `535`,
    985: `536`,
    986: `537`,
    987: `537`,
    988: `538`,
    989: `539`,
    99: `27`,
    990: `540`,
    991: `540`,
    992: `541`,
    993: `542`,
    994: `543`,
    995: `543`,
    996: `544`,
    997: `545`,
    998: `546`,
    999: `546`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 4,
  stateSize: 397,
  unsupported: [],
  version: 13,
  warnings: [`API User_claim may use up to 5 accounts, but the limit is 4. API User_claim starts at /app/raffle_token_v2.rsh:134:37:application.`, `API User_claim may use up to 9 transaction references, but the limit is 8. API User_claim starts at /app/raffle_token_v2.rsh:134:37:application.`, `Step 3 may use up to 11 transaction references, but the limit is 8. Step 3 starts at /app/raffle_token_v2.rsh:134:37:dot.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/raffle_token_v2.rsh:134:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"uint256","name":"elem9","type":"uint256"},{"internalType":"uint256","name":"elem10","type":"uint256"},{"internalType":"address payable","name":"elem11","type":"address"},{"internalType":"uint256","name":"elem12","type":"uint256"},{"internalType":"address payable","name":"elem13","type":"address"},{"internalType":"address payable","name":"elem14","type":"address"}],"internalType":"struct T12","name":"v7070","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"uint256","name":"elem9","type":"uint256"},{"internalType":"uint256","name":"elem10","type":"uint256"},{"internalType":"address payable","name":"elem11","type":"address"},{"internalType":"uint256","name":"elem12","type":"uint256"},{"internalType":"address payable","name":"elem13","type":"address"},{"internalType":"address payable","name":"elem14","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_310","type":"tuple"},{"internalType":"bool","name":"_User_claim0_310","type":"bool"},{"internalType":"bool","name":"_User_determinWinnerAfterDeadline0_310","type":"bool"},{"internalType":"bool","name":"_User_end0_310","type":"bool"},{"internalType":"bool","name":"_User_optin0_310","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2713","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2739","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3154","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v3534","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3907","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4282","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7031","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v7035","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"address payable","name":"_asset","type":"address"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"uint256","name":"_maxEntries","type":"uint256"},{"internalType":"uint256","name":"_numberOfTickets","type":"uint256"},{"internalType":"bytes30","name":"_projectName","type":"bytes30"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v7051","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_determinWinnerAfterDeadline","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v7073","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_310","type":"tuple"},{"internalType":"bool","name":"_User_claim0_310","type":"bool"},{"internalType":"bool","name":"_User_determinWinnerAfterDeadline0_310","type":"bool"},{"internalType":"bool","name":"_User_end0_310","type":"bool"},{"internalType":"bool","name":"_User_optin0_310","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v7076","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62004d12388190036080601f8201601f19168101906001600160401b0382119082101762000880576101e09282916040526080391262000a11576040516101e081016001600160401b038111828210176200088057604052608051815260a05161ffff198116810362000a115760208201526200007d60c062000a32565b604082015260e051801515810362000a1157606082015261010080516080830152610120805160a0840152610140805160c08501526101605160e085015261018051928401929092526101a051908301526101c05190820152620000e36101e062000a32565b610160820152610200516101808201526200010061022062000a32565b6101a08201526200011361024062000a32565b6101c08201524360035560405161022081016001600160401b0381118282101762000880576040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c08201526040518061014081011060018060401b036101408301111762000880576000918161014061020093016040528381528360208201528360408201528360608201528360808201528360a08201528360c08201528360e0820152836101008201528361012082015260e0820152826101008201528261012082015282610140820152620001f462000a47565b61016082015282610180820152826101a0820152826101c0820152826101e0820152015260405190620002278262000a16565b6200023162000a47565b82526200023d62000a68565b60208301526200024c62000a68565b604083015260ff60045416620009f8577f1fea993e11a2a0d2c9ec9a5602125296531c6dcd7c7cbdc79eb1053f1e22ad5e6102006040513381528351602082015261ffff19602085015116604082015260018060a01b036040850151166060820152606084015115156080820152608084015160a082015260a084015160c082015260c084015160e082015260e084015161010082015261010084015161012082015261012084015161014082015261014084015161016082015260018060a01b03610160850151166101808201526101808401516101a082015260018060a01b036101a0850151166101c082015260018060a01b036101c0850151166101e0820152a180518015908115620009eb575b5015620009d2576000825152600060208351015260006040835101528151602083015152815160208084015101526020820151805160406020820151910151151560405191620003ad8362000a16565b6000835260208301526040820152620003c562000a68565b9160005b60028110620009985750508152604083810191909152610160820151908201516001600160a01b03908116911603620009905760005b15620009775760c08101516080820151106200095e57600019610100820151101562000945576001610100820151106200092c57346200091357604051916001600160401b0361020084019081119084111762000880576040916102008401835260008452600060208501526000838501526000606085015260006080850152600060a0850152600060c0850152600060e08501526000610100850152600061012085015260006101408501526000610160850152600061018085015260006101a085015260006101c0850152620004d662000a68565b6101e085015233845261ffff19602082015116602085015260018060a01b038382015116838501526060810151151560608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015261012081015161012085015261014081015161014085015260018060a01b036101608201511661016085015261018081015161018085015260018060a01b036101a0820151166101a08501526101c060018060a01b03910151166101c08401520151602081015160406020820151910151151560405191620005c08362000a16565b6000835260208301526040820152620005d862000a68565b9160005b60028110620008c357505060208201526101e08201526001600055436001556101e06040519160018060a01b03815116602084015261ffff19602082015116604084015260018060a01b036040820151166060840152606081015115156080840152608081015160a084015260a081015160c084015260c081015160e084015260e081015161010084015261010081015161012084015261012081015161014084015261014081015161016084015260018060a01b03610160820151166101808401526101808101516101a084015260018060a01b036101a0820151166101c084015260018060a01b036101c08201511682840152015161020082016000905b6002821062000896576102a08452836102c081016001600160401b03811182821017620008805760405280516001600160401b0381116200088057600254600181811c9116801562000875575b60208210146200085f57601f8111620007f5575b50602091601f82116001146200078b579181926000926200077f575b50508160011b916000199060031b1c1916176002555b60405161423a908162000ad88239f35b01519050828062000759565b601f19821692600260005260206000209160005b858110620007dc57508360019510620007c2575b505050811b016002556200076f565b015160001960f88460031b161c19169055828080620007b3565b919260206001819286850151815501940192016200079f565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000854575b601f0160051c01905b8181106200084757506200073d565b6000815560010162000838565b90915081906200082f565b634e487b7160e01b600052602260045260246000fd5b90607f169062000729565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620006dc565b620008cf818362000aaf565b51620008dc828662000aaf565b52620008e9818562000aaf565b506000198114620008fd57600101620005dc565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b6001620003ff565b620009a4818362000aaf565b51620009b1828662000aaf565b52620009be818562000aaf565b506000198114620008fd57600101620003c9565b60405163100960cb60e01b815260136004820152602490fd5b905060015414386200035d565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b606081019081106001600160401b038211176200088057604052565b51906001600160a01b038216820362000a1157565b6040519062000a568262000a16565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620008805781528260005b82811062000a9757505050565b60209062000aa462000a47565b818401520162000a8a565b90600281101562000ac15760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e6851461020c5780631e93b0f114610203578063213b7923146101fa5780633702d0ce146101f157806342fbef30146101e857806347dc4e6c146101df578063573b8510146101d65780635cd91bc2146101cd5780635f8564cf146101c45780635fde30d8146101bb578063690141ef146101b25780636cf1d802146101a95780637888d2df146101a05780637a2b54dc14610197578063832307571461018e578063883513de146101855780638ddecb6d1461017c578063a579242414610173578063ab53f2c61461016a578063c5d86f6f14610161578063d184691f14610158578063da70a5251461014f578063e9e71ad514610146578063edca41711461013d5763fa726c840361000e5761013861102a565b61000e565b50610138610fea565b50610138610fb3565b50610138610efb565b50610138610eab565b50610138610e53565b50610138610dde565b50610138610d47565b50610138610cd5565b50610138610c3b565b50610138610c1c565b50610138610bdc565b50610138610b5b565b50610138610af8565b50610138610a86565b50610138610966565b50610138610874565b506101386107ea565b506101386104fd565b506101386104a2565b506101386103f3565b50610138610399565b506101386102ba565b5061013861027e565b503461027957600036600319011261027957610226611506565b6004600054036102605760406020916101c0610251610243611185565b858082518301019101611727565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b5034610279576000366003190112610279576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361027957565b50346102795760203660031901126102795761036060a06004356102dd816102a9565b6102e5611506565b906102f46004600054146118a7565b61030e6102ff611185565b60208082518301019101611727565b50600180841b031661031f816113a8565b5161032981610385565b61033281610385565b60009060010361036457506103486040916113a8565b01519182915b01526040519081529081906020820190565b0390f35b905091829161034e565b50634e487b7160e01b600052602160045260246000fd5b6002111561038f57565b61039761036e565b565b50346102795760203660031901126102795760606103ca6004356103bc816102a9565b6103c46112db565b50611420565b604080519180516103da81610385565b8352602081015115156020840152015115156040820152f35b5060e036600319011261027957610408611506565b60405190610415826110ce565b600435825260c03660231901126102795760405191610433836110f6565b6024359260058410156102795761049693815261044f36614086565b6020820152606435610460816115a7565b604082015261046d6141e6565b606082015261047a6141f3565b6080820152610487614200565b60a08201526020820152612172565b60405160008152602090f35b5060003660031901126102795760206101a06104bc611506565b6104f1816104c8611e67565b8581019060018251525115156040825101526104e2611e67565b90600082525186820152612172565b01511515604051908152f35b5060208060031936011261027957610513611506565b5061051d366140a6565b906105266140c6565b6105346001600054146118c7565b61054d61053f611185565b8380825183010191016140f5565b9061056961056461056060045460ff1690565b1590565b6118e7565b604080513381528551602082015290946105b3917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908790a15180159081156107de575b50611907565b6101409182810192835134146105c890611927565b6101e09182810151868101518051916101809182850193845101908b8b8201519101511515906105f661122e565b9283528b83015215158b82015261060c91613833565b86526101608084019283516106209061029d565b815161062c91336137f0565b61063590611947565b845133906001600160a01b039061064b9061029d565b161461065690611967565b898801958651600090528a8751016000905288515151968c8a01978851528b885101600090528c8851016000905287516060016106939060019052565b875160056080918201528a516020015151895160a0015287018051895160c001529051885160e001526106c46120b0565b9b8c88516106d19061029d565b6106da916112fa565b8088015161ffff1916908d01528c8701516106f49061029d565b610700908d8f016112fa565b60608701511515151560608d01525160808c015260a0860194855160a08d015260c087015160c08d015260e087015160e08d015261010080880151908d015261012080880151908d0152516107549061029d565b61075f918c016112fa565b51908901526101a090818401516107759061029d565b610780918a016112fa565b6101c0809301516107909061029d565b61079b9189016112fa565b516107a69042613584565b908601525190840152436102008401524261022084015251610240830152516102608201526107d490613deb565b5160008152602090f35b905060015414386105ad565b503461027957600036600319011261027957610804611506565b60046000540361083b576080610360916102606108226102ff611185565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600a6004820152602490fd5b6001600160a01b03169052565b6001600160a01b03909116815260200190565b50600036600319011261027957602061088b611506565b6108c081610897611e67565b8481019060028251525115156060825101526108b1611e67565b90600082525185820152612172565b6101c001516040516001600160a01b039091168152f35b61039790929192610140810193805182526108fa60208201516020840190610854565b6040810151604083015261091660608201516060840190610854565b6080810151608083015261093360a082015160a084019015159052565b60c0818101519083015260e080820151908301526101008082015161ffff19169083015261012080910151910190610854565b50346102795760003660031901126102795761098061149b565b5061036060e061098e611506565b610996611dd2565b6109a4600460005414611987565b610a746109b26102ff611185565b6101608101518351526109d56109cb604083015161029d565b60208551016112fa565b610a6b6101406101009283810151604087510152610a046109fa61018083015161029d565b60608851016112fa565b60a0810151608087510152610a2b610a1f6060830151151590565b60a08851019015159052565b610a64610120948583015160c08951015260808301518a89510152610a56602084015161ffff191690565b885161ffff19909116910152565b015161029d565b908351016112fa565b519182910152604051918291826108d7565b503461027957600036600319011261027957610aa0611506565b600460005403610adf5761012060209160c06101e0610ace610ac0611185565b868082518301019101611727565b015101519182910152604051908152f35b60405163100960cb60e01b8152600f6004820152602490fd5b506020366003190112610279576020610180610b12611506565b6104f181604051610b22816110ce565b604051610b2e81611111565b60008152815285810190610b40611dff565b825260043581515260008251525186825101526104e2611e67565b503461027957600036600319011261027957610b75611506565b600460005403610bc35761036090610b8b611185565b805161014092916001600160a01b03918491610baf91810160209081019101611727565b015116918291015260405191829182610861565b60405163100960cb60e01b815260106004820152602490fd5b506000366003190112610279576020610200610bf6611506565b6104f181610c02611e67565b85810190600482515251151560a0825101526104e2611e67565b5034610279576000366003190112610279576020600154604051908152f35b503461027957600036600319011261027957610c55611506565b600460005403610c7f5760208091610320610251610c71611185565b848082518301019101611727565b60405163100960cb60e01b815260076004820152602490fd5b6040908051610ca681610385565b83526020818101511515908401528101516001600160a01b0316910152565b6060810192916103979190610c98565b503461027957600036600319011261027957610cef6112db565b50610cf8611506565b600460005403610d2e576101606103609160e06101e0610d196102ff611185565b01510151918291015260405191829182610cc5565b60405163100960cb60e01b815260116004820152602490fd5b503461027957602036600319011261027957600435610d65816102a9565b610d6d611506565b90600460005403610dc557610360916001610d9c60c093610d8f6102ff611185565b50828060a01b0316611420565b51610da681610385565b610daf81610385565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600c6004820152602490fd5b503461027957600080600319360112610e50578054610dfb611185565b906040519283918252602090604082840152835191826040850152815b838110610e3957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610e18565b80fd5b5034610279576020366003190112610279576060610e84600435610e76816102a9565b610e7e6112db565b506113a8565b60408051918051610e9481610385565b835260208101511515602084015201516040820152f35b503461027957600036600319011261027957610ec5611506565b600460005403610ee2576060602091610200610251610243611185565b60405163100960cb60e01b815260096004820152602490fd5b503461027957602036600319011261027957600435610f186112db565b50610f216112db565b816000526007602052600160ff60406000205416610f3e81610385565b03610f9e57506000526007602052610360604060002060405190610f618261112c565b5460ff8116610f6f81610385565b8252600881901c60ff161515602083015260101c6001600160a01b031660408201525b60405191829182610cc5565b61036091506000815260006020820152610f92565b503461027957602036600319011261027957610fcd6112db565b506060610fdb600435611309565b610fe86040518092610c98565bf35b5060003660031901126102795760206101e0611004611506565b6104f181611010611e67565b8581019060038251525115156080825101526104e2611e67565b503461027957600036600319011261027957611044611506565b6004600054036110645761010060209160406101e0610ace610ac0611185565b60405163100960cb60e01b8152600e6004820152602490fd5b90600182811c921680156110ad575b602083101461109757565b634e487b7160e01b600052602260045260246000fd5b91607f169161108c565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176110e957604052565b6110f16110b7565b604052565b60c081019081106001600160401b038211176110e957604052565b602081019081106001600160401b038211176110e957604052565b606081019081106001600160401b038211176110e957604052565b60a081019081106001600160401b038211176110e957604052565b601f909101601f19168101906001600160401b038211908210176110e957604052565b60405190600082600254916111998361107d565b80835260019380851690811561120d57506001146111bf575b5061039792500383611162565b6002600090815260008051602061420e83398151915294602093509091905b8183106111f55750506103979350820101386111b2565b855488840185015294850194879450918301916111de565b905061039794506020925060ff191682840152151560051b820101386111b2565b604051906103978261112c565b6040519061022082016001600160401b038111838210176110e957604052565b6040519061034082016001600160401b038111838210176110e957604052565b604051906102c082016001600160401b038111838210176110e957604052565b6040519061028082016001600160401b038111838210176110e957604052565b6040519061020082016001600160401b038111838210176110e957604052565b604051906112e88261112c565b60006040838281528260208201520152565b6001600160a01b039091169052565b906113126112db565b916000908082526005602052600160ff60408420541661133181610385565b036113835760409293508152600560205220604051906113508261112c565b5460ff811661135e81610385565b8252600881901c60ff161515602083015260101c6001600160a01b0316604082015290565b508083526020830152565b6001600160a01b0316600090815260066020526040902090565b906113b16112db565b9160018060a01b03166000908082526006602052600160ff6040842054166113d881610385565b0361138357604092935081526006602052206001604051916113f98361112c565b60ff815481811661140981610385565b855260081c16151560208401520154604082015290565b906114296112db565b9160018060a01b03166000908082526008602052600160ff60408420541661145081610385565b03611383576040929350815260086020522060ff604051916114718361112c565b5481811661147e81610385565b8352818160081c161515602084015260101c161515604082015290565b6040519061014082016001600160401b038111838210176114f9575b604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b6115016110b7565b6114b7565b61150e61123b565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c084015261154061149b565b60e08401528061010084015280610120840152806101408401526115626112db565b61016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b5190610397826102a9565b519061ffff198216820361027957565b8015150361027957565b5190610397826115a7565b9190826060910312610279576040516115d48161112c565b809280516002811015610279576040918291845260208101516115f6816115a7565b6020850152015191611607836102a9565b0152565b919061014083820312610279576040519060e09061168e9061010084016001600160401b03811185821017611693575b604052828496805186526020810151602087015260408101516040870152611665606082016115b1565b60608701526080810151608087015260a081015160a087015260c081015160c0870152016115bc565b910152565b61169b6110b7565b61163b565b9190826060910312610279576040516116b88161112c565b60408082948051845260208101516020850152015191611607836115a7565b81601f8201121561027957604051916116ef836110ce565b829060c083019281841161027957915b83831061170d575050505090565b602060609161171c84866116a0565b8152019201916116ff565b90610540828203126102795761052061173e61125b565b926117488161158c565b845261175660208201611597565b60208501526117676040820161158c565b6040850152611778606082016115b1565b60608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e0850152610100808201519085015261012080820151908501526101406117c981830161158c565b9085015261016080820151908501526101806117e681830161158c565b908501526101a06117f881830161158c565b908501526101c080820151908501526101e06118168482840161160b565b9085015261189861032093848301516102008701526118398161034085016116d7565b61022087015261040083015161024087015261185861042084016115b1565b6102608701526104408301516102808701526104608301516102a08701526104808301516102c08701526104a08301516102e08701526104c083016116a0565b61030085015201519082015290565b156118ae57565b60405163100960cb60e01b8152600b6004820152602490fd5b156118ce57565b60405163100960cb60e01b815260196004820152602490fd5b156118ee57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561190e57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561192e57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561194e57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561196e57565b60405163100960cb60e01b8152601e6004820152602490fd5b1561198e57565b60405163100960cb60e01b8152600d6004820152602490fd5b156119ae57565b60405163100960cb60e01b8152601f6004820152602490fd5b156119ce57565b60405163100960cb60e01b815260206004820152602490fd5b156119ee57565b60405163100960cb60e01b815260216004820152602490fd5b15611a0e57565b60405163100960cb60e01b8152603d6004820152602490fd5b15611a2e57565b60405163100960cb60e01b8152603e6004820152602490fd5b15611a4e57565b60405163100960cb60e01b8152603f6004820152602490fd5b15611a6e57565b60405163100960cb60e01b815260386004820152602490fd5b15611a8e57565b60405163100960cb60e01b815260396004820152602490fd5b15611aae57565b60405163100960cb60e01b8152603a6004820152602490fd5b15611ace57565b60405163100960cb60e01b8152603b6004820152602490fd5b15611aee57565b60405163100960cb60e01b8152603c6004820152602490fd5b15611b0e57565b60405163100960cb60e01b815260316004820152602490fd5b15611b2e57565b60405163100960cb60e01b815260326004820152602490fd5b15611b4e57565b60405163100960cb60e01b815260336004820152602490fd5b15611b6e57565b60405163100960cb60e01b815260346004820152602490fd5b15611b8e57565b60405163100960cb60e01b815260356004820152602490fd5b15611bae57565b60405163100960cb60e01b815260366004820152602490fd5b15611bce57565b60405163100960cb60e01b815260376004820152602490fd5b15611bee57565b60405163100960cb60e01b815260296004820152602490fd5b15611c0e57565b60405163100960cb60e01b8152602a6004820152602490fd5b15611c2e57565b60405163100960cb60e01b8152602b6004820152602490fd5b15611c4e57565b60405163100960cb60e01b8152602c6004820152602490fd5b15611c6e57565b60405163100960cb60e01b8152602d6004820152602490fd5b15611c8e57565b60405163100960cb60e01b8152602e6004820152602490fd5b15611cae57565b60405163100960cb60e01b8152602f6004820152602490fd5b15611cce57565b60405163100960cb60e01b815260306004820152602490fd5b15611cee57565b60405163100960cb60e01b815260226004820152602490fd5b15611d0e57565b60405163100960cb60e01b815260236004820152602490fd5b15611d2e57565b602460405163100960cb60e01b8152816004820152fd5b15611d4c57565b60405163100960cb60e01b815260256004820152602490fd5b15611d6c57565b60405163100960cb60e01b815260266004820152602490fd5b15611d8c57565b60405163100960cb60e01b815260276004820152602490fd5b15611dac57565b60405163100960cb60e01b815260286004820152602490fd5b51611dcf81610385565b90565b60405190611ddf82611111565b81611de861149b565b9052565b60405190611df982611111565b60008252565b6040519060c082016001600160401b03811183821017611e50575b6040528160a0600091828152604051611e3281611111565b83815260208201528260408201528260608201528260808201520152565b611e586110b7565b611e1a565b6005111561038f57565b60405190611e74826110ce565b8160008152602061168e611dff565b604090815191611e92836110ce565b8260005b828110611ea257505050565b602090611ead6112db565b8184015201611e96565b60405190611ec4826110ce565b60006020838281520152565b6040519061010082016001600160401b03811183821017611f22575b6040528160008082528060208301528060408301528060608301528060808301528060a083015260c082015260e061168e6112db565b611f2a6110b7565b611eec565b611f3761127b565b90611f40611dec565b82526000806020840152806040840152806060840152611f5e611e83565b6080840152611f6b611eb7565b60a08401528060c08401528060e084015280610100840152611f8b6112db565b610120840152611f99611ed0565b610140840152611fa7611ed0565b61016084015280610180840152611fbc611e83565b6101a0840152806101c0840152611fd1611e83565b6101e0840152611fdf611ed0565b610200840152611fed6112db565b6102208401526102408301526120016112db565b61026083015261200f611ed0565b61028083015261201d611ed0565b6102a0830152565b90929160a0602060e092610100850196600180851b0316855280518286015201518051600581101561208e575b6040850152602081015151606085015260408101511515608085015260608101511515828501526080810151151560c085015201511515910152565b61209661036e565b612052565b5160058110156120a85790565b611dcf61036e565b6120b861129b565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152612121611ed0565b6101e0840152806102008401528061022084015261213d611e83565b610240840152610260830152565b90600281101561215c5760051b0190565b634e487b7160e01b600052603260045260246000fd5b61217a611f2f565b906121896004600054146119a7565b60206121a4612196611185565b828082518301019101611727565b916121bc6121b761056060045460ff1690565b6119c7565b7f6208016c67e3e236a673e1e5ef2c2ecb7c82bbbaf3dceeefa8ad16395a7ae0da604051806121ec843383612025565b0390a16122048151801590811561353e575b506119e7565b0161220f815161209b565b61221881611e5d565b61298d57516020015182526001612236612231336113a8565b611dc5565b61223f81610385565b03612980576122be6122b26040612255336113a8565b01515b602085019081526122746102008501516101c086015111611ce7565b61228360018651511015611d07565b6122a7612294825187515190613584565b8060408801526101208601511015611d27565b845151905190613584565b60808301511015611d45565b6122d0825151610100830151906135da565b60608301526122df3415611d65565b61232f6102208201516103208301516060850151019061232a61030085015161231060406020830151920151151590565b9061231961122e565b948552602085015215156040840152565b6138f3565b6080830152612358612353612347604084015161029d565b606085015190336137f0565b611d85565b61237761237261236c61014084015161029d565b33613795565b611da5565b6123906123833361138e565b805460ff19166001179055565b604082015160016123a03361138e565b01557fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873361240460a084016123d53382516112fa565b8451516020825101525160405191829182919091602080604083019460018060a01b0381511684520151910152565b0390a161242761238360206101e084015101516000526005602052604060002090565b61246f3361244860206101e085015101516000526005602052604060002090565b805462010000600160b01b03191660109290921b62010000600160b01b0316919091179055565b61247d610280820151613561565b8060c084015260c08201519081811460001461292b575050600160e08301525b60e08201511561271a576124ef610180610397947f20e52d971eb26d66aa9aaa387e5479ab272c968a33b7d8ee1d5bc127fbdfedbe604051806124e581906001602083019252565b0390a10160019052565b6124fe61012083015160019052565b612510336040610120850151016112fa565b6125246102a0820151606084015190613584565b6101408301515261253d60206101e08301510151613561565b6020610140840151015261255961028082015183515190613584565b6040610140840151015261258861257860606101e08401510151151590565b6060610140850151019015159052565b60806101e08201510151608061014084015101526102e081015160a061014084015101526125be6102c082015183515190613598565b60c0610140840151015261012082015160e0610140840151015260806125e26120b0565b926125f66125f0845161029d565b856112fa565b60208301516126119061ffff19165b61ffff19166020860152565b61262a612621604085015161029d565b604086016112fa565b61264361263a6060850151151590565b15156060860152565b818301518285015260a083015160a085015260c083015160c085015260e083015160e085015261010083015161010085015261012083015161012085015261269c61269261014085015161029d565b61014086016112fa565b61016080840151908501526126c26126b861018085015161029d565b61018086016112fa565b6126dc6101a06126d48186015161029d565b9086016112fa565b6101c08301516101c08501526101408101516101e0850152436102008501524261022085015201519061024091828401520151610260820152613deb565b612758610180610397947fd0d6f822c5871af41e285e8ec38b40284b23aacf6ee21df0788be0e4d2c219f9604051806124e581906001602083019252565b61276c6102a0820151606084015190613584565b6101608301515261278560206101e08301510151613561565b602061016084015101526127a161028082015183515190613584565b604061016084015101526127d06127c060606101e08401510151151590565b6060610160850151019015159052565b60806101e08201510151608061016084015101526102e081015160a061016084015101526128066102c082015183515190613598565b60c0610160840151015260e06101e0820151015160e06101608401510152608061282e6120b0565b9261283c6125f0845161029d565b602083015161284f9061ffff1916612605565b61285f612621604085015161029d565b61286f61263a6060850151151590565b818301518285015260a083015160a085015260c083015160c085015260e083015160e08501526101008301516101008501526101208301516101208501526128be61269261014085015161029d565b6101608301516101608501526128db6126b861018085015161029d565b6128ed6101a06126d48186015161029d565b6101c08301516101c08501526101608101516101e0850152436102008501524261022085015201519061024091828401520151610260820152613deb565b116129735761295461294561028083015184515190613584565b60c08301511115610100840152565b61296e612965610100840151151590565b151560e0840152565b61249d565b6000610100830152612954565b6122be6122b26000612258565b600161299d82959394955161209b565b6129a681611e5d565b03612d8b575090612c066101a061039794936129de60016129cf60e06101e08801510151611dc5565b6129d881610385565b14611be7565b6129f46129ef610260860151151590565b611c07565b612a156102e0850151612a0c61022087015160200190565b51511015611c27565b6001612a2960e06101e08701510151611dc5565b612a3281610385565b03612d79576101e084015160e0015160400151612a5d906001600160a01b03165b61018087016112fa565b612a7d3360018060a01b03612a7661018089015161029d565b1614611c47565b612a873415611c67565b612a9f612a9a61236c604087015161029d565b611c87565b612ab8612ab361236c61014087015161029d565b611ca7565b612ac96101c0850151421015611cc7565b612b9b612b0c610220860151602081015190612b07604060208401519301511515612af261122e565b93600085526020850152604084019015159052565b613893565b838701908152612b53612b2361014088015161029d565b612b316101808a015161029d565b90612b416102208a015160200190565b5151916001600160a01b031690613643565b612b7381515151612b6d612b66826135ad565b6064900490565b90613598565b90816101c08901525161232a815192835103926040602082015191015115159061231961122e565b6101e0860152612bd3612bb1604086015161029d565b612bbb865161029d565b6101c0880151916001600160a01b0390911690613643565b604051600181527fb95b4c0d737b528db10ba709eb28d28a4bf4ff9687c38997cfaee3b853d665689080602081016124e5565b6101e0828101515151610200840180519190915282820180516020908101518351909101526102808401518251604001528151600060609091018190528151608090810151845190910152825160a001526102c0840151825160c001525160e09081015191510152612c766120b0565b92612c846125f0845161029d565b6020830151612c979061ffff1916612605565b612ca7612621604085015161029d565b612cb761263a6060850151151590565b6080830151608085015260a083015160a085015260c083015160c085015260e083015160e085015261010080840151908501526101208084015190850152612d0661269261014085015161029d565b6101608084015190850152612d226126b861018085015161029d565b612d3d612d336101a085015161029d565b6101a086016112fa565b6101c08301516101c085015261020081015182850152436102008501524261022085015201519061024091828401520151610260820152613deb565b612a5d612d86855161029d565b612a53565b6002612d97825161209b565b612da081611e5d565b036130c057508161024091612dd3612dc460e06101e0610397989701510151611dc5565b612dcd81610385565b15611b07565b612de9612de4610260840151151590565b611b27565b612df33415611b47565b612e0b612e0661236c604085015161029d565b611b67565b612e24612e1f61236c61014085015161029d565b611b87565b612e356101c0830151421015611ba7565b612e55612e5060e084015160206101e0860151015190613639565b611309565b612e7c600161022087019280845251612e6d81610385565b612e7681610385565b14611bc7565b6001612e888251611dc5565b612e9181610385565b036130a8575160400151612f08906001600160a01b0316915b612eb785870193846112fa565b7fc4ea8ab7e88626d7dbadbcbc0a80314f050e0346a6ecb55f57a493a4bb760c4a612ef1612ee5855161029d565b60405191829182610861565b0390a16101c0612f01845161029d565b91016112fa565b612f2f612f25610260860192612f1f845160019052565b5161029d565b60408351016112fa565b6102a0820151936102808091019485515260206101e08401510151602086510152820151604085510152612f7a612f6e60606101e08501510151151590565b60608651019015159052565b60806101e083015101516080855101526102e082015160a0855101526102c082015160c0855101525160e084510152612fb16120b0565b92612fbf6125f0835161029d565b6020820151612fd29061ffff1916612605565b612fe2612621604084015161029d565b612ff261263a6060840151151590565b6080820151608085015260a082015160a085015260c082015160c085015260e082015160e08501526101008083015190850152610120808301519085015261304161269261014084015161029d565b610160808301519085015261305e6101806126d48185015161029d565b6130706101a06126d48185015161029d565b6101c08201516101c0850152516101e08401524361020084015242610220840152610220810151828401520151610260820152613deb565b50612f086130ba6101a084015161029d565b91612eaa565b60036130cc825161209b565b6130d581611e5d565b0361338e57506130ed6130e8835161029d565b61029d565b3303613373576130fd6001611a67565b6102c08201805191608084019283511461311690611a87565b6131203415611aa7565b604084019485516131309061029d565b61313a9033613795565b61314390611ac7565b61014080860180516131549061029d565b61315e9033613795565b61316790611ae7565b604051600181527fcab76c85c5319c5d344d736d5c302a58a1e46fc61c4e535e8d5c76462ff9f87090602090a160016101e09485015280516131a89061029d565b95610220958689019788516131bd9060200190565b5151336131c992613643565b6102a0808a0151950194855152858901908151602001518651602001526102808a01518651604001528551606001600090528151608001518651608001526102e08a0151865160a0015251855160c001525160e00151845160e0015261322d6120b0565b9888516132399061029d565b613243908b6112fa565b60208981015161ffff1916908b01525161325c9061029d565b6132699060408b016112fa565b60608801511515151560608a015251608089015260a087015160a089015260c087015160c089015260e087015160e089015261010080880151908901526101208088015190890152516132bb9061029d565b6132c69188016112fa565b6101608086015190870152610180808601516132e19061029d565b6132ec9188016112fa565b6101a0808601516132fc9061029d565b6133079188016112fa565b6101c08086015190870152519085015243610200850152429084015251602081015160208101519060400151151561333d61122e565b6000815260208101929092521515604082015261335991613893565b906102409182840152015161026082015261039790613deb565b6130fd6133876130e86101a085015161029d565b3314611a67565b60049192935061339e905161209b565b6133a781611e5d565b146133b0575050565b610397916133be3415611a07565b60408101916133d86133d361236c855161029d565b611a27565b6134d36101406134cb8185016133f96133f461236c835161029d565b611a47565b604051600081527f5add607f8ef6f3257dd54849c4b99e5599f4cd4f0c2954cbecdaf87b05a07deb90602090a160006102008096015261346e61346561343d6120b0565b9861345161344b8a5161029d565b8b6112fa565b60208981015161ffff1916908b0152612f1f565b604089016112fa565b61348761347e6060880151151590565b15156060890152565b6080860151608088015260a086015160a088015260c086015160c088015260e086015160e0880152610100808701519088015261012080870151908801525161029d565b9085016112fa565b61016080830151908401526134f06101806134cb8185015161029d565b6135026101a06134cb8185015161029d565b6101c080830151908401526101e08083015190840152439083015261022042818401528101519061024091828401520151610260820152613deb565b905060015414386121fe565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111613577575b821061027957565b61357f61354a565b61356f565b919082019182811161357757821061027957565b9081039081116135a55790565b611dcf61354a565b906005820291808304600514811517156135cd575b600583040361027957565b6135d561354a565b6135c2565b919060009281159182156135f2575b50501561027957565b8181929395500282810482148315171561362c575b809461361657041438806135e9565b634e487b7160e01b600052601260045260246000fd5b61363461354a565b613607565b8115610279570690565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526136bf93600093849392849190608081016001600160401b038111828210176136c6575b6040525193165af16136af6136a86136d3565b8092613735565b5060208082518301019101613720565b1561027957565b6136ce6110b7565b613695565b3d1561371b573d906001600160401b03821161370e575b60405191613702601f8201601f191660200184611162565b82523d6000602084013e565b6137166110b7565b6136ea565b606090565b908160209103126102795751611dcf816115a7565b1561373d5790565b80511561374c57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561376d5790565b80511561377c57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611dcf928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526137d981611147565b5193165af16136af6137e96136d3565b8092613765565b600091611dcf9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526137d981611147565b919061383d611e83565b9260005b600281106138525750506020830152565b8061385f6001928461214b565b5161386a828861214b565b52613875818761214b565b506000198114613886575b01613841565b61388e61354a565b613880565b919061389d611e83565b9260005b600281106138b25750506020830152565b806138bf6001928461214b565b516138ca828861214b565b526138d5818761214b565b5060001981146138e6575b016138a1565b6138ee61354a565b6138e0565b91906138fd611e83565b9260005b6002811061390f5750508252565b8061391c6001928461214b565b51613927828861214b565b52613932818761214b565b506000198114613943575b01613901565b61394b61354a565b61393d565b506040513d6000823e3d90fd5b818110613968575050565b6000815560010161395d565b61397f60025461107d565b806139875750565b601f811160011461399a57506000600255565b60026000526139df90601f0160051c60008051602061420e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61395d565b6000602081208160025555565b6139f461125b565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152613a5d611ed0565b6101e084015280610200840152613a72611e83565b610220840152806102408401528061026084015280610280840152806102a0840152806102c0840152806102e0840152613aaa6112db565b610300840152610320830152565b9060e080610397938051845260208101516020850152604081015160408501526060810151151560608501526080810151608085015260a081015160a085015260c081015160c08501520151910190610c98565b60408091805184526020810151602085015201511515910152565b906000905b60028210613b3957505050565b6020606082613b4b6001948751613b0c565b01930191019091613b2c565b919091610520610540820193613b6e838251610854565b60208181015161ffff191690840152613b8f60408201516040850190610854565b6060818101511515908401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010080820151908401526101208082015190840152613bec6101408083015190850190610854565b6101608082015190840152613c0a6101808083015190850190610854565b613c1d6101a08083015190850190610854565b6101c08082015190840152613c3b6101e08083015190850190613ab8565b610200810151906103209182850152613c5e610220820151610340860190613b27565b61024081015161040085015261026081015115156104208501526102808101516104408501526102a08101516104608501526102c08101516104808501526102e08101516104a0850152613cbc6103008201516104c0860190613b0c565b0151910152565b90601f8211613cd0575050565b6103979160026000526020600020906020601f840160051c83019310613cfe575b601f0160051c019061395d565b9091508190613cf1565b80519091906001600160401b038111613dde575b613d3081613d2b60025461107d565b613cc3565b602080601f8311600114613d6c5750819293600092613d61575b50508160011b916000199060031b1c191617600255565b015190503880613d4a565b6002600052601f1983169490919060008051602061420e833981519152926000905b878210613dc6575050836001959610613dad575b505050811b01600255565b015160001960f88460031b161c19169055388080613da2565b80600185968294968601518155019501930190613d8e565b613de66110b7565b613d1c565b6101e081810180516060015115613faa5761039792613f979260a0613fa593613f39613e156139ec565b94613e29613e23825161029d565b876112fa565b60208181015161ffff191690870152613e51613e48604083015161029d565b604088016112fa565b613e6a613e616060830151151590565b15156060880152565b60808101516080870152838101518487015260c081015160c087015260e081015160e087015261010080820151908701526101208082015190870152613ec0610140613eb88184015161029d565b9088016112fa565b6101608082015190870152613edd610180613eb88184015161029d565b613eef6101a0613eb88184015161029d565b6101c09485820195865190880152835190870152610220948582018051610200890152610240808401978851908a0152610260809401519089015251905111159086019015159052565b6040815101516102808501528051516102a085015260c0815101516102c08501525101516102e0830152805151610300830152515151610320820152613f7f6004600055565b613f8843600155565b60405192839160208301613b57565b03601f198101835282611162565b613d08565b5050806101a061405a92016000808080613fc76130e8865161029d565b6102608701519082821561407d575bf115614070575b613fea604083015161029d565b9161405061404a61402e614027610140614004875161029d565b61024087018051515190996001600160a01b039892610a649291908a1690613643565b945161029d565b945180519061232a604060208401519301511515612af261122e565b60200190565b5151921690613643565b600080556140686000600155565b610397613974565b614078613950565b613fdd565b506108fc613fd6565b6020906043190112610279576040519061409f82611111565b6044358252565b602090600319011261027957604051906140bf82611111565b6004358252565b604051906140d38261112c565b816140dc611e83565b81526140e66112db565b6020820152604061168e611ed0565b6102a081830312610279576141df61410b6112bb565b926141158361158c565b845261412360208401611597565b60208501526141346040840161158c565b6040850152614145606084016115b1565b60608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e08501526101008084015190850152610120808401519085015261014080840151908501526101606141a181850161158c565b9085015261018080840151908501526101a06141be81850161158c565b908501526101c06141d081850161158c565b908501526101e08093016116d7565b9082015290565b60843590610397826115a7565b60a43590610397826115a7565b60c43590610397826115a756fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 19730,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_token_v2.rsh:99:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_token_v2.rsh:330:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_token_v2.rsh:134:37:after expr stmt semicolon',
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
  "User_determinWinnerAfterDeadline": User_determinWinnerAfterDeadline,
  "User_end": User_end,
  "User_optin": User_optin
  };
export const _APIs = {
  User: {
    buyTicket: User_buyTicket,
    claim: User_claim,
    determinWinnerAfterDeadline: User_determinWinnerAfterDeadline,
    end: User_end,
    optin: User_optin
    }
  };
