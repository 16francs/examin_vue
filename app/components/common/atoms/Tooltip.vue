<template>
  <b-tooltip
    :active="active"
    :always="always"
    :animated="animated"
    :dashed="dashed"
    :label="label"
    :multilined="multilined"
    :position="tipPosition"
    :size="tipSize"
    :square="square"
    :type="tipType"
    data-test="tooltip"
  >
    <slot />
  </b-tooltip>
</template>

<script>
export default {
  name: 'Tooltip',

  props: {
    active: {
      type: Boolean,
      default: false
    },
    always: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    multilined: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    size: {
      type: String,
      default: 'medium'
    },
    square: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    // top, bottom, left, right
    tipPosition() {
      return `is-${this.position}`
    },
    // small, medium, large
    tipSize() {
      return `is-${this.size}`
    },
    // white, light, dark, black
    // primary, info, success, warning, danger
    tipType() {
      return `is-${this.type}`
    }
  }
}
</script>
