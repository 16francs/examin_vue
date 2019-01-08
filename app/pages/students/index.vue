<template>
  <div class="hero-body">
    <p>学習したい問題集を選択してください．</p>
    <question-card-list/>
  </div>
</template>

<script>
import QuestionCardList from '~/components/students/organisms/QuestionCardList'
export default {
  components: { QuestionCardList },
  layout: 'students/default',
  // 問題集のデータを取得する
  async asyncData({ store }) {
    await store.dispatch('students/problems/getProblems', {
      accessToken: store.getters['accessToken']
    })
  }
}
</script>
