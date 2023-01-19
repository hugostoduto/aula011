module.exports = (req, res, next) => {
  console.log();
  console.log("Passei no Middlewere Global");
  console.log();
  next();
};
