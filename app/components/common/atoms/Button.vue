<template>
  <button
    :class="btnColor, btnFullWidth, btnOutlined, btnRounded, btnSize"
    class="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: ''
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    // white, light, dark, black
    // primary, link, info, success, warning, danger
    btnColor() {
      return this.color === '' ? '' : `is-${this.color}`
    },
    btnFullWidth() {
      return this.fullWidth ? 'is-fullwidth' : ''
    },
    btnOutlined() {
      return this.outlined ? 'is-outlined' : ''
    },
    btnRounded() {
      return this.rounded ? 'is-rounded' : ''
    },
    // small, normal, medium, large
    btnSize() {
      return this.size === '' ? '' : `is-${this.size}`
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
</style>
