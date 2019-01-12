import responses from '~~/spec/helpers/responses/responses'

// Error を返したいときだけ false にする
let isSafetyMode = true

export default {
  setSafetyMode: flag => (isSafetyMode = flag),

  post: key =>
    isSafetyMode
      ? Promise.resolve({ data: responses['post'][key] })
      : Promise.reject(Error('some error'))
}
