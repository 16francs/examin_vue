<template>
  <a
    class="card-footer-item"
    data-test="card-footer-item"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
