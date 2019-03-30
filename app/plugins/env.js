// nuxt-env を利用した環境変数のロード
export default ctx => {
  for (let i in ctx.app.$env) {
    if (!process.env[i]) {
      process.env[i] = ctx.app.$env[i]
    }
  }
}
