import axios from 'axios'

const request = (options) => {
  return new Promise((resolve) => {
    axios(options)
      .then((response) => {
        return resolve(response)
      })
      .catch(({ response }) => {
        return resolve(response)
      })
  })
}

export { request }
