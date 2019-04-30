const get = {
  '/teachers/students': {
    students: [
      {
        id: 1,
        name: '生徒',
        school: '16francs',
        login_id: 'test',
        role: 0
      }
    ]
  }
}

const post = {
  '/teachers/students': {
    id: 1,
    name: '生徒',
    school: '16francs',
    login_id: 'test',
    role: 0,
    created_at: '2019-01-01T00:00:00+0900',
    updated_at: '2019-01-01T00:00:00+0900'
  }
}

export default {
  get,
  post
}
