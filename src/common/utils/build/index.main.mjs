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
          await viewlib.viewMapRef(1, v1518),
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
          await viewlib.viewMapRef(3, v1522),
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
          await viewlib.viewMapRef(0, v1515),
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
    await stdlib.mapRef(map1, v1619),
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
            await stdlib.simMapRef(sim_r, 1, v1746),
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
          await stdlib.simMapSet(sim_r, 1, v1806, null);
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
          const v8290 = v1533;
          const v8291 = v1829.keepGoing;
          if (v8291) {
            const v8292 = v1829.bal;
            const v8294 = v1829.percent;
            const v8295 = v1829.total_amount_claimed;
            const v8296 = v1829.total_rewards_allcoated;
            const v8297 = v1829.total_users_claim;
            const v8298 = v1829.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8303 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v8304 = stdlib.le(await ctc.getBalance(), v8303)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8303);
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
        await stdlib.mapRef(map1, v1746),
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
      await stdlib.mapSet(map1, v1806, null);
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
      const v8290 = v1533;
      const v8291 = v1829.keepGoing;
      if (v8291) {
        const v8292 = v1829.bal;
        const v8294 = v1829.percent;
        const v8295 = v1829.total_amount_claimed;
        const v8296 = v1829.total_rewards_allcoated;
        const v8297 = v1829.total_users_claim;
        const v8298 = v1829.usersNo;
        return;
      } else {
        const v8303 = stdlib.sub(v1533, v1533);
        const v8304 = stdlib.le(await ctc.getBalance(), v8303)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8303);
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
    await stdlib.mapRef(map1, v1562),
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
            await stdlib.simMapRef(sim_r, 1, v1746),
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
          const v8562 = v2232;
          const v8563 = v2283.keepGoing;
          if (v8563) {
            const v8564 = v2283.bal;
            const v8566 = v2283.percent;
            const v8567 = v2283.total_amount_claimed;
            const v8568 = v2283.total_rewards_allcoated;
            const v8569 = v2283.total_users_claim;
            const v8570 = v2283.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8575 = stdlib.sub(v2232, v2232);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v8576 = stdlib.le(await ctc.getBalance(), v8575)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8575);
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
        await stdlib.mapRef(map1, v1746),
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
      const v8562 = v2232;
      const v8563 = v2283.keepGoing;
      if (v8563) {
        const v8564 = v2283.bal;
        const v8566 = v2283.percent;
        const v8567 = v2283.total_amount_claimed;
        const v8568 = v2283.total_rewards_allcoated;
        const v8569 = v2283.total_users_claim;
        const v8570 = v2283.usersNo;
        return;
      } else {
        const v8575 = stdlib.sub(v2232, v2232);
        const v8576 = stdlib.le(await ctc.getBalance(), v8575)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8575);
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
    await stdlib.mapRef(map1, v1597),
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
            await stdlib.simMapRef(sim_r, 1, v1746),
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
          await stdlib.simMapSet(sim_r, 0, v2714, v2715);
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
          const v8834 = v1533;
          const v8835 = v2739.keepGoing;
          if (v8835) {
            const v8836 = v2739.bal;
            const v8838 = v2739.percent;
            const v8839 = v2739.total_amount_claimed;
            const v8840 = v2739.total_rewards_allcoated;
            const v8841 = v2739.total_users_claim;
            const v8842 = v2739.usersNo;
            sim_r.isHalt = false;
          } else {
            const v8847 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v8848 = stdlib.le(await ctc.getBalance(), v8847)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v8847);
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
        await stdlib.mapRef(map1, v1746),
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
      await stdlib.mapSet(map0, v2714, v2715);
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
      const v8834 = v1533;
      const v8835 = v2739.keepGoing;
      if (v8835) {
        const v8836 = v2739.bal;
        const v8838 = v2739.percent;
        const v8839 = v2739.total_amount_claimed;
        const v8840 = v2739.total_rewards_allcoated;
        const v8841 = v2739.total_users_claim;
        const v8842 = v2739.usersNo;
        return;
      } else {
        const v8847 = stdlib.sub(v1533, v1533);
        const v8848 = stdlib.le(await ctc.getBalance(), v8847)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v8847);
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
          const v9106 = v1533;
          const v9107 = v3185.keepGoing;
          if (v9107) {
            const v9108 = v3185.bal;
            const v9110 = v3185.percent;
            const v9111 = v3185.total_amount_claimed;
            const v9112 = v3185.total_rewards_allcoated;
            const v9113 = v3185.total_users_claim;
            const v9114 = v3185.usersNo;
            sim_r.isHalt = false;
          } else {
            const v9119 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v9120 = stdlib.le(await ctc.getBalance(), v9119)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9119);
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
      const v9106 = v1533;
      const v9107 = v3185.keepGoing;
      if (v9107) {
        const v9108 = v3185.bal;
        const v9110 = v3185.percent;
        const v9111 = v3185.total_amount_claimed;
        const v9112 = v3185.total_rewards_allcoated;
        const v9113 = v3185.total_users_claim;
        const v9114 = v3185.usersNo;
        return;
      } else {
        const v9119 = stdlib.sub(v1533, v1533);
        const v9120 = stdlib.le(await ctc.getBalance(), v9119)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v9119);
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
          await stdlib.simMapSet(sim_r, 1, v3616, undefined /* Nothing */);
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
          const v9378 = v1533;
          const v9379 = v3635.keepGoing;
          if (v9379) {
            const v9380 = v3635.bal;
            const v9382 = v3635.percent;
            const v9383 = v3635.total_amount_claimed;
            const v9384 = v3635.total_rewards_allcoated;
            const v9385 = v3635.total_users_claim;
            const v9386 = v3635.usersNo;
            sim_r.isHalt = false;
          } else {
            const v9391 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v9392 = stdlib.le(await ctc.getBalance(), v9391)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9391);
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
      await stdlib.mapSet(map1, v3616, undefined /* Nothing */);
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
      const v9378 = v1533;
      const v9379 = v3635.keepGoing;
      if (v9379) {
        const v9380 = v3635.bal;
        const v9382 = v3635.percent;
        const v9383 = v3635.total_amount_claimed;
        const v9384 = v3635.total_rewards_allcoated;
        const v9385 = v3635.total_users_claim;
        const v9386 = v3635.usersNo;
        return;
      } else {
        const v9391 = stdlib.sub(v1533, v1533);
        const v9392 = stdlib.le(await ctc.getBalance(), v9391)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v9391);
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
            await stdlib.simMapRef(sim_r, 0, v4066),
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
            await stdlib.simMapRef(sim_r, 3, v4066),
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
            await stdlib.simMapSet(sim_r, 0, v4066, v4076);
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
            const v9650 = v3944;
            const v9651 = v4094.keepGoing;
            if (v9651) {
              const v9652 = v4094.bal;
              const v9654 = v4094.percent;
              const v9655 = v4094.total_amount_claimed;
              const v9656 = v4094.total_rewards_allcoated;
              const v9657 = v4094.total_users_claim;
              const v9658 = v4094.usersNo;
              sim_r.isHalt = false;
            } else {
              const v9663 = stdlib.sub(v3944, v3944);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              const v9664 = stdlib.le(await ctc.getBalance(), v9663)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:298:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v9663);
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
              const v9667 = v3944;
              const v9668 = v4114.keepGoing;
              if (v9668) {
                const v9669 = v4114.bal;
                const v9671 = v4114.percent;
                const v9672 = v4114.total_amount_claimed;
                const v9673 = v4114.total_rewards_allcoated;
                const v9674 = v4114.total_users_claim;
                const v9675 = v4114.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9680 = stdlib.sub(v3944, v3944);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v9681 = stdlib.le(await ctc.getBalance(), v9680)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9680);
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
              const v9684 = v3944;
              const v9685 = v4134.keepGoing;
              if (v9685) {
                const v9686 = v4134.bal;
                const v9688 = v4134.percent;
                const v9689 = v4134.total_amount_claimed;
                const v9690 = v4134.total_rewards_allcoated;
                const v9691 = v4134.total_users_claim;
                const v9692 = v4134.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9697 = stdlib.sub(v3944, v3944);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v9698 = stdlib.le(await ctc.getBalance(), v9697)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9697);
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
        await stdlib.mapRef(map0, v4066),
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
        await stdlib.mapRef(map3, v4066),
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
        await stdlib.mapSet(map0, v4066, v4076);
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
        const v9650 = v3944;
        const v9651 = v4094.keepGoing;
        if (v9651) {
          const v9652 = v4094.bal;
          const v9654 = v4094.percent;
          const v9655 = v4094.total_amount_claimed;
          const v9656 = v4094.total_rewards_allcoated;
          const v9657 = v4094.total_users_claim;
          const v9658 = v4094.usersNo;
          return;
        } else {
          const v9663 = stdlib.sub(v3944, v3944);
          const v9664 = stdlib.le(await ctc.getBalance(), v9663)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:298:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v9663);
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
          const v9667 = v3944;
          const v9668 = v4114.keepGoing;
          if (v9668) {
            const v9669 = v4114.bal;
            const v9671 = v4114.percent;
            const v9672 = v4114.total_amount_claimed;
            const v9673 = v4114.total_rewards_allcoated;
            const v9674 = v4114.total_users_claim;
            const v9675 = v4114.usersNo;
            return;
          } else {
            const v9680 = stdlib.sub(v3944, v3944);
            const v9681 = stdlib.le(await ctc.getBalance(), v9680)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9680);
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
          const v9684 = v3944;
          const v9685 = v4134.keepGoing;
          if (v9685) {
            const v9686 = v4134.bal;
            const v9688 = v4134.percent;
            const v9689 = v4134.total_amount_claimed;
            const v9690 = v4134.total_rewards_allcoated;
            const v9691 = v4134.total_users_claim;
            const v9692 = v4134.usersNo;
            return;
          } else {
            const v9697 = stdlib.sub(v3944, v3944);
            const v9698 = stdlib.le(await ctc.getBalance(), v9697)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9697);
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
          await stdlib.mapRef(map1, v1746),
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
        await stdlib.mapSet(map1, v1806, null);
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
          await stdlib.mapRef(map1, v1746),
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
          await stdlib.mapRef(map1, v1746),
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
        await stdlib.mapSet(map0, v2714, v2715);
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
        await stdlib.mapSet(map1, v3616, undefined /* Nothing */);
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
          await stdlib.mapRef(map0, v4066),
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
          await stdlib.mapRef(map3, v4066),
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
          await stdlib.mapSet(map0, v4066, v4076);
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
          await stdlib.mapRef(map0, v1746),
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
            await stdlib.mapRef(map2, v1746),
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
            await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
            await stdlib.mapSet(map2, v1746, null);
            const v4613 = stdlib.sub(v1533, v4577);
            await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
          await stdlib.mapRef(map0, v1746),
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
            await stdlib.mapRef(map2, v1746),
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
            await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
            await stdlib.mapSet(map2, v1746, null);
            const v5121 = stdlib.sub(v1533, v5087);
            await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
        await stdlib.mapSet(map3, v1746, null);
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
    await stdlib.mapRef(map0, v1663),
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
            await stdlib.simMapRef(sim_r, 0, v1746),
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
            const v9956 = v1533;
            const v9957 = v4595.keepGoing;
            if (v9957) {
              const v9958 = v4595.bal;
              const v9960 = v4595.percent;
              const v9961 = v4595.total_amount_claimed;
              const v9962 = v4595.total_rewards_allcoated;
              const v9963 = v4595.total_users_claim;
              const v9964 = v4595.usersNo;
              sim_r.isHalt = false;
            } else {
              const v9969 = stdlib.sub(v1533, v1533);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              const v9970 = stdlib.le(await ctc.getBalance(), v9969)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:298:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v9969);
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
              await stdlib.simMapRef(sim_r, 2, v1746),
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
              await stdlib.simMapSet(sim_r, 0, v1746, undefined /* Nothing */);
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
              const v9973 = v4637;
              const v9974 = v4648.keepGoing;
              if (v9974) {
                const v9975 = v4648.bal;
                const v9977 = v4648.percent;
                const v9978 = v4648.total_amount_claimed;
                const v9979 = v4648.total_rewards_allcoated;
                const v9980 = v4648.total_users_claim;
                const v9981 = v4648.usersNo;
                sim_r.isHalt = false;
              } else {
                const v9986 = stdlib.sub(v4637, v4637);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v9987 = stdlib.le(await ctc.getBalance(), v9986)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v9986);
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
              await stdlib.simMapSet(sim_r, 2, v1746, null);
              const v4613 = stdlib.sub(v1533, v4577);
              sim_r.txns.push({
                kind: "from",
                to: v1746,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(sim_r, 0, v1746, undefined /* Nothing */);
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
              const v9990 = v4613;
              const v9991 = v4625.keepGoing;
              if (v9991) {
                const v9992 = v4625.bal;
                const v9994 = v4625.percent;
                const v9995 = v4625.total_amount_claimed;
                const v9996 = v4625.total_rewards_allcoated;
                const v9997 = v4625.total_users_claim;
                const v9998 = v4625.usersNo;
                sim_r.isHalt = false;
              } else {
                const v10003 = stdlib.sub(v4613, v4613);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v10004 = stdlib.le(await ctc.getBalance(), v10003)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v10003);
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
        await stdlib.mapRef(map0, v1746),
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
        const v9956 = v1533;
        const v9957 = v4595.keepGoing;
        if (v9957) {
          const v9958 = v4595.bal;
          const v9960 = v4595.percent;
          const v9961 = v4595.total_amount_claimed;
          const v9962 = v4595.total_rewards_allcoated;
          const v9963 = v4595.total_users_claim;
          const v9964 = v4595.usersNo;
          return;
        } else {
          const v9969 = stdlib.sub(v1533, v1533);
          const v9970 = stdlib.le(await ctc.getBalance(), v9969)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:298:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v9969);
          return;
        }
      } else {
        const v4597 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v1746),
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
          await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
          const v9973 = v4637;
          const v9974 = v4648.keepGoing;
          if (v9974) {
            const v9975 = v4648.bal;
            const v9977 = v4648.percent;
            const v9978 = v4648.total_amount_claimed;
            const v9979 = v4648.total_rewards_allcoated;
            const v9980 = v4648.total_users_claim;
            const v9981 = v4648.usersNo;
            return;
          } else {
            const v9986 = stdlib.sub(v4637, v4637);
            const v9987 = stdlib.le(await ctc.getBalance(), v9986)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v9986);
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
          await stdlib.mapSet(map2, v1746, null);
          const v4613 = stdlib.sub(v1533, v4577);
          await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
          const v9990 = v4613;
          const v9991 = v4625.keepGoing;
          if (v9991) {
            const v9992 = v4625.bal;
            const v9994 = v4625.percent;
            const v9995 = v4625.total_amount_claimed;
            const v9996 = v4625.total_rewards_allcoated;
            const v9997 = v4625.total_users_claim;
            const v9998 = v4625.usersNo;
            return;
          } else {
            const v10003 = stdlib.sub(v4613, v4613);
            const v10004 = stdlib.le(await ctc.getBalance(), v10003)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10003);
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
    await stdlib.mapRef(map0, v1651),
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
            await stdlib.simMapRef(sim_r, 0, v1746),
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
            const v10262 = v1533;
            const v10263 = v5104.keepGoing;
            if (v10263) {
              const v10264 = v5104.bal;
              const v10266 = v5104.percent;
              const v10267 = v5104.total_amount_claimed;
              const v10268 = v5104.total_rewards_allcoated;
              const v10269 = v5104.total_users_claim;
              const v10270 = v5104.usersNo;
              sim_r.isHalt = false;
            } else {
              const v10275 = stdlib.sub(v1533, v1533);
              sim_r.txns.push({
                kind: "from",
                to: v1509,
                tok: undefined /* Nothing */,
              });
              const v10276 = stdlib.le(await ctc.getBalance(), v10275)
                ? stdlib.checkedBigNumberify(
                    "./index.rsh:298:29:application",
                    stdlib.UInt_max,
                    "0"
                  )
                : stdlib.safeSub(await ctc.getBalance(), v10275);
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
              await stdlib.simMapRef(sim_r, 2, v1746),
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
              await stdlib.simMapSet(sim_r, 0, v1746, undefined /* Nothing */);
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
              const v10279 = v5144;
              const v10280 = v5155.keepGoing;
              if (v10280) {
                const v10281 = v5155.bal;
                const v10283 = v5155.percent;
                const v10284 = v5155.total_amount_claimed;
                const v10285 = v5155.total_rewards_allcoated;
                const v10286 = v5155.total_users_claim;
                const v10287 = v5155.usersNo;
                sim_r.isHalt = false;
              } else {
                const v10292 = stdlib.sub(v5144, v5144);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v10293 = stdlib.le(await ctc.getBalance(), v10292)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v10292);
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
              await stdlib.simMapSet(sim_r, 2, v1746, null);
              const v5121 = stdlib.sub(v1533, v5087);
              sim_r.txns.push({
                kind: "from",
                to: v1746,
                tok: undefined /* Nothing */,
              });
              await stdlib.simMapSet(sim_r, 0, v1746, undefined /* Nothing */);
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
              const v10296 = v5121;
              const v10297 = v5133.keepGoing;
              if (v10297) {
                const v10298 = v5133.bal;
                const v10300 = v5133.percent;
                const v10301 = v5133.total_amount_claimed;
                const v10302 = v5133.total_rewards_allcoated;
                const v10303 = v5133.total_users_claim;
                const v10304 = v5133.usersNo;
                sim_r.isHalt = false;
              } else {
                const v10309 = stdlib.sub(v5121, v5121);
                sim_r.txns.push({
                  kind: "from",
                  to: v1509,
                  tok: undefined /* Nothing */,
                });
                const v10310 = stdlib.le(await ctc.getBalance(), v10309)
                  ? stdlib.checkedBigNumberify(
                      "./index.rsh:298:29:application",
                      stdlib.UInt_max,
                      "0"
                    )
                  : stdlib.safeSub(await ctc.getBalance(), v10309);
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
        await stdlib.mapRef(map0, v1746),
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
        const v10262 = v1533;
        const v10263 = v5104.keepGoing;
        if (v10263) {
          const v10264 = v5104.bal;
          const v10266 = v5104.percent;
          const v10267 = v5104.total_amount_claimed;
          const v10268 = v5104.total_rewards_allcoated;
          const v10269 = v5104.total_users_claim;
          const v10270 = v5104.usersNo;
          return;
        } else {
          const v10275 = stdlib.sub(v1533, v1533);
          const v10276 = stdlib.le(await ctc.getBalance(), v10275)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:298:29:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v10275);
          return;
        }
      } else {
        const v5106 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v1746),
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
          await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
          const v10279 = v5144;
          const v10280 = v5155.keepGoing;
          if (v10280) {
            const v10281 = v5155.bal;
            const v10283 = v5155.percent;
            const v10284 = v5155.total_amount_claimed;
            const v10285 = v5155.total_rewards_allcoated;
            const v10286 = v5155.total_users_claim;
            const v10287 = v5155.usersNo;
            return;
          } else {
            const v10292 = stdlib.sub(v5144, v5144);
            const v10293 = stdlib.le(await ctc.getBalance(), v10292)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10292);
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
          await stdlib.mapSet(map2, v1746, null);
          const v5121 = stdlib.sub(v1533, v5087);
          await stdlib.mapSet(map0, v1746, undefined /* Nothing */);
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
          const v10296 = v5121;
          const v10297 = v5133.keepGoing;
          if (v10297) {
            const v10298 = v5133.bal;
            const v10300 = v5133.percent;
            const v10301 = v5133.total_amount_claimed;
            const v10302 = v5133.total_rewards_allcoated;
            const v10303 = v5133.total_users_claim;
            const v10304 = v5133.usersNo;
            return;
          } else {
            const v10309 = stdlib.sub(v5121, v5121);
            const v10310 = stdlib.le(await ctc.getBalance(), v10309)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10309);
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
          await stdlib.simMapSet(sim_r, 3, v1746, null);
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
          const v10568 = v1533;
          const v10569 = v5600.keepGoing;
          if (v10569) {
            const v10570 = v5600.bal;
            const v10572 = v5600.percent;
            const v10573 = v5600.total_amount_claimed;
            const v10574 = v5600.total_rewards_allcoated;
            const v10575 = v5600.total_users_claim;
            const v10576 = v5600.usersNo;
            sim_r.isHalt = false;
          } else {
            const v10581 = stdlib.sub(v1533, v1533);
            sim_r.txns.push({
              kind: "from",
              to: v1509,
              tok: undefined /* Nothing */,
            });
            const v10582 = stdlib.le(await ctc.getBalance(), v10581)
              ? stdlib.checkedBigNumberify(
                  "./index.rsh:298:29:application",
                  stdlib.UInt_max,
                  "0"
                )
              : stdlib.safeSub(await ctc.getBalance(), v10581);
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
      await stdlib.mapSet(map3, v1746, null);
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
      const v10568 = v1533;
      const v10569 = v5600.keepGoing;
      if (v10569) {
        const v10570 = v5600.bal;
        const v10572 = v5600.percent;
        const v10573 = v5600.total_amount_claimed;
        const v10574 = v5600.total_rewards_allcoated;
        const v10575 = v5600.total_users_claim;
        const v10576 = v5600.usersNo;
        return;
      } else {
        const v10581 = stdlib.sub(v1533, v1533);
        const v10582 = stdlib.le(await ctc.getBalance(), v10581)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:298:29:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v10581);
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
      `Info_balance()uint64`,
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
      `Info_balance()uint64`,
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
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAZAAEDCAkoAgyC8pPBBO2Q+9cHjauungmr57KfC4rj9+cMv9K3tgiU0tzBB7eyq8IH/JShtAWQtK3MAprF5fcDvfnirgTihqTmAqaYkZQC8onMwAKFuozUAQUmBQEAAQEABP/eeSgEm8hUUCI1ADEYQQvsKmRJIls1ASVbNQIxGSMSQQAKMQAoIQevZkILuTYaABdJQQIQIjUEIzUGSSEIDEABAUkhCQxAAIlJIQoMQABNSSELDEAAMEkhDAxAABQhDBJEKjX/gAEINP9QIQWvUEIB6yELEkQ2GgE1/4ABBDT/UCWvUEIB1iEKEkQ2GgE2GgJQNf+AAQU0/1BCAcBJIQ0MQAAVIQ0SRDYaATX/gAEGNP9QMgNQQgGkIQkSRDQBJBJEKGQpZFBJNQNXcAg1B0ILI0khDgxAADZJIQ8MQAAZIQ8SRDQBJBJEKGQpZFBJNQNXeAg1B0IK/CEOEkQ2GgE2GgJQNf+AAQI0/1BCAU5JIRAMQAAUIRASRCo1/4ABAzT/UCEFr1BCATMhCBJENAEkEkQoZClkUEk1A1dgCDUHQgqySSERDEAAbUkhEgxAADNJIRMMQAATIRMSRDYaATX/KDT/UCWvUEIA8iESEkQ0ASQSRChkKWRQSTUDVz4INQdCCnFJIRQMQAATIRQSRDYaATX/KTT/UDIDUEIAvyEREkQ0ASQSRChkKWRQSTUDV2gINQdCCj5JIRUMQAA6SSEWDEAAFCEWEkQqNf+AAQc0/1AhBa9QQgCEIRUSRDQBJBJENhoBiAoyVwkBIlUjEhZRBwg1B0IJ/UkhFwxAACMhFxJENAEkEkQiNhoBiAoLVwAJSTX/I1s0/yJVTRY1B0IJ04G7rrmbARJENAEkEkQ2GgGICeVXCwEiVSMSFlEHCDUHQgmwNhoCFzUENhoDNhoBF0khBgxACDAhBhJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpXACA1/1cgHjX+gT5bNf2BRls1/FdOARc1+1dPETX6gWBbNfmBaFs1+IFwWzX3gXhbNfZJNQU19YAE/FtmxzT1ULA09SJVSYEEDEAGS0mBBgxAAyRJgQcMQAGoSSUMQABFJRJEMQAoMQCICTQpXAtmgAgAAAAAAAAV07AqNQc0/zT+NPwWNPsWUQcIUDT6UDT5FlA0+BZQNPcWUDT2FlAyBjT9QgfYSDEAiAj0VwAJSTX0IlUjEkQiNPRJNfIjWzTyIlVNNfM0/TTzNP008w1NNfI08zT9D0EAPys08xZQsIAJAAAAAAAAE+IAsCg1BzT/NP40/BY0+xZRBwhQNPpQNPkWUDT4FlA09xZQNPYjCBZQMgY0/UIHZTEAiAiCVwoBIlUjEkEAYIAJAAAAAAAAFA8BsCk1B7EisgE08rIII7IQMQCyB7MxACgxAIgIUSEEr1wAZjT/NP40/DTyCRY0+xZRBwhQNPpQNPk08ggWUDT4FlA09yMIFlA09hZQMgY0/TTyCUIG9oAJAAAAAAAAE/YBsCk1BycEMQA08hZQNP5QULAxACgxAIgH9ClcCmaxIrIBNPKyCCOyEDEAsgezMQAoMQCIB9ghBK9cAGY0/zT+NPw08gkWNPsWUQcIUDT6UDT5NPIIFlA0+BZQNPcjCBZQNPYjCBZQMgY0/TTyCUIGe0g09VcBCDX0MQCIB5BXAAlJNfMiVSMSRDT0FzXyIjTzSTXwI1s08CJVTTXxNPI08TTyNPENTTXwNP008DT9NPANTTXvNPE0/Q9BAD8rNPEWULCACQAAAAAAABHkALAoNQc0/zT+NPwWNPsWUQcIUDT6UDT5FlA0+BZQNPcWUDT2IwgWUDIGNP1CBfAxAIgHDVcKASJVIxJBAGCACQAAAAAAABITAbApNQexIrIBNO+yCCOyEDEAsgezMQAoMQCIBtwhBK9cAGY0/zT+NPw07wkWNPsWUQcIUDT6UDT5NO8IFlA0+BZQNPcjCBZQNPYWUDIGNP007wlCBYGACQAAAAAAABH5AbApNQcnBDEANO8WUDT+UFCwMQAoMQCIBn8pXApmsSKyATTvsggjshAxALIHszEAKDEAiAZjIQSvXABmNP80/jT8NO8JFjT7FlEHCFA0+lA0+TTvCBZQNPgWUDT3IwgWUDT2IwgWUDIGNP007wlCBQZJIRgMQALJSDT1VwEoNfQ09IEgW0k18zT8DTXyIjTzNPJNNfE0/TTxCDXwNPGIBgc09FcAIDXvNO+IBexXCwEiVSMSQQBuNO8oNO+IBdopIjTviAXTVwAJSTXuI1s07iJVTTTzCBZQXABmgAkAAAAAAAAP7QGwKTUHNPJBAAo0/DTzCDXuQgAENPw17jT/NP407hY0+xZRBwhQNPpQNPkWUDT4FlA09xZQNPYWUDIGNPBCBFI08kEBDYDMARABneRZb3VyIHVzZXIgaGFzbid0IG9wdGVkIGluAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTvULCACQAAAAAAABABALAoNQc0/zT+NPw08wgWNPsWUQcIUDT6UDT5FlA0+BZQNPcWUDT2FlAyBjTwQgNAgMwBEAGd5FRoZSBiYWxhbmNlIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBmb3IgdGhlIHVzZXIgaXMgaW52YWxpZCBhbmQgdGhleSBoYXZlbid0IG9wdGVkIGluAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANO9QsIAJAAAAAAAAEBUAsCg1BzT/NP40/BY0+xZRBwhQNPpQNPkWUDT4FlA09xZQNPYWUDIGNPBCAjZINPVXASA19DEANP8SRDT0KDT0iANCKFwJZoAIAAAAAAAADiWwKjUHNP80/jT8FjT7FlEHCFA0+lA0+RZQNPgWUDT3FlA09hZQMgY0/UIB5kkhBgxAAKxJJAxAAD1INP8xABJEgAgAAAAAAAAMZLAqNQc0/zT+NPwWNPsWUQcIUDT6UDT5FlA0+BZQNPcWUDT2FlAyBjT9QgGcSDT1VwEoNfQxADT/EjEAiAKsVwkBIlUjEhFENPRXACAoNPRXACCIApUpNPRXIAhQXABmgAgAAAAAAAAKpLAqNQc0/zT+NPwWNPsWUQcIUDT6UDT5FlA0+BZQNPcWUDT2FlAyBjT9QgEzSSMMQABhSDT1VwEINfQ09Bc18zEANP8SMQCIAjhXCQEiVSMSEUQ084gCOYAIAAAAAAAACNywKjUHNP80/jT8NPMIFjT7FlEHCFA0+lA0+RZQNPgWUDT3FlA09hZQMgY0/TTzCEIAzEg09VcBIDX0MQA0/xIxAIgB3FcJASJVIxIRRDT0KDT0iAHLKVwJZoAIAAAAAAAABxewKjUHNP80/jT8FjT7FlEHCFA0+lA0+RZQNPgWUDT3FlA09hZQMgY0/UIAbyISRIGgjQaIAZYiNAESRDQESSISTDQCEhFESTUFNf+ABK215JQ0/1CwMQA0/4A6AAAAAAAAAAABAAAAAAAAAAUAAAAAAAAAZAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIGIkIAADX/Nf41/TX8Nfs0/VcIARdBAHE0/SJbNfo0/VcIARc1+TT9VwkRNfg0/YEaWzX3NP2BIls19jT9gSpbNfU0/YEyWzX0NPs0/FA0/xZQNPoWUDT5FlEHCFA0+FA09xZQNPYWUDT1FlA09BZQKEsBVwB/ZylLAVd/AWdIJDUBMgY1AkIATbEisgE0/7III7IQNPuyB7MyCmAyCngJNP9JCQk1+rEisgE0+rIII7IQNPuyB7NCAAAxGSEYEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 12,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 11,
  warnings: [],
};
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T11","name":"v10647","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_editUserReward0_98","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_98","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_setReward0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_User_claim0_98","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_98","type":"bool"},{"internalType":"bool","name":"_User_optin0_98","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1815","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2268","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2724","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3172","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3621","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4077","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4097","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4117","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4580","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4601","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4627","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5090","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5110","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5135","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5587","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"insufficient","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"notify","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v10602","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10607","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10612","type":"address"},{"internalType":"uint256","name":"v10613","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10622","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10627","type":"address"},{"internalType":"uint256","name":"v10628","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10583","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10588","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10591","type":"address"}],"name":"Info_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10633","type":"uint256"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claimAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_editUserReward0_98","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_98","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_98","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"_Admin_setReward0_98","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_User_claim0_98","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_98","type":"bool"},{"internalType":"bool","name":"_User_optin0_98","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v10652","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62005e7538819003918201601f19168301916001600160401b038311848410176200059a57808492604094855283398101031262000705576020604051916200004c836200070a565b80518352015161ffff198116810362000705576020820152600080554360035560405161024081016001600160401b038111828210176200059a57600091610220916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015201526040519081606081011060018060401b036060840111176200059a576060820160405262000130606083016200070a565b60006060830152600060808301526060820182526200014e62000726565b60208301526200015d62000756565b604083015260ff60045416620006ec577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a180518015908115620006df575b5015620006c65734620006ad5760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152604051918260a081011060018060401b0360a0850111176200059a5760409060a08401825260008452600060208501526200026c62000756565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b036020830111176200059a576020818101604090815260008352830151015115620005b057506040516001600160401b036101408201908111908211176200059a5780610140610120920160405260008152600060208201526000604082015260006060820152600060808201526200032362000726565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c08101518284015260e0810151610140840152610100810151610160840152015161018082015261018081526101a0810181811060018060401b038211176200059a5760405280516001600160401b0381116200059a576200048a600254620007a8565b601f81116200054c575b50602091601f8211600114620004e257918192600092620004d6575b50508160011b916000199060031b1c1916176002555b6040516156569081620007ff8239f35b015190503880620004b0565b601f19821692600260005260206000209160005b858110620005335750836001951062000519575b505050811b01600255620004c6565b015160001960f88460031b161c191690553880806200050a565b91926020600181928685015181550194019201620004f6565b6002600052620005889060008051602062005e55833981519152601f840160051c810191602085106200058f575b601f0160051c0190620007e5565b3862000494565b90915081906200057a565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620006a3575bf1156200068d576000809392819392829347809352511682821562000699575bf1156200068d576000805560006001556200060c600254620007a8565b806200061a575b50620004c6565b601f811160011462000634575060006002555b3862000613565b60026000526200067c90601f0160051c60008051602062005e55833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620007e5565b60006020812081600255556200062d565b6040513d6000823e3d90fd5b506108fc620005ef565b506108fc620005cf565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b90506001541438620001ba565b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200059a57604052565b6040519062000735826200070a565b600060208360405162000748816200070a565b838152838382015281520152565b6040519060e082016001600160401b038111838210176200059a576040528160c06000918281528260208201526200078d62000726565b60408201528260608201528260808201528260a08201520152565b90600182811c92168015620007da575b6020831014620007c457565b634e487b7160e01b600052602260045260246000fd5b91607f1691620007b8565b818110620007f1575050565b60008155600101620007e556fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610ac75780630bda465714610a235780631e93b0f114610a0457806336e56ea5146109a35780633702d0ce146109675780634ab9f8b314610911578063523df4f6146108ae57806355c42a951461086e578063672422c71461082057806374623535146107e457806374f16ec91461076e5780637a2b54dc1461072b5780637f0595e2146106c457806383230757146106a5578063883513de1461065957806392cf8bd51461060c578063a579242414610577578063a5928cf514610534578063a8d65f20146104be578063ab53f2c614610452578063c568a57c146102a8578063c5d86f6f1461025a578063cd6637a81461020d578063e0590c9a146101a85763f33c0dce1461013c5750610010565b346101a457816003193601126101a4576003610156610edd565b92540361018d5760206101a08484610100610180610172610c69565b8680825183010191016110a1565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b5080fd5b5082906020366003190112610209576020926101fe6101e0926101c9610edd565b9283916101d4611018565b90358151528781019060068251525160e0825101526101f1611047565b9182525187820152611328565b015115159051908152f35b8280fd5b50346101a457816003193601126101a4576003610228610edd565b925403610243576020610180848460c0610180610172610c69565b602490600c84519163100960cb60e01b8352820152fd5b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a192610290610d1e565b50610dc0565b905191829182610b48565b0390f35b80fd5b50916101a03660031901126101a4576102bf610edd565b8151936102cb85610baf565b358452610180366023190112610209578151936102e785610be0565b60243560098110156104465785526020948560431936011261044657835161030e81610c17565b6001600160a01b0390604435828116810361044e578152878301528660631936011261044257845161033f81610c17565b6064358152858301528460831936011261044257845161035e81610baf565b608435828116810361044e57815260a43588820152606083015260c435801515810361044a5760808301528660e31936011261044257845161039f81610c17565b60e435828116810361044e57815260a08301528461010319360112610442578451906103ca82610baf565b61010435908116810361044a578152610124358782015260c082015285610143193601126104465783516103fd81610c17565b61014435815260e082015261016435801515810361044257610100820152610184358015158103610442576101208201528582015261043c9190611328565b51908152f35b8580fd5b8480fd5b8680fd5b8780fd5b8284346101a457816003193601126101a457815461046e610c69565b91805193849283526020828185015284518093850152815b8381106104a757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610486565b8284806003193601126101a45760c06020926101fe6104db610b0d565b6104e3610edd565b9283918651906104f282610baf565b6001600160a01b039081168252602435828a0190815290610511611063565b9251168251525188825101528781019060058251525186825101526101f1611047565b8284816003193601126101a4576102006020926101fe610552610edd565b809261055c611047565b878101906007825152511515610100825101526101f1611047565b50346101a45760203660031901126101a457610591610b0d565b90600361059c610edd565b9354036105f5576020610120858560016105d6876105c96105bb610c69565b8880825183010191016110a1565b50828060a01b0316610e8c565b516105e081610b28565b6105e981610b28565b14928391015251908152f35b602490600985519163100960cb60e01b8352820152fd5b50346101a457816003193601126101a4576003610627610edd565b925403610642576020610160848460e0610180610172610c69565b602490600b84519163100960cb60e01b8352820152fd5b50346101a457816003193601126101a4576003610674610edd565b92540361068e576020610100848481610180610172610c69565b602490600884519163100960cb60e01b8352820152fd5b8284346101a457816003193601126101a4576020906001549051908152f35b50346101a45760203660031901126101a4576106de610b0d565b9060036106e9610edd565b93540361071457602060e0858560016105d6876107076105bb610c69565b50828060a01b0316610dc0565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101a4576102206020926101fe610749610edd565b8092610753611047565b878101906008825152511515610120825101526101f1611047565b8284806003193601126101a45760606020926101fe61078b610b0d565b610793610edd565b9283918651906107a282610baf565b6001600160a01b039081168252602435828a01908152906107c1611063565b9251168251525188825101528781019060028251525186825101526101f1611047565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a19261081a610d1e565b50610e3b565b50346101a457816003193601126101a457600361083b610edd565b9254036108575760206101c08484610120610180610172610c69565b602490600e84519163100960cb60e01b8352820152fd5b8284816003193601126101a45760806020926101fe61088b610edd565b8092610895611047565b87810190600382515251151586825101526101f1611047565b60208484366003190183136102a55782906101fe6108ca610b0d565b6108d2610edd565b9283916108dd611018565b80516001600160a01b03909216909152858101805183905290518151870152610904611047565b9182525185820152611328565b50829060203660031901126102095760a0906101fe602094610931610b0d565b9061093a610edd565b938492610945611018565b908151906001808a1b03169052888101918251525186825101526101f1611047565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506102966102a19261099d610d1e565b50610e8c565b508290346102095760203660031901126102095735916001600160a01b03831683036102a557506109de6060926109d8610d1e565b50610d3d565b908080519280516109ee81610b28565b8452602081015115156020850152015190820152f35b8284346101a457816003193601126101a4576020906003549051908152f35b5090346102a55760203660031901126102a557610a3e610b0d565b610a46610edd565b926003835403610ab05760206101408686818787610a656105bb610c69565b506001600160a01b0316906001610a7b83610d3d565b51610a8581610b28565b610a8e81610b28565b03610aa5575061018090610d3d565b015251908152f35b915050928391610a9d565b602490600a86519163100960cb60e01b8352820152fd5b5082906020366003190112610209576020926101fe8392610ae6610edd565b928391610af1611018565b90358151528781019060018251525186825101526101f1611047565b600435906001600160a01b0382168203610b2357565b600080fd5b60021115610b3257565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610b5e81610b28565b845260208101511515602085015201511515910152565b90600182811c92168015610ba5575b6020831014610b8f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b84565b604081019081106001600160401b03821117610bca57604052565b634e487b7160e01b600052604160045260246000fd5b61014081019081106001600160401b03821117610bca57604052565b606081019081106001600160401b03821117610bca57604052565b602081019081106001600160401b03821117610bca57604052565b60e081019081106001600160401b03821117610bca57604052565b6101a081019081106001600160401b03821117610bca57604052565b604051906000600254610c7b81610b75565b808552600191808316908115610cff5750600114610cb9575b5050829003601f01601f191682016001600160401b03811183821017610bca57604052565b600260009081526020935091836000805160206155aa8339815191525b838510610ceb57505050508301013880610c94565b805488860183015293019284908201610cd6565b919250506020925060ff191682850152151560051b8301013880610c94565b60405190610d2b82610bfc565b60006040838281528260208201520152565b90610d46610d1e565b9160018060a01b03166000908082526005602052600160ff604084205416610d6d81610b28565b03610db55760409293508152600560205220600160405191610d8e83610bfc565b60ff8154818116610d9e81610b28565b855260081c16151560208401520154604082015290565b508083526020830152565b90610dc9610d1e565b9160018060a01b03166000908082526006602052600160ff604084205416610df081610b28565b03610db5576040929350815260066020522060ff60405191610e1183610bfc565b54818116610e1e81610b28565b8352818160081c161515602084015260101c161515604082015290565b90610e44610d1e565b9160018060a01b03166000908082526007602052600160ff604084205416610e6b81610b28565b03610db5576040929350815260076020522060ff60405191610e1183610bfc565b90610e95610d1e565b9160018060a01b03166000908082526008602052600160ff604084205416610ebc81610b28565b03610db5576040929350815260086020522060ff60405191610e1183610bfc565b6040519061024082016001600160401b03811183821017610bca57604052816102206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201520152565b604090815191610f8183610be0565b610120836000928382528051610f9681610c17565b84815260208301528051610fa981610c17565b848152818301528051610fbb81610baf565b84815284602082015260608301528360808301528051610fda81610c17565b84815260a08301528051610fed81610baf565b84815284602082015260c08301525161100581610c17565b83815260e0820152826101008201520152565b6040519061102582610baf565b8160405161103281610c17565b6000815281526020611042610f72565b910152565b6040519061105482610baf565b81600081526020611042610f72565b6040519061107082610baf565b8160405161107d81610baf565b600081526000602082015281526020611042610f72565b51908115158203610b2357565b809103906101808212610b235760408051926110bc84610be0565b82516001600160a01b0381168103610b23578452602083015161ffff1981168103610b2357602085015281830151828501526060830151606085015261110460808401611094565b6080850152609f19019060608212610b23578080519261112384610baf565b12610b23575161113281610baf565b60a0830151815260c08301516020820152815261115160e08301611094565b602082015260a0830152610160610100918281015160c0850152610120928382015160e08601526101408201519085015201519082015290565b6040519061119882610baf565b60006020836040516111a981610baf565b838152838382015281520152565b604051906111c482610c32565b8160c06000918281528260208201526111db61118b565b60408201528260608201528260808201528260a08201520152565b6040519061120382610c32565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b80516001600160a01b03168252602090810151910152565b516009811015610b325790565b6040519060a082016001600160401b03811183821017610bca5760405260006080838281528260208201526112866111b7565b60408201528260608201520152565b81516001600160a01b031681526020808301519082015260409182015161ffff19169181019190915260600190565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160c01b031916918101919091526001600160a01b0390911660e08201526101000190565b60405192919061048084016001600160401b03811185821017610bca578060405261135281610c17565b6000815284526113606111b7565b602085015260405161137181610c17565b6000815260408501526113826111b7565b606085015260405161139381610baf565b600081526000602082015260808501526113ab6111b7565b60a08501526113b86111b7565b60c08501526040516113c981610c17565b6000815260e08501526113da6111b7565b6101008501526040516113ec81610baf565b600081526000602082015261012085015260006101408501526000610160850152600061018085015260006101a08501526114256111b7565b6101c08501526114336111f6565b6101e08501526114416111b7565b61020085015261144f6111f6565b61022085015261145d6111b7565b61024085015260405161146f81610c17565b60008152610260850152611481610d1e565b61028085015260006102a085015260006102c085015260006102e08501526114a76111b7565b6103008501526114b5610d1e565b6103208501526114c36111b7565b6103408501526114d16111b7565b6103608501526114df610d1e565b61038085015260006103a085015260006103c08501526114fd6111b7565b6103e085015261150b610d1e565b6104008501526115196111b7565b6104208501526115276111b7565b6104408501526115356111b7565b61046085015260ff6004541661552d576040513381528151602082015260208201518051916009831015610b32576101206101c0927fb212047171f573087bd7daffa4c27e0281c01018b089f7487c3ab5d443db17d294604084015260018060a01b0360208201515116606084015260408101515160808401526115c1606082015160a085019061122e565b6080810151151560e084015260a0810151516001600160a01b031661010084015260c08101516115f4908385019061122e565b60e0810151516101608401526101008101511515610180840152015115156101a0820152a16003600054036155145761163d61162e610c69565b602080825183010191016110a1565b9080518015908115615508575b50156154ef5761165d6020820151611246565b6009811015610b3257611b5f57602090810151015184528051336001600160a01b0390911603611b3b5760015b15611b225734611b09576000602060409360018060a01b0387515116835260068252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557fbbe685d3081b655043fc78e3a46b09bdbbbf947e90eecc1653018a245b84bf56828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c0602086015101526020611769611253565b82516001600160a01b031681528183015161ffff19168282015294015182850152436060850152015160808301526040516117a381610c17565b6000815260408301516020015115611a3157506101206040516117c581610be0565b60008152600060208201526000604082015260006060820152600060808201526117ed61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261192582610c4d565b81516001600160401b038111610bca57611940600254610b75565b601f81116119e9575b50602092601f8211600114611986579281929360009261197b575b50508160011b916000199060031b1c191617600255565b015190503880611964565b601f19821693600260005260206000209160005b8681106119d157508360019596106119b8575b505050811b01600255565b015160001960f88460031b161c191690553880806119ad565b9192602060018192868501518155019401920161199a565b6002600052611a21906000805160206155aa833981519152601f840160051c81019160208510611a27575b601f0160051c0190615592565b38611949565b9091508190611a14565b9091600080808060018060a01b03855116608086015190828215611b00575bf115611aeb574791829052516000918291829182916001600160a01b0316828215611af7575bf115611aeb57600080556000600155611a90600254610b75565b80611a985750565b601f8111600114611aab57506000600255565b6002600052611ade90601f0160051c6000805160206155aa833981519152016000805160206155ca833981519152615592565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611a76565b506108fc611a50565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b6001611b4633610dc0565b51611b5081610b28565b611b5981610b28565b1461168a565b611b70602082969493960151611246565b6009811015610b3257600103611f585760200151604090810151908301528351336001600160a01b0390911603611f345760015b15611f1b576040820151513403611f025760406000917f84d8dc2cce30744f2e5061e0fe4a8373a1ca4851badf840e0c3e7de022602ebf60208351858152a10152611bf9606084015160408301515190615571565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a06060830151015261012083015160c060608301510152604080611c61611253565b85516001600160a01b0316815260208087015161ffff19169082015260608481015183830152439082015294015191015151016080830152604051611ca581610c17565b6000815260408301516020015115611a315750610120604051611cc781610be0565b6000815260006020820152600060408201526000606082015260006080820152611cef61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611e2782610c4d565b81516001600160401b038111610bca57611e42600254610b75565b601f8111611ec5575b50602092601f8211600114611e7c579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611ead57508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201611e90565b6002600052611efc906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38611e4b565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6001611f3f33610dc0565b51611f4981610b28565b611f5281610b28565b14611ba4565b611f69602082969394960151611246565b6009811015610b325760020361237157602001516060015160808501528051336001600160a01b039091160361234d5760015b15612334573461231b576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557fbf9010c7a14480e2d678128641f3d3f63f44ac9c3214406ad030f7bfb44147ee60208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015260a0612084611253565b94600180831b03835116865261ffff196020840151166020870152015182850152436060850152015160808301526040516120be81610c17565b6000815260408301516020015115611a3157506101206040516120e081610be0565b600081526000602082015260006040820152600060608201526000608082015261210861118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261224082610c4d565b81516001600160401b038111610bca5761225b600254610b75565b601f81116122de575b50602092601f8211600114612295579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106122c657508360019596106119b857505050811b01600255565b919260206001819286850151815501940192016122a9565b6002600052612315906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38612264565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b600161235833610dc0565b5161236281610b28565b61236b81610b28565b14611f9c565b61237e6020820151611246565b6009811015610b325760030361270f57508051336001600160a01b03909116036126f657346126dd57600060806040937f43a545e32e7ae43fe843082985444a746bc01dff92df64050ccf4084efbc94bb60208651858152a10152606081015160c08501515260808101511515602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015260c0612444611253565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161248081610c17565b6000815260408301516020015115611a3157506101206040516124a281610be0565b60008152600060208201526000604082015260006060820152600060808201526124ca61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261260282610c4d565b81516001600160401b038111610bca5761261d600254610b75565b601f81116126a0575b50602092601f8211600114612657579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061268857508360019596106119b857505050811b01600255565b9192602060018192868501518155019401920161266b565b60026000526126d7906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38612626565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b61271c6020820151611246565b6009811015610b3257600403612ad9576020015160a0015160e085015280516001600160a01b03163303612ac05734612aa757600060a0604093600180831b0360e088015151168352600660205282858120557f45906bf0ff273d8535d82b0b7f0e187bdfceea83cd0f7d7baa96e6dcdaa2a89e60208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c0610100860151015261010061280e611253565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161284a81610c17565b6000815260408301516020015115611a31575061012060405161286c81610be0565b600081526000602082015260006040820152600060608201526000608082015261289461118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526129cc82610c4d565b81516001600160401b038111610bca576129e7600254610b75565b601f8111612a6a575b50602092601f8211600114612a21579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612a5257508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201612a35565b6002600052612aa1906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b386129f0565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b612ae96020829693960151611246565b6009811015610b32576005036137ae5760c0602080920151015180610120840152018051606086015110806101408401526000146137a657515b8061016083015280604086015101610180830152340361378d57610120810151516101809290600190612b5e906001600160a01b0316610e8c565b51612b6881610b28565b612b7181610b28565b03612f9b5760c0600191828060a01b036101208501515116600052600560205260406000208360ff1982541617905582612bb7818060a01b036101208701515116610d3d565b51612bc181610b28565b612bca81610b28565b03612f9157612bfd6040612bea858060a01b036101208801515116610d3d565b01515b6020610120870151015190615571565b838060a01b036101208601515116600052600560205283604060002001557faff498894b871853ab4ce4c86985d1dd3d3443041c5bf21333686bf2052524966020604051858152a1015261014081015115612f8157612c6a60608501516020610120840151015190615571565b6101a08201525b6101a08101516101c0820151526080840151151560206101c0830151015260a084015160406101c0830151015260c084015160606101c0830151015260e084015160806101c0830151015261010084015160a06101c0830151015261012084015160c06101c08301510152612ce4611253565b9360018060a01b038151168552602061ffff199101511660208501526101c0810151604085015243606085015201516080830152604051612d2481610c17565b6000815260408301516020015115611a315750610120604051612d4681610be0565b6000815260006020820152600060408201526000606082015260006080820152612d6e61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612ea682610c4d565b81516001600160401b038111610bca57612ec1600254610b75565b601f8111612f44575b50602092601f8211600114612efb579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612f2c57508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201612f0f565b6002600052612f7b906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38612eca565b60608401516101a0820152612c71565b612bfd6000612bed565b61014082015160009160c09115613389576101e084018051782cb7bab9103ab9b2b9103430b9b713ba1037b83a32b21034b760391b905280516020018490528051604090810185905281516060018590528151608001859052815160a00185905281518401859052905161012086015151915160008051602061560a8339815191529290918291613038916001600160a01b0390911690836112c4565b0390a17f29555fd10803e5fe7058adf9f82d69ac27fa63fe43221059f9d1fdf834b368966020604051858152a1015261307f60608501516020610120840151015190615571565b61020082015152608084015115156020610200830151015260a08401516040610200830151015260c08401516060610200830151015260e08401516080610200830151015261010084015160a0610200830151015261012084015160c061020083015101526130ec611253565b9360018060a01b038151168552602061ffff1991015116602085015261020081015160408501524360608501520151608083015260405161312c81610c17565b6000815260408301516020015115611a31575061012060405161314e81610be0565b600081526000602082015260006040820152600060608201526000608082015261317661118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526132ae82610c4d565b81516001600160401b038111610bca576132c9600254610b75565b601f811161334c575b50602092601f8211600114613303579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061333457508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201613317565b6002600052613383906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b386132d2565b610220840180517f5468652062616c616e636520796f752061726520747279696e6720746f207365905280517f7420666f7220746865207573657220697320696e76616c696420616e6420746860209091015280517232bc903430bb32b713ba1037b83a32b21034b760691b60409182015281516060018590528151608001859052815160a00185905281518401859052905161012086015151915160008051602061560a833981519152929091829161344f916001600160a01b0390911690836112c4565b0390a17fea23cbaf997f6dae92b4cc378d0c2267a895cc733f12ebf21adbb54f8098b7846020604051858152a10152606084015161024082015152608084015115156020610240830151015260a08401516040610240830151015260c08401516060610240830151015260e08401516080610240830151015261010084015160a0610240830151015261012084015160c061024083015101526134f0611253565b9360018060a01b038151168552602061ffff1991015116602085015261024081015160408501524360608501520151608083015260405161353081610c17565b6000815260408301516020015115611a31575061012060405161355281610be0565b600081526000602082015260006040820152600060608201526000608082015261357a61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526136b282610c4d565b81516001600160401b038111610bca576136cd600254610b75565b601f8111613750575b50602092601f8211600114613707579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061373857508360019596106119b857505050811b01600255565b9192602060018192868501518155019401920161371b565b6002600052613787906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b386136d6565b60405163100960cb60e01b8152601f6004820152602490fd5b506000612b23565b6137bf602082969493960151611246565b6009811015610b3257600603614412576020015160e0015161026085015260016137e833610d3d565b80610280870152516137f981610b28565b61380281610b28565b036143f957346143e05760016102808501515161381e81610b28565b61382781610b28565b036143d957604061028085015101515b806102a0860152610260850151518181116000146143d45750805b806102c087015260408401518181116000146143cd57505b6102e0860152604083015111613be0579060006101e06040936000805160206155ea83398151915260206102a08901518751908152a17f59cca261a9fe8515f7698ad4368e719f8d8b90f0c345055556c986bd74bcacd760208651858152a10152606081015161030085015152608081015115156020610300860151015260a081015182610300860151015260c08101516060610300860151015260e08101516080610300860151015261010081015160a06103008601510152613932610120820151615546565b60c06103008601510152610300613947611253565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161398381610c17565b6000815260408301516020015115611a3157506101206040516139a581610be0565b60008152600060208201526000604082015260006060820152600060808201526139cd61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613b0582610c4d565b81516001600160401b038111610bca57613b20600254610b75565b601f8111613ba3575b50602092601f8211600114613b5a579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613b8b57508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201613b6e565b6002600052613bda906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38613b29565b6101e060019182613bf396949633610e3b565b51613bfd81610b28565b613c0681610b28565b03613fb0577f5504544b37849716b55a2ac9743fcab18b2402bbc736040cf88994b33f2405c06020604051858152a1015260008080806102e0850151818115613fa7575b3390f115611aeb5733600052600560205260006001604082208281550155613c7c60608401516102e083015190615585565b61036082015152608083015115156020610360830151015260a083015160406103608301510152613cb760c08401516102e083015190615571565b6060610360830151015260e083015160806103608301510152613cde610100840151615546565b60a0610360830151015261012083015160c061036083015101526102e06040613d05611253565b85516001600160a01b0316815260208087015161ffff1916908201526103608401518282015243606082015294015191015190036080830152604051613d4a81610c17565b6000815260408301516020015115611a315750610120604051613d6c81610be0565b6000815260006020820152600060408201526000606082015260006080820152613d9461118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613ecc82610c4d565b81516001600160401b038111610bca57613ee7600254610b75565b601f8111613f6a575b50602092601f8211600114613f21579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613f5257508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201613f35565b6002600052613fa1906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38613ef0565b506108fc613c4a565b7f4e7de3588647f4f012eabf7fe65d4a025f38252c417e769aa69d1cf286439a8a6020604051858152a1015233610320820151526102e08101516020610320830151015261ffff196020840151166040610320830151015260008051602061562a83398151915261402c61032083015160405191829182611295565b0390a1336000908152600760205260408120805462ff00ff191660011790556102e08201518190819081908181156143c4575b3390f115611aeb573360005260056020526000600160408220828155015561409160608401516102e083015190615585565b61034082015152608083015115156020610340830151015260a0830151604061034083015101526140cc60c08401516102e083015190615571565b6060610340830151015260e0830151608061034083015101526140f3610100840151615546565b60a0610340830151015261410b610120840151615546565b60c061034083015101526102e06040614122611253565b85516001600160a01b0316815260208087015161ffff191690820152610340840151828201524360608201529401519101519003608083015260405161416781610c17565b6000815260408301516020015115611a31575061012060405161418981610be0565b60008152600060208201526000604082015260006060820152600060808201526141b161118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526142e982610c4d565b81516001600160401b038111610bca57614304600254610b75565b601f8111614387575b50602092601f821160011461433e579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061436f57508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201614352565b60026000526143be906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b3861430d565b506108fc61405f565b905061386a565b613852565b6000613837565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b6144226020829493940151611246565b6009811015610b3257600703615048575090600161443f33610d3d565b806103808701525161445081610b28565b61445981610b28565b0361502f57346150165760016103808501515161447581610b28565b61447e81610b28565b0361500f57604061038085015101515b806103a0860152604083015181811160001461500a5750805b6103c086015260408301511161481d579060006102006040936000805160206155ea83398151915260206103a08901518751908152a17fa8f1448ee5eaf3ab96a088fe4652ed076a0c9985bf7a678068e95557d2f5063760208651858152a1015260608101516103e0850151526080810151151560206103e0860151015260a0810151826103e0860151015260c081015160606103e0860151015260e081015160806103e0860151015261010081015160a06103e0860151015261456f610120820151615546565b60c06103e086015101526103e0614584611253565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516145c081610c17565b6000815260408301516020015115611a3157506101206040516145e281610be0565b600081526000602082015260006040820152600060608201526000608082015261460a61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261474282610c4d565b81516001600160401b038111610bca5761475d600254610b75565b601f81116147e0575b50602092601f8211600114614797579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106147c857508360019596106119b857505050811b01600255565b919260206001819286850151815501940192016147ab565b6002600052614817906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38614766565b6102006001918261483096949633610e3b565b5161483a81610b28565b61484381610b28565b03614bed577fdcfc54f5a68098b75c1d064229d1b19258d12816ef94d6018a8cd3efeda6e4e16020604051858152a1015260008080806103c0850151818115614be4575b3390f115611aeb57336000526005602052600060016040822082815501556148b960608401516103c083015190615585565b61044082015152608083015115156020610440830151015260a0830151604061044083015101526148f460c08401516103c083015190615571565b6060610440830151015260e08301516080610440830151015261491b610100840151615546565b60a0610440830151015261012083015160c061044083015101526103c06040614942611253565b85516001600160a01b0316815260208087015161ffff191690820152610440840151828201524360608201529401519101519003608083015260405161498781610c17565b6000815260408301516020015115611a3157506101206040516149a981610be0565b60008152600060208201526000604082015260006060820152600060808201526149d161118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252614b0982610c4d565b81516001600160401b038111610bca57614b24600254610b75565b601f8111614ba7575b50602092601f8211600114614b5e579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614b8f57508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201614b72565b6002600052614bde906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38614b2d565b506108fc614887565b7fa5cb000f7fef2d76fcd1168e98b2502bd150c96df3136996d0cf583f6ec264cc6020604051858152a1015233610400820151526103c08101516020610400830151015261ffff196020840151166040610400830151015260008051602061562a833981519152614c6961040083015160405191829182611295565b0390a1336000908152600760205260408120805462ff00ff191660011790556103c0820151819081908190818115615001575b3390f115611aeb5733600052600560205260006001604082208281550155614cce60608401516103c083015190615585565b61042082015152608083015115156020610420830151015260a083015160406104208301510152614d0960c08401516103c083015190615571565b6060610420830151015260e083015160806104208301510152614d30610100840151615546565b60a06104208301510152614d48610120840151615546565b60c061042083015101526103c06040614d5f611253565b85516001600160a01b0316815260208087015161ffff1916908201526104208401518282015243606082015294015191015190036080830152604051614da481610c17565b6000815260408301516020015115611a315750610120604051614dc681610be0565b6000815260006020820152600060408201526000606082015260006080820152614dee61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252614f2682610c4d565b81516001600160401b038111610bca57614f41600254610b75565b601f8111614fc4575b50602092601f8211600114614f7b579281929360009261197b5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614fac57508360019596106119b857505050811b01600255565b91926020600181928685015181550194019201614f8f565b6002600052614ffb906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38614f4a565b506108fc614c9c565b6144a7565b600061448e565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b6020615055910151611246565b6009811015610b325760081461506c575b50509050565b346154d857336000908152600860209081526040808320805462ff00ff19166001179055805183815290946102209290917f6f5740580847314510b7c1c1a1eb349204138a23cedfcd080e16df4f754f176d9190a10152606081015161046085015152608081015115156020610460860151015260a081015182610460860151015260c08101516060610460860151015260e08101516080610460860151015261010081015160a0610460860151015261012081015160c06104608601510152610460615137611253565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161517381610c17565b6000815260408301516020015115615400575061012060405161519581610be0565b60008152600060208201526000604082015260006060820152600060808201526151bd61118b565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526152f582610c4d565b81516001600160401b038111610bca57615310600254610b75565b601f81116153c3575b50602092601f821160011461535d5792819293600092615352575b50508160011b916000199060031b1c1916176002555b803880615066565b015190503880615334565b601f19821693600260005260206000209160005b8681106153ab5750836001959610615392575b505050811b0160025561534a565b015160001960f88460031b161c19169055388080615384565b91926020600181928685015181550194019201615371565b60026000526153fa906000805160206155aa833981519152601f840160051c81019160208510611a2757601f0160051c0190615592565b38615319565b9091600080808060018060a01b038551166080860151908282156154cf575bf115611aeb574791829052516000918291829182916001600160a01b03168282156154c6575bf115611aeb5760008055600060015561545f600254610b75565b8061546b575b5061534a565b601f8111600114615483575060006002555b38615465565b60026000526154b690601f0160051c6000805160206155aa833981519152016000805160206155ca833981519152615592565b600060208120816002555561547d565b506108fc615445565b506108fc61541f565b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260146004820152602490fd5b9050600154143861164a565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b90600182019182811161555b578210610b2357565b634e487b7160e01b600052601160045260246000fd5b919082019182811161555b578210610b2357565b90810390811161555b5790565b81811061559d575050565b6000815560010161559256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e9835109d8b835c4a9bc404ae4d3376ad99a9231f0da2c04c16034ca895777fffc54ba0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23a164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
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
