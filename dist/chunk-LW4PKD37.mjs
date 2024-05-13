import {
  db
} from "./chunk-2MWAYLTS.mjs";

// src/controllers/login.ts
var login = async (req, res) => {
  let { email, password } = req.body;
  if (email && password) {
    let user = await db.user.findUnique({ where: { email, password } });
    if (user) {
      res.json({ status: true });
      return;
    }
  }
  res.json({ status: false });
};

export {
  login
};
