<template>
  <div class="hero-body">
    <problem-card-list/>
  </div>
</template>

<script>
import ProblemCardList from '~/components/students/organisms/ProblemCardList'
export default {
  components: { ProblemCardList },
  layout: 'students/default',
  // 問題集のデータを取得する
  async asyncData({ store }) {
    await store.dispatch('students/problems/getProblems', {
      accessToken: store.getters['accessToken']
    })
  }
}
</script>
