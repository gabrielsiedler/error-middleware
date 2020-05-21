<p align="center">
  <img src="./em.png">
</p>

# Error Middleware for Express

![build status](https://img.shields.io/circleci/project/github/gabrielsiedler/error-middleware.svg 'Build status')
[![Coverage Status](https://coveralls.io/repos/github/gabrielsiedler/error-middleware/badge.svg?branch=master)](https://coveralls.io/github/gabrielsiedler/error-middleware?branch=master)

This package handles errors on the express code and returns it with a fixed pattern, without leaks. It works with syncronous and asyncronous route functions.

## Installation

`npm install error-middleware`<br/>
or<br/>
`yarn add error-middleware`

---

## Error Types

Currently the middleware has exposed the following error types:

- `BadRequestError`
- `ForbiddenError`
- `NotFoundError`
- `UnauthorizedError`
- `Validation Error`

But you can also use

- `CustomError`

## Error response format

The consumer will receive a JSON object with `code`, `type` and `error` as folows:

```
{
  code: <error code>,
  type: <error type>,
  error: <error message>
}
```

## Example of expected responses

<table style="width: 100%">
  <tr>
    <th>Code</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>
      <pre lang="js"><code>throw new BadRequestError('User "id" is malformed.')</code></pre>
    </td>
    <td>
      <pre lang="json"><code>
{
  "code": 400,
  "type": "BadRequest",
  "error": "User 'id' is malformed."
}</code></pre>
    </td>
  </tr>
  <tr>
    <td><pre lang="js"><code>
throw new ValidationError({
  name: 'Name is too short.',
  email: 'Invalid email.'
})</code></pre></td>
    <td><pre lang="json"><code>
{
  "code": 400,
  "type": "Validation",
  "error": {
    "name": "Name is too short.",
    "email": "Invalid email."
  }
}</code></pre></td>
  </tr>
  <tr>
    <td><pre lang="js"><code>
throw new CustomError(
  'Not acceptable headers',
  406,
  'NotAcceptable'
)</code></pre></td>
    <td><pre lang="json"><code>
{
  "code": 406,
  "type": "NotAcceptable",
  "error": "Not acceptable headers"
}</code></pre></td>
  </tr>
  <tr>
    <td><pre lang="js"><code>
throw new Error(`Invalid user ${userId}`)
</code></pre></td>
    <td><pre lang="json"><code>
{
  "code": 500,
  "type": "InternalError",
  "error": "An internal error occurred."
}</code></pre></td>
  </tr>
</table>

## How to use

- src/**index.js**<br />
  _Where you declare all your high level routes. The middleware should be last to be able to catch all errors._

  ```js
  import errorMiddleware from 'error-middleware'
  import routes from './routes'

  router.use(routes)

  router.use(errorMiddleware)
  ```

- src/**routes.js**

  ```js
  import { BadRequestError, ValidationError, NotFoundError } from 'error-middleware/errors'

  router.put('/user/:id', (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    const idRegex = /^\d{4}$/
    if (!idRegex.test(id)) {
      throw new BadRequestError(`User 'id' is malformed.`)
    }

    if (!validate(name, email)) {
      throw new ValidationError({
        name: 'Name should be at least 4 characters long',
        email: 'Invalid email',
      })
    }

    // your update logic goes here
    // { ... }

    res.sendStatus(200)
  })

  router.get('/error', (req, res) => {
    // an endpoint that simulates a pure error being thrown. It will be translated to InternalError and all its content will not be leaked.
    throw new Error('Internal error that should not be leaked.')
  })

  // If no matches found, return 404
  router.use((req, res) => {
    throw new NotFoundError()
  })
  ```

---

Check [examples](./examples/simple-server) for more
