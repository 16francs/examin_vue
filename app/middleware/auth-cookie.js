import Cookies from 'universal-cookie'

export default ({ req, store }) => {
  if (process.browser) {
    const cookies = new Cookies()
    const auth = cookies.get('auth')
    if (auth) {
      store.commit('setAuth', auth)
    }
    return
  }

  const cookies = new Cookies(req.headers.cookie)
  const auth = cookies.get('auth')
  if (auth) {
    store.commit('setAuth', auth)
  }
}
