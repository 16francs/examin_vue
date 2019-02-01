<template>
  <div class="hero-body">
    <students-problem-card-list/>
  </div>
</template>

<script>
import StudentsProblemCardList from '~/components/students/organisms/StudentsProblemCardList'
export default {
  components: { StudentsProblemCardList },
  layout: 'students/default',
  // 問題集のデータを取得する
  async asyncData({ store }) {
    await store.dispatch('students/problems/getProblems', {
      accessToken: store.getters['accessToken']
    })
  }
}
</script>
