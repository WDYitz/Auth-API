import {
  router
} from "./chunk-KU5RYGQQ.mjs";
import "./chunk-XPZPOOFU.mjs";
import "./chunk-5OD6E4UJ.mjs";
import "./chunk-SETLDDY3.mjs";
import "./chunk-LDUCSDNJ.mjs";
import "./chunk-2MWAYLTS.mjs";

// src/server.ts
import cors from "cors";
import "dotenv/config";
import express, { urlencoded } from "express";
import helmet from "helmet";
var server = express();
server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable("x-powered-by");
server.use(express.json());
server.use(router);
var port = process.env.PORT || 3e3;
server.listen(port, () => {
  console.log(`\u{1F680} Server running on http://localhost:${port}`);
});
