// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = "0.1.13";
export const _versionHash = "0.1.13 (f79282c4)";
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  return {
    E: {
      notify: [ctc0],
    },
  };
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2,
  });
  const map0_ctc = ctc3;

  return {
    infos: {},
    views: {
      3: [ctc0, ctc1],
    },
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2,
  };
}
export async function _A_claim3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _A_claim3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _A_claim3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Data({
    A_claim0_52: ctc4,
    admin_end0_52: ctc4,
  });
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    message: ctc6,
    success: ctc7,
  });
  const ctc9 = stdlib.T_Object({
    errored: ctc7,
    message: ctc6,
  });
  const ctc10 = stdlib.T_Data({
    data: ctc8,
    error: ctc9,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const [v473, v489] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc2, ctc3]
  );
  const v494 = stdlib.protect(ctc4, await interact.in(), {
    at: "./algo.rsh:1:23:application",
    fs: [
      "at ./algo.rsh:78:32:application call to [unknown function] (defined at: ./algo.rsh:78:32:function exp)",
      'at ./algo.rsh:75:60:application call to "runA_claim0_52" (defined at: ./algo.rsh:78:10:function exp)',
      "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
    ],
    msg: "in",
    who: "A_claim",
  });
  const v495 =
    v494[
      stdlib.checkedBigNumberify(
        "./algo.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v497 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc2, v495, ctc0),
    null
  );
  const v498 = {
    None: 0,
    Some: 1,
  }[v497[0]];
  const v499 = stdlib.eq(
    v498,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v499, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./algo.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./algo.rsh:78:32:application call to [unknown function] (defined at: ./algo.rsh:78:32:function exp)",
      'at ./algo.rsh:75:60:application call to "runA_claim0_52" (defined at: ./algo.rsh:78:10:function exp)',
      "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
    ],
    msg: "Forbidden",
    who: "A_claim",
  });
  const v506 = ["A_claim0_52", v494];

  const txn1 = await ctc.sendrecv({
    args: [v473, v489, v506],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [
      stdlib.checkedBigNumberify(
        "./algo.rsh:82:9:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v541],
        secs: v543,
        time: v542,
        didSend: v355,
        from: v540,
      } = txn1;

      switch (v541[0]) {
        case "A_claim0_52": {
          const v544 = v541[1];
          sim_r.txns.push({
            kind: "api",
            who: "A_claim",
          });
          const v549 =
            v544[
              stdlib.checkedBigNumberify(
                "./algo.rsh:78:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc2, v549, ctc0),
            null
          );
          const v569 = "The User Claimed succeded       ";
          const v570 = {
            message: v569,
            success: true,
          };
          const v571 = ["data", v570];
          const v572 = await txn1.getOutput("A_claim", "v571", ctc10, v571);

          sim_r.txns.push({
            kind: "from",
            to: v540,
            tok: undefined /* Nothing */,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined /* Nothing */,
          });
          sim_r.isHalt = true;

          break;
        }
        case "admin_end0_52": {
          const v602 = v541[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false,
  });
  const {
    data: [v541],
    secs: v543,
    time: v542,
    didSend: v355,
    from: v540,
  } = txn1;
  switch (v541[0]) {
    case "A_claim0_52": {
      const v544 = v541[1];
      undefined /* setApiDetails */;
      const v549 =
        v544[
          stdlib.checkedBigNumberify(
            "./algo.rsh:78:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v550 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc2, v549, ctc0),
        null
      );
      const v551 = {
        None: 0,
        Some: 1,
      }[v550[0]];
      const v552 = stdlib.eq(
        v551,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v552, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./algo.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./algo.rsh:78:32:application call to [unknown function] (defined at: ./algo.rsh:78:32:function exp)",
          "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:78:32:function exp)",
          "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
        ],
        msg: "Forbidden",
        who: "A_claim",
      });
      const v569 = "The User Claimed succeded       ";
      const v570 = {
        message: v569,
        success: true,
      };
      const v571 = ["data", v570];
      const v572 = await txn1.getOutput("A_claim", "v571", ctc10, v571);
      if (v355) {
        stdlib.protect(ctc0, await interact.out(v544, v572), {
          at: "./algo.rsh:78:11:application",
          fs: [
            "at ./algo.rsh:78:11:application call to [unknown function] (defined at: ./algo.rsh:78:11:function exp)",
            'at ./algo.rsh:92:14:application call to "ret" (defined at: ./algo.rsh:83:15:function exp)',
            "at ./algo.rsh:83:15:application call to [unknown function] (defined at: ./algo.rsh:83:15:function exp)",
          ],
          msg: "out",
          who: "A_claim",
        });
      } else {
      }

      return;

      break;
    }
    case "admin_end0_52": {
      const v602 = v541[1];
      return;
      break;
    }
  }
}
export async function Alice(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Alice expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Alice expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    addr: ctc2,
    amt: ctc3,
  });
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    A_claim0_52: ctc5,
    admin_end0_52: ctc5,
  });
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    message: ctc7,
    success: ctc8,
  });
  const ctc10 = stdlib.T_Object({
    errored: ctc8,
    message: ctc7,
  });
  const ctc11 = stdlib.T_Data({
    data: ctc9,
    error: ctc10,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
  });

  const v468 = stdlib.protect(ctc4, await interact.getInfo(), {
    at: "./algo.rsh:43:54:application",
    fs: [
      "at ./algo.rsh:42:9:application call to [unknown function] (defined at: ./algo.rsh:42:13:function exp)",
    ],
    msg: "getInfo",
    who: "Alice",
  });
  const v469 = v468.addr;
  const v470 = v468.amt;

  const txn1 = await ctc.sendrecv({
    args: [v470, v469],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./algo.rsh:46:5:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [v470, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v474, v475],
        secs: v477,
        time: v476,
        didSend: v34,
        from: v473,
      } = txn1;

      sim_r.txns.push({
        amt: v474,
        kind: "to",
        tok: undefined /* Nothing */,
      });
      const v480 = await ctc.getContractInfo();

      await stdlib.simMapSet(sim_r, 0, ctc2, v475, ctc0, null);
      const v483 = true;
      const v485 = v473;
      const v486 = v476;
      const v489 = v474;

      if (
        await (async () => {
          return v483;
        })()
      ) {
        sim_r.isHalt = false;
      } else {
        sim_r.txns.push({
          kind: "from",
          to: v485,
          tok: undefined /* Nothing */,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;
      }
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false,
  });
  const {
    data: [v474, v475],
    secs: v477,
    time: v476,
    didSend: v34,
    from: v473,
  } = txn1;
  const v480 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.contractInfo(v480), {
    at: "./algo.rsh:49:26:application",
    fs: [
      "at ./algo.rsh:49:26:application call to [unknown function] (defined at: ./algo.rsh:49:26:function exp)",
      'at ./algo.rsh:49:26:application call to "liftedInteract" (defined at: ./algo.rsh:49:26:application)',
    ],
    msg: "contractInfo",
    who: "Alice",
  });

  await stdlib.mapSet(map0, ctc2, v475, ctc0, null);
  let v483 = true;
  let v485 = v473;
  let v486 = v476;
  let v489 = v474;

  let txn2 = txn1;
  while (
    await (async () => {
      return v483;
    })()
  ) {
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v541],
      secs: v543,
      time: v542,
      didSend: v355,
      from: v540,
    } = txn3;
    switch (v541[0]) {
      case "A_claim0_52": {
        const v544 = v541[1];
        undefined /* setApiDetails */;
        const v549 =
          v544[
            stdlib.checkedBigNumberify(
              "./algo.rsh:78:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v550 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc2, v549, ctc0),
          null
        );
        const v551 = {
          None: 0,
          Some: 1,
        }[v550[0]];
        const v552 = stdlib.eq(
          v551,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v552, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./algo.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./algo.rsh:78:32:application call to [unknown function] (defined at: ./algo.rsh:78:32:function exp)",
            "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:78:32:function exp)",
            "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
          ],
          msg: "Forbidden",
          who: "Alice",
        });
        const v569 = "The User Claimed succeded       ";
        const v570 = {
          message: v569,
          success: true,
        };
        const v571 = ["data", v570];
        await txn3.getOutput("A_claim", "v571", ctc11, v571);
        const cv483 = false;
        const cv485 = v540;
        const cv486 = v542;
        const cv489 = v489;

        v483 = cv483;
        v485 = cv485;
        v486 = cv486;
        v489 = cv489;

        txn2 = txn3;
        continue;
        break;
      }
      case "admin_end0_52": {
        const v602 = v541[1];
        undefined /* setApiDetails */;
        const v613 =
          v602[
            stdlib.checkedBigNumberify(
              "./algo.rsh:103:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v614 = stdlib.addressEq(v540, v473);
        stdlib.assert(v614, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./algo.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./algo.rsh:103:32:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
            "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
            "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
          ],
          msg: "You are not the admin",
          who: "Alice",
        });
        const v616 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc2, v613, ctc0),
          null
        );
        const v617 = {
          None: 0,
          Some: 1,
        }[v616[0]];
        const v618 = stdlib.eq(
          v617,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v618, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./algo.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./algo.rsh:103:32:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
            "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
            "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
          ],
          msg: "Forbidden",
          who: "Alice",
        });
        const v652 = true;
        await txn3.getOutput("admin_end", "v652", ctc8, v652);
        const cv483 = false;
        const cv485 = v613;
        const cv486 = v542;
        const cv489 = v489;

        v483 = cv483;
        v485 = cv485;
        v486 = cv486;
        v489 = cv489;

        txn2 = txn3;
        continue;
        break;
      }
    }
  }
  return;
}
export async function _admin_end3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _admin_end3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _admin_end3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Data({
    A_claim0_52: ctc4,
    admin_end0_52: ctc4,
  });
  const ctc6 = stdlib.T_Bool;

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const [v473, v489] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc2, ctc3]
  );
  const v508 = ctc.selfAddress();
  const v510 = stdlib.protect(ctc4, await interact.in(), {
    at: "./algo.rsh:1:23:application",
    fs: [
      "at ./algo.rsh:103:32:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
      'at ./algo.rsh:75:60:application call to "runadmin_end0_52" (defined at: ./algo.rsh:103:10:function exp)',
      "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
    ],
    msg: "in",
    who: "admin_end",
  });
  const v511 =
    v510[
      stdlib.checkedBigNumberify(
        "./algo.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v513 = stdlib.addressEq(v508, v473);
  stdlib.assert(v513, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./algo.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./algo.rsh:103:32:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
      'at ./algo.rsh:75:60:application call to "runadmin_end0_52" (defined at: ./algo.rsh:103:10:function exp)',
      "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
    ],
    msg: "You are not the admin",
    who: "admin_end",
  });
  const v515 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc2, v511, ctc0),
    null
  );
  const v516 = {
    None: 0,
    Some: 1,
  }[v515[0]];
  const v517 = stdlib.eq(
    v516,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v517, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./algo.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./algo.rsh:103:32:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
      'at ./algo.rsh:75:60:application call to "runadmin_end0_52" (defined at: ./algo.rsh:103:10:function exp)',
      "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
    ],
    msg: "Forbidden",
    who: "admin_end",
  });
  const v524 = ["admin_end0_52", v510];

  const txn1 = await ctc.sendrecv({
    args: [v473, v489, v524],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [
      stdlib.checkedBigNumberify(
        "./algo.rsh:108:9:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v541],
        secs: v543,
        time: v542,
        didSend: v355,
        from: v540,
      } = txn1;

      switch (v541[0]) {
        case "A_claim0_52": {
          const v544 = v541[1];

          break;
        }
        case "admin_end0_52": {
          const v602 = v541[1];
          sim_r.txns.push({
            kind: "api",
            who: "admin_end",
          });
          const v613 =
            v602[
              stdlib.checkedBigNumberify(
                "./algo.rsh:103:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc2, v613, ctc0),
            null
          );
          const v652 = true;
          const v653 = await txn1.getOutput("admin_end", "v652", ctc6, v652);

          sim_r.txns.push({
            kind: "from",
            to: v613,
            tok: undefined /* Nothing */,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined /* Nothing */,
          });
          sim_r.isHalt = true;

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false,
  });
  const {
    data: [v541],
    secs: v543,
    time: v542,
    didSend: v355,
    from: v540,
  } = txn1;
  switch (v541[0]) {
    case "A_claim0_52": {
      const v544 = v541[1];
      return;
      break;
    }
    case "admin_end0_52": {
      const v602 = v541[1];
      undefined /* setApiDetails */;
      const v613 =
        v602[
          stdlib.checkedBigNumberify(
            "./algo.rsh:103:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v614 = stdlib.addressEq(v540, v473);
      stdlib.assert(v614, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./algo.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./algo.rsh:103:32:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
          "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
          "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
        ],
        msg: "You are not the admin",
        who: "admin_end",
      });
      const v616 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc2, v613, ctc0),
        null
      );
      const v617 = {
        None: 0,
        Some: 1,
      }[v616[0]];
      const v618 = stdlib.eq(
        v617,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v618, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./algo.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./algo.rsh:103:32:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
          "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:103:32:function exp)",
          "at ./algo.rsh:75:60:application call to [unknown function] (defined at: ./algo.rsh:75:60:function exp)",
        ],
        msg: "Forbidden",
        who: "admin_end",
      });
      const v652 = true;
      const v653 = await txn1.getOutput("admin_end", "v652", ctc6, v652);
      if (v355) {
        stdlib.protect(ctc0, await interact.out(v602, v653), {
          at: "./algo.rsh:103:11:application",
          fs: [
            "at ./algo.rsh:103:11:application call to [unknown function] (defined at: ./algo.rsh:103:11:function exp)",
            'at ./algo.rsh:110:14:application call to "ret" (defined at: ./algo.rsh:109:15:function exp)',
            "at ./algo.rsh:109:15:application call to [unknown function] (defined at: ./algo.rsh:109:15:function exp)",
          ],
          msg: "out",
          who: "admin_end",
        });
      } else {
      }

      return;

      break;
    }
  }
}
export async function A_claim(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for A_claim expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for A_claim expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _A_claim3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function admin_end(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for admin_end expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for admin_end expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _admin_end3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
const _ALGO = {
  ABI: {
    impure: [
      `A_claim(address)(byte,byte[33])`,
      `_reachp_0((uint64,uint64,address))void`,
      `_reachp_2((uint64,(byte,byte[32])))void`,
      `admin_end(address)byte`,
    ],
    pure: [],
    sigs: [
      `A_claim(address)(byte,byte[33])`,
      `_reachp_0((uint64,uint64,address))void`,
      `_reachp_2((uint64,(byte,byte[32])))void`,
      `admin_end(address)byte`,
    ],
  },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAyYCAAEAMRhBAdMoZEkiWzUBJFs1AilkggQEAssjFQQhZX2HBGeEbZIEmg5r9jYaAI4EAX4BkAABAZsANhoBNQskryk0C1BQNQslNAESRElXACA1EoEgWzUONAsiWzUMNAtXCCE1DYAEWAn4gzQMFlA0DVCwNAyIAhA0DSJVjQIBngGhQv+0KCgpNA1XASBQiAHQIlUjEkSAIgBUaGUgVXNlciBDbGFpbWVkIHN1Y2NlZGVkAAAAAAAAAAE1C4AIAAAAAAAAAjs0C1CwNAs1BCIxADIGNQ81EDURNBFBAUg0EjQOFlAlMgY1AjUBKUxXAChnKDQBFjQCFlBnMRkiEkSIAZY0A0AACoAEFR98dTQEULAjQzQNVwEgNQwxADQSEkQoKCk0DFCIATgiVSMSRCM1C4AIAAAAAAAAAow0CxZRBwhQsDQLFlEHCDUEIjQMMgY1DzUQNRFC/4Akr4ABATQLUFA1C0L+4TEANRI0CyJbNQw0CyRbNRM0C1cQIDUNgARQPg6rNAwWUDQTFlA0DVCwNAyIAPM0E4gA0oHUeik0DVAoiAD/IzQSMgY0EzUONQ81EDURQv8iiACjgaCNBogA0TYaATULQv+eiACRNhoBNQtC/nQ2GgE1C0L/fSIxNBJEgQIxNRJEIjE2EkQiMTcSRIgAaYEoryIiQv7rMRkiEkRC/wNJNQYyCogATUL+80hMv0iJIrIBI7IQsgeyCLOJQv5iQv7tNA40EIgALDEZgQUSRIgAYjIKYDIKeAlC/8RIiUwJSTUGMgmIAA2JCUlB/+5JNQaIABSJsUL/tyM1A4m+SRZRBwhFBE1QiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJIhJMNAISEUSJNAYINQaJNAY0B0oPQf+hQv+pTEm9QP9lSwOI/+NC/10=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `49`,
    101: `49`,
    102: `50`,
    103: `50`,
    104: `51`,
    105: `51`,
    106: `51`,
    107: `52`,
    108: `52`,
    109: `53`,
    11: `2`,
    110: `53`,
    111: `53`,
    112: `53`,
    113: `53`,
    114: `53`,
    115: `54`,
    116: `54`,
    117: `55`,
    118: `56`,
    119: `57`,
    12: `4`,
    120: `57`,
    121: `58`,
    122: `59`,
    123: `61`,
    124: `61`,
    125: `62`,
    126: `62`,
    127: `62`,
    128: `63`,
    129: `63`,
    13: `4`,
    130: `64`,
    131: `65`,
    132: `66`,
    133: `66`,
    134: `66`,
    135: `66`,
    136: `66`,
    137: `66`,
    138: `67`,
    139: `67`,
    14: `5`,
    140: `67`,
    141: `70`,
    142: `71`,
    143: `72`,
    144: `73`,
    145: `73`,
    146: `74`,
    147: `74`,
    148: `74`,
    149: `75`,
    15: `5`,
    150: `76`,
    151: `76`,
    152: `76`,
    153: `77`,
    154: `78`,
    155: `79`,
    156: `80`,
    157: `81`,
    158: `88`,
    159: `88`,
    16: `5`,
    160: `88`,
    161: `88`,
    162: `88`,
    163: `88`,
    164: `88`,
    165: `88`,
    166: `88`,
    167: `88`,
    168: `88`,
    169: `88`,
    17: `6`,
    170: `88`,
    171: `88`,
    172: `88`,
    173: `88`,
    174: `88`,
    175: `88`,
    176: `88`,
    177: `88`,
    178: `88`,
    179: `88`,
    18: `7`,
    180: `88`,
    181: `88`,
    182: `88`,
    183: `88`,
    184: `88`,
    185: `88`,
    186: `88`,
    187: `88`,
    188: `88`,
    189: `88`,
    19: `8`,
    190: `88`,
    191: `88`,
    192: `88`,
    193: `88`,
    194: `89`,
    195: `89`,
    196: `90`,
    197: `90`,
    198: `90`,
    199: `90`,
    2: `2`,
    20: `9`,
    200: `90`,
    201: `90`,
    202: `90`,
    203: `90`,
    204: `90`,
    205: `90`,
    206: `91`,
    207: `91`,
    208: `92`,
    209: `93`,
    21: `10`,
    210: `94`,
    211: `94`,
    212: `95`,
    213: `95`,
    214: `96`,
    215: `97`,
    216: `97`,
    217: `98`,
    218: `98`,
    219: `99`,
    22: `11`,
    220: `99`,
    221: `100`,
    222: `100`,
    223: `101`,
    224: `101`,
    225: `103`,
    226: `103`,
    227: `104`,
    228: `104`,
    229: `104`,
    23: `11`,
    230: `106`,
    231: `106`,
    232: `107`,
    233: `107`,
    234: `108`,
    235: `109`,
    236: `110`,
    237: `111`,
    238: `111`,
    239: `113`,
    24: `12`,
    240: `113`,
    241: `114`,
    242: `114`,
    243: `115`,
    244: `116`,
    245: `117`,
    246: `117`,
    247: `117`,
    248: `118`,
    249: `119`,
    25: `13`,
    250: `120`,
    251: `120`,
    252: `121`,
    253: `122`,
    254: `122`,
    255: `123`,
    256: `124`,
    257: `125`,
    258: `126`,
    259: `126`,
    26: `14`,
    260: `127`,
    261: `128`,
    262: `129`,
    263: `131`,
    264: `131`,
    265: `131`,
    266: `133`,
    267: `133`,
    268: `134`,
    269: `134`,
    27: `14`,
    270: `134`,
    271: `136`,
    272: `136`,
    273: `136`,
    274: `136`,
    275: `136`,
    276: `136`,
    277: `137`,
    278: `137`,
    279: `138`,
    28: `15`,
    280: `139`,
    281: `141`,
    282: `142`,
    283: `144`,
    284: `144`,
    285: `145`,
    286: `145`,
    287: `145`,
    288: `146`,
    289: `146`,
    29: `16`,
    290: `147`,
    291: `147`,
    292: `148`,
    293: `148`,
    294: `149`,
    295: `150`,
    296: `158`,
    297: `159`,
    298: `160`,
    299: `161`,
    3: `2`,
    30: `18`,
    300: `161`,
    301: `162`,
    302: `163`,
    303: `163`,
    304: `163`,
    305: `164`,
    306: `165`,
    307: `166`,
    308: `167`,
    309: `168`,
    31: `18`,
    310: `175`,
    311: `176`,
    312: `176`,
    313: `177`,
    314: `177`,
    315: `177`,
    316: `177`,
    317: `177`,
    318: `177`,
    319: `177`,
    32: `18`,
    320: `177`,
    321: `177`,
    322: `177`,
    323: `178`,
    324: `178`,
    325: `179`,
    326: `180`,
    327: `180`,
    328: `180`,
    329: `181`,
    33: `18`,
    330: `182`,
    331: `183`,
    332: `183`,
    333: `184`,
    334: `185`,
    335: `185`,
    336: `185`,
    337: `186`,
    338: `186`,
    339: `187`,
    34: `18`,
    340: `188`,
    341: `188`,
    342: `189`,
    343: `189`,
    344: `190`,
    345: `190`,
    346: `191`,
    347: `191`,
    348: `192`,
    349: `192`,
    35: `18`,
    350: `193`,
    351: `193`,
    352: `193`,
    353: `195`,
    354: `196`,
    355: `197`,
    356: `197`,
    357: `197`,
    358: `198`,
    359: `198`,
    36: `18`,
    360: `199`,
    361: `200`,
    362: `201`,
    363: `201`,
    364: `202`,
    365: `202`,
    366: `202`,
    367: `204`,
    368: `204`,
    369: `205`,
    37: `18`,
    370: `205`,
    371: `206`,
    372: `206`,
    373: `207`,
    374: `208`,
    375: `209`,
    376: `209`,
    377: `210`,
    378: `210`,
    379: `211`,
    38: `18`,
    380: `212`,
    381: `213`,
    382: `213`,
    383: `214`,
    384: `214`,
    385: `215`,
    386: `215`,
    387: `215`,
    388: `216`,
    389: `216`,
    39: `18`,
    390: `217`,
    391: `217`,
    392: `217`,
    393: `217`,
    394: `217`,
    395: `217`,
    396: `218`,
    397: `218`,
    398: `219`,
    399: `220`,
    4: `2`,
    40: `18`,
    400: `221`,
    401: `221`,
    402: `222`,
    403: `223`,
    404: `224`,
    405: `224`,
    406: `225`,
    407: `226`,
    408: `228`,
    409: `228`,
    41: `18`,
    410: `229`,
    411: `229`,
    412: `229`,
    413: `230`,
    414: `230`,
    415: `231`,
    416: `231`,
    417: `231`,
    418: `235`,
    419: `235`,
    42: `18`,
    420: `235`,
    421: `236`,
    422: `237`,
    423: `237`,
    424: `238`,
    425: `239`,
    426: `240`,
    427: `240`,
    428: `240`,
    429: `241`,
    43: `18`,
    430: `242`,
    431: `242`,
    432: `243`,
    433: `243`,
    434: `244`,
    435: `244`,
    436: `245`,
    437: `245`,
    438: `246`,
    439: `246`,
    44: `18`,
    440: `247`,
    441: `247`,
    442: `248`,
    443: `248`,
    444: `249`,
    445: `249`,
    446: `249`,
    447: `251`,
    448: `251`,
    449: `251`,
    45: `18`,
    450: `252`,
    451: `252`,
    452: `252`,
    453: `252`,
    454: `253`,
    455: `253`,
    456: `253`,
    457: `254`,
    458: `254`,
    459: `254`,
    46: `18`,
    460: `255`,
    461: `255`,
    462: `256`,
    463: `256`,
    464: `256`,
    465: `258`,
    466: `258`,
    467: `258`,
    468: `259`,
    469: `259`,
    47: `18`,
    470: `259`,
    471: `260`,
    472: `260`,
    473: `261`,
    474: `261`,
    475: `261`,
    476: `263`,
    477: `263`,
    478: `263`,
    479: `264`,
    48: `18`,
    480: `264`,
    481: `265`,
    482: `265`,
    483: `265`,
    484: `267`,
    485: `268`,
    486: `268`,
    487: `269`,
    488: `270`,
    489: `271`,
    49: `18`,
    490: `271`,
    491: `272`,
    492: `272`,
    493: `273`,
    494: `274`,
    495: `275`,
    496: `276`,
    497: `276`,
    498: `277`,
    499: `278`,
    5: `2`,
    50: `18`,
    500: `279`,
    501: `280`,
    502: `280`,
    503: `281`,
    504: `282`,
    505: `283`,
    506: `283`,
    507: `283`,
    508: `284`,
    509: `284`,
    51: `18`,
    510: `285`,
    511: `286`,
    512: `287`,
    513: `288`,
    514: `288`,
    515: `288`,
    516: `290`,
    517: `290`,
    518: `291`,
    519: `292`,
    52: `19`,
    520: `293`,
    521: `295`,
    522: `295`,
    523: `295`,
    524: `297`,
    525: `298`,
    526: `298`,
    527: `299`,
    528: `299`,
    529: `300`,
    53: `19`,
    530: `300`,
    531: `300`,
    532: `301`,
    533: `301`,
    534: `301`,
    535: `303`,
    536: `304`,
    537: `305`,
    538: `306`,
    539: `307`,
    54: `19`,
    540: `309`,
    541: `310`,
    542: `310`,
    543: `311`,
    544: `312`,
    545: `312`,
    546: `313`,
    547: `313`,
    548: `314`,
    549: `314`,
    55: `20`,
    550: `315`,
    551: `316`,
    552: `318`,
    553: `318`,
    554: `318`,
    555: `320`,
    556: `320`,
    557: `320`,
    558: `322`,
    559: `322`,
    56: `20`,
    560: `324`,
    561: `324`,
    562: `325`,
    563: `325`,
    564: `325`,
    565: `327`,
    566: `327`,
    567: `328`,
    568: `328`,
    569: `329`,
    57: `20`,
    570: `330`,
    571: `332`,
    572: `332`,
    573: `332`,
    574: `334`,
    575: `334`,
    576: `335`,
    577: `336`,
    578: `336`,
    579: `337`,
    58: `20`,
    580: `338`,
    581: `339`,
    582: `339`,
    583: `339`,
    584: `341`,
    585: `342`,
    586: `344`,
    587: `345`,
    588: `346`,
    589: `347`,
    59: `20`,
    590: `347`,
    591: `348`,
    592: `348`,
    593: `349`,
    594: `349`,
    595: `349`,
    596: `350`,
    597: `352`,
    598: `353`,
    599: `354`,
    6: `2`,
    60: `20`,
    600: `354`,
    601: `354`,
    602: `355`,
    603: `356`,
    604: `356`,
    605: `357`,
    606: `357`,
    607: `357`,
    608: `358`,
    609: `360`,
    61: `20`,
    610: `361`,
    611: `361`,
    612: `361`,
    613: `363`,
    614: `364`,
    615: `364`,
    616: `365`,
    617: `367`,
    618: `368`,
    619: `369`,
    62: `20`,
    620: `370`,
    621: `370`,
    622: `370`,
    623: `371`,
    624: `371`,
    625: `372`,
    626: `373`,
    627: `374`,
    628: `377`,
    629: `377`,
    63: `20`,
    630: `378`,
    631: `378`,
    632: `379`,
    633: `380`,
    634: `381`,
    635: `382`,
    636: `382`,
    637: `383`,
    638: `384`,
    639: `384`,
    64: `20`,
    640: `385`,
    641: `385`,
    642: `386`,
    643: `386`,
    644: `387`,
    645: `388`,
    646: `389`,
    647: `389`,
    648: `390`,
    649: `391`,
    65: `22`,
    650: `392`,
    651: `393`,
    652: `393`,
    653: `394`,
    654: `395`,
    655: `396`,
    656: `398`,
    657: `399`,
    658: `400`,
    659: `401`,
    66: `24`,
    660: `402`,
    661: `402`,
    662: `403`,
    663: `404`,
    664: `405`,
    665: `406`,
    666: `408`,
    667: `408`,
    668: `409`,
    669: `410`,
    67: `24`,
    670: `410`,
    671: `411`,
    672: `413`,
    673: `413`,
    674: `414`,
    675: `414`,
    676: `415`,
    677: `416`,
    678: `417`,
    679: `417`,
    68: `24`,
    680: `417`,
    681: `418`,
    682: `418`,
    683: `418`,
    684: `420`,
    685: `421`,
    686: `422`,
    687: `423`,
    688: `423`,
    689: `423`,
    69: `25`,
    690: `424`,
    691: `424`,
    692: `425`,
    693: `425`,
    694: `425`,
    695: `426`,
    7: `2`,
    70: `25`,
    71: `27`,
    72: `28`,
    73: `29`,
    74: `30`,
    75: `30`,
    76: `31`,
    77: `32`,
    78: `33`,
    79: `33`,
    8: `2`,
    80: `35`,
    81: `36`,
    82: `36`,
    83: `37`,
    84: `38`,
    85: `40`,
    86: `41`,
    87: `41`,
    88: `41`,
    89: `42`,
    9: `2`,
    90: `42`,
    91: `43`,
    92: `43`,
    93: `44`,
    94: `45`,
    95: `45`,
    96: `46`,
    97: `46`,
    98: `47`,
    99: `48`,
  },
  appClear: `CA==`,
  appClearMap: {},
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 13,
  warnings: [],
};
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T7","name":"v810","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_A_claim0_52","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_admin_end0_52","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v571","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v652","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v801","type":"address"}],"name":"A_claim","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_A_claim0_52","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_admin_end0_52","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v813","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v807","type":"address"}],"name":"admin_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200100d9081380391601f1980601f85011683019360018060401b0392848610848711176200039857816060928692604098895283398101031262000393578351926200004e84620003ae565b8051845260208082015181860190815291860151946001600160a01b0391908287168703620003935787810196875260009283805543600355838980516200009681620003ae565b8281528151620000a681620003ae565b838152620000b3620003ca565b87820152620000c1620003ca565b8382015286820152015260049160ff8354166200037c577fbcb5f2f906a8f77f40e37f43863b415e6e6497c7bfad2598456ddd132e0e3db960808b5133815283518782015288518d820152848c51166060820152a15180159081156200036f575b5015620003585784513403620003415787518116845260058352888420805460ff19166001908117909155975181168452888420805462ff00001916905588519060a08201888111838210176200032e579084918b5260808301968688523384528a83850152338c850152436060850152518752620001a0620003ca565b9251169586835251910190815260038455438855885194838601525188850152878452620001ce84620003ae565b83519586116200031b57600254908782811c9216801562000310575b83831014620002fd5750601f8111620002b1575b508093601f861160011462000249575050918394918493946200023d575b50501b916000199060031b1c1916176002555b51610c189081620003f58239f35b0151925038806200021c565b600283528183209493928692918316915b888383106200029657505050106200027c575b505050811b016002556200022f565b015160001960f88460031b161c191690553880806200026d565b8587015188559096019594850194879350908101906200025a565b60028352818320601f870160051c810191838810620002f2575b601f0160051c019087905b828110620002e6575050620001fe565b848155018790620002d6565b9091508190620002cb565b634e487b7160e01b845260229052602483fd5b91607f1691620001ea565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b865260418452602486fd5b885163100960cb60e01b8152600981840152602490fd5b885163100960cb60e01b8152600881840152602490fd5b9050600154143862000122565b895163100960cb60e01b8152600781850152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176200039857604052565b60408051919082016001600160401b0381118382101762000398576040526000602083828152015256fe604060808152600436101561001a575b50361561001857005b005b600090813560e01c80631c0b4d2c146102fc5780631e93b0f1146102de57806336e56ea51461027b578063832307571461025d578063ab53f2c6146101f2578063ad5cae3b146100f65763c8cabac314610074575061000f565b60203660031901126100f25760206100ee926100e161009161036b565b61009961060e565b506100a2610659565b9283916100ad6106bc565b80516001600160a01b039092169091528581018051839052905181518701526100d46106eb565b9182525185820152610732565b01519051918291826103a6565b0390f35b5080fd5b509060803660031901126101ef5761010c610659565b91805161011881610420565b600435815260603660231901126101eb578151606081016001600160401b038111828210176101d757835260243560028110156101cb57815260203660431901126101d35782516101688161046c565b6001600160a01b039060443582811681036101cf578152602083015260206063193601126101cb5783519061019c8261046c565b60643590811681036101c7579181602097936101c19593528582015286820152610732565b51908152f35b8580fd5b8480fd5b8680fd5b8380fd5b634e487b7160e01b85526041600452602485fd5b8280fd5b80fd5b50346100f257816003193601126100f257815461020d6104a2565b91805193849283526020828185015284518093850152815b83811061024657505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610225565b50346100f257816003193601126100f2576020906001549051908152f35b50346100f25760203660031901126100f257600435916001600160a01b03831683036101ef57506102b66060926102b0610569565b50610588565b908080519280516102c681610386565b84526020810151151560208501520151151590820152f35b50346100f257816003193601126100f2576020906003549051908152f35b5060203660031901126100f2578060209261036061031861036b565b610320610659565b92839161032b6106bc565b80516001600160a01b03909216909152878101805160019052905181518701526103536106eb565b9182525187820152610732565b015115159051908152f35b600435906001600160a01b038216820361038157565b600080fd5b6002111561039057565b634e487b7160e01b600052602160045260246000fd5b91909160806020604060a084019580516103bf81610386565b85528280820151805182880152015115158286015201518051151560608501520151910152565b90600182811c92168015610416575b602083101461040057565b634e487b7160e01b600052602260045260246000fd5b91607f16916103f5565b604081019081106001600160401b0382111761043b57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761043b57604052565b602081019081106001600160401b0382111761043b57604052565b60a081019081106001600160401b0382111761043b57604052565b6040519060006002546104b4816103e6565b80855260019180831690811561054a57506001146104f2575b5050829003601f01601f191682016001600160401b0381118382101761043b57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b838510610536575050505083010138806104cd565b805488860183015293019284908201610521565b919250506020925060ff191682850152151560051b83010138806104cd565b6040519061057682610451565b60006040838281528260208201520152565b90610591610569565b9160018060a01b03166000908082526005602052600160ff6040842054166105b881610386565b03610603576040929350815260056020522060ff604051916105d983610451565b548181166105e681610386565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b6040519061061b82610451565b816000815260405161062c81610420565b60008152600060208201526020820152604080519161064a83610420565b60008352600060208401520152565b6040519061066682610451565b600060408382815261067661060e565b60208201520152565b6040519061068c82610451565b816000815260405161069d8161046c565b60008152602082015260408051916106b48361046c565b600083520152565b604051906106c982610420565b816040516106d68161046c565b60008152815260206106e661067f565b910152565b604051906106f882610420565b816000815260206106e661067f565b6040519061071482610487565b60006080838281528260208201528260408201528260608201520152565b6040805161073f81610487565b81519361074b8561046c565b600094858152825260209384830191868352848401855161076b81610420565b88815288888201528152606085019061078261060e565b8252608086019487516107948161046c565b8a8152865260038a5403610bdc576107aa6104a2565b948886805181010312610bd8578851976107c389610420565b868b01516001600160a01b0397908881168103610bd457908b918b520151978b8a0198895260049260ff845416610bbd57908c917f7ddeb17bd99afe6fdda3be41af66d2658d3af3704be047096eb6bfe66670679860a08e8c8151913383528551888401528786019782895191825161083b81610386565b8487015282015151166060850152015151166080820152a1518015908115610bb1575b5015610b9a57908c9181515161087381610386565b61087c81610386565b6109fb5750600192610897928a925101518091525116610588565b516108a181610386565b6108aa81610386565b036109e457346109cd575094899691948796948a6080958998899878151a1948155cd95c8810db185a5b5959081cdd58d8d9591959603a1b80915281515260018382510152888251525182825101527f5028f5a6f0f58689a6701d6125944269daa26407a926227caaa8c7fc8c36e85e61092b8d83519051918291826103a6565b0390a15191015261093a610707565b9251168252838983015233888301524360608301525191829101528181156109c4575b3390f1156109b95750818055816001556109786002546103e6565b8061098257505050565b601f8111600114610994575050600255565b600283528183206109b091601f0160051c810190600101610bf4565b81208160025555565b51913d9150823e3d90fd5b506108fc61095d565b602490600e8a519163100960cb60e01b8352820152fd5b602490600d8a519163100960cb60e01b8352820152fd5b96509a99979694505050905087515197610a1489610386565b610a1d89610386565b6001809914610a34575b5050505050505050505050565b518701518352845184163303610b835787610a528585515116610588565b51610a5c81610386565b610a6581610386565b03610b6c5734610b55575088948594859485948a8a6080967f1b1fe7aab852a9449593b520081375249854b4cdaa14f21fa10476ab50781a948f8351858152a1015281610ab0610707565b9351168352858c840152515116918289830152436060830152519283910152828215610b4c575bf115610b435750828055828155610aef6002546103e6565b80610b01575b80808080808080610a27565b601f8111600114610b1c575050506002555b38808080610af5565b610b379160028552601f848620920160051c82019101610bf4565b81208160025555610b13565b513d84823e3d90fd5b506108fc610ad7565b602490601188519163100960cb60e01b8352820152fd5b602490601088519163100960cb60e01b8352820152fd5b602490600f88519163100960cb60e01b8352820152fd5b8b5163100960cb60e01b8152600c81860152602490fd5b9050600154143861085e565b8b5163100960cb60e01b8152600b81860152602490fd5b8d80fd5b8a80fd5b875163100960cb60e01b8152600a6004820152602490fd5b818110610bff575050565b60008155600101610bf456fea164736f6c6343000811000a`,
  BytecodeLen: 4109,
  version: 9,
  views: {},
};
export const _stateSourceMap = {
  2: {
    at: "./algo.rsh:119:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./algo.rsh:75:60:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
};
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH,
};
export const _Participants = {
  A_claim: A_claim,
  Alice: Alice,
  admin_end: admin_end,
};
export const _APIs = {
  A: {
    claim: A_claim,
  },
  admin: {
    end: admin_end,
  },
};
