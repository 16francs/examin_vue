import index from './index'
import studentsProblems from './students/problems'
import studentsQuestions from './students/questions'
import teachersProblems from './teachers/problems'
import teachersTeachers from './teachers/teachers'

export default {
  get: {
    ...studentsProblems.get,
    ...studentsQuestions.get,
    ...teachersProblems.get,
    ...teachersTeachers.get
  },
  post: {
    ...index.post,
    ...teachersProblems.post
  },
  put: {},
  patch: {},
  destroy: {}
}
