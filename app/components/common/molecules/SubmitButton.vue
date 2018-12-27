<template>
  <Button
    color="primary"
    @click="doSubmit"
  >
    <span>{{ text }}</span>
  </Button>
</template>

<script>
import Button from '~/components/common/atoms/Button'

export default {
  components: {
    Button
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
