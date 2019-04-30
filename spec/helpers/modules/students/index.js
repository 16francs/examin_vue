import problems from '~~/spec/helpers/modules/students/problems'
import questions from '~~/spec/helpers/modules/students/questions'
import achievements from '~~/spec/helpers/modules/students/achievements'
import students from '~~/spec/helpers/modules/students/students'

export default {
  namespaced: true,

  modules: {
    problems: problems,
    questions: questions,
    achievements: achievements,
    students: students
  }
}
