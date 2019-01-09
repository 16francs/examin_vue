<template>
  <nav
    :class="navbarColor"
    class="navbar">
    <div class="navbar-brand">
      <span
        :class="navbarColor"
        class="navbar-item">
        examin
      </span>

      <span
        aria-expanded="false"
        aria-label="menu"
        class="navbar-burger burger"
        role="button"
        data-target="navMenu"
      >
        <span
          v-for="item in list"
          :key="item.index"
          aria-hidden="true" />
      </span>
    </div>
    <slot/>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
  computed: {
    // black, dark, light, white
    // primary, link, info, success, warning, danger
    navbarColor() {
      return this.color === '' ? '' : `is-${this.color}`
    }
  }
}
</script>

<style scoped>
</style>
