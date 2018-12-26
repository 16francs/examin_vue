<template>
  <button
    :class="`button${btnColor}${btnSize}${btnFullWidth}${btnOutline}`"
    @click="handleClick"
  >
    <slot />
  </button>
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
    fullWidth: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // white, light, dark, black
    // primary, link, info, success, warning, danger
    btnColor: function() {
      return this.color === '' ? '' : ` is-${this.color}`
    },
    // small, normal, medium, large
    btnSize: function() {
      return this.size === '' ? '' : ` is-${this.color}`
    },
    btnFullWidth: function() {
      return this.fullWidth ? ' is-fullwidth' : ''
    },
    btnOutline: function() {
      return this.outline ? ' is-outlined' : ''
    }
  },

  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
