<template>
  <b-icon
    :class="{ 'fa-spin': spin }"
    :icon="icon"
    :size="iconSize"
    :type="iconColor"
    pack="fas"
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
    }
  },

  computed: {
    // white, light, dark, black
    // primary, link, info, success, warning, danger
    iconColor: function() {
      return this.color === '' ? '' : `is-${this.color}`
    },
    // small, medium, large
    iconSize: function() {
      return this.size === '' ? '' : `is-${this.size}`
    }
  }
}
</script>
