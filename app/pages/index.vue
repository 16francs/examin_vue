<template>
  <section>
    <div class="hero-body" >
      <h1 class="title">Login</h1>
      <the-alert
        :error="error"
        message="ユーザーIDまたはパスワードが違います"
        @close="close" />
      <the-login-form @login="doLogin" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheAlert from '~/components/common/atoms/TheAlert'
import TheLoginForm from '~/components/common/organisms/TheLoginForm'

export default {
  components: {
    TheAlert,
    TheLoginForm
  },

  async fetch({ store, redirect }) {
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
      this.error = false
    },
    ...mapActions(['login'])
  }
}
</script>

<style>
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
