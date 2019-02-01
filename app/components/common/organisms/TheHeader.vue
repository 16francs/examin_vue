<template>
  <the-navbar :color="color">
    <the-navbar-brand :color="color">
      <a
        :class="{ 'is-active': isActive }"
        class="navbar-burger burger"
        data-target="navMenu"
        data-test="navbar-burger"
        @click="handleToggle"
      >
        <span />
        <span />
        <span />
      </a>
    </the-navbar-brand>

    <the-navbar-menu
      :is-active="isActive"
      :list="list"
      @close="doClose"
      @logout="doLogout"
      @userEdit="doUserEdit" />
  </the-navbar>
</template>

<script>
import TheNavbar from '~/components/common/atoms/TheNavbar'
import TheNavbarBrand from '~/components/common/molecules/TheNavbarBrand'
import TheNavbarMenu from '~/components/common/molecules/TheNavbarMenu'

export default {
  components: {
    TheNavbar,
    TheNavbarBrand,
    TheNavbarMenu
  },

  props: {
    color: {
      type: String,
      default: 'primary'
    },
    list: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isActive: false
    }
  },

  methods: {
    doClose() {
      this.isActive = false
    },
    doLogout() {
      this.$emit('logout')
    },
    doUserEdit() {
      this.$emit('userEdit')
    },
    handleToggle() {
      this.isActive = !this.isActive
    }
  }
}
</script>
