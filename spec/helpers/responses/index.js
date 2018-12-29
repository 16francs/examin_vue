const get = {
  '/api/auth': {
    user: {
      id: 1,
      login_id: 'testuser',
      name: 'テストユーザー',
      school: '16francs',
      role: 1
    },
    api_key: {
      access_token: 'aiueo12345',
      expires_at: '2018-01-01 00:00:00'
    }
  }
}

const post = {
  '/api/auth': {
    access_token: 'aiueo12345',
    user: {
      id: 1,
      role: 1
    }
  }
}

export default {
  $get: { get },
  $post: { post },
  $put: {},
  $patch: {},
  $delete: {}
}
