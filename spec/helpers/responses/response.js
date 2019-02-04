import index from './index'
import studentsProblems from './students/problems'
import studentsQuestions from './students/questions'
import teachersProblems from './teachers/problems'

export default {
  get: {
    ...studentsProblems.get,
    ...studentsQuestions.get,
    ...teachersProblems.get
  },
  post: {
    ...index.post
  },
  put: {},
  patch: {},
  destroy: {}
}
