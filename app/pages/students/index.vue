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
  async fetch({ store }) {
    await store.dispatch('students/problems/getProblems').catch(() => {
      console.log('status:', '401')
    })
  }
}
</script>
