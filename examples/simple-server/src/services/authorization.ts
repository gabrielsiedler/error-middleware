/* istanbul ignore file */

/* very dumb for testing pourpouses */
export const validateToken = (token: string) => {
  if (!token || token.length < 6) return false

  return true
}
