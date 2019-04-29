import index from './index'
import studentsProblems from './students/problems'
import studentsQuestions from './students/questions'
import studentsAchievements from './students/achievements'
import teachersProblems from './teachers/problems'
import teachersQuestions from './teachers/questions'
import teachersStudents from './teachers/students'
import teachersTeachers from './teachers/teachers'

export default {
  get: {
    ...index.get,
    ...studentsProblems.get,
    ...studentsQuestions.get,
    ...studentsAchievements.get,
    ...teachersProblems.get,
    ...teachersQuestions.get,
    ...teachersStudents.get,
    ...teachersTeachers.get
  },
  post: {
    ...index.post,
    ...teachersProblems.post,
    ...teachersQuestions.post,
    ...teachersStudents.post,
    ...teachersTeachers.post
  },
  put: {},
  patch: {
    ...index.patch
  },
  destroy: {}
}
