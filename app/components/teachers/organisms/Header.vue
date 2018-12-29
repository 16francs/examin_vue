<template>
  <Navbar :list="list">
    <NavMenu
      :list="list"
      @userEdit="doUserEdit"
      @logout="doLogout" />
  </Navbar>
</template>

<script>
import Navbar from '~/components/common/atoms/Navbar'
import NavMenu from '~/components/common/molecules/NavMenu'

export default {
  components: {
    Navbar,
    NavMenu
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
    doUserEdit() {
      this.$router.push('/teachers/edit')
    },
    doLogout() {
      this.$emit('logout')
    }
  }
}
</script>
