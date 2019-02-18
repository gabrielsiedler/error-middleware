import express from 'express';
import errorMiddleware from '../src';
import { NotFoundError } from '../src/errors';

const app = express();
const port = '3476';

app.get('/ping', (req, res, next) => {
  res.send('pong');
});

app.use('/internal-error', (req, res) => {
  throw new Error('field required');
});

app.use('*', (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorMiddleware);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`E2E test listening on ${port}`);
});
