<template>
  <b-upload
    data-test="upload"
    @input="handleUpload"
  >
    <slot />
  </b-upload>
</template>

<script>
export default {
  methods: {
    handleUpload(value) {
      this.$emit('upload', { file: value })
    }
  }
}
</script>
