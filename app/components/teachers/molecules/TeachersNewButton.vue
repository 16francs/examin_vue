<template>
  <the-button
    class="right"
    color="primary"
    @click="doNew"
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
      default: '作成する'
    }
  },

  methods: {
    doNew() {
      this.$emit('new')
    }
  }
}
</script>
