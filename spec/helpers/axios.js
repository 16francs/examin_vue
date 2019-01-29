import response from '~~/spec/helpers/responses/response'

// Error を返したいときだけ false にする
let isSafetyMode = true

export default {
  setSafetyMode: flag => (isSafetyMode = flag),

  get: key =>
    isSafetyMode
      ? Promise.resolve({ data: response['get'][key] })
      : Promise.reject(Error('some error')),

  post: key =>
    isSafetyMode
      ? Promise.resolve({ data: response['post'][key] })
      : Promise.reject(Error('some error')),

  put: key =>
    isSafetyMode
      ? Promise.resolve({ data: response['put'][key] })
      : Promise.reject(Error('some error')),

  patch: key =>
    isSafetyMode
      ? Promise.resolve({ data: response['patch'][key] })
      : Promise.reject(Error('some error')),

  delete: key =>
    isSafetyMode
      ? Promise.resolve({ data: response['destroy'][key] })
      : Promise.reject(Error('some error'))
}
