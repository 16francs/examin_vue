import responses from './responses'

// Error を返したい時だけ false にする
let isSafetyMode = true

export default {
  setSafetyMode: flag => (isSafetyMode = flag),

  $get: key => {
    if (isSafetyMode) {
      return Promise.resolve(responses['$get'][key])
    } else {
      return Promise.reject(Error('error'))
    }
  },

  $post: key => {
    if (isSafetyMode) {
      return Promise.resolve(responses['$post'][key])
    } else {
      return Promise.reject(Error('error'))
    }
  },

  $put: key => {
    if (isSafetyMode) {
      return Promise.resolve(responses['$put'][key])
    } else {
      return Promise.reject(Error('error'))
    }
  },

  $patch: key => {
    if (isSafetyMode) {
      return Promise.resolve(responses['$patch'][key])
    } else {
      return Promise.reject(Error('error'))
    }
  },

  $delete: key => {
    if (isSafetyMode) {
      return Promise.resolve(responses['$delete'][key])
    } else {
      return Promise.reject(Error('error'))
    }
  }
}
