// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = "0.1.12";
export const _versionHash = "0.1.12 (1f68dfdb)";
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc3 = stdlib.T_Struct([
    ["addr", ctc0],
    ["amount", ctc1],
    ["projectName", ctc2],
  ]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "200")
  );
  return {
    claimed: [ctc3],
    insufficient: [ctc1],
    newReward: [ctc0, ctc4],
    notify: [ctc5, ctc0],
  };
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2,
  });
  const ctc6 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4,
  });
  const map0_ctc = ctc5;

  const map1_ctc = ctc6;

  const map2_ctc = ctc6;

  const map3_ctc = ctc6;

  const Info_Admins = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
        svs;
      return await (async (_v1493) => {
        const v1493 = stdlib.protect(ctc0, _v1493, null);

        const v1494 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, v1493),
          null
        );
        const v1495 = {
          None: 0,
          Some: 1,
        }[v1494[0]];
        const v1496 = stdlib.eq(
          v1495,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );

        return v1496;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const Info_opted = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
        svs;
      return await (async (_v1497) => {
        const v1497 = stdlib.protect(ctc0, _v1497, null);

        const v1498 = stdlib.protect(
          map3_ctc,
          await viewlib.viewMapRef(3, v1497),
          null
        );
        const v1499 = {
          None: 0,
          Some: 1,
        }[v1498[0]];
        const v1500 = stdlib.eq(
          v1499,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );

        return v1500;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const Info_rewards = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
        svs;
      return await (async (_v1490) => {
        const v1490 = stdlib.protect(ctc0, _v1490, null);

        const v1491 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v1490),
          null
        );
        const v1492 = stdlib.fromSome(
          v1491,
          stdlib.checkedBigNumberify(
            "./index.rsh:63:49:decimal",
            stdlib.UInt_max,
            "0"
          )
        );

        return v1492;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
        svs;
      return await (async () => {
        return v1525;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
        svs;
      return await (async () => {
        return v1525;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const Info_totalClaimed = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
        svs;
      return await (async () => {
        return v1527;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
        svs;
      return await (async () => {
        return v1528;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  return {
    infos: {
      Info: {
        Admins: {
          decode: Info_Admins,
          dom: [ctc0],
          rng: ctc3,
        },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc3,
        },
        rewards: {
          decode: Info_rewards,
          dom: [ctc0],
          rng: ctc2,
        },
        totalAllocatedFunds: {
          decode: Info_totalAllocatedFunds,
          dom: [],
          rng: ctc2,
        },
        totalAmountClaimed: {
          decode: Info_totalAmountClaimed,
          dom: [],
          rng: ctc2,
        },
        totalClaimed: {
          decode: Info_totalClaimed,
          dom: [],
          rng: ctc2,
        },
        totalOptedIn: {
          decode: Info_totalOptedIn,
          dom: [],
          rng: ctc2,
        },
      },
    },
    views: {
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2],
    },
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc3, ctc3]);
  return {
    mapDataTy: ctc4,
  };
}
export async function _Admin_addAdmin3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _Admin_addAdmin3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _Admin_addAdmin3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc7,
    Admin_deposit0_90: ctc8,
    Admin_editUserReward0_90: ctc9,
    Admin_endContractAndTransfer0_90: ctc10,
    Admin_revokeAdmin0_90: ctc7,
    Admin_setReward0_90: ctc9,
    User_claim0_90: ctc8,
    User_claimAll0_90: ctc10,
    User_optin0_90: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1586 = ctc.selfAddress();
  const v1588 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_addAdmin0_90" (defined at: ./index.rsh:156:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "Admin_addAdmin",
  });
  const v1591 = stdlib.addressEq(v1586, v1484);
  const v1592 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, v1586),
    null
  );
  const v1593 = {
    None: 0,
    Some: 1,
  }[v1592[0]];
  const v1594 = stdlib.eq(
    v1593,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  const v1595 = v1591 ? true : v1594;
  stdlib.assert(v1595, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_addAdmin0_90" (defined at: ./index.rsh:156:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "You Are unable to register another Admin",
    who: "Admin_addAdmin",
  });
  const v1602 = ["Admin_addAdmin0_90", v1588];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1602,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:162:9:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_addAdmin",
          });
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v1713),
            null
          );
          const v1773 =
            v1717[
              stdlib.checkedBigNumberify(
                "./index.rsh:156:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          await stdlib.simMapSet(sim_r, 1, v1773, null);
          const v1782 = null;
          const v1783 = await txn1.getOutput(
            "Admin_addAdmin",
            "v1782",
            ctc0,
            v1782
          );

          const v1795 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v8080 = v1506;
          const v8081 = v1795.keepGoing;
          if (v8081) {
            const v8082 = v1795.bal;
            const v8084 = v1795.total_amount_claimed;
            const v8085 = v1795.total_rewards_allcoated;
            const v8086 = v1795.total_users_claim;
            const v8087 = v1795.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8091 = stdlib.sub(v1506, v1506);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            const v8092 = stdlib.le(await ctc.getBalance(), v8091)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8091);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      undefined /* setApiDetails */;
      const v1723 = stdlib.addressEq(v1713, v1484);
      const v1724 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v1713),
        null
      );
      const v1725 = {
        None: 0,
        Some: 1,
      }[v1724[0]];
      const v1726 = stdlib.eq(
        v1725,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      const v1727 = v1723 ? true : v1726;
      stdlib.assert(v1727, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
        ],
        msg: "You Are unable to register another Admin",
        who: "Admin_addAdmin",
      });
      const v1773 =
        v1717[
          stdlib.checkedBigNumberify(
            "./index.rsh:156:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      await stdlib.mapSet(map1, v1773, null);
      const v1782 = null;
      const v1783 = await txn1.getOutput(
        "Admin_addAdmin",
        "v1782",
        ctc0,
        v1782
      );
      if (v957) {
        stdlib.protect(ctc0, await interact.out(v1717, v1783), {
          at: "./index.rsh:156:11:application",
          fs: [
            "at ./index.rsh:156:11:application call to [unknown function] (defined at: ./index.rsh:156:11:function exp)",
            'at ./index.rsh:165:14:application call to "ret" (defined at: ./index.rsh:163:15:function exp)',
            "at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:15:function exp)",
          ],
          msg: "out",
          who: "Admin_addAdmin",
        });
      } else {
      }

      const v1795 = {
        bal: v1523,
        keepGoing: v1524,
        total_amount_claimed: v1525,
        total_rewards_allcoated: v1526,
        total_users_claim: v1527,
        usersNo: v1528,
      };
      const v8080 = v1506;
      const v8081 = v1795.keepGoing;
      if (v8081) {
        const v8082 = v1795.bal;
        const v8084 = v1795.total_amount_claimed;
        const v8085 = v1795.total_rewards_allcoated;
        const v8086 = v1795.total_users_claim;
        const v8087 = v1795.usersNo;
        return;
      } else {
        const v8091 = stdlib.sub(v1506, v1506);
        const v8092 = stdlib.le(await ctc.getBalance(), v8091)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:294:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8091);
        return;
      }
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function _Admin_deposit3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _Admin_deposit3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _Admin_deposit3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc8,
    Admin_deposit0_90: ctc7,
    Admin_editUserReward0_90: ctc9,
    Admin_endContractAndTransfer0_90: ctc10,
    Admin_revokeAdmin0_90: ctc8,
    Admin_setReward0_90: ctc9,
    User_claim0_90: ctc7,
    User_claimAll0_90: ctc10,
    User_optin0_90: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1529 = ctc.selfAddress();
  const v1531 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_deposit0_90" (defined at: ./index.rsh:95:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "Admin_deposit",
  });
  const v1532 =
    v1531[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1534 = stdlib.addressEq(v1529, v1484);
  const v1535 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, v1529),
    null
  );
  const v1536 = {
    None: 0,
    Some: 1,
  }[v1535[0]];
  const v1537 = stdlib.eq(
    v1536,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  const v1538 = v1534 ? true : v1537;
  stdlib.assert(v1538, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_deposit0_90" (defined at: ./index.rsh:95:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "Only Admins can deposit",
    who: "Admin_deposit",
  });
  const v1545 = ["Admin_deposit0_90", v1531];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1545,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1532, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_deposit",
          });
          const v2143 =
            v2130[
              stdlib.checkedBigNumberify(
                "./index.rsh:95:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v1713),
            null
          );
          const v2184 = stdlib.add(v1506, v2143);
          sim_r.txns.push({
            amt: v2143,
            kind: "to",
            tok: undefined /* Nothing */,
          });
          const v2219 = null;
          const v2220 = await txn1.getOutput(
            "Admin_deposit",
            "v2219",
            ctc0,
            v2219
          );

          const v2232 = stdlib.safeAdd(v1523, v2143);
          const v2233 = {
            bal: v2232,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v8320 = v2184;
          const v8321 = v2233.keepGoing;
          if (v8321) {
            const v8322 = v2233.bal;
            const v8324 = v2233.total_amount_claimed;
            const v8325 = v2233.total_rewards_allcoated;
            const v8326 = v2233.total_users_claim;
            const v8327 = v2233.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8331 = stdlib.sub(v2184, v2184);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            const v8332 = stdlib.le(await ctc.getBalance(), v8331)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8331);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      undefined /* setApiDetails */;
      const v2143 =
        v2130[
          stdlib.checkedBigNumberify(
            "./index.rsh:95:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2144 = stdlib.addressEq(v1713, v1484);
      const v2145 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v1713),
        null
      );
      const v2146 = {
        None: 0,
        Some: 1,
      }[v2145[0]];
      const v2147 = stdlib.eq(
        v2146,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      const v2148 = v2144 ? true : v2147;
      stdlib.assert(v2148, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
        ],
        msg: "Only Admins can deposit",
        who: "Admin_deposit",
      });
      const v2184 = stdlib.add(v1506, v2143);
      const v2219 = null;
      const v2220 = await txn1.getOutput("Admin_deposit", "v2219", ctc0, v2219);
      if (v957) {
        stdlib.protect(ctc0, await interact.out(v2130, v2220), {
          at: "./index.rsh:95:11:application",
          fs: [
            "at ./index.rsh:95:11:application call to [unknown function] (defined at: ./index.rsh:95:11:function exp)",
            'at ./index.rsh:100:14:application call to "ret" (defined at: ./index.rsh:99:15:function exp)',
            "at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:15:function exp)",
          ],
          msg: "out",
          who: "Admin_deposit",
        });
      } else {
      }

      const v2232 = stdlib.safeAdd(v1523, v2143);
      const v2233 = {
        bal: v2232,
        keepGoing: v1524,
        total_amount_claimed: v1525,
        total_rewards_allcoated: v1526,
        total_users_claim: v1527,
        usersNo: v1528,
      };
      const v8320 = v2184;
      const v8321 = v2233.keepGoing;
      if (v8321) {
        const v8322 = v2233.bal;
        const v8324 = v2233.total_amount_claimed;
        const v8325 = v2233.total_rewards_allcoated;
        const v8326 = v2233.total_users_claim;
        const v8327 = v2233.usersNo;
        return;
      } else {
        const v8331 = stdlib.sub(v2184, v2184);
        const v8332 = stdlib.le(await ctc.getBalance(), v8331)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:294:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8331);
        return;
      }
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function _Admin_editUserReward3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _Admin_editUserReward3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _Admin_editUserReward3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc8,
    Admin_deposit0_90: ctc9,
    Admin_editUserReward0_90: ctc7,
    Admin_endContractAndTransfer0_90: ctc10,
    Admin_revokeAdmin0_90: ctc8,
    Admin_setReward0_90: ctc7,
    User_claim0_90: ctc9,
    User_claimAll0_90: ctc10,
    User_optin0_90: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1564 = ctc.selfAddress();
  const v1566 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_editUserReward0_90" (defined at: ./index.rsh:144:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "Admin_editUserReward",
  });
  const v1571 = stdlib.addressEq(v1564, v1484);
  const v1572 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, v1564),
    null
  );
  const v1573 = {
    None: 0,
    Some: 1,
  }[v1572[0]];
  const v1574 = stdlib.eq(
    v1573,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  const v1575 = v1571 ? true : v1574;
  stdlib.assert(v1575, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_editUserReward0_90" (defined at: ./index.rsh:144:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "Only Admins can deposit",
    who: "Admin_editUserReward",
  });
  const v1584 = ["Admin_editUserReward0_90", v1566];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1584,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:148:9:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_editUserReward",
          });
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v1713),
            null
          );
          const v2649 =
            v2543[
              stdlib.checkedBigNumberify(
                "./index.rsh:144:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v2650 =
            v2543[
              stdlib.checkedBigNumberify(
                "./index.rsh:144:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          await stdlib.simMapSet(sim_r, 0, v2649, v2650);
          const v2659 = null;
          const v2660 = await txn1.getOutput(
            "Admin_editUserReward",
            "v2659",
            ctc0,
            v2659
          );

          const v2673 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v8560 = v1506;
          const v8561 = v2673.keepGoing;
          if (v8561) {
            const v8562 = v2673.bal;
            const v8564 = v2673.total_amount_claimed;
            const v8565 = v2673.total_rewards_allcoated;
            const v8566 = v2673.total_users_claim;
            const v8567 = v2673.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8571 = stdlib.sub(v1506, v1506);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            const v8572 = stdlib.le(await ctc.getBalance(), v8571)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8571);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      undefined /* setApiDetails */;
      const v2566 = stdlib.addressEq(v1713, v1484);
      const v2567 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v1713),
        null
      );
      const v2568 = {
        None: 0,
        Some: 1,
      }[v2567[0]];
      const v2569 = stdlib.eq(
        v2568,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      const v2570 = v2566 ? true : v2569;
      stdlib.assert(v2570, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
        ],
        msg: "Only Admins can deposit",
        who: "Admin_editUserReward",
      });
      const v2649 =
        v2543[
          stdlib.checkedBigNumberify(
            "./index.rsh:144:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2650 =
        v2543[
          stdlib.checkedBigNumberify(
            "./index.rsh:144:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      await stdlib.mapSet(map0, v2649, v2650);
      const v2659 = null;
      const v2660 = await txn1.getOutput(
        "Admin_editUserReward",
        "v2659",
        ctc0,
        v2659
      );
      if (v957) {
        stdlib.protect(ctc0, await interact.out(v2543, v2660), {
          at: "./index.rsh:144:11:application",
          fs: [
            "at ./index.rsh:144:11:application call to [unknown function] (defined at: ./index.rsh:144:11:function exp)",
            'at ./index.rsh:151:14:application call to "ret" (defined at: ./index.rsh:149:15:function exp)',
            "at ./index.rsh:149:15:application call to [unknown function] (defined at: ./index.rsh:149:15:function exp)",
          ],
          msg: "out",
          who: "Admin_editUserReward",
        });
      } else {
      }

      const v2673 = {
        bal: v1523,
        keepGoing: v1524,
        total_amount_claimed: v1525,
        total_rewards_allcoated: v1526,
        total_users_claim: v1527,
        usersNo: v1528,
      };
      const v8560 = v1506;
      const v8561 = v2673.keepGoing;
      if (v8561) {
        const v8562 = v2673.bal;
        const v8564 = v2673.total_amount_claimed;
        const v8565 = v2673.total_rewards_allcoated;
        const v8566 = v2673.total_users_claim;
        const v8567 = v2673.usersNo;
        return;
      } else {
        const v8571 = stdlib.sub(v1506, v1506);
        const v8572 = stdlib.le(await ctc.getBalance(), v8571)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:294:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8571);
        return;
      }
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function _Admin_endContractAndTransfer3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _Admin_endContractAndTransfer3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _Admin_endContractAndTransfer3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc8,
    Admin_deposit0_90: ctc9,
    Admin_editUserReward0_90: ctc10,
    Admin_endContractAndTransfer0_90: ctc7,
    Admin_revokeAdmin0_90: ctc8,
    Admin_setReward0_90: ctc10,
    User_claim0_90: ctc9,
    User_claimAll0_90: ctc7,
    User_optin0_90: ctc7,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1654 = ctc.selfAddress();
  const v1656 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_90" (defined at: ./index.rsh:281:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "Admin_endContractAndTransfer",
  });
  const v1657 = stdlib.addressEq(v1484, v1654);
  stdlib.assert(v1657, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_90" (defined at: ./index.rsh:281:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "Cannot end contract without being Deployer",
    who: "Admin_endContractAndTransfer",
  });
  const v1662 = ["Admin_endContractAndTransfer0_90", v1656];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1662,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:284:9:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_endContractAndTransfer",
          });
          const v3091 = null;
          const v3092 = await txn1.getOutput(
            "Admin_endContractAndTransfer",
            "v3091",
            ctc0,
            v3091
          );

          const v3103 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v8800 = v1506;
          const v8801 = v3103.keepGoing;
          if (v8801) {
            const v8802 = v3103.bal;
            const v8804 = v3103.total_amount_claimed;
            const v8805 = v3103.total_rewards_allcoated;
            const v8806 = v3103.total_users_claim;
            const v8807 = v3103.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8811 = stdlib.sub(v1506, v1506);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            const v8812 = stdlib.le(await ctc.getBalance(), v8811)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8811);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      undefined /* setApiDetails */;
      const v2986 = stdlib.addressEq(v1484, v1713);
      stdlib.assert(v2986, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
        ],
        msg: "Cannot end contract without being Deployer",
        who: "Admin_endContractAndTransfer",
      });
      const v3091 = null;
      const v3092 = await txn1.getOutput(
        "Admin_endContractAndTransfer",
        "v3091",
        ctc0,
        v3091
      );
      if (v957) {
        stdlib.protect(ctc0, await interact.out(v2956, v3092), {
          at: "./index.rsh:281:11:application",
          fs: [
            "at ./index.rsh:281:11:application call to [unknown function] (defined at: ./index.rsh:281:11:function exp)",
            'at ./index.rsh:286:14:application call to "ret" (defined at: ./index.rsh:285:15:function exp)',
            "at ./index.rsh:285:15:application call to [unknown function] (defined at: ./index.rsh:285:15:function exp)",
          ],
          msg: "out",
          who: "Admin_endContractAndTransfer",
        });
      } else {
      }

      const v3103 = {
        bal: v1523,
        keepGoing: v1524,
        total_amount_claimed: v1525,
        total_rewards_allcoated: v1526,
        total_users_claim: v1527,
        usersNo: v1528,
      };
      const v8800 = v1506;
      const v8801 = v3103.keepGoing;
      if (v8801) {
        const v8802 = v3103.bal;
        const v8804 = v3103.total_amount_claimed;
        const v8805 = v3103.total_rewards_allcoated;
        const v8806 = v3103.total_users_claim;
        const v8807 = v3103.usersNo;
        return;
      } else {
        const v8811 = stdlib.sub(v1506, v1506);
        const v8812 = stdlib.le(await ctc.getBalance(), v8811)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:294:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8811);
        return;
      }
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function _Admin_revokeAdmin3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _Admin_revokeAdmin3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _Admin_revokeAdmin3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc7,
    Admin_deposit0_90: ctc8,
    Admin_editUserReward0_90: ctc9,
    Admin_endContractAndTransfer0_90: ctc10,
    Admin_revokeAdmin0_90: ctc7,
    Admin_setReward0_90: ctc9,
    User_claim0_90: ctc8,
    User_claimAll0_90: ctc10,
    User_optin0_90: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1604 = ctc.selfAddress();
  const v1606 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_revokeAdmin0_90" (defined at: ./index.rsh:170:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "Admin_revokeAdmin",
  });
  const v1609 = stdlib.addressEq(v1604, v1484);
  stdlib.assert(v1609, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_revokeAdmin0_90" (defined at: ./index.rsh:170:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "Only the Deployer can revoke Admin Rights",
    who: "Admin_revokeAdmin",
  });
  const v1616 = ["Admin_revokeAdmin0_90", v1606];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1616,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:173:9:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_revokeAdmin",
          });
          const v3519 =
            v3369[
              stdlib.checkedBigNumberify(
                "./index.rsh:170:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          await stdlib.simMapSet(sim_r, 1, v3519, undefined /* Nothing */);
          const v3524 = null;
          const v3525 = await txn1.getOutput(
            "Admin_revokeAdmin",
            "v3524",
            ctc0,
            v3524
          );

          const v3537 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v9040 = v1506;
          const v9041 = v3537.keepGoing;
          if (v9041) {
            const v9042 = v3537.bal;
            const v9044 = v3537.total_amount_claimed;
            const v9045 = v3537.total_rewards_allcoated;
            const v9046 = v3537.total_users_claim;
            const v9047 = v3537.usersNo;
            sim_r.isHalt = false;
          } else {
            const v9051 = stdlib.sub(v1506, v1506);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            const v9052 = stdlib.le(await ctc.getBalance(), v9051)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9051);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      undefined /* setApiDetails */;
      const v3403 = stdlib.addressEq(v1713, v1484);
      stdlib.assert(v3403, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
        ],
        msg: "Only the Deployer can revoke Admin Rights",
        who: "Admin_revokeAdmin",
      });
      const v3519 =
        v3369[
          stdlib.checkedBigNumberify(
            "./index.rsh:170:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      await stdlib.mapSet(map1, v3519, undefined /* Nothing */);
      const v3524 = null;
      const v3525 = await txn1.getOutput(
        "Admin_revokeAdmin",
        "v3524",
        ctc0,
        v3524
      );
      if (v957) {
        stdlib.protect(ctc0, await interact.out(v3369, v3525), {
          at: "./index.rsh:170:11:application",
          fs: [
            "at ./index.rsh:170:11:application call to [unknown function] (defined at: ./index.rsh:170:11:function exp)",
            'at ./index.rsh:176:14:application call to "ret" (defined at: ./index.rsh:174:15:function exp)',
            "at ./index.rsh:174:15:application call to [unknown function] (defined at: ./index.rsh:174:15:function exp)",
          ],
          msg: "out",
          who: "Admin_revokeAdmin",
        });
      } else {
      }

      const v3537 = {
        bal: v1523,
        keepGoing: v1524,
        total_amount_claimed: v1525,
        total_rewards_allcoated: v1526,
        total_users_claim: v1527,
        usersNo: v1528,
      };
      const v9040 = v1506;
      const v9041 = v3537.keepGoing;
      if (v9041) {
        const v9042 = v3537.bal;
        const v9044 = v3537.total_amount_claimed;
        const v9045 = v3537.total_rewards_allcoated;
        const v9046 = v3537.total_users_claim;
        const v9047 = v3537.usersNo;
        return;
      } else {
        const v9051 = stdlib.sub(v1506, v1506);
        const v9052 = stdlib.le(await ctc.getBalance(), v9051)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:294:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v9051);
        return;
      }
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function _Admin_setReward3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _Admin_setReward3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _Admin_setReward3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc8,
    Admin_deposit0_90: ctc9,
    Admin_editUserReward0_90: ctc7,
    Admin_endContractAndTransfer0_90: ctc10,
    Admin_revokeAdmin0_90: ctc8,
    Admin_setReward0_90: ctc7,
    User_claim0_90: ctc9,
    User_claimAll0_90: ctc10,
    User_optin0_90: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1549 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:108:40:application call to [unknown function] (defined at: ./index.rsh:108:40:function exp)",
      'at ./index.rsh:70:37:application call to "runAdmin_setReward0_90" (defined at: ./index.rsh:108:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "Admin_setReward",
  });
  const v1551 =
    v1549[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "1"
      )
    ];
  const v1554 = stdlib.gt(v1551, v1523);
  const v1562 = ["Admin_setReward0_90", v1549];

  const v1700 = v1554
    ? v1551
    : stdlib.checkedBigNumberify(
        "./index.rsh:111:30:decimal",
        stdlib.UInt_max,
        "0"
      );

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1562,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1700, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_setReward",
          });
          const v3820 =
            v3782[
              stdlib.checkedBigNumberify(
                "./index.rsh:108:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          const v3821 = stdlib.gt(v3820, v1523);
          const v3822 = v3821
            ? v3820
            : stdlib.checkedBigNumberify(
                "./index.rsh:111:30:decimal",
                stdlib.UInt_max,
                "0"
              );
          const v3836 = stdlib.add(v1506, v3822);
          sim_r.txns.push({
            amt: v3822,
            kind: "to",
            tok: undefined /* Nothing */,
          });
          const v3953 =
            v3782[
              stdlib.checkedBigNumberify(
                "./index.rsh:108:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v3958 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v3953),
            null
          );
          const v3959 = stdlib.fromSome(
            v3958,
            stdlib.checkedBigNumberify(
              "./index.rsh:113:60:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v3960 = stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, v3953),
            null
          );
          const v3961 = {
            None: 0,
            Some: 1,
          }[v3960[0]];
          const v3962 = stdlib.eq(
            v3961,
            stdlib.checkedBigNumberify(
              "reach standard library:38:41:application",
              stdlib.UInt_max,
              "1"
            )
          );
          if (v3962) {
            const v3963 = stdlib.safeAdd(v3959, v3820);
            await stdlib.simMapSet(sim_r, 0, v3953, v3963);
            const v3964 = true;
            const v3965 = await txn1.getOutput(
              "Admin_setReward",
              "v3964",
              ctc6,
              v3964
            );

            let v3978;
            if (v3821) {
              const v3979 = stdlib.safeAdd(v1523, v3820);
              v3978 = v3979;
            } else {
              v3978 = v1523;
            }
            const v3980 = {
              bal: v3978,
              keepGoing: v1524,
              total_amount_claimed: v1525,
              total_rewards_allcoated: v1526,
              total_users_claim: v1527,
              usersNo: v1528,
            };
            const v9280 = v3836;
            const v9281 = v3980.keepGoing;
            if (v9281) {
              const v9282 = v3980.bal;
              const v9284 = v3980.total_amount_claimed;
              const v9285 = v3980.total_rewards_allcoated;
              const v9286 = v3980.total_users_claim;
              const v9287 = v3980.usersNo;
              sim_r.isHalt = false;
            } else {
              const v9291 = stdlib.sub(v3836, v3836);
              sim_r.txns.push({
                kind: "from",
                to: v1484,
                tok: undefined /* Nothing */,
              });
              const v9292 = stdlib.le(await ctc.getBalance(), v9291)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:294:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v9291);
              sim_r.txns.push({
                kind: "from",
                to: v1484,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          } else {
            if (v3821) {
              const v3982 = "Your user hasn't opted in                                                                                                                                                                               ";
              null;
              const v3983 = false;
              const v3984 = await txn1.getOutput(
                "Admin_setReward",
                "v3983",
                ctc6,
                v3983
              );

              const v3998 = stdlib.safeAdd(v1523, v3820);
              const v3999 = {
                bal: v3998,
                keepGoing: v1524,
                total_amount_claimed: v1525,
                total_rewards_allcoated: v1526,
                total_users_claim: v1527,
                usersNo: v1528,
              };
              const v9295 = v3836;
              const v9296 = v3999.keepGoing;
              if (v9296) {
                const v9297 = v3999.bal;
                const v9299 = v3999.total_amount_claimed;
                const v9300 = v3999.total_rewards_allcoated;
                const v9301 = v3999.total_users_claim;
                const v9302 = v3999.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9306 = stdlib.sub(v3836, v3836);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                const v9307 = stdlib.le(await ctc.getBalance(), v9306)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:294:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9306);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            } else {
              const v4001 =
                "The balance you are trying to set for the user is invalid and they haven't opted in                                                                                                                     ";
              null;
              const v4002 = false;
              const v4003 = await txn1.getOutput(
                "Admin_setReward",
                "v4002",
                ctc6,
                v4002
              );

              const v4018 = {
                bal: v1523,
                keepGoing: v1524,
                total_amount_claimed: v1525,
                total_rewards_allcoated: v1526,
                total_users_claim: v1527,
                usersNo: v1528,
              };
              const v9310 = v3836;
              const v9311 = v4018.keepGoing;
              if (v9311) {
                const v9312 = v4018.bal;
                const v9314 = v4018.total_amount_claimed;
                const v9315 = v4018.total_rewards_allcoated;
                const v9316 = v4018.total_users_claim;
                const v9317 = v4018.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9321 = stdlib.sub(v3836, v3836);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                const v9322 = stdlib.le(await ctc.getBalance(), v9321)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:294:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9321);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            }
          }
          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      undefined /* setApiDetails */;
      const v3820 =
        v3782[
          stdlib.checkedBigNumberify(
            "./index.rsh:108:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      const v3821 = stdlib.gt(v3820, v1523);
      const v3822 = v3821
        ? v3820
        : stdlib.checkedBigNumberify(
            "./index.rsh:111:30:decimal",
            stdlib.UInt_max,
            "0"
          );
      const v3836 = stdlib.add(v1506, v3822);
      const v3953 =
        v3782[
          stdlib.checkedBigNumberify(
            "./index.rsh:108:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v3958 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v3953),
        null
      );
      const v3959 = stdlib.fromSome(
        v3958,
        stdlib.checkedBigNumberify(
          "./index.rsh:113:60:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      const v3960 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, v3953),
        null
      );
      const v3961 = {
        None: 0,
        Some: 1,
      }[v3960[0]];
      const v3962 = stdlib.eq(
        v3961,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      if (v3962) {
        const v3963 = stdlib.safeAdd(v3959, v3820);
        await stdlib.mapSet(map0, v3953, v3963);
        const v3964 = true;
        const v3965 = await txn1.getOutput(
          "Admin_setReward",
          "v3964",
          ctc6,
          v3964
        );
        if (v957) {
          stdlib.protect(ctc0, await interact.out(v3782, v3965), {
            at: "./index.rsh:108:11:application",
            fs: [
              "at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)",
              'at ./index.rsh:116:16:application call to "ret" (defined at: ./index.rsh:112:15:function exp)',
              "at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)",
            ],
            msg: "out",
            who: "Admin_setReward",
          });
        } else {
        }

        let v3978;
        if (v3821) {
          const v3979 = stdlib.safeAdd(v1523, v3820);
          v3978 = v3979;
        } else {
          v3978 = v1523;
        }
        const v3980 = {
          bal: v3978,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v1528,
        };
        const v9280 = v3836;
        const v9281 = v3980.keepGoing;
        if (v9281) {
          const v9282 = v3980.bal;
          const v9284 = v3980.total_amount_claimed;
          const v9285 = v3980.total_rewards_allcoated;
          const v9286 = v3980.total_users_claim;
          const v9287 = v3980.usersNo;
          return;
        } else {
          const v9291 = stdlib.sub(v3836, v3836);
          const v9292 = stdlib.le(await ctc.getBalance(), v9291)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:294:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v9291);
          return;
        }
      } else {
        if (v3821) {
          const v3982 = "Your user hasn't opted in                                                                                                                                                                               ";
          null;
          const v3983 = false;
          const v3984 = await txn1.getOutput(
            "Admin_setReward",
            "v3983",
            ctc6,
            v3983
          );
          if (v957) {
            stdlib.protect(ctc0, await interact.out(v3782, v3984), {
              at: "./index.rsh:108:11:application",
              fs: [
                "at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)",
                'at ./index.rsh:123:16:application call to "ret" (defined at: ./index.rsh:112:15:function exp)',
                "at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)",
              ],
              msg: "out",
              who: "Admin_setReward",
            });
          } else {
          }

          const v3998 = stdlib.safeAdd(v1523, v3820);
          const v3999 = {
            bal: v3998,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v9295 = v3836;
          const v9296 = v3999.keepGoing;
          if (v9296) {
            const v9297 = v3999.bal;
            const v9299 = v3999.total_amount_claimed;
            const v9300 = v3999.total_rewards_allcoated;
            const v9301 = v3999.total_users_claim;
            const v9302 = v3999.usersNo;
            return;
          } else {
            const v9306 = stdlib.sub(v3836, v3836);
            const v9307 = stdlib.le(await ctc.getBalance(), v9306)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9306);
            return;
          }
        } else {
          const v4001 =
            "The balance you are trying to set for the user is invalid and they haven't opted in                                                                                                                     ";
          null;
          const v4002 = false;
          const v4003 = await txn1.getOutput(
            "Admin_setReward",
            "v4002",
            ctc6,
            v4002
          );
          if (v957) {
            stdlib.protect(ctc0, await interact.out(v3782, v4003), {
              at: "./index.rsh:108:11:application",
              fs: [
                "at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)",
                'at ./index.rsh:135:16:application call to "ret" (defined at: ./index.rsh:112:15:function exp)',
                "at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)",
              ],
              msg: "out",
              who: "Admin_setReward",
            });
          } else {
          }

          const v4018 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v9310 = v3836;
          const v9311 = v4018.keepGoing;
          if (v9311) {
            const v9312 = v4018.bal;
            const v9314 = v4018.total_amount_claimed;
            const v9315 = v4018.total_rewards_allcoated;
            const v9316 = v4018.total_users_claim;
            const v9317 = v4018.usersNo;
            return;
          } else {
            const v9321 = stdlib.sub(v3836, v3836);
            const v9322 = stdlib.le(await ctc.getBalance(), v9321)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9321);
            return;
          }
        }
      }
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function Deployer(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Deployer expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Deployer expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc6,
    Admin_deposit0_90: ctc7,
    Admin_editUserReward0_90: ctc8,
    Admin_endContractAndTransfer0_90: ctc9,
    Admin_revokeAdmin0_90: ctc6,
    Admin_setReward0_90: ctc8,
    User_claim0_90: ctc7,
    User_claimAll0_90: ctc9,
    User_optin0_90: ctc9,
  });
  const ctc11 = stdlib.T_Bool;

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc,
  });

  const v1481 = stdlib.protect(
    ctc4,
    interact.projectName,
    "for Deployer's interact field projectName"
  );

  const txn1 = await ctc.sendrecv({
    args: [v1481],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./index.rsh:53:12:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:53:12:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1485],
        secs: v1487,
        time: v1486,
        didSend: v27,
        from: v1484,
      } = txn1;

      const v1488 = await ctc.getContractInfo();

      const v1501 = {
        bal: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        keepGoing: true,
        total_amount_claimed: stdlib.checkedBigNumberify(
          "<builtin>",
          stdlib.UInt_max,
          "0"
        ),
        total_rewards_allcoated: stdlib.checkedBigNumberify(
          "<builtin>",
          stdlib.UInt_max,
          "0"
        ),
        total_users_claim: stdlib.checkedBigNumberify(
          "<builtin>",
          stdlib.UInt_max,
          "0"
        ),
        usersNo: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
      };
      const v1502 = v1501;
      const v1503 = v1486;
      const v1506 = stdlib.checkedBigNumberify(
        "./index.rsh:48:9:after expr stmt semicolon",
        stdlib.UInt_max,
        "0"
      );

      if (
        await (async () => {
          const v1517 = v1502.keepGoing;

          return v1517;
        })()
      ) {
        const v1523 = v1502.bal;
        const v1524 = v1502.keepGoing;
        const v1525 = v1502.total_amount_claimed;
        const v1526 = v1502.total_rewards_allcoated;
        const v1527 = v1502.total_users_claim;
        const v1528 = v1502.usersNo;
        sim_r.isHalt = false;
      } else {
        const v5444 = stdlib.sub(v1506, v1506);
        sim_r.txns.push({
          kind: "from",
          to: v1484,
          tok: undefined /* Nothing */,
        });
        const v5446 = stdlib.le(await ctc.getBalance(), v5444)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:294:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v5444);
        sim_r.txns.push({
          kind: "from",
          to: v1484,
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
    tys: [ctc4],
    waitIfNotPresent: false,
  });
  const {
    data: [v1485],
    secs: v1487,
    time: v1486,
    didSend: v27,
    from: v1484,
  } = txn1;
  const v1488 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v1488), {
    at: "./index.rsh:55:27:application",
    fs: [
      "at ./index.rsh:55:27:application call to [unknown function] (defined at: ./index.rsh:55:27:function exp)",
      'at ./index.rsh:55:27:application call to "liftedInteract" (defined at: ./index.rsh:55:27:application)',
    ],
    msg: "notify",
    who: "Deployer",
  });

  const v1501 = {
    bal: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    keepGoing: true,
    total_amount_claimed: stdlib.checkedBigNumberify(
      "<builtin>",
      stdlib.UInt_max,
      "0"
    ),
    total_rewards_allcoated: stdlib.checkedBigNumberify(
      "<builtin>",
      stdlib.UInt_max,
      "0"
    ),
    total_users_claim: stdlib.checkedBigNumberify(
      "<builtin>",
      stdlib.UInt_max,
      "0"
    ),
    usersNo: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
  };
  let v1502 = v1501;
  let v1503 = v1486;
  let v1506 = stdlib.checkedBigNumberify(
    "./index.rsh:48:9:after expr stmt semicolon",
    stdlib.UInt_max,
    "0"
  );

  let txn2 = txn1;
  while (
    await (async () => {
      const v1517 = v1502.keepGoing;

      return v1517;
    })()
  ) {
    const v1523 = v1502.bal;
    const v1524 = v1502.keepGoing;
    const v1525 = v1502.total_amount_claimed;
    const v1526 = v1502.total_rewards_allcoated;
    const v1527 = v1502.total_users_claim;
    const v1528 = v1502.usersNo;
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v1714],
      secs: v1716,
      time: v1715,
      didSend: v957,
      from: v1713,
    } = txn3;
    switch (v1714[0]) {
      case "Admin_addAdmin0_90": {
        const v1717 = v1714[1];
        undefined /* setApiDetails */;
        const v1723 = stdlib.addressEq(v1713, v1484);
        const v1724 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v1713),
          null
        );
        const v1725 = {
          None: 0,
          Some: 1,
        }[v1724[0]];
        const v1726 = stdlib.eq(
          v1725,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        const v1727 = v1723 ? true : v1726;
        stdlib.assert(v1727, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
          ],
          msg: "You Are unable to register another Admin",
          who: "Deployer",
        });
        const v1773 =
          v1717[
            stdlib.checkedBigNumberify(
              "./index.rsh:156:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        await stdlib.mapSet(map1, v1773, null);
        const v1782 = null;
        await txn3.getOutput("Admin_addAdmin", "v1782", ctc0, v1782);
        const v1795 = {
          bal: v1523,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v1528,
        };
        const cv1502 = v1795;
        const cv1503 = v1715;
        const cv1506 = v1506;

        v1502 = cv1502;
        v1503 = cv1503;
        v1506 = cv1506;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_deposit0_90": {
        const v2130 = v1714[1];
        undefined /* setApiDetails */;
        const v2143 =
          v2130[
            stdlib.checkedBigNumberify(
              "./index.rsh:95:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2144 = stdlib.addressEq(v1713, v1484);
        const v2145 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v1713),
          null
        );
        const v2146 = {
          None: 0,
          Some: 1,
        }[v2145[0]];
        const v2147 = stdlib.eq(
          v2146,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        const v2148 = v2144 ? true : v2147;
        stdlib.assert(v2148, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:95:32:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:95:32:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
          ],
          msg: "Only Admins can deposit",
          who: "Deployer",
        });
        const v2184 = stdlib.add(v1506, v2143);
        const v2219 = null;
        await txn3.getOutput("Admin_deposit", "v2219", ctc0, v2219);
        const v2232 = stdlib.safeAdd(v1523, v2143);
        const v2233 = {
          bal: v2232,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v1528,
        };
        const cv1502 = v2233;
        const cv1503 = v1715;
        const cv1506 = v2184;

        v1502 = cv1502;
        v1503 = cv1503;
        v1506 = cv1506;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_editUserReward0_90": {
        const v2543 = v1714[1];
        undefined /* setApiDetails */;
        const v2566 = stdlib.addressEq(v1713, v1484);
        const v2567 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v1713),
          null
        );
        const v2568 = {
          None: 0,
          Some: 1,
        }[v2567[0]];
        const v2569 = stdlib.eq(
          v2568,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        const v2570 = v2566 ? true : v2569;
        stdlib.assert(v2570, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:144:45:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:144:45:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
          ],
          msg: "Only Admins can deposit",
          who: "Deployer",
        });
        const v2649 =
          v2543[
            stdlib.checkedBigNumberify(
              "./index.rsh:144:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2650 =
          v2543[
            stdlib.checkedBigNumberify(
              "./index.rsh:144:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        await stdlib.mapSet(map0, v2649, v2650);
        const v2659 = null;
        await txn3.getOutput("Admin_editUserReward", "v2659", ctc0, v2659);
        const v2673 = {
          bal: v1523,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v1528,
        };
        const cv1502 = v2673;
        const cv1503 = v1715;
        const cv1506 = v1506;

        v1502 = cv1502;
        v1503 = cv1503;
        v1506 = cv1506;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_endContractAndTransfer0_90": {
        const v2956 = v1714[1];
        undefined /* setApiDetails */;
        const v2986 = stdlib.addressEq(v1484, v1713);
        stdlib.assert(v2986, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:281:44:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:281:44:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
          ],
          msg: "Cannot end contract without being Deployer",
          who: "Deployer",
        });
        const v3091 = null;
        await txn3.getOutput(
          "Admin_endContractAndTransfer",
          "v3091",
          ctc0,
          v3091
        );
        const v3103 = {
          bal: v1523,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v1528,
        };
        const cv1502 = v3103;
        const cv1503 = v1715;
        const cv1506 = v1506;

        v1502 = cv1502;
        v1503 = cv1503;
        v1506 = cv1506;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_revokeAdmin0_90": {
        const v3369 = v1714[1];
        undefined /* setApiDetails */;
        const v3403 = stdlib.addressEq(v1713, v1484);
        stdlib.assert(v3403, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:170:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:170:37:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
          ],
          msg: "Only the Deployer can revoke Admin Rights",
          who: "Deployer",
        });
        const v3519 =
          v3369[
            stdlib.checkedBigNumberify(
              "./index.rsh:170:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        await stdlib.mapSet(map1, v3519, undefined /* Nothing */);
        const v3524 = null;
        await txn3.getOutput("Admin_revokeAdmin", "v3524", ctc0, v3524);
        const v3537 = {
          bal: v1523,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v1528,
        };
        const cv1502 = v3537;
        const cv1503 = v1715;
        const cv1506 = v1506;

        v1502 = cv1502;
        v1503 = cv1503;
        v1506 = cv1506;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_setReward0_90": {
        const v3782 = v1714[1];
        undefined /* setApiDetails */;
        const v3820 =
          v3782[
            stdlib.checkedBigNumberify(
              "./index.rsh:108:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        const v3821 = stdlib.gt(v3820, v1523);
        const v3822 = v3821
          ? v3820
          : stdlib.checkedBigNumberify(
              "./index.rsh:111:30:decimal",
              stdlib.UInt_max,
              "0"
            );
        const v3836 = stdlib.add(v1506, v3822);
        const v3953 =
          v3782[
            stdlib.checkedBigNumberify(
              "./index.rsh:108:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v3958 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v3953),
          null
        );
        const v3959 = stdlib.fromSome(
          v3958,
          stdlib.checkedBigNumberify(
            "./index.rsh:113:60:decimal",
            stdlib.UInt_max,
            "0"
          )
        );
        const v3960 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, v3953),
          null
        );
        const v3961 = {
          None: 0,
          Some: 1,
        }[v3960[0]];
        const v3962 = stdlib.eq(
          v3961,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        if (v3962) {
          const v3963 = stdlib.safeAdd(v3959, v3820);
          await stdlib.mapSet(map0, v3953, v3963);
          const v3964 = true;
          await txn3.getOutput("Admin_setReward", "v3964", ctc11, v3964);
          let v3978;
          if (v3821) {
            const v3979 = stdlib.safeAdd(v1523, v3820);
            v3978 = v3979;
          } else {
            v3978 = v1523;
          }
          const v3980 = {
            bal: v3978,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const cv1502 = v3980;
          const cv1503 = v1715;
          const cv1506 = v3836;

          v1502 = cv1502;
          v1503 = cv1503;
          v1506 = cv1506;

          txn2 = txn3;
          continue;
        } else {
          if (v3821) {
            const v3982 = "Your user hasn't opted in                                                                                                                                                                               ";
            null;
            const v3983 = false;
            await txn3.getOutput("Admin_setReward", "v3983", ctc11, v3983);
            const v3998 = stdlib.safeAdd(v1523, v3820);
            const v3999 = {
              bal: v3998,
              keepGoing: v1524,
              total_amount_claimed: v1525,
              total_rewards_allcoated: v1526,
              total_users_claim: v1527,
              usersNo: v1528,
            };
            const cv1502 = v3999;
            const cv1503 = v1715;
            const cv1506 = v3836;

            v1502 = cv1502;
            v1503 = cv1503;
            v1506 = cv1506;

            txn2 = txn3;
            continue;
          } else {
            const v4001 =
              "The balance you are trying to set for the user is invalid and they haven't opted in                                                                                                                     ";
            null;
            const v4002 = false;
            await txn3.getOutput("Admin_setReward", "v4002", ctc11, v4002);
            const v4018 = {
              bal: v1523,
              keepGoing: v1524,
              total_amount_claimed: v1525,
              total_rewards_allcoated: v1526,
              total_users_claim: v1527,
              usersNo: v1528,
            };
            const cv1502 = v4018;
            const cv1503 = v1715;
            const cv1506 = v3836;

            v1502 = cv1502;
            v1503 = cv1503;
            v1506 = cv1506;

            txn2 = txn3;
            continue;
          }
        }
        break;
      }
      case "User_claim0_90": {
        const v4195 = v1714[1];
        undefined /* setApiDetails */;
        const v4238 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v1713),
          null
        );
        const v4239 = {
          None: 0,
          Some: 1,
        }[v4238[0]];
        const v4240 = stdlib.eq(
          v4239,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v4240, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
          ],
          msg: "Cannot claim because you have not earned reward",
          who: "Deployer",
        });
        const v4434 =
          v4195[
            stdlib.checkedBigNumberify(
              "./index.rsh:224:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v4441 = stdlib.fromSome(
          v4238,
          stdlib.checkedBigNumberify(
            "./index.rsh:232:60:decimal",
            stdlib.UInt_max,
            "0"
          )
        );
        const v4442 = stdlib.gt(v4434, v4441);
        const v4443 = v4442 ? v4441 : v4434;
        const v4445 = stdlib.gt(v1506, v4443);
        const v4446 = v4445 ? v4443 : v1506;
        const v4448 = stdlib.ge(v4441, v1506);
        if (v4448) {
          null;
          const v4449 = false;
          await txn3.getOutput("User_claim", "v4449", ctc11, v4449);
          const v4462 = stdlib.safeAdd(
            v1528,
            stdlib.checkedBigNumberify(
              "./index.rsh:238:57:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4463 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v4462,
          };
          const cv1502 = v4463;
          const cv1503 = v1715;
          const cv1506 = v1506;

          v1502 = cv1502;
          v1503 = cv1503;
          v1506 = cv1506;

          txn2 = txn3;
          continue;
        } else {
          const v4465 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, v1713),
            null
          );
          const v4466 = {
            None: 0,
            Some: 1,
          }[v4465[0]];
          const v4467 = stdlib.eq(
            v4466,
            stdlib.checkedBigNumberify(
              "reach standard library:38:41:application",
              stdlib.UInt_max,
              "1"
            )
          );
          if (v4467) {
            const v4494 = true;
            await txn3.getOutput("User_claim", "v4494", ctc11, v4494);
            const v4504 = stdlib.sub(v1506, v4446);
            await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
            const v4511 = stdlib.safeSub(v1523, v4446);
            const v4512 = stdlib.safeAdd(
              v1527,
              stdlib.checkedBigNumberify(
                "./index.rsh:261:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4513 = stdlib.safeAdd(v1525, v4446);
            const v4514 = {
              bal: v4511,
              keepGoing: v1524,
              total_amount_claimed: v4513,
              total_rewards_allcoated: v1526,
              total_users_claim: v4512,
              usersNo: v1528,
            };
            const cv1502 = v4514;
            const cv1503 = v1715;
            const cv1506 = v4504;

            v1502 = cv1502;
            v1503 = cv1503;
            v1506 = cv1506;

            txn2 = txn3;
            continue;
          } else {
            const v4469 = true;
            await txn3.getOutput("User_claim", "v4469", ctc11, v4469);
            const v4476 = {
              addr: v1713,
              amount: v4446,
              projectName: v1485,
            };
            null;
            await stdlib.mapSet(map2, v1713, null);
            const v4481 = stdlib.sub(v1506, v4446);
            await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
            const v4488 = stdlib.safeAdd(
              v1528,
              stdlib.checkedBigNumberify(
                "./index.rsh:249:34:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4489 = stdlib.safeSub(v1523, v4446);
            const v4490 = stdlib.safeAdd(
              v1527,
              stdlib.checkedBigNumberify(
                "./index.rsh:251:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4491 = stdlib.safeAdd(v1525, v4446);
            const v4492 = {
              bal: v4489,
              keepGoing: v1524,
              total_amount_claimed: v4491,
              total_rewards_allcoated: v1526,
              total_users_claim: v4490,
              usersNo: v4488,
            };
            const cv1502 = v4492;
            const cv1503 = v1715;
            const cv1506 = v4481;

            v1502 = cv1502;
            v1503 = cv1503;
            v1506 = cv1506;

            txn2 = txn3;
            continue;
          }
        }
        break;
      }
      case "User_claimAll0_90": {
        const v4608 = v1714[1];
        undefined /* setApiDetails */;
        const v4656 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v1713),
          null
        );
        const v4657 = {
          None: 0,
          Some: 1,
        }[v4656[0]];
        const v4658 = stdlib.eq(
          v4657,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v4658, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)",
            "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
          ],
          msg: "Cannot claim because you have not earned reward",
          who: "Deployer",
        });
        const v4935 = stdlib.fromSome(
          v4656,
          stdlib.checkedBigNumberify(
            "./index.rsh:189:60:decimal",
            stdlib.UInt_max,
            "0"
          )
        );
        const v4937 = stdlib.gt(v1506, v4935);
        const v4938 = v4937 ? v4935 : v1506;
        const v4940 = stdlib.ge(v4935, v1506);
        if (v4940) {
          null;
          const v4941 = false;
          await txn3.getOutput("User_claimAll", "v4941", ctc11, v4941);
          const v4953 = stdlib.safeAdd(
            v1528,
            stdlib.checkedBigNumberify(
              "./index.rsh:194:57:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4954 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v4953,
          };
          const cv1502 = v4954;
          const cv1503 = v1715;
          const cv1506 = v1506;

          v1502 = cv1502;
          v1503 = cv1503;
          v1506 = cv1506;

          txn2 = txn3;
          continue;
        } else {
          const v4956 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, v1713),
            null
          );
          const v4957 = {
            None: 0,
            Some: 1,
          }[v4956[0]];
          const v4958 = stdlib.eq(
            v4957,
            stdlib.checkedBigNumberify(
              "reach standard library:38:41:application",
              stdlib.UInt_max,
              "1"
            )
          );
          if (v4958) {
            const v4984 = true;
            await txn3.getOutput("User_claimAll", "v4984", ctc11, v4984);
            const v4993 = stdlib.sub(v1506, v4938);
            await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
            const v5000 = stdlib.safeSub(v1523, v4938);
            const v5001 = stdlib.safeAdd(
              v1527,
              stdlib.checkedBigNumberify(
                "./index.rsh:217:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v5002 = stdlib.safeAdd(v1525, v4938);
            const v5003 = {
              bal: v5000,
              keepGoing: v1524,
              total_amount_claimed: v5002,
              total_rewards_allcoated: v1526,
              total_users_claim: v5001,
              usersNo: v1528,
            };
            const cv1502 = v5003;
            const cv1503 = v1715;
            const cv1506 = v4993;

            v1502 = cv1502;
            v1503 = cv1503;
            v1506 = cv1506;

            txn2 = txn3;
            continue;
          } else {
            const v4960 = true;
            await txn3.getOutput("User_claimAll", "v4960", ctc11, v4960);
            const v4966 = {
              addr: v1713,
              amount: v4938,
              projectName: v1485,
            };
            null;
            await stdlib.mapSet(map2, v1713, null);
            const v4971 = stdlib.sub(v1506, v4938);
            await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
            const v4978 = stdlib.safeAdd(
              v1528,
              stdlib.checkedBigNumberify(
                "./index.rsh:205:34:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4979 = stdlib.safeSub(v1523, v4938);
            const v4980 = stdlib.safeAdd(
              v1527,
              stdlib.checkedBigNumberify(
                "./index.rsh:207:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4981 = stdlib.safeAdd(v1525, v4938);
            const v4982 = {
              bal: v4979,
              keepGoing: v1524,
              total_amount_claimed: v4981,
              total_rewards_allcoated: v1526,
              total_users_claim: v4980,
              usersNo: v4978,
            };
            const cv1502 = v4982;
            const cv1503 = v1715;
            const cv1506 = v4971;

            v1502 = cv1502;
            v1503 = cv1503;
            v1506 = cv1506;

            txn2 = txn3;
            continue;
          }
        }
        break;
      }
      case "User_optin0_90": {
        const v5021 = v1714[1];
        undefined /* setApiDetails */;
        await stdlib.mapSet(map3, v1713, null);
        const v5420 = null;
        await txn3.getOutput("User_optin", "v5420", ctc0, v5420);
        const v5432 = {
          bal: v1523,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v1528,
        };
        const cv1502 = v5432;
        const cv1503 = v1715;
        const cv1506 = v1506;

        v1502 = cv1502;
        v1503 = cv1503;
        v1506 = cv1506;

        txn2 = txn3;
        continue;
        break;
      }
    }
  }
  const v5444 = stdlib.sub(v1506, v1506);
  const v5446 = stdlib.le(await ctc.getBalance(), v5444)
    ? stdlib.checkedBigNumberify(
        "./index.rsh:294:29:application",
        stdlib.UInt_max,
        "0"
      )
    : stdlib.safeSub(await ctc.getBalance(), v5444);
  return;
}
export async function _User_claim3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _User_claim3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _User_claim3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc8,
    Admin_deposit0_90: ctc7,
    Admin_editUserReward0_90: ctc9,
    Admin_endContractAndTransfer0_90: ctc10,
    Admin_revokeAdmin0_90: ctc8,
    Admin_setReward0_90: ctc9,
    User_claim0_90: ctc7,
    User_claimAll0_90: ctc10,
    User_optin0_90: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1630 = ctc.selfAddress();
  const v1632 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)",
      'at ./index.rsh:70:37:application call to "runUser_claim0_90" (defined at: ./index.rsh:224:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "User_claim",
  });
  const v1635 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, v1630),
    null
  );
  const v1636 = {
    None: 0,
    Some: 1,
  }[v1635[0]];
  const v1637 = stdlib.eq(
    v1636,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v1637, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)",
      'at ./index.rsh:70:37:application call to "runUser_claim0_90" (defined at: ./index.rsh:224:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "Cannot claim because you have not earned reward",
    who: "User_claim",
  });
  const v1644 = ["User_claim0_90", v1632];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1644,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:230:9:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "User_claim",
          });
          const v4238 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v1713),
            null
          );
          const v4434 =
            v4195[
              stdlib.checkedBigNumberify(
                "./index.rsh:224:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v4441 = stdlib.fromSome(
            v4238,
            stdlib.checkedBigNumberify(
              "./index.rsh:232:60:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v4442 = stdlib.gt(v4434, v4441);
          const v4443 = v4442 ? v4441 : v4434;
          const v4445 = stdlib.gt(v1506, v4443);
          const v4446 = v4445 ? v4443 : v1506;
          const v4448 = stdlib.ge(v4441, v1506);
          if (v4448) {
            null;
            const v4449 = false;
            const v4450 = await txn1.getOutput(
              "User_claim",
              "v4449",
              ctc6,
              v4449
            );

            const v4462 = stdlib.safeAdd(
              v1528,
              stdlib.checkedBigNumberify(
                "./index.rsh:238:57:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4463 = {
              bal: v1523,
              keepGoing: v1524,
              total_amount_claimed: v1525,
              total_rewards_allcoated: v1526,
              total_users_claim: v1527,
              usersNo: v4462,
            };
            const v9550 = v1506;
            const v9551 = v4463.keepGoing;
            if (v9551) {
              const v9552 = v4463.bal;
              const v9554 = v4463.total_amount_claimed;
              const v9555 = v4463.total_rewards_allcoated;
              const v9556 = v4463.total_users_claim;
              const v9557 = v4463.usersNo;
              sim_r.isHalt = false;
            } else {
              const v9561 = stdlib.sub(v1506, v1506);
              sim_r.txns.push({
                kind: "from",
                to: v1484,
                tok: undefined /* Nothing */,
              });
              const v9562 = stdlib.le(await ctc.getBalance(), v9561)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:294:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v9561);
              sim_r.txns.push({
                kind: "from",
                to: v1484,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          } else {
            const v4465 = stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, v1713),
              null
            );
            const v4466 = {
              None: 0,
              Some: 1,
            }[v4465[0]];
            const v4467 = stdlib.eq(
              v4466,
              stdlib.checkedBigNumberify(
                "reach standard library:38:41:application",
                stdlib.UInt_max,
                "1"
              )
            );
            if (v4467) {
              const v4494 = true;
              const v4495 = await txn1.getOutput(
                "User_claim",
                "v4494",
                ctc6,
                v4494
              );

              const v4504 = stdlib.sub(v1506, v4446);
              sim_r.txns.push({
                kind: "from",
                to: v1713,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(sim_r, 0, v1713, undefined /* Nothing */);
              const v4511 = stdlib.safeSub(v1523, v4446);
              const v4512 = stdlib.safeAdd(
                v1527,
                stdlib.checkedBigNumberify(
                  "./index.rsh:261:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4513 = stdlib.safeAdd(v1525, v4446);
              const v4514 = {
                bal: v4511,
                keepGoing: v1524,
                total_amount_claimed: v4513,
                total_rewards_allcoated: v1526,
                total_users_claim: v4512,
                usersNo: v1528,
              };
              const v9565 = v4504;
              const v9566 = v4514.keepGoing;
              if (v9566) {
                const v9567 = v4514.bal;
                const v9569 = v4514.total_amount_claimed;
                const v9570 = v4514.total_rewards_allcoated;
                const v9571 = v4514.total_users_claim;
                const v9572 = v4514.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9576 = stdlib.sub(v4504, v4504);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                const v9577 = stdlib.le(await ctc.getBalance(), v9576)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:294:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9576);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            } else {
              const v4469 = true;
              const v4470 = await txn1.getOutput(
                "User_claim",
                "v4469",
                ctc6,
                v4469
              );

              const v4476 = {
                addr: v1713,
                amount: v4446,
                projectName: v1485,
              };
              null;
              await stdlib.simMapSet(sim_r, 2, v1713, null);
              const v4481 = stdlib.sub(v1506, v4446);
              sim_r.txns.push({
                kind: "from",
                to: v1713,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(sim_r, 0, v1713, undefined /* Nothing */);
              const v4488 = stdlib.safeAdd(
                v1528,
                stdlib.checkedBigNumberify(
                  "./index.rsh:249:34:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4489 = stdlib.safeSub(v1523, v4446);
              const v4490 = stdlib.safeAdd(
                v1527,
                stdlib.checkedBigNumberify(
                  "./index.rsh:251:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4491 = stdlib.safeAdd(v1525, v4446);
              const v4492 = {
                bal: v4489,
                keepGoing: v1524,
                total_amount_claimed: v4491,
                total_rewards_allcoated: v1526,
                total_users_claim: v4490,
                usersNo: v4488,
              };
              const v9580 = v4481;
              const v9581 = v4492.keepGoing;
              if (v9581) {
                const v9582 = v4492.bal;
                const v9584 = v4492.total_amount_claimed;
                const v9585 = v4492.total_rewards_allcoated;
                const v9586 = v4492.total_users_claim;
                const v9587 = v4492.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9591 = stdlib.sub(v4481, v4481);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                const v9592 = stdlib.le(await ctc.getBalance(), v9591)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:294:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9591);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            }
          }
          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      undefined /* setApiDetails */;
      const v4238 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v1713),
        null
      );
      const v4239 = {
        None: 0,
        Some: 1,
      }[v4238[0]];
      const v4240 = stdlib.eq(
        v4239,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v4240, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:224:29:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:224:29:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
        ],
        msg: "Cannot claim because you have not earned reward",
        who: "User_claim",
      });
      const v4434 =
        v4195[
          stdlib.checkedBigNumberify(
            "./index.rsh:224:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v4441 = stdlib.fromSome(
        v4238,
        stdlib.checkedBigNumberify(
          "./index.rsh:232:60:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      const v4442 = stdlib.gt(v4434, v4441);
      const v4443 = v4442 ? v4441 : v4434;
      const v4445 = stdlib.gt(v1506, v4443);
      const v4446 = v4445 ? v4443 : v1506;
      const v4448 = stdlib.ge(v4441, v1506);
      if (v4448) {
        null;
        const v4449 = false;
        const v4450 = await txn1.getOutput("User_claim", "v4449", ctc6, v4449);
        if (v957) {
          stdlib.protect(ctc0, await interact.out(v4195, v4450), {
            at: "./index.rsh:224:11:application",
            fs: [
              "at ./index.rsh:224:11:application call to [unknown function] (defined at: ./index.rsh:224:11:function exp)",
              'at ./index.rsh:237:16:application call to "ret" (defined at: ./index.rsh:231:15:function exp)',
              "at ./index.rsh:231:15:application call to [unknown function] (defined at: ./index.rsh:231:15:function exp)",
            ],
            msg: "out",
            who: "User_claim",
          });
        } else {
        }

        const v4462 = stdlib.safeAdd(
          v1528,
          stdlib.checkedBigNumberify(
            "./index.rsh:238:57:decimal",
            stdlib.UInt_max,
            "1"
          )
        );
        const v4463 = {
          bal: v1523,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v4462,
        };
        const v9550 = v1506;
        const v9551 = v4463.keepGoing;
        if (v9551) {
          const v9552 = v4463.bal;
          const v9554 = v4463.total_amount_claimed;
          const v9555 = v4463.total_rewards_allcoated;
          const v9556 = v4463.total_users_claim;
          const v9557 = v4463.usersNo;
          return;
        } else {
          const v9561 = stdlib.sub(v1506, v1506);
          const v9562 = stdlib.le(await ctc.getBalance(), v9561)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:294:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v9561);
          return;
        }
      } else {
        const v4465 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v1713),
          null
        );
        const v4466 = {
          None: 0,
          Some: 1,
        }[v4465[0]];
        const v4467 = stdlib.eq(
          v4466,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        if (v4467) {
          const v4494 = true;
          const v4495 = await txn1.getOutput(
            "User_claim",
            "v4494",
            ctc6,
            v4494
          );
          if (v957) {
            stdlib.protect(ctc0, await interact.out(v4195, v4495), {
              at: "./index.rsh:224:11:application",
              fs: [
                "at ./index.rsh:224:11:application call to [unknown function] (defined at: ./index.rsh:224:11:function exp)",
                'at ./index.rsh:255:16:application call to "ret" (defined at: ./index.rsh:231:15:function exp)',
                "at ./index.rsh:231:15:application call to [unknown function] (defined at: ./index.rsh:231:15:function exp)",
              ],
              msg: "out",
              who: "User_claim",
            });
          } else {
          }

          const v4504 = stdlib.sub(v1506, v4446);
          await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
          const v4511 = stdlib.safeSub(v1523, v4446);
          const v4512 = stdlib.safeAdd(
            v1527,
            stdlib.checkedBigNumberify(
              "./index.rsh:261:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4513 = stdlib.safeAdd(v1525, v4446);
          const v4514 = {
            bal: v4511,
            keepGoing: v1524,
            total_amount_claimed: v4513,
            total_rewards_allcoated: v1526,
            total_users_claim: v4512,
            usersNo: v1528,
          };
          const v9565 = v4504;
          const v9566 = v4514.keepGoing;
          if (v9566) {
            const v9567 = v4514.bal;
            const v9569 = v4514.total_amount_claimed;
            const v9570 = v4514.total_rewards_allcoated;
            const v9571 = v4514.total_users_claim;
            const v9572 = v4514.usersNo;
            return;
          } else {
            const v9576 = stdlib.sub(v4504, v4504);
            const v9577 = stdlib.le(await ctc.getBalance(), v9576)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9576);
            return;
          }
        } else {
          const v4469 = true;
          const v4470 = await txn1.getOutput(
            "User_claim",
            "v4469",
            ctc6,
            v4469
          );
          if (v957) {
            stdlib.protect(ctc0, await interact.out(v4195, v4470), {
              at: "./index.rsh:224:11:application",
              fs: [
                "at ./index.rsh:224:11:application call to [unknown function] (defined at: ./index.rsh:224:11:function exp)",
                'at ./index.rsh:240:16:application call to "ret" (defined at: ./index.rsh:231:15:function exp)',
                "at ./index.rsh:231:15:application call to [unknown function] (defined at: ./index.rsh:231:15:function exp)",
              ],
              msg: "out",
              who: "User_claim",
            });
          } else {
          }

          const v4476 = {
            addr: v1713,
            amount: v4446,
            projectName: v1485,
          };
          null;
          await stdlib.mapSet(map2, v1713, null);
          const v4481 = stdlib.sub(v1506, v4446);
          await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
          const v4488 = stdlib.safeAdd(
            v1528,
            stdlib.checkedBigNumberify(
              "./index.rsh:249:34:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4489 = stdlib.safeSub(v1523, v4446);
          const v4490 = stdlib.safeAdd(
            v1527,
            stdlib.checkedBigNumberify(
              "./index.rsh:251:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4491 = stdlib.safeAdd(v1525, v4446);
          const v4492 = {
            bal: v4489,
            keepGoing: v1524,
            total_amount_claimed: v4491,
            total_rewards_allcoated: v1526,
            total_users_claim: v4490,
            usersNo: v4488,
          };
          const v9580 = v4481;
          const v9581 = v4492.keepGoing;
          if (v9581) {
            const v9582 = v4492.bal;
            const v9584 = v4492.total_amount_claimed;
            const v9585 = v4492.total_rewards_allcoated;
            const v9586 = v4492.total_users_claim;
            const v9587 = v4492.usersNo;
            return;
          } else {
            const v9591 = stdlib.sub(v4481, v4481);
            const v9592 = stdlib.le(await ctc.getBalance(), v9591)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9591);
            return;
          }
        }
      }
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function _User_claimAll3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _User_claimAll3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _User_claimAll3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc8,
    Admin_deposit0_90: ctc9,
    Admin_editUserReward0_90: ctc10,
    Admin_endContractAndTransfer0_90: ctc7,
    Admin_revokeAdmin0_90: ctc8,
    Admin_setReward0_90: ctc10,
    User_claim0_90: ctc9,
    User_claimAll0_90: ctc7,
    User_optin0_90: ctc7,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1618 = ctc.selfAddress();
  const v1620 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)",
      'at ./index.rsh:70:37:application call to "runUser_claimAll0_90" (defined at: ./index.rsh:181:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "User_claimAll",
  });
  const v1621 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, v1618),
    null
  );
  const v1622 = {
    None: 0,
    Some: 1,
  }[v1621[0]];
  const v1623 = stdlib.eq(
    v1622,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v1623, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)",
      'at ./index.rsh:70:37:application call to "runUser_claimAll0_90" (defined at: ./index.rsh:181:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "Cannot claim because you have not earned reward",
    who: "User_claimAll",
  });
  const v1628 = ["User_claimAll0_90", v1620];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1628,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:187:9:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "User_claimAll",
          });
          const v4656 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v1713),
            null
          );
          const v4935 = stdlib.fromSome(
            v4656,
            stdlib.checkedBigNumberify(
              "./index.rsh:189:60:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v4937 = stdlib.gt(v1506, v4935);
          const v4938 = v4937 ? v4935 : v1506;
          const v4940 = stdlib.ge(v4935, v1506);
          if (v4940) {
            null;
            const v4941 = false;
            const v4942 = await txn1.getOutput(
              "User_claimAll",
              "v4941",
              ctc6,
              v4941
            );

            const v4953 = stdlib.safeAdd(
              v1528,
              stdlib.checkedBigNumberify(
                "./index.rsh:194:57:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4954 = {
              bal: v1523,
              keepGoing: v1524,
              total_amount_claimed: v1525,
              total_rewards_allcoated: v1526,
              total_users_claim: v1527,
              usersNo: v4953,
            };
            const v9820 = v1506;
            const v9821 = v4954.keepGoing;
            if (v9821) {
              const v9822 = v4954.bal;
              const v9824 = v4954.total_amount_claimed;
              const v9825 = v4954.total_rewards_allcoated;
              const v9826 = v4954.total_users_claim;
              const v9827 = v4954.usersNo;
              sim_r.isHalt = false;
            } else {
              const v9831 = stdlib.sub(v1506, v1506);
              sim_r.txns.push({
                kind: "from",
                to: v1484,
                tok: undefined /* Nothing */,
              });
              const v9832 = stdlib.le(await ctc.getBalance(), v9831)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:294:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v9831);
              sim_r.txns.push({
                kind: "from",
                to: v1484,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          } else {
            const v4956 = stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, v1713),
              null
            );
            const v4957 = {
              None: 0,
              Some: 1,
            }[v4956[0]];
            const v4958 = stdlib.eq(
              v4957,
              stdlib.checkedBigNumberify(
                "reach standard library:38:41:application",
                stdlib.UInt_max,
                "1"
              )
            );
            if (v4958) {
              const v4984 = true;
              const v4985 = await txn1.getOutput(
                "User_claimAll",
                "v4984",
                ctc6,
                v4984
              );

              const v4993 = stdlib.sub(v1506, v4938);
              sim_r.txns.push({
                kind: "from",
                to: v1713,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(sim_r, 0, v1713, undefined /* Nothing */);
              const v5000 = stdlib.safeSub(v1523, v4938);
              const v5001 = stdlib.safeAdd(
                v1527,
                stdlib.checkedBigNumberify(
                  "./index.rsh:217:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v5002 = stdlib.safeAdd(v1525, v4938);
              const v5003 = {
                bal: v5000,
                keepGoing: v1524,
                total_amount_claimed: v5002,
                total_rewards_allcoated: v1526,
                total_users_claim: v5001,
                usersNo: v1528,
              };
              const v9835 = v4993;
              const v9836 = v5003.keepGoing;
              if (v9836) {
                const v9837 = v5003.bal;
                const v9839 = v5003.total_amount_claimed;
                const v9840 = v5003.total_rewards_allcoated;
                const v9841 = v5003.total_users_claim;
                const v9842 = v5003.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9846 = stdlib.sub(v4993, v4993);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                const v9847 = stdlib.le(await ctc.getBalance(), v9846)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:294:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9846);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            } else {
              const v4960 = true;
              const v4961 = await txn1.getOutput(
                "User_claimAll",
                "v4960",
                ctc6,
                v4960
              );

              const v4966 = {
                addr: v1713,
                amount: v4938,
                projectName: v1485,
              };
              null;
              await stdlib.simMapSet(sim_r, 2, v1713, null);
              const v4971 = stdlib.sub(v1506, v4938);
              sim_r.txns.push({
                kind: "from",
                to: v1713,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(sim_r, 0, v1713, undefined /* Nothing */);
              const v4978 = stdlib.safeAdd(
                v1528,
                stdlib.checkedBigNumberify(
                  "./index.rsh:205:34:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4979 = stdlib.safeSub(v1523, v4938);
              const v4980 = stdlib.safeAdd(
                v1527,
                stdlib.checkedBigNumberify(
                  "./index.rsh:207:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4981 = stdlib.safeAdd(v1525, v4938);
              const v4982 = {
                bal: v4979,
                keepGoing: v1524,
                total_amount_claimed: v4981,
                total_rewards_allcoated: v1526,
                total_users_claim: v4980,
                usersNo: v4978,
              };
              const v9850 = v4971;
              const v9851 = v4982.keepGoing;
              if (v9851) {
                const v9852 = v4982.bal;
                const v9854 = v4982.total_amount_claimed;
                const v9855 = v4982.total_rewards_allcoated;
                const v9856 = v4982.total_users_claim;
                const v9857 = v4982.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9861 = stdlib.sub(v4971, v4971);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                const v9862 = stdlib.le(await ctc.getBalance(), v9861)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:294:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9861);
                sim_r.txns.push({
                  kind: "from",
                  to: v1484,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            }
          }
          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      undefined /* setApiDetails */;
      const v4656 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v1713),
        null
      );
      const v4657 = {
        None: 0,
        Some: 1,
      }[v4656[0]];
      const v4658 = stdlib.eq(
        v4657,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v4658, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:181:29:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:181:29:function exp)",
          "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
        ],
        msg: "Cannot claim because you have not earned reward",
        who: "User_claimAll",
      });
      const v4935 = stdlib.fromSome(
        v4656,
        stdlib.checkedBigNumberify(
          "./index.rsh:189:60:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      const v4937 = stdlib.gt(v1506, v4935);
      const v4938 = v4937 ? v4935 : v1506;
      const v4940 = stdlib.ge(v4935, v1506);
      if (v4940) {
        null;
        const v4941 = false;
        const v4942 = await txn1.getOutput(
          "User_claimAll",
          "v4941",
          ctc6,
          v4941
        );
        if (v957) {
          stdlib.protect(ctc0, await interact.out(v4608, v4942), {
            at: "./index.rsh:181:11:application",
            fs: [
              "at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)",
              'at ./index.rsh:193:16:application call to "ret" (defined at: ./index.rsh:188:15:function exp)',
              "at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)",
            ],
            msg: "out",
            who: "User_claimAll",
          });
        } else {
        }

        const v4953 = stdlib.safeAdd(
          v1528,
          stdlib.checkedBigNumberify(
            "./index.rsh:194:57:decimal",
            stdlib.UInt_max,
            "1"
          )
        );
        const v4954 = {
          bal: v1523,
          keepGoing: v1524,
          total_amount_claimed: v1525,
          total_rewards_allcoated: v1526,
          total_users_claim: v1527,
          usersNo: v4953,
        };
        const v9820 = v1506;
        const v9821 = v4954.keepGoing;
        if (v9821) {
          const v9822 = v4954.bal;
          const v9824 = v4954.total_amount_claimed;
          const v9825 = v4954.total_rewards_allcoated;
          const v9826 = v4954.total_users_claim;
          const v9827 = v4954.usersNo;
          return;
        } else {
          const v9831 = stdlib.sub(v1506, v1506);
          const v9832 = stdlib.le(await ctc.getBalance(), v9831)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:294:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v9831);
          return;
        }
      } else {
        const v4956 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v1713),
          null
        );
        const v4957 = {
          None: 0,
          Some: 1,
        }[v4956[0]];
        const v4958 = stdlib.eq(
          v4957,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        if (v4958) {
          const v4984 = true;
          const v4985 = await txn1.getOutput(
            "User_claimAll",
            "v4984",
            ctc6,
            v4984
          );
          if (v957) {
            stdlib.protect(ctc0, await interact.out(v4608, v4985), {
              at: "./index.rsh:181:11:application",
              fs: [
                "at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)",
                'at ./index.rsh:211:16:application call to "ret" (defined at: ./index.rsh:188:15:function exp)',
                "at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)",
              ],
              msg: "out",
              who: "User_claimAll",
            });
          } else {
          }

          const v4993 = stdlib.sub(v1506, v4938);
          await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
          const v5000 = stdlib.safeSub(v1523, v4938);
          const v5001 = stdlib.safeAdd(
            v1527,
            stdlib.checkedBigNumberify(
              "./index.rsh:217:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v5002 = stdlib.safeAdd(v1525, v4938);
          const v5003 = {
            bal: v5000,
            keepGoing: v1524,
            total_amount_claimed: v5002,
            total_rewards_allcoated: v1526,
            total_users_claim: v5001,
            usersNo: v1528,
          };
          const v9835 = v4993;
          const v9836 = v5003.keepGoing;
          if (v9836) {
            const v9837 = v5003.bal;
            const v9839 = v5003.total_amount_claimed;
            const v9840 = v5003.total_rewards_allcoated;
            const v9841 = v5003.total_users_claim;
            const v9842 = v5003.usersNo;
            return;
          } else {
            const v9846 = stdlib.sub(v4993, v4993);
            const v9847 = stdlib.le(await ctc.getBalance(), v9846)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9846);
            return;
          }
        } else {
          const v4960 = true;
          const v4961 = await txn1.getOutput(
            "User_claimAll",
            "v4960",
            ctc6,
            v4960
          );
          if (v957) {
            stdlib.protect(ctc0, await interact.out(v4608, v4961), {
              at: "./index.rsh:181:11:application",
              fs: [
                "at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)",
                'at ./index.rsh:196:16:application call to "ret" (defined at: ./index.rsh:188:15:function exp)',
                "at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)",
              ],
              msg: "out",
              who: "User_claimAll",
            });
          } else {
          }

          const v4966 = {
            addr: v1713,
            amount: v4938,
            projectName: v1485,
          };
          null;
          await stdlib.mapSet(map2, v1713, null);
          const v4971 = stdlib.sub(v1506, v4938);
          await stdlib.mapSet(map0, v1713, undefined /* Nothing */);
          const v4978 = stdlib.safeAdd(
            v1528,
            stdlib.checkedBigNumberify(
              "./index.rsh:205:34:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4979 = stdlib.safeSub(v1523, v4938);
          const v4980 = stdlib.safeAdd(
            v1527,
            stdlib.checkedBigNumberify(
              "./index.rsh:207:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4981 = stdlib.safeAdd(v1525, v4938);
          const v4982 = {
            bal: v4979,
            keepGoing: v1524,
            total_amount_claimed: v4981,
            total_rewards_allcoated: v1526,
            total_users_claim: v4980,
            usersNo: v4978,
          };
          const v9850 = v4971;
          const v9851 = v4982.keepGoing;
          if (v9851) {
            const v9852 = v4982.bal;
            const v9854 = v4982.total_amount_claimed;
            const v9855 = v4982.total_rewards_allcoated;
            const v9856 = v4982.total_users_claim;
            const v9857 = v4982.usersNo;
            return;
          } else {
            const v9861 = stdlib.sub(v4971, v4971);
            const v9862 = stdlib.le(await ctc.getBalance(), v9861)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9861);
            return;
          }
        }
      }
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      return;
      break;
    }
  }
}
export async function _User_optin3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _User_optin3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _User_optin3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30")
  );
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_90: ctc8,
    Admin_deposit0_90: ctc9,
    Admin_editUserReward0_90: ctc10,
    Admin_endContractAndTransfer0_90: ctc7,
    Admin_revokeAdmin0_90: ctc8,
    Admin_setReward0_90: ctc10,
    User_claim0_90: ctc9,
    User_claimAll0_90: ctc7,
    User_optin0_90: ctc7,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  });

  const [v1484, v1485, v1506, v1523, v1524, v1525, v1526, v1527, v1528] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1]
    );
  const v1648 = stdlib.protect(ctc7, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:271:26:application call to [unknown function] (defined at: ./index.rsh:271:26:function exp)",
      'at ./index.rsh:70:37:application call to "runUser_optin0_90" (defined at: ./index.rsh:271:10:function exp)',
      "at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)",
    ],
    msg: "in",
    who: "User_optin",
  });
  const v1652 = ["User_optin0_90", v1648];

  const txn1 = await ctc.sendrecv({
    args: [
      v1484,
      v1485,
      v1506,
      v1523,
      v1524,
      v1525,
      v1526,
      v1527,
      v1528,
      v1652,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:273:9:decimal",
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
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);

      const {
        data: [v1714],
        secs: v1716,
        time: v1715,
        didSend: v957,
        from: v1713,
      } = txn1;

      switch (v1714[0]) {
        case "Admin_addAdmin0_90": {
          const v1717 = v1714[1];

          break;
        }
        case "Admin_deposit0_90": {
          const v2130 = v1714[1];

          break;
        }
        case "Admin_editUserReward0_90": {
          const v2543 = v1714[1];

          break;
        }
        case "Admin_endContractAndTransfer0_90": {
          const v2956 = v1714[1];

          break;
        }
        case "Admin_revokeAdmin0_90": {
          const v3369 = v1714[1];

          break;
        }
        case "Admin_setReward0_90": {
          const v3782 = v1714[1];

          break;
        }
        case "User_claim0_90": {
          const v4195 = v1714[1];

          break;
        }
        case "User_claimAll0_90": {
          const v4608 = v1714[1];

          break;
        }
        case "User_optin0_90": {
          const v5021 = v1714[1];
          sim_r.txns.push({
            kind: "api",
            who: "User_optin",
          });
          await stdlib.simMapSet(sim_r, 3, v1713, null);
          const v5420 = null;
          const v5421 = await txn1.getOutput(
            "User_optin",
            "v5420",
            ctc0,
            v5420
          );

          const v5432 = {
            bal: v1523,
            keepGoing: v1524,
            total_amount_claimed: v1525,
            total_rewards_allcoated: v1526,
            total_users_claim: v1527,
            usersNo: v1528,
          };
          const v10090 = v1506;
          const v10091 = v5432.keepGoing;
          if (v10091) {
            const v10092 = v5432.bal;
            const v10094 = v5432.total_amount_claimed;
            const v10095 = v5432.total_rewards_allcoated;
            const v10096 = v5432.total_users_claim;
            const v10097 = v5432.usersNo;
            sim_r.isHalt = false;
          } else {
            const v10101 = stdlib.sub(v1506, v1506);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            const v10102 = stdlib.le(await ctc.getBalance(), v10101)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:294:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10101);
            sim_r.txns.push({
              kind: "from",
              to: v1484,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v1714],
    secs: v1716,
    time: v1715,
    didSend: v957,
    from: v1713,
  } = txn1;
  switch (v1714[0]) {
    case "Admin_addAdmin0_90": {
      const v1717 = v1714[1];
      return;
      break;
    }
    case "Admin_deposit0_90": {
      const v2130 = v1714[1];
      return;
      break;
    }
    case "Admin_editUserReward0_90": {
      const v2543 = v1714[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_90": {
      const v2956 = v1714[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_90": {
      const v3369 = v1714[1];
      return;
      break;
    }
    case "Admin_setReward0_90": {
      const v3782 = v1714[1];
      return;
      break;
    }
    case "User_claim0_90": {
      const v4195 = v1714[1];
      return;
      break;
    }
    case "User_claimAll0_90": {
      const v4608 = v1714[1];
      return;
      break;
    }
    case "User_optin0_90": {
      const v5021 = v1714[1];
      undefined /* setApiDetails */;
      await stdlib.mapSet(map3, v1713, null);
      const v5420 = null;
      const v5421 = await txn1.getOutput("User_optin", "v5420", ctc0, v5420);
      if (v957) {
        stdlib.protect(ctc0, await interact.out(v5021, v5421), {
          at: "./index.rsh:271:11:application",
          fs: [
            "at ./index.rsh:271:11:application call to [unknown function] (defined at: ./index.rsh:271:11:function exp)",
            'at ./index.rsh:276:14:application call to "ret" (defined at: ./index.rsh:274:15:function exp)',
            "at ./index.rsh:274:15:application call to [unknown function] (defined at: ./index.rsh:274:15:function exp)",
          ],
          msg: "out",
          who: "User_optin",
        });
      } else {
      }

      const v5432 = {
        bal: v1523,
        keepGoing: v1524,
        total_amount_claimed: v1525,
        total_rewards_allcoated: v1526,
        total_users_claim: v1527,
        usersNo: v1528,
      };
      const v10090 = v1506;
      const v10091 = v5432.keepGoing;
      if (v10091) {
        const v10092 = v5432.bal;
        const v10094 = v5432.total_amount_claimed;
        const v10095 = v5432.total_rewards_allcoated;
        const v10096 = v5432.total_users_claim;
        const v10097 = v5432.usersNo;
        return;
      } else {
        const v10101 = stdlib.sub(v1506, v1506);
        const v10102 = stdlib.le(await ctc.getBalance(), v10101)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:294:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v10101);
        return;
      }
      break;
    }
  }
}
export async function Admin_addAdmin(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Admin_addAdmin expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Admin_addAdmin expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _Admin_addAdmin3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function Admin_deposit(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Admin_deposit expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Admin_deposit expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _Admin_deposit3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function Admin_editUserReward(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Admin_editUserReward expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Admin_editUserReward expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _Admin_editUserReward3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function Admin_endContractAndTransfer(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Admin_endContractAndTransfer expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Admin_endContractAndTransfer expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _Admin_endContractAndTransfer3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function Admin_revokeAdmin(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Admin_revokeAdmin expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Admin_revokeAdmin expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _Admin_revokeAdmin3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function Admin_setReward(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Admin_setReward expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Admin_setReward expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _Admin_setReward3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function User_claim(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for User_claim expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for User_claim expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _User_claim3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function User_claimAll(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for User_claimAll expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for User_claimAll expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _User_claimAll3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function User_optin(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for User_optin expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for User_optin expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _User_optin3(ctcTop, interact);
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
      `Admin_addAdmin(address)byte[0]`,
      `Admin_deposit(uint64)byte[0]`,
      `Admin_editUserReward(address,uint64)byte[0]`,
      `Admin_endContractAndTransfer()byte[0]`,
      `Admin_revokeAdmin(address)byte[0]`,
      `Admin_setReward(address,uint64)byte`,
      `User_claim(uint64)byte`,
      `User_claimAll()byte`,
      `User_optin()byte[0]`,
    ],
    pure: [
      `Info_Admins(address)byte`,
      `Info_opted(address)byte`,
      `Info_rewards(address)uint64`,
      `Info_totalAllocatedFunds()uint64`,
      `Info_totalAmountClaimed()uint64`,
      `Info_totalClaimed()uint64`,
      `Info_totalOptedIn()uint64`,
    ],
    sigs: [
      `Admin_addAdmin(address)byte[0]`,
      `Admin_deposit(uint64)byte[0]`,
      `Admin_editUserReward(address,uint64)byte[0]`,
      `Admin_endContractAndTransfer()byte[0]`,
      `Admin_revokeAdmin(address)byte[0]`,
      `Admin_setReward(address,uint64)byte`,
      `Info_Admins(address)byte`,
      `Info_opted(address)byte`,
      `Info_rewards(address)uint64`,
      `Info_totalAllocatedFunds()uint64`,
      `Info_totalAmountClaimed()uint64`,
      `Info_totalClaimed()uint64`,
      `Info_totalOptedIn()uint64`,
      `User_claim(uint64)byte`,
      `User_claimAll()byte`,
      `User_optin()byte[0]`,
    ],
  },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAYAAEDCAkCKAz8lKG0Bb/St7YIq+eynwuK4/fnDI2rrp4Jt7KrwgftkPvXB5TS3MEHkLStzAK9+eKuBILyk8EE4oak5gKmmJGUAvKJzMAChbqM1AEFJgUBAAEBAAT/3nkoBJvIVFAiNQAxGEELaSpkSSJbNQElWzUCMRkjEkEACjEAKCEHr2ZCCzY2GgAXSUEB5CI1BCM1BkkhCAxAANtJIQkMQABpSSEKDEAAMEkhCwxAABQhCxJEKjX/gAEINP9QIQavUEIBxiEKEkQ2GgE1/4ABBDT/UCWvUEIBsUkhDAxAABYhDBJENhoBNhoCUDX/gAEFNP9QQgGUIQkSRDYaATX/gAEGNP9QMgNQQgF/SSENDEAAM0khDgxAABYhDhJENAEkEkQoZEk1A1dfCDUHQgqcIQ0SRDQBJBJEKGRJNQNXZwg1B0IKhkkhDwxAABYhDxJENhoBNhoCUDX/gAECNP9QQgEoIQgSRCo1/4ABAzT/UCEGr1BCARRJIRAMQABnSSERDEAAMEkhEgxAABYhEhJENAEkEkQoZEk1A1dPCDUHQgoqIRESRDYaATX/KDT/UCWvUEIA1kkhEwxAABMhExJENhoBNf8pNP9QMgNQQgC8IRASRDQBJBJEKGRJNQNXTwg1B0IJ50khFAxAADpJIRUMQAAUIRUSRCo1/4ABBzT/UCEGr1BCAIQhFBJENAEkEkQ2GgGICdxXCQEiVSMSFlEHCDUHQgmmSSEWDEAAIyEWEkQ0ASQSRCI2GgGICbVXAAlJNf8jWzT/IlVNFjUHQgl8gbuuuZsBEkQ0ASQSRDYaAYgJj1cLASJVIxIWUQcINQdCCVk2GgIXNQQ2GgM2GgEXSSEFDEAH+yEFEkQkNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/VyAeNf6BPls1/YFGWzX8V04BFzX7gU9bNfqBV1s1+YFfWzX4gWdbNfdJNQU19oAE/FtmxzT2ULA09iJVSYEEDEAGKkmBBgxAAw9JgQcMQAGcSSUMQABCJRJEMQAoMQCICOYpXAtmgAgAAAAAAAAVLLAqNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjT9QgedSDEAiAipVwAJSTX1IlUjEkQiNPVJNfMjWzTzIlVNNfQ0/TT0NP009A1NNfM09DT9D0EAPCs09BZQsIAJAAAAAAAAE00AsCg1BzT/NP40/BY0+xZRBwhQNPoWUDT5FlA0+BZQNPcjCBZQMgY0/UIHLTEAiAg6VwoBIlUjEkEAXYAJAAAAAAAAE3gBsCk1B7EisgE087III7IQMQCyB7MxACgxAIgICSEEr1wAZjT/NP40/DTzCRY0+xZRBwhQNPo08wgWUDT5FlA0+CMIFlA09xZQMgY0/TTzCUIGwYAJAAAAAAAAE2ABsCk1BycEMQA08xZQNP5QULAxACgxAIgHrylcCmaxIrIBNPOyCCOyEDEAsgezMQAoMQCIB5MhBK9cAGY0/zT+NPw08wkWNPsWUQcIUDT6NPMIFlA0+RZQNPgjCBZQNPcjCBZQMgY0/TTzCUIGSUg09lcBCDX1MQCIB05XAAlJNfQiVSMSRDT1FzXzIjT0STXxI1s08SJVTTXyNPM08jTzNPINTTXxNP008TT9NPENTTXwNPI0/Q9BADwrNPIWULCACQAAAAAAABFhALAoNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3IwgWUDIGNP1CBcExAIgGzlcKASJVIxJBAF2ACQAAAAAAABGOAbApNQexIrIBNPCyCCOyEDEAsgezMQAoMQCIBp0hBK9cAGY0/zT+NPw08AkWNPsWUQcIUDT6NPAIFlA0+RZQNPgjCBZQNPcWUDIGNP008AlCBVWACQAAAAAAABF1AbApNQcnBDEANPAWUDT+UFCwMQAoMQCIBkMpXApmsSKyATTwsggjshAxALIHszEAKDEAiAYnIQSvXABmNP80/jT8NPAJFjT7FlEHCFA0+jTwCBZQNPkWUDT4IwgWUDT3IwgWUDIGNP008AlCBN1JIRcMQALASDT2VwEoNfU09YEgW0k19DT8DTXzIjT0NPNNNfI0/TTyCDXxNPKIBc409VcAIDXwNPCIBbNXCwEiVSMSQQBrNPAoNPCIBaEpIjTwiAWaVwAJSTXvI1s07yJVTTT0CBZQXABmgAkAAAAAAAAPfAGwKTUHNPNBAAo0/DT0CDXvQgAENPw17zT/NP407xY0+xZRBwhQNPoWUDT5FlA0+BZQNPcWUDIGNPFCBCw080EBCoDMARABneRZb3VyIHVzZXIgaGFzbid0IG9wdGVkIGluAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTwULCACQAAAAAAAA+PALAoNQc0/zT+NPw09AgWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjTxQgMdgMwBEAGd5FRoZSBiYWxhbmNlIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBmb3IgdGhlIHVzZXIgaXMgaW52YWxpZCBhbmQgdGhleSBoYXZlbid0IG9wdGVkIGluAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANPBQsIAJAAAAAAAAD6IAsCg1BzT/NP40/BY0+xZRBwhQNPoWUDT5FlA0+BZQNPcWUDIGNPFCAhZINPZXASA19TEANP8SRDT1KDT1iAMSKFwJZoAIAAAAAAAADcSwKjUHNP80/jT8FjT7FlEHCFA0+hZQNPkWUDT4FlA09xZQMgY0/UIByUkhBQxAAKZJJAxAADpINP8xABJEgAgAAAAAAAAME7AqNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjT9QgGCSDT2VwEoNfUxADT/EjEAiAKCVwkBIlUjEhFENPVXACAoNPVXACCIAmspNPVXIAhQXABmgAgAAAAAAAAKY7AqNQc0/zT+NPwWNPsWUQcIUDT6FlA0+RZQNPgWUDT3FlAyBjT9QgEcSSMMQABeSDT2VwEINfU09Rc19DEANP8SMQCIAhFXCQEiVSMSEUQ09IgCEoAIAAAAAAAACKuwKjUHNP80/jT8NPQIFjT7FlEHCFA0+hZQNPkWUDT4FlA09xZQMgY0/TT0CEIAuEg09lcBIDX1MQA0/xIxAIgBuFcJASJVIxIRRDT1KDT1iAGnKVwJZoAIAAAAAAAABvawKjUHNP80/jT8FjT7FlEHCFA0+hZQNPkWUDT4FlA09xZQMgY0/UIAXiISRIGgjQaIAXUiNAESRDQESSISTDQCEhFESTUFNf+ABK215JQ0/1CwMQA0/4ApAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyBiJCAAA1/zX+Nf01/DX7NP1XCAEXQQBgNP0iWzX6NP1XCAEXNfk0/SEEWzX4NP2BEVs19zT9gRlbNfY0/YEhWzX1NPs0/FA0/xZQNPoWUDT5FlEHCFA0+BZQNPcWUDT2FlA09RZQKEsBVwBvZ0gkNQEyBjUCQgBNsSKyATT/sggjshA0+7IHszIKYDIKeAk0/0kJCTX6sSKyATT6sggjshA0+7IHs0IAADEZIRcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 12,
  stateKeys: 1,
  stateSize: 111,
  unsupported: [],
  version: 11,
  warnings: [],
};
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T9","name":"v10165","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_90","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_90","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_editUserReward0_90","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_90","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_90","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_setReward0_90","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_User_claim0_90","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_90","type":"bool"},{"internalType":"bool","name":"_User_optin0_90","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1782","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2219","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2659","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3091","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3524","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3964","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3983","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4002","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4449","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4469","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4494","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4941","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4960","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4984","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5420","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T13","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"insufficient","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"notify","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v10120","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10125","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10130","type":"address"},{"internalType":"uint256","name":"v10131","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10140","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10145","type":"address"},{"internalType":"uint256","name":"v10146","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10103","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10106","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10109","type":"address"}],"name":"Info_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10151","type":"uint256"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claimAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_90","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_90","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_editUserReward0_90","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_90","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_90","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_setReward0_90","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_User_claim0_90","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_90","type":"bool"},{"internalType":"bool","name":"_User_optin0_90","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v10170","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200589838819003918201601f19168301916001600160401b03831184841017620004c557808492604094855283398101031262000630576040805191908201906001600160401b03821183831017620004c55760209160405280518352015161ffff198116810362000630576020820152600080554360035560405161022081016001600160401b03811182821017620004c557600091610200916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152015260405190620001188262000635565b6200012262000651565b825260ff6004541662000617577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a1805180159081156200060a575b5015620005f15734620005d85760008251526001602083510152600060408351015260006060835101526000608083510152600060a083510152604051918260a081011060018060401b0360a085011117620004c55760a083016040526000835260006020840152620001ee62000651565b604084015260608301916000835260006080850152338452602061ffff199101511660208401525160408301524390526040516200022c8162000635565b6000815260408201516020015115620004db57506040516001600160401b03610120820190811190821117620004c5578061012061010092016040526000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a084015260a081015160c084015260c081015160e084015260e08101518284015201516101208201526101208152610140810181811060018060401b03821117620004c55760405280516001600160401b038111620004c557620003b560025462000694565b601f811162000477575b50602091601f82116001146200040d5791819260009262000401575b50508160011b916000199060031b1c1916176002555b60405161518d9081620006eb8239f35b015190503880620003db565b601f19821692600260005260206000209160005b8581106200045e5750836001951062000444575b505050811b01600255620003f1565b015160001960f88460031b161c1916905538808062000435565b9192602060018192868501518155019401920162000421565b6002600052620004b39060008051602062005878833981519152601f840160051c81019160208510620004ba575b601f0160051c0190620006d1565b38620003bf565b9091508190620004a5565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620005ce575bf115620005b85760008093928193928293478093525116828215620005c4575bf115620005b8576000805560006001556200053760025462000694565b8062000545575b50620003f1565b601f81116001146200055f575060006002555b386200053e565b6002600052620005a790601f0160051c60008051602062005878833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620006d1565b600060208120816002555562000558565b6040513d6000823e3d90fd5b506108fc6200051a565b506108fc620004fa565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b905060015414386200017c565b60405163100960cb60e01b8152600e6004820152602490fd5b600080fd5b602081019081106001600160401b03821117620004c557604052565b6040519060c082016001600160401b03811183821017620004c5576040528160a06000918281528260208201528260408201528260608201528260808201520152565b90600182811c92168015620006c6575b6020831014620006b057565b634e487b7160e01b600052602260045260246000fd5b91607f1691620006a4565b818110620006dd575050565b60008155600101620006d156fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610a985780630bda4657146109f45780631e93b0f1146109d557806336e56ea5146109745780633702d0ce146109385780634ab9f8b3146108e2578063523df4f61461087f57806355c42a951461083f578063672422c7146107f157806374623535146107b557806374f16ec91461073f5780637a2b54dc146106fc5780637f0595e214610695578063832307571461067657806392cf8bd514610629578063a579242414610594578063a5928cf514610551578063a8d65f20146104db578063ab53f2c61461046f578063c568a57c1461029c578063c5d86f6f1461024e578063cd6637a814610201578063e0590c9a1461019c5763f33c0dce146101315750610010565b34610198578160031936011261019857600361014b610eac565b925403610181576020610180848460e0610174610166610c42565b86808251830101910161106c565b0151928391015251908152f35b602490600c84519163100960cb60e01b8352820152fd5b5080fd5b50829060203660031901126101fd576020926101f26101c0926101bd610eac565b9283916101c8610ff0565b90358151528781019060068251525160e0825101526101e561101f565b9182525187820152611286565b015115159051908152f35b8280fd5b5034610198578160031936011261019857600361021c610eac565b925403610237576020610160848460a0610174610166610c42565b602490600b84519163100960cb60e01b8352820152fd5b508290346101fd5760203660031901126101fd5735916001600160a01b0383168303610299575061028a61029592610284610ced565b50610d8f565b905191829182610b19565b0390f35b80fd5b50916101a0366003190112610198576102b3610eac565b81516102be81610b80565b8435815261018036602319011261046b578251946101408601906001600160401b0382118783101761045857508352602435600981101561044c5785526020948560431936011261044c57835161031481610bcc565b6001600160a01b03906044358281168103610454578152878301528660631936011261044857845161034581610bcc565b6064358152858301528460831936011261044857845161036481610b80565b608435828116810361045457815260a43588820152606083015260c43580151581036104505760808301528660e3193601126104485784516103a581610bcc565b60e435828116810361045457815260a08301528461010319360112610448578451906103d082610b80565b610104359081168103610450578152610124358782015260c0820152856101431936011261044c57835161040381610bcc565b61014435815260e08201526101643580151581036104485761010082015261018435801515810361044857610120820152858201526104429190611286565b51908152f35b8580fd5b8480fd5b8680fd5b8780fd5b634e487b7160e01b865260419052602485fd5b8380fd5b828434610198578160031936011261019857815461048b610c42565b91805193849283526020828185015284518093850152815b8381106104c457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104a3565b8284806003193601126101985760c06020926101f26104f8610ade565b610500610eac565b92839186519061050f82610b80565b6001600160a01b039081168252602435828a019081529061052e61103b565b9251168251525188825101528781019060058251525186825101526101e561101f565b828481600319360112610198576101e06020926101f261056f610eac565b809261057961101f565b878101906007825152511515610100825101526101e561101f565b5034610198576020366003190112610198576105ae610ade565b9060036105b9610eac565b935403610612576020610100858560016105f3876105e66105d8610c42565b88808251830101910161106c565b50828060a01b0316610e5b565b516105fd81610af9565b61060681610af9565b14928391015251908152f35b602490600885519163100960cb60e01b8352820152fd5b50346101985781600319360112610198576003610644610eac565b92540361065f576020610140848460a0610174610166610c42565b602490600a84519163100960cb60e01b8352820152fd5b8284346101985781600319360112610198576020906001549051908152f35b5034610198576020366003190112610198576106af610ade565b9060036106ba610eac565b9354036106e557602060e0858560016105f3876106d86105d8610c42565b50828060a01b0316610d8f565b602490600785519163100960cb60e01b8352820152fd5b828481600319360112610198576102006020926101f261071a610eac565b809261072461101f565b878101906008825152511515610120825101526101e561101f565b8284806003193601126101985760606020926101f261075c610ade565b610764610eac565b92839186519061077382610b80565b6001600160a01b039081168252602435828a019081529061079261103b565b9251168251525188825101528781019060028251525186825101526101e561101f565b508290346101fd5760203660031901126101fd5735916001600160a01b0383168303610299575061028a610295926107eb610ced565b50610e0a565b5034610198578160031936011261019857600361080c610eac565b9254036108285760206101a08484610100610174610166610c42565b602490600d84519163100960cb60e01b8352820152fd5b8284816003193601126101985760806020926101f261085c610eac565b809261086661101f565b87810190600382515251151586825101526101e561101f565b60208484366003190183136102995782906101f261089b610ade565b6108a3610eac565b9283916108ae610ff0565b80516001600160a01b039092169091528581018051839052905181518701526108d561101f565b9182525185820152611286565b50829060203660031901126101fd5760a0906101f2602094610902610ade565b9061090b610eac565b938492610916610ff0565b908151906001808a1b03169052888101918251525186825101526101e561101f565b508290346101fd5760203660031901126101fd5735916001600160a01b0383168303610299575061028a6102959261096e610ced565b50610e5b565b508290346101fd5760203660031901126101fd5735916001600160a01b038316830361029957506109af6060926109a9610ced565b50610d0c565b908080519280516109bf81610af9565b8452602081015115156020850152015190820152f35b8284346101985781600319360112610198576020906003549051908152f35b50903461029957602036600319011261029957610a0f610ade565b610a17610eac565b926003835403610a815760206101208686818787610a366105d8610c42565b506001600160a01b0316906001610a4c83610d0c565b51610a5681610af9565b610a5f81610af9565b03610a76575061017490610d0c565b015251908152f35b915050928391610a6e565b602490600986519163100960cb60e01b8352820152fd5b50829060203660031901126101fd576020926101f28392610ab7610eac565b928391610ac2610ff0565b90358151528781019060018251525186825101526101e561101f565b600435906001600160a01b0382168203610af457565b600080fd5b60021115610b0357565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610b2f81610af9565b845260208101511515602085015201511515910152565b90600182811c92168015610b76575b6020831014610b6057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b55565b604081019081106001600160401b03821117610b9b57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b03821117610b9b57604052565b602081019081106001600160401b03821117610b9b57604052565b61012081019081106001600160401b03821117610b9b57604052565b61014081019081106001600160401b03821117610b9b57604052565b601f909101601f19168101906001600160401b03821190821017610b9b57604052565b6040519060008260025491610c5683610b46565b808352600193808516908115610ccc5750600114610c7e575b50610c7c92500383610c1f565b565b600260009081526000805160206150e183398151915294602093509091905b818310610cb4575050610c7c935082010138610c6f565b85548884018501529485019487945091830191610c9d565b9050610c7c94506020925060ff191682840152151560051b82010138610c6f565b60405190610cfa82610bb1565b60006040838281528260208201520152565b90610d15610ced565b9160018060a01b03166000908082526005602052600160ff604084205416610d3c81610af9565b03610d845760409293508152600560205220600160405191610d5d83610bb1565b60ff8154818116610d6d81610af9565b855260081c16151560208401520154604082015290565b508083526020830152565b90610d98610ced565b9160018060a01b03166000908082526006602052600160ff604084205416610dbf81610af9565b03610d84576040929350815260066020522060ff60405191610de083610bb1565b54818116610ded81610af9565b8352818160081c161515602084015260101c161515604082015290565b90610e13610ced565b9160018060a01b03166000908082526007602052600160ff604084205416610e3a81610af9565b03610d84576040929350815260076020522060ff60405191610de083610bb1565b90610e64610ced565b9160018060a01b03166000908082526008602052600160ff604084205416610e8b81610af9565b03610d84576040929350815260086020522060ff60405191610de083610bb1565b6040519061022082016001600160401b03811183821017610b9b57604052816102006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201520152565b60408051919061014083016001600160401b03811184821017610b9b578152610120836000928382528051610f6e81610bcc565b84815260208301528051610f8181610bcc565b848152818301528051610f9381610b80565b84815284602082015260608301528360808301528051610fb281610bcc565b84815260a08301528051610fc581610b80565b84815284602082015260c083015251610fdd81610bcc565b83815260e0820152826101008201520152565b60405190610ffd82610b80565b8160405161100a81610bcc565b600081528152602061101a610f3a565b910152565b6040519061102c82610b80565b8160008152602061101a610f3a565b6040519061104882610b80565b8160405161105581610b80565b60008152600060208201528152602061101a610f3a565b9081610120910312610af4576040519061108582610be7565b80516001600160a01b0381168103610af4578252602081015161ffff1981168103610af4576020830152604081015160408301526060810151606083015260808101518015158103610af457608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100809101519082015290565b6040519060c082016001600160401b03811183821017610b9b576040528160a06000918281528260208201528260408201528260608201528260808201520152565b6040519060e082016001600160401b03811183821017610b9b576040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b80516001600160a01b03168252602090810151910152565b516009811015610b035790565b6040519060a082016001600160401b03811183821017610b9b5760405260006080838281528260208201526111e4611102565b60408201528260608201520152565b81516001600160a01b031681526020808301519082015260409182015161ffff19169181019190915260600190565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160c01b031916918101919091526001600160a01b0390911660e08201526101000190565b60405192919061048084016001600160401b03811185821017610b9b57806040526112b081610bcc565b6000815284526112be611102565b60208501526040516112cf81610bcc565b6000815260408501526112e0611102565b60608501526040516112f181610b80565b60008152600060208201526080850152611309611102565b60a0850152611316611102565b60c085015260405161132781610bcc565b6000815260e0850152611338611102565b61010085015260405161134a81610b80565b600081526000602082015261012085015260006101408501526000610160850152600061018085015260006101a0850152611383611102565b6101c0850152611391611144565b6101e085015261139f611102565b6102008501526113ad611144565b6102208501526113bb611102565b6102408501526040516113cd81610bcc565b600081526102608501526113df610ced565b61028085015260006102a085015260006102c085015260006102e0850152611405611102565b610300850152611413610ced565b610320850152611421611102565b61034085015261142f611102565b61036085015261143d610ced565b61038085015260006103a085015260006103c085015261145b611102565b6103e0850152611469610ced565b610400850152611477611102565b610420850152611485611102565b610440850152611493611102565b61046085015260ff60045416615064576040513381528151602082015260208201518051916009831015610b03576101206101c0927fb212047171f573087bd7daffa4c27e0281c01018b089f7487c3ab5d443db17d294604084015260018060a01b03602082015151166060840152604081015151608084015261151f606082015160a085019061118c565b6080810151151560e084015260a0810151516001600160a01b031661010084015260c0810151611552908385019061118c565b60e0810151516101608401526101008101511515610180840152015115156101a0820152a160036000540361504b57604051600060025461159281610b46565b80845290600181169081156150275750600114614fda575b50906115bb816115ca930382610c1f565b6020808251830101910161106c565b9080518015908115614fce575b5015614fb5576115ea60208201516111a4565b6009811015610b0357611a9b57602090810151015184528051336001600160a01b0390911603611a775760015b15611a5e5734611a45576000602060409360018060a01b0387515116835260068252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557fea2d183f1d25e4604fc41fedec4a0dd3131c289f0274be0f78466757df15a763828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015260206116e76111b1565b82516001600160a01b031681528183015161ffff191682820152940151828501524360608501520151608083015260405161172181610bcc565b600081526040830151602001511561196d575061010060405161174381610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261186182610c03565b81516001600160401b038111610b9b5761187c600254610b46565b601f8111611925575b50602092601f82116001146118c257928192936000926118b7575b50508160011b916000199060031b1c191617600255565b0151905038806118a0565b601f19821693600260005260206000209160005b86811061190d57508360019596106118f4575b505050811b01600255565b015160001960f88460031b161c191690553880806118e9565b919260206001819286850151815501940192016118d6565b600260005261195d906000805160206150e1833981519152601f840160051c81019160208510611963575b601f0160051c01906150c9565b38611885565b9091508190611950565b9091600080808060018060a01b03855116608086015190828215611a3c575bf115611a27574791829052516000918291829182916001600160a01b0316828215611a33575bf115611a27576000805560006001556119cc600254610b46565b806119d45750565b601f81116001146119e757506000600255565b6002600052611a1a90601f0160051c6000805160206150e1833981519152016000805160206151018339815191526150c9565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc6119b2565b506108fc61198c565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b6001611a8233610d8f565b51611a8c81610af9565b611a9581610af9565b14611617565b611aac6020829694939601516111a4565b6009811015610b0357600103611e435760200151604090810151908301528351336001600160a01b0390911603611e1f5760015b15611e06576040820151513403611ded5760406000917fd7f4731ed527e3ff996296d44c9e1b806a3dcb766a11e3f13cafb59ea68c61b360208351858152a10152611b356060840151604083015151906150a8565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a060608301510152604080611b8e6111b1565b85516001600160a01b0316815260208087015161ffff19169082015260608481015183830152439082015294015191015151016080830152604051611bd281610bcc565b600081526040830151602001511561196d5750610100604051611bf481610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252611d1282610c03565b81516001600160401b038111610b9b57611d2d600254610b46565b601f8111611db0575b50602092601f8211600114611d6757928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611d9857508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201611d7b565b6002600052611de7906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38611d36565b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b6001611e2a33610d8f565b51611e3481610af9565b611e3d81610af9565b14611ae0565b611e546020829693949601516111a4565b6009811015610b035760020361220b57602001516060015160808501528051336001600160a01b03909116036121e75760015b156121ce57346121b5576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557f9b072679fb5bda2a01d66297897a3a5288969bd830eddc4c1506f7ec90a378f660208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015260a0611f606111b1565b94600180831b03835116865261ffff19602084015116602087015201518285015243606085015201516080830152604051611f9a81610bcc565b600081526040830151602001511561196d5750610100604051611fbc81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526120da82610c03565b81516001600160401b038111610b9b576120f5600254610b46565b601f8111612178575b50602092601f821160011461212f57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061216057508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201612143565b60026000526121af906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386120fe565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60016121f233610d8f565b516121fc81610af9565b61220581610af9565b14611e87565b61221860208201516111a4565b6009811015610b035760030361255957508051336001600160a01b0390911603612540573461252757600060806040937f8c355ae09aca3df54112aabc7db80709d6a9216646b120454cb42cd1fe17df1e60208651858152a10152606081015160c08501515260808101511515602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015260c06122d06111b1565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161230c81610bcc565b600081526040830151602001511561196d575061010060405161232e81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261244c82610c03565b81516001600160401b038111610b9b57612467600254610b46565b601f81116124ea575b50602092601f82116001146124a157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106124d257508360019596106118f457505050811b01600255565b919260206001819286850151815501940192016124b5565b6002600052612521906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38612470565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b61256660208201516111a4565b6009811015610b03576004036128d1576020015160a0015160e085015280516001600160a01b031633036128b8573461289f57600060a0604093600180831b0360e088015151168352600660205282858120557f2a4504ab69422de8320c55ec678c499043eb76ba4a8ee9676d622f808ed80b8d60208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a061010086015101526101006126486111b1565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161268481610bcc565b600081526040830151602001511561196d57506101006040516126a681610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526127c482610c03565b81516001600160401b038111610b9b576127df600254610b46565b601f8111612862575b50602092601f821160011461281957928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061284a57508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161282d565b6002600052612899906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386127e8565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b6128e160208296939601516111a4565b6009811015610b03576005036134b05760c0602080920151015180610120840152018051606086015110806101408401526000146134a857515b8061016083015280604086015101610180830152340361348f57610120810151516101809290600190612956906001600160a01b0316610e5b565b5161296081610af9565b61296981610af9565b03612d415760c0600191828060a01b036101208501515116600052600560205260406000208360ff19825416179055826129af818060a01b036101208701515116610d0c565b516129b981610af9565b6129c281610af9565b03612d37576129f560406129e2858060a01b036101208801515116610d0c565b01515b60206101208701510151906150a8565b838060a01b036101208601515116600052600560205283604060002001557f52acfd0f369f8bbda0ebd728d0474105135661fe067783a0c605318fa3745bc76020604051858152a1015261014081015115612d2757612a62606085015160206101208401510151906150a8565b6101a08201525b6101a08101516101c0820151526080840151151560206101c0830151015260a084015160406101c0830151015260c084015160606101c0830151015260e084015160806101c0830151015261010084015160a06101c08301510152612acc6111b1565b9360018060a01b038151168552602061ffff199101511660208501526101c0810151604085015243606085015201516080830152604051612b0c81610bcc565b600081526040830151602001511561196d5750610100604051612b2e81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252612c4c82610c03565b81516001600160401b038111610b9b57612c67600254610b46565b601f8111612cea575b50602092601f8211600114612ca157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612cd257508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201612cb5565b6002600052612d21906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38612c70565b60608401516101a0820152612a69565b6129f560006129e5565b61014082015160009160c091156130dd576101e084018051782cb7bab9103ab9b2b9103430b9b713ba1037b83a32b21034b760391b905280516020018490528051604090810185905281516060018590528151608001859052815160a0018590528151840185905290516101208601515191516000805160206151418339815191529290918291612dde916001600160a01b039091169083611222565b0390a17f84cf57cc1815174dbb97b8f4573e5b1b61273c96ec96cbd5c7b6fa9ec2f630016020604051858152a10152612e25606085015160206101208401510151906150a8565b61020082015152608084015115156020610200830151015260a08401516040610200830151015260c08401516060610200830151015260e08401516080610200830151015261010084015160a06102008301510152612e826111b1565b9360018060a01b038151168552602061ffff19910151166020850152610200810151604085015243606085015201516080830152604051612ec281610bcc565b600081526040830151602001511561196d5750610100604051612ee481610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261300282610c03565b81516001600160401b038111610b9b5761301d600254610b46565b601f81116130a0575b50602092601f821160011461305757928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061308857508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161306b565b60026000526130d7906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38613026565b610220840180517f5468652062616c616e636520796f752061726520747279696e6720746f207365905280517f7420666f7220746865207573657220697320696e76616c696420616e6420746860209091015280517232bc903430bb32b713ba1037b83a32b21034b760691b60409182015281516060018590528151608001859052815160a00185905281518401859052905161012086015151915160008051602061514183398151915292909182916131a3916001600160a01b039091169083611222565b0390a17fa5de003b2ba0d437c5061b4eea66167a7a4699edfbf105570f3b20a9286fa44a6020604051858152a10152606084015161024082015152608084015115156020610240830151015260a08401516040610240830151015260c08401516060610240830151015260e08401516080610240830151015261010084015160a061024083015101526132346111b1565b9360018060a01b038151168552602061ffff1991015116602085015261024081015160408501524360608501520151608083015260405161327481610bcc565b600081526040830151602001511561196d575061010060405161329681610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526133b482610c03565b81516001600160401b038111610b9b576133cf600254610b46565b601f8111613452575b50602092601f821160011461340957928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061343a57508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161341d565b6002600052613489906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386133d8565b60405163100960cb60e01b8152601e6004820152602490fd5b50600061291b565b6134c16020829694939601516111a4565b6009811015610b035760060361401e576020015160e0015161026085015260016134ea33610d0c565b80610280870152516134fb81610af9565b61350481610af9565b036140055734613fec5760016102808501515161352081610af9565b61352981610af9565b03613fe557604061028085015101515b806102a086015261026085015151818111600014613fe05750805b806102c08701526040840151818111600014613fd957505b6102e0860152604083015111613890579060006101c060409360008051602061512183398151915260206102a08901518751908152a17fa3d036b483d035b12aab158e304f27a499224bec5bd5657ce3d3722de033b73360208651858152a10152606081015161030085015152608081015115156020610300860151015260a081015182610300860151015260c08101516060610300860151015260e08101516080610300860151015261362461010082015161507d565b60a061030086015101526103006136396111b1565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161367581610bcc565b600081526040830151602001511561196d575061010060405161369781610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526137b582610c03565b81516001600160401b038111610b9b576137d0600254610b46565b601f8111613853575b50602092601f821160011461380a57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061383b57508360019596106118f457505050811b01600255565b9192602060018192868501518155019401920161381e565b600260005261388a906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b386137d9565b6101c0600191826138a396949633610e0a565b516138ad81610af9565b6138b681610af9565b03613c0e577fc841553f4db44acfe456c6b4724fc10d5525f9c3f60915b115b9b5c4b08c96026020604051858152a1015260008080806102e0850151818115613c05575b3390f115611a27573360005260056020526000600160408220828155015561392c60608401516102e0830151906150bc565b61036082015152608083015115156020610360830151015261395860a08401516102e0830151906150a8565b6040610360830151015260c08301516060610360830151015261397e60e084015161507d565b6080610360830151015261010083015160a061036083015101526102e060406139a56111b1565b85516001600160a01b0316815260208087015161ffff19169082015261036084015182820152436060820152940151910151900360808301526040516139ea81610bcc565b600081526040830151602001511561196d5750610100604051613a0c81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252613b2a82610c03565b81516001600160401b038111610b9b57613b45600254610b46565b601f8111613bc8575b50602092601f8211600114613b7f57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613bb057508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201613b93565b6002600052613bff906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38613b4e565b506108fc6138fa565b7fd7667941bef2d4390affdaf7cb9d17745929bb0b18771c4857f4a665ff3c8a0d6020604051858152a1015233610320820151526102e08101516020610320830151015261ffff1960208401511660406103208301510152600080516020615161833981519152613c8a610320830151604051918291826111f3565b0390a1336000908152600760205260408120805462ff00ff191660011790556102e0820151819081908190818115613fd0575b3390f115611a275733600052600560205260006001604082208281550155613cef60608401516102e0830151906150bc565b610340820151526080830151151560206103408301510152613d1b60a08401516102e0830151906150a8565b6040610340830151015260c083015160606103408301510152613d4160e084015161507d565b60806103408301510152613d5961010084015161507d565b60a061034083015101526102e06040613d706111b1565b85516001600160a01b0316815260208087015161ffff1916908201526103408401518282015243606082015294015191015190036080830152604051613db581610bcc565b600081526040830151602001511561196d5750610100604051613dd781610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252613ef582610c03565b81516001600160401b038111610b9b57613f10600254610b46565b601f8111613f93575b50602092601f8211600114613f4a57928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613f7b57508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201613f5e565b6002600052613fca906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38613f19565b506108fc613cbd565b905061356c565b613554565b6000613539565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b61402e60208294939401516111a4565b6009811015610b0357600703614b5e575090600161404b33610d0c565b806103808701525161405c81610af9565b61406581610af9565b03614b455734614b2c5760016103808501515161408181610af9565b61408a81610af9565b03614b2557604061038085015101515b806103a08601526040830151818111600014614b205750805b6103c08601526040830151116143d7579060006101e060409360008051602061512183398151915260206103a08901518751908152a17f0924bc3ed8d8fa4ac0609ccd5d6a1bd500c478efc3aa0ce23726f904f5c70cd360208651858152a1015260608101516103e0850151526080810151151560206103e0860151015260a0810151826103e0860151015260c081015160606103e0860151015260e081015160806103e0860151015261416b61010082015161507d565b60a06103e086015101526103e06141806111b1565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516141bc81610bcc565b600081526040830151602001511561196d57506101006040516141de81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e081015182850152015161012083015261012082526142fc82610c03565b81516001600160401b038111610b9b57614317600254610b46565b601f811161439a575b50602092601f821160011461435157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061438257508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201614365565b60026000526143d1906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614320565b6101e0600191826143ea96949633610e0a565b516143f481610af9565b6143fd81610af9565b03614755577f71485651b6791e3f9157dd0d695e9ad23f5c8e7939fe1151ed85b9eb5618bf986020604051858152a1015260008080806103c085015181811561474c575b3390f115611a27573360005260056020526000600160408220828155015561447360608401516103c0830151906150bc565b61044082015152608083015115156020610440830151015261449f60a08401516103c0830151906150a8565b6040610440830151015260c0830151606061044083015101526144c560e084015161507d565b6080610440830151015261010083015160a061044083015101526103c060406144ec6111b1565b85516001600160a01b0316815260208087015161ffff191690820152610440840151828201524360608201529401519101519003608083015260405161453181610bcc565b600081526040830151602001511561196d575061010060405161455381610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e0810151828501520151610120830152610120825261467182610c03565b81516001600160401b038111610b9b5761468c600254610b46565b601f811161470f575b50602092601f82116001146146c657928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106146f757508360019596106118f457505050811b01600255565b919260206001819286850151815501940192016146da565b6002600052614746906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614695565b506108fc614441565b7fab11ef0dd1cc3ed40095b7ce323d9e4e8af3de75c79ef2a575ae41a9c19dec746020604051858152a1015233610400820151526103c08101516020610400830151015261ffff19602084015116604061040083015101526000805160206151618339815191526147d1610400830151604051918291826111f3565b0390a1336000908152600760205260408120805462ff00ff191660011790556103c0820151819081908190818115614b17575b3390f115611a27573360005260056020526000600160408220828155015561483660608401516103c0830151906150bc565b61042082015152608083015115156020610420830151015261486260a08401516103c0830151906150a8565b6040610420830151015260c08301516060610420830151015261488860e084015161507d565b608061042083015101526148a061010084015161507d565b60a061042083015101526103c060406148b76111b1565b85516001600160a01b0316815260208087015161ffff19169082015261042084015182820152436060820152940151910151900360808301526040516148fc81610bcc565b600081526040830151602001511561196d575061010060405161491e81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252614a3c82610c03565b81516001600160401b038111610b9b57614a57600254610b46565b601f8111614ada575b50602092601f8211600114614a9157928192936000926118b75750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614ac257508360019596106118f457505050811b01600255565b91926020600181928685015181550194019201614aa5565b6002600052614b11906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614a60565b506108fc614804565b6140b3565b600061409a565b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b6020614b6b9101516111a4565b6009811015610b0357600814614b82575b50509050565b34614f9c57336000908152600860209081526040808320805462ff00ff19166001179055805183815290946102009290917f2a42775f6a9becb80fe857767501a74d5a8bc3354bc87bcf25fe8fec8eb28e859190a10152606081015161046085015152608081015115156020610460860151015260a081015182610460860151015260c08101516060610460860151015260e08101516080610460860151015261010081015160a06104608601510152610460614c3d6111b1565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051614c7981610bcc565b6000815260408301516020015115614ec45750610100604051614c9b81610be7565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015260a06040600180831b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015183850152606082820151015160c0850152608082820151015160e0850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a085015260a081015160c085015260c081015160e085015260e08101518285015201516101208301526101208252614db982610c03565b81516001600160401b038111610b9b57614dd4600254610b46565b601f8111614e87575b50602092601f8211600114614e215792819293600092614e16575b50508160011b916000199060031b1c1916176002555b803880614b7c565b015190503880614df8565b601f19821693600260005260206000209160005b868110614e6f5750836001959610614e56575b505050811b01600255614e0e565b015160001960f88460031b161c19169055388080614e48565b91926020600181928685015181550194019201614e35565b6002600052614ebe906000805160206150e1833981519152601f840160051c8101916020851061196357601f0160051c01906150c9565b38614ddd565b9091600080808060018060a01b03855116608086015190828215614f93575bf115611a27574791829052516000918291829182916001600160a01b0316828215614f8a575bf115611a2757600080556000600155614f23600254610b46565b80614f2f575b50614e0e565b601f8111600114614f47575060006002555b38614f29565b6002600052614f7a90601f0160051c6000805160206150e1833981519152016000805160206151018339815191526150c9565b6000602081208160025555614f41565b506108fc614f09565b506108fc614ee3565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b905060015414386115d7565b600260009081526000805160206150e1833981519152939250905b80821061500d575090915081016020016115bb6115aa565b919260018160209254838588010152019101909291614ff5565b60ff191660208086019190915291151560051b840190910191506115bb90506115aa565b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b906001820191828111615092578210610af457565b634e487b7160e01b600052601160045260246000fd5b9190820191828111615092578210610af457565b9081039081116150925790565b8181106150d4575050565b600081556001016150c956fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e9835109d8b835c4a9bc404ae4d3376ad99a9231f0da2c04c16034ca895777fffc54ba0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23a164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 22680,
  version: 9,
  views: {},
};
export const _stateSourceMap = {
  2: {
    at: "./index.rsh:295:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./index.rsh:70:37:after expr stmt semicolon",
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
  Admin_addAdmin: Admin_addAdmin,
  Admin_deposit: Admin_deposit,
  Admin_editUserReward: Admin_editUserReward,
  Admin_endContractAndTransfer: Admin_endContractAndTransfer,
  Admin_revokeAdmin: Admin_revokeAdmin,
  Admin_setReward: Admin_setReward,
  Deployer: Deployer,
  User_claim: User_claim,
  User_claimAll: User_claimAll,
  User_optin: User_optin,
};
export const _APIs = {
  Admin: {
    addAdmin: Admin_addAdmin,
    deposit: Admin_deposit,
    editUserReward: Admin_editUserReward,
    endContractAndTransfer: Admin_endContractAndTransfer,
    revokeAdmin: Admin_revokeAdmin,
    setReward: Admin_setReward,
  },
  User: {
    claim: User_claim,
    claimAll: User_claimAll,
    optin: User_optin,
  },
};
