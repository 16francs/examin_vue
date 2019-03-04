const get = {
  '/teachers/problems': {
    problems: [
      {
        id: 1,
        title: 'タイトル',
        content: '内容',
        teacher_name: '講師名',
        tags: ['タグ'],
        updated_at: '2019-01-01 00:00:00'
      }
    ]
  }
}

const post = {
  '/teachers/problems': {
    problem: {
      id: 1,
      title: 'タイトル',
      content: '内容',
      teacher_name: '講師名',
      tags: ['タグ'],
      updated_at: '2019-01-01 00:00:00'
    }
  }
}

export default {
  get,
  post
}
