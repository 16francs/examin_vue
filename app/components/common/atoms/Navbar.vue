<template>
  <nav
    :class="navbarColor"
    class="navbar"
    role="navigation"
  >
    <div class="navbar-brand">
      <span
        :class="navbarColor"
        class="navbar-item"
      >
        examin
      </span>

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
    </div>
    <slot />
  </nav>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    isActive: {
      type: Boolean,
      default: false
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
  },

  methods: {
    handleToggle() {
      this.$emit('toggle')
    }
  }
}
</script>
