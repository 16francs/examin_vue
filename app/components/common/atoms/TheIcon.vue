<template>
  <b-icon
    :class="[iconSpin]"
    :icon="icon"
    :size="iconSize"
    :type="iconColor"
    :pack="pack"
    data-test="icon"
  >
    <slot />
  </b-icon>
</template>

<script>
export default {
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
    },
    pack: {
      type: String,
      default: 'fas'
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
    },
    iconSpin() {
      return this.spin ? 'fa-spin' : ''
    }
  }
}
</script>
