/* istanbul ignore file */

import { ForbiddenError, UnauthorizedError } from 'error-middleware/errors'
import asyncHandler from 'express-async-handler'
import { validateToken } from '../services/authorization'

export const requireUser = asyncHandler(async (req: any, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new UnauthorizedError('Missing "authorization" header')
  }

  const user = await validateToken(authorization)

  if (!user) {
    throw new ForbiddenError('Invalid token.')
  }

  req.user = user

  next()
})
