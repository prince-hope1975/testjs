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
  const ctc4 = stdlib.T_Object({
    i: ctc2,
    scale: ctc2,
  });
  const ctc5 = stdlib.T_Object({
    i: ctc4,
    sign: ctc3,
  });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2,
  });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6,
  });
  const map0_ctc = ctc7;

  const map1_ctc = ctc8;

  const map2_ctc = ctc8;

  const map3_ctc = ctc8;

  const Info_Admins = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async (_v1518) => {
        const v1518 = stdlib.protect(ctc0, _v1518, null);

        const v1519 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, ctc0, v1518, ctc6),
          null
        );
        const v1520 = {
          None: 0,
          Some: 1,
        }[v1519[0]];
        const v1521 = stdlib.eq(
          v1520,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );

        return v1521;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const Info_balance = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async () => {
        return v1533;
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
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async (_v1522) => {
        const v1522 = stdlib.protect(ctc0, _v1522, null);

        const v1523 = stdlib.protect(
          map3_ctc,
          await viewlib.viewMapRef(3, ctc0, v1522, ctc6),
          null
        );
        const v1524 = {
          None: 0,
          Some: 1,
        }[v1523[0]];
        const v1525 = stdlib.eq(
          v1524,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );

        return v1525;
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
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async (_v1515) => {
        const v1515 = stdlib.protect(ctc0, _v1515, null);

        const v1516 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, ctc0, v1515, ctc2),
          null
        );
        const v1517 = stdlib.fromSome(
          v1516,
          stdlib.checkedBigNumberify(
            "./index.rsh:65:49:decimal",
            stdlib.UInt_max,
            "0"
          )
        );

        return v1517;
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
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async () => {
        return v1558;
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
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async () => {
        return v1557;
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
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async () => {
        return v1559;
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
      const [
        v1509,
        v1510,
        v1533,
        v1554,
        v1555,
        v1556,
        v1557,
        v1558,
        v1559,
        v1560,
      ] = svs;
      return await (async () => {
        return v1560;
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
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc2,
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
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc5, ctc2, ctc2, ctc2, ctc2],
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc9,
    Admin_deposit0_98: ctc10,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc9,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc10,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1619 = ctc.selfAddress();
  const v1621 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:160:34:application call to [unknown function] (defined at: ./index.rsh:160:34:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_addAdmin0_98" (defined at: ./index.rsh:160:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "Admin_addAdmin",
  });
  const v1624 = stdlib.addressEq(v1619, v1509);
  const v1625 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, ctc4, v1619, ctc0),
    null
  );
  const v1626 = {
    None: 0,
    Some: 1,
  }[v1625[0]];
  const v1627 = stdlib.eq(
    v1626,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  const v1628 = v1624 ? true : v1627;
  stdlib.assert(v1628, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:160:34:application call to [unknown function] (defined at: ./index.rsh:160:34:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_addAdmin0_98" (defined at: ./index.rsh:160:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "You Are unable to register another Admin",
    who: "Admin_addAdmin",
  });
  const v1635 = ["Admin_addAdmin0_98", v1621];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1635,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:166:9:decimal",
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_addAdmin",
          });
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, ctc4, v1746, ctc0),
            null
          );
          const v1806 =
            v1750[
              stdlib.checkedBigNumberify(
                "./index.rsh:160:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          await stdlib.simMapSet(sim_r, 1, ctc4, v1806, ctc0, null);
          const v1815 = null;
          const v1816 = await txn1.getOutput(
            "Admin_addAdmin",
            "v1815",
            ctc0,
            v1815
          );

          const v1829 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v8274 = v1533;
          const v8275 = v1829.keepGoing;
          if (v8275) {
            const v8276 = v1829.bal;
            const v8278 = v1829.percent;
            const v8279 = v1829.total_amount_claimed;
            const v8280 = v1829.total_rewards_allcoated;
            const v8281 = v1829.total_users_claim;
            const v8282 = v1829.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8287 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v8288 = stdlib.le(await ctc.getBalance(), v8287)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8287);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
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
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      undefined /* setApiDetails */;
      const v1756 = stdlib.addressEq(v1746, v1509);
      const v1757 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, ctc4, v1746, ctc0),
        null
      );
      const v1758 = {
        None: 0,
        Some: 1,
      }[v1757[0]];
      const v1759 = stdlib.eq(
        v1758,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      const v1760 = v1756 ? true : v1759;
      stdlib.assert(v1760, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:160:34:application call to [unknown function] (defined at: ./index.rsh:160:34:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:160:34:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
        ],
        msg: "You Are unable to register another Admin",
        who: "Admin_addAdmin",
      });
      const v1806 =
        v1750[
          stdlib.checkedBigNumberify(
            "./index.rsh:160:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      await stdlib.mapSet(map1, ctc4, v1806, ctc0, null);
      const v1815 = null;
      const v1816 = await txn1.getOutput(
        "Admin_addAdmin",
        "v1815",
        ctc0,
        v1815
      );
      if (v965) {
        stdlib.protect(ctc0, await interact.out(v1750, v1816), {
          at: "./index.rsh:160:11:application",
          fs: [
            "at ./index.rsh:160:11:application call to [unknown function] (defined at: ./index.rsh:160:11:function exp)",
            'at ./index.rsh:169:14:application call to "ret" (defined at: ./index.rsh:167:15:function exp)',
            "at ./index.rsh:167:15:application call to [unknown function] (defined at: ./index.rsh:167:15:function exp)",
          ],
          msg: "out",
          who: "Admin_addAdmin",
        });
      } else {
      }

      const v1829 = {
        bal: v1554,
        keepGoing: v1555,
        percent: v1556,
        total_amount_claimed: v1557,
        total_rewards_allcoated: v1558,
        total_users_claim: v1559,
        usersNo: v1560,
      };
      const v8274 = v1533;
      const v8275 = v1829.keepGoing;
      if (v8275) {
        const v8276 = v1829.bal;
        const v8278 = v1829.percent;
        const v8279 = v1829.total_amount_claimed;
        const v8280 = v1829.total_rewards_allcoated;
        const v8281 = v1829.total_users_claim;
        const v8282 = v1829.usersNo;
        return;
      } else {
        const v8287 = stdlib.sub(v1533, v1533);
        const v8288 = stdlib.le(await ctc.getBalance(), v8287)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8287);
        return;
      }
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc9,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc9,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1562 = ctc.selfAddress();
  const v1564 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:99:32:application call to [unknown function] (defined at: ./index.rsh:99:32:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_deposit0_98" (defined at: ./index.rsh:99:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "Admin_deposit",
  });
  const v1565 =
    v1564[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1567 = stdlib.addressEq(v1562, v1509);
  const v1568 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, ctc4, v1562, ctc0),
    null
  );
  const v1569 = {
    None: 0,
    Some: 1,
  }[v1568[0]];
  const v1570 = stdlib.eq(
    v1569,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  const v1571 = v1567 ? true : v1570;
  stdlib.assert(v1571, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:99:32:application call to [unknown function] (defined at: ./index.rsh:99:32:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_deposit0_98" (defined at: ./index.rsh:99:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "Only Admins can deposit",
    who: "Admin_deposit",
  });
  const v1578 = ["Admin_deposit0_98", v1564];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1578,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v1565, []],
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_deposit",
          });
          const v2191 =
            v2178[
              stdlib.checkedBigNumberify(
                "./index.rsh:99:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, ctc4, v1746, ctc0),
            null
          );
          const v2232 = stdlib.add(v1533, v2191);
          sim_r.txns.push({
            amt: v2191,
            kind: "to",
            tok: undefined /* Nothing */,
          });
          const v2268 = null;
          const v2269 = await txn1.getOutput(
            "Admin_deposit",
            "v2268",
            ctc0,
            v2268
          );

          const v2282 = stdlib.safeAdd(v1554, v2191);
          const v2283 = {
            bal: v2282,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v8546 = v2232;
          const v8547 = v2283.keepGoing;
          if (v8547) {
            const v8548 = v2283.bal;
            const v8550 = v2283.percent;
            const v8551 = v2283.total_amount_claimed;
            const v8552 = v2283.total_rewards_allcoated;
            const v8553 = v2283.total_users_claim;
            const v8554 = v2283.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8559 = stdlib.sub(v2232, v2232);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v8560 = stdlib.le(await ctc.getBalance(), v8559)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8559);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
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
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      undefined /* setApiDetails */;
      const v2191 =
        v2178[
          stdlib.checkedBigNumberify(
            "./index.rsh:99:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2192 = stdlib.addressEq(v1746, v1509);
      const v2193 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, ctc4, v1746, ctc0),
        null
      );
      const v2194 = {
        None: 0,
        Some: 1,
      }[v2193[0]];
      const v2195 = stdlib.eq(
        v2194,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      const v2196 = v2192 ? true : v2195;
      stdlib.assert(v2196, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:99:32:application call to [unknown function] (defined at: ./index.rsh:99:32:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:99:32:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
        ],
        msg: "Only Admins can deposit",
        who: "Admin_deposit",
      });
      const v2232 = stdlib.add(v1533, v2191);
      const v2268 = null;
      const v2269 = await txn1.getOutput("Admin_deposit", "v2268", ctc0, v2268);
      if (v965) {
        stdlib.protect(ctc0, await interact.out(v2178, v2269), {
          at: "./index.rsh:99:11:application",
          fs: [
            "at ./index.rsh:99:11:application call to [unknown function] (defined at: ./index.rsh:99:11:function exp)",
            'at ./index.rsh:104:14:application call to "ret" (defined at: ./index.rsh:103:15:function exp)',
            "at ./index.rsh:103:15:application call to [unknown function] (defined at: ./index.rsh:103:15:function exp)",
          ],
          msg: "out",
          who: "Admin_deposit",
        });
      } else {
      }

      const v2282 = stdlib.safeAdd(v1554, v2191);
      const v2283 = {
        bal: v2282,
        keepGoing: v1555,
        percent: v1556,
        total_amount_claimed: v1557,
        total_rewards_allcoated: v1558,
        total_users_claim: v1559,
        usersNo: v1560,
      };
      const v8546 = v2232;
      const v8547 = v2283.keepGoing;
      if (v8547) {
        const v8548 = v2283.bal;
        const v8550 = v2283.percent;
        const v8551 = v2283.total_amount_claimed;
        const v8552 = v2283.total_rewards_allcoated;
        const v8553 = v2283.total_users_claim;
        const v8554 = v2283.usersNo;
        return;
      } else {
        const v8559 = stdlib.sub(v2232, v2232);
        const v8560 = stdlib.le(await ctc.getBalance(), v8559)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8559);
        return;
      }
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc9,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc9,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1597 = ctc.selfAddress();
  const v1599 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:148:45:application call to [unknown function] (defined at: ./index.rsh:148:45:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_editUserReward0_98" (defined at: ./index.rsh:148:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "Admin_editUserReward",
  });
  const v1604 = stdlib.addressEq(v1597, v1509);
  const v1605 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, ctc4, v1597, ctc0),
    null
  );
  const v1606 = {
    None: 0,
    Some: 1,
  }[v1605[0]];
  const v1607 = stdlib.eq(
    v1606,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  const v1608 = v1604 ? true : v1607;
  stdlib.assert(v1608, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:148:45:application call to [unknown function] (defined at: ./index.rsh:148:45:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_editUserReward0_98" (defined at: ./index.rsh:148:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "Only Admins can deposit",
    who: "Admin_editUserReward",
  });
  const v1617 = ["Admin_editUserReward0_98", v1599];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1617,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:152:9:decimal",
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_editUserReward",
          });
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, ctc4, v1746, ctc0),
            null
          );
          const v2714 =
            v2606[
              stdlib.checkedBigNumberify(
                "./index.rsh:148:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v2715 =
            v2606[
              stdlib.checkedBigNumberify(
                "./index.rsh:148:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          await stdlib.simMapSet(sim_r, 0, ctc4, v2714, ctc1, v2715);
          const v2724 = null;
          const v2725 = await txn1.getOutput(
            "Admin_editUserReward",
            "v2724",
            ctc0,
            v2724
          );

          const v2739 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v8818 = v1533;
          const v8819 = v2739.keepGoing;
          if (v8819) {
            const v8820 = v2739.bal;
            const v8822 = v2739.percent;
            const v8823 = v2739.total_amount_claimed;
            const v8824 = v2739.total_rewards_allcoated;
            const v8825 = v2739.total_users_claim;
            const v8826 = v2739.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8831 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v8832 = stdlib.le(await ctc.getBalance(), v8831)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8831);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
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
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      undefined /* setApiDetails */;
      const v2629 = stdlib.addressEq(v1746, v1509);
      const v2630 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, ctc4, v1746, ctc0),
        null
      );
      const v2631 = {
        None: 0,
        Some: 1,
      }[v2630[0]];
      const v2632 = stdlib.eq(
        v2631,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      const v2633 = v2629 ? true : v2632;
      stdlib.assert(v2633, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:148:45:application call to [unknown function] (defined at: ./index.rsh:148:45:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:148:45:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
        ],
        msg: "Only Admins can deposit",
        who: "Admin_editUserReward",
      });
      const v2714 =
        v2606[
          stdlib.checkedBigNumberify(
            "./index.rsh:148:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2715 =
        v2606[
          stdlib.checkedBigNumberify(
            "./index.rsh:148:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      await stdlib.mapSet(map0, ctc4, v2714, ctc1, v2715);
      const v2724 = null;
      const v2725 = await txn1.getOutput(
        "Admin_editUserReward",
        "v2724",
        ctc0,
        v2724
      );
      if (v965) {
        stdlib.protect(ctc0, await interact.out(v2606, v2725), {
          at: "./index.rsh:148:11:application",
          fs: [
            "at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)",
            'at ./index.rsh:155:14:application call to "ret" (defined at: ./index.rsh:153:15:function exp)',
            "at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)",
          ],
          msg: "out",
          who: "Admin_editUserReward",
        });
      } else {
      }

      const v2739 = {
        bal: v1554,
        keepGoing: v1555,
        percent: v1556,
        total_amount_claimed: v1557,
        total_rewards_allcoated: v1558,
        total_users_claim: v1559,
        usersNo: v1560,
      };
      const v8818 = v1533;
      const v8819 = v2739.keepGoing;
      if (v8819) {
        const v8820 = v2739.bal;
        const v8822 = v2739.percent;
        const v8823 = v2739.total_amount_claimed;
        const v8824 = v2739.total_rewards_allcoated;
        const v8825 = v2739.total_users_claim;
        const v8826 = v2739.usersNo;
        return;
      } else {
        const v8831 = stdlib.sub(v1533, v1533);
        const v8832 = stdlib.le(await ctc.getBalance(), v8831)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8831);
        return;
      }
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc12,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc12,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1687 = ctc.selfAddress();
  const v1689 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:285:44:application call to [unknown function] (defined at: ./index.rsh:285:44:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_endContractAndTransfer0_98" (defined at: ./index.rsh:285:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "Admin_endContractAndTransfer",
  });
  const v1690 = stdlib.addressEq(v1509, v1687);
  stdlib.assert(v1690, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:285:44:application call to [unknown function] (defined at: ./index.rsh:285:44:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_endContractAndTransfer0_98" (defined at: ./index.rsh:285:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "Cannot end contract without being Deployer",
    who: "Admin_endContractAndTransfer",
  });
  const v1695 = ["Admin_endContractAndTransfer0_98", v1689];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1695,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:288:9:decimal",
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_endContractAndTransfer",
          });
          const v3172 = null;
          const v3173 = await txn1.getOutput(
            "Admin_endContractAndTransfer",
            "v3172",
            ctc0,
            v3172
          );

          const v3185 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v9090 = v1533;
          const v9091 = v3185.keepGoing;
          if (v9091) {
            const v9092 = v3185.bal;
            const v9094 = v3185.percent;
            const v9095 = v3185.total_amount_claimed;
            const v9096 = v3185.total_rewards_allcoated;
            const v9097 = v3185.total_users_claim;
            const v9098 = v3185.usersNo;
            sim_r.isHalt = false;
          } else {
            const v9103 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v9104 = stdlib.le(await ctc.getBalance(), v9103)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9103);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
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
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      undefined /* setApiDetails */;
      const v3064 = stdlib.addressEq(v1509, v1746);
      stdlib.assert(v3064, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:285:44:application call to [unknown function] (defined at: ./index.rsh:285:44:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:285:44:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
        ],
        msg: "Cannot end contract without being Deployer",
        who: "Admin_endContractAndTransfer",
      });
      const v3172 = null;
      const v3173 = await txn1.getOutput(
        "Admin_endContractAndTransfer",
        "v3172",
        ctc0,
        v3172
      );
      if (v965) {
        stdlib.protect(ctc0, await interact.out(v3034, v3173), {
          at: "./index.rsh:285:11:application",
          fs: [
            "at ./index.rsh:285:11:application call to [unknown function] (defined at: ./index.rsh:285:11:function exp)",
            'at ./index.rsh:290:14:application call to "ret" (defined at: ./index.rsh:289:15:function exp)',
            "at ./index.rsh:289:15:application call to [unknown function] (defined at: ./index.rsh:289:15:function exp)",
          ],
          msg: "out",
          who: "Admin_endContractAndTransfer",
        });
      } else {
      }

      const v3185 = {
        bal: v1554,
        keepGoing: v1555,
        percent: v1556,
        total_amount_claimed: v1557,
        total_rewards_allcoated: v1558,
        total_users_claim: v1559,
        usersNo: v1560,
      };
      const v9090 = v1533;
      const v9091 = v3185.keepGoing;
      if (v9091) {
        const v9092 = v3185.bal;
        const v9094 = v3185.percent;
        const v9095 = v3185.total_amount_claimed;
        const v9096 = v3185.total_rewards_allcoated;
        const v9097 = v3185.total_users_claim;
        const v9098 = v3185.usersNo;
        return;
      } else {
        const v9103 = stdlib.sub(v1533, v1533);
        const v9104 = stdlib.le(await ctc.getBalance(), v9103)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v9103);
        return;
      }
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc9,
    Admin_deposit0_98: ctc10,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc9,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc10,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1637 = ctc.selfAddress();
  const v1639 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:174:37:application call to [unknown function] (defined at: ./index.rsh:174:37:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_revokeAdmin0_98" (defined at: ./index.rsh:174:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "Admin_revokeAdmin",
  });
  const v1642 = stdlib.addressEq(v1637, v1509);
  stdlib.assert(v1642, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:174:37:application call to [unknown function] (defined at: ./index.rsh:174:37:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_revokeAdmin0_98" (defined at: ./index.rsh:174:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "Only the Deployer can revoke Admin Rights",
    who: "Admin_revokeAdmin",
  });
  const v1649 = ["Admin_revokeAdmin0_98", v1639];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1649,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:177:9:decimal",
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_revokeAdmin",
          });
          const v3616 =
            v3462[
              stdlib.checkedBigNumberify(
                "./index.rsh:174:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          await stdlib.simMapSet(
            sim_r,
            1,
            ctc4,
            v3616,
            ctc0,
            undefined /* Nothing */
          );
          const v3621 = null;
          const v3622 = await txn1.getOutput(
            "Admin_revokeAdmin",
            "v3621",
            ctc0,
            v3621
          );

          const v3635 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v9362 = v1533;
          const v9363 = v3635.keepGoing;
          if (v9363) {
            const v9364 = v3635.bal;
            const v9366 = v3635.percent;
            const v9367 = v3635.total_amount_claimed;
            const v9368 = v3635.total_rewards_allcoated;
            const v9369 = v3635.total_users_claim;
            const v9370 = v3635.usersNo;
            sim_r.isHalt = false;
          } else {
            const v9375 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v9376 = stdlib.le(await ctc.getBalance(), v9375)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9375);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
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
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      undefined /* setApiDetails */;
      const v3496 = stdlib.addressEq(v1746, v1509);
      stdlib.assert(v3496, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:174:37:application call to [unknown function] (defined at: ./index.rsh:174:37:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:174:37:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
        ],
        msg: "Only the Deployer can revoke Admin Rights",
        who: "Admin_revokeAdmin",
      });
      const v3616 =
        v3462[
          stdlib.checkedBigNumberify(
            "./index.rsh:174:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      await stdlib.mapSet(map1, ctc4, v3616, ctc0, undefined /* Nothing */);
      const v3621 = null;
      const v3622 = await txn1.getOutput(
        "Admin_revokeAdmin",
        "v3621",
        ctc0,
        v3621
      );
      if (v965) {
        stdlib.protect(ctc0, await interact.out(v3462, v3622), {
          at: "./index.rsh:174:11:application",
          fs: [
            "at ./index.rsh:174:11:application call to [unknown function] (defined at: ./index.rsh:174:11:function exp)",
            'at ./index.rsh:180:14:application call to "ret" (defined at: ./index.rsh:178:15:function exp)',
            "at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:15:function exp)",
          ],
          msg: "out",
          who: "Admin_revokeAdmin",
        });
      } else {
      }

      const v3635 = {
        bal: v1554,
        keepGoing: v1555,
        percent: v1556,
        total_amount_claimed: v1557,
        total_rewards_allcoated: v1558,
        total_users_claim: v1559,
        usersNo: v1560,
      };
      const v9362 = v1533;
      const v9363 = v3635.keepGoing;
      if (v9363) {
        const v9364 = v3635.bal;
        const v9366 = v3635.percent;
        const v9367 = v3635.total_amount_claimed;
        const v9368 = v3635.total_rewards_allcoated;
        const v9369 = v3635.total_users_claim;
        const v9370 = v3635.usersNo;
        return;
      } else {
        const v9375 = stdlib.sub(v1533, v1533);
        const v9376 = stdlib.le(await ctc.getBalance(), v9375)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v9375);
        return;
      }
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc9,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc9,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1582 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:112:40:application call to [unknown function] (defined at: ./index.rsh:112:40:function exp)",
      'at ./index.rsh:72:37:application call to "runAdmin_setReward0_98" (defined at: ./index.rsh:112:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "Admin_setReward",
  });
  const v1584 =
    v1582[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "1"
      )
    ];
  const v1587 = stdlib.gt(v1584, v1554);
  const v1595 = ["Admin_setReward0_98", v1582];

  const v1733 = v1587
    ? v1584
    : stdlib.checkedBigNumberify(
        "./index.rsh:115:30:decimal",
        stdlib.UInt_max,
        "0"
      );

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1595,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v1733, []],
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "Admin_setReward",
          });
          const v3928 =
            v3890[
              stdlib.checkedBigNumberify(
                "./index.rsh:112:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          const v3929 = stdlib.gt(v3928, v1554);
          const v3930 = v3929
            ? v3928
            : stdlib.checkedBigNumberify(
                "./index.rsh:115:30:decimal",
                stdlib.UInt_max,
                "0"
              );
          const v3944 = stdlib.add(v1533, v3930);
          sim_r.txns.push({
            amt: v3930,
            kind: "to",
            tok: undefined /* Nothing */,
          });
          const v4066 =
            v3890[
              stdlib.checkedBigNumberify(
                "./index.rsh:112:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v4071 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc4, v4066, ctc1),
            null
          );
          const v4072 = stdlib.fromSome(
            v4071,
            stdlib.checkedBigNumberify(
              "./index.rsh:117:60:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v4073 = stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, ctc4, v4066, ctc0),
            null
          );
          const v4074 = {
            None: 0,
            Some: 1,
          }[v4073[0]];
          const v4075 = stdlib.eq(
            v4074,
            stdlib.checkedBigNumberify(
              "reach standard library:38:41:application",
              stdlib.UInt_max,
              "1"
            )
          );
          if (v4075) {
            const v4076 = stdlib.safeAdd(v4072, v3928);
            await stdlib.simMapSet(sim_r, 0, ctc4, v4066, ctc1, v4076);
            const v4077 = true;
            const v4078 = await txn1.getOutput(
              "Admin_setReward",
              "v4077",
              ctc6,
              v4077
            );

            let v4092;
            if (v3929) {
              const v4093 = stdlib.safeAdd(v1554, v3928);
              v4092 = v4093;
            } else {
              v4092 = v1554;
            }
            const v4094 = {
              bal: v4092,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v1557,
              total_rewards_allcoated: v1558,
              total_users_claim: v1559,
              usersNo: v1560,
            };
            const v9634 = v3944;
            const v9635 = v4094.keepGoing;
            if (v9635) {
              const v9636 = v4094.bal;
              const v9638 = v4094.percent;
              const v9639 = v4094.total_amount_claimed;
              const v9640 = v4094.total_rewards_allcoated;
              const v9641 = v4094.total_users_claim;
              const v9642 = v4094.usersNo;
              sim_r.isHalt = false;
            } else {
              const v9647 = stdlib.sub(v3944, v3944);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              const v9648 = stdlib.le(await ctc.getBalance(), v9647)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:298:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v9647);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          } else {
            if (v3929) {
              const v4096 = "Your user hasn't opted in                                                                                                                                                                               ";
              null;
              const v4097 = false;
              const v4098 = await txn1.getOutput(
                "Admin_setReward",
                "v4097",
                ctc6,
                v4097
              );

              const v4113 = stdlib.safeAdd(v1554, v3928);
              const v4114 = {
                bal: v4113,
                keepGoing: v1555,
                percent: v1556,
                total_amount_claimed: v1557,
                total_rewards_allcoated: v1558,
                total_users_claim: v1559,
                usersNo: v1560,
              };
              const v9651 = v3944;
              const v9652 = v4114.keepGoing;
              if (v9652) {
                const v9653 = v4114.bal;
                const v9655 = v4114.percent;
                const v9656 = v4114.total_amount_claimed;
                const v9657 = v4114.total_rewards_allcoated;
                const v9658 = v4114.total_users_claim;
                const v9659 = v4114.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9664 = stdlib.sub(v3944, v3944);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v9665 = stdlib.le(await ctc.getBalance(), v9664)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9664);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            } else {
              const v4116 =
                "The balance you are trying to set for the user is invalid and they haven't opted in                                                                                                                     ";
              null;
              const v4117 = false;
              const v4118 = await txn1.getOutput(
                "Admin_setReward",
                "v4117",
                ctc6,
                v4117
              );

              const v4134 = {
                bal: v1554,
                keepGoing: v1555,
                percent: v1556,
                total_amount_claimed: v1557,
                total_rewards_allcoated: v1558,
                total_users_claim: v1559,
                usersNo: v1560,
              };
              const v9668 = v3944;
              const v9669 = v4134.keepGoing;
              if (v9669) {
                const v9670 = v4134.bal;
                const v9672 = v4134.percent;
                const v9673 = v4134.total_amount_claimed;
                const v9674 = v4134.total_rewards_allcoated;
                const v9675 = v4134.total_users_claim;
                const v9676 = v4134.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9681 = stdlib.sub(v3944, v3944);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v9682 = stdlib.le(await ctc.getBalance(), v9681)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9681);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
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
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      undefined /* setApiDetails */;
      const v3928 =
        v3890[
          stdlib.checkedBigNumberify(
            "./index.rsh:112:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      const v3929 = stdlib.gt(v3928, v1554);
      const v3930 = v3929
        ? v3928
        : stdlib.checkedBigNumberify(
            "./index.rsh:115:30:decimal",
            stdlib.UInt_max,
            "0"
          );
      const v3944 = stdlib.add(v1533, v3930);
      const v4066 =
        v3890[
          stdlib.checkedBigNumberify(
            "./index.rsh:112:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v4071 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc4, v4066, ctc1),
        null
      );
      const v4072 = stdlib.fromSome(
        v4071,
        stdlib.checkedBigNumberify(
          "./index.rsh:117:60:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      const v4073 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, ctc4, v4066, ctc0),
        null
      );
      const v4074 = {
        None: 0,
        Some: 1,
      }[v4073[0]];
      const v4075 = stdlib.eq(
        v4074,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      if (v4075) {
        const v4076 = stdlib.safeAdd(v4072, v3928);
        await stdlib.mapSet(map0, ctc4, v4066, ctc1, v4076);
        const v4077 = true;
        const v4078 = await txn1.getOutput(
          "Admin_setReward",
          "v4077",
          ctc6,
          v4077
        );
        if (v965) {
          stdlib.protect(ctc0, await interact.out(v3890, v4078), {
            at: "./index.rsh:112:11:application",
            fs: [
              "at ./index.rsh:112:11:application call to [unknown function] (defined at: ./index.rsh:112:11:function exp)",
              'at ./index.rsh:120:16:application call to "ret" (defined at: ./index.rsh:116:15:function exp)',
              "at ./index.rsh:116:15:application call to [unknown function] (defined at: ./index.rsh:116:15:function exp)",
            ],
            msg: "out",
            who: "Admin_setReward",
          });
        } else {
        }

        let v4092;
        if (v3929) {
          const v4093 = stdlib.safeAdd(v1554, v3928);
          v4092 = v4093;
        } else {
          v4092 = v1554;
        }
        const v4094 = {
          bal: v4092,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v1560,
        };
        const v9634 = v3944;
        const v9635 = v4094.keepGoing;
        if (v9635) {
          const v9636 = v4094.bal;
          const v9638 = v4094.percent;
          const v9639 = v4094.total_amount_claimed;
          const v9640 = v4094.total_rewards_allcoated;
          const v9641 = v4094.total_users_claim;
          const v9642 = v4094.usersNo;
          return;
        } else {
          const v9647 = stdlib.sub(v3944, v3944);
          const v9648 = stdlib.le(await ctc.getBalance(), v9647)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:298:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v9647);
          return;
        }
      } else {
        if (v3929) {
          const v4096 = "Your user hasn't opted in                                                                                                                                                                               ";
          null;
          const v4097 = false;
          const v4098 = await txn1.getOutput(
            "Admin_setReward",
            "v4097",
            ctc6,
            v4097
          );
          if (v965) {
            stdlib.protect(ctc0, await interact.out(v3890, v4098), {
              at: "./index.rsh:112:11:application",
              fs: [
                "at ./index.rsh:112:11:application call to [unknown function] (defined at: ./index.rsh:112:11:function exp)",
                'at ./index.rsh:127:16:application call to "ret" (defined at: ./index.rsh:116:15:function exp)',
                "at ./index.rsh:116:15:application call to [unknown function] (defined at: ./index.rsh:116:15:function exp)",
              ],
              msg: "out",
              who: "Admin_setReward",
            });
          } else {
          }

          const v4113 = stdlib.safeAdd(v1554, v3928);
          const v4114 = {
            bal: v4113,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v9651 = v3944;
          const v9652 = v4114.keepGoing;
          if (v9652) {
            const v9653 = v4114.bal;
            const v9655 = v4114.percent;
            const v9656 = v4114.total_amount_claimed;
            const v9657 = v4114.total_rewards_allcoated;
            const v9658 = v4114.total_users_claim;
            const v9659 = v4114.usersNo;
            return;
          } else {
            const v9664 = stdlib.sub(v3944, v3944);
            const v9665 = stdlib.le(await ctc.getBalance(), v9664)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9664);
            return;
          }
        } else {
          const v4116 =
            "The balance you are trying to set for the user is invalid and they haven't opted in                                                                                                                     ";
          null;
          const v4117 = false;
          const v4118 = await txn1.getOutput(
            "Admin_setReward",
            "v4117",
            ctc6,
            v4117
          );
          if (v965) {
            stdlib.protect(ctc0, await interact.out(v3890, v4118), {
              at: "./index.rsh:112:11:application",
              fs: [
                "at ./index.rsh:112:11:application call to [unknown function] (defined at: ./index.rsh:112:11:function exp)",
                'at ./index.rsh:139:16:application call to "ret" (defined at: ./index.rsh:116:15:function exp)',
                "at ./index.rsh:116:15:application call to [unknown function] (defined at: ./index.rsh:116:15:function exp)",
              ],
              msg: "out",
              who: "Admin_setReward",
            });
          } else {
          }

          const v4134 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v9668 = v3944;
          const v9669 = v4134.keepGoing;
          if (v9669) {
            const v9670 = v4134.bal;
            const v9672 = v4134.percent;
            const v9673 = v4134.total_amount_claimed;
            const v9674 = v4134.total_rewards_allcoated;
            const v9675 = v4134.total_users_claim;
            const v9676 = v4134.usersNo;
            return;
          } else {
            const v9681 = stdlib.sub(v3944, v3944);
            const v9682 = stdlib.le(await ctc.getBalance(), v9681)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9681);
            return;
          }
        }
      }
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
    Admin_addAdmin0_98: ctc6,
    Admin_deposit0_98: ctc7,
    Admin_editUserReward0_98: ctc8,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc6,
    Admin_setReward0_98: ctc8,
    User_claim0_98: ctc7,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9,
  });
  const ctc11 = stdlib.T_Bool;

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
  });

  const v1506 = stdlib.protect(
    ctc4,
    interact.projectName,
    "for Deployer's interact field projectName"
  );

  const txn1 = await ctc.sendrecv({
    args: [v1506],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./index.rsh:55:12:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:55:12:decimal",
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
        data: [v1510],
        secs: v1512,
        time: v1511,
        didSend: v27,
        from: v1509,
      } = txn1;

      const v1513 = await ctc.getContractInfo();

      const v1526 = {
        i: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"),
        scale: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "100"),
      };
      const v1527 = {
        i: v1526,
        sign: true,
      };
      const v1528 = {
        bal: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        keepGoing: true,
        percent: v1527,
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
      const v1529 = v1528;
      const v1530 = v1511;
      const v1533 = stdlib.checkedBigNumberify(
        "./index.rsh:50:9:after expr stmt semicolon",
        stdlib.UInt_max,
        "0"
      );

      if (
        await (async () => {
          const v1546 = v1529.keepGoing;

          return v1546;
        })()
      ) {
        const v1554 = v1529.bal;
        const v1555 = v1529.keepGoing;
        const v1556 = v1529.percent;
        const v1557 = v1529.total_amount_claimed;
        const v1558 = v1529.total_rewards_allcoated;
        const v1559 = v1529.total_users_claim;
        const v1560 = v1529.usersNo;
        sim_r.isHalt = false;
      } else {
        const v5614 = stdlib.sub(v1533, v1533);
        sim_r.txns.push({
          kind: "from",
          to: v1509,
          tok: undefined /* Nothing */,
        });
        const v5616 = stdlib.le(await ctc.getBalance(), v5614)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v5614);
        sim_r.txns.push({
          kind: "from",
          to: v1509,
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
    data: [v1510],
    secs: v1512,
    time: v1511,
    didSend: v27,
    from: v1509,
  } = txn1;
  const v1513 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v1513), {
    at: "./index.rsh:57:27:application",
    fs: [
      "at ./index.rsh:57:27:application call to [unknown function] (defined at: ./index.rsh:57:27:function exp)",
      'at ./index.rsh:57:27:application call to "liftedInteract" (defined at: ./index.rsh:57:27:application)',
    ],
    msg: "notify",
    who: "Deployer",
  });

  const v1526 = {
    i: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"),
    scale: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "100"),
  };
  const v1527 = {
    i: v1526,
    sign: true,
  };
  const v1528 = {
    bal: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    keepGoing: true,
    percent: v1527,
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
  let v1529 = v1528;
  let v1530 = v1511;
  let v1533 = stdlib.checkedBigNumberify(
    "./index.rsh:50:9:after expr stmt semicolon",
    stdlib.UInt_max,
    "0"
  );

  let txn2 = txn1;
  while (
    await (async () => {
      const v1546 = v1529.keepGoing;

      return v1546;
    })()
  ) {
    const v1554 = v1529.bal;
    const v1555 = v1529.keepGoing;
    const v1556 = v1529.percent;
    const v1557 = v1529.total_amount_claimed;
    const v1558 = v1529.total_rewards_allcoated;
    const v1559 = v1529.total_users_claim;
    const v1560 = v1529.usersNo;
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v1747],
      secs: v1749,
      time: v1748,
      didSend: v965,
      from: v1746,
    } = txn3;
    switch (v1747[0]) {
      case "Admin_addAdmin0_98": {
        const v1750 = v1747[1];
        undefined /* setApiDetails */;
        const v1756 = stdlib.addressEq(v1746, v1509);
        const v1757 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, ctc5, v1746, ctc0),
          null
        );
        const v1758 = {
          None: 0,
          Some: 1,
        }[v1757[0]];
        const v1759 = stdlib.eq(
          v1758,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        const v1760 = v1756 ? true : v1759;
        stdlib.assert(v1760, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:160:34:application call to [unknown function] (defined at: ./index.rsh:160:34:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:160:34:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
          ],
          msg: "You Are unable to register another Admin",
          who: "Deployer",
        });
        const v1806 =
          v1750[
            stdlib.checkedBigNumberify(
              "./index.rsh:160:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        await stdlib.mapSet(map1, ctc5, v1806, ctc0, null);
        const v1815 = null;
        await txn3.getOutput("Admin_addAdmin", "v1815", ctc0, v1815);
        const v1829 = {
          bal: v1554,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v1560,
        };
        const cv1529 = v1829;
        const cv1530 = v1748;
        const cv1533 = v1533;

        v1529 = cv1529;
        v1530 = cv1530;
        v1533 = cv1533;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_deposit0_98": {
        const v2178 = v1747[1];
        undefined /* setApiDetails */;
        const v2191 =
          v2178[
            stdlib.checkedBigNumberify(
              "./index.rsh:99:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2192 = stdlib.addressEq(v1746, v1509);
        const v2193 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, ctc5, v1746, ctc0),
          null
        );
        const v2194 = {
          None: 0,
          Some: 1,
        }[v2193[0]];
        const v2195 = stdlib.eq(
          v2194,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        const v2196 = v2192 ? true : v2195;
        stdlib.assert(v2196, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:99:32:application call to [unknown function] (defined at: ./index.rsh:99:32:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:99:32:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
          ],
          msg: "Only Admins can deposit",
          who: "Deployer",
        });
        const v2232 = stdlib.add(v1533, v2191);
        const v2268 = null;
        await txn3.getOutput("Admin_deposit", "v2268", ctc0, v2268);
        const v2282 = stdlib.safeAdd(v1554, v2191);
        const v2283 = {
          bal: v2282,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v1560,
        };
        const cv1529 = v2283;
        const cv1530 = v1748;
        const cv1533 = v2232;

        v1529 = cv1529;
        v1530 = cv1530;
        v1533 = cv1533;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_editUserReward0_98": {
        const v2606 = v1747[1];
        undefined /* setApiDetails */;
        const v2629 = stdlib.addressEq(v1746, v1509);
        const v2630 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, ctc5, v1746, ctc0),
          null
        );
        const v2631 = {
          None: 0,
          Some: 1,
        }[v2630[0]];
        const v2632 = stdlib.eq(
          v2631,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        const v2633 = v2629 ? true : v2632;
        stdlib.assert(v2633, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:148:45:application call to [unknown function] (defined at: ./index.rsh:148:45:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:148:45:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
          ],
          msg: "Only Admins can deposit",
          who: "Deployer",
        });
        const v2714 =
          v2606[
            stdlib.checkedBigNumberify(
              "./index.rsh:148:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2715 =
          v2606[
            stdlib.checkedBigNumberify(
              "./index.rsh:148:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        await stdlib.mapSet(map0, ctc5, v2714, ctc1, v2715);
        const v2724 = null;
        await txn3.getOutput("Admin_editUserReward", "v2724", ctc0, v2724);
        const v2739 = {
          bal: v1554,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v1560,
        };
        const cv1529 = v2739;
        const cv1530 = v1748;
        const cv1533 = v1533;

        v1529 = cv1529;
        v1530 = cv1530;
        v1533 = cv1533;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_endContractAndTransfer0_98": {
        const v3034 = v1747[1];
        undefined /* setApiDetails */;
        const v3064 = stdlib.addressEq(v1509, v1746);
        stdlib.assert(v3064, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:285:44:application call to [unknown function] (defined at: ./index.rsh:285:44:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:285:44:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
          ],
          msg: "Cannot end contract without being Deployer",
          who: "Deployer",
        });
        const v3172 = null;
        await txn3.getOutput(
          "Admin_endContractAndTransfer",
          "v3172",
          ctc0,
          v3172
        );
        const v3185 = {
          bal: v1554,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v1560,
        };
        const cv1529 = v3185;
        const cv1530 = v1748;
        const cv1533 = v1533;

        v1529 = cv1529;
        v1530 = cv1530;
        v1533 = cv1533;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_revokeAdmin0_98": {
        const v3462 = v1747[1];
        undefined /* setApiDetails */;
        const v3496 = stdlib.addressEq(v1746, v1509);
        stdlib.assert(v3496, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:174:37:application call to [unknown function] (defined at: ./index.rsh:174:37:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:174:37:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
          ],
          msg: "Only the Deployer can revoke Admin Rights",
          who: "Deployer",
        });
        const v3616 =
          v3462[
            stdlib.checkedBigNumberify(
              "./index.rsh:174:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        await stdlib.mapSet(map1, ctc5, v3616, ctc0, undefined /* Nothing */);
        const v3621 = null;
        await txn3.getOutput("Admin_revokeAdmin", "v3621", ctc0, v3621);
        const v3635 = {
          bal: v1554,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v1560,
        };
        const cv1529 = v3635;
        const cv1530 = v1748;
        const cv1533 = v1533;

        v1529 = cv1529;
        v1530 = cv1530;
        v1533 = cv1533;

        txn2 = txn3;
        continue;
        break;
      }
      case "Admin_setReward0_98": {
        const v3890 = v1747[1];
        undefined /* setApiDetails */;
        const v3928 =
          v3890[
            stdlib.checkedBigNumberify(
              "./index.rsh:112:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        const v3929 = stdlib.gt(v3928, v1554);
        const v3930 = v3929
          ? v3928
          : stdlib.checkedBigNumberify(
              "./index.rsh:115:30:decimal",
              stdlib.UInt_max,
              "0"
            );
        const v3944 = stdlib.add(v1533, v3930);
        const v4066 =
          v3890[
            stdlib.checkedBigNumberify(
              "./index.rsh:112:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v4071 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc5, v4066, ctc1),
          null
        );
        const v4072 = stdlib.fromSome(
          v4071,
          stdlib.checkedBigNumberify(
            "./index.rsh:117:60:decimal",
            stdlib.UInt_max,
            "0"
          )
        );
        const v4073 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, ctc5, v4066, ctc0),
          null
        );
        const v4074 = {
          None: 0,
          Some: 1,
        }[v4073[0]];
        const v4075 = stdlib.eq(
          v4074,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        if (v4075) {
          const v4076 = stdlib.safeAdd(v4072, v3928);
          await stdlib.mapSet(map0, ctc5, v4066, ctc1, v4076);
          const v4077 = true;
          await txn3.getOutput("Admin_setReward", "v4077", ctc11, v4077);
          let v4092;
          if (v3929) {
            const v4093 = stdlib.safeAdd(v1554, v3928);
            v4092 = v4093;
          } else {
            v4092 = v1554;
          }
          const v4094 = {
            bal: v4092,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const cv1529 = v4094;
          const cv1530 = v1748;
          const cv1533 = v3944;

          v1529 = cv1529;
          v1530 = cv1530;
          v1533 = cv1533;

          txn2 = txn3;
          continue;
        } else {
          if (v3929) {
            const v4096 = "Your user hasn't opted in                                                                                                                                                                               ";
            null;
            const v4097 = false;
            await txn3.getOutput("Admin_setReward", "v4097", ctc11, v4097);
            const v4113 = stdlib.safeAdd(v1554, v3928);
            const v4114 = {
              bal: v4113,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v1557,
              total_rewards_allcoated: v1558,
              total_users_claim: v1559,
              usersNo: v1560,
            };
            const cv1529 = v4114;
            const cv1530 = v1748;
            const cv1533 = v3944;

            v1529 = cv1529;
            v1530 = cv1530;
            v1533 = cv1533;

            txn2 = txn3;
            continue;
          } else {
            const v4116 =
              "The balance you are trying to set for the user is invalid and they haven't opted in                                                                                                                     ";
            null;
            const v4117 = false;
            await txn3.getOutput("Admin_setReward", "v4117", ctc11, v4117);
            const v4134 = {
              bal: v1554,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v1557,
              total_rewards_allcoated: v1558,
              total_users_claim: v1559,
              usersNo: v1560,
            };
            const cv1529 = v4134;
            const cv1530 = v1748;
            const cv1533 = v3944;

            v1529 = cv1529;
            v1530 = cv1530;
            v1533 = cv1533;

            txn2 = txn3;
            continue;
          }
        }
        break;
      }
      case "User_claim0_98": {
        const v4318 = v1747[1];
        undefined /* setApiDetails */;
        const v4361 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc5, v1746, ctc1),
          null
        );
        const v4362 = {
          None: 0,
          Some: 1,
        }[v4361[0]];
        const v4363 = stdlib.eq(
          v4362,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v4363, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:228:29:application call to [unknown function] (defined at: ./index.rsh:228:29:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:228:29:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
          ],
          msg: "Cannot claim because you have not earned reward",
          who: "Deployer",
        });
        const v4565 =
          v4318[
            stdlib.checkedBigNumberify(
              "./index.rsh:228:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v4572 = stdlib.fromSome(
          v4361,
          stdlib.checkedBigNumberify(
            "./index.rsh:236:60:decimal",
            stdlib.UInt_max,
            "0"
          )
        );
        const v4573 = stdlib.gt(v4565, v4572);
        const v4574 = v4573 ? v4572 : v4565;
        const v4576 = stdlib.gt(v1533, v4574);
        const v4577 = v4576 ? v4574 : v1533;
        const v4579 = stdlib.ge(v4572, v1533);
        if (v4579) {
          null;
          const v4580 = false;
          await txn3.getOutput("User_claim", "v4580", ctc11, v4580);
          const v4594 = stdlib.safeAdd(
            v1560,
            stdlib.checkedBigNumberify(
              "./index.rsh:242:57:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4595 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v4594,
          };
          const cv1529 = v4595;
          const cv1530 = v1748;
          const cv1533 = v1533;

          v1529 = cv1529;
          v1530 = cv1530;
          v1533 = cv1533;

          txn2 = txn3;
          continue;
        } else {
          const v4597 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, ctc5, v1746, ctc0),
            null
          );
          const v4598 = {
            None: 0,
            Some: 1,
          }[v4597[0]];
          const v4599 = stdlib.eq(
            v4598,
            stdlib.checkedBigNumberify(
              "reach standard library:38:41:application",
              stdlib.UInt_max,
              "1"
            )
          );
          if (v4599) {
            const v4627 = true;
            await txn3.getOutput("User_claim", "v4627", ctc11, v4627);
            const v4637 = stdlib.sub(v1533, v4577);
            await stdlib.mapSet(
              map0,
              ctc5,
              v1746,
              ctc1,
              undefined /* Nothing */
            );
            const v4645 = stdlib.safeSub(v1554, v4577);
            const v4646 = stdlib.safeAdd(
              v1559,
              stdlib.checkedBigNumberify(
                "./index.rsh:265:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4647 = stdlib.safeAdd(v1557, v4577);
            const v4648 = {
              bal: v4645,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v4647,
              total_rewards_allcoated: v1558,
              total_users_claim: v4646,
              usersNo: v1560,
            };
            const cv1529 = v4648;
            const cv1530 = v1748;
            const cv1533 = v4637;

            v1529 = cv1529;
            v1530 = cv1530;
            v1533 = cv1533;

            txn2 = txn3;
            continue;
          } else {
            const v4601 = true;
            await txn3.getOutput("User_claim", "v4601", ctc11, v4601);
            const v4608 = {
              addr: v1746,
              amount: v4577,
              projectName: v1510,
            };
            null;
            await stdlib.mapSet(map2, ctc5, v1746, ctc0, null);
            const v4613 = stdlib.sub(v1533, v4577);
            await stdlib.mapSet(
              map0,
              ctc5,
              v1746,
              ctc1,
              undefined /* Nothing */
            );
            const v4621 = stdlib.safeAdd(
              v1560,
              stdlib.checkedBigNumberify(
                "./index.rsh:253:34:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4622 = stdlib.safeSub(v1554, v4577);
            const v4623 = stdlib.safeAdd(
              v1559,
              stdlib.checkedBigNumberify(
                "./index.rsh:255:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4624 = stdlib.safeAdd(v1557, v4577);
            const v4625 = {
              bal: v4622,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v4624,
              total_rewards_allcoated: v1558,
              total_users_claim: v4623,
              usersNo: v4621,
            };
            const cv1529 = v4625;
            const cv1530 = v1748;
            const cv1533 = v4613;

            v1529 = cv1529;
            v1530 = cv1530;
            v1533 = cv1533;

            txn2 = txn3;
            continue;
          }
        }
        break;
      }
      case "User_claimAll0_98": {
        const v4746 = v1747[1];
        undefined /* setApiDetails */;
        const v4794 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc5, v1746, ctc1),
          null
        );
        const v4795 = {
          None: 0,
          Some: 1,
        }[v4794[0]];
        const v4796 = stdlib.eq(
          v4795,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v4796, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:185:29:application call to [unknown function] (defined at: ./index.rsh:185:29:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:185:29:function exp)",
            "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
          ],
          msg: "Cannot claim because you have not earned reward",
          who: "Deployer",
        });
        const v5084 = stdlib.fromSome(
          v4794,
          stdlib.checkedBigNumberify(
            "./index.rsh:193:60:decimal",
            stdlib.UInt_max,
            "0"
          )
        );
        const v5086 = stdlib.gt(v1533, v5084);
        const v5087 = v5086 ? v5084 : v1533;
        const v5089 = stdlib.ge(v5084, v1533);
        if (v5089) {
          null;
          const v5090 = false;
          await txn3.getOutput("User_claimAll", "v5090", ctc11, v5090);
          const v5103 = stdlib.safeAdd(
            v1560,
            stdlib.checkedBigNumberify(
              "./index.rsh:198:57:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v5104 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v5103,
          };
          const cv1529 = v5104;
          const cv1530 = v1748;
          const cv1533 = v1533;

          v1529 = cv1529;
          v1530 = cv1530;
          v1533 = cv1533;

          txn2 = txn3;
          continue;
        } else {
          const v5106 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, ctc5, v1746, ctc0),
            null
          );
          const v5107 = {
            None: 0,
            Some: 1,
          }[v5106[0]];
          const v5108 = stdlib.eq(
            v5107,
            stdlib.checkedBigNumberify(
              "reach standard library:38:41:application",
              stdlib.UInt_max,
              "1"
            )
          );
          if (v5108) {
            const v5135 = true;
            await txn3.getOutput("User_claimAll", "v5135", ctc11, v5135);
            const v5144 = stdlib.sub(v1533, v5087);
            await stdlib.mapSet(
              map0,
              ctc5,
              v1746,
              ctc1,
              undefined /* Nothing */
            );
            const v5152 = stdlib.safeSub(v1554, v5087);
            const v5153 = stdlib.safeAdd(
              v1559,
              stdlib.checkedBigNumberify(
                "./index.rsh:221:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v5154 = stdlib.safeAdd(v1557, v5087);
            const v5155 = {
              bal: v5152,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v5154,
              total_rewards_allcoated: v1558,
              total_users_claim: v5153,
              usersNo: v1560,
            };
            const cv1529 = v5155;
            const cv1530 = v1748;
            const cv1533 = v5144;

            v1529 = cv1529;
            v1530 = cv1530;
            v1533 = cv1533;

            txn2 = txn3;
            continue;
          } else {
            const v5110 = true;
            await txn3.getOutput("User_claimAll", "v5110", ctc11, v5110);
            const v5116 = {
              addr: v1746,
              amount: v5087,
              projectName: v1510,
            };
            null;
            await stdlib.mapSet(map2, ctc5, v1746, ctc0, null);
            const v5121 = stdlib.sub(v1533, v5087);
            await stdlib.mapSet(
              map0,
              ctc5,
              v1746,
              ctc1,
              undefined /* Nothing */
            );
            const v5129 = stdlib.safeAdd(
              v1560,
              stdlib.checkedBigNumberify(
                "./index.rsh:209:34:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v5130 = stdlib.safeSub(v1554, v5087);
            const v5131 = stdlib.safeAdd(
              v1559,
              stdlib.checkedBigNumberify(
                "./index.rsh:211:54:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v5132 = stdlib.safeAdd(v1557, v5087);
            const v5133 = {
              bal: v5130,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v5132,
              total_rewards_allcoated: v1558,
              total_users_claim: v5131,
              usersNo: v5129,
            };
            const cv1529 = v5133;
            const cv1530 = v1748;
            const cv1533 = v5121;

            v1529 = cv1529;
            v1530 = cv1530;
            v1533 = cv1533;

            txn2 = txn3;
            continue;
          }
        }
        break;
      }
      case "User_optin0_98": {
        const v5174 = v1747[1];
        undefined /* setApiDetails */;
        await stdlib.mapSet(map3, ctc5, v1746, ctc0, null);
        const v5587 = null;
        await txn3.getOutput("User_optin", "v5587", ctc0, v5587);
        const v5600 = {
          bal: v1554,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v1560,
        };
        const cv1529 = v5600;
        const cv1530 = v1748;
        const cv1533 = v1533;

        v1529 = cv1529;
        v1530 = cv1530;
        v1533 = cv1533;

        txn2 = txn3;
        continue;
        break;
      }
    }
  }
  const v5614 = stdlib.sub(v1533, v1533);
  const v5616 = stdlib.le(await ctc.getBalance(), v5614)
    ? stdlib.checkedBigNumberify(
        "./index.rsh:298:29:application",
        stdlib.UInt_max,
        "0"
      )
    : stdlib.safeSub(await ctc.getBalance(), v5614);
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc9,
    Admin_editUserReward0_98: ctc11,
    Admin_endContractAndTransfer0_98: ctc12,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc11,
    User_claim0_98: ctc9,
    User_claimAll0_98: ctc12,
    User_optin0_98: ctc12,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1663 = ctc.selfAddress();
  const v1665 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:228:29:application call to [unknown function] (defined at: ./index.rsh:228:29:function exp)",
      'at ./index.rsh:72:37:application call to "runUser_claim0_98" (defined at: ./index.rsh:228:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "User_claim",
  });
  const v1668 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc4, v1663, ctc1),
    null
  );
  const v1669 = {
    None: 0,
    Some: 1,
  }[v1668[0]];
  const v1670 = stdlib.eq(
    v1669,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v1670, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:228:29:application call to [unknown function] (defined at: ./index.rsh:228:29:function exp)",
      'at ./index.rsh:72:37:application call to "runUser_claim0_98" (defined at: ./index.rsh:228:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "Cannot claim because you have not earned reward",
    who: "User_claim",
  });
  const v1677 = ["User_claim0_98", v1665];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1677,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:234:9:decimal",
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "User_claim",
          });
          const v4361 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc4, v1746, ctc1),
            null
          );
          const v4565 =
            v4318[
              stdlib.checkedBigNumberify(
                "./index.rsh:228:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v4572 = stdlib.fromSome(
            v4361,
            stdlib.checkedBigNumberify(
              "./index.rsh:236:60:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v4573 = stdlib.gt(v4565, v4572);
          const v4574 = v4573 ? v4572 : v4565;
          const v4576 = stdlib.gt(v1533, v4574);
          const v4577 = v4576 ? v4574 : v1533;
          const v4579 = stdlib.ge(v4572, v1533);
          if (v4579) {
            null;
            const v4580 = false;
            const v4581 = await txn1.getOutput(
              "User_claim",
              "v4580",
              ctc6,
              v4580
            );

            const v4594 = stdlib.safeAdd(
              v1560,
              stdlib.checkedBigNumberify(
                "./index.rsh:242:57:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v4595 = {
              bal: v1554,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v1557,
              total_rewards_allcoated: v1558,
              total_users_claim: v1559,
              usersNo: v4594,
            };
            const v9940 = v1533;
            const v9941 = v4595.keepGoing;
            if (v9941) {
              const v9942 = v4595.bal;
              const v9944 = v4595.percent;
              const v9945 = v4595.total_amount_claimed;
              const v9946 = v4595.total_rewards_allcoated;
              const v9947 = v4595.total_users_claim;
              const v9948 = v4595.usersNo;
              sim_r.isHalt = false;
            } else {
              const v9953 = stdlib.sub(v1533, v1533);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              const v9954 = stdlib.le(await ctc.getBalance(), v9953)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:298:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v9953);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          } else {
            const v4597 = stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, ctc4, v1746, ctc0),
              null
            );
            const v4598 = {
              None: 0,
              Some: 1,
            }[v4597[0]];
            const v4599 = stdlib.eq(
              v4598,
              stdlib.checkedBigNumberify(
                "reach standard library:38:41:application",
                stdlib.UInt_max,
                "1"
              )
            );
            if (v4599) {
              const v4627 = true;
              const v4628 = await txn1.getOutput(
                "User_claim",
                "v4627",
                ctc6,
                v4627
              );

              const v4637 = stdlib.sub(v1533, v4577);
              sim_r.txns.push({
                kind: "from",
                to: v1746,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(
                sim_r,
                0,
                ctc4,
                v1746,
                ctc1,
                undefined /* Nothing */
              );
              const v4645 = stdlib.safeSub(v1554, v4577);
              const v4646 = stdlib.safeAdd(
                v1559,
                stdlib.checkedBigNumberify(
                  "./index.rsh:265:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4647 = stdlib.safeAdd(v1557, v4577);
              const v4648 = {
                bal: v4645,
                keepGoing: v1555,
                percent: v1556,
                total_amount_claimed: v4647,
                total_rewards_allcoated: v1558,
                total_users_claim: v4646,
                usersNo: v1560,
              };
              const v9957 = v4637;
              const v9958 = v4648.keepGoing;
              if (v9958) {
                const v9959 = v4648.bal;
                const v9961 = v4648.percent;
                const v9962 = v4648.total_amount_claimed;
                const v9963 = v4648.total_rewards_allcoated;
                const v9964 = v4648.total_users_claim;
                const v9965 = v4648.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9970 = stdlib.sub(v4637, v4637);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v9971 = stdlib.le(await ctc.getBalance(), v9970)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9970);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            } else {
              const v4601 = true;
              const v4602 = await txn1.getOutput(
                "User_claim",
                "v4601",
                ctc6,
                v4601
              );

              const v4608 = {
                addr: v1746,
                amount: v4577,
                projectName: v1510,
              };
              null;
              await stdlib.simMapSet(sim_r, 2, ctc4, v1746, ctc0, null);
              const v4613 = stdlib.sub(v1533, v4577);
              sim_r.txns.push({
                kind: "from",
                to: v1746,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(
                sim_r,
                0,
                ctc4,
                v1746,
                ctc1,
                undefined /* Nothing */
              );
              const v4621 = stdlib.safeAdd(
                v1560,
                stdlib.checkedBigNumberify(
                  "./index.rsh:253:34:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4622 = stdlib.safeSub(v1554, v4577);
              const v4623 = stdlib.safeAdd(
                v1559,
                stdlib.checkedBigNumberify(
                  "./index.rsh:255:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v4624 = stdlib.safeAdd(v1557, v4577);
              const v4625 = {
                bal: v4622,
                keepGoing: v1555,
                percent: v1556,
                total_amount_claimed: v4624,
                total_rewards_allcoated: v1558,
                total_users_claim: v4623,
                usersNo: v4621,
              };
              const v9974 = v4613;
              const v9975 = v4625.keepGoing;
              if (v9975) {
                const v9976 = v4625.bal;
                const v9978 = v4625.percent;
                const v9979 = v4625.total_amount_claimed;
                const v9980 = v4625.total_rewards_allcoated;
                const v9981 = v4625.total_users_claim;
                const v9982 = v4625.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9987 = stdlib.sub(v4613, v4613);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v9988 = stdlib.le(await ctc.getBalance(), v9987)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9987);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
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
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      undefined /* setApiDetails */;
      const v4361 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc4, v1746, ctc1),
        null
      );
      const v4362 = {
        None: 0,
        Some: 1,
      }[v4361[0]];
      const v4363 = stdlib.eq(
        v4362,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v4363, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:228:29:application call to [unknown function] (defined at: ./index.rsh:228:29:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:228:29:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
        ],
        msg: "Cannot claim because you have not earned reward",
        who: "User_claim",
      });
      const v4565 =
        v4318[
          stdlib.checkedBigNumberify(
            "./index.rsh:228:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v4572 = stdlib.fromSome(
        v4361,
        stdlib.checkedBigNumberify(
          "./index.rsh:236:60:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      const v4573 = stdlib.gt(v4565, v4572);
      const v4574 = v4573 ? v4572 : v4565;
      const v4576 = stdlib.gt(v1533, v4574);
      const v4577 = v4576 ? v4574 : v1533;
      const v4579 = stdlib.ge(v4572, v1533);
      if (v4579) {
        null;
        const v4580 = false;
        const v4581 = await txn1.getOutput("User_claim", "v4580", ctc6, v4580);
        if (v965) {
          stdlib.protect(ctc0, await interact.out(v4318, v4581), {
            at: "./index.rsh:228:11:application",
            fs: [
              "at ./index.rsh:228:11:application call to [unknown function] (defined at: ./index.rsh:228:11:function exp)",
              'at ./index.rsh:241:16:application call to "ret" (defined at: ./index.rsh:235:15:function exp)',
              "at ./index.rsh:235:15:application call to [unknown function] (defined at: ./index.rsh:235:15:function exp)",
            ],
            msg: "out",
            who: "User_claim",
          });
        } else {
        }

        const v4594 = stdlib.safeAdd(
          v1560,
          stdlib.checkedBigNumberify(
            "./index.rsh:242:57:decimal",
            stdlib.UInt_max,
            "1"
          )
        );
        const v4595 = {
          bal: v1554,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v4594,
        };
        const v9940 = v1533;
        const v9941 = v4595.keepGoing;
        if (v9941) {
          const v9942 = v4595.bal;
          const v9944 = v4595.percent;
          const v9945 = v4595.total_amount_claimed;
          const v9946 = v4595.total_rewards_allcoated;
          const v9947 = v4595.total_users_claim;
          const v9948 = v4595.usersNo;
          return;
        } else {
          const v9953 = stdlib.sub(v1533, v1533);
          const v9954 = stdlib.le(await ctc.getBalance(), v9953)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:298:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v9953);
          return;
        }
      } else {
        const v4597 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, ctc4, v1746, ctc0),
          null
        );
        const v4598 = {
          None: 0,
          Some: 1,
        }[v4597[0]];
        const v4599 = stdlib.eq(
          v4598,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        if (v4599) {
          const v4627 = true;
          const v4628 = await txn1.getOutput(
            "User_claim",
            "v4627",
            ctc6,
            v4627
          );
          if (v965) {
            stdlib.protect(ctc0, await interact.out(v4318, v4628), {
              at: "./index.rsh:228:11:application",
              fs: [
                "at ./index.rsh:228:11:application call to [unknown function] (defined at: ./index.rsh:228:11:function exp)",
                'at ./index.rsh:259:16:application call to "ret" (defined at: ./index.rsh:235:15:function exp)',
                "at ./index.rsh:235:15:application call to [unknown function] (defined at: ./index.rsh:235:15:function exp)",
              ],
              msg: "out",
              who: "User_claim",
            });
          } else {
          }

          const v4637 = stdlib.sub(v1533, v4577);
          await stdlib.mapSet(map0, ctc4, v1746, ctc1, undefined /* Nothing */);
          const v4645 = stdlib.safeSub(v1554, v4577);
          const v4646 = stdlib.safeAdd(
            v1559,
            stdlib.checkedBigNumberify(
              "./index.rsh:265:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4647 = stdlib.safeAdd(v1557, v4577);
          const v4648 = {
            bal: v4645,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v4647,
            total_rewards_allcoated: v1558,
            total_users_claim: v4646,
            usersNo: v1560,
          };
          const v9957 = v4637;
          const v9958 = v4648.keepGoing;
          if (v9958) {
            const v9959 = v4648.bal;
            const v9961 = v4648.percent;
            const v9962 = v4648.total_amount_claimed;
            const v9963 = v4648.total_rewards_allcoated;
            const v9964 = v4648.total_users_claim;
            const v9965 = v4648.usersNo;
            return;
          } else {
            const v9970 = stdlib.sub(v4637, v4637);
            const v9971 = stdlib.le(await ctc.getBalance(), v9970)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9970);
            return;
          }
        } else {
          const v4601 = true;
          const v4602 = await txn1.getOutput(
            "User_claim",
            "v4601",
            ctc6,
            v4601
          );
          if (v965) {
            stdlib.protect(ctc0, await interact.out(v4318, v4602), {
              at: "./index.rsh:228:11:application",
              fs: [
                "at ./index.rsh:228:11:application call to [unknown function] (defined at: ./index.rsh:228:11:function exp)",
                'at ./index.rsh:244:16:application call to "ret" (defined at: ./index.rsh:235:15:function exp)',
                "at ./index.rsh:235:15:application call to [unknown function] (defined at: ./index.rsh:235:15:function exp)",
              ],
              msg: "out",
              who: "User_claim",
            });
          } else {
          }

          const v4608 = {
            addr: v1746,
            amount: v4577,
            projectName: v1510,
          };
          null;
          await stdlib.mapSet(map2, ctc4, v1746, ctc0, null);
          const v4613 = stdlib.sub(v1533, v4577);
          await stdlib.mapSet(map0, ctc4, v1746, ctc1, undefined /* Nothing */);
          const v4621 = stdlib.safeAdd(
            v1560,
            stdlib.checkedBigNumberify(
              "./index.rsh:253:34:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4622 = stdlib.safeSub(v1554, v4577);
          const v4623 = stdlib.safeAdd(
            v1559,
            stdlib.checkedBigNumberify(
              "./index.rsh:255:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v4624 = stdlib.safeAdd(v1557, v4577);
          const v4625 = {
            bal: v4622,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v4624,
            total_rewards_allcoated: v1558,
            total_users_claim: v4623,
            usersNo: v4621,
          };
          const v9974 = v4613;
          const v9975 = v4625.keepGoing;
          if (v9975) {
            const v9976 = v4625.bal;
            const v9978 = v4625.percent;
            const v9979 = v4625.total_amount_claimed;
            const v9980 = v4625.total_rewards_allcoated;
            const v9981 = v4625.total_users_claim;
            const v9982 = v4625.usersNo;
            return;
          } else {
            const v9987 = stdlib.sub(v4613, v4613);
            const v9988 = stdlib.le(await ctc.getBalance(), v9987)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9987);
            return;
          }
        }
      }
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc12,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc12,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1651 = ctc.selfAddress();
  const v1653 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:185:29:application call to [unknown function] (defined at: ./index.rsh:185:29:function exp)",
      'at ./index.rsh:72:37:application call to "runUser_claimAll0_98" (defined at: ./index.rsh:185:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "User_claimAll",
  });
  const v1654 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc4, v1651, ctc1),
    null
  );
  const v1655 = {
    None: 0,
    Some: 1,
  }[v1654[0]];
  const v1656 = stdlib.eq(
    v1655,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v1656, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:185:29:application call to [unknown function] (defined at: ./index.rsh:185:29:function exp)",
      'at ./index.rsh:72:37:application call to "runUser_claimAll0_98" (defined at: ./index.rsh:185:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "Cannot claim because you have not earned reward",
    who: "User_claimAll",
  });
  const v1661 = ["User_claimAll0_98", v1653];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1661,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:191:9:decimal",
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "User_claimAll",
          });
          const v4794 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc4, v1746, ctc1),
            null
          );
          const v5084 = stdlib.fromSome(
            v4794,
            stdlib.checkedBigNumberify(
              "./index.rsh:193:60:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v5086 = stdlib.gt(v1533, v5084);
          const v5087 = v5086 ? v5084 : v1533;
          const v5089 = stdlib.ge(v5084, v1533);
          if (v5089) {
            null;
            const v5090 = false;
            const v5091 = await txn1.getOutput(
              "User_claimAll",
              "v5090",
              ctc6,
              v5090
            );

            const v5103 = stdlib.safeAdd(
              v1560,
              stdlib.checkedBigNumberify(
                "./index.rsh:198:57:decimal",
                stdlib.UInt_max,
                "1"
              )
            );
            const v5104 = {
              bal: v1554,
              keepGoing: v1555,
              percent: v1556,
              total_amount_claimed: v1557,
              total_rewards_allcoated: v1558,
              total_users_claim: v1559,
              usersNo: v5103,
            };
            const v10246 = v1533;
            const v10247 = v5104.keepGoing;
            if (v10247) {
              const v10248 = v5104.bal;
              const v10250 = v5104.percent;
              const v10251 = v5104.total_amount_claimed;
              const v10252 = v5104.total_rewards_allcoated;
              const v10253 = v5104.total_users_claim;
              const v10254 = v5104.usersNo;
              sim_r.isHalt = false;
            } else {
              const v10259 = stdlib.sub(v1533, v1533);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              const v10260 = stdlib.le(await ctc.getBalance(), v10259)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:298:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v10259);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          } else {
            const v5106 = stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, ctc4, v1746, ctc0),
              null
            );
            const v5107 = {
              None: 0,
              Some: 1,
            }[v5106[0]];
            const v5108 = stdlib.eq(
              v5107,
              stdlib.checkedBigNumberify(
                "reach standard library:38:41:application",
                stdlib.UInt_max,
                "1"
              )
            );
            if (v5108) {
              const v5135 = true;
              const v5136 = await txn1.getOutput(
                "User_claimAll",
                "v5135",
                ctc6,
                v5135
              );

              const v5144 = stdlib.sub(v1533, v5087);
              sim_r.txns.push({
                kind: "from",
                to: v1746,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(
                sim_r,
                0,
                ctc4,
                v1746,
                ctc1,
                undefined /* Nothing */
              );
              const v5152 = stdlib.safeSub(v1554, v5087);
              const v5153 = stdlib.safeAdd(
                v1559,
                stdlib.checkedBigNumberify(
                  "./index.rsh:221:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v5154 = stdlib.safeAdd(v1557, v5087);
              const v5155 = {
                bal: v5152,
                keepGoing: v1555,
                percent: v1556,
                total_amount_claimed: v5154,
                total_rewards_allcoated: v1558,
                total_users_claim: v5153,
                usersNo: v1560,
              };
              const v10263 = v5144;
              const v10264 = v5155.keepGoing;
              if (v10264) {
                const v10265 = v5155.bal;
                const v10267 = v5155.percent;
                const v10268 = v5155.total_amount_claimed;
                const v10269 = v5155.total_rewards_allcoated;
                const v10270 = v5155.total_users_claim;
                const v10271 = v5155.usersNo;
                sim_r.isHalt = false;
              } else {
                const v10276 = stdlib.sub(v5144, v5144);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v10277 = stdlib.le(await ctc.getBalance(), v10276)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v10276);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            } else {
              const v5110 = true;
              const v5111 = await txn1.getOutput(
                "User_claimAll",
                "v5110",
                ctc6,
                v5110
              );

              const v5116 = {
                addr: v1746,
                amount: v5087,
                projectName: v1510,
              };
              null;
              await stdlib.simMapSet(sim_r, 2, ctc4, v1746, ctc0, null);
              const v5121 = stdlib.sub(v1533, v5087);
              sim_r.txns.push({
                kind: "from",
                to: v1746,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(
                sim_r,
                0,
                ctc4,
                v1746,
                ctc1,
                undefined /* Nothing */
              );
              const v5129 = stdlib.safeAdd(
                v1560,
                stdlib.checkedBigNumberify(
                  "./index.rsh:209:34:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v5130 = stdlib.safeSub(v1554, v5087);
              const v5131 = stdlib.safeAdd(
                v1559,
                stdlib.checkedBigNumberify(
                  "./index.rsh:211:54:decimal",
                  stdlib.UInt_max,
                  "1"
                )
              );
              const v5132 = stdlib.safeAdd(v1557, v5087);
              const v5133 = {
                bal: v5130,
                keepGoing: v1555,
                percent: v1556,
                total_amount_claimed: v5132,
                total_rewards_allcoated: v1558,
                total_users_claim: v5131,
                usersNo: v5129,
              };
              const v10280 = v5121;
              const v10281 = v5133.keepGoing;
              if (v10281) {
                const v10282 = v5133.bal;
                const v10284 = v5133.percent;
                const v10285 = v5133.total_amount_claimed;
                const v10286 = v5133.total_rewards_allcoated;
                const v10287 = v5133.total_users_claim;
                const v10288 = v5133.usersNo;
                sim_r.isHalt = false;
              } else {
                const v10293 = stdlib.sub(v5121, v5121);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v10294 = stdlib.le(await ctc.getBalance(), v10293)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v10293);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
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
        case "User_optin0_98": {
          const v5174 = v1747[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      undefined /* setApiDetails */;
      const v4794 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc4, v1746, ctc1),
        null
      );
      const v4795 = {
        None: 0,
        Some: 1,
      }[v4794[0]];
      const v4796 = stdlib.eq(
        v4795,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v4796, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:185:29:application call to [unknown function] (defined at: ./index.rsh:185:29:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:185:29:function exp)",
          "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
        ],
        msg: "Cannot claim because you have not earned reward",
        who: "User_claimAll",
      });
      const v5084 = stdlib.fromSome(
        v4794,
        stdlib.checkedBigNumberify(
          "./index.rsh:193:60:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      const v5086 = stdlib.gt(v1533, v5084);
      const v5087 = v5086 ? v5084 : v1533;
      const v5089 = stdlib.ge(v5084, v1533);
      if (v5089) {
        null;
        const v5090 = false;
        const v5091 = await txn1.getOutput(
          "User_claimAll",
          "v5090",
          ctc6,
          v5090
        );
        if (v965) {
          stdlib.protect(ctc0, await interact.out(v4746, v5091), {
            at: "./index.rsh:185:11:application",
            fs: [
              "at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:11:function exp)",
              'at ./index.rsh:197:16:application call to "ret" (defined at: ./index.rsh:192:15:function exp)',
              "at ./index.rsh:192:15:application call to [unknown function] (defined at: ./index.rsh:192:15:function exp)",
            ],
            msg: "out",
            who: "User_claimAll",
          });
        } else {
        }

        const v5103 = stdlib.safeAdd(
          v1560,
          stdlib.checkedBigNumberify(
            "./index.rsh:198:57:decimal",
            stdlib.UInt_max,
            "1"
          )
        );
        const v5104 = {
          bal: v1554,
          keepGoing: v1555,
          percent: v1556,
          total_amount_claimed: v1557,
          total_rewards_allcoated: v1558,
          total_users_claim: v1559,
          usersNo: v5103,
        };
        const v10246 = v1533;
        const v10247 = v5104.keepGoing;
        if (v10247) {
          const v10248 = v5104.bal;
          const v10250 = v5104.percent;
          const v10251 = v5104.total_amount_claimed;
          const v10252 = v5104.total_rewards_allcoated;
          const v10253 = v5104.total_users_claim;
          const v10254 = v5104.usersNo;
          return;
        } else {
          const v10259 = stdlib.sub(v1533, v1533);
          const v10260 = stdlib.le(await ctc.getBalance(), v10259)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:298:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v10259);
          return;
        }
      } else {
        const v5106 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, ctc4, v1746, ctc0),
          null
        );
        const v5107 = {
          None: 0,
          Some: 1,
        }[v5106[0]];
        const v5108 = stdlib.eq(
          v5107,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        if (v5108) {
          const v5135 = true;
          const v5136 = await txn1.getOutput(
            "User_claimAll",
            "v5135",
            ctc6,
            v5135
          );
          if (v965) {
            stdlib.protect(ctc0, await interact.out(v4746, v5136), {
              at: "./index.rsh:185:11:application",
              fs: [
                "at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:11:function exp)",
                'at ./index.rsh:215:16:application call to "ret" (defined at: ./index.rsh:192:15:function exp)',
                "at ./index.rsh:192:15:application call to [unknown function] (defined at: ./index.rsh:192:15:function exp)",
              ],
              msg: "out",
              who: "User_claimAll",
            });
          } else {
          }

          const v5144 = stdlib.sub(v1533, v5087);
          await stdlib.mapSet(map0, ctc4, v1746, ctc1, undefined /* Nothing */);
          const v5152 = stdlib.safeSub(v1554, v5087);
          const v5153 = stdlib.safeAdd(
            v1559,
            stdlib.checkedBigNumberify(
              "./index.rsh:221:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v5154 = stdlib.safeAdd(v1557, v5087);
          const v5155 = {
            bal: v5152,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v5154,
            total_rewards_allcoated: v1558,
            total_users_claim: v5153,
            usersNo: v1560,
          };
          const v10263 = v5144;
          const v10264 = v5155.keepGoing;
          if (v10264) {
            const v10265 = v5155.bal;
            const v10267 = v5155.percent;
            const v10268 = v5155.total_amount_claimed;
            const v10269 = v5155.total_rewards_allcoated;
            const v10270 = v5155.total_users_claim;
            const v10271 = v5155.usersNo;
            return;
          } else {
            const v10276 = stdlib.sub(v5144, v5144);
            const v10277 = stdlib.le(await ctc.getBalance(), v10276)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10276);
            return;
          }
        } else {
          const v5110 = true;
          const v5111 = await txn1.getOutput(
            "User_claimAll",
            "v5110",
            ctc6,
            v5110
          );
          if (v965) {
            stdlib.protect(ctc0, await interact.out(v4746, v5111), {
              at: "./index.rsh:185:11:application",
              fs: [
                "at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:11:function exp)",
                'at ./index.rsh:200:16:application call to "ret" (defined at: ./index.rsh:192:15:function exp)',
                "at ./index.rsh:192:15:application call to [unknown function] (defined at: ./index.rsh:192:15:function exp)",
              ],
              msg: "out",
              who: "User_claimAll",
            });
          } else {
          }

          const v5116 = {
            addr: v1746,
            amount: v5087,
            projectName: v1510,
          };
          null;
          await stdlib.mapSet(map2, ctc4, v1746, ctc0, null);
          const v5121 = stdlib.sub(v1533, v5087);
          await stdlib.mapSet(map0, ctc4, v1746, ctc1, undefined /* Nothing */);
          const v5129 = stdlib.safeAdd(
            v1560,
            stdlib.checkedBigNumberify(
              "./index.rsh:209:34:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v5130 = stdlib.safeSub(v1554, v5087);
          const v5131 = stdlib.safeAdd(
            v1559,
            stdlib.checkedBigNumberify(
              "./index.rsh:211:54:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v5132 = stdlib.safeAdd(v1557, v5087);
          const v5133 = {
            bal: v5130,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v5132,
            total_rewards_allcoated: v1558,
            total_users_claim: v5131,
            usersNo: v5129,
          };
          const v10280 = v5121;
          const v10281 = v5133.keepGoing;
          if (v10281) {
            const v10282 = v5133.bal;
            const v10284 = v5133.percent;
            const v10285 = v5133.total_amount_claimed;
            const v10286 = v5133.total_rewards_allcoated;
            const v10287 = v5133.total_users_claim;
            const v10288 = v5133.usersNo;
            return;
          } else {
            const v10293 = stdlib.sub(v5121, v5121);
            const v10294 = stdlib.le(await ctc.getBalance(), v10293)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10293);
            return;
          }
        }
      }
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
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
  const ctc7 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1,
  });
  const ctc8 = stdlib.T_Object({
    i: ctc7,
    sign: ctc6,
  });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc13 = stdlib.T_Data({
    Admin_addAdmin0_98: ctc10,
    Admin_deposit0_98: ctc11,
    Admin_editUserReward0_98: ctc12,
    Admin_endContractAndTransfer0_98: ctc9,
    Admin_revokeAdmin0_98: ctc10,
    Admin_setReward0_98: ctc12,
    User_claim0_98: ctc11,
    User_claimAll0_98: ctc9,
    User_optin0_98: ctc9,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
  });

  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
  });

  const [v1509, v1510, v1533, v1554, v1555, v1556, v1557, v1558, v1559, v1560] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1]
    );
  const v1681 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:275:26:application call to [unknown function] (defined at: ./index.rsh:275:26:function exp)",
      'at ./index.rsh:72:37:application call to "runUser_optin0_98" (defined at: ./index.rsh:275:10:function exp)',
      "at ./index.rsh:72:37:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)",
    ],
    msg: "in",
    who: "User_optin",
  });
  const v1685 = ["User_optin0_98", v1681];

  const txn1 = await ctc.sendrecv({
    args: [
      v1509,
      v1510,
      v1533,
      v1554,
      v1555,
      v1556,
      v1557,
      v1558,
      v1559,
      v1560,
      v1685,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:277:9:decimal",
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
        data: [v1747],
        secs: v1749,
        time: v1748,
        didSend: v965,
        from: v1746,
      } = txn1;

      switch (v1747[0]) {
        case "Admin_addAdmin0_98": {
          const v1750 = v1747[1];

          break;
        }
        case "Admin_deposit0_98": {
          const v2178 = v1747[1];

          break;
        }
        case "Admin_editUserReward0_98": {
          const v2606 = v1747[1];

          break;
        }
        case "Admin_endContractAndTransfer0_98": {
          const v3034 = v1747[1];

          break;
        }
        case "Admin_revokeAdmin0_98": {
          const v3462 = v1747[1];

          break;
        }
        case "Admin_setReward0_98": {
          const v3890 = v1747[1];

          break;
        }
        case "User_claim0_98": {
          const v4318 = v1747[1];

          break;
        }
        case "User_claimAll0_98": {
          const v4746 = v1747[1];

          break;
        }
        case "User_optin0_98": {
          const v5174 = v1747[1];
          sim_r.txns.push({
            kind: "api",
            who: "User_optin",
          });
          await stdlib.simMapSet(sim_r, 3, ctc4, v1746, ctc0, null);
          const v5587 = null;
          const v5588 = await txn1.getOutput(
            "User_optin",
            "v5587",
            ctc0,
            v5587
          );

          const v5600 = {
            bal: v1554,
            keepGoing: v1555,
            percent: v1556,
            total_amount_claimed: v1557,
            total_rewards_allcoated: v1558,
            total_users_claim: v1559,
            usersNo: v1560,
          };
          const v10552 = v1533;
          const v10553 = v5600.keepGoing;
          if (v10553) {
            const v10554 = v5600.bal;
            const v10556 = v5600.percent;
            const v10557 = v5600.total_amount_claimed;
            const v10558 = v5600.total_rewards_allcoated;
            const v10559 = v5600.total_users_claim;
            const v10560 = v5600.usersNo;
            sim_r.isHalt = false;
          } else {
            const v10565 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v10566 = stdlib.le(await ctc.getBalance(), v10565)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10565);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
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
    tys: [ctc4, ctc5, ctc1, ctc1, ctc6, ctc8, ctc1, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false,
  });
  const {
    data: [v1747],
    secs: v1749,
    time: v1748,
    didSend: v965,
    from: v1746,
  } = txn1;
  switch (v1747[0]) {
    case "Admin_addAdmin0_98": {
      const v1750 = v1747[1];
      return;
      break;
    }
    case "Admin_deposit0_98": {
      const v2178 = v1747[1];
      return;
      break;
    }
    case "Admin_editUserReward0_98": {
      const v2606 = v1747[1];
      return;
      break;
    }
    case "Admin_endContractAndTransfer0_98": {
      const v3034 = v1747[1];
      return;
      break;
    }
    case "Admin_revokeAdmin0_98": {
      const v3462 = v1747[1];
      return;
      break;
    }
    case "Admin_setReward0_98": {
      const v3890 = v1747[1];
      return;
      break;
    }
    case "User_claim0_98": {
      const v4318 = v1747[1];
      return;
      break;
    }
    case "User_claimAll0_98": {
      const v4746 = v1747[1];
      return;
      break;
    }
    case "User_optin0_98": {
      const v5174 = v1747[1];
      undefined /* setApiDetails */;
      await stdlib.mapSet(map3, ctc4, v1746, ctc0, null);
      const v5587 = null;
      const v5588 = await txn1.getOutput("User_optin", "v5587", ctc0, v5587);
      if (v965) {
        stdlib.protect(ctc0, await interact.out(v5174, v5588), {
          at: "./index.rsh:275:11:application",
          fs: [
            "at ./index.rsh:275:11:application call to [unknown function] (defined at: ./index.rsh:275:11:function exp)",
            'at ./index.rsh:280:14:application call to "ret" (defined at: ./index.rsh:278:15:function exp)',
            "at ./index.rsh:278:15:application call to [unknown function] (defined at: ./index.rsh:278:15:function exp)",
          ],
          msg: "out",
          who: "User_optin",
        });
      } else {
      }

      const v5600 = {
        bal: v1554,
        keepGoing: v1555,
        percent: v1556,
        total_amount_claimed: v1557,
        total_rewards_allcoated: v1558,
        total_users_claim: v1559,
        usersNo: v1560,
      };
      const v10552 = v1533;
      const v10553 = v5600.keepGoing;
      if (v10553) {
        const v10554 = v5600.bal;
        const v10556 = v5600.percent;
        const v10557 = v5600.total_amount_claimed;
        const v10558 = v5600.total_rewards_allcoated;
        const v10559 = v5600.total_users_claim;
        const v10560 = v5600.usersNo;
        return;
      } else {
        const v10565 = stdlib.sub(v1533, v1533);
        const v10566 = stdlib.le(await ctc.getBalance(), v10565)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v10565);
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
      `Admin_addAdmin(address)void`,
      `Admin_deposit(uint64)void`,
      `Admin_editUserReward(address,uint64)void`,
      `Admin_endContractAndTransfer()void`,
      `Admin_revokeAdmin(address)void`,
      `Admin_setReward(address,uint64)byte`,
      `User_claim(uint64)byte`,
      `User_claimAll()byte`,
      `User_optin()void`,
      `_reachp_0((uint64,byte[30]))void`,
      `_reachp_2((uint64,(byte,byte[40])))void`,
    ],
    pure: [
      `Info_Admins(address)byte`,
      `Info_balance()uint64`,
      `Info_opted(address)byte`,
      `Info_rewards(address)uint64`,
      `Info_totalAllocatedFunds()uint64`,
      `Info_totalAmountClaimed()uint64`,
      `Info_totalClaimed()uint64`,
      `Info_totalOptedIn()uint64`,
    ],
    sigs: [
      `Admin_addAdmin(address)void`,
      `Admin_deposit(uint64)void`,
      `Admin_editUserReward(address,uint64)void`,
      `Admin_endContractAndTransfer()void`,
      `Admin_revokeAdmin(address)void`,
      `Admin_setReward(address,uint64)byte`,
      `Info_Admins(address)byte`,
      `Info_balance()uint64`,
      `Info_opted(address)byte`,
      `Info_rewards(address)uint64`,
      `Info_totalAllocatedFunds()uint64`,
      `Info_totalAmountClaimed()uint64`,
      `Info_totalClaimed()uint64`,
      `Info_totalOptedIn()uint64`,
      `User_claim(uint64)byte`,
      `User_claimAll()byte`,
      `User_optin()void`,
      `_reachp_0((uint64,byte[30]))void`,
      `_reachp_2((uint64,(byte,byte[40])))void`,
    ],
  },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAEIA9STAdR6JggAAQABAQECAQME/955KAQQAZ3kBJvIVFAxGEEHlihkSSJbNQEkWzUCKWQqZFCCEwQCX3THBBNuVzsEGoMdBQQihEwmBCgTBPIEKTen9gQpi1oQBD75YpoEQmgn1QRIJPkCBG7kdhQEeErZNwR6/shtBIbN6T8Ek8uVjQTsln4qBPMneAQE+XMOCwT6rsiwNhoAjhMAVQEyAVYA8QG3AgcBdwEiBt0BhwCGAacBlwHvANQG7wC+AGsAAQA2GgE1CySvKTQLUCSvUFA1CyU0ARJEiAu/NAsiWzUMNAtXCCk1DYAEUkFnhzQMFlA0DVCwNAyIDCI0DSJVjQkLUAtTC1YLYAbIBssG1QbYBttC/6s2GgEXNQskryo0CxZQMgNQUDULQv+nNhoBNhoCFzULNQwkrys0DDQLFlBQUDULQv+MgDEAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/1Q2GgE1CySvgAEENAtQJK9QUDULQv8+NhoBNhoCFzULNQwkr4ABBTQMNAsWUFBQNQtC/yE2GgE1CzQBJRJEiArbKCgqNAtQiArHIlUjEhZRBwg1BDEZIhJEgAQVH3x1NARQsCNDNAElEkSICq80FRY1BEL/3zYaATULNAElEkSICpooKCcENAtQiAqFIlUjEhZRBwg1BEL/uzYaATULNAElEkSICnYkrygkryk0C1CICl+ICsE1BEL/mjQBJRJEiApaNBAWNQRC/4o0ASUSRIgKSjQRFjUEQv96NAElEkSICjo0DxY1BEL/ajQBJRJEiAoqNA4WNQRC/1qAMQAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+IzYaARc1CySvgAEGNAsWUDIDUFA1C0L+C4AxAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv3TMQA0GRIoKCoxAFCICYEiVSMSEUQhBSo0DVcBIFAoiAm6KDULgAgAAAAAAAAHFzQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRc0F1cIARdBCLo0FyJbNRQ0F1cIARc1EzQXVwkRNRI0F4EaWzURNBeBIls1EDQXgSpbNQ80F4EyWzUONBk0GFA0FRZQNBQWUDQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQJTIGNQI1ASlLAVcAf2cqTFd/AWcoNAEWNAIWUGcxGSISRIgJSDQDQP39Qv3wNA0jWzUMMQA0GRIoKCoxAFCICJQiVSMSEUQ0DIgI9yg1C4AIAAAAAAAACNw0C1CwNAs1BDQUNAwIFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY0FTQMCDUVNRY1F0L/DjEANBkSKCgqMQBQiAg2IlUjEhFEIQQpNAtXACBQNAtXIAiICGsoNQuACAAAAAAAAAqkNAtQsDQLNQQ0FBY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNRY1F0L+rjQZMQASRCg1C4AIAAAAAAAADGQ0C1CwNAs1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQv5tMQA0GRJEIQUqNA1XASBQiAfrKDULgAgAAAAAAAAOJTQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/iA0C4EgW0k1GzQUDTUaIjQbNBpNNQw0FTQMCDUNNAyIB6M0C1cAIDUMKCgnBDQMUIgHJCJVIxJBAn8hBCk0DFAkrygkryk0DFCIBwuIB20XNBsIFogHTCM1C4AIAAAAAAAAD+00CxZRBwhQsDQLFlEHCDUENBpBA2U0FDQbCDULNAsWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjQNNRU1FjUXQv13KCSvKTEAUIgGo0k1CyJVIxJENA0jWzUMJK80C4gG8xc1DTQMNA00DDQNDU01CzQVNAs0FTQLDU01DDQNNBUPQQQWJwU0DRZQsCI1C4AIAAAAAAAAEeQ0CxZRBwhQsDQLFlEHCDUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOIwgWUDIGNRY1F0L86SgkrykxAFCIBhVJNQwiVSMSRCSvNAyIBmsXNQs0FTQLNBU0Cw1NNQw0CzQVD0EEiycFNAsWULAiNQuACAAAAAAAABPiNAsWUQcIULA0CxZRBwg1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DiMIFlAyBjUWNRdC/G0hBScEMQBQKIgF5Cg1C4AIAAAAAAAAFdM0C1CwNAs1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQvwnMQA1GTQLIls1DDQLVwgeNRiABNEqBo00DBZQNBhQsDQMiAXHgDoAAAAAAAAAAAEAAAAAAAAABQAAAAAAAABkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgYiNRU1FjUXQvu7iAV4gaCNBogFizYaATULQv+CiAVmNhoBNQtC+RgiMTQSRCUxNRJEIjE2EkQiMTcSRIgFR4GAAa8iIkL74kL9DjQNVwEoNQtC/VFC/fdC/oJC/vs0GkEBJ4DIAVlvdXIgdXNlciBoYXNuJ3Qgb3B0ZWQgaW4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQsnBjQLUDQMULAiNQuACAAAAAAAABABNAsWUQcIULA0CxZRBwg1BDQUNBsIFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY0DTUVNRY1F0L6QzQUNQtC/JuAyAFUaGUgYmFsYW5jZSB5b3UgYXJlIHRyeWluZyB0byBzZXQgZm9yIHRoZSB1c2VyIGlzIGludmFsaWQgYW5kIHRoZXkgaGF2ZW4ndCBvcHRlZCBpbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULJwY0C1A0DFCwIjULgAgAAAAAAAAQFTQLFlEHCFCwNAsWUQcINQQ0FBY0ExZRBwhQNBJQNBEWUDQQFlA0DxZQNA4WUDIGNA01FTUWNRdC+R8oKCsxAFCIAkwiVSMSQQBiIzULgAgAAAAAAAASEzQLFlEHCFCwNAsWUQcINQQ0DDEAiAJpIQQpMQBQiAJyNBQ0DAkWNBMWUQcIUDQSUDQRNAwIFlA0EBZQNA8jCBZQNA4WUDIGNBU0DAk1FTUWNRdC+K0jNQuACAAAAAAAABH5NAsWUQcIULA0CxZRBwg1BDEANAwWUDQYUDULJwc0C1CwIQUrMQBQKIgB9zQMMQCIAewhBCkxAFCIAfU0FDQMCRY0ExZRBwhQNBJQNBE0DAgWUDQQFlA0DyMIFlA0DiMIFlAyBjQVNAwJNRU1FjUXQvguKCgrMQBQiAFbIlUjEkEAYiM1C4AIAAAAAAAAFA80CxZRBwhQsDQLFlEHCDUENAwxAIgBeCEEKTEAUIgBgTQUNAwJFjQTFlEHCFA0ElA0ETQMCBZQNBAWUDQPIwgWUDQOFlAyBjQVNAwJNRU1FjUXQve8IzULgAgAAAAAAAAT9jQLFlEHCFCwNAsWUQcINQQxADQMFlA0GFA1CycHNAtQsCEFKzEAUCiIAQY0DDEAiAD7IQQpMQBQiAEENBQ0DAkWNBMWUQcIUDQSUDQRNAwIFlA0EBZQNA8jCBZQNA4jCBZQMgY0FTQMCTUVNRY1F0L3PTQVNBmIALQyCmAyCngJNBVJCQlJNQs0GYgAoDEZgQUSRIgA5zIKYDIKeAlJNQYyCogAiEL3jUhMv0iJIrIBI7IQsgeyCLOJQvaaQvd+NA1XASg1C0L32EL4NUiJTAlJNQYyCYgAVYkJSUH/7kk1BogAb4m+SRZRBwhFBE1QiUlXACA1GUlXIB41GEmBPls1FUmBRls1FElXTgEXNRNJV08RNRJJgWBbNRFJgWhbNRBJgXBbNQ+BeFs1DomxQv98TEm9QP9xSwOIAE1C/2m8Ik4CTTQHCDUHiUlXAQBMIlVNiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIkjNQOJSSISTDQCEhFEiTQGNAdKD0H/SEL/UDQGCDUGiQ==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `470`,
    1001: `470`,
    1002: `471`,
    1003: `471`,
    1004: `471`,
    1005: `473`,
    1006: `473`,
    1007: `474`,
    1008: `475`,
    1009: `476`,
    101: `21`,
    1010: `476`,
    1011: `477`,
    1012: `477`,
    1013: `478`,
    1014: `478`,
    1015: `479`,
    1016: `481`,
    1017: `482`,
    1018: `483`,
    1019: `484`,
    102: `21`,
    1020: `484`,
    1021: `485`,
    1022: `486`,
    1023: `486`,
    1024: `486`,
    1025: `487`,
    1026: `488`,
    1027: `489`,
    1028: `490`,
    1029: `491`,
    103: `21`,
    1030: `492`,
    1031: `499`,
    1032: `499`,
    1033: `500`,
    1034: `500`,
    1035: `500`,
    1036: `503`,
    1037: `504`,
    1038: `504`,
    1039: `505`,
    104: `21`,
    1040: `505`,
    1041: `505`,
    1042: `505`,
    1043: `505`,
    1044: `505`,
    1045: `505`,
    1046: `505`,
    1047: `505`,
    1048: `505`,
    1049: `506`,
    105: `21`,
    1050: `506`,
    1051: `507`,
    1052: `508`,
    1053: `509`,
    1054: `509`,
    1055: `510`,
    1056: `510`,
    1057: `511`,
    1058: `511`,
    1059: `512`,
    106: `21`,
    1060: `512`,
    1061: `513`,
    1062: `514`,
    1063: `515`,
    1064: `515`,
    1065: `516`,
    1066: `517`,
    1067: `517`,
    1068: `517`,
    1069: `518`,
    107: `21`,
    1070: `519`,
    1071: `519`,
    1072: `520`,
    1073: `521`,
    1074: `521`,
    1075: `522`,
    1076: `523`,
    1077: `524`,
    1078: `524`,
    1079: `525`,
    108: `21`,
    1080: `526`,
    1081: `527`,
    1082: `527`,
    1083: `528`,
    1084: `529`,
    1085: `530`,
    1086: `530`,
    1087: `531`,
    1088: `532`,
    1089: `533`,
    109: `21`,
    1090: `533`,
    1091: `534`,
    1092: `534`,
    1093: `535`,
    1094: `535`,
    1095: `536`,
    1096: `537`,
    1097: `537`,
    1098: `538`,
    1099: `538`,
    11: `2`,
    110: `21`,
    1100: `539`,
    1101: `539`,
    1102: `540`,
    1103: `540`,
    1104: `540`,
    1105: `542`,
    1106: `542`,
    1107: `543`,
    1108: `543`,
    1109: `544`,
    111: `21`,
    1110: `546`,
    1111: `547`,
    1112: `548`,
    1113: `549`,
    1114: `549`,
    1115: `550`,
    1116: `551`,
    1117: `551`,
    1118: `551`,
    1119: `552`,
    112: `21`,
    1120: `553`,
    1121: `554`,
    1122: `555`,
    1123: `556`,
    1124: `557`,
    1125: `565`,
    1126: `565`,
    1127: `566`,
    1128: `567`,
    1129: `567`,
    113: `21`,
    1130: `568`,
    1131: `568`,
    1132: `568`,
    1133: `569`,
    1134: `570`,
    1135: `570`,
    1136: `571`,
    1137: `571`,
    1138: `571`,
    1139: `572`,
    114: `21`,
    1140: `572`,
    1141: `572`,
    1142: `573`,
    1143: `574`,
    1144: `574`,
    1145: `575`,
    1146: `575`,
    1147: `575`,
    1148: `575`,
    1149: `575`,
    115: `21`,
    1150: `575`,
    1151: `575`,
    1152: `575`,
    1153: `575`,
    1154: `575`,
    1155: `576`,
    1156: `576`,
    1157: `577`,
    1158: `578`,
    1159: `579`,
    116: `21`,
    1160: `579`,
    1161: `580`,
    1162: `580`,
    1163: `581`,
    1164: `581`,
    1165: `582`,
    1166: `583`,
    1167: `583`,
    1168: `584`,
    1169: `585`,
    117: `21`,
    1170: `585`,
    1171: `585`,
    1172: `586`,
    1173: `587`,
    1174: `587`,
    1175: `588`,
    1176: `589`,
    1177: `589`,
    1178: `590`,
    1179: `591`,
    118: `21`,
    1180: `592`,
    1181: `592`,
    1182: `593`,
    1183: `594`,
    1184: `595`,
    1185: `595`,
    1186: `596`,
    1187: `597`,
    1188: `598`,
    1189: `598`,
    119: `21`,
    1190: `599`,
    1191: `600`,
    1192: `601`,
    1193: `601`,
    1194: `602`,
    1195: `602`,
    1196: `603`,
    1197: `603`,
    1198: `604`,
    1199: `604`,
    12: `2`,
    120: `21`,
    1200: `604`,
    1201: `606`,
    1202: `606`,
    1203: `607`,
    1204: `607`,
    1205: `608`,
    1206: `609`,
    1207: `616`,
    1208: `617`,
    1209: `617`,
    121: `21`,
    1210: `618`,
    1211: `618`,
    1212: `618`,
    1213: `618`,
    1214: `618`,
    1215: `618`,
    1216: `618`,
    1217: `618`,
    1218: `618`,
    1219: `618`,
    122: `21`,
    1220: `619`,
    1221: `619`,
    1222: `620`,
    1223: `621`,
    1224: `622`,
    1225: `622`,
    1226: `623`,
    1227: `623`,
    1228: `624`,
    1229: `624`,
    123: `21`,
    1230: `625`,
    1231: `626`,
    1232: `626`,
    1233: `627`,
    1234: `628`,
    1235: `628`,
    1236: `628`,
    1237: `629`,
    1238: `630`,
    1239: `630`,
    124: `21`,
    1240: `631`,
    1241: `632`,
    1242: `632`,
    1243: `633`,
    1244: `634`,
    1245: `635`,
    1246: `635`,
    1247: `636`,
    1248: `637`,
    1249: `638`,
    125: `21`,
    1250: `638`,
    1251: `639`,
    1252: `640`,
    1253: `641`,
    1254: `641`,
    1255: `642`,
    1256: `643`,
    1257: `644`,
    1258: `644`,
    1259: `645`,
    126: `21`,
    1260: `645`,
    1261: `646`,
    1262: `646`,
    1263: `647`,
    1264: `647`,
    1265: `647`,
    1266: `649`,
    1267: `649`,
    1268: `650`,
    1269: `650`,
    127: `21`,
    1270: `651`,
    1271: `652`,
    1272: `660`,
    1273: `660`,
    1274: `661`,
    1275: `662`,
    1276: `662`,
    1277: `663`,
    1278: `663`,
    1279: `663`,
    128: `21`,
    1280: `664`,
    1281: `665`,
    1282: `665`,
    1283: `665`,
    1284: `666`,
    1285: `667`,
    1286: `667`,
    1287: `668`,
    1288: `668`,
    1289: `668`,
    129: `21`,
    1290: `668`,
    1291: `668`,
    1292: `668`,
    1293: `668`,
    1294: `668`,
    1295: `668`,
    1296: `668`,
    1297: `669`,
    1298: `669`,
    1299: `670`,
    13: `2`,
    130: `21`,
    1300: `671`,
    1301: `672`,
    1302: `672`,
    1303: `673`,
    1304: `673`,
    1305: `674`,
    1306: `674`,
    1307: `675`,
    1308: `676`,
    1309: `676`,
    131: `21`,
    1310: `677`,
    1311: `678`,
    1312: `678`,
    1313: `678`,
    1314: `679`,
    1315: `680`,
    1316: `680`,
    1317: `681`,
    1318: `682`,
    1319: `682`,
    132: `21`,
    1320: `683`,
    1321: `684`,
    1322: `685`,
    1323: `685`,
    1324: `686`,
    1325: `687`,
    1326: `688`,
    1327: `688`,
    1328: `689`,
    1329: `690`,
    133: `21`,
    1330: `691`,
    1331: `691`,
    1332: `692`,
    1333: `693`,
    1334: `694`,
    1335: `694`,
    1336: `695`,
    1337: `695`,
    1338: `696`,
    1339: `696`,
    134: `21`,
    1340: `697`,
    1341: `697`,
    1342: `697`,
    1343: `699`,
    1344: `699`,
    1345: `700`,
    1346: `700`,
    1347: `701`,
    1348: `702`,
    1349: `703`,
    135: `21`,
    1350: `703`,
    1351: `704`,
    1352: `704`,
    1353: `705`,
    1354: `706`,
    1355: `706`,
    1356: `707`,
    1357: `708`,
    1358: `708`,
    1359: `709`,
    136: `21`,
    1360: `709`,
    1361: `710`,
    1362: `711`,
    1363: `711`,
    1364: `712`,
    1365: `712`,
    1366: `713`,
    1367: `713`,
    1368: `714`,
    1369: `715`,
    137: `21`,
    1370: `715`,
    1371: `716`,
    1372: `716`,
    1373: `717`,
    1374: `717`,
    1375: `717`,
    1376: `720`,
    1377: `720`,
    1378: `721`,
    1379: `721`,
    138: `21`,
    1380: `721`,
    1381: `722`,
    1382: `722`,
    1383: `724`,
    1384: `725`,
    1385: `726`,
    1386: `726`,
    1387: `727`,
    1388: `727`,
    1389: `728`,
    139: `21`,
    1390: `729`,
    1391: `729`,
    1392: `729`,
    1393: `730`,
    1394: `731`,
    1395: `732`,
    1396: `733`,
    1397: `734`,
    1398: `734`,
    1399: `734`,
    14: `2`,
    140: `21`,
    1400: `736`,
    1401: `736`,
    1402: `737`,
    1403: `738`,
    1404: `738`,
    1405: `739`,
    1406: `740`,
    1407: `741`,
    1408: `742`,
    1409: `743`,
    141: `21`,
    1410: `744`,
    1411: `745`,
    1412: `746`,
    1413: `746`,
    1414: `747`,
    1415: `748`,
    1416: `748`,
    1417: `748`,
    1418: `749`,
    1419: `749`,
    142: `21`,
    1420: `749`,
    1421: `750`,
    1422: `751`,
    1423: `751`,
    1424: `752`,
    1425: `753`,
    1426: `754`,
    1427: `754`,
    1428: `754`,
    1429: `755`,
    143: `21`,
    1430: `756`,
    1431: `756`,
    1432: `757`,
    1433: `757`,
    1434: `757`,
    1435: `757`,
    1436: `757`,
    1437: `757`,
    1438: `757`,
    1439: `757`,
    144: `21`,
    1440: `757`,
    1441: `757`,
    1442: `758`,
    1443: `758`,
    1444: `759`,
    1445: `760`,
    1446: `760`,
    1447: `760`,
    1448: `761`,
    1449: `762`,
    145: `21`,
    1450: `763`,
    1451: `763`,
    1452: `764`,
    1453: `765`,
    1454: `765`,
    1455: `765`,
    1456: `766`,
    1457: `766`,
    1458: `767`,
    1459: `767`,
    146: `21`,
    1460: `768`,
    1461: `768`,
    1462: `768`,
    1463: `769`,
    1464: `769`,
    1465: `770`,
    1466: `770`,
    1467: `771`,
    1468: `772`,
    1469: `772`,
    147: `21`,
    1470: `774`,
    1471: `774`,
    1472: `775`,
    1473: `776`,
    1474: `776`,
    1475: `777`,
    1476: `778`,
    1477: `778`,
    1478: `778`,
    1479: `779`,
    148: `21`,
    1480: `780`,
    1481: `780`,
    1482: `781`,
    1483: `782`,
    1484: `782`,
    1485: `783`,
    1486: `784`,
    1487: `785`,
    1488: `785`,
    1489: `786`,
    149: `21`,
    1490: `787`,
    1491: `788`,
    1492: `788`,
    1493: `789`,
    1494: `790`,
    1495: `791`,
    1496: `791`,
    1497: `792`,
    1498: `793`,
    1499: `794`,
    15: `2`,
    150: `21`,
    1500: `794`,
    1501: `795`,
    1502: `795`,
    1503: `796`,
    1504: `796`,
    1505: `797`,
    1506: `797`,
    1507: `798`,
    1508: `798`,
    1509: `799`,
    151: `21`,
    1510: `799`,
    1511: `799`,
    1512: `802`,
    1513: `803`,
    1514: `804`,
    1515: `805`,
    1516: `806`,
    1517: `806`,
    1518: `807`,
    1519: `808`,
    152: `21`,
    1520: `808`,
    1521: `808`,
    1522: `809`,
    1523: `810`,
    1524: `810`,
    1525: `811`,
    1526: `812`,
    1527: `813`,
    1528: `814`,
    1529: `815`,
    153: `21`,
    1530: `822`,
    1531: `822`,
    1532: `823`,
    1533: `824`,
    1534: `825`,
    1535: `825`,
    1536: `826`,
    1537: `827`,
    1538: `828`,
    1539: `828`,
    154: `21`,
    1540: `829`,
    1541: `829`,
    1542: `829`,
    1543: `830`,
    1544: `831`,
    1545: `831`,
    1546: `832`,
    1547: `832`,
    1548: `833`,
    1549: `833`,
    155: `21`,
    1550: `834`,
    1551: `834`,
    1552: `835`,
    1553: `835`,
    1554: `836`,
    1555: `837`,
    1556: `838`,
    1557: `838`,
    1558: `839`,
    1559: `839`,
    156: `22`,
    1560: `840`,
    1561: `840`,
    1562: `841`,
    1563: `841`,
    1564: `842`,
    1565: `842`,
    1566: `843`,
    1567: `844`,
    1568: `845`,
    1569: `845`,
    157: `22`,
    1570: `846`,
    1571: `846`,
    1572: `847`,
    1573: `847`,
    1574: `848`,
    1575: `849`,
    1576: `849`,
    1577: `849`,
    1578: `850`,
    1579: `850`,
    158: `22`,
    1580: `851`,
    1581: `851`,
    1582: `852`,
    1583: `853`,
    1584: `854`,
    1585: `856`,
    1586: `857`,
    1587: `857`,
    1588: `858`,
    1589: `858`,
    159: `23`,
    1590: `858`,
    1591: `858`,
    1592: `858`,
    1593: `858`,
    1594: `858`,
    1595: `858`,
    1596: `858`,
    1597: `858`,
    1598: `859`,
    1599: `859`,
    16: `2`,
    160: `23`,
    1600: `860`,
    1601: `861`,
    1602: `861`,
    1603: `861`,
    1604: `862`,
    1605: `863`,
    1606: `864`,
    1607: `864`,
    1608: `865`,
    1609: `866`,
    161: `23`,
    1610: `866`,
    1611: `866`,
    1612: `867`,
    1613: `867`,
    1614: `868`,
    1615: `868`,
    1616: `869`,
    1617: `870`,
    1618: `870`,
    1619: `871`,
    162: `23`,
    1620: `872`,
    1621: `872`,
    1622: `872`,
    1623: `873`,
    1624: `874`,
    1625: `874`,
    1626: `875`,
    1627: `876`,
    1628: `876`,
    1629: `877`,
    163: `23`,
    1630: `878`,
    1631: `879`,
    1632: `879`,
    1633: `880`,
    1634: `881`,
    1635: `882`,
    1636: `882`,
    1637: `883`,
    1638: `884`,
    1639: `885`,
    164: `23`,
    1640: `885`,
    1641: `886`,
    1642: `887`,
    1643: `888`,
    1644: `889`,
    1645: `890`,
    1646: `890`,
    1647: `891`,
    1648: `891`,
    1649: `892`,
    165: `23`,
    1650: `892`,
    1651: `893`,
    1652: `893`,
    1653: `893`,
    1654: `896`,
    1655: `897`,
    1656: `898`,
    1657: `899`,
    1658: `900`,
    1659: `900`,
    166: `23`,
    1660: `901`,
    1661: `902`,
    1662: `902`,
    1663: `902`,
    1664: `903`,
    1665: `904`,
    1666: `904`,
    1667: `905`,
    1668: `906`,
    1669: `907`,
    167: `23`,
    1670: `908`,
    1671: `909`,
    1672: `916`,
    1673: `917`,
    1674: `918`,
    1675: `918`,
    1676: `919`,
    1677: `919`,
    1678: `919`,
    1679: `920`,
    168: `23`,
    1680: `921`,
    1681: `921`,
    1682: `922`,
    1683: `922`,
    1684: `923`,
    1685: `923`,
    1686: `924`,
    1687: `924`,
    1688: `925`,
    1689: `925`,
    169: `23`,
    1690: `926`,
    1691: `927`,
    1692: `928`,
    1693: `928`,
    1694: `929`,
    1695: `929`,
    1696: `930`,
    1697: `930`,
    1698: `931`,
    1699: `932`,
    17: `2`,
    170: `23`,
    1700: `932`,
    1701: `932`,
    1702: `933`,
    1703: `933`,
    1704: `934`,
    1705: `934`,
    1706: `935`,
    1707: `936`,
    1708: `937`,
    1709: `939`,
    171: `23`,
    1710: `940`,
    1711: `940`,
    1712: `941`,
    1713: `941`,
    1714: `941`,
    1715: `941`,
    1716: `941`,
    1717: `941`,
    1718: `941`,
    1719: `941`,
    172: `23`,
    1720: `941`,
    1721: `941`,
    1722: `942`,
    1723: `942`,
    1724: `943`,
    1725: `944`,
    1726: `944`,
    1727: `944`,
    1728: `945`,
    1729: `946`,
    173: `23`,
    1730: `947`,
    1731: `947`,
    1732: `948`,
    1733: `949`,
    1734: `949`,
    1735: `949`,
    1736: `950`,
    1737: `950`,
    1738: `951`,
    1739: `951`,
    174: `23`,
    1740: `952`,
    1741: `953`,
    1742: `953`,
    1743: `954`,
    1744: `955`,
    1745: `955`,
    1746: `955`,
    1747: `956`,
    1748: `957`,
    1749: `957`,
    175: `23`,
    1750: `958`,
    1751: `959`,
    1752: `959`,
    1753: `960`,
    1754: `961`,
    1755: `962`,
    1756: `962`,
    1757: `963`,
    1758: `964`,
    1759: `965`,
    176: `23`,
    1760: `965`,
    1761: `966`,
    1762: `967`,
    1763: `968`,
    1764: `968`,
    1765: `969`,
    1766: `970`,
    1767: `971`,
    1768: `972`,
    1769: `973`,
    177: `23`,
    1770: `973`,
    1771: `974`,
    1772: `974`,
    1773: `975`,
    1774: `975`,
    1775: `976`,
    1776: `976`,
    1777: `976`,
    1778: `979`,
    1779: `979`,
    178: `23`,
    1780: `980`,
    1781: `980`,
    1782: `981`,
    1783: `981`,
    1784: `982`,
    1785: `983`,
    1786: `984`,
    1787: `984`,
    1788: `984`,
    1789: `985`,
    179: `23`,
    1790: `986`,
    1791: `986`,
    1792: `987`,
    1793: `987`,
    1794: `987`,
    1795: `987`,
    1796: `987`,
    1797: `987`,
    1798: `987`,
    1799: `987`,
    18: `2`,
    180: `23`,
    1800: `987`,
    1801: `987`,
    1802: `988`,
    1803: `988`,
    1804: `989`,
    1805: `990`,
    1806: `991`,
    1807: `991`,
    1808: `992`,
    1809: `992`,
    181: `23`,
    1810: `993`,
    1811: `993`,
    1812: `994`,
    1813: `995`,
    1814: `995`,
    1815: `996`,
    1816: `997`,
    1817: `997`,
    1818: `997`,
    1819: `998`,
    182: `23`,
    1820: `999`,
    1821: `999`,
    1822: `1000`,
    1823: `1001`,
    1824: `1001`,
    1825: `1002`,
    1826: `1003`,
    1827: `1004`,
    1828: `1004`,
    1829: `1005`,
    183: `23`,
    1830: `1006`,
    1831: `1007`,
    1832: `1007`,
    1833: `1008`,
    1834: `1009`,
    1835: `1010`,
    1836: `1010`,
    1837: `1011`,
    1838: `1012`,
    1839: `1013`,
    184: `23`,
    1840: `1013`,
    1841: `1014`,
    1842: `1014`,
    1843: `1015`,
    1844: `1015`,
    1845: `1016`,
    1846: `1016`,
    1847: `1016`,
    1848: `1018`,
    1849: `1018`,
    185: `23`,
    1850: `1019`,
    1851: `1019`,
    1852: `1020`,
    1853: `1020`,
    1854: `1021`,
    1855: `1022`,
    1856: `1023`,
    1857: `1023`,
    1858: `1024`,
    1859: `1024`,
    186: `23`,
    1860: `1025`,
    1861: `1025`,
    1862: `1025`,
    1863: `1026`,
    1864: `1026`,
    1865: `1027`,
    1866: `1027`,
    1867: `1027`,
    1868: `1027`,
    1869: `1027`,
    187: `23`,
    1870: `1027`,
    1871: `1028`,
    1872: `1028`,
    1873: `1029`,
    1874: `1030`,
    1875: `1031`,
    1876: `1031`,
    1877: `1032`,
    1878: `1033`,
    1879: `1035`,
    188: `23`,
    1880: `1035`,
    1881: `1036`,
    1882: `1036`,
    1883: `1036`,
    1884: `1037`,
    1885: `1037`,
    1886: `1037`,
    1887: `1037`,
    1888: `1037`,
    1889: `1037`,
    189: `23`,
    1890: `1037`,
    1891: `1037`,
    1892: `1037`,
    1893: `1037`,
    1894: `1037`,
    1895: `1037`,
    1896: `1037`,
    1897: `1037`,
    1898: `1037`,
    1899: `1037`,
    19: `2`,
    190: `23`,
    1900: `1037`,
    1901: `1037`,
    1902: `1037`,
    1903: `1037`,
    1904: `1037`,
    1905: `1037`,
    1906: `1037`,
    1907: `1037`,
    1908: `1037`,
    1909: `1037`,
    191: `23`,
    1910: `1037`,
    1911: `1037`,
    1912: `1037`,
    1913: `1037`,
    1914: `1037`,
    1915: `1037`,
    1916: `1037`,
    1917: `1037`,
    1918: `1037`,
    1919: `1037`,
    192: `23`,
    1920: `1037`,
    1921: `1037`,
    1922: `1037`,
    1923: `1037`,
    1924: `1037`,
    1925: `1037`,
    1926: `1037`,
    1927: `1037`,
    1928: `1037`,
    1929: `1037`,
    193: `23`,
    1930: `1037`,
    1931: `1037`,
    1932: `1037`,
    1933: `1037`,
    1934: `1037`,
    1935: `1037`,
    1936: `1037`,
    1937: `1037`,
    1938: `1037`,
    1939: `1037`,
    194: `23`,
    1940: `1037`,
    1941: `1037`,
    1942: `1037`,
    1943: `1037`,
    1944: `1038`,
    1945: `1038`,
    1946: `1039`,
    1947: `1040`,
    1948: `1040`,
    1949: `1041`,
    195: `23`,
    1950: `1041`,
    1951: `1042`,
    1952: `1042`,
    1953: `1043`,
    1954: `1043`,
    1955: `1043`,
    1956: `1045`,
    1957: `1045`,
    1958: `1045`,
    1959: `1046`,
    196: `23`,
    1960: `1046`,
    1961: `1046`,
    1962: `1046`,
    1963: `1047`,
    1964: `1047`,
    1965: `1047`,
    1966: `1048`,
    1967: `1048`,
    1968: `1048`,
    1969: `1049`,
    197: `23`,
    1970: `1049`,
    1971: `1050`,
    1972: `1050`,
    1973: `1050`,
    1974: `1052`,
    1975: `1052`,
    1976: `1052`,
    1977: `1053`,
    1978: `1053`,
    1979: `1053`,
    198: `23`,
    1980: `1054`,
    1981: `1054`,
    1982: `1055`,
    1983: `1055`,
    1984: `1055`,
    1985: `1057`,
    1986: `1058`,
    1987: `1058`,
    1988: `1059`,
    1989: `1060`,
    199: `25`,
    1990: `1061`,
    1991: `1062`,
    1992: `1062`,
    1993: `1063`,
    1994: `1064`,
    1995: `1065`,
    1996: `1066`,
    1997: `1066`,
    1998: `1067`,
    1999: `1068`,
    2: `2`,
    20: `2`,
    200: `27`,
    2000: `1069`,
    2001: `1070`,
    2002: `1070`,
    2003: `1071`,
    2004: `1072`,
    2005: `1073`,
    2006: `1073`,
    2007: `1073`,
    2008: `1074`,
    2009: `1074`,
    201: `27`,
    2010: `1074`,
    2011: `1075`,
    2012: `1076`,
    2013: `1077`,
    2014: `1078`,
    2015: `1078`,
    2016: `1078`,
    2017: `1080`,
    2018: `1080`,
    2019: `1080`,
    202: `27`,
    2020: `1082`,
    2021: `1082`,
    2022: `1083`,
    2023: `1083`,
    2024: `1083`,
    2025: `1084`,
    2026: `1084`,
    2027: `1085`,
    2028: `1085`,
    2029: `1085`,
    203: `28`,
    2030: `1087`,
    2031: `1087`,
    2032: `1087`,
    2033: `1089`,
    2034: `1089`,
    2035: `1089`,
    2036: `1091`,
    2037: `1091`,
    2038: `1091`,
    2039: `1093`,
    204: `28`,
    2040: `1093`,
    2041: `1094`,
    2042: `1094`,
    2043: `1094`,
    2044: `1095`,
    2045: `1095`,
    2046: `1095`,
    2047: `1095`,
    2048: `1095`,
    2049: `1095`,
    205: `30`,
    2050: `1095`,
    2051: `1095`,
    2052: `1095`,
    2053: `1095`,
    2054: `1095`,
    2055: `1095`,
    2056: `1095`,
    2057: `1095`,
    2058: `1095`,
    2059: `1095`,
    206: `31`,
    2060: `1095`,
    2061: `1095`,
    2062: `1095`,
    2063: `1095`,
    2064: `1095`,
    2065: `1095`,
    2066: `1095`,
    2067: `1095`,
    2068: `1095`,
    2069: `1095`,
    207: `32`,
    2070: `1095`,
    2071: `1095`,
    2072: `1095`,
    2073: `1095`,
    2074: `1095`,
    2075: `1095`,
    2076: `1095`,
    2077: `1095`,
    2078: `1095`,
    2079: `1095`,
    208: `33`,
    2080: `1095`,
    2081: `1095`,
    2082: `1095`,
    2083: `1095`,
    2084: `1095`,
    2085: `1095`,
    2086: `1095`,
    2087: `1095`,
    2088: `1095`,
    2089: `1095`,
    209: `33`,
    2090: `1095`,
    2091: `1095`,
    2092: `1095`,
    2093: `1095`,
    2094: `1095`,
    2095: `1095`,
    2096: `1095`,
    2097: `1095`,
    2098: `1095`,
    2099: `1095`,
    21: `2`,
    210: `34`,
    2100: `1095`,
    2101: `1095`,
    2102: `1095`,
    2103: `1095`,
    2104: `1095`,
    2105: `1095`,
    2106: `1095`,
    2107: `1095`,
    2108: `1095`,
    2109: `1095`,
    211: `35`,
    2110: `1095`,
    2111: `1095`,
    2112: `1095`,
    2113: `1095`,
    2114: `1095`,
    2115: `1095`,
    2116: `1095`,
    2117: `1095`,
    2118: `1095`,
    2119: `1095`,
    212: `36`,
    2120: `1095`,
    2121: `1095`,
    2122: `1095`,
    2123: `1095`,
    2124: `1095`,
    2125: `1095`,
    2126: `1095`,
    2127: `1095`,
    2128: `1095`,
    2129: `1095`,
    213: `37`,
    2130: `1095`,
    2131: `1095`,
    2132: `1095`,
    2133: `1095`,
    2134: `1095`,
    2135: `1095`,
    2136: `1095`,
    2137: `1095`,
    2138: `1095`,
    2139: `1095`,
    214: `38`,
    2140: `1095`,
    2141: `1095`,
    2142: `1095`,
    2143: `1095`,
    2144: `1095`,
    2145: `1095`,
    2146: `1095`,
    2147: `1095`,
    2148: `1095`,
    2149: `1095`,
    215: `39`,
    2150: `1095`,
    2151: `1095`,
    2152: `1095`,
    2153: `1095`,
    2154: `1095`,
    2155: `1095`,
    2156: `1095`,
    2157: `1095`,
    2158: `1095`,
    2159: `1095`,
    216: `39`,
    2160: `1095`,
    2161: `1095`,
    2162: `1095`,
    2163: `1095`,
    2164: `1095`,
    2165: `1095`,
    2166: `1095`,
    2167: `1095`,
    2168: `1095`,
    2169: `1095`,
    217: `41`,
    2170: `1095`,
    2171: `1095`,
    2172: `1095`,
    2173: `1095`,
    2174: `1095`,
    2175: `1095`,
    2176: `1095`,
    2177: `1095`,
    2178: `1095`,
    2179: `1095`,
    218: `42`,
    2180: `1095`,
    2181: `1095`,
    2182: `1095`,
    2183: `1095`,
    2184: `1095`,
    2185: `1095`,
    2186: `1095`,
    2187: `1095`,
    2188: `1095`,
    2189: `1095`,
    219: `42`,
    2190: `1095`,
    2191: `1095`,
    2192: `1095`,
    2193: `1095`,
    2194: `1095`,
    2195: `1095`,
    2196: `1095`,
    2197: `1095`,
    2198: `1095`,
    2199: `1095`,
    22: `2`,
    220: `43`,
    2200: `1095`,
    2201: `1095`,
    2202: `1095`,
    2203: `1095`,
    2204: `1095`,
    2205: `1095`,
    2206: `1095`,
    2207: `1095`,
    2208: `1095`,
    2209: `1095`,
    221: `44`,
    2210: `1095`,
    2211: `1095`,
    2212: `1095`,
    2213: `1095`,
    2214: `1095`,
    2215: `1095`,
    2216: `1095`,
    2217: `1095`,
    2218: `1095`,
    2219: `1095`,
    222: `45`,
    2220: `1095`,
    2221: `1095`,
    2222: `1095`,
    2223: `1095`,
    2224: `1095`,
    2225: `1095`,
    2226: `1095`,
    2227: `1095`,
    2228: `1095`,
    2229: `1095`,
    223: `45`,
    2230: `1095`,
    2231: `1095`,
    2232: `1095`,
    2233: `1095`,
    2234: `1095`,
    2235: `1095`,
    2236: `1095`,
    2237: `1095`,
    2238: `1095`,
    2239: `1095`,
    224: `45`,
    2240: `1095`,
    2241: `1095`,
    2242: `1095`,
    2243: `1095`,
    2244: `1095`,
    2245: `1095`,
    2246: `1095`,
    2247: `1096`,
    2248: `1096`,
    2249: `1097`,
    225: `46`,
    2250: `1097`,
    2251: `1098`,
    2252: `1098`,
    2253: `1099`,
    2254: `1100`,
    2255: `1100`,
    2256: `1101`,
    2257: `1102`,
    2258: `1104`,
    2259: `1105`,
    226: `46`,
    2260: `1105`,
    2261: `1106`,
    2262: `1106`,
    2263: `1106`,
    2264: `1106`,
    2265: `1106`,
    2266: `1106`,
    2267: `1106`,
    2268: `1106`,
    2269: `1106`,
    227: `47`,
    2270: `1106`,
    2271: `1107`,
    2272: `1107`,
    2273: `1108`,
    2274: `1109`,
    2275: `1109`,
    2276: `1109`,
    2277: `1110`,
    2278: `1111`,
    2279: `1112`,
    228: `48`,
    2280: `1112`,
    2281: `1113`,
    2282: `1114`,
    2283: `1114`,
    2284: `1114`,
    2285: `1115`,
    2286: `1115`,
    2287: `1116`,
    2288: `1116`,
    2289: `1117`,
    229: `49`,
    2290: `1117`,
    2291: `1118`,
    2292: `1119`,
    2293: `1120`,
    2294: `1120`,
    2295: `1121`,
    2296: `1122`,
    2297: `1122`,
    2298: `1122`,
    2299: `1123`,
    23: `2`,
    230: `49`,
    2300: `1124`,
    2301: `1124`,
    2302: `1125`,
    2303: `1126`,
    2304: `1126`,
    2305: `1127`,
    2306: `1128`,
    2307: `1129`,
    2308: `1129`,
    2309: `1130`,
    231: `50`,
    2310: `1131`,
    2311: `1132`,
    2312: `1132`,
    2313: `1133`,
    2314: `1134`,
    2315: `1135`,
    2316: `1135`,
    2317: `1136`,
    2318: `1137`,
    2319: `1138`,
    232: `50`,
    2320: `1138`,
    2321: `1139`,
    2322: `1139`,
    2323: `1140`,
    2324: `1140`,
    2325: `1141`,
    2326: `1141`,
    2327: `1142`,
    2328: `1142`,
    2329: `1143`,
    233: `51`,
    2330: `1143`,
    2331: `1143`,
    2332: `1145`,
    2333: `1145`,
    2334: `1146`,
    2335: `1146`,
    2336: `1147`,
    2337: `1147`,
    2338: `1147`,
    2339: `1149`,
    234: `51`,
    2340: `1149`,
    2341: `1149`,
    2342: `1149`,
    2343: `1149`,
    2344: `1149`,
    2345: `1149`,
    2346: `1149`,
    2347: `1149`,
    2348: `1149`,
    2349: `1149`,
    235: `51`,
    2350: `1149`,
    2351: `1149`,
    2352: `1149`,
    2353: `1149`,
    2354: `1149`,
    2355: `1149`,
    2356: `1149`,
    2357: `1149`,
    2358: `1149`,
    2359: `1149`,
    236: `52`,
    2360: `1149`,
    2361: `1149`,
    2362: `1149`,
    2363: `1149`,
    2364: `1149`,
    2365: `1149`,
    2366: `1149`,
    2367: `1149`,
    2368: `1149`,
    2369: `1149`,
    237: `52`,
    2370: `1149`,
    2371: `1149`,
    2372: `1149`,
    2373: `1149`,
    2374: `1149`,
    2375: `1149`,
    2376: `1149`,
    2377: `1149`,
    2378: `1149`,
    2379: `1149`,
    238: `53`,
    2380: `1149`,
    2381: `1149`,
    2382: `1149`,
    2383: `1149`,
    2384: `1149`,
    2385: `1149`,
    2386: `1149`,
    2387: `1149`,
    2388: `1149`,
    2389: `1149`,
    239: `53`,
    2390: `1149`,
    2391: `1149`,
    2392: `1149`,
    2393: `1149`,
    2394: `1149`,
    2395: `1149`,
    2396: `1149`,
    2397: `1149`,
    2398: `1149`,
    2399: `1149`,
    24: `2`,
    240: `53`,
    2400: `1149`,
    2401: `1149`,
    2402: `1149`,
    2403: `1149`,
    2404: `1149`,
    2405: `1149`,
    2406: `1149`,
    2407: `1149`,
    2408: `1149`,
    2409: `1149`,
    241: `53`,
    2410: `1149`,
    2411: `1149`,
    2412: `1149`,
    2413: `1149`,
    2414: `1149`,
    2415: `1149`,
    2416: `1149`,
    2417: `1149`,
    2418: `1149`,
    2419: `1149`,
    242: `53`,
    2420: `1149`,
    2421: `1149`,
    2422: `1149`,
    2423: `1149`,
    2424: `1149`,
    2425: `1149`,
    2426: `1149`,
    2427: `1149`,
    2428: `1149`,
    2429: `1149`,
    243: `53`,
    2430: `1149`,
    2431: `1149`,
    2432: `1149`,
    2433: `1149`,
    2434: `1149`,
    2435: `1149`,
    2436: `1149`,
    2437: `1149`,
    2438: `1149`,
    2439: `1149`,
    244: `54`,
    2440: `1149`,
    2441: `1149`,
    2442: `1149`,
    2443: `1149`,
    2444: `1149`,
    2445: `1149`,
    2446: `1149`,
    2447: `1149`,
    2448: `1149`,
    2449: `1149`,
    245: `54`,
    2450: `1149`,
    2451: `1149`,
    2452: `1149`,
    2453: `1149`,
    2454: `1149`,
    2455: `1149`,
    2456: `1149`,
    2457: `1149`,
    2458: `1149`,
    2459: `1149`,
    246: `55`,
    2460: `1149`,
    2461: `1149`,
    2462: `1149`,
    2463: `1149`,
    2464: `1149`,
    2465: `1149`,
    2466: `1149`,
    2467: `1149`,
    2468: `1149`,
    2469: `1149`,
    247: `56`,
    2470: `1149`,
    2471: `1149`,
    2472: `1149`,
    2473: `1149`,
    2474: `1149`,
    2475: `1149`,
    2476: `1149`,
    2477: `1149`,
    2478: `1149`,
    2479: `1149`,
    248: `57`,
    2480: `1149`,
    2481: `1149`,
    2482: `1149`,
    2483: `1149`,
    2484: `1149`,
    2485: `1149`,
    2486: `1149`,
    2487: `1149`,
    2488: `1149`,
    2489: `1149`,
    249: `57`,
    2490: `1149`,
    2491: `1149`,
    2492: `1149`,
    2493: `1149`,
    2494: `1149`,
    2495: `1149`,
    2496: `1149`,
    2497: `1149`,
    2498: `1149`,
    2499: `1149`,
    25: `2`,
    250: `58`,
    2500: `1149`,
    2501: `1149`,
    2502: `1149`,
    2503: `1149`,
    2504: `1149`,
    2505: `1149`,
    2506: `1149`,
    2507: `1149`,
    2508: `1149`,
    2509: `1149`,
    251: `59`,
    2510: `1149`,
    2511: `1149`,
    2512: `1149`,
    2513: `1149`,
    2514: `1149`,
    2515: `1149`,
    2516: `1149`,
    2517: `1149`,
    2518: `1149`,
    2519: `1149`,
    252: `61`,
    2520: `1149`,
    2521: `1149`,
    2522: `1149`,
    2523: `1149`,
    2524: `1149`,
    2525: `1149`,
    2526: `1149`,
    2527: `1149`,
    2528: `1149`,
    2529: `1149`,
    253: `61`,
    2530: `1149`,
    2531: `1149`,
    2532: `1149`,
    2533: `1149`,
    2534: `1149`,
    2535: `1149`,
    2536: `1149`,
    2537: `1149`,
    2538: `1149`,
    2539: `1149`,
    254: `62`,
    2540: `1149`,
    2541: `1149`,
    2542: `1150`,
    2543: `1150`,
    2544: `1151`,
    2545: `1151`,
    2546: `1152`,
    2547: `1152`,
    2548: `1153`,
    2549: `1154`,
    255: `62`,
    2550: `1154`,
    2551: `1155`,
    2552: `1156`,
    2553: `1158`,
    2554: `1159`,
    2555: `1159`,
    2556: `1160`,
    2557: `1160`,
    2558: `1160`,
    2559: `1160`,
    256: `62`,
    2560: `1160`,
    2561: `1160`,
    2562: `1160`,
    2563: `1160`,
    2564: `1160`,
    2565: `1160`,
    2566: `1161`,
    2567: `1161`,
    2568: `1162`,
    2569: `1163`,
    257: `63`,
    2570: `1163`,
    2571: `1163`,
    2572: `1164`,
    2573: `1165`,
    2574: `1166`,
    2575: `1166`,
    2576: `1167`,
    2577: `1168`,
    2578: `1168`,
    2579: `1168`,
    258: `63`,
    2580: `1169`,
    2581: `1169`,
    2582: `1170`,
    2583: `1170`,
    2584: `1171`,
    2585: `1172`,
    2586: `1172`,
    2587: `1173`,
    2588: `1174`,
    2589: `1174`,
    259: `64`,
    2590: `1174`,
    2591: `1175`,
    2592: `1176`,
    2593: `1176`,
    2594: `1177`,
    2595: `1178`,
    2596: `1178`,
    2597: `1179`,
    2598: `1180`,
    2599: `1181`,
    26: `2`,
    260: `65`,
    2600: `1181`,
    2601: `1182`,
    2602: `1183`,
    2603: `1184`,
    2604: `1184`,
    2605: `1185`,
    2606: `1186`,
    2607: `1187`,
    2608: `1187`,
    2609: `1188`,
    261: `66`,
    2610: `1189`,
    2611: `1190`,
    2612: `1190`,
    2613: `1191`,
    2614: `1191`,
    2615: `1192`,
    2616: `1192`,
    2617: `1193`,
    2618: `1193`,
    2619: `1194`,
    262: `66`,
    2620: `1194`,
    2621: `1195`,
    2622: `1195`,
    2623: `1195`,
    2624: `1198`,
    2625: `1199`,
    2626: `1200`,
    2627: `1201`,
    2628: `1201`,
    2629: `1202`,
    263: `66`,
    2630: `1203`,
    2631: `1203`,
    2632: `1203`,
    2633: `1204`,
    2634: `1205`,
    2635: `1206`,
    2636: `1207`,
    2637: `1208`,
    2638: `1208`,
    2639: `1208`,
    264: `66`,
    2640: `1209`,
    2641: `1210`,
    2642: `1210`,
    2643: `1211`,
    2644: `1211`,
    2645: `1211`,
    2646: `1211`,
    2647: `1211`,
    2648: `1211`,
    2649: `1211`,
    265: `66`,
    2650: `1211`,
    2651: `1211`,
    2652: `1211`,
    2653: `1212`,
    2654: `1212`,
    2655: `1213`,
    2656: `1214`,
    2657: `1214`,
    2658: `1214`,
    2659: `1215`,
    266: `66`,
    2660: `1216`,
    2661: `1217`,
    2662: `1217`,
    2663: `1218`,
    2664: `1219`,
    2665: `1219`,
    2666: `1219`,
    2667: `1220`,
    2668: `1220`,
    2669: `1221`,
    267: `66`,
    2670: `1221`,
    2671: `1222`,
    2672: `1222`,
    2673: `1223`,
    2674: `1223`,
    2675: `1223`,
    2676: `1224`,
    2677: `1224`,
    2678: `1225`,
    2679: `1226`,
    268: `66`,
    2680: `1226`,
    2681: `1227`,
    2682: `1228`,
    2683: `1228`,
    2684: `1228`,
    2685: `1229`,
    2686: `1229`,
    2687: `1230`,
    2688: `1230`,
    2689: `1231`,
    269: `66`,
    2690: `1232`,
    2691: `1233`,
    2692: `1233`,
    2693: `1234`,
    2694: `1235`,
    2695: `1235`,
    2696: `1235`,
    2697: `1236`,
    2698: `1237`,
    2699: `1237`,
    27: `2`,
    270: `66`,
    2700: `1238`,
    2701: `1239`,
    2702: `1239`,
    2703: `1240`,
    2704: `1240`,
    2705: `1241`,
    2706: `1242`,
    2707: `1243`,
    2708: `1244`,
    2709: `1244`,
    271: `66`,
    2710: `1245`,
    2711: `1246`,
    2712: `1247`,
    2713: `1247`,
    2714: `1248`,
    2715: `1249`,
    2716: `1250`,
    2717: `1251`,
    2718: `1252`,
    2719: `1252`,
    272: `66`,
    2720: `1253`,
    2721: `1254`,
    2722: `1255`,
    2723: `1255`,
    2724: `1256`,
    2725: `1256`,
    2726: `1257`,
    2727: `1257`,
    2728: `1258`,
    2729: `1259`,
    273: `66`,
    2730: `1259`,
    2731: `1260`,
    2732: `1260`,
    2733: `1261`,
    2734: `1261`,
    2735: `1262`,
    2736: `1262`,
    2737: `1262`,
    2738: `1264`,
    2739: `1265`,
    274: `66`,
    2740: `1265`,
    2741: `1266`,
    2742: `1266`,
    2743: `1266`,
    2744: `1266`,
    2745: `1266`,
    2746: `1266`,
    2747: `1266`,
    2748: `1266`,
    2749: `1266`,
    275: `66`,
    2750: `1266`,
    2751: `1267`,
    2752: `1267`,
    2753: `1268`,
    2754: `1269`,
    2755: `1269`,
    2756: `1269`,
    2757: `1270`,
    2758: `1271`,
    2759: `1272`,
    276: `66`,
    2760: `1272`,
    2761: `1273`,
    2762: `1274`,
    2763: `1274`,
    2764: `1274`,
    2765: `1275`,
    2766: `1275`,
    2767: `1276`,
    2768: `1276`,
    2769: `1277`,
    277: `66`,
    2770: `1277`,
    2771: `1278`,
    2772: `1279`,
    2773: `1280`,
    2774: `1280`,
    2775: `1281`,
    2776: `1282`,
    2777: `1282`,
    2778: `1283`,
    2779: `1283`,
    278: `66`,
    2780: `1284`,
    2781: `1284`,
    2782: `1285`,
    2783: `1286`,
    2784: `1288`,
    2785: `1288`,
    2786: `1289`,
    2787: `1290`,
    2788: `1290`,
    2789: `1291`,
    279: `66`,
    2790: `1292`,
    2791: `1293`,
    2792: `1293`,
    2793: `1293`,
    2794: `1294`,
    2795: `1294`,
    2796: `1295`,
    2797: `1295`,
    2798: `1296`,
    2799: `1296`,
    28: `2`,
    280: `66`,
    2800: `1296`,
    2801: `1297`,
    2802: `1297`,
    2803: `1298`,
    2804: `1299`,
    2805: `1299`,
    2806: `1300`,
    2807: `1301`,
    2808: `1301`,
    2809: `1301`,
    281: `67`,
    2810: `1302`,
    2811: `1302`,
    2812: `1303`,
    2813: `1303`,
    2814: `1304`,
    2815: `1305`,
    2816: `1306`,
    2817: `1306`,
    2818: `1307`,
    2819: `1308`,
    282: `67`,
    2820: `1308`,
    2821: `1308`,
    2822: `1309`,
    2823: `1310`,
    2824: `1310`,
    2825: `1311`,
    2826: `1312`,
    2827: `1312`,
    2828: `1313`,
    2829: `1313`,
    283: `67`,
    2830: `1314`,
    2831: `1315`,
    2832: `1316`,
    2833: `1317`,
    2834: `1317`,
    2835: `1318`,
    2836: `1319`,
    2837: `1320`,
    2838: `1320`,
    2839: `1321`,
    284: `69`,
    2840: `1322`,
    2841: `1323`,
    2842: `1324`,
    2843: `1325`,
    2844: `1325`,
    2845: `1326`,
    2846: `1327`,
    2847: `1328`,
    2848: `1329`,
    2849: `1330`,
    285: `69`,
    2850: `1330`,
    2851: `1331`,
    2852: `1331`,
    2853: `1332`,
    2854: `1332`,
    2855: `1333`,
    2856: `1334`,
    2857: `1334`,
    2858: `1335`,
    2859: `1335`,
    286: `69`,
    2860: `1336`,
    2861: `1336`,
    2862: `1337`,
    2863: `1337`,
    2864: `1337`,
    2865: `1340`,
    2866: `1341`,
    2867: `1342`,
    2868: `1343`,
    2869: `1343`,
    287: `70`,
    2870: `1344`,
    2871: `1345`,
    2872: `1345`,
    2873: `1345`,
    2874: `1346`,
    2875: `1347`,
    2876: `1348`,
    2877: `1349`,
    2878: `1350`,
    2879: `1350`,
    288: `71`,
    2880: `1350`,
    2881: `1351`,
    2882: `1352`,
    2883: `1352`,
    2884: `1353`,
    2885: `1353`,
    2886: `1353`,
    2887: `1353`,
    2888: `1353`,
    2889: `1353`,
    289: `71`,
    2890: `1353`,
    2891: `1353`,
    2892: `1353`,
    2893: `1353`,
    2894: `1354`,
    2895: `1354`,
    2896: `1355`,
    2897: `1356`,
    2898: `1356`,
    2899: `1356`,
    29: `2`,
    290: `73`,
    2900: `1357`,
    2901: `1358`,
    2902: `1359`,
    2903: `1359`,
    2904: `1360`,
    2905: `1361`,
    2906: `1361`,
    2907: `1361`,
    2908: `1362`,
    2909: `1362`,
    291: `74`,
    2910: `1363`,
    2911: `1363`,
    2912: `1364`,
    2913: `1364`,
    2914: `1365`,
    2915: `1365`,
    2916: `1365`,
    2917: `1366`,
    2918: `1366`,
    2919: `1367`,
    292: `75`,
    2920: `1368`,
    2921: `1368`,
    2922: `1369`,
    2923: `1370`,
    2924: `1370`,
    2925: `1370`,
    2926: `1371`,
    2927: `1371`,
    2928: `1372`,
    2929: `1372`,
    293: `76`,
    2930: `1373`,
    2931: `1374`,
    2932: `1375`,
    2933: `1375`,
    2934: `1376`,
    2935: `1377`,
    2936: `1377`,
    2937: `1377`,
    2938: `1378`,
    2939: `1379`,
    294: `76`,
    2940: `1379`,
    2941: `1380`,
    2942: `1381`,
    2943: `1381`,
    2944: `1382`,
    2945: `1382`,
    2946: `1383`,
    2947: `1384`,
    2948: `1385`,
    2949: `1386`,
    295: `77`,
    2950: `1386`,
    2951: `1387`,
    2952: `1388`,
    2953: `1389`,
    2954: `1389`,
    2955: `1390`,
    2956: `1391`,
    2957: `1392`,
    2958: `1393`,
    2959: `1394`,
    296: `78`,
    2960: `1394`,
    2961: `1395`,
    2962: `1396`,
    2963: `1397`,
    2964: `1397`,
    2965: `1398`,
    2966: `1398`,
    2967: `1399`,
    2968: `1399`,
    2969: `1400`,
    297: `79`,
    2970: `1401`,
    2971: `1401`,
    2972: `1402`,
    2973: `1402`,
    2974: `1403`,
    2975: `1403`,
    2976: `1404`,
    2977: `1404`,
    2978: `1404`,
    2979: `1406`,
    298: `79`,
    2980: `1407`,
    2981: `1407`,
    2982: `1408`,
    2983: `1408`,
    2984: `1408`,
    2985: `1408`,
    2986: `1408`,
    2987: `1408`,
    2988: `1408`,
    2989: `1408`,
    299: `80`,
    2990: `1408`,
    2991: `1408`,
    2992: `1409`,
    2993: `1409`,
    2994: `1410`,
    2995: `1411`,
    2996: `1411`,
    2997: `1411`,
    2998: `1412`,
    2999: `1413`,
    3: `2`,
    30: `2`,
    300: `81`,
    3000: `1414`,
    3001: `1414`,
    3002: `1415`,
    3003: `1416`,
    3004: `1416`,
    3005: `1416`,
    3006: `1417`,
    3007: `1417`,
    3008: `1418`,
    3009: `1418`,
    301: `82`,
    3010: `1419`,
    3011: `1419`,
    3012: `1420`,
    3013: `1421`,
    3014: `1422`,
    3015: `1422`,
    3016: `1423`,
    3017: `1424`,
    3018: `1424`,
    3019: `1425`,
    302: `82`,
    3020: `1425`,
    3021: `1426`,
    3022: `1426`,
    3023: `1427`,
    3024: `1428`,
    3025: `1430`,
    3026: `1430`,
    3027: `1431`,
    3028: `1432`,
    3029: `1432`,
    303: `83`,
    3030: `1433`,
    3031: `1434`,
    3032: `1435`,
    3033: `1435`,
    3034: `1435`,
    3035: `1436`,
    3036: `1436`,
    3037: `1437`,
    3038: `1437`,
    3039: `1438`,
    304: `83`,
    3040: `1438`,
    3041: `1438`,
    3042: `1439`,
    3043: `1439`,
    3044: `1440`,
    3045: `1441`,
    3046: `1441`,
    3047: `1442`,
    3048: `1443`,
    3049: `1443`,
    305: `83`,
    3050: `1443`,
    3051: `1444`,
    3052: `1444`,
    3053: `1445`,
    3054: `1445`,
    3055: `1446`,
    3056: `1447`,
    3057: `1448`,
    3058: `1448`,
    3059: `1449`,
    306: `85`,
    3060: `1450`,
    3061: `1450`,
    3062: `1450`,
    3063: `1451`,
    3064: `1452`,
    3065: `1452`,
    3066: `1453`,
    3067: `1454`,
    3068: `1454`,
    3069: `1455`,
    307: `85`,
    3070: `1455`,
    3071: `1456`,
    3072: `1457`,
    3073: `1458`,
    3074: `1459`,
    3075: `1459`,
    3076: `1460`,
    3077: `1461`,
    3078: `1462`,
    3079: `1462`,
    308: `85`,
    3080: `1463`,
    3081: `1464`,
    3082: `1465`,
    3083: `1466`,
    3084: `1467`,
    3085: `1467`,
    3086: `1468`,
    3087: `1469`,
    3088: `1470`,
    3089: `1471`,
    309: `86`,
    3090: `1472`,
    3091: `1472`,
    3092: `1473`,
    3093: `1473`,
    3094: `1474`,
    3095: `1474`,
    3096: `1475`,
    3097: `1476`,
    3098: `1476`,
    3099: `1477`,
    31: `2`,
    310: `86`,
    3100: `1477`,
    3101: `1478`,
    3102: `1478`,
    3103: `1479`,
    3104: `1479`,
    3105: `1479`,
    3106: `1481`,
    3107: `1481`,
    3108: `1483`,
    3109: `1483`,
    311: `86`,
    3110: `1484`,
    3111: `1484`,
    3112: `1484`,
    3113: `1485`,
    3114: `1485`,
    3115: `1486`,
    3116: `1487`,
    3117: `1487`,
    3118: `1488`,
    3119: `1489`,
    312: `87`,
    3120: `1490`,
    3121: `1490`,
    3122: `1491`,
    3123: `1492`,
    3124: `1493`,
    3125: `1495`,
    3126: `1496`,
    3127: `1496`,
    3128: `1497`,
    3129: `1497`,
    313: `88`,
    3130: `1498`,
    3131: `1498`,
    3132: `1498`,
    3133: `1500`,
    3134: `1500`,
    3135: `1501`,
    3136: `1501`,
    3137: `1502`,
    3138: `1503`,
    3139: `1505`,
    314: `88`,
    3140: `1505`,
    3141: `1505`,
    3142: `1507`,
    3143: `1507`,
    3144: `1508`,
    3145: `1509`,
    3146: `1509`,
    3147: `1510`,
    3148: `1511`,
    3149: `1513`,
    315: `89`,
    3150: `1514`,
    3151: `1514`,
    3152: `1515`,
    3153: `1515`,
    3154: `1516`,
    3155: `1516`,
    3156: `1516`,
    3157: `1517`,
    3158: `1517`,
    3159: `1517`,
    316: `89`,
    3160: `1519`,
    3161: `1520`,
    3162: `1521`,
    3163: `1522`,
    3164: `1523`,
    3165: `1525`,
    3166: `1526`,
    3167: `1526`,
    3168: `1527`,
    3169: `1528`,
    317: `91`,
    3170: `1528`,
    3171: `1529`,
    3172: `1529`,
    3173: `1530`,
    3174: `1530`,
    3175: `1531`,
    3176: `1532`,
    3177: `1534`,
    3178: `1534`,
    3179: `1534`,
    318: `92`,
    3180: `1536`,
    3181: `1536`,
    3182: `1536`,
    3183: `1538`,
    3184: `1538`,
    3185: `1539`,
    3186: `1539`,
    3187: `1539`,
    3188: `1540`,
    3189: `1540`,
    319: `93`,
    3190: `1541`,
    3191: `1541`,
    3192: `1541`,
    3193: `1543`,
    3194: `1543`,
    3195: `1543`,
    3196: `1545`,
    3197: `1546`,
    3198: `1548`,
    3199: `1549`,
    32: `2`,
    320: `94`,
    3200: `1550`,
    3201: `1551`,
    3202: `1551`,
    3203: `1552`,
    3204: `1552`,
    3205: `1553`,
    3206: `1553`,
    3207: `1553`,
    3208: `1554`,
    3209: `1556`,
    321: `94`,
    3210: `1557`,
    3211: `1558`,
    3212: `1558`,
    3213: `1558`,
    3214: `1559`,
    3215: `1560`,
    3216: `1560`,
    3217: `1561`,
    3218: `1561`,
    3219: `1561`,
    322: `95`,
    3220: `1562`,
    3221: `1564`,
    3222: `1565`,
    3223: `1566`,
    3224: `1567`,
    3225: `1567`,
    3226: `1567`,
    3227: `1568`,
    3228: `1568`,
    3229: `1569`,
    323: `95`,
    3230: `1570`,
    3231: `1571`,
    3232: `1573`,
    3233: `1574`,
    3234: `1574`,
    3235: `1574`,
    3236: `1575`,
    3237: `1575`,
    3238: `1576`,
    3239: `1577`,
    324: `96`,
    3240: `1577`,
    3241: `1577`,
    3242: `1578`,
    3243: `1578`,
    3244: `1579`,
    3245: `1580`,
    3246: `1580`,
    3247: `1581`,
    3248: `1582`,
    3249: `1582`,
    325: `97`,
    3250: `1583`,
    3251: `1584`,
    3252: `1584`,
    3253: `1585`,
    3254: `1586`,
    3255: `1586`,
    3256: `1587`,
    3257: `1588`,
    3258: `1588`,
    3259: `1588`,
    326: `98`,
    3260: `1589`,
    3261: `1590`,
    3262: `1590`,
    3263: `1591`,
    3264: `1592`,
    3265: `1592`,
    3266: `1592`,
    3267: `1593`,
    3268: `1593`,
    3269: `1594`,
    327: `99`,
    3270: `1595`,
    3271: `1595`,
    3272: `1596`,
    3273: `1597`,
    3274: `1597`,
    3275: `1598`,
    3276: `1599`,
    3277: `1599`,
    3278: `1600`,
    3279: `1601`,
    328: `100`,
    3280: `1601`,
    3281: `1602`,
    3282: `1603`,
    3283: `1603`,
    3284: `1604`,
    3285: `1605`,
    3286: `1605`,
    3287: `1606`,
    3288: `1606`,
    3289: `1607`,
    329: `100`,
    3290: `1608`,
    3291: `1608`,
    3292: `1609`,
    3293: `1611`,
    3294: `1612`,
    3295: `1612`,
    3296: `1612`,
    3297: `1614`,
    3298: `1615`,
    3299: `1616`,
    33: `2`,
    330: `101`,
    3300: `1617`,
    3301: `1617`,
    3302: `1617`,
    3303: `1618`,
    3304: `1618`,
    3305: `1619`,
    3306: `1619`,
    3307: `1619`,
    3308: `1620`,
    3309: `1620`,
    331: `101`,
    3310: `1620`,
    3311: `1622`,
    3312: `1623`,
    3313: `1624`,
    3314: `1624`,
    3315: `1625`,
    3316: `1627`,
    3317: `1627`,
    3318: `1628`,
    3319: `1629`,
    332: `101`,
    3320: `1629`,
    3321: `1630`,
    3322: `1632`,
    3323: `1633`,
    3324: `1633`,
    3325: `1633`,
    3326: `1634`,
    3327: `1635`,
    3328: `1636`,
    3329: `1637`,
    333: `104`,
    3330: `1638`,
    3331: `1641`,
    3332: `1641`,
    3333: `1642`,
    3334: `1642`,
    3335: `1643`,
    3336: `1644`,
    3337: `1645`,
    3338: `1646`,
    3339: `1646`,
    334: `104`,
    3340: `1647`,
    3341: `1648`,
    3342: `1648`,
    3343: `1649`,
    3344: `1649`,
    3345: `1650`,
    3346: `1650`,
    3347: `1651`,
    3348: `1652`,
    3349: `1653`,
    335: `104`,
    3350: `1653`,
    3351: `1654`,
    3352: `1655`,
    3353: `1656`,
    3354: `1657`,
    3355: `1657`,
    3356: `1658`,
    3357: `1659`,
    3358: `1660`,
    3359: `1662`,
    336: `104`,
    3360: `1663`,
    3361: `1663`,
    3362: `1664`,
    3363: `1666`,
    3364: `1667`,
    3365: `1668`,
    3366: `1669`,
    3367: `1670`,
    3368: `1670`,
    3369: `1671`,
    337: `104`,
    3370: `1672`,
    3371: `1673`,
    3372: `1674`,
    3373: `1676`,
    3374: `1676`,
    3375: `1677`,
    3376: `1677`,
    3377: `1678`,
    3378: `1679`,
    3379: `1680`,
    338: `104`,
    3380: `1680`,
    3381: `1680`,
    3382: `1681`,
    3383: `1681`,
    3384: `1681`,
    3385: `1683`,
    3386: `1683`,
    3387: `1684`,
    3388: `1685`,
    3389: `1685`,
    339: `104`,
    3390: `1686`,
    34: `2`,
    340: `104`,
    341: `104`,
    342: `104`,
    343: `104`,
    344: `104`,
    345: `104`,
    346: `104`,
    347: `104`,
    348: `104`,
    349: `104`,
    35: `2`,
    350: `104`,
    351: `104`,
    352: `104`,
    353: `104`,
    354: `104`,
    355: `104`,
    356: `104`,
    357: `104`,
    358: `104`,
    359: `104`,
    36: `2`,
    360: `104`,
    361: `104`,
    362: `104`,
    363: `104`,
    364: `104`,
    365: `104`,
    366: `104`,
    367: `104`,
    368: `104`,
    369: `104`,
    37: `2`,
    370: `104`,
    371: `104`,
    372: `104`,
    373: `104`,
    374: `104`,
    375: `104`,
    376: `104`,
    377: `104`,
    378: `104`,
    379: `104`,
    38: `4`,
    380: `104`,
    381: `104`,
    382: `104`,
    383: `104`,
    384: `105`,
    385: `105`,
    386: `106`,
    387: `106`,
    388: `106`,
    389: `108`,
    39: `4`,
    390: `108`,
    391: `108`,
    392: `109`,
    393: `109`,
    394: `111`,
    395: `112`,
    396: `113`,
    397: `113`,
    398: `113`,
    399: `114`,
    4: `2`,
    40: `5`,
    400: `114`,
    401: `115`,
    402: `116`,
    403: `117`,
    404: `118`,
    405: `119`,
    406: `120`,
    407: `120`,
    408: `121`,
    409: `121`,
    41: `5`,
    410: `121`,
    411: `123`,
    412: `123`,
    413: `123`,
    414: `124`,
    415: `124`,
    416: `124`,
    417: `125`,
    418: `126`,
    419: `126`,
    42: `5`,
    420: `127`,
    421: `127`,
    422: `129`,
    423: `130`,
    424: `131`,
    425: `131`,
    426: `131`,
    427: `132`,
    428: `132`,
    429: `133`,
    43: `6`,
    430: `133`,
    431: `134`,
    432: `135`,
    433: `136`,
    434: `137`,
    435: `138`,
    436: `138`,
    437: `139`,
    438: `139`,
    439: `139`,
    44: `7`,
    440: `141`,
    441: `141`,
    442: `141`,
    443: `142`,
    444: `142`,
    445: `144`,
    446: `144`,
    447: `145`,
    448: `146`,
    449: `147`,
    45: `8`,
    450: `150`,
    451: `150`,
    452: `150`,
    453: `152`,
    454: `153`,
    455: `154`,
    456: `155`,
    457: `155`,
    458: `156`,
    459: `157`,
    46: `9`,
    460: `157`,
    461: `157`,
    462: `158`,
    463: `159`,
    464: `160`,
    465: `161`,
    466: `162`,
    467: `163`,
    468: `163`,
    469: `163`,
    47: `10`,
    470: `164`,
    471: `164`,
    472: `166`,
    473: `166`,
    474: `167`,
    475: `168`,
    476: `169`,
    477: `172`,
    478: `172`,
    479: `172`,
    48: `11`,
    480: `172`,
    481: `172`,
    482: `172`,
    483: `173`,
    484: `173`,
    485: `174`,
    486: `175`,
    487: `177`,
    488: `178`,
    489: `181`,
    49: `11`,
    490: `181`,
    491: `182`,
    492: `183`,
    493: `184`,
    494: `187`,
    495: `187`,
    496: `187`,
    497: `188`,
    498: `188`,
    499: `189`,
    5: `2`,
    50: `12`,
    500: `190`,
    501: `190`,
    502: `191`,
    503: `191`,
    504: `191`,
    505: `193`,
    506: `193`,
    507: `193`,
    508: `194`,
    509: `194`,
    51: `13`,
    510: `196`,
    511: `196`,
    512: `197`,
    513: `198`,
    514: `199`,
    515: `202`,
    516: `202`,
    517: `202`,
    518: `204`,
    519: `205`,
    52: `14`,
    520: `206`,
    521: `206`,
    522: `207`,
    523: `207`,
    524: `208`,
    525: `209`,
    526: `209`,
    527: `209`,
    528: `210`,
    529: `211`,
    53: `14`,
    530: `212`,
    531: `213`,
    532: `214`,
    533: `215`,
    534: `215`,
    535: `215`,
    536: `216`,
    537: `216`,
    538: `217`,
    539: `217`,
    54: `15`,
    540: `217`,
    541: `219`,
    542: `219`,
    543: `219`,
    544: `220`,
    545: `220`,
    546: `222`,
    547: `222`,
    548: `223`,
    549: `224`,
    55: `16`,
    550: `225`,
    551: `228`,
    552: `228`,
    553: `228`,
    554: `229`,
    555: `230`,
    556: `232`,
    557: `233`,
    558: `234`,
    559: `235`,
    56: `17`,
    560: `236`,
    561: `236`,
    562: `237`,
    563: `238`,
    564: `238`,
    565: `238`,
    566: `239`,
    567: `239`,
    568: `239`,
    569: `240`,
    57: `18`,
    570: `240`,
    571: `241`,
    572: `241`,
    573: `241`,
    574: `244`,
    575: `244`,
    576: `245`,
    577: `246`,
    578: `247`,
    579: `250`,
    58: `19`,
    580: `250`,
    581: `250`,
    582: `251`,
    583: `251`,
    584: `252`,
    585: `253`,
    586: `253`,
    587: `254`,
    588: `254`,
    589: `254`,
    59: `21`,
    590: `257`,
    591: `257`,
    592: `258`,
    593: `259`,
    594: `260`,
    595: `263`,
    596: `263`,
    597: `263`,
    598: `264`,
    599: `264`,
    6: `2`,
    60: `21`,
    600: `265`,
    601: `266`,
    602: `266`,
    603: `267`,
    604: `267`,
    605: `267`,
    606: `270`,
    607: `270`,
    608: `271`,
    609: `272`,
    61: `21`,
    610: `273`,
    611: `276`,
    612: `276`,
    613: `276`,
    614: `277`,
    615: `277`,
    616: `278`,
    617: `279`,
    618: `279`,
    619: `280`,
    62: `21`,
    620: `280`,
    621: `280`,
    622: `283`,
    623: `283`,
    624: `284`,
    625: `285`,
    626: `286`,
    627: `289`,
    628: `289`,
    629: `289`,
    63: `21`,
    630: `290`,
    631: `290`,
    632: `291`,
    633: `292`,
    634: `292`,
    635: `293`,
    636: `293`,
    637: `293`,
    638: `296`,
    639: `296`,
    64: `21`,
    640: `296`,
    641: `296`,
    642: `296`,
    643: `296`,
    644: `296`,
    645: `296`,
    646: `296`,
    647: `296`,
    648: `296`,
    649: `296`,
    65: `21`,
    650: `296`,
    651: `296`,
    652: `296`,
    653: `296`,
    654: `296`,
    655: `296`,
    656: `296`,
    657: `296`,
    658: `296`,
    659: `296`,
    66: `21`,
    660: `296`,
    661: `296`,
    662: `296`,
    663: `296`,
    664: `296`,
    665: `296`,
    666: `296`,
    667: `296`,
    668: `296`,
    669: `296`,
    67: `21`,
    670: `296`,
    671: `296`,
    672: `296`,
    673: `296`,
    674: `296`,
    675: `296`,
    676: `296`,
    677: `296`,
    678: `296`,
    679: `296`,
    68: `21`,
    680: `296`,
    681: `296`,
    682: `296`,
    683: `296`,
    684: `296`,
    685: `296`,
    686: `296`,
    687: `296`,
    688: `296`,
    689: `297`,
    69: `21`,
    690: `297`,
    691: `298`,
    692: `298`,
    693: `298`,
    694: `300`,
    695: `300`,
    696: `300`,
    697: `301`,
    698: `302`,
    699: `302`,
    7: `2`,
    70: `21`,
    700: `304`,
    701: `305`,
    702: `306`,
    703: `306`,
    704: `306`,
    705: `307`,
    706: `307`,
    707: `308`,
    708: `309`,
    709: `310`,
    71: `21`,
    710: `310`,
    711: `311`,
    712: `312`,
    713: `313`,
    714: `313`,
    715: `314`,
    716: `314`,
    717: `314`,
    718: `317`,
    719: `317`,
    72: `21`,
    720: `317`,
    721: `317`,
    722: `317`,
    723: `317`,
    724: `317`,
    725: `317`,
    726: `317`,
    727: `317`,
    728: `317`,
    729: `317`,
    73: `21`,
    730: `317`,
    731: `317`,
    732: `317`,
    733: `317`,
    734: `317`,
    735: `317`,
    736: `317`,
    737: `317`,
    738: `317`,
    739: `317`,
    74: `21`,
    740: `317`,
    741: `317`,
    742: `317`,
    743: `317`,
    744: `317`,
    745: `317`,
    746: `317`,
    747: `317`,
    748: `317`,
    749: `317`,
    75: `21`,
    750: `317`,
    751: `317`,
    752: `317`,
    753: `317`,
    754: `317`,
    755: `317`,
    756: `317`,
    757: `317`,
    758: `317`,
    759: `317`,
    76: `21`,
    760: `317`,
    761: `317`,
    762: `317`,
    763: `317`,
    764: `317`,
    765: `317`,
    766: `317`,
    767: `317`,
    768: `317`,
    769: `318`,
    77: `21`,
    770: `318`,
    771: `319`,
    772: `319`,
    773: `319`,
    774: `321`,
    775: `321`,
    776: `322`,
    777: `322`,
    778: `323`,
    779: `325`,
    78: `21`,
    780: `326`,
    781: `327`,
    782: `328`,
    783: `328`,
    784: `329`,
    785: `330`,
    786: `330`,
    787: `330`,
    788: `331`,
    789: `332`,
    79: `21`,
    790: `333`,
    791: `334`,
    792: `335`,
    793: `336`,
    794: `344`,
    795: `344`,
    796: `345`,
    797: `346`,
    798: `346`,
    799: `347`,
    8: `2`,
    80: `21`,
    800: `347`,
    801: `347`,
    802: `348`,
    803: `349`,
    804: `350`,
    805: `350`,
    806: `350`,
    807: `351`,
    808: `352`,
    809: `352`,
    81: `21`,
    810: `353`,
    811: `353`,
    812: `353`,
    813: `353`,
    814: `353`,
    815: `353`,
    816: `353`,
    817: `353`,
    818: `353`,
    819: `353`,
    82: `21`,
    820: `354`,
    821: `354`,
    822: `355`,
    823: `356`,
    824: `357`,
    825: `357`,
    826: `358`,
    827: `358`,
    828: `359`,
    829: `359`,
    83: `21`,
    830: `360`,
    831: `361`,
    832: `361`,
    833: `362`,
    834: `363`,
    835: `363`,
    836: `363`,
    837: `364`,
    838: `365`,
    839: `365`,
    84: `21`,
    840: `366`,
    841: `367`,
    842: `367`,
    843: `368`,
    844: `369`,
    845: `370`,
    846: `370`,
    847: `371`,
    848: `372`,
    849: `373`,
    85: `21`,
    850: `373`,
    851: `374`,
    852: `375`,
    853: `376`,
    854: `376`,
    855: `377`,
    856: `378`,
    857: `379`,
    858: `379`,
    859: `380`,
    86: `21`,
    860: `380`,
    861: `381`,
    862: `381`,
    863: `383`,
    864: `383`,
    865: `384`,
    866: `384`,
    867: `384`,
    868: `385`,
    869: `386`,
    87: `21`,
    870: `386`,
    871: `386`,
    872: `387`,
    873: `387`,
    874: `388`,
    875: `389`,
    876: `390`,
    877: `390`,
    878: `391`,
    879: `391`,
    88: `21`,
    880: `392`,
    881: `392`,
    882: `392`,
    883: `393`,
    884: `394`,
    885: `394`,
    886: `395`,
    887: `395`,
    888: `396`,
    889: `396`,
    89: `21`,
    890: `396`,
    891: `397`,
    892: `397`,
    893: `398`,
    894: `398`,
    895: `399`,
    896: `399`,
    897: `400`,
    898: `401`,
    899: `401`,
    9: `2`,
    90: `21`,
    900: `402`,
    901: `402`,
    902: `403`,
    903: `403`,
    904: `404`,
    905: `405`,
    906: `405`,
    907: `406`,
    908: `406`,
    909: `407`,
    91: `21`,
    910: `407`,
    911: `408`,
    912: `409`,
    913: `409`,
    914: `410`,
    915: `410`,
    916: `411`,
    917: `411`,
    918: `412`,
    919: `413`,
    92: `21`,
    920: `413`,
    921: `415`,
    922: `415`,
    923: `416`,
    924: `416`,
    925: `417`,
    926: `418`,
    927: `418`,
    928: `419`,
    929: `420`,
    93: `21`,
    930: `421`,
    931: `421`,
    932: `422`,
    933: `423`,
    934: `424`,
    935: `424`,
    936: `425`,
    937: `426`,
    938: `426`,
    939: `426`,
    94: `21`,
    940: `427`,
    941: `428`,
    942: `428`,
    943: `429`,
    944: `430`,
    945: `430`,
    946: `431`,
    947: `432`,
    948: `433`,
    949: `433`,
    95: `21`,
    950: `434`,
    951: `435`,
    952: `436`,
    953: `436`,
    954: `437`,
    955: `438`,
    956: `439`,
    957: `439`,
    958: `440`,
    959: `441`,
    96: `21`,
    960: `442`,
    961: `443`,
    962: `443`,
    963: `445`,
    964: `445`,
    965: `446`,
    966: `446`,
    967: `447`,
    968: `448`,
    969: `448`,
    97: `21`,
    970: `449`,
    971: `449`,
    972: `449`,
    973: `450`,
    974: `451`,
    975: `452`,
    976: `453`,
    977: `453`,
    978: `453`,
    979: `454`,
    98: `21`,
    980: `455`,
    981: `456`,
    982: `456`,
    983: `457`,
    984: `458`,
    985: `458`,
    986: `459`,
    987: `460`,
    988: `461`,
    989: `462`,
    99: `21`,
    990: `462`,
    991: `463`,
    992: `464`,
    993: `465`,
    994: `467`,
    995: `467`,
    996: `467`,
    997: `469`,
    998: `469`,
    999: `470`,
  },
  appClear: `CA==`,
  appClearMap: {},
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 13,
  warnings: [],
};
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T11","name":"v10643","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_addAdmin0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Admin_deposit0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_editUserReward0_98","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_98","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_revokeAdmin0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_setReward0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_User_claim0_98","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_98","type":"bool"},{"internalType":"bool","name":"_User_optin0_98","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1815","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2268","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2724","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3172","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3621","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4077","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4097","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4117","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4580","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4601","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4627","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5090","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5110","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5135","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5587","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"insufficient","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"notify","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v10594","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10600","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10607","type":"address"},{"internalType":"uint256","name":"v10608","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10618","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10625","type":"address"},{"internalType":"uint256","name":"v10626","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10570","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10576","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10580","type":"address"}],"name":"Info_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10632","type":"uint256"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claimAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_addAdmin0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Admin_deposit0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_editUserReward0_98","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_98","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_revokeAdmin0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_setReward0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_User_claim0_98","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_98","type":"bool"},{"internalType":"bool","name":"_User_optin0_98","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v10646","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62005e7538819003918201601f19168301916001600160401b038311848410176200059a57808492604094855283398101031262000705576020604051916200004c836200070a565b80518352015161ffff198116810362000705576020820152600080554360035560405161024081016001600160401b038111828210176200059a57600091610220916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015201526040519081606081011060018060401b036060840111176200059a576060820160405262000130606083016200070a565b60006060830152600060808301526060820182526200014e62000726565b60208301526200015d62000756565b604083015260ff60045416620006ec577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a180518015908115620006df575b5015620006c65734620006ad5760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152604051918260a081011060018060401b0360a0850111176200059a5760409060a08401825260008452600060208501526200026c62000756565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b036020830111176200059a576020818101604090815260008352830151015115620005b057506040516001600160401b036101408201908111908211176200059a5780610140610120920160405260008152600060208201526000604082015260006060820152600060808201526200032362000726565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c08101518284015260e0810151610140840152610100810151610160840152015161018082015261018081526101a0810181811060018060401b038211176200059a5760405280516001600160401b0381116200059a576200048a600254620007a8565b601f81116200054c575b50602091601f8211600114620004e257918192600092620004d6575b50508160011b916000199060031b1c1916176002555b6040516156569081620007ff8239f35b015190503880620004b0565b601f19821692600260005260206000209160005b858110620005335750836001951062000519575b505050811b01600255620004c6565b015160001960f88460031b161c191690553880806200050a565b91926020600181928685015181550194019201620004f6565b6002600052620005889060008051602062005e55833981519152601f840160051c810191602085106200058f575b601f0160051c0190620007e5565b3862000494565b90915081906200057a565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620006a3575bf1156200068d576000809392819392829347809352511682821562000699575bf1156200068d576000805560006001556200060c600254620007a8565b806200061a575b50620004c6565b601f811160011462000634575060006002555b3862000613565b60026000526200067c90601f0160051c60008051602062005e55833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620007e5565b60006020812081600255556200062d565b6040513d6000823e3d90fd5b506108fc620005ef565b506108fc620005cf565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b90506001541438620001ba565b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200059a57604052565b6040519062000735826200070a565b600060208360405162000748816200070a565b838152838382015281520152565b6040519060e082016001600160401b038111838210176200059a576040528160c06000918281528260208201526200078d62000726565b60408201528260608201528260808201528260a08201520152565b90600182811c92168015620007da575b6020831014620007c457565b634e487b7160e01b600052602260045260246000fd5b91607f1691620007b8565b818110620007f1575050565b60008155600101620007e556fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610ac75780630bda465714610a235780631e93b0f114610a0457806336e56ea5146109a35780633702d0ce146109675780634ab9f8b314610911578063523df4f6146108ae57806355c42a951461086e578063672422c71461082057806374623535146107e457806374f16ec91461076e5780637a2b54dc1461072b5780637f0595e2146106c457806383230757146106a5578063883513de1461065957806392cf8bd51461060c578063a579242414610577578063a5928cf514610534578063a8d65f20146104be578063ab53f2c614610452578063c568a57c146102a8578063c5d86f6f1461025a578063cd6637a81461020d578063e0590c9a146101a85763f33c0dce1461013c5750610010565b346101a457816003193601126101a4576003610156610edd565b92540361018d5760206101a08484610100610180610172610c69565b868082518301019101611113565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b5080fd5b5082906020366003190112610209576020926101fe6101e0926101c9610edd565b9283916101d4611018565b90358151528781019060068251525160e0825101526101f1611047565b91825251878201526112f7565b015115159051908152f35b8280fd5b50346101a457816003193601126101a4576003610228610edd565b925403610243576020610180848460c0610180610172610c69565b602490600c84519163100960cb60e01b8352820152fd5b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a192610290610d1e565b50610dc0565b905191829182610b48565b0390f35b80fd5b50916101a03660031901126101a4576102bf610edd565b8151936102cb85610baf565b358452610180366023190112610209578151936102e785610be0565b60243560098110156104465785526020948560431936011261044657835161030e81610c17565b6001600160a01b0390604435828116810361044e578152878301528660631936011261044257845161033f81610c17565b6064358152858301528460831936011261044257845161035e81610baf565b608435828116810361044e57815260a43588820152606083015260c435801515810361044a5760808301528660e31936011261044257845161039f81610c17565b60e435828116810361044e57815260a08301528461010319360112610442578451906103ca82610baf565b61010435908116810361044a578152610124358782015260c082015285610143193601126104465783516103fd81610c17565b61014435815260e082015261016435801515810361044257610100820152610184358015158103610442576101208201528582015261043c91906112f7565b51908152f35b8580fd5b8480fd5b8680fd5b8780fd5b8284346101a457816003193601126101a457815461046e610c69565b91805193849283526020828185015284518093850152815b8381106104a757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610486565b8284806003193601126101a45760c06020926101fe6104db610b0d565b6104e3610edd565b9283918651906104f282610baf565b6001600160a01b039081168252602435828a0190815290610511615578565b9251168251525188825101528781019060058251525186825101526101f1611047565b8284816003193601126101a4576102006020926101fe610552610edd565b809261055c611047565b878101906007825152511515610100825101526101f1611047565b50346101a45760203660031901126101a457610591610b0d565b90600361059c610edd565b9354036105f5576020610120858560016105d6876105c96105bb610c69565b888082518301019101611113565b50828060a01b0316610e8c565b516105e081610b28565b6105e981610b28565b14928391015251908152f35b602490600985519163100960cb60e01b8352820152fd5b50346101a457816003193601126101a4576003610627610edd565b925403610642576020610160848460e0610180610172610c69565b602490600b84519163100960cb60e01b8352820152fd5b50346101a457816003193601126101a4576003610674610edd565b92540361068e576020610100848481610180610172610c69565b602490600884519163100960cb60e01b8352820152fd5b8284346101a457816003193601126101a4576020906001549051908152f35b50346101a45760203660031901126101a4576106de610b0d565b9060036106e9610edd565b93540361071457602060e0858560016105d6876107076105bb610c69565b50828060a01b0316610dc0565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101a4576102206020926101fe610749610edd565b8092610753611047565b878101906008825152511515610120825101526101f1611047565b8284806003193601126101a45760606020926101fe61078b610b0d565b610793610edd565b9283918651906107a282610baf565b6001600160a01b039081168252602435828a01908152906107c1615578565b9251168251525188825101528781019060028251525186825101526101f1611047565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a19261081a610d1e565b50610e3b565b50346101a457816003193601126101a457600361083b610edd565b9254036108575760206101c08484610120610180610172610c69565b602490600e84519163100960cb60e01b8352820152fd5b8284816003193601126101a45760806020926101fe61088b610edd565b8092610895611047565b87810190600382515251151586825101526101f1611047565b60208484366003190183136102a55782906101fe6108ca610b0d565b6108d2610edd565b9283916108dd611018565b80516001600160a01b03909216909152858101805183905290518151870152610904611047565b91825251858201526112f7565b50829060203660031901126102095760a0906101fe602094610931610b0d565b9061093a610edd565b938492610945611018565b908151906001808a1b03169052888101918251525186825101526101f1611047565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a19261099d610d1e565b50610e8c565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506109de6060926109d8610d1e565b50610d3d565b908080519280516109ee81610b28565b8452602081015115156020850152015190820152f35b8284346101a457816003193601126101a4576020906003549051908152f35b5090346102a55760203660031901126102a557610a3e610b0d565b610a46610edd565b926003835403610ab05760206101408686818787610a656105bb610c69565b506001600160a01b0316906001610a7b83610d3d565b51610a8581610b28565b610a8e81610b28565b03610aa5575061018090610d3d565b015251908152f35b915050928391610a9d565b602490600a86519163100960cb60e01b8352820152fd5b5082906020366003190112610209576020926101fe8392610ae6610edd565b928391610af1611018565b90358151528781019060018251525186825101526101f1611047565b600435906001600160a01b0382168203610b2357565b600080fd5b60021115610b3257565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610b5e81610b28565b845260208101511515602085015201511515910152565b90600182811c92168015610ba5575b6020831014610b8f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b84565b604081019081106001600160401b03821117610bca57604052565b634e487b7160e01b600052604160045260246000fd5b61014081019081106001600160401b03821117610bca57604052565b606081019081106001600160401b03821117610bca57604052565b602081019081106001600160401b03821117610bca57604052565b60e081019081106001600160401b03821117610bca57604052565b6101a081019081106001600160401b03821117610bca57604052565b604051906000600254610c7b81610b75565b808552600191808316908115610cff5750600114610cb9575b5050829003601f01601f191682016001600160401b03811183821017610bca57604052565b600260009081526020935091836000805160206155aa8339815191525b838510610ceb57505050508301013880610c94565b805488860183015293019284908201610cd6565b919250506020925060ff191682850152151560051b8301013880610c94565b60405190610d2b82610bfc565b60006040838281528260208201520152565b90610d46610d1e565b9160018060a01b03166000908082526005602052600160ff604084205416610d6d81610b28565b03610db55760409293508152600560205220600160405191610d8e83610bfc565b60ff8154818116610d9e81610b28565b855260081c16151560208401520154604082015290565b508083526020830152565b90610dc9610d1e565b9160018060a01b03166000908082526006602052600160ff604084205416610df081610b28565b03610db5576040929350815260066020522060ff60405191610e1183610bfc565b54818116610e1e81610b28565b8352818160081c161515602084015260101c161515604082015290565b90610e44610d1e565b9160018060a01b03166000908082526007602052600160ff604084205416610e6b81610b28565b03610db5576040929350815260076020522060ff60405191610e1183610bfc565b90610e95610d1e565b9160018060a01b03166000908082526008602052600160ff604084205416610ebc81610b28565b03610db5576040929350815260086020522060ff60405191610e1183610bfc565b6040519061024082016001600160401b03811183821017610bca57604052816102206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201520152565b604090815191610f8183610be0565b610120836000928382528051610f9681610c17565b84815260208301528051610fa981610c17565b848152818301528051610fbb81610baf565b84815284602082015260608301528360808301528051610fda81610c17565b84815260a08301528051610fed81610baf565b84815284602082015260c08301525161100581610c17565b83815260e0820152826101008201520152565b6040519061102582610baf565b8160405161103281610c17565b6000815281526020611042610f72565b910152565b6040519061105482610baf565b81600081526020611042610f72565b6040519061107082610baf565b600060208360405161108181610baf565b838152838382015281520152565b6040519061109c82610c32565b8160c06000918281528260208201526110b3611063565b60408201528260608201528260808201528260a08201520152565b604051906110db82610c32565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b51908115158203610b2357565b809103906101808212610b2357604080519261112e84610be0565b82516001600160a01b0381168103610b23578452602083015161ffff1981168103610b2357602085015281830151828501526060830151606085015261117660808401611106565b6080850152609f19019060608212610b23578080519261119584610baf565b12610b2357516111a481610baf565b60a0830151815260c0830151602082015281526111c360e08301611106565b602082015260a0830152610160610100918281015160c0850152610120928382015160e08601526101408201519085015201519082015290565b80516001600160a01b03168252602090810151910152565b516009811015610b325790565b6040519060a082016001600160401b03811183821017610bca57604052600060808382815282602082015261125561108f565b60408201528260608201520152565b81516001600160a01b031681526020808301519082015260409182015161ffff19169181019190915260600190565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160c01b031916918101919091526001600160a01b0390911660e08201526101000190565b60405192919061048084016001600160401b03811185821017610bca578060405261132181610c17565b60008152845261132f61108f565b602085015260405161134081610c17565b60008152604085015261135161108f565b606085015260405161136281610baf565b6000815260006020820152608085015261137a61108f565b60a085015261138761108f565b60c085015260405161139881610c17565b6000815260e08501526113a961108f565b6101008501526040516113bb81610baf565b600081526000602082015261012085015260006101408501526000610160850152600061018085015260006101a08501526113f461108f565b6101c08501526114026110ce565b6101e085015261141061108f565b61020085015261141e6110ce565b61022085015261142c61108f565b61024085015260405161143e81610c17565b60008152610260850152611450610d1e565b61028085015260006102a085015260006102c085015260006102e085015261147661108f565b610300850152611484610d1e565b61032085015261149261108f565b6103408501526114a061108f565b6103608501526114ae610d1e565b61038085015260006103a085015260006103c08501526114cc61108f565b6103e08501526114da610d1e565b6104008501526114e861108f565b6104208501526114f661108f565b61044085015261150461108f565b6104608501526003600054036154fc5761152e61151f610c69565b60208082518301019101611113565b9060ff600454166154e3576040513381528151602082015260208201518051916009831015610b32576101206101c0927fb212047171f573087bd7daffa4c27e0281c01018b089f7487c3ab5d443db17d294604084015260018060a01b0360208201515116606084015260408101515160808401526115b5606082015160a08501906111fd565b6080810151151560e084015260a0810151516001600160a01b031661010084015260c08101516115e890838501906111fd565b60e0810151516101608401526101008101511515610180840152015115156101a0820152a1805180159081156154d7575b50156154be5761162c6020820151611215565b6009811015610b3257611b2e57602090810151015184528051336001600160a01b0390911603611b0a5760015b15611af15734611ad8576000602060409360018060a01b0387515116835260068252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557fbbe685d3081b655043fc78e3a46b09bdbbbf947e90eecc1653018a245b84bf56828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c0602086015101526020611738611222565b82516001600160a01b031681528183015161ffff191682820152940151828501524360608501520151608083015260405161177281610c17565b6000815260408301516020015115611a00575061012060405161179481610be0565b60008152600060208201526000604082015260006060820152600060808201526117bc611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526118f482610c4d565b81516001600160401b038111610bca5761190f600254610b75565b601f81116119b8575b50602092601f8211600114611955579281929360009261194a575b50508160011b916000199060031b1c191617600255565b015190503880611933565b601f19821693600260005260206000209160005b8681106119a05750836001959610611987575b505050811b01600255565b015160001960f88460031b161c1916905538808061197c565b91926020600181928685015181550194019201611969565b60026000526119f0906000805160206155aa833981519152601f840160051c810191602085106119f6575b601f0160051c0190615561565b38611918565b90915081906119e3565b9091600080808060018060a01b03855116608086015190828215611acf575bf115611aba574791829052516000918291829182916001600160a01b0316828215611ac6575bf115611aba57600080556000600155611a5f600254610b75565b80611a675750565b601f8111600114611a7a57506000600255565b6002600052611aad90601f0160051c6000805160206155aa833981519152016000805160206155ca833981519152615561565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611a45565b506108fc611a1f565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b6001611b1533610dc0565b51611b1f81610b28565b611b2881610b28565b14611659565b611b3f602082969493960151611215565b6009811015610b3257600103611f275760200151604090810151908301528351336001600160a01b0390911603611f035760015b15611eea576040820151513403611ed15760406000917f84d8dc2cce30744f2e5061e0fe4a8373a1ca4851badf840e0c3e7de022602ebf60208351858152a10152611bc8606084015160408301515190615540565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a06060830151015261012083015160c060608301510152604080611c30611222565b85516001600160a01b0316815260208087015161ffff19169082015260608481015183830152439082015294015191015151016080830152604051611c7481610c17565b6000815260408301516020015115611a005750610120604051611c9681610be0565b6000815260006020820152600060408201526000606082015260006080820152611cbe611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611df682610c4d565b81516001600160401b038111610bca57611e11600254610b75565b601f8111611e94575b50602092601f8211600114611e4b579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611e7c575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201611e5f565b6002600052611ecb906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38611e1a565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6001611f0e33610dc0565b51611f1881610b28565b611f2181610b28565b14611b73565b611f38602082969394960151611215565b6009811015610b325760020361234057602001516060015160808501528051336001600160a01b039091160361231c5760015b1561230357346122ea576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557fbf9010c7a14480e2d678128641f3d3f63f44ac9c3214406ad030f7bfb44147ee60208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015260a0612053611222565b94600180831b03835116865261ffff1960208401511660208701520151828501524360608501520151608083015260405161208d81610c17565b6000815260408301516020015115611a0057506101206040516120af81610be0565b60008152600060208201526000604082015260006060820152600060808201526120d7611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261220f82610c4d565b81516001600160401b038111610bca5761222a600254610b75565b601f81116122ad575b50602092601f8211600114612264579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612295575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201612278565b60026000526122e4906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38612233565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b600161232733610dc0565b5161233181610b28565b61233a81610b28565b14611f6b565b61234d6020820151611215565b6009811015610b32576003036126de57508051336001600160a01b03909116036126c557346126ac57600060806040937f43a545e32e7ae43fe843082985444a746bc01dff92df64050ccf4084efbc94bb60208651858152a10152606081015160c08501515260808101511515602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015260c0612413611222565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161244f81610c17565b6000815260408301516020015115611a00575061012060405161247181610be0565b6000815260006020820152600060408201526000606082015260006080820152612499611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526125d182610c4d565b81516001600160401b038111610bca576125ec600254610b75565b601f811161266f575b50602092601f8211600114612626579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612657575083600195961061198757505050811b01600255565b9192602060018192868501518155019401920161263a565b60026000526126a6906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b386125f5565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b6126eb6020820151611215565b6009811015610b3257600403612aa8576020015160a0015160e085015280516001600160a01b03163303612a8f5734612a7657600060a0604093600180831b0360e088015151168352600660205282858120557f45906bf0ff273d8535d82b0b7f0e187bdfceea83cd0f7d7baa96e6dcdaa2a89e60208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c061010086015101526101006127dd611222565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161281981610c17565b6000815260408301516020015115611a00575061012060405161283b81610be0565b6000815260006020820152600060408201526000606082015260006080820152612863611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261299b82610c4d565b81516001600160401b038111610bca576129b6600254610b75565b601f8111612a39575b50602092601f82116001146129f0579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612a21575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201612a04565b6002600052612a70906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b386129bf565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b612ab86020829693960151611215565b6009811015610b325760050361377d5760c06020809201510151806101208401520180516060860151108061014084015260001461377557515b8061016083015280604086015101610180830152340361375c57610120810151516101809290600190612b2d906001600160a01b0316610e8c565b51612b3781610b28565b612b4081610b28565b03612f6a5760c0600191828060a01b036101208501515116600052600560205260406000208360ff1982541617905582612b86818060a01b036101208701515116610d3d565b51612b9081610b28565b612b9981610b28565b03612f6057612bcc6040612bb9858060a01b036101208801515116610d3d565b01515b6020610120870151015190615540565b838060a01b036101208601515116600052600560205283604060002001557faff498894b871853ab4ce4c86985d1dd3d3443041c5bf21333686bf2052524966020604051858152a1015261014081015115612f5057612c3960608501516020610120840151015190615540565b6101a08201525b6101a08101516101c0820151526080840151151560206101c0830151015260a084015160406101c0830151015260c084015160606101c0830151015260e084015160806101c0830151015261010084015160a06101c0830151015261012084015160c06101c08301510152612cb3611222565b9360018060a01b038151168552602061ffff199101511660208501526101c0810151604085015243606085015201516080830152604051612cf381610c17565b6000815260408301516020015115611a005750610120604051612d1581610be0565b6000815260006020820152600060408201526000606082015260006080820152612d3d611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612e7582610c4d565b81516001600160401b038111610bca57612e90600254610b75565b601f8111612f13575b50602092601f8211600114612eca579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612efb575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201612ede565b6002600052612f4a906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38612e99565b60608401516101a0820152612c40565b612bcc6000612bbc565b61014082015160009160c09115613358576101e084018051782cb7bab9103ab9b2b9103430b9b713ba1037b83a32b21034b760391b905280516020018490528051604090810185905281516060018590528151608001859052815160a00185905281518401859052905161012086015151915160008051602061560a8339815191529290918291613007916001600160a01b039091169083611293565b0390a17f29555fd10803e5fe7058adf9f82d69ac27fa63fe43221059f9d1fdf834b368966020604051858152a1015261304e60608501516020610120840151015190615540565b61020082015152608084015115156020610200830151015260a08401516040610200830151015260c08401516060610200830151015260e08401516080610200830151015261010084015160a0610200830151015261012084015160c061020083015101526130bb611222565b9360018060a01b038151168552602061ffff199101511660208501526102008101516040850152436060850152015160808301526040516130fb81610c17565b6000815260408301516020015115611a00575061012060405161311d81610be0565b6000815260006020820152600060408201526000606082015260006080820152613145611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261327d82610c4d565b81516001600160401b038111610bca57613298600254610b75565b601f811161331b575b50602092601f82116001146132d2579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613303575083600195961061198757505050811b01600255565b919260206001819286850151815501940192016132e6565b6002600052613352906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b386132a1565b610220840180517f5468652062616c616e636520796f752061726520747279696e6720746f207365905280517f7420666f7220746865207573657220697320696e76616c696420616e6420746860209091015280517232bc903430bb32b713ba1037b83a32b21034b760691b60409182015281516060018590528151608001859052815160a00185905281518401859052905161012086015151915160008051602061560a833981519152929091829161341e916001600160a01b039091169083611293565b0390a17fea23cbaf997f6dae92b4cc378d0c2267a895cc733f12ebf21adbb54f8098b7846020604051858152a10152606084015161024082015152608084015115156020610240830151015260a08401516040610240830151015260c08401516060610240830151015260e08401516080610240830151015261010084015160a0610240830151015261012084015160c061024083015101526134bf611222565b9360018060a01b038151168552602061ffff199101511660208501526102408101516040850152436060850152015160808301526040516134ff81610c17565b6000815260408301516020015115611a00575061012060405161352181610be0565b6000815260006020820152600060408201526000606082015260006080820152613549611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261368182610c4d565b81516001600160401b038111610bca5761369c600254610b75565b601f811161371f575b50602092601f82116001146136d6579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613707575083600195961061198757505050811b01600255565b919260206001819286850151815501940192016136ea565b6002600052613756906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b386136a5565b60405163100960cb60e01b8152601f6004820152602490fd5b506000612af2565b61378e602082969493960151611215565b6009811015610b32576006036143e1576020015160e0015161026085015260016137b733610d3d565b80610280870152516137c881610b28565b6137d181610b28565b036143c857346143af576001610280850151516137ed81610b28565b6137f681610b28565b036143a857604061028085015101515b806102a0860152610260850151518181116000146143a35750805b806102c0870152604084015181811160001461439c57505b6102e0860152604083015111613baf579060006101e06040936000805160206155ea83398151915260206102a08901518751908152a17f59cca261a9fe8515f7698ad4368e719f8d8b90f0c345055556c986bd74bcacd760208651858152a10152606081015161030085015152608081015115156020610300860151015260a081015182610300860151015260c08101516060610300860151015260e08101516080610300860151015261010081015160a06103008601510152613901610120820151615515565b60c06103008601510152610300613916611222565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161395281610c17565b6000815260408301516020015115611a00575061012060405161397481610be0565b600081526000602082015260006040820152600060608201526000608082015261399c611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613ad482610c4d565b81516001600160401b038111610bca57613aef600254610b75565b601f8111613b72575b50602092601f8211600114613b29579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613b5a575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201613b3d565b6002600052613ba9906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38613af8565b6101e060019182613bc296949633610e3b565b51613bcc81610b28565b613bd581610b28565b03613f7f577f5504544b37849716b55a2ac9743fcab18b2402bbc736040cf88994b33f2405c06020604051858152a1015260008080806102e0850151818115613f76575b3390f115611aba5733600052600560205260006001604082208281550155613c4b60608401516102e083015190615554565b61036082015152608083015115156020610360830151015260a083015160406103608301510152613c8660c08401516102e083015190615540565b6060610360830151015260e083015160806103608301510152613cad610100840151615515565b60a0610360830151015261012083015160c061036083015101526102e06040613cd4611222565b85516001600160a01b0316815260208087015161ffff1916908201526103608401518282015243606082015294015191015190036080830152604051613d1981610c17565b6000815260408301516020015115611a005750610120604051613d3b81610be0565b6000815260006020820152600060408201526000606082015260006080820152613d63611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613e9b82610c4d565b81516001600160401b038111610bca57613eb6600254610b75565b601f8111613f39575b50602092601f8211600114613ef0579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613f21575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201613f04565b6002600052613f70906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38613ebf565b506108fc613c19565b7f4e7de3588647f4f012eabf7fe65d4a025f38252c417e769aa69d1cf286439a8a6020604051858152a1015233610320820151526102e08101516020610320830151015261ffff196020840151166040610320830151015260008051602061562a833981519152613ffb61032083015160405191829182611264565b0390a1336000908152600760205260408120805462ff00ff191660011790556102e0820151819081908190818115614393575b3390f115611aba573360005260056020526000600160408220828155015561406060608401516102e083015190615554565b61034082015152608083015115156020610340830151015260a08301516040610340830151015261409b60c08401516102e083015190615540565b6060610340830151015260e0830151608061034083015101526140c2610100840151615515565b60a061034083015101526140da610120840151615515565b60c061034083015101526102e060406140f1611222565b85516001600160a01b0316815260208087015161ffff191690820152610340840151828201524360608201529401519101519003608083015260405161413681610c17565b6000815260408301516020015115611a00575061012060405161415881610be0565b6000815260006020820152600060408201526000606082015260006080820152614180611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526142b882610c4d565b81516001600160401b038111610bca576142d3600254610b75565b601f8111614356575b50602092601f821160011461430d579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061433e575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201614321565b600260005261438d906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b386142dc565b506108fc61402e565b9050613839565b613821565b6000613806565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b6143f16020829493940151611215565b6009811015610b3257600703615017575090600161440e33610d3d565b806103808701525161441f81610b28565b61442881610b28565b03614ffe5734614fe55760016103808501515161444481610b28565b61444d81610b28565b03614fde57604061038085015101515b806103a08601526040830151818111600014614fd95750805b6103c08601526040830151116147ec579060006102006040936000805160206155ea83398151915260206103a08901518751908152a17fa8f1448ee5eaf3ab96a088fe4652ed076a0c9985bf7a678068e95557d2f5063760208651858152a1015260608101516103e0850151526080810151151560206103e0860151015260a0810151826103e0860151015260c081015160606103e0860151015260e081015160806103e0860151015261010081015160a06103e0860151015261453e610120820151615515565b60c06103e086015101526103e0614553611222565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161458f81610c17565b6000815260408301516020015115611a0057506101206040516145b181610be0565b60008152600060208201526000604082015260006060820152600060808201526145d9611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261471182610c4d565b81516001600160401b038111610bca5761472c600254610b75565b601f81116147af575b50602092601f8211600114614766579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614797575083600195961061198757505050811b01600255565b9192602060018192868501518155019401920161477a565b60026000526147e6906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38614735565b610200600191826147ff96949633610e3b565b5161480981610b28565b61481281610b28565b03614bbc577fdcfc54f5a68098b75c1d064229d1b19258d12816ef94d6018a8cd3efeda6e4e16020604051858152a1015260008080806103c0850151818115614bb3575b3390f115611aba573360005260056020526000600160408220828155015561488860608401516103c083015190615554565b61044082015152608083015115156020610440830151015260a0830151604061044083015101526148c360c08401516103c083015190615540565b6060610440830151015260e0830151608061044083015101526148ea610100840151615515565b60a0610440830151015261012083015160c061044083015101526103c06040614911611222565b85516001600160a01b0316815260208087015161ffff191690820152610440840151828201524360608201529401519101519003608083015260405161495681610c17565b6000815260408301516020015115611a00575061012060405161497881610be0565b60008152600060208201526000604082015260006060820152600060808201526149a0611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252614ad882610c4d565b81516001600160401b038111610bca57614af3600254610b75565b601f8111614b76575b50602092601f8211600114614b2d579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614b5e575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201614b41565b6002600052614bad906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38614afc565b506108fc614856565b7fa5cb000f7fef2d76fcd1168e98b2502bd150c96df3136996d0cf583f6ec264cc6020604051858152a1015233610400820151526103c08101516020610400830151015261ffff196020840151166040610400830151015260008051602061562a833981519152614c3861040083015160405191829182611264565b0390a1336000908152600760205260408120805462ff00ff191660011790556103c0820151819081908190818115614fd0575b3390f115611aba5733600052600560205260006001604082208281550155614c9d60608401516103c083015190615554565b61042082015152608083015115156020610420830151015260a083015160406104208301510152614cd860c08401516103c083015190615540565b6060610420830151015260e083015160806104208301510152614cff610100840151615515565b60a06104208301510152614d17610120840151615515565b60c061042083015101526103c06040614d2e611222565b85516001600160a01b0316815260208087015161ffff1916908201526104208401518282015243606082015294015191015190036080830152604051614d7381610c17565b6000815260408301516020015115611a005750610120604051614d9581610be0565b6000815260006020820152600060408201526000606082015260006080820152614dbd611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252614ef582610c4d565b81516001600160401b038111610bca57614f10600254610b75565b601f8111614f93575b50602092601f8211600114614f4a579281929360009261194a5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614f7b575083600195961061198757505050811b01600255565b91926020600181928685015181550194019201614f5e565b6002600052614fca906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b38614f19565b506108fc614c6b565b614476565b600061445d565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b6020615024910151611215565b6009811015610b325760081461503b575b50509050565b346154a757336000908152600860209081526040808320805462ff00ff19166001179055805183815290946102209290917f6f5740580847314510b7c1c1a1eb349204138a23cedfcd080e16df4f754f176d9190a10152606081015161046085015152608081015115156020610460860151015260a081015182610460860151015260c08101516060610460860151015260e08101516080610460860151015261010081015160a0610460860151015261012081015160c06104608601510152610460615106611222565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161514281610c17565b60008152604083015160200151156153cf575061012060405161516481610be0565b600081526000602082015260006040820152600060608201526000608082015261518c611063565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526152c482610c4d565b81516001600160401b038111610bca576152df600254610b75565b601f8111615392575b50602092601f821160011461532c5792819293600092615321575b50508160011b916000199060031b1c1916176002555b803880615035565b015190503880615303565b601f19821693600260005260206000209160005b86811061537a5750836001959610615361575b505050811b01600255615319565b015160001960f88460031b161c19169055388080615353565b91926020600181928685015181550194019201615340565b60026000526153c9906000805160206155aa833981519152601f840160051c810191602085106119f657601f0160051c0190615561565b386152e8565b9091600080808060018060a01b0385511660808601519082821561549e575bf115611aba574791829052516000918291829182916001600160a01b0316828215615495575bf115611aba5760008055600060015561542e600254610b75565b8061543a575b50615319565b601f8111600114615452575060006002555b38615434565b600260005261548590601f0160051c6000805160206155aa833981519152016000805160206155ca833981519152615561565b600060208120816002555561544c565b506108fc615414565b506108fc6153ee565b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260146004820152602490fd5b90506001541438611619565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b90600182019182811161552a578210610b2357565b634e487b7160e01b600052601160045260246000fd5b919082019182811161552a578210610b2357565b90810390811161552a5790565b81811061556c575050565b60008155600101615561565b6040519061558582610baf565b8160405161559281610baf565b600081526000602082015281526020611042610f7256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e9835109d8b835c4a9bc404ae4d3376ad99a9231f0da2c04c16034ca895777fffc54ba0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23a164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 24181,
  version: 9,
  views: {},
};
export const _stateSourceMap = {
  2: {
    at: "./index.rsh:299:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./index.rsh:72:37:after expr stmt semicolon",
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
