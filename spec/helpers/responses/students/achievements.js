const get = {
  '/students/problems_users': {
    problems_users: [
      {
        id: 1,
        problem_id: 1,
        created_at: '2018-11-11T09:00:00.000+09:00',
        updated_at: '2018-11-11T09:00:00.000+09:00'
      },
      {
        id: 2,
        problem_id: 1,
        created_at: '2019-02-20T00:31:14.000+09:00',
        updated_at: '2019-02-20T00:31:14.000+09:00'
      }
    ]
  },
  '/students/problems_users/1': {
    achievements: [
      {
        id: 3,
        question_id: 1,
        result: false,
        user_choice: 1,
        question: {
          id: 1,
          sentence: 'improve',
          correct: '向上させる'
        }
      },
      {
        id: 4,
        question_id: 2,
        result: false,
        user_choice: 1,
        question: {
          id: 2,
          sentence: 'raise',
          correct: '〜を上げる'
        }
      }
    ]
  }
}

export default {
  get
}
