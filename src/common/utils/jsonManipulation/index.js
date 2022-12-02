// const fs = require("fs");
import fs from "fs";
import user from "./data/user.json" assert { type: "json" };
// users in JSON file for simplicity, store in a db for production applications
// import f from "/src/utils/jsonManipulation/data/user.json";
let users = user;
export const usersRepo = {
    getAll: () => users.assets,
    // getById: (id: string | number) =>
    // users.assets.find((x: any) => x.id.toString() === id.toString()),
    // find: (x: () => any) => users.assets.find(x),
    createAll,
    //   update,
    //   delete: _delete,
};
function createAll(user) {
    // generate new user id
    // set date created and updated
    saveData(user);
}
// function update() {
//   // update and save
//   saveData();
// }
// prefixed with underscore '_' because 'delete' is a reserved word in javascript
// function _delete(id) {
//   // filter out deleted user and save
//   users = users.filter((x) => x.id.toString() !== id.toString());
//   saveData();
// }
// private helper functions
function saveData(user = users) {
    try {
        fs.writeFileSync("data/user.json", JSON.stringify(user, null, 4));
    }
    catch (error) {
        console.error(error);
        console.trace();
    }
}
