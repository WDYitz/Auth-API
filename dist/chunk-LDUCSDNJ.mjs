import {
  db
} from "./chunk-2MWAYLTS.mjs";

// src/controllers/user-list.ts
var list = async (req, res) => {
  let users = await db.user.findMany();
  let list2 = [];
  for (let i in users) {
    list2.push(users[i].email);
  }
  res.json({ users: list2 });
};

export {
  list
};
