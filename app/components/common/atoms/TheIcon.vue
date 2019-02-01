<template>
  <b-icon
    :class="{ 'fa-spin': spin }"
    :icon="icon"
    :size="iconSize"
    :type="iconColor"
    pack="fas"
    data-test="icon"
  >
    <slot />
  </b-icon>
</template>

<script>
export default {
  name: 'TheIcon',
  props: {
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'home'
    },
    size: {
      type: String,
      default: ''
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // white, light, dark, black
    // primary, link, info, success, warning, danger
    iconColor() {
      return this.color === '' ? '' : `is-${this.color}`
    },
    // small, medium, large
    iconSize() {
      return this.size === '' ? '' : `is-${this.size}`
    }
  }
}
</script>

<style scoped>
</style>
