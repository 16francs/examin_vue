<template>
  <div class="hero-body">
    <students-achievements-board/>
  </div>
</template>

<script>
import StudentsAchievementsBoard from '~/components/students/organisms/StudentsAchievementsBoard'

export default {
  components: { StudentsAchievementsBoard },
  layout: 'students/default',
  async asyncData({ store, route }) {
    const { id } = route.params
    await store
      .dispatch('students/achievements/getAchievements', {
        id: id
      })
      .catch(() => {
        console.log('status:', '401')
      })
  }
}
</script>
