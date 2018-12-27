<template>
  <b-pagination
    :current.sync="current"
    :order="pgOrder"
    :per-page="perPage"
    :rounded="rounded"
    :simple="simple"
    :size="pgSize"
    :total="total"
  >
    <slot />
  </b-pagination>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    order: {
      type: String,
      default: ''
    },
    perPage: {
      type: Number,
      default: 0
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

  computed: {
    // centered, right
    pgOrder() {
      return this.order === '' ? '' : `is-${this.order}`
    },
    pgSize() {
      return this.size === '' ? '' : `is-${this.size}`
    }
  }
}
</script>
