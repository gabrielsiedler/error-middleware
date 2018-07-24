# Error Middleware for Express
![build status](https://img.shields.io/circleci/project/github/gabrielsiedler/express-error-handler.svg "Build status")
![code coverage](https://coveralls.io/repos/github/gabrielsiedler/express-error-handler/badge.svg?branch=master "Code Coverage")

This package handles errors on the express code and returns it with a fixed pattern. It works for syncronous and asyncronous routes.

## Installation

`npm i -S error-middleware`

## Example

### - Files

- app.js

  ```js
  import errorMiddleware from 'error-middleware';
  import myRoutes from './routes';

  router.use(myRoutes);

  router.use(errorMiddleware);
  ```

- routes.js

  ```js
  import { BadRequestError, ValidationError, NotFoundError } from 'error-middleware/errors';

  router.put('/example/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (/d{4}/.test(id)) {
      throw new BadRequestError(`User 'id' is malformed.`);
    }

    if (!validate(name, email)) {
      throw new ValidationError({
        name: 'Name should be at least 4 characters long',
        email: 'Invalid email',
      });
    }

    // { ... }
    
    res.sendStatus(200);
  });

  router.get('/error', (req, res) => {
    throw new Error('Some error.');
  });

  // If no matches found, return 404
  router.use((req, res) => {
    throw new NotFoundError();
  });
  ```

### - Example API behavior

- PUT to `/example/23`

  ```
  {
    code: 400,
    type: "BadRequest",
    error: "User 'id' is malformed."
  }
  ```

- PUT to `/example/2323` with `{ name: '', email: 'someemail.com' }`

  ```
  {
    code: 400,
    type: "Validation",
    error: {
      name: "Name should be at least 4 characters long",
      email: "Invalid email"
    }
  }
  ```

- GET to `/error`

  ```
  {
    code: 500,
    type: "InternalError",
    error: "An error occurred. Please try again later."
  }
  ```

- GET to `/somethingelse`

  ```
  {
    code: 404,
    type: "NotFound",
    error: "Not found."
  }
  ```

---

## Integration

You can also integrate with `express-validator`:

```js
import { validationMiddleware } from 'error-middleware/middlewares';

const validationSchema = { ... };

router.post('/example/:id', validationMiddleware(validationSchema), (req, res) => {
  ...
});

```
