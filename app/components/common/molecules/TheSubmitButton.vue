<template>
  <the-button
    color="primary"
    @click="doSubmit"
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
    text: {
      type: String,
      default: '送信する'
    }
  },

  methods: {
    doSubmit() {
      this.$emit('submit')
    }
  }
}
</script>
