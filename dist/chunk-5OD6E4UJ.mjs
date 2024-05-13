// src/controllers/ping.ts
var ping = (req, res) => {
  res.json({ pong: true });
};

export {
  ping
};
