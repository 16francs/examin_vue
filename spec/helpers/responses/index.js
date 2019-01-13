const post = {
  '/auth': {
    access_token: 'test-token',
    user: {
      id: 1,
      role: 1
    }
  }
}

const destroy = {
  '/auth': {}
}

export default {
  post,
  destroy
}
