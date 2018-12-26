<template>
  <span :class="`icon${iconColor}${iconSize}`">
    <i :class="`fas ${iconName}`" />
  </span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },

  computed: {
    // white, light, dark, black
    // primary, link, info, success, warning, danger
    iconColor: function() {
      return this.color === '' ? '' : ` is-${this.color}`
    },
    // small, medium, large
    iconSize: function() {
      return this.size === '' ? '' : ` is-${this.color}`
    },
    iconName: function() {
      return this.icon === '' ? 'fa-spinner fa-pulse' : this.icon
    }
  }
}
</script>
