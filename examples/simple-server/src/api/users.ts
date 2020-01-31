/* istanbul ignore file */

import { BadRequestError, ValidationError } from 'error-middleware/errors'
import express from 'express'
import { requireUser } from '../middlewares/authorization'
import { validate } from '../services/validation'

const router = express.Router()

router.post('/', (req, res) => {
  const { name, email } = req.body

  const validationErrors = validate(name, email)
  if (validationErrors) {
    throw new ValidationError(validationErrors)
  }

  // your create logic should go here
  // { ... }

  res.sendStatus(201)
})

router.put('/:id', requireUser, (req, res) => {
  const { id } = req.params

  const idRegex = /^\d{4}$/
  if (!idRegex.test(id)) {
    throw new BadRequestError(`User 'id' is malformed.`)
  }

  // your update logic should go here
  // { ... }

  res.sendStatus(200)
})

export { router as users }
