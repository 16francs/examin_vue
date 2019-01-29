export default function({ $axios, store }) {
  $axios.onRequest(config => {
    config.baseURL = process.env.baseUrl + '/api'

    const accessToken = store.getters['accessToken']
    if (accessToken) {
      const token = 'Bearer ' + accessToken
      config.headers.common['Authorization'] = token
    }
    return config
  })
}
