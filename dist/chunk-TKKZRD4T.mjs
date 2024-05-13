import {
  db
} from "./chunk-2MWAYLTS.mjs";

// src/controllers/register.ts
var register = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const hasUser = await db.user.findUnique({ where: { email } });
    if (!hasUser) {
      const newUser = await db.user.create({ data: { email, password } });
      res.status(201);
      res.json({ id: newUser.id });
    }
    return res.json({ error: "Este e-mail j\xE1 est\xE1 sendo utilizado" });
  }
};

export {
  register
};
