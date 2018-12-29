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

      <a
        aria-expanded="false"
        aria-label="menu"
        class="navbar-burger burger"
        data-target="navMenu"
        role="button"
      >
        <span
          v-for="item in list"
          :key="item.index"
          aria-hidden="true" />
      </a>
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
