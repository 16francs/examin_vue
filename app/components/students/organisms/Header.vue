<template>
  <navbar
    :is-active="isActive"
    :list="list"
    color="primary"
    @toggle="changeActivate"
  >
    <NavMenu
      :is-active="isActive"
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
      isActive: false,
      list: [
        { label: 'ホーム', link: '/students' },
        { label: 'テスト', link: '/students/test' }
      ]
    }
  },
  methods: {
    changeActivate() {
      this.isActive = !this.isActive
    },
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
