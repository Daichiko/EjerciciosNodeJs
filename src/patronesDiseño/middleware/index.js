function runMiddlewares(req, res, middlewares) {
  let index = 0;
  const next = () => {
    if (index < middlewares.length) {
      const middleware = middlewares[index++];
      middleware(req, res, next);
    }
  };
  next();
}

const middleware1 = (req, res, next) => {
  console.log("Middleware 1: autenticacion de la peticion");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("Middleware 1: procesamiento de la peticion");
  next();
};

const middleware3 = (req, res, next) => {
  console.log("Middleware 1: finalizacion de la peticion");
  next();
};

const req = {};
const res = {};

runMiddlewares(req, res, [middleware1, middleware2, middleware3]);
