<template>
  <the-button
    :full-width="fullWidth"
    class="right button-submit"
    color="primary"
    @click="handleSubmit"
  >
    <span>{{ text }}</span>
  </the-button>
</template>

<script>
import TheButton from '~/components/common/atoms/TheButton'

export default {
  components: {
    TheButton
  },

  props: {
    fullWidth: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '送信する'
    }
  },

  methods: {
    handleSubmit() {
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>
.button-submit {
  margin-top: 3vh;
}
</style>
