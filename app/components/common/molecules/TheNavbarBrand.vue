<template>
  <div
    class="navbar-brand"
    data-test="navbar-brand"
  >
    <span
      :class="navbarColor"
      class="navbar-item"
    >
      examin
    </span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TheNavbarBrand',

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
