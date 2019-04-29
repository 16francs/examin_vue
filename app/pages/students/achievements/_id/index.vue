<template>
  <div class="hero-body">
    <students-answered-problem-card-list />
  </div>
</template>

<script>
import StudentsAnsweredProblemCardList from '~/components/students/organisms/StudentsAnsweredProblemCardList'

export default {
  components: { StudentsAnsweredProblemCardList },
  layout: 'students/default',
  async fetch({ store }) {
    await store
      .dispatch('students/achievements/getAnsweredProblemsByUser')
      .catch(() => {
        console.log('status:', '401')
      })
  }
}
</script>
