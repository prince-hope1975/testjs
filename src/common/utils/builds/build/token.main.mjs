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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(
    ctc4,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6,
  });
  const map0_ctc = ctc7;

  return {
    infos: {},
    views: {
      1: [ctc0, ctc1, ctc2, ctc0, ctc5],
      4: [ctc0, ctc1, ctc5, ctc2],
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
export async function _A_claim4(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _A_claim4 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _A_claim4 expects to receive an interact object as its second argument.`
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    A_claim0_61: ctc8,
    admin_end0_61: ctc8,
  });
  const ctc10 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc11 = stdlib.T_Object({
    message: ctc10,
    success: ctc5,
  });
  const ctc12 = stdlib.T_Object({
    errored: ctc5,
    message: ctc10,
  });
  const ctc13 = stdlib.T_Data({
    data: ctc11,
    error: ctc12,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const [v510, v511, v542, v543] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4"),
    [ctc2, ctc3, ctc7, ctc4]
  );
  const v548 = stdlib.protect(ctc8, await interact.in(), {
    at: "./token.rsh:1:23:application",
    fs: [
      "at ./token.rsh:107:32:application call to [unknown function] (defined at: ./token.rsh:107:32:function exp)",
      'at ./token.rsh:84:60:application call to "runA_claim0_61" (defined at: ./token.rsh:107:10:function exp)',
      "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
    ],
    msg: "in",
    who: "A_claim",
  });
  const v549 =
    v548[
      stdlib.checkedBigNumberify(
        "./token.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v551 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc2, v549, ctc0),
    null
  );
  const v552 = {
    None: 0,
    Some: 1,
  }[v551[0]];
  const v553 = stdlib.eq(
    v552,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v553, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./token.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./token.rsh:107:32:application call to [unknown function] (defined at: ./token.rsh:107:32:function exp)",
      'at ./token.rsh:84:60:application call to "runA_claim0_61" (defined at: ./token.rsh:107:10:function exp)',
      "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
    ],
    msg: "Forbidden",
    who: "A_claim",
  });
  const v560 = ["A_claim0_61", v548];

  const txn1 = await ctc.sendrecv({
    args: [v510, v511, v542, v543, v560],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify(
        "./token.rsh:111:9:decimal",
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
        data: [v595],
        secs: v597,
        time: v596,
        didSend: v364,
        from: v594,
      } = txn1;

      switch (v595[0]) {
        case "A_claim0_61": {
          const v598 = v595[1];
          sim_r.txns.push({
            kind: "api",
            who: "A_claim",
          });
          const v603 =
            v598[
              stdlib.checkedBigNumberify(
                "./token.rsh:107:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc2, v603, ctc0),
            null
          );
          const v623 = "The result succeded             ";
          const v624 = {
            message: v623,
            success: true,
          };
          const v625 = ["data", v624];
          const v626 = await txn1.getOutput("A_claim", "v625", ctc13, v625);

          const v897 =
            v542[
              stdlib.checkedBigNumberify(
                "./token.rsh:148:19:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v898 =
            v897[
              stdlib.checkedBigNumberify(
                "./token.rsh:148:19:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          sim_r.txns.push({
            kind: "from",
            to: v594,
            tok: v511,
          });
          sim_r.txns.push({
            kind: "from",
            to: v594,
            tok: undefined /* Nothing */,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: v511,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined /* Nothing */,
          });
          sim_r.isHalt = true;

          break;
        }
        case "admin_end0_61": {
          const v656 = v595[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v595],
    secs: v597,
    time: v596,
    didSend: v364,
    from: v594,
  } = txn1;
  switch (v595[0]) {
    case "A_claim0_61": {
      const v598 = v595[1];
      undefined /* setApiDetails */;
      const v603 =
        v598[
          stdlib.checkedBigNumberify(
            "./token.rsh:107:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v604 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc2, v603, ctc0),
        null
      );
      const v605 = {
        None: 0,
        Some: 1,
      }[v604[0]];
      const v606 = stdlib.eq(
        v605,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v606, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./token.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./token.rsh:107:32:application call to [unknown function] (defined at: ./token.rsh:107:32:function exp)",
          "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:107:32:function exp)",
          "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
        ],
        msg: "Forbidden",
        who: "A_claim",
      });
      const v623 = "The result succeded             ";
      const v624 = {
        message: v623,
        success: true,
      };
      const v625 = ["data", v624];
      const v626 = await txn1.getOutput("A_claim", "v625", ctc13, v625);
      if (v364) {
        stdlib.protect(ctc0, await interact.out(v598, v626), {
          at: "./token.rsh:107:11:application",
          fs: [
            "at ./token.rsh:107:11:application call to [unknown function] (defined at: ./token.rsh:107:11:function exp)",
            'at ./token.rsh:113:14:application call to "ret" (defined at: ./token.rsh:112:15:function exp)',
            "at ./token.rsh:112:15:application call to [unknown function] (defined at: ./token.rsh:112:15:function exp)",
          ],
          msg: "out",
          who: "A_claim",
        });
      } else {
      }

      const v897 =
        v542[
          stdlib.checkedBigNumberify(
            "./token.rsh:148:19:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v898 =
        v897[
          stdlib.checkedBigNumberify(
            "./token.rsh:148:19:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      return;

      break;
    }
    case "admin_end0_61": {
      const v656 = v595[1];
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
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    addr: ctc2,
    amt: ctc3,
    tok: ctc4,
  });
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Data({
    A_claim0_61: ctc6,
    admin_end0_61: ctc6,
  });
  const ctc8 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    message: ctc8,
    success: ctc9,
  });
  const ctc11 = stdlib.T_Object({
    errored: ctc9,
    message: ctc8,
  });
  const ctc12 = stdlib.T_Data({
    data: ctc10,
    error: ctc11,
  });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc9]);
  const ctc14 = stdlib.T_Array(
    ctc13,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
  });

  const v496 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false,
  ];
  const v497 = [v496];
  const v503 = stdlib.protect(ctc5, await interact.getInfo(), {
    at: "./token.rsh:47:61:application",
    fs: [
      "at ./token.rsh:46:9:application call to [unknown function] (defined at: ./token.rsh:46:13:function exp)",
    ],
    msg: "getInfo",
    who: "Alice",
  });
  const v504 = v503.addr;
  const v505 = v503.amt;
  const v506 = v503.tok;

  const txn1 = await ctc.sendrecv({
    args: [v506, v505, v504],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./token.rsh:50:5:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc2],
    pay: [
      stdlib.checkedBigNumberify(
        "./token.rsh:50:5:decimal",
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
        data: [v511, v512, v513],
        secs: v515,
        time: v514,
        didSend: v35,
        from: v510,
      } = txn1;

      const v516 =
        v497[
          stdlib.checkedBigNumberify(
            "./token.rsh:50:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v517 = stdlib.Array_set(
        v516,
        "0",
        stdlib.checkedBigNumberify("./token.rsh:50:5:dot", stdlib.UInt_max, "0")
      );
      const v518 = stdlib.Array_set(
        v497,
        stdlib.checkedBigNumberify(
          "./token.rsh:50:5:dot",
          stdlib.UInt_max,
          "0"
        ),
        v517
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v511,
      });
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc2],
    waitIfNotPresent: false,
  });
  const {
    data: [v511, v512, v513],
    secs: v515,
    time: v514,
    didSend: v35,
    from: v510,
  } = txn1;
  const v516 =
    v497[
      stdlib.checkedBigNumberify("./token.rsh:50:5:dot", stdlib.UInt_max, "0")
    ];
  const v517 = stdlib.Array_set(
    v516,
    "0",
    stdlib.checkedBigNumberify("./token.rsh:50:5:dot", stdlib.UInt_max, "0")
  );
  const v518 = stdlib.Array_set(
    v497,
    stdlib.checkedBigNumberify("./token.rsh:50:5:dot", stdlib.UInt_max, "0"),
    v517
  );
  const txn2 = await ctc.sendrecv({
    args: [v510, v511, v512, v513, v518],
    evt_cnt: 0,
    funcNum: 1,
    lct: v514,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify("./token.rsh:53:5:dot", stdlib.UInt_max, "0"),
      [[v512, v511]],
    ],
    sim_p: async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [],
        secs: v522,
        time: v521,
        didSend: v42,
        from: v520,
      } = txn2;

      const v523 =
        v518[
          stdlib.checkedBigNumberify(
            "./token.rsh:53:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v524 =
        v523[
          stdlib.checkedBigNumberify(
            "./token.rsh:53:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v525 = stdlib.add(v524, v512);
      const v527 = stdlib.Array_set(v523, "0", v525);
      const v528 = stdlib.Array_set(
        v518,
        stdlib.checkedBigNumberify(
          "./token.rsh:53:5:dot",
          stdlib.UInt_max,
          "0"
        ),
        v527
      );
      sim_r.txns.push({
        amt: v512,
        kind: "to",
        tok: v511,
      });
      const v530 = await ctc.getContractInfo();

      await stdlib.simMapSet(sim_r, 0, ctc2, v513, ctc0, null);
      const v533 = true;
      const v535 = v510;
      const v536 = v521;
      const v542 = v528;
      const v543 = stdlib.checkedBigNumberify(
        "./token.rsh:44:9:after expr stmt semicolon",
        stdlib.UInt_max,
        "0"
      );

      if (
        await (async () => {
          return v533;
        })()
      ) {
        sim_r.isHalt = false;
      } else {
        const v714 =
          v542[
            stdlib.checkedBigNumberify(
              "./token.rsh:148:19:application",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v715 =
          v714[
            stdlib.checkedBigNumberify(
              "./token.rsh:148:19:application",
              stdlib.UInt_max,
              "0"
            )
          ];
        sim_r.txns.push({
          kind: "from",
          to: v535,
          tok: v511,
        });
        sim_r.txns.push({
          kind: "from",
          to: v535,
          tok: undefined /* Nothing */,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: v511,
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
    tys: [ctc2, ctc4, ctc3, ctc2, ctc14],
    waitIfNotPresent: false,
  });
  const {
    data: [],
    secs: v522,
    time: v521,
    didSend: v42,
    from: v520,
  } = txn2;
  const v523 =
    v518[
      stdlib.checkedBigNumberify("./token.rsh:53:5:dot", stdlib.UInt_max, "0")
    ];
  const v524 =
    v523[
      stdlib.checkedBigNumberify("./token.rsh:53:5:dot", stdlib.UInt_max, "0")
    ];
  const v525 = stdlib.add(v524, v512);
  const v527 = stdlib.Array_set(v523, "0", v525);
  const v528 = stdlib.Array_set(
    v518,
    stdlib.checkedBigNumberify("./token.rsh:53:5:dot", stdlib.UInt_max, "0"),
    v527
  );
  const v529 = stdlib.addressEq(v510, v520);
  stdlib.assert(v529, {
    at: "./token.rsh:53:5:dot",
    fs: [],
    msg: "sender correct",
    who: "Alice",
  });
  const v530 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.contractInfo(v530), {
    at: "./token.rsh:54:26:application",
    fs: [
      "at ./token.rsh:54:26:application call to [unknown function] (defined at: ./token.rsh:54:26:function exp)",
      'at ./token.rsh:54:26:application call to "liftedInteract" (defined at: ./token.rsh:54:26:application)',
    ],
    msg: "contractInfo",
    who: "Alice",
  });

  await stdlib.mapSet(map0, ctc2, v513, ctc0, null);
  let v533 = true;
  let v535 = v510;
  let v536 = v521;
  let v542 = v528;
  let v543 = stdlib.checkedBigNumberify(
    "./token.rsh:44:9:after expr stmt semicolon",
    stdlib.UInt_max,
    "0"
  );

  let txn3 = txn2;
  while (
    await (async () => {
      return v533;
    })()
  ) {
    const txn4 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v595],
      secs: v597,
      time: v596,
      didSend: v364,
      from: v594,
    } = txn4;
    switch (v595[0]) {
      case "A_claim0_61": {
        const v598 = v595[1];
        undefined /* setApiDetails */;
        const v603 =
          v598[
            stdlib.checkedBigNumberify(
              "./token.rsh:107:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v604 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc2, v603, ctc0),
          null
        );
        const v605 = {
          None: 0,
          Some: 1,
        }[v604[0]];
        const v606 = stdlib.eq(
          v605,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v606, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./token.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./token.rsh:107:32:application call to [unknown function] (defined at: ./token.rsh:107:32:function exp)",
            "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:107:32:function exp)",
            "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
          ],
          msg: "Forbidden",
          who: "Alice",
        });
        const v623 = "The result succeded             ";
        const v624 = {
          message: v623,
          success: true,
        };
        const v625 = ["data", v624];
        await txn4.getOutput("A_claim", "v625", ctc12, v625);
        const cv533 = false;
        const cv535 = v594;
        const cv536 = v596;
        const cv542 = v542;
        const cv543 = v543;

        v533 = cv533;
        v535 = cv535;
        v536 = cv536;
        v542 = cv542;
        v543 = cv543;

        txn3 = txn4;
        continue;
        break;
      }
      case "admin_end0_61": {
        const v656 = v595[1];
        undefined /* setApiDetails */;
        const v667 =
          v656[
            stdlib.checkedBigNumberify(
              "./token.rsh:124:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v668 = stdlib.addressEq(v594, v510);
        stdlib.assert(v668, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./token.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./token.rsh:124:32:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
            "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
            "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
          ],
          msg: "You are not the admin",
          who: "Alice",
        });
        const v670 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc2, v667, ctc0),
          null
        );
        const v671 = {
          None: 0,
          Some: 1,
        }[v670[0]];
        const v672 = stdlib.eq(
          v671,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v672, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./token.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./token.rsh:124:32:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
            "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
            "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
          ],
          msg: "Forbidden",
          who: "Alice",
        });
        const v706 = true;
        await txn4.getOutput("admin_end", "v706", ctc9, v706);
        const cv533 = false;
        const cv535 = v667;
        const cv536 = v596;
        const cv542 = v542;
        const cv543 = v543;

        v533 = cv533;
        v535 = cv535;
        v536 = cv536;
        v542 = cv542;
        v543 = cv543;

        txn3 = txn4;
        continue;
        break;
      }
    }
  }
  const v714 =
    v542[
      stdlib.checkedBigNumberify(
        "./token.rsh:148:19:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v715 =
    v714[
      stdlib.checkedBigNumberify(
        "./token.rsh:148:19:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  return;
}
export async function _admin_end4(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _admin_end4 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _admin_end4 expects to receive an interact object as its second argument.`
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    A_claim0_61: ctc8,
    admin_end0_61: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const [v510, v511, v542, v543] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4"),
    [ctc2, ctc3, ctc7, ctc4]
  );
  const v562 = ctc.selfAddress();
  const v564 = stdlib.protect(ctc8, await interact.in(), {
    at: "./token.rsh:1:23:application",
    fs: [
      "at ./token.rsh:124:32:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
      'at ./token.rsh:84:60:application call to "runadmin_end0_61" (defined at: ./token.rsh:124:10:function exp)',
      "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
    ],
    msg: "in",
    who: "admin_end",
  });
  const v565 =
    v564[
      stdlib.checkedBigNumberify(
        "./token.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v567 = stdlib.addressEq(v562, v510);
  stdlib.assert(v567, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./token.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./token.rsh:124:32:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
      'at ./token.rsh:84:60:application call to "runadmin_end0_61" (defined at: ./token.rsh:124:10:function exp)',
      "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
    ],
    msg: "You are not the admin",
    who: "admin_end",
  });
  const v569 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc2, v565, ctc0),
    null
  );
  const v570 = {
    None: 0,
    Some: 1,
  }[v569[0]];
  const v571 = stdlib.eq(
    v570,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v571, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./token.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./token.rsh:124:32:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
      'at ./token.rsh:84:60:application call to "runadmin_end0_61" (defined at: ./token.rsh:124:10:function exp)',
      "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
    ],
    msg: "Forbidden",
    who: "admin_end",
  });
  const v578 = ["admin_end0_61", v564];

  const txn1 = await ctc.sendrecv({
    args: [v510, v511, v542, v543, v578],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify(
        "./token.rsh:129:9:decimal",
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
        data: [v595],
        secs: v597,
        time: v596,
        didSend: v364,
        from: v594,
      } = txn1;

      switch (v595[0]) {
        case "A_claim0_61": {
          const v598 = v595[1];

          break;
        }
        case "admin_end0_61": {
          const v656 = v595[1];
          sim_r.txns.push({
            kind: "api",
            who: "admin_end",
          });
          const v667 =
            v656[
              stdlib.checkedBigNumberify(
                "./token.rsh:124:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc2, v667, ctc0),
            null
          );
          const v706 = true;
          const v707 = await txn1.getOutput("admin_end", "v706", ctc5, v706);

          const v918 =
            v542[
              stdlib.checkedBigNumberify(
                "./token.rsh:148:19:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v919 =
            v918[
              stdlib.checkedBigNumberify(
                "./token.rsh:148:19:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          sim_r.txns.push({
            kind: "from",
            to: v667,
            tok: v511,
          });
          sim_r.txns.push({
            kind: "from",
            to: v667,
            tok: undefined /* Nothing */,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: v511,
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
    tys: [ctc2, ctc3, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v595],
    secs: v597,
    time: v596,
    didSend: v364,
    from: v594,
  } = txn1;
  switch (v595[0]) {
    case "A_claim0_61": {
      const v598 = v595[1];
      return;
      break;
    }
    case "admin_end0_61": {
      const v656 = v595[1];
      undefined /* setApiDetails */;
      const v667 =
        v656[
          stdlib.checkedBigNumberify(
            "./token.rsh:124:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v668 = stdlib.addressEq(v594, v510);
      stdlib.assert(v668, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./token.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./token.rsh:124:32:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
          "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
          "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
        ],
        msg: "You are not the admin",
        who: "admin_end",
      });
      const v670 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc2, v667, ctc0),
        null
      );
      const v671 = {
        None: 0,
        Some: 1,
      }[v670[0]];
      const v672 = stdlib.eq(
        v671,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v672, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./token.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./token.rsh:124:32:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
          "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:124:32:function exp)",
          "at ./token.rsh:84:60:application call to [unknown function] (defined at: ./token.rsh:84:60:function exp)",
        ],
        msg: "Forbidden",
        who: "admin_end",
      });
      const v706 = true;
      const v707 = await txn1.getOutput("admin_end", "v706", ctc5, v706);
      if (v364) {
        stdlib.protect(ctc0, await interact.out(v656, v707), {
          at: "./token.rsh:124:11:application",
          fs: [
            "at ./token.rsh:124:11:application call to [unknown function] (defined at: ./token.rsh:124:11:function exp)",
            'at ./token.rsh:132:14:application call to "ret" (defined at: ./token.rsh:130:15:function exp)',
            "at ./token.rsh:130:15:application call to [unknown function] (defined at: ./token.rsh:130:15:function exp)",
          ],
          msg: "out",
          who: "admin_end",
        });
      } else {
      }

      const v918 =
        v542[
          stdlib.checkedBigNumberify(
            "./token.rsh:148:19:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v919 =
        v918[
          stdlib.checkedBigNumberify(
            "./token.rsh:148:19:application",
            stdlib.UInt_max,
            "0"
          )
        ];
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
  if (step == 4) {
    return _A_claim4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4")],
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
  if (step == 4) {
    return _admin_end4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
const _ALGO = {
  ABI: {
    impure: [
      `A_claim(address)(byte,byte[33])`,
      `_reachp_0((uint64,uint64,uint64,address))void`,
      `_reachp_1((uint64))void`,
      `_reachp_3((uint64,(byte,byte[32])))void`,
      `admin_end(address)byte`,
    ],
    pure: [],
    sigs: [
      `A_claim(address)(byte,byte[33])`,
      `_reachp_0((uint64,uint64,uint64,address))void`,
      `_reachp_1((uint64))void`,
      `_reachp_3((uint64,(byte,byte[32])))void`,
      `admin_end(address)byte`,
    ],
  },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAEIBCCgjQYmAgABADEYQQKtKGRJIls1ASRbNQIpZIIFBCfv3mwEZ4RtkgR755WQBJoOa/YE39kjKDYaAI4FAmMAAQJIAm4CWAA2GgE1CySvKTQLUFA1CyU0ARJESVcAIDUUSSEEWzUTSVcoETUPgTlbNQ40CyJbNQw0C1cIITUNgATqK0zTNAwWUDQNULA0DIgC5zQNIlWNAgKlAklC/6goKCk0DVcBIFCIAvIiVSMSRIAiAFRoZSByZXN1bHQgc3VjY2VkZWQAAAAAAAAAAAAAAAAAATULgAgAAAAAAAACcTQLULA0CzUEIjEAMgY1EDURNRI0EkEB8DQUNBMWUDQPUDQOFlAyA1AlMgY1AjUBKUxXAGFnKDQBFjQCFlBnMRkiEkSIAms0A0AACoAEFR98dTQEULAjQzQNVwEgNQwxADQUEkQoKCk0DFCIAlAiVSMSRCM1C4AIAAAAAAAAAsI0CxZRBwhQsDQLFlEHCDUEIjQMMgY1EDURNRJC/3Ykr4ABATQLUFA1C0L+yzEANRQ0CyJbNQw0CyRbNRM0C4EQWzUWNAtXGCA1FYAEv7SJbTQMFlA0ExZQNBYWUDQVULA0DIgBtYERr0k1C0lXABEkr1wAXAA1DSEFiAGoIjQTMgqIAao0FDQTFlA0FhZQNBVQNA1QIzIGQv8SIzQBEkRJVwAgNRRJIQRbNRNJgShbNRZJVzAgNRVXUBE1DTQLFzUMgATVFRkUNAwWULA0DIgBSTQNVwARNQs0FjQTMRY0ACMISTUACUcDOBQyChJEOBAlEkQ4EU8CEkQ4EhJENBQxABJEgdR6KTQVUCiIATsjNBQyBjQNNAtJIls0FggWXABcACI1DjUPNRA1ETUSQv5kiADjIQWIAOw2GgE1C0L+7IgA0zYaATULQv9PiADINhoBNQtC/aE2GgE1C0L+wCIxNBJEgQIxNRJEIjE2EkQiMTcSRIgAoIFhryIiQv4uMRkiEkRC/kZC/k80D1cAESJbNBM0EYgAlzQONBGIAIwiNBMyCjIJiACvMRmBBRJEiACBMgpgMgp4CUk1BjIKiABqQv4ESEy/SIkisgEjshCyB7IIs4kisgElshCyFLIRshKziUL9W0iJTAlJNQYyCYgAOYkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIkjNQOJSSISTDQCEhFEiTQGCDUGibFC/5qxQv+iNAY0B0oPQf+sQv+0vkkWUQcIRQRNUIlMSb1A/3RLA4j/0EL/bLGyFUL/dw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `42`,
    101: `42`,
    102: `43`,
    103: `44`,
    104: `44`,
    105: `45`,
    106: `46`,
    107: `46`,
    108: `47`,
    109: `48`,
    11: `2`,
    110: `48`,
    111: `48`,
    112: `49`,
    113: `49`,
    114: `50`,
    115: `50`,
    116: `51`,
    117: `52`,
    118: `52`,
    119: `53`,
    12: `2`,
    120: `53`,
    121: `54`,
    122: `55`,
    123: `56`,
    124: `56`,
    125: `57`,
    126: `57`,
    127: `58`,
    128: `58`,
    129: `58`,
    13: `2`,
    130: `59`,
    131: `59`,
    132: `60`,
    133: `60`,
    134: `60`,
    135: `60`,
    136: `60`,
    137: `60`,
    138: `61`,
    139: `61`,
    14: `2`,
    140: `62`,
    141: `63`,
    142: `64`,
    143: `64`,
    144: `65`,
    145: `66`,
    146: `68`,
    147: `68`,
    148: `69`,
    149: `69`,
    15: `2`,
    150: `69`,
    151: `70`,
    152: `70`,
    153: `71`,
    154: `72`,
    155: `73`,
    156: `73`,
    157: `73`,
    158: `73`,
    159: `73`,
    16: `4`,
    160: `73`,
    161: `74`,
    162: `74`,
    163: `74`,
    164: `77`,
    165: `78`,
    166: `79`,
    167: `80`,
    168: `80`,
    169: `81`,
    17: `4`,
    170: `81`,
    171: `81`,
    172: `82`,
    173: `83`,
    174: `83`,
    175: `83`,
    176: `84`,
    177: `85`,
    178: `86`,
    179: `87`,
    18: `5`,
    180: `88`,
    181: `95`,
    182: `95`,
    183: `95`,
    184: `95`,
    185: `95`,
    186: `95`,
    187: `95`,
    188: `95`,
    189: `95`,
    19: `5`,
    190: `95`,
    191: `95`,
    192: `95`,
    193: `95`,
    194: `95`,
    195: `95`,
    196: `95`,
    197: `95`,
    198: `95`,
    199: `95`,
    2: `2`,
    20: `5`,
    200: `95`,
    201: `95`,
    202: `95`,
    203: `95`,
    204: `95`,
    205: `95`,
    206: `95`,
    207: `95`,
    208: `95`,
    209: `95`,
    21: `6`,
    210: `95`,
    211: `95`,
    212: `95`,
    213: `95`,
    214: `95`,
    215: `95`,
    216: `95`,
    217: `96`,
    218: `96`,
    219: `97`,
    22: `7`,
    220: `97`,
    221: `97`,
    222: `97`,
    223: `97`,
    224: `97`,
    225: `97`,
    226: `97`,
    227: `97`,
    228: `97`,
    229: `98`,
    23: `8`,
    230: `98`,
    231: `99`,
    232: `100`,
    233: `101`,
    234: `101`,
    235: `102`,
    236: `102`,
    237: `103`,
    238: `104`,
    239: `104`,
    24: `9`,
    240: `105`,
    241: `105`,
    242: `106`,
    243: `106`,
    244: `107`,
    245: `107`,
    246: `108`,
    247: `108`,
    248: `110`,
    249: `110`,
    25: `10`,
    250: `111`,
    251: `111`,
    252: `111`,
    253: `113`,
    254: `113`,
    255: `114`,
    256: `114`,
    257: `115`,
    258: `116`,
    259: `117`,
    26: `11`,
    260: `117`,
    261: `118`,
    262: `119`,
    263: `119`,
    264: `120`,
    265: `121`,
    266: `122`,
    267: `122`,
    268: `123`,
    269: `124`,
    27: `11`,
    270: `125`,
    271: `125`,
    272: `127`,
    273: `127`,
    274: `128`,
    275: `128`,
    276: `129`,
    277: `130`,
    278: `131`,
    279: `131`,
    28: `12`,
    280: `131`,
    281: `132`,
    282: `133`,
    283: `134`,
    284: `134`,
    285: `135`,
    286: `136`,
    287: `136`,
    288: `137`,
    289: `138`,
    29: `13`,
    290: `139`,
    291: `140`,
    292: `140`,
    293: `141`,
    294: `142`,
    295: `143`,
    296: `145`,
    297: `145`,
    298: `145`,
    299: `147`,
    3: `2`,
    30: `14`,
    300: `147`,
    301: `148`,
    302: `148`,
    303: `148`,
    304: `150`,
    305: `150`,
    306: `150`,
    307: `150`,
    308: `150`,
    309: `150`,
    31: `14`,
    310: `151`,
    311: `151`,
    312: `152`,
    313: `153`,
    314: `155`,
    315: `156`,
    316: `158`,
    317: `158`,
    318: `159`,
    319: `159`,
    32: `15`,
    320: `159`,
    321: `160`,
    322: `160`,
    323: `161`,
    324: `161`,
    325: `162`,
    326: `162`,
    327: `163`,
    328: `164`,
    329: `172`,
    33: `16`,
    330: `173`,
    331: `174`,
    332: `175`,
    333: `175`,
    334: `176`,
    335: `177`,
    336: `177`,
    337: `177`,
    338: `178`,
    339: `179`,
    34: `18`,
    340: `180`,
    341: `181`,
    342: `182`,
    343: `189`,
    344: `190`,
    345: `190`,
    346: `191`,
    347: `191`,
    348: `191`,
    349: `191`,
    35: `18`,
    350: `191`,
    351: `191`,
    352: `191`,
    353: `191`,
    354: `191`,
    355: `191`,
    356: `192`,
    357: `192`,
    358: `193`,
    359: `194`,
    36: `18`,
    360: `194`,
    361: `194`,
    362: `195`,
    363: `196`,
    364: `197`,
    365: `197`,
    366: `198`,
    367: `199`,
    368: `199`,
    369: `199`,
    37: `18`,
    370: `200`,
    371: `200`,
    372: `201`,
    373: `202`,
    374: `202`,
    375: `203`,
    376: `203`,
    377: `204`,
    378: `204`,
    379: `205`,
    38: `18`,
    380: `205`,
    381: `206`,
    382: `206`,
    383: `207`,
    384: `207`,
    385: `207`,
    386: `209`,
    387: `210`,
    388: `211`,
    389: `211`,
    39: `18`,
    390: `211`,
    391: `212`,
    392: `212`,
    393: `213`,
    394: `214`,
    395: `215`,
    396: `215`,
    397: `216`,
    398: `216`,
    399: `216`,
    4: `2`,
    40: `18`,
    400: `218`,
    401: `218`,
    402: `219`,
    403: `219`,
    404: `220`,
    405: `220`,
    406: `221`,
    407: `222`,
    408: `223`,
    409: `223`,
    41: `18`,
    410: `224`,
    411: `224`,
    412: `225`,
    413: `226`,
    414: `227`,
    415: `227`,
    416: `228`,
    417: `228`,
    418: `229`,
    419: `229`,
    42: `18`,
    420: `230`,
    421: `231`,
    422: `231`,
    423: `232`,
    424: `232`,
    425: `233`,
    426: `233`,
    427: `233`,
    428: `234`,
    429: `234`,
    43: `18`,
    430: `235`,
    431: `235`,
    432: `235`,
    433: `235`,
    434: `235`,
    435: `235`,
    436: `236`,
    437: `236`,
    438: `237`,
    439: `238`,
    44: `18`,
    440: `239`,
    441: `239`,
    442: `240`,
    443: `241`,
    444: `242`,
    445: `242`,
    446: `243`,
    447: `244`,
    448: `245`,
    449: `245`,
    45: `18`,
    450: `246`,
    451: `247`,
    452: `249`,
    453: `249`,
    454: `250`,
    455: `250`,
    456: `250`,
    457: `251`,
    458: `251`,
    459: `252`,
    46: `18`,
    460: `253`,
    461: `254`,
    462: `254`,
    463: `255`,
    464: `256`,
    465: `256`,
    466: `256`,
    467: `257`,
    468: `258`,
    469: `259`,
    47: `18`,
    470: `259`,
    471: `260`,
    472: `260`,
    473: `261`,
    474: `261`,
    475: `262`,
    476: `262`,
    477: `263`,
    478: `263`,
    479: `263`,
    48: `18`,
    480: `264`,
    481: `266`,
    482: `266`,
    483: `267`,
    484: `267`,
    485: `268`,
    486: `268`,
    487: `268`,
    488: `270`,
    489: `270`,
    49: `18`,
    490: `271`,
    491: `271`,
    492: `272`,
    493: `273`,
    494: `274`,
    495: `274`,
    496: `275`,
    497: `276`,
    498: `277`,
    499: `277`,
    5: `2`,
    50: `18`,
    500: `278`,
    501: `279`,
    502: `279`,
    503: `280`,
    504: `281`,
    505: `282`,
    506: `282`,
    507: `283`,
    508: `283`,
    509: `283`,
    51: `18`,
    510: `285`,
    511: `286`,
    512: `286`,
    513: `287`,
    514: `288`,
    515: `290`,
    516: `291`,
    517: `291`,
    518: `291`,
    519: `292`,
    52: `18`,
    520: `292`,
    521: `293`,
    522: `294`,
    523: `294`,
    524: `295`,
    525: `296`,
    526: `296`,
    527: `297`,
    528: `298`,
    529: `298`,
    53: `18`,
    530: `299`,
    531: `300`,
    532: `300`,
    533: `301`,
    534: `302`,
    535: `302`,
    536: `302`,
    537: `303`,
    538: `303`,
    539: `304`,
    54: `18`,
    540: `304`,
    541: `304`,
    542: `305`,
    543: `305`,
    544: `306`,
    545: `306`,
    546: `307`,
    547: `308`,
    548: `308`,
    549: `309`,
    55: `18`,
    550: `309`,
    551: `309`,
    552: `309`,
    553: `309`,
    554: `309`,
    555: `310`,
    556: `310`,
    557: `311`,
    558: `312`,
    559: `313`,
    56: `18`,
    560: `315`,
    561: `315`,
    562: `316`,
    563: `316`,
    564: `316`,
    565: `317`,
    566: `317`,
    567: `318`,
    568: `318`,
    569: `318`,
    57: `18`,
    570: `319`,
    571: `319`,
    572: `320`,
    573: `320`,
    574: `321`,
    575: `321`,
    576: `324`,
    577: `324`,
    578: `325`,
    579: `325`,
    58: `18`,
    580: `326`,
    581: `327`,
    582: `328`,
    583: `329`,
    584: `329`,
    585: `330`,
    586: `331`,
    587: `331`,
    588: `332`,
    589: `332`,
    59: `18`,
    590: `333`,
    591: `333`,
    592: `334`,
    593: `335`,
    594: `336`,
    595: `336`,
    596: `337`,
    597: `338`,
    598: `339`,
    599: `340`,
    6: `2`,
    60: `18`,
    600: `340`,
    601: `341`,
    602: `341`,
    603: `342`,
    604: `343`,
    605: `344`,
    606: `344`,
    607: `345`,
    608: `346`,
    609: `349`,
    61: `19`,
    610: `349`,
    611: `350`,
    612: `350`,
    613: `351`,
    614: `352`,
    615: `356`,
    616: `356`,
    617: `356`,
    618: `357`,
    619: `358`,
    62: `19`,
    620: `358`,
    621: `359`,
    622: `360`,
    623: `361`,
    624: `361`,
    625: `361`,
    626: `362`,
    627: `363`,
    628: `363`,
    629: `364`,
    63: `19`,
    630: `364`,
    631: `365`,
    632: `365`,
    633: `366`,
    634: `366`,
    635: `367`,
    636: `368`,
    637: `369`,
    638: `370`,
    639: `370`,
    64: `20`,
    640: `371`,
    641: `372`,
    642: `373`,
    643: `373`,
    644: `374`,
    645: `374`,
    646: `375`,
    647: `376`,
    648: `376`,
    649: `377`,
    65: `20`,
    650: `377`,
    651: `378`,
    652: `378`,
    653: `379`,
    654: `379`,
    655: `380`,
    656: `380`,
    657: `381`,
    658: `381`,
    659: `381`,
    66: `20`,
    660: `383`,
    661: `383`,
    662: `383`,
    663: `384`,
    664: `384`,
    665: `385`,
    666: `385`,
    667: `385`,
    668: `386`,
    669: `386`,
    67: `20`,
    670: `386`,
    671: `387`,
    672: `387`,
    673: `388`,
    674: `388`,
    675: `388`,
    676: `390`,
    677: `390`,
    678: `390`,
    679: `391`,
    68: `20`,
    680: `391`,
    681: `391`,
    682: `392`,
    683: `392`,
    684: `393`,
    685: `393`,
    686: `393`,
    687: `395`,
    688: `395`,
    689: `395`,
    69: `20`,
    690: `396`,
    691: `396`,
    692: `396`,
    693: `397`,
    694: `397`,
    695: `398`,
    696: `398`,
    697: `398`,
    698: `400`,
    699: `400`,
    7: `2`,
    70: `20`,
    700: `400`,
    701: `401`,
    702: `401`,
    703: `402`,
    704: `402`,
    705: `402`,
    706: `404`,
    707: `405`,
    708: `405`,
    709: `406`,
    71: `20`,
    710: `407`,
    711: `408`,
    712: `408`,
    713: `409`,
    714: `409`,
    715: `410`,
    716: `411`,
    717: `412`,
    718: `413`,
    719: `413`,
    72: `20`,
    720: `414`,
    721: `415`,
    722: `416`,
    723: `417`,
    724: `417`,
    725: `418`,
    726: `419`,
    727: `420`,
    728: `420`,
    729: `420`,
    73: `20`,
    730: `421`,
    731: `421`,
    732: `422`,
    733: `423`,
    734: `424`,
    735: `425`,
    736: `425`,
    737: `425`,
    738: `427`,
    739: `427`,
    74: `20`,
    740: `428`,
    741: `429`,
    742: `430`,
    743: `432`,
    744: `432`,
    745: `432`,
    746: `434`,
    747: `434`,
    748: `434`,
    749: `436`,
    75: `20`,
    750: `436`,
    751: `437`,
    752: `437`,
    753: `437`,
    754: `438`,
    755: `439`,
    756: `441`,
    757: `441`,
    758: `443`,
    759: `443`,
    76: `22`,
    760: `444`,
    761: `444`,
    762: `444`,
    763: `445`,
    764: `445`,
    765: `446`,
    766: `446`,
    767: `447`,
    768: `447`,
    769: `447`,
    77: `24`,
    770: `449`,
    771: `450`,
    772: `450`,
    773: `451`,
    774: `451`,
    775: `452`,
    776: `452`,
    777: `453`,
    778: `453`,
    779: `453`,
    78: `24`,
    780: `455`,
    781: `455`,
    782: `456`,
    783: `456`,
    784: `457`,
    785: `458`,
    786: `460`,
    787: `460`,
    788: `460`,
    789: `462`,
    79: `24`,
    790: `462`,
    791: `463`,
    792: `464`,
    793: `464`,
    794: `465`,
    795: `466`,
    796: `468`,
    797: `469`,
    798: `469`,
    799: `470`,
    8: `2`,
    80: `25`,
    800: `470`,
    801: `471`,
    802: `471`,
    803: `471`,
    804: `472`,
    805: `472`,
    806: `472`,
    807: `474`,
    808: `475`,
    809: `476`,
    81: `25`,
    810: `477`,
    811: `478`,
    812: `480`,
    813: `481`,
    814: `481`,
    815: `482`,
    816: `483`,
    817: `483`,
    818: `484`,
    819: `484`,
    82: `27`,
    820: `485`,
    821: `485`,
    822: `486`,
    823: `487`,
    824: `489`,
    825: `490`,
    826: `490`,
    827: `491`,
    828: `492`,
    829: `492`,
    83: `28`,
    830: `493`,
    831: `493`,
    832: `494`,
    833: `494`,
    834: `495`,
    835: `495`,
    836: `496`,
    837: `497`,
    838: `499`,
    839: `499`,
    84: `29`,
    840: `499`,
    841: `501`,
    842: `502`,
    843: `504`,
    844: `505`,
    845: `506`,
    846: `507`,
    847: `507`,
    848: `508`,
    849: `508`,
    85: `30`,
    850: `509`,
    851: `509`,
    852: `509`,
    853: `510`,
    854: `512`,
    855: `513`,
    856: `514`,
    857: `514`,
    858: `514`,
    859: `515`,
    86: `30`,
    860: `516`,
    861: `516`,
    862: `519`,
    863: `519`,
    864: `520`,
    865: `520`,
    866: `521`,
    867: `522`,
    868: `523`,
    869: `524`,
    87: `31`,
    870: `524`,
    871: `525`,
    872: `526`,
    873: `526`,
    874: `527`,
    875: `527`,
    876: `528`,
    877: `528`,
    878: `529`,
    879: `530`,
    88: `32`,
    880: `531`,
    881: `531`,
    882: `532`,
    883: `533`,
    884: `534`,
    885: `535`,
    886: `535`,
    887: `536`,
    888: `537`,
    889: `538`,
    89: `33`,
    890: `540`,
    891: `541`,
    892: `541`,
    893: `542`,
    894: `544`,
    895: `545`,
    896: `546`,
    897: `547`,
    898: `548`,
    899: `548`,
    9: `2`,
    90: `33`,
    900: `549`,
    901: `550`,
    902: `551`,
    903: `552`,
    904: `554`,
    905: `554`,
    906: `555`,
    907: `556`,
    908: `556`,
    909: `557`,
    91: `35`,
    910: `559`,
    911: `560`,
    912: `560`,
    913: `560`,
    914: `562`,
    915: `563`,
    916: `563`,
    917: `563`,
    918: `565`,
    919: `565`,
    92: `36`,
    920: `566`,
    921: `566`,
    922: `567`,
    923: `568`,
    924: `569`,
    925: `569`,
    926: `569`,
    927: `570`,
    928: `570`,
    929: `570`,
    93: `36`,
    930: `572`,
    931: `573`,
    932: `574`,
    933: `575`,
    934: `575`,
    935: `575`,
    936: `576`,
    937: `576`,
    938: `577`,
    939: `578`,
    94: `37`,
    940: `579`,
    941: `581`,
    942: `582`,
    943: `583`,
    944: `584`,
    945: `584`,
    946: `584`,
    947: `585`,
    948: `585`,
    949: `586`,
    95: `38`,
    950: `586`,
    951: `586`,
    952: `587`,
    953: `587`,
    954: `587`,
    955: `589`,
    956: `590`,
    957: `590`,
    958: `591`,
    96: `40`,
    97: `41`,
    98: `41`,
    99: `41`,
  },
  appClear: `CA==`,
  appClearMap: {},
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 13,
  warnings: [],
};
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T7","name":"v934","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_A_claim0_61","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_admin_end0_61","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v625","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v706","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v925","type":"address"}],"name":"A_claim","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"bool","name":"_success","type":"bool"}],"internalType":"struct T1","name":"_data","type":"tuple"},{"components":[{"internalType":"bool","name":"_errored","type":"bool"},{"internalType":"bytes32","name":"_message","type":"bytes32"}],"internalType":"struct T2","name":"_error","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v937","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_A_claim0_61","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_admin_end0_61","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v940","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v931","type":"address"}],"name":"admin_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f1962001ce538819003601f810192909216830192916001600160401b039183851083861117620004e5578160809285926040978852833981010312620004fb578251916080830183811083821117620004e557845280518352836020936200006d85840162000538565b8582019081526200008b606084860151958585019687520162000538565b9160608101928352436003558351620000a48162000500565b60009481868093528151620000b98162000500565b8381528251620000c9816200051c565b848152848c8201528b8201528251620000e2816200051c565b848152848c820152838201528a820152015287519462000102866200051c565b6200010c6200054d565b8652620001186200056e565b9588810196875260ff60045416620004cd57895133815283518a82015284516001600160a01b03908116828d01528351606083015286518116608083015293907f143bd7eb5dd759258158818958ac9cd9e010274ba04900f209594407b18e6cdd9060a090a1518015908115620004c0575b5015620004a85785815152858982510152858a825101525186515234620004905788519360a08501858110898211176200047c578a5285855288850196868852838b87019288845260608801948986528260808a0198620001ea6200056e565b8a52338b5251168b52518452511683525180518b8b82015191015115158c5191620002158362000500565b8983528c8301528c8201526200022a6200056e565b91885b600181106200042e5750508152845260018087554381558a51955184168a87015296518316858b0152516060850152511660808301525182848760a085015b8284106200040457505050505060e08152610100810181811085821117620003f05786528051938411620003dc576002548381811c91168015620003d1575b86821014620003bd57601f811162000371575b508491601f851160011462000308579394508492919083620002fc575b50501b916000199060031b1c1916176002555b516117079081620005de8239f35b015192503880620002db565b6002815285812093958591601f198316915b888383106200035657505050106200033c575b505050811b01600255620002ee565b015160001960f88460031b161c191690553880806200032d565b8587015188559096019594850194879350908101906200031a565b60028352858320601f860160051c810191878710620003b2575b601f0160051c019084905b828110620003a6575050620002be565b84815501849062000396565b90915081906200038b565b634e487b7160e01b83526022600452602483fd5b90607f1690620002ab565b634e487b7160e01b82526041600452602482fd5b634e487b7160e01b83526041600452602483fd5b6060908b8651805183528481015185840152015115158c820152019301910190918786916200026c565b6200043a8183620005b5565b51620004478286620005b5565b52620004548185620005b5565b50600019811462000468576001016200022d565b634e487b7160e01b8a52601160045260248afd5b634e487b7160e01b87526041600452602487fd5b885163100960cb60e01b815260096004820152602490fd5b895163100960cb60e01b815260086004820152602490fd5b905060015414386200018a565b895163100960cb60e01b815260076004820152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620004e557604052565b604081019081106001600160401b03821117620004e557604052565b51906001600160a01b0382168203620004fb57565b604051906200055c8262000500565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620004e5576040528260005b8281106200059e57505050565b8290620005aa6200054d565b818401520162000591565b906001811015620005c75760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631c0b4d2c146100b85780631e93b0f1146100af57806336e56ea5146100a6578063573b85101461009d5780638323075714610094578063ab53f2c61461008b578063aca9dfd1146100825763c8cabac30361000e5761007d610549565b61000e565b5061007d610484565b5061007d61040f565b5061007d6103f0565b5061007d6101e7565b5061007d61018d565b5061007d61014e565b602036600319011261012c57602060406004356100d48161013d565b6101206100df610840565b80926100e96108a3565b80516001600160a01b03909216909152858101805160019052905181518601526101116108dc565b90600082525186820152610b48565b01511515604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b0381160361012c57565b503461012c57600036600319011261012c576020600354604051908152f35b6002111561017757565b634e487b7160e01b600052602160045260246000fd5b503461012c57602036600319011261012c5760606101be6004356101b08161013d565b6101b8610754565b50610773565b604080519180516101ce8161016d565b8352602081015115156020840152015115156040820152f35b5060208060031936011261012c576101fd610840565b506103d66040916103c583516102128161061b565b6004358152610225600160005414610e4f565b6102a061024161023361069c565b85808251830101910161151e565b9161025d61025861025460045460ff1690565b1590565b610e6f565b8651338152815160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a15180159081156103e4575b50610e8f565b6102aa3415610eaf565b828101926103c060806102bd8651610131565b936102d66102d18a830196875190336115a7565b610ecf565b6102f23360018060a01b036102eb8451610131565b1614610eef565b61034861033c61030f6060840161033661032961030f8351610131565b6001600160a01b0316600090815260056020526040902090565b805460ff19166001179055565b51610131565b805462ff000019169055565b61037261036a610356610aeb565b986103366103648551610131565b8b6108cd565b8589016108cd565b6001878a015261038e6103858251610131565b606089016108cd565b438288015201519182519384519051019388828201519101511515916103b2610747565b958652850152151587840152565b611627565b60a0820152600060c08201526112b7565b5160008152602090f35b0390f35b9050600154143861029a565b503461012c57600036600319011261012c576020600154604051908152f35b503461012c5760008060031936011261048157805461042c61069c565b906040519283918252602090604082840152835191826040850152815b83811061046a57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610449565b80fd5b50608036600319011261012c57610499610840565b604051906104a682610643565b6004358252606036602319011261012c57604051916104c48361065e565b60243592600284101561012c576104fd9381526104e03661168b565b60208201526104ee366116b4565b60408201526020820152610b48565b60405160008152602090f35b91909160806020604060a084019580516105228161016d565b85528280820151805182880152015115158286015201518051151560608501520151910152565b50602036600319011261012c576103e060206004356105678161013d565b61056f610812565b506105bc61057b610840565b80926105856108a3565b80516001600160a01b03909216909152848101805160009052905181518601526105ad6108dc565b90600082525185820152610b48565b015160405191829182610509565b90600182811c921680156105fa575b60208310146105e457565b634e487b7160e01b600052602260045260246000fd5b91607f16916105d9565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761063657604052565b61063e610604565b604052565b604081019081106001600160401b0382111761063657604052565b606081019081106001600160401b0382111761063657604052565b601f909101601f19168101906001600160401b0382119082101761063657604052565b60405190600082600254916106b0836105ca565b80835260019380851690811561072657506001146106d8575b506106d692500383610679565b565b600260009081526000805160206116db83398151915294602093509091905b81831061070e5750506106d69350820101386106c9565b855488840185015294850194879450918301916106f7565b90506106d694506020925060ff191682840152151560051b820101386106c9565b604051906106d68261065e565b604051906107618261065e565b60006040838281528260208201520152565b9061077c610754565b9160018060a01b03166000908082526005602052600160ff6040842054166107a38161016d565b036107ee576040929350815260056020522060ff604051916107c48361065e565b548181166107d18161016d565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b6040519061080682610643565b60006020838281520152565b6040519061081f8261065e565b816000815261082c6107f9565b6020820152604061083b6107f9565b910152565b6040519061084d8261065e565b600060408382815261085d610812565b60208201520152565b604051906108738261065e565b81600081526040516108848161061b565b600081526020820152604080519161089b8361061b565b600083520152565b604051906108b082610643565b816040516108bd8161061b565b600081528152602061083b610866565b6001600160a01b039091169052565b604051906108e982610643565b8160008152602061083b610866565b60405160a0810191906001600160401b03831181841017610959575b8260405280926109238161061b565b600081528152600060208201526109386107f9565b6040820152610945610812565b606082015260806040519161089b8361061b565b610961610604565b610914565b5190811515820361012c57565b9080601f8301121561012c5760409182519261098e8461061b565b836060938484019381851161012c57915b8483106109af5750505050505090565b858383031261012c57835186916109c58261065e565b8451825260209182860151838201526109df878701610966565b8782015281520192019161099f565b60c08183031261012c576040519160a09190610a4790608085016001600160401b03811186821017610a56575b6040528251610a298161013d565b85526020830151610a398161013d565b602086015260408301610973565b60408401520151606082015290565b610a5e610604565b610a1b565b906080909392936040602060a085019660018060a01b03809416865280518287015201518051610a928161016d565b828601528260208201515116606086015201515116910152565b51610ab68161016d565b90565b60405190610ac68261061b565b8160005b60208110610ad6575050565b602090610ae1610754565b8184015201610aca565b6040519060e082016001600160401b03811183821017610b3b575b6040528160c0600091828152826020820152826040820152826060820152826080820152610b32610ab9565b60a08201520152565b610b43610604565b610b06565b610b506108f8565b91610b5f600460005414610f0f565b610b6761069c565b91610b7c6020938480825183010191016109ee565b91610b94610b8f61025460045460ff1690565b610f2f565b836040927f31c90f1196ef8f1bb60491bbb9fb67cff7c3611a6d0e0a78b1d1ec3257782f28845180610bc7843383610a63565b0390a1610bdf81518015908115610e43575b50610f4f565b0194610beb8651610aac565b610bf48161016d565b610d1f5790846060949392610c3f6001610c30610c2b610c26610c21876106d69e51015180885251610131565b610131565b610773565b610aac565b610c398161016d565b14610fcf565b610c493415610fef565b8572151a19481c995cdd5b1d081cdd58d8d9591959606a1b91828482015285810192835152610c7b8484510160019052565b019060008251525182825101527fb1a31445d1274d1cd5eb21b408f93767740763956e49267f449221797bf0c99f610cb98251865191829182610509565b0390a151910152610cf3610ccb610aeb565b94610cdf610cd98551610131565b876108cd565b610ceb81850151610131565b9086016108cd565b600081850152610d05338486016108cd565b43608085015281015160a0840152015160c08201526112b7565b9291906001610d2e8751610aac565b610d378161016d565b14610d45575b505050505050565b610e30606094610de984610d0594608082610e389c5101519401938452610d79610d72610c218a51610131565b3314610f6f565b835151610dac90600190610d9d90610c2b90610c26906001600160a01b0316610131565b610da68161016d565b14610f8f565b610db63415610faf565b8151600181527f13fb82c0facd8a60f0ab3edaf25a48da0f4a98fc6cd57fafb765ca424f5c033b90602090a10160019052565b610e1c610df4610aeb565b97610e08610e028851610131565b8a6108cd565b610e1481880151610131565b9089016108cd565b60008785015251516001600160a01b031690565b8486016108cd565b388080808080610d3d565b90506001541438610bd9565b15610e5657565b60405163100960cb60e01b8152600a6004820152602490fd5b15610e7657565b60405163100960cb60e01b8152600b6004820152602490fd5b15610e9657565b60405163100960cb60e01b8152600c6004820152602490fd5b15610eb657565b60405163100960cb60e01b8152600d6004820152602490fd5b15610ed657565b60405163100960cb60e01b8152600e6004820152602490fd5b15610ef657565b60405163100960cb60e01b8152600f6004820152602490fd5b15610f1657565b60405163100960cb60e01b815260106004820152602490fd5b15610f3657565b60405163100960cb60e01b815260116004820152602490fd5b15610f5657565b60405163100960cb60e01b815260126004820152602490fd5b15610f7657565b60405163100960cb60e01b815260156004820152602490fd5b15610f9657565b60405163100960cb60e01b815260166004820152602490fd5b15610fb657565b60405163100960cb60e01b815260176004820152602490fd5b15610fd657565b60405163100960cb60e01b815260136004820152602490fd5b15610ff657565b60405163100960cb60e01b815260146004820152602490fd5b9060018110156110205760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b81811061104e575050565b60008155600101611043565b6110656002546105ca565b8061106d5750565b601f811160011461108057506000600255565b60026000526110c590601f0160051c6000805160206116db833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611043565b6000602081208160025555565b60405190608082016001600160401b0381118382101761110f575b6040526000606083828152826020820152611106610ab9565b60408201520152565b611117610604565b6110ed565b81516001600160a01b0390811682526020808401519091168183015260408084015160c08401959492906000908386015b60018310611166575050505050606060a0910151910152565b83606060019287855180518352848101518584015201511515888201520192019201919061114d565b90601f821161119c575050565b6106d69160026000526020600020906020601f840160051c830193106111ca575b601f0160051c0190611043565b90915081906111bd565b80519091906001600160401b0381116112aa575b6111fc816111f76002546105ca565b61118f565b602080601f8311600114611238575081929360009261122d575b50508160011b916000199060031b1c191617600255565b015190503880611216565b6002600052601f198316949091906000805160206116db833981519152926000905b878210611292575050836001959610611279575b505050811b01600255565b015160001960f88460031b161c1916905538808061126e565b8060018596829496860151815501950193019061125a565b6112b2610604565b6111e8565b604081015115611348576113356113436106d69260c06112d56110d2565b916112e96112e38251610131565b846108cd565b6113026112f96020830151610131565b602085016108cd565b60a081015160408401520151606082015261131d6004600055565b61132643600155565b6040519283916020830161111c565b03601f198101835282610679565b6111d4565b600080808360c061138e610c21611363602086990151610131565b61033660608601916113758351610131565b60a08801515151916001600160a01b03909116906113cd565b910151908282156113c4575bf1156113b7575b600080556113af6000600155565b6106d661105a565b6113bf611036565b6113a1565b506108fc61139a565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261144993600093849392849190608081016001600160401b03811182821017611450575b6040525193165af161143961143261145d565b80926114be565b50602080825183010191016114aa565b1561012c57565b611458610604565b61141f565b3d156114a5573d906001600160401b038211611498575b6040519161148c601f8201601f191660200184610679565b82523d6000602084013e565b6114a0610604565b611474565b606090565b9081602091031261012c57610ab690610966565b156114c65790565b8051156114d557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156114f65790565b80511561150557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b9060e08282031261012c5760405191611592919060809060a085016001600160401b0381118682101761159a575b604052805161155a8161013d565b8552602081015161156a8161013d565b60208601526040810151604086015260608101516115878161013d565b606086015201610973565b608082015290565b6115a2610604565b61154c565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610ab6936000938493909284919060a081016001600160401b0381118282101761161a575b6040525193165af161143961161361145d565b80926114ee565b611622610604565b611600565b9190611631610ab9565b926000805b60018110611645575050508252565b61164f818461100f565b5161165a828861100f565b52611665818761100f565b50600019811461167757600101611636565b634e487b7160e01b82526011600452602482fd5b602090604319011261012c57604051906116a48261061b565b604435826116b18261013d565b52565b602090606319011261012c57604051906116cd8261061b565b606435826116b18261013d56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 7397,
  version: 9,
  views: {},
};
export const _stateSourceMap = {
  1: {
    at: "./token.rsh:52:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./token.rsh:150:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  4: {
    at: "./token.rsh:84:60:after expr stmt semicolon",
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
