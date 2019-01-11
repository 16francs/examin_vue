<template>
  <a
    class="panel-block"
    @click="select(index)"
  >
    {{ index + 1 }}. {{ text }}
  </a>
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
    select(index) {
      this.$emit('select', index)
    }
  }
}
</script>
