<template>
  <nav
    :class="navbarColor"
    class="navbar"
    role="navigation"
  >
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',

  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    // black, dark, light, white
    // primary, link, info, success, warning, danger
    navbarColor() {
      return this.color === '' ? '' : `is-${this.color}`
    }
  }
}
</script>
