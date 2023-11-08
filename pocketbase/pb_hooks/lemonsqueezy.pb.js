function validate(next) {
  /** @param c {echo.Context} */
  return (c) => {
    const secret = "test";
    
    const info = $apis.requestInfo(c);
    const signature = info.headers["x_signature"] || "";
    if (signature.length === 0) {
      throw new NotFoundError();
    }

    const payload = readerToString(c.request().body);
    const hash = $security.hs256(payload, secret);
    if (!$security.equal(hash, signature)) {
      throw new NotFoundError();
    }

    return next(c);
  };
}

routerAdd("GET", "/api/hello", (c) => {
  let name = c.pathParam("name");
  return c.json(200, { message: "Hey " + name });
});

routerAdd(
  "POST",
  "/api/lemonsqueezy",
  (c) => {
    return c.json(200, {});
  },
  validate,
);
