<template>
  <div class="form">
    <h4 class="form-title">問題情報</h4>

    <the-text-field
      v-model="value.sentence"
      data-test="form-sentence"
      label="問題"
      placeholder="read"
    />

    <the-text-field
      v-model="value.correct"
      data-test="form-correct"
      label="答え"
      placeholder="読む"
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
          sentence: '',
          correct: ''
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
