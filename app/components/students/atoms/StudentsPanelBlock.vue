<template>
  <a
    class="panel-block"
    data-test="panel-block"
    @click="select(index)"
  >
    {{ index + 1 }}. {{ text }}
  </a>
</template>

<script>
export default {
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
