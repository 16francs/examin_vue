import responses from '~~/spec/helpers/responses/responses'

// Error を返したいときだけ false にする
let isSafetyMode = true

export default {
  setSafetyMode: flag => (isSafetyMode = flag),

  get: key =>
    isSafetyMode
      ? Promise.resolve({ data: responses['get'][key] })
      : Promise.reject(Error('some error')),

  post: key =>
    isSafetyMode
      ? Promise.resolve({ data: responses['post'][key] })
      : Promise.reject(Error('some error')),

  put: key =>
    isSafetyMode
      ? Promise.resolve({ data: responses['put'][key] })
      : Promise.reject(Error('some error')),

  patch: key =>
    isSafetyMode
      ? Promise.resolve({ data: responses['patch'][key] })
      : Promise.reject(Error('some error')),

  delete: key =>
    isSafetyMode
      ? Promise.resolve({ data: responses['destroy'][key] })
      : Promise.reject(Error('some error'))
}
