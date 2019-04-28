const get = {
  '/teachers/teachers': {
    teachers: [
      {
        id: 1,
        name: '講師',
        school: '16francs',
        login_id: 'test',
        role: 1
      }
    ]
  }
}

const post = {
  '/teachers/teachers': {
    id: 1,
    name: '講師',
    school: '16francs',
    login_id: 'test',
    role: 1,
    created_at: '2019-01-01T00:00:00+0900',
    updated_at: '2019-01-01T00:00:00+0900'
  }
}

export default {
  get,
  post
}
