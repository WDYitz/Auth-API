import {
  db
} from "./chunk-2MWAYLTS.mjs";

// src/controllers/register.ts
var register = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const hasUser = await db.user.findUnique({ where: { email } });
    if (!hasUser) {
      let newUser = await db.user.create({ data: { email, password } });
      res.status(201);
      res.json({ id: newUser.id });
    }
    res.json({ error: "E-mail j\xE1 existe" });
  }
  res.json({ error: "E-mail e senha s\xE3o obrigat\xF3rios" });
};

export {
  register
};
