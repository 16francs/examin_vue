import problems from '~~/spec/helpers/modules/teachers/problems'
import questions from '~~/spec/helpers/modules/teachers/questions'
import students from '~~/spec/helpers/modules/teachers/students'
import teachers from '~~/spec/helpers/modules/teachers/teachers'

export default {
  namespaced: true,

  modules: {
    problems: problems,
    questions: questions,
    students: students,
    teachers: teachers
  }
}
