<template>
  <div class="form">
    <h4 class="form-title">テスト情報</h4>

    <the-text-field
      v-model="value.count"
      label="問題数"
    />
  </div>
</template>

<script>
import TheTextField from '~/components/common/atoms/TheTextField'

export default {
  components: {
    TheTextField
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {
          count
        }
      }
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
}
</style>
