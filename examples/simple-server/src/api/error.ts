/* istanbul ignore file */

import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  // an endpoint that simulates a pure error being thrown. It will be translated to InternalError and all its content will not be leaked.
  throw new Error('Internal error that should not be leaked.')
})

export { router as error }
