import {
  login
} from "./chunk-XPZPOOFU.mjs";
import {
  ping
} from "./chunk-5OD6E4UJ.mjs";
import {
  register
} from "./chunk-TKKZRD4T.mjs";
import {
  list
} from "./chunk-LDUCSDNJ.mjs";

// src/routes/main.ts
import { Router } from "express";
var router = Router();
router.get("/ping", ping);
router.post("/register", register);
router.post("/login", login);
router.get("/list", list);

export {
  router
};
