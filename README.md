# Error Middleware for Express

This package handles errors on the express code and returns it with a fixed pattern. Preventing any leaks from your code.

## Usage

on your `RoutesFile`:
```js
import { BadRequestError, ValidationError, NotFoundError } = from 'error-middleware/errors';

router.post('/example/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (/d{4}/.test(id)) {
    throw new BadRequestError(`User 'id' is malformed.`);
  }

  if (!validate(name, email)) {
    throw new ValidationError({
      name: 'Name should be at least 4 characters long',
      email: 'Invalid email',
    });
  }

  // success path
  res.sendStatus(201);
});

// If no matches found, return 404
router.use((req, res) => {
  throw new NotFoundError();
});
```

On your `app` file (express definitions) add it after the other routes:
```js
import errorMiddleware from 'error-middleware';

router.use(RoutersFile);

router.use(errorMiddleware);
```

---

You can also integrate with `express-validator`:
```js
import ValidationMiddleware from 'error-middleware/middlewares';
import { checkSchema } from 'express-validator/check';

const validationSchema = { ... };

router.post('/example/:id', validationMiddleware(checkSchema(validationSchema)), (req, res) => {
  ...
});

```
