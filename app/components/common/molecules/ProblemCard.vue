<template>
  <card
    :title="title"
    :content="content"
  >
    <card-fotter-item
      text="学習する"
      @click="doLearn"
    />
    <card-fotter-item
      text="テスト"
      @click="doTest"
    />
  </card>
</template>

<script>
import Card from '~/components/common/atoms/Card'
import CardFotterItem from '~/components/common/atoms/CardFotterItem'
export default {
  name: 'ProblemCard',
  components: { CardFotterItem, Card },
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
