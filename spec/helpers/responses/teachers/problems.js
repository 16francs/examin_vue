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
  }
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
  }
}

export default {
  get,
  post
}
