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
    }
  },
  computed: {
    navbarColor() {
      return this.color === '' ? '' : `is-${this.color}`
    }
  }
}
</script>

<style scoped>
</style>
