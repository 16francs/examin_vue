import index from './index'
import problems from './problems'
import questions from './questions'

export default {
  get: {
    ...problems.get,
    ...questions.get
  },
  post: {
    ...index.post
  },
  put: {},
  patch: {},
  destroy: {}
}
