<template>
  <span
    class="panel-block"
    data-test="panel-hard-block"
  >
    {{ index + 1 }}. {{ text }}
  </span>
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
  }
}
</script>
