exports.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, SECRET_KEY, (err, authData) => {
      if (err) {
        return res.sendStatus(403);
      }

      // O token é válido, adiciona o objeto de autenticação ao request
      req.authData = authData;
      next();
    });
  } else {
    res.sendStatus(403);
  }
};
