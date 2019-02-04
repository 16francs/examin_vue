<template>
  <div>
    <students-header @logout="doLogout" />
    <nuxt/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import StudentsHeader from '~/components/students/organisms/StudentsHeader'

export default {
  components: {
    StudentsHeader
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
