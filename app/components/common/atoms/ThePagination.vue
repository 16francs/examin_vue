<template>
  <b-pagination
    :current.sync="current"
    :order="pgOrder"
    :per-page="perPage"
    :rounded="rounded"
    :simple="simple"
    :size="pgSize"
    :total="total"
    data-test="pagination"
  >
    <slot />
  </b-pagination>
</template>

<script>
export default {
  props: {
    order: {
      type: String,
      default: ''
    },
    perPage: {
      type: Number,
      default: 20
    },
    rounded: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    total: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      current: 1
    }
  },

  computed: {
    // centered, right
    pgOrder() {
      return this.order === '' ? '' : `is-${this.order}`
    },
    // small, medium, large
    pgSize() {
      return this.size === '' ? '' : `is-${this.size}`
    }
  }
}
</script>
