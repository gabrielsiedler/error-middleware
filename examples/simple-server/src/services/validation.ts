/* istanbul ignore file */

/* very dumb for testing pourpouses */
export const validate = (name: string, email: string) => {
  if (!name || name.length < 4) {
    return { name: 'Name should be at least 4 characters long' }
  }

  if (!email) {
    return { email: 'Invalid email' }
  }

  return null
}
