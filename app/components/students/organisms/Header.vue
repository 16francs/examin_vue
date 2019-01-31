<template>
  <Header
    :list="list"
    @logout="doLogout"
    @userEdit="doUserEdit" />
</template>

<script>
import Header from '~/components/common/organisms/Header'

export default {
  name: 'Header',

  components: {
    Header
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
