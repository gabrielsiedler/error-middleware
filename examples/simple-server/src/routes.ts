/* istanbul ignore file */

import { NotFoundError } from 'error-middleware/errors'
import express from 'express'
import asyncHandler from 'express-async-handler'
import { error } from './api/error'
import { users } from './api/users'

const router = express.Router()

router.use('/users', asyncHandler(users))
router.use('/error', asyncHandler(error))

// If no matches found, return 404
router.use((req, res) => {
  throw new NotFoundError()
})

export { router as routes }
