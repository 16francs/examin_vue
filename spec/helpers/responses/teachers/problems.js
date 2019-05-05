const get = {
  '/teachers/problems': {
    problems: [
      {
        id: 1,
        title: 'タイトル',
        content: '内容',
        teacher_name: '講師名',
        tags: ['タグ'],
        updated_at: '2019-01-01T00:00:00+0900'
      }
    ]
  },

  '/teachers/problems/download': {},

  '/teachers/problems/1/download': {}
}

const post = {
  '/teachers/problems': {
    id: 1,
    title: 'タイトル',
    content: '内容',
    teacher_name: '講師名',
    tags: ['タグ'],
    created_at: '2019-01-01T00:00:00+0900',
    updated_at: '2019-01-01T00:00:00+0900'
  },

  '/teachers/problems/1/test': {}
}

export default {
  get,
  post
}
