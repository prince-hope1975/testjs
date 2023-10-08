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
    buyers: ctc3,
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
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc11;
  
  const map2_ctc = ctc8;
  
  const map3_ctc = ctc12;
  
  
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        
        return v2022;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentSec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        
        return v2006;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_currentTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        
        return v2018;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_hasDeadlineReached = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        
        return v2058;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_myTicketsAmount = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async (_v2066 ) => {
          const v2066 = stdlib.protect(ctc0, _v2066, null);
        
        const v2067 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc0, v2066, ctc3), null);
        const v2068 = stdlib.fromSome(v2067, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:153:72:decimal', stdlib.UInt_max, '0'));
        
        return v2068;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async (_v2061 ) => {
          const v2061 = stdlib.protect(ctc0, _v2061, null);
        
        const v2062 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc0, v2061, ctc7), null);
        const v2063 = {
          None: 0,
          Some: 1
          }[v2062[0]];
        const v2064 = stdlib.eq(v2063, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2064;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_props = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        const v2004 = {
          amountOfRaffleToken: v1977,
          cost: v1973,
          creator: v1978,
          deadline: v1970,
          isFeatured: v1968,
          maxEntries: v1974,
          numberOfTickets: v1969,
          projectName: v1967,
          raffleToken: v1976
          };
        
        return v2004;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsBought = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        const v2065 = v2014.currentUserNumber;
        
        return v2065;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_ticketsLeft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        const v2059 = v2014.ticketsLeft;
        
        return v2059;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        
        return v1976;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_winner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = svs;
      return (await ((async () => {
        
        const v2060 = v2014.winner;
        
        return v2060;}))(...args));
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
      1: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc0, ctc0, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc4, ctc3, ctc0, ctc0, ctc3, ctc9, ctc3, ctc6, ctc3, ctc2, ctc3, ctc3, ctc3, ctc3]
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    User_buyTicket0_303: ctc9,
    User_claim0_303: ctc10,
    User_determinWinnerAfterDeadline0_303: ctc10,
    User_end0_303: ctc10,
    User_optin0_303: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v1940 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1941 = [v1940];
  const v1945 = stdlib.protect(ctc1, interact.Admin, 'for Deployer\'s interact field Admin');
  const v1946 = stdlib.protect(ctc3, interact.amountOfRaffleToken, 'for Deployer\'s interact field amountOfRaffleToken');
  const v1947 = stdlib.protect(ctc3, interact.cost, 'for Deployer\'s interact field cost');
  const v1948 = stdlib.protect(ctc1, interact.creator, 'for Deployer\'s interact field creator');
  const v1949 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v1950 = stdlib.protect(ctc6, interact.isFeatured, 'for Deployer\'s interact field isFeatured');
  const v1951 = stdlib.protect(ctc3, interact.maxEntries, 'for Deployer\'s interact field maxEntries');
  const v1952 = stdlib.protect(ctc3, interact.numberOfTickets, 'for Deployer\'s interact field numberOfTickets');
  const v1953 = stdlib.protect(ctc7, interact.projectName, 'for Deployer\'s interact field projectName');
  const v1954 = stdlib.protect(ctc8, interact.raffleToken, 'for Deployer\'s interact field raffleToken');
  
  const v1957 = v1950 ? stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:4:25:decimal', stdlib.UInt_max, '750000') : stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:64:59:decimal', stdlib.UInt_max, '0');
  const v1958 = stdlib.protect(ctc3, await interact.random(), {
    at: './raffle_algo_v2.rsh:67:46:application',
    fs: ['at ./raffle_algo_v2.rsh:60:16:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:60:20:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v1959 = stdlib.safeMod(v1958, v1952);
  
  const v1960 = stdlib.le(v1959, v1952);
  stdlib.assert(v1960, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:90:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v1962 = stdlib.lt(v1947, stdlib.UInt_max);
  stdlib.assert(v1962, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v1964 = stdlib.ge(v1947, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:92:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1964, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1953, v1950, v1952, v1949, v1959, v1958, v1947, v1951, v1957, v1954, v1946, v1948, v1945],
    evt_cnt: 13,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7, ctc6, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979], secs: v1981, time: v1980, didSend: v148, from: v1966 } = txn1;
      
      const v1982 = v1941[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:dot', stdlib.UInt_max, '0')];
      const v1983 = stdlib.Array_set(v1982, '0', stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:dot', stdlib.UInt_max, '0'));
      const v1984 = stdlib.Array_set(v1941, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:dot', stdlib.UInt_max, '0'), v1983);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1976
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc6, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979], secs: v1981, time: v1980, didSend: v148, from: v1966 } = txn1;
  const v1982 = v1941[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:dot', stdlib.UInt_max, '0')];
  const v1983 = stdlib.Array_set(v1982, '0', stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:dot', stdlib.UInt_max, '0'));
  const v1984 = stdlib.Array_set(v1941, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:75:12:dot', stdlib.UInt_max, '0'), v1983);
  const v1986 = stdlib.le(v1971, v1969);
  stdlib.assert(v1986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:90:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cannot be more that tickets',
    who: 'Deployer'
    });
  const v1988 = stdlib.lt(v1973, stdlib.UInt_max);
  stdlib.assert(v1988, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too large',
    who: 'Deployer'
    });
  const v1990 = stdlib.ge(v1973, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:92:19:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1990, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Cost too small',
    who: 'Deployer'
    });
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1975, v1976, v1977, v1978, v1979, v1984],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1980,
    onlyIf: true,
    out_tys: [],
    pay: [v1975, [[v1977, v1976]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v1994, time: v1993, didSend: v157, from: v1992 } = txn2;
      
      sim_r.txns.push({
        amt: v1975,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1997 = v1984[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v1998 = v1997[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v1999 = stdlib.add(v1998, v1977);
      const v2001 = stdlib.Array_set(v1997, '0', v1999);
      const v2002 = stdlib.Array_set(v1984, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:96:12:dot', stdlib.UInt_max, '0'), v2001);
      sim_r.txns.push({
        amt: v1977,
        kind: 'to',
        tok: v1976
        });
      const v2006 = stdlib.safeAdd(v1994, v1970);
      const v2007 = await ctc.getContractInfo();
      
      const v2010 = v2002[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:129:23:application', stdlib.UInt_max, '0')];
      const v2011 = v2010[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:129:23:application', stdlib.UInt_max, '0')];
      const v2012 = ['None', null];
      const v2013 = {
        bal: v1975,
        buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        raffleBal: v2011,
        ticketsLeft: v1969,
        winner: v2012
        };
      const v2014 = v2013;
      const v2015 = v1993;
      const v2018 = v1994;
      const v2021 = v2002;
      const v2022 = v1975;
      
      if (await (async () => {
        const v2054 = v2014.keepGoing;
        
        return v2054;})()) {
        const v2058 = stdlib.ge(v2018, v2006);
        const v2069 = v2014.currentUserNumber;
        const v2070 = v2014.bal;
        const v2071 = v2014.ticketsLeft;
        const v2072 = v2014.raffleBal;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v1979,
          tok: undefined /* Nothing */
          });
        const v3799 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        const v3800 = v3799[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v1979,
          tok: v1976
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1976
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
    tys: [ctc1, ctc7, ctc6, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1994, time: v1993, didSend: v157, from: v1992 } = txn2;
  ;
  const v1997 = v1984[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v1998 = v1997[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v1999 = stdlib.add(v1998, v1977);
  const v2001 = stdlib.Array_set(v1997, '0', v1999);
  const v2002 = stdlib.Array_set(v1984, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:96:12:dot', stdlib.UInt_max, '0'), v2001);
  ;
  const v2003 = stdlib.addressEq(v1966, v1992);
  stdlib.assert(v2003, {
    at: './raffle_algo_v2.rsh:96:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v2006 = stdlib.safeAdd(v1994, v1970);
  const v2007 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2007, v1971), {
    at: './raffle_algo_v2.rsh:119:27:application',
    fs: ['at ./raffle_algo_v2.rsh:119:27:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:119:27:function exp)', 'at ./raffle_algo_v2.rsh:119:27:application call to "liftedInteract" (defined at: ./raffle_algo_v2.rsh:119:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2010 = v2002[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:129:23:application', stdlib.UInt_max, '0')];
  const v2011 = v2010[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:129:23:application', stdlib.UInt_max, '0')];
  const v2012 = ['None', null];
  const v2013 = {
    bal: v1975,
    buyers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    currentUserNumber: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    raffleBal: v2011,
    ticketsLeft: v1969,
    winner: v2012
    };
  let v2014 = v2013;
  let v2015 = v1993;
  let v2018 = v1994;
  let v2021 = v2002;
  let v2022 = v1975;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2054 = v2014.keepGoing;
    
    return v2054;})()) {
    const v2058 = stdlib.ge(v2018, v2006);
    const v2069 = v2014.currentUserNumber;
    const v2070 = v2014.bal;
    const v2071 = v2014.ticketsLeft;
    const v2072 = v2014.raffleBal;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn4;
    switch (v2253[0]) {
      case 'User_buyTicket0_303': {
        const v2256 = v2253[1];
        undefined /* setApiDetails */;
        const v2261 = v2256[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:157:10:spread', stdlib.UInt_max, '0')];
        const v2262 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v2252, ctc3), null);
        const v2263 = stdlib.fromSome(v2262, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:158:65:decimal', stdlib.UInt_max, '0'));
        const v2264 = stdlib.lt(v2018, v2006);
        stdlib.assert(v2264, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Deadline reached cannot enter',
          who: 'Deployer'
          });
        const v2266 = stdlib.ge(v2261, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:160:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v2266, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Cannot purchase less than 1',
          who: 'Deployer'
          });
        const v2268 = stdlib.safeAdd(v2263, v2261);
        const v2269 = stdlib.ge(v1974, v2268);
        stdlib.assert(v2269, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Limit reached',
          who: 'Deployer'
          });
        const v2271 = stdlib.safeAdd(v2261, v2263);
        const v2272 = stdlib.le(v2271, v1969);
        stdlib.assert(v2272, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Cannot buy more tickets than balance',
          who: 'Deployer'
          });
        const v2274 = stdlib.safeMul(v2261, v1973);
        const v2346 = stdlib.add(v2022, v2274);
        ;
        ;
        await stdlib.mapSet(map1, ctc1, v2252, ctc3, v2268);
        const v2371 = {
          address: v2252,
          amount: v2261
          };
        null;
        const v2372 = v2014.buyers;
        await stdlib.mapSet(map0, ctc3, v2372, ctc1, v2252);
        const v2373 = stdlib.safeAdd(v2069, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:190:33:decimal', stdlib.UInt_max, '1'));
        const v2374 = stdlib.eq(v2373, v1971);
        let v2375;
        if (v2374) {
          v2375 = true;
          }
        else {
          const v2377 = stdlib.le(v2373, v1971);
          let v2378;
          if (v2377) {
            const v2379 = stdlib.safeAdd(v2069, v2261);
            const v2380 = stdlib.ge(v2379, v1971);
            v2378 = v2380;
            }
          else {
            v2378 = false;
            }
          v2375 = v2378;
          }
        if (v2375) {
          const v2381 = true;
          await txn4.getOutput('User_buyTicket', 'v2381', ctc6, v2381);
          const v2391 = v2014.keepGoing;
          const v2392 = v2014.percent;
          const v2397 = stdlib.safeAdd(v2069, v2261);
          const v2399 = stdlib.safeAdd(v2070, v2274);
          const v2401 = stdlib.safeSub(v2071, v2261);
          const v2403 = stdlib.safeAdd(v2372, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:204:44:decimal', stdlib.UInt_max, '1'));
          const v2404 = ['Some', v2252];
          const v2405 = {
            bal: v2399,
            buyers: v2403,
            currentUserNumber: v2397,
            keepGoing: v2391,
            percent: v2392,
            raffleBal: v2072,
            ticketsLeft: v2401,
            winner: v2404
            };
          const cv2014 = v2405;
          const cv2015 = v2254;
          const cv2018 = v2255;
          const cv2021 = v2021;
          const cv2022 = v2346;
          
          v2014 = cv2014;
          v2015 = cv2015;
          v2018 = cv2018;
          v2021 = cv2021;
          v2022 = cv2022;
          
          txn3 = txn4;
          continue;}
        else {
          const v2407 = true;
          await txn4.getOutput('User_buyTicket', 'v2407', ctc6, v2407);
          const v2417 = v2014.keepGoing;
          const v2418 = v2014.percent;
          const v2421 = v2014.winner;
          const v2423 = stdlib.safeAdd(v2069, v2261);
          const v2425 = stdlib.safeAdd(v2070, v2274);
          const v2427 = stdlib.safeSub(v2071, v2261);
          const v2429 = stdlib.safeAdd(v2372, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:214:44:decimal', stdlib.UInt_max, '1'));
          const v2430 = {
            bal: v2425,
            buyers: v2429,
            currentUserNumber: v2423,
            keepGoing: v2417,
            percent: v2418,
            raffleBal: v2072,
            ticketsLeft: v2427,
            winner: v2421
            };
          const cv2014 = v2430;
          const cv2015 = v2254;
          const cv2018 = v2255;
          const cv2021 = v2021;
          const cv2022 = v2346;
          
          v2014 = cv2014;
          v2015 = cv2015;
          v2018 = cv2018;
          v2021 = cv2021;
          v2022 = cv2022;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'User_claim0_303': {
        const v2560 = v2253[1];
        undefined /* setApiDetails */;
        const v2587 = v2014.winner;
        const v2588 = {
          None: 0,
          Some: 1
          }[v2587[0]];
        const v2589 = stdlib.eq(v2588, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2589, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v2058, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v2593 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
        const v2594 = v2593[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
        const v2595 = stdlib.le(v2072, v2594);
        stdlib.assert(v2595, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Error transferring',
          who: 'Deployer'
          });
        const v2598 = stdlib.fromSome(v2587, v1966);
        const v2599 = stdlib.addressEq(v2598, v2252);
        stdlib.assert(v2599, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Not winner',
          who: 'Deployer'
          });
        ;
        ;
        const v2742 = stdlib.ge(v2255, v2006);
        stdlib.assert(v2742, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:242:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:242:13:function exp)'],
          msg: 'Cannot claim yet',
          who: 'Deployer'
          });
        const v2759 = stdlib.sub(v2594, v2594);
        const v2761 = stdlib.Array_set(v2593, '0', v2759);
        const v2762 = stdlib.Array_set(v2021, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:243:57:application', stdlib.UInt_max, '0'), v2761);
        ;
        const v2764 = stdlib.safeMul(v2022, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:244:47:decimal', stdlib.UInt_max, '5'));
        const v2765 = stdlib.safeDiv(v2764, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:244:51:decimal', stdlib.UInt_max, '100'));
        const v2767 = stdlib.safeSub(v2022, v2765);
        const v2771 = stdlib.sub(v2022, v2767);
        ;
        const v2772 = true;
        await txn4.getOutput('User_claim', 'v2772', ctc6, v2772);
        const v2779 = v2014.buyers;
        const v2782 = v2014.percent;
        const v2787 = {
          bal: v2771,
          buyers: v2779,
          currentUserNumber: v2069,
          keepGoing: false,
          percent: v2782,
          raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          ticketsLeft: v2071,
          winner: v2587
          };
        const cv2014 = v2787;
        const cv2015 = v2254;
        const cv2018 = v2255;
        const cv2021 = v2762;
        const cv2022 = v2771;
        
        v2014 = cv2014;
        v2015 = cv2015;
        v2018 = cv2018;
        v2021 = cv2021;
        v2022 = cv2022;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_determinWinnerAfterDeadline0_303': {
        const v2864 = v2253[1];
        undefined /* setApiDetails */;
        const v2913 = v2014.winner;
        const v2914 = {
          None: 0,
          Some: 1
          }[v2913[0]];
        const v2915 = stdlib.eq(v2914, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2915, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:257:48:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Winner has not been determined',
          who: 'Deployer'
          });
        stdlib.assert(v2058, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:257:48:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        ;
        ;
        const v3099 = stdlib.ge(v2255, v2006);
        stdlib.assert(v3099, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:268:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:268:13:function exp)'],
          msg: 'Impossibe command, seeing as the deadline has not reached',
          who: 'Deployer'
          });
        const v3101 = v2014.buyers;
        const v3102 = stdlib.safeMod(v1972, v3101);
        const v3103 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3102, ctc1), null);
        const v3104 = {
          None: 0,
          Some: 1
          }[v3103[0]];
        const v3105 = stdlib.eq(v3104, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3105, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:270:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:268:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:268:13:function exp)'],
          msg: 'Error as the buyer for the winner index does not exist',
          who: 'Deployer'
          });
        const v3108 = stdlib.fromSome(v3103, v1979);
        await txn4.getOutput('User_determinWinnerAfterDeadline', 'v3108', ctc1, v3108);
        const v3117 = v2014.keepGoing;
        const v3118 = v2014.percent;
        const v3122 = ['Some', v3108];
        const v3123 = {
          bal: v2070,
          buyers: v3101,
          currentUserNumber: v2069,
          keepGoing: v3117,
          percent: v3118,
          raffleBal: v2072,
          ticketsLeft: v2071,
          winner: v3122
          };
        const cv2014 = v3123;
        const cv2015 = v2254;
        const cv2018 = v2255;
        const cv2021 = v2021;
        const cv2022 = v2022;
        
        v2014 = cv2014;
        v2015 = cv2015;
        v2018 = cv2018;
        v2021 = cv2021;
        v2022 = cv2022;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_end0_303': {
        const v3168 = v2253[1];
        undefined /* setApiDetails */;
        const v3230 = stdlib.addressEq(v2252, v1966);
        const v3231 = stdlib.addressEq(v2252, v1979);
        const v3232 = v3230 ? true : v3231;
        stdlib.assert(v3232, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:284:24:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Don\'t have administrative rights to perform action',
          who: 'Deployer'
          });
        const v3235 = stdlib.eq(v2071, v1969);
        stdlib.assert(v3235, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./raffle_algo_v2.rsh:289:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:284:24:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
          msg: 'Cannot end contract',
          who: 'Deployer'
          });
        ;
        const v3259 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:125:37:dot', stdlib.UInt_max, '0')];
        const v3260 = v3259[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:125:37:dot', stdlib.UInt_max, '0')];
        ;
        const v3438 = true;
        await txn4.getOutput('User_end', 'v3438', ctc6, v3438);
        const v3451 = stdlib.sub(v3260, v3260);
        const v3453 = stdlib.Array_set(v3259, '0', v3451);
        const v3454 = stdlib.Array_set(v2021, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:294:57:application', stdlib.UInt_max, '0'), v3453);
        ;
        const v3456 = v2014.buyers;
        const v3459 = v2014.percent;
        const v3462 = v2014.winner;
        const v3463 = {
          bal: v2070,
          buyers: v3456,
          currentUserNumber: v2069,
          keepGoing: false,
          percent: v3459,
          raffleBal: v2072,
          ticketsLeft: v2071,
          winner: v3462
          };
        const cv2014 = v3463;
        const cv2015 = v2254;
        const cv2018 = v2255;
        const cv2021 = v3454;
        const cv2022 = v2022;
        
        v2014 = cv2014;
        v2015 = cv2015;
        v2018 = cv2018;
        v2021 = cv2021;
        v2022 = cv2022;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'User_optin0_303': {
        const v3472 = v2253[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3770 = null;
        await txn4.getOutput('User_optin', 'v3770', ctc0, v3770);
        const cv2014 = v2014;
        const cv2015 = v2254;
        const cv2018 = v2255;
        const cv2021 = v2021;
        const cv2022 = v2022;
        
        v2014 = cv2014;
        v2015 = cv2015;
        v2018 = cv2018;
        v2021 = cv2021;
        v2022 = cv2022;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  const v3799 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
  const v3800 = v3799[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
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
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc7,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_303: ctc12,
    User_claim0_303: ctc13,
    User_determinWinnerAfterDeadline0_303: ctc13,
    User_end0_303: ctc13,
    User_optin0_303: ctc13
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
  
  
  const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3]);
  const v2074 = ctc.selfAddress();
  const v2076 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo_v2.rsh:1:23:application',
    fs: ['at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_buyTicket0_303" (defined at: ./raffle_algo_v2.rsh:157:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'in',
    who: 'User_buyTicket'
    });
  const v2077 = v2076[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2079 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v2074, ctc3), null);
  const v2080 = stdlib.fromSome(v2079, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:158:65:decimal', stdlib.UInt_max, '0'));
  const v2081 = stdlib.lt(v2018, v2006);
  stdlib.assert(v2081, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_buyTicket0_303" (defined at: ./raffle_algo_v2.rsh:157:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Deadline reached cannot enter',
    who: 'User_buyTicket'
    });
  const v2083 = stdlib.ge(v2077, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:160:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2083, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_buyTicket0_303" (defined at: ./raffle_algo_v2.rsh:157:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Cannot purchase less than 1',
    who: 'User_buyTicket'
    });
  const v2085 = stdlib.safeAdd(v2080, v2077);
  const v2086 = stdlib.ge(v1974, v2085);
  stdlib.assert(v2086, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_buyTicket0_303" (defined at: ./raffle_algo_v2.rsh:157:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Limit reached',
    who: 'User_buyTicket'
    });
  const v2088 = stdlib.safeAdd(v2077, v2080);
  const v2089 = stdlib.le(v2088, v1969);
  stdlib.assert(v2089, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_buyTicket0_303" (defined at: ./raffle_algo_v2.rsh:157:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Cannot buy more tickets than balance',
    who: 'User_buyTicket'
    });
  const v2096 = ['User_buyTicket0_303', v2076];
  
  const v2173 = stdlib.safeMul(v2077, v1973);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072, v2096],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v2173, [[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:172:53:decimal', stdlib.UInt_max, '0'), v1976]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
      
      switch (v2253[0]) {
        case 'User_buyTicket0_303': {
          const v2256 = v2253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_buyTicket"
            });
          const v2261 = v2256[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:157:10:spread', stdlib.UInt_max, '0')];
          const v2262 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v2252, ctc3), null);
          const v2263 = stdlib.fromSome(v2262, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:158:65:decimal', stdlib.UInt_max, '0'));
          const v2268 = stdlib.safeAdd(v2263, v2261);
          const v2274 = stdlib.safeMul(v2261, v1973);
          const v2346 = stdlib.add(v2022, v2274);
          sim_r.txns.push({
            amt: v2274,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          await stdlib.simMapSet(sim_r, 1, ctc1, v2252, ctc3, v2268);
          const v2371 = {
            address: v2252,
            amount: v2261
            };
          null;
          const v2372 = v2014.buyers;
          await stdlib.simMapSet(sim_r, 0, ctc3, v2372, ctc1, v2252);
          const v2373 = stdlib.safeAdd(v2069, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:190:33:decimal', stdlib.UInt_max, '1'));
          const v2374 = stdlib.eq(v2373, v1971);
          let v2375;
          if (v2374) {
            v2375 = true;
            }
          else {
            const v2377 = stdlib.le(v2373, v1971);
            let v2378;
            if (v2377) {
              const v2379 = stdlib.safeAdd(v2069, v2261);
              const v2380 = stdlib.ge(v2379, v1971);
              v2378 = v2380;
              }
            else {
              v2378 = false;
              }
            v2375 = v2378;
            }
          if (v2375) {
            const v2381 = true;
            const v2382 = await txn1.getOutput('User_buyTicket', 'v2381', ctc7, v2381);
            
            const v2391 = v2014.keepGoing;
            const v2392 = v2014.percent;
            const v2397 = stdlib.safeAdd(v2069, v2261);
            const v2399 = stdlib.safeAdd(v2070, v2274);
            const v2401 = stdlib.safeSub(v2071, v2261);
            const v2403 = stdlib.safeAdd(v2372, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:204:44:decimal', stdlib.UInt_max, '1'));
            const v2404 = ['Some', v2252];
            const v2405 = {
              bal: v2399,
              buyers: v2403,
              currentUserNumber: v2397,
              keepGoing: v2391,
              percent: v2392,
              raffleBal: v2072,
              ticketsLeft: v2401,
              winner: v2404
              };
            const v5673 = v2405;
            const v5675 = v2255;
            const v5676 = v2021;
            const v5677 = v2346;
            const v5678 = v2405.keepGoing;
            if (v5678) {
              const v5679 = stdlib.ge(v2255, v2006);
              const v5680 = v2405.currentUserNumber;
              const v5681 = v2405.bal;
              const v5682 = v2405.ticketsLeft;
              const v5683 = v2405.raffleBal;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v1979,
                tok: undefined /* Nothing */
                });
              const v5685 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
              const v5686 = v5685[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v1979,
                tok: v1976
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v1976
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v2407 = true;
            const v2408 = await txn1.getOutput('User_buyTicket', 'v2407', ctc7, v2407);
            
            const v2417 = v2014.keepGoing;
            const v2418 = v2014.percent;
            const v2421 = v2014.winner;
            const v2423 = stdlib.safeAdd(v2069, v2261);
            const v2425 = stdlib.safeAdd(v2070, v2274);
            const v2427 = stdlib.safeSub(v2071, v2261);
            const v2429 = stdlib.safeAdd(v2372, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:214:44:decimal', stdlib.UInt_max, '1'));
            const v2430 = {
              bal: v2425,
              buyers: v2429,
              currentUserNumber: v2423,
              keepGoing: v2417,
              percent: v2418,
              raffleBal: v2072,
              ticketsLeft: v2427,
              winner: v2421
              };
            const v5687 = v2430;
            const v5689 = v2255;
            const v5690 = v2021;
            const v5691 = v2346;
            const v5692 = v2430.keepGoing;
            if (v5692) {
              const v5693 = stdlib.ge(v2255, v2006);
              const v5694 = v2430.currentUserNumber;
              const v5695 = v2430.bal;
              const v5696 = v2430.ticketsLeft;
              const v5697 = v2430.raffleBal;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v1979,
                tok: undefined /* Nothing */
                });
              const v5699 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
              const v5700 = v5699[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v1979,
                tok: v1976
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v1976
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'User_claim0_303': {
          const v2560 = v2253[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_303': {
          const v2864 = v2253[1];
          
          break;
          }
        case 'User_end0_303': {
          const v3168 = v2253[1];
          
          break;
          }
        case 'User_optin0_303': {
          const v3472 = v2253[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
  switch (v2253[0]) {
    case 'User_buyTicket0_303': {
      const v2256 = v2253[1];
      undefined /* setApiDetails */;
      const v2261 = v2256[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:157:10:spread', stdlib.UInt_max, '0')];
      const v2262 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v2252, ctc3), null);
      const v2263 = stdlib.fromSome(v2262, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:158:65:decimal', stdlib.UInt_max, '0'));
      const v2264 = stdlib.lt(v2018, v2006);
      stdlib.assert(v2264, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Deadline reached cannot enter',
        who: 'User_buyTicket'
        });
      const v2266 = stdlib.ge(v2261, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:160:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v2266, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Cannot purchase less than 1',
        who: 'User_buyTicket'
        });
      const v2268 = stdlib.safeAdd(v2263, v2261);
      const v2269 = stdlib.ge(v1974, v2268);
      stdlib.assert(v2269, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Limit reached',
        who: 'User_buyTicket'
        });
      const v2271 = stdlib.safeAdd(v2261, v2263);
      const v2272 = stdlib.le(v2271, v1969);
      stdlib.assert(v2272, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:157:50:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:50:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Cannot buy more tickets than balance',
        who: 'User_buyTicket'
        });
      const v2274 = stdlib.safeMul(v2261, v1973);
      const v2346 = stdlib.add(v2022, v2274);
      ;
      ;
      await stdlib.mapSet(map1, ctc1, v2252, ctc3, v2268);
      const v2371 = {
        address: v2252,
        amount: v2261
        };
      null;
      const v2372 = v2014.buyers;
      await stdlib.mapSet(map0, ctc3, v2372, ctc1, v2252);
      const v2373 = stdlib.safeAdd(v2069, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:190:33:decimal', stdlib.UInt_max, '1'));
      const v2374 = stdlib.eq(v2373, v1971);
      let v2375;
      if (v2374) {
        v2375 = true;
        }
      else {
        const v2377 = stdlib.le(v2373, v1971);
        let v2378;
        if (v2377) {
          const v2379 = stdlib.safeAdd(v2069, v2261);
          const v2380 = stdlib.ge(v2379, v1971);
          v2378 = v2380;
          }
        else {
          v2378 = false;
          }
        v2375 = v2378;
        }
      if (v2375) {
        const v2381 = true;
        const v2382 = await txn1.getOutput('User_buyTicket', 'v2381', ctc7, v2381);
        if (v1385) {
          stdlib.protect(ctc0, await interact.out(v2256, v2382), {
            at: './raffle_algo_v2.rsh:157:11:application',
            fs: ['at ./raffle_algo_v2.rsh:157:11:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:11:function exp)', 'at ./raffle_algo_v2.rsh:196:16:application call to "ret" (defined at: ./raffle_algo_v2.rsh:173:15:function exp)', 'at ./raffle_algo_v2.rsh:173:15:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:173:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2391 = v2014.keepGoing;
        const v2392 = v2014.percent;
        const v2397 = stdlib.safeAdd(v2069, v2261);
        const v2399 = stdlib.safeAdd(v2070, v2274);
        const v2401 = stdlib.safeSub(v2071, v2261);
        const v2403 = stdlib.safeAdd(v2372, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:204:44:decimal', stdlib.UInt_max, '1'));
        const v2404 = ['Some', v2252];
        const v2405 = {
          bal: v2399,
          buyers: v2403,
          currentUserNumber: v2397,
          keepGoing: v2391,
          percent: v2392,
          raffleBal: v2072,
          ticketsLeft: v2401,
          winner: v2404
          };
        const v5673 = v2405;
        const v5675 = v2255;
        const v5676 = v2021;
        const v5677 = v2346;
        const v5678 = v2405.keepGoing;
        if (v5678) {
          const v5679 = stdlib.ge(v2255, v2006);
          const v5680 = v2405.currentUserNumber;
          const v5681 = v2405.bal;
          const v5682 = v2405.ticketsLeft;
          const v5683 = v2405.raffleBal;
          return;
          }
        else {
          ;
          const v5685 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
          const v5686 = v5685[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v2407 = true;
        const v2408 = await txn1.getOutput('User_buyTicket', 'v2407', ctc7, v2407);
        if (v1385) {
          stdlib.protect(ctc0, await interact.out(v2256, v2408), {
            at: './raffle_algo_v2.rsh:157:11:application',
            fs: ['at ./raffle_algo_v2.rsh:157:11:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:157:11:function exp)', 'at ./raffle_algo_v2.rsh:207:16:application call to "ret" (defined at: ./raffle_algo_v2.rsh:173:15:function exp)', 'at ./raffle_algo_v2.rsh:173:15:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:173:15:function exp)'],
            msg: 'out',
            who: 'User_buyTicket'
            });
          }
        else {
          }
        
        const v2417 = v2014.keepGoing;
        const v2418 = v2014.percent;
        const v2421 = v2014.winner;
        const v2423 = stdlib.safeAdd(v2069, v2261);
        const v2425 = stdlib.safeAdd(v2070, v2274);
        const v2427 = stdlib.safeSub(v2071, v2261);
        const v2429 = stdlib.safeAdd(v2372, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:214:44:decimal', stdlib.UInt_max, '1'));
        const v2430 = {
          bal: v2425,
          buyers: v2429,
          currentUserNumber: v2423,
          keepGoing: v2417,
          percent: v2418,
          raffleBal: v2072,
          ticketsLeft: v2427,
          winner: v2421
          };
        const v5687 = v2430;
        const v5689 = v2255;
        const v5690 = v2021;
        const v5691 = v2346;
        const v5692 = v2430.keepGoing;
        if (v5692) {
          const v5693 = stdlib.ge(v2255, v2006);
          const v5694 = v2430.currentUserNumber;
          const v5695 = v2430.bal;
          const v5696 = v2430.ticketsLeft;
          const v5697 = v2430.raffleBal;
          return;
          }
        else {
          ;
          const v5699 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
          const v5700 = v5699[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      break;
      }
    case 'User_claim0_303': {
      const v2560 = v2253[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_303': {
      const v2864 = v2253[1];
      return;
      break;
      }
    case 'User_end0_303': {
      const v3168 = v2253[1];
      return;
      break;
      }
    case 'User_optin0_303': {
      const v3472 = v2253[1];
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
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc7,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_303: ctc13,
    User_claim0_303: ctc12,
    User_determinWinnerAfterDeadline0_303: ctc12,
    User_end0_303: ctc12,
    User_optin0_303: ctc12
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
  
  
  const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3]);
  const v2106 = ctc.selfAddress();
  const v2108 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo_v2.rsh:1:23:application',
    fs: ['at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_claim0_303" (defined at: ./raffle_algo_v2.rsh:231:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2110 = v2014.winner;
  const v2111 = {
    None: 0,
    Some: 1
    }[v2110[0]];
  const v2112 = stdlib.eq(v2111, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2112, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_claim0_303" (defined at: ./raffle_algo_v2.rsh:231:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_claim'
    });
  stdlib.assert(v2058, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_claim0_303" (defined at: ./raffle_algo_v2.rsh:231:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Cannot claim yet',
    who: 'User_claim'
    });
  const v2116 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
  const v2117 = v2116[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
  const v2118 = stdlib.le(v2072, v2117);
  stdlib.assert(v2118, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_claim0_303" (defined at: ./raffle_algo_v2.rsh:231:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Error transferring',
    who: 'User_claim'
    });
  const v2121 = stdlib.fromSome(v2110, v1966);
  const v2122 = stdlib.addressEq(v2121, v2106);
  stdlib.assert(v2122, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_claim0_303" (defined at: ./raffle_algo_v2.rsh:231:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Not winner',
    who: 'User_claim'
    });
  const v2127 = ['User_claim0_303', v2108];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072, v2127],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:241:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:241:14:decimal', stdlib.UInt_max, '0'), v1976]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
      
      switch (v2253[0]) {
        case 'User_buyTicket0_303': {
          const v2256 = v2253[1];
          
          break;
          }
        case 'User_claim0_303': {
          const v2560 = v2253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v2587 = v2014.winner;
          const v2593 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
          const v2594 = v2593[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
          const v2598 = stdlib.fromSome(v2587, v1966);
          ;
          ;
          const v2759 = stdlib.sub(v2594, v2594);
          const v2761 = stdlib.Array_set(v2593, '0', v2759);
          const v2762 = stdlib.Array_set(v2021, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:243:57:application', stdlib.UInt_max, '0'), v2761);
          sim_r.txns.push({
            kind: 'from',
            to: v2598,
            tok: v1976
            });
          const v2764 = stdlib.safeMul(v2022, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:244:47:decimal', stdlib.UInt_max, '5'));
          const v2765 = stdlib.safeDiv(v2764, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:244:51:decimal', stdlib.UInt_max, '100'));
          const v2767 = stdlib.safeSub(v2022, v2765);
          const v2771 = stdlib.sub(v2022, v2767);
          sim_r.txns.push({
            kind: 'from',
            to: v1966,
            tok: undefined /* Nothing */
            });
          const v2772 = true;
          const v2773 = await txn1.getOutput('User_claim', 'v2772', ctc7, v2772);
          
          const v2779 = v2014.buyers;
          const v2782 = v2014.percent;
          const v2787 = {
            bal: v2771,
            buyers: v2779,
            currentUserNumber: v2069,
            keepGoing: false,
            percent: v2782,
            raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ticketsLeft: v2071,
            winner: v2587
            };
          const v5785 = v2787;
          const v5787 = v2255;
          const v5788 = v2762;
          const v5789 = v2771;
          const v5790 = v2787.keepGoing;
          if (v5790) {
            const v5792 = v2787.currentUserNumber;
            const v5793 = v2787.bal;
            const v5794 = v2787.ticketsLeft;
            const v5795 = v2787.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: undefined /* Nothing */
              });
            const v5797 = v2762[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            const v5798 = v5797[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: v1976
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1976
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_determinWinnerAfterDeadline0_303': {
          const v2864 = v2253[1];
          
          break;
          }
        case 'User_end0_303': {
          const v3168 = v2253[1];
          
          break;
          }
        case 'User_optin0_303': {
          const v3472 = v2253[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
  switch (v2253[0]) {
    case 'User_buyTicket0_303': {
      const v2256 = v2253[1];
      return;
      break;
      }
    case 'User_claim0_303': {
      const v2560 = v2253[1];
      undefined /* setApiDetails */;
      const v2587 = v2014.winner;
      const v2588 = {
        None: 0,
        Some: 1
        }[v2587[0]];
      const v2589 = stdlib.eq(v2588, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2589, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_claim'
        });
      stdlib.assert(v2058, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v2593 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
      const v2594 = v2593[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:235:33:application', stdlib.UInt_max, '0')];
      const v2595 = stdlib.le(v2072, v2594);
      stdlib.assert(v2595, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Error transferring',
        who: 'User_claim'
        });
      const v2598 = stdlib.fromSome(v2587, v1966);
      const v2599 = stdlib.addressEq(v2598, v2252);
      stdlib.assert(v2599, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:231:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Not winner',
        who: 'User_claim'
        });
      ;
      ;
      const v2742 = stdlib.ge(v2255, v2006);
      stdlib.assert(v2742, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:242:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:242:13:function exp)'],
        msg: 'Cannot claim yet',
        who: 'User_claim'
        });
      const v2759 = stdlib.sub(v2594, v2594);
      const v2761 = stdlib.Array_set(v2593, '0', v2759);
      const v2762 = stdlib.Array_set(v2021, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:243:57:application', stdlib.UInt_max, '0'), v2761);
      ;
      const v2764 = stdlib.safeMul(v2022, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:244:47:decimal', stdlib.UInt_max, '5'));
      const v2765 = stdlib.safeDiv(v2764, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:244:51:decimal', stdlib.UInt_max, '100'));
      const v2767 = stdlib.safeSub(v2022, v2765);
      const v2771 = stdlib.sub(v2022, v2767);
      ;
      const v2772 = true;
      const v2773 = await txn1.getOutput('User_claim', 'v2772', ctc7, v2772);
      if (v1385) {
        stdlib.protect(ctc0, await interact.out(v2560, v2773), {
          at: './raffle_algo_v2.rsh:231:11:application',
          fs: ['at ./raffle_algo_v2.rsh:231:11:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:231:11:function exp)', 'at ./raffle_algo_v2.rsh:246:12:application call to "k" (defined at: ./raffle_algo_v2.rsh:242:13:function exp)', 'at ./raffle_algo_v2.rsh:242:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:242:13:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v2779 = v2014.buyers;
      const v2782 = v2014.percent;
      const v2787 = {
        bal: v2771,
        buyers: v2779,
        currentUserNumber: v2069,
        keepGoing: false,
        percent: v2782,
        raffleBal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ticketsLeft: v2071,
        winner: v2587
        };
      const v5785 = v2787;
      const v5787 = v2255;
      const v5788 = v2762;
      const v5789 = v2771;
      const v5790 = v2787.keepGoing;
      if (v5790) {
        const v5792 = v2787.currentUserNumber;
        const v5793 = v2787.bal;
        const v5794 = v2787.ticketsLeft;
        const v5795 = v2787.raffleBal;
        return;
        }
      else {
        ;
        const v5797 = v2762[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        const v5798 = v5797[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_determinWinnerAfterDeadline0_303': {
      const v2864 = v2253[1];
      return;
      break;
      }
    case 'User_end0_303': {
      const v3168 = v2253[1];
      return;
      break;
      }
    case 'User_optin0_303': {
      const v3472 = v2253[1];
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
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc7,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_303: ctc13,
    User_claim0_303: ctc12,
    User_determinWinnerAfterDeadline0_303: ctc12,
    User_end0_303: ctc12,
    User_optin0_303: ctc12
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
  
  
  const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3]);
  const v2131 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo_v2.rsh:1:23:application',
    fs: ['at ./raffle_algo_v2.rsh:257:48:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_determinWinnerAfterDeadline0_303" (defined at: ./raffle_algo_v2.rsh:257:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'in',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v2133 = v2014.winner;
  const v2134 = {
    None: 0,
    Some: 1
    }[v2133[0]];
  const v2135 = stdlib.eq(v2134, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2135, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:257:48:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_determinWinnerAfterDeadline0_303" (defined at: ./raffle_algo_v2.rsh:257:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Winner has not been determined',
    who: 'User_determinWinnerAfterDeadline'
    });
  stdlib.assert(v2058, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:257:48:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_determinWinnerAfterDeadline0_303" (defined at: ./raffle_algo_v2.rsh:257:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Impossibe command, seeing as the deadline has not reached',
    who: 'User_determinWinnerAfterDeadline'
    });
  const v2142 = ['User_determinWinnerAfterDeadline0_303', v2131];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072, v2142],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:267:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:267:14:decimal', stdlib.UInt_max, '0'), v1976]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
      
      switch (v2253[0]) {
        case 'User_buyTicket0_303': {
          const v2256 = v2253[1];
          
          break;
          }
        case 'User_claim0_303': {
          const v2560 = v2253[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_303': {
          const v2864 = v2253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_determinWinnerAfterDeadline"
            });
          ;
          ;
          const v3101 = v2014.buyers;
          const v3102 = stdlib.safeMod(v1972, v3101);
          const v3103 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3102, ctc1), null);
          const v3108 = stdlib.fromSome(v3103, v1979);
          const v3109 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v3108', ctc1, v3108);
          
          const v3117 = v2014.keepGoing;
          const v3118 = v2014.percent;
          const v3122 = ['Some', v3108];
          const v3123 = {
            bal: v2070,
            buyers: v3101,
            currentUserNumber: v2069,
            keepGoing: v3117,
            percent: v3118,
            raffleBal: v2072,
            ticketsLeft: v2071,
            winner: v3122
            };
          const v5883 = v3123;
          const v5885 = v2255;
          const v5886 = v2021;
          const v5887 = v2022;
          const v5888 = v3123.keepGoing;
          if (v5888) {
            const v5890 = v3123.currentUserNumber;
            const v5891 = v3123.bal;
            const v5892 = v3123.ticketsLeft;
            const v5893 = v3123.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: undefined /* Nothing */
              });
            const v5895 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            const v5896 = v5895[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: v1976
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1976
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_end0_303': {
          const v3168 = v2253[1];
          
          break;
          }
        case 'User_optin0_303': {
          const v3472 = v2253[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
  switch (v2253[0]) {
    case 'User_buyTicket0_303': {
      const v2256 = v2253[1];
      return;
      break;
      }
    case 'User_claim0_303': {
      const v2560 = v2253[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_303': {
      const v2864 = v2253[1];
      undefined /* setApiDetails */;
      const v2913 = v2014.winner;
      const v2914 = {
        None: 0,
        Some: 1
        }[v2913[0]];
      const v2915 = stdlib.eq(v2914, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2915, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:257:48:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Winner has not been determined',
        who: 'User_determinWinnerAfterDeadline'
        });
      stdlib.assert(v2058, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:257:48:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:48:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      ;
      ;
      const v3099 = stdlib.ge(v2255, v2006);
      stdlib.assert(v3099, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:268:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:268:13:function exp)'],
        msg: 'Impossibe command, seeing as the deadline has not reached',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v3101 = v2014.buyers;
      const v3102 = stdlib.safeMod(v1972, v3101);
      const v3103 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3102, ctc1), null);
      const v3104 = {
        None: 0,
        Some: 1
        }[v3103[0]];
      const v3105 = stdlib.eq(v3104, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3105, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:270:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:268:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:268:13:function exp)'],
        msg: 'Error as the buyer for the winner index does not exist',
        who: 'User_determinWinnerAfterDeadline'
        });
      const v3108 = stdlib.fromSome(v3103, v1979);
      const v3109 = await txn1.getOutput('User_determinWinnerAfterDeadline', 'v3108', ctc1, v3108);
      if (v1385) {
        stdlib.protect(ctc0, await interact.out(v2864, v3109), {
          at: './raffle_algo_v2.rsh:257:11:application',
          fs: ['at ./raffle_algo_v2.rsh:257:11:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:257:11:function exp)', 'at ./raffle_algo_v2.rsh:275:12:application call to "k" (defined at: ./raffle_algo_v2.rsh:268:13:function exp)', 'at ./raffle_algo_v2.rsh:268:13:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:268:13:function exp)'],
          msg: 'out',
          who: 'User_determinWinnerAfterDeadline'
          });
        }
      else {
        }
      
      const v3117 = v2014.keepGoing;
      const v3118 = v2014.percent;
      const v3122 = ['Some', v3108];
      const v3123 = {
        bal: v2070,
        buyers: v3101,
        currentUserNumber: v2069,
        keepGoing: v3117,
        percent: v3118,
        raffleBal: v2072,
        ticketsLeft: v2071,
        winner: v3122
        };
      const v5883 = v3123;
      const v5885 = v2255;
      const v5886 = v2021;
      const v5887 = v2022;
      const v5888 = v3123.keepGoing;
      if (v5888) {
        const v5890 = v3123.currentUserNumber;
        const v5891 = v3123.bal;
        const v5892 = v3123.ticketsLeft;
        const v5893 = v3123.raffleBal;
        return;
        }
      else {
        ;
        const v5895 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        const v5896 = v5895[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_end0_303': {
      const v3168 = v2253[1];
      return;
      break;
      }
    case 'User_optin0_303': {
      const v3472 = v2253[1];
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
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc7,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_303: ctc13,
    User_claim0_303: ctc12,
    User_determinWinnerAfterDeadline0_303: ctc12,
    User_end0_303: ctc12,
    User_optin0_303: ctc12
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
  
  
  const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3]);
  const v2144 = ctc.selfAddress();
  const v2146 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo_v2.rsh:1:23:application',
    fs: ['at ./raffle_algo_v2.rsh:284:24:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_end0_303" (defined at: ./raffle_algo_v2.rsh:284:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'in',
    who: 'User_end'
    });
  const v2147 = stdlib.addressEq(v2144, v1966);
  const v2148 = stdlib.addressEq(v2144, v1979);
  const v2149 = v2147 ? true : v2148;
  stdlib.assert(v2149, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:284:24:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_end0_303" (defined at: ./raffle_algo_v2.rsh:284:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Don\'t have administrative rights to perform action',
    who: 'User_end'
    });
  const v2152 = stdlib.eq(v2071, v1969);
  stdlib.assert(v2152, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./raffle_algo_v2.rsh:289:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:284:24:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_end0_303" (defined at: ./raffle_algo_v2.rsh:284:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'Cannot end contract',
    who: 'User_end'
    });
  const v2157 = ['User_end0_303', v2146];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072, v2157],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:291:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:291:14:decimal', stdlib.UInt_max, '0'), v1976]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
      
      switch (v2253[0]) {
        case 'User_buyTicket0_303': {
          const v2256 = v2253[1];
          
          break;
          }
        case 'User_claim0_303': {
          const v2560 = v2253[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_303': {
          const v2864 = v2253[1];
          
          break;
          }
        case 'User_end0_303': {
          const v3168 = v2253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_end"
            });
          ;
          const v3259 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:125:37:dot', stdlib.UInt_max, '0')];
          const v3260 = v3259[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:125:37:dot', stdlib.UInt_max, '0')];
          ;
          const v3438 = true;
          const v3439 = await txn1.getOutput('User_end', 'v3438', ctc7, v3438);
          
          const v3451 = stdlib.sub(v3260, v3260);
          const v3453 = stdlib.Array_set(v3259, '0', v3451);
          const v3454 = stdlib.Array_set(v2021, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:294:57:application', stdlib.UInt_max, '0'), v3453);
          sim_r.txns.push({
            kind: 'from',
            to: v2252,
            tok: v1976
            });
          const v3456 = v2014.buyers;
          const v3459 = v2014.percent;
          const v3462 = v2014.winner;
          const v3463 = {
            bal: v2070,
            buyers: v3456,
            currentUserNumber: v2069,
            keepGoing: false,
            percent: v3459,
            raffleBal: v2072,
            ticketsLeft: v2071,
            winner: v3462
            };
          const v5981 = v3463;
          const v5983 = v2255;
          const v5984 = v3454;
          const v5985 = v2022;
          const v5986 = v3463.keepGoing;
          if (v5986) {
            const v5987 = stdlib.ge(v2255, v2006);
            const v5988 = v3463.currentUserNumber;
            const v5989 = v3463.bal;
            const v5990 = v3463.ticketsLeft;
            const v5991 = v3463.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: undefined /* Nothing */
              });
            const v5993 = v3454[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            const v5994 = v5993[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: v1976
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1976
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_optin0_303': {
          const v3472 = v2253[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
  switch (v2253[0]) {
    case 'User_buyTicket0_303': {
      const v2256 = v2253[1];
      return;
      break;
      }
    case 'User_claim0_303': {
      const v2560 = v2253[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_303': {
      const v2864 = v2253[1];
      return;
      break;
      }
    case 'User_end0_303': {
      const v3168 = v2253[1];
      undefined /* setApiDetails */;
      const v3230 = stdlib.addressEq(v2252, v1966);
      const v3231 = stdlib.addressEq(v2252, v1979);
      const v3232 = v3230 ? true : v3231;
      stdlib.assert(v3232, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:284:24:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Don\'t have administrative rights to perform action',
        who: 'User_end'
        });
      const v3235 = stdlib.eq(v2071, v1969);
      stdlib.assert(v3235, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./raffle_algo_v2.rsh:289:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./raffle_algo_v2.rsh:284:24:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:24:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)', 'at ./raffle_algo_v2.rsh:140:14:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:140:14:function exp)'],
        msg: 'Cannot end contract',
        who: 'User_end'
        });
      ;
      const v3259 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:125:37:dot', stdlib.UInt_max, '0')];
      const v3260 = v3259[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:125:37:dot', stdlib.UInt_max, '0')];
      ;
      const v3438 = true;
      const v3439 = await txn1.getOutput('User_end', 'v3438', ctc7, v3438);
      if (v1385) {
        stdlib.protect(ctc0, await interact.out(v3168, v3439), {
          at: './raffle_algo_v2.rsh:284:11:application',
          fs: ['at ./raffle_algo_v2.rsh:284:11:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:284:11:function exp)', 'at ./raffle_algo_v2.rsh:293:14:application call to "ret" (defined at: ./raffle_algo_v2.rsh:292:15:function exp)', 'at ./raffle_algo_v2.rsh:292:15:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:292:15:function exp)'],
          msg: 'out',
          who: 'User_end'
          });
        }
      else {
        }
      
      const v3451 = stdlib.sub(v3260, v3260);
      const v3453 = stdlib.Array_set(v3259, '0', v3451);
      const v3454 = stdlib.Array_set(v2021, stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:294:57:application', stdlib.UInt_max, '0'), v3453);
      ;
      const v3456 = v2014.buyers;
      const v3459 = v2014.percent;
      const v3462 = v2014.winner;
      const v3463 = {
        bal: v2070,
        buyers: v3456,
        currentUserNumber: v2069,
        keepGoing: false,
        percent: v3459,
        raffleBal: v2072,
        ticketsLeft: v2071,
        winner: v3462
        };
      const v5981 = v3463;
      const v5983 = v2255;
      const v5984 = v3454;
      const v5985 = v2022;
      const v5986 = v3463.keepGoing;
      if (v5986) {
        const v5987 = stdlib.ge(v2255, v2006);
        const v5988 = v3463.currentUserNumber;
        const v5989 = v3463.bal;
        const v5990 = v3463.ticketsLeft;
        const v5991 = v3463.raffleBal;
        return;
        }
      else {
        ;
        const v5993 = v3454[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        const v5994 = v5993[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'User_optin0_303': {
      const v3472 = v2253[1];
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
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Object({
    bal: ctc3,
    buyers: ctc3,
    currentUserNumber: ctc3,
    keepGoing: ctc7,
    percent: ctc3,
    raffleBal: ctc3,
    ticketsLeft: ctc3,
    winner: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    User_buyTicket0_303: ctc13,
    User_claim0_303: ctc12,
    User_determinWinnerAfterDeadline0_303: ctc12,
    User_end0_303: ctc12,
    User_optin0_303: ctc12
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
  
  
  const [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3]);
  const v2100 = stdlib.protect(ctc12, await interact.in(), {
    at: './raffle_algo_v2.rsh:1:23:application',
    fs: ['at ./raffle_algo_v2.rsh:221:26:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:221:26:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to "runUser_optin0_303" (defined at: ./raffle_algo_v2.rsh:221:10:function exp)', 'at ./raffle_algo_v2.rsh:125:37:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:125:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2104 = ['User_optin0_303', v2100];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1966, v1967, v1968, v1969, v1970, v1971, v1972, v1973, v1974, v1976, v1977, v1978, v1979, v2006, v2014, v2018, v2021, v2022, v2058, v2069, v2070, v2071, v2072, v2104],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:223:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:223:14:decimal', stdlib.UInt_max, '0'), v1976]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
      
      switch (v2253[0]) {
        case 'User_buyTicket0_303': {
          const v2256 = v2253[1];
          
          break;
          }
        case 'User_claim0_303': {
          const v2560 = v2253[1];
          
          break;
          }
        case 'User_determinWinnerAfterDeadline0_303': {
          const v2864 = v2253[1];
          
          break;
          }
        case 'User_end0_303': {
          const v3168 = v2253[1];
          
          break;
          }
        case 'User_optin0_303': {
          const v3472 = v2253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          const v3770 = null;
          const v3771 = await txn1.getOutput('User_optin', 'v3770', ctc0, v3770);
          
          const v6079 = v2014;
          const v6081 = v2255;
          const v6082 = v2021;
          const v6083 = v2022;
          const v6084 = v2014.keepGoing;
          if (v6084) {
            const v6085 = stdlib.ge(v2255, v2006);
            const v6086 = v2014.currentUserNumber;
            const v6087 = v2014.bal;
            const v6088 = v2014.ticketsLeft;
            const v6089 = v2014.raffleBal;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: undefined /* Nothing */
              });
            const v6091 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            const v6092 = v6091[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1979,
              tok: v1976
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1976
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
    tys: [ctc1, ctc6, ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3, ctc1, ctc1, ctc3, ctc9, ctc3, ctc11, ctc3, ctc7, ctc3, ctc3, ctc3, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2253], secs: v2255, time: v2254, didSend: v1385, from: v2252 } = txn1;
  switch (v2253[0]) {
    case 'User_buyTicket0_303': {
      const v2256 = v2253[1];
      return;
      break;
      }
    case 'User_claim0_303': {
      const v2560 = v2253[1];
      return;
      break;
      }
    case 'User_determinWinnerAfterDeadline0_303': {
      const v2864 = v2253[1];
      return;
      break;
      }
    case 'User_end0_303': {
      const v3168 = v2253[1];
      return;
      break;
      }
    case 'User_optin0_303': {
      const v3472 = v2253[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3770 = null;
      const v3771 = await txn1.getOutput('User_optin', 'v3770', ctc0, v3770);
      if (v1385) {
        stdlib.protect(ctc0, await interact.out(v3472, v3771), {
          at: './raffle_algo_v2.rsh:221:11:application',
          fs: ['at ./raffle_algo_v2.rsh:221:11:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:221:11:function exp)', 'at ./raffle_algo_v2.rsh:226:14:application call to "ret" (defined at: ./raffle_algo_v2.rsh:224:15:function exp)', 'at ./raffle_algo_v2.rsh:224:15:application call to [unknown function] (defined at: ./raffle_algo_v2.rsh:224:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6079 = v2014;
      const v6081 = v2255;
      const v6082 = v2021;
      const v6083 = v2022;
      const v6084 = v2014.keepGoing;
      if (v6084) {
        const v6085 = stdlib.ge(v2255, v2006);
        const v6086 = v2014.currentUserNumber;
        const v6087 = v2014.bal;
        const v6088 = v2014.ticketsLeft;
        const v6089 = v2014.raffleBal;
        return;
        }
      else {
        ;
        const v6091 = v2021[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
        const v6092 = v6091[stdlib.checkedBigNumberify('./raffle_algo_v2.rsh:305:19:application', stdlib.UInt_max, '0')];
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
    impure: [`User_buyTicket(uint64)byte`, `User_claim()byte`, `User_determinWinnerAfterDeadline()address`, `User_end()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`],
    pure: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`],
    sigs: [`Info_balance()uint64`, `Info_currentSec()uint64`, `Info_currentTime()uint64`, `Info_hasDeadlineReached()byte`, `Info_myTicketsAmount(address)uint64`, `Info_opted(address)byte`, `Info_props()(uint64,uint64,address,uint64,byte,uint64,uint64,byte[30],uint64)`, `Info_ticketsBought()uint64`, `Info_ticketsLeft()uint64`, `Info_token()uint64`, `Info_winner()(byte,byte[32])`, `User_buyTicket(uint64)byte`, `User_claim()byte`, `User_determinWinnerAfterDeadline()address`, `User_end()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCARAAEECD9HT1dfZ9STASEFEaCNBm93JgQAAQEBAAECMRhBCB0oZEkiWzUBJVs1AipkKWRQK2RQghMEE25XOwQT7+94BBePUIYEGVleKQQpN6f2BClhn+QEN0fKpQQ++WKaBD8s5C4EXaLyywR5OSlTBH+ccV8Egcvb9QSjQdHCBMNv/m4E1f8MfgTf2SMoBOd3Hy4E6xdyZDYaAI4TAHMALwFaAFIBogA/B3MAAQFyB1gA7QAfANsBDwDJAJgHaAD9AYoANAEkEkSICJM0ExY1BDEZIhJEgAQVH3x1NARQsCNDNAEkEkSICHU0GBY1BEL/3zQBJBJEiAhlNBUWNQRC/880ASQSRIgIVTQSFlEHCDUEQv+8NhoBNQs0ASQSRIgIPSWvKCWvKTQLUIgI1ogIyjUEQv+bNhoBNQs0ASQSRIgIHCgogAEDNAtQiAi2IlUjEhZRBwg1BEL/djQBJBJEiAf8NBsWNB4WUDQaUDQhFlA0IxZRBwhQNB0WUDQiFlA0JFA0HBZQNQRC/0U0ASQSRIgHyzQXVxAINQRC/zM0ASQSRIgHuTQXVykINQRC/yE0ASQSRIgHpzQcFjUEQv8RNAEkEkSIB5c0F1cxITUEQv7/NhoBFzULJa8qNAsWUFA1CyQ0ARJEiAd1NAsiWzUMNAtXCAk1DYAEVOdirDQMFlA0DVCwNAyICCk0DSJVjQUGRwZKBk0GUAZTQv6mgBEAAAAAAAAAAAEAAAAAAAAAADULQv+tgBEAAAAAAAAAAAIAAAAAAAAAADULQv+VgBEAAAAAAAAAAAMAAAAAAAAAADULQv99gBEAAAAAAAAAAAQAAAAAAAAAADULQv9lNA0jWzUMJa8oJa8pMQBQiAd1iAdpFzUNNBU0GAxENAwjD0Q0DTQMCDULNB00Cw9ENAw0DQg0Ig5ENAw0Hgs1KDQTNCgINSc0KIgHTiEKKTEAUDQLFogHejEANAwWUDULgAT4WMgANAtQsDQXJVs1JiEKKjQmFlAxAIgHVjQRIwhJNRI0IBJBBWojNQ00DUEFgSM1C4AIAAAAAAAACU00CxZRBwhQsDQLFlEHCDUENBA0KAgWNCYjCBZQNBE0DAgWUDQXVxgBUDQXVxkIUDQOFlA0DzQMCRZQKTEAUFAyBjIHNCc1EzUVNRY1FzQXVxgBF0EFfDQVNBgPNRI0F4EQWzURNBciWzUQNBeBKVs1DzQXIQtbNQ40JTQkUDQjFlEHCFA0IhZQNCEWUDQgFlA0HxZQNB4WUDQdFlA0HBZQNBsWUDQaUDQZUDQYFlA0F1A0FRZQNBRQNBMWUDQSFlEHCFA0ERZQNBAWUDQPFlA0DhZQJDIGNQI1ASpLAVcAf2cpSwFXf39nK0xX/l1nKDQBFjQCFlBnMRkiEkSIBik0A0D8wUL8tDQXVzEhSTULIlUjEkQ0EkQ0FFcAEUk1DSJbNQw0DjQMDkQ0JTQLiAWwSTUOMQASRDIHNBgPRDQMNBw0DogFljQTSSEMC4FkCgk1DjQTNA4JNRA0DjQliAWUIzUOgAgAAAAAAAAK1DQOFlEHCFCwNA4WUQcINQQ0EBY0F1cICFA0ERZQKlA0F1cZCFAlr1A0DxZQNAtQMgYyBzQUNA00DEkJFlwAXAA0EDUTNRQ1FTUWNRdC/pE0F1cxISJVIhJENBJEMgc0GA9ENBclWzUNKDIDKjQfNA0YFlCIBQZJNQwiVSMSRDQZNAyIBO41C4AIAAAAAAAADCQ0C1CwNAs1BDQQFjQNFlA0ERZQNBdXGAFQNBdXGQhQNA4WUDQPFlApNAtQUDIGMgc1FTUWNRdC/hYxADQlEjEANBkSEUQ0DzQiEkQ0FFcAEUk1DSJbNQwjNQuACAAAAAAAAA1uNAsWUQcIULA0CxZRBwg1BDQMNBwxAIgEYTQQFjQXVwgIUDQRFlAqUDQXVxkIUDQOFlA0DxZQNBdXMSFQMgYyBzQUNA00DEkJFlwAXAA1FDUVNRY1F0L9kyg1C4AIAAAAAAAADro0C1CwNAs1BDIGMgc1FTUWQv1zMQA1JTQLIls1DTQLVwgeNSQ0C1cmARc1IzQLgSdbNSI0C4EvWzUhNAuBN1s1IDQLIQRbNR80CyEFWzUeNAshBls1HTQLIQdbNQw0CyEIWzUcNAshCVs1GzQLV28gNRo0C1ePIDUZgATv5kgYNA0WUDQkUDQjFlEHCFA0IhZQNCEWUDQgFlA0HxZQNB4WUDQdFlA0DBZQNBwWUDQbFlA0GlA0GVCwNA2IA5QhDa9JNQtJVwARJa9cAFwANQ40IDQiDkQ0HoH///////////8BDEQ0HiMPRCEOiANtIjQcMgqIAx80JTQkUDQjFlEHCFA0IhZQNCEWUDQgFlA0HxZQNB4WUDQdFlA0DBZQNBwWUDQbFlA0GlA0GVA0DlCBgwGvUCMyBkL81SM0ARJESVcAIDUlSVcgHjUkSVc+ARc1I0khBFs1IkkhBVs1IUkhBls1IEkhB1s1H0khCFs1HkkhCVs1HUkhD1s1DEkhEFs1HEmBf1s1G0lXhyA1GklXpyA1GVfHETUONAsXNQ2ABNUVGRQ0DRZQsDQNiAKjNAyIAoI0DlcAETUNNA40DUkiWzQbCBZcAFwANQs0GzQcMRY0ACMISTUACUcDOBQyChJEOBAkEkQ4EU8CEkQ4EhJENCUxABJEMgc0IQg1GDQMFiWvUCWvUClQgAgAAAAAAAAABVA0C1cAEVcACFA0IhZQIQuvUDIGMgc0CzQMNRM1FDUVNRY1F0L7TYgB9SEOiAIaNhoBNQtC/cqIAeU2GgE1C0L+5ogB2jYaATULQvmhIjE0EkQkMTUSRCIxNhJEIjE3EkSIAbuB2wKvIiJC+5BC+hlC+7tC/G1C/OVC/WU0EjQgDkEAETQRNAwINCAPNQs0CzUNQvqAIjULQv/zIzULgAgAAAAAAAAJZzQLFlEHCFCwNAsWUQcINQQ0EDQoCBY0JiMIFlA0ETQMCBZQNBdXGAFQNBdXGQhQNA4WUDQPNAwJFlA0F1cxIVAyBjIHNCc1EzUVNRY1F0L6ezQTNBmIARs0FFcAESJbNBw0GYgA9SI0HDIKMgmIAVExGSEMEkSIAS4yCmAyCngJSTUGMgqIAOtC+vNITL9IiSKyASOyELIHsgiziSKyASSyELIUshGyErOJSIlMCUk1BjIJiAC9iQlJQf/uSTUGiAC5iUlXACA1JUlXIB41JElXPgEXNSNJIQRbNSJJIQVbNSFJIQZbNSBJIQdbNR9JIQhbNR5JIQlbNR1JIQ9bNRxJIRBbNRtJV38gNRpJV58gNRlJgb8BWzUYSVfHUjUXSYGZAls1FUmBoQIhDVg1FEmBsgJbNRNJgboCI1gXNRJJgbsCWzURSYHDAls1EEmBywJbNQ+B0wJbNQ6JsUL/PUlXAQBMIlVNib5JFlEHCEUETVCJsUL/GSM1A4kxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSSISTDQCEhFEiTQGCDUGiTQGNAdKD0H+/EL/BExJvUD+0ksDiP/jQv7KsbIVQv7V`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `551`,
    1001: `551`,
    1002: `552`,
    1003: `553`,
    1004: `554`,
    1005: `554`,
    1006: `555`,
    1007: `556`,
    1008: `557`,
    1009: `558`,
    101: `24`,
    1010: `558`,
    1011: `560`,
    1012: `560`,
    1013: `561`,
    1014: `561`,
    1015: `562`,
    1016: `563`,
    1017: `563`,
    1018: `564`,
    1019: `564`,
    102: `24`,
    1020: `564`,
    1021: `565`,
    1022: `566`,
    1023: `567`,
    1024: `567`,
    1025: `568`,
    1026: `568`,
    1027: `568`,
    1028: `569`,
    1029: `570`,
    103: `24`,
    1030: `571`,
    1031: `572`,
    1032: `572`,
    1033: `572`,
    1034: `573`,
    1035: `574`,
    1036: `575`,
    1037: `575`,
    1038: `576`,
    1039: `577`,
    104: `24`,
    1040: `577`,
    1041: `578`,
    1042: `579`,
    1043: `580`,
    1044: `581`,
    1045: `581`,
    1046: `582`,
    1047: `583`,
    1048: `584`,
    1049: `586`,
    105: `24`,
    1050: `586`,
    1051: `586`,
    1052: `588`,
    1053: `588`,
    1054: `589`,
    1055: `589`,
    1056: `589`,
    1057: `590`,
    1058: `590`,
    1059: `590`,
    106: `24`,
    1060: `592`,
    1061: `592`,
    1062: `593`,
    1063: `593`,
    1064: `593`,
    1065: `594`,
    1066: `595`,
    1067: `595`,
    1068: `596`,
    1069: `597`,
    107: `24`,
    1070: `598`,
    1071: `599`,
    1072: `600`,
    1073: `608`,
    1074: `608`,
    1075: `609`,
    1076: `617`,
    1077: `617`,
    1078: `618`,
    1079: `618`,
    108: `24`,
    1080: `618`,
    1081: `619`,
    1082: `620`,
    1083: `620`,
    1084: `621`,
    1085: `622`,
    1086: `623`,
    1087: `623`,
    1088: `624`,
    1089: `624`,
    109: `24`,
    1090: `625`,
    1091: `625`,
    1092: `626`,
    1093: `627`,
    1094: `635`,
    1095: `635`,
    1096: `636`,
    1097: `636`,
    1098: `637`,
    1099: `637`,
    11: `2`,
    110: `24`,
    1100: `637`,
    1101: `638`,
    1102: `639`,
    1103: `639`,
    1104: `640`,
    1105: `640`,
    1106: `641`,
    1107: `642`,
    1108: `650`,
    1109: `650`,
    111: `24`,
    1110: `651`,
    1111: `651`,
    1112: `652`,
    1113: `653`,
    1114: `658`,
    1115: `658`,
    1116: `660`,
    1117: `660`,
    1118: `662`,
    1119: `662`,
    112: `24`,
    1120: `663`,
    1121: `663`,
    1122: `663`,
    1123: `664`,
    1124: `664`,
    1125: `665`,
    1126: `666`,
    1127: `666`,
    1128: `667`,
    1129: `668`,
    113: `24`,
    1130: `668`,
    1131: `669`,
    1132: `670`,
    1133: `671`,
    1134: `671`,
    1135: `672`,
    1136: `672`,
    1137: `673`,
    1138: `673`,
    1139: `674`,
    114: `24`,
    1140: `675`,
    1141: `675`,
    1142: `676`,
    1143: `676`,
    1144: `678`,
    1145: `678`,
    1146: `679`,
    1147: `679`,
    1148: `679`,
    1149: `680`,
    115: `24`,
    1150: `681`,
    1151: `681`,
    1152: `682`,
    1153: `682`,
    1154: `682`,
    1155: `682`,
    1156: `682`,
    1157: `682`,
    1158: `682`,
    1159: `682`,
    116: `24`,
    1160: `682`,
    1161: `682`,
    1162: `683`,
    1163: `683`,
    1164: `684`,
    1165: `685`,
    1166: `685`,
    1167: `685`,
    1168: `686`,
    1169: `687`,
    117: `24`,
    1170: `688`,
    1171: `688`,
    1172: `689`,
    1173: `690`,
    1174: `690`,
    1175: `690`,
    1176: `691`,
    1177: `691`,
    1178: `692`,
    1179: `692`,
    118: `24`,
    1180: `693`,
    1181: `694`,
    1182: `694`,
    1183: `695`,
    1184: `695`,
    1185: `695`,
    1186: `696`,
    1187: `697`,
    1188: `697`,
    1189: `698`,
    119: `24`,
    1190: `699`,
    1191: `700`,
    1192: `701`,
    1193: `702`,
    1194: `702`,
    1195: `703`,
    1196: `703`,
    1197: `703`,
    1198: `704`,
    1199: `705`,
    12: `2`,
    120: `24`,
    1200: `706`,
    1201: `707`,
    1202: `708`,
    1203: `708`,
    1204: `709`,
    1205: `710`,
    1206: `711`,
    1207: `711`,
    1208: `712`,
    1209: `713`,
    121: `24`,
    1210: `713`,
    1211: `714`,
    1212: `714`,
    1213: `715`,
    1214: `715`,
    1215: `716`,
    1216: `716`,
    1217: `717`,
    1218: `717`,
    1219: `718`,
    122: `24`,
    1220: `719`,
    1221: `720`,
    1222: `721`,
    1223: `721`,
    1224: `722`,
    1225: `722`,
    1226: `723`,
    1227: `723`,
    1228: `724`,
    1229: `724`,
    123: `24`,
    1230: `725`,
    1231: `725`,
    1232: `726`,
    1233: `726`,
    1234: `727`,
    1235: `727`,
    1236: `728`,
    1237: `728`,
    1238: `729`,
    1239: `729`,
    124: `24`,
    1240: `729`,
    1241: `731`,
    1242: `731`,
    1243: `732`,
    1244: `732`,
    1245: `732`,
    1246: `733`,
    1247: `734`,
    1248: `735`,
    1249: `736`,
    125: `24`,
    1250: `737`,
    1251: `745`,
    1252: `745`,
    1253: `746`,
    1254: `754`,
    1255: `754`,
    1256: `755`,
    1257: `755`,
    1258: `756`,
    1259: `757`,
    126: `24`,
    1260: `762`,
    1261: `762`,
    1262: `763`,
    1263: `764`,
    1264: `765`,
    1265: `765`,
    1266: `767`,
    1267: `768`,
    1268: `768`,
    1269: `769`,
    127: `24`,
    1270: `770`,
    1271: `770`,
    1272: `771`,
    1273: `771`,
    1274: `772`,
    1275: `773`,
    1276: `774`,
    1277: `775`,
    1278: `775`,
    1279: `775`,
    128: `24`,
    1280: `776`,
    1281: `777`,
    1282: `777`,
    1283: `778`,
    1284: `779`,
    1285: `780`,
    1286: `781`,
    1287: `782`,
    1288: `787`,
    1289: `787`,
    129: `24`,
    1290: `788`,
    1291: `788`,
    1292: `789`,
    1293: `789`,
    1294: `789`,
    1295: `790`,
    1296: `790`,
    1297: `791`,
    1298: `791`,
    1299: `791`,
    13: `2`,
    130: `24`,
    1300: `791`,
    1301: `791`,
    1302: `791`,
    1303: `791`,
    1304: `791`,
    1305: `791`,
    1306: `791`,
    1307: `792`,
    1308: `792`,
    1309: `793`,
    131: `24`,
    1310: `794`,
    1311: `795`,
    1312: `795`,
    1313: `796`,
    1314: `796`,
    1315: `797`,
    1316: `797`,
    1317: `798`,
    1318: `799`,
    1319: `799`,
    132: `24`,
    1320: `800`,
    1321: `801`,
    1322: `802`,
    1323: `802`,
    1324: `803`,
    1325: `804`,
    1326: `805`,
    1327: `805`,
    1328: `806`,
    1329: `806`,
    133: `24`,
    1330: `806`,
    1331: `807`,
    1332: `808`,
    1333: `808`,
    1334: `809`,
    1335: `809`,
    1336: `809`,
    1337: `810`,
    1338: `811`,
    1339: `811`,
    134: `24`,
    1340: `812`,
    1341: `813`,
    1342: `814`,
    1343: `814`,
    1344: `815`,
    1345: `816`,
    1346: `817`,
    1347: `818`,
    1348: `818`,
    1349: `819`,
    135: `24`,
    1350: `820`,
    1351: `821`,
    1352: `821`,
    1353: `822`,
    1354: `822`,
    1355: `823`,
    1356: `823`,
    1357: `824`,
    1358: `824`,
    1359: `825`,
    136: `24`,
    1360: `825`,
    1361: `826`,
    1362: `826`,
    1363: `826`,
    1364: `828`,
    1365: `828`,
    1366: `829`,
    1367: `829`,
    1368: `830`,
    1369: `831`,
    137: `24`,
    1370: `831`,
    1371: `832`,
    1372: `832`,
    1373: `833`,
    1374: `834`,
    1375: `835`,
    1376: `843`,
    1377: `843`,
    1378: `844`,
    1379: `844`,
    138: `24`,
    1380: `845`,
    1381: `846`,
    1382: `854`,
    1383: `854`,
    1384: `855`,
    1385: `855`,
    1386: `855`,
    1387: `856`,
    1388: `857`,
    1389: `857`,
    139: `24`,
    1390: `858`,
    1391: `859`,
    1392: `860`,
    1393: `860`,
    1394: `861`,
    1395: `862`,
    1396: `862`,
    1397: `863`,
    1398: `863`,
    1399: `863`,
    14: `2`,
    140: `24`,
    1400: `863`,
    1401: `863`,
    1402: `863`,
    1403: `863`,
    1404: `863`,
    1405: `863`,
    1406: `863`,
    1407: `864`,
    1408: `864`,
    1409: `865`,
    141: `24`,
    1410: `866`,
    1411: `866`,
    1412: `866`,
    1413: `867`,
    1414: `868`,
    1415: `869`,
    1416: `869`,
    1417: `870`,
    1418: `871`,
    1419: `871`,
    142: `24`,
    1420: `871`,
    1421: `872`,
    1422: `872`,
    1423: `873`,
    1424: `873`,
    1425: `875`,
    1426: `875`,
    1427: `876`,
    1428: `876`,
    1429: `877`,
    143: `24`,
    1430: `877`,
    1431: `877`,
    1432: `878`,
    1433: `878`,
    1434: `879`,
    1435: `880`,
    1436: `880`,
    1437: `881`,
    1438: `881`,
    1439: `881`,
    144: `24`,
    1440: `882`,
    1441: `883`,
    1442: `883`,
    1443: `884`,
    1444: `885`,
    1445: `886`,
    1446: `887`,
    1447: `888`,
    1448: `888`,
    1449: `889`,
    145: `24`,
    1450: `889`,
    1451: `889`,
    1452: `890`,
    1453: `891`,
    1454: `891`,
    1455: `892`,
    1456: `893`,
    1457: `894`,
    1458: `894`,
    1459: `895`,
    146: `24`,
    1460: `896`,
    1461: `897`,
    1462: `897`,
    1463: `898`,
    1464: `898`,
    1465: `898`,
    1466: `899`,
    1467: `900`,
    1468: `900`,
    1469: `901`,
    147: `24`,
    1470: `901`,
    1471: `902`,
    1472: `902`,
    1473: `903`,
    1474: `903`,
    1475: `904`,
    1476: `904`,
    1477: `905`,
    1478: `906`,
    1479: `907`,
    148: `24`,
    1480: `908`,
    1481: `908`,
    1482: `909`,
    1483: `909`,
    1484: `910`,
    1485: `910`,
    1486: `911`,
    1487: `911`,
    1488: `912`,
    1489: `912`,
    149: `24`,
    1490: `913`,
    1491: `913`,
    1492: `914`,
    1493: `914`,
    1494: `914`,
    1495: `916`,
    1496: `917`,
    1497: `917`,
    1498: `918`,
    1499: `918`,
    15: `2`,
    150: `24`,
    1500: `918`,
    1501: `918`,
    1502: `918`,
    1503: `918`,
    1504: `918`,
    1505: `918`,
    1506: `918`,
    1507: `918`,
    1508: `919`,
    1509: `919`,
    151: `24`,
    1510: `920`,
    1511: `921`,
    1512: `922`,
    1513: `922`,
    1514: `923`,
    1515: `923`,
    1516: `924`,
    1517: `924`,
    1518: `925`,
    1519: `925`,
    152: `24`,
    1520: `926`,
    1521: `926`,
    1522: `927`,
    1523: `927`,
    1524: `928`,
    1525: `928`,
    1526: `928`,
    1527: `930`,
    1528: `930`,
    1529: `931`,
    153: `24`,
    1530: `931`,
    1531: `932`,
    1532: `932`,
    1533: `933`,
    1534: `934`,
    1535: `935`,
    1536: `935`,
    1537: `936`,
    1538: `936`,
    1539: `937`,
    154: `25`,
    1540: `937`,
    1541: `937`,
    1542: `938`,
    1543: `938`,
    1544: `939`,
    1545: `939`,
    1546: `940`,
    1547: `940`,
    1548: `940`,
    1549: `941`,
    155: `25`,
    1550: `942`,
    1551: `942`,
    1552: `943`,
    1553: `943`,
    1554: `944`,
    1555: `944`,
    1556: `945`,
    1557: `946`,
    1558: `946`,
    1559: `947`,
    156: `25`,
    1560: `947`,
    1561: `948`,
    1562: `948`,
    1563: `949`,
    1564: `950`,
    1565: `950`,
    1566: `951`,
    1567: `951`,
    1568: `952`,
    1569: `952`,
    157: `26`,
    1570: `953`,
    1571: `954`,
    1572: `954`,
    1573: `955`,
    1574: `955`,
    1575: `956`,
    1576: `956`,
    1577: `957`,
    1578: `958`,
    1579: `958`,
    158: `26`,
    1580: `959`,
    1581: `959`,
    1582: `960`,
    1583: `960`,
    1584: `961`,
    1585: `962`,
    1586: `962`,
    1587: `963`,
    1588: `963`,
    1589: `964`,
    159: `26`,
    1590: `964`,
    1591: `965`,
    1592: `966`,
    1593: `966`,
    1594: `967`,
    1595: `967`,
    1596: `968`,
    1597: `968`,
    1598: `969`,
    1599: `970`,
    16: `2`,
    160: `26`,
    1600: `970`,
    1601: `971`,
    1602: `971`,
    1603: `972`,
    1604: `972`,
    1605: `973`,
    1606: `974`,
    1607: `974`,
    1608: `975`,
    1609: `975`,
    161: `26`,
    1610: `976`,
    1611: `976`,
    1612: `977`,
    1613: `978`,
    1614: `978`,
    1615: `979`,
    1616: `979`,
    1617: `980`,
    1618: `980`,
    1619: `980`,
    162: `26`,
    1620: `981`,
    1621: `981`,
    1622: `982`,
    1623: `982`,
    1624: `983`,
    1625: `983`,
    1626: `983`,
    1627: `984`,
    1628: `984`,
    1629: `985`,
    163: `26`,
    1630: `985`,
    1631: `985`,
    1632: `985`,
    1633: `985`,
    1634: `985`,
    1635: `986`,
    1636: `986`,
    1637: `987`,
    1638: `988`,
    1639: `989`,
    164: `26`,
    1640: `989`,
    1641: `990`,
    1642: `991`,
    1643: `991`,
    1644: `992`,
    1645: `993`,
    1646: `993`,
    1647: `993`,
    1648: `994`,
    1649: `995`,
    165: `26`,
    1650: `995`,
    1651: `996`,
    1652: `997`,
    1653: `998`,
    1654: `998`,
    1655: `999`,
    1656: `1000`,
    1657: `1001`,
    1658: `1001`,
    1659: `1002`,
    166: `26`,
    1660: `1003`,
    1661: `1004`,
    1662: `1004`,
    1663: `1005`,
    1664: `1006`,
    1665: `1007`,
    1666: `1007`,
    1667: `1008`,
    1668: `1009`,
    1669: `1010`,
    167: `26`,
    1670: `1010`,
    1671: `1011`,
    1672: `1012`,
    1673: `1013`,
    1674: `1013`,
    1675: `1014`,
    1676: `1015`,
    1677: `1016`,
    1678: `1016`,
    1679: `1017`,
    168: `26`,
    1680: `1018`,
    1681: `1019`,
    1682: `1019`,
    1683: `1020`,
    1684: `1021`,
    1685: `1022`,
    1686: `1022`,
    1687: `1023`,
    1688: `1024`,
    1689: `1024`,
    169: `26`,
    1690: `1025`,
    1691: `1026`,
    1692: `1028`,
    1693: `1028`,
    1694: `1029`,
    1695: `1029`,
    1696: `1029`,
    1697: `1030`,
    1698: `1030`,
    1699: `1031`,
    17: `2`,
    170: `26`,
    1700: `1032`,
    1701: `1033`,
    1702: `1033`,
    1703: `1034`,
    1704: `1035`,
    1705: `1035`,
    1706: `1035`,
    1707: `1036`,
    1708: `1037`,
    1709: `1038`,
    171: `26`,
    1710: `1038`,
    1711: `1039`,
    1712: `1039`,
    1713: `1040`,
    1714: `1040`,
    1715: `1041`,
    1716: `1041`,
    1717: `1042`,
    1718: `1042`,
    1719: `1043`,
    172: `26`,
    1720: `1044`,
    1721: `1048`,
    1722: `1048`,
    1723: `1049`,
    1724: `1049`,
    1725: `1049`,
    1726: `1049`,
    1727: `1049`,
    1728: `1049`,
    1729: `1049`,
    173: `26`,
    1730: `1049`,
    1731: `1049`,
    1732: `1049`,
    1733: `1049`,
    1734: `1050`,
    1735: `1051`,
    1736: `1055`,
    1737: `1055`,
    1738: `1056`,
    1739: `1057`,
    174: `26`,
    1740: `1058`,
    1741: `1062`,
    1742: `1062`,
    1743: `1063`,
    1744: `1063`,
    1745: `1063`,
    1746: `1064`,
    1747: `1066`,
    1748: `1066`,
    1749: `1067`,
    175: `26`,
    1750: `1067`,
    1751: `1068`,
    1752: `1068`,
    1753: `1068`,
    1754: `1070`,
    1755: `1070`,
    1756: `1071`,
    1757: `1071`,
    1758: `1072`,
    1759: `1073`,
    176: `26`,
    1760: `1073`,
    1761: `1074`,
    1762: `1075`,
    1763: `1075`,
    1764: `1075`,
    1765: `1076`,
    1766: `1077`,
    1767: `1077`,
    1768: `1078`,
    1769: `1079`,
    177: `26`,
    1770: `1080`,
    1771: `1080`,
    1772: `1081`,
    1773: `1082`,
    1774: `1083`,
    1775: `1083`,
    1776: `1084`,
    1777: `1085`,
    1778: `1086`,
    1779: `1086`,
    178: `26`,
    1780: `1087`,
    1781: `1088`,
    1782: `1089`,
    1783: `1089`,
    1784: `1090`,
    1785: `1091`,
    1786: `1092`,
    1787: `1092`,
    1788: `1093`,
    1789: `1094`,
    179: `26`,
    1790: `1095`,
    1791: `1095`,
    1792: `1096`,
    1793: `1097`,
    1794: `1098`,
    1795: `1098`,
    1796: `1099`,
    1797: `1100`,
    1798: `1101`,
    1799: `1101`,
    18: `2`,
    180: `26`,
    1800: `1102`,
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
    1810: `1109`,
    1811: `1110`,
    1812: `1110`,
    1813: `1110`,
    1814: `1111`,
    1815: `1112`,
    1816: `1113`,
    1817: `1114`,
    1818: `1114`,
    1819: `1115`,
    182: `26`,
    1820: `1115`,
    1821: `1115`,
    1822: `1117`,
    1823: `1118`,
    1824: `1118`,
    1825: `1119`,
    1826: `1120`,
    1827: `1122`,
    1828: `1123`,
    1829: `1123`,
    183: `26`,
    1830: `1123`,
    1831: `1124`,
    1832: `1124`,
    1833: `1125`,
    1834: `1126`,
    1835: `1126`,
    1836: `1126`,
    1837: `1127`,
    1838: `1127`,
    1839: `1128`,
    184: `26`,
    1840: `1129`,
    1841: `1129`,
    1842: `1129`,
    1843: `1130`,
    1844: `1131`,
    1845: `1131`,
    1846: `1132`,
    1847: `1133`,
    1848: `1133`,
    1849: `1134`,
    185: `26`,
    1850: `1135`,
    1851: `1135`,
    1852: `1136`,
    1853: `1137`,
    1854: `1137`,
    1855: `1138`,
    1856: `1139`,
    1857: `1139`,
    1858: `1140`,
    1859: `1141`,
    186: `26`,
    1860: `1141`,
    1861: `1142`,
    1862: `1143`,
    1863: `1143`,
    1864: `1144`,
    1865: `1145`,
    1866: `1145`,
    1867: `1146`,
    1868: `1147`,
    1869: `1147`,
    187: `26`,
    1870: `1148`,
    1871: `1149`,
    1872: `1149`,
    1873: `1150`,
    1874: `1151`,
    1875: `1151`,
    1876: `1152`,
    1877: `1153`,
    1878: `1153`,
    1879: `1154`,
    188: `26`,
    1880: `1155`,
    1881: `1155`,
    1882: `1156`,
    1883: `1157`,
    1884: `1157`,
    1885: `1158`,
    1886: `1159`,
    1887: `1159`,
    1888: `1160`,
    1889: `1161`,
    189: `26`,
    1890: `1161`,
    1891: `1162`,
    1892: `1163`,
    1893: `1163`,
    1894: `1164`,
    1895: `1165`,
    1896: `1165`,
    1897: `1166`,
    1898: `1167`,
    1899: `1167`,
    19: `2`,
    190: `26`,
    1900: `1168`,
    1901: `1169`,
    1902: `1169`,
    1903: `1169`,
    1904: `1170`,
    1905: `1170`,
    1906: `1171`,
    1907: `1172`,
    1908: `1172`,
    1909: `1172`,
    191: `26`,
    1910: `1173`,
    1911: `1173`,
    1912: `1174`,
    1913: `1174`,
    1914: `1174`,
    1915: `1175`,
    1916: `1175`,
    1917: `1176`,
    1918: `1176`,
    1919: `1177`,
    192: `26`,
    1920: `1178`,
    1921: `1178`,
    1922: `1179`,
    1923: `1179`,
    1924: `1179`,
    1925: `1179`,
    1926: `1179`,
    1927: `1179`,
    1928: `1180`,
    1929: `1180`,
    193: `26`,
    1930: `1181`,
    1931: `1182`,
    1932: `1183`,
    1933: `1185`,
    1934: `1185`,
    1935: `1186`,
    1936: `1186`,
    1937: `1186`,
    1938: `1187`,
    1939: `1187`,
    194: `26`,
    1940: `1188`,
    1941: `1188`,
    1942: `1188`,
    1943: `1191`,
    1944: `1191`,
    1945: `1192`,
    1946: `1192`,
    1947: `1192`,
    1948: `1193`,
    1949: `1193`,
    195: `26`,
    1950: `1194`,
    1951: `1194`,
    1952: `1195`,
    1953: `1195`,
    1954: `1196`,
    1955: `1197`,
    1956: `1198`,
    1957: `1199`,
    1958: `1199`,
    1959: `1200`,
    196: `26`,
    1960: `1201`,
    1961: `1202`,
    1962: `1202`,
    1963: `1203`,
    1964: `1203`,
    1965: `1204`,
    1966: `1204`,
    1967: `1205`,
    1968: `1205`,
    1969: `1206`,
    197: `28`,
    1970: `1206`,
    1971: `1209`,
    1972: `1209`,
    1973: `1210`,
    1974: `1210`,
    1975: `1211`,
    1976: `1212`,
    1977: `1213`,
    1978: `1214`,
    1979: `1214`,
    198: `31`,
    1980: `1215`,
    1981: `1216`,
    1982: `1216`,
    1983: `1217`,
    1984: `1217`,
    1985: `1218`,
    1986: `1218`,
    1987: `1219`,
    1988: `1220`,
    1989: `1221`,
    199: `31`,
    1990: `1221`,
    1991: `1222`,
    1992: `1223`,
    1993: `1224`,
    1994: `1225`,
    1995: `1225`,
    1996: `1226`,
    1997: `1226`,
    1998: `1227`,
    1999: `1228`,
    2: `2`,
    20: `2`,
    200: `32`,
    2000: `1229`,
    2001: `1229`,
    2002: `1230`,
    2003: `1231`,
    2004: `1234`,
    2005: `1234`,
    2006: `1235`,
    2007: `1235`,
    2008: `1236`,
    2009: `1237`,
    201: `33`,
    2010: `1240`,
    2011: `1240`,
    2012: `1241`,
    2013: `1241`,
    2014: `1242`,
    2015: `1243`,
    2016: `1243`,
    2017: `1244`,
    2018: `1244`,
    2019: `1245`,
    202: `34`,
    2020: `1246`,
    2021: `1247`,
    2022: `1248`,
    2023: `1249`,
    2024: `1250`,
    2025: `1251`,
    2026: `1252`,
    2027: `1253`,
    2028: `1254`,
    2029: `1254`,
    203: `37`,
    2030: `1254`,
    2031: `1254`,
    2032: `1254`,
    2033: `1254`,
    2034: `1254`,
    2035: `1254`,
    2036: `1254`,
    2037: `1254`,
    2038: `1255`,
    2039: `1256`,
    204: `37`,
    2040: `1256`,
    2041: `1257`,
    2042: `1257`,
    2043: `1257`,
    2044: `1258`,
    2045: `1258`,
    2046: `1258`,
    2047: `1259`,
    2048: `1260`,
    2049: `1260`,
    205: `37`,
    2050: `1261`,
    2051: `1262`,
    2052: `1263`,
    2053: `1263`,
    2054: `1264`,
    2055: `1265`,
    2056: `1266`,
    2057: `1266`,
    2058: `1267`,
    2059: `1267`,
    206: `38`,
    2060: `1268`,
    2061: `1268`,
    2062: `1269`,
    2063: `1269`,
    2064: `1270`,
    2065: `1270`,
    2066: `1271`,
    2067: `1271`,
    2068: `1272`,
    2069: `1272`,
    207: `38`,
    2070: `1273`,
    2071: `1273`,
    2072: `1274`,
    2073: `1274`,
    2074: `1275`,
    2075: `1275`,
    2076: `1275`,
    2077: `1277`,
    2078: `1277`,
    2079: `1277`,
    208: `39`,
    2080: `1278`,
    2081: `1278`,
    2082: `1279`,
    2083: `1279`,
    2084: `1279`,
    2085: `1280`,
    2086: `1280`,
    2087: `1280`,
    2088: `1281`,
    2089: `1281`,
    209: `40`,
    2090: `1282`,
    2091: `1282`,
    2092: `1282`,
    2093: `1284`,
    2094: `1284`,
    2095: `1284`,
    2096: `1285`,
    2097: `1285`,
    2098: `1285`,
    2099: `1286`,
    21: `2`,
    210: `40`,
    2100: `1286`,
    2101: `1287`,
    2102: `1287`,
    2103: `1287`,
    2104: `1289`,
    2105: `1289`,
    2106: `1289`,
    2107: `1290`,
    2108: `1290`,
    2109: `1290`,
    211: `42`,
    2110: `1291`,
    2111: `1291`,
    2112: `1292`,
    2113: `1292`,
    2114: `1292`,
    2115: `1294`,
    2116: `1295`,
    2117: `1295`,
    2118: `1296`,
    2119: `1297`,
    212: `42`,
    2120: `1298`,
    2121: `1299`,
    2122: `1299`,
    2123: `1300`,
    2124: `1301`,
    2125: `1302`,
    2126: `1303`,
    2127: `1303`,
    2128: `1304`,
    2129: `1305`,
    213: `43`,
    2130: `1306`,
    2131: `1307`,
    2132: `1307`,
    2133: `1308`,
    2134: `1309`,
    2135: `1310`,
    2136: `1310`,
    2137: `1310`,
    2138: `1311`,
    2139: `1311`,
    214: `44`,
    2140: `1311`,
    2141: `1312`,
    2142: `1313`,
    2143: `1314`,
    2144: `1315`,
    2145: `1315`,
    2146: `1315`,
    2147: `1317`,
    2148: `1317`,
    2149: `1317`,
    215: `45`,
    2150: `1319`,
    2151: `1319`,
    2152: `1319`,
    2153: `1321`,
    2154: `1321`,
    2155: `1321`,
    2156: `1323`,
    2157: `1323`,
    2158: `1323`,
    2159: `1325`,
    216: `48`,
    2160: `1325`,
    2161: `1325`,
    2162: `1327`,
    2163: `1327`,
    2164: `1328`,
    2165: `1328`,
    2166: `1329`,
    2167: `1330`,
    2168: `1330`,
    2169: `1330`,
    217: `48`,
    2170: `1331`,
    2171: `1331`,
    2172: `1332`,
    2173: `1332`,
    2174: `1333`,
    2175: `1334`,
    2176: `1334`,
    2177: `1335`,
    2178: `1336`,
    2179: `1336`,
    218: `48`,
    2180: `1338`,
    2181: `1338`,
    2182: `1339`,
    2183: `1339`,
    2184: `1340`,
    2185: `1340`,
    2186: `1340`,
    2187: `1342`,
    2188: `1343`,
    2189: `1343`,
    219: `48`,
    2190: `1344`,
    2191: `1344`,
    2192: `1344`,
    2193: `1346`,
    2194: `1347`,
    2195: `1347`,
    2196: `1348`,
    2197: `1348`,
    2198: `1348`,
    2199: `1348`,
    22: `2`,
    220: `48`,
    2200: `1348`,
    2201: `1348`,
    2202: `1348`,
    2203: `1348`,
    2204: `1348`,
    2205: `1348`,
    2206: `1349`,
    2207: `1349`,
    2208: `1350`,
    2209: `1351`,
    221: `48`,
    2210: `1351`,
    2211: `1351`,
    2212: `1352`,
    2213: `1353`,
    2214: `1354`,
    2215: `1354`,
    2216: `1355`,
    2217: `1356`,
    2218: `1356`,
    2219: `1356`,
    222: `49`,
    2220: `1357`,
    2221: `1357`,
    2222: `1358`,
    2223: `1358`,
    2224: `1359`,
    2225: `1359`,
    2226: `1360`,
    2227: `1361`,
    2228: `1362`,
    2229: `1362`,
    223: `49`,
    2230: `1363`,
    2231: `1364`,
    2232: `1365`,
    2233: `1366`,
    2234: `1367`,
    2235: `1367`,
    2236: `1368`,
    2237: `1368`,
    2238: `1369`,
    2239: `1370`,
    224: `50`,
    2240: `1371`,
    2241: `1372`,
    2242: `1372`,
    2243: `1373`,
    2244: `1373`,
    2245: `1373`,
    2246: `1374`,
    2247: `1375`,
    2248: `1375`,
    2249: `1376`,
    225: `51`,
    2250: `1376`,
    2251: `1376`,
    2252: `1377`,
    2253: `1378`,
    2254: `1378`,
    2255: `1379`,
    2256: `1380`,
    2257: `1381`,
    2258: `1381`,
    2259: `1382`,
    226: `53`,
    2260: `1382`,
    2261: `1383`,
    2262: `1384`,
    2263: `1385`,
    2264: `1386`,
    2265: `1386`,
    2266: `1387`,
    2267: `1387`,
    2268: `1387`,
    2269: `1388`,
    227: `54`,
    2270: `1389`,
    2271: `1389`,
    2272: `1390`,
    2273: `1390`,
    2274: `1391`,
    2275: `1391`,
    2276: `1392`,
    2277: `1392`,
    2278: `1393`,
    2279: `1393`,
    228: `57`,
    2280: `1394`,
    2281: `1394`,
    2282: `1395`,
    2283: `1395`,
    2284: `1396`,
    2285: `1396`,
    2286: `1396`,
    2287: `1398`,
    2288: `1398`,
    2289: `1400`,
    229: `57`,
    2290: `1400`,
    2291: `1401`,
    2292: `1401`,
    2293: `1401`,
    2294: `1402`,
    2295: `1402`,
    2296: `1403`,
    2297: `1403`,
    2298: `1403`,
    2299: `1404`,
    23: `2`,
    230: `58`,
    2300: `1405`,
    2301: `1407`,
    2302: `1407`,
    2303: `1408`,
    2304: `1408`,
    2305: `1409`,
    2306: `1409`,
    2307: `1409`,
    2308: `1411`,
    2309: `1412`,
    231: `59`,
    2310: `1412`,
    2311: `1413`,
    2312: `1413`,
    2313: `1414`,
    2314: `1414`,
    2315: `1415`,
    2316: `1415`,
    2317: `1415`,
    2318: `1417`,
    2319: `1417`,
    232: `60`,
    2320: `1418`,
    2321: `1418`,
    2322: `1419`,
    2323: `1420`,
    2324: `1422`,
    2325: `1422`,
    2326: `1422`,
    2327: `1424`,
    2328: `1424`,
    2329: `1425`,
    233: `63`,
    2330: `1426`,
    2331: `1426`,
    2332: `1427`,
    2333: `1428`,
    2334: `1430`,
    2335: `1431`,
    2336: `1431`,
    2337: `1432`,
    2338: `1432`,
    2339: `1433`,
    234: `63`,
    2340: `1433`,
    2341: `1433`,
    2342: `1434`,
    2343: `1434`,
    2344: `1434`,
    2345: `1436`,
    2346: `1437`,
    2347: `1438`,
    2348: `1439`,
    2349: `1440`,
    235: `63`,
    2350: `1442`,
    2351: `1443`,
    2352: `1443`,
    2353: `1444`,
    2354: `1445`,
    2355: `1445`,
    2356: `1446`,
    2357: `1446`,
    2358: `1447`,
    2359: `1447`,
    236: `64`,
    2360: `1448`,
    2361: `1449`,
    2362: `1451`,
    2363: `1452`,
    2364: `1452`,
    2365: `1453`,
    2366: `1454`,
    2367: `1454`,
    2368: `1455`,
    2369: `1455`,
    237: `64`,
    2370: `1456`,
    2371: `1456`,
    2372: `1457`,
    2373: `1457`,
    2374: `1458`,
    2375: `1459`,
    2376: `1461`,
    2377: `1462`,
    2378: `1464`,
    2379: `1465`,
    238: `65`,
    2380: `1466`,
    2381: `1467`,
    2382: `1467`,
    2383: `1468`,
    2384: `1468`,
    2385: `1469`,
    2386: `1469`,
    2387: `1469`,
    2388: `1470`,
    2389: `1472`,
    239: `66`,
    2390: `1473`,
    2391: `1474`,
    2392: `1474`,
    2393: `1474`,
    2394: `1475`,
    2395: `1476`,
    2396: `1476`,
    2397: `1477`,
    2398: `1477`,
    2399: `1477`,
    24: `2`,
    240: `66`,
    2400: `1478`,
    2401: `1480`,
    2402: `1481`,
    2403: `1481`,
    2404: `1481`,
    2405: `1482`,
    2406: `1482`,
    2407: `1483`,
    2408: `1484`,
    2409: `1484`,
    241: `67`,
    2410: `1484`,
    2411: `1485`,
    2412: `1485`,
    2413: `1486`,
    2414: `1487`,
    2415: `1487`,
    2416: `1487`,
    2417: `1488`,
    2418: `1489`,
    2419: `1489`,
    242: `67`,
    2420: `1490`,
    2421: `1491`,
    2422: `1491`,
    2423: `1492`,
    2424: `1493`,
    2425: `1493`,
    2426: `1494`,
    2427: `1495`,
    2428: `1495`,
    2429: `1496`,
    243: `67`,
    2430: `1497`,
    2431: `1497`,
    2432: `1498`,
    2433: `1499`,
    2434: `1499`,
    2435: `1500`,
    2436: `1501`,
    2437: `1501`,
    2438: `1502`,
    2439: `1503`,
    244: `70`,
    2440: `1503`,
    2441: `1504`,
    2442: `1505`,
    2443: `1505`,
    2444: `1506`,
    2445: `1507`,
    2446: `1507`,
    2447: `1508`,
    2448: `1509`,
    2449: `1509`,
    245: `70`,
    2450: `1510`,
    2451: `1511`,
    2452: `1511`,
    2453: `1512`,
    2454: `1513`,
    2455: `1513`,
    2456: `1514`,
    2457: `1515`,
    2458: `1515`,
    2459: `1516`,
    246: `71`,
    2460: `1517`,
    2461: `1517`,
    2462: `1518`,
    2463: `1519`,
    2464: `1519`,
    2465: `1520`,
    2466: `1521`,
    2467: `1521`,
    2468: `1522`,
    2469: `1523`,
    247: `72`,
    2470: `1523`,
    2471: `1523`,
    2472: `1524`,
    2473: `1524`,
    2474: `1525`,
    2475: `1526`,
    2476: `1526`,
    2477: `1526`,
    2478: `1527`,
    2479: `1527`,
    248: `73`,
    2480: `1528`,
    2481: `1529`,
    2482: `1529`,
    2483: `1529`,
    2484: `1530`,
    2485: `1531`,
    2486: `1531`,
    2487: `1532`,
    2488: `1533`,
    2489: `1533`,
    249: `76`,
    2490: `1533`,
    2491: `1534`,
    2492: `1534`,
    2493: `1535`,
    2494: `1536`,
    2495: `1536`,
    2496: `1536`,
    2497: `1537`,
    2498: `1538`,
    2499: `1538`,
    25: `2`,
    250: `76`,
    2500: `1539`,
    2501: `1540`,
    2502: `1540`,
    2503: `1540`,
    2504: `1541`,
    2505: `1541`,
    2506: `1542`,
    2507: `1543`,
    2508: `1543`,
    2509: `1544`,
    251: `76`,
    2510: `1545`,
    2511: `1545`,
    2512: `1545`,
    2513: `1546`,
    2514: `1547`,
    2515: `1547`,
    2516: `1548`,
    2517: `1549`,
    2518: `1549`,
    2519: `1549`,
    252: `77`,
    2520: `1550`,
    2521: `1551`,
    2522: `1552`,
    2523: `1553`,
    2524: `1553`,
    2525: `1554`,
    2526: `1555`,
    2527: `1555`,
    2528: `1555`,
    2529: `1556`,
    253: `77`,
    2530: `1557`,
    2531: `1557`,
    2532: `1558`,
    2533: `1559`,
    2534: `1559`,
    2535: `1559`,
    2536: `1560`,
    2537: `1561`,
    2538: `1561`,
    2539: `1562`,
    254: `78`,
    2540: `1563`,
    2541: `1563`,
    2542: `1563`,
    2543: `1564`,
    2544: `1565`,
    2545: `1565`,
    2546: `1566`,
    2547: `1566`,
    2548: `1566`,
    2549: `1567`,
    255: `79`,
    2550: `1568`,
    2551: `1568`,
    2552: `1569`,
    2553: `1571`,
    2554: `1572`,
    2555: `1572`,
    2556: `1572`,
    2557: `1574`,
    2558: `1575`,
    2559: `1575`,
    256: `79`,
    2560: `1575`,
    2561: `1576`,
    2562: `1577`,
    2563: `1578`,
    2564: `1579`,
    2565: `1580`,
    2566: `1582`,
    2567: `1583`,
    2568: `1584`,
    2569: `1585`,
    257: `80`,
    2570: `1585`,
    2571: `1585`,
    2572: `1586`,
    2573: `1586`,
    2574: `1587`,
    2575: `1588`,
    2576: `1589`,
    2577: `1591`,
    2578: `1592`,
    2579: `1592`,
    258: `80`,
    2580: `1592`,
    2581: `1594`,
    2582: `1595`,
    2583: `1595`,
    2584: `1596`,
    2585: `1599`,
    2586: `1599`,
    2587: `1600`,
    2588: `1600`,
    2589: `1601`,
    259: `80`,
    2590: `1602`,
    2591: `1603`,
    2592: `1604`,
    2593: `1604`,
    2594: `1605`,
    2595: `1606`,
    2596: `1606`,
    2597: `1607`,
    2598: `1607`,
    2599: `1608`,
    26: `2`,
    260: `83`,
    2600: `1608`,
    2601: `1609`,
    2602: `1610`,
    2603: `1611`,
    2604: `1611`,
    2605: `1612`,
    2606: `1613`,
    2607: `1614`,
    2608: `1615`,
    2609: `1615`,
    261: `83`,
    2610: `1616`,
    2611: `1617`,
    2612: `1618`,
    2613: `1620`,
    2614: `1621`,
    2615: `1622`,
    2616: `1623`,
    2617: `1624`,
    2618: `1624`,
    2619: `1625`,
    262: `84`,
    2620: `1626`,
    2621: `1627`,
    2622: `1628`,
    2623: `1630`,
    2624: `1630`,
    2625: `1631`,
    2626: `1632`,
    2627: `1632`,
    2628: `1633`,
    2629: `1635`,
    263: `85`,
    2630: `1635`,
    2631: `1636`,
    2632: `1636`,
    2633: `1637`,
    2634: `1638`,
    2635: `1639`,
    2636: `1639`,
    2637: `1639`,
    2638: `1640`,
    2639: `1640`,
    264: `86`,
    2640: `1640`,
    2641: `1642`,
    2642: `1643`,
    2643: `1644`,
    2644: `1645`,
    2645: `1645`,
    2646: `1645`,
    2647: `1646`,
    2648: `1646`,
    2649: `1647`,
    265: `89`,
    2650: `1647`,
    2651: `1647`,
    2652: `1648`,
    2653: `1648`,
    2654: `1648`,
    2655: `1650`,
    2656: `1651`,
    2657: `1651`,
    2658: `1652`,
    266: `89`,
    267: `89`,
    268: `90`,
    269: `90`,
    27: `2`,
    270: `91`,
    271: `92`,
    272: `92`,
    273: `92`,
    274: `93`,
    275: `93`,
    276: `94`,
    277: `94`,
    278: `94`,
    279: `96`,
    28: `2`,
    280: `96`,
    281: `96`,
    282: `97`,
    283: `97`,
    284: `99`,
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
    328: `133`,
    329: `133`,
    33: `4`,
    330: `134`,
    331: `134`,
    332: `135`,
    333: `136`,
    334: `136`,
    335: `136`,
    336: `137`,
    337: `138`,
    338: `139`,
    339: `140`,
    34: `4`,
    340: `141`,
    341: `142`,
    342: `142`,
    343: `142`,
    344: `143`,
    345: `143`,
    346: `144`,
    347: `144`,
    348: `144`,
    349: `147`,
    35: `5`,
    350: `147`,
    351: `148`,
    352: `149`,
    353: `150`,
    354: `153`,
    355: `153`,
    356: `153`,
    357: `154`,
    358: `154`,
    359: `155`,
    36: `5`,
    360: `156`,
    361: `156`,
    362: `157`,
    363: `158`,
    364: `159`,
    365: `159`,
    366: `160`,
    367: `161`,
    368: `161`,
    369: `162`,
    37: `5`,
    370: `163`,
    371: `164`,
    372: `164`,
    373: `165`,
    374: `166`,
    375: `166`,
    376: `166`,
    377: `167`,
    378: `168`,
    379: `168`,
    38: `6`,
    380: `169`,
    381: `170`,
    382: `171`,
    383: `171`,
    384: `172`,
    385: `173`,
    386: `174`,
    387: `174`,
    388: `175`,
    389: `176`,
    39: `7`,
    390: `176`,
    391: `177`,
    392: `178`,
    393: `179`,
    394: `179`,
    395: `180`,
    396: `180`,
    397: `180`,
    398: `183`,
    399: `183`,
    4: `2`,
    40: `8`,
    400: `184`,
    401: `185`,
    402: `186`,
    403: `189`,
    404: `189`,
    405: `189`,
    406: `190`,
    407: `190`,
    408: `191`,
    409: `191`,
    41: `9`,
    410: `191`,
    411: `192`,
    412: `192`,
    413: `193`,
    414: `193`,
    415: `193`,
    416: `196`,
    417: `196`,
    418: `197`,
    419: `198`,
    42: `10`,
    420: `199`,
    421: `202`,
    422: `202`,
    423: `202`,
    424: `203`,
    425: `203`,
    426: `204`,
    427: `204`,
    428: `204`,
    429: `205`,
    43: `11`,
    430: `205`,
    431: `206`,
    432: `206`,
    433: `206`,
    434: `209`,
    435: `209`,
    436: `210`,
    437: `211`,
    438: `212`,
    439: `215`,
    44: `11`,
    440: `215`,
    441: `215`,
    442: `216`,
    443: `216`,
    444: `217`,
    445: `218`,
    446: `218`,
    447: `219`,
    448: `219`,
    449: `219`,
    45: `12`,
    450: `222`,
    451: `222`,
    452: `223`,
    453: `224`,
    454: `225`,
    455: `228`,
    456: `228`,
    457: `228`,
    458: `229`,
    459: `229`,
    46: `13`,
    460: `230`,
    461: `230`,
    462: `230`,
    463: `231`,
    464: `231`,
    465: `232`,
    466: `232`,
    467: `232`,
    468: `234`,
    469: `234`,
    47: `14`,
    470: `234`,
    471: `235`,
    472: `236`,
    473: `236`,
    474: `238`,
    475: `239`,
    476: `240`,
    477: `241`,
    478: `241`,
    479: `242`,
    48: `14`,
    480: `243`,
    481: `244`,
    482: `245`,
    483: `245`,
    484: `247`,
    485: `248`,
    486: `248`,
    487: `249`,
    488: `250`,
    489: `251`,
    49: `15`,
    490: `251`,
    491: `251`,
    492: `252`,
    493: `252`,
    494: `253`,
    495: `254`,
    496: `255`,
    497: `255`,
    498: `256`,
    499: `256`,
    5: `2`,
    50: `16`,
    500: `257`,
    501: `257`,
    502: `257`,
    503: `258`,
    504: `258`,
    505: `259`,
    506: `259`,
    507: `259`,
    508: `259`,
    509: `259`,
    51: `17`,
    510: `259`,
    511: `260`,
    512: `260`,
    513: `261`,
    514: `262`,
    515: `263`,
    516: `263`,
    517: `264`,
    518: `265`,
    519: `267`,
    52: `18`,
    520: `267`,
    521: `268`,
    522: `268`,
    523: `268`,
    524: `269`,
    525: `269`,
    526: `270`,
    527: `271`,
    528: `272`,
    529: `272`,
    53: `19`,
    530: `272`,
    531: `272`,
    532: `272`,
    533: `272`,
    534: `272`,
    535: `272`,
    536: `272`,
    537: `272`,
    538: `272`,
    539: `272`,
    54: `20`,
    540: `273`,
    541: `273`,
    542: `273`,
    543: `276`,
    544: `276`,
    545: `276`,
    546: `276`,
    547: `276`,
    548: `276`,
    549: `276`,
    55: `21`,
    550: `276`,
    551: `276`,
    552: `276`,
    553: `276`,
    554: `276`,
    555: `276`,
    556: `276`,
    557: `276`,
    558: `276`,
    559: `276`,
    56: `22`,
    560: `276`,
    561: `276`,
    562: `277`,
    563: `277`,
    564: `278`,
    565: `278`,
    566: `278`,
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
    583: `281`,
    584: `281`,
    585: `281`,
    586: `282`,
    587: `282`,
    588: `283`,
    589: `283`,
    59: `24`,
    590: `283`,
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
    607: `286`,
    608: `286`,
    609: `286`,
    61: `24`,
    610: `287`,
    611: `287`,
    612: `288`,
    613: `288`,
    614: `288`,
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
    631: `291`,
    632: `291`,
    633: `291`,
    634: `292`,
    635: `292`,
    636: `293`,
    637: `293`,
    638: `293`,
    639: `295`,
    64: `24`,
    640: `295`,
    641: `296`,
    642: `297`,
    643: `298`,
    644: `298`,
    645: `299`,
    646: `300`,
    647: `302`,
    648: `303`,
    649: `304`,
    65: `24`,
    650: `305`,
    651: `306`,
    652: `306`,
    653: `307`,
    654: `308`,
    655: `308`,
    656: `308`,
    657: `309`,
    658: `309`,
    659: `309`,
    66: `24`,
    660: `310`,
    661: `311`,
    662: `311`,
    663: `312`,
    664: `312`,
    665: `313`,
    666: `313`,
    667: `314`,
    668: `315`,
    669: `323`,
    67: `24`,
    670: `323`,
    671: `324`,
    672: `325`,
    673: `326`,
    674: `334`,
    675: `334`,
    676: `335`,
    677: `335`,
    678: `336`,
    679: `337`,
    68: `24`,
    680: `337`,
    681: `338`,
    682: `338`,
    683: `339`,
    684: `339`,
    685: `340`,
    686: `341`,
    687: `349`,
    688: `349`,
    689: `350`,
    69: `24`,
    690: `350`,
    691: `351`,
    692: `352`,
    693: `352`,
    694: `353`,
    695: `354`,
    696: `362`,
    697: `362`,
    698: `363`,
    699: `363`,
    7: `2`,
    70: `24`,
    700: `364`,
    701: `365`,
    702: `365`,
    703: `366`,
    704: `366`,
    705: `367`,
    706: `367`,
    707: `368`,
    708: `369`,
    709: `369`,
    71: `24`,
    710: `370`,
    711: `370`,
    712: `371`,
    713: `371`,
    714: `371`,
    715: `374`,
    716: `374`,
    717: `375`,
    718: `376`,
    719: `376`,
    72: `24`,
    720: `377`,
    721: `378`,
    722: `378`,
    723: `379`,
    724: `380`,
    725: `380`,
    726: `380`,
    727: `381`,
    728: `381`,
    729: `382`,
    73: `24`,
    730: `382`,
    731: `383`,
    732: `384`,
    733: `385`,
    734: `385`,
    735: `386`,
    736: `386`,
    737: `386`,
    738: `386`,
    739: `386`,
    74: `24`,
    740: `386`,
    741: `387`,
    742: `387`,
    743: `388`,
    744: `389`,
    745: `391`,
    746: `391`,
    747: `392`,
    748: `393`,
    749: `394`,
    75: `24`,
    750: `394`,
    751: `396`,
    752: `396`,
    753: `397`,
    754: `398`,
    755: `398`,
    756: `399`,
    757: `400`,
    758: `401`,
    759: `401`,
    76: `24`,
    760: `402`,
    761: `402`,
    762: `402`,
    763: `403`,
    764: `403`,
    765: `404`,
    766: `405`,
    767: `406`,
    768: `407`,
    769: `407`,
    77: `24`,
    770: `408`,
    771: `408`,
    772: `409`,
    773: `410`,
    774: `410`,
    775: `410`,
    776: `411`,
    777: `412`,
    778: `412`,
    779: `414`,
    78: `24`,
    780: `414`,
    781: `415`,
    782: `415`,
    783: `415`,
    784: `416`,
    785: `417`,
    786: `417`,
    787: `418`,
    788: `418`,
    789: `418`,
    79: `24`,
    790: `418`,
    791: `418`,
    792: `418`,
    793: `418`,
    794: `418`,
    795: `418`,
    796: `418`,
    797: `419`,
    798: `419`,
    799: `420`,
    8: `2`,
    80: `24`,
    800: `421`,
    801: `421`,
    802: `421`,
    803: `422`,
    804: `423`,
    805: `424`,
    806: `424`,
    807: `425`,
    808: `426`,
    809: `426`,
    81: `24`,
    810: `426`,
    811: `427`,
    812: `427`,
    813: `428`,
    814: `428`,
    815: `429`,
    816: `429`,
    817: `430`,
    818: `431`,
    819: `432`,
    82: `24`,
    820: `432`,
    821: `433`,
    822: `434`,
    823: `435`,
    824: `436`,
    825: `437`,
    826: `437`,
    827: `438`,
    828: `438`,
    829: `439`,
    83: `24`,
    830: `440`,
    831: `441`,
    832: `442`,
    833: `442`,
    834: `443`,
    835: `443`,
    836: `443`,
    837: `444`,
    838: `445`,
    839: `445`,
    84: `24`,
    840: `446`,
    841: `446`,
    842: `446`,
    843: `447`,
    844: `448`,
    845: `448`,
    846: `449`,
    847: `450`,
    848: `451`,
    849: `451`,
    85: `24`,
    850: `452`,
    851: `452`,
    852: `453`,
    853: `454`,
    854: `455`,
    855: `456`,
    856: `457`,
    857: `457`,
    858: `458`,
    859: `459`,
    86: `24`,
    860: `460`,
    861: `460`,
    862: `461`,
    863: `461`,
    864: `462`,
    865: `462`,
    866: `463`,
    867: `463`,
    868: `464`,
    869: `464`,
    87: `24`,
    870: `465`,
    871: `465`,
    872: `466`,
    873: `466`,
    874: `468`,
    875: `468`,
    876: `469`,
    877: `469`,
    878: `469`,
    879: `470`,
    88: `24`,
    880: `471`,
    881: `471`,
    882: `471`,
    883: `472`,
    884: `472`,
    885: `473`,
    886: `473`,
    887: `474`,
    888: `475`,
    889: `475`,
    89: `24`,
    890: `476`,
    891: `476`,
    892: `477`,
    893: `477`,
    894: `478`,
    895: `479`,
    896: `479`,
    897: `480`,
    898: `480`,
    899: `481`,
    9: `2`,
    90: `24`,
    900: `482`,
    901: `483`,
    902: `483`,
    903: `484`,
    904: `484`,
    905: `485`,
    906: `485`,
    907: `486`,
    908: `487`,
    909: `487`,
    91: `24`,
    910: `488`,
    911: `488`,
    912: `489`,
    913: `489`,
    914: `490`,
    915: `491`,
    916: `491`,
    917: `493`,
    918: `493`,
    919: `494`,
    92: `24`,
    920: `494`,
    921: `495`,
    922: `496`,
    923: `496`,
    924: `497`,
    925: `498`,
    926: `498`,
    927: `498`,
    928: `499`,
    929: `500`,
    93: `24`,
    930: `500`,
    931: `501`,
    932: `502`,
    933: `503`,
    934: `503`,
    935: `504`,
    936: `505`,
    937: `506`,
    938: `506`,
    939: `507`,
    94: `24`,
    940: `508`,
    941: `509`,
    942: `509`,
    943: `510`,
    944: `511`,
    945: `512`,
    946: `512`,
    947: `513`,
    948: `514`,
    949: `515`,
    95: `24`,
    950: `515`,
    951: `516`,
    952: `517`,
    953: `518`,
    954: `518`,
    955: `519`,
    956: `520`,
    957: `521`,
    958: `521`,
    959: `522`,
    96: `24`,
    960: `523`,
    961: `524`,
    962: `524`,
    963: `525`,
    964: `526`,
    965: `526`,
    966: `527`,
    967: `528`,
    968: `528`,
    969: `529`,
    97: `24`,
    970: `530`,
    971: `531`,
    972: `531`,
    973: `532`,
    974: `533`,
    975: `533`,
    976: `534`,
    977: `535`,
    978: `536`,
    979: `536`,
    98: `24`,
    980: `537`,
    981: `538`,
    982: `538`,
    983: `539`,
    984: `540`,
    985: `541`,
    986: `541`,
    987: `542`,
    988: `543`,
    989: `543`,
    99: `24`,
    990: `543`,
    991: `544`,
    992: `545`,
    993: `545`,
    994: `546`,
    995: `547`,
    996: `548`,
    997: `548`,
    998: `549`,
    999: `550`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 347,
  unsupported: [],
  version: 13,
  warnings: [`API User_claim may use up to 5 accounts, but the limit is 4. API User_claim starts at /app/raffle_algo_v2.rsh:125:37:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/raffle_algo_v2.rsh:125:37:dot.`, `Step 3 may use up to 9 transaction references, but the limit is 8. Step 3 starts at /app/raffle_algo_v2.rsh:125:37:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"uint256","name":"elem9","type":"uint256"},{"internalType":"address payable","name":"elem10","type":"address"},{"internalType":"uint256","name":"elem11","type":"uint256"},{"internalType":"address payable","name":"elem12","type":"address"},{"internalType":"address payable","name":"elem13","type":"address"}],"internalType":"struct T12","name":"v6143","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"},{"internalType":"uint256","name":"elem9","type":"uint256"},{"internalType":"address payable","name":"elem10","type":"address"},{"internalType":"uint256","name":"elem11","type":"uint256"},{"internalType":"address payable","name":"elem12","type":"address"},{"internalType":"address payable","name":"elem13","type":"address"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_303","type":"tuple"},{"internalType":"bool","name":"_User_claim0_303","type":"bool"},{"internalType":"bool","name":"_User_determinWinnerAfterDeadline0_303","type":"bool"},{"internalType":"bool","name":"_User_end0_303","type":"bool"},{"internalType":"bool","name":"_User_optin0_303","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2381","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2407","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2772","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v3108","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3438","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3770","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"bought","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_hasDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6104","type":"address"}],"name":"Info_myTicketsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v6108","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_props","outputs":[{"components":[{"internalType":"uint256","name":"_amountOfRaffleToken","type":"uint256"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isFeatured","type":"bool"},{"internalType":"uint256","name":"_maxEntries","type":"uint256"},{"internalType":"uint256","name":"_numberOfTickets","type":"uint256"},{"internalType":"bytes30","name":"_projectName","type":"bytes30"},{"internalType":"address payable","name":"_raffleToken","type":"address"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_ticketsLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_winner","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v6124","type":"uint256"}],"name":"User_buyTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_determinWinnerAfterDeadline","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v6146","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"_User_buyTicket0_303","type":"tuple"},{"internalType":"bool","name":"_User_claim0_303","type":"bool"},{"internalType":"bool","name":"_User_determinWinnerAfterDeadline0_303","type":"bool"},{"internalType":"bool","name":"_User_end0_303","type":"bool"},{"internalType":"bool","name":"_User_optin0_303","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v6149","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62004740388190036080601f8201601f19168101906001600160401b038211908210176200079d576101c092829160405260803912620008d3576040516101c081016001600160401b038111828210176200079d57604052608051815260a05161ffff1981168103620008d357602082015260c0518015158103620008d357604082015260e08051606083015261010080516080840152610120805160a08501526101405160c0850152610160519284019290925261018051908301526101a05190820152620000d16101c0620008f4565b6101408201526101e051610160820152620000ee610200620008f4565b61018082015262000101610220620008f4565b6101a08201524360035560405161022081016001600160401b038111828210176200079d576040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c08201526040518061012081011060018060401b03610120830111176200079d576000918161012061020093016040528381528360208201528360408201528360608201528360808201528360a08201528360c08201528360e08201528361010082015260e0820152826101008201528261012082015282610140820152620001db62000909565b61016082015282610180820152826101a0820152826101c0820152826101e082015201526040519081604081011060018060401b036040840111176200079d57604082016040526200022c62000909565b8252620002386200092a565b602083015260ff60045416620008ba577faf6b834a36dfc64cfbc5e622a96afc16fd1792ba4ce72c8fdf9b1efe6a9e22c66101e06040513381528351602082015261ffff19602085015116604082015260408401511515606082015260608401516080820152608084015160a082015260a084015160c082015260c084015160e082015260e084015161010082015261010084015161012082015261012084015161014082015260018060a01b036101408501511661016082015261016084015161018082015260018060a01b03610180850151166101a082015260018060a01b036101a0850151166101c0820152a180518015908115620008ad575b50156200089457600082515260006020835101526000604083510152815160208301515260a08101516060820151106200087b5760001960e082015110156200086257600160e0820151106200084957346200083057604051916001600160401b036101e08401908111908411176200079d576020916101e0840160405260008452600083850152600060408501526000606085015260006080850152600060a0850152600060c0850152600060e08501526000610100850152600061012085015260006101408501526000610160850152600061018085015260006101a0850152620004216200092a565b6101c085015233845261ffff19838201511683850152604081015115156040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015261012081015161012085015260018060a01b036101408201511661014085015261016081015161016085015260018060a01b03610180820151166101808501526101a060018060a01b03910151166101a08401520151805160406020820151910151151560405191620004f483620008d8565b60008352602083015260408201526200050c6200092a565b9160005b60018110620007e057505081526101c08201526001600055436001556101c06040519160018060a01b03815116602084015261ffff19602082015116604084015260408101511515606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e081015161010084015261010081015161012084015261012081015161014084015260018060a01b036101408201511661016084015261016081015161018084015260018060a01b03610180820151166101a084015260018060a01b036101a0820151168284015201516101e082016000905b60018210620007b35761022084528361024081016001600160401b038111828210176200079d5760405280516001600160401b0381116200079d57600254600181811c9116801562000792575b60208210146200077c57601f811162000712575b50602091601f8211600114620006a8579181926000926200069c575b50508160011b916000199060031b1c1916176002555b604051613da690816200099a8239f35b01519050828062000676565b601f19821692600260005260206000209160005b858110620006f957508360019510620006df575b505050811b016002556200068c565b015160001960f88460031b161c19169055828080620006d0565b91926020600181928685015181550194019201620006bc565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000771575b601f0160051c01905b8181106200076457506200065a565b6000815560010162000755565b90915081906200074c565b634e487b7160e01b600052602260045260246000fd5b90607f169062000646565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620005f9565b620007ec818362000971565b51620007f9828662000971565b5262000806818562000971565b5060001981146200081a5760010162000510565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b9050600154143862000335565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b606081019081106001600160401b038211176200079d57604052565b51906001600160a01b0382168203620008d357565b604051906200091882620008d8565b60006040838281528260208201520152565b6040519060208083016001600160401b038111848210176200079d576040528260005b8281106200095a57505050565b82906200096662000909565b81840152016200094d565b906001811015620009835760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630677e6851461020c5780631e93b0f114610203578063213b7923146101fa5780633702d0ce146101f157806342fbef30146101e857806347dc4e6c146101df578063573b8510146101d65780635cd91bc2146101cd5780635f8564cf146101c45780635fde30d8146101bb578063690141ef146101b25780636cf1d802146101a95780637888d2df146101a05780637a2b54dc14610197578063832307571461018e578063883513de146101855780638ddecb6d1461017c578063a579242414610173578063ab53f2c61461016a578063c5d86f6f14610161578063d184691f14610158578063da70a5251461014f578063e9e71ad514610146578063edca41711461013d5763fa726c840361000e57610138610fd0565b61000e565b50610138610f90565b50610138610f59565b50610138610ea1565b50610138610e51565b50610138610df9565b50610138610d84565b50610138610ced565b50610138610c7b565b50610138610be1565b50610138610bc2565b50610138610b82565b50610138610b05565b50610138610aa2565b50610138610a30565b5061013861092d565b50610138610857565b506101386107cd565b506101386104fd565b506101386104a2565b506101386103f3565b50610138610399565b506101386102ba565b5061013861027e565b5034610279576000366003190112610279576102266114a5565b6004600054036102605760406020916101a061025161024361112b565b8580825183010191016116bc565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b5034610279576000366003190112610279576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361027957565b50346102795760203660031901126102795761036060a06004356102dd816102a9565b6102e56114a5565b906102f460046000541461180a565b61030e6102ff61112b565b602080825183010191016116bc565b50600180841b031661031f8161134e565b5161032981610385565b61033281610385565b600090600103610364575061034860409161134e565b01519182915b01526040519081529081906020820190565b0390f35b905091829161034e565b50634e487b7160e01b600052602160045260246000fd5b6002111561038f57565b61039761036e565b565b50346102795760203660031901126102795760606103ca6004356103bc816102a9565b6103c4611281565b506113c6565b604080519180516103da81610385565b8352602081015115156020840152015115156040820152f35b5060e0366003190112610279576104086114a5565b6040519061041582611074565b600435825260c036602319011261027957604051916104338361109c565b6024359260058410156102795761049693815261044f36613c04565b602082015260643561046081611546565b604082015261046d613d52565b606082015261047a613d5f565b6080820152610487613d6c565b60a0820152602082015261201d565b60405160008152602090f35b5060003660031901126102795760206101a06104bc6114a5565b6104f1816104c8611d2a565b8581019060018251525115156040825101526104e2611d2a565b9060008252518682015261201d565b01511515604051908152f35b50602080600319360112610279576105136114a5565b5061051d36613c24565b90610526613c44565b61053460016000541461182a565b61054d61053f61112b565b838082518301019101613c73565b9061056961056461056060045460ff1690565b1590565b61184a565b604080513381528551602082015290946105b3917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908790a15180159081156107c1575b5061186a565b6101209182810192835134146105c89061188a565b6101c0918281015180518051916101609182850193845101908b8b8201519101511515906105f46111d4565b9283528b83015215158b82015261060a91613565565b865261014080840192835161061e9061029d565b815161062a9133613522565b610633906118aa565b845133906001600160a01b03906106499061029d565b1614610654906118ca565b898801958651600090528a875101600090528951968c8a01978851528b885101600090528c88510160009052875160600161068f9060019052565b87516080016005905289515151885160a0015260608701908151895160c0015251885160e001526106be611f55565b9b8c88516106cb9061029d565b6106d4916112a0565b8781015161ffff191661ffff1916908d0152868d0151151515158c8e01525160608c01526080860194855160808d015260a087015160a08d015260c087015160c08d015260e087015160e08d015261010080880151908d0152516107379061029d565b610742918c016112a0565b519089015261018090818401516107589061029d565b610763918a016112a0565b6101a0809301516107739061029d565b61077e9189016112a0565b5161078990426132b6565b908601525190840152436101e08401524261020084015251610220830152516102408201526107b7906139f6565b5160008152602090f35b905060015414386105ad565b5034610279576000366003190112610279576107e76114a5565b60046000540361081e576080610360916102406108056102ff61112b565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600a6004820152602490fd5b6001600160a01b03169052565b6001600160a01b03909116815260200190565b50600036600319011261027957602061086e6114a5565b6108a38161087a611d2a565b848101906002825152511515606082510152610894611d2a565b9060008252518582015261201d565b6101c001516040516001600160a01b039091168152f35b81518152602080830151908201526040808301516001600160a01b0316908201526060808301519082015260808083015115159082015260a0808301519082015260c0808301519082015260e08083015161ffff1916908201526101009182015161012082019392610397920190610837565b503461027957600036600319011261027957610947611441565b5061036060e06109556114a5565b61095d611c95565b61096b6004600054146118ea565b610a1e6109796102ff61112b565b610140810151835152848101516020845101526109a761099d61016083015161029d565b60408551016112a0565b60808101516060845101526109ce6109c26040830151151590565b60808551019015159052565b610a15610120610100928381015160a087510152606081015160c087510152610a0e610a00602083015161ffff191690565b898851019061ffff19169052565b015161029d565b908351016112a0565b519182910152604051918291826108ba565b503461027957600036600319011261027957610a4a6114a5565b600460005403610a895761012060209160c06101c0610a78610a6a61112b565b8680825183010191016116bc565b015101519182910152604051908152f35b60405163100960cb60e01b8152600f6004820152602490fd5b506020366003190112610279576020610180610abc6114a5565b6104f181604051610acc81611074565b604051610ad8816110b7565b60008152815285810190610aea611cc2565b825260043581515260008251525186825101526104e2611d2a565b503461027957600036600319011261027957610b1f6114a5565b600460005403610b695761014061036091610b3861112b565b610120610b5560018060a01b0392602080825183010191016116bc565b015116918291015260405191829182610844565b60405163100960cb60e01b815260106004820152602490fd5b506000366003190112610279576020610200610b9c6114a5565b6104f181610ba8611d2a565b85810190600482515251151560a0825101526104e2611d2a565b5034610279576000366003190112610279576020600154604051908152f35b503461027957600036600319011261027957610bfb6114a5565b600460005403610c255760208091610220610251610c1761112b565b8480825183010191016116bc565b60405163100960cb60e01b815260076004820152602490fd5b6040908051610c4c81610385565b83526020818101511515908401528101516001600160a01b0316910152565b6060810192916103979190610c3e565b503461027957600036600319011261027957610c95611281565b50610c9e6114a5565b600460005403610cd4576101606103609160e06101c0610cbf6102ff61112b565b01510151918291015260405191829182610c6b565b60405163100960cb60e01b815260116004820152602490fd5b503461027957602036600319011261027957600435610d0b816102a9565b610d136114a5565b90600460005403610d6b57610360916001610d4260c093610d356102ff61112b565b50828060a01b03166113c6565b51610d4c81610385565b610d5581610385565b1491018190526040519081529081906020820190565b60405163100960cb60e01b8152600c6004820152602490fd5b503461027957600080600319360112610df6578054610da161112b565b906040519283918252602090604082840152835191826040850152815b838110610ddf57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610dbe565b80fd5b5034610279576020366003190112610279576060610e2a600435610e1c816102a9565b610e24611281565b5061134e565b60408051918051610e3a81610385565b835260208101511515602084015201516040820152f35b503461027957600036600319011261027957610e6b6114a5565b600460005403610e885760606020916101e061025161024361112b565b60405163100960cb60e01b815260096004820152602490fd5b503461027957602036600319011261027957600435610ebe611281565b50610ec7611281565b816000526007602052600160ff60406000205416610ee481610385565b03610f4457506000526007602052610360604060002060405190610f07826110d2565b5460ff8116610f1581610385565b8252600881901c60ff161515602083015260101c6001600160a01b031660408201525b60405191829182610c6b565b61036091506000815260006020820152610f38565b503461027957602036600319011261027957610f73611281565b506060610f816004356112af565b610f8e6040518092610c3e565bf35b5060003660031901126102795760206101e0610faa6114a5565b6104f181610fb6611d2a565b8581019060038251525115156080825101526104e2611d2a565b503461027957600036600319011261027957610fea6114a5565b60046000540361100a5761010060209160406101c0610a78610a6a61112b565b60405163100960cb60e01b8152600e6004820152602490fd5b90600182811c92168015611053575b602083101461103d57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611032565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761108f57604052565b61109761105d565b604052565b60c081019081106001600160401b0382111761108f57604052565b602081019081106001600160401b0382111761108f57604052565b606081019081106001600160401b0382111761108f57604052565b60a081019081106001600160401b0382111761108f57604052565b601f909101601f19168101906001600160401b0382119082101761108f57604052565b604051906000826002549161113f83611023565b8083526001938085169081156111b35750600114611165575b5061039792500383611108565b60026000908152600080516020613d7a83398151915294602093509091905b81831061119b575050610397935082010138611158565b85548884018501529485019487945091830191611184565b905061039794506020925060ff191682840152151560051b82010138611158565b60405190610397826110d2565b6040519061022082016001600160401b0381118382101761108f57604052565b604051906102e082016001600160401b0381118382101761108f57604052565b604051906102a082016001600160401b0381118382101761108f57604052565b6040519061026082016001600160401b0381118382101761108f57604052565b604051906101e082016001600160401b0381118382101761108f57604052565b6040519061128e826110d2565b60006040838281528260208201520152565b6001600160a01b039091169052565b906112b8611281565b916000908082526005602052600160ff6040842054166112d781610385565b036113295760409293508152600560205220604051906112f6826110d2565b5460ff811661130481610385565b8252600881901c60ff161515602083015260101c6001600160a01b0316604082015290565b508083526020830152565b6001600160a01b0316600090815260066020526040902090565b90611357611281565b9160018060a01b03166000908082526006602052600160ff60408420541661137e81610385565b03611329576040929350815260066020522060016040519161139f836110d2565b60ff81548181166113af81610385565b855260081c16151560208401520154604082015290565b906113cf611281565b9160018060a01b03166000908082526008602052600160ff6040842054166113f681610385565b03611329576040929350815260086020522060ff60405191611417836110d2565b5481811661142481610385565b8352818160081c161515602084015260101c161515604082015290565b6040519061012082016001600160401b03811183821017611498575b604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b6114a061105d565b61145d565b6114ad6111e1565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401526114df611441565b60e0840152806101008401528061012084015280610140840152611501611281565b61016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b5190610397826102a9565b519061ffff198216820361027957565b8015150361027957565b519061039782611546565b919082606091031261027957604051611573816110d2565b8092805160028110156102795760409182918452602081015161159581611546565b60208501520151916115a6836102a9565b0152565b919061014083820312610279576040519060e09061162d9061010084016001600160401b03811185821017611632575b60405282849680518652602081015160208701526040810151604087015261160460608201611550565b60608701526080810151608087015260a081015160a087015260c081015160c08701520161155b565b910152565b61163a61105d565b6115da565b9080601f830112156102795760409182519261165a846110b7565b836060938484019381851161027957915b84831061167b5750505050505090565b85838303126102795783518691611691826110d2565b845182526020918286015183820152868601516116ad81611546565b8782015281520192019161166b565b6104408183031261027957610420906117b66116d6611201565b936116e08361152b565b85526116ee60208401611536565b60208601526116ff60408401611550565b6040860152606083015160608601526080830151608086015260a083015160a086015260c083015160c086015260e083015160e0860152610100808401519086015261012061174f81850161152b565b90860152610140808401519086015261016061176c81850161152b565b9086015261018061177e81850161152b565b908601526101a080840151908601526101c061179c828286016115aa565b908601526103008301516101e0860152610320830161163f565b6102008401526103808101516102208401526117d56103a08201611550565b6102408401526103c08101516102608401526103e08101516102808401526104008101516102a084015201516102c082015290565b1561181157565b60405163100960cb60e01b8152600b6004820152602490fd5b1561183157565b60405163100960cb60e01b815260186004820152602490fd5b1561185157565b60405163100960cb60e01b815260196004820152602490fd5b1561187157565b60405163100960cb60e01b8152601a6004820152602490fd5b1561189157565b60405163100960cb60e01b8152601b6004820152602490fd5b156118b157565b60405163100960cb60e01b8152601c6004820152602490fd5b156118d157565b60405163100960cb60e01b8152601d6004820152602490fd5b156118f157565b60405163100960cb60e01b8152600d6004820152602490fd5b1561191157565b60405163100960cb60e01b8152601e6004820152602490fd5b1561193157565b60405163100960cb60e01b8152601f6004820152602490fd5b1561195157565b60405163100960cb60e01b815260206004820152602490fd5b1561197157565b60405163100960cb60e01b815260386004820152602490fd5b1561199157565b60405163100960cb60e01b815260396004820152602490fd5b156119b157565b60405163100960cb60e01b815260346004820152602490fd5b156119d157565b60405163100960cb60e01b815260356004820152602490fd5b156119f157565b60405163100960cb60e01b815260366004820152602490fd5b15611a1157565b60405163100960cb60e01b815260376004820152602490fd5b15611a3157565b60405163100960cb60e01b8152602e6004820152602490fd5b15611a5157565b60405163100960cb60e01b8152602f6004820152602490fd5b15611a7157565b60405163100960cb60e01b815260306004820152602490fd5b15611a9157565b60405163100960cb60e01b815260316004820152602490fd5b15611ab157565b60405163100960cb60e01b815260326004820152602490fd5b15611ad157565b60405163100960cb60e01b815260336004820152602490fd5b15611af157565b60405163100960cb60e01b815260276004820152602490fd5b15611b1157565b60405163100960cb60e01b815260286004820152602490fd5b15611b3157565b60405163100960cb60e01b815260296004820152602490fd5b15611b5157565b60405163100960cb60e01b8152602a6004820152602490fd5b15611b7157565b60405163100960cb60e01b8152602b6004820152602490fd5b15611b9157565b60405163100960cb60e01b8152602c6004820152602490fd5b15611bb157565b60405163100960cb60e01b8152602d6004820152602490fd5b15611bd157565b60405163100960cb60e01b815260216004820152602490fd5b15611bf157565b60405163100960cb60e01b815260226004820152602490fd5b15611c1157565b60405163100960cb60e01b815260236004820152602490fd5b15611c3157565b602460405163100960cb60e01b8152816004820152fd5b15611c4f57565b60405163100960cb60e01b815260256004820152602490fd5b15611c6f57565b60405163100960cb60e01b815260266004820152602490fd5b51611c9281610385565b90565b60405190611ca2826110b7565b81611cab611441565b9052565b60405190611cbc826110b7565b60008252565b6040519060c082016001600160401b03811183821017611d13575b6040528160a0600091828152604051611cf5816110b7565b83815260208201528260408201528260608201528260808201520152565b611d1b61105d565b611cdd565b6005111561038f57565b60405190611d3782611074565b8160008152602061162d611cc2565b60405190611d5382611074565b60006020838281520152565b6040519061010082016001600160401b03811183821017611db1575b6040528160008082528060208301528060408301528060608301528060808301528060a083015260c082015260e061162d611281565b611db961105d565b611d7b565b611dc6611221565b90611dcf611caf565b82526000806020840152806040840152806060840152806080840152611df3611d46565b60a08401528060c08401528060e084015280610100840152611e13611281565b610120840152611e21611d5f565b610140840152611e2f611d5f565b61016084015280610180840152806101a0840152806101c0840152611e52611d5f565b6101e0840152611e60611281565b610200840152610220830152611e74611281565b610240830152611e82611d5f565b610260830152611e90611d5f565b610280830152565b90929160a0602060e092610100850196600180851b03168552805182860152015180516005811015611f01575b6040850152602081015151606085015260408101511515608085015260608101511515828501526080810151151560c085015201511515910152565b611f0961036e565b611ec5565b516005811015611f1b5790565b611c9261036e565b60405190611f30826110b7565b8160005b60208110611f40575050565b602090611f4b611281565b8184015201611f34565b611f5d611241565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152611fbf611d5f565b6101c0840152806101e084015280610200840152611fdb611f23565b610220840152610240830152565b906001811015611ffa5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b612025611dbe565b9161203460046000541461190a565b602061204f61204161112b565b8280825183010191016116bc565b9261206761206261056060045460ff1690565b61192a565b7f6208016c67e3e236a673e1e5ef2c2ecb7c82bbbaf3dceeefa8ad16395a7ae0da60405180612097843383611e98565b0390a16120af81518015908115613270575b5061194a565b016120ba8151611f0e565b6120c381611d20565b6127a4575160200151835260016120e16120dc3361134e565b611c88565b6120ea81610385565b036127975761216961215d60406121003361134e565b01515b6020860190815261211f6101e08601516101a087015111611bca565b61212e60018751511015611bea565b61215261213f8251885151906132b6565b8060408901526101008701511015611c0a565b8551519051906132b6565b60608401511015611c2a565b61219761217d84515160e08501519061330c565b806060860152806102208501510160808601523414611c48565b6121b66121b16121ab61012085015161029d565b336134c7565b611c68565b6121cf6121c233611334565b805460ff19166001179055565b604083015160016121df33611334565b01557fddbffbb525907340ac3c1399ea9f8a8184b2c6b84deb3dea35d09ba67e30873361224360a085016122143382516112a0565b8551516020825101525160405191829182919091602080604083019460018060a01b0381511684520151910152565b0390a16122666121c260206101c085015101516000526005602052604060002090565b6122ae3361228760206101c086015101516000526005602052604060002090565b805462010000600160b01b03191660109290921b62010000600160b01b0316919091179055565b6122bc610260830151613293565b8060c085015260a083015190818114600014612742575050600160e08401525b60e08301511561253d57610397926123316101806080937f0cafaff400a53905529c7cd5b71d4e4f63ce49ecc14c9fbe580681ea8492ff3d6040518061232781906001602083019252565b0390a10160019052565b61234061012082015160019052565b612352336040610120840151016112a0565b6123666102808401516060830151906132b6565b6101408201515261237f60206101c08501510151613293565b6020610140830151015261239b610260840151825151906132b6565b604061014083015101526123ca6123ba60606101c08601510151151590565b6060610140840151019015159052565b816101c084015101518261014083015101526102c083015160a061014083015101526123fe6102a0840151825151906132ca565b60c0610140830151015261012081015160e06101408301510152612420611f55565b9261243461242e825161029d565b856112a0565b602081015161244f9061ffff19165b61ffff19166020860152565b61246861245f6040830151151590565b15156040860152565b60608101516060850152828101518385015260a081015160a085015260c081015160c085015260e081015160e08501526101008101516101008501526124bf6124b561012083015161029d565b61012086016112a0565b6101408101516101408501526124e56101606124dd8184015161029d565b9086016112a0565b6125006124f661018083015161029d565b61018086016112a0565b6101a08101516101a08501526101408201516101c0850152436101e0850152610200904282860152015161022084015201516102408201526139f6565b6103979261257e6101806080937f0be3d6fa7335446257cc4bb501fe5c17000a1165e4fb5da89dba564bacac16dd6040518061232781906001602083019252565b6125926102808401516060830151906132b6565b610160820151526125ab60206101c08501510151613293565b602061016083015101526125c7610260840151825151906132b6565b604061016083015101526125f66125e660606101c08601510151151590565b6060610160840151019015159052565b816101c084015101518261016083015101526102c083015160a0610160830151015261262a6102a0840151825151906132ca565b60c0610160830151015260e06101c0840151015160e06101608301510152612650611f55565b9261265e61242e825161029d565b60208101516126719061ffff1916612443565b61268161245f6040830151151590565b60608101516060850152828101518385015260a081015160a085015260c081015160c085015260e081015160e08501526101008101516101008501526126ce6124b561012083015161029d565b61014080820151908501526126f46126ea61016083015161029d565b61016086016112a0565b6127056124f661018083015161029d565b6101a08101516101a08501526101608201516101c0850152436101e0850152610200904282860152015161022084015201516102408201526139f6565b1161278a5761276b61275c610260840151855151906132b6565b60a08401511115610100850152565b61278561277c610100850151151590565b151560e0850152565b6122dc565b600061010084015261276b565b61216961215d6000612103565b60016127b38295949551611f0e565b6127bc81611d20565b03612b59575082916129756101a06101c0936127f560016127e660e0886103979b01510151611c88565b6127ef81610385565b14611aea565b61280b612806610240880151151590565b611b0a565b6128236102c087015161020088015151511015611b2a565b600161283560e0878901510151611c88565b61283e81610385565b03612b47578585015160e0015160400151612861906001600160a01b03166124f6565b6128813360018060a01b0361287a61018088015161029d565b1614611b4a565b61288b3415611b6a565b6128a461289f6121ab61012089015161029d565b611b8a565b6128b382870151421015611baa565b6128ec6128c461012088015161029d565b6128d261018087015161029d565b6102008901515151916001600160a01b0390911690613375565b60008080806102208a01612914815161290e612907826132df565b6064900490565b906132ca565b809181898c015251038a8a015261293361292e8c5161029d565b61029d565b828215612b3e575bf115612b31575b604051600181527f5496ee3b8e212907d37eae508c506889f1ec5f4d9e07e30d604d9a83890ed926908060208101612327565b818101516101e0820180519190915283830180516020908101518351909101526102608501518251604001528151600060609091018190528151608090810151845190910152825160a001526102a0850151825160c001525160e09081015191510152612b1e6102006129e6611f55565b946129fa6129f4825161029d565b876112a0565b6020810151612a159061ffff19165b61ffff19166020880152565b612a2e612a256040830151151590565b15156040880152565b606081015160608701526080810151608087015260a081015160a087015260c081015160c087015260e081015160e08701526101008082015190870152612a86612a7c61012083015161029d565b61012088016112a0565b6101408082015190870152612aab610160612aa38184015161029d565b9088016112a0565b612ac6612abc61018083015161029d565b61018088016112a0565b6101a08101516101a08701526101e084015185870152436101e087015242828701520151805190612b19604060208401519301511515612b046111d4565b93600085526020850152604084019015159052565b613565565b61022084015201516102408201526139f6565b612b39612010565b612942565b506108fc61293b565b612861612b54875161029d565b6124f6565b926002612b668551611f0e565b612b6f81611d20565b03612e5f576103979350612b9d612b8e60e06101c08401510151611c88565b612b9781610385565b15611a2a565b612bb3612bae610240830151151590565b611a4a565b612bbd3415611a6a565b612bd6612bd16121ab61012084015161029d565b611a8a565b612be76101a0820151421015611aaa565b612c07612c0260c083015160206101c085015101519061336b565b6112af565b612c2e600161020086019280845251612c1f81610385565b612c2881610385565b14611aca565b6001612c3a8251611c88565b612c4381610385565b03612e4b5751604001516001600160a01b03165b612cbc61022093612c6b85870193846112a0565b7f1c3e8b896c1f185d4b4f21327cb59954d11974f8875e83f4d97693473b0d22bc612ca5612c99855161029d565b60405191829182610844565b0390a16101c0612cb5845161029d565b91016112a0565b612ce3612cd9610240860192612cd3845160019052565b5161029d565b60408351016112a0565b610280820151936102608091019485515260206101c08401510151602086510152820151604085510152612d2e612d2260606101c08501510151151590565b60608651019015159052565b60806101c083015101516080855101526102c082015160a0855101526102a082015160c0855101525160e084510152612d65611f55565b92612d7361242e835161029d565b6020820151612d869061ffff1916612443565b612d9661245f6040840151151590565b606082015160608501526080820151608085015260a082015160a085015260c082015160c085015260e082015160e08501526101008083015190850152612de46124b561012084015161029d565b6101408083015190850152612e016101606124dd8185015161029d565b612e136101806124dd8185015161029d565b6101a08201516101a0850152516101c0840152436101e0840152426102008401526102008101518284015201516102408201526139f6565b50612e5a61018082015161029d565b612c57565b9190926003612e6e8251611f0e565b612e7781611d20565b036130ed5750612e8a61292e835161029d565b33036130d257612e9a60016119aa565b6102a08201908151936060840194855114612eb4906119ca565b612ebe34156119ea565b61012092838501928351612ed19061029d565b612edb90336134c7565b612ee490611a0a565b604051600181527ff9a6a9cc6ce125614b73d88ab3a4fea83c3a963a1b42c44ac10412ab3337af8890602090a160016101e0938401528351612f259061029d565b9461020094858801968751515133612f3c92613375565b610280808901519301928351526101c093848901908151602001518551602001526102608a01518551604001528451606001600090528151608001518551608001526102c08a0151855160a0015251845160c001525160e00151835160e00152612fa4611f55565b988851612fb09061029d565b612fba908b6112a0565b602089015161ffff191661ffff191660208b015260408901511515151560408b01525160608a0152608088015160808a015260a088015160a08a015260c088015160c08a015260e088015160e08a015261010080890151908a01525161301f9061029d565b61302a9189016112a0565b6101408087015190880152610160808701516130459061029d565b6130509189016112a0565b610180808701516130609061029d565b61306b9189016112a0565b6101a0808701519088015251908601524390850152429084015251805160208101519060400151151561309c6111d4565b600081526020810192909252151560408201526130b891613565565b9061022091828401520151610240820152610397906139f6565b612e9a6130e661292e61018085015161029d565b33146119aa565b600491506130fe9093929351611f0e565b61310781611d20565b14613110575050565b6103979161311e341561196a565b610120916132068383019361313e6131396121ab875161029d565b61198a565b604051600081527f58a35314929564e244c0af59e237c63350cd9618282e31bff58675d15d7dc4dc90602090a16000610200809401526131fe61317f611f55565b9561319361318d875161029d565b886112a0565b60208681015161ffff1916908801526131bb6131b26040880151151590565b15156040890152565b606086015160608801526080860151608088015260a086015160a088015260c086015160c088015260e086015160e088015261010080870151908801525161029d565b9085016112a0565b61014080830151908401526132236101606131fe8185015161029d565b6132356101806131fe8185015161029d565b6101a080830151908401526101c08083015190840152436101e0840152428184015281015190610220918284015201516102408201526139f6565b905060015414386120a9565b50634e487b7160e01b600052601160045260246000fd5b9060018201918281116132a9575b821061027957565b6132b161327c565b6132a1565b91908201918281116132a957821061027957565b9081039081116132d75790565b611c9261327c565b906005820291808304600514811517156132ff575b600583040361027957565b61330761327c565b6132f4565b91906000928115918215613324575b50501561027957565b8181929395500282810482148315171561335e575b8094613348570414388061331b565b634e487b7160e01b600052601260045260246000fd5b61336661327c565b613339565b8115610279570690565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526133f193600093849392849190608081016001600160401b038111828210176133f8575b6040525193165af16133e16133da613405565b8092613467565b5060208082518301019101613452565b1561027957565b61340061105d565b6133c7565b3d1561344d573d906001600160401b038211613440575b60405191613434601f8201601f191660200184611108565b82523d6000602084013e565b61344861105d565b61341c565b606090565b908160209103126102795751611c9281611546565b1561346f5790565b80511561347e57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561349f5790565b8051156134ae57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611c92928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261350b816110ed565b5193165af16133e161351b613405565b8092613497565b600091611c929383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261350b816110ed565b919061356f611f23565b9260005b600181106135815750508252565b8061358e60019284611fe9565b516135998288611fe9565b526135a48187611fe9565b5060001981146135b5575b01613573565b6135bd61327c565b6135af565b8181106135cd575050565b600081556001016135c2565b6135e4600254611023565b806135ec5750565b601f81116001146135ff57506000600255565b600260005261364490601f0160051c600080516020613d7a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6135c2565b6000602081208160025555565b613659611201565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a08401526136bb611d5f565b6101c0840152806101e08401526136d0611f23565b61020084015280610220840152806102408401528061026084015280610280840152806102a08401526102c0830152565b9060e080610397938051845260208101516020850152604081015160408501526060810151151560608501526080810151608085015260a081015160a085015260c081015160c08501520151910190610c3e565b6000915b6001831061376657505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190613759565b9190916104206102c06104408301946137af848251610837565b60208181015161ffff191690850152604081810151151590850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e0850152610100808201519085015261381a6101208083015190860190610837565b61014080820151908501526138386101608083015190860190610837565b61384b6101808083015190860190610837565b6101a080820151908501526138696101c08083015190860190613701565b6101e0810151610300850152613889610200820151610320860190613755565b61022081015161038085015261024081015115156103a08501526102608101516103c08501526102808101516103e08501526102a08101516104008501520151910152565b90601f82116138db575050565b6103979160026000526020600020906020601f840160051c83019310613909575b601f0160051c01906135c2565b90915081906138fc565b80519091906001600160401b0381116139e9575b61393b81613936600254611023565b6138ce565b602080601f8311600114613977575081929360009261396c575b50508160011b916000199060031b1c191617600255565b015190503880613955565b6002600052601f19831694909190600080516020613d7a833981519152926000905b8782106139d15750508360019596106139b8575b505050811b01600255565b015160001960f88460031b161c191690553880806139ad565b80600185968294968601518155019501930190613999565b6139f161105d565b613927565b6101c081810180516060015115613b7557613b629160a0613b7092613b1661039796613a20613651565b94613a2e6129f4835161029d565b6020820151613a419061ffff1916612a09565b613a51612a256040840151151590565b6060820151606087015260808201516080870152848201518587015260c082015160c087015260e082015160e08701526101008083015190870152613a9e610120612aa38185015161029d565b6101408083015190870152613abb610160612aa38185015161029d565b613acd610180612aa38185015161029d565b6101a090818301918251908801528451908701526102008083019081516101e0890152610220908185015190890152610240809401519088015251905111159085019015159052565b60408151015161026084015280515161028084015260c0815101516102a08401525101516102c0820152613b4a6004600055565b613b5343600155565b60405192839160208301613795565b03601f198101835282611108565b613913565b505080610180613bd892016000808080613b9261292e865161029d565b61024087015190828215613bfb575bf115613bee575b610220613bc3613bbc61012085015161029d565b925161029d565b9201515151916001600160a01b031690613375565b60008055613be66000600155565b6103976135d9565b613bf6612010565b613ba8565b506108fc613ba1565b60209060431901126102795760405190613c1d826110b7565b6044358252565b60209060031901126102795760405190613c3d826110b7565b6004358252565b60405190613c51826110d2565b81613c5a611f23565b8152613c64611281565b6020820152604061162d611d5f565b6102208183031261027957613d4b613c89611261565b92613c938361152b565b8452613ca160208401611536565b6020850152613cb260408401611550565b6040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e085015261010080840151908501526101208084015190850152610140613d0d81850161152b565b908501526101608084015190850152610180613d2a81850161152b565b908501526101a0613d3c81850161152b565b908501526101c080930161163f565b9082015290565b6084359061039782611546565b60a4359061039782611546565b60c435906103978261154656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 18240,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle_algo_v2.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle_algo_v2.rsh:306:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle_algo_v2.rsh:125:37:after expr stmt semicolon',
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
