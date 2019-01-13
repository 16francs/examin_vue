import index from './index'

export default {
  get: {},
  post: {
    ...index.post
  },
  put: {},
  patch: {},
  destroy: {
    ...index.destroy
  }
}
