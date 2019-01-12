<template>
  <card
    :title="title"
    :content="content"
  >
    <card-footer-item
      text="学習する"
      @click="doLearn"
    />
    <card-footer-item
      text="テスト"
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
