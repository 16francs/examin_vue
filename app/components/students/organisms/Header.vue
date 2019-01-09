<template>
  <navbar
    :list="list"
    color="primary">
    <NavMenu
      :list="list"
      @userEdit="doUserEdit"
      @logout="doLogout"/>
  </navbar>
</template>

<script>
import Navbar from '~/components/common/atoms/Navbar'
import NavMenu from '~/components/common/molecules/NavMenu'
export default {
  name: 'Header',
  components: { NavMenu, Navbar },
  data() {
    return {
      list: [
        { label: 'ホーム', link: '/students' },
        { label: 'テスト', link: '/students/test' }
      ]
    }
  },
  methods: {
    doUserEdit() {
      this.$router.push('/students/edit')
    },
    doLogout() {
      this.$emit('logout')
    }
  }
}
</script>

<style scoped>
</style>
