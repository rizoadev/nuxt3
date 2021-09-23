const logs = (req, res, next) => {
  console.log("log middleware:", req.url);
  next();
};

export { logs as default };
