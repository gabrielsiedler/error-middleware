import axios from 'axios'

const request = (options) => {
  return new Promise((resolve) => {
    try {
      axios(options)
        .then((response) => {
          return resolve(response)
        })
        .catch(({ response }) => {
          return resolve(response)
        })
    } catch (error) {
      return resolve({})
    }
  })
}

export { request }
