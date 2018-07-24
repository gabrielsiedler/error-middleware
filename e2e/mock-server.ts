import express from 'express';
import { ValidationParamSchema } from '../node_modules/express-validator/check';
import errorMiddleware from '../src';
import { NotFoundError } from '../src/errors';
import { validationMiddleware } from '../src/middlewares';

const app = express();
const port = '3476';

app.get('/ping', (req, res, next) => {
  res.send('pong');
});

app.use('/internal-error', (req, res) => {
  throw new Error('field required');
});

const schema: Record<string, ValidationParamSchema> = {
  id: {
    errorMessage: 'ID is wrong',
    in: 'query',
    isInt: true,
    toInt: true,
  },
};

app.use('/with-schema', validationMiddleware(schema), (req, res, next) => {
  res.sendStatus(200);
});

app.use('*', (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorMiddleware);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`E2E test listening on ${port}`);
});
