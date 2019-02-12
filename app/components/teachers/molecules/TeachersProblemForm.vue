<template>
  <div class="form">
    <h4 class="form-title">問題集情報</h4>

    <the-text-field
      v-model="value.title"
      label="タイトル"
      placeholder="英単語テスト"
    />

    <the-text-field
      v-model="value.content"
      label="概要"
      placeholder="日本語 → 英語"
      type="textarea"
    />

    <the-tag-input
      :ellipsis="true"
      :maxtags="4"
      v-model="value.tags"
      label="タグ"
    />
  </div>
</template>

<script>
import TheTagInput from '~/components/common/atoms/TheTagInput'
import TheTextField from '~/components/common/atoms/TheTextField'

export default {
  components: {
    TheTagInput,
    TheTextField
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {
          title: '',
          content: '',
          tags: []
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
