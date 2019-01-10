<template>
  <progress
    :value="value"
    :max="maxValue"
    :class="barColor"
    class="progress"
  />
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    value: {
      type: String,
      default: '30'
    },
    maxValue: {
      type: String,
      default: '100'
    }
  },
  computed: {
    // white, light, dark, black
    // primary, link, info, success, warning, danger
    barColor() {
      return this.color === '' ? '' : `is-${this.color}`
    }
  }
}
</script>
