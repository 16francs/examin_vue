<template>
  <span
    :class="iconColor, iconSize"
    class="icon"
  >
    <i
      :class="iconName"
      class="fas"
    >
      <slot />
    </i>
  </span>
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
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },

  computed: {
    // white, light, dark, black
    // primary, link, info, success, warning, danger
    iconColor: function() {
      return this.color === '' ? '' : `is-${this.color}`
    },
    iconName: function() {
      return this.icon === '' ? 'fa-spinner fa-pulse' : `fa-${this.icon}`
    },
    // small, medium, large
    iconSize: function() {
      return this.size === '' ? '' : `is-${this.size}`
    }
  }
}
</script>
