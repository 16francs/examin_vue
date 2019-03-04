import problems from '~~/spec/helpers/modules/teachers/problems'
import questions from '~~/spec/helpers/modules/teachers/questions'
import teachers from '~~/spec/helpers/modules/teachers/teachers'

export default {
  namespaced: true,

  modules: {
    problems: problems,
    questions: questions,
    teachers: teachers
  }
}
