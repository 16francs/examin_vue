const get = {
  '/users/me': {
    id: 1,
    login_id: '1og1n1d',
    name: '講師',
    school: '学校',
    role: 2,
    created_at: '2019-01-01T00:00:00+0900',
    updated_at: '2019-01-01T00:00:00+0900'
  }
}

const post = {
  '/auth': {
    token: 'aiueo12345',
    expired_at: '2019-01-01T00:00:00+0900',
    user: {
      id: 1,
      role: 2
    }
  }
}

const patch = {
  '/users/me': {
    id: 1,
    login_id: '1og1n1d',
    name: '講師',
    school: '学校',
    role: 2,
    created_at: '2019-01-01T00:00:00+0900',
    updated_at: '2019-01-01T00:00:00+0900'
  }
}

export default {
  get,
  post,
  patch
}
