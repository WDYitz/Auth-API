import {
  db
} from "./chunk-2MWAYLTS.mjs";

// src/controllers/login.ts
var login = async (req, res) => {
  let { email, password } = req.body;
  if (email && password) {
    let user = await db.user.findUnique({ where: { email, password } });
    if (user) {
      res.json({ user, status: true });
      return;
    }
    res.json({ message: "E-mail ou senha inv\xE1lidos", status: false });
  }
  res.json({ message: "E-mail e senha s\xE3o obrigat\xF3rios", status: false });
};

export {
  login
};
