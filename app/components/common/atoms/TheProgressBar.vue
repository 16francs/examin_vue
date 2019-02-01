<template>
  <progress
    :value="value"
    :max="maxValue"
    :class="barColor"
    class="progress"
    data-test="progress-bar"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    value: {
      type: Number,
      default: 30
    },
    maxValue: {
      type: Number,
      default: 100
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
