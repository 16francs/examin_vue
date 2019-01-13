<template>
  <Navbar :color="color">
    <NavBrand :color="color">
      <a
        :class="{ 'is-active': isActive }"
        class="navbar-burger burger"
        data-target="navMenu"
        @click="handleToggle"
      >
        <span />
        <span />
        <span />
      </a>
    </NavBrand>
    <NavMenu
      :is-active="isActive"
      :list="list"
      @close="doClose"
      @logout="doLogout"
      @userEdit="doUserEdit" />
  </Navbar>
</template>

<script>
import Navbar from '~/components/common/atoms/Navbar'
import NavBrand from '~/components/common/molecules/NavBrand'
import NavMenu from '~/components/common/molecules/NavMenu'

export default {
  components: {
    Navbar,
    NavBrand,
    NavMenu
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
