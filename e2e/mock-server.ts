import express from 'express';
import { checkSchema, ValidationParamSchema } from '../node_modules/express-validator/check';
import { NotFoundError } from '../src/errors';
import { errorMiddleware, validationMiddleware } from '../src/middlewares';

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

app.use('/with-schema', validationMiddleware(checkSchema(schema)), (req, res, next) => {
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
