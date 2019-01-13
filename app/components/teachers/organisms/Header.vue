<template>
  <Header
    :list="list"
    @logout="doLogout"
    @userEdit="doUserEdit" />
</template>

<script>
import Header from '~/components/common/organisms/Header'

export default {
  components: {
    Header
  },

  data() {
    return {
      list: [
        { label: 'ホーム', link: '/teachers' },
        { label: '問題集一覧', link: '/teachers/problems' },
        { label: '講師一覧', link: '/teachers/teachers' },
        { label: '生徒一覧', link: '/teachers/students' }
      ]
    }
  },

  methods: {
    doLogout() {
      this.$emit('logout')
    },
    doUserEdit() {
      this.$router.push('/teachers/edit')
    }
  }
}
</script>
