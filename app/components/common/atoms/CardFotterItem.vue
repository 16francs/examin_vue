<template>
  <a
    class="card-footer-item"
    @click="onClick">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'CardFotterItem',
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
