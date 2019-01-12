export default function({ $axios, store }) {
  $axios.onRequest(config => {
    config.baseURL = process.env.baseUrl + '/api'

    if (store.state.accessToken) {
      config.headers.common['access-token'] = store.getters['accessToken']
    }
    return config
  })
}
