<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'auth-teacher',

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
