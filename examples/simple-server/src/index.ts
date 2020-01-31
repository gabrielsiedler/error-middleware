/* istanbul ignore file */

import bodyParser from 'body-parser'
import errorMiddleware from 'error-middleware'
import { NotFoundError } from 'error-middleware/errors'
import express from 'express'
import morgan from 'morgan'
import { routes } from './routes'

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use(routes)

app.use((req, res) => {
  // If it reached here without an error, the endpoint was not found
  throw new NotFoundError()
})

// If it reached here with an error, the library will take care of it
app.use(errorMiddleware)

app.listen(3000, 'localhost', () => {
  // tslint:disable-next-line:no-console
  console.info(`Server started at [ http://localhost:3000 ]`)
})
