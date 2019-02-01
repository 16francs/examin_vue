<template>
  <the-header
    :list="list"
    @logout="doLogout"
    @userEdit="doUserEdit" />
</template>

<script>
import TheHeader from '~/components/common/organisms/TheHeader'

export default {
  components: {
    TheHeader
  },

  data() {
    return {
      list: [
        { label: 'ホーム', link: '/students' },
        { label: 'テスト', link: '/students/test' }
      ]
    }
  },

  methods: {
    doLogout() {
      this.$emit('logout')
    },
    doUserEdit() {
      this.$router.push('/students/edit')
    }
  }
}
</script>
