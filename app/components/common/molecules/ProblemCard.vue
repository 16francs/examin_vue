<template>
  <card
    :title="title"
    :content="content"
    data-test="card"
  >
    <card-footer-item
      text="学習する"
      data-test="footer-item-learn"
      @click="doLearn"
    />
    <card-footer-item
      text="テスト"
      data-test="footer-item-test"
      @click="doTest"
    />
  </card>
</template>

<script>
import Card from '~/components/common/atoms/Card'
import CardFooterItem from '~/components/common/atoms/CardFooterItem'
export default {
  name: 'ProblemCard',
  components: { CardFooterItem, Card },
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
