export default function({ $axios, store, redirect }) {
  $axios.onRequest(config => {
    // API の ホスト名
    config.baseURL = process.env.baseUrl + '/api'

    // 認証情報の取得
    const accessToken = store.getters['accessToken']
    if (accessToken) {
      const token = 'Bearer ' + accessToken
      config.headers.common['Authorization'] = token
    }

    return config
  })

  $axios.onError(error => {
    if (error.response.status === 401) {
      store.dispatch('logout')
      redirect('/')
    }
  })
}
