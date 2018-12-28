<template>
  <section>
    <div class="hero-body" >
      <div class="block">
        <h1 class="title">Login</h1>
      </div>
      <LoginForm
        @login="doLogin"
      />
      <br>
      <Alert
        :error="error"
        message="ユーザーIDまたはパスワードが違います"
        @close="close"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoginForm from '~/components/common/organisms/LoginForm'
import Icon from '~/components/common/atoms/Icon'
import Alert from '~/components/common/atoms/Alert'

export default {
  components: {
    Alert,
    Icon,
    LoginForm
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
      error: false
    }
  },

  computed: {
    ...mapGetters(['loginUser'])
  },

  methods: {
    async doLogin(formData) {
      console.log('login_id', formData.login_id)
      //ログインロジック
      await this.login({
        login_id: formData.login_id,
        password: formData.password
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
    close() {
      console.log('エラー消す')
      this.error = false
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
