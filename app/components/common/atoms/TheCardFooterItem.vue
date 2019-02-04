<template>
  <a
    class="card-footer-item"
    data-test="card-footer-item"
    @click="onClick"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'テスト'
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
