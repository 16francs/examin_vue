<template>
  <section class="container">
    <div>
      <input
        v-model="formData.login_id"
        placeholder="User ID"
        required
        autofocus>

      <input
        v-model="formData.password"
        placeholder="Password"
        type="password"
        required>

      <span v-if="error">
        ※IDとパスワードの組みが正しくありません
      </span>

      <Button @click="doLogin">
        <Icon color="info" />
      </Button>

    </div>

    <div>
      <logo/>
      <h1 class="title">
        examin_vue
      </h1>
      <h2 class="subtitle">
        My flawless Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from '~/components/common/atoms/Button'
import Icon from '~/components/common/atoms/Icon'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Button,
    Icon,
    Logo
  },

  asyncData({ store, redirect }) {
    const accessToken = store.getters['accessToken']
    const loginUser = store.getters['loginUser']
    // ログイン済みのユーザーの場合，アクターごとのホームにリダイレクト
    if (accessToken && loginUser) {
      switch (loginUser.role) {
        case 0:
          redirect('/students')
          break
        case 1:
        case 2:
          redirect('/teachers')
      }
    }
  },

  data() {
    return {
      formData: {
        login_id: '',
        password: ''
      },
      error: false
    }
  },

  computed: {
    ...mapGetters(['loginUser'])
  },

  methods: {
    async doLogin() {
      //ログインロジック
      await this.login({
        login_id: this.formData.login_id,
        password: this.formData.password
      })
        .then(() => {
          switch (this.loginUser.role) {
            case 0:
              this.$router.push('/students')
              break
            case 1:
            case 2:
              this.$router.push('/teachers')
              break
            default:
              throw new Error('不正なRole値')
          }
        })
        .catch(() => {
          this.error = true
        })
    },
    ...mapActions(['login'])
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
