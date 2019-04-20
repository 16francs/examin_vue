<template>
  <the-header
    :list="list"
    @logout="doLogout"
    @userEdit="doUserEdit"
  />
</template>

<script>
import TheHeader from '~/components/common/organisms/TheHeader'

export default {
  components: {
    TheHeader
  },

  data() {
    return {
      list: []
    }
  },

  methods: {
    doLogout() {
      this.$emit('logout')
    },
    doUserEdit() {
      this.$router.push('/students/setting')
    }
  }
}
</script>
