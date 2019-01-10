<template>
  <table
    focusable
    @click="select"
  >
    {{ index }}. {{ text }}
  </table>
</template>

<script>
export default {
  name: 'Select',
  props: {
    index: {
      type: Number,
      default: 1
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    select() {
      this.$emit('select')
    }
  }
}
</script>
