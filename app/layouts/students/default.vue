<template>
  <div>
    <Header @logout="doLogout" />
    <nuxt/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '~/components/students/organisms/Header'

export default {
  components: {
    Header
  },

  middleware: 'auth-student',

  methods: {
    doLogout() {
      this.logout()
        .catch(() => {
          console.log('Error: ', 'Logout Action')
        })
        .finally(() => {
          this.$router.push('/')
        })
    },
    ...mapActions(['logout'])
  }
}
</script>
