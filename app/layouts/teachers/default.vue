<template>
  <div>
    <teachers-header @logout="doLogout" />
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TeachersHeader from '~/components/teachers/organisms/TeachersHeader'

export default {
  components: {
    TeachersHeader
  },

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
