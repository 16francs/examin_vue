<template>
  <b-upload
    :accept="accept"
    :disabled="loading"
    :loading="loading"
    v-model="file"
    data-test="upload"
    @input="handleUpload"
  >
    <slot />
  </b-upload>
</template>

<script>
export default {
  props: {
    accept: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      file: null
    }
  },

  methods: {
    handleUpload() {
      this.$emit('upload', {
        file: this.file
      })
      this.file = null
    }
  }
}
</script>
