<template>
  <table
    :class="[bordered, fullwidth, hoverable, narrow, striped]"
    class="table"
  >
    <thead>
      <slot name="header" />
    </thead>

    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    isBordered: {
      type: Boolean,
      default: false
    },
    isFullwidth: {
      type: Boolean,
      default: true
    },
    isHoverable: {
      type: Boolean,
      default: true
    },
    isNarrow: {
      type: Boolean,
      default: false
    },
    isStriped: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    bordered() {
      return this.isBordered ? 'is-bordered' : ''
    },
    fullwidth() {
      return this.isFullwidth ? 'is-fullwidth' : 'aiueo'
    },
    hoverable() {
      return this.isHoverable ? 'is-hoverable' : ''
    },
    narrow() {
      return this.isNarrow ? 'is-narrow' : ''
    },
    striped() {
      return this.isStriped ? 'is-striped' : ''
    }
  }
}
</script>
