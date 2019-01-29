<template>
  <div class="section">
    講師向けページ
    <ProblemList />
  </div>
</template>

<script>
import ProblemList from '../../components/teachers/templates/ProblemList'
export default {
  layout: 'teachers/default',

  components: {
    ProblemList
  },

  async asyncData({ store }) {
    await store.dispatch('teachers/problems/getProblems')
  }
}
</script>
