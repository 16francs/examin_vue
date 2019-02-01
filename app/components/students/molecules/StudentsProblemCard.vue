<template>
  <the-card
    :title="title"
    :content="content"
    data-test="card"
  >
    <the-card-footer-item
      text="学習する"
      data-test="footer-item-learn"
      @click="doLearn"
    />
    <the-card-footer-item
      text="テスト"
      data-test="footer-item-test"
      @click="doTest"
    />
  </the-card>
</template>

<script>
import TheCard from '~/components/common/atoms/TheCard'
import TheCardFooterItem from '~/components/common/atoms/TheCardFooterItem'
export default {
  components: { TheCardFooterItem, TheCard },
  props: {
    title: {
      type: String,
      default: 'タイトル'
    },
    content: {
      type: String,
      default: 'コンテンツ'
    }
  },
  methods: {
    doLearn() {
      this.$emit('doLearn')
    },
    doTest() {
      this.$emit('doTest')
    }
  }
}
</script>
