<template>
  <the-card
    :title="title"
    :content="content"
    data-test="card"
  >
    <the-card-footer-item
      data-test="footer-item-learn"
      @click="doLearn"
    >
      学習する
    </the-card-footer-item>
    <the-card-footer-item
      data-test="footer-item-test"
      @click="doTest"
    >
      テスト
    </the-card-footer-item>
    <the-card-footer-item
      @click="showAchievements"
    >
      成績
    </the-card-footer-item>
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
    },
    showAchievements() {
      this.$emit('showAchievements')
    }
  }
}
</script>
